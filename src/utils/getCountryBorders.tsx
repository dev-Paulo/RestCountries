export default async function getCountryBorders(codes: string) {
  let borders: any = [];
  await fetch(`https://restcountries.com/v3.1/alpha?codes=${codes}`)
    .then((response: any) => {
      return response.json();
    })
    .then((result) => {
      borders = result;
    });

  return borders.map((element: any) => {
    return element.name.common;
  });
}
