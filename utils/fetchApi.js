import axios from "axios"

export const baseUrl = "https://bayut.p.rapidapi.com"

const options = {
    method: "GET",
    url: "https://bayut.p.rapidapi.com/properties/list",
    params: {
        locationExternalIDs: "5002,6020",
        purpose: "for-rent",
        hitsPerPage: "25",
        page: "0",
        lang: "en",
        sort: "city-level-score",
        rentFrequency: "monthly",
        categoryExternalID: "4",
    },
    headers: {
        "X-RapidAPI-Key": "15615d0b9fmsha8ff7b6c1002ae4p13e2adjsne01867979bb5",
        "X-RapidAPI-Host": "bayut.p.rapidapi.com",
    },
}

export async function fetchApi(url) {
    const { data } = await axios.get(url, options)

    return data
}
