import { Dialog } from '@mui/material';
import { useAppDispatch, useAppSelector } from '@/lib/store/hooks';
import { closeDialog } from '@/lib/store/features/dialog/dialog-slice';

const MainDialog = () => {
  const dispatch = useAppDispatch();
  const dialog = useAppSelector(state => state.dialog);
  const { permanent, ...dialogOptions } = dialog.options;

  return (
    <Dialog
      {...dialogOptions}
      open={dialog.state}
      onClose={() => (!permanent ? dispatch(closeDialog()) : null)}
    />
  );
};

export { MainDialog };
