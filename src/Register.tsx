import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useForm } from 'react-hook-form';

const FormSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  dateOfBirth: z.coerce.date(),
  sex: z.string(),
  maritalStatus: z.string(),
  mobilePhone: z.number(),
  homePhone: z.number(),
  workPhone: z.number(),
  email: z.string(),
  occupation: z.string(),
  employer: z.string(),
  insurance: z.string(),
  isAdmin: z.boolean(),
});

type FormInput = z.infer<typeof FormSchema>;

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInput>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      dateOfBirth: new Date(),
      sex: '',
      maritalStatus: '',
      mobilePhone: 868,
      homePhone: 868,
      workPhone: 868,
      email: '',
      occupation: '',
      employer: '',
      insurance:'',
      isAdmin: true,
    },
  });

  return (
    <section>
      <h2>New Patient Registration Form</h2>
      <p>Please complete all required fields.</p>

      <form onSubmit={handleSubmit((d) => console.log(d))}>
        <div>
          <label htmlFor="firstName">First Name</label>
          <input id="firstName" {...register('firstName')} />
          {errors?.firstName?.message && <p>{errors.firstName.message}</p>}
        </div>
        <div>
          <label htmlFor="lastName">Last Name</label>
          <input id="lastName" {...register('lastName')} />
          {errors?.lastName?.message && <p>{errors.lastName.message}</p>}
        </div>
        <div>
          <label htmlFor="dateOfBirth">Date of Birth</label>
          <input id="dateOfBirth" type="date" {...register('dateOfBirth')} />
          {errors?.dateOfBirth?.message && <p>{errors.dateOfBirth.message}</p>}
        </div>
        <div>
          <fieldset>
            <legend>Sex:</legend>
            <label htmlFor="male">Male</label>
            <input
              {...register('sex', { required: true })}
              type="radio"
              value="male"
            />
            <label htmlFor="female">Female</label>

            <input
              {...register('sex', { required: true })}
              type="radio"
              value=" female"
            />

            {errors?.sex?.message && <p>{errors.sex.message}</p>}
          </fieldset>
        </div>
        <div>
          <fieldset>
            <legend>Marital Status:</legend>
            <label htmlFor="single">Single</label>
            <input
              {...register('maritalStatus', { required: true })}
              type="radio"
              value="single"
            />
            <label htmlFor="married">Married</label>

            <input
              {...register('maritalStatus', { required: true })}
              type="radio"
              value=" married"
            />
            <label htmlFor="other">Other</label>

            <input
              {...register('maritalStatus', { required: true })}
              type="radio"
              value=" other"
            />

            {errors?.maritalStatus?.message && (
              <p>{errors.maritalStatus.message}</p>
            )}
          </fieldset>
        </div>
        Contact Info
        <div>
          <label htmlFor="mobilePhone">Mobile:</label>
          <input
            type="tel"
            placeholder="868-225-7176"
            {...register('mobilePhone', {
              required: true,
              minLength: 6,
              maxLength: 12,
            })}
          />
        </div>
        <div>
          <label htmlFor="homePhone">Home:</label>
          <input
            type="tel"
            placeholder="868-225-7176"
            {...register('homePhone', {
              required: true,
              minLength: 6,
              maxLength: 12,
            })}
          />
        </div>
        <div>
          <label htmlFor="workPhone">Work:</label>
          <input
            type="tel"
            placeholder="868-225-7176"
            {...register('workPhone', {
              required: true,
              minLength: 6,
              maxLength: 12,
            })}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            {...register('email')}
            placeholder="hello@smile.com"
          />
          {errors?.email?.message && <p>{errors.email.message}</p>}
        </div>
        <div>
          <label htmlFor="occupation">Occupation</label>
          <input
            id="occupation"
            {...register('occupation')}
            placeholder="Chef"
          />
          {/* {errors?.email?.message && <p>{errors.email.message}</p>} */}
        </div>
        <div>
          <label htmlFor="employer">Employer</label>
          <input
            id="employer"
            {...register('employer')}
            placeholder="Self"
          />
          {/* {errors?.email?.message && <p>{errors.email.message}</p>} */}
        </div>

        <div>
          <label htmlFor="insurance">Insurance Provider</label>
          <input
            id="insurance"
            {...register('insurance')}
            placeholder="Sagicor"
          />
          {/* {errors?.email?.message && <p>{errors.email.message}</p>} */}
        </div>


        <div>
          <label htmlFor="isAdmin">IsAdmin</label>
          <input id="isAdmin" type="checkbox" {...register('isAdmin')} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default Register;
