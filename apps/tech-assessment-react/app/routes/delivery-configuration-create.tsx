import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router';
import type { BreadcrumbItem, SidebarItem } from '@atpco/atp-web';
import { AlertColor, AlertAppearance, AlertRole, DropdownSelectionMode } from '@atpco/atp-web';

const SIDEBAR_ITEMS: SidebarItem[] = [
  { name: 'Collections', id: 'collections', route: 'collections', children: [] },
  {
    name: 'Manage',
    id: 'manage',
    route: 'manage',
    children: [
      { name: 'Input configurations', id: 'input-configurations', route: 'input-configurations' },
      {
        name: 'Output configurations',
        id: 'output-configurations',
        route: 'output-configurations',
      },
      {
        name: 'Packaging configurations',
        id: 'packaging-configurations',
        route: 'packaging-configurations',
      },
      {
        name: 'Delivery configurations',
        id: 'delivery-configurations',
        route: 'delivery-configurations',
      },
    ],
  },
];

const BREADCRUMB_ITEMS: BreadcrumbItem[] = [
  { name: 'Manage', href: '/manage' },
  { name: 'Delivery configurations', href: '/delivery-configurations' },
];

type DeliveryLocation = 'email' | 'gcloud' | 'azure' | 's3';

interface FormState {
  deliveryName: string;
  customer: string;
  deliveryFrequency: string;
  last_file_suffix: string;
  deliveryLocation: DeliveryLocation;
  recipients: string;
  subject: string;
  body: string;
  bucket: string;
  credentialsFile: string;
  upload_option: string;
  deliveryFileName: string;
  combineFiles: boolean;
  maximumFileSize: string;
  compression: boolean;
  specificDirectory: boolean;
  virusScan: boolean;
  encrypt: boolean;
}

// React 19 maps on<EventName> props to addEventListener using the event's exact casing.
// The JSX types only cover properties/attributes, not custom event handlers, so we type
// them locally and spread onto the element to avoid TypeScript errors.
type SidebarEventProps = { onnavigationEventOutput?: (e: CustomEvent<{ id?: string }>) => void };
type CheckboxEventProps = { onclickEventOutput?: (e: CustomEvent) => void };
type DropdownEventProps = { onitemSelectedOutput?: (e: CustomEvent<string[]>) => void };
// role is a standard HTMLElement prop so it's excluded from WebComponentProps<Alert>.
// Including it in the spread object bypasses the excess-property check (spreads use
// assignability checking, not excess-property checking).
type AlertEventProps = { oncloseEventOutput?: (e: CustomEvent) => void; role?: string };

const LOCATION_OPTIONS = [
  { name: 'Email', id: 'email' },
  { name: 'Google Cloud', id: 'gcloud' },
  { name: 'Azure', id: 'azure' },
  { name: 'S3', id: 's3' },
];

const INITIAL_FORM: FormState = {
  deliveryName: '',
  customer: '',
  deliveryFrequency: '',
  last_file_suffix: '',
  deliveryLocation: 's3',
  recipients: '',
  subject: '',
  body: '',
  bucket: '',
  credentialsFile: '',
  upload_option: '',
  deliveryFileName: '',
  combineFiles: false,
  maximumFileSize: '',
  compression: false,
  specificDirectory: false,
  virusScan: false,
  encrypt: false,
};

export default function DeliveryConfigurationCreateRoute() {
  const [activeSidebarId, setActiveSidebarId] = useState('delivery-configurations');
  const [form, setForm] = useState<FormState>(INITIAL_FORM);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    fetch('/api/three-v-deliveries')
      .then((res) => res.json())
      .then(({ data }) => {
        const sorted = [...(data ?? [])].sort(
          (a, b) => new Date(a.acceptedAt).getTime() - new Date(b.acceptedAt).getTime(),
        );
        console.log('Existing delivery configurations (oldest → newest):', sorted);
      });
  }, []);

  const sidebarEventProps: SidebarEventProps = {
    onnavigationEventOutput: (event) => {
      const id = event.detail?.id;
      if (id) setActiveSidebarId(id);
    },
  };

  const fieldChange =
    (field: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [field]: e.target.value }));

  const checkboxToggle = (field: keyof FormState): CheckboxEventProps => ({
    onclickEventOutput: () => setForm((f) => ({ ...f, [field]: !f[field] })),
  });

  const locationDropdownEvents: DropdownEventProps = {
    onitemSelectedOutput: (e) => {
      const id = e.detail?.[0] as DeliveryLocation;
      if (id) setForm((f) => ({ ...f, deliveryLocation: id }));
    },
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const payload = {
      deliveryName: form.deliveryName,
      customer: form.customer,
      deliveryLocation: form.deliveryLocation,
      deliveryFileName: form.deliveryFileName,
      combineFiles: form.combineFiles,
      specificDirectory: form.specificDirectory,
      virusScan: form.virusScan,
      encrypt: form.encrypt,
      ...(form.deliveryFrequency && { deliveryFrequency: form.deliveryFrequency }),
      ...(form.last_file_suffix && { last_file_suffix: form.last_file_suffix }),
      ...(form.deliveryLocation === 'email' && {
        recipients: form.recipients,
        subject: form.subject,
        body: form.body,
      }),
      ...(form.deliveryLocation !== 'email' && {
        bucket: form.bucket,
        credentialsFile: form.credentialsFile,
        upload_option: form.upload_option,
      }),
      ...(form.combineFiles && {
        maximumFileSize: Number(form.maximumFileSize),
        compression: form.compression,
      }),
    };

    // Forward ?error=true from the page URL to the POST URL — the server matches
    // "/api/three-v-deliveries?error=true" exactly to return a 500.
    const errorSuffix = searchParams.get('error') === 'true' ? '?error=true' : '';
    const res = await fetch(`/api/three-v-deliveries${errorSuffix}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    setSubmitStatus(res.ok ? 'success' : 'error');
    if (res.ok) setForm(INITIAL_FORM);
    setIsSubmitting(false);
  };

  const successAlertProps: AlertEventProps = {
    oncloseEventOutput: () => setSubmitStatus('idle'),
    role: AlertRole.STATUS,
  };
  const errorAlertProps: AlertEventProps = {
    oncloseEventOutput: () => setSubmitStatus('idle'),
    role: AlertRole.ALERT,
  };

  return (
    <div className="atp-layout">
      <atp-header
        id="delivery-config-header"
        class="layout-header"
        label="PriceEye"
        org="ATPCO"
      ></atp-header>
      <div className="layout-sidebar">
        <atp-sidebar
          id="delivery-config-sidebar"
          items={SIDEBAR_ITEMS}
          activeId={activeSidebarId}
          outputNavigationEvents
          {...sidebarEventProps}
        ></atp-sidebar>
      </div>
      <div className="scroll-wrapper">
        <div className="page-content">
          <atp-breadcrumbs
            id="delivery-config-breadcrumbs"
            itemsList={BREADCRUMB_ITEMS}
          ></atp-breadcrumbs>
          <h1 className="view-title">Create delivery configuration</h1>

          {submitStatus === 'success' && (
            <atp-alert
              label="Delivery configuration created successfully."
              icon="circle-check"
              color={AlertColor.INFO}
              appearance={AlertAppearance.PAGE}
              {...successAlertProps}
            />
          )}
          {submitStatus === 'error' && (
            <atp-alert
              label="An error occurred. Please try again."
              icon="triangle-exclamation"
              color={AlertColor.DANGER}
              appearance={AlertAppearance.PAGE}
              {...errorAlertProps}
            />
          )}

          <form onSubmit={handleSubmit}>
            <atp-input-field required class="form-field">
              <label slot="label" htmlFor="deliveryName">
                Delivery configuration name
              </label>
              <input
                id="deliveryName"
                type="text"
                required
                value={form.deliveryName}
                onChange={fieldChange('deliveryName')}
              />
            </atp-input-field>

            <atp-input-field required class="form-field">
              <label slot="label" htmlFor="customer">
                Customer
              </label>
              <input
                id="customer"
                type="text"
                required
                value={form.customer}
                onChange={fieldChange('customer')}
              />
            </atp-input-field>

            <atp-input-field class="form-field">
              <label slot="label" htmlFor="deliveryFrequency">
                Delivery frequency in cron format
              </label>
              <input
                id="deliveryFrequency"
                type="text"
                placeholder="20 * * * *"
                value={form.deliveryFrequency}
                onChange={fieldChange('deliveryFrequency')}
              />
              <span slot="help-text">
                Use{' '}
                <a href="https://crontab.guru" target="_blank" rel="noreferrer">
                  crontab.guru
                </a>{' '}
                to build a cron expression.
              </span>
            </atp-input-field>

            <atp-input-field class="form-field">
              <label slot="label" htmlFor="lastFileSuffix">
                Last file suffix
              </label>
              <input
                id="lastFileSuffix"
                type="text"
                placeholder="ex. -final"
                value={form.last_file_suffix}
                onChange={fieldChange('last_file_suffix')}
              />
              <span slot="help-text">Input can only contain letters, numbers, -, and _</span>
            </atp-input-field>

            <atp-input-field required class="form-field">
              <label slot="label" htmlFor="deliveryLocation">
                Delivery location
              </label>
              <input
                id="deliveryLocation"
                type="text"
                readOnly
                value={LOCATION_OPTIONS.find((o) => o.id === form.deliveryLocation)?.name ?? ''}
              />
              <atp-dropdown
                slot="dropdown"
                itemsList={LOCATION_OPTIONS}
                activeIds={[form.deliveryLocation]}
                selectionMode={DropdownSelectionMode.SINGLE}
                showCheckmarks={true}
                {...locationDropdownEvents}
              />
            </atp-input-field>

            {form.deliveryLocation === 'email' && (
              <div className="conditional-fields">
                <atp-input-field required class="form-field">
                  <label slot="label" htmlFor="recipients">
                    Recipient email
                  </label>
                  <input
                    id="recipients"
                    type="text"
                    required
                    value={form.recipients}
                    onChange={fieldChange('recipients')}
                  />
                </atp-input-field>

                <atp-input-field required class="form-field">
                  <label slot="label" htmlFor="subject">
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    required
                    value={form.subject}
                    onChange={fieldChange('subject')}
                  />
                </atp-input-field>

                <atp-input-field required textarea class="form-field">
                  <label slot="label" htmlFor="body">
                    Body
                  </label>
                  <textarea
                    id="body"
                    required
                    value={form.body}
                    onChange={fieldChange('body')}
                  />
                </atp-input-field>
              </div>
            )}

            {form.deliveryLocation !== 'email' && (
              <div className="conditional-fields">
                <atp-input-field required class="form-field">
                  <label slot="label" htmlFor="bucket">
                    Bucket
                  </label>
                  <input
                    id="bucket"
                    type="text"
                    required
                    value={form.bucket}
                    onChange={fieldChange('bucket')}
                  />
                </atp-input-field>

                <atp-input-field required class="form-field">
                  <label slot="label" htmlFor="credentialsFile">
                    Credentials file
                  </label>
                  <input
                    id="credentialsFile"
                    type="text"
                    required
                    value={form.credentialsFile}
                    onChange={fieldChange('credentialsFile')}
                  />
                </atp-input-field>

                <atp-input-field required class="form-field">
                  <label slot="label" htmlFor="uploadOption">
                    Upload option
                  </label>
                  <input
                    id="uploadOption"
                    type="text"
                    required
                    value={form.upload_option}
                    onChange={fieldChange('upload_option')}
                  />
                </atp-input-field>
              </div>
            )}

            <atp-input-field required class="form-field">
              <label slot="label" htmlFor="deliveryFileName">
                Delivery file name
              </label>
              <input
                id="deliveryFileName"
                type="text"
                required
                value={form.deliveryFileName}
                onChange={fieldChange('deliveryFileName')}
              />
              <span slot="help-text">Input can only contain letters, numbers, -, and _</span>
            </atp-input-field>

            <div className="form-checkboxes">
              <atp-checkbox
                label="Combine files"
                checked={form.combineFiles}
                {...checkboxToggle('combineFiles')}
              />
            </div>

            {form.combineFiles && (
              <div className="conditional-fields">
                <atp-input-field required class="form-field">
                  <label slot="label" htmlFor="maximumFileSize">
                    Maximum file size (MB)
                  </label>
                  <input
                    id="maximumFileSize"
                    type="number"
                    required
                    value={form.maximumFileSize}
                    onChange={fieldChange('maximumFileSize')}
                  />
                </atp-input-field>

                <atp-checkbox
                  label="Check file size post compression"
                  checked={form.compression}
                  {...checkboxToggle('compression')}
                />
              </div>
            )}

            <div className="form-checkboxes">
              <atp-checkbox
                label="Place files into specific delivery directory"
                checked={form.specificDirectory}
                {...checkboxToggle('specificDirectory')}
              />
              <atp-checkbox
                label="Virus scan"
                checked={form.virusScan}
                {...checkboxToggle('virusScan')}
              />
              <atp-checkbox
                label="Use encryption"
                checked={form.encrypt}
                {...checkboxToggle('encrypt')}
              />
            </div>

            <div className="form-actions">
              <atp-button label="Create" type="submit" isLoading={isSubmitting} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
