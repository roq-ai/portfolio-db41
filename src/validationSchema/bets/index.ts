import * as yup from 'yup';

export const betValidationSchema = yup.object().shape({
  cryptocurrency: yup.string().required(),
  amount: yup.number().integer().required(),
  organization_id: yup.string().nullable(),
});
