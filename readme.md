# About this project
This API is inspired by [restcountries.com](https://restcountries.com) and provides info about finnish municipalities.

Data about municipalities is collected from [wikipedia](https://fi.wikipedia.org/wiki/Luettelo_Suomen_kunnista).

# 🇫🇮 REST Kunnat
You can access API through [https://restkunnat.herokuapp.com/all](https://restkunnat.herokuapp.com/all)

# API endpoints
Below are described the REST endpoints available that you can use to search for countries

## All
``` html
https://restkunnat.herokuapp.com/all
```


## Name
``` html
https://restkunnat.herokuapp.com/name/{municipalityName}
```

``` html
https://restkunnat.herokuapp.com/name/oulu
```

## Administrative Center
``` html
https://restkunnat.herokuapp.com/administrative-center/{administrativeCenter}
```

``` html
https://restkunnat.herokuapp.com/administrative-center/oulun keskustaajama
```

## Language
``` html
https://restkunnat.herokuapp.com/language/{language}
```

``` html
https://restkunnat.herokuapp.com/language/pohjoissaame
```

## Municipality Number
``` html
https://restkunnat.herokuapp.com/municipality-number/{municipalityNumber}
```

``` html
https://restkunnat.herokuapp.com/municipality-number/020
```

## Province
``` html
https://restkunnat.herokuapp.com/province/{province}
```

``` html
https://restkunnat.herokuapp.com/province/kymenlaakso
```

## Region
``` html
https://restkunnat.herokuapp.com/region/{region}
```

``` html
https://restkunnat.herokuapp.com/region/Etelä-Pirkanmaan seutukunta
```

## Response Example

``` html
https://restkunnat.herokuapp.com/name/oulu
```

``` json
{
  "administrativeCenter": "Oulun keskustaajama",
  "area": 3052.77,
  "coatOfArms": "http://upload.wikimedia.org/wikipedia/commons/3/36/Oulu.vaakuna.svg",
  "density": 70.5,
  "landArea": 2972.45,
  "languages": [
    "suomi"
  ],
  "maps": {
    "googleMaps": "https://www.google.com/maps/place/Oulu"
  },
  "municipalityNumber": "564",
  "name": "Oulu",
  "population": 209648,
  "province": "Pohjois-Pohjanmaa",
  "region": "Oulun seutukunta"
}
```

## Filter Response
You can filter the output of your request to include only the specified fields.

``` html
https://restkunnat.herokuapp.com/{endpoint}?fields={field},{field},{field}
```
``` html
https://restkunnat.herokuapp.com/all?fields=name,area,population
```

## 📜 License
This project uses MIT license