import { zodResolver } from "@hookform/resolvers/zod"
import { FormProvider, useForm } from "react-hook-form"

export const FormProviderWrapperComponent = ({
  schema,
  children,
}) => {
  const methods = useForm({
    resolver: zodResolver(schema),
  })
  
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit((data) => console.log('データ', data))}>
        {children}
        <input type="submit" />
      </form>
    </FormProvider>
  )
}
