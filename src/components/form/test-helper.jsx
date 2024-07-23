import { zodResolver } from "@hookform/resolvers/zod"
import { FormProvider, useForm } from "react-hook-form"
import { z } from "zod"

export const FormProviderWrapperComponent = ({
  children,
}) => {
  const schema = z.object({
    test: z.number().min(1),
  })

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
