export const contactData = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  console.log("submitted",data)
  return null; 
};
