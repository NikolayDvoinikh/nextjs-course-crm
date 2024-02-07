import AddCompanyButton from './components/add-company-button';
import ErrButton from './components/err-button';

export default function Home() {
  return (
    <main>
      <h1 className="text-2xl">Home Page</h1>
      <AddCompanyButton />
      <ErrButton />
    </main>
  );
}
