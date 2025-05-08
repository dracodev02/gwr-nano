import Link from "next/link";

const ujOldal = () => {
  return (
    <div className="pt-[150px] pb-[100px] container-custom">
      <h2 className="text-[40px] max-md:text-[32px] leading-[1.3]">
        <strong>Adatkezelési tájékoztató</strong>
      </h2>
      <h1 className="text-[72px] max-md:text-[48px] max-sm:text-[36px]">
        <strong>Adatkezelési tájékoztató</strong>
      </h1>
      <p>
        A személyes adatok feldolgozásának alapja az érintett hozzájárulása a
        kereskedelmi üzenetek küldéséhez, valamint online kereskedő közvetlen
        marketing céljából végzett tevékenységéhez.
      </p>
      <h1 className="text-[72px] max-md:text-[48px] max-sm:text-[36px] mt-10">
        <strong>A személyes adatok védelme</strong>
      </h1>
      <div className="flex flex-col ml-10">
        <div>
          <p className="mb-14 mt-20">
            1. <strong>AZ ADATKEZELŐ AZONOSÍTÁSA ÉS KAPCSOLATI ADATAI</strong>
          </p>
          <ul className="list-inside list-disc">
            <li className="mt-8">
              1.1. Az Ön személyes adatainak kezelője a Sublebers Kft. (a
              továbbiakban csak „adatkezelő”), székhelye: 2045 Törökbálint,
              Bajcsy-Zsilinszky utca 87. cégjegyzékszáma: 13-09-223727
            </li>
            <li className="mt-8">
              1.2. Az adatkezelő elérhetőségei: Kézbesítési cím: 2045
              Törökbálint, Bajcsy-Zsilinszky utca 87. E-mail cím:{" "}
              <Link
                className="text-primary/90 hover:text-primary"
                href={"mailto:info@gwr-nano.com"}
              >
                info@gwr-nano.com
              </Link>{" "}
              Telefonszám: +3670 319 5835
            </li>
            <li className="mt-8">
              1.3. Az adatkezelő nem nevezett ki adatvédelmi tisztviselőt.
            </li>
          </ul>
        </div>
        <div>
          <p className="mb-14 mt-20">
            2. <strong>A SZEMÉLYES ADATOK FELDOLGOZÁSÁNAK JOGALAPJA</strong>
          </p>
          <ul className="list-inside list-disc">
            <li className="mt-8">{`2.1. Az Ön személyes adatai feldolgozásának jogalapja az Ön hozzájárulása, amelyet ezúton adott az adatkezelő számára, a természetes személyeknek a személyes adatok kezelése tekintetében történő védelméről és az ilyen adatok szabad áramlásáról, valamint a 95/46/EK rendelet hatályon kívül helyezéséről szóló Európai Parlamenti és Tanácsi (EU) 2016/679 rendelet (általános adatvédelmi rendelet) 6.cikke /1/ bekezdésének a) pontja értelmében (a továbbiakban: „Rendelet”).`}</li>
          </ul>
        </div>
        <div>
          <p className="mb-14 mt-20">
            3. <strong>A SZEMÉLYES ADATOK FELDOLGOZÁSÁNAK CÉLJA</strong>
          </p>
          <ul className="list-inside list-disc">
            <li className="mt-8">{`3.1. A személyes adatok feldolgozásának célja üzleti kommunikáció, valamint az adminisztrátor részéről az Ön személyére irányuló egyéb marketing tevékenységek végzése.`}</li>
            <li className="mt-8">{`3.1. Az adatkezelő részéről nem kerül sor automatikus egyéni döntéshozatalra a rendelet 22. cikke értelmében.`}</li>
          </ul>
        </div>
        <div>
          <p className="mb-14 mt-20">
            4. <strong>A SZEMÉLYES ADATOK TÁROLÁSÁNAK IDŐTARTAMA</strong>
          </p>
          <ul className="list-inside list-disc">
            <li className="mt-8">{`4.1. Az adatkezelő a személyes adatait 3 évig tárolja, illetve maximum addig, amíg Ön vissza nem vonja a személyes adatai feldolgozásához adott hozzájárulását (az e célból történő feldolgozáshoz).`}</li>
          </ul>
        </div>
        <div>
          <p className="mb-14 mt-20">
            5. <strong>A SZEMÉLYES ADATOK TOVÁBBI KEDVEZMÉNYEZETTJEI</strong>
          </p>
          <ul className="list-inside list-disc">
            <li className="mt-8">{`5.1. Személyes adatainak további kedvezményezettjei nincsenek.`}</li>
          </ul>
        </div>
        <div>
          <p className="mb-14 mt-20">
            6. <strong>AZ ÉRINTETTEK JOGAI</strong>
          </p>
          <ul className="list-inside list-disc">
            <li className="mt-8">
              {`6.1. Személyes adatainak további kedvezményezettjei nincsenek.`}{" "}
              <br />
              {`– az adatkezelőtől hozzáférést kérni személyes adataihoz`}
              <br />
              {`– személyes adatainak helyesbítésére`}
              <br />
              {`– kifogást emelni személyes adatainak feldolgozása ellen`}
              <br />
              {`– személyes adatait áthordozni`}
            </li>
            <li className="mt-8">
              <span>{`6.2. Joga van bármikor visszavonni hozzájárulását, amelyet személyes adatai feldolgozásához adott az adatkezelőnek. Ez azonban nem érinti személyes adatai feldolgozásának jogszerűségét a hozzájárulás visszavonása előtt. Személyes adatai feldolgozásához adott hozzájárulását az`}</span>{" "}
              <Link
                className="text-primary/90 hover:text-primary"
                href={"mailto:info@gwr-nano.com"}
              >
                info@gwr-nano.com
              </Link>{" "}
              <span>{`e-mail címen vonhatja vissza.`}</span>
            </li>
            <li className="mt-8">{`6.3. Ha úgy ítéli meg, hogy személyes adatainak feldolgozása ellentmondott vagy ellentmond a rendeletben foglaltaknak, jogában áll többek között panaszt tenni a felügyeleti hatóságnál.`}</li>
            <li className="mt-8">{`6.4. Ön nem köteles átadni személyes adatait. Személyes adatainak átadása nem törvényben vagy szerződésben foglalt követelmény, és nem olyan követelmény, amely szerződés megkötéséhez szükséges.`}</li>
          </ul>
        </div>
      </div>
      <p className="mt-20">E feltételek 2023-10-13-án lépnek hatályba.</p>
    </div>
  );
};

export default ujOldal;
