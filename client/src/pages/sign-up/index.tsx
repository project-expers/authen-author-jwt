import {
  Button,
  Flex,
  Input,
  Password,
  Typography,
  usySpacing,
} from "@usy-ui/base";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

type FormFields = {
  username: string;
  password: string;
};

export const SignUp = () => {
  const navigate = useNavigate();

  const {
    formState: { errors },
    control,
    handleSubmit,
  } = useForm<FormFields>({
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit = (values: FormFields) => {
    console.log(values);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Flex
        direction="column"
        widthProps={{ maxWidth: "300px" }}
        marginProps={{ margin: "auto", marginTop: "25vh" }}
        gap={usySpacing.px20}
      >
        <Typography size="gigant-1">Sign Up</Typography>
        <Controller
          control={control}
          name="username"
          rules={{
            required: {
              value: true,
              message: "This field is required",
            },
          }}
          render={({ field }) => (
            <Input
              {...field}
              label="Username"
              hasError={Boolean(errors.username)}
              description={errors.username?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="password"
          rules={{
            required: {
              value: true,
              message: "This field is required",
            },
          }}
          render={({ field }) => (
            <Password
              {...field}
              label="Password"
              hasError={Boolean(errors.password)}
              description={errors.password?.message}
            />
          )}
        />
        <Button type="submit" variant="primary" width="100%">
          Sign Up
        </Button>
        <Button variant="invisible" onClick={() => navigate("/")}>
          Go to Sign In
        </Button>
      </Flex>
    </form>
  );
};
