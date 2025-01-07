type Props = {
  firstName: string;
  lastName: string;
};
function WelcomeMessage({ firstName, lastName }: Props) {
  return (
    <p className="text-charcoal text-xl font-normal font-['Basis Grotesque Pro'] leading-normal m-2">
      Welcome back, <br />
      {firstName} {lastName}
    </p>
  );
}

export default WelcomeMessage;
