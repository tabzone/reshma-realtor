import HomePageContent from '../../components/HomePageContent';

export default async function CityPage({ params }) {
  const resolvedParams = await params;
  const city = resolvedParams?.city || '';

  return <HomePageContent city={city} />;
}
