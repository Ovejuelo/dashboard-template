'use client';

import { Box, Button, CircularProgress, Paper, Typography, Link as MuiLink } from '@mui/material';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';

import Input from '@/components/form/input';
import { SignupFormSchema } from './definitions';
import { useAppDispatch } from '@/lib/store/hooks';
import { createUserSlice } from '@/lib/store/features/auth/auth-slice';
import { ISignupData } from '@/lib/store/features/auth/auth-types';
import { IUserSliceState } from '@/lib/store/features/user/user-types';
import { setUserData } from '@/lib/store/features/user/user-slice';

export function SignupForm() {
  const dispatch = useAppDispatch();
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<ISignupData>({
    defaultValues: { username: '', password: '', email: '' },
    resolver: zodResolver(SignupFormSchema)
  });

  const onSubmit: SubmitHandler<ISignupData> = async data => {
    const resp = await dispatch(createUserSlice(data));
    const userData: IUserSliceState = {
      access_token: resp.payload.access_token,
      data: {
        ...resp.payload.user.data
      }
    };
    dispatch(setUserData(userData));
  };

  return (
    <Box
      px={{ xs: 1, sm: 2 }}
      width={1}
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <Paper sx={{ padding: 4, width: { xs: '100%', md: 500 } }}>
        <Box mb={4}>
          <Typography align="center" variant="h3">
            Register
          </Typography>
        </Box>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="username"
            control={control}
            render={({ field }) => <Input {...field} label="User Name" errors={errors} />}
          />
          <Controller
            name="email"
            control={control}
            render={({ field }) => <Input {...field} label="Email" errors={errors} />}
          />
          <Controller
            name="password"
            control={control}
            render={({ field }) => (
              <Input {...field} label="Password" type="password" errors={errors} />
            )}
          />
          <Box width={1} display="flex" justifyContent="center" mt={2}>
            <Button type="submit" variant="contained" sx={{ width: 1 }} disabled={isSubmitting}>
              {!isSubmitting ? 'Submit' : <CircularProgress size={25} />}
            </Button>
          </Box>
        </form>
        <Box width={1} display="flex" justifyContent="center" mt={2}>
          <MuiLink component={Link} href="/login">
            Or login
          </MuiLink>
        </Box>
      </Paper>
    </Box>
  );
}

export default SignupForm;
