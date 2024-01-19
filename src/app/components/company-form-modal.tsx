'use client';

import CompanyForm from '@/app/components/company-form';
import Modal, { ModalProps } from '@/app/components/modal';
import { CompanyFormProps } from './company-form';

export interface CompanyFormModalProps extends ModalProps {
  onSubmit: CompanyFormProps['onSubmit'];
}

export default function CompanyFormModal({
  onSubmit,
  ...rest
}: CompanyFormModalProps) {
  return (
    <Modal {...rest}>
      <CompanyForm onSubmit={onSubmit} />
    </Modal>
  );
}
