import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import * as z from 'zod'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const signUpForm = z.object({
  restaurantName: z.string(),
  managerName: z.string(),
  phone: z.number(),
  email: z.string().email(),
})

type SignUpForm = z.infer<typeof signUpForm>

export function SignUp() {
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignUpForm>()

  async function handleSignUp(data: SignUpForm) {
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000))

      toast.success('Your establishment was successfully registered', {
        action: {
          label: 'Login',
          onClick: () => {
            navigate('/sign-in')
          },
        },
      })
    } catch {
      toast.error('Error registering Establishment.')
    }
  }

  return (
    <>
      <Helmet title="Register" />
      <div className="p-8">
        <Button variant="ghost" asChild className="absolute right-8 top-8">
          <Link to="/sign-in">Access Panel</Link>
        </Button>
        <div className="flex w-[350px] flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Create free account
            </h1>
            <p className="text-sm text-muted-foreground">
              Be a partner and start your sales!
            </p>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit(handleSignUp)}>
            <div className="space-y-2">
              <Label htmlFor="restaurantName">Name of the Establishment</Label>
              <Input
                id="restaurantName"
                type="text"
                {...register('restaurantName')}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="managerName">Your name</Label>
              <Input
                id="managerName"
                type="text"
                {...register('managerName')}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Your email</Label>
              <Input id="email" type="email" {...register('email')} required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Your phone number</Label>
              <Input id="phone" type="tel" {...register('phone')} required />
            </div>

            <Button className="w-full" type="submit" disabled={isSubmitting}>
              Register
            </Button>

            <p className="px-6 text-center text-sm leading-relaxed text-muted-foreground">
              By registering you agree to our{' '}
              <a href="" className="underline-offset-3 underline">
                Terms of Service
              </a>
              ,{' '}
              <a href="" className="underline-offset-3 underline">
                Privacy Policy{' '}
              </a>
              and{' '}
              <a href="" className="underline-offset-3 underline">
                Acceptable Use Policy
              </a>
            </p>
          </form>
        </div>
      </div>
    </>
  )
}
