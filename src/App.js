import React, { useState } from "react";
import "./styles.css";

var flagDictionary = {
  "🏁": "Chequered - Flag",
  "🚩": "Triangular - Flag",
  "🎌": "Crossed - Flag",
  "🏴": "Black - Flag",
  "🏳️": "White - Flag",
  "🏳️‍🌈": " Rainbow - Flag",
  "🏳️‍⚧️": "Transgender - Flag",
  "🏴‍☠️": "Pirate - Flag",
  "🇦🇨": "AscensionIsland - Country Flag",
  "🇦🇩": "Andorra - Country Flag",
  "🇦🇪": "UnitedArabEmirates - Country Flag",
  "🇦🇫": "Afghanistan - Country Flag",
  "🇦🇬": "Antigua&Barbuda - Country Flag",
  "🇦🇮": "Anguilla - Country Flag",
  "🇦🇱": "Albania - Country Flag",
  "🇦🇲": "Armenia - Country Flag",
  "🇦🇴": "Angola - Country Flag",
  "🇦🇶": "Antarctica - Country Flag",
  "🇦🇷": "Argentina - Country Flag",
  "🇦🇸": "AmericanSamoa - Country Flag",
  "🇦🇹": "Austria - Country Flag",
  "🇦🇺": "Australia - Country Flag",
  "🇦🇼": "Aruba - Country Flag",
  "🇦🇽": "ÅlandIslands - Country Flag",
  "🇦🇿": "Azerbaijan - Country Flag",
  "🇧🇦": "Bosnia&Herzegovina - Country Flag",
  "🇧🇧": "Barbados - Country Flag",
  "🇧🇩": "Bangladesh - Country Flag",
  "🇧🇪": "Belgium - Country Flag",
  "🇧🇫": "BurkinaFaso - Country Flag",
  "🇧🇬": "Bulgaria - Country Flag",
  "🇧🇭": "Bahrain - Country Flag",
  "🇧🇮": "Burundi - Country Flag",
  "🇧🇯": "Benin - Country Flag",
  "🇧🇱": "St.Barthélemy - Country Flag",
  "🇧🇲": "Bermuda - Country Flag",
  "🇧🇳": "Brunei - Country Flag",
  "🇧🇴": "Bolivia - Country Flag",
  "🇧🇶": "CaribbeanNetherlands - Country Flag",
  "🇧🇷": "Brazil - Country Flag",
  "🇧🇸": "Bahamas - Country Flag",
  "🇧🇹": "Bhutan - Country Flag",
  "🇧🇻": "BouvetIsland - Country Flag",
  "🇧🇼": "Botswana - Country Flag",
  "🇧🇾": "Belarus - Country Flag",
  "🇧🇿": "Belize - Country Flag",
  "🇨🇦": "Canada - Country Flag",
  "🇨🇨": "Cocos(Keeling)Islands - Country Flag",
  "🇨🇩": "Congo-Kinshasa - Country Flag",
  "🇨🇫": "CentralAfricanRepublic - Country Flag",
  "🇨🇬": "Congo-Brazzaville - Country Flag",
  "🇨🇭": "Switzerland - Country Flag",
  "🇨🇮": "Côted’Ivoire - Country Flag",
  "🇨🇰": "CookIslands - Country Flag",
  "🇨🇱": "Chile - Country Flag",
  "🇨🇲": "Cameroon - Country Flag",
  "🇨🇳": "China - Country Flag",
  "🇨🇴": "Colombia - Country Flag",
  "🇨🇵": "ClippertonIsland - Country Flag",
  "🇨🇷": "CostaRica - Country Flag",
  "🇨🇺": "Cuba - Country Flag",
  "🇨🇻": "CapeVerde - Country Flag",
  "🇨🇼": "Curaçao - Country Flag",
  "🇨🇽": "ChristmasIsland - Country Flag",
  "🇨🇾": "Cyprus - Country Flag",
  "🇨🇿": "Czechia - Country Flag",
  "🇩🇪": "Germany - Country Flag",
  "🇩🇬": "DiegoGarcia - Country Flag",
  "🇩🇯": "Djibouti - Country Flag",
  "🇩🇰": "Denmark - Country Flag",
  "🇩🇲": "Dominica - Country Flag",
  "🇩🇴": "DominicanRepublic - Country Flag",
  "🇩🇿": "Algeria - Country Flag",
  "🇪🇦": "Ceuta&Melilla - Country Flag",
  "🇪🇨": "Ecuador - Country Flag",
  "🇪🇪": "Estonia - Country Flag",
  "🇪🇬": "Egypt - Country Flag",
  "🇪🇭": "WesternSahara - Country Flag",
  "🇪🇷": "Eritrea - Country Flag",
  "🇪🇸": "Spain - Country Flag",
  "🇪🇹": "Ethiopia - Country Flag",
  "🇪🇺": "EuropeanUnion - Country Flag",
  "🇫🇮": "Finland - Country Flag",
  "🇫🇯": "Fiji - Country Flag",
  "🇫🇰": "FalklandIslands - Country Flag",
  "🇫🇲": "Micronesia - Country Flag",
  "🇫🇴": "FaroeIslands - Country Flag",
  "🇫🇷": "France - Country Flag",
  "🇬🇦": "Gabon - Country Flag",
  "🇬🇧": "UnitedKingdom - Country Flag",
  "🇬🇩": "Grenada - Country Flag",
  "🇬🇪": "Georgia - Country Flag",
  "🇬🇫": "FrenchGuiana - Country Flag",
  "🇬🇬": "Guernsey - Country Flag",
  "🇬🇭": "Ghana - Country Flag",
  "🇬🇮": "Gibraltar - Country Flag",
  "🇬🇱": "Greenland - Country Flag",
  "🇬🇲": "Gambia - Country Flag",
  "🇬🇳": "Guinea - Country Flag",
  "🇬🇵": "Guadeloupe - Country Flag",
  "🇬🇶": "EquatorialGuinea - Country Flag",
  "🇬🇷": "Greece - Country Flag",
  "🇬🇸": "SouthGeorgia& - Country Flag",
  "🇬🇹": "Guatemala - Country Flag",
  "🇬🇺": "Guam - Country Flag",
  "🇬🇼": "Guinea-Bissau - Country Flag",
  "🇬🇾": "Guyana - Country Flag",
  "🇭🇰": "HongKongSAR - Country Flag",
  "🇭🇲": "Heard&McDonald - Country Flag",
  "🇭🇳": "Honduras - Country Flag",
  "🇭🇷": "Croatia - Country Flag",
  "🇭🇹": "Haiti - Country Flag",
  "🇭🇺": "Hungary - Country Flag",
  "🇮🇨": "CanaryIslands - Country Flag",
  "🇮🇩": "Indonesia - Country Flag",
  "🇮🇪": "Ireland - Country Flag",
  "🇮🇱": "Israel - Country Flag",
  "🇮🇲": "IsleofMan - Country Flag",
  "🇮🇳": "India - Country Flag",
  "🇮🇴": "BritishIndianOcean - Country Flag",
  "🇮🇶": "Iraq - Country Flag",
  "🇮🇷": "Iran - Country Flag",
  "🇮🇸": "Iceland - Country Flag",
  "🇮🇹": "Italy - Country Flag",
  "🇯🇪": "Jersey - Country Flag",
  "🇯🇲": "Jamaica - Country Flag",
  "🇯🇴": "Jordan - Country Flag",
  "🇯🇵": "Japan - Country Flag",
  "🇰🇪": "Kenya - Country Flag",
  "🇰🇬": "Kyrgyzstan - Country Flag",
  "🇰🇭": "Cambodia - Country Flag",
  "🇰🇮": "Kiribati - Country Flag",
  "🇰🇲": "Comoros - Country Flag",
  "🇰🇳": "St.Kitts& - Country Flag",
  "🇰🇵": "NorthKorea - Country Flag",
  "🇰🇷": "SouthKorea - Country Flag",
  "🇰🇼": "Kuwait - Country Flag",
  "🇰🇾": "CaymanIslands - Country Flag",
  "🇰🇿": "Kazakhstan - Country Flag",
  "🇱🇦": "Laos - Country Flag",
  "🇱🇧": "Lebanon - Country Flag",
  "🇱🇨": "St.Lucia - Country Flag",
  "🇱🇮": "Liechtenstein - Country Flag",
  "🇱🇰": "SriLanka - Country Flag",
  "🇱🇷": "Liberia - Country Flag",
  "🇱🇸": "Lesotho - Country Flag",
  "🇱🇹": "Lithuania - Country Flag",
  "🇱🇺": "Luxembourg - Country Flag",
  "🇱🇻": "Latvia - Country Flag",
  "🇱🇾": "Libya - Country Flag",
  "🇲🇦": "Morocco - Country Flag",
  "🇲🇨": "Monaco - Country Flag",
  "🇲🇩": "Moldova - Country Flag",
  "🇲🇪": "Montenegro - Country Flag",
  "🇲🇫": "St.Martin - Country Flag",
  "🇲🇬": "Madagascar - Country Flag",
  "🇲🇭": "MarshallIslands - Country Flag",
  "🇲🇰": "NorthMacedonia - Country Flag",
  "🇲🇱": "Mali - Country Flag",
  "🇲🇲": "Myanmar(Burma) - Country Flag",
  "🇲🇳": "Mongolia - Country Flag",
  "🇲🇴": "MacaoSarChina - Country Flag",
  "🇲🇵": "NorthernMarianaIslands - Country Flag",
  "🇲🇶": "Martinique - Country Flag",
  "🇲🇷": "Mauritania - Country Flag",
  "🇲🇸": "Montserrat - Country Flag",
  "🇲🇹": "Malta - Country Flag",
  "🇲🇺": "Mauritius - Country Flag",
  "🇲🇻": "Maldives - Country Flag",
  "🇲🇼": "Malawi - Country Flag",
  "🇲🇽": "Mexico - Country Flag",
  "🇲🇾": "Malaysia - Country Flag",
  "🇲🇿": "Mozambique - Country Flag",
  "🇳🇦": "Namibia - Country Flag",
  "🇳🇨": "NewCaledonia - Country Flag",
  "🇳🇪": "Niger - Country Flag",
  "🇳🇫": "NorfolkIsland - Country Flag",
  "🇳🇬": "Nigeria - Country Flag",
  "🇳🇮": "Nicaragua - Country Flag",
  "🇳🇱": "Netherlands - Country Flag",
  "🇳🇴": "Norway - Country Flag",
  "🇳🇵": "Nepal - Country Flag",
  "🇳🇷": "Nauru - Country Flag",
  "🇳🇺": "Niue - Country Flag",
  "🇳🇿": "NewZealand - Country Flag",
  "🇴🇲": "Oman - Country Flag",
  "🇵🇦": "Panama - Country Flag",
  "🇵🇪": "Peru - Country Flag",
  "🇵🇫": "FrenchPolynesia - Country Flag",
  "🇵🇬": "PapuaNewGuinea - Country Flag",
  "🇵🇭": "Philippines - Country Flag",
  "🇵🇰": "Pakistan - Country Flag",
  "🇵🇱": "Poland - Country Flag",
  "🇵🇲": "St.Pierre& - Country Flag",
  "🇵🇳": "PitcairnIslands - Country Flag",
  "🇵🇷": "PuertoRico - Country Flag",
  "🇵🇸": "PalestinianTerritories - Country Flag",
  "🇵🇹": "Portugal - Country Flag",
  "🇵🇼": "Palau - Country Flag",
  "🇵🇾": "Paraguay - Country Flag",
  "🇶🇦": "Qatar - Country Flag",
  "🇷🇪": "Réunion - Country Flag",
  "🇷🇴": "Romania - Country Flag",
  "🇷🇸": "Serbia - Country Flag",
  "🇷🇺": "Russia - Country Flag",
  "🇷🇼": "Rwanda - Country Flag",
  "🇸🇦": "SaudiArabia - Country Flag",
  "🇸🇧": "SolomonIslands - Country Flag",
  "🇸🇨": "Seychelles - Country Flag",
  "🇸🇩": "Sudan - Country Flag",
  "🇸🇪": "Sweden - Country Flag",
  "🇸🇬": "Singapore - Country Flag",
  "🇸🇭": "St.Helena - Country Flag",
  "🇸🇮": "Slovenia - Country Flag",
  "🇸🇯": "Svalbard&Jan - Country Flag",
  "🇸🇰": "Slovakia - Country Flag",
  "🇸🇱": "SierraLeone - Country Flag",
  "🇸🇲": "SanMarino - Country Flag",
  "🇸🇳": "Senegal - Country Flag",
  "🇸🇴": "Somalia - Country Flag",
  "🇸🇷": "Suriname - Country Flag",
  "🇸🇸": "SouthSudan - Country Flag",
  "🇸🇹": "SãoTomé& - Country Flag",
  "🇸🇻": "ElSalvador - Country Flag",
  "🇸🇽": "SintMaarten - Country Flag",
  "🇸🇾": "Syria - Country Flag",
  "🇸🇿": "Eswatini - Country Flag",
  "🇹🇦": "TristanDaCunha - Country Flag",
  "🇹🇨": "Turks&Caicos - Country Flag",
  "🇹🇩": "Chad - Country Flag",
  "🇹🇫": "FrenchSouthernTerritories - Country Flag",
  "🇹🇬": "Togo - Country Flag",
  "🇹🇭": "Thailand - Country Flag",
  "🇹🇯": "Tajikistan - Country Flag",
  "🇹🇰": "Tokelau - Country Flag",
  "🇹🇱": "Timor-Leste - Country Flag",
  "🇹🇲": "Turkmenistan - Country Flag",
  "🇹🇳": "Tunisia - Country Flag",
  "🇹🇴": "Tonga - Country Flag",
  "🇹🇷": "Turkey - Country Flag",
  "🇹🇹": "Trinidad&Tobago - Country Flag",
  "🇹🇻": "Tuvalu - Country Flag",
  "🇹🇼": "Taiwan - Country Flag",
  "🇹🇿": "Tanzania - Country Flag",
  "🇺🇦": "Ukraine - Country Flag",
  "🇺🇬": "Uganda - Country Flag",
  "🇺🇲": "U.S.OutlyingIslands - Country Flag",
  "🇺🇳": "UnitedNations - Country Flag",
  "🇺🇸": "UnitedStates - Country Flag",
  "🇺🇾": "Uruguay - Country Flag",
  "🇺🇿": "Uzbekistan - Country Flag",
  "🇻🇦": "VaticanCity - Country Flag",
  "🇻🇨": "St.Vincent& - Country Flag",
  "🇻🇪": "Venezuela - Country Flag",
  "🇻🇬": "BritishVirginIslands - Country Flag",
  "🇻🇮": "U.S.VirginIslands - Country Flag",
  "🇻🇳": "Vietnam - Country Flag",
  "🇻🇺": "Vanuatu - Country Flag",
  "🇼🇫": "Wallis&Futuna - Country Flag",
  "🇼🇸": "Samoa - Country Flag",
  "🇽🇰": "Kosovo - Country Flag",
  "🇾🇪": "Yemen - Country Flag",
  "🇾🇹": "Mayotte - Country Flag",
  "🇿🇦": "SouthAfrica - Country Flag",
  "🇿🇲": "Zambia - Country Flag",
  "🇿🇼": "Zimbabwe - Country Flag",
  "🏴󠁧󠁢󠁥󠁮󠁧󠁿": "England - Country Flag",
  "🏴󠁧󠁢󠁳󠁣󠁴󠁿": "Scotland - Country Flag",
  "🏴󠁧󠁢󠁷󠁬󠁳󠁿": "Wales - Country Flag",
  "🏴󠁵󠁳󠁴󠁸󠁿": "forTexas(US-TX) - Country Flag"
};

var flagDatabase = Object.keys(flagDictionary);
var popularFlags = ["🇮🇳", "🇦🇺", "🇮🇪", "🇦🇷", "🇧🇷", "🇨🇦", "🇪🇸", "🇫🇷", "🇯🇵", "🇺🇸"];

export default function App() {
  const [flagMeaning, setFlagMeaning] = useState("");
  const [flagDb, setFlagDb] = useState("");

  function flagInputHandler(event) {
    var userInput = event.target.value;
    var flagMeaning = "Meaning of Flag : " + flagDictionary[userInput];

    if (flagMeaning === "Meaning of Flag : " + undefined) {
      flagMeaning = "Pls enter a valid flag and only one at a time.";
    }
    setFlagMeaning(flagMeaning);
  }

  function flagDbButtonHandler() {
    flagDatabase.map(function (flagDb) {
      flagDb = flagDatabase;
      return setFlagDb(flagDb);
    });
  }

  function popFlagClickHandler(flag) {
    var flagMeaning = "Meaning of Flag : " + flagDictionary[flag];
    if (flagMeaning === "Meaning of Flag : " + undefined) {
      flagMeaning = "Pls enter a valid flag and only one at a time.";
    }
    setFlagMeaning(flagMeaning);
  }

  return (
    <div className="App">
      <h1
        style={{
          padding: "3rem 2rem 3rem",
          color: "black"
        }}
      >
        <strong>Hey, Welcome to Flag Guru!!</strong>
      </h1>

      <input
        onChange={flagInputHandler}
        placeholder="      Enter the flag here you wanna know meaning of.."
        style={{
          backgroundColor: "grey",
          borderRadius: "1rem",
          height: "3rem",
          width: "30rem",
          border: "3px solid black"
        }}
      />
      <h5>Flag meaning will be shown below👇🏼!!"</h5>
      <h2
        style={{
          backgroundColor: "lightgrey",
          padding: "0.5rem",
          border: "5px solid grey",
          borderRadius: "1rem",
          margin: "0rem 3rem 1rem 3rem"
        }}
      >
        <strong></strong> {flagMeaning}{" "}
      </h2>

      <div
        style={{
          border: "2px solid grey",
          borderRadius: "1rem",
          margin: "2rem"
        }}
      >
        <h3
          style={{
            fontWeight: "bold"
          }}
        >
          Few Popular Flags 👇🏼 :
        </h3>

        {popularFlags.map(function (flag) {
          return (
            <span
              onClick={() => popFlagClickHandler(flag)}
              style={{
                fontSize: "4rem",
                padding: "0rem 0.5rem",
                cursor: "pointer"
              }}
              key={flag}
            >
              {flag}
            </span>
          );
        })}
      </div>

      <div
        style={{
          margin: "2rem",
          border: "2px solid grey",
          borderRadius: "1rem",
          padding: "1rem"
        }}
      >
        <button
          onClick={flagDbButtonHandler}
          style={{
            display: "block",
            margin: "auto",
            fontSize: "1rem",
            borderRadius: "1rem",
            backgroundColor: "grey",
            height: "2rem",
            width: "12rem",
            border: "2px solid black",
            cursor: "pointer"
          }}
        >
          <strong>Check Flag Database</strong>
        </button>
        <span
          style={{
            fontSize: "2.5rem",
            padding: "1rem",
            margin: "auto"
          }}
        >
          {flagDb}
        </span>
      </div>
    </div>
  );
}
