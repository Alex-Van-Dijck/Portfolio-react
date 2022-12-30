
    export interface Weather {
        code: number;
        icon: string;
        description: string;
    }

    export interface Datum {
        wind_spd: number;
        wind_cdir_full: string;
        slp: number;
        datetime: string;
        ts: number;
        snow: number;
        dewpt: number;
        uv: number;
        wind_dir: number;
        pop: number;
        ozone: number;
        dhi: number;
        precip: number;
        wind_gust_spd: number;
        clouds_low: number;
        clouds_mid: number;
        app_temp: number;
        dni: number;
        timestamp_utc: Date;
        timestamp_local: Date;
        snow_depth: number;
        weather: Weather;
        wind_cdir: string;
        rh: number;
        pod: string;
        temp: number;
        pres: number;
        ghi: number;
        clouds_hi: number;
        solar_rad: number;
        clouds: number;
        vis: number;
    }

    export interface RootObject {
        city_name: string;
        lon: number;
        state_code: string;
        timezone: string;
        country_code: string;
        data: Datum[];
        lat: number;
    }

