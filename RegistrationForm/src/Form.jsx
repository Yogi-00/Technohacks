/*-------------------------------------------------------------------
|  🐼 React FC Form
|
|  🐯 Purpose: RENDERS FORM CONTEXT AND INPUTS
|
|  🐸 Returns:  JSX
*-------------------------------------------------------------------*/

import { Input } from './components'
import { FormProvider, useForm } from 'react-hook-form'
import {
  name_validation,
  desc_validation,
  email_validation,
  num_validation,
  password_validation,
} from './utils/inputValidations'
import { useState } from 'react'
import { GrMail } from 'react-icons/gr'
import { BsFillCheckSquareFill } from 'react-icons/bs'

export const Form = () => {
  const methods = useForm()
  const [success, setSuccess] = useState(false)

  const onSubmit = methods.handleSubmit(data => {
    console.log(data)
    methods.reset()
    setSuccess(true)
  })

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={e => e.preventDefault()}
        noValidate
        autoComplete="off"
        className="container dark:bg-gray-800" // Apply dark background to the container
      >
        <div className="grid gap-5 md:grid-cols-2">
          <Input {...name_validation} className="dark:text-white" />{' '}
          {/* Apply white text color in dark mode */}
          <Input {...email_validation} className="dark:text-white" />{' '}
          {/* Apply white text color in dark mode */}
          <Input {...num_validation} className="dark:text-white" />{' '}
          {/* Apply white text color in dark mode */}
          <Input {...password_validation} className="dark:text-white" />{' '}
          {/* Apply white text color in dark mode */}
          <Input
            {...desc_validation}
            className="md:col-span-2 dark:text-white"
          />{' '}
          {/* Apply white text color in dark mode */}
        </div>
        <div className="mt-5">
          {success && (
            <p className="font-semibold text-green-500 mb-5 flex items-center gap-1">
              <BsFillCheckSquareFill /> Form has been submitted successfully
            </p>
          )}
          <button
            onClick={onSubmit}
            className="p-5 rounded-md bg-blue-600 font-semibold text-white flex items-center gap-1 hover:bg-blue-800 dark:bg-blue-900" // Apply dark mode background color
          >
            <GrMail />
            Submit Form
          </button>
        </div>
      </form>
    </FormProvider>
  )
}