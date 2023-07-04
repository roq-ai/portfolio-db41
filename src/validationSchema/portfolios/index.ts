import * as yup from 'yup';

export const portfolioValidationSchema = yup.object().shape({
  cryptocurrency: yup.string().required(),
  quantity: yup.number().integer().required(),
  organization_id: yup.string().nullable(),
});
