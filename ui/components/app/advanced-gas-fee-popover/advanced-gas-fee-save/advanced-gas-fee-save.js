import React from 'react';

import { PRIORITY_LEVELS } from '../../../../../shared/constants/gas';
import { useTransactionModalContext } from '../../../../contexts/transaction-modal';
import { useGasFeeContext } from '../../../../contexts/gasFee';
import Button from '../../../ui/button';
import I18nValue from '../../../ui/i18n-value';

import { useAdvanceGasFeePopoverContext } from '../context';

const AdvancedGasFeeSaveButton = () => {
  const { closeModal, currentModal } = useTransactionModalContext();
  const { updateTransaction } = useGasFeeContext();
  const {
    maxFeePerGas,
    maxPriorityFeePerGas,
  } = useAdvanceGasFeePopoverContext();
  const saveDisabled =
    maxPriorityFeePerGas === undefined || maxFeePerGas === undefined;

  if (currentModal !== 'advancedGasFee') return null;

  return (
    <Button
      type="primary"
      disabled={saveDisabled}
      onClick={() => {
        updateTransaction(
          PRIORITY_LEVELS.CUSTOM,
          maxFeePerGas,
          maxPriorityFeePerGas,
        );
        closeModal('advancedGasFee');
      }}
    >
      <I18nValue messageKey="save" />
    </Button>
  );
};

export default AdvancedGasFeeSaveButton;
