
export default async function getCountryByName(countryName: string){
    let country: any = []
    await fetch(`https://restcountries.com/v3.1/name/${encodeURI(countryName)}?fullText=true`).then(
        (response:any)=>{
            return response.json()
        }
    ).then((result) => {
        country = result
})
    return country[0]
}