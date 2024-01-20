import { ReactNode, useEffect } from "react";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";
type MWFormProps = {
  onSubmit: SubmitHandler<FieldValues>;
  children: ReactNode;
  isSuccess: boolean;
};

const MWForm = ({ onSubmit, children, isSuccess }: MWFormProps) => {
  const method = useForm();
  useEffect(() => {
    if (isSuccess) {
      method.reset();
    }
  }, [isSuccess, method]);
  return (
    <FormProvider {...method}>
      <form onSubmit={method.handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
};

export default MWForm;
