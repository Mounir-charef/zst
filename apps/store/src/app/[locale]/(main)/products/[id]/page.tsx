const ProductDetailsPage = async ({
  params: { id },
}: {
  params: {
    id: string;
  };
}) => {
  return <div>details {id}</div>;
};

export default ProductDetailsPage;
