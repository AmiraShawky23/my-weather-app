import React from "react";

const temp = () => {
  const x = [
    {
      cod: "200",
      message: 0,
      cnt: 40,
      list: [
        {
          dt: 1593810000,
          main: {
            temp: 16.55,
            feels_like: 11.46,
            temp_min: 15.76,
            temp_max: 16.55,
            pressure: 1014,
            sea_level: 1015,
            grnd_level: 1012,
            humidity: 65,
            temp_kf: 0.79,
          },
          weather: [
            { id: 500, main: "Rain", description: "light rain", icon: "10n" },
          ],
          clouds: { all: 87 },
          wind: { speed: 7.31, deg: 228 },
          rain: { "3h": 0.34 },
          sys: { pod: "n" },
          dt_txt: "2020-07-03 21:00:00",
        },
        {
          dt: 1593820800,
          main: {
            temp: 16.08,
            feels_like: 11.95,
            temp_min: 15.74,
            temp_max: 16.08,
            pressure: 1014,
            sea_level: 1014,
            grnd_level: 1011,
            humidity: 77,
            temp_kf: 0.34,
          },
          weather: [
            {
              id: 804,
              main: "Clouds",
              description: "overcast clouds",
              icon: "04n",
            },
          ],
          clouds: { all: 95 },
          wind: { speed: 6.8, deg: 226 },
          sys: { pod: "n" },
          dt_txt: "2020-07-04 00:00:00",
        },
        {
          dt: 1593831600,
          main: {
            temp: 16.14,
            feels_like: 12.67,
            temp_min: 16.06,
            temp_max: 16.14,
            pressure: 1012,
            sea_level: 1012,
            grnd_level: 1009,
            humidity: 85,
            temp_kf: 0.08,
          },
          weather: [
            { id: 500, main: "Rain", description: "light rain", icon: "10n" },
          ],
          clouds: { all: 98 },
          wind: { speed: 6.58, deg: 223 },
          rain: { "3h": 0.63 },
          sys: { pod: "n" },
          dt_txt: "2020-07-04 03:00:00",
        },
        {
          dt: 1593842400,
          main: {
            temp: 17.25,
            feels_like: 14.38,
            temp_min: 17.25,
            temp_max: 17.25,
            pressure: 1011,
            sea_level: 1011,
            grnd_level: 1009,
            humidity: 85,
            temp_kf: 0,
          },
          weather: [
            { id: 500, main: "Rain", description: "light rain", icon: "10d" },
          ],
          clouds: { all: 100 },
          wind: { speed: 6.26, deg: 225 },
          rain: { "3h": 0.35 },
          sys: { pod: "d" },
          dt_txt: "2020-07-04 06:00:00",
        },
        {
          dt: 1593853200,
          main: {
            temp: 18.41,
            feels_like: 15.43,
            temp_min: 18.41,
            temp_max: 18.41,
            pressure: 1012,
            sea_level: 1012,
            grnd_level: 1009,
            humidity: 81,
            temp_kf: 0,
          },
          weather: [
            {
              id: 804,
              main: "Clouds",
              description: "overcast clouds",
              icon: "04d",
            },
          ],
          clouds: { all: 100 },
          wind: { speed: 6.61, deg: 233 },
          sys: { pod: "d" },
          dt_txt: "2020-07-04 09:00:00",
        },
        {
          dt: 1593864000,
          main: {
            temp: 19.33,
            feels_like: 16.58,
            temp_min: 19.33,
            temp_max: 19.33,
            pressure: 1011,
            sea_level: 1011,
            grnd_level: 1009,
            humidity: 76,
            temp_kf: 0,
          },
          weather: [
            {
              id: 804,
              main: "Clouds",
              description: "overcast clouds",
              icon: "04d",
            },
          ],
          clouds: { all: 100 },
          wind: { speed: 6.23, deg: 235 },
          sys: { pod: "d" },
          dt_txt: "2020-07-04 12:00:00",
        },
        {
          dt: 1593874800,
          main: {
            temp: 20.63,
            feels_like: 17.56,
            temp_min: 20.63,
            temp_max: 20.63,
            pressure: 1011,
            sea_level: 1011,
            grnd_level: 1009,
            humidity: 68,
            temp_kf: 0,
          },
          weather: [
            { id: 500, main: "Rain", description: "light rain", icon: "10d" },
          ],
          clouds: { all: 98 },
          wind: { speed: 6.44, deg: 246 },
          rain: { "3h": 0.22 },
          sys: { pod: "d" },
          dt_txt: "2020-07-04 15:00:00",
        },
        {
          dt: 1593885600,
          main: {
            temp: 20.16,
            feels_like: 17.77,
            temp_min: 20.16,
            temp_max: 20.16,
            pressure: 1012,
            sea_level: 1012,
            grnd_level: 1009,
            humidity: 72,
            temp_kf: 0,
          },
          weather: [
            {
              id: 804,
              main: "Clouds",
              description: "overcast clouds",
              icon: "04d",
            },
          ],
          clouds: { all: 97 },
          wind: { speed: 5.69, deg: 236 },
          sys: { pod: "d" },
          dt_txt: "2020-07-04 18:00:00",
        },
        {
          dt: 1593896400,
          main: {
            temp: 18.85,
            feels_like: 16.43,
            temp_min: 18.85,
            temp_max: 18.85,
            pressure: 1012,
            sea_level: 1012,
            grnd_level: 1010,
            humidity: 77,
            temp_kf: 0,
          },
          weather: [
            {
              id: 804,
              main: "Clouds",
              description: "overcast clouds",
              icon: "04n",
            },
          ],
          clouds: { all: 100 },
          wind: { speed: 5.62, deg: 232 },
          sys: { pod: "n" },
          dt_txt: "2020-07-04 21:00:00",
        },
        {
          dt: 1593907200,
          main: {
            temp: 18.47,
            feels_like: 15.15,
            temp_min: 18.47,
            temp_max: 18.47,
            pressure: 1012,
            sea_level: 1012,
            grnd_level: 1009,
            humidity: 75,
            temp_kf: 0,
          },
          weather: [
            {
              id: 804,
              main: "Clouds",
              description: "overcast clouds",
              icon: "04n",
            },
          ],
          clouds: { all: 100 },
          wind: { speed: 6.53, deg: 239 },
          sys: { pod: "n" },
          dt_txt: "2020-07-05 00:00:00",
        },
        {
          dt: 1593918000,
          main: {
            temp: 18.25,
            feels_like: 14.49,
            temp_min: 18.25,
            temp_max: 18.25,
            pressure: 1010,
            sea_level: 1010,
            grnd_level: 1007,
            humidity: 74,
            temp_kf: 0,
          },
          weather: [
            {
              id: 804,
              main: "Clouds",
              description: "overcast clouds",
              icon: "04n",
            },
          ],
          clouds: { all: 86 },
          wind: { speed: 6.96, deg: 229 },
          sys: { pod: "n" },
          dt_txt: "2020-07-05 03:00:00",
        },
        {
          dt: 1593928800,
          main: {
            temp: 18.51,
            feels_like: 14.31,
            temp_min: 18.51,
            temp_max: 18.51,
            pressure: 1008,
            sea_level: 1008,
            grnd_level: 1006,
            humidity: 74,
            temp_kf: 0,
          },
          weather: [
            {
              id: 804,
              main: "Clouds",
              description: "overcast clouds",
              icon: "04d",
            },
          ],
          clouds: { all: 92 },
          wind: { speed: 7.7, deg: 229 },
          sys: { pod: "d" },
          dt_txt: "2020-07-05 06:00:00",
        },
        {
          dt: 1593939600,
          main: {
            temp: 19.19,
            feels_like: 14.73,
            temp_min: 19.19,
            temp_max: 19.19,
            pressure: 1009,
            sea_level: 1009,
            grnd_level: 1006,
            humidity: 68,
            temp_kf: 0,
          },
          weather: [
            { id: 500, main: "Rain", description: "light rain", icon: "10d" },
          ],
          clouds: { all: 100 },
          wind: { speed: 7.77, deg: 247 },
          rain: { "3h": 0.26 },
          sys: { pod: "d" },
          dt_txt: "2020-07-05 09:00:00",
        },
        {
          dt: 1593950400,
          main: {
            temp: 21.11,
            feels_like: 15.11,
            temp_min: 21.11,
            temp_max: 21.11,
            pressure: 1010,
            sea_level: 1010,
            grnd_level: 1007,
            humidity: 48,
            temp_kf: 0,
          },
          weather: [
            { id: 500, main: "Rain", description: "light rain", icon: "10d" },
          ],
          clouds: { all: 90 },
          wind: { speed: 8.51, deg: 249 },
          rain: { "3h": 0.21 },
          sys: { pod: "d" },
          dt_txt: "2020-07-05 12:00:00",
        },
        {
          dt: 1593961200,
          main: {
            temp: 20.35,
            feels_like: 14.06,
            temp_min: 20.35,
            temp_max: 20.35,
            pressure: 1011,
            sea_level: 1011,
            grnd_level: 1008,
            humidity: 43,
            temp_kf: 0,
          },
          weather: [
            { id: 800, main: "Clear", description: "clear sky", icon: "01d" },
          ],
          clouds: { all: 1 },
          wind: { speed: 8.1, deg: 262 },
          sys: { pod: "d" },
          dt_txt: "2020-07-05 15:00:00",
        },
        {
          dt: 1593972000,
          main: {
            temp: 17.09,
            feels_like: 10.75,
            temp_min: 17.09,
            temp_max: 17.09,
            pressure: 1011,
            sea_level: 1011,
            grnd_level: 1009,
            humidity: 50,
            temp_kf: 0,
          },
          weather: [
            {
              id: 802,
              main: "Clouds",
              description: "scattered clouds",
              icon: "03d",
            },
          ],
          clouds: { all: 28 },
          wind: { speed: 7.92, deg: 262 },
          sys: { pod: "d" },
          dt_txt: "2020-07-05 18:00:00",
        },
        {
          dt: 1593982800,
          main: {
            temp: 15.38,
            feels_like: 8.84,
            temp_min: 15.38,
            temp_max: 15.38,
            pressure: 1013,
            sea_level: 1013,
            grnd_level: 1010,
            humidity: 56,
            temp_kf: 0,
          },
          weather: [
            {
              id: 804,
              main: "Clouds",
              description: "overcast clouds",
              icon: "04n",
            },
          ],
          clouds: { all: 92 },
          wind: { speed: 8.23, deg: 260 },
          sys: { pod: "n" },
          dt_txt: "2020-07-05 21:00:00",
        },
        {
          dt: 1593993600,
          main: {
            temp: 13.94,
            feels_like: 7.76,
            temp_min: 13.94,
            temp_max: 13.94,
            pressure: 1013,
            sea_level: 1013,
            grnd_level: 1010,
            humidity: 59,
            temp_kf: 0,
          },
          weather: [
            {
              id: 802,
              main: "Clouds",
              description: "scattered clouds",
              icon: "03n",
            },
          ],
          clouds: { all: 50 },
          wind: { speed: 7.53, deg: 269 },
          sys: { pod: "n" },
          dt_txt: "2020-07-06 00:00:00",
        },
        {
          dt: 1594004400,
          main: {
            temp: 12.95,
            feels_like: 7.64,
            temp_min: 12.95,
            temp_max: 12.95,
            pressure: 1014,
            sea_level: 1014,
            grnd_level: 1011,
            humidity: 65,
            temp_kf: 0,
          },
          weather: [
            { id: 800, main: "Clear", description: "clear sky", icon: "01n" },
          ],
          clouds: { all: 0 },
          wind: { speed: 6.44, deg: 280 },
          sys: { pod: "n" },
          dt_txt: "2020-07-06 03:00:00",
        },
        {
          dt: 1594015200,
          main: {
            temp: 13.12,
            feels_like: 8.1,
            temp_min: 13.12,
            temp_max: 13.12,
            pressure: 1016,
            sea_level: 1016,
            grnd_level: 1013,
            humidity: 66,
            temp_kf: 0,
          },
          weather: [
            { id: 800, main: "Clear", description: "clear sky", icon: "01d" },
          ],
          clouds: { all: 0 },
          wind: { speed: 6.15, deg: 285 },
          sys: { pod: "d" },
          dt_txt: "2020-07-06 06:00:00",
        },
        {
          dt: 1594026000,
          main: {
            temp: 16.01,
            feels_like: 11.1,
            temp_min: 16.01,
            temp_max: 16.01,
            pressure: 1017,
            sea_level: 1017,
            grnd_level: 1015,
            humidity: 53,
            temp_kf: 0,
          },
          weather: [
            {
              id: 802,
              main: "Clouds",
              description: "scattered clouds",
              icon: "03d",
            },
          ],
          clouds: { all: 43 },
          wind: { speed: 5.83, deg: 290 },
          sys: { pod: "d" },
          dt_txt: "2020-07-06 09:00:00",
        },
        {
          dt: 1594036800,
          main: {
            temp: 17.05,
            feels_like: 12.47,
            temp_min: 17.05,
            temp_max: 17.05,
            pressure: 1018,
            sea_level: 1018,
            grnd_level: 1016,
            humidity: 49,
            temp_kf: 0,
          },
          weather: [
            {
              id: 803,
              main: "Clouds",
              description: "broken clouds",
              icon: "04d",
            },
          ],
          clouds: { all: 71 },
          wind: { speed: 5.31, deg: 289 },
          sys: { pod: "d" },
          dt_txt: "2020-07-06 12:00:00",
        },
        {
          dt: 1594047600,
          main: {
            temp: 19.81,
            feels_like: 15.39,
            temp_min: 19.81,
            temp_max: 19.81,
            pressure: 1020,
            sea_level: 1020,
            grnd_level: 1017,
            humidity: 46,
            temp_kf: 0,
          },
          weather: [
            { id: 500, main: "Rain", description: "light rain", icon: "10d" },
          ],
          clouds: { all: 73 },
          wind: { speed: 5.6, deg: 295 },
          rain: { "3h": 0.1 },
          sys: { pod: "d" },
          dt_txt: "2020-07-06 15:00:00",
        },
        {
          dt: 1594058400,
          main: {
            temp: 18.76,
            feels_like: 15.18,
            temp_min: 18.76,
            temp_max: 18.76,
            pressure: 1021,
            sea_level: 1021,
            grnd_level: 1018,
            humidity: 52,
            temp_kf: 0,
          },
          weather: [
            { id: 500, main: "Rain", description: "light rain", icon: "10d" },
          ],
          clouds: { all: 69 },
          wind: { speed: 4.69, deg: 316 },
          rain: { "3h": 0.45 },
          sys: { pod: "d" },
          dt_txt: "2020-07-06 18:00:00",
        },
        {
          dt: 1594069200,
          main: {
            temp: 16.28,
            feels_like: 12.33,
            temp_min: 16.28,
            temp_max: 16.28,
            pressure: 1022,
            sea_level: 1022,
            grnd_level: 1020,
            humidity: 53,
            temp_kf: 0,
          },
          weather: [
            { id: 800, main: "Clear", description: "clear sky", icon: "01n" },
          ],
          clouds: { all: 2 },
          wind: { speed: 4.54, deg: 324 },
          sys: { pod: "n" },
          dt_txt: "2020-07-06 21:00:00",
        },
        {
          dt: 1594080000,
          main: {
            temp: 14.45,
            feels_like: 10.7,
            temp_min: 14.45,
            temp_max: 14.45,
            pressure: 1023,
            sea_level: 1023,
            grnd_level: 1020,
            humidity: 54,
            temp_kf: 0,
          },
          weather: [
            { id: 800, main: "Clear", description: "clear sky", icon: "01n" },
          ],
          clouds: { all: 1 },
          wind: { speed: 3.82, deg: 326 },
          sys: { pod: "n" },
          dt_txt: "2020-07-07 00:00:00",
        },
        {
          dt: 1594090800,
          main: {
            temp: 13.05,
            feels_like: 10.05,
            temp_min: 13.05,
            temp_max: 13.05,
            pressure: 1023,
            sea_level: 1023,
            grnd_level: 1020,
            humidity: 64,
            temp_kf: 0,
          },
          weather: [
            { id: 800, main: "Clear", description: "clear sky", icon: "01n" },
          ],
          clouds: { all: 0 },
          wind: { speed: 3.09, deg: 317 },
          sys: { pod: "n" },
          dt_txt: "2020-07-07 03:00:00",
        },
        {
          dt: 1594101600,
          main: {
            temp: 13.19,
            feels_like: 10.64,
            temp_min: 13.19,
            temp_max: 13.19,
            pressure: 1023,
            sea_level: 1023,
            grnd_level: 1021,
            humidity: 67,
            temp_kf: 0,
          },
          weather: [
            { id: 800, main: "Clear", description: "clear sky", icon: "01d" },
          ],
          clouds: { all: 0 },
          wind: { speed: 2.71, deg: 317 },
          sys: { pod: "d" },
          dt_txt: "2020-07-07 06:00:00",
        },
        {
          dt: 1594112400,
          main: {
            temp: 16.77,
            feels_like: 13.46,
            temp_min: 16.77,
            temp_max: 16.77,
            pressure: 1024,
            sea_level: 1024,
            grnd_level: 1022,
            humidity: 47,
            temp_kf: 0,
          },
          weather: [
            { id: 800, main: "Clear", description: "clear sky", icon: "01d" },
          ],
          clouds: { all: 3 },
          wind: { speed: 3.24, deg: 329 },
          sys: { pod: "d" },
          dt_txt: "2020-07-07 09:00:00",
        },
        {
          dt: 1594123200,
          main: {
            temp: 20.11,
            feels_like: 16.79,
            temp_min: 20.11,
            temp_max: 20.11,
            pressure: 1024,
            sea_level: 1024,
            grnd_level: 1021,
            humidity: 36,
            temp_kf: 0,
          },
          weather: [
            { id: 800, main: "Clear", description: "clear sky", icon: "01d" },
          ],
          clouds: { all: 2 },
          wind: { speed: 3.02, deg: 323 },
          sys: { pod: "d" },
          dt_txt: "2020-07-07 12:00:00",
        },
        {
          dt: 1594134000,
          main: {
            temp: 20.57,
            feels_like: 16.75,
            temp_min: 20.57,
            temp_max: 20.57,
            pressure: 1024,
            sea_level: 1024,
            grnd_level: 1021,
            humidity: 38,
            temp_kf: 0,
          },
          weather: [
            { id: 800, main: "Clear", description: "clear sky", icon: "01d" },
          ],
          clouds: { all: 10 },
          wind: { speed: 4.07, deg: 321 },
          sys: { pod: "d" },
          dt_txt: "2020-07-07 15:00:00",
        },
        {
          dt: 1594144800,
          main: {
            temp: 19.54,
            feels_like: 16.45,
            temp_min: 19.54,
            temp_max: 19.54,
            pressure: 1024,
            sea_level: 1024,
            grnd_level: 1021,
            humidity: 43,
            temp_kf: 0,
          },
          weather: [
            { id: 800, main: "Clear", description: "clear sky", icon: "01d" },
          ],
          clouds: { all: 6 },
          wind: { speed: 3.29, deg: 317 },
          sys: { pod: "d" },
          dt_txt: "2020-07-07 18:00:00",
        },
        {
          dt: 1594155600,
          main: {
            temp: 17.43,
            feels_like: 15.9,
            temp_min: 17.43,
            temp_max: 17.43,
            pressure: 1025,
            sea_level: 1025,
            grnd_level: 1022,
            humidity: 53,
            temp_kf: 0,
          },
          weather: [
            { id: 800, main: "Clear", description: "clear sky", icon: "01n" },
          ],
          clouds: { all: 1 },
          wind: { speed: 1.44, deg: 323 },
          sys: { pod: "n" },
          dt_txt: "2020-07-07 21:00:00",
        },
        {
          dt: 1594166400,
          main: {
            temp: 15.98,
            feels_like: 14.97,
            temp_min: 15.98,
            temp_max: 15.98,
            pressure: 1024,
            sea_level: 1024,
            grnd_level: 1022,
            humidity: 60,
            temp_kf: 0,
          },
          weather: [
            { id: 800, main: "Clear", description: "clear sky", icon: "01n" },
          ],
          clouds: { all: 3 },
          wind: { speed: 0.85, deg: 250 },
          sys: { pod: "n" },
          dt_txt: "2020-07-08 00:00:00",
        },
        {
          dt: 1594177200,
          main: {
            temp: 14.56,
            feels_like: 12.87,
            temp_min: 14.56,
            temp_max: 14.56,
            pressure: 1024,
            sea_level: 1024,
            grnd_level: 1021,
            humidity: 67,
            temp_kf: 0,
          },
          weather: [
            {
              id: 803,
              main: "Clouds",
              description: "broken clouds",
              icon: "04n",
            },
          ],
          clouds: { all: 65 },
          wind: { speed: 1.93, deg: 236 },
          sys: { pod: "n" },
          dt_txt: "2020-07-08 03:00:00",
        },
        {
          dt: 1594188000,
          main: {
            temp: 14.8,
            feels_like: 12.47,
            temp_min: 14.8,
            temp_max: 14.8,
            pressure: 1023,
            sea_level: 1023,
            grnd_level: 1020,
            humidity: 67,
            temp_kf: 0,
          },
          weather: [
            {
              id: 803,
              main: "Clouds",
              description: "broken clouds",
              icon: "04d",
            },
          ],
          clouds: { all: 71 },
          wind: { speed: 2.92, deg: 235 },
          sys: { pod: "d" },
          dt_txt: "2020-07-08 06:00:00",
        },
        {
          dt: 1594198800,
          main: {
            temp: 18.9,
            feels_like: 14.54,
            temp_min: 18.9,
            temp_max: 18.9,
            pressure: 1023,
            sea_level: 1023,
            grnd_level: 1020,
            humidity: 40,
            temp_kf: 0,
          },
          weather: [
            {
              id: 803,
              main: "Clouds",
              description: "broken clouds",
              icon: "04d",
            },
          ],
          clouds: { all: 61 },
          wind: { speed: 4.62, deg: 238 },
          sys: { pod: "d" },
          dt_txt: "2020-07-08 09:00:00",
        },
        {
          dt: 1594209600,
          main: {
            temp: 22.55,
            feels_like: 18.24,
            temp_min: 22.55,
            temp_max: 22.55,
            pressure: 1022,
            sea_level: 1022,
            grnd_level: 1019,
            humidity: 38,
            temp_kf: 0,
          },
          weather: [
            {
              id: 802,
              main: "Clouds",
              description: "scattered clouds",
              icon: "03d",
            },
          ],
          clouds: { all: 32 },
          wind: { speed: 5.32, deg: 244 },
          sys: { pod: "d" },
          dt_txt: "2020-07-08 12:00:00",
        },
        {
          dt: 1594220400,
          main: {
            temp: 24.06,
            feels_like: 20.39,
            temp_min: 24.06,
            temp_max: 24.06,
            pressure: 1020,
            sea_level: 1020,
            grnd_level: 1017,
            humidity: 44,
            temp_kf: 0,
          },
          weather: [
            { id: 801, main: "Clouds", description: "few clouds", icon: "02d" },
          ],
          clouds: { all: 22 },
          wind: { speed: 5.72, deg: 248 },
          sys: { pod: "d" },
          dt_txt: "2020-07-08 15:00:00",
        },
        {
          dt: 1594231200,
          main: {
            temp: 21.92,
            feels_like: 19.03,
            temp_min: 21.92,
            temp_max: 21.92,
            pressure: 1019,
            sea_level: 1019,
            grnd_level: 1016,
            humidity: 57,
            temp_kf: 0,
          },
          weather: [
            {
              id: 802,
              main: "Clouds",
              description: "scattered clouds",
              icon: "03d",
            },
          ],
          clouds: { all: 35 },
          wind: { speed: 5.46, deg: 255 },
          sys: { pod: "d" },
          dt_txt: "2020-07-08 18:00:00",
        },
      ],
      city: {
        id: 2643743,
        name: "London",
        coord: { lat: 51.5085, lon: -0.1257 },
        country: "GB",
        population: 1000000,
        timezone: 3600,
        sunrise: 1593748153,
        sunset: 1593807602,
      },
    },
  ];

  return <div></div>;
};