const universities = [
    {
        "name": "AMERICAN COLLEGE OF HEALTHCARE SCIENCES",
        "location": "PORTLAND, OR"
    },
    {
        "name": "UNIVERSITY OF MASSACHUSETTS-AMHERST",
        "location": "AMHERST, MA"
    },
    {
        "name": "SIERRA NEVADA UNIVERSITY",
        "location": "INCLINE VILLAGE, NV"
    },
    {
        "name": "UNITED EDUCATION INSTITUTE-UEI COLLEGE SAN MARCOS",
        "location": "SAN MARCOS, CA"
    },
    {
        "name": "FLORIDA CAREER COLLEGE-WEST PALM BEACH",
        "location": "WEST PALM BEACH, FL"
    },
    {
        "name": "AMERICAN TRADE SCHOOL",
        "location": "SAINT ANN, MO"
    },
    {
        "name": "UNIVERSITY OF GEORGIA",
        "location": "ATHENS, GA"
    },
    {
        "name": "MIDFIELD INSTITUTE OF COSMETOLOGY",
        "location": "MIDFIELD, AL"
    },
    {
        "name": "YESHIVAS MAHARIT D'SATMAR",
        "location": "MONROE, NY"
    },
    {
        "name": "SEATTLE FILM INSTITUTE",
        "location": "SEATTLE, WA"
    },
    {
        "name": "PAUL MITCHELL THE SCHOOL-NAMPA",
        "location": "NAMPA, ID"
    },
    {
        "name": "SINCLAIR COMMUNITY COLLEGE",
        "location": "DAYTON, OH"
    },
    {
        "name": "HERZING UNIVERSITY-BROOKFIELD",
        "location": "BROOKFIELD, WI"
    },
    {
        "name": "WADE COLLEGE",
        "location": "DALLAS, TX"
    },
    {
        "name": "ORLEANS TECHNICAL COLLEGE",
        "location": "PHILADELPHIA, PA"
    },
    {
        "name": "PENNSYLVANIA STATE UNIVERSITY-COLLEGE OF MEDICINE",
        "location": "HERSHEY, PA"
    },
    {
        "name": "AMERICAN INSTITUTE-TOMS RIVER",
        "location": "TOMS RIVER, NJ"
    },
    {
        "name": "JOSEPH F MCCLOSKEY SCHOOL OF NURSING",
        "location": "POTTSVILLE, PA"
    },
    {
        "name": "BLUE CLIFF CAREER COLLEGE",
        "location": "MOBILE, AL"
    },
    {
        "name": "CITADEL MILITARY COLLEGE OF SOUTH CAROLINA",
        "location": "CHARLESTON, SC"
    },
    {
        "name": "UNIVERSITY OF SOUTH CAROLINA-UPSTATE",
        "location": "SPARTANBURG, SC"
    },
    {
        "name": "EL PASO COMMUNITY COLLEGE",
        "location": "EL PASO, TX"
    },
    {
        "name": "METRO TECHNOLOGY CENTERS",
        "location": "OKLAHOMA CITY, OK"
    },
    {
        "name": "CET-COACHELLA",
        "location": "COACHELLA, CA"
    },
    {
        "name": "JACKSONVILLE STATE UNIVERSITY",
        "location": "JACKSONVILLE, AL"
    },
    {
        "name": "H COUNCILL TRENHOLM STATE COMMUNITY COLLEGE",
        "location": "MONTGOMERY, AL"
    },
    {
        "name": "TRINIDAD STATE JUNIOR COLLEGE",
        "location": "TRINIDAD, CO"
    },
    {
        "name": "COLLEGE OF INTERNATIONAL ESTHETICS INC",
        "location": "ARVADA, CO"
    },
    {
        "name": "VINCENNES UNIVERSITY",
        "location": "VINCENNES, IN"
    },
    {
        "name": "HOLLINS UNIVERSITY",
        "location": "ROANOKE, VA"
    },
    {
        "name": "DIGITAL FILM ACADEMY",
        "location": "NEW YORK, NY"
    },
    {
        "name": "JAMESTOWN COMMUNITY COLLEGE",
        "location": "JAMESTOWN, NY"
    },
    {
        "name": "MALONE UNIVERSITY",
        "location": "CANTON, OH"
    },
    {
        "name": "VALLEY FORGE MILITARY COLLEGE",
        "location": "WAYNE, PA"
    },
    {
        "name": "PAUL MITCHELL THE SCHOOL-GRAND RAPIDS",
        "location": "KENTWOOD, MI"
    },
    {
        "name": "BAY AREA MEDICAL ACADEMY",
        "location": "SAN FRANCISCO, CA"
    },
    {
        "name": "BRANFORD HALL CAREER INSTITUTE-AMITYVILLE",
        "location": "AMITYVILLE, NY"
    },
    {
        "name": "GATEWAY COMMUNITY COLLEGE",
        "location": "NEW HAVEN, CT"
    },
    {
        "name": "SOUTHWESTERN MICHIGAN COLLEGE",
        "location": "DOWAGIAC, MI"
    },
    {
        "name": "ELITE COLLEGE OF COSMETOLOGY",
        "location": "LEXINGTON, TN"
    },
    {
        "name": "TENNESSEE COLLEGE OF APPLIED TECHNOLOGY-WHITEVILLE",
        "location": "WHITEVILLE, TN"
    },
    {
        "name": "PAINE COLLEGE",
        "location": "AUGUSTA, GA"
    },
    {
        "name": "UNIVERSITY OF CALIFORNIA-SANTA CRUZ",
        "location": "SANTA CRUZ, CA"
    },
    {
        "name": "NORTHWESTERN CONNECTICUT COMMUNITY COLLEGE",
        "location": "WINSTED, CT"
    },
    {
        "name": "UNIVERSITY OF LOUISIANA AT LAFAYETTE",
        "location": "LAFAYETTE, LA"
    },
    {
        "name": "MAINE COLLEGE OF HEALTH PROFESSIONS",
        "location": "LEWISTON, ME"
    },
    {
        "name": "HEBREW COLLEGE",
        "location": "NEWTON CENTRE, MA"
    },
    {
        "name": "KIRTLAND COMMUNITY COLLEGE",
        "location": "GRAYLING, MI"
    },
    {
        "name": "RAINY RIVER COMMUNITY COLLEGE",
        "location": "INTERNATIONAL FALLS, MN"
    },
    {
        "name": "MONTANA STATE UNIVERSITY BILLINGS",
        "location": "BILLINGS, MT"
    },
    {
        "name": "RIZZIERI AVEDA SCHOOL FOR BEAUTY AND WELLNESS",
        "location": "VOORHEES, NJ"
    },
    {
        "name": "WAYNE COMMUNITY COLLEGE",
        "location": "GOLDSBORO, NC"
    },
    {
        "name": "MAYVILLE STATE UNIVERSITY",
        "location": "MAYVILLE, ND"
    },
    {
        "name": "EMPIRE BEAUTY SCHOOL-LANCASTER",
        "location": "LANCASTER, PA"
    },
    {
        "name": "SAINT VINCENT SEMINARY",
        "location": "LATROBE, PA"
    },
    {
        "name": "ERIE 2 CHAUTAUQUA CATTARAUGUS BOCES-PRACTICAL NURSING PROGRAM",
        "location": "ANGOLA, NY"
    },
    {
        "name": "THE NEW SCHOOL",
        "location": "NEW YORK, NY"
    },
    {
        "name": "COMMUNITY COLLEGE OF BALTIMORE COUNTY",
        "location": "BALTIMORE, MD"
    },
    {
        "name": "IOWA STATE UNIVERSITY",
        "location": "AMES, IA"
    },
    {
        "name": "COLLEGE OF SAINT BENEDICT",
        "location": "SAINT JOSEPH, MN"
    },
    {
        "name": "HAIRMASTERS INSTITUTE OF COSMETOLOGY",
        "location": "BLOOMINGTON, IL"
    },
    {
        "name": "DELTA STATE UNIVERSITY",
        "location": "CLEVELAND, MS"
    },
    {
        "name": "FRANKLIN PIERCE UNIVERSITY",
        "location": "RINDGE, NH"
    },
    {
        "name": "SULLIVAN COUNTY COMMUNITY COLLEGE",
        "location": "LOCH SHELDRAKE, NY"
    },
    {
        "name": "PHAGANS GRANTS PASS COLLEGE OF BEAUTY",
        "location": "GRANTS PASS, OR"
    },
    {
        "name": "DLP CONEMAUGH MEMORIAL MEDICAL CENTER",
        "location": "JOHNSTOWN, PA"
    },
    {
        "name": "D'JAY'S INSTITUTE OF COSMETOLOGY AND ESTHIOLOGY",
        "location": "BATON ROUGE, LA"
    },
    {
        "name": "AUSTIN COLLEGE",
        "location": "SHERMAN, TX"
    },
    {
        "name": "RANDOLPH-MACON COLLEGE",
        "location": "ASHLAND, VA"
    },
    {
        "name": "MARANATHA BAPTIST UNIVERSITY",
        "location": "WATERTOWN, WI"
    },
    {
        "name": "COLLEGE OF WILMINGTON",
        "location": "WILMINGTON, NC"
    },
    {
        "name": "SELMA UNIVERSITY",
        "location": "SELMA, AL"
    },
    {
        "name": "ST. JOHN'S COLLEGE",
        "location": "SANTA FE, NM"
    },
    {
        "name": "GRACE COLLEGE OF DIVINITY",
        "location": "FAYETTEVILLE, NC"
    },
    {
        "name": "BALDWIN PARK ADULT & COMMUNITY EDUCATION",
        "location": "BALDWIN PARK, CA"
    },
    {
        "name": "SEATTLE INSTITUTE OF EAST ASIAN MEDICINE",
        "location": "SEATTLE, WA"
    },
    {
        "name": "CALDWELL COMMUNITY COLLEGE AND TECHNICAL INSTITUTE",
        "location": "HUDSON, NC"
    },
    {
        "name": "WILKES COMMUNITY COLLEGE",
        "location": "WILKESBORO, NC"
    },
    {
        "name": "DRAKE UNIVERSITY",
        "location": "DES MOINES, IA"
    },
    {
        "name": "LOS MEDANOS COLLEGE",
        "location": "PITTSBURG, CA"
    },
    {
        "name": "OKLAHOMA WESLEYAN UNIVERSITY",
        "location": "BARTLESVILLE, OK"
    },
    {
        "name": "RAPHAEL'S SCHOOL OF BEAUTY CULTURE INC-ALLIANCE",
        "location": "ALLIANCE, OH"
    },
    {
        "name": "EMPIRE BEAUTY SCHOOL-CENTER CITY PHILADELPHIA",
        "location": "PHILADELPHIA, PA"
    },
    {
        "name": "TEXAS COLLEGE OF COSMETOLOGY-ABILENE",
        "location": "ABILENE, TX"
    },
    {
        "name": "PAUL MITCHELL THE SCHOOL-PROVO",
        "location": "PROVO, UT"
    },
    {
        "name": "MILAN INSTITUTE OF COSMETOLOGY",
        "location": "AMARILLO, TX"
    },
    {
        "name": "MORNINGSIDE COLLEGE",
        "location": "SIOUX CITY, IA"
    },
    {
        "name": "ILLINOIS WESLEYAN UNIVERSITY",
        "location": "BLOOMINGTON, IL"
    },
    {
        "name": "QUINCY UNIVERSITY",
        "location": "QUINCY, IL"
    },
    {
        "name": "EASTWICK COLLEGE-HACKENSACK",
        "location": "HACKENSACK, NJ"
    },
    {
        "name": "AMERICAN UNIVERSITY OF PUERTO RICO",
        "location": "MANATI, PR"
    },
    {
        "name": "FIELDING GRADUATE UNIVERSITY",
        "location": "SANTA BARBARA, CA"
    },
    {
        "name": "TALLADEGA COLLEGE",
        "location": "TALLADEGA, AL"
    },
    {
        "name": "GATEWAY COMMUNITY COLLEGE-CENTRAL CITY",
        "location": "PHOENIX, AZ"
    },
    {
        "name": "CHRISTOPHER NEWPORT UNIVERSITY",
        "location": "NEWPORT NEWS, VA"
    },
    {
        "name": "WAUKESHA COUNTY TECHNICAL COLLEGE",
        "location": "PEWAUKEE, WI"
    },
    {
        "name": "PLATT COLLEGE-STVT-MCALLEN",
        "location": "MCALLEN, TX"
    },
    {
        "name": "ICPR JUNIOR COLLEGE-MAYAGUEZ",
        "location": "MAYAGUEZ, PR"
    },
    {
        "name": "LONG ISLAND BEAUTY SCHOOL-HAUPPAUGE",
        "location": "HAUPPAUGE, NY"
    },
    {
        "name": "BLUE CLIFF COLLEGE-ALEXANDRIA",
        "location": "ALEXANDRIA, LA"
    },
    {
        "name": "THREE RIVERS COMMUNITY COLLEGE",
        "location": "NORWICH, CT"
    },
    {
        "name": "KENTUCKY CHRISTIAN UNIVERSITY",
        "location": "GRAYSON, KY"
    },
    {
        "name": "MONTCALM COMMUNITY COLLEGE",
        "location": "SIDNEY, MI"
    },
    {
        "name": "CARNEGIE INSTITUTE",
        "location": "TROY, MI"
    },
    {
        "name": "MARTIN LUTHER COLLEGE",
        "location": "NEW ULM, MN"
    },
    {
        "name": "SOUTHEASTERN BAPTIST COLLEGE",
        "location": "LAUREL, MS"
    },
    {
        "name": "SAN JOAQUIN VALLEY COLLEGE-RANCHO CORDOVA",
        "location": "RANCHO CORDOVA, CA"
    },
    {
        "name": "EMMAUS BIBLE COLLEGE",
        "location": "DUBUQUE, IA"
    },
    {
        "name": "ORANGE COUNTY COMMUNITY COLLEGE",
        "location": "MIDDLETOWN, NY"
    },
    {
        "name": "YESHIVA SHAAREI TORAH OF ROCKLAND",
        "location": "SUFFERN, NY"
    },
    {
        "name": "LAKE-SUMTER STATE COLLEGE",
        "location": "LEESBURG, FL"
    },
    {
        "name": "STATE COLLEGE OF FLORIDA-MANATEE-SARASOTA",
        "location": "BRADENTON, FL"
    },
    {
        "name": "THE ESTHETIC INSTITUTE",
        "location": "VIENNA, VA"
    },
    {
        "name": "PURDUE UNIVERSITY NORTHWEST",
        "location": "HAMMOND, IN"
    },
    {
        "name": "APEX ACADEMY HAIR SKIN NAILS SCHOOL OF COSMETOLOGY",
        "location": "ONTARIO, OH"
    },
    {
        "name": "CARIS COLLEGE",
        "location": "JEFFERSONVILLE, IN"
    },
    {
        "name": "GLOBAL TECH COLLEGE",
        "location": "TOLEDO, OH"
    },
    {
        "name": "COLLEGE UNBOUND",
        "location": "PROVIDENCE, RI"
    },
    {
        "name": "GUIDANCE COLLEGE",
        "location": "HOUSTON, TX"
    },
    {
        "name": "NUC UNIVERSITY - FLORIDA TECHNICAL COLLEGE - LAKELAND",
        "location": "LAKELAND, FL"
    },
    {
        "name": "TRICOCI UNIVERSITY OF BEAUTY CULTURE-NORMAL",
        "location": "NORMAL, IL"
    },
    {
        "name": "UNIVERSITY OF MICHIGAN-DEARBORN",
        "location": "DEARBORN, MI"
    },
    {
        "name": "THE TRAINING DOMAIN",
        "location": "FORT MYERS, FL"
    },
    {
        "name": "FLORIDA SOUTHWESTERN STATE COLLEGE",
        "location": "FORT MYERS, FL"
    },
    {
        "name": "THEATRE OF ARTS",
        "location": "HOLLYWOOD, CA"
    },
    {
        "name": "INTERNATIONAL COLLEGE OF BROADCASTING",
        "location": "DAYTON, OH"
    },
    {
        "name": "UNIVERSITY OF ILLINOIS CHICAGO",
        "location": "CHICAGO, IL"
    },
    {
        "name": "CENTER FOR NEUROSOMATIC STUDIES",
        "location": "CLEARWATER, FL"
    },
    {
        "name": "HOUSE OF HEAVILIN BEAUTY COLLEGE-ACADEMY OF BEAUTY PROFESSIONALS",
        "location": "MADISON, WI"
    },
    {
        "name": "HANNAH E MULLINS SCHOOL OF PRACTICAL NURSING",
        "location": "SALEM, OH"
    },
    {
        "name": "MAYLAND COMMUNITY COLLEGE",
        "location": "SPRUCE PINE, NC"
    },
    {
        "name": "CUNY HUNTER COLLEGE",
        "location": "NEW YORK, NY"
    },
    {
        "name": "TRINE UNIVERSITY",
        "location": "ANGOLA, IN"
    },
    {
        "name": "BOWLING GREEN STATE UNIVERSITY",
        "location": "BOWLING GREEN, OH"
    },
    {
        "name": "UNIVERSITY OF MARY WASHINGTON",
        "location": "FREDERICKSBURG, VA"
    },
    {
        "name": "NORTHERN ILLINOIS UNIVERSITY",
        "location": "DEKALB, IL"
    },
    {
        "name": "TINT SCHOOL OF MAKEUP & COSMETOLOGY",
        "location": "IRVING, TX"
    },
    {
        "name": "GREAT LAKES INSTITUTE OF TECHNOLOGY",
        "location": "ERIE, PA"
    },
    {
        "name": "OLD TOWN BARBER COLLEGE-WICHITA",
        "location": "WICHITA, KS"
    },
    {
        "name": "UNIVERSITY OF MISSOURI-SYSTEM OFFICE",
        "location": "COLUMBIA, MO"
    },
    {
        "name": "INTERNATIONAL COLLEGE OF COSMETOLOGY",
        "location": "OAKLAND, CA"
    },
    {
        "name": "WINTHROP UNIVERSITY",
        "location": "ROCK HILL, SC"
    },
    {
        "name": "COASTAL BEND COLLEGE",
        "location": "BEEVILLE, TX"
    },
    {
        "name": "UNIVERSITY OF CALIFORNIA-BERKELEY",
        "location": "BERKELEY, CA"
    },
    {
        "name": "UNIVERSITY OF ALASKA ANCHORAGE",
        "location": "ANCHORAGE, AK"
    },
    {
        "name": "PAUL MITCHELL THE SCHOOL-CHARLESTON",
        "location": "NORTH CHARLESTON, SC"
    },
    {
        "name": "NEW RIVER COMMUNITY COLLEGE",
        "location": "DUBLIN, VA"
    },
    {
        "name": "BLOOMSBURG UNIVERSITY OF PENNSYLVANIA",
        "location": "BLOOMSBURG, PA"
    },
    {
        "name": "KD CONSERVATORY COLLEGE OF FILM AND DRAMATIC ARTS",
        "location": "DALLAS, TX"
    },
    {
        "name": "COLLEGE OF THE MAINLAND",
        "location": "TEXAS CITY, TX"
    },
    {
        "name": "DELGADO COMMUNITY COLLEGE",
        "location": "NEW ORLEANS, LA"
    },
    {
        "name": "UNIVERSITY OF BALTIMORE",
        "location": "BALTIMORE, MD"
    },
    {
        "name": "CLEVELAND STATE UNIVERSITY",
        "location": "CLEVELAND, OH"
    },
    {
        "name": "CROWLEY'S RIDGE COLLEGE",
        "location": "PARAGOULD, AR"
    },
    {
        "name": "CALIFORNIA COLLEGE OF THE ARTS",
        "location": "SAN FRANCISCO, CA"
    },
    {
        "name": "CET-SAN JOSE",
        "location": "SAN JOSE, CA"
    },
    {
        "name": "ASM BEAUTY WORLD ACADEMY",
        "location": "HOLLYWOOD, FL"
    },
    {
        "name": "ASIAN-AMERICAN INTERNATIONAL BEAUTY COLLEGE",
        "location": "WESTMINSTER, CA"
    },
    {
        "name": "TENNESSEE SCHOOL OF BEAUTY OF KNOXVILLE INC",
        "location": "KNOXVILLE, TN"
    },
    {
        "name": "NORTHWEST COLLEGE-BEAVERTON",
        "location": "BEAVERTON, OR"
    },
    {
        "name": "OAKLAND CITY UNIVERSITY",
        "location": "OAKLAND CITY, IN"
    },
    {
        "name": "MILLENNIA ATLANTIC UNIVERSITY",
        "location": "DORAL, FL"
    },
    {
        "name": "THE SALON PROFESSIONAL ACADEMY-FARGO",
        "location": "FARGO, ND"
    },
    {
        "name": "MADISONVILLE COMMUNITY COLLEGE",
        "location": "MADISONVILLE, KY"
    },
    {
        "name": "NATIONAL UNIVERSITY OF HEALTH SCIENCES",
        "location": "LOMBARD, IL"
    },
    {
        "name": "TIDEWATER TECH-TRADES",
        "location": "NORFOLK, VA"
    },
    {
        "name": "WAYNESVILLE CAREER CENTER",
        "location": "WAYNESVILLE, MO"
    },
    {
        "name": "DELTA BEAUTY COLLEGE",
        "location": "GREENVILLE, MS"
    },
    {
        "name": "TAYLOR ANDREWS ACADEMY-ST GEORGE",
        "location": "ST. GEORGE, UT"
    },
    {
        "name": "EASTWICK COLLEGE-RAMSEY",
        "location": "RAMSEY, NJ"
    },
    {
        "name": "ST. JOSEPH'S COLLEGE OF NURSING",
        "location": "SYRACUSE, NY"
    },
    {
        "name": "PIMA MEDICAL INSTITUTE-DENVER",
        "location": "DENVER, CO"
    },
    {
        "name": "BOCA BEAUTY ACADEMY",
        "location": "BOCA RATON, FL"
    },
    {
        "name": "WAYNE FINGER LAKES BOCES-PRACTICAL NURSING PROGRAM",
        "location": "NEWARK, NY"
    },
    {
        "name": "ALTIERUS CAREER COLLEGE-TAMPA",
        "location": "TAMPA, FL"
    },
    {
        "name": "FLORIDA GULF COAST UNIVERSITY",
        "location": "FORT MYERS, FL"
    },
    {
        "name": "ECLIPS SCHOOL OF COSMETOLOGY AND BARBERING",
        "location": "OVERLAND, MO"
    },
    {
        "name": "NORTHSHORE TECHNICAL COMMUNITY COLLEGE",
        "location": "LACOMBE, LA"
    },
    {
        "name": "THE SANTA BARBARA AND VENTURA COLLEGES OF LAW AT VENTURA",
        "location": "VENTURA, CA"
    },
    {
        "name": "PHAGANS SCHOOL OF BEAUTY",
        "location": "SALEM, OR"
    },
    {
        "name": "NOTRE DAME OF MARYLAND UNIVERSITY",
        "location": "BALTIMORE, MD"
    },
    {
        "name": "CARRINGTON COLLEGE-TUCSON",
        "location": "TUCSON, AZ"
    },
    {
        "name": "TEXAS COLLEGE",
        "location": "TYLER, TX"
    },
    {
        "name": "HERZING UNIVERSITY-MADISON",
        "location": "MADISON, WI"
    },
    {
        "name": "PHILLIPS SCHOOL OF NURSING AT MOUNT SINAI BETH ISRAEL",
        "location": "NEW YORK, NY"
    },
    {
        "name": "INTER AMERICAN UNIVERSITY OF PUERTO RICO-FAJARDO",
        "location": "FAJARDO, PR"
    },
    {
        "name": "PURDUE UNIVERSITY",
        "location": "WEST LAFAYETTE, IN"
    },
    {
        "name": "ARIZONA CULINARY INSTITUTE",
        "location": "SCOTTSDALE, AZ"
    },
    {
        "name": "UNIVERSITY OF ALABAMA AT BIRMINGHAM",
        "location": "BIRMINGHAM, AL"
    },
    {
        "name": "SIENA COLLEGE",
        "location": "LOUDONVILLE, NY"
    },
    {
        "name": "PENNSYLVANIA COLLEGE OF HEALTH SCIENCES",
        "location": "LANCASTER, PA"
    },
    {
        "name": "EMPIRE BEAUTY SCHOOL-WEST MIFFLIN",
        "location": "WEST MIFFLIN, PA"
    },
    {
        "name": "CALC INSTITUTE OF TECHNOLOGY",
        "location": "ALTON, IL"
    },
    {
        "name": "UNIVERSITY OF AKRON WAYNE COLLEGE",
        "location": "ORRVILLE, OH"
    },
    {
        "name": "PENNSYLVANIA STATE UNIVERSITY-PENN STATE FAYETTE- EBERLY",
        "location": "LEMONT FURNACE, PA"
    },
    {
        "name": "GRAYS HARBOR COLLEGE",
        "location": "ABERDEEN, WA"
    },
    {
        "name": "GREEN RIVER COLLEGE",
        "location": "AUBURN, WA"
    },
    {
        "name": "LINFIELD UNIVERSITY-MCMINNVILLE CAMPUS",
        "location": "MCMINNVILLE, OR"
    },
    {
        "name": "TEXAS STATE UNIVERSITY",
        "location": "SAN MARCOS, TX"
    },
    {
        "name": "GEORGIA SOUTHERN UNIVERSITY",
        "location": "STATESBORO, GA"
    },
    {
        "name": "RADFORD UNIVERSITY-CARILION",
        "location": "ROANOKE, VA"
    },
    {
        "name": "WEST VIRGINIA STATE UNIVERSITY",
        "location": "INSTITUTE, WV"
    },
    {
        "name": "SOUTHERN CAREERS INSTITUTE-PHARR",
        "location": "PHARR, TX"
    },
    {
        "name": "ARKANSAS BEAUTY SCHOOL-LITTLE ROCK",
        "location": "LITTLE ROCK, AR"
    },
    {
        "name": "LIFE UNIVERSITY",
        "location": "MARIETTA, GA"
    },
    {
        "name": "COLUMBIA UNIVERSITY IN THE CITY OF NEW YORK",
        "location": "NEW YORK, NY"
    },
    {
        "name": "SAN DIEGO STATE UNIVERSITY",
        "location": "SAN DIEGO, CA"
    },
    {
        "name": "STARR KING SCHOOL FOR THE MINISTRY",
        "location": "OAKLAND, CA"
    },
    {
        "name": "JOHNSON & WALES UNIVERSITY-DENVER",
        "location": "DENVER, CO"
    },
    {
        "name": "UNIVERSITY OF NORTHERN IOWA",
        "location": "CEDAR FALLS, IA"
    },
    {
        "name": "UNIVERSITY OF MINNESOTA-CROOKSTON",
        "location": "CROOKSTON, MN"
    },
    {
        "name": "MOUNTAIN VIEW COLLEGE",
        "location": "DALLAS, TX"
    },
    {
        "name": "BRADLEY UNIVERSITY",
        "location": "PEORIA, IL"
    },
    {
        "name": "CAMPBELL UNIVERSITY",
        "location": "BUIES CREEK, NC"
    },
    {
        "name": "CEM COLLEGE-HUMACAO",
        "location": "HUMACAO, PR"
    },
    {
        "name": "COLUMBIA CENTRAL UNIVERSITY-YAUCO",
        "location": "YAUCO, PR"
    },
    {
        "name": "SOUTHERN TECHNICAL COLLEGE",
        "location": "ORLANDO, FL"
    },
    {
        "name": "TRENDSETTERS SCHOOL OF BEAUTY & BARBERING",
        "location": "JACKSONVILLE, FL"
    },
    {
        "name": "SAN JUAN BAUTISTA SCHOOL OF MEDICINE",
        "location": "CAGUAS, PR"
    },
    {
        "name": "GOSHEN COLLEGE",
        "location": "GOSHEN, IN"
    },
    {
        "name": "EMPIRE BEAUTY SCHOOL-FLORENCE",
        "location": "FLORENCE, KY"
    },
    {
        "name": "EASTERN KENTUCKY UNIVERSITY",
        "location": "RICHMOND, KY"
    },
    {
        "name": "NEW DIMENSIONS SCHOOL OF HAIR DESIGN",
        "location": "JOPLIN, MO"
    },
    {
        "name": "HEADMASTERS SCHOOL OF HAIR DESIGN",
        "location": "LEWISTON, ID"
    },
    {
        "name": "HUDSON COUNTY COMMUNITY COLLEGE",
        "location": "JERSEY CITY, NJ"
    },
    {
        "name": "CAPRI INSTITUTE OF HAIR DESIGN-CLIFTON",
        "location": "CLIFTON, NJ"
    },
    {
        "name": "HAWAII PACIFIC UNIVERSITY",
        "location": "HONOLULU, HI"
    },
    {
        "name": "MONMOUTH UNIVERSITY",
        "location": "WEST LONG BRANCH, NJ"
    },
    {
        "name": "YESHIVA KOLLEL TIFERETH ELIZER",
        "location": "BROOKLYN, NY"
    },
    {
        "name": "CENTRALIA BEAUTY COLLEGE",
        "location": "CENTRALIA, WA"
    },
    {
        "name": "SEMINARY BNOS CHAIM",
        "location": "LAKEWOOD, NJ"
    },
    {
        "name": "INDEPENDENT TRAINING & APPRENTICESHIP PROGRAM",
        "location": "SACRAMENTO, CA"
    },
    {
        "name": "GOULD'S ACADEMY",
        "location": "BARTLETT, TN"
    },
    {
        "name": "YESHIVAT HECHAL SHEMUEL",
        "location": "BROOKLYN, NY"
    },
    {
        "name": "NUC UNIVERSITY - IBC INSTITUTE - ESCORIAL",
        "location": "SAN JUAN, PR"
    },
    {
        "name": "THE PENNSYLVANIA STATE UNIVERSITY",
        "location": "UNIVERSITY PARK, PA"
    },
    {
        "name": "DIGITAL FILM ACADEMY - ATLANTA",
        "location": "ATLANTA, GA"
    },
    {
        "name": "CENTRAL PENNSYLVANIA DIESEL INSTITUTE",
        "location": "LIVERPOOL, PA"
    },
    {
        "name": "UNIVERSAL TRAINING INSTITUTE",
        "location": "PERTH AMBOY, NJ"
    },
    {
        "name": "FLORIDA CAREER COLLEGE-JACKSONVILLE",
        "location": "JACKSONVILLE, FL"
    },
    {
        "name": "SEWARD COUNTY COMMUNITY COLLEGE",
        "location": "LIBERAL, KS"
    },
    {
        "name": "STERLING COLLEGE",
        "location": "STERLING, KS"
    },
    {
        "name": "FLORIDA INTERNATIONAL UNIVERSITY",
        "location": "MIAMI, FL"
    },
    {
        "name": "IOWA CENTRAL COMMUNITY COLLEGE",
        "location": "FORT DODGE, IA"
    },
    {
        "name": "MARTINSBURG COLLEGE",
        "location": "MARTINSBURG, WV"
    },
    {
        "name": "TEXTURES INSTITUTE OF COSMETOLOGY",
        "location": "INDIANAPOLIS, IN"
    },
    {
        "name": "CALIFORNIA HEALTH SCIENCES UNIVERSITY",
        "location": "CLOVIS, CA"
    },
    {
        "name": "UNIVERSITY OF MINNESOTA-DULUTH",
        "location": "DULUTH, MN"
    },
    {
        "name": "NORTHWEST TECHNOLOGY CENTER-ALVA",
        "location": "ALVA, OK"
    },
    {
        "name": "TONI & GUY HAIRDRESSING ACADEMY-PLANO",
        "location": "PLANO, TX"
    },
    {
        "name": "OREGON HEALTH & SCIENCE UNIVERSITY",
        "location": "PORTLAND, OR"
    },
    {
        "name": "PHAGANS SCHOOL OF HAIR DESIGN",
        "location": "HAPPY VALLEY, OR"
    },
    {
        "name": "UNIVERSAL TECHNICAL INSTITUTE OF TEXAS INC.",
        "location": "HOUSTON, TX"
    },
    {
        "name": "THE BEAUTY INSTITUTE-AMBLER",
        "location": "AMBLER, PA"
    },
    {
        "name": "ELIZABETHTOWN COLLEGE",
        "location": "ELIZABETHTOWN, PA"
    },
    {
        "name": "SOUTH PIEDMONT COMMUNITY COLLEGE",
        "location": "POLKTON, NC"
    },
    {
        "name": "FAYETTEVILLE TECHNICAL COMMUNITY COLLEGE",
        "location": "FAYETTEVILLE, NC"
    },
    {
        "name": "UNIVERSITY OF OKLAHOMA-HEALTH SCIENCES CENTER",
        "location": "OKLAHOMA CITY, OK"
    },
    {
        "name": "YALE UNIVERSITY",
        "location": "NEW HAVEN, CT"
    },
    {
        "name": "WEST COAST UNIVERSITY-ONTARIO",
        "location": "ONTARIO, CA"
    },
    {
        "name": "FRED K MARCHMAN TECHNICAL COLLEGE",
        "location": "NEW PORT RICHEY, FL"
    },
    {
        "name": "MIDDLE TENNESSEE SCHOOL OF ANESTHESIA INC",
        "location": "MADISON, TN"
    },
    {
        "name": "GWYNEDD MERCY UNIVERSITY",
        "location": "GWYNEDD VALLEY, PA"
    },
    {
        "name": "NORTHEAST TECHNOLOGY CENTER",
        "location": "PRYOR, OK"
    },
    {
        "name": "UNIVERSITY OF SOUTH CAROLINA-SALKEHATCHIE",
        "location": "ALLENDALE, SC"
    },
    {
        "name": "INTERNATIONAL CULINARY ARTS AND SCIENCES INSTITUTE",
        "location": "CHESTERLAND, OH"
    },
    {
        "name": "CANADIAN VALLEY TECHNOLOGY CENTER",
        "location": "EL RENO, OK"
    },
    {
        "name": "ORION INSTITUTE",
        "location": "PERRYSBURG, OH"
    },
    {
        "name": "SPRINGFIELD COLLEGE-REGIONAL, ONLINE, AND CONTINUING EDUCATION",
        "location": "SPRINGFIELD, MA"
    },
    {
        "name": "PAYNE THEOLOGICAL SEMINARY",
        "location": "WILBERFORCE, OH"
    },
    {
        "name": "PIEDMONT UNIVERSITY",
        "location": "DEMOREST, GA"
    },
    {
        "name": "FUTURE GENERATIONS UNIVERSITY",
        "location": "FRANKLIN, WV"
    },
    {
        "name": "SOTHEBY'S INSTITUTE OF ART-NY",
        "location": "NEW YORK, NY"
    },
    {
        "name": "OHIO UNIVERSITY-ZANESVILLE CAMPUS",
        "location": "ZANESVILLE, OH"
    },
    {
        "name": "ALLEN UNIVERSITY",
        "location": "COLUMBIA, SC"
    },
    {
        "name": "DEVRY UNIVERSITY-MISSOURI",
        "location": "KANSAS CITY, MO"
    },
    {
        "name": "DELTA COLLEGE-SLIDELL CAMPUS",
        "location": "SLIDELL, LA"
    },
    {
        "name": "SOUTHWEST TECHNOLOGY CENTER",
        "location": "ALTUS, OK"
    },
    {
        "name": "THE SALON PROFESSIONAL ACADEMY-SAN JOSE",
        "location": "SAN JOSE, CA"
    },
    {
        "name": "SOLANO COMMUNITY COLLEGE",
        "location": "FAIRFIELD, CA"
    },
    {
        "name": "FRIENDS UNIVERSITY",
        "location": "WICHITA, KS"
    },
    {
        "name": "PALLADIUM TECHNICAL ACADEMY INC",
        "location": "TEMPLE CITY, CA"
    },
    {
        "name": "TEXAS HEALTH SCHOOL",
        "location": "HOUSTON, TX"
    },
    {
        "name": "PAUL MITCHELL THE SCHOOL-LOGAN",
        "location": "LOGAN, UT"
    },
    {
        "name": "DORSEY SCHOOL OF BUSINESS",
        "location": "MADISON HEIGHTS, MI"
    },
    {
        "name": "UNIVERSITY OF CENTRAL MISSOURI",
        "location": "WARRENSBURG, MO"
    },
    {
        "name": "MYCOMPUTERCAREER.COM",
        "location": "INDIANAPOLIS, IN"
    },
    {
        "name": "NATIONAL PARK COLLEGE",
        "location": "HOT SPRINGS, AR"
    },
    {
        "name": "UTICA COLLEGE",
        "location": "UTICA, NY"
    },
    {
        "name": "VASSAR COLLEGE",
        "location": "POUGHKEEPSIE, NY"
    },
    {
        "name": "TRINITY WASHINGTON UNIVERSITY",
        "location": "WASHINGTON, DC"
    },
    {
        "name": "ALBANY TECHNICAL COLLEGE",
        "location": "ALBANY, GA"
    },
    {
        "name": "WELLSPRING SCHOOL OF ALLIED HEALTH-KANSAS CITY",
        "location": "KANSAS CITY, MO"
    },
    {
        "name": "TRINITY INTERNATIONAL UNIVERSITY-FLORIDA",
        "location": "MIAMI, FL"
    },
    {
        "name": "LAGRANGE COLLEGE",
        "location": "LAGRANGE, GA"
    },
    {
        "name": "FORBES ROAD CAREER AND TECHNOLOGY CENTER",
        "location": "MONROEVILLE, PA"
    },
    {
        "name": "NORTH DAKOTA STATE COLLEGE OF SCIENCE",
        "location": "WAHPETON, ND"
    },
    {
        "name": "INSTITUTE OF BEAUTY CAREERS",
        "location": "ARECIBO, PR"
    },
    {
        "name": "EMPIRE BEAUTY SCHOOL-BROOKLYN",
        "location": "BROOKLYN, NY"
    },
    {
        "name": "ORLO SCHOOL OF HAIR DESIGN AND COSMETOLOGY",
        "location": "ALBANY, NY"
    },
    {
        "name": "LIA SCHORR INSTITUTE OF COSMETIC SKIN CARE TRAINING",
        "location": "NEW YORK, NY"
    },
    {
        "name": "THE UNIVERSITY OF TAMPA",
        "location": "TAMPA, FL"
    },
    {
        "name": "ACADEMY OF SALON AND SPA",
        "location": "FORT SMITH, AR"
    },
    {
        "name": "ERIE 1 BOCES",
        "location": "WEST SENECA, NY"
    },
    {
        "name": "FLORIDA BARBER ACADEMY",
        "location": "PLANTATION, FL"
    },
    {
        "name": "ELEVATE SALON INSTITUTE",
        "location": "ROYAL OAK, MI"
    },
    {
        "name": "TALMUDICAL SEMINARY OF BOBOV",
        "location": "BROOKLYN, NY"
    },
    {
        "name": "CRAVE BEAUTY ACADEMY",
        "location": "WICHITA, KS"
    },
    {
        "name": "NEBRASKA COLLEGE OF TECHNICAL AGRICULTURE",
        "location": "CURTIS, NE"
    },
    {
        "name": "PENNCO TECH-BRISTOL",
        "location": "BRISTOL, PA"
    },
    {
        "name": "TALLAHASSEE COMMUNITY COLLEGE",
        "location": "TALLAHASSEE, FL"
    },
    {
        "name": "NORTHLAND COLLEGE",
        "location": "ASHLAND, WI"
    },
    {
        "name": "SHASTA SCHOOL OF COSMETOLOGY",
        "location": "REDDING, CA"
    },
    {
        "name": "PLATT COLLEGE-MILLER-MOTTE-RALEIGH",
        "location": "RALEIGH, NC"
    },
    {
        "name": "BAY STATE COLLEGE",
        "location": "BOSTON, MA"
    },
    {
        "name": "SPRINGFIELD COLLEGE",
        "location": "SPRINGFIELD, MA"
    },
    {
        "name": "AQUINAS INSTITUTE OF THEOLOGY",
        "location": "SAINT LOUIS, MO"
    },
    {
        "name": "ALBANY MEDICAL COLLEGE",
        "location": "ALBANY, NY"
    },
    {
        "name": "DAVIS COLLEGE",
        "location": "JOHNSON CITY, NY"
    },
    {
        "name": "RUSSELL SAGE COLLEGE",
        "location": "TROY, NY"
    },
    {
        "name": "CARIBBEAN UNIVERSITY-CAROLINA",
        "location": "CAROLINA, PR"
    },
    {
        "name": "THE COLLEGE OF HEALTH CARE PROFESSIONS-NORTHWEST",
        "location": "HOUSTON, TX"
    },
    {
        "name": "ALFRED UNIVERSITY",
        "location": "ALFRED, NY"
    },
    {
        "name": "INSTITUTE OF ADVANCED MEDICAL ESTHETICS",
        "location": "ASHLAND, VA"
    },
    {
        "name": "STEVENS-HENAGER COLLEGE",
        "location": "ST. GEORGE, UT"
    },
    {
        "name": "CARRINGTON COLLEGE-SAN JOSE",
        "location": "SAN JOSE, CA"
    },
    {
        "name": "INTERACTIVE COLLEGE OF TECHNOLOGY",
        "location": "PASADENA, TX"
    },
    {
        "name": "PIMA MEDICAL INSTITUTE-COLORADO SPRINGS",
        "location": "COLORADO SPRINGS, CO"
    },
    {
        "name": "BIRTHINGWAY COLLEGE OF MIDWIFERY",
        "location": "BEAVERTON, OR"
    },
    {
        "name": "BLUE RIDGE COMMUNITY AND TECHNICAL COLLEGE",
        "location": "MARTINSBURG, WV"
    },
    {
        "name": "MANOR COLLEGE",
        "location": "JENKINTOWN, PA"
    },
    {
        "name": "UNIVERSITY OF PUERTO RICO-RIO PIEDRAS",
        "location": "SAN JUAN, PR"
    },
    {
        "name": "COLORADO STATE UNIVERSITY PUEBLO",
        "location": "PUEBLO, CO"
    },
    {
        "name": "ILLINOIS STATE UNIVERSITY",
        "location": "NORMAL, IL"
    },
    {
        "name": "NEW YORK MEDICAL COLLEGE",
        "location": "VALHALLA, NY"
    },
    {
        "name": "STONE ACADEMY-WATERBURY",
        "location": "WATERBURY, CT"
    },
    {
        "name": "PENTA COUNTY JOINT VOCATIONAL SCHOOL",
        "location": "PERRYSBURG, OH"
    },
    {
        "name": "PARKLAND COLLEGE",
        "location": "CHAMPAIGN, IL"
    },
    {
        "name": "ILLINOIS INSTITUTE OF TECHNOLOGY",
        "location": "CHICAGO, IL"
    },
    {
        "name": "SONOMA STATE UNIVERSITY",
        "location": "ROHNERT PARK, CA"
    },
    {
        "name": "SEMINARIO EVANGELICO DE PUERTO RICO",
        "location": "SAN JUAN, PR"
    },
    {
        "name": "EINE INC",
        "location": "TEWKSBURY, MA"
    },
    {
        "name": "CENTRAL COLLEGE OF COSMETOLOGY",
        "location": "SAINT ROBERT, MO"
    },
    {
        "name": "MINERAL COUNTY VOCATIONAL TECHNICAL CENTER",
        "location": "KEYSER, WV"
    },
    {
        "name": "LESTON COLLEGE",
        "location": "BAYAMON, PR"
    },
    {
        "name": "PAUL MITCHELL THE SCHOOL-MIAMI",
        "location": "MIAMI, FL"
    },
    {
        "name": "CALIFORNIA WESTERN SCHOOL OF LAW",
        "location": "SAN DIEGO, CA"
    },
    {
        "name": "FAIRFIELD UNIVERSITY",
        "location": "FAIRFIELD, CT"
    },
    {
        "name": "ALEXANDRIA SCHOOL OF SCIENTIFIC THERAPEUTICS",
        "location": "ALEXANDRIA, IN"
    },
    {
        "name": "MISSOURI WESTERN STATE UNIVERSITY",
        "location": "SAINT JOSEPH, MO"
    },
    {
        "name": "UNIVERSITY OF NORTH CAROLINA SCHOOL OF THE ARTS",
        "location": "WINSTON SALEM, NC"
    },
    {
        "name": "BRISTOL TECHNICAL EDUCATION CENTER",
        "location": "BRISTOL, CT"
    },
    {
        "name": "JEFFERSON LEWIS BOCES-PRACTICAL NURSING PROGRAM",
        "location": "WATERTOWN, NY"
    },
    {
        "name": "CUNY CITY COLLEGE",
        "location": "NEW YORK, NY"
    },
    {
        "name": "BACONE COLLEGE",
        "location": "MUSKOGEE, OK"
    },
    {
        "name": "SOUTHERN CONNECTICUT STATE UNIVERSITY",
        "location": "NEW HAVEN, CT"
    },
    {
        "name": "BELLARMINE UNIVERSITY",
        "location": "LOUISVILLE, KY"
    },
    {
        "name": "HOPE COLLEGE",
        "location": "HOLLAND, MI"
    },
    {
        "name": "ROCKY MOUNTAIN COLLEGE",
        "location": "BILLINGS, MT"
    },
    {
        "name": "HOGAN INSTITUTE OF COSMETOLOGY AND ESTHETICS",
        "location": "LILBURN, GA"
    },
    {
        "name": "ALBERT EINSTEIN COLLEGE OF MEDICINE",
        "location": "BRONX, NY"
    },
    {
        "name": "PONCE HEALTH SCIENCES UNIVERSITY-EAST",
        "location": "PONCE, PR"
    },
    {
        "name": "JERSEY COLLEGE -",
        "location": "FORT LAUDERDALE, FL"
    },
    {
        "name": "COLUMBIA COLLEGE - MINOT AFB",
        "location": "MINOT AFB, ND"
    },
    {
        "name": "NUC UNIVERSITY - IBC INSTITUTE - MOCA",
        "location": "MOCA, PR"
    },
    {
        "name": "COASTLINE BEAUTY COLLEGE - HEMET",
        "location": "HEMET, CA"
    },
    {
        "name": "COPPIN STATE UNIVERSITY",
        "location": "BALTIMORE, MD"
    },
    {
        "name": "UNITECH TRAINING ACADEMY-NEW ORLEANS",
        "location": "NEW ORLEANS, LA"
    },
    {
        "name": "CHAMBERLAIN UNIVERSITY-MICHIGAN",
        "location": "TROY, MI"
    },
    {
        "name": "GEORGE WASHINGTON UNIVERSITY",
        "location": "WASHINGTON, DC"
    },
    {
        "name": "UNIVERSITY OF NORTH CAROLINA SYSTEM",
        "location": "CHAPEL HILL, NC"
    },
    {
        "name": "SOUTHERN UTAH UNIVERSITY",
        "location": "CEDAR CITY, UT"
    },
    {
        "name": "HIRAM COLLEGE",
        "location": "HIRAM, OH"
    },
    {
        "name": "TRITON COLLEGE",
        "location": "RIVER GROVE, IL"
    },
    {
        "name": "TOP OF THE LINE BARBER COLLEGE",
        "location": "CHARLESTON, SC"
    },
    {
        "name": "EXPOSITO SCHOOL OF HAIR DESIGN",
        "location": "AMARILLO, TX"
    },
    {
        "name": "INDIANA WELLNESS COLLEGE",
        "location": "INDIANAPOLIS, IN"
    },
    {
        "name": "SOUTH DADE TECHNICAL COLLEGE",
        "location": "LEISURE CITY, FL"
    },
    {
        "name": "ROSS MEDICAL EDUCATION CENTER-ELYRIA",
        "location": "ELYRIA, OH"
    },
    {
        "name": "JEFFERSON COLLEGE",
        "location": "HILLSBORO, MO"
    },
    {
        "name": "GREAT OAKS CAREER CAMPUSES",
        "location": "CINCINNATI, OH"
    },
    {
        "name": "HOCKING COLLEGE",
        "location": "NELSONVILLE, OH"
    },
    {
        "name": "TRI-COUNTY ADULT CAREER CENTER",
        "location": "NELSONVILLE, OH"
    },
    {
        "name": "UNIVERSITY OF KENTUCKY",
        "location": "LEXINGTON, KY"
    },
    {
        "name": "KANSAS STATE UNIVERSITY",
        "location": "MANHATTAN, KS"
    },
    {
        "name": "ROSS MEDICAL EDUCATION CENTER-NILES",
        "location": "NILES, OH"
    },
    {
        "name": "JOHNSON & WALES UNIVERSITY-PROVIDENCE",
        "location": "PROVIDENCE, RI"
    },
    {
        "name": "MOTLOW STATE COMMUNITY COLLEGE",
        "location": "TULLAHOMA, TN"
    },
    {
        "name": "THE UNIVERSITY OF TENNESSEE-CHATTANOOGA",
        "location": "CHATTANOOGA, TN"
    },
    {
        "name": "SANTA ROSA JUNIOR COLLEGE",
        "location": "SANTA ROSA, CA"
    },
    {
        "name": "ANCILLA COLLEGE",
        "location": "DONALDSON, IN"
    },
    {
        "name": "OHIO STATE UNIVERSITY-LIMA CAMPUS",
        "location": "LIMA, OH"
    },
    {
        "name": "NORTHEAST IOWA COMMUNITY COLLEGE",
        "location": "CALMAR, IA"
    },
    {
        "name": "MARION TECHNICAL COLLEGE",
        "location": "MARION, OH"
    },
    {
        "name": "THE BARBER SCHOOL",
        "location": "MIDVALE, UT"
    },
    {
        "name": "INDIANA UNIVERSITY-SOUTHEAST",
        "location": "NEW ALBANY, IN"
    },
    {
        "name": "MOUNTAIN EMPIRE COMMUNITY COLLEGE",
        "location": "BIG STONE GAP, VA"
    },
    {
        "name": "BRYANT & STRATTON COLLEGE-ONLINE",
        "location": "ORCHARD PARK, NY"
    },
    {
        "name": "MERCYHURST UNIVERSITY-NORTH EAST CAMPUS",
        "location": "NORTH EAST, PA"
    },
    {
        "name": "FAITH THEOLOGICAL SEMINARY",
        "location": "BALTIMORE, MD"
    },
    {
        "name": "VIRGINIA STATE UNIVERSITY",
        "location": "PETERSBURG, VA"
    },
    {
        "name": "PENNSYLVANIA STATE UNIVERSITY-PENN STATE LEHIGH VALLEY",
        "location": "CENTER VALLEY, PA"
    },
    {
        "name": "ROANE-JACKSON TECHNICAL CENTER",
        "location": "LEROY, WV"
    },
    {
        "name": "PAUL MITCHELL THE SCHOOL-FARMINGTON HILLS",
        "location": "FARMINGTON HILLS, MI"
    },
    {
        "name": "BRIDGEVALLEY COMMUNITY & TECHNICAL COLLEGE",
        "location": "SOUTH CHARLESTON, WV"
    },
    {
        "name": "CALIFORNIA CAREER COLLEGE",
        "location": "CANOGA PARK, CA"
    },
    {
        "name": "MANUEL AND THERESA'S SCHOOL OF HAIR DESIGN-BRYAN",
        "location": "BRYAN, TX"
    },
    {
        "name": "KC'S SCHOOL OF HAIR DESIGN",
        "location": "PONTOTOC, MS"
    },
    {
        "name": "FEATHER RIVER COMMUNITY COLLEGE DISTRICT",
        "location": "QUINCY, CA"
    },
    {
        "name": "NORTHWEST NAZARENE UNIVERSITY",
        "location": "NAMPA, ID"
    },
    {
        "name": "VICTORIA BEAUTY COLLEGE INC",
        "location": "VICTORIA, TX"
    },
    {
        "name": "MISSISSIPPI STATE UNIVERSITY",
        "location": "MISSISSIPPI STATE, MS"
    },
    {
        "name": "ACADEMY OF HAIR DESIGN-OKLAHOMA CITY",
        "location": "OKLAHOMA CITY, OK"
    },
    {
        "name": "BARRETT AND COMPANY SCHOOL OF HAIR DESIGN",
        "location": "NICHOLASVILLE, KY"
    },
    {
        "name": "HAZARD COMMUNITY AND TECHNICAL COLLEGE",
        "location": "HAZARD, KY"
    },
    {
        "name": "NEW ENGLAND LAW-BOSTON",
        "location": "BOSTON, MA"
    },
    {
        "name": "DAVENPORT UNIVERSITY",
        "location": "GRAND RAPIDS, MI"
    },
    {
        "name": "ST CLOUD TECHNICAL AND COMMUNITY COLLEGE",
        "location": "SAINT CLOUD, MN"
    },
    {
        "name": "PINNACLE CAREER INSTITUTE-SOUTH KANSAS CITY",
        "location": "KANSAS CITY, MO"
    },
    {
        "name": "WINONA STATE UNIVERSITY",
        "location": "WINONA, MN"
    },
    {
        "name": "MEDAILLE COLLEGE",
        "location": "BUFFALO, NY"
    },
    {
        "name": "CAROLINA CHRISTIAN COLLEGE",
        "location": "WINSTON SALEM, NC"
    },
    {
        "name": "PONTIFICAL CATHOLIC UNIVERSITY OF PUERTO RICO-PONCE",
        "location": "PONCE, PR"
    },
    {
        "name": "INTER AMERICAN UNIVERSITY OF PUERTO RICO-BARRANQUITAS",
        "location": "BARRANQUITAS, PR"
    },
    {
        "name": "SCHOOL OF PROFESSIONAL HORTICULTURE, NEW YORK BOTANICAL GARDEN",
        "location": "BRONX, NY"
    },
    {
        "name": "GWINNETT COLLEGE-SANDY SPRINGS",
        "location": "SANDY SPRINGS, GA"
    },
    {
        "name": "PRISM CAREER INSTITUTE-WEST ATLANTIC CITY",
        "location": "WEST ATLANTIC CITY, NJ"
    },
    {
        "name": "NORTHWEST CAREER COLLEGE",
        "location": "LAS VEGAS, NV"
    },
    {
        "name": "PAUL MITCHELL THE SCHOOL-LITTLE ROCK",
        "location": "NORTH LITTLE ROCK, AR"
    },
    {
        "name": "CALIFORNIA MIRAMAR UNIVERSITY",
        "location": "SAN DIEGO, CA"
    },
    {
        "name": "EMPIRE BEAUTY SCHOOL-HARRISBURG",
        "location": "HARRISBURG, PA"
    },
    {
        "name": "NEW AGE TRAINING",
        "location": "NEW YORK, NY"
    },
    {
        "name": "EDP UNIVERSITY OF PUERTO RICO INC-SAN JUAN",
        "location": "SAN JUAN, PR"
    },
    {
        "name": "JENNY LEA ACADEMY OF COSMETOLOGY",
        "location": "WHITESBURG, KY"
    },
    {
        "name": "YESHIVA D'MONSEY RABBINICAL COLLEGE",
        "location": "MONSEY, NY"
    },
    {
        "name": "EASTERN INTERNATIONAL COLLEGE-JERSEY CITY",
        "location": "JERSEY CITY, NJ"
    },
    {
        "name": "UNIVERSITY OF PHOENIX-NEW JERSEY",
        "location": "JERSEY CITY, NJ"
    },
    {
        "name": "KNOX COLLEGE",
        "location": "GALESBURG, IL"
    },
    {
        "name": "UNIVERSITY OF MAINE-SYSTEM CENTRAL OFFICE",
        "location": "ORONO, ME"
    },
    {
        "name": "MONTANA ACADEMY OF SALONS",
        "location": "GREAT FALLS, MT"
    },
    {
        "name": "EASTERN MENNONITE UNIVERSITY",
        "location": "HARRISONBURG, VA"
    },
    {
        "name": "SOUTH FLORIDA BIBLE COLLEGE AND THEOLOGICAL SEMINARY",
        "location": "DEERFIELD BEACH, FL"
    },
    {
        "name": "UNIVERSITY OF MINNESOTA-ROCHESTER",
        "location": "ROCHESTER, MN"
    },
    {
        "name": "SETON HALL UNIVERSITY",
        "location": "SOUTH ORANGE, NJ"
    },
    {
        "name": "INSTITUTE OF AMERICAN INDIAN AND ALASKA NATIVE CULTURE AND ARTS DEVELOPMENT",
        "location": "SANTA FE, NM"
    },
    {
        "name": "SHARPS ACADEMY OF HAIR STYLING",
        "location": "GRAND BLANC, MI"
    },
    {
        "name": "SCHUYLER STEUBEN CHEMUNG TIOGA ALLEGANY BOCES",
        "location": "ELMIRA, NY"
    },
    {
        "name": "BAPTIST HEALTH COLLEGE LITTLE ROCK",
        "location": "LITTLE ROCK, AR"
    },
    {
        "name": "LANEY COLLEGE",
        "location": "OAKLAND, CA"
    },
    {
        "name": "PIEDMONT VIRGINIA COMMUNITY COLLEGE",
        "location": "CHARLOTTESVILLE, VA"
    },
    {
        "name": "ALL BEAUTY COLLEGE",
        "location": "BULLHEAD CITY, AZ"
    },
    {
        "name": "CARDINAL STRITCH UNIVERSITY",
        "location": "MILWAUKEE, WI"
    },
    {
        "name": "MARIAN UNIVERSITY",
        "location": "FOND DU LAC, WI"
    },
    {
        "name": "SPARTAN COLLEGE OF AERONAUTICS & TECHNOLOGY",
        "location": "INGLEWOOD, CA"
    },
    {
        "name": "ALPENA COMMUNITY COLLEGE",
        "location": "ALPENA, MI"
    },
    {
        "name": "MERIDIAN TECHNOLOGY CENTER",
        "location": "STILLWATER, OK"
    },
    {
        "name": "ANGELINA COLLEGE",
        "location": "LUFKIN, TX"
    },
    {
        "name": "CALIFORNIA STATE UNIVERSITY-SACRAMENTO",
        "location": "SACRAMENTO, CA"
    },
    {
        "name": "MIAMI VALLEY CAREER TECHNOLOGY CENTER",
        "location": "ENGLEWOOD, OH"
    },
    {
        "name": "LANE COMMUNITY COLLEGE",
        "location": "EUGENE, OR"
    },
    {
        "name": "BATES TECHNICAL COLLEGE",
        "location": "TACOMA, WA"
    },
    {
        "name": "OHIO MEDICAL CAREER COLLEGE",
        "location": "DAYTON, OH"
    },
    {
        "name": "LANGSTON UNIVERSITY",
        "location": "LANGSTON, OK"
    },
    {
        "name": "JOHN A GUPTON COLLEGE",
        "location": "NASHVILLE, TN"
    },
    {
        "name": "CANNELLA SCHOOL OF HAIR DESIGN-BLUE ISLAND",
        "location": "BLUE ISLAND, IL"
    },
    {
        "name": "CET-SALINAS",
        "location": "SALINAS, CA"
    },
    {
        "name": "MERRITT COLLEGE",
        "location": "OAKLAND, CA"
    },
    {
        "name": "TECHNICAL COLLEGE OF THE ROCKIES",
        "location": "DELTA, CO"
    },
    {
        "name": "UNITED STATES AIR FORCE ACADEMY",
        "location": "USAF ACADEMY, CO"
    },
    {
        "name": "CALIFORNIA STATE UNIVERSITY MARITIME ACADEMY",
        "location": "VALLEJO, CA"
    },
    {
        "name": "TAFT UNIVERSITY SYSTEM",
        "location": "LAKEWOOD, CO"
    },
    {
        "name": "GUY'S SHREVEPORT ACADEMY OF COSMETOLOGY INC",
        "location": "SHREVEPORT, LA"
    },
    {
        "name": "LOYOLA UNIVERSITY NEW ORLEANS",
        "location": "NEW ORLEANS, LA"
    },
    {
        "name": "MARYLAND BEAUTY ACADEMY OF ESSEX",
        "location": "BALTIMORE, MD"
    },
    {
        "name": "UNIVERSITY OF NORTHERN COLORADO",
        "location": "GREELEY, CO"
    },
    {
        "name": "POINT LOMA NAZARENE UNIVERSITY",
        "location": "SAN DIEGO, CA"
    },
    {
        "name": "ROBERT MORRIS UNIVERSITY",
        "location": "MOON TOWNSHIP, PA"
    },
    {
        "name": "OGLE SCHOOL HAIR SKIN NAILS-ARLINGTON",
        "location": "ARLINGTON, TX"
    },
    {
        "name": "DOUGLAS J AVEDA INSTITUTE",
        "location": "EAST LANSING, MI"
    },
    {
        "name": "CENTRAL TEXAS BEAUTY COLLEGE-TEMPLE",
        "location": "TEMPLE, TX"
    },
    {
        "name": "THE ACADEMY OF HAIR DESIGN SIX",
        "location": "HATTIESBURG, MS"
    },
    {
        "name": "NATIONAL AMERICAN UNIVERSITY-ALBUQUERQUE WEST",
        "location": "ALBUQUERQUE, NM"
    },
    {
        "name": "LEXINGTON HEALING ARTS ACADEMY",
        "location": "LEXINGTON, KY"
    },
    {
        "name": "SEARCY BEAUTY COLLEGE",
        "location": "SEARCY, AR"
    },
    {
        "name": "FIVE BRANCHES UNIVERSITY",
        "location": "SANTA CRUZ, CA"
    },
    {
        "name": "PROFESSIONAL INSTITUTE OF BEAUTY",
        "location": "EL MONTE, CA"
    },
    {
        "name": "PENSACOLA STATE COLLEGE",
        "location": "PENSACOLA, FL"
    },
    {
        "name": "DORDT UNIVERSITY",
        "location": "SIOUX CENTER, IA"
    },
    {
        "name": "HUSSIAN COLLEGE-DAYMAR COLLEGE CLARKSVILLE",
        "location": "CLARKSVILLE, TN"
    },
    {
        "name": "HERITAGE UNIVERSITY",
        "location": "TOPPENISH, WA"
    },
    {
        "name": "NASSAU COMMUNITY COLLEGE",
        "location": "GARDEN CITY, NY"
    },
    {
        "name": "DORSEY SCHOOL OF BUSINESS-ROSEVILLE CULINARY ACADEMY",
        "location": "ROSEVILLE, MI"
    },
    {
        "name": "MIDWEST TECHNICAL INSTITUTE-MOLINE",
        "location": "MOLINE, IL"
    },
    {
        "name": "WORLD CLASS ACADEMY OF BEAUTY CAREERS",
        "location": "TALLAHASSEE, FL"
    },
    {
        "name": "YESHIVA GEDOLAH OF CLIFFWOOD",
        "location": "KEYPORT, NJ"
    },
    {
        "name": "REISS-DAVIS GRADUATE SCHOOL",
        "location": "LOS ANGELES, CA"
    },
    {
        "name": "HEALTH-TECH INSTITUTE OF MEMPHIS",
        "location": "MEMPHIS, TN"
    },
    {
        "name": "GLENDALE CAREER COLLEGE-BRIGHTWOOD TEACHOUT",
        "location": "SAN DIEGO, CA"
    },
    {
        "name": "NUC UNIVERSITY - FLORIDA TECHNICAL COLLEGE - ORLANDO",
        "location": "ORLANDO, FL"
    },
    {
        "name": "MASON ANTHONY SCHOOL OF COSMETOLOGY ARTS & SCIENCES",
        "location": "HILLIARD, OH"
    },
    {
        "name": "BELLASA PROFESSIONAL INSTITUTE",
        "location": "NORTH MIAMI, FL"
    },
    {
        "name": "PUERTO RICO SCHOOL OF NURSE ANESTHETISTS",
        "location": "HATO REY, PR"
    },
    {
        "name": "COLUMBIA COLLEGE - WAYNESVILLE",
        "location": "WAYNESVILLE, MO"
    },
    {
        "name": "COLUMBIA COLLEGE - NSB KINGS BAY",
        "location": "KINGS BAY, GA"
    },
    {
        "name": "LOYOLA UNIVERSITY MARYLAND",
        "location": "BALTIMORE, MD"
    },
    {
        "name": "THE HEALTHCARE INSTITUTE",
        "location": "SAN ANTONIO, TX"
    },
    {
        "name": "FLORIDA CAREER COLLEGE-ORLANDO",
        "location": "ORLANDO, FL"
    },
    {
        "name": "LATIN BEAUTY ACADEMY",
        "location": "GREENACRES, FL"
    },
    {
        "name": "RANDOLPH TECHNICAL CENTER",
        "location": "ELKINS, WV"
    },
    {
        "name": "DORSEY SCHOOL OF BUSINESS-SAGINAW",
        "location": "SAGINAW, MI"
    },
    {
        "name": "MOUNT VERNON NAZARENE UNIVERSITY",
        "location": "MOUNT VERNON, OH"
    },
    {
        "name": "REGINA WEBB ACADEMY",
        "location": "BOWLING GREEN, KY"
    },
    {
        "name": "SOUTH CENTRAL COLLEGE",
        "location": "NORTH MANKATO, MN"
    },
    {
        "name": "NORTHEAST LAKEVIEW COLLEGE",
        "location": "UNIVERSAL CITY, TX"
    },
    {
        "name": "SUNY MORRISVILLE",
        "location": "MORRISVILLE, NY"
    },
    {
        "name": "BUCKNELL UNIVERSITY",
        "location": "LEWISBURG, PA"
    },
    {
        "name": "STATE UNIVERSITY OF NEW YORK AT NEW PALTZ",
        "location": "NEW PALTZ, NY"
    },
    {
        "name": "TULSA COMMUNITY COLLEGE",
        "location": "TULSA, OK"
    },
    {
        "name": "THE ART INSTITUTE OF ATLANTA",
        "location": "ATLANTA, GA"
    },
    {
        "name": "SALUS UNIVERSITY",
        "location": "ELKINS PARK, PA"
    },
    {
        "name": "PENNSYLVANIA STATE UNIVERSITY-PENN STATE GREATER ALLEGHENY",
        "location": "MCKEESPORT, PA"
    },
    {
        "name": "WILLIAMSON CHRISTIAN COLLEGE",
        "location": "FRANKLIN, TN"
    },
    {
        "name": "GWINNETT COLLEGE-MARIETTA CAMPUS",
        "location": "MARIETTA, GA"
    },
    {
        "name": "TRI-COUNTY TECHNICAL COLLEGE",
        "location": "PENDLETON, SC"
    },
    {
        "name": "CALIFORNIA STATE UNIVERSITY-EAST BAY",
        "location": "HAYWARD, CA"
    },
    {
        "name": "CHANDLER-GILBERT COMMUNITY COLLEGE",
        "location": "CHANDLER, AZ"
    },
    {
        "name": "EMMANUEL COLLEGE",
        "location": "FRANKLIN SPRINGS, GA"
    },
    {
        "name": "PANACHE ACADEMY OF BEAUTY",
        "location": "BARABOO, WI"
    },
    {
        "name": "YOUNGSTOWN STATE UNIVERSITY",
        "location": "YOUNGSTOWN, OH"
    },
    {
        "name": "TENNESSEE COLLEGE OF APPLIED TECHNOLOGY-MORRISTOWN",
        "location": "MORRISTOWN, TN"
    },
    {
        "name": "OGLE SCHOOL HAIR SKIN NAILS-DENTON",
        "location": "DENTON, TX"
    },
    {
        "name": "ROSS MEDICAL EDUCATION CENTER-ONTARIO",
        "location": "ONTARIO, OH"
    },
    {
        "name": "FINGER LAKES COMMUNITY COLLEGE",
        "location": "CANANDAIGUA, NY"
    },
    {
        "name": "SOUTHWESTERN OREGON COMMUNITY COLLEGE",
        "location": "COOS BAY, OR"
    },
    {
        "name": "HAIR PROFESSIONALS CAREER COLLEGE",
        "location": "PALOS HILLS, IL"
    },
    {
        "name": "INTEGRITY COLLEGE OF HEALTH",
        "location": "PASADENA, CA"
    },
    {
        "name": "COMMONWEALTH INSTITUTE OF FUNERAL SERVICE",
        "location": "HOUSTON, TX"
    },
    {
        "name": "BLAKE AUSTIN COLLEGE",
        "location": "VACAVILLE, CA"
    },
    {
        "name": "UNIVERSITY OF MASSACHUSETTS MEDICAL SCHOOL WORCESTER",
        "location": "WORCESTER, MA"
    },
    {
        "name": "THE NEW ENGLAND CONSERVATORY OF MUSIC",
        "location": "BOSTON, MA"
    },
    {
        "name": "WALSH COLLEGE",
        "location": "TROY, MI"
    },
    {
        "name": "TEXAS A&M UNIVERSITY-CENTRAL TEXAS",
        "location": "KILLEEN, TX"
    },
    {
        "name": "UNIVERSITY OF CALIFORNIA-IRVINE",
        "location": "IRVINE, CA"
    },
    {
        "name": "BOISE STATE UNIVERSITY",
        "location": "BOISE, ID"
    },
    {
        "name": "CENTRE COLLEGE",
        "location": "DANVILLE, KY"
    },
    {
        "name": "TECHNICAL LEARNING CENTERS INC",
        "location": "WASHINGTON, DC"
    },
    {
        "name": "FORT PIERCE BEAUTY ACADEMY",
        "location": "FORT PIERCE, FL"
    },
    {
        "name": "BEREA COLLEGE",
        "location": "BEREA, KY"
    },
    {
        "name": "INDIANA UNIVERSITY-PURDUE UNIVERSITY-INDIANAPOLIS",
        "location": "INDIANAPOLIS, IN"
    },
    {
        "name": "MASSAGE THERAPY INSTITUTE OF COLORADO",
        "location": "DENVER, CO"
    },
    {
        "name": "ECUMENICAL THEOLOGICAL SEMINARY",
        "location": "DETROIT, MI"
    },
    {
        "name": "HIGHLIGHTS BEAUTY SCHOOLS",
        "location": "FEDERAL WAY, WA"
    },
    {
        "name": "NATIONAL AMERICAN UNIVERSITY-COLORADO SPRINGS SOUTH",
        "location": "COLORADO SPRINGS, CO"
    },
    {
        "name": "FLORIDA NATIONAL UNIVERSITY",
        "location": "HIALEAH, FL"
    },
    {
        "name": "COLEGIO EDUCATIVO TECNOLOGICO INDUSTRIAL INC",
        "location": "ARECIBO, PR"
    },
    {
        "name": "PACIFIC COLLEGE",
        "location": "COSTA MESA, CA"
    },
    {
        "name": "BEAL UNIVERSITY",
        "location": "BANGOR, ME"
    },
    {
        "name": "MIDLAND UNIVERSITY",
        "location": "FREMONT, NE"
    },
    {
        "name": "SAINT ANSELM COLLEGE",
        "location": "MANCHESTER, NH"
    },
    {
        "name": "HOBART INSTITUTE OF WELDING TECHNOLOGY",
        "location": "TROY, OH"
    },
    {
        "name": "HOLLYWOOD INSTITUTE OF BEAUTY CAREERS",
        "location": "HOLLYWOOD, FL"
    },
    {
        "name": "CHARLESTON COSMETOLOGY INSTITUTE",
        "location": "CHARLESTON, SC"
    },
    {
        "name": "TOURO UNIVERSITY NEVADA",
        "location": "HENDERSON, NV"
    },
    {
        "name": "MONTGOMERY BEAUTY SCHOOL",
        "location": "SILVER SPRING, MD"
    },
    {
        "name": "ROB ROY ACADEMY-NEW BEDFORD",
        "location": "NEW BEDFORD, MA"
    },
    {
        "name": "D'YOUVILLE COLLEGE",
        "location": "BUFFALO, NY"
    },
    {
        "name": "DIXIE STATE UNIVERSITY",
        "location": "SAINT GEORGE, UT"
    },
    {
        "name": "GARY MANUEL AVEDA INSTITUTE",
        "location": "SEATTLE, WA"
    },
    {
        "name": "PIMA MEDICAL INSTITUTE-AURORA",
        "location": "AURORA, CO"
    },
    {
        "name": "WARTBURG COLLEGE",
        "location": "WAVERLY, IA"
    },
    {
        "name": "PLATT COLLEGE-ONTARIO",
        "location": "ONTARIO, CA"
    },
    {
        "name": "AVIATION INSTITUTE OF MAINTENANCE-DALLAS",
        "location": "IRVING, TX"
    },
    {
        "name": "CALIFORNIA STATE UNIVERSITY-CHANNEL ISLANDS",
        "location": "CAMARILLO, CA"
    },
    {
        "name": "UNIVERSITY OF THE POTOMAC-VA CAMPUS",
        "location": "FALLS CHURCH, VA"
    },
    {
        "name": "LOS ANGELES COLLEGE OF MUSIC",
        "location": "PASADENA, CA"
    },
    {
        "name": "NORTHERN OKLAHOMA COLLEGE",
        "location": "TONKAWA, OK"
    },
    {
        "name": "UNIVERSITY OF PORTLAND",
        "location": "PORTLAND, OR"
    },
    {
        "name": "ALVIN COMMUNITY COLLEGE",
        "location": "ALVIN, TX"
    },
    {
        "name": "EMPIRE BEAUTY SCHOOL-INDIANAPOLIS",
        "location": "INDIANAPOLIS, IN"
    },
    {
        "name": "OHIO STATE SCHOOL OF COSMETOLOGY-HEATH",
        "location": "HEATH, OH"
    },
    {
        "name": "CALIFORNIA STATE UNIVERSITY-BAKERSFIELD",
        "location": "BAKERSFIELD, CA"
    },
    {
        "name": "MT SAN ANTONIO COLLEGE",
        "location": "WALNUT, CA"
    },
    {
        "name": "KASKASKIA COLLEGE",
        "location": "CENTRALIA, IL"
    },
    {
        "name": "SOUTHERN ILLINOIS UNIVERSITY-SYSTEM OFFICE",
        "location": "CARBONDALE, IL"
    },
    {
        "name": "CALIFORNIA BAPTIST UNIVERSITY",
        "location": "RIVERSIDE, CA"
    },
    {
        "name": "AVEDA ARTS & SCIENCES INSTITUTE-LAFAYETTE",
        "location": "LAFAYETTE, LA"
    },
    {
        "name": "SOWELA TECHNICAL COMMUNITY COLLEGE",
        "location": "LAKE CHARLES, LA"
    },
    {
        "name": "ORANGE COAST COLLEGE",
        "location": "COSTA MESA, CA"
    },
    {
        "name": "UNIVERSITY OF WISCONSIN-GREEN BAY",
        "location": "GREEN BAY, WI"
    },
    {
        "name": "FISK UNIVERSITY",
        "location": "NASHVILLE, TN"
    },
    {
        "name": "MEDICAL COLLEGE OF WISCONSIN",
        "location": "MILWAUKEE, WI"
    },
    {
        "name": "YESHIVA DERECH CHAIM",
        "location": "BROOKLYN, NY"
    },
    {
        "name": "STYLEMASTER COLLEGE OF HAIR DESIGN",
        "location": "LONGVIEW, WA"
    },
    {
        "name": "EDIC COLLEGE",
        "location": "CAGUAS, PR"
    },
    {
        "name": "DELTA COLLEGE INC",
        "location": "COVINGTON, LA"
    },
    {
        "name": "BALDWIN BEAUTY SCHOOL-NORTH AUSTIN",
        "location": "AUSTIN, TX"
    },
    {
        "name": "CATTARAUGUS ALLEGANY BOCES-PRACTICAL NURSING PROGRAM",
        "location": "OLEAN, NY"
    },
    {
        "name": "NORTHEAST TECHNOLOGY CENTER-KANSAS",
        "location": "KANSAS, OK"
    },
    {
        "name": "IYRS SCHOOL OF TECHNOLOGY & TRADES",
        "location": "NEWPORT, RI"
    },
    {
        "name": "MIDWEST TECHNICAL INSTITUTE-SPRINGFIELD",
        "location": "SPRINGFIELD, IL"
    },
    {
        "name": "ATA COLLEGE",
        "location": "LOUISVILLE, KY"
    },
    {
        "name": "TRINITY COLLEGE OF NURSING & HEALTH SCIENCES",
        "location": "ROCK ISLAND, IL"
    },
    {
        "name": "LEXINGTON THEOLOGICAL SEMINARY",
        "location": "LEXINGTON, KY"
    },
    {
        "name": "NORTH CENTRAL MISSOURI COLLEGE",
        "location": "TRENTON, MO"
    },
    {
        "name": "TULANE UNIVERSITY OF LOUISIANA",
        "location": "NEW ORLEANS, LA"
    },
    {
        "name": "LYTLES REDWOOD EMPIRE BEAUTY COLLEGE INC",
        "location": "SANTA ROSA, CA"
    },
    {
        "name": "KAUAI COMMUNITY COLLEGE",
        "location": "LIHUE, HI"
    },
    {
        "name": "NEW YORK COLLEGE OF PODIATRIC MEDICINE",
        "location": "NEW YORK, NY"
    },
    {
        "name": "BORICUA COLLEGE",
        "location": "NEW YORK, NY"
    },
    {
        "name": "COLUMBIA COLLEGE",
        "location": "COLUMBIA, MO"
    },
    {
        "name": "CHAMINADE UNIVERSITY OF HONOLULU",
        "location": "HONOLULU, HI"
    },
    {
        "name": "WESTCLIFF UNIVERSITY",
        "location": "IRVINE, CA"
    },
    {
        "name": "ELYON COLLEGE",
        "location": "BROOKLYN, NY"
    },
    {
        "name": "SAN BERNARDINO BEAUTY COLLEGE",
        "location": "SAN BERNARDINO, CA"
    },
    {
        "name": "YESHIVA GEDOLAH KEREN HATORAH",
        "location": "LAKEWOOD, NJ"
    },
    {
        "name": "YESHIVAS EMEK HATORAH",
        "location": "HOWELL, NJ"
    },
    {
        "name": "TONSORIAL ARTS BARBER COLLEGE",
        "location": "TEXARKANA, TX"
    },
    {
        "name": "CALIFORNIA ARTS UNIVERSITY",
        "location": "FULLERTON, CA"
    },
    {
        "name": "JERSEY COLLEGE -",
        "location": "EWING, NJ"
    },
    {
        "name": "CYRUS THE GREAT INTERNATIONAL ONLINE UNIVERSITY",
        "location": "YONKERS, NY"
    },
    {
        "name": "CALVIN UNIVERSITY - HANDLON CAMPUS",
        "location": "IONIA, MI"
    },
    {
        "name": "HARFORD COMMUNITY COLLEGE",
        "location": "BEL AIR, MD"
    },
    {
        "name": "MIAMI MEDIA SCHOOL",
        "location": "DORAL, FL"
    },
    {
        "name": "TEACHERS COLLEGE AT COLUMBIA UNIVERSITY",
        "location": "NEW YORK, NY"
    },
    {
        "name": "LANIER TECHNICAL COLLEGE",
        "location": "GAINESVILLE, GA"
    },
    {
        "name": "MEDICAL CAREER & TECHNICAL COLLEGE",
        "location": "RICHMOND, KY"
    },
    {
        "name": "UNIVERSITY OF MINNESOTA-TWIN CITIES",
        "location": "MINNEAPOLIS, MN"
    },
    {
        "name": "RIDGEWATER COLLEGE",
        "location": "WILLMAR, MN"
    },
    {
        "name": "LAMAR STATE COLLEGE-PORT ARTHUR",
        "location": "PORT ARTHUR, TX"
    },
    {
        "name": "OHIO MEDIA SCHOOL-COLUMBUS",
        "location": "COLUMBUS, OH"
    },
    {
        "name": "COMMUNITY COLLEGE OF DENVER",
        "location": "DENVER, CO"
    },
    {
        "name": "UNIVERSITY OF RHODE ISLAND",
        "location": "KINGSTON, RI"
    },
    {
        "name": "ROANOKE-CHOWAN COMMUNITY COLLEGE",
        "location": "AHOSKIE, NC"
    },
    {
        "name": "WICHITA STATE UNIVERSITY",
        "location": "WICHITA, KS"
    },
    {
        "name": "SOUTHEAST COMMUNITY COLLEGE AREA",
        "location": "LINCOLN, NE"
    },
    {
        "name": "NATIONAL AMERICAN UNIVERSITY-ELLSWORTH AFB EXTENSION",
        "location": "ELLSWORTH AIR FORCE BASE, SD"
    },
    {
        "name": "SAN JOSE-EVERGREEN COMMUNITY COLLEGE DISTRICT",
        "location": "SAN JOSE, CA"
    },
    {
        "name": "COLUMBUS STATE UNIVERSITY",
        "location": "COLUMBUS, GA"
    },
    {
        "name": "FLAIR BEAUTY COLLEGE",
        "location": "VALENCIA, CA"
    },
    {
        "name": "JACKSON COLLEGE",
        "location": "JACKSON, MI"
    },
    {
        "name": "MILAN INSTITUTE-MERCED",
        "location": "MERCED, CA"
    },
    {
        "name": "COSMETOLOGY ACADEMY OF TEXARKANA",
        "location": "TEXARKANA, TX"
    },
    {
        "name": "ROGUE COMMUNITY COLLEGE",
        "location": "GRANTS PASS, OR"
    },
    {
        "name": "INTERACTIVE COLLEGE OF TECHNOLOGY-CHAMBLEE",
        "location": "CHAMBLEE, GA"
    },
    {
        "name": "TEXAS BARBER COLLEGE",
        "location": "HOUSTON, TX"
    },
    {
        "name": "EAGLE GATE COLLEGE-LAYTON",
        "location": "LAYTON, UT"
    },
    {
        "name": "PITZER COLLEGE",
        "location": "CLAREMONT, CA"
    },
    {
        "name": "CLAREMONT MCKENNA COLLEGE",
        "location": "CLAREMONT, CA"
    },
    {
        "name": "UNIVERSITY OF IOWA",
        "location": "IOWA CITY, IA"
    },
    {
        "name": "WOODLAND COMMUNITY COLLEGE",
        "location": "WOODLAND, CA"
    },
    {
        "name": "GLEN DOW ACADEMY OF HAIR DESIGN",
        "location": "SPOKANE, WA"
    },
    {
        "name": "FORTIS INSTITUTE-FORTY FORT",
        "location": "FORTY FORT, PA"
    },
    {
        "name": "TENNESSEE BOARD OF REGENTS",
        "location": "NASHVILLE, TN"
    },
    {
        "name": "MESA COMMUNITY COLLEGE",
        "location": "MESA, AZ"
    },
    {
        "name": "HUNTINGDON COLLEGE",
        "location": "MONTGOMERY, AL"
    },
    {
        "name": "CAMPBELLSVILLE UNIVERSITY",
        "location": "CAMPBELLSVILLE, KY"
    },
    {
        "name": "HANOVER COLLEGE",
        "location": "HANOVER, IN"
    },
    {
        "name": "NEVADA SYSTEM OF HIGHER EDUCATION-SYSTEM OFFICE",
        "location": "RENO, NV"
    },
    {
        "name": "ATLANTIC UNIVERSITY COLLEGE",
        "location": "GUAYNABO, PR"
    },
    {
        "name": "ATA COLLEGE",
        "location": "EL CAJON, CA"
    },
    {
        "name": "TRENZ BEAUTY ACADEMY",
        "location": "CALUMET CITY, IL"
    },
    {
        "name": "ROSS MEDICAL EDUCATION CENTER-TAYLOR",
        "location": "TAYLOR, MI"
    },
    {
        "name": "ELMIRA COLLEGE",
        "location": "ELMIRA, NY"
    },
    {
        "name": "ARKANSAS BEAUTY COLLEGE",
        "location": "RUSSELLVILLE, AR"
    },
    {
        "name": "NEW YORK CONSERVATORY FOR DRAMATIC ARTS",
        "location": "NEW YORK, NY"
    },
    {
        "name": "CUNY JOHN JAY COLLEGE OF CRIMINAL JUSTICE",
        "location": "NEW YORK, NY"
    },
    {
        "name": "UTA MESIVTA OF KIRYAS JOEL",
        "location": "MONROE, NY"
    },
    {
        "name": "TROCAIRE COLLEGE",
        "location": "BUFFALO, NY"
    },
    {
        "name": "SOUTH COAST COLLEGE",
        "location": "ORANGE, CA"
    },
    {
        "name": "ELITE WELDING ACADEMY LLC",
        "location": "CINCINNATI, OH"
    },
    {
        "name": "LORAS COLLEGE",
        "location": "DUBUQUE, IA"
    },
    {
        "name": "MCPHERSON COLLEGE",
        "location": "MCPHERSON, KS"
    },
    {
        "name": "CUMBERLAND COUNTY COLLEGE",
        "location": "VINELAND, NJ"
    },
    {
        "name": "EMPIRE BEAUTY SCHOOL-BLOOMFIELD",
        "location": "BLOOMFIELD, NJ"
    },
    {
        "name": "SUNY COLLEGE AT PLATTSBURGH",
        "location": "PLATTSBURGH, NY"
    },
    {
        "name": "UCAS UNIVERSITY OF COSMETOLOGY ARTS & SCIENCES-HARLINGEN",
        "location": "HARLINGEN, TX"
    },
    {
        "name": "ACADEMY OF COSMETOLOGY AND ESTHETICS NYC",
        "location": "STATEN ISLAND, NY"
    },
    {
        "name": "SUMMIT SALON ACADEMY",
        "location": "TACOMA, WA"
    },
    {
        "name": "WASHTENAW COMMUNITY COLLEGE",
        "location": "ANN ARBOR, MI"
    },
    {
        "name": "BECKER COLLEGE",
        "location": "WORCESTER, MA"
    },
    {
        "name": "SAINT MARY'S UNIVERSITY OF MINNESOTA",
        "location": "WINONA, MN"
    },
    {
        "name": "FULTON-MONTGOMERY COMMUNITY COLLEGE",
        "location": "JOHNSTOWN, NY"
    },
    {
        "name": "NYACK COLLEGE",
        "location": "NEW YORK, NY"
    },
    {
        "name": "THE UNIVERSITY OF VIRGINIA'S COLLEGE AT WISE",
        "location": "WISE, VA"
    },
    {
        "name": "TONI & GUY HAIRDRESSING ACADEMY-SHORELINE",
        "location": "SHORELINE, WA"
    },
    {
        "name": "NUNEZ COMMUNITY COLLEGE",
        "location": "CHALMETTE, LA"
    },
    {
        "name": "CREIGHTON UNIVERSITY",
        "location": "OMAHA, NE"
    },
    {
        "name": "HUDSON VALLEY COMMUNITY COLLEGE",
        "location": "TROY, NY"
    },
    {
        "name": "EMPIRE BEAUTY SCHOOL-JACKSON",
        "location": "JACKSON, TN"
    },
    {
        "name": "HAWAII MEDICAL COLLEGE",
        "location": "HONOLULU, HI"
    },
    {
        "name": "CAROLINA COLLEGE OF HAIR DESIGN",
        "location": "ASHEVILLE, NC"
    },
    {
        "name": "WESTERN ILLINOIS UNIVERSITY",
        "location": "MACOMB, IL"
    },
    {
        "name": "LINDSEY INSTITUTE OF COSMETOLOGY",
        "location": "BOWLING GREEN, KY"
    },
    {
        "name": "SOUTHEASTERN COLLEGE-CHARLESTON",
        "location": "NORTH CHARLESTON, SC"
    },
    {
        "name": "NORTH-WEST COLLEGE-RIVERSIDE",
        "location": "RIVERSIDE, CA"
    },
    {
        "name": "DELL'ARTE INTERNATIONAL SCHOOL OF PHYSICAL THEATRE",
        "location": "BLUE LAKE, CA"
    },
    {
        "name": "UNIVERSITY OF CALIFORNIA-SYSTEM ADMINISTRATION CENTRAL OFFICE",
        "location": "OAKLAND, CA"
    },
    {
        "name": "OCCIDENTAL COLLEGE",
        "location": "LOS ANGELES, CA"
    },
    {
        "name": "VALDOSTA STATE UNIVERSITY",
        "location": "VALDOSTA, GA"
    },
    {
        "name": "AMERICAN RIVER COLLEGE",
        "location": "SACRAMENTO, CA"
    },
    {
        "name": "ACADEMY OF ESTHETICS AND COSMETOLOGY",
        "location": "SAN FERNANDO, CA"
    },
    {
        "name": "CITY COLLEGES OF CHICAGO-DISTRICT OFFICE",
        "location": "CHICAGO, IL"
    },
    {
        "name": "VANDERBILT UNIVERSITY",
        "location": "NASHVILLE, TN"
    },
    {
        "name": "SOKA UNIVERSITY OF AMERICA",
        "location": "ALISO VIEJO, CA"
    },
    {
        "name": "NATIONAL UNIVERSITY",
        "location": "LA JOLLA, CA"
    },
    {
        "name": "MERCY COLLEGE OF HEALTH SCIENCES",
        "location": "DES MOINES, IA"
    },
    {
        "name": "VALPARAISO UNIVERSITY",
        "location": "VALPARAISO, IN"
    },
    {
        "name": "BARTON COLLEGE",
        "location": "WILSON, NC"
    },
    {
        "name": "ELIZABETH CITY STATE UNIVERSITY",
        "location": "ELIZABETH CITY, NC"
    },
    {
        "name": "UNITED TECHNICAL CENTER",
        "location": "CLARKSBURG, WV"
    },
    {
        "name": "RIVERTOWN SCHOOL OF BEAUTY BARBER SKIN CARE AND NAILS",
        "location": "COLUMBUS, GA"
    },
    {
        "name": "TREND SETTERS SCHOOL",
        "location": "CAPE GIRARDEAU, MO"
    },
    {
        "name": "NEW YORK INSTITUTE OF MASSAGE INC",
        "location": "WILLIAMSVILLE, NY"
    },
    {
        "name": "HEALTHCARE TRAINING INSTITUTE",
        "location": "UNION, NJ"
    },
    {
        "name": "IDEAL BEAUTY ACADEMY",
        "location": "JEFFERSONVILLE, IN"
    },
    {
        "name": "CALIFORNIA BEAUTY SCHOOL",
        "location": "MODESTO, CA"
    },
    {
        "name": "LAKEVIEW COLLEGE OF NURSING",
        "location": "DANVILLE, IL"
    },
    {
        "name": "ELIZABETHTOWN COMMUNITY AND TECHNICAL COLLEGE",
        "location": "ELIZABETHTOWN, KY"
    },
    {
        "name": "LAWRENCE MEMORIAL HOSPITAL SCHOOL OF NURSING",
        "location": "MEDFORD, MA"
    },
    {
        "name": "ROSS MEDICAL EDUCATION CENTER-FLINT",
        "location": "FLINT, MI"
    },
    {
        "name": "STEPHENS COLLEGE",
        "location": "COLUMBIA, MO"
    },
    {
        "name": "WESTERN NEW ENGLAND UNIVERSITY",
        "location": "SPRINGFIELD, MA"
    },
    {
        "name": "THE KING'S UNIVERSITY",
        "location": "SOUTHLAKE, TX"
    },
    {
        "name": "SIERRA COLLEGE OF BEAUTY",
        "location": "MERCED, CA"
    },
    {
        "name": "CAPRI COLLEGE-DAVENPORT",
        "location": "DAVENPORT, IA"
    },
    {
        "name": "LINCOLN CHRISTIAN UNIVERSITY",
        "location": "LINCOLN, IL"
    },
    {
        "name": "SUNY MARITIME COLLEGE",
        "location": "THROGGS NECK, NY"
    },
    {
        "name": "PACIFIC COLLEGE OF ORIENTAL MEDICINE-NEW YORK",
        "location": "NEW YORK, NY"
    },
    {
        "name": "MINNEAPOLIS COLLEGE OF ART AND DESIGN",
        "location": "MINNEAPOLIS, MN"
    },
    {
        "name": "AMERICA EVANGELICAL UNIVERSITY",
        "location": "LOS ANGELES, CA"
    },
    {
        "name": "VIRGINIA UNIVERSITY OF INTEGRATIVE MEDICINE",
        "location": "FAIRFAX, VA"
    },
    {
        "name": "ANN WEBB SKIN INSTITUTE",
        "location": "AUSTIN, TX"
    },
    {
        "name": "PLATT COLLEGE-EDGE TECH ACADEMY",
        "location": "ARLINGTON, TX"
    },
    {
        "name": "AMERICAN FITNESS AND NUTRITION ACADEMY",
        "location": "PASADENA, CA"
    },
    {
        "name": "AVENUE FIVE INSTITUTE-SOUTH AUSTIN CAMPUS",
        "location": "AUSTIN, TX"
    },
    {
        "name": "KC BEAUTY ACADEMY",
        "location": "LOS ANGELES, CA"
    },
    {
        "name": "JERSEY COLLEGE -",
        "location": "LARGO, FL"
    },
    {
        "name": "EMPIRE BEAUTY SCHOOL-NEWPORT NEWS",
        "location": "NEWPORT NEWS, VA"
    },
    {
        "name": "ARIZONA STATE UNIVERSITY - PIMA",
        "location": "TUCSON, AZ"
    },
    {
        "name": "DAYTON SCHOOL OF MEDICAL MASSAGE - COLUMBUS SCHOOL OF MEDICAL MASSAGE",
        "location": "DUBLIN, OH"
    },
    {
        "name": "UNIVERSITY OF MONTANA (THE) - BITTERROOT COLLEGE UNIVERSITY OF MONTANA",
        "location": "HAMILTON, MT"
    },
    {
        "name": "WILMINGTON UNIVERSITY",
        "location": "NEW CASTLE, DE"
    },
    {
        "name": "FONTBONNE UNIVERSITY",
        "location": "SAINT LOUIS, MO"
    },
    {
        "name": "UNIVERSITY OF NORTH CAROLINA AT GREENSBORO",
        "location": "GREENSBORO, NC"
    },
    {
        "name": "UNIVERSITY OF PUERTO RICO-PONCE",
        "location": "PONCE, PR"
    },
    {
        "name": "KENNESAW STATE UNIVERSITY",
        "location": "KENNESAW, GA"
    },
    {
        "name": "FLORIDA AGRICULTURAL AND MECHANICAL UNIVERSITY",
        "location": "TALLAHASSEE, FL"
    },
    {
        "name": "FELBRY COLLEGE SCHOOL OF NURSING",
        "location": "COLUMBUS, OH"
    },
    {
        "name": "OHIO UNIVERSITY-SOUTHERN CAMPUS",
        "location": "IRONTON, OH"
    },
    {
        "name": "AMERICAN BEAUTY ACADEMY-WEST VALLEY CAMPUS",
        "location": "WEST VALLEY CITY, UT"
    },
    {
        "name": "MARKETTI ACADEMY OF COSMETOLOGY",
        "location": "WATERFORD, MI"
    },
    {
        "name": "TENNESSEE COLLEGE OF APPLIED TECHNOLOGY NASHVILLE",
        "location": "NASHVILLE, TN"
    },
    {
        "name": "GRANITE STATE COLLEGE",
        "location": "CONCORD, NH"
    },
    {
        "name": "SOUTHWESTERN COMMUNITY COLLEGE",
        "location": "SYLVA, NC"
    },
    {
        "name": "PATRICK HENRY COMMUNITY COLLEGE",
        "location": "MARTINSVILLE, VA"
    },
    {
        "name": "WHARTON COUNTY JUNIOR COLLEGE",
        "location": "WHARTON, TX"
    },
    {
        "name": "OTIS COLLEGE OF ART AND DESIGN",
        "location": "LOS ANGELES, CA"
    },
    {
        "name": "LOWELL ACADEMY HAIRSTYLING INSTITUTE",
        "location": "LOWELL, MA"
    },
    {
        "name": "EMPIRE BEAUTY SCHOOL-AVONDALE",
        "location": "AVONDALE, AZ"
    },
    {
        "name": "MT. DIABLO ADULT EDUCATION-MT. DIABLO USD",
        "location": "CONCORD, CA"
    },
    {
        "name": "LOURDES UNIVERSITY",
        "location": "SYLVANIA, OH"
    },
    {
        "name": "SOUTH DAKOTA SCHOOL OF MINES AND TECHNOLOGY",
        "location": "RAPID CITY, SD"
    },
    {
        "name": "NATIONAL AMERICAN UNIVERSITY-MESQUITE",
        "location": "MESQUITE, TX"
    },
    {
        "name": "ASHLAND COMMUNITY AND TECHNICAL COLLEGE",
        "location": "ASHLAND, KY"
    },
    {
        "name": "OHIO TECHNICAL COLLEGE",
        "location": "CLEVELAND, OH"
    },
    {
        "name": "CAYUGA COUNTY COMMUNITY COLLEGE",
        "location": "AUBURN, NY"
    },
    {
        "name": "PICKAWAY ROSS JOINT VOCATIONAL SCHOOL DISTRICT",
        "location": "CHILLICOTHE, OH"
    },
    {
        "name": "DAKOTA WESLEYAN UNIVERSITY",
        "location": "MITCHELL, SD"
    },
    {
        "name": "GRACE INTERNATIONAL BEAUTY SCHOOL",
        "location": "FLUSHING, NY"
    },
    {
        "name": "ACCESS CAREERS",
        "location": "HEMPSTEAD, NY"
    },
    {
        "name": "DALLAS COLLEGE",
        "location": "DALLAS, TX"
    },
    {
        "name": "HOUSTON COMMUNITY COLLEGE",
        "location": "HOUSTON, TX"
    },
    {
        "name": "UNIVERSITY OF PHOENIX-NEVADA",
        "location": "LAS VEGAS, NV"
    },
    {
        "name": "UNIVERSITY OF NORTH TEXAS AT DALLAS",
        "location": "DALLAS, TX"
    },
    {
        "name": "HOUSTON TRAINING SCHOOLS-GESSNER",
        "location": "HOUSTON, TX"
    },
    {
        "name": "THE UNIVERSITY OF WEST FLORIDA",
        "location": "PENSACOLA, FL"
    },
    {
        "name": "GUILFORD TECHNICAL COMMUNITY COLLEGE",
        "location": "JAMESTOWN, NC"
    },
    {
        "name": "HAGERSTOWN COMMUNITY COLLEGE",
        "location": "HAGERSTOWN, MD"
    },
    {
        "name": "JENNY LEA ACADEMY OF COSMETOLOGY",
        "location": "JOHNSON CITY, TN"
    },
    {
        "name": "CHAMBERLAIN UNIVERSITY-ADMINISTRATIVE OFFICE",
        "location": "CHICAGO, IL"
    },
    {
        "name": "GWINNETT COLLEGE-LILBURN",
        "location": "LILBURN, GA"
    },
    {
        "name": "LOUISBURG COLLEGE",
        "location": "LOUISBURG, NC"
    },
    {
        "name": "DELAWARE TECHNICAL COMMUNITY COLLEGE-TERRY",
        "location": "DOVER, DE"
    },
    {
        "name": "ECKERD COLLEGE",
        "location": "SAINT PETERSBURG, FL"
    },
    {
        "name": "HINDS COMMUNITY COLLEGE",
        "location": "RAYMOND, MS"
    },
    {
        "name": "LITTLE BIG HORN COLLEGE",
        "location": "CROW AGENCY, MT"
    },
    {
        "name": "PROTEGE ACADEMY",
        "location": "EAST LANSING, MI"
    },
    {
        "name": "NORTHWEST HVAC/R TRAINING CENTER",
        "location": "SPOKANE, WA"
    },
    {
        "name": "CBD COLLEGE",
        "location": "LOS ANGELES, CA"
    },
    {
        "name": "WILSON COMMUNITY COLLEGE",
        "location": "WILSON, NC"
    },
    {
        "name": "HALLMARK UNIVERSITY",
        "location": "SAN ANTONIO, TX"
    },
    {
        "name": "COOPER UNION FOR THE ADVANCEMENT OF SCIENCE AND ART",
        "location": "NEW YORK, NY"
    },
    {
        "name": "THE GENERAL THEOLOGICAL SEMINARY",
        "location": "NEW YORK, NY"
    },
    {
        "name": "TRINITY HEALTH SYSTEM SCHOOL OF NURSING",
        "location": "STEUBENVILLE, OH"
    },
    {
        "name": "UNIVERSITY OF SOUTH FLORIDA",
        "location": "TAMPA, FL"
    },
    {
        "name": "ELMIRA BUSINESS INSTITUTE",
        "location": "VESTAL, NY"
    },
    {
        "name": "CENTRAL OKLAHOMA COLLEGE",
        "location": "OKLAHOMA CITY, OK"
    },
    {
        "name": "PHAGANS MEDFORD BEAUTY SCHOOL",
        "location": "MEDFORD, OR"
    },
    {
        "name": "VALLEY COLLEGE-MARTINSBURG",
        "location": "MARTINSBURG, WV"
    },
    {
        "name": "LYCOMING COLLEGE",
        "location": "WILLIAMSPORT, PA"
    },
    {
        "name": "UNIVERSITY OF NEBRASKA-LINCOLN",
        "location": "LINCOLN, NE"
    },
    {
        "name": "LAKE ERIE COLLEGE",
        "location": "PAINESVILLE, OH"
    },
    {
        "name": "OPELOUSAS SCHOOL OF COSMETOLOGY",
        "location": "OPELOUSAS, LA"
    },
    {
        "name": "LASALLE TECH",
        "location": "HOUMA, LA"
    },
    {
        "name": "CATHERINE HINDS INSTITUTE OF ESTHETICS",
        "location": "WOBURN, MA"
    },
    {
        "name": "NAZARENE THEOLOGICAL SEMINARY",
        "location": "KANSAS CITY, MO"
    },
    {
        "name": "UNIVERSITY OF CENTRAL OKLAHOMA",
        "location": "EDMOND, OK"
    },
    {
        "name": "SUMMIT SALON ACADEMY-GAINESVILLE",
        "location": "GAINESVILLE, FL"
    },
    {
        "name": "CONCORDE CAREER COLLEGE-SAN ANTONIO",
        "location": "SAN ANTONIO, TX"
    },
    {
        "name": "ALLSTATE HAIRSTYLING & BARBER COLLEGE",
        "location": "CLEVELAND, OH"
    },
    {
        "name": "TAYLOR ANDREWS ACADEMY OF HAIR DESIGN-WEST JORDAN",
        "location": "WEST JORDAN, UT"
    },
    {
        "name": "BK COSMO COLLEGE OF COSMETOLOGY",
        "location": "KERRVILLE, TX"
    },
    {
        "name": "SOUTH ORANGE COUNTY COMMUNITY COLLEGE DISTRICT",
        "location": "MISSION VIEJO, CA"
    },
    {
        "name": "KECK GRADUATE INSTITUTE",
        "location": "CLAREMONT, CA"
    },
    {
        "name": "RICHMONT GRADUATE UNIVERSITY",
        "location": "CHATTANOOGA, TN"
    },
    {
        "name": "SOUTHEASTERN COLLEGE-COLUMBIA",
        "location": "COLUMBIA, SC"
    },
    {
        "name": "KENNETH SHULER SCHOOL OF COSMETOLOGY-SPARTANBURG",
        "location": "SPARTANBURG, SC"
    },
    {
        "name": "CARL ALBERT STATE COLLEGE",
        "location": "POTEAU, OK"
    },
    {
        "name": "PENNSYLVANIA STATE UNIVERSITY-PENN STATE MONT ALTO",
        "location": "MONT ALTO, PA"
    },
    {
        "name": "PALOMAR COLLEGE",
        "location": "SAN MARCOS, CA"
    },
    {
        "name": "ST LUKES HOSPITAL SCHOOL OF NURSING",
        "location": "BETHLEHEM, PA"
    },
    {
        "name": "UNIVERSITY OF PITTSBURGH-GREENSBURG",
        "location": "GREENSBURG, PA"
    },
    {
        "name": "UNIVERSITY OF THE INCARNATE WORD",
        "location": "SAN ANTONIO, TX"
    },
    {
        "name": "WHITWORTH UNIVERSITY",
        "location": "SPOKANE, WA"
    },
    {
        "name": "CENTRAL SCHOOL OF PRACTICAL NURSING",
        "location": "NORFOLK, VA"
    },
    {
        "name": "RAPHAEL'S SCHOOL OF BEAUTY CULTURE INC-BRUNSWICK",
        "location": "BRUNSWICK, OH"
    },
    {
        "name": "EAST LOS ANGELES COLLEGE",
        "location": "MONTEREY PARK, CA"
    },
    {
        "name": "MIDWESTERN BAPTIST THEOLOGICAL SEMINARY",
        "location": "KANSAS CITY, MO"
    },
    {
        "name": "SANTA BARBARA CITY COLLEGE",
        "location": "SANTA BARBARA, CA"
    },
    {
        "name": "PAIER COLLEGE OF ART INC",
        "location": "HAMDEN, CT"
    },
    {
        "name": "GEORGIA COLLEGE & STATE UNIVERSITY",
        "location": "MILLEDGEVILLE, GA"
    },
    {
        "name": "GORDON STATE COLLEGE",
        "location": "BARNESVILLE, GA"
    },
    {
        "name": "MARSHALLTOWN COMMUNITY COLLEGE",
        "location": "MARSHALLTOWN, IA"
    },
    {
        "name": "COLLECTIV ACADEMY",
        "location": "SANDY, UT"
    },
    {
        "name": "WESLEYAN COLLEGE",
        "location": "MACON, GA"
    },
    {
        "name": "THE SCHOOL OF ARCHITECTURE",
        "location": "PARADISE VALLEY, AZ"
    },
    {
        "name": "CLINTON TECHNICAL SCHOOL",
        "location": "CLINTON, MO"
    },
    {
        "name": "ROSS MEDICAL EDUCATION CENTER-BRIGHTON",
        "location": "BRIGHTON, MI"
    },
    {
        "name": "NEW YORK SCHOOL OF INTERIOR DESIGN",
        "location": "NEW YORK, NY"
    },
    {
        "name": "EMPIRE BEAUTY SCHOOL-FRAMINGHAM",
        "location": "FRAMINGHAM, MA"
    },
    {
        "name": "SOUTHEASTERN COLLEGE-CHARLOTTE",
        "location": "CHARLOTTE, NC"
    },
    {
        "name": "BRIAR CLIFF UNIVERSITY",
        "location": "SIOUX CITY, IA"
    },
    {
        "name": "MODEL COLLEGE OF HAIR DESIGN",
        "location": "SAINT CLOUD, MN"
    },
    {
        "name": "WORCESTER STATE UNIVERSITY",
        "location": "WORCESTER, MA"
    },
    {
        "name": "RESURRECTION UNIVERSITY",
        "location": "CHICAGO, IL"
    },
    {
        "name": "MESIVTHA TIFERETH JERUSALEM OF AMERICA",
        "location": "NEW YORK, NY"
    },
    {
        "name": "HUNTINGTON SCHOOL OF BEAUTY CULTURE",
        "location": "HUNTINGTON, WV"
    },
    {
        "name": "MOORE CAREER COLLEGE",
        "location": "BATON ROUGE, LA"
    },
    {
        "name": "EMMANUEL COLLEGE",
        "location": "BOSTON, MA"
    },
    {
        "name": "WINGATE UNIVERSITY",
        "location": "WINGATE, NC"
    },
    {
        "name": "EDUMED PARTNERS",
        "location": "GOODLETTSVILLE, TN"
    },
    {
        "name": "ADVANTAGE CAREER INSTITUTE",
        "location": "EATONTOWN, NJ"
    },
    {
        "name": "YESHIVA CHEMDAS HATORAH",
        "location": "LAKEWOOD, NJ"
    },
    {
        "name": "SOUTHEASTERN ESTHETICS INSTITUTE",
        "location": "COLUMBIA, SC"
    },
    {
        "name": "CHICAGO PROFESSIONAL CENTER",
        "location": "PROSPECT HEIGHTS, IL"
    },
    {
        "name": "EDP UNIVERSITY OF PUERTO RICO-VILLALBA",
        "location": "VILLALBA, PR"
    },
    {
        "name": "VALLEY COLLEGE-CLEVELAND",
        "location": "CLEVELAND, OH"
    },
    {
        "name": "AVIATION INSTITUTE OF MAINTENANCE-CHARLOTTE",
        "location": "CHARLOTTE, NC"
    },
    {
        "name": "WILLIAM PATERSON UNIVERSITY OF NEW JERSEY",
        "location": "WAYNE, NJ"
    },
    {
        "name": "UNIVERSITY OF MARYLAND, BALTIMORE",
        "location": "BALTIMORE, MD"
    },
    {
        "name": "ADVANCED CAREER INSTITUTE",
        "location": "VISALIA, CA"
    },
    {
        "name": "UNITED EDUCATION INSTITUTE-MORROW",
        "location": "MORROW, GA"
    },
    {
        "name": "ZAYTUNA COLLEGE",
        "location": "BERKELEY, CA"
    },
    {
        "name": "STRAYER UNIVERSITY-ALABAMA",
        "location": "BIRMINGHAM, AL"
    },
    {
        "name": "ROSS MEDICAL EDUCATION CENTER-KNOXVILLE",
        "location": "KNOXVILLE, TN"
    },
    {
        "name": "NORTHWEST FLORIDA STATE COLLEGE",
        "location": "NICEVILLE, FL"
    },
    {
        "name": "STEVENS-HENAGER COLLEGE",
        "location": "WEST HAVEN, UT"
    },
    {
        "name": "METRO BEAUTY ACADEMY",
        "location": "ALLENTOWN, PA"
    },
    {
        "name": "TALMUDICAL YESHIVA OF PHILADELPHIA",
        "location": "PHILADELPHIA, PA"
    },
    {
        "name": "MIDWEST TECHNICAL INSTITUTE-EAST PEORIA",
        "location": "EAST PEORIA, IL"
    },
    {
        "name": "AVEDA INSTITUTE-PORTLAND",
        "location": "PORTLAND, OR"
    },
    {
        "name": "UPMC JAMESON SCHOOL OF NURSING",
        "location": "NEW CASTLE, PA"
    },
    {
        "name": "LINCOLN UNIVERSITY",
        "location": "LINCOLN UNIVERSITY, PA"
    },
    {
        "name": "FOX VALLEY TECHNICAL COLLEGE",
        "location": "APPLETON, WI"
    },
    {
        "name": "REEDLEY COLLEGE",
        "location": "REEDLEY, CA"
    },
    {
        "name": "THE OHIO STATE UNIVERSITY",
        "location": "COLUMBUS, OH"
    },
    {
        "name": "BAIS HAMEDRASH AND MESIVTA OF BALTIMORE",
        "location": "BALTIMORE, MD"
    },
    {
        "name": "MITSU SATO HAIR ACADEMY",
        "location": "OVERLAND PARK, KS"
    },
    {
        "name": "FLORENCE-DARLINGTON TECHNICAL COLLEGE",
        "location": "FLORENCE, SC"
    },
    {
        "name": "FRANK PHILLIPS COLLEGE",
        "location": "BORGER, TX"
    },
    {
        "name": "OGLE SCHOOL HAIR SKIN NAILS-SAN ANTONIO",
        "location": "SAN ANTONIO, TX"
    },
    {
        "name": "IDEAL BEAUTY ACADEMY",
        "location": "LOUISVILLE, KY"
    },
    {
        "name": "CENTER FOR THE HEALING ARTS",
        "location": "VOORHEES, NJ"
    },
    {
        "name": "SOUTH UNIVERSITY-HIGH POINT",
        "location": "HIGH POINT, NC"
    },
    {
        "name": "OHIO STATE UNIVERSITY-NEWARK CAMPUS",
        "location": "NEWARK, OH"
    },
    {
        "name": "DEVRY UNIVERSITY-OHIO",
        "location": "COLUMBUS, OH"
    },
    {
        "name": "UNIVERSITY OF PITTSBURGH-TITUSVILLE",
        "location": "TITUSVILLE, PA"
    },
    {
        "name": "JOHN AMICO SCHOOL OF HAIR DESIGN",
        "location": "OAK FOREST, IL"
    },
    {
        "name": "MORE TECH INSTITUTE",
        "location": "HIALEAH, FL"
    },
    {
        "name": "PAUL MITCHELL THE SCHOOL-SCHENECTADY",
        "location": "SCHENECTADY, NY"
    },
    {
        "name": "UNIVERSITY OF PHOENIX-CALIFORNIA",
        "location": "ONTARIO, CA"
    },
    {
        "name": "CALIFORNIA COLLEGE SAN DIEGO",
        "location": "SAN DIEGO, CA"
    },
    {
        "name": "COASTAL PINES TECHNICAL COLLEGE",
        "location": "WAYCROSS, GA"
    },
    {
        "name": "CHARLESTON SCHOOL OF LAW",
        "location": "CHARLESTON, SC"
    },
    {
        "name": "UNIVERSITY OF NORTH CAROLINA AT PEMBROKE",
        "location": "PEMBROKE, NC"
    },
    {
        "name": "CALIFORNIA STATE UNIVERSITY-CHANCELLORS OFFICE",
        "location": "LONG BEACH, CA"
    },
    {
        "name": "BERRY COLLEGE",
        "location": "MOUNT BERRY, GA"
    },
    {
        "name": "MOUNT ANGEL SEMINARY",
        "location": "SAINT BENEDICT, OR"
    },
    {
        "name": "CAREER CENTER OF SOUTHERN ILLINOIS",
        "location": "RED BUD, IL"
    },
    {
        "name": "VIRGINIA UNION UNIVERSITY",
        "location": "RICHMOND, VA"
    },
    {
        "name": "MEDIATECH INSTITUTE-HOUSTON",
        "location": "HOUSTON, TX"
    },
    {
        "name": "CLEAR CREEK BAPTIST BIBLE COLLEGE",
        "location": "PINEVILLE, KY"
    },
    {
        "name": "AWARD BEAUTY SCHOOL",
        "location": "HAGERSTOWN, MD"
    },
    {
        "name": "BABSON COLLEGE",
        "location": "WELLESLEY, MA"
    },
    {
        "name": "EAST MISSISSIPPI COMMUNITY COLLEGE",
        "location": "SCOOBA, MS"
    },
    {
        "name": "QUEENS UNIVERSITY OF CHARLOTTE",
        "location": "CHARLOTTE, NC"
    },
    {
        "name": "CENTRAL METHODIST UNIVERSITY-COLLEGE OF GRADUATE AND EXTENDED STUDIES",
        "location": "FAYETTE, MO"
    },
    {
        "name": "PAUL MITCHELL THE SCHOOL-ATLANTA",
        "location": "ATLANTA, GA"
    },
    {
        "name": "OLIVER FINLEY ACADEMY OF COSMETOLOGY",
        "location": "BOISE, ID"
    },
    {
        "name": "WAYNE STATE COLLEGE",
        "location": "WAYNE, NE"
    },
    {
        "name": "TOOELE TECHNICAL COLLEGE",
        "location": "TOOELE, UT"
    },
    {
        "name": "HOWARD PAYNE UNIVERSITY",
        "location": "BROWNWOOD, TX"
    },
    {
        "name": "NORTHERN MARIANAS COLLEGE",
        "location": "SAIPAN, MP"
    },
    {
        "name": "HODGES UNIVERSITY",
        "location": "FORT MYERS, FL"
    },
    {
        "name": "JEWISH THEOLOGICAL SEMINARY OF AMERICA",
        "location": "NEW YORK, NY"
    },
    {
        "name": "MARION TECHNICAL COLLEGE",
        "location": "OCALA, FL"
    },
    {
        "name": "MEMPHIS COLLEGE OF ART",
        "location": "MEMPHIS, TN"
    },
    {
        "name": "SOUTH UNIVERSITY-TAMPA",
        "location": "TAMPA, FL"
    },
    {
        "name": "YESHIVA OF THE TELSHE ALUMNI",
        "location": "RIVERDALE, NY"
    },
    {
        "name": "LINDSEY WILSON COLLEGE",
        "location": "COLUMBIA, KY"
    },
    {
        "name": "TIFFIN ACADEMY OF HAIR DESIGN",
        "location": "TIFFIN, OH"
    },
    {
        "name": "URSHAN GRADUATE SCHOOL OF THEOLOGY",
        "location": "WENTZVILLE, MO"
    },
    {
        "name": "COLLEGE OF HAIR DESIGN-DOWNTOWN",
        "location": "LINCOLN, NE"
    },
    {
        "name": "NORTHEAST COMMUNITY COLLEGE",
        "location": "NORFOLK, NE"
    },
    {
        "name": "RABBI JACOB JOSEPH SCHOOL",
        "location": "EDISON, NJ"
    },
    {
        "name": "WEST COAST UNIVERSITY-ORANGE COUNTY",
        "location": "ANAHEIM, CA"
    },
    {
        "name": "CHARZANNE BEAUTY COLLEGE",
        "location": "GREENWOOD, SC"
    },
    {
        "name": "FORTIS COLLEGE-BATON ROUGE",
        "location": "BATON ROUGE, LA"
    },
    {
        "name": "WESTERN THEOLOGICAL SEMINARY",
        "location": "HOLLAND, MI"
    },
    {
        "name": "COLLEGE OF BIBLICAL STUDIES-HOUSTON",
        "location": "HOUSTON, TX"
    },
    {
        "name": "BELHAVEN UNIVERSITY",
        "location": "JACKSON, MS"
    },
    {
        "name": "FRONTIER NURSING UNIVERSITY",
        "location": "VERSAILLES, KY"
    },
    {
        "name": "CENTER FOR ADVANCED STUDIES ON PUERTO RICO AND THE CARIBBEAN",
        "location": "SAN JUAN, PR"
    },
    {
        "name": "THE SALON PROFESSIONAL ACADEMY-GRAND JUNCTION",
        "location": "GRAND JUNCTION, CO"
    },
    {
        "name": "CENTRAL VIRGINIA COMMUNITY COLLEGE",
        "location": "LYNCHBURG, VA"
    },
    {
        "name": "PALMER COLLEGE OF CHIROPRACTIC",
        "location": "DAVENPORT, IA"
    },
    {
        "name": "UNIVERSITY OF WISCONSIN-WHITEWATER",
        "location": "WHITEWATER, WI"
    },
    {
        "name": "CAREER NETWORKS INSTITUTE",
        "location": "SANTA ANA, CA"
    },
    {
        "name": "ANTIOCH UNIVERSITY-PHD PROGRAM IN LEADERSHIP AND CHANGE",
        "location": "YELLOW SPRINGS, OH"
    },
    {
        "name": "NTMA TRAINING CENTERS OF SOUTHERN CALIFORNIA",
        "location": "SANTA FE SPRINGS, CA"
    },
    {
        "name": "AUGUSTE ESCOFFIER SCHOOL OF CULINARY ARTS-AUSTIN",
        "location": "AUSTIN, TX"
    },
    {
        "name": "STANBRIDGE UNIVERSITY",
        "location": "IRVINE, CA"
    },
    {
        "name": "NORTHWEST MISSISSIPPI COMMUNITY COLLEGE",
        "location": "SENATOBIA, MS"
    },
    {
        "name": "COLUMBUS STATE COMMUNITY COLLEGE",
        "location": "COLUMBUS, OH"
    },
    {
        "name": "WILLAMETTE UNIVERSITY",
        "location": "SALEM, OR"
    },
    {
        "name": "AVEDA INSTITUTE-COLUMBUS",
        "location": "COLUMBUS, OH"
    },
    {
        "name": "HUSSIAN COLLEGE-PHILADELPHIA",
        "location": "PHILADELPHIA, PA"
    },
    {
        "name": "SOUTH TEXAS VOCATIONAL TECHNICAL INSTITUTE-WESLACO",
        "location": "WESLACO, TX"
    },
    {
        "name": "PAUL MITCHELL THE SCHOOL-ROANOKE",
        "location": "ROANOKE, VA"
    },
    {
        "name": "FRED W EBERLE TECHNICAL CENTER",
        "location": "BUCKHANNON, WV"
    },
    {
        "name": "SOUTHEASTERN LOUISIANA UNIVERSITY",
        "location": "HAMMOND, LA"
    },
    {
        "name": "LOS ANGELES MISSION COLLEGE",
        "location": "SYLMAR, CA"
    },
    {
        "name": "SAN MATEO COUNTY COMMUNITY COLLEGE DISTRICT OFFICE",
        "location": "SAN MATEO, CA"
    },
    {
        "name": "GATEWAY COMMUNITY COLLEGE",
        "location": "PHOENIX, AZ"
    },
    {
        "name": "NAROPA UNIVERSITY",
        "location": "BOULDER, CO"
    },
    {
        "name": "WESTERN COLORADO UNIVERSITY",
        "location": "GUNNISON, CO"
    },
    {
        "name": "SNOW COLLEGE",
        "location": "EPHRAIM, UT"
    },
    {
        "name": "UNIVERSITY OF WISCONSIN-SUPERIOR",
        "location": "SUPERIOR, WI"
    },
    {
        "name": "HOLY NAMES UNIVERSITY",
        "location": "OAKLAND, CA"
    },
    {
        "name": "SOUTHERN CALIFORNIA INSTITUTE OF TECHNOLOGY",
        "location": "ANAHEIM, CA"
    },
    {
        "name": "EARLHAM COLLEGE",
        "location": "RICHMOND, IN"
    },
    {
        "name": "DIESEL DRIVING ACADEMY-BATON ROUGE",
        "location": "BATON ROUGE, LA"
    },
    {
        "name": "KETTERING UNIVERSITY",
        "location": "FLINT, MI"
    },
    {
        "name": "BEMIDJI STATE UNIVERSITY",
        "location": "BEMIDJI, MN"
    },
    {
        "name": "MISSISSIPPI VALLEY STATE UNIVERSITY",
        "location": "ITTA BENA, MS"
    },
    {
        "name": "PAMLICO COMMUNITY COLLEGE",
        "location": "GRANTSBORO, NC"
    },
    {
        "name": "HAMILTON TECHNICAL COLLEGE",
        "location": "DAVENPORT, IA"
    },
    {
        "name": "OTTAWA UNIVERSITY-OTTAWA",
        "location": "OTTAWA, KS"
    },
    {
        "name": "METROPOLITAN STATE UNIVERSITY",
        "location": "SAINT PAUL, MN"
    },
    {
        "name": "JOHN PAOLO'S XTREME BEAUTY INSTITUTE-GOLDWELL PRODUCT ARTISTRY",
        "location": "BALLSTON SPA, NY"
    },
    {
        "name": "BRISTOL SCHOOL OF HAIR DESIGN",
        "location": "BRISTOL, VA"
    },
    {
        "name": "MIDWEST BARBER COLLEGE",
        "location": "TOPEKA, KS"
    },
    {
        "name": "XTYLO BEAUTY COLLEGE",
        "location": "PHOENIX, AZ"
    },
    {
        "name": "RUBEN'S FIVE STAR ACADEMY",
        "location": "LAKE WALES, FL"
    },
    {
        "name": "COLUMBIA COLLEGE - NAVAL BASE SAN DIEGO",
        "location": "SAN DIEGO, CA"
    },
    {
        "name": "COLUMBIA COLLEGE - WAYNESVILLE",
        "location": "WAYNESVILLE, MO"
    },
    {
        "name": "PIMA MEDICAL INSTITUTION-SAN ANTONIO",
        "location": "SAN ANTONIO, TX"
    },
    {
        "name": "CUNY BROOKLYN COLLEGE - FEIRSTEIN GRADUATE SCHOOL OF CINEMA",
        "location": "BROOKLYN, NY"
    },
    {
        "name": "AVEDA INSTITUTE-CHAPEL HILL",
        "location": "CHAPEL HILL, NC"
    },
    {
        "name": "GALLAUDET UNIVERSITY",
        "location": "WASHINGTON, DC"
    },
    {
        "name": "FLORIDA CAREER COLLEGE-HOUSTON",
        "location": "HOUSTON, TX"
    },
    {
        "name": "CARRINGTON COLLEGE-MESQUITE",
        "location": "MESQUITE, TX"
    },
    {
        "name": "ELMEZZI GRADUATE SCHOOL OF MOLECULAR MEDICINE",
        "location": "MANHASSET, NY"
    },
    {
        "name": "BETH MEDRASH MEOR YITZCHOK",
        "location": "MONSEY, NY"
    },
    {
        "name": "CITY COLLEGES OF CHICAGO-MALCOLM X COLLEGE",
        "location": "CHICAGO, IL"
    },
    {
        "name": "METHODIST COLLEGE",
        "location": "PEORIA, IL"
    },
    {
        "name": "KENNETH SHULER SCHOOL OF COSMETOLOGY-GOOSE CREEK",
        "location": "GOOSE CREEK, SC"
    },
    {
        "name": "RUTGERS UNIVERSITY-NEWARK",
        "location": "NEWARK, NJ"
    },
    {
        "name": "NEW YORK MEDICAL CAREER TRAINING CENTER",
        "location": "FLUSHING, NY"
    },
    {
        "name": "STRAYER UNIVERSITY-MISSISSIPPI",
        "location": "JACKSON, MS"
    },
    {
        "name": "PAUL MITCHELL THE SCHOOL-FRESNO",
        "location": "FRESNO, CA"
    },
    {
        "name": "HAVERFORD COLLEGE",
        "location": "HAVERFORD, PA"
    },
    {
        "name": "TEXAS WOMAN'S UNIVERSITY",
        "location": "DENTON, TX"
    },
    {
        "name": "RIDGE TECHNICAL COLLEGE",
        "location": "WINTER HAVEN, FL"
    },
    {
        "name": "PJ'S COLLEGE OF COSMETOLOGY-GLASGOW",
        "location": "GLASGOW, KY"
    },
    {
        "name": "CALVIN UNIVERSITY",
        "location": "GRAND RAPIDS, MI"
    },
    {
        "name": "CUNY QUEENS COLLEGE",
        "location": "QUEENS, NY"
    },
    {
        "name": "VOGUE COLLEGE OF COSMETOLOGY-SANTA FE",
        "location": "SANTA FE, NM"
    },
    {
        "name": "PENNSYLVANIA STATE UNIVERSITY-PENN STATE ABINGTON",
        "location": "ABINGTON, PA"
    },
    {
        "name": "BEAVER FALLS BEAUTY ACADEMY",
        "location": "BEAVER FALLS, PA"
    },
    {
        "name": "POINT PARK UNIVERSITY",
        "location": "PITTSBURGH, PA"
    },
    {
        "name": "TEXAS TECH UNIVERSITY HEALTH SCIENCES CENTER",
        "location": "LUBBOCK, TX"
    },
    {
        "name": "KNOX COUNTY CAREER CENTER",
        "location": "MOUNT VERNON, OH"
    },
    {
        "name": "JNA INSTITUTE OF CULINARY ARTS",
        "location": "PHILADELPHIA, PA"
    },
    {
        "name": "INTERNATIONAL COLLEGE OF BEAUTY ARTS & SCIENCES",
        "location": "LOS ANGELES, CA"
    },
    {
        "name": "PHOENIX COLLEGE",
        "location": "PHOENIX, AZ"
    },
    {
        "name": "UNIVERSITY OF HOUSTON-CLEAR LAKE",
        "location": "HOUSTON, TX"
    },
    {
        "name": "COFFEYVILLE COMMUNITY COLLEGE",
        "location": "COFFEYVILLE, KS"
    },
    {
        "name": "AVERA MCKENNAN HOSPITAL SCHOOL OF RADIOLOGIC TECHNOLOGY",
        "location": "SIOUX FALLS, SD"
    },
    {
        "name": "AVERA SACRED HEART HOSPITAL",
        "location": "YANKTON, SD"
    },
    {
        "name": "HAMPDEN-SYDNEY COLLEGE",
        "location": "HAMPDEN-SYDNEY, VA"
    },
    {
        "name": "NETWORKS BARBER COLLEGE",
        "location": "CALUMET CITY, IL"
    },
    {
        "name": "LAKESHORE TECHNICAL COLLEGE",
        "location": "CLEVELAND, WI"
    },
    {
        "name": "RANDOLPH COMMUNITY COLLEGE",
        "location": "ASHEBORO, NC"
    },
    {
        "name": "MASSACHUSETTS SCHOOL OF BARBERING",
        "location": "QUINCY, MA"
    },
    {
        "name": "ARIZONA COLLEGE-MESA",
        "location": "MESA, AZ"
    },
    {
        "name": "BLACK RIVER TECHNICAL COLLEGE",
        "location": "POCAHONTAS, AR"
    },
    {
        "name": "CET-EL CENTRO",
        "location": "EL CENTRO, CA"
    },
    {
        "name": "BUTTE COLLEGE",
        "location": "OROVILLE, CA"
    },
    {
        "name": "MILWAUKEE INSTITUTE OF ART & DESIGN",
        "location": "MILWAUKEE, WI"
    },
    {
        "name": "PAUL MITCHELL THE SCHOOL-MEMPHIS",
        "location": "MEMPHIS, TN"
    },
    {
        "name": "FLORIDA CAREER COLLEGE-MIAMI",
        "location": "MIAMI, FL"
    },
    {
        "name": "JEFFERSON COMMUNITY AND TECHNICAL COLLEGE",
        "location": "LOUISVILLE, KY"
    },
    {
        "name": "UNIVERSITY OF THE DISTRICT OF COLUMBIA",
        "location": "WASHINGTON, DC"
    },
    {
        "name": "ATLANTA'S JOHN MARSHALL LAW SCHOOL",
        "location": "ATLANTA, GA"
    },
    {
        "name": "WEST VIRGINIA JUNIOR COLLEGE-MORGANTOWN",
        "location": "MORGANTOWN, WV"
    },
    {
        "name": "CHESAPEAKE COLLEGE",
        "location": "WYE MILLS, MD"
    },
    {
        "name": "MILDRED ELLEY SCHOOL-ALBANY CAMPUS",
        "location": "ALBANY, NY"
    },
    {
        "name": "LEONS BEAUTY SCHOOL INC",
        "location": "GREENSBORO, NC"
    },
    {
        "name": "PFEIFFER UNIVERSITY",
        "location": "MISENHEIMER, NC"
    },
    {
        "name": "WESTMINSTER COLLEGE",
        "location": "FULTON, MO"
    },
    {
        "name": "STEVENS-HENAGER COLLEGE",
        "location": "MURRAY, UT"
    },
    {
        "name": "HASTINGS BEAUTY SCHOOL",
        "location": "HASTINGS, MN"
    },
    {
        "name": "MID-SOUTH CHRISTIAN COLLEGE",
        "location": "MEMPHIS, TN"
    },
    {
        "name": "BELLUS ACADEMY-POWAY",
        "location": "POWAY, CA"
    },
    {
        "name": "DEVRY UNIVERSITY-NEW JERSEY",
        "location": "ISELIN, NJ"
    },
    {
        "name": "AUTOMECA TECHNICAL COLLEGE-AGUADILLA",
        "location": "AGUADILLA, PR"
    },
    {
        "name": "TRIANGLE TECH INC-DUBOIS",
        "location": "FALLS CREEK, PA"
    },
    {
        "name": "HAIR EXPRESSIONS ACADEMY",
        "location": "ROCKVILLE, MD"
    },
    {
        "name": "RABBINICAL COLLEGE OF OHR SHIMON YISROEL",
        "location": "BROOKLYN, NY"
    },
    {
        "name": "HEIDELBERG UNIVERSITY",
        "location": "TIFFIN, OH"
    },
    {
        "name": "JUNIATA COLLEGE",
        "location": "HUNTINGDON, PA"
    },
    {
        "name": "NORMANDALE COMMUNITY COLLEGE",
        "location": "BLOOMINGTON, MN"
    },
    {
        "name": "JFK MUHLENBERG HAROLD B. AND DOROTHY A. SNYDER SCHOOLS",
        "location": "PLAINFIELD, NJ"
    },
    {
        "name": "PAUL MITCHELL THE SCHOOL-SALT LAKE CITY",
        "location": "HOLLADAY, UT"
    },
    {
        "name": "THE PROFESSIONAL HAIR DESIGN ACADEMY",
        "location": "EAU CLAIRE, WI"
    },
    {
        "name": "PONTIFICAL CATHOLIC UNIVERSITY OF PUERTO RICO-ARECIBO",
        "location": "ARECIBO, PR"
    },
    {
        "name": "PRAXIS INSTITUTE",
        "location": "MIAMI, FL"
    },
    {
        "name": "UNIVERSITY OF ALABAMA IN HUNTSVILLE",
        "location": "HUNTSVILLE, AL"
    },
    {
        "name": "UNIVERSITY OF THE OZARKS",
        "location": "CLARKSVILLE, AR"
    },
    {
        "name": "ASHER INSTITUTE OF HAMPTON",
        "location": "HAMPTON, VA"
    },
    {
        "name": "INNOVATIONS DESIGN ACADEMY",
        "location": "CANTON, IL"
    },
    {
        "name": "GEORGIA PIEDMONT TECHNICAL COLLEGE",
        "location": "CLARKSTON, GA"
    },
    {
        "name": "UNIVERSITY OF WISCONSIN-PLATTEVILLE",
        "location": "PLATTEVILLE, WI"
    },
    {
        "name": "NORTH CENTRAL TEXAS COLLEGE",
        "location": "GAINESVILLE, TX"
    },
    {
        "name": "UNIVERSITY OF NORTH TEXAS HEALTH SCIENCE CENTER",
        "location": "FORT WORTH, TX"
    },
    {
        "name": "TACOMA COMMUNITY COLLEGE",
        "location": "TACOMA, WA"
    },
    {
        "name": "LINCOLN TECHNICAL INSTITUTE-NEW BRITAIN",
        "location": "NEW BRITAIN, CT"
    },
    {
        "name": "PRINCIPIA COLLEGE",
        "location": "ELSAH, IL"
    },
    {
        "name": "MID-AMERICA CHRISTIAN UNIVERSITY",
        "location": "OKLAHOMA CITY, OK"
    },
    {
        "name": "CARRINGTON COLLEGE-PORTLAND",
        "location": "PORTLAND, OR"
    },
    {
        "name": "PAUL MITCHELL THE SCHOOL-BOISE",
        "location": "BOISE, ID"
    },
    {
        "name": "CHAPMAN UNIVERSITY",
        "location": "ORANGE, CA"
    },
    {
        "name": "LAGUNA COLLEGE OF ART AND DESIGN",
        "location": "LAGUNA BEACH, CA"
    },
    {
        "name": "WESTERN UNIVERSITY OF HEALTH SCIENCES",
        "location": "POMONA, CA"
    },
    {
        "name": "ELMHURST UNIVERSITY",
        "location": "ELMHURST, IL"
    },
    {
        "name": "LUTHERAN SCHOOL OF NURSING",
        "location": "SAINT LOUIS, MO"
    },
    {
        "name": "UNIVERSAL TECHNOLOGY COLLEGE OF PUERTO RICO",
        "location": "AGUADILLA, PR"
    },
    {
        "name": "NORTH-WEST COLLEGE-POMONA",
        "location": "POMONA, CA"
    },
    {
        "name": "J F INGRAM STATE TECHNICAL COLLEGE",
        "location": "DEATSVILLE, AL"
    },
    {
        "name": "SOUTHWESTERN LAW SCHOOL",
        "location": "LOS ANGELES, CA"
    },
    {
        "name": "CHABOT COLLEGE",
        "location": "HAYWARD, CA"
    },
    {
        "name": "JUDSON UNIVERSITY",
        "location": "ELGIN, IL"
    },
    {
        "name": "MID-AMERICA TECHNOLOGY CENTER",
        "location": "WAYNE, OK"
    },
    {
        "name": "CAREER QUEST LEARNING CENTERS-JACKSON",
        "location": "JACKSON, MI"
    },
    {
        "name": "CONCORDE CAREER COLLEGE-SAN BERNARDINO",
        "location": "SAN BERNARDINO, CA"
    },
    {
        "name": "PACIFIC STATES UNIVERSITY",
        "location": "LOS ANGELES, CA"
    },
    {
        "name": "RAVENSCROFT BEAUTY COLLEGE",
        "location": "FORT WAYNE, IN"
    },
    {
        "name": "BENEDICTINE COLLEGE",
        "location": "ATCHISON, KS"
    },
    {
        "name": "ITI TECHNICAL COLLEGE",
        "location": "BATON ROUGE, LA"
    },
    {
        "name": "MARS HILL UNIVERSITY",
        "location": "MARS HILL, NC"
    },
    {
        "name": "MITCHELL HAMLINE SCHOOL OF LAW",
        "location": "SAINT PAUL, MN"
    },
    {
        "name": "LIFE PACIFIC UNIVERSITY",
        "location": "SAN DIMAS, CA"
    },
    {
        "name": "MODERN BEAUTY ACADEMY",
        "location": "OXNARD, CA"
    },
    {
        "name": "ILIFF SCHOOL OF THEOLOGY",
        "location": "DENVER, CO"
    },
    {
        "name": "LINCOLN TECHNICAL INSTITUTE-PHILADELPHIA",
        "location": "PHILADELPHIA, PA"
    },
    {
        "name": "REMINGTON COLLEGE-FORT WORTH CAMPUS",
        "location": "FORT WORTH, TX"
    },
    {
        "name": "B M SPURR SCHOOL OF PRACTICAL NURSING",
        "location": "GLEN DALE, WV"
    },
    {
        "name": "YESHIVA BAIS AHARON",
        "location": "LAKEWOOD, NJ"
    },
    {
        "name": "METRO DETROIT BARBER COLLEGE",
        "location": "DETROIT, MI"
    },
    {
        "name": "RAY J'S COLLEGE OF HAIR",
        "location": "BATON ROUGE, LA"
    },
    {
        "name": "EASTERN IOWA COMMUNITY COLLEGE DISTRICT",
        "location": "DAVENPORT, IA"
    },
    {
        "name": "SOUTH EASTERN BEAUTY ACADEMY",
        "location": "PAINTSVILLE, KY"
    },
    {
        "name": "MOODY BIBLE INSTITUTE - SPOKANE",
        "location": "SPOKANE, WA"
    },
    {
        "name": "FLORIDA PANHANDLE TECHNICAL COLLEGE",
        "location": "CHIPLEY, FL"
    },
    {
        "name": "UNIVERSITY OF PUERTO RICO-CAYEY",
        "location": "CAYEY, PR"
    },
    {
        "name": "PACIFIC BIBLE COLLEGE",
        "location": "MEDFORD, OR"
    },
    {
        "name": "CUNY BERNARD M BARUCH COLLEGE",
        "location": "NEW YORK, NY"
    },
    {
        "name": "UEI COLLEGE-RIVERSIDE",
        "location": "RIVERSIDE, CA"
    },
    {
        "name": "HUSSON UNIVERSITY",
        "location": "BANGOR, ME"
    },
    {
        "name": "EASTERN SUFFOLK BOCES",
        "location": "RIVERHEAD, NY"
    },
    {
        "name": "PIMA MEDICAL INSTITUTE-EL PASO",
        "location": "EL PASO, TX"
    },
    {
        "name": "WRIGHT GRADUATE UNIVERSITY FOR THE REALIZATION OF HUMAN POTENTIAL",
        "location": "ELKHORN, WI"
    },
    {
        "name": "SESSIONS COLLEGE FOR PROFESSIONAL DESIGN",
        "location": "TEMPE, AZ"
    },
    {
        "name": "PLATT COLLEGE-MCCANN-LEWISBURG",
        "location": "LEWISBURG, PA"
    },
    {
        "name": "CARIBBEAN AVIATION TRAINING INSTITUTE INC",
        "location": "CAROLINA, PR"
    },
    {
        "name": "CENTERPOINT MASSAGE & SHIATSU THERAPY SCHOOL & CLINIC",
        "location": "BLOOMINGTON, MN"
    },
    {
        "name": "MOHAWK VALLEY COMMUNITY COLLEGE",
        "location": "UTICA, NY"
    },
    {
        "name": "NEW YORK INSTITUTE OF TECHNOLOGY",
        "location": "OLD WESTBURY, NY"
    },
    {
        "name": "DESALES UNIVERSITY",
        "location": "CENTER VALLEY, PA"
    },
    {
        "name": "HILLSBOROUGH COMMUNITY COLLEGE",
        "location": "TAMPA, FL"
    },
    {
        "name": "ANNE ARUNDEL COMMUNITY COLLEGE",
        "location": "ARNOLD, MD"
    },
    {
        "name": "SOUTHERN CAREERS INSTITUTE-AUSTIN",
        "location": "AUSTIN, TX"
    },
    {
        "name": "FORT MYERS TECHNICAL COLLEGE",
        "location": "FORT MYERS, FL"
    },
    {
        "name": "INDEPENDENCE COMMUNITY COLLEGE",
        "location": "INDEPENDENCE, KS"
    },
    {
        "name": "EMPIRE BEAUTY SCHOOL-CHENOWETH",
        "location": "LOUISVILLE, KY"
    },
    {
        "name": "KUYPER COLLEGE",
        "location": "GRAND RAPIDS, MI"
    },
    {
        "name": "PENNSYLVANIA STATE SYSTEM OF HIGHER EDUCATION-CENTRAL OFFICE",
        "location": "HARRISBURG, PA"
    },
    {
        "name": "NEW YORK FILM ACADEMY",
        "location": "BURBANK, CA"
    },
    {
        "name": "COLLEGE OF CHARLESTON",
        "location": "CHARLESTON, SC"
    },
    {
        "name": "MEDICAL UNIVERSITY OF SOUTH CAROLINA",
        "location": "CHARLESTON, SC"
    },
    {
        "name": "RASMUSSEN UNIVERSITY-WISCONSIN",
        "location": "GREEN BAY, WI"
    },
    {
        "name": "TEXAS A&M UNIVERSITY",
        "location": "COLLEGE STATION, TX"
    },
    {
        "name": "GEORGE C WALLACE COMMUNITY COLLEGE-DOTHAN",
        "location": "DOTHAN, AL"
    },
    {
        "name": "WESTERN DAKOTA TECHNICAL COLLEGE",
        "location": "RAPID CITY, SD"
    },
    {
        "name": "TENNESSEE COLLEGE OF APPLIED TECHNOLOGY-HARRIMAN",
        "location": "HARRIMAN, TN"
    },
    {
        "name": "WESTMINSTER THEOLOGICAL SEMINARY",
        "location": "GLENSIDE, PA"
    },
    {
        "name": "HEALTHCARE TRAINING INSTITUTE",
        "location": "KENNER, LA"
    },
    {
        "name": "ROSS MEDICAL EDUCATION CENTER-KOKOMO",
        "location": "KOKOMO, IN"
    },
    {
        "name": "GENESEE COMMUNITY COLLEGE",
        "location": "BATAVIA, NY"
    },
    {
        "name": "OGLALA LAKOTA COLLEGE",
        "location": "KYLE, SD"
    },
    {
        "name": "LOCK HAVEN UNIVERSITY",
        "location": "LOCK HAVEN, PA"
    },
    {
        "name": "THE UNIVERSITY OF THE ARTS",
        "location": "PHILADELPHIA, PA"
    },
    {
        "name": "SOUTH CAROLINA STATE UNIVERSITY",
        "location": "ORANGEBURG, SC"
    },
    {
        "name": "BRILLARE BEAUTY INSTITUTE",
        "location": "CLEVELAND, TN"
    },
    {
        "name": "BELLA COSMETOLOGY AND BARBER COLLEGE",
        "location": "GREENVILLE, TX"
    },
    {
        "name": "CREATIVE TOUCH COSMETOLOGY SCHOOL",
        "location": "WATERLOO, IL"
    },
    {
        "name": "SOUTH TEXAS COLLEGE",
        "location": "MCALLEN, TX"
    },
    {
        "name": "NORTHERN ESSEX COMMUNITY COLLEGE",
        "location": "HAVERHILL, MA"
    },
    {
        "name": "HOLLYWOOD INSTITUTE OF BEAUTY CAREERS-WEST PALM BEACH",
        "location": "WEST PALM BEACH, FL"
    },
    {
        "name": "MILWAUKEE CAREER COLLEGE",
        "location": "MILWAUKEE, WI"
    },
    {
        "name": "ARKANSAS NORTHEASTERN COLLEGE",
        "location": "BLYTHEVILLE, AR"
    },
    {
        "name": "UNIVERSITY OF CHICAGO",
        "location": "CHICAGO, IL"
    },
    {
        "name": "MANCHESTER COMMUNITY COLLEGE",
        "location": "MANCHESTER, CT"
    },
    {
        "name": "FORT LEWIS COLLEGE",
        "location": "DURANGO, CO"
    },
    {
        "name": "APPLIED TECHNOLOGY SERVICES",
        "location": "SUNSET HILLS, MO"
    },
    {
        "name": "CENTURA COLLEGE-NORFOLK",
        "location": "NORFOLK, VA"
    },
    {
        "name": "IVY TECH COMMUNITY COLLEGE",
        "location": "INDIANAPOLIS, IN"
    },
    {
        "name": "BOSTON GRADUATE SCHOOL OF PSYCHOANALYSIS INC",
        "location": "BROOKLINE, MA"
    },
    {
        "name": "BRYAN COLLEGE OF HEALTH SCIENCES",
        "location": "LINCOLN, NE"
    },
    {
        "name": "NEW MEXICO STATE UNIVERSITY-GRANTS",
        "location": "GRANTS, NM"
    },
    {
        "name": "CULVER-STOCKTON COLLEGE",
        "location": "CANTON, MO"
    },
    {
        "name": "WILLIAM CAREY UNIVERSITY",
        "location": "HATTIESBURG, MS"
    },
    {
        "name": "CHESTER CAREER COLLEGE",
        "location": "CHESTER, VA"
    },
    {
        "name": "TRICOCI UNIVERSITY OF BEAUTY CULTURE-LIBERTYVILLE",
        "location": "LIBERTYVILLE, IL"
    },
    {
        "name": "SANTA ANA BEAUTY COLLEGE",
        "location": "SANTA ANA, CA"
    },
    {
        "name": "NEW YORK INSTITUTE OF BEAUTY",
        "location": "ISLANDIA, NY"
    },
    {
        "name": "NATIONAL AMERICAN UNIVERSITY-INDIANAPOLIS",
        "location": "INDIANAPOLIS, IN"
    },
    {
        "name": "DEVRY UNIVERSITY-TENNESSEE",
        "location": "NASHVILLE, TN"
    },
    {
        "name": "ROSS COLLEGE-HOPKINSVILLE",
        "location": "HOPKINSVILLE, KY"
    },
    {
        "name": "FORTIS COLLEGE-ORANGE PARK",
        "location": "ORANGE PARK, FL"
    },
    {
        "name": "SOUTH TEXAS BARBER COLLEGE INC",
        "location": "CORPUS CHRISTI, TX"
    },
    {
        "name": "TRICOCI UNIVERSITY OF BEAUTY CULTURE-CHICAGO NE",
        "location": "CHICAGO, IL"
    },
    {
        "name": "TOTAL IMAGE BEAUTY ACADEMY",
        "location": "UNION CITY, NJ"
    },
    {
        "name": "BAY DE NOC COMMUNITY COLLEGE",
        "location": "ESCANABA, MI"
    },
    {
        "name": "CASAL AVEDA INSTITUTE",
        "location": "NILES, OH"
    },
    {
        "name": "ALL-STATE CAREER-BALTIMORE",
        "location": "BALTIMORE, MD"
    },
    {
        "name": "ROSS MEDICAL EDUCATION CENTER-BATTLE CREEK",
        "location": "BATTLE CREEK, MI"
    },
    {
        "name": "NEW ENGLAND TRACTOR TRAILER TRAINING SCHOOL OF RHODE ISLAND",
        "location": "PAWTUCKET, RI"
    },
    {
        "name": "INSTITUTE OF TECHNOLOGY",
        "location": "CLOVIS, CA"
    },
    {
        "name": "RANCHO SANTIAGO COMMUNITY COLLEGE DISTRICT OFFICE",
        "location": "SANTA ANA, CA"
    },
    {
        "name": "DALLAS BARBER & STYLIST COLLEGE",
        "location": "DALLAS, TX"
    },
    {
        "name": "BYZANTINE CATHOLIC SEMINARY OF SAINTS CYRIL AND METHODIUS",
        "location": "PITTSBURGH, PA"
    },
    {
        "name": "AURORA UNIVERSITY",
        "location": "AURORA, IL"
    },
    {
        "name": "BETHEL UNIVERSITY",
        "location": "MISHAWAKA, IN"
    },
    {
        "name": "POST UNIVERSITY",
        "location": "WATERBURY, CT"
    },
    {
        "name": "AMERITECH COLLEGE-PROVO",
        "location": "PROVO, UT"
    },
    {
        "name": "WEST LIBERTY UNIVERSITY",
        "location": "WEST LIBERTY, WV"
    },
    {
        "name": "UNIVERSIDAD POLITECNICA DE PUERTO RICO",
        "location": "HATO REY, PR"
    },
    {
        "name": "CCI TRAINING CENTER-ARLINGTON",
        "location": "ARLINGTON, TX"
    },
    {
        "name": "CABRILLO COLLEGE",
        "location": "APTOS, CA"
    },
    {
        "name": "MTI COLLEGE",
        "location": "SACRAMENTO, CA"
    },
    {
        "name": "FLINT INSTITUTE OF BARBERING INC",
        "location": "FLINT, MI"
    },
    {
        "name": "AMERICAN JEWISH UNIVERSITY",
        "location": "LOS ANGELES, CA"
    },
    {
        "name": "LOS ANGELES COMMUNITY COLLEGE DISTRICT OFFICE",
        "location": "LOS ANGELES, CA"
    },
    {
        "name": "UNIVERSITY OF SAN DIEGO",
        "location": "SAN DIEGO, CA"
    },
    {
        "name": "ADRIAN COLLEGE",
        "location": "ADRIAN, MI"
    },
    {
        "name": "GRAND CANYON UNIVERSITY",
        "location": "PHOENIX, AZ"
    },
    {
        "name": "BETHEL COLLEGE-NORTH NEWTON",
        "location": "NORTH NEWTON, KS"
    },
    {
        "name": "BAPTIST HEALTH SYSTEM SCHOOL OF HEALTH PROFESSIONS",
        "location": "SAN ANTONIO, TX"
    },
    {
        "name": "ALLEN SCHOOL-JAMAICA",
        "location": "JAMAICA, NY"
    },
    {
        "name": "NORTHEAST TECHNOLOGY CENTER-PRYOR",
        "location": "PRYOR, OK"
    },
    {
        "name": "NORTHEAST TECHNOLOGY CENTER-AFTON",
        "location": "AFTON, OK"
    },
    {
        "name": "ULTIMATE MEDICAL ACADEMY",
        "location": "CLEARWATER, FL"
    },
    {
        "name": "AMERICAN INSTITUTE OF BEAUTY",
        "location": "LARGO, FL"
    },
    {
        "name": "PALMETTO BEAUTY SCHOOL",
        "location": "SPARTANBURG, SC"
    },
    {
        "name": "MIAMI AD SCHOOL",
        "location": "MIAMI, FL"
    },
    {
        "name": "NORTH FLORIDA COSMETOLOGY INSTITUTE",
        "location": "TALLAHASSEE, FL"
    },
    {
        "name": "MIAMI REGIONAL UNIVERSITY",
        "location": "MIAMI SPRINGS, FL"
    },
    {
        "name": "ESCUELA DE TROQUELERIA Y HERRAMENTAJE",
        "location": "BAYAMON, PR"
    },
    {
        "name": "SOUTHERN CALIFORNIA SEMINARY",
        "location": "EL CAJON, CA"
    },
    {
        "name": "CENTRAL CONNECTICUT STATE UNIVERSITY",
        "location": "NEW BRITAIN, CT"
    },
    {
        "name": "GOODWIN UNIVERSITY",
        "location": "EAST HARTFORD, CT"
    },
    {
        "name": "THE BAPTIST COLLEGE OF FLORIDA",
        "location": "GRACEVILLE, FL"
    },
    {
        "name": "LOUISIANA STATE UNIVERSITY AND AGRICULTURAL & MECHANICAL COLLEGE",
        "location": "BATON ROUGE, LA"
    },
    {
        "name": "NORTHERN MAINE COMMUNITY COLLEGE",
        "location": "PRESQUE ISLE, ME"
    },
    {
        "name": "SUMMIT ACADEMY OPPORTUNITIES INDUSTRIALIZATION CENTER",
        "location": "MINNEAPOLIS, MN"
    },
    {
        "name": "ROCHESTER COMMUNITY AND TECHNICAL COLLEGE",
        "location": "ROCHESTER, MN"
    },
    {
        "name": "MESSENGER COLLEGE",
        "location": "BEDFORD, TX"
    },
    {
        "name": "MONTESSORI EDUCATION CENTER OF THE ROCKIES",
        "location": "BOULDER, CO"
    },
    {
        "name": "EASTERN INTERNATIONAL COLLEGE-BELLEVILLE",
        "location": "BELLEVILLE, NJ"
    },
    {
        "name": "SUSSEX COUNTY COMMUNITY COLLEGE",
        "location": "NEWTON, NJ"
    },
    {
        "name": "BAPTIST MISSIONARY ASSOCIATION THEOLOGICAL SEMINARY",
        "location": "JACKSONVILLE, TX"
    },
    {
        "name": "GODDARD COLLEGE",
        "location": "PLAINFIELD, VT"
    },
    {
        "name": "RENSSELAER POLYTECHNIC INSTITUTE",
        "location": "TROY, NY"
    },
    {
        "name": "WELLESLEY COLLEGE",
        "location": "WELLESLEY, MA"
    },
    {
        "name": "YESHIVA OF MACHZIKAI HADAS",
        "location": "BROOKLYN, NY"
    },
    {
        "name": "ASSABET VALLEY REGIONAL TECHNICAL SCHOOL",
        "location": "MARLBOROUGH, MA"
    },
    {
        "name": "LOS ANGELES ACADEMY OF FIGURATIVE ART",
        "location": "VAN NUYS, CA"
    },
    {
        "name": "DIGITAL MEDIA INSTITUTE AT INTERTECH",
        "location": "SHREVEPORT, LA"
    },
    {
        "name": "ROSS MEDICAL EDUCATION CENTER - KALAMAZOO",
        "location": "KALAMAZOO, MI"
    },
    {
        "name": "IBS SCHOOL OF COSMETOLOGY AND MASSAGE",
        "location": "KAHULUI, HI"
    },
    {
        "name": "THE SALON PROFESSIONAL ACADEMY-GEORGETOWN",
        "location": "GEORGETOWN, TX"
    },
    {
        "name": "TONI & GUY HAIRDRESSING ACADEMY-IDAHO",
        "location": "COEUR D'ALENE, ID"
    },
    {
        "name": "TEXAS HEALTHTECH INSTITUTE",
        "location": "BEAUMONT, TX"
    },
    {
        "name": "NORTHERN PENNSYLVANIA REGIONAL COLLEGE",
        "location": "WARREN, PA"
    },
    {
        "name": "SAN JOAQUIN VALLEY COLLEGE-MADERA",
        "location": "MADERA, CA"
    },
    {
        "name": "AMERICAN COLLEGE OF THE BUILDING ARTS",
        "location": "CHARLESTON, SC"
    },
    {
        "name": "GOODFELLAS BARBER COLLEGE",
        "location": "LITTLE ROCK, AR"
    },
    {
        "name": "GLOBAL TECH COLLEGE",
        "location": "TOLEDO, OH"
    },
    {
        "name": "BRISTOL SCHOOL OF HAIR DESIGN",
        "location": "BRISTOL, VA"
    },
    {
        "name": "VSKI COSMETOLOGY SCHOOL",
        "location": "CHARLESTON, SC"
    },
    {
        "name": "PORTER AND CHESTER INSTITUTE - NEW LONDON",
        "location": "NEW LONDON, CT"
    },
    {
        "name": "FAITH THEOLOGICAL SEMINARY AND CHRISTIAN COLLEGE",
        "location": "TAMPA, FL"
    },
    {
        "name": "CINTA AVEDA INSTITUTE - SAN JOSE",
        "location": "SAN JOSE, CA"
    },
    {
        "name": "ALASKA BIBLE COLLEGE",
        "location": "PALMER, AK"
    },
    {
        "name": "ACADEMY DI FIRENZE",
        "location": "JEROME, ID"
    },
    {
        "name": "PAUL MITCHELL THE SCHOOL-TYSONS CORNER",
        "location": "MCLEAN, VA"
    },
    {
        "name": "STRAYER UNIVERSITY-WEST VIRGINIA",
        "location": "SCOTT DEPOT, WV"
    },
    {
        "name": "CARRINGTON COLLEGE-LAS VEGAS",
        "location": "LAS VEGAS, NV"
    },
    {
        "name": "FLORIDA CAREER COLLEGE-PEMBROKE PINES",
        "location": "PEMBROKE PINES, FL"
    },
    {
        "name": "THE CHICAGO SCHOOL OF PROFESSIONAL PSYCHOLOGY AT XAVIER UNIVERSITY OF LOUISIANA",
        "location": "NEW ORLEANS, LA"
    },
    {
        "name": "ABCOTT INSTITUTE",
        "location": "SOUTHFIELD, MI"
    },
    {
        "name": "GULF COAST STATE COLLEGE",
        "location": "PANAMA CITY, FL"
    },
    {
        "name": "NORTH GEORGIA TECHNICAL COLLEGE",
        "location": "CLARKESVILLE, GA"
    },
    {
        "name": "WYOTECH",
        "location": "LARAMIE, WY"
    },
    {
        "name": "DEHART TECHNICAL SCHOOL",
        "location": "MODESTO, CA"
    },
    {
        "name": "TEACHERS COLLEGE OF SAN JOAQUIN",
        "location": "STOCKTON, CA"
    },
    {
        "name": "THE UNIVERSITY OF TEXAS SYSTEM OFFICE",
        "location": "AUSTIN, TX"
    },
    {
        "name": "UNION INSTITUTE & UNIVERSITY",
        "location": "CINCINNATI, OH"
    },
    {
        "name": "AVIATION INSTITUTE OF MAINTENANCE-ORLANDO",
        "location": "CASSELBERRY, FL"
    },
    {
        "name": "RUTGERS UNIVERSITY-NEW BRUNSWICK",
        "location": "NEW BRUNSWICK, NJ"
    },
    {
        "name": "VIRGINIA COMMONWEALTH UNIVERSITY",
        "location": "RICHMOND, VA"
    },
    {
        "name": "SOUTHEASTERN UNIVERSITY",
        "location": "LAKELAND, FL"
    },
    {
        "name": "UNIVERSITY OF WYOMING",
        "location": "LARAMIE, WY"
    },
    {
        "name": "NATIONAL AVIATION ACADEMY OF NEW ENGLAND",
        "location": "CONCORD, MA"
    },
    {
        "name": "SYLVAIN MELLOUL INTERNATIONAL HAIR ACADEMY",
        "location": "LYNCHBURG, VA"
    },
    {
        "name": "NORCO COLLEGE",
        "location": "NORCO, CA"
    },
    {
        "name": "REMINGTON COLLEGE-HEATHROW CAMPUS",
        "location": "LAKE MARY, FL"
    },
    {
        "name": "HORRY-GEORGETOWN TECHNICAL COLLEGE",
        "location": "CONWAY, SC"
    },
    {
        "name": "MIDLANDS TECHNICAL COLLEGE",
        "location": "WEST COLUMBIA, SC"
    },
    {
        "name": "ELITE SCHOOL OF COSMETOLOGY",
        "location": "NORWALK, OH"
    },
    {
        "name": "DINE COLLEGE",
        "location": "TSAILE, AZ"
    },
    {
        "name": "CHRISTINE VALMY INTERNATIONAL SCHOOL OF ESTHETICS & COSMETOLOGY",
        "location": "PINE BROOK, NJ"
    },
    {
        "name": "UNIVERSITY OF MOUNT UNION",
        "location": "ALLIANCE, OH"
    },
    {
        "name": "FLORIDA INSTITUTE OF RECORDING SOUND AND TECHNOLOGY",
        "location": "ORLANDO, FL"
    },
    {
        "name": "ASHLAND UNIVERSITY",
        "location": "ASHLAND, OH"
    },
    {
        "name": "CORBAN UNIVERSITY",
        "location": "SALEM, OR"
    },
    {
        "name": "TEMPLE UNIVERSITY",
        "location": "PHILADELPHIA, PA"
    },
    {
        "name": "VENANGO COUNTY AREA VOCATIONAL TECHNICAL SCHOOL",
        "location": "OIL CITY, PA"
    },
    {
        "name": "UNIVERSITY OF DALLAS",
        "location": "IRVING, TX"
    },
    {
        "name": "WESTFIELD STATE UNIVERSITY",
        "location": "WESTFIELD, MA"
    },
    {
        "name": "HULT INTERNATIONAL BUSINESS SCHOOL",
        "location": "CAMBRIDGE, MA"
    },
    {
        "name": "WASHINGTON UNIVERSITY IN ST LOUIS",
        "location": "SAINT LOUIS, MO"
    },
    {
        "name": "ST. PETER'S HOSPITAL COLLEGE OF NURSING",
        "location": "ALBANY, NY"
    },
    {
        "name": "GOVERNORS STATE UNIVERSITY",
        "location": "UNIVERSITY PARK, IL"
    },
    {
        "name": "NORTH IDAHO COLLEGE",
        "location": "COEUR D'ALENE, ID"
    },
    {
        "name": "DALTON STATE COLLEGE",
        "location": "DALTON, GA"
    },
    {
        "name": "COLORADO COLLEGE",
        "location": "COLORADO SPRINGS, CO"
    },
    {
        "name": "BORNER'S BARBER COLLEGE",
        "location": "LOS ANGELES, CA"
    },
    {
        "name": "MIAMI LAKES EDUCATIONAL CENTER AND TECHNICAL COLLEGE",
        "location": "MIAMI LAKES, FL"
    },
    {
        "name": "BRESCIA UNIVERSITY",
        "location": "OWENSBORO, KY"
    },
    {
        "name": "J MICHAEL HARROLD BEAUTY ACADEMY",
        "location": "TERRE HAUTE, IN"
    },
    {
        "name": "NEW YORK ACADEMY OF ART",
        "location": "NEW YORK, NY"
    },
    {
        "name": "BOARD OF TRUSTEES-MISSISSIPPI STATE INSTITUTIONS OF HIGHER LEARNING",
        "location": "JACKSON, MS"
    },
    {
        "name": "HILLYARD TECHNICAL CENTER",
        "location": "SAINT JOSEPH, MO"
    },
    {
        "name": "WHITE MOUNTAINS COMMUNITY COLLEGE",
        "location": "BERLIN, NH"
    },
    {
        "name": "MONTGOMERY COMMUNITY COLLEGE",
        "location": "TROY, NC"
    },
    {
        "name": "ARIZONA COLLEGE-GLENDALE",
        "location": "GLENDALE, AZ"
    },
    {
        "name": "ST LOUIS COLLEGE OF HEALTH CAREERS-FENTON",
        "location": "FENTON, MO"
    },
    {
        "name": "FLORIDA EDUCATION INSTITUTE",
        "location": "MIAMI, FL"
    },
    {
        "name": "PAUL MITCHELL THE SCHOOL-JERSEY SHORE",
        "location": "BRICK, NJ"
    },
    {
        "name": "NORTHWEST COLLEGE-CLACKAMAS",
        "location": "HAPPY VALLEY, OR"
    },
    {
        "name": "UNIVERSITY OF THE VIRGIN ISLANDS",
        "location": "CHARLOTTE AMALIE, VI"
    },
    {
        "name": "CLOYD'S BEAUTY SCHOOL 3 INC",
        "location": "MONROE, LA"
    },
    {
        "name": "BANK STREET COLLEGE OF EDUCATION",
        "location": "NEW YORK, NY"
    },
    {
        "name": "HARRIS SCHOOL OF BUSINESS-SANFORD CAMPUS",
        "location": "SANFORD, ME"
    },
    {
        "name": "NEW COMMUNITY CAREER & TECHNICAL INSTITUTE",
        "location": "NEWARK, NJ"
    },
    {
        "name": "ROCKFORD UNIVERSITY",
        "location": "ROCKFORD, IL"
    },
    {
        "name": "SAINT FRANCIS UNIVERSITY",
        "location": "LORETTO, PA"
    },
    {
        "name": "BAKER COLLEGE",
        "location": "OWOSSO, MI"
    },
    {
        "name": "GUILFORD COLLEGE",
        "location": "GREENSBORO, NC"
    },
    {
        "name": "YESHIVAH GEDOLAH RABBINICAL COLLEGE",
        "location": "MIAMI BEACH, FL"
    },
    {
        "name": "UNIVERSITY OF ALASKA SYSTEM OF HIGHER EDUCATION",
        "location": "FAIRBANKS, AK"
    },
    {
        "name": "JOHNSON UNIVERSITY FLORIDA",
        "location": "KISSIMMEE, FL"
    },
    {
        "name": "HARRIS-STOWE STATE UNIVERSITY",
        "location": "SAINT LOUIS, MO"
    },
    {
        "name": "NORTH AMERICAN UNIVERSITY",
        "location": "STAFFORD, TX"
    },
    {
        "name": "PIMA MEDICAL INSTITUTE-CHULA VISTA",
        "location": "CHULA VISTA, CA"
    },
    {
        "name": "AMERICAN INSTITUTE OF ALTERNATIVE MEDICINE",
        "location": "COLUMBUS, OH"
    },
    {
        "name": "PLATT COLLEGE-MILLER-MOTTE TECHNICAL-CHATTANOOGA",
        "location": "CHATTANOOGA, TN"
    },
    {
        "name": "ADVANCED COLLEGE",
        "location": "SOUTH GATE, CA"
    },
    {
        "name": "CES COLLEGE",
        "location": "BURBANK, CA"
    },
    {
        "name": "SKAGIT VALLEY COLLEGE",
        "location": "MOUNT VERNON, WA"
    },
    {
        "name": "DELAWARE VALLEY UNIVERSITY",
        "location": "DOYLESTOWN, PA"
    },
    {
        "name": "PALO ALTO COLLEGE",
        "location": "SAN ANTONIO, TX"
    },
    {
        "name": "BUTLER BEAUTY ACADEMY-NEW CASTLE BEAUTY ACADEMY",
        "location": "NEW CASTLE, PA"
    },
    {
        "name": "FORTIS COLLEGE-SMYRNA",
        "location": "SMYRNA, GA"
    },
    {
        "name": "CARRINGTON COLLEGE-CITRUS HEIGHTS",
        "location": "CITRUS HEIGHTS, CA"
    },
    {
        "name": "BERKELEY SCHOOL OF THEOLOGY",
        "location": "BERKELEY, CA"
    },
    {
        "name": "CLOVIS ADULT EDUCATION",
        "location": "CLOVIS, CA"
    },
    {
        "name": "PEPPERDINE UNIVERSITY",
        "location": "MALIBU, CA"
    },
    {
        "name": "CALIFORNIA STATE UNIVERSITY-MONTEREY BAY",
        "location": "SEASIDE, CA"
    },
    {
        "name": "BARNES-JEWISH COLLEGE GOLDFARB SCHOOL OF NURSING",
        "location": "SAINT LOUIS, MO"
    },
    {
        "name": "INTERIOR DESIGNERS INSTITUTE",
        "location": "NEWPORT BEACH, CA"
    },
    {
        "name": "SOUTH ARKANSAS COMMUNITY COLLEGE",
        "location": "EL DORADO, AR"
    },
    {
        "name": "SANTIAGO CANYON COLLEGE",
        "location": "ORANGE, CA"
    },
    {
        "name": "AUGUSTANA COLLEGE",
        "location": "ROCK ISLAND, IL"
    },
    {
        "name": "DALLAS THEOLOGICAL SEMINARY",
        "location": "DALLAS, TX"
    },
    {
        "name": "URSULINE COLLEGE",
        "location": "PEPPER PIKE, OH"
    },
    {
        "name": "RICHPORT TECHNICAL COLLEGE",
        "location": "GURABO, PR"
    },
    {
        "name": "DUTCHESS BOCES-PRACTICAL NURSING PROGRAM",
        "location": "POUGHKEEPSIE, NY"
    },
    {
        "name": "OMEGA INSTITUTE OF COSMETOLOGY",
        "location": "HOUMA, LA"
    },
    {
        "name": "BEIS MEDRASH HEICHAL DOVID",
        "location": "FAR ROCKAWAY, NY"
    },
    {
        "name": "CHARLOTTE CHRISTIAN COLLEGE AND THEOLOGICAL SEMINARY",
        "location": "CHARLOTTE, NC"
    },
    {
        "name": "AVEDA INSTITUTE-SOUTH FLORIDA",
        "location": "DAVIE, FL"
    },
    {
        "name": "FORTIS COLLEGE-LANDOVER",
        "location": "LANDOVER, MD"
    },
    {
        "name": "SALON SUCCESS ACADEMY-RIVERSIDE",
        "location": "RIVERSIDE, CA"
    },
    {
        "name": "SANTA BARBARA BUSINESS COLLEGE-BAKERSFIELD",
        "location": "BAKERSFIELD, CA"
    },
    {
        "name": "SOUTHEASTERN TECHNICAL INSTITUTE",
        "location": "SOUTH EASTON, MA"
    },
    {
        "name": "SAINT PAUL COLLEGE",
        "location": "SAINT PAUL, MN"
    },
    {
        "name": "HIBBING COMMUNITY COLLEGE",
        "location": "HIBBING, MN"
    },
    {
        "name": "ANOKA-RAMSEY COMMUNITY COLLEGE",
        "location": "COON RAPIDS, MN"
    },
    {
        "name": "VENUS BEAUTY ACADEMY",
        "location": "SHARON HILL, PA"
    },
    {
        "name": "WILSON COLLEGE",
        "location": "CHAMBERSBURG, PA"
    },
    {
        "name": "LOUISIANA STATE UNIVERSITY-SHREVEPORT",
        "location": "SHREVEPORT, LA"
    },
    {
        "name": "ST CHARLES COMMUNITY COLLEGE",
        "location": "COTTLEVILLE, MO"
    },
    {
        "name": "THE COLLEGE OF NEW JERSEY",
        "location": "EWING, NJ"
    },
    {
        "name": "PETS PLAYGROUND GROOMING SCHOOL",
        "location": "POMPANO BEACH, FL"
    },
    {
        "name": "WOMEN'S INSTITUTE OF TORAH SEMINARY AND COLLEGE",
        "location": "BALTIMORE, MD"
    },
    {
        "name": "BROWN BEAUTY BARBER SCHOOL",
        "location": "BESSEMER, AL"
    },
    {
        "name": "JERSEY COLLEGE",
        "location": "TAMPA, FL"
    },
    {
        "name": "WESTERN MARICOPA EDUCATION CENTER - NORTHEAST CAMPUS",
        "location": "PHOENIX, AZ"
    },
    {
        "name": "NUC UNIVERSITY - FLORIDA TECHNICAL COLLEGE - CUTLER BAY",
        "location": "CUTLER BAY, FL"
    },
    {
        "name": "PATHWAYS COLLEGE",
        "location": "PASADENA, CA"
    },
    {
        "name": "EAGLE GATE COLLEGE-BOISE CAMPUS",
        "location": "BOISE, ID"
    },
    {
        "name": "GEORGE MASON UNIVERSITY",
        "location": "FAIRFAX, VA"
    },
    {
        "name": "HOWARD UNIVERSITY",
        "location": "WASHINGTON, DC"
    },
    {
        "name": "TOM P HANEY TECHNICAL CENTER",
        "location": "PANAMA CITY, FL"
    },
    {
        "name": "SALON BOUTIQUE ACADEMY",
        "location": "ADDISON, TX"
    },
    {
        "name": "THE SALON PROFESSIONAL ACADEMY-ONALASKA",
        "location": "ONALASKA, WI"
    },
    {
        "name": "MORAINE VALLEY COMMUNITY COLLEGE",
        "location": "PALOS HILLS, IL"
    },
    {
        "name": "FOCUS PERSONAL TRAINING INSTITUTE",
        "location": "NEW YORK, NY"
    },
    {
        "name": "BETH MEDRASH OF ASBURY PARK",
        "location": "LAKEWOOD, NJ"
    },
    {
        "name": "BOCA BEAUTY ACADEMY-PARKLAND",
        "location": "PARKLAND, FL"
    },
    {
        "name": "O C COLLINS CAREER CENTER",
        "location": "CHESAPEAKE, OH"
    },
    {
        "name": "BLACKSTONE VALLEY VOCATIONAL REGIONAL SCHOOL DISTRICT",
        "location": "UPTON, MA"
    },
    {
        "name": "CENTRAL PIEDMONT COMMUNITY COLLEGE",
        "location": "CHARLOTTE, NC"
    },
    {
        "name": "OCONEE FALL LINE TECHNICAL COLLEGE",
        "location": "SANDERSVILLE, GA"
    },
    {
        "name": "TUSCULUM UNIVERSITY",
        "location": "GREENEVILLE, TN"
    },
    {
        "name": "DUQUESNE UNIVERSITY",
        "location": "PITTSBURGH, PA"
    },
    {
        "name": "EMPIRE BEAUTY SCHOOL-SHAMOKIN DAM",
        "location": "SHAMOKIN DAM, PA"
    },
    {
        "name": "AGNES SCOTT COLLEGE",
        "location": "DECATUR, GA"
    },
    {
        "name": "PIMA COMMUNITY COLLEGE",
        "location": "TUCSON, AZ"
    },
    {
        "name": "COLORADO MESA UNIVERSITY",
        "location": "GRAND JUNCTION, CO"
    },
    {
        "name": "CUYAHOGA VALLEY CAREER CENTER",
        "location": "BRECKSVILLE, OH"
    },
    {
        "name": "GEORGIA NORTHWESTERN TECHNICAL COLLEGE",
        "location": "ROME, GA"
    },
    {
        "name": "MIAMI UNIVERSITY-HAMILTON",
        "location": "HAMILTON, OH"
    },
    {
        "name": "HARRISBURG AREA COMMUNITY COLLEGE",
        "location": "HARRISBURG, PA"
    },
    {
        "name": "MIND BODY INSTITUTE",
        "location": "MADISON, TN"
    },
    {
        "name": "MARGARET H ROLLINS SCHOOL OF NURSING AT BEEBE MEDICAL CENTER",
        "location": "LEWES, DE"
    },
    {
        "name": "NOTRE DAME COLLEGE",
        "location": "CLEVELAND, OH"
    },
    {
        "name": "ATLANTA METROPOLITAN STATE COLLEGE",
        "location": "ATLANTA, GA"
    },
    {
        "name": "HOLLYWOOD INSTITUTE OF BEAUTY CAREERS-CASSELBERRY",
        "location": "CASSELBERRY, FL"
    },
    {
        "name": "INDIANA UNIVERSITY-NORTHWEST",
        "location": "GARY, IN"
    },
    {
        "name": "BUTLER UNIVERSITY",
        "location": "INDIANAPOLIS, IN"
    },
    {
        "name": "FORTIS COLLEGE-MONTGOMERY",
        "location": "MONTGOMERY, AL"
    },
    {
        "name": "INTERNATIONAL ACADEMY",
        "location": "SOUTH DAYTONA, FL"
    },
    {
        "name": "ORANGE TECHNICAL COLLEGE-MID FLORIDA CAMPUS",
        "location": "ORLANDO, FL"
    },
    {
        "name": "MR LEON'S SCHOOL OF HAIR DESIGN-MOSCOW",
        "location": "MOSCOW, ID"
    },
    {
        "name": "EMPIRE BEAUTY SCHOOL-MICHIGAN",
        "location": "GRAND RAPIDS, MI"
    },
    {
        "name": "MISSOURI STATE UNIVERSITY-SPRINGFIELD",
        "location": "SPRINGFIELD, MO"
    },
    {
        "name": "RIVER VALLEY COMMUNITY COLLEGE",
        "location": "CLAREMONT, NH"
    },
    {
        "name": "ROSS MEDICAL EDUCATION CENTER-CINCINNATI",
        "location": "CINCINNATI, OH"
    },
    {
        "name": "ESCUELA DE ARTES PLASTICAS Y DISENO DE PUERTO RICO",
        "location": "SAN JUAN, PR"
    },
    {
        "name": "VEEB NASSAU COUNTY SCHOOL OF PRACTICAL NURSING",
        "location": "HICKSVILLE, NY"
    },
    {
        "name": "WESTERN GOVERNORS UNIVERSITY",
        "location": "SALT LAKE CITY, UT"
    },
    {
        "name": "CENTRAL CAREER INSTITUTE LLC",
        "location": "SOUTH PLAINFIELD, NJ"
    },
    {
        "name": "UNIVERSIDAD PENTECOSTAL MIZPA",
        "location": "RIO PIEDRAS, PR"
    },
    {
        "name": "AVIATION INSTITUTE OF MAINTENANCE-KANSAS CITY",
        "location": "KANSAS CITY, MO"
    },
    {
        "name": "BISMARCK STATE COLLEGE",
        "location": "BISMARCK, ND"
    },
    {
        "name": "GREATER JOHNSTOWN CAREER AND TECHNOLOGY CENTER",
        "location": "JOHNSTOWN, PA"
    },
    {
        "name": "PENNSYLVANIA COLLEGE OF ART AND DESIGN",
        "location": "LANCASTER, PA"
    },
    {
        "name": "UNITED STATES MILITARY ACADEMY",
        "location": "WEST POINT, NY"
    },
    {
        "name": "ADVANTAGE TECHNICAL COLLEGE",
        "location": "MANATI, PR"
    },
    {
        "name": "WESTERN MICHIGAN UNIVERSITY-THOMAS M. COOLEY LAW SCHOOL",
        "location": "LANSING, MI"
    },
    {
        "name": "KANSAS WESLEYAN UNIVERSITY",
        "location": "SALINA, KS"
    },
    {
        "name": "UCAS UNIVERSITY OF COSMETOLOGY ARTS & SCIENCES-MCALLEN",
        "location": "MCALLEN, TX"
    },
    {
        "name": "MOLER-PICKENS BEAUTY ACADEMY",
        "location": "FAIRFIELD, OH"
    },
    {
        "name": "THE SALON PROFESSIONAL ACADEMY-TONAWANDA",
        "location": "TONAWANDA, NY"
    },
    {
        "name": "HERITAGE VALLEY KENNEDY SCHOOL OF NURSING",
        "location": "MCKEES ROCKS, PA"
    },
    {
        "name": "INSTITUTE OF WORLD POLITICS",
        "location": "WASHINGTON, DC"
    },
    {
        "name": "MINNEAPOLIS COMMUNITY AND TECHNICAL COLLEGE",
        "location": "MINNEAPOLIS, MN"
    },
    {
        "name": "HERZING UNIVERSITY-MINNEAPOLIS",
        "location": "ST. LOUIS PARK, MN"
    },
    {
        "name": "COLLEGE OF STATEN ISLAND CUNY",
        "location": "STATEN ISLAND, NY"
    },
    {
        "name": "SOUTHWEST INSTITUTE OF HEALING ARTS",
        "location": "TEMPE, AZ"
    },
    {
        "name": "NORTH ADRIAN'S COLLEGE OF BEAUTY INC",
        "location": "MODESTO, CA"
    },
    {
        "name": "CALIFORNIA COLLEGE SAN DIEGO-COLLEGEAMERICA-PHOENIX",
        "location": "PHOENIX, AZ"
    },
    {
        "name": "THE SALON PROFESSIONAL ACADEMY-COLORADO SPRINGS",
        "location": "COLORADO SPRINGS, CO"
    },
    {
        "name": "PURE AESTHETICS NATURAL SKINCARE SCHOOL",
        "location": "TUCSON, AZ"
    },
    {
        "name": "ST LUKE'S COLLEGE",
        "location": "SIOUX CITY, IA"
    },
    {
        "name": "MILAN INSTITUTE-AMARILLO",
        "location": "AMARILLO, TX"
    },
    {
        "name": "OKLAHOMA CITY COMMUNITY COLLEGE",
        "location": "OKLAHOMA CITY, OK"
    },
    {
        "name": "EASTERN WYOMING COLLEGE",
        "location": "TORRINGTON, WY"
    },
    {
        "name": "FOLSOM LAKE COLLEGE",
        "location": "FOLSOM, CA"
    },
    {
        "name": "RABBINICAL COLLEGE TELSHE",
        "location": "WICKLIFFE, OH"
    },
    {
        "name": "MULTNOMAH UNIVERSITY",
        "location": "PORTLAND, OR"
    },
    {
        "name": "DEVRY UNIVERSITY-ADMINISTRATIVE OFFICE",
        "location": "NAPERVILLE, IL"
    },
    {
        "name": "SUFFOLK BEAUTY ACADEMY",
        "location": "SUFFOLK, VA"
    },
    {
        "name": "SEATTLE CENTRAL COLLEGE",
        "location": "SEATTLE, WA"
    },
    {
        "name": "SPOKANE FALLS COMMUNITY COLLEGE",
        "location": "SPOKANE, WA"
    },
    {
        "name": "CENTRAL PENNSYLVANIA INSTITUTE OF SCIENCE AND TECHNOLOGY",
        "location": "PLEASANT GAP, PA"
    },
    {
        "name": "PCI HEALTH TRAINING CENTER",
        "location": "DALLAS, TX"
    },
    {
        "name": "ARKANSAS BAPTIST COLLEGE",
        "location": "LITTLE ROCK, AR"
    },
    {
        "name": "PROFESSIONAL COSMETOLOGY EDUCATION CENTER",
        "location": "EL DORADO, AR"
    },
    {
        "name": "AVALON SCHOOL OF COSMETOLOGY-ALAMEDA",
        "location": "ALAMEDA, CA"
    },
    {
        "name": "SADDLEBACK COLLEGE",
        "location": "MISSION VIEJO, CA"
    },
    {
        "name": "LAKE FOREST COLLEGE",
        "location": "LAKE FOREST, IL"
    },
    {
        "name": "ANTILLES SCHOOL OF TECHNICAL CAREERS",
        "location": "SAN JUAN, PR"
    },
    {
        "name": "TRINE UNIVERSITY-REGIONAL/NON-TRADITIONAL CAMPUSES",
        "location": "FORT WAYNE, IN"
    },
    {
        "name": "LOS RIOS COMMUNITY COLLEGE DISTRICT OFFICE",
        "location": "SACRAMENTO, CA"
    },
    {
        "name": "EAST SAN GABRIEL VALLEY REGIONAL OCCUPATIONAL PROGRAM",
        "location": "WEST COVINA, CA"
    },
    {
        "name": "HOLY APOSTLES COLLEGE AND SEMINARY",
        "location": "CROMWELL, CT"
    },
    {
        "name": "COLORADO CHRISTIAN UNIVERSITY",
        "location": "LAKEWOOD, CO"
    },
    {
        "name": "TAYLORTOWN SCHOOL OF BEAUTY INC",
        "location": "TAYLOR, MI"
    },
    {
        "name": "SUNSTATE ACADEMY",
        "location": "FORT MYERS, FL"
    },
    {
        "name": "GENESEE VALLEY BOCES-PRACTICAL NURSING PROGRAM",
        "location": "BATAVIA, NY"
    },
    {
        "name": "PILLAR COLLEGE",
        "location": "NEWARK, NJ"
    },
    {
        "name": "COLLEGE OF BUSINESS AND TECHNOLOGY-HIALEAH",
        "location": "HIALEAH, FL"
    },
    {
        "name": "UNIVERSITY OF CONNECTICUT",
        "location": "STORRS, CT"
    },
    {
        "name": "CARTERET COMMUNITY COLLEGE",
        "location": "MOREHEAD CITY, NC"
    },
    {
        "name": "BREVARD COLLEGE",
        "location": "BREVARD, NC"
    },
    {
        "name": "UNIVERSITY OF MASSACHUSETTS-BOSTON",
        "location": "BOSTON, MA"
    },
    {
        "name": "EASTERN NEW MEXICO UNIVERSITY",
        "location": "PORTALES, NM"
    },
    {
        "name": "PAUL MITCHELL THE SCHOOL-RICHLAND",
        "location": "RICHLAND, WA"
    },
    {
        "name": "AMERICAN NATIONAL UNIVERSITY-PIKEVILLE",
        "location": "PIKEVILLE, KY"
    },
    {
        "name": "NAUGATUCK VALLEY COMMUNITY COLLEGE",
        "location": "WATERBURY, CT"
    },
    {
        "name": "U.S. TRUCK DRIVER TRAINING SCHOOL",
        "location": "STERLING HEIGHTS, MI"
    },
    {
        "name": "WELLSPRING SCHOOL OF ALLIED HEALTH-SPRINGFIELD",
        "location": "SPRINGFIELD, MO"
    },
    {
        "name": "PREMIER ACADEMY OF COSMETOLOGY",
        "location": "MCALESTER, OK"
    },
    {
        "name": "LARRY'S BARBER COLLEGE",
        "location": "CHICAGO, IL"
    },
    {
        "name": "ARIZONA COLLEGE OF NURSING-FORT LAUDERDALE",
        "location": "FORT LAUDERDALE, FL"
    },
    {
        "name": "NUC UNIVERSITY - FLORIDA TECHNICAL COLLEGE - PEMBROKE PINES",
        "location": "PEMBROKE PINES, FL"
    },
    {
        "name": "RELAY GRADUATE SCHOOL OF EDUCATION - INDIANA",
        "location": "INDIANAPOLIS, IN"
    },
    {
        "name": "UNIVERSAL SPA TRAINING ACADEMY - TYLER'S BEAUTY AND SPA ACADEMY",
        "location": "BRADENTON, FL"
    },
    {
        "name": "UNIVERSAL TRINITY COLLEGE",
        "location": "MIAMI, FL"
    },
    {
        "name": "MARYLAND INSTITUTE COLLEGE OF ART",
        "location": "BALTIMORE, MD"
    },
    {
        "name": "CAAN ACADEMY OF NURSING",
        "location": "MATTESON, IL"
    },
    {
        "name": "MED ACADEMY",
        "location": "HIALEAH, FL"
    },
    {
        "name": "CHRISTIAN CULINARY ACADEMY",
        "location": "CANNON BEACH, OR"
    },
    {
        "name": "LENOIR COMMUNITY COLLEGE",
        "location": "KINSTON, NC"
    },
    {
        "name": "GANNON UNIVERSITY",
        "location": "ERIE, PA"
    },
    {
        "name": "THE ART INSTITUTE OF VIRGINIA BEACH",
        "location": "VIRGINIA BEACH, VA"
    },
    {
        "name": "PASSAIC COUNTY COMMUNITY COLLEGE",
        "location": "PATERSON, NJ"
    },
    {
        "name": "COMPASS COLLEGE OF CINEMATIC ARTS",
        "location": "GRAND RAPIDS, MI"
    },
    {
        "name": "PELOTON COLLEGE",
        "location": "DALLAS, TX"
    },
    {
        "name": "JOHNS HOPKINS UNIVERSITY",
        "location": "BALTIMORE, MD"
    },
    {
        "name": "SAINT JOSEPH SEMINARY COLLEGE",
        "location": "ST. BENEDICT, LA"
    },
    {
        "name": "COLUMBIA INTERNATIONAL UNIVERSITY",
        "location": "COLUMBIA, SC"
    },
    {
        "name": "DEL MAR COLLEGE",
        "location": "CORPUS CHRISTI, TX"
    },
    {
        "name": "UNIVERSITY OF ARKANSAS AT MONTICELLO",
        "location": "MONTICELLO, AR"
    },
    {
        "name": "CRU INSTITUTE OF COSMETOLOGY AND BARBERING",
        "location": "GARDEN GROVE, CA"
    },
    {
        "name": "CRAWFORD COUNTY CAREER AND TECHNICAL CENTER PRACTICAL NURSING PROGRAM",
        "location": "MEADVILLE, PA"
    },
    {
        "name": "COLLEGE OF THE CANYONS",
        "location": "SANTA CLARITA, CA"
    },
    {
        "name": "COLLEGE OF THE DESERT",
        "location": "PALM DESERT, CA"
    },
    {
        "name": "RED ROCKS COMMUNITY COLLEGE",
        "location": "LAKEWOOD, CO"
    },
    {
        "name": "WASHINGTON & JEFFERSON COLLEGE",
        "location": "WASHINGTON, PA"
    },
    {
        "name": "ASHTABULA COUNTY TECHNICAL AND CAREER CAMPUS",
        "location": "JEFFERSON, OH"
    },
    {
        "name": "VIRGINIA POLYTECHNIC INSTITUTE AND STATE UNIVERSITY",
        "location": "BLACKSBURG, VA"
    },
    {
        "name": "LEARNET ACADEMY INC",
        "location": "LOS ANGELES, CA"
    },
    {
        "name": "DYERSBURG STATE COMMUNITY COLLEGE",
        "location": "DYERSBURG, TN"
    },
    {
        "name": "BLACKHAWK TECHNICAL COLLEGE",
        "location": "JANESVILLE, WI"
    },
    {
        "name": "BROKEN ARROW BEAUTY COLLEGE",
        "location": "TULSA, OK"
    },
    {
        "name": "VICTORIA'S ACADEMY OF COSMETOLOGY",
        "location": "KENNEWICK, WA"
    },
    {
        "name": "EMPIRE BEAUTY SCHOOL-CHANDLER",
        "location": "CHANDLER, AZ"
    },
    {
        "name": "WATTS SCHOOL OF NURSING",
        "location": "DURHAM, NC"
    },
    {
        "name": "UNIVERSITY OF CALIFORNIA-LOS ANGELES",
        "location": "LOS ANGELES, CA"
    },
    {
        "name": "ADLER UNIVERSITY",
        "location": "CHICAGO, IL"
    },
    {
        "name": "GOLDEN GATE UNIVERSITY-SAN FRANCISCO",
        "location": "SAN FRANCISCO, CA"
    },
    {
        "name": "VISTA COLLEGE-ONLINE",
        "location": "RICHARDSON, TX"
    },
    {
        "name": "HIGHLINE COLLEGE",
        "location": "DES MOINES, WA"
    },
    {
        "name": "TURTLE MOUNTAIN COMMUNITY COLLEGE",
        "location": "BELCOURT, ND"
    },
    {
        "name": "FRANKLIN COLLEGE",
        "location": "FRANKLIN, IN"
    },
    {
        "name": "UNIVERSITY OF SOUTHERN INDIANA",
        "location": "EVANSVILLE, IN"
    },
    {
        "name": "PAUL MITCHELL THE SCHOOL-LOUISVILLE",
        "location": "LOUISVILLE, KY"
    },
    {
        "name": "BLACKFEET COMMUNITY COLLEGE",
        "location": "BROWNING, MT"
    },
    {
        "name": "SUNY COLLEGE OF TECHNOLOGY AT CANTON",
        "location": "CANTON, NY"
    },
    {
        "name": "JOSEF'S SCHOOL OF HAIR, SKIN & BODY-GRAND FORKS",
        "location": "GRAND FORKS, ND"
    },
    {
        "name": "KETTERING COLLEGE",
        "location": "KETTERING, OH"
    },
    {
        "name": "ATA CAREER EDUCATION",
        "location": "SPRING HILL, FL"
    },
    {
        "name": "ROCKY MOUNTAIN UNIVERSITY OF HEALTH PROFESSIONS",
        "location": "PROVO, UT"
    },
    {
        "name": "MONROE 2 ORLEANS BOCES-CENTER FOR WORKFORCE DEVELOPMENT",
        "location": "ROCHESTER, NY"
    },
    {
        "name": "JONES COUNTY JUNIOR COLLEGE",
        "location": "ELLISVILLE, MS"
    },
    {
        "name": "ALLEGHENY WESLEYAN COLLEGE",
        "location": "SALEM, OH"
    },
    {
        "name": "ST JOSEPH SCHOOL OF NURSING",
        "location": "NASHUA, NH"
    },
    {
        "name": "MACHZIKEI HADATH RABBINICAL COLLEGE",
        "location": "BROOKLYN, NY"
    },
    {
        "name": "MIDWAY PARIS BEAUTY SCHOOL",
        "location": "RIDGEWOOD, NY"
    },
    {
        "name": "KENT STATE UNIVERSITY AT KENT",
        "location": "KENT, OH"
    },
    {
        "name": "BRYAN UNIVERSITY",
        "location": "ROGERS, AR"
    },
    {
        "name": "AUBURN UNIVERSITY AT MONTGOMERY",
        "location": "MONTGOMERY, AL"
    },
    {
        "name": "JOHNSON & WALES UNIVERSITY-ONLINE",
        "location": "PROVIDENCE, RI"
    },
    {
        "name": "BETHANY COLLEGE",
        "location": "BETHANY, WV"
    },
    {
        "name": "CAMBRIDGE JUNIOR COLLEGE-YUBA CITY",
        "location": "YUBA CITY, CA"
    },
    {
        "name": "UNIVERSITY OF PITTSBURGH-JOHNSTOWN",
        "location": "JOHNSTOWN, PA"
    },
    {
        "name": "CENTRAL WYOMING COLLEGE",
        "location": "RIVERTON, WY"
    },
    {
        "name": "CAPITAL UNIVERSITY",
        "location": "COLUMBUS, OH"
    },
    {
        "name": "WARNER PACIFIC UNIVERSITY",
        "location": "PORTLAND, OR"
    },
    {
        "name": "AUGUSTA TECHNICAL COLLEGE",
        "location": "AUGUSTA, GA"
    },
    {
        "name": "CENTURA COLLEGE-VIRGINIA BEACH",
        "location": "VIRGINIA BEACH, VA"
    },
    {
        "name": "SOUTH UNIVERSITY-COLUMBIA",
        "location": "COLUMBIA, SC"
    },
    {
        "name": "ARKANSAS STATE UNIVERSITY",
        "location": "JONESBORO, AR"
    },
    {
        "name": "COBA ACADEMY",
        "location": "ANAHEIM, CA"
    },
    {
        "name": "TRICOCI UNIVERSITY OF BEAUTY CULTURE-CHICAGO NW",
        "location": "CHICAGO, IL"
    },
    {
        "name": "SOUTHWESTERN COLLEGE",
        "location": "CHULA VISTA, CA"
    },
    {
        "name": "THE WRIGHT INSTITUTE",
        "location": "BERKELEY, CA"
    },
    {
        "name": "WHITTIER COLLEGE",
        "location": "WHITTIER, CA"
    },
    {
        "name": "MCKENDREE UNIVERSITY",
        "location": "LEBANON, IL"
    },
    {
        "name": "WILLIAM WOODS UNIVERSITY",
        "location": "FULTON, MO"
    },
    {
        "name": "STUDIO JEWELERS",
        "location": "NEW YORK, NY"
    },
    {
        "name": "EDUCATIONAL TECHNICAL COLLEGE-RECINTO DE COAMO",
        "location": "COAMO, PR"
    },
    {
        "name": "CAPITAL COMMUNITY COLLEGE",
        "location": "HARTFORD, CT"
    },
    {
        "name": "NORTH FLORIDA TECHNICAL COLLEGE",
        "location": "STARKE, FL"
    },
    {
        "name": "MAYO CLINIC COLLEGE OF MEDICINE AND SCIENCE",
        "location": "ROCHESTER, MN"
    },
    {
        "name": "ST CATHERINE UNIVERSITY",
        "location": "SAINT PAUL, MN"
    },
    {
        "name": "NASH COMMUNITY COLLEGE",
        "location": "ROCKY MOUNT, NC"
    },
    {
        "name": "ROBESON COMMUNITY COLLEGE",
        "location": "LUMBERTON, NC"
    },
    {
        "name": "ACADEMY OF HAIR TECHNOLOGY",
        "location": "GREENVILLE, SC"
    },
    {
        "name": "QUEEN CITY COLLEGE",
        "location": "CLARKSVILLE, TN"
    },
    {
        "name": "SULLIVAN UNIVERSITY",
        "location": "LOUISVILLE, KY"
    },
    {
        "name": "LANSING COMMUNITY COLLEGE",
        "location": "LANSING, MI"
    },
    {
        "name": "MONROE COMMUNITY COLLEGE",
        "location": "ROCHESTER, NY"
    },
    {
        "name": "BNOS ZION OF BOBOV SEMINARY",
        "location": "BROOKLYN, NY"
    },
    {
        "name": "IDAHO COLLEGE OF OSTEOPATHIC MEDICINE",
        "location": "MERIDIAN, ID"
    },
    {
        "name": "SAN JOAQUIN VALLEY COLLEGE-SANTA MARIA",
        "location": "SANTA MARIA, CA"
    },
    {
        "name": "NATURAL IMAGES BEAUTY COLLEGE",
        "location": "CLUTE, TX"
    },
    {
        "name": "ATLANTIC CAPE COMMUNITY COLLEGE",
        "location": "MAYS LANDING, NJ"
    },
    {
        "name": "ARCADIA UNIVERSITY",
        "location": "GLENSIDE, PA"
    },
    {
        "name": "HOWARD COLLEGE",
        "location": "BIG SPRING, TX"
    },
    {
        "name": "NORTH CENTRAL STATE COLLEGE",
        "location": "MANSFIELD, OH"
    },
    {
        "name": "FORTIS COLLEGE-INDIANAPOLIS",
        "location": "INDIANAPOLIS, IN"
    },
    {
        "name": "PAUL MITCHELL THE SCHOOL-PHOENIX",
        "location": "PHOENIX, AZ"
    },
    {
        "name": "OKLAHOMA CITY UNIVERSITY",
        "location": "OKLAHOMA CITY, OK"
    },
    {
        "name": "MONTGOMERY COUNTY COMMUNITY COLLEGE",
        "location": "BLUE BELL, PA"
    },
    {
        "name": "SAVANNAH COLLEGE OF ART AND DESIGN",
        "location": "SAVANNAH, GA"
    },
    {
        "name": "ROB ROY ACADEMY-FALL RIVER",
        "location": "FALL RIVER, MA"
    },
    {
        "name": "RADFORD UNIVERSITY",
        "location": "RADFORD, VA"
    },
    {
        "name": "CONCORDE CAREER COLLEGE-GRAND PRAIRIE",
        "location": "GRAND PRAIRIE, TX"
    },
    {
        "name": "PAUL MITCHELL THE SCHOOL-ST LOUIS",
        "location": "ST. LOUIS, MO"
    },
    {
        "name": "KENNETH SHULER SCHOOL OF COSMETOLOGY AND NAILS-COLUMBIA",
        "location": "COLUMBIA, SC"
    },
    {
        "name": "KEYSTONE COLLEGE",
        "location": "LA PLUME, PA"
    },
    {
        "name": "REMINGTON COLLEGE-CLEVELAND CAMPUS",
        "location": "CLEVELAND, OH"
    },
    {
        "name": "MIDWESTERN UNIVERSITY-DOWNERS GROVE",
        "location": "DOWNERS GROVE, IL"
    },
    {
        "name": "OHIO STATE UNIVERSITY-MARION CAMPUS",
        "location": "MARION, OH"
    },
    {
        "name": "EMPIRE BEAUTY SCHOOL-WARWICK",
        "location": "PROVIDENCE, RI"
    },
    {
        "name": "WEATHERFORD COLLEGE",
        "location": "WEATHERFORD, TX"
    },
    {
        "name": "BLUEGRASS COMMUNITY AND TECHNICAL COLLEGE",
        "location": "LEXINGTON, KY"
    },
    {
        "name": "PAUL MITCHELL THE SCHOOL-PORTLAND",
        "location": "PORTLAND, OR"
    },
    {
        "name": "THE COLLEGE OF HEALTH CARE PROFESSIONS-FORT WORTH",
        "location": "FORT WORTH, TX"
    },
    {
        "name": "GRAND VALLEY STATE UNIVERSITY",
        "location": "ALLENDALE, MI"
    },
    {
        "name": "RIVERLAND COMMUNITY COLLEGE",
        "location": "AUSTIN, MN"
    },
    {
        "name": "NATIONAL AMERICAN UNIVERSITY-RAPID CITY",
        "location": "RAPID CITY, SD"
    },
    {
        "name": "MID-DEL TECHNOLOGY CENTER",
        "location": "MIDWEST CITY, OK"
    },
    {
        "name": "SUM BIBLE COLLEGE AND THEOLOGICAL SEMINARY",
        "location": "EL DORADO HILLS, CA"
    },
    {
        "name": "UNITED THEOLOGICAL SEMINARY OF THE TWIN CITIES",
        "location": "ST. PAUL, MN"
    },
    {
        "name": "REMINGTON COLLEGE-HOUSTON SOUTHEAST CAMPUS",
        "location": "WEBSTER, TX"
    },
    {
        "name": "OTTAWA UNIVERSITY-ONLINE",
        "location": "OTTAWA, KS"
    },
    {
        "name": "DICKINSON STATE UNIVERSITY",
        "location": "DICKINSON, ND"
    },
    {
        "name": "POINT UNIVERSITY",
        "location": "WEST POINT, GA"
    },
    {
        "name": "NORTH-WEST COLLEGE-WEST COVINA",
        "location": "WEST COVINA, CA"
    },
    {
        "name": "ARKANSAS STATE UNIVERSITY-MOUNTAIN HOME",
        "location": "MOUNTAIN HOME, AR"
    },
    {
        "name": "THE MODERN COLLEGE OF DESIGN",
        "location": "KETTERING, OH"
    },
    {
        "name": "FLORIDA INSTITUTE OF TECHNOLOGY",
        "location": "MELBOURNE, FL"
    },
    {
        "name": "EDUCATORS OF BEAUTY COLLEGE OF COSMETOLOGY-PERU",
        "location": "PERU, IL"
    },
    {
        "name": "ANOKA TECHNICAL COLLEGE",
        "location": "ANOKA, MN"
    },
    {
        "name": "BETHANY LUTHERAN COLLEGE",
        "location": "MANKATO, MN"
    },
    {
        "name": "EMPIRE BEAUTY SCHOOL-CHERRY HILL",
        "location": "CHERRY HILL, NJ"
    },
    {
        "name": "SALEM COLLEGE",
        "location": "WINSTON-SALEM, NC"
    },
    {
        "name": "WAKE FOREST UNIVERSITY",
        "location": "WINSTON-SALEM, NC"
    },
    {
        "name": "NEW PROFESSIONS TECHNICAL INSTITUTE",
        "location": "MIAMI, FL"
    },
    {
        "name": "MR LEON'S SCHOOL OF HAIR DESIGN-LEWISTON",
        "location": "LEWISTON, ID"
    },
    {
        "name": "ORLEANS NIAGARA BOCES-PRACTICAL NURSING PROGRAM",
        "location": "SANBORN, NY"
    },
    {
        "name": "UNIVERSAL TECHNICAL INSTITUTE OF MASSACHUSETTS INC",
        "location": "NORWOOD, MA"
    },
    {
        "name": "YESHIVA GEDOLAH KESSER TORAH",
        "location": "MONSEY, NY"
    },
    {
        "name": "SHEAR EXCELLENCE HAIR ACADEMY",
        "location": "TAMPA, FL"
    },
    {
        "name": "RIVIER UNIVERSITY",
        "location": "NASHUA, NH"
    },
    {
        "name": "SHEAR EGO INTERNATIONAL SCHOOL OF HAIR DESIGN",
        "location": "ROCHESTER, NY"
    },
    {
        "name": "COLLEGE OF HAIR DESIGN CAREERS",
        "location": "SALEM, OR"
    },
    {
        "name": "TOURO UNIVERSITY WORLDWIDE",
        "location": "LOS ALAMITOS, CA"
    },
    {
        "name": "CARROLL COMMUNITY COLLEGE",
        "location": "WESTMINSTER, MD"
    },
    {
        "name": "MEREDITH COLLEGE",
        "location": "RALEIGH, NC"
    },
    {
        "name": "SIGNATURE HEALTHCARE BROCKTON HOSPITAL SCHOOL OF NURSING",
        "location": "BROCKTON, MA"
    },
    {
        "name": "UNIVERSITY OF NEW MEXICO-GALLUP CAMPUS",
        "location": "GALLUP, NM"
    },
    {
        "name": "ST PAUL'S SCHOOL OF NURSING-QUEENS",
        "location": "REGO PARK, NY"
    },
    {
        "name": "EAGLE GATE COLLEGE-MURRAY",
        "location": "MURRAY, UT"
    },
    {
        "name": "SALON SUCCESS ACADEMY-UPLAND",
        "location": "UPLAND, CA"
    },
    {
        "name": "TEXAS BEAUTY COLLEGE",
        "location": "HALTOM CITY, TX"
    },
    {
        "name": "RENTON TECHNICAL COLLEGE",
        "location": "RENTON, WA"
    },
    {
        "name": "PLATT COLLEGE-MILLER-MOTTE TECHNICAL-CHARLESTON",
        "location": "CHARLESTON, SC"
    },
    {
        "name": "NORTHWEST COLLEGE-HILLSBORO",
        "location": "HILLSBORO, OR"
    },
    {
        "name": "DESIGN'S SCHOOL OF COSMETOLOGY",
        "location": "PASO ROBLES, CA"
    },
    {
        "name": "BARTON COUNTY COMMUNITY COLLEGE",
        "location": "GREAT BEND, KS"
    },
    {
        "name": "RICHARD BLAND COLLEGE",
        "location": "SOUTH PRINCE GEORGE, VA"
    },
    {
        "name": "GRAND VIEW UNIVERSITY",
        "location": "DES MOINES, IA"
    },
    {
        "name": "LINCOLN TECHNICAL INSTITUTE-ALLENTOWN",
        "location": "ALLENTOWN, PA"
    },
    {
        "name": "LAMSON INSTITUTE",
        "location": "SAN ANTONIO, TX"
    },
    {
        "name": "UNIVERSITY OF SAINT JOSEPH",
        "location": "WEST HARTFORD, CT"
    },
    {
        "name": "UNIVERSITY OF CINCINNATI-BLUE ASH COLLEGE",
        "location": "BLUE ASH, OH"
    },
    {
        "name": "OHIO VALLEY COLLEGE OF TECHNOLOGY",
        "location": "EAST LIVERPOOL, OH"
    },
    {
        "name": "WRIGHT STATE UNIVERSITY",
        "location": "DAYTON, OH"
    },
    {
        "name": "PONTOTOC TECHNOLOGY CENTER",
        "location": "ADA, OK"
    },
    {
        "name": "OGLE SCHOOL HAIR SKIN NAILS-FT WORTH",
        "location": "FORT WORTH, TX"
    },
    {
        "name": "EMORY & HENRY COLLEGE",
        "location": "EMORY, VA"
    },
    {
        "name": "OGLE SCHOOL HAIR SKIN NAILS-HURST",
        "location": "HURST, TX"
    },
    {
        "name": "UCAS UNIVERSITY OF COSMETOLOGY ARTS & SCIENCES",
        "location": "SAN ANTONIO, TX"
    },
    {
        "name": "YESHIVA OHR ELCHONON CHABAD WEST COAST TALMUDICAL SEMINARY",
        "location": "LOS ANGELES, CA"
    },
    {
        "name": "UNIVERSITY OF COLORADO BOULDER",
        "location": "BOULDER, CO"
    },
    {
        "name": "LINCOLN COLLEGE OF TECHNOLOGY-DENVER",
        "location": "DENVER, CO"
    },
    {
        "name": "COLUMBIA COLLEGE",
        "location": "SONORA, CA"
    },
    {
        "name": "COLLEGE OF WESTERN IDAHO",
        "location": "NAMPA, ID"
    },
    {
        "name": "ROBERT PAUL ACADEMY OF COSMETOLOGY ARTS & SCIENCES",
        "location": "TIMONIUM, MD"
    },
    {
        "name": "SAN JOSE STATE UNIVERSITY",
        "location": "SAN JOSE, CA"
    },
    {
        "name": "VOLUNTEER STATE COMMUNITY COLLEGE",
        "location": "GALLATIN, TN"
    },
    {
        "name": "MIDAMERICA NAZARENE UNIVERSITY",
        "location": "OLATHE, KS"
    },
    {
        "name": "LU ROSS ACADEMY",
        "location": "VENTURA, CA"
    },
    {
        "name": "INSTITUCION CHAVIANO DE MAYAGUEZ",
        "location": "MAYAGUEZ, PR"
    },
    {
        "name": "HERZING UNIVERSITY-ORLANDO",
        "location": "WINTER PARK, FL"
    },
    {
        "name": "MECH-TECH COLLEGE",
        "location": "CAGUAS, PR"
    },
    {
        "name": "MEDICAL TRAINING COLLEGE",
        "location": "BATON ROUGE, LA"
    },
    {
        "name": "BARNARD COLLEGE",
        "location": "NEW YORK, NY"
    },
    {
        "name": "SAN JOAQUIN COLLEGE OF LAW",
        "location": "CLOVIS, CA"
    },
    {
        "name": "LINCOLN COLLEGE OF TECHNOLOGY-COLUMBIA",
        "location": "COLUMBIA, MD"
    },
    {
        "name": "KIRKSVILLE AREA TECHNICAL CENTER",
        "location": "KIRKSVILLE, MO"
    },
    {
        "name": "UNIVERSITY OF NORTH CAROLINA AT ASHEVILLE",
        "location": "ASHEVILLE, NC"
    },
    {
        "name": "COASTAL CAROLINA COMMUNITY COLLEGE",
        "location": "JACKSONVILLE, NC"
    },
    {
        "name": "FOX COLLEGE",
        "location": "BEDFORD PARK, IL"
    },
    {
        "name": "MR JOHN'S SCHOOL OF COSMETOLOGY ESTHETICS & NAILS-DECATUR",
        "location": "DECATUR, IL"
    },
    {
        "name": "LINCOLN TECHNICAL INSTITUTE-UNION",
        "location": "UNION, NJ"
    },
    {
        "name": "JOLIE HAIR AND BEAUTY ACADEMY-HAZLETON",
        "location": "HAZLETON, PA"
    },
    {
        "name": "BAPTIST HEALTH SCIENCES UNIVERSITY",
        "location": "MEMPHIS, TN"
    },
    {
        "name": "CHRISTIAN BROTHERS UNIVERSITY",
        "location": "MEMPHIS, TN"
    },
    {
        "name": "SAINT JOSEPH'S COLLEGE OF MAINE",
        "location": "STANDISH, ME"
    },
    {
        "name": "CLEVELAND COMMUNITY COLLEGE",
        "location": "SHELBY, NC"
    },
    {
        "name": "NEW BEGINNING COLLEGE OF COSMETOLOGY",
        "location": "ALBERTVILLE, AL"
    },
    {
        "name": "EUROPEAN MEDICAL SCHOOL OF MASSAGE",
        "location": "SINKING SPRING, PA"
    },
    {
        "name": "ICOHS COLLEGE",
        "location": "SAN DIEGO, CA"
    },
    {
        "name": "VISTA ADULT SCHOOL",
        "location": "VISTA, CA"
    },
    {
        "name": "PIMA MEDICAL INSTITUTE-SAN MARCOS",
        "location": "SAN MARCOS, CA"
    },
    {
        "name": "DRURY UNIVERSITY-COLLEGE OF CONTINUING PROFESSIONAL STUDIES",
        "location": "SPRINGFIELD, MO"
    },
    {
        "name": "MINNESOTA STATE COLLEGES AND UNIVERSITIES SYSTEM OFFICE",
        "location": "ST PAUL, MN"
    },
    {
        "name": "AUSTIN CAREER INSTITUTE",
        "location": "AUSTIN, TX"
    },
    {
        "name": "NUC UNIVERSITY - IBC INSTITUTE - PONCE",
        "location": "PONCE, PR"
    },
    {
        "name": "CALIFORNIA INSTITUTE OF ARTS & TECHNOLOGY-NATIONAL CITY",
        "location": "NATIONAL CITY, CA"
    },
    {
        "name": "CALIFORNIA INTERNATIONAL BUSINESS UNIVERSITY",
        "location": "SAN DIEGO, CA"
    },
    {
        "name": "HOUSTON SCHOOL OF CARPENTRY",
        "location": "HOUSTON, TX"
    },
    {
        "name": "MCALLEN CAREERS INSTITUTE",
        "location": "MCALLEN, TX"
    },
    {
        "name": "HEALTH AND TECHNOLOGY TRAINING INSTITUTE",
        "location": "PHILADELPHIA, PA"
    },
    {
        "name": "CAREERS INSTITUTE OF AMERICA",
        "location": "DALLAS, TX"
    },
    {
        "name": "DELUXE BARBER COLLEGE",
        "location": "SAN ANTONIO, TX"
    },
    {
        "name": "OLD TOWN BARBER COLLEGE - KC",
        "location": "KANSAS CITY, MO"
    },
    {
        "name": "NATIONAL AMERICAN UNIVERSITY-KINGS BAY",
        "location": "KINGS BAY, GA"
    },
    {
        "name": "FORTIS COLLEGE-LANDOVER",
        "location": "LANDOVER, MD"
    },
    {
        "name": "ANDREWS UNIVERSITY",
        "location": "BERRIEN SPRINGS, MI"
    },
    {
        "name": "BRIDGEWATER COLLEGE",
        "location": "BRIDGEWATER, VA"
    },
    {
        "name": "SAINT MICHAEL COLLEGE OF ALLIED HEALTH",
        "location": "WASHINGTON, DC"
    },
    {
        "name": "UNIVERSITY OF MIAMI",
        "location": "CORAL GABLES, FL"
    },
    {
        "name": "UNIVERSAL TECHNICAL INSTITUTE OF ARIZONA INC-MOTORCYCLE MECHANICS INSTITUTE DIVISION",
        "location": "PHOENIX, AZ"
    },
    {
        "name": "AUSTIN'S BEAUTY COLLEGE INC",
        "location": "CLARKSVILLE, TN"
    },
    {
        "name": "MOTT COMMUNITY COLLEGE",
        "location": "FLINT, MI"
    },
    {
        "name": "MIAMI INTERNATIONAL UNIVERSITY OF ART & DESIGN-ART INSTITUTE DALLAS",
        "location": "DALLAS, TX"
    },
    {
        "name": "NORTHERN CAREER INSTITUTE",
        "location": "EASTLAKE, OH"
    },
    {
        "name": "MINNESOTA STATE COLLEGE SOUTHEAST",
        "location": "WINONA, MN"
    },
    {
        "name": "CAMDEN COUNTY COLLEGE",
        "location": "BLACKWOOD, NJ"
    },
    {
        "name": "CATAWBA VALLEY COMMUNITY COLLEGE",
        "location": "HICKORY, NC"
    },
    {
        "name": "THE ART INSTITUTE OF SAN ANTONIO",
        "location": "SAN ANTONIO, TX"
    },
    {
        "name": "STANFORD UNIVERSITY",
        "location": "STANFORD, CA"
    },
    {
        "name": "REMINGTON COLLEGE-LAFAYETTE CAMPUS",
        "location": "LAFAYETTE, LA"
    },
    {
        "name": "SOUTHEAST KENTUCKY COMMUNITY",
        "location": "CUMBERLAND, KY"
    },
    {
        "name": "AUGUSTA SCHOOL OF MASSAGE",
        "location": "EVANS, GA"
    },
    {
        "name": "DALLAS CHRISTIAN COLLEGE",
        "location": "DALLAS, TX"
    },
    {
        "name": "STATE CAREER COLLEGE",
        "location": "WAUKEGAN, IL"
    },
    {
        "name": "DELAWARE COUNTY TECHNICAL SCHOOL-PRACTICAL NURSING PROGRAM",
        "location": "BROOMALL, PA"
    },
    {
        "name": "BARBER & BEAUTY INSTITUTE OF NEW YORK",
        "location": "HEMPSTEAD, NY"
    },
    {
        "name": "SALVE REGINA UNIVERSITY",
        "location": "NEWPORT, RI"
    },
    {
        "name": "TULSA WELDING SCHOOL-TULSA",
        "location": "TULSA, OK"
    },
    {
        "name": "SINTE GLESKA UNIVERSITY",
        "location": "MISSION, SD"
    },
    {
        "name": "DEVRY UNIVERSITY-NORTH CAROLINA",
        "location": "CHARLOTTE, NC"
    },
    {
        "name": "PENNSYLVANIA STATE UNIVERSITY-PENN STATE ERIE-BEHREND COLLEGE",
        "location": "ERIE, PA"
    },
    {
        "name": "NORTHWEST COLLEGE",
        "location": "POWELL, WY"
    },
    {
        "name": "LEBANON COUNTY AREA VOCATIONAL TECHNICAL SCHOOL",
        "location": "LEBANON, PA"
    },
    {
        "name": "UNIVERSITY OF PITTSBURGH-BRADFORD",
        "location": "BRADFORD, PA"
    },
    {
        "name": "GREENVILLE TECHNICAL COLLEGE",
        "location": "GREENVILLE, SC"
    },
    {
        "name": "NEECEE'S BARBER COLLEGE",
        "location": "ABILENE, TX"
    },
    {
        "name": "COMMUNITY COLLEGE OF VERMONT",
        "location": "MONTPELIER, VT"
    },
    {
        "name": "AMERICAN ACADEMY MCALLISTER INSTITUTE OF FUNERAL SERVICE",
        "location": "NEW YORK, NY"
    },
    {
        "name": "CHAMBERLAIN UNIVERSITY-ARIZONA",
        "location": "PHOENIX, AZ"
    },
    {
        "name": "ARIZONA ACADEMY OF BEAUTY-EAST",
        "location": "TUCSON, AZ"
    },
    {
        "name": "GEORGIA STATE UNIVERSITY",
        "location": "ATLANTA, GA"
    },
    {
        "name": "REINHARDT UNIVERSITY",
        "location": "WALESKA, GA"
    },
    {
        "name": "THE UNIVERSITY OF TENNESSEE-KNOXVILLE",
        "location": "KNOXVILLE, TN"
    },
    {
        "name": "INSTITUTE FOR CLINICAL SOCIAL WORK",
        "location": "CHICAGO, IL"
    },
    {
        "name": "NATIONAL CAREER COLLEGE",
        "location": "PANORAMA CITY, CA"
    },
    {
        "name": "RIVEROAK TECHNICAL COLLEGE",
        "location": "LIVE OAK, FL"
    },
    {
        "name": "CEDARVILLE UNIVERSITY",
        "location": "CEDARVILLE, OH"
    },
    {
        "name": "PITTSBURGH THEOLOGICAL SEMINARY",
        "location": "PITTSBURGH, PA"
    },
    {
        "name": "WESLEY THEOLOGICAL SEMINARY",
        "location": "WASHINGTON, DC"
    },
    {
        "name": "SAINT AUGUSTINE COLLEGE",
        "location": "CHICAGO, IL"
    },
    {
        "name": "KANSAS CITY UNIVERSITY OF MEDICINE AND BIOSCIENCES",
        "location": "KANSAS CITY, MO"
    },
    {
        "name": "NAVAJO TECHNICAL UNIVERSITY",
        "location": "CROWNPOINT, NM"
    },
    {
        "name": "LICEO DE ARTE Y TECNOLOGIA",
        "location": "SAN JUAN, PR"
    },
    {
        "name": "ANTIOCH UNIVERSITY-LOS ANGELES",
        "location": "CULVER CITY, CA"
    },
    {
        "name": "FAUST INSTITUTE OF COSMETOLOGY-SPIRIT LAKE",
        "location": "SPIRIT LAKE, IA"
    },
    {
        "name": "CARSTEN INSTITUTE OF COSMETOLOGY",
        "location": "NEW YORK, NY"
    },
    {
        "name": "ICPR JUNIOR COLLEGE",
        "location": "HATO REY, PR"
    },
    {
        "name": "GRABBER SCHOOL OF HAIR DESIGN",
        "location": "ST. LOUIS, MO"
    },
    {
        "name": "CHAMBERLAIN UNIVERSITY-TEXAS",
        "location": "HOUSTON, TX"
    },
    {
        "name": "TOMPKINS CORTLAND COMMUNITY COLLEGE",
        "location": "DRYDEN, NY"
    },
    {
        "name": "HOUSE OF HEAVILIN BEAUTY COLLEGE-RAYMORE",
        "location": "RAYMORE, MO"
    },
    {
        "name": "MYOTHERAPY INSTITUTE",
        "location": "LINCOLN, NE"
    },
    {
        "name": "CAREER QUEST LEARNING CENTERS-LANSING",
        "location": "LANSING, MI"
    },
    {
        "name": "CALVARY UNIVERSITY",
        "location": "KANSAS CITY, MO"
    },
    {
        "name": "MAGDALEN COLLEGE",
        "location": "WARNER, NH"
    },
    {
        "name": "RABBINICAL SEMINARY MKOR CHAIM",
        "location": "LAKEWOOD, NJ"
    },
    {
        "name": "ST. JOSEPH'S COLLEGE-NEW YORK",
        "location": "BROOKLYN, NY"
    },
    {
        "name": "RABBINICAL COLLEGE BETH SHRAGA",
        "location": "MONSEY, NY"
    },
    {
        "name": "CARRINGTON COLLEGE-MESA",
        "location": "MESA, AZ"
    },
    {
        "name": "NASHOTAH HOUSE",
        "location": "NASHOTAH, WI"
    },
    {
        "name": "UNIVERSITY OF MISSOURI-ST LOUIS",
        "location": "SAINT LOUIS, MO"
    },
    {
        "name": "CUNY BRONX COMMUNITY COLLEGE",
        "location": "BRONX, NY"
    },
    {
        "name": "MOLLOY COLLEGE",
        "location": "ROCKVILLE CENTRE, NY"
    },
    {
        "name": "HALIFAX COMMUNITY COLLEGE",
        "location": "WELDON, NC"
    },
    {
        "name": "METHODIST UNIVERSITY",
        "location": "FAYETTEVILLE, NC"
    },
    {
        "name": "OHIO BUSINESS COLLEGE-SANDUSKY",
        "location": "SANDUSKY, OH"
    },
    {
        "name": "INTER AMERICAN UNIVERSITY OF PUERTO RICO-SAN GERMAN",
        "location": "SAN GERMAN, PR"
    },
    {
        "name": "ALASKA CAREER COLLEGE",
        "location": "ANCHORAGE, AK"
    },
    {
        "name": "JEFFERSON REGIONAL MEDICAL CENTER SCHOOL OF NURSING",
        "location": "PINE BLUFF, AR"
    },
    {
        "name": "AVEDA INSTITUTE-NEW MEXICO",
        "location": "ALBUQUERQUE, NM"
    },
    {
        "name": "RUDY & KELLY ACADEMY, A PAUL MITCHELL PARTNER SCHOOL",
        "location": "VIRGINIA BEACH, VA"
    },
    {
        "name": "COMMUNITY COLLEGE OF ALLEGHENY COUNTY",
        "location": "PITTSBURGH, PA"
    },
    {
        "name": "SOUTHWESTERN UNIVERSITY",
        "location": "GEORGETOWN, TX"
    },
    {
        "name": "BRYANT & STRATTON COLLEGE-VIRGINIA BEACH",
        "location": "VIRGINIA BEACH, VA"
    },
    {
        "name": "UCAS UNIVERSITY OF COSMETOLOGY ARTS & SCIENCES-SAN ANTONIO 410",
        "location": "SAN ANTONIO, TX"
    },
    {
        "name": "CARRINGTON COLLEGE-STOCKTON",
        "location": "STOCKTON, CA"
    },
    {
        "name": "SOUTHEAST ARKANSAS COLLEGE",
        "location": "PINE BLUFF, AR"
    },
    {
        "name": "LOGAN UNIVERSITY",
        "location": "CHESTERFIELD, MO"
    },
    {
        "name": "CLAREMONT SCHOOL OF THEOLOGY",
        "location": "CLAREMONT, CA"
    },
    {
        "name": "WILLIAMS COLLEGE",
        "location": "WILLIAMSTOWN, MA"
    },
    {
        "name": "UNIVERSITY OF UTAH",
        "location": "SALT LAKE CITY, UT"
    },
    {
        "name": "COLUMBIA THEOLOGICAL SEMINARY",
        "location": "DECATUR, GA"
    },
    {
        "name": "LA ROCHE UNIVERSITY",
        "location": "PITTSBURGH, PA"
    },
    {
        "name": "EASTFIELD COLLEGE",
        "location": "MESQUITE, TX"
    },
    {
        "name": "FORTIS COLLEGE-DOTHAN",
        "location": "DOTHAN, AL"
    },
    {
        "name": "ROSS MEDICAL EDUCATION CENTER-ANN ARBOR",
        "location": "ANN ARBOR, MI"
    },
    {
        "name": "NORTHWEST VISTA COLLEGE",
        "location": "SAN ANTONIO, TX"
    },
    {
        "name": "LINFIELD UNIVERSITY-SCHOOL OF NURSING",
        "location": "PORTLAND, OR"
    },
    {
        "name": "THE HAIR ACADEMY",
        "location": "BISMARCK, ND"
    },
    {
        "name": "ROSS MEDICAL EDUCATION CENTER-FORT WAYNE",
        "location": "FORT WAYNE, IN"
    },
    {
        "name": "PAUL MITCHELL THE SCHOOL-FORT MYERS",
        "location": "FORT MYERS, FL"
    },
    {
        "name": "AVE MARIA SCHOOL OF LAW",
        "location": "NAPLES, FL"
    },
    {
        "name": "LOUISIANA CULINARY INSTITUTE",
        "location": "BATON ROUGE, LA"
    },
    {
        "name": "LIFE CHIROPRACTIC COLLEGE WEST",
        "location": "HAYWARD, CA"
    },
    {
        "name": "PARDEE RAND GRADUATE SCHOOL",
        "location": "SANTA MONICA, CA"
    },
    {
        "name": "TRINITY INTERNATIONAL UNIVERSITY-ILLINOIS",
        "location": "DEERFIELD, IL"
    },
    {
        "name": "CENTRAL MAINE COMMUNITY COLLEGE",
        "location": "AUBURN, ME"
    },
    {
        "name": "MONTANA TECHNOLOGICAL UNIVERSITY",
        "location": "BUTTE, MT"
    },
    {
        "name": "UNIVERSITY OF NEW MEXICO-LOS ALAMOS CAMPUS",
        "location": "LOS ALAMOS, NM"
    },
    {
        "name": "OTTAWA UNIVERSITY-KANSAS CITY",
        "location": "OVERLAND PARK, KS"
    },
    {
        "name": "SOUTHWESTERN COLLEGE",
        "location": "SANTA FE, NM"
    },
    {
        "name": "SUNY BROOME COMMUNITY COLLEGE",
        "location": "BINGHAMTON, NY"
    },
    {
        "name": "GORDON COLLEGE",
        "location": "WENHAM, MA"
    },
    {
        "name": "GRACE CHRISTIAN UNIVERSITY",
        "location": "WYOMING, MI"
    },
    {
        "name": "AVEDA INSTITUTE-LOS ANGELES",
        "location": "LOS ANGELES, CA"
    },
    {
        "name": "MOBILE TECHNICAL TRAINING",
        "location": "SOUTH HACKENSACK, NJ"
    },
    {
        "name": "AMERICAN BARBER AND BEAUTY ACADEMY",
        "location": "READING, PA"
    },
    {
        "name": "ANOTHER LEVEL BARBERING AND COSMETOLOGY SCHOOL",
        "location": "PETERSBURG, VA"
    },
    {
        "name": "CAREER QUEST LEARNING CENTER-BAY CITY BRANCH",
        "location": "BAY CITY, MI"
    },
    {
        "name": "MEDICAL CAREER COLLEGE OF NORTHERN CALIFORNIA",
        "location": "ROSEVILLE, CA"
    },
    {
        "name": "FORTIS COLLEGE-LANDOVER",
        "location": "LANDOVER, MD"
    },
    {
        "name": "PAUL MITCHELL THE SCHOOL-RICHLAND-PROVO",
        "location": "PROVO, UT"
    },
    {
        "name": "NUC UNIVERSITY - IBC INSTITUTE - LOS COLOBOS",
        "location": "CAROLINA, PR"
    },
    {
        "name": "MISSISSIPPI INSTITUTE OF AESTHETICS NAILS & COSMETOLOGY",
        "location": "CLINTON, MS"
    },
    {
        "name": "REMINGTON COLLEGE-MOBILE CAMPUS",
        "location": "MOBILE, AL"
    },
    {
        "name": "HOOD COLLEGE",
        "location": "FREDERICK, MD"
    },
    {
        "name": "SUMMIT SALON ACADEMY-KOKOMO",
        "location": "KOKOMO, IN"
    },
    {
        "name": "UNITED EDUCATION INSTITUTE-ANAHEIM",
        "location": "ANAHEIM, CA"
    },
    {
        "name": "ALL BEAUTY COLLEGE",
        "location": "LAKE HAVASU CITY, AZ"
    },
    {
        "name": "ROSS MEDICAL EDUCATION CENTER-HUNTSVILLE",
        "location": "HUNTSVILLE, AL"
    },
    {
        "name": "ADVANCED BEAUTY COLLEGE",
        "location": "IRVING, TX"
    },
    {
        "name": "UNITED BEAUTY COLLEGE",
        "location": "DENVER, CO"
    },
    {
        "name": "KIRKWOOD COMMUNITY COLLEGE",
        "location": "CEDAR RAPIDS, IA"
    },
    {
        "name": "WEST COAST UNIVERSITY-CENTER FOR GRADUATE STUDIES",
        "location": "LOS ANGELES, CA"
    },
    {
        "name": "CANKDESKA CIKANA COMMUNITY COLLEGE",
        "location": "FORT TOTTEN, ND"
    },
    {
        "name": "NORTHEASTERN UNIVERSITY",
        "location": "BOSTON, MA"
    },
    {
        "name": "CENTRAL COMMUNITY COLLEGE",
        "location": "GRAND ISLAND, NE"
    },
    {
        "name": "UNION COUNTY COLLEGE",
        "location": "CRANFORD, NJ"
    },
    {
        "name": "M T TRAINING CENTER",
        "location": "GRAND PRAIRIE, TX"
    },
    {
        "name": "MIDDLESEX COMMUNITY COLLEGE",
        "location": "BEDFORD, MA"
    },
    {
        "name": "CORTIVA INSTITUTE-KING OF PRUSSIA",
        "location": "KING OF PRUSSIA, PA"
    },
    {
        "name": "EMPIRE BEAUTY SCHOOL-LITTLETON",
        "location": "LITTLETON, CO"
    },
    {
        "name": "SPARTANBURG COMMUNITY COLLEGE",
        "location": "SPARTANBURG, SC"
    },
    {
        "name": "LACKAWANNA COLLEGE",
        "location": "SCRANTON, PA"
    },
    {
        "name": "VANTAGE CAREER CENTER",
        "location": "VAN WERT, OH"
    },
    {
        "name": "NEW RIVER COMMUNITY AND TECHNICAL COLLEGE",
        "location": "BEAVER, WV"
    },
    {
        "name": "PAUL MITCHELL THE SCHOOL-SPOKANE",
        "location": "SPOKANE VALLEY, WA"
    },
    {
        "name": "UNIVERSITY OF ARKANSAS",
        "location": "FAYETTEVILLE, AR"
    },
    {
        "name": "KENNETH SHULER SCHOOL OF COSMETOLOGY-GREENVILLE",
        "location": "GREENVILLE, SC"
    },
    {
        "name": "STEVENS-HENAGER COLLEGE",
        "location": "IDAHO FALLS, ID"
    },
    {
        "name": "OAKTON COMMUNITY COLLEGE",
        "location": "DES PLAINES, IL"
    },
    {
        "name": "ATHENA CAREER ACADEMY",
        "location": "TOLEDO, OH"
    },
    {
        "name": "TENNESSEE COLLEGE OF APPLIED TECHNOLOGY-MURFREESBORO",
        "location": "MURFREESBORO, TN"
    },
    {
        "name": "BLUE RIDGE COMMUNITY COLLEGE",
        "location": "WEYERS CAVE, VA"
    },
    {
        "name": "HELMS COLLEGE",
        "location": "MACON, GA"
    },
    {
        "name": "JARVIS CHRISTIAN COLLEGE",
        "location": "HAWKINS, TX"
    },
    {
        "name": "OHIO INSTITUTE OF ALLIED HEALTH",
        "location": "HUBER HEIGHTS, OH"
    },
    {
        "name": "LUCKES BEAUTY ACADEMY LLC",
        "location": "NEWPORT NEWS, VA"
    },
    {
        "name": "EAST-WEST HEALING ARTS INSTITUTE",
        "location": "MADISON, WI"
    },
    {
        "name": "GEORGIA MILITARY COLLEGE",
        "location": "MILLEDGEVILLE, GA"
    },
    {
        "name": "JOHN CARROLL UNIVERSITY",
        "location": "UNIVERSITY HEIGHTS, OH"
    },
    {
        "name": "BROWN AVEDA INSTITUTE-STRONGSVILLE",
        "location": "STRONGSVILLE, OH"
    },
    {
        "name": "CASA LOMA COLLEGE-VAN NUYS",
        "location": "VAN NUYS, CA"
    },
    {
        "name": "CET-WATSONVILLE",
        "location": "WATSONVILLE, CA"
    },
    {
        "name": "CHATTAHOOCHEE TECHNICAL COLLEGE",
        "location": "MARIETTA, GA"
    },
    {
        "name": "OLNEY CENTRAL COLLEGE",
        "location": "OLNEY, IL"
    },
    {
        "name": "FORDHAM UNIVERSITY",
        "location": "BRONX, NY"
    },
    {
        "name": "UNION UNIVERSITY",
        "location": "JACKSON, TN"
    },
    {
        "name": "STERLING COLLEGE",
        "location": "CRAFTSBURY COMMON, VT"
    },
    {
        "name": "UNIVERSITY OF MINNESOTA-MORRIS",
        "location": "MORRIS, MN"
    },
    {
        "name": "LAKE TECHNICAL COLLEGE",
        "location": "EUSTIS, FL"
    },
    {
        "name": "LAKE FOREST GRADUATE SCHOOL OF MANAGEMENT",
        "location": "LAKE FOREST, IL"
    },
    {
        "name": "CHRIST THE KING SEMINARY",
        "location": "EAST AURORA, NY"
    },
    {
        "name": "GOOD SAMARITAN COLLEGE OF NURSING AND HEALTH SCIENCE",
        "location": "CINCINNATI, OH"
    },
    {
        "name": "UNIVERSIDAD ADVENTISTA DE LAS ANTILLAS",
        "location": "MAYAGUEZ, PR"
    },
    {
        "name": "COLLEGE OF THE MUSCOGEE NATION",
        "location": "OKMULGEE, OK"
    },
    {
        "name": "INDEPENDENCE UNIVERSITY",
        "location": "SALT LAKE CITY, UT"
    },
    {
        "name": "LITTLE PRIEST TRIBAL COLLEGE",
        "location": "WINNEBAGO, NE"
    },
    {
        "name": "MYRANGEL BEAUTY INSTITUTE",
        "location": "SAN LORENZO, PR"
    },
    {
        "name": "GRACELAND UNIVERSITY-LAMONI",
        "location": "LAMONI, IA"
    },
    {
        "name": "PLYMOUTH STATE UNIVERSITY",
        "location": "PLYMOUTH, NH"
    },
    {
        "name": "CAPRI INSTITUTE OF HAIR DESIGN-BRICK",
        "location": "BRICK, NJ"
    },
    {
        "name": "PONCA CITY BEAUTY COLLEGE",
        "location": "PONCA CITY, OK"
    },
    {
        "name": "MORRIS COLLEGE",
        "location": "SUMTER, SC"
    },
    {
        "name": "SOUTHWESTERN CHRISTIAN COLLEGE",
        "location": "TERRELL, TX"
    },
    {
        "name": "BATON ROUGE COMMUNITY COLLEGE",
        "location": "BATON ROUGE, LA"
    },
    {
        "name": "IMMOKALEE TECHNICAL COLLEGE",
        "location": "IMMOKALEE, FL"
    },
    {
        "name": "HEALTH AND STYLE INSTITUTE",
        "location": "GREENSBORO, NC"
    },
    {
        "name": "WEST SHORE COMMUNITY COLLEGE",
        "location": "SCOTTVILLE, MI"
    },
    {
        "name": "CONTINENTAL ACADEMIE OF HAIR DESIGN-HUDSON",
        "location": "HUDSON, NH"
    },
    {
        "name": "LONG ISLAND BUSINESS INSTITUTE",
        "location": "FLUSHING, NY"
    },
    {
        "name": "KENT STATE UNIVERSITY AT STARK",
        "location": "CANTON, OH"
    },
    {
        "name": "NORTHWEST LOUISIANA TECHNICAL COMMUNITY COLLEGE",
        "location": "MINDEN, LA"
    },
    {
        "name": "STEVENS-HENAGER COLLEGE",
        "location": "BOISE, ID"
    },
    {
        "name": "LAKE AREA TECHNICAL COLLEGE",
        "location": "WATERTOWN, SD"
    },
    {
        "name": "MERCER COUNTY TECHNICAL EDUCATION CENTER",
        "location": "PRINCETON, WV"
    },
    {
        "name": "SLIPPERY ROCK UNIVERSITY OF PENNSYLVANIA",
        "location": "SLIPPERY ROCK, PA"
    },
    {
        "name": "TEXAS CHIROPRACTIC COLLEGE FOUNDATION INC",
        "location": "PASADENA, TX"
    },
    {
        "name": "OHIO WESLEYAN UNIVERSITY",
        "location": "DELAWARE, OH"
    },
    {
        "name": "OTTERBEIN UNIVERSITY",
        "location": "WESTERVILLE, OH"
    },
    {
        "name": "BEAUMONT ADULT SCHOOL",
        "location": "BEAUMONT, CA"
    },
    {
        "name": "CHAMPION BEAUTY COLLEGE",
        "location": "HOUSTON, TX"
    },
    {
        "name": "INTERNATIONAL SCHOOL OF BEAUTY INC",
        "location": "PALM DESERT, CA"
    },
    {
        "name": "GLENDALE COMMUNITY COLLEGE",
        "location": "GLENDALE, CA"
    },
    {
        "name": "PACIFIC UNION COLLEGE",
        "location": "ANGWIN, CA"
    },
    {
        "name": "LOUISIANA TECH UNIVERSITY",
        "location": "RUSTON, LA"
    },
    {
        "name": "UNIVERSITY OF THE POTOMAC-WASHINGTON DC CAMPUS",
        "location": "WASHINGTON, DC"
    },
    {
        "name": "LOS ANGELES HARBOR COLLEGE",
        "location": "WILMINGTON, CA"
    },
    {
        "name": "BROOKHAVEN COLLEGE",
        "location": "FARMERS BRANCH, TX"
    },
    {
        "name": "URBAN COLLEGE OF BOSTON",
        "location": "BOSTON, MA"
    },
    {
        "name": "CENTURY COLLEGE",
        "location": "SAN JUAN, PR"
    },
    {
        "name": "GWINNETT COLLEGE",
        "location": "RALEIGH, NC"
    },
    {
        "name": "EMPLOYMENT SOLUTIONS-COLLEGE FOR TECHNICAL EDUCATION",
        "location": "LEXINGTON, KY"
    },
    {
        "name": "OSCEOLA TECHNICAL COLLEGE",
        "location": "KISSIMMEE, FL"
    },
    {
        "name": "ACADEMY OF MASSAGE AND BODYWORK",
        "location": "BEAR, DE"
    },
    {
        "name": "AVALON SCHOOL OF COSMETOLOGY-MESA",
        "location": "MESA, AZ"
    },
    {
        "name": "CARRINGTON COLLEGE-SACRAMENTO",
        "location": "SACRAMENTO, CA"
    },
    {
        "name": "KENTUCKY STATE UNIVERSITY",
        "location": "FRANKFORT, KY"
    },
    {
        "name": "NORTHWESTERN COLLEGE",
        "location": "ORANGE CITY, IA"
    },
    {
        "name": "WESTMINSTER COLLEGE",
        "location": "NEW WILMINGTON, PA"
    },
    {
        "name": "CHARLES AND SUES SCHOOL OF HAIR DESIGN",
        "location": "BRYAN, TX"
    },
    {
        "name": "BELMONT ABBEY COLLEGE",
        "location": "BELMONT, NC"
    },
    {
        "name": "THE CHICAGO SCHOOL OF PROFESSIONAL PSYCHOLOGY AT SAN DIEGO",
        "location": "SAN DIEGO, CA"
    },
    {
        "name": "EVVAYLOIS ACADEMY SCHOOL OF BEAUTY",
        "location": "BRENHAM, TX"
    },
    {
        "name": "PAUL MITCHELL THE SCHOOL-SAN JOSE",
        "location": "SAN JOSE, CA"
    },
    {
        "name": "ARIZONA COLLEGE OF NURSING-PHOENIX",
        "location": "PHOENIX, AZ"
    },
    {
        "name": "MAK BEAUTY INSTITUTE - DULUTH",
        "location": "DULUTH, GA"
    },
    {
        "name": "SAN JOAQUIN VALLEY COLLEGE-DELANO",
        "location": "DELANO, CA"
    },
    {
        "name": "NETWORKS BARBER COLLEGE",
        "location": "CHICAGO, IL"
    },
    {
        "name": "FALCON INSTITUTE OF HEALTH AND SCIENCE",
        "location": "BETHLEHEM, PA"
    },
    {
        "name": "MIAMI LAKES EDUCATIONAL CENTER AND TECHNICAL COLLEGE -",
        "location": "MIAMI LAKES, FL"
    },
    {
        "name": "UNIVERSITY OF OKLAHOMA - NELLIS AIR FORCE BASE",
        "location": "NELLIS AFB, NV"
    },
    {
        "name": "UEI COLLEGE-SACRAMENTO",
        "location": "SACRAMENTO, CA"
    },
    {
        "name": "WELLSPRING SCHOOL OF ALLIED HEALTH-WICHITA",
        "location": "WICHITA, KS"
    },
    {
        "name": "FRANCISCAN SCHOOL OF THEOLOGY - SAN DIEGO",
        "location": "SAN DIEGO, CA"
    },
    {
        "name": "CALIFORNIA INTERCONTINENTAL UNIVERSITY",
        "location": "IRVINE, CA"
    },
    {
        "name": "NORTHWEST UNIVERSITY-COLLEGE OF ADULT AND PROFESSIONAL STUDIES",
        "location": "KIRKLAND, WA"
    },
    {
        "name": "CHAMBERLAIN UNIVERSITY-NEVADA",
        "location": "LAS VEGAS, NV"
    },
    {
        "name": "GEORGIA HIGHLANDS COLLEGE",
        "location": "ROME, GA"
    },
    {
        "name": "ILLINOIS CENTRAL COLLEGE",
        "location": "EAST PEORIA, IL"
    },
    {
        "name": "UNIVERSITY OF KANSAS",
        "location": "LAWRENCE, KS"
    },
    {
        "name": "HOSS LEE ACADEMY",
        "location": "ROSEVILLE, CA"
    },
    {
        "name": "SAINT LOUIS COMMUNITY COLLEGE",
        "location": "BRIDGETON, MO"
    },
    {
        "name": "LAKE ERIE COLLEGE OF OSTEOPATHIC MEDICINE",
        "location": "ERIE, PA"
    },
    {
        "name": "SUMMIT SALON ACADEMY-LEXINGTON",
        "location": "LEXINGTON, KY"
    },
    {
        "name": "UNIVERSAL TECHNICAL INSTITUTE OF ARIZONA INC",
        "location": "AVONDALE, AZ"
    },
    {
        "name": "CARNEGIE MELLON UNIVERSITY",
        "location": "PITTSBURGH, PA"
    },
    {
        "name": "ABRAHAM BALDWIN AGRICULTURAL COLLEGE",
        "location": "TIFTON, GA"
    },
    {
        "name": "THE UNIVERSITY OF AMERICA",
        "location": "TEMECULA, CA"
    },
    {
        "name": "CHRISTIE'S EDUCATION",
        "location": "NEW YORK, NY"
    },
    {
        "name": "ROSS MEDICAL EDUCATION CENTER-MORGANTOWN",
        "location": "MORGANTOWN, WV"
    },
    {
        "name": "HIGHLAND COMMUNITY COLLEGE",
        "location": "HIGHLAND, KS"
    },
    {
        "name": "CENTRAL CAROLINA COMMUNITY COLLEGE",
        "location": "SANFORD, NC"
    },
    {
        "name": "PITTSBURGH CAREER INSTITUTE",
        "location": "PITTSBURGH, PA"
    },
    {
        "name": "WILLIAM R MOORE COLLEGE OF TECHNOLOGY",
        "location": "MEMPHIS, TN"
    },
    {
        "name": "UNIVERSITY OF WISCONSIN-STOUT",
        "location": "MENOMONIE, WI"
    },
    {
        "name": "PENNSYLVANIA COLLEGE OF TECHNOLOGY",
        "location": "WILLIAMSPORT, PA"
    },
    {
        "name": "TENNESSEE COLLEGE OF APPLIED TECHNOLOGY-JACKSBORO",
        "location": "JACKSBORO, TN"
    },
    {
        "name": "BOS-MAN'S BARBER COLLEGE",
        "location": "SHREVEPORT, LA"
    },
    {
        "name": "AMARILLO COLLEGE",
        "location": "AMARILLO, TX"
    },
    {
        "name": "SOUTHWESTERN ILLINOIS COLLEGE",
        "location": "BELLEVILLE, IL"
    },
    {
        "name": "UNIVERSITY OF LOUISVILLE",
        "location": "LOUISVILLE, KY"
    },
    {
        "name": "UNIVERSITY OF MICHIGAN-ANN ARBOR",
        "location": "ANN ARBOR, MI"
    },
    {
        "name": "ANTIOCH COLLEGE",
        "location": "YELLOW SPRINGS, OH"
    },
    {
        "name": "CENTRAL GEORGIA TECHNICAL COLLEGE",
        "location": "WARNER ROBINS, GA"
    },
    {
        "name": "EMPIRE BEAUTY SCHOOL-FLAGSTAFF",
        "location": "FLAGSTAFF, AZ"
    },
    {
        "name": "UNIVERSITY OF WISCONSIN-SYSTEM ADMINISTRATION",
        "location": "MADISON, WI"
    },
    {
        "name": "APPALACHIAN STATE UNIVERSITY",
        "location": "BOONE, NC"
    },
    {
        "name": "NORTH BENNET STREET SCHOOL",
        "location": "BOSTON, MA"
    },
    {
        "name": "EAST CENTRAL COMMUNITY COLLEGE",
        "location": "DECATUR, MS"
    },
    {
        "name": "KEHILATH YAKOV RABBINICAL SEMINARY",
        "location": "OSSINING, NY"
    },
    {
        "name": "SUNY POLYTECHNIC INSTITUTE",
        "location": "UTICA, NY"
    },
    {
        "name": "OREGON COAST COMMUNITY COLLEGE",
        "location": "NEWPORT, OR"
    },
    {
        "name": "BLESSING HOSPITAL SCHOOL OF MEDICAL LABORATORY TECHNOLOGY",
        "location": "QUINCY, IL"
    },
    {
        "name": "ACADEMY OF HAIR DESIGN-LUFKIN",
        "location": "LUFKIN, TX"
    },
    {
        "name": "GUAM COMMUNITY COLLEGE",
        "location": "MANGILAO, GU"
    },
    {
        "name": "BLUE HILLS REGIONAL TECHNICAL SCHOOL",
        "location": "CANTON, MA"
    },
    {
        "name": "WORD OF LIFE BIBLE INSTITUTE",
        "location": "POTTERSVILLE, NY"
    },
    {
        "name": "CHICAGO THEOLOGICAL SEMINARY",
        "location": "CHICAGO, IL"
    },
    {
        "name": "FIRST INSTITUTE OF TRAVEL, INC.",
        "location": "CRYSTAL LAKE, IL"
    },
    {
        "name": "JOSEPH'S COLLEGE COSMETOLOGY",
        "location": "LINCOLN, NE"
    },
    {
        "name": "BELLEVUE UNIVERSITY",
        "location": "BELLEVUE, NE"
    },
    {
        "name": "NEW ENGLAND COLLEGE",
        "location": "HENNIKER, NH"
    },
    {
        "name": "WILEY COLLEGE",
        "location": "MARSHALL, TX"
    },
    {
        "name": "GENEVA COLLEGE",
        "location": "BEAVER FALLS, PA"
    },
    {
        "name": "LANSDALE SCHOOL OF BUSINESS",
        "location": "NORTH WALES, PA"
    },
    {
        "name": "MCMURRY UNIVERSITY",
        "location": "ABILENE, TX"
    },
    {
        "name": "MYOTHERAPY COLLEGE OF UTAH",
        "location": "MILLCREEK CITY, UT"
    },
    {
        "name": "CARRINGTON COLLEGE-ALBUQUERQUE",
        "location": "ALBUQUERQUE, NM"
    },
    {
        "name": "DAOIST TRADITIONS COLLEGE OF CHINESE MEDICAL ARTS",
        "location": "ASHEVILLE, NC"
    },
    {
        "name": "DAYTON BARBER COLLEGE",
        "location": "MIAMISBURG, OH"
    },
    {
        "name": "TONI & GUY HAIRDRESSING ACADEMY-COLORADO SPRINGS",
        "location": "COLORADO SPRINGS, CO"
    },
    {
        "name": "HERITAGE CHRISTIAN UNIVERSITY",
        "location": "FLORENCE, AL"
    },
    {
        "name": "MICHAELS SCHOOL OF HAIR DESIGN AND ESTHETICS-PAUL MITCHELL PARTNER SCHOOL",
        "location": "BEDFORD, NH"
    },
    {
        "name": "AMERICAN SENTINEL UNIVERSITY",
        "location": "DENVER, CO"
    },
    {
        "name": "SOUTH SEATTLE COLLEGE",
        "location": "SEATTLE, WA"
    },
    {
        "name": "OHLONE COLLEGE",
        "location": "FREMONT, CA"
    },
    {
        "name": "TRINITY EPISCOPAL SCHOOL FOR MINISTRY",
        "location": "AMBRIDGE, PA"
    },
    {
        "name": "PARAMOUNT BEAUTY ACADEMY",
        "location": "PORTSMOUTH, OH"
    },
    {
        "name": "BENEDICT COLLEGE",
        "location": "COLUMBIA, SC"
    },
    {
        "name": "WEST VIRGINIA UNIVERSITY HOSPITAL DEPARTMENTS OF RAD TECH AND NUTRITION",
        "location": "MORGANTOWN, WV"
    },
    {
        "name": "ANTIOCH UNIVERSITY-NEW ENGLAND",
        "location": "KEENE, NH"
    },
    {
        "name": "CENTRAL SUSQUEHANNA INTERMEDIATE UNIT LPN CAREER",
        "location": "LEWISBURG, PA"
    },
    {
        "name": "FORTIS COLLEGE-CINCINNATI",
        "location": "CINCINNATI, OH"
    },
    {
        "name": "UNIVERSITY OF SOUTH CAROLINA-UNION",
        "location": "UNION, SC"
    },
    {
        "name": "GLENVILLE STATE COLLEGE",
        "location": "GLENVILLE, WV"
    },
    {
        "name": "CAREER DEVELOPMENT INSTITUTE INC",
        "location": "LOS ANGELES, CA"
    },
    {
        "name": "SOUTHERN UNIVERSITY-BOARD AND SYSTEM",
        "location": "BATON ROUGE, LA"
    },
    {
        "name": "UNIFICATION THEOLOGICAL SEMINARY",
        "location": "NEW YORK, NY"
    },
    {
        "name": "CALIFORNIA STATE UNIVERSITY-DOMINGUEZ HILLS",
        "location": "CARSON, CA"
    },
    {
        "name": "COMPTON COLLEGE",
        "location": "COMPTON, CA"
    },
    {
        "name": "PITTSBURG STATE UNIVERSITY",
        "location": "PITTSBURG, KS"
    },
    {
        "name": "READING AREA COMMUNITY COLLEGE",
        "location": "READING, PA"
    },
    {
        "name": "UNIVERSITY OF REDLANDS",
        "location": "REDLANDS, CA"
    },
    {
        "name": "INDIANA COUNTY TECHNOLOGY CENTER",
        "location": "INDIANA, PA"
    },
    {
        "name": "THE COLLEGE OF WESTCHESTER",
        "location": "WHITE PLAINS, NY"
    },
    {
        "name": "HUMACAO COMMUNITY COLLEGE",
        "location": "HUMACAO, PR"
    },
    {
        "name": "ORANGE ULSTER BOCES-PRACTICAL NURSING PROGRAM",
        "location": "GOSHEN, NY"
    },
    {
        "name": "NEW YORK COLLEGE OF HEALTH PROFESSIONS",
        "location": "SYOSSET, NY"
    },
    {
        "name": "BRANFORD ACADEMY OF HAIR AND COSMETOLOGY",
        "location": "BRANFORD, CT"
    },
    {
        "name": "YESHIVAS BE'ER YITZCHOK",
        "location": "ELIZABETH, NJ"
    },
    {
        "name": "HILLTOP BEAUTY SCHOOL",
        "location": "DALY CITY, CA"
    },
    {
        "name": "NORTHWESTERN TECHNOLOGICAL INSTITUTE",
        "location": "SOUTHFIELD, MI"
    },
    {
        "name": "MINNESOTA STATE UNIVERSITY MOORHEAD",
        "location": "MOORHEAD, MN"
    },
    {
        "name": "HANNIBAL-LAGRANGE UNIVERSITY",
        "location": "HANNIBAL, MO"
    },
    {
        "name": "INTERDENOMINATIONAL THEOLOGICAL CENTER",
        "location": "ATLANTA, GA"
    },
    {
        "name": "MS ROBERTS ACADEMY OF BEAUTY CULTURE",
        "location": "HILLSIDE, IL"
    },
    {
        "name": "BLUEFIELD COLLEGE",
        "location": "BLUEFIELD, VA"
    },
    {
        "name": "MORGANTOWN BEAUTY COLLEGE INC",
        "location": "MORGANTOWN, WV"
    },
    {
        "name": "EAST CENTRAL COLLEGE",
        "location": "UNION, MO"
    },
    {
        "name": "HONOLULU COMMUNITY COLLEGE",
        "location": "HONOLULU, HI"
    },
    {
        "name": "DREW UNIVERSITY",
        "location": "MADISON, NJ"
    },
    {
        "name": "GOODFELLAS BARBER COLLEGE",
        "location": "LITTLE ROCK, AR"
    },
    {
        "name": "SANS TECHNOLOGY INSTITUTE",
        "location": "NORTH BETHESDA, MD"
    },
    {
        "name": "ARIZONA COLLEGE OF NURSING-TAMPA",
        "location": "TAMPA, FL"
    },
    {
        "name": "STOCKTON UNIVERSITY",
        "location": "GALLOWAY, NJ"
    },
    {
        "name": "BETHLEHEM COLLEGE & SEMINARY",
        "location": "MINNEAPOLIS, MN"
    },
    {
        "name": "WAVE LEADERSHIP COLLEGE",
        "location": "VIRGINIA BEACH, VA"
    },
    {
        "name": "UNITED EDUCATION INSTITUTE - UEI COLLEGE - PHOENIX",
        "location": "PHOENIX, AZ"
    },
    {
        "name": "PAUL MITCHELL THE SCHOOL-TEMECULA",
        "location": "TEMECULA, CA"
    },
    {
        "name": "GEORGIA INSTITUTE OF TECHNOLOGY",
        "location": "ATLANTA, GA"
    },
    {
        "name": "FOSBRE ACADEMY OF HAIR DESIGN",
        "location": "OLYMPIA, WA"
    },
    {
        "name": "CLAREMONT LINCOLN UNIVERSITY",
        "location": "CLAREMONT, CA"
    },
    {
        "name": "BRUNSWICK COMMUNITY COLLEGE",
        "location": "BOLIVIA, NC"
    },
    {
        "name": "SAINT CHARLES BORROMEO SEMINARY-OVERBROOK",
        "location": "WYNNEWOOD, PA"
    },
    {
        "name": "PENNSYLVANIA STATE UNIVERSITY-PENN STATE HARRISBURG",
        "location": "MIDDLETOWN, PA"
    },
    {
        "name": "OKLAHOMA CHRISTIAN UNIVERSITY",
        "location": "EDMOND, OK"
    },
    {
        "name": "UNIVERSITY OF MEMPHIS",
        "location": "MEMPHIS, TN"
    },
    {
        "name": "FUTURE-TECH INSTITUTE",
        "location": "MIAMI, FL"
    },
    {
        "name": "DAVIDSON COUNTY COMMUNITY COLLEGE",
        "location": "THOMASVILLE, NC"
    },
    {
        "name": "FORTIS INSTITUTE",
        "location": "HOUSTON, TX"
    },
    {
        "name": "EMPIRE BEAUTY SCHOOL-NE PHILADELPHIA",
        "location": "PHILADELPHIA, PA"
    },
    {
        "name": "NORTH ORANGE COUNTY COMMUNITY COLLEGE DISTRICT",
        "location": "ANAHEIM, CA"
    },
    {
        "name": "HAZELDEN BETTY FORD GRADUATE SCHOOL OF ADDICTION STUDIES",
        "location": "CENTER CITY, MN"
    },
    {
        "name": "KENNETH SHULER SCHOOL OF COSMETOLOGY-FLORENCE",
        "location": "FLORENCE, SC"
    },
    {
        "name": "CINTA AVEDA INSTITUTE",
        "location": "SAN FRANCISCO, CA"
    },
    {
        "name": "TENNESSEE COLLEGE OF APPLIED TECHNOLOGY-CRUMP",
        "location": "CRUMP, TN"
    },
    {
        "name": "ARLINGTON CAREER INSTITUTE",
        "location": "GRAND PRAIRIE, TX"
    },
    {
        "name": "CENTRAL ALABAMA COMMUNITY COLLEGE",
        "location": "ALEXANDER CITY, AL"
    },
    {
        "name": "HAZLETON AREA CAREER CENTER",
        "location": "HAZLE TWP., PA"
    },
    {
        "name": "CENTRAL ARIZONA COLLEGE",
        "location": "COOLIDGE, AZ"
    },
    {
        "name": "BE'ER YAAKOV TALMUDIC SEMINARY",
        "location": "SPRING VALLEY, NY"
    },
    {
        "name": "CLAFLIN UNIVERSITY",
        "location": "ORANGEBURG, SC"
    },
    {
        "name": "MARY BALDWIN UNIVERSITY",
        "location": "STAUNTON, VA"
    },
    {
        "name": "EMPIRE BEAUTY SCHOOL-WEST GREENSBORO",
        "location": "GREENSBORO, NC"
    },
    {
        "name": "CLOUD COUNTY COMMUNITY COLLEGE",
        "location": "CONCORDIA, KS"
    },
    {
        "name": "MISSISSIPPI GULF COAST COMMUNITY COLLEGE",
        "location": "PERKINSTON, MS"
    },
    {
        "name": "LORAIN COUNTY JOINT VOCATIONAL SCHOOL DISTRICT",
        "location": "OBERLIN, OH"
    },
    {
        "name": "NORTHWEST ARKANSAS COMMUNITY COLLEGE",
        "location": "BENTONVILLE, AR"
    },
    {
        "name": "ALEXANDER PAUL INSTITUTE OF HAIR DESIGN",
        "location": "GREENVILLE, NC"
    },
    {
        "name": "UNITED STATES COAST GUARD ACADEMY",
        "location": "NEW LONDON, CT"
    },
    {
        "name": "UNIVERSITY OF WISCONSIN-RIVER FALLS",
        "location": "RIVER FALLS, WI"
    },
    {
        "name": "AMERICAN CAREER COLLEGE-ONTARIO",
        "location": "ONTARIO, CA"
    },
    {
        "name": "FEDERICO BEAUTY INSTITUTE",
        "location": "SACRAMENTO, CA"
    },
    {
        "name": "COLLEGE OF THE SISKIYOUS",
        "location": "WEED, CA"
    },
    {
        "name": "MOREHOUSE SCHOOL OF MEDICINE",
        "location": "ATLANTA, GA"
    },
    {
        "name": "ALICE LLOYD COLLEGE",
        "location": "PIPPA PASSES, KY"
    },
    {
        "name": "COLORADO STATE UNIVERSITY",
        "location": "FORT COLLINS, CO"
    },
    {
        "name": "CUYAMACA COLLEGE",
        "location": "EL CAJON, CA"
    },
    {
        "name": "ANDERSON UNIVERSITY",
        "location": "ANDERSON, IN"
    },
    {
        "name": "UNION PRESBYTERIAN SEMINARY",
        "location": "RICHMOND, VA"
    },
    {
        "name": "LYNN UNIVERSITY",
        "location": "BOCA RATON, FL"
    },
    {
        "name": "HOLY CROSS COLLEGE",
        "location": "NOTRE DAME, IN"
    },
    {
        "name": "KALAMAZOO COLLEGE",
        "location": "KALAMAZOO, MI"
    },
    {
        "name": "ST LOUIS COLLEGE OF HEALTH CAREERS-ST LOUIS",
        "location": "SAINT LOUIS, MO"
    },
    {
        "name": "CORNELL UNIVERSITY",
        "location": "ITHACA, NY"
    },
    {
        "name": "LINCOLN COLLEGE OF TECHNOLOGY-MARIETTA",
        "location": "MARIETTA, GA"
    },
    {
        "name": "UNIVERSAL THERAPEUTIC MASSAGE INSTITUTE",
        "location": "ALBUQUERQUE, NM"
    },
    {
        "name": "MDT COLLEGE OF HEALTH SCIENCES",
        "location": "HIGHLAND HEIGHTS, OH"
    },
    {
        "name": "DIVERS INSTITUTE OF TECHNOLOGY",
        "location": "SEATTLE, WA"
    },
    {
        "name": "CENTENARY UNIVERSITY",
        "location": "HACKETTSTOWN, NJ"
    },
    {
        "name": "GRACE SCHOOL OF THEOLOGY",
        "location": "CONROE, TX"
    },
    {
        "name": "PIMA MEDICAL INSTITUTE-SEATTLE",
        "location": "SEATTLE, WA"
    },
    {
        "name": "MADISON ONEIDA BOCES-PRACTICAL NURSING PROGRAM",
        "location": "VERONA, NY"
    },
    {
        "name": "WINEBRENNER THEOLOGICAL SEMINARY",
        "location": "FINDLAY, OH"
    },
    {
        "name": "COMPU-MED VOCATIONAL CAREERS CORP",
        "location": "HIALEAH, FL"
    },
    {
        "name": "FAITH INTERNATIONAL UNIVERSITY",
        "location": "TACOMA, WA"
    },
    {
        "name": "UEI COLLEGE-GARDENA",
        "location": "GARDENA, CA"
    },
    {
        "name": "CAPRI COLLEGE-CEDAR RAPIDS",
        "location": "CEDAR RAPIDS, IA"
    },
    {
        "name": "BLACKBURN COLLEGE",
        "location": "CARLINVILLE, IL"
    },
    {
        "name": "EDGECOMBE COMMUNITY COLLEGE",
        "location": "TARBORO, NC"
    },
    {
        "name": "JACKSON STATE UNIVERSITY",
        "location": "JACKSON, MS"
    },
    {
        "name": "DUTCHESS COMMUNITY COLLEGE",
        "location": "POUGHKEEPSIE, NY"
    },
    {
        "name": "MONTANA STATE UNIVERSITY",
        "location": "BOZEMAN, MT"
    },
    {
        "name": "MANHATTAN COLLEGE",
        "location": "RIVERDALE, NY"
    },
    {
        "name": "SUNY-SYSTEM OFFICE",
        "location": "ALBANY, NY"
    },
    {
        "name": "CAMEO COLLEGE OF ESSENTIAL BEAUTY",
        "location": "MURRAY, UT"
    },
    {
        "name": "EVANS HAIRSTYLING COLLEGE-ST GEORGE",
        "location": "SAINT GEORGE, UT"
    },
    {
        "name": "ARKANSAS STATE UNIVERSITY SYSTEM",
        "location": "LITTLE ROCK, AR"
    },
    {
        "name": "HOLYOKE COMMUNITY COLLEGE",
        "location": "HOLYOKE, MA"
    },
    {
        "name": "WEST COAST UNIVERSITY-DALLAS",
        "location": "DALLAS, TX"
    },
    {
        "name": "PIERCE COLLEGE DISTRICT",
        "location": "LAKEWOOD, WA"
    },
    {
        "name": "NORTH SEATTLE COLLEGE",
        "location": "SEATTLE, WA"
    },
    {
        "name": "HUNTINGDON COUNTY CAREER AND TECHNOLOGY CENTER",
        "location": "MILL CREEK, PA"
    },
    {
        "name": "NORWICH UNIVERSITY",
        "location": "NORTHFIELD, VT"
    },
    {
        "name": "BLACK HAWK COLLEGE",
        "location": "MOLINE, IL"
    },
    {
        "name": "REED COLLEGE",
        "location": "PORTLAND, OR"
    },
    {
        "name": "COSMETOLOGY & SPA ACADEMY",
        "location": "CRYSTAL LAKE, IL"
    },
    {
        "name": "MANSFIELD UNIVERSITY OF PENNSYLVANIA",
        "location": "MANSFIELD, PA"
    },
    {
        "name": "UTAH VALLEY UNIVERSITY",
        "location": "OREM, UT"
    },
    {
        "name": "METROPOLITAN STATE UNIVERSITY OF DENVER",
        "location": "DENVER, CO"
    },
    {
        "name": "EAST TENNESSEE STATE UNIVERSITY",
        "location": "JOHNSON CITY, TN"
    },
    {
        "name": "FAUST INSTITUTE OF COSMETOLOGY-STORM LAKE",
        "location": "STORM LAKE, IA"
    },
    {
        "name": "CRESCENT CITY BARTENDING SCHOOL",
        "location": "NEW ORLEANS, LA"
    },
    {
        "name": "FOOTHILL-DE ANZA COMMUNITY COLLEGE DISTRICT",
        "location": "LOS ALTOS HILLS, CA"
    },
    {
        "name": "HOUSATONIC COMMUNITY COLLEGE",
        "location": "BRIDGEPORT, CT"
    },
    {
        "name": "LEWIS UNIVERSITY",
        "location": "ROMEOVILLE, IL"
    },
    {
        "name": "CHEMEKETA COMMUNITY COLLEGE",
        "location": "SALEM, OR"
    },
    {
        "name": "WESTERN OREGON UNIVERSITY",
        "location": "MONMOUTH, OR"
    },
    {
        "name": "KUTZTOWN UNIVERSITY OF PENNSYLVANIA",
        "location": "KUTZTOWN, PA"
    },
    {
        "name": "COASTLINE COMMUNITY COLLEGE",
        "location": "FOUNTAIN VALLEY, CA"
    },
    {
        "name": "FOOTHILL COLLEGE",
        "location": "LOS ALTOS HILLS, CA"
    },
    {
        "name": "SOUTHWESTERN CHRISTIAN UNIVERSITY",
        "location": "BETHANY, OK"
    },
    {
        "name": "EMMA'S BEAUTY ACADEMY-JUANA DIAZ",
        "location": "JUANA DIAZ, PR"
    },
    {
        "name": "AUTOMECA TECHNICAL COLLEGE-PONCE",
        "location": "PONCE, PR"
    },
    {
        "name": "COMPASS CAREER COLLEGE",
        "location": "HAMMOND, LA"
    },
    {
        "name": "COLEGIO DE CINEMATOGRAFÍA ARTES Y TELEVISION",
        "location": "BAYAMON, PR"
    },
    {
        "name": "EXPERTISE COSMETOLOGY INSTITUTE",
        "location": "LAS VEGAS, NV"
    },
    {
        "name": "JOHN WESLEY INTERNATIONAL BARBER AND BEAUTY COLLEGE",
        "location": "LONG BEACH, CA"
    },
    {
        "name": "CITY COLLEGE-GAINESVILLE",
        "location": "GAINESVILLE, FL"
    },
    {
        "name": "MUSKEGON COMMUNITY COLLEGE",
        "location": "MUSKEGON, MI"
    },
    {
        "name": "PORT HURON COSMETOLOGY COLLEGE",
        "location": "WATERFORD, MI"
    },
    {
        "name": "MISSISSIPPI COMMUNITY COLLEGE BOARD",
        "location": "JACKSON, MS"
    },
    {
        "name": "TRUCKEE MEADOWS COMMUNITY COLLEGE",
        "location": "RENO, NV"
    },
    {
        "name": "STRAYER UNIVERSITY-MARYLAND",
        "location": "SUITLAND, MD"
    },
    {
        "name": "LA JAMES INTERNATIONAL COLLEGE-DAVENPORT",
        "location": "DAVENPORT, IA"
    },
    {
        "name": "BROOME DELAWARE TIOGA BOCES-PRACTICAL NURSING PROGRAM",
        "location": "BINGHAMTON, NY"
    },
    {
        "name": "VET TECH INSTITUTE OF HOUSTON",
        "location": "HOUSTON, TX"
    },
    {
        "name": "BASTYR UNIVERSITY",
        "location": "KENMORE, WA"
    },
    {
        "name": "ALBERTUS MAGNUS COLLEGE",
        "location": "NEW HAVEN, CT"
    },
    {
        "name": "NORTH CENTRAL UNIVERSITY",
        "location": "MINNEAPOLIS, MN"
    },
    {
        "name": "MECHON L'HOYROA",
        "location": "MONSEY, NY"
    },
    {
        "name": "NASHVILLE FILM INSTITUTE",
        "location": "NASHVILLE, TN"
    },
    {
        "name": "KOR BEAUTY ACADEMY",
        "location": "PEORIA, AZ"
    },
    {
        "name": "GWINNETT INSTITUTE",
        "location": "ORLANDO, FL"
    },
    {
        "name": "L MAKEUP INSTITUTE",
        "location": "LAS VEGAS, NV"
    },
    {
        "name": "UNIVERSITY OF WISCONSIN-MILWAUKEE FLEX",
        "location": "MILWAUKEE, WI"
    },
    {
        "name": "GA BEAUTY & BARBER SCHOOL",
        "location": "MCALLEN, TX"
    },
    {
        "name": "ABC ADULT SCHOOL",
        "location": "CERRITOS, CA"
    },
    {
        "name": "ELITE ACADEMY OF HAIR DESIGN",
        "location": "BELLAIRE, OH"
    },
    {
        "name": "HAVEN UNIVERSITY",
        "location": "GARDEN GROVE, CA"
    },
    {
        "name": "DELUXE BARBER COLLEGE",
        "location": "SAN ANTONIO, TX"
    },
    {
        "name": "AMERICAN INSTITUTE OF HEALTHCARE & TECHNOLOGY",
        "location": "STRATFORD, CT"
    },
    {
        "name": "THOMAS AQUINAS COLLEGE - NEW ENGLAND",
        "location": "NORTHFIELD, MA"
    },
    {
        "name": "WESTERN KENTUCKY UNIVERSITY",
        "location": "BOWLING GREEN, KY"
    },
    {
        "name": "UNIVERSITY OF PUERTO RICO-MAYAGUEZ",
        "location": "MAYAGUEZ, PR"
    },
    {
        "name": "THE BEAUTY SCHOOL",
        "location": "MOUNTAIN HOME, AR"
    },
    {
        "name": "ANTIOCH UNIVERSITY ONLINE",
        "location": "YELLOW SPRINGS, OH"
    },
    {
        "name": "PAUL MITCHELL THE SCHOOL-MADISON",
        "location": "MADISON, WI"
    },
    {
        "name": "IGLOBAL UNIVERSITY",
        "location": "VIENNA, VA"
    },
    {
        "name": "STRAYER UNIVERSITY-NORTH CAROLINA",
        "location": "MORRISVILLE, NC"
    },
    {
        "name": "ZMS THE ACADEMY",
        "location": "LOS ANGELES, CA"
    },
    {
        "name": "FIRST COAST TECHNICAL COLLEGE",
        "location": "SAINT AUGUSTINE, FL"
    },
    {
        "name": "LINCOLN LAND COMMUNITY COLLEGE",
        "location": "SPRINGFIELD, IL"
    },
    {
        "name": "AMERICAN INSTITUTE OF MEDICAL SCIENCES & EDUCATION",
        "location": "PISCATAWAY, NJ"
    },
    {
        "name": "WATKINS COLLEGE OF ART DESIGN & FILM",
        "location": "NASHVILLE, TN"
    },
    {
        "name": "ONONDAGA SCHOOL OF THERAPEUTIC MASSAGE-SYRACUSE",
        "location": "SYRACUSE, NY"
    },
    {
        "name": "CONNORS STATE COLLEGE",
        "location": "WARNER, OK"
    },
    {
        "name": "EMPIRE BEAUTY SCHOOL-PINEVILLE",
        "location": "CHARLOTTE, NC"
    },
    {
        "name": "VICTORIA COLLEGE",
        "location": "VICTORIA, TX"
    },
    {
        "name": "UNIVERSITY OF SOUTH ALABAMA",
        "location": "MOBILE, AL"
    },
    {
        "name": "GATEWAY COMMUNITY AND TECHNICAL COLLEGE",
        "location": "FLORENCE, KY"
    },
    {
        "name": "LAFAYETTE COLLEGE",
        "location": "EASTON, PA"
    },
    {
        "name": "KEISER UNIVERSITY-FT LAUDERDALE",
        "location": "FORT LAUDERDALE, FL"
    },
    {
        "name": "NORTH CENTRAL KANSAS TECHNICAL COLLEGE",
        "location": "BELOIT, KS"
    },
    {
        "name": "PENNSYLVANIA STATE UNIVERSITY-PENN STATE SCHUYLKILL",
        "location": "SCHUYLKILL HAVEN, PA"
    },
    {
        "name": "SCHUYLKILL TECHNOLOGY CENTER",
        "location": "FRACKVILLE, PA"
    },
    {
        "name": "OZARKA COLLEGE",
        "location": "MELBOURNE, AR"
    },
    {
        "name": "ARKANSAS STATE UNIVERSITY-BEEBE",
        "location": "BEEBE, AR"
    },
    {
        "name": "MORAINE PARK TECHNICAL COLLEGE",
        "location": "FOND DU LAC, WI"
    },
    {
        "name": "COLLIN COUNTY COMMUNITY COLLEGE DISTRICT",
        "location": "MCKINNEY, TX"
    },
    {
        "name": "EASTLAND-FAIRFIELD CAREER AND TECHNICAL SCHOOLS",
        "location": "GROVEPORT, OH"
    },
    {
        "name": "WASHINGTON STATE COMMUNITY COLLEGE",
        "location": "MARIETTA, OH"
    },
    {
        "name": "THE UNIVERSITY OF TEXAS RIO GRANDE VALLEY",
        "location": "EDINBURG, TX"
    },
    {
        "name": "WESTERN TEXAS COLLEGE",
        "location": "SNYDER, TX"
    },
    {
        "name": "SOMERSET COMMUNITY COLLEGE",
        "location": "SOMERSET, KY"
    },
    {
        "name": "UNIVERSITY OF RICHMOND",
        "location": "UNIVERSITY OF RICHMOND, VA"
    },
    {
        "name": "GRACE MISSION UNIVERSITY",
        "location": "FULLERTON, CA"
    },
    {
        "name": "AMERICAN COLLEGE OF HEALTHCARE AND TECHNOLOGY",
        "location": "HUNTINGTON PARK, CA"
    },
    {
        "name": "DICKINSON COLLEGE",
        "location": "CARLISLE, PA"
    },
    {
        "name": "DESIGNER BARBER & STYLIST SCHOOL",
        "location": "FT SMITH, AR"
    },
    {
        "name": "INTERAMERICAN TECHNICAL INSTITUTE",
        "location": "MIAMI, FL"
    },
    {
        "name": "GALEN COLLEGE OF NURSING-SAN ANTONIO",
        "location": "SAN ANTONIO, TX"
    },
    {
        "name": "PHILADELPHIA TECHNICIAN TRAINING",
        "location": "PHILADELPHIA, PA"
    },
    {
        "name": "DEBUTANTES SCHOOL OF COSMETOLOGY AND NAIL TECHNOLOGY",
        "location": "DEKALB, IL"
    },
    {
        "name": "NORTHERN VERMONT UNIVERSITY",
        "location": "JOHNSON, VT"
    },
    {
        "name": "WEST COAST UNIVERSITY-MIAMI",
        "location": "DORAL, FL"
    },
    {
        "name": "FAIRMONT STATE UNIVERSITY",
        "location": "FAIRMONT, WV"
    },
    {
        "name": "AMERICAN BEAUTY SCHOOL",
        "location": "BRONX, NY"
    },
    {
        "name": "OTTAWA UNIVERSITY-PHOENIX",
        "location": "PHOENIX, AZ"
    },
    {
        "name": "VINCENNES BEAUTY COLLEGE",
        "location": "VINCENNES, IN"
    },
    {
        "name": "SAN JOAQUIN VALLEY COLLEGE-VISALIA",
        "location": "VISALIA, CA"
    },
    {
        "name": "COLORADO TECHNICAL UNIVERSITY-COLORADO SPRINGS",
        "location": "COLORADO SPRINGS, CO"
    },
    {
        "name": "ARTHUR'S BEAUTY COLLEGE",
        "location": "JACKSONVILLE, AR"
    },
    {
        "name": "SWARTHMORE COLLEGE",
        "location": "SWARTHMORE, PA"
    },
    {
        "name": "EMBRY-RIDDLE AERONAUTICAL UNIVERSITY-DAYTONA BEACH",
        "location": "DAYTONA BEACH, FL"
    },
    {
        "name": "UNIVERSITY OF HAWAII SYSTEM OFFICE",
        "location": "HONOLULU, HI"
    },
    {
        "name": "NATIONAL LATINO EDUCATION INSTITUTE",
        "location": "CHICAGO, IL"
    },
    {
        "name": "SANTA FE COMMUNITY COLLEGE",
        "location": "SANTA FE, NM"
    },
    {
        "name": "MESALANDS COMMUNITY COLLEGE",
        "location": "TUCUMCARI, NM"
    },
    {
        "name": "ATLANTIC BEAUTY & SPA ACADEMY LLC",
        "location": "EGG HARBOR TOWNSHIP, NJ"
    },
    {
        "name": "SOUTHWEST ACUPUNCTURE COLLEGE-BOULDER",
        "location": "BOULDER, CO"
    },
    {
        "name": "COMMUNITY CARE COLLEGE",
        "location": "TULSA, OK"
    },
    {
        "name": "M-DCPS THE ENGLISH CENTER",
        "location": "MIAMI, FL"
    },
    {
        "name": "DEVRY UNIVERSITY-ARIZONA",
        "location": "PHOENIX, AZ"
    },
    {
        "name": "DEVRY UNIVERSITY-COLORADO",
        "location": "WESTMINSTER, CO"
    },
    {
        "name": "ESCUELA DE PERITOS ELECTRICISTAS DE ISABELA INC",
        "location": "ISABELA, PR"
    },
    {
        "name": "LIM COLLEGE",
        "location": "NEW YORK, NY"
    },
    {
        "name": "CHARLIE'S GUARD-DETECTIVE BUREAU AND ACADEMY INC",
        "location": "AGUADILLA, PR"
    },
    {
        "name": "AVIATOR COLLEGE OF AERONAUTICAL SCIENCE AND TECHNOLOGY",
        "location": "FORT PIERCE, FL"
    },
    {
        "name": "EMPIRE COLLEGE",
        "location": "SANTA ROSA, CA"
    },
    {
        "name": "EDUCATORS OF BEAUTY COLLEGE OF COSMETOLOGY-STERLING",
        "location": "STERLING, IL"
    },
    {
        "name": "SOUTHEAST MISSOURI HOSPITAL COLLEGE OF NURSING AND HEALTH SCIENCES",
        "location": "CAPE GIRARDEAU, MO"
    },
    {
        "name": "THE CREATIVE CENTER",
        "location": "OMAHA, NE"
    },
    {
        "name": "SOUTHERN NEW HAMPSHIRE UNIVERSITY",
        "location": "MANCHESTER, NH"
    },
    {
        "name": "UNIVERSITY OF FORT LAUDERDALE",
        "location": "LAUDERHILL, FL"
    },
    {
        "name": "YESHIVATH VIZNITZ",
        "location": "MONSEY, NY"
    },
    {
        "name": "THE CHRIST COLLEGE OF NURSING AND HEALTH SCIENCES",
        "location": "CINCINNATI, OH"
    },
    {
        "name": "CREVIER'S ACADEMY OF COSMETOLOGY ARTS",
        "location": "KALISPELL, MT"
    },
    {
        "name": "ALLEN SCHOOL-PHOENIX",
        "location": "PHOENIX, AZ"
    },
    {
        "name": "STEVENSONS ACADEMY OF HAIR DESIGN",
        "location": "NEW ORLEANS, LA"
    },
    {
        "name": "SOUTHERN UNIVERSITY AT NEW ORLEANS",
        "location": "NEW ORLEANS, LA"
    },
    {
        "name": "MARYLAND UNIVERSITY OF INTEGRATIVE HEALTH",
        "location": "LAUREL, MD"
    },
    {
        "name": "INSTITUTO TECNOLOGICO DE PUERTO RICO-RECINTO DE SAN JUAN",
        "location": "SAN JUAN, PR"
    },
    {
        "name": "UNIVERSAL TECHNICAL INSTITUTE OF PENNSYLVANIA INC",
        "location": "EXTON, PA"
    },
    {
        "name": "COLUMBIA SOUTHERN UNIVERSITY",
        "location": "ORANGE BEACH, AL"
    },
    {
        "name": "SAINT VINCENT DE PAUL REGIONAL SEMINARY",
        "location": "BOYNTON BEACH, FL"
    },
    {
        "name": "JOSEF'S SCHOOL OF HAIR, SKIN & BODY-FARGO",
        "location": "FARGO, ND"
    },
    {
        "name": "EMPIRE BEAUTY SCHOOL-E MEMPHIS",
        "location": "MEMPHIS, TN"
    },
    {
        "name": "YESHIVA GEDOLAH ZICHRON LEYMA",
        "location": "UNION, NJ"
    },
    {
        "name": "ICPR JUNIOR COLLEGE",
        "location": "MANATI, PR"
    },
    {
        "name": "CHEEKS BEAUTY ACADEMY",
        "location": "CHEYENNE, WY"
    },
    {
        "name": "SAN JOAQUIN VALLEY COLLEGE-FRESNO AVIATION",
        "location": "FRESNO, CA"
    },
    {
        "name": "PROFESSIONAL GOLFERS CAREER COLLEGE",
        "location": "TEMECULA, CA"
    },
    {
        "name": "IRELL & MANELLA GRADUATE SCHOOL OF BIOLOGICAL SCIENCES AT CITY OF HOPE",
        "location": "DUARTE, CA"
    },
    {
        "name": "PAUL MITCHELL THE SCHOOL-COSTA MESA",
        "location": "COSTA MESA, CA"
    },
    {
        "name": "ALTIERUS CAREER COLLEGE-BISSONNET",
        "location": "HOUSTON, TX"
    },
    {
        "name": "CASPER COLLEGE",
        "location": "CASPER, WY"
    },
    {
        "name": "UNIVERSITY OF TOLEDO",
        "location": "TOLEDO, OH"
    },
    {
        "name": "THE UNIVERSITY OF TEXAS AT SAN ANTONIO",
        "location": "SAN ANTONIO, TX"
    },
    {
        "name": "SOUTHWESTERN ADVENTIST UNIVERSITY",
        "location": "KEENE, TX"
    },
    {
        "name": "SACRED HEART UNIVERSITY",
        "location": "FAIRFIELD, CT"
    },
    {
        "name": "SAINT MARY'S COLLEGE",
        "location": "NOTRE DAME, IN"
    },
    {
        "name": "VERMONT STATE COLLEGES-OFFICE OF THE CHANCELLOR",
        "location": "MONTPELIER, VT"
    },
    {
        "name": "APPALACHIAN BIBLE COLLEGE",
        "location": "MOUNT HOPE, WV"
    },
    {
        "name": "LANDMARK COLLEGE",
        "location": "PUTNEY, VT"
    },
    {
        "name": "ROGER WILLIAMS UNIVERSITY SCHOOL OF LAW",
        "location": "BRISTOL, RI"
    },
    {
        "name": "VENTURA COLLEGE",
        "location": "VENTURA, CA"
    },
    {
        "name": "MAGNOLIA COLLEGE OF COSMETOLOGY",
        "location": "JACKSON, MS"
    },
    {
        "name": "NEWSCHOOL OF ARCHITECTURE AND DESIGN",
        "location": "SAN DIEGO, CA"
    },
    {
        "name": "INDUSTRIAL MANAGEMENT TRAINING INSTITUTE",
        "location": "WATERBURY, CT"
    },
    {
        "name": "TREASURE VALLEY COMMUNITY COLLEGE",
        "location": "ONTARIO, OR"
    },
    {
        "name": "TENNESSEE STATE UNIVERSITY",
        "location": "NASHVILLE, TN"
    },
    {
        "name": "ST PAUL'S SCHOOL OF NURSING-STATEN ISLAND",
        "location": "STATEN ISLAND, NY"
    },
    {
        "name": "SISTEMA UNIVERSITARIO ANA G. MENDEZ",
        "location": "RIO PIEDRAS, PR"
    },
    {
        "name": "LICEO DE ARTE-DISE-O Y COMERCIO",
        "location": "CAGUAS, PR"
    },
    {
        "name": "INTERNATIONAL BEAUTY COLLEGE",
        "location": "GARLAND, TX"
    },
    {
        "name": "ESCUELA HOTELERA DE SAN JUAN",
        "location": "HATO REY, PR"
    },
    {
        "name": "CENTER FOR NATURAL WELLNESS SCHOOL OF MASSAGE THERAPY",
        "location": "ALBANY, NY"
    },
    {
        "name": "EUPHORIA INSTITUTE OF BEAUTY ARTS & SCIENCES-SUMMERLIN",
        "location": "LAS VEGAS, NV"
    },
    {
        "name": "LAKEWOOD SCHOOL OF THERAPEUTIC MASSAGE",
        "location": "PORT HURON, MI"
    },
    {
        "name": "UNIVERSITY OF REDLANDS GRADUATE SCHOOL OF THEOLOGY",
        "location": "SAN ANSELMO, CA"
    },
    {
        "name": "PJ'S COLLEGE OF COSMETOLOGY-BOWLING GREEN",
        "location": "BOWLING GREEN, KY"
    },
    {
        "name": "JOHN JAY BEAUTY COLLEGE",
        "location": "KENNER, LA"
    },
    {
        "name": "ST. JOSEPH'S COLLEGE-LONG ISLAND",
        "location": "PATCHOGUE, NY"
    },
    {
        "name": "SOUTHERN COLLEGE OF OPTOMETRY",
        "location": "MEMPHIS, TN"
    },
    {
        "name": "SAINT ELIZABETH UNIVERSITY",
        "location": "MORRISTOWN, NJ"
    },
    {
        "name": "THE CULINARY SCHOOL OF FORT WORTH",
        "location": "FORT WORTH, TX"
    },
    {
        "name": "AMERICAN MASSAGE & BODYWORK INSTITUTE",
        "location": "VIENNA, VA"
    },
    {
        "name": "HOUSTON SCHOOL OF CARPENTRY",
        "location": "HOUSTON, TX"
    },
    {
        "name": "KENNY'S BEAUTY ACADEMY",
        "location": "ARLINGTON, VA"
    },
    {
        "name": "MIXED INSTITUTE OF COSMETOLOGY & BARBER",
        "location": "SACRAMENTO, CA"
    },
    {
        "name": "STAUTZENBERGER COLLEGE-ROCKFORD CAREER COLLEGE",
        "location": "ROCKFORD, IL"
    },
    {
        "name": "PAUL MITCHELL THE SCHOOL-FORT LAUDERDALE",
        "location": "PLANTATION, FL"
    },
    {
        "name": "ARIZONA COLLEGE OF NURSING-TUCSON",
        "location": "TUCSON, AZ"
    },
    {
        "name": "NUC UNIVERSITY - IBC INSTITUTE - GUAYAMA",
        "location": "GUAYAMA, PR"
    },
    {
        "name": "NUC UNIVERSITY - IBC INSTITUTE - FAJARDO",
        "location": "FAJARDO, PR"
    },
    {
        "name": "NUC UNIVERSITY - IBC INSTITUTE - MANAT?",
        "location": "MANATI, PR"
    },
    {
        "name": "FRENCH ACADEMY OF COSMETOLOGY",
        "location": "SPRING LAKE, MI"
    },
    {
        "name": "MCDANIEL COLLEGE",
        "location": "WESTMINSTER, MD"
    },
    {
        "name": "JOLIET JUNIOR COLLEGE",
        "location": "JOLIET, IL"
    },
    {
        "name": "INTERNATIONAL BEAUTY EDUCATION CENTER",
        "location": "AIRWAY HEIGHTS, WA"
    },
    {
        "name": "SUNY AT ALBANY",
        "location": "ALBANY, NY"
    },
    {
        "name": "SURRY COMMUNITY COLLEGE",
        "location": "DOBSON, NC"
    },
    {
        "name": "BROOKDALE COMMUNITY COLLEGE",
        "location": "LINCROFT, NJ"
    },
    {
        "name": "AMHERST COLLEGE",
        "location": "AMHERST, MA"
    },
    {
        "name": "CLEVELAND UNIVERSITY-KANSAS CITY",
        "location": "OVERLAND PARK, KS"
    },
    {
        "name": "PENNSYLVANIA STATE UNIVERSITY-PENN STATE DUBOIS",
        "location": "DUBOIS, PA"
    },
    {
        "name": "COLUMBIA STATE COMMUNITY COLLEGE",
        "location": "COLUMBIA, TN"
    },
    {
        "name": "ALAMO COMMUNITY COLLEGE DISTRICT CENTRAL OFFICE",
        "location": "SAN ANTONIO, TX"
    },
    {
        "name": "AUSTIN COMMUNITY COLLEGE DISTRICT",
        "location": "AUSTIN, TX"
    },
    {
        "name": "YAKIMA VALLEY COLLEGE",
        "location": "YAKIMA, WA"
    },
    {
        "name": "MODERN TECHNOLOGY SCHOOL",
        "location": "FOUNTAIN VALLEY, CA"
    },
    {
        "name": "FLORIDA ACADEMY",
        "location": "FORT MYERS, FL"
    },
    {
        "name": "ATA COLLEGE-CINCINNATI",
        "location": "CINCINNATI, OH"
    },
    {
        "name": "ELGIN COMMUNITY COLLEGE",
        "location": "ELGIN, IL"
    },
    {
        "name": "THE UNIVERSITY OF FINDLAY",
        "location": "FINDLAY, OH"
    },
    {
        "name": "BRYANT UNIVERSITY",
        "location": "SMITHFIELD, RI"
    },
    {
        "name": "FRANCIS MARION UNIVERSITY",
        "location": "FLORENCE, SC"
    },
    {
        "name": "ROSS MEDICAL EDUCATION CENTER-DAYTON",
        "location": "DAYTON, OH"
    },
    {
        "name": "SOUTH DAKOTA STATE UNIVERSITY",
        "location": "BROOKINGS, SD"
    },
    {
        "name": "ODESSA COLLEGE",
        "location": "ODESSA, TX"
    },
    {
        "name": "ROSS MEDICAL EDUCATION CENTER-EVANSVILLE",
        "location": "EVANSVILLE, IN"
    },
    {
        "name": "UNIVERSITY OF PHOENIX-FLORIDA",
        "location": "MIRAMAR, FL"
    },
    {
        "name": "WEBSTER UNIVERSITY",
        "location": "SAINT LOUIS, MO"
    },
    {
        "name": "CLAREMONT GRADUATE UNIVERSITY",
        "location": "CLAREMONT, CA"
    },
    {
        "name": "AMERICAN PUBLIC UNIVERSITY SYSTEM",
        "location": "CHARLES TOWN, WV"
    },
    {
        "name": "NORTHERN WYOMING COMMUNITY COLLEGE DISTRICT",
        "location": "SHERIDAN, WY"
    },
    {
        "name": "SAN FRANCISCO INSTITUTE OF ESTHETICS & COSMETOLOGY INC",
        "location": "SAN FRANCISCO, CA"
    },
    {
        "name": "COLUMBIA COLLEGE",
        "location": "VIENNA, VA"
    },
    {
        "name": "PAUL MITCHELL THE SCHOOL-LEXINGTON",
        "location": "LEXINGTON, KY"
    },
    {
        "name": "BIG SANDY COMMUNITY AND TECHNICAL COLLEGE",
        "location": "PRESTONSBURG, KY"
    },
    {
        "name": "CONCORDIA UNIVERSITY-SAINT PAUL",
        "location": "SAINT PAUL, MN"
    },
    {
        "name": "SOUTHWESTERN INDIAN POLYTECHNIC INSTITUTE",
        "location": "ALBUQUERQUE, NM"
    },
    {
        "name": "CUNY LAGUARDIA COMMUNITY COLLEGE",
        "location": "LONG ISLAND CITY, NY"
    },
    {
        "name": "THE COLLEGE OF SAINT ROSE",
        "location": "ALBANY, NY"
    },
    {
        "name": "KEAN UNIVERSITY",
        "location": "UNION, NJ"
    },
    {
        "name": "AVIATION INSTITUTE OF MAINTENANCE-NORFOLK",
        "location": "NORFOLK, VA"
    },
    {
        "name": "PATHWAY VOCATIONAL ACADEMY",
        "location": "BEAUMONT, TX"
    },
    {
        "name": "NORTHERN VIRGINIA COMMUNITY COLLEGE",
        "location": "ANNANDALE, VA"
    },
    {
        "name": "TOP NAILS & HAIR BEAUTY SCHOOL",
        "location": "TAYLORSVILLE, UT"
    },
    {
        "name": "INSTITUTO DE BANCA Y COMERCIO INC",
        "location": "GUAYNABO, PR"
    },
    {
        "name": "SOUTHWEST ACUPUNCTURE COLLEGE-SANTA FE",
        "location": "SANTA FE, NM"
    },
    {
        "name": "WARREN COUNTY COMMUNITY COLLEGE",
        "location": "WASHINGTON, NJ"
    },
    {
        "name": "ACE COSMETOLOGY AND BARBER TRAINING CENTER",
        "location": "WATERBURY, CT"
    },
    {
        "name": "BRYAN UNIVERSITY",
        "location": "SPRINGFIELD, MO"
    },
    {
        "name": "EVERGLADES UNIVERSITY",
        "location": "BOCA RATON, FL"
    },
    {
        "name": "NORTHEASTERN SEMINARY",
        "location": "ROCHESTER, NY"
    },
    {
        "name": "NUVO COLLEGE OF COSMETOLOGY",
        "location": "NORTON SHORES, MI"
    },
    {
        "name": "UNIVERSITY OF MASSACHUSETTS-CENTRAL OFFICE",
        "location": "BOSTON, MA"
    },
    {
        "name": "ANGELES INSTITUTE",
        "location": "ARTESIA, CA"
    },
    {
        "name": "ANTIOCH UNIVERSITY-MIDWEST",
        "location": "YELLOW SPRINGS, OH"
    },
    {
        "name": "ERIE INSTITUTE OF TECHNOLOGY INC",
        "location": "ERIE, PA"
    },
    {
        "name": "HOUSTON GRADUATE SCHOOL OF THEOLOGY",
        "location": "HOUSTON, TX"
    },
    {
        "name": "WINDWARD COMMUNITY COLLEGE",
        "location": "KANEOHE, HI"
    },
    {
        "name": "ENSIGN COLLEGE",
        "location": "SALT LAKE CITY, UT"
    },
    {
        "name": "SOVAH SCHOOL OF HEALTH PROFESSIONS",
        "location": "DANVILLE, VA"
    },
    {
        "name": "MEDICAL INSTITUTE OF PALM BEACH",
        "location": "GREENACRES, FL"
    },
    {
        "name": "UNIVERSITY OF SOUTHERN MISSISSIPPI",
        "location": "HATTIESBURG, MS"
    },
    {
        "name": "WESTERN CAROLINA UNIVERSITY",
        "location": "CULLOWHEE, NC"
    },
    {
        "name": "INVER HILLS COMMUNITY COLLEGE",
        "location": "INVER GROVE HEIGHTS, MN"
    },
    {
        "name": "NATIONAL PARALEGAL COLLEGE",
        "location": "PHOENIX, AZ"
    },
    {
        "name": "GALAXY MEDICAL COLLEGE",
        "location": "NORTH HOLLYWOOD, CA"
    },
    {
        "name": "MAUNA LOA HELICOPTERS",
        "location": "KAILUA KONA, HI"
    },
    {
        "name": "RALPH R WILLIS CAREER AND TECHNICAL CENTER",
        "location": "STOLLINGS, WV"
    },
    {
        "name": "MARLBORO COLLEGE GRADUATE & PROFESSIONAL STUDIES",
        "location": "MARLBORO, VT"
    },
    {
        "name": "NIGHTINGALE COLLEGE",
        "location": "SALT LAKE CITY, UT"
    },
    {
        "name": "CULPEPER COSMETOLOGY TRAINING CENTER",
        "location": "CULPEPER, VA"
    },
    {
        "name": "EMPIRE BEAUTY SCHOOL-GWINNETT",
        "location": "LAWRENCEVILLE, GA"
    },
    {
        "name": "HOUSTON TRAINING SCHOOL-GULFGATE",
        "location": "HOUSTON, TX"
    },
    {
        "name": "CALIFORNIA STATE UNIVERSITY-LONG BEACH",
        "location": "LONG BEACH, CA"
    },
    {
        "name": "MARYVILLE UNIVERSITY OF SAINT LOUIS",
        "location": "SAINT LOUIS, MO"
    },
    {
        "name": "LINCOLN TECHNICAL INSTITUTE-ISELIN",
        "location": "ISELIN, NJ"
    },
    {
        "name": "LOMA LINDA UNIVERSITY",
        "location": "LOMA LINDA, CA"
    },
    {
        "name": "ADAMS STATE UNIVERSITY",
        "location": "ALAMOSA, CO"
    },
    {
        "name": "SHORTER UNIVERSITY",
        "location": "ROME, GA"
    },
    {
        "name": "TRUMAN STATE UNIVERSITY",
        "location": "KIRKSVILLE, MO"
    },
    {
        "name": "DALLAS BAPTIST UNIVERSITY",
        "location": "DALLAS, TX"
    },
    {
        "name": "PAUL D CAMP COMMUNITY COLLEGE",
        "location": "FRANKLIN, VA"
    },
    {
        "name": "BELLINGHAM TECHNICAL COLLEGE",
        "location": "BELLINGHAM, WA"
    },
    {
        "name": "NORTHEAST WISCONSIN TECHNICAL COLLEGE",
        "location": "GREEN BAY, WI"
    },
    {
        "name": "SANTA BARBARA BUSINESS COLLEGE-SANTA MARIA",
        "location": "SANTA MARIA, CA"
    },
    {
        "name": "BRYANT & STRATTON COLLEGE-PARMA",
        "location": "PARMA, OH"
    },
    {
        "name": "PLATT COLLEGE-LOS ANGELES",
        "location": "ALHAMBRA, CA"
    },
    {
        "name": "SEMINAR L'MOROS BAIS YAAKOV",
        "location": "BROOKLYN, NY"
    },
    {
        "name": "SOUTHWEST UNIVERSITY OF VISUAL ARTS-ALBUQUERQUE",
        "location": "ALBUQUERQUE, NM"
    },
    {
        "name": "EMPIRE BEAUTY SCHOOL-OWINGS MILLS",
        "location": "OWINGS MILLS, MD"
    },
    {
        "name": "ASSOCIATED TECHNICAL COLLEGE-SAN DIEGO",
        "location": "SAN DIEGO, CA"
    },
    {
        "name": "BAIS BINYOMIN ACADEMY",
        "location": "MONSEY, NY"
    },
    {
        "name": "HYPNOSIS MOTIVATION INSTITUTE",
        "location": "TARZANA, CA"
    },
    {
        "name": "COLORADO SCHOOL OF TRADES",
        "location": "LAKEWOOD, CO"
    },
    {
        "name": "CORTIVA INSTITUTE-POMPANO",
        "location": "POMPANO BEACH, FL"
    },
    {
        "name": "KENTUCKY WESLEYAN COLLEGE",
        "location": "OWENSBORO, KY"
    },
    {
        "name": "GLEN OAKS COMMUNITY COLLEGE",
        "location": "CENTREVILLE, MI"
    },
    {
        "name": "PINE TECHNICAL & COMMUNITY COLLEGE",
        "location": "PINE CITY, MN"
    },
    {
        "name": "LUTHER SEMINARY",
        "location": "SAINT PAUL, MN"
    },
    {
        "name": "LINCOLN UNIVERSITY",
        "location": "JEFFERSON CITY, MO"
    },
    {
        "name": "MORAVIAN COLLEGE",
        "location": "BETHLEHEM, PA"
    },
    {
        "name": "JACKSONVILLE COLLEGE",
        "location": "JACKSONVILLE, TX"
    },
    {
        "name": "MAK BEAUTY INSTITUTE",
        "location": "CUMMING, GA"
    },
    {
        "name": "ELITE COSMETOLOGY, BARBER & SPA ACADEMY",
        "location": "YAKIMA, WA"
    },
    {
        "name": "KANSAS CITY UNIVERSITY OF MEDICINE AND BIOSCIENCES-JOPLIN",
        "location": "JOPLIN, MO"
    },
    {
        "name": "PELOTON COLLEGE",
        "location": "ARLINGTON, TX"
    },
    {
        "name": "CHICAGO SCHOOL OF PROFESSIONAL PSYCHOLOGY AT DALLAS",
        "location": "RICHARDSON, TX"
    },
    {
        "name": "SOUTHEASTERN FREE WILL BAPTIST BIBLE COLLEGE",
        "location": "WENDELL, NC"
    },
    {
        "name": "OHEL MARGULIA SEMINARY",
        "location": "MONSEY, NY"
    },
    {
        "name": "CHRIST MISSION COLLEGE",
        "location": "SAN ANTONIO, TX"
    },
    {
        "name": "TAYLOR ANDREWS ACADEMY OF HAIR DESIGN-HAIR LAB DETROIT BARBER SCHOOL",
        "location": "SOUTHGATE, MI"
    },
    {
        "name": "SOUTH EASTERN BEAUTY ACADEMY",
        "location": "PAINTSVILLE, KY"
    },
    {
        "name": "ADVANCED COLLEGE - SALIDA",
        "location": "SALIDA, CA"
    },
    {
        "name": "SOUTHWESTERN BAPTIST THEOLOGICAL SEMINARY",
        "location": "FORT WORTH, TX"
    },
    {
        "name": "UNIVERSIDAD ANA G. MENDEZ-GURABO CAMPUS",
        "location": "GURABO, PR"
    },
    {
        "name": "UNION COLLEGE",
        "location": "BARBOURVILLE, KY"
    },
    {
        "name": "THE JUILLIARD SCHOOL",
        "location": "NEW YORK, NY"
    },
    {
        "name": "PRINCESS BEAUTY SCHOOL",
        "location": "DEARBORN HEIGHTS, MI"
    },
    {
        "name": "SUSQUEHANNA COUNTY CAREER AND TECHNOLOGY CENTER",
        "location": "SPRINGVILLE, PA"
    },
    {
        "name": "LAKE LAND COLLEGE",
        "location": "MATTOON, IL"
    },
    {
        "name": "GRAND RAPIDS COMMUNITY COLLEGE",
        "location": "GRAND RAPIDS, MI"
    },
    {
        "name": "WASHBURN UNIVERSITY",
        "location": "TOPEKA, KS"
    },
    {
        "name": "CLACKAMAS COMMUNITY COLLEGE",
        "location": "OREGON CITY, OR"
    },
    {
        "name": "WEST GEORGIA TECHNICAL COLLEGE",
        "location": "WACO, GA"
    },
    {
        "name": "ACUPUNCTURE AND INTEGRATIVE MEDICINE COLLEGE-BERKELEY",
        "location": "BERKELEY, CA"
    },
    {
        "name": "CHEYNEY UNIVERSITY OF PENNSYLVANIA",
        "location": "CHEYNEY, PA"
    },
    {
        "name": "THE CHICAGO SCHOOL OF PROFESSIONAL PSYCHOLOGY AT WASHINGTON DC",
        "location": "WASHINGTON, DC"
    },
    {
        "name": "BRANFORD HALL CAREER INSTITUTE-PARSIPPANY",
        "location": "PARSIPPANY, NJ"
    },
    {
        "name": "COSMETOLOGY CAREER CENTER LLC",
        "location": "CARROLLTON, TX"
    },
    {
        "name": "LONE STAR COLLEGE SYSTEM",
        "location": "THE WOODLANDS, TX"
    },
    {
        "name": "TRUMBULL CAREER & TECHNICAL CENTER",
        "location": "WARREN, OH"
    },
    {
        "name": "WEBER STATE UNIVERSITY",
        "location": "OGDEN, UT"
    },
    {
        "name": "PARADISE VALLEY COMMUNITY COLLEGE",
        "location": "PHOENIX, AZ"
    },
    {
        "name": "UNIVERSITY OF ALASKA FAIRBANKS",
        "location": "FAIRBANKS, AK"
    },
    {
        "name": "JEFFERSON STATE COMMUNITY COLLEGE",
        "location": "BIRMINGHAM, AL"
    },
    {
        "name": "ATHENS TECHNICAL COLLEGE",
        "location": "ATHENS, GA"
    },
    {
        "name": "AUSTIN KADE ACADEMY",
        "location": "IDAHO FALLS, ID"
    },
    {
        "name": "TEXAS TECH UNIVERSITY",
        "location": "LUBBOCK, TX"
    },
    {
        "name": "STAUNTON SCHOOL OF COSMETOLOGY",
        "location": "STAUNTON, VA"
    },
    {
        "name": "WICHITA STATE UNIVERSITY-CAMPUS OF APPLIED SCIENCES AND TECHNOLOGY",
        "location": "WICHITA, KS"
    },
    {
        "name": "FURMAN UNIVERSITY",
        "location": "GREENVILLE, SC"
    },
    {
        "name": "WITTENBERG UNIVERSITY",
        "location": "SPRINGFIELD, OH"
    },
    {
        "name": "SHIPPENSBURG UNIVERSITY OF PENNSYLVANIA",
        "location": "SHIPPENSBURG, PA"
    },
    {
        "name": "KANSAS CHRISTIAN COLLEGE",
        "location": "OVERLAND PARK, KS"
    },
    {
        "name": "PIEDMONT TECHNICAL COLLEGE",
        "location": "GREENWOOD, SC"
    },
    {
        "name": "THE UNIVERSITY OF TEXAS AT DALLAS",
        "location": "RICHARDSON, TX"
    },
    {
        "name": "EMPIRE BEAUTY SCHOOL-BUFFALO",
        "location": "CHEEKTOWAGA, NY"
    },
    {
        "name": "NATIONAL POLYTECHNIC COLLEGE",
        "location": "LAKEWOOD, CA"
    },
    {
        "name": "CARLSON COLLEGE OF MASSAGE THERAPY",
        "location": "ANAMOSA, IA"
    },
    {
        "name": "VILLA MARIA COLLEGE",
        "location": "BUFFALO, NY"
    },
    {
        "name": "CAREER ACADEMY OF BEAUTY",
        "location": "GARDEN GROVE, CA"
    },
    {
        "name": "CLAYTON STATE UNIVERSITY",
        "location": "MORROW, GA"
    },
    {
        "name": "NORTH ARKANSAS COLLEGE",
        "location": "HARRISON, AR"
    },
    {
        "name": "ALBIZU UNIVERSITY-MIAMI",
        "location": "MIAMI, FL"
    },
    {
        "name": "PAUL MITCHELL THE SCHOOL-BRADLEY",
        "location": "BOURBONNAIS, IL"
    },
    {
        "name": "HAIR PROFESSIONALS CAREER COLLEGE",
        "location": "SYCAMORE, IL"
    },
    {
        "name": "COLLEGE OF THE ATLANTIC",
        "location": "BAR HARBOR, ME"
    },
    {
        "name": "NEW MEXICO HIGHLANDS UNIVERSITY",
        "location": "LAS VEGAS, NM"
    },
    {
        "name": "CULINARY INSTITUTE OF AMERICA",
        "location": "HYDE PARK, NY"
    },
    {
        "name": "STRAND COLLEGE OF HAIR DESIGN",
        "location": "MYRTLE BEACH, SC"
    },
    {
        "name": "TRIDENT TECHNICAL COLLEGE",
        "location": "CHARLESTON, SC"
    },
    {
        "name": "TRINITY BIBLE COLLEGE AND GRADUATE SCHOOL",
        "location": "ELLENDALE, ND"
    },
    {
        "name": "BRANFORD HALL CAREER INSTITUTE-JERSEY CITY",
        "location": "JERSEY CITY, NJ"
    },
    {
        "name": "SARASOTA SCHOOL OF MASSAGE THERAPY",
        "location": "SARASOTA, FL"
    },
    {
        "name": "WAGNER COLLEGE",
        "location": "STATEN ISLAND, NY"
    },
    {
        "name": "OCEAN COUNTY VOCATIONAL-TECHNICAL SCHOOL",
        "location": "TOMS RIVER, NJ"
    },
    {
        "name": "PIMA MEDICAL INSTITUTE-ALBUQUERQUE WEST",
        "location": "ALBUQUERQUE, NM"
    },
    {
        "name": "AVE MARIA UNIVERSITY",
        "location": "AVE MARIA, FL"
    },
    {
        "name": "DONNELLY COLLEGE",
        "location": "KANSAS CITY, KS"
    },
    {
        "name": "BLUE MOUNTAIN COLLEGE",
        "location": "BLUE MOUNTAIN, MS"
    },
    {
        "name": "MCVSD",
        "location": "FREEHOLD, NJ"
    },
    {
        "name": "POMEROY COLLEGE OF NURSING AT CROUSE HOSPITAL",
        "location": "SYRACUSE, NY"
    },
    {
        "name": "SUNY EMPIRE STATE COLLEGE",
        "location": "SARATOGA SPRINGS, NY"
    },
    {
        "name": "NUVANI INSTITUTE",
        "location": "EAGLE PASS, TX"
    },
    {
        "name": "THE TEMPLE-A PAUL MITCHELL PARTNER SCHOOL",
        "location": "FREDERICK, MD"
    },
    {
        "name": "CENTURY COLLEGE",
        "location": "WHITE BEAR LAKE, MN"
    },
    {
        "name": "CUNY SCHOOL OF LAW",
        "location": "LONG ISLAND CITY, NY"
    },
    {
        "name": "NORTHWEST COLLEGE-EUGENE",
        "location": "SPRINGFIELD, OR"
    },
    {
        "name": "HERZING UNIVERSITY-NEW ORLEANS",
        "location": "METAIRIE, LA"
    },
    {
        "name": "ROLLINS COLLEGE",
        "location": "WINTER PARK, FL"
    },
    {
        "name": "PENROSE ACADEMY",
        "location": "SCOTTSDALE, AZ"
    },
    {
        "name": "SKIN INSTITUTE",
        "location": "SAINT LOUIS, MO"
    },
    {
        "name": "FORT SCOTT COMMUNITY COLLEGE",
        "location": "FORT SCOTT, KS"
    },
    {
        "name": "HAMPTON UNIVERSITY",
        "location": "HAMPTON, VA"
    },
    {
        "name": "SEBRING CAREER SCHOOLS-HOUSTON",
        "location": "HOUSTON, TX"
    },
    {
        "name": "SUMMIT COLLEGE",
        "location": "SAN BERNARDINO, CA"
    },
    {
        "name": "REFRIGERATION SCHOOL INC",
        "location": "PHOENIX, AZ"
    },
    {
        "name": "POMONA UNIFIED SCHOOL DISTRICT ADULT AND CAREER EDUCATION",
        "location": "POMONA, CA"
    },
    {
        "name": "DELMARVA BEAUTY ACADEMY",
        "location": "SALISBURY, MD"
    },
    {
        "name": "KANSAS CITY ART INSTITUTE",
        "location": "KANSAS CITY, MO"
    },
    {
        "name": "SAMFORD UNIVERSITY",
        "location": "BIRMINGHAM, AL"
    },
    {
        "name": "NORTHEASTERN ILLINOIS UNIVERSITY",
        "location": "CHICAGO, IL"
    },
    {
        "name": "UINTAH BASIN TECHNICAL COLLEGE",
        "location": "ROOSEVELT, UT"
    },
    {
        "name": "COLUMBIA BASIN COLLEGE",
        "location": "PASCO, WA"
    },
    {
        "name": "BLUEFIELD STATE COLLEGE",
        "location": "BLUEFIELD, WV"
    },
    {
        "name": "ALABAMA STATE UNIVERSITY",
        "location": "MONTGOMERY, AL"
    },
    {
        "name": "THOMAS JEFFERSON SCHOOL OF LAW",
        "location": "SAN DIEGO, CA"
    },
    {
        "name": "CRAFTON HILLS COLLEGE",
        "location": "YUCAIPA, CA"
    },
    {
        "name": "OBLATE SCHOOL OF THEOLOGY",
        "location": "SAN ANTONIO, TX"
    },
    {
        "name": "AUTOMECA TECHNICAL COLLEGE-BAYAMON",
        "location": "BAYAMON, PR"
    },
    {
        "name": "PRISM CAREER INSTITUTE-CHERRY HILL",
        "location": "CHERRY HILL, NJ"
    },
    {
        "name": "AMERICAN CONSERVATORY THEATER",
        "location": "SAN FRANCISCO, CA"
    },
    {
        "name": "SALON SUCCESS ACADEMY-FONTANA",
        "location": "FONTANA, CA"
    },
    {
        "name": "IRENE'S MYOMASSOLOGY INSTITUTE",
        "location": "SOUTHFIELD, MI"
    },
    {
        "name": "BOLD BEAUTY ACADEMY",
        "location": "BILLINGS, MT"
    },
    {
        "name": "DEWEY UNIVERSITY-JUANA DÍAZ",
        "location": "JUANA DIAZ, PR"
    },
    {
        "name": "MILAN INSTITUTE OF COSMETOLOGY-RENO",
        "location": "RENO, NV"
    },
    {
        "name": "MOUNT SAINT MARY'S UNIVERSITY",
        "location": "LOS ANGELES, CA"
    },
    {
        "name": "TRICOCI UNIVERSITY OF BEAUTY CULTURE-LAFAYETTE",
        "location": "LAFAYETTE, IN"
    },
    {
        "name": "BATON ROUGE GENERAL MEDICAL CENTER SCHOOL OF NURSING & SCHOOL OF RADIOLOGIC TECHNOLOGY",
        "location": "BATON ROUGE, LA"
    },
    {
        "name": "POPE ST JOHN XXIII NATIONAL SEMINARY",
        "location": "WESTON, MA"
    },
    {
        "name": "THE UNIVERSITY OF MONTANA-WESTERN",
        "location": "DILLON, MT"
    },
    {
        "name": "CHI HEALTH SCHOOL OF RADIOLOGIC TECHNOLOGY",
        "location": "OMAHA, NE"
    },
    {
        "name": "BLESSING HOSPITAL SCHOOL OF RADIOLOGIC TECHNOLOGY",
        "location": "QUINCY, IL"
    },
    {
        "name": "RUSH UNIVERSITY",
        "location": "CHICAGO, IL"
    },
    {
        "name": "ETI SCHOOL OF SKILLED TRADES",
        "location": "WILLOWBROOK, IL"
    },
    {
        "name": "COLLEGE OF MOUNT SAINT VINCENT",
        "location": "BRONX, NY"
    },
    {
        "name": "LINDENWOOD UNIVERSITY",
        "location": "SAINT CHARLES, MO"
    },
    {
        "name": "POLYTECHNIC UNIVERSITY OF PUERTO RICO-ORLANDO",
        "location": "ORLANDO, FL"
    },
    {
        "name": "MANUEL AND THERESA'S SCHOOL OF HAIR DESIGN",
        "location": "BRENHAM, TX"
    },
    {
        "name": "ROSS COLLEGE-CANTON",
        "location": "CANTON, OH"
    },
    {
        "name": "DELTA DESIGNS COSMETOLOGY SCHOOL",
        "location": "WYNNE, AR"
    },
    {
        "name": "UNION BIBLE COLLEGE",
        "location": "WESTFIELD, IN"
    },
    {
        "name": "DSDT",
        "location": "DETROIT, MI"
    },
    {
        "name": "THE SALON PROFESSIONAL ACADEMY-DELRAY BEACH",
        "location": "DELRAY BEACH, FL"
    },
    {
        "name": "PIMA MEDICAL INSTITUTE-SAN ANTONIO",
        "location": "SAN ANTONIO, TX"
    },
    {
        "name": "EDUCATIONAL TECHNICAL COLLEGE",
        "location": "LARES, PR"
    },
    {
        "name": "PROFESSIONAL CULINARY ACADEMY",
        "location": "BUFFALO, NY"
    },
    {
        "name": "MARIANO MORENO CULINARY INSTITUTE",
        "location": "MIAMI, FL"
    },
    {
        "name": "CALIFORNIA INDIAN NATIONS COLLEGE",
        "location": "PALM DESERT, CA"
    },
    {
        "name": "A T STILL UNIVERSITY OF HEALTH SCIENCES",
        "location": "KIRKSVILLE, MO"
    },
    {
        "name": "ACADEMY OF PROFESSIONAL COSMETOLOGY",
        "location": "ROGERS, AR"
    },
    {
        "name": "UNIVERSIDAD ANA G. MENDEZ-ONLINE CAMPUS",
        "location": "SAN JUAN, PR"
    },
    {
        "name": "ASSOCIATED BARBER COLLEGE OF SAN DIEGO",
        "location": "SAN DIEGO, CA"
    },
    {
        "name": "UNITED EDUCATION INSTITUTE-UEI COLLEGE STOCKTON",
        "location": "STOCKTON, CA"
    },
    {
        "name": "ACADEMY FOR SALON PROFESSIONALS",
        "location": "NORTHRIDGE, CA"
    },
    {
        "name": "WESTCHESTER COLLEGE OF NURSING & ALLIED HEALTH",
        "location": "LOS ANGELES, CA"
    },
    {
        "name": "NORTH SHORE COMMUNITY COLLEGE",
        "location": "DANVERS, MA"
    },
    {
        "name": "MISSION BEAUTY INSTITUTE",
        "location": "MISSION, TX"
    },
    {
        "name": "ARKANSAS COLLEGES OF HEALTH EDUCATION",
        "location": "FORT SMITH, AR"
    },
    {
        "name": "MID-PLAINS COMMUNITY COLLEGE",
        "location": "NORTH PLATTE, NE"
    },
    {
        "name": "NORTH COUNTRY COMMUNITY COLLEGE",
        "location": "SARANAC LAKE, NY"
    },
    {
        "name": "EDP SCHOOL",
        "location": "BROOKLYN, NY"
    },
    {
        "name": "SYRACUSE UNIVERSITY",
        "location": "SYRACUSE, NY"
    },
    {
        "name": "HARDIN-SIMMONS UNIVERSITY",
        "location": "ABILENE, TX"
    },
    {
        "name": "CINCINNATI STATE TECHNICAL AND COMMUNITY COLLEGE",
        "location": "CINCINNATI, OH"
    },
    {
        "name": "DABNEY S LANCASTER COMMUNITY COLLEGE",
        "location": "CLIFTON FORGE, VA"
    },
    {
        "name": "APOLLO CAREER CENTER",
        "location": "LIMA, OH"
    },
    {
        "name": "CONCORDIA UNIVERSITY TEXAS",
        "location": "AUSTIN, TX"
    },
    {
        "name": "EASTERN MICHIGAN UNIVERSITY",
        "location": "YPSILANTI, MI"
    },
    {
        "name": "WAYNES COLLEGE OF BEAUTY",
        "location": "SALINAS, CA"
    },
    {
        "name": "FORTIS COLLEGE-COLUMBIA",
        "location": "COLUMBIA, SC"
    },
    {
        "name": "PENNSYLVANIA STATE UNIVERSITY-PENN STATE GREAT VALLEY",
        "location": "MALVERN, PA"
    },
    {
        "name": "PENNSYLVANIA STATE UNIVERSITY-PENN STATE SCRANTON",
        "location": "DUNMORE, PA"
    },
    {
        "name": "PLATT COLLEGE-STVT-SAN ANTONIO",
        "location": "SAN ANTONIO, TX"
    },
    {
        "name": "PLATT COLLEGE-MILLER-MOTTE-JACKSONVILLE",
        "location": "JACKSONVILLE, NC"
    },
    {
        "name": "SHEPHERDS THEOLOGICAL SEMINARY",
        "location": "CARY, NC"
    },
    {
        "name": "LEVITTOWN BEAUTY ACADEMY",
        "location": "LEVITTOWN, PA"
    },
    {
        "name": "WES WATKINS TECHNOLOGY CENTER",
        "location": "WETUMKA, OK"
    },
    {
        "name": "AIMS COMMUNITY COLLEGE",
        "location": "GREELEY, CO"
    },
    {
        "name": "AVEDA INSTITUTE-DES MOINES",
        "location": "WEST DES MOINES, IA"
    },
    {
        "name": "TENNESSEE COLLEGE OF APPLIED TECHNOLOGY-RIPLEY",
        "location": "RIPLEY, TN"
    },
    {
        "name": "ACADEMY OF VOCAL ARTS",
        "location": "PHILADELPHIA, PA"
    },
    {
        "name": "STEWART SCHOOL",
        "location": "SIOUX FALLS, SD"
    },
    {
        "name": "LINCOLN MEMORIAL UNIVERSITY",
        "location": "HARROGATE, TN"
    },
    {
        "name": "PAUL MITCHELL THE SCHOOL-GREENVILLE",
        "location": "GREENVILLE, SC"
    },
    {
        "name": "MASSASOIT COMMUNITY COLLEGE",
        "location": "BROCKTON, MA"
    },
    {
        "name": "PIMA MEDICAL INSTITUTE-RENTON",
        "location": "RENTON, WA"
    },
    {
        "name": "EMPIRE BEAUTY SCHOOL-NORTH HILLS",
        "location": "PITTSBURGH, PA"
    },
    {
        "name": "UNIVERSITY OF NEW HAMPSHIRE AT MANCHESTER",
        "location": "MANCHESTER, NH"
    },
    {
        "name": "CHAMBERLAIN UNIVERSITY-ILLINOIS",
        "location": "ADDISON, IL"
    },
    {
        "name": "MITCHELL COLLEGE",
        "location": "NEW LONDON, CT"
    },
    {
        "name": "TENNESSEE COLLEGE OF APPLIED TECHNOLOGY-JACKSON",
        "location": "JACKSON, TN"
    },
    {
        "name": "NEIGHBORHOOD PLAYHOUSE SCHOOL OF THE THEATER",
        "location": "NEW YORK CITY, NY"
    },
    {
        "name": "FORTIS INSTITUTE-BIRMINGHAM",
        "location": "BIRMINGHAM, AL"
    },
    {
        "name": "VERMONT COLLEGE OF FINE ARTS",
        "location": "MONTPELIER, VT"
    },
    {
        "name": "KENTUCKY MOUNTAIN BIBLE COLLEGE",
        "location": "JACKSON, KY"
    },
    {
        "name": "UNIVERSITY OF MANAGEMENT AND TECHNOLOGY",
        "location": "ARLINGTON, VA"
    },
    {
        "name": "TRAVISS TECHNICAL COLLEGE",
        "location": "LAKELAND, FL"
    },
    {
        "name": "SUNCOAST TECHNICAL COLLEGE",
        "location": "SARASOTA, FL"
    },
    {
        "name": "UNIVERSITY OF SAINT MARY OF THE LAKE",
        "location": "MUNDELEIN, IL"
    },
    {
        "name": "NEW MEXICO STATE UNIVERSITY",
        "location": "LAS CRUCES, NM"
    },
    {
        "name": "TORAH TEMIMAH TALMUDICAL SEMINARY",
        "location": "STATEN ISLAND, NY"
    },
    {
        "name": "SOUTHERN CAREERS INSTITUTE-SAN ANTONIO",
        "location": "SAN ANTONIO, TX"
    },
    {
        "name": "ROYALE COLLEGE OF BEAUTY AND BARBERING",
        "location": "TEMECULA, CA"
    },
    {
        "name": "PAUL MITCHELL THE SCHOOL-GASTONIA",
        "location": "GASTONIA, NC"
    },
    {
        "name": "PAUL MITCHELL THE SCHOOL-REXBURG",
        "location": "REXBURG, ID"
    },
    {
        "name": "CAPRI BEAUTY COLLEGE",
        "location": "NEW LENOX, IL"
    },
    {
        "name": "SHARP EDGEZ BARBER INSTITUTE",
        "location": "ROCHESTER, NY"
    },
    {
        "name": "UNIVERSITY OF NEW HAMPSHIRE-FRANKLIN PIERCE SCHOOL OF LAW",
        "location": "CONCORD, NH"
    },
    {
        "name": "WELLS COLLEGE",
        "location": "AURORA, NY"
    },
    {
        "name": "DEVRY UNIVERSITY-PENNSYLVANIA",
        "location": "FT. WASHINGTON, PA"
    },
    {
        "name": "NEW CONCEPT MASSAGE AND BEAUTY SCHOOL",
        "location": "MIAMI, FL"
    },
    {
        "name": "DELTA TECHNICAL COLLEGE",
        "location": "HORN LAKE, MS"
    },
    {
        "name": "ILLINOIS COLLEGE",
        "location": "JACKSONVILLE, IL"
    },
    {
        "name": "RABBINICAL COLLEGE OF AMERICA",
        "location": "MORRISTOWN, NJ"
    },
    {
        "name": "SUNY COLLEGE AT OSWEGO",
        "location": "OSWEGO, NY"
    },
    {
        "name": "NORTHCOAST MEDICAL TRAINING ACADEMY",
        "location": "KENT, OH"
    },
    {
        "name": "CANISIUS COLLEGE",
        "location": "BUFFALO, NY"
    },
    {
        "name": "PAUL MITCHELL THE SCHOOL-JACKSONVILLE",
        "location": "JACKSONVILLE, FL"
    },
    {
        "name": "GRANTHAM UNIVERSITY",
        "location": "LENEXA, KS"
    },
    {
        "name": "UNIVERSITY OF SOUTH FLORIDA-ST PETERSBURG",
        "location": "ST. PETERSBURG, FL"
    },
    {
        "name": "EMPIRE BEAUTY SCHOOL-LAUDERHILL",
        "location": "LAUDERHILL, FL"
    },
    {
        "name": "VIRGINIA HIGHLANDS COMMUNITY COLLEGE",
        "location": "ABINGDON, VA"
    },
    {
        "name": "ACADEMY OF HAIR DESIGN-JACKSON",
        "location": "JACKSON, MS"
    },
    {
        "name": "UNIVERSITY OF ALABAMA SYSTEM OFFICE",
        "location": "TUSCALOOSA, AL"
    },
    {
        "name": "ATHENS STATE UNIVERSITY",
        "location": "ATHENS, AL"
    },
    {
        "name": "GRINNELL COLLEGE",
        "location": "GRINNELL, IA"
    },
    {
        "name": "BERKELEY COLLEGE-WOODLAND PARK",
        "location": "WOODLAND PARK, NJ"
    },
    {
        "name": "FITCHBURG STATE UNIVERSITY",
        "location": "FITCHBURG, MA"
    },
    {
        "name": "EMPIRE BEAUTY SCHOOL-PARAMUS",
        "location": "PARAMUS, NJ"
    },
    {
        "name": "THE SALON PROFESSIONAL ACADEMY-NORTH LITTLE ROCK",
        "location": "SHERWOOD, AR"
    },
    {
        "name": "EVOLVE BEAUTY ACADEMY",
        "location": "WASHING, MO"
    },
    {
        "name": "TEXAS A&M UNIVERSITY-SYSTEM OFFICE",
        "location": "COLLEGE STATION, TX"
    },
    {
        "name": "BEN FRANKLIN CAREER CENTER",
        "location": "DUNBAR, WV"
    },
    {
        "name": "METROPOLITAN COMMUNITY COLLEGE AREA",
        "location": "OMAHA, NE"
    },
    {
        "name": "FAULKNER UNIVERSITY",
        "location": "MONTGOMERY, AL"
    },
    {
        "name": "SOUTH PUGET SOUND COMMUNITY COLLEGE",
        "location": "OLYMPIA, WA"
    },
    {
        "name": "GEORGIA SOUTHWESTERN STATE UNIVERSITY",
        "location": "AMERICUS, GA"
    },
    {
        "name": "PORTAGE LAKES CAREER CENTER",
        "location": "UNIONTOWN, OH"
    },
    {
        "name": "AMRIDGE UNIVERSITY",
        "location": "MONTGOMERY, AL"
    },
    {
        "name": "TRINITY LAW SCHOOL",
        "location": "SANTA ANA, CA"
    },
    {
        "name": "FULLER THEOLOGICAL SEMINARY",
        "location": "PASADENA, CA"
    },
    {
        "name": "GEMOLOGICAL INSTITUTE OF AMERICA-CARLSBAD",
        "location": "CARLSBAD, CA"
    },
    {
        "name": "ROGERS ACADEMY OF HAIR DESIGN",
        "location": "EVANSVILLE, IN"
    },
    {
        "name": "IOWA SCHOOL OF BEAUTY-OTTUMWA",
        "location": "OTTUMWA, IA"
    },
    {
        "name": "GETTYSBURG COLLEGE",
        "location": "GETTYSBURG, PA"
    },
    {
        "name": "GOLDEN WEST COLLEGE",
        "location": "HUNTINGTON BEACH, CA"
    },
    {
        "name": "OGLETHORPE UNIVERSITY",
        "location": "ATLANTA, GA"
    },
    {
        "name": "EASTERN SUFFOLK BOCES",
        "location": "BRENTWOOD, NY"
    },
    {
        "name": "FASHION INSTITUTE OF TECHNOLOGY",
        "location": "NEW YORK, NY"
    },
    {
        "name": "SALON SUCCESS ACADEMY-REDLANDS",
        "location": "REDLANDS, CA"
    },
    {
        "name": "ASBURY THEOLOGICAL SEMINARY",
        "location": "WILMORE, KY"
    },
    {
        "name": "CENTENARY COLLEGE OF LOUISIANA",
        "location": "SHREVEPORT, LA"
    },
    {
        "name": "MCNEESE STATE UNIVERSITY",
        "location": "LAKE CHARLES, LA"
    },
    {
        "name": "MILLSAPS COLLEGE",
        "location": "JACKSON, MS"
    },
    {
        "name": "FORTIS INSTITUTE-ERIE",
        "location": "ERIE, PA"
    },
    {
        "name": "BENNINGTON COLLEGE",
        "location": "BENNINGTON, VT"
    },
    {
        "name": "WHEELING UNIVERSITY",
        "location": "WHEELING, WV"
    },
    {
        "name": "FORTIS INSTITUTE-PENSACOLA",
        "location": "PENSACOLA, FL"
    },
    {
        "name": "PRESBYTERIAN THEOLOGICAL SEMINARY IN AMERICA",
        "location": "SANTA FE SPRINGS, CA"
    },
    {
        "name": "CALIFORNIA INSTITUTE OF ARTS & TECHNOLOGY",
        "location": "SAN DIEGO, CA"
    },
    {
        "name": "ESCONDIDO ADULT SCHOOL",
        "location": "ESCONDIDO, CA"
    },
    {
        "name": "LOS ANGELES PACIFIC COLLEGE",
        "location": "LOS ANGELES, CA"
    },
    {
        "name": "PMCA PITTSBURGH MULTICULTURAL COSMETOLOGY ACADEMY",
        "location": "PITTSBURGH, PA"
    },
    {
        "name": "ACCESS CAREERS-ISLANDIA",
        "location": "ISLANDIA, NY"
    },
    {
        "name": "JERSEY COLLEGE",
        "location": "JACKSONVILLE, FL"
    },
    {
        "name": "LIBERTY JUNIOR COLLEGE - DBA LIBERTY TECHNICAL INSTITUTE",
        "location": "ORLANDO, FL"
    },
    {
        "name": "PREMIER ACADEMY OF COSMETOLOGY",
        "location": "MCALESTER, OK"
    },
    {
        "name": "YESHIVA GEDOLA TIFERES YAAKOV YITZCHOK",
        "location": "LAKEWOOD, NJ"
    },
    {
        "name": "TUANA EUROPEAN BEAUTY ACADEMY",
        "location": "FORT COLLINS, CO"
    },
    {
        "name": "ARIZONA COLLEGE-TEMPE",
        "location": "TEMPE, AZ"
    },
    {
        "name": "ACADEMY OF INTERACTIVE ENTERTAINMENT",
        "location": "SEATTLE, WA"
    },
    {
        "name": "MICHIGAN CAREER AND TECHNICAL INSTITUTE",
        "location": "PLAINWELL, MI"
    },
    {
        "name": "THE AILEY SCHOOL",
        "location": "NEW YORK, NY"
    },
    {
        "name": "STRAYER UNIVERSITY-DELAWARE",
        "location": "WILMINGTON, DE"
    },
    {
        "name": "CARRINGTON COLLEGE-RENO",
        "location": "RENO, NV"
    },
    {
        "name": "ARIZONA COLLEGE OF NURSING-LAS VEGAS",
        "location": "LAS VEGAS, NV"
    },
    {
        "name": "CALIFORNIA JAZZ CONSERVATORY",
        "location": "BERKELEY, CA"
    },
    {
        "name": "ERIC FISHER ACADEMY",
        "location": "WICHITA, KS"
    },
    {
        "name": "EASTERN COLLEGE OF HEALTH VOCATIONS-NEW ORLEANS",
        "location": "NEW ORLEANS, LA"
    },
    {
        "name": "PALM BEACH STATE COLLEGE",
        "location": "LAKE WORTH, FL"
    },
    {
        "name": "UNIVERSITY OF IDAHO",
        "location": "MOSCOW, ID"
    },
    {
        "name": "AMERICAN INSTITUTE OF ALTERNATIVE MEDICINE",
        "location": "EAST BRUNSWICK, NJ"
    },
    {
        "name": "MIDWESTERN CAREER COLLEGE",
        "location": "CHICAGO, IL"
    },
    {
        "name": "CRAVEN COMMUNITY COLLEGE",
        "location": "NEW BERN, NC"
    },
    {
        "name": "SCHOOLCRAFT COLLEGE",
        "location": "LIVONIA, MI"
    },
    {
        "name": "BALTIMORE CITY COMMUNITY COLLEGE",
        "location": "BALTIMORE, MD"
    },
    {
        "name": "CLOYD'S BEAUTY SCHOOL 1 INC",
        "location": "WEST MONROE, LA"
    },
    {
        "name": "CHAMBERLAIN UNIVERSITY-VIRGINIA",
        "location": "VIENNA, VA"
    },
    {
        "name": "DIAMONDS COSMETOLOGY COLLEGE",
        "location": "SHERMAN, TX"
    },
    {
        "name": "REMINGTON COLLEGE-DALLAS CAMPUS",
        "location": "GARLAND, TX"
    },
    {
        "name": "SOUTHERN ILLINOIS UNIVERSITY-EDWARDSVILLE",
        "location": "EDWARDSVILLE, IL"
    },
    {
        "name": "SAE INSTITUTE OF TECHNOLOGY-MIAMI",
        "location": "NORTH MIAMI BEACH, FL"
    },
    {
        "name": "AUSTIN PEAY STATE UNIVERSITY",
        "location": "CLARKSVILLE, TN"
    },
    {
        "name": "COLORADO STATE UNIVERSITY-GLOBAL CAMPUS",
        "location": "AURORA, CO"
    },
    {
        "name": "HOPKINSVILLE COMMUNITY COLLEGE",
        "location": "HOPKINSVILLE, KY"
    },
    {
        "name": "ST. JOHN'S UNIVERSITY-NEW YORK",
        "location": "QUEENS, NY"
    },
    {
        "name": "GEISINGER COMMONWEALTH SCHOOL OF MEDICINE",
        "location": "SCRANTON, PA"
    },
    {
        "name": "BRYN ATHYN COLLEGE OF THE NEW CHURCH",
        "location": "BRYN ATHYN, PA"
    },
    {
        "name": "CAIRN UNIVERSITY-LANGHORNE",
        "location": "LANGHORNE, PA"
    },
    {
        "name": "VERITAS BAPTIST COLLEGE",
        "location": "GREENDALE, IN"
    },
    {
        "name": "MERRYFIELD SCHOOL OF PET GROOMING",
        "location": "OAKLAND PARK, FL"
    },
    {
        "name": "TECHNICAL COLLEGE OF THE LOWCOUNTRY",
        "location": "BEAUFORT, SC"
    },
    {
        "name": "MITCHELL TECHNICAL COLLEGE",
        "location": "MITCHELL, SD"
    },
    {
        "name": "ANGELO STATE UNIVERSITY",
        "location": "SAN ANGELO, TX"
    },
    {
        "name": "SAN JOAQUIN VALLEY COLLEGE-CENTRAL ADMINISTRATIVE OFFICE",
        "location": "VISALIA, CA"
    },
    {
        "name": "DETROIT BUSINESS INSTITUTE-DOWNRIVER",
        "location": "RIVERVIEW, MI"
    },
    {
        "name": "TRIDENT UNIVERSITY INTERNATIONAL",
        "location": "CYPRESS, CA"
    },
    {
        "name": "CLARK ATLANTA UNIVERSITY",
        "location": "ATLANTA, GA"
    },
    {
        "name": "CLOVER PARK TECHNICAL COLLEGE",
        "location": "LAKEWOOD, WA"
    },
    {
        "name": "ASBURY UNIVERSITY",
        "location": "WILMORE, KY"
    },
    {
        "name": "SAINT LEO UNIVERSITY",
        "location": "SAINT LEO, FL"
    },
    {
        "name": "BROWN COLLEGE OF COURT REPORTING",
        "location": "ATLANTA, GA"
    },
    {
        "name": "OAKLAND UNIVERSITY",
        "location": "ROCHESTER HILLS, MI"
    },
    {
        "name": "SAINT JOHNS UNIVERSITY",
        "location": "COLLEGEVILLE, MN"
    },
    {
        "name": "NEBRASKA INDIAN COMMUNITY COLLEGE",
        "location": "MACY, NE"
    },
    {
        "name": "SANDHILLS COMMUNITY COLLEGE",
        "location": "PINEHURST, NC"
    },
    {
        "name": "EASTERN WEST VIRGINIA COMMUNITY AND TECHNICAL COLLEGE",
        "location": "MOOREFIELD, WV"
    },
    {
        "name": "NATIONAL UNIVERSITY OF NATURAL MEDICINE",
        "location": "PORTLAND, OR"
    },
    {
        "name": "TRICOCI UNIVERSITY OF BEAUTY CULTURE LLC-BLOOMINGTON",
        "location": "BLOOMINGTON, IN"
    },
    {
        "name": "YESHIVAS NOVOMINSK",
        "location": "BROOKLYN, NY"
    },
    {
        "name": "CUNY BROOKLYN COLLEGE",
        "location": "BROOKLYN, NY"
    },
    {
        "name": "DEVRY COLLEGE OF NEW YORK",
        "location": "NEW YORK, NY"
    },
    {
        "name": "LINCOLN TECHNICAL INSTITUTE-MAHWAH",
        "location": "MAHWAH, NJ"
    },
    {
        "name": "PINNACLE INSTITUTE OF COSMETOLOGY",
        "location": "MOORESVILLE, NC"
    },
    {
        "name": "WESTERN SUFFOLK BOCES",
        "location": "NORTHPORT, NY"
    },
    {
        "name": "INDIANA STATE UNIVERSITY",
        "location": "TERRE HAUTE, IN"
    },
    {
        "name": "CALIFORNIA CAREER SCHOOL",
        "location": "ANAHEIM, CA"
    },
    {
        "name": "GRACE COLLEGE AND THEOLOGICAL SEMINARY",
        "location": "WINONA LAKE, IN"
    },
    {
        "name": "CENTRAL CHRISTIAN COLLEGE OF KANSAS",
        "location": "MCPHERSON, KS"
    },
    {
        "name": "NIAGARA UNIVERSITY",
        "location": "NIAGARA UNIVERSITY, NY"
    },
    {
        "name": "EXCELSIOR COLLEGE",
        "location": "ALBANY, NY"
    },
    {
        "name": "FORTIS COLLEGE-FOLEY",
        "location": "FOLEY, AL"
    },
    {
        "name": "ATELIER ESTHETIQUE INSTITUTE OF ESTHETICS",
        "location": "NEW YORK, NY"
    },
    {
        "name": "NASHVILLE STATE COMMUNITY COLLEGE",
        "location": "NASHVILLE, TN"
    },
    {
        "name": "SAINT MARTIN'S UNIVERSITY",
        "location": "LACEY, WA"
    },
    {
        "name": "WEST VIRGINIA JUNIOR COLLEGE-UNITED CAREER INSTITUTE",
        "location": "MOUNT BRADDOCK, PA"
    },
    {
        "name": "EMPIRE BEAUTY SCHOOL-THORNTON",
        "location": "THORNTON, CO"
    },
    {
        "name": "NORTHWESTERN UNIVERSITY",
        "location": "EVANSTON, IL"
    },
    {
        "name": "LA JAMES COLLEGE OF HAIRSTYLING AND COSMETOLOGY",
        "location": "MASON CITY, IA"
    },
    {
        "name": "CARRINGTON COLLEGE-PHOENIX NORTH",
        "location": "PHOENIX, AZ"
    },
    {
        "name": "ATLANTA TECHNICAL COLLEGE",
        "location": "ATLANTA, GA"
    },
    {
        "name": "FORT HAYS STATE UNIVERSITY",
        "location": "HAYS, KS"
    },
    {
        "name": "ALVERNIA UNIVERSITY",
        "location": "READING, PA"
    },
    {
        "name": "SAN DIEGO MESA COLLEGE",
        "location": "SAN DIEGO, CA"
    },
    {
        "name": "ARIZONA STATE UNIVERSITY-POLYTECHNIC",
        "location": "MESA, AZ"
    },
    {
        "name": "ACADEMY OF NATURAL THERAPY INC",
        "location": "GREELEY, CO"
    },
    {
        "name": "LONGY SCHOOL OF MUSIC OF BARD COLLEGE",
        "location": "CAMBRIDGE, MA"
    },
    {
        "name": "MAINE COLLEGE OF ART",
        "location": "PORTLAND, ME"
    },
    {
        "name": "HILLSDALE BEAUTY COLLEGE",
        "location": "HILLSDALE, MI"
    },
    {
        "name": "FERRIS STATE UNIVERSITY",
        "location": "BIG RAPIDS, MI"
    },
    {
        "name": "STATE TECHNICAL COLLEGE OF MISSOURI",
        "location": "LINN, MO"
    },
    {
        "name": "ALBANY LAW SCHOOL",
        "location": "ALBANY, NY"
    },
    {
        "name": "FLORIDA SOUTHERN COLLEGE",
        "location": "LAKELAND, FL"
    },
    {
        "name": "GUPTON JONES COLLEGE OF FUNERAL SERVICE",
        "location": "DECATUR, GA"
    },
    {
        "name": "CAPRI BEAUTY COLLEGE",
        "location": "OAK FOREST, IL"
    },
    {
        "name": "TAYLOR INSTITUTE OF COSMETOLOGY II",
        "location": "KNOX, IN"
    },
    {
        "name": "NEW BRUNSWICK THEOLOGICAL SEMINARY",
        "location": "NEW BRUNSWICK, NJ"
    },
    {
        "name": "SAINT PAUL SCHOOL OF THEOLOGY",
        "location": "LEAWOOD, KS"
    },
    {
        "name": "WILLIAM JEWELL COLLEGE",
        "location": "LIBERTY, MO"
    },
    {
        "name": "OKLAHOMA TECHNICAL COLLEGE",
        "location": "TULSA, OK"
    },
    {
        "name": "HARMONY HEALTH CARE INSTITUTE",
        "location": "MERRIMACK, NH"
    },
    {
        "name": "UNIVERSITY OF WISCONSIN-PARKSIDE FLEX",
        "location": "KENOSHA, WI"
    },
    {
        "name": "URBAN BARBER COLLEGE",
        "location": "CONCORD, CA"
    },
    {
        "name": "POWAY ADULT SCHOOL",
        "location": "POWAY, CA"
    },
    {
        "name": "CENTRAL PENNSYLVANIA DIESEL INSTITUTE",
        "location": "LIVERPOOL, PA"
    },
    {
        "name": "YOUNG AMERICANS COLLEGE OF THE PERFORMING ARTS",
        "location": "CORONA, CA"
    },
    {
        "name": "CAREERS INSTITUTE OF AMERICA",
        "location": "DALLAS, TX"
    },
    {
        "name": "HOUSTON BARBER SCHOOL",
        "location": "HOUSTON, TX"
    },
    {
        "name": "ARIZONA STATE UNIVERSITY - WASHINGTON CENTER",
        "location": "WASHINGTON, DC"
    },
    {
        "name": "ACADEMY COLLEGE",
        "location": "BLOOMINGTON, MN"
    },
    {
        "name": "STEVENSON UNIVERSITY",
        "location": "STEVENSON, MD"
    },
    {
        "name": "HUSSIAN COLLEGE-LOS ANGELES",
        "location": "LOS ANGELES, CA"
    },
    {
        "name": "UEI COLLEGE-BAKERSFIELD",
        "location": "BAKERSFIELD, CA"
    },
    {
        "name": "UNIVERSAL HEALTHCARE CAREERS COLLEGE",
        "location": "LOS ANGELES, CA"
    },
    {
        "name": "PAUL MITCHELL THE SCHOOL-SHERMAN OAKS",
        "location": "SHERMAN OAKS, CA"
    },
    {
        "name": "DOLCE LLC THE ACADEMY",
        "location": "WATERBURY, CT"
    },
    {
        "name": "UNIVERSAL TECHNICAL INSTITUTE-SOUTHERN CALIFORNIA",
        "location": "LONG BEACH, CA"
    },
    {
        "name": "UNIVERSITY OF ARIZONA-SIERRA VISTA",
        "location": "SIERRA VISTA, AZ"
    },
    {
        "name": "SOUTHERN REGIONAL TECHNICAL COLLEGE",
        "location": "THOMASVILLE, GA"
    },
    {
        "name": "CHAMBERLAIN UNIVERSITY-GEORGIA",
        "location": "ATLANTA, GA"
    },
    {
        "name": "NATIONAL PERSONAL TRAINING INSTITUTE-TAMPA",
        "location": "TAMPA, FL"
    },
    {
        "name": "MEDINA COUNTY CAREER CENTER",
        "location": "MEDINA, OH"
    },
    {
        "name": "HUNTINGTON UNIVERSITY OF HEALTH SCIENCES",
        "location": "KNOXVILLE, TN"
    },
    {
        "name": "GALVESTON COLLEGE",
        "location": "GALVESTON, TX"
    },
    {
        "name": "ROSS MEDICAL EDUCATION CENTER-MIDLAND",
        "location": "MIDLAND, MI"
    },
    {
        "name": "UNIVERSITY OF TULSA",
        "location": "TULSA, OK"
    },
    {
        "name": "CENTRAL PENN COLLEGE",
        "location": "SUMMERDALE, PA"
    },
    {
        "name": "DELAWARE COUNTY COMMUNITY COLLEGE",
        "location": "MEDIA, PA"
    },
    {
        "name": "COVENANT SCHOOL OF NURSING AND ALLIED HEALTH",
        "location": "LUBBOCK, TX"
    },
    {
        "name": "RABBINICAL SEMINARY OF AMERICA",
        "location": "FLUSHING, NY"
    },
    {
        "name": "ONONDAGA SCHOOL OF THERAPEUTIC MASSAGE-ROCHESTER",
        "location": "ROCHESTER, NY"
    },
    {
        "name": "PLATT COLLEGE-MILLER-MOTTE TECHNICAL-AUGUSTA",
        "location": "AUGUSTA, GA"
    },
    {
        "name": "SOUTHERN CALIFORNIA HEALTH INSTITUTE",
        "location": "NORTH HOLLYWOOD, CA"
    },
    {
        "name": "JOHNSON COLLEGE",
        "location": "SCRANTON, PA"
    },
    {
        "name": "TRINITY VALLEY COMMUNITY COLLEGE",
        "location": "ATHENS, TX"
    },
    {
        "name": "CALUMET COLLEGE OF SAINT JOSEPH",
        "location": "WHITING, IN"
    },
    {
        "name": "LA SALLE UNIVERSITY",
        "location": "PHILADELPHIA, PA"
    },
    {
        "name": "TENNESSEE COLLEGE OF APPLIED TECHNOLOGY-ONEIDA-HUNTSVILLE",
        "location": "HUNTSVILLE, TN"
    },
    {
        "name": "TEXAS A&M UNIVERSITY-KINGSVILLE",
        "location": "KINGSVILLE, TX"
    },
    {
        "name": "NORTHERN NEW MEXICO COLLEGE",
        "location": "ESPANOLA, NM"
    },
    {
        "name": "PIONEER PACIFIC COLLEGE",
        "location": "BEAVERTON, OR"
    },
    {
        "name": "UNIVERSITY OF HOUSTON-DOWNTOWN",
        "location": "HOUSTON, TX"
    },
    {
        "name": "COLUMBIA GORGE COMMUNITY COLLEGE",
        "location": "THE DALLES, OR"
    },
    {
        "name": "SACRED HEART SEMINARY AND SCHOOL OF THEOLOGY",
        "location": "FRANKLIN, WI"
    },
    {
        "name": "TENNESSEE COLLEGE OF APPLIED TECHNOLOGY-MCKENZIE",
        "location": "MCKENZIE, TN"
    },
    {
        "name": "ELECTRICAL TRAINING CENTER",
        "location": "COPIAGUE, NY"
    },
    {
        "name": "DORSEY SCHOOL OF BUSINESS-DEARBORN",
        "location": "DETROIT, MI"
    },
    {
        "name": "THE UNIVERSITY OF TEXAS PERMIAN BASIN",
        "location": "ODESSA, TX"
    },
    {
        "name": "UNIVERSITY OF MAINE",
        "location": "ORONO, ME"
    },
    {
        "name": "CLEVELAND INSTITUTE OF ART",
        "location": "CLEVELAND, OH"
    },
    {
        "name": "UNIVERSITY OF MARYLAND",
        "location": "COLLEGE PARK, MD"
    },
    {
        "name": "ASHFORD UNIVERSITY",
        "location": "SAN DIEGO, CA"
    },
    {
        "name": "UNIVERSITY OF DETROIT MERCY",
        "location": "DETROIT, MI"
    },
    {
        "name": "EMPIRE BEAUTY SCHOOL-TUCSON",
        "location": "TUCSON, AZ"
    },
    {
        "name": "UNIVERSITY OF CALIFORNIA-DAVIS",
        "location": "DAVIS, CA"
    },
    {
        "name": "EVERGREEN VALLEY COLLEGE",
        "location": "SAN JOSE, CA"
    },
    {
        "name": "HAMRICK SCHOOL",
        "location": "MEDINA, OH"
    },
    {
        "name": "STUDIO ACADEMY OF BEAUTY",
        "location": "CHANDLER, AZ"
    },
    {
        "name": "UPPER CAPE COD REGIONAL TECHNICAL SCHOOL",
        "location": "BOURNE, MA"
    },
    {
        "name": "EDEN THEOLOGICAL SEMINARY",
        "location": "WEBSTER GROVES, MO"
    },
    {
        "name": "LAKES REGION COMMUNITY COLLEGE",
        "location": "LACONIA, NH"
    },
    {
        "name": "ROCKINGHAM COMMUNITY COLLEGE",
        "location": "WENTWORTH, NC"
    },
    {
        "name": "ADVANCE SCIENCE INTERNATIONAL COLLEGE",
        "location": "MIAMI LAKES, FL"
    },
    {
        "name": "PLATT COLLEGE-STVT-CORPUS CHRISTI",
        "location": "CORPUS CHRISTI, TX"
    },
    {
        "name": "ULTRASOUND MEDICAL INSTITUTE",
        "location": "ROYAL PALM BEACH, FL"
    },
    {
        "name": "HIGHLIGHTS BEAUTY SCHOOLS",
        "location": "MOUNTLAKE TERRACE, WA"
    },
    {
        "name": "PALAU COMMUNITY COLLEGE",
        "location": "KOROR, PW"
    },
    {
        "name": "EMPIRE BEAUTY SCHOOL-HURSTBORNE",
        "location": "LOUISVILLE, KY"
    },
    {
        "name": "UNIVERSITY OF LOUISIANA-SYSTEM ADMINISTRATION",
        "location": "BATON ROUGE, LA"
    },
    {
        "name": "DEVRY UNIVERSITY-FLORIDA",
        "location": "MIRAMAR, FL"
    },
    {
        "name": "INTERNATIONAL TRAINING CAREERS",
        "location": "MIAMI, FL"
    },
    {
        "name": "INSTITUTO EDUCATIVO PREMIER",
        "location": "PONCE, PR"
    },
    {
        "name": "CHESTNUT HILL COLLEGE",
        "location": "PHILADELPHIA, PA"
    },
    {
        "name": "ACADEMY OF HAIR DESIGN-PEARL",
        "location": "PEARL, MS"
    },
    {
        "name": "COLLEGE OF OUR LADY OF THE ELMS",
        "location": "CHICOPEE, MA"
    },
    {
        "name": "SARAH LAWRENCE COLLEGE",
        "location": "BRONXVILLE, NY"
    },
    {
        "name": "LASSEN COMMUNITY COLLEGE",
        "location": "SUSANVILLE, CA"
    },
    {
        "name": "HOUSTON INTERNATIONAL COLLEGE CARDIOTECH ULTRASOUND SCHOOL",
        "location": "HOUSTON, TX"
    },
    {
        "name": "UNIVERSITY ACADEMY OF HAIR DESIGN",
        "location": "TUSCALOOSA, AL"
    },
    {
        "name": "JAMES RUMSEY TECHNICAL INSTITUTE",
        "location": "MARTINSBURG, WV"
    },
    {
        "name": "CALIFORNIA AERONAUTICAL UNIVERSITY",
        "location": "BAKERSFIELD, CA"
    },
    {
        "name": "AMERICAN CAREER COLLEGE-ANAHEIM",
        "location": "ANAHEIM, CA"
    },
    {
        "name": "INTERACTIVE COLLEGE OF TECHNOLOGY",
        "location": "HOUSTON, TX"
    },
    {
        "name": "ARIZONA SCHOOL OF ACUPUNCTURE AND ORIENTAL MEDICINE",
        "location": "TUCSON, AZ"
    },
    {
        "name": "SAINT EDWARD'S UNIVERSITY",
        "location": "AUSTIN, TX"
    },
    {
        "name": "CLARK COLLEGE",
        "location": "VANCOUVER, WA"
    },
    {
        "name": "UTAH STATE UNIVERSITY",
        "location": "LOGAN, UT"
    },
    {
        "name": "SAINT MICHAEL'S COLLEGE",
        "location": "COLCHESTER, VT"
    },
    {
        "name": "OGEECHEE TECHNICAL COLLEGE",
        "location": "STATESBORO, GA"
    },
    {
        "name": "PAUL MITCHELL THE SCHOOL-WICHITA",
        "location": "WICHITA, KS"
    },
    {
        "name": "CHAFFEY COLLEGE",
        "location": "RANCHO CUCAMONGA, CA"
    },
    {
        "name": "HOPE INTERNATIONAL UNIVERSITY",
        "location": "FULLERTON, CA"
    },
    {
        "name": "NORTH AMERICAN TRADE SCHOOLS",
        "location": "BALTIMORE, MD"
    },
    {
        "name": "MINERAL AREA COLLEGE",
        "location": "PARK HILLS, MO"
    },
    {
        "name": "MANCHESTER COMMUNITY COLLEGE",
        "location": "MANCHESTER, NH"
    },
    {
        "name": "LYLE'S COLLEGE OF BEAUTY",
        "location": "BAKERSFIELD, CA"
    },
    {
        "name": "LYLE'S COLLEGE OF BEAUTY",
        "location": "FRESNO, CA"
    },
    {
        "name": "SANTA CLARA UNIVERSITY",
        "location": "SANTA CLARA, CA"
    },
    {
        "name": "WEST HILLS COMMUNITY COLLEGE DISTRICT",
        "location": "COALINGA, CA"
    },
    {
        "name": "RIO HONDO COLLEGE",
        "location": "WHITTIER, CA"
    },
    {
        "name": "MIDWESTERN STATE UNIVERSITY",
        "location": "WICHITA FALLS, TX"
    },
    {
        "name": "MIDWEST COLLEGE OF ORIENTAL MEDICINE-RACINE",
        "location": "RACINE, WI"
    },
    {
        "name": "MARYMOUNT UNIVERSITY",
        "location": "ARLINGTON, VA"
    },
    {
        "name": "RANDALL UNIVERSITY",
        "location": "MOORE, OK"
    },
    {
        "name": "BETHEL SEMINARY-SAN DIEGO",
        "location": "SAN DIEGO, CA"
    },
    {
        "name": "AUTOMECA TECHNICAL COLLEGE-CAGUAS",
        "location": "CAGUAS, PR"
    },
    {
        "name": "CIRCLE IN THE SQUARE THEATRE SCHOOL",
        "location": "NEW YORK, NY"
    },
    {
        "name": "LENOIR-RHYNE UNIVERSITY",
        "location": "HICKORY, NC"
    },
    {
        "name": "SOUTHERN CALIFORNIA INSTITUTE OF ARCHITECTURE",
        "location": "LOS ANGELES, CA"
    },
    {
        "name": "NEW MEXICO INSTITUTE OF MINING AND TECHNOLOGY",
        "location": "SOCORRO, NM"
    },
    {
        "name": "SUNY CORNING COMMUNITY COLLEGE",
        "location": "CORNING, NY"
    },
    {
        "name": "AUGUSTANA UNIVERSITY",
        "location": "SIOUX FALLS, SD"
    },
    {
        "name": "MARTIN METHODIST COLLEGE",
        "location": "PULASKI, TN"
    },
    {
        "name": "ST OLAF COLLEGE",
        "location": "NORTHFIELD, MN"
    },
    {
        "name": "AMERICAN BEAUTY SCHOOLS",
        "location": "MIAMI, FL"
    },
    {
        "name": "AMERICAN INSTITUTE-SOMERSET",
        "location": "SOMERSET, NJ"
    },
    {
        "name": "STACEY JAMES INSTITUTE",
        "location": "PARKER, CO"
    },
    {
        "name": "EDP UNIVERSITY OF PUERTO RICO-HUMACAO",
        "location": "HUMACAO, PR"
    },
    {
        "name": "COLUMBIA COLLEGE - TAVARES PD",
        "location": "TAVARES, FL"
    },
    {
        "name": "APEX COLLEGE OF VETERINARY TECHNOLOGY",
        "location": "COLORADO SPRINGS, CO"
    },
    {
        "name": "MAKANA ESTHETICS WELLNESS ACADEMY",
        "location": "HONOLULU, HI"
    },
    {
        "name": "PORTER AND CHESTER INSTITUTE - BROCKTON",
        "location": "BROCKTON, MA"
    },
    {
        "name": "ZORGANICS INSTITUTE BEAUTY AND WELLNESS",
        "location": "BELLINGHAM, WA"
    },
    {
        "name": "CONGREGATION TALMIDEI MESIVTA TIFERES SHMIEL ALEKSANDER",
        "location": "BROOKLYN, NY"
    },
    {
        "name": "MONTANA BARBER INSTITUTE",
        "location": "EL PASO, TX"
    },
    {
        "name": "HILLSDALE BEAUTY COLLEGE",
        "location": "COLDWATER, MI"
    },
    {
        "name": "UNIVERSITY OF PUERTO RICO-HUMACAO",
        "location": "HUMACAO, PR"
    },
    {
        "name": "AVEDA INSTITUTE-MARYLAND",
        "location": "BEL AIR, MD"
    },
    {
        "name": "HIGH TECH HIGH GRADUATE SCHOOL OF EDUCATION",
        "location": "SAN DIEGO, CA"
    },
    {
        "name": "VH BARBER & STYLING ACADEMY",
        "location": "BOSSIER CITY, LA"
    },
    {
        "name": "BETHANY GLOBAL UNIVERSITY",
        "location": "BLOOMINGTON, MN"
    },
    {
        "name": "EVANS HAIRSTYLING COLLEGE-CEDAR CITY",
        "location": "CEDAR CITY, UT"
    },
    {
        "name": "ADULT AND COMMUNITY EDUCATION-HUDSON",
        "location": "COLUMBUS, OH"
    },
    {
        "name": "L'ESPRIT ACADEMY",
        "location": "CANTON, MI"
    },
    {
        "name": "CITY VISION UNIVERSITY",
        "location": "KANSAS CITY, MO"
    },
    {
        "name": "UNIVERSITY OF NEVADA-LAS VEGAS",
        "location": "LAS VEGAS, NV"
    },
    {
        "name": "ST PHILIP'S COLLEGE",
        "location": "SAN ANTONIO, TX"
    },
    {
        "name": "BLUFFTON UNIVERSITY",
        "location": "BLUFFTON, OH"
    },
    {
        "name": "BARSTOW COMMUNITY COLLEGE",
        "location": "BARSTOW, CA"
    },
    {
        "name": "INTERNATIONAL SCHOOL OF COSMETOLOGY",
        "location": "LOS ANGELES, CA"
    },
    {
        "name": "EDWARD VIA COLLEGE OF OSTEOPATHIC MEDICINE",
        "location": "BLACKSBURG, VA"
    },
    {
        "name": "FORTIS COLLEGE-COLUMBUS",
        "location": "WESTERVILLE, OH"
    },
    {
        "name": "CUESTA COLLEGE",
        "location": "SAN LUIS OBISPO, CA"
    },
    {
        "name": "COLORADO NORTHWESTERN COMMUNITY COLLEGE",
        "location": "RANGELY, CO"
    },
    {
        "name": "HASKELL INDIAN NATIONS UNIVERSITY",
        "location": "LAWRENCE, KS"
    },
    {
        "name": "SOUTHERN OKLAHOMA TECHNOLOGY CENTER",
        "location": "ARDMORE, OK"
    },
    {
        "name": "BOISE BARBER COLLEGE",
        "location": "BOISE, ID"
    },
    {
        "name": "PROVIDENCE COLLEGE",
        "location": "PROVIDENCE, RI"
    },
    {
        "name": "YTI CAREER INSTITUTE-YORK",
        "location": "YORK, PA"
    },
    {
        "name": "CHATTANOOGA STATE COMMUNITY COLLEGE",
        "location": "CHATTANOOGA, TN"
    },
    {
        "name": "DIVINE CROWN BARBER & BEAUTY ACADEMY",
        "location": "HARRISBURG, PA"
    },
    {
        "name": "XAVIER COLLEGE SCHOOL OF NURSING",
        "location": "STOCKTON, CA"
    },
    {
        "name": "CALIFORNIA POLYTECHNIC STATE UNIVERSITY-SAN LUIS OBISPO",
        "location": "SAN LUIS OBISPO, CA"
    },
    {
        "name": "THE CREATIVE CIRCUS",
        "location": "ATLANTA, GA"
    },
    {
        "name": "CANNELLA SCHOOL OF HAIR DESIGN-CHICAGO",
        "location": "CHICAGO, IL"
    },
    {
        "name": "KING UNIVERSITY",
        "location": "BRISTOL, TN"
    },
    {
        "name": "KEY COLLEGE",
        "location": "FORT LAUDERDALE, FL"
    },
    {
        "name": "AMERICAN INSTITUTE OF MASSAGE THERAPY",
        "location": "SANTA ANA, CA"
    },
    {
        "name": "THE JOHN MARSHALL LAW SCHOOL",
        "location": "CHICAGO, IL"
    },
    {
        "name": "APPALACHIAN BEAUTY SCHOOL",
        "location": "BELFRY, KY"
    },
    {
        "name": "WOR-WIC COMMUNITY COLLEGE",
        "location": "SALISBURY, MD"
    },
    {
        "name": "SAGINAW VALLEY STATE UNIVERSITY",
        "location": "UNIVERSITY CENTER, MI"
    },
    {
        "name": "CAPE GIRARDEAU CAREER AND TECHNOLOGY CENTER",
        "location": "CAPE GIRARDEAU, MO"
    },
    {
        "name": "LANCASTER SCHOOL OF COSMETOLOGY & THERAPEUTIC BODYWORK",
        "location": "LANCASTER, PA"
    },
    {
        "name": "NOUVELLE INSTITUTE",
        "location": "MIAMI, FL"
    },
    {
        "name": "D'MART INSTITUTE",
        "location": "BARRANQUITAS, PR"
    },
    {
        "name": "SOUTH LOUISIANA COMMUNITY COLLEGE",
        "location": "LAFAYETTE, LA"
    },
    {
        "name": "CATHOLIC THEOLOGICAL UNION AT CHICAGO",
        "location": "CHICAGO, IL"
    },
    {
        "name": "GREAT LAKES CHRISTIAN COLLEGE",
        "location": "LANSING, MI"
    },
    {
        "name": "ROSS MEDICAL EDUCATION CENTER-SAGINAW",
        "location": "SAGINAW, MI"
    },
    {
        "name": "BRITTANY BEAUTY ACADEMY",
        "location": "BRONX, NY"
    },
    {
        "name": "UNITED LUTHERAN SEMINARY",
        "location": "GETTYSBURG, PA"
    },
    {
        "name": "PLATT COLLEGE-BERKS TECHNICAL INSTITUTE",
        "location": "WYOMISSING, PA"
    },
    {
        "name": "KENNETH SHULER SCHOOL OF COSMETOLOGY-NORTH AUGUSTA",
        "location": "NORTH AUGUSTA, SC"
    },
    {
        "name": "MISSISSIPPI COLLEGE",
        "location": "CLINTON, MS"
    },
    {
        "name": "BRYANT & STRATTON COLLEGE-SYRACUSE NORTH",
        "location": "LIVERPOOL, NY"
    },
    {
        "name": "BROOKLINE COLLEGE-TEMPE",
        "location": "TEMPE, AZ"
    },
    {
        "name": "SCHILLER INTERNATIONAL UNIVERSITY",
        "location": "TAMPA, FL"
    },
    {
        "name": "ANTIOCH COLLEGE AG",
        "location": "HAMPTON, VA"
    },
    {
        "name": "VITERBO UNIVERSITY",
        "location": "LA CROSSE, WI"
    },
    {
        "name": "NORTHSHORE UNIVERSITY HEALTHSYSTEM SCHOOL OF NURSE ANESTHESIA",
        "location": "EVANSTON, IL"
    },
    {
        "name": "DIGIPEN INSTITUTE OF TECHNOLOGY",
        "location": "REDMOND, WA"
    },
    {
        "name": "ARTHUR'S BEAUTY COLLEGE",
        "location": "CONWAY, AR"
    },
    {
        "name": "EMPIRE BEAUTY SCHOOL-AURORA",
        "location": "AURORA, CO"
    },
    {
        "name": "NORTHEASTERN STATE UNIVERSITY",
        "location": "TAHLEQUAH, OK"
    },
    {
        "name": "HIGH PLAINS TECHNOLOGY CENTER",
        "location": "WOODWARD, OK"
    },
    {
        "name": "SOUTHWEST TEXAS JUNIOR COLLEGE",
        "location": "UVALDE, TX"
    },
    {
        "name": "RAPPAHANNOCK COMMUNITY COLLEGE",
        "location": "GLENNS, VA"
    },
    {
        "name": "TRICOCI UNIVERSITY OF BEAUTY CULTURE-GLENDALE HEIGHTS",
        "location": "GLENDALE HEIGHTS, IL"
    },
    {
        "name": "GWINNETT TECHNICAL COLLEGE",
        "location": "LAWRENCEVILLE, GA"
    },
    {
        "name": "TAYLOR UNIVERSITY",
        "location": "UPLAND, IN"
    },
    {
        "name": "VERMONT TECHNICAL COLLEGE",
        "location": "RANDOLPH, VT"
    },
    {
        "name": "SALEM UNIVERSITY",
        "location": "SALEM, WV"
    },
    {
        "name": "OGLE SCHOOL HAIR SKIN NAILS-DALLAS",
        "location": "DALLAS, TX"
    },
    {
        "name": "UNIVERSITY OF ARKANSAS AT PINE BLUFF",
        "location": "PINE BLUFF, AR"
    },
    {
        "name": "SHEPHERD UNIVERSITY",
        "location": "SHEPHERDSTOWN, WV"
    },
    {
        "name": "SOUTHWEST MISSISSIPPI COMMUNITY COLLEGE",
        "location": "SUMMIT, MS"
    },
    {
        "name": "KENRICK GLENNON SEMINARY",
        "location": "SAINT LOUIS, MO"
    },
    {
        "name": "MERRELL UNIVERSITY OF BEAUTY ARTS AND SCIENCE",
        "location": "JEFFERSON CITY, MO"
    },
    {
        "name": "THE MASTER'S UNIVERSITY AND SEMINARY",
        "location": "SANTA CLARITA, CA"
    },
    {
        "name": "UNIVERSITY OF SOUTHERN CALIFORNIA",
        "location": "LOS ANGELES, CA"
    },
    {
        "name": "MILES COLLEGE",
        "location": "FAIRFIELD, AL"
    },
    {
        "name": "CHATTAHOOCHEE VALLEY COMMUNITY COLLEGE",
        "location": "PHENIX CITY, AL"
    },
    {
        "name": "EASTERN ARIZONA COLLEGE",
        "location": "THATCHER, AZ"
    },
    {
        "name": "BAKERSFIELD COLLEGE",
        "location": "BAKERSFIELD, CA"
    },
    {
        "name": "EAST GEORGIA STATE COLLEGE",
        "location": "SWAINSBORO, GA"
    },
    {
        "name": "ROCK VALLEY COLLEGE",
        "location": "ROCKFORD, IL"
    },
    {
        "name": "ACADEMIA SERRANT INC",
        "location": "PONCE, PR"
    },
    {
        "name": "FINE MORTUARY COLLEGE",
        "location": "NORWOOD, MA"
    },
    {
        "name": "ACADEMY OF HAIR DESIGN-SPRINGFIELD",
        "location": "SPRINGFIELD, MO"
    },
    {
        "name": "SPA TECH INSTITUTE-WESTBORO",
        "location": "WESTBOROUGH, MA"
    },
    {
        "name": "FREDRICK AND CHARLES BEAUTY COLLEGE",
        "location": "EUREKA, CA"
    },
    {
        "name": "AMERICAN ACADEMY OF DRAMATIC ARTS-LOS ANGELES",
        "location": "LOS ANGELES, CA"
    },
    {
        "name": "DIESEL DRIVING ACADEMY-SHREVEPORT",
        "location": "SHREVEPORT, LA"
    },
    {
        "name": "ST. ANDREWS UNIVERSITY",
        "location": "LAURINBURG, NC"
    },
    {
        "name": "PACIFIC OAKS COLLEGE",
        "location": "PASADENA, CA"
    },
    {
        "name": "SAINT JOHNS RIVER STATE COLLEGE",
        "location": "PALATKA, FL"
    },
    {
        "name": "HAYS ACADEMY OF HAIR DESIGN",
        "location": "HAYS, KS"
    },
    {
        "name": "NEW MEXICO STATE UNIVERSITY-ALAMOGORDO",
        "location": "ALAMOGORDO, NM"
    },
    {
        "name": "ST LAWRENCE UNIVERSITY",
        "location": "CANTON, NY"
    },
    {
        "name": "ETI TECHNICAL COLLEGE",
        "location": "NILES, OH"
    },
    {
        "name": "COLLEGE OF HAIR DESIGN-EAST CAMPUS",
        "location": "LINCOLN, NE"
    },
    {
        "name": "JOHNNY MATTHEW'S HAIRDRESSING TRAINING SCHOOL",
        "location": "SALEM, OR"
    },
    {
        "name": "FOUR RIVERS CAREER CENTER",
        "location": "WASHINGTON, MO"
    },
    {
        "name": "ARKANSAS WELDING ACADEMY",
        "location": "JACKSONVILLE, AR"
    },
    {
        "name": "MAINE MEDIA COLLEGE",
        "location": "ROCKPORT, ME"
    },
    {
        "name": "MERYMA'AT BARBER COLLEGE",
        "location": "CLEVELAND, OH"
    },
    {
        "name": "NUC UNIVERSITY - IBC INSTITUTE - AGUADILLA",
        "location": "AGUADILLA, PR"
    },
    {
        "name": "WESTCHESTER SCHOOL FOR DENTAL ASSISTANT",
        "location": "ELMSFORD, NY"
    },
    {
        "name": "UNIVERSITY OF LYNCHBURG",
        "location": "LYNCHBURG, VA"
    },
    {
        "name": "THE UNIVERSITY OF TENNESSEE HEALTH SCIENCE CENTER",
        "location": "MEMPHIS, TN"
    },
    {
        "name": "CULINARY TECH CENTER",
        "location": "NEW YORK, NY"
    },
    {
        "name": "BREWTON-PARKER COLLEGE",
        "location": "MOUNT VERNON, GA"
    },
    {
        "name": "EMORY UNIVERSITY",
        "location": "ATLANTA, GA"
    },
    {
        "name": "FRANKLIN HAIR ACADEMY SCHOOL OF COSMETOLOGY",
        "location": "FRANKLIN, TN"
    },
    {
        "name": "BUTTE COUNTY REGIONAL OCCUPATIONAL PROGRAM",
        "location": "CHICO, CA"
    },
    {
        "name": "B-UNIQUE BEAUTY AND BARBER ACADEMY",
        "location": "GREENVILLE, SC"
    },
    {
        "name": "DALLAS COUNTY COMMUNITY COLLEGE DISTRICT",
        "location": "DALLAS, TX"
    },
    {
        "name": "MILAN INSTITUTE-BAKERSFIELD WEST",
        "location": "BAKERSFIELD, CA"
    },
    {
        "name": "PLATT COLLEGE-MILLER-MOTTE-FAYETTEVILLE",
        "location": "FAYETTEVILLE, NC"
    },
    {
        "name": "SAE INSTITUTE OF TECHNOLOGY-NEW YORK",
        "location": "NEW YORK, NY"
    },
    {
        "name": "WILLIAM JESSUP UNIVERSITY",
        "location": "ROCKLIN, CA"
    },
    {
        "name": "EMPIRE BEAUTY SCHOOL-DIXIE",
        "location": "LOUISVILLE, KY"
    },
    {
        "name": "AVEDA INSTITUTE-MINNEAPOLIS",
        "location": "MINNEAPOLIS, MN"
    },
    {
        "name": "COLUMBIA COLLEGE",
        "location": "CENTREVILLE, VA"
    },
    {
        "name": "READING HOSPITAL SCHOOL OF HEALTH SCIENCES",
        "location": "READING, PA"
    },
    {
        "name": "INDIANA UNIVERSITY OF PENNSYLVANIA",
        "location": "INDIANA, PA"
    },
    {
        "name": "UNIVERSITY OF CALIFORNIA-SAN FRANCISCO",
        "location": "SAN FRANCISCO, CA"
    },
    {
        "name": "ALL-STATE CAREER SCHOOL-PITTSBURGH",
        "location": "WEST MIFFLIN, PA"
    },
    {
        "name": "LURLEEN B WALLACE COMMUNITY COLLEGE",
        "location": "ANDALUSIA, AL"
    },
    {
        "name": "PIMA MEDICAL INSTITUTE-MESA",
        "location": "MESA, AZ"
    },
    {
        "name": "MIAMI AD SCHOOL-NEW YORK",
        "location": "ASTORIA, NY"
    },
    {
        "name": "MEDICAL ALLIED CAREER CENTER",
        "location": "SANTA FE SPRINGS, CA"
    },
    {
        "name": "RIO GRANDE VALLEY COLLEGE",
        "location": "PHARR, TX"
    },
    {
        "name": "ROSS MEDICAL EDUCATION CENTER-BOWLING GREEN",
        "location": "BOWLING GREEN, KY"
    },
    {
        "name": "MIDWEST TECHNICAL INSTITUTE-SPRINGFIELD",
        "location": "SPRINGFIELD, MO"
    },
    {
        "name": "CHRISTINE VALMY INTERNATIONAL SCHOOL FOR ESTHETICS, SKIN CARE & MAKEUP",
        "location": "NEW YORK, NY"
    },
    {
        "name": "WESTERN AREA CAREER & TECHNOLOGY CENTER",
        "location": "CANONSBURG, PA"
    },
    {
        "name": "TAYLOR ANDREWS ACADEMY OF HAIR DESIGN-PROVO",
        "location": "PROVO, UT"
    },
    {
        "name": "FOUNTAIN OF YOUTH ACADEMY OF COSMETOLOGY",
        "location": "MARS, PA"
    },
    {
        "name": "MIDWAY UNIVERSITY",
        "location": "MIDWAY, KY"
    },
    {
        "name": "EMPIRE BEAUTY SCHOOL-CHELTENHAM",
        "location": "WYNCOTE, PA"
    },
    {
        "name": "PAUL MITCHELL THE SCHOOL-ESANI",
        "location": "ROSWELL, GA"
    },
    {
        "name": "GROSSMONT COLLEGE",
        "location": "EL CAJON, CA"
    },
    {
        "name": "UNIVERSITY OF HAWAII-WEST OAHU",
        "location": "KAPOLEI, HI"
    },
    {
        "name": "JOHN F. KENNEDY UNIVERSITY",
        "location": "PLEASANT HILL, CA"
    },
    {
        "name": "ALVERNO COLLEGE",
        "location": "MILWAUKEE, WI"
    },
    {
        "name": "YESHIVA COLLEGE OF THE NATIONS CAPITAL",
        "location": "SILVER SPRING, MD"
    },
    {
        "name": "GONZAGA UNIVERSITY",
        "location": "SPOKANE, WA"
    },
    {
        "name": "UNIVERSAL CAREER SCHOOL",
        "location": "SWEETWATER, FL"
    },
    {
        "name": "FLORIDA STATE UNIVERSITY",
        "location": "TALLAHASSEE, FL"
    },
    {
        "name": "UNIVERSITY OF MAINE AT PRESQUE ISLE",
        "location": "PRESQUE ISLE, ME"
    },
    {
        "name": "BRANDEIS UNIVERSITY",
        "location": "WALTHAM, MA"
    },
    {
        "name": "SACRED HEART MAJOR SEMINARY",
        "location": "DETROIT, MI"
    },
    {
        "name": "CAPRI COSMETOLOGY LEARNING CENTERS",
        "location": "NANUET, NY"
    },
    {
        "name": "ANTIOCH UNIVERSITY-SANTA BARBARA",
        "location": "SANTA BARBARA, CA"
    },
    {
        "name": "CARIBBEAN UNIVERSITY-PONCE",
        "location": "PONCE, PR"
    },
    {
        "name": "MONTANA STATE UNIVERSITY-NORTHERN",
        "location": "HAVRE, MT"
    },
    {
        "name": "AMERICAN INTERCONTINENTAL UNIVERSITY-ATLANTA",
        "location": "ATLANTA, GA"
    },
    {
        "name": "AVEDA INSTITUTE-CHICAGO",
        "location": "CHICAGO, IL"
    },
    {
        "name": "PAUL MITCHELL THE SCHOOL-DENVER",
        "location": "LAKEWOOD, CO"
    },
    {
        "name": "EAST WEST COLLEGE OF THE HEALING ARTS",
        "location": "PORTLAND, OR"
    },
    {
        "name": "THOMAS MORE COLLEGE OF LIBERAL ARTS",
        "location": "MERRIMACK, NH"
    },
    {
        "name": "UNIVERSITY OF CHARLESTON",
        "location": "CHARLESTON, WV"
    },
    {
        "name": "SAN JOAQUIN VALLEY COLLEGE-LANCASTER",
        "location": "LANCASTER, CA"
    },
    {
        "name": "CADILLAC INSTITUTE OF COSMETOLOGY",
        "location": "CADILLAC, MI"
    },
    {
        "name": "BRANFORD HALL CAREER INSTITUTE-BRANFORD CAMPUS",
        "location": "BRANFORD, CT"
    },
    {
        "name": "FAITH BAPTIST BIBLE COLLEGE AND THEOLOGICAL SEMINARY",
        "location": "ANKENY, IA"
    },
    {
        "name": "COACHELLA VALLEY BEAUTY COLLEGE",
        "location": "LA QUINTA, CA"
    },
    {
        "name": "MESIVTA OF EASTERN PARKWAY-YESHIVA ZICHRON MEILECH",
        "location": "BROOKLYN, NY"
    },
    {
        "name": "SHARON REGIONAL SCHOOL OF NURSING",
        "location": "SHARON, PA"
    },
    {
        "name": "THE ART INSTITUTE OF HOUSTON",
        "location": "HOUSTON, TX"
    },
    {
        "name": "OXFORD ACADEMY OF HAIR DESIGN INC",
        "location": "SEYMOUR, CT"
    },
    {
        "name": "COCHRAN SCHOOL OF NURSING",
        "location": "YONKERS, NY"
    },
    {
        "name": "UNIVERSITY OF ARKANSAS SYSTEM OFFICE",
        "location": "LITTLE ROCK, AR"
    },
    {
        "name": "AMERICAN ACADEMY OF HEALTH AND BEAUTY",
        "location": "MANCHESTER, NH"
    },
    {
        "name": "SENTARA COLLEGE OF HEALTH SCIENCES",
        "location": "CHESAPEAKE, VA"
    },
    {
        "name": "MY LE'S BEAUTY COLLEGE",
        "location": "SACRAMENTO, CA"
    },
    {
        "name": "PENINSULA COLLEGE",
        "location": "PORT ANGELES, WA"
    },
    {
        "name": "COLORADO MOUNTAIN COLLEGE",
        "location": "GLENWOOD SPRINGS, CO"
    },
    {
        "name": "GREENVILLE UNIVERSITY",
        "location": "GREENVILLE, IL"
    },
    {
        "name": "PRINCE GEORGE'S COMMUNITY COLLEGE",
        "location": "LARGO, MD"
    },
    {
        "name": "SOUTHERN NAZARENE UNIVERSITY",
        "location": "BETHANY, OK"
    },
    {
        "name": "UNIVERSITY OF WISCONSIN-STEVENS POINT",
        "location": "STEVENS POINT, WI"
    },
    {
        "name": "STAUTZENBERGER COLLEGE-BRECKSVILLE",
        "location": "BRECKSVILLE, OH"
    },
    {
        "name": "BLUE CLIFF COLLEGE-FAYETTEVILLE",
        "location": "FAYETTEVILLE, AR"
    },
    {
        "name": "CALIFORNIA INSTITUTE OF INTEGRAL STUDIES",
        "location": "SAN FRANCISCO, CA"
    },
    {
        "name": "DOMINICAN SCHOOL OF PHILOSOPHY & THEOLOGY",
        "location": "BERKELEY, CA"
    },
    {
        "name": "PASADENA CITY COLLEGE",
        "location": "PASADENA, CA"
    },
    {
        "name": "WEST VIRGINIA SCHOOL OF OSTEOPATHIC MEDICINE",
        "location": "LEWISBURG, WV"
    },
    {
        "name": "IOWA SCHOOL OF BEAUTY-DES MOINES",
        "location": "DES MOINES, IA"
    },
    {
        "name": "PAT GOINS BENTON ROAD BEAUTY SCHOOL",
        "location": "BOSSIER CITY, LA"
    },
    {
        "name": "UNIVERSITY OF MASSACHUSETTS-DARTMOUTH",
        "location": "NORTH DARTMOUTH, MA"
    },
    {
        "name": "CASCADIA COLLEGE",
        "location": "BOTHELL, WA"
    },
    {
        "name": "BLADEN COMMUNITY COLLEGE",
        "location": "DUBLIN, NC"
    },
    {
        "name": "NEW COLLEGE OF FLORIDA",
        "location": "SARASOTA, FL"
    },
    {
        "name": "OHIO MEDIA SCHOOL-CINCINNATI",
        "location": "NORWOOD, OH"
    },
    {
        "name": "PUTNAM CAREER AND TECHNICAL CENTER",
        "location": "ELEANOR, WV"
    },
    {
        "name": "TEXAS HEALTH AND SCIENCE UNIVERSITY",
        "location": "AUSTIN, TX"
    },
    {
        "name": "PAUL MITCHELL THE SCHOOL-COLUMBUS",
        "location": "COLUMBUS, OH"
    },
    {
        "name": "SPA TECH INSTITUTE-PLYMOUTH",
        "location": "PLYMOUTH, MA"
    },
    {
        "name": "SAN JOAQUIN VALLEY COLLEGE-BAKERSFIELD",
        "location": "BAKERSFIELD, CA"
    },
    {
        "name": "CENTRAL COLLEGE",
        "location": "PELLA, IA"
    },
    {
        "name": "TAYLOR BUSINESS INSTITUTE",
        "location": "CHICAGO, IL"
    },
    {
        "name": "MICHIGAN TECHNOLOGICAL UNIVERSITY",
        "location": "HOUGHTON, MI"
    },
    {
        "name": "NEOSHO BEAUTY COLLEGE",
        "location": "NEOSHO, MO"
    },
    {
        "name": "COAHOMA COMMUNITY COLLEGE",
        "location": "CLARKSDALE, MS"
    },
    {
        "name": "MONTREAT COLLEGE",
        "location": "MONTREAT, NC"
    },
    {
        "name": "NAZARENE BIBLE COLLEGE",
        "location": "COLORADO SPRINGS, CO"
    },
    {
        "name": "CLARKE UNIVERSITY",
        "location": "DUBUQUE, IA"
    },
    {
        "name": "LAS VEGAS COLLEGE",
        "location": "HENDERSON, NV"
    },
    {
        "name": "COLUMBIA COLLEGE",
        "location": "COLUMBIA, SC"
    },
    {
        "name": "MACALESTER COLLEGE",
        "location": "SAINT PAUL, MN"
    },
    {
        "name": "ROWAN UNIVERSITY",
        "location": "GLASSBORO, NJ"
    },
    {
        "name": "MOUNT SAINT MARY COLLEGE",
        "location": "NEWBURGH, NY"
    },
    {
        "name": "TRANSITIONS CAREER INSTITUTE SCHOOL OF NURSING",
        "location": "FLUSHING, NY"
    },
    {
        "name": "UNIVERSITY OF ARKANSAS SYSTEM EVERSITY",
        "location": "LITTLE ROCK, AR"
    },
    {
        "name": "URSHAN COLLEGE",
        "location": "WENTZVILLE, MO"
    },
    {
        "name": "SAN DIEGO GLOBAL KNOWLEDGE UNIVERSITY",
        "location": "SAN DIEGO, CA"
    },
    {
        "name": "INDIANA WESLEYAN UNIVERSITY - MARION DESIGN CO.",
        "location": "MARION, IN"
    },
    {
        "name": "AVENUE FIVE INSTITUTE-SOUTH AUSTIN CAMPUS",
        "location": "AUSTIN, TX"
    },
    {
        "name": "GLASGOW CALEDONIAN NEW YORK COLLEGE",
        "location": "NEW YORK, NY"
    },
    {
        "name": "YESHIVA OHR YISRAEL",
        "location": "BROOKLYN, NY"
    },
    {
        "name": "CHAMBERLAIN UNIVERSITY-NEW JERSEY",
        "location": "NORTH BRUNSWICK, NJ"
    },
    {
        "name": "STRAYER UNIVERSITY-FLORIDA",
        "location": "TAMPA, FL"
    },
    {
        "name": "PROTEGE ACADEMY",
        "location": "MT. PLEASANT, MI"
    },
    {
        "name": "KISHWAUKEE COLLEGE",
        "location": "MALTA, IL"
    },
    {
        "name": "LEBANON COLLEGE OF COSMETOLOGY",
        "location": "LEBANON, MO"
    },
    {
        "name": "PAUL MITCHELL THE SCHOOL-CLEAR LAKE",
        "location": "WEBSTER, TX"
    },
    {
        "name": "LAMAR UNIVERSITY",
        "location": "BEAUMONT, TX"
    },
    {
        "name": "CHAMBERLAIN UNIVERSITY-NORTH CAROLINA",
        "location": "CHARLOTTE, NC"
    },
    {
        "name": "DEFIANCE COLLEGE",
        "location": "DEFIANCE, OH"
    },
    {
        "name": "PURDUE UNIVERSITY GLOBAL",
        "location": "WEST LAFAYETTE, IN"
    },
    {
        "name": "LAKELAND COMMUNITY COLLEGE",
        "location": "KIRTLAND, OH"
    },
    {
        "name": "ESSEX COUNTY COLLEGE",
        "location": "NEWARK, NJ"
    },
    {
        "name": "ROGERS STATE UNIVERSITY",
        "location": "CLAREMORE, OK"
    },
    {
        "name": "ORANGE TECHNICAL COLLEGE-ORLANDO CAMPUS",
        "location": "ORLANDO, FL"
    },
    {
        "name": "PINELLAS TECHNICAL COLLEGE-CLEARWATER",
        "location": "CLEARWATER, FL"
    },
    {
        "name": "UNIVERSITY OF NORTH GEORGIA",
        "location": "DAHLONEGA, GA"
    },
    {
        "name": "OMEGA GRADUATE SCHOOL",
        "location": "DAYTON, TN"
    },
    {
        "name": "VOORHEES COLLEGE",
        "location": "DENMARK, SC"
    },
    {
        "name": "CAREER AND TECHNOLOGY EDUCATION CENTERS OF LICKING COUNTY",
        "location": "NEWARK, OH"
    },
    {
        "name": "CALIFORNIA STATE UNIVERSITY-STANISLAUS",
        "location": "TURLOCK, CA"
    },
    {
        "name": "FIRELANDS REGIONAL MEDICAL CENTER SCHOOL OF NURSING",
        "location": "SANDUSKY, OH"
    },
    {
        "name": "TENNESSEE COLLEGE OF APPLIED TECHNOLOGY-PARIS",
        "location": "PARIS, TN"
    },
    {
        "name": "INDIANA WESLEYAN UNIVERSITY-MARION",
        "location": "MARION, IN"
    },
    {
        "name": "ADVANCE BEAUTY TECHS ACADEMY",
        "location": "SAN JACINTO, CA"
    },
    {
        "name": "JOHNSTON COMMUNITY COLLEGE",
        "location": "SMITHFIELD, NC"
    },
    {
        "name": "NORTHEAST OHIO MEDICAL UNIVERSITY",
        "location": "ROOTSTOWN, OH"
    },
    {
        "name": "LAWRENCE & COMPANY COLLEGE OF COSMETOLOGY",
        "location": "SELMA, CA"
    },
    {
        "name": "UNIVERSITY OF DELAWARE",
        "location": "NEWARK, DE"
    },
    {
        "name": "UNITY COLLEGE",
        "location": "UNITY, ME"
    },
    {
        "name": "APARICIO-LEVY TECHNICAL COLLEGE",
        "location": "TAMPA, FL"
    },
    {
        "name": "NORTHCENTRAL UNIVERSITY",
        "location": "LA JOLLA, CA"
    },
    {
        "name": "NEW YORK LAW SCHOOL",
        "location": "NEW YORK, NY"
    },
    {
        "name": "SOUTHERN ARKANSAS UNIVERSITY TECH",
        "location": "CAMDEN, AR"
    },
    {
        "name": "UNIVERSITY OF CALIFORNIA-HASTINGS COLLEGE OF LAW",
        "location": "SAN FRANCISCO, CA"
    },
    {
        "name": "HIGHLAND COMMUNITY COLLEGE",
        "location": "FREEPORT, IL"
    },
    {
        "name": "MEDIATECH INSTITUTE-DALLAS",
        "location": "DALLAS, TX"
    },
    {
        "name": "GEORGE STONE TECHNICAL COLLEGE",
        "location": "PENSACOLA, FL"
    },
    {
        "name": "CORTIVA INSTITUTE-FLORIDA",
        "location": "ST. PETERSBURG, FL"
    },
    {
        "name": "PORTER AND CHESTER INSTITUTE OF STRATFORD",
        "location": "STRATFORD, CT"
    },
    {
        "name": "ORANGE TECHNICAL COLLEGE-WINTER PARK CAMPUS",
        "location": "WINTER PARK, FL"
    },
    {
        "name": "MIAT COLLEGE OF TECHNOLOGY",
        "location": "CANTON, MI"
    },
    {
        "name": "SAINT LUKE'S COLLEGE OF HEALTH SCIENCES",
        "location": "KANSAS CITY, MO"
    },
    {
        "name": "SOUTHERN WESTCHESTER BOCES-PRACTICAL NURSING PROGRAM",
        "location": "HARRISON, NY"
    },
    {
        "name": "TEXAS TECH UNIVERSITY SYSTEM ADMINISTRATION",
        "location": "LUBBOCK, TX"
    },
    {
        "name": "LINCOLN TECHNICAL INSTITUTE-SHELTON",
        "location": "SHELTON, CT"
    },
    {
        "name": "PRESTIGE HEALTH & BEAUTY SCIENCES ACADEMY",
        "location": "NORTH MIAMI BEACH, FL"
    },
    {
        "name": "UPMC ST. MARGARET SCHOOL OF NURSING",
        "location": "PITTSBURGH, PA"
    },
    {
        "name": "PITTSBURGH INSTITUTE OF AERONAUTICS",
        "location": "WEST MIFFLIN, PA"
    },
    {
        "name": "EMPIRE BEAUTY SCHOOL-MALDEN",
        "location": "MALDEN, MA"
    },
    {
        "name": "HERKIMER COUNTY COMMUNITY COLLEGE",
        "location": "HERKIMER, NY"
    },
    {
        "name": "EMPIRE BEAUTY SCHOOL-VERNON HILLS",
        "location": "VERNON HILLS, IL"
    },
    {
        "name": "EMPIRE BEAUTY SCHOOL-STONE PARK",
        "location": "STONE PARK, IL"
    },
    {
        "name": "CHAMBERLAIN UNIVERSITY-MISSOURI",
        "location": "ST. LOUIS, MO"
    },
    {
        "name": "AMERICAN COLLEGE OF ACUPUNCTURE AND ORIENTAL MED",
        "location": "HOUSTON, TX"
    },
    {
        "name": "UNITYPOINT HEALTH-DES MOINES SCHOOL OF RADIOLOGIC TECHNOLOGY",
        "location": "DES MOINES, IA"
    },
    {
        "name": "MORGAN STATE UNIVERSITY",
        "location": "BALTIMORE, MD"
    },
    {
        "name": "MONMOUTH COLLEGE",
        "location": "MONMOUTH, IL"
    },
    {
        "name": "SUNY DOWNSTATE HEALTH SCIENCES UNIVERSITY",
        "location": "BROOKLYN, NY"
    },
    {
        "name": "BROOKLYN LAW SCHOOL",
        "location": "BROOKLYN, NY"
    },
    {
        "name": "CUNY NEW YORK CITY COLLEGE OF TECHNOLOGY",
        "location": "BROOKLYN, NY"
    },
    {
        "name": "LAUREL BUSINESS INSTITUTE",
        "location": "UNIONTOWN, PA"
    },
    {
        "name": "INSTITUTO TECNOLOGICO DE PUERTO RICO-RECINTO DE PONCE",
        "location": "PONCE, PR"
    },
    {
        "name": "NATIONAL TRACTOR TRAILER SCHOOL INC-BUFFALO",
        "location": "BUFFALO, NY"
    },
    {
        "name": "NORTHEAST ALABAMA COMMUNITY COLLEGE",
        "location": "RAINSVILLE, AL"
    },
    {
        "name": "GEISINGER-LEWISTOWN HOSPITAL SCHOOL OF NURSING",
        "location": "LEWISTOWN, PA"
    },
    {
        "name": "MARLBORO COLLEGE",
        "location": "MARLBORO, VT"
    },
    {
        "name": "TRICOCI UNIVERSITY OF BEAUTY CULTURE-INDIANAPOLIS",
        "location": "INDIANAPOLIS, IN"
    },
    {
        "name": "WEST COAST UNIVERSITY-LOS ANGELES",
        "location": "NORTH HOLLYWOOD, CA"
    },
    {
        "name": "PIERPONT COMMUNITY AND TECHNICAL COLLEGE",
        "location": "FAIRMONT, WV"
    },
    {
        "name": "INTERCOAST COLLEGES-WEST COVINA",
        "location": "W. COVINA, CA"
    },
    {
        "name": "UNIVERSITY OF MARY HARDIN-BAYLOR",
        "location": "BELTON, TX"
    },
    {
        "name": "LAKE MICHIGAN COLLEGE",
        "location": "BENTON HARBOR, MI"
    },
    {
        "name": "PACIFIC NORTHWEST UNIVERSITY OF HEALTH SCIENCES",
        "location": "YAKIMA, WA"
    },
    {
        "name": "WEST VIRGINIA UNIVERSITY",
        "location": "MORGANTOWN, WV"
    },
    {
        "name": "CLEVELAND CLINIC HEALTH SYSTEM-SCHOOL OF DIAGNOSTIC IMAGING",
        "location": "EUCLID, OH"
    },
    {
        "name": "NORTHEAST STATE COMMUNITY COLLEGE",
        "location": "BLOUNTVILLE, TN"
    },
    {
        "name": "UNIVERSITY OF AESTHETICS & COSMETOLOGY",
        "location": "CHICAGO, IL"
    },
    {
        "name": "AVERY JAMES SCHOOL OF COSMETOLOGY",
        "location": "LAKE CHARLES, LA"
    },
    {
        "name": "BERGEN COMMUNITY COLLEGE",
        "location": "PARAMUS, NJ"
    },
    {
        "name": "SOUTH MOUNTAIN COMMUNITY COLLEGE",
        "location": "PHOENIX, AZ"
    },
    {
        "name": "LOS ANGELES TRADE TECHNICAL COLLEGE",
        "location": "LOS ANGELES, CA"
    },
    {
        "name": "CITY COLLEGES OF CHICAGO-HAROLD WASHINGTON COLLEGE",
        "location": "CHICAGO, IL"
    },
    {
        "name": "WHEATON COLLEGE",
        "location": "NORTON, MA"
    },
    {
        "name": "UNIVERSITY OF INDIANAPOLIS",
        "location": "INDIANAPOLIS, IN"
    },
    {
        "name": "ELON UNIVERSITY",
        "location": "ELON, NC"
    },
    {
        "name": "EASTERN OKLAHOMA COUNTY TECHNOLOGY CENTER",
        "location": "CHOCTAW, OK"
    },
    {
        "name": "UNIVERSITY OF PHOENIX-HAWAII",
        "location": "KAPOLEI, HI"
    },
    {
        "name": "P C AGE-JERSEY CITY",
        "location": "JERSEY CITY, NJ"
    },
    {
        "name": "EMPEROR'S COLLEGE OF TRADITIONAL ORIENTAL MEDICINE",
        "location": "SANTA MONICA, CA"
    },
    {
        "name": "CONCORDE CAREER COLLEGE-NORTH HOLLYWOOD",
        "location": "NORTH HOLLYWOOD, CA"
    },
    {
        "name": "DAWN CAREER INSTITUTE LLC",
        "location": "NEWARK, DE"
    },
    {
        "name": "KENNEBEC VALLEY COMMUNITY COLLEGE",
        "location": "FAIRFIELD, ME"
    },
    {
        "name": "CONCORDIA COLLEGE AT MOORHEAD",
        "location": "MOORHEAD, MN"
    },
    {
        "name": "LEES-MCRAE COLLEGE",
        "location": "BANNER ELK, NC"
    },
    {
        "name": "VANCE-GRANVILLE COMMUNITY COLLEGE",
        "location": "HENDERSON, NC"
    },
    {
        "name": "SOFIA UNIVERSITY",
        "location": "PALO ALTO, CA"
    },
    {
        "name": "GORDON-CONWELL THEOLOGICAL SEMINARY",
        "location": "SOUTH HAMILTON, MA"
    },
    {
        "name": "EMERSON COLLEGE",
        "location": "BOSTON, MA"
    },
    {
        "name": "POLYTECHNIC UNIVERSITY OF PUERTO RICO-MIAMI",
        "location": "MIAMI, FL"
    },
    {
        "name": "NEO-ESTHETIQUE EUROPEAN INSTITUTE",
        "location": "SAN JUAN, PR"
    },
    {
        "name": "UR BEAUTY & BARBER ACADEMY",
        "location": "SEBRING, FL"
    },
    {
        "name": "NATIONAL AMERICAN UNIVERSITY-KILLEEN",
        "location": "KILLEEN, TX"
    },
    {
        "name": "YESHIVA GEDOLAH OF WOODLAKE VILLAGE",
        "location": "LAKEWOOD, NJ"
    },
    {
        "name": "WEST VIRGINIA JUNIOR COLLEGE-UNITED CAREER INSTITUTE",
        "location": "IRWIN, PA"
    },
    {
        "name": "EMPIRE BEAUTY SCHOOL-CHARLOTTE",
        "location": "CHARLOTTE, NC"
    },
    {
        "name": "BET MEDRASH GADOL ATERET TORAH",
        "location": "BROOKLYN, NY"
    },
    {
        "name": "THE FAB SCHOOL",
        "location": "RANCHO CUCAMONGA, CA"
    },
    {
        "name": "TEXAS A&M UNIVERSITY-SAN ANTONIO",
        "location": "SAN ANTONIO, TX"
    },
    {
        "name": "MIAMI DADE COLLEGE",
        "location": "MIAMI, FL"
    },
    {
        "name": "ALHAMBRA MEDICAL UNIVERSITY",
        "location": "ALHAMBRA, CA"
    },
    {
        "name": "CLOVIS COMMUNITY COLLEGE",
        "location": "FRESNO, CA"
    },
    {
        "name": "NORTHWEST STATE COMMUNITY COLLEGE",
        "location": "ARCHBOLD, OH"
    },
    {
        "name": "SOUTHERN WORCESTER COUNTY REGIONAL VOCATIONAL SCHOOL DISTRICT",
        "location": "CHARLTON, MA"
    },
    {
        "name": "LAUREL TECHNICAL INSTITUTE",
        "location": "HERMITAGE, PA"
    },
    {
        "name": "PAUL MITCHELL THE SCHOOL-DELAWARE",
        "location": "NEWARK, DE"
    },
    {
        "name": "GENESIS CAREER COLLEGE-COOKEVILLE",
        "location": "COOKEVILLE, TN"
    },
    {
        "name": "FIDM-FASHION INSTITUTE OF DESIGN & MERCHANDISING-LOS ANGELES",
        "location": "LOS ANGELES, CA"
    },
    {
        "name": "MILLERSVILLE UNIVERSITY OF PENNSYLVANIA",
        "location": "MILLERSVILLE, PA"
    },
    {
        "name": "AVIATION INSTITUTE OF MAINTENANCE-PHILADELPHIA",
        "location": "PHILADELPHIA, PA"
    },
    {
        "name": "NEW CASTLE SCHOOL OF TRADES",
        "location": "NEW CASTLE, PA"
    },
    {
        "name": "PLATT COLLEGE-MILLER-MOTTE TECHNICAL-CONWAY",
        "location": "CONWAY, SC"
    },
    {
        "name": "WALNUT HILL COLLEGE",
        "location": "PHILADELPHIA, PA"
    },
    {
        "name": "THE UNIVERSITY OF TEXAS HEALTH SCIENCE CENTER AT SAN ANTONIO",
        "location": "SAN ANTONIO, TX"
    },
    {
        "name": "MARIAN HEALTH CAREERS CENTER-LOS ANGELES CAMPUS",
        "location": "LOS ANGELES, CA"
    },
    {
        "name": "MOUNTAINLAND TECHNICAL COLLEGE",
        "location": "LEHI, UT"
    },
    {
        "name": "THE EVERGREEN STATE COLLEGE",
        "location": "OLYMPIA, WA"
    },
    {
        "name": "SOUTHERN WEST VIRGINIA COMMUNITY AND TECHNICAL COLLEGE",
        "location": "MOUNT GAY, WV"
    },
    {
        "name": "TOLEDO ACADEMY OF BEAUTY CULTURE-EAST",
        "location": "OREGON, OH"
    },
    {
        "name": "ARIZONA STATE UNIVERSITY",
        "location": "TEMPE, AZ"
    },
    {
        "name": "NORTH CENTRAL COLLEGE",
        "location": "NAPERVILLE, IL"
    },
    {
        "name": "GADSDEN STATE COMMUNITY COLLEGE",
        "location": "GADSDEN, AL"
    },
    {
        "name": "COLLEGE OF THE SEQUOIAS",
        "location": "VISALIA, CA"
    },
    {
        "name": "BAKER UNIVERSITY",
        "location": "BALDWIN CITY, KS"
    },
    {
        "name": "FLINT HILLS TECHNICAL COLLEGE",
        "location": "EMPORIA, KS"
    },
    {
        "name": "SAVANNAH TECHNICAL COLLEGE",
        "location": "SAVANNAH, GA"
    },
    {
        "name": "BENEDICTINE UNIVERSITY",
        "location": "LISLE, IL"
    },
    {
        "name": "WRIGHT STATE UNIVERSITY-LAKE CAMPUS",
        "location": "CELINA, OH"
    },
    {
        "name": "SAE INSTITUTE OF TECHNOLOGY-ATLANTA",
        "location": "ATLANTA, GA"
    },
    {
        "name": "NEW ENGLAND INSTITUTE OF TECHNOLOGY",
        "location": "EAST GREENWICH, RI"
    },
    {
        "name": "UNIVERSITY OF PENNSYLVANIA",
        "location": "PHILADELPHIA, PA"
    },
    {
        "name": "NICOLET AREA TECHNICAL COLLEGE",
        "location": "RHINELANDER, WI"
    },
    {
        "name": "JUPITER BEAUTY ACADEMY",
        "location": "BOSTON, MA"
    },
    {
        "name": "OHIO MEDIA SCHOOL-VALLEY VIEW",
        "location": "VALLEY VIEW, OH"
    },
    {
        "name": "ASHER COLLEGE",
        "location": "SACRAMENTO, CA"
    },
    {
        "name": "UNIVERSITY OF ARKANSAS-FORT SMITH",
        "location": "FORT SMITH, AR"
    },
    {
        "name": "CALIFORNIA HAIR DESIGN ACADEMY",
        "location": "LA MESA, CA"
    },
    {
        "name": "GEORGIA CAREER INSTITUTE",
        "location": "CONYERS, GA"
    },
    {
        "name": "COYNE COLLEGE",
        "location": "CHICAGO, IL"
    },
    {
        "name": "BENNETT CAREER INSTITUTE",
        "location": "WASHINGTON, DC"
    },
    {
        "name": "LAWRENCE UNIVERSITY",
        "location": "APPLETON, WI"
    },
    {
        "name": "EMPIRE BEAUTY SCHOOL-GREEN BAY",
        "location": "ASHWAUBENON, WI"
    },
    {
        "name": "SAN JOSE CITY COLLEGE",
        "location": "SAN JOSE, CA"
    },
    {
        "name": "SALISH KOOTENAI COLLEGE",
        "location": "PABLO, MT"
    },
    {
        "name": "SAINT PETER'S UNIVERSITY",
        "location": "JERSEY CITY, NJ"
    },
    {
        "name": "WILLIAM EDGE INSTITUTE",
        "location": "NEW BRAUNFELS, TX"
    },
    {
        "name": "THIEL COLLEGE",
        "location": "GREENVILLE, PA"
    },
    {
        "name": "INDIANA UNIVERSITY-SOUTH BEND",
        "location": "SOUTH BEND, IN"
    },
    {
        "name": "MAPLE SPRINGS BAPTIST BIBLE COLLEGE AND SEMINARY",
        "location": "CAPITOL HEIGHTS, MD"
    },
    {
        "name": "MORRIS COUNTY VOCATIONAL SCHOOL DISTRICT",
        "location": "DENVILLE, NJ"
    },
    {
        "name": "YESHIVA GEDOLAH IMREI YOSEF D'SPINKA",
        "location": "BROOKLYN, NY"
    },
    {
        "name": "TALMUDICAL SEMINARY OHOLEI TORAH",
        "location": "BROOKLYN, NY"
    },
    {
        "name": "CUNY KINGSBOROUGH COMMUNITY COLLEGE",
        "location": "BROOKLYN, NY"
    },
    {
        "name": "KEUNE ACADEMY BY 124",
        "location": "LAWRENCEVILLE, GA"
    },
    {
        "name": "WHITMAN COLLEGE",
        "location": "WALLA WALLA, WA"
    },
    {
        "name": "JACKSONVILLE UNIVERSITY",
        "location": "JACKSONVILLE, FL"
    },
    {
        "name": "EASTERN NAZARENE COLLEGE",
        "location": "QUINCY, MA"
    },
    {
        "name": "OCEAN CORPORATION",
        "location": "HOUSTON, TX"
    },
    {
        "name": "BELLIN COLLEGE",
        "location": "GREEN BAY, WI"
    },
    {
        "name": "MONTSERRAT COLLEGE OF ART",
        "location": "BEVERLY, MA"
    },
    {
        "name": "NHTI-CONCORD'S COMMUNITY COLLEGE",
        "location": "CONCORD, NH"
    },
    {
        "name": "DOMINICAN COLLEGE OF BLAUVELT",
        "location": "ORANGEBURG, NY"
    },
    {
        "name": "BINGHAMTON UNIVERSITY",
        "location": "VESTAL, NY"
    },
    {
        "name": "LINCOLN TECHNICAL INSTITUTE-MOORESTOWN",
        "location": "MOORESTOWN, NJ"
    },
    {
        "name": "WEST CHESTER UNIVERSITY OF PENNSYLVANIA",
        "location": "WEST CHESTER, PA"
    },
    {
        "name": "COLLEGE OF SAINT MARY",
        "location": "OMAHA, NE"
    },
    {
        "name": "BON SECOURS MEMORIAL COLLEGE OF NURSING",
        "location": "RICHMOND, VA"
    },
    {
        "name": "SHAWNEE BEAUTY COLLEGE",
        "location": "SHAWNEE, OK"
    },
    {
        "name": "PONTIFICAL COLLEGE JOSEPHINUM",
        "location": "COLUMBUS, OH"
    },
    {
        "name": "TRINITY UNIVERSITY",
        "location": "SAN ANTONIO, TX"
    },
    {
        "name": "XAVIER UNIVERSITY",
        "location": "CINCINNATI, OH"
    },
    {
        "name": "WOOD COUNTY SCHOOL OF PRACTICAL NURSING",
        "location": "PARKERSBURG, WV"
    },
    {
        "name": "AVALON SCHOOL OF COSMETOLOGY-AURORA",
        "location": "AURORA, CO"
    },
    {
        "name": "FORTIS INSTITUTE-SCRANTON",
        "location": "SCRANTON, PA"
    },
    {
        "name": "DAYTON SCHOOL OF MEDICAL MASSAGE",
        "location": "DAYTON, OH"
    },
    {
        "name": "SAN DIEGO CHRISTIAN COLLEGE",
        "location": "SANTEE, CA"
    },
    {
        "name": "FORT VALLEY STATE UNIVERSITY",
        "location": "FORT VALLEY, GA"
    },
    {
        "name": "SOUTH SUBURBAN COLLEGE",
        "location": "SOUTH HOLLAND, IL"
    },
    {
        "name": "INTERNATIONAL BUSINESS COLLEGE-FORT WAYNE",
        "location": "FORT WAYNE, IN"
    },
    {
        "name": "UNIVERSITY OF HOLY CROSS",
        "location": "NEW ORLEANS, LA"
    },
    {
        "name": "CREATIVE HAIR SCHOOL OF COSMETOLOGY",
        "location": "FLINT, MI"
    },
    {
        "name": "ASSOCIATED TECHNICAL COLLEGE-LOS ANGELES",
        "location": "LOS ANGELES, CA"
    },
    {
        "name": "CITRUS COLLEGE",
        "location": "GLENDORA, CA"
    },
    {
        "name": "OTERO JUNIOR COLLEGE",
        "location": "LA JUNTA, CO"
    },
    {
        "name": "VELVATEX COLLEGE OF BEAUTY CULTURE",
        "location": "LITTLE ROCK, AR"
    },
    {
        "name": "UNIVERSITY OF DENVER",
        "location": "DENVER, CO"
    },
    {
        "name": "HUNTINGTON UNIVERSITY",
        "location": "HUNTINGTON, IN"
    },
    {
        "name": "CAROLINA SCHOOL OF BROADCASTING",
        "location": "CHARLOTTE, NC"
    },
    {
        "name": "LA BELLE BEAUTY ACADEMY",
        "location": "MIAMI, FL"
    },
    {
        "name": "PRISM CAREER INSTITUTE-PHILADELPHIA",
        "location": "PHILADELPHIA, PA"
    },
    {
        "name": "INTERNATIONAL BAPTIST COLLEGE AND SEMINARY",
        "location": "CHANDLER, AZ"
    },
    {
        "name": "THE INTERNATIONAL CULINARY CENTER",
        "location": "NEW YORK, NY"
    },
    {
        "name": "EMPIRE BEAUTY SCHOOL-CONCORD",
        "location": "CONCORD, NC"
    },
    {
        "name": "INSTITUTE OF PRODUCTION AND RECORDING",
        "location": "MINNEAPOLIS, MN"
    },
    {
        "name": "CONCORDE CAREER COLLEGE-SAN DIEGO",
        "location": "SAN DIEGO, CA"
    },
    {
        "name": "MUSICIANS INSTITUTE",
        "location": "HOLLYWOOD, CA"
    },
    {
        "name": "MISSOURI STATE UNIVERSITY-WEST PLAINS",
        "location": "WEST PLAINS, MO"
    },
    {
        "name": "TRICOCI UNIVERSITY OF BEAUTY CULTURE-URBANA",
        "location": "URBANA, IL"
    },
    {
        "name": "SAINT MEINRAD SCHOOL OF THEOLOGY",
        "location": "ST. MEINRAD, IN"
    },
    {
        "name": "HOLY NAME MEDICAL CENTER-SISTER CLAIRE TYNAN SCHOOL OF NURSING",
        "location": "ENGLEWOOD CLIFFS, NJ"
    },
    {
        "name": "ALTOONA BEAUTY SCHOOL INC",
        "location": "ALTOONA, PA"
    },
    {
        "name": "ASSUMPTION UNIVERSITY",
        "location": "WORCESTER, MA"
    },
    {
        "name": "BRIGHTON INSTITUTE OF COSMETOLOGY",
        "location": "BRIGHTON, MI"
    },
    {
        "name": "CUTTING EDGE ACADEMY",
        "location": "SUCCASUNNA, NJ"
    },
    {
        "name": "UNLIMITED COSMETOLOGY SCHOOL",
        "location": "HATTIESBURG, MS"
    },
    {
        "name": "MONTANA BARBER INSTITUTE",
        "location": "EL PASO, TX"
    },
    {
        "name": "COLUMBIA COLLEGE - EASTFIELD PLEASANT GROVE",
        "location": "DALLAS, TX"
    },
    {
        "name": "COLUMBIA COLLEGE - FORT LEONARD WOOD 58TH TRANS BN",
        "location": "FORT LEONARD WOOD, MO"
    },
    {
        "name": "AMERICAN MEDICAL INSTITUTE INC.",
        "location": "HOUSTON, TX"
    },
    {
        "name": "ROYAL LEARNING INSTITUTE",
        "location": "NEW YORK, NY"
    },
    {
        "name": "PREMIERE INTERNATIONAL COLLEGE",
        "location": "FORT MYERS, FL"
    },
    {
        "name": "YESHIVA GEDOLAH OF WOODLAKE VILLAGE",
        "location": "LAKEWOOD, NJ"
    },
    {
        "name": "HOUSTON BARBER SCHOOL",
        "location": "HOUSTON, TX"
    },
    {
        "name": "ARIZONA COLLEGE-DALLAS",
        "location": "DALLAS, TX"
    },
    {
        "name": "URSHAN COLLEGE",
        "location": "WENTZVILLE, MO"
    },
    {
        "name": "YESHIVA YESODA HATORAH VETZ CHAIM",
        "location": "BROOKLYN, NY"
    },
    {
        "name": "AVIATION INSTITUTE OF MAINTENANCE-CHARLOTTE",
        "location": "CHARLOTTE, NC"
    },
    {
        "name": "BAKER COLLEGE - FLINT",
        "location": "FLINT, MI"
    },
    {
        "name": "TEXAS STATE TECHNICAL COLLEGE",
        "location": "WACO, TX"
    },
    {
        "name": "UNITED EDUCATION INSTITUTE-CHULA VISTA",
        "location": "CHULA VISTA, CA"
    },
    {
        "name": "LABARBERIA INSTITUTE OF HAIR",
        "location": "MAYFIELD HTS, OH"
    },
    {
        "name": "PRESIDIO GRADUATE SCHOOL",
        "location": "SAN FRANCISCO, CA"
    },
    {
        "name": "PROFESSIONAL ACADEMY OF COSMETOLOGY",
        "location": "NORRISTOWN, PA"
    },
    {
        "name": "MONROE COUNTY COMMUNITY COLLEGE",
        "location": "MONROE, MI"
    },
    {
        "name": "INTERNATIONAL DIVING INSTITUTE",
        "location": "NORTH CHARLESTON, SC"
    },
    {
        "name": "SPARTAN COLLEGE OF AERONAUTICS AND TECHNOLOGY",
        "location": "RIVERSIDE, CA"
    },
    {
        "name": "FOUR COUNTY CAREER CENTER",
        "location": "ARCHBOLD, OH"
    },
    {
        "name": "TRI-RIVERS CAREER CENTER",
        "location": "MARION, OH"
    },
    {
        "name": "SALISBURY UNIVERSITY",
        "location": "SALISBURY, MD"
    },
    {
        "name": "PENNSYLVANIA STATE UNIVERSITY-PENN STATE BRANDYWINE",
        "location": "MEDIA, PA"
    },
    {
        "name": "JUNG TAO SCHOOL OF CLASSICAL CHINESE MEDICINE",
        "location": "SUGAR GROVE, NC"
    },
    {
        "name": "UNIVERSITY OF SOUTH CAROLINA-COLUMBIA",
        "location": "COLUMBIA, SC"
    },
    {
        "name": "RAPHAEL'S SCHOOL OF BEAUTY CULTURE INC-BOARDMAN",
        "location": "BOARDMAN, OH"
    },
    {
        "name": "MT SAN JACINTO COMMUNITY COLLEGE DISTRICT",
        "location": "SAN JACINTO, CA"
    },
    {
        "name": "WHEATON COLLEGE",
        "location": "WHEATON, IL"
    },
    {
        "name": "LEE COLLEGE",
        "location": "BAYTOWN, TX"
    },
    {
        "name": "ROANOKE COLLEGE",
        "location": "SALEM, VA"
    },
    {
        "name": "ELEVATE SALON INSTITUTE-WESTMINSTER",
        "location": "WESTMINSTER, CO"
    },
    {
        "name": "CARTHAGE R9 SCHOOL DISTRICT-CARTHAGE TECHNICAL CENTER",
        "location": "CARTHAGE, MO"
    },
    {
        "name": "THE CHRYSM INSTITUTE OF ESTHETICS",
        "location": "VIRGINIA BEACH, VA"
    },
    {
        "name": "ROSS MEDICAL EDUCATION CENTER-CHARLESTON",
        "location": "CHARLESTON, WV"
    },
    {
        "name": "WESTERN NEBRASKA COMMUNITY COLLEGE",
        "location": "SCOTTSBLUFF, NE"
    },
    {
        "name": "SHAWNEE STATE UNIVERSITY",
        "location": "PORTSMOUTH, OH"
    },
    {
        "name": "ARROJO COSMETOLOGY SCHOOL",
        "location": "NEW YORK, NY"
    },
    {
        "name": "JB'S HAIR DESIGN AND BARBER COLLEGE",
        "location": "OKLAHOMA CITY, OK"
    },
    {
        "name": "TENNESSEE COLLEGE OF APPLIED TECHNOLOGY-PULASKI",
        "location": "PULASKI, TN"
    },
    {
        "name": "TYLER JUNIOR COLLEGE",
        "location": "TYLER, TX"
    },
    {
        "name": "LEE PROFESSIONAL INSTITUTE",
        "location": "FORT MYERS, FL"
    },
    {
        "name": "ROSS MEDICAL EDUCATION CENTER-OWENSBORO",
        "location": "OWENSBORO, KY"
    },
    {
        "name": "AVEDA INSTITUTE-PHOENIX",
        "location": "TEMPE, AZ"
    },
    {
        "name": "WEST KENTUCKY COMMUNITY AND TECHNICAL COLLEGE",
        "location": "PADUCAH, KY"
    },
    {
        "name": "MACOMB COMMUNITY COLLEGE",
        "location": "WARREN, MI"
    },
    {
        "name": "PLATT COLLEGE-ARIZONA AUTOMOTIVE INSTITUTE ARIZONA",
        "location": "GLENDALE, AZ"
    },
    {
        "name": "ARKANSAS STATE UNIVERSITY MID-SOUTH",
        "location": "WEST MEMPHIS, AR"
    },
    {
        "name": "UNIVERSITY OF ARKANSAS COMMUNITY COLLEGE-MORRILTON",
        "location": "MORRILTON, AR"
    },
    {
        "name": "AMERICAN ACADEMY OF ART",
        "location": "CHICAGO, IL"
    },
    {
        "name": "ALBANY BOCES-ADULT PRACTICAL NURSING PROGRAM",
        "location": "ALBANY, NY"
    },
    {
        "name": "WEST MICHIGAN COLLEGE OF BARBERING AND BEAUTY",
        "location": "KALAMAZOO, MI"
    },
    {
        "name": "BEVILL STATE COMMUNITY COLLEGE",
        "location": "JASPER, AL"
    },
    {
        "name": "UNIVERSITY OF JAMESTOWN",
        "location": "JAMESTOWN, ND"
    },
    {
        "name": "CHARLOTTE TECHNICAL COLLEGE",
        "location": "PORT CHARLOTTE, FL"
    },
    {
        "name": "MAYSVILLE COMMUNITY AND TECHNICAL COLLEGE",
        "location": "MAYSVILLE, KY"
    },
    {
        "name": "ADVANCED TECHNOLOGY INSTITUTE",
        "location": "VIRGINIA BEACH, VA"
    },
    {
        "name": "ROSS MEDICAL EDUCATION CENTER-MADISON HEIGHTS",
        "location": "MADISON HEIGHTS, MI"
    },
    {
        "name": "CHIEF DULL KNIFE COLLEGE",
        "location": "LAME DEER, MT"
    },
    {
        "name": "ROWAN-CABARRUS COMMUNITY COLLEGE",
        "location": "SALISBURY, NC"
    },
    {
        "name": "GREEN COUNTRY TECHNOLOGY CENTER",
        "location": "OKMULGEE, OK"
    },
    {
        "name": "ROSEDALE BIBLE COLLEGE",
        "location": "IRWIN, OH"
    },
    {
        "name": "EASTERN SCHOOL OF ACUPUNCTURE AND TRADITIONAL MEDICINE",
        "location": "BLOOMFIELD, NJ"
    },
    {
        "name": "STRAYER UNIVERSITY-VIRGINIA",
        "location": "ARLINGTON, VA"
    },
    {
        "name": "BAKKE GRADUATE UNIVERSITY",
        "location": "DALLAS, TX"
    },
    {
        "name": "PAUL MITCHELL THE SCHOOL-ARLINGTON",
        "location": "ARLINGTON, TX"
    },
    {
        "name": "STONE CHILD COLLEGE",
        "location": "BOX ELDER, MT"
    },
    {
        "name": "SOUTHERN TECHNICAL COLLEGE",
        "location": "FORT MYERS, FL"
    },
    {
        "name": "QUALITY TECHNICAL AND BEAUTY COLLEGE",
        "location": "BAYAMON, PR"
    },
    {
        "name": "CAROLINAS COLLEGE OF HEALTH SCIENCES",
        "location": "CHARLOTTE, NC"
    },
    {
        "name": "HARRIS SCHOOL OF BUSINESS-WILMINGTON CAMPUS",
        "location": "WILMINGTON, DE"
    },
    {
        "name": "NASCAR TECHNICAL INSTITUTE",
        "location": "MOORESVILLE, NC"
    },
    {
        "name": "TAYLOR COLLEGE",
        "location": "BELLEVIEW, FL"
    },
    {
        "name": "RASMUSSEN UNIVERSITY-MINNESOTA",
        "location": "ST. CLOUD, MN"
    },
    {
        "name": "ST FRANCIS COLLEGE",
        "location": "BROOKLYN HEIGHTS, NY"
    },
    {
        "name": "NATIONAL TRACTOR TRAILER SCHOOL INC-LIVERPOOL",
        "location": "LIVERPOOL, NY"
    },
    {
        "name": "ROCKLAND COUNTY BOCES-PRACTICAL NURSING PROGRAM",
        "location": "WEST NYACK, NY"
    },
    {
        "name": "ERWIN TECHNICAL COLLEGE",
        "location": "TAMPA, FL"
    },
    {
        "name": "NORTHWEST KANSAS TECHNICAL COLLEGE",
        "location": "GOODLAND, KS"
    },
    {
        "name": "EMPIRE BEAUTY SCHOOL-BOSTON",
        "location": "BOSTON, MA"
    },
    {
        "name": "MINNESOTA STATE UNIVERSITY-MANKATO",
        "location": "MANKATO, MN"
    },
    {
        "name": "UNIVERSITY OF NEW MEXICO",
        "location": "ALBUQUERQUE, NM"
    },
    {
        "name": "SCHENECTADY COUNTY COMMUNITY COLLEGE",
        "location": "SCHENECTADY, NY"
    },
    {
        "name": "TALMUDICAL INSTITUTE OF UPSTATE NEW YORK",
        "location": "ROCHESTER, NY"
    },
    {
        "name": "YESHIVATH ZICHRON MOSHE",
        "location": "SOUTH FALLSBURG, NY"
    },
    {
        "name": "CONCORDIA UNIVERSITY-WISCONSIN",
        "location": "MEQUON, WI"
    },
    {
        "name": "WILLIAMS BAPTIST UNIVERSITY",
        "location": "WALNUT RIDGE, AR"
    },
    {
        "name": "CENTRA COLLEGE",
        "location": "LYNCHBURG, VA"
    },
    {
        "name": "MOODY BIBLE INSTITUTE",
        "location": "CHICAGO, IL"
    },
    {
        "name": "THE SALON PROFESSIONAL ACADEMY-ST CHARLES",
        "location": "ST. CHARLES, MO"
    },
    {
        "name": "SIMMONS COLLEGE OF KENTUCKY",
        "location": "LOUISVILLE, KY"
    },
    {
        "name": "WILLIAM & MARY",
        "location": "WILLIAMSBURG, VA"
    },
    {
        "name": "BROWN AVEDA INSTITUTE-MENTOR",
        "location": "MENTOR, OH"
    },
    {
        "name": "INTERCOAST COLLEGES-RIVERSIDE",
        "location": "RIVERSIDE, CA"
    },
    {
        "name": "UNIVERSITY OF SAINT FRANCIS-FORT WAYNE",
        "location": "FORT WAYNE, IN"
    },
    {
        "name": "OHIO UNIVERSITY",
        "location": "ATHENS, OH"
    },
    {
        "name": "HOLY FAMILY UNIVERSITY",
        "location": "PHILADELPHIA, PA"
    },
    {
        "name": "POLARIS CAREER CENTER",
        "location": "MIDDLEBURG HEIGHTS, OH"
    },
    {
        "name": "CHURCH DIVINITY SCHOOL OF THE PACIFIC",
        "location": "BERKELEY, CA"
    },
    {
        "name": "CONTRA COSTA COLLEGE",
        "location": "SAN PABLO, CA"
    },
    {
        "name": "UNITED EDUCATION INSTITUTE-HUNTINGTON PARK CAMPUS",
        "location": "HUNTINGTON PARK, CA"
    },
    {
        "name": "LEWIS-CLARK STATE COLLEGE",
        "location": "LEWISTON, ID"
    },
    {
        "name": "VANGUARD UNIVERSITY OF SOUTHERN CALIFORNIA",
        "location": "COSTA MESA, CA"
    },
    {
        "name": "GEORGE C WALLACE STATE COMMUNITY COLLEGE-SELMA",
        "location": "SELMA, AL"
    },
    {
        "name": "PUEBLO COMMUNITY COLLEGE",
        "location": "PUEBLO, CO"
    },
    {
        "name": "PIKE-LINCOLN TECHNICAL CENTER",
        "location": "EOLIA, MO"
    },
    {
        "name": "DAYTONA COLLEGE",
        "location": "ORMOND BEACH, FL"
    },
    {
        "name": "FLORIDA ACADEMY OF HEALTH & BEAUTY",
        "location": "OAKLAND PARK, FL"
    },
    {
        "name": "HELENE FULD COLLEGE OF NURSING",
        "location": "NEW YORK, NY"
    },
    {
        "name": "MANHATTAN SCHOOL OF MUSIC",
        "location": "NEW YORK, NY"
    },
    {
        "name": "AMERICAN COLLEGE OF EDUCATION",
        "location": "INDIANAPOLIS, IN"
    },
    {
        "name": "PAUL MITCHELL THE SCHOOL-CLEVELAND",
        "location": "TWINSBURG, OH"
    },
    {
        "name": "DOWNEY ADULT SCHOOL",
        "location": "DOWNEY, CA"
    },
    {
        "name": "COLLEGE OF BUSINESS AND TECHNOLOGY",
        "location": "MIAMI, FL"
    },
    {
        "name": "ADRIAN'S COLLEGE OF BEAUTY TURLOCK",
        "location": "TURLOCK, CA"
    },
    {
        "name": "DELAWARE STATE UNIVERSITY",
        "location": "DOVER, DE"
    },
    {
        "name": "DELAWARE TECHNICAL COMMUNITY COLLEGE-CENTRAL OFFICE",
        "location": "DOVER, DE"
    },
    {
        "name": "HOBE SOUND BIBLE COLLEGE",
        "location": "HOBE SOUND, FL"
    },
    {
        "name": "CONCORDIA THEOLOGICAL SEMINARY",
        "location": "FORT WAYNE, IN"
    },
    {
        "name": "FINLANDIA UNIVERSITY",
        "location": "HANCOCK, MI"
    },
    {
        "name": "NORTHWOOD UNIVERSITY",
        "location": "MIDLAND, MI"
    },
    {
        "name": "DAVID PRESSLEY SCHOOL OF COSMETOLOGY",
        "location": "ROYAL OAK, MI"
    },
    {
        "name": "SAINT CLOUD STATE UNIVERSITY",
        "location": "SAINT CLOUD, MN"
    },
    {
        "name": "MISSISSIPPI UNIVERSITY FOR WOMEN",
        "location": "COLUMBUS, MS"
    },
    {
        "name": "BEAUFORT COUNTY COMMUNITY COLLEGE",
        "location": "WASHINGTON, NC"
    },
    {
        "name": "NATIONAL AVIATION ACADEMY OF TAMPA BAY",
        "location": "CLEARWATER, FL"
    },
    {
        "name": "LA JAMES INTERNATIONAL COLLEGE-CEDAR FALLS",
        "location": "CEDAR FALLS, IA"
    },
    {
        "name": "MISSIO THEOLOGICAL SEMINARY",
        "location": "PHILADELPHIA, PA"
    },
    {
        "name": "ALLIED HEALTH CAREERS INSTITUTE",
        "location": "MURFREESBORO, TN"
    },
    {
        "name": "PLATT COLLEGE-ANAHEIM",
        "location": "ANAHEIM, CA"
    },
    {
        "name": "PRINCESS INSTITUTE OF BEAUTY",
        "location": "REEDLEY, CA"
    },
    {
        "name": "UNIVERSITY OF MOBILE",
        "location": "MOBILE, AL"
    },
    {
        "name": "WIDENER UNIVERSITY",
        "location": "CHESTER, PA"
    },
    {
        "name": "GARRETT COLLEGE",
        "location": "MCHENRY, MD"
    },
    {
        "name": "TOMORROW'S IMAGE BARBER AND BEAUTY ACADEMY OF VIRGINIA",
        "location": "NEWPORT NEWS, VA"
    },
    {
        "name": "EASTERN SUFFOLK BOCES",
        "location": "OAKDALE, NY"
    },
    {
        "name": "ABRAHAM LINCOLN UNIVERSITY",
        "location": "GLENDALE, CA"
    },
    {
        "name": "WONGU UNIVERSITY OF ORIENTAL MEDICINE",
        "location": "LAS VEGAS, NV"
    },
    {
        "name": "SOUTHEAST MISSOURI STATE UNIVERSITY",
        "location": "CAPE GIRARDEAU, MO"
    },
    {
        "name": "SOMERSET COUNTY TECHNOLOGY CENTER",
        "location": "SOMERSET, PA"
    },
    {
        "name": "GARDNER-WEBB UNIVERSITY",
        "location": "BOILING SPRINGS, NC"
    },
    {
        "name": "UNIVERSITY OF CINCINNATI",
        "location": "CINCINNATI, OH"
    },
    {
        "name": "YESHIVA UNIVERSITY",
        "location": "NEW YORK, NY"
    },
    {
        "name": "SALON & SPA INSTITUTE",
        "location": "BROWNSVILLE, TX"
    },
    {
        "name": "PORTLAND STATE UNIVERSITY",
        "location": "PORTLAND, OR"
    },
    {
        "name": "SOUTHERN CAREERS INSTITUTE-HARLINGEN",
        "location": "HARLINGEN, TX"
    },
    {
        "name": "PALM BEACH ATLANTIC UNIVERSITY",
        "location": "WEST PALM BEACH, FL"
    },
    {
        "name": "LESLEY UNIVERSITY",
        "location": "CAMBRIDGE, MA"
    },
    {
        "name": "THE UNIVERSITY OF TEXAS AT AUSTIN",
        "location": "AUSTIN, TX"
    },
    {
        "name": "MAHONING COUNTY CAREER AND TECHNICAL CENTER",
        "location": "CANFIELD, OH"
    },
    {
        "name": "COMMUNITY TECHNOLOGY LEARNING CENTER OF PORTAGE",
        "location": "RAVENNA, OH"
    },
    {
        "name": "ENTERPRISE STATE COMMUNITY COLLEGE",
        "location": "ENTERPRISE, AL"
    },
    {
        "name": "ARKANSAS TECH UNIVERSITY",
        "location": "RUSSELLVILLE, AR"
    },
    {
        "name": "JAMES A RHODES STATE COLLEGE",
        "location": "LIMA, OH"
    },
    {
        "name": "FUTURA CAREER INSTITUTE",
        "location": "HIALEAH, FL"
    },
    {
        "name": "FLORIDA VOCATIONAL INSTITUTE",
        "location": "MIAMI, FL"
    },
    {
        "name": "THE UNIVERSITY OF TEXAS AT TYLER",
        "location": "TYLER, TX"
    },
    {
        "name": "BRISTOL COMMUNITY COLLEGE",
        "location": "FALL RIVER, MA"
    },
    {
        "name": "SOUTHERN MAINE COMMUNITY COLLEGE",
        "location": "SOUTH PORTLAND, ME"
    },
    {
        "name": "WILKES UNIVERSITY",
        "location": "WILKES-BARRE, PA"
    },
    {
        "name": "DREXEL UNIVERSITY",
        "location": "PHILADELPHIA, PA"
    },
    {
        "name": "UKIAH ADULT SCHOOL",
        "location": "UKIAH, CA"
    },
    {
        "name": "WILMINGTON COLLEGE",
        "location": "WILMINGTON, OH"
    },
    {
        "name": "SOUTHERN STATE COMMUNITY COLLEGE",
        "location": "HILLSBORO, OH"
    },
    {
        "name": "SOUTHERN WESLEYAN UNIVERSITY",
        "location": "CENTRAL, SC"
    },
    {
        "name": "TOTAL TRANSFORMATION INSTITUTE OF COSMETOLOGY",
        "location": "SAN MARCOS, TX"
    },
    {
        "name": "VIBE BARBER COLLEGE",
        "location": "MEMPHIS, TN"
    },
    {
        "name": "SETTING THE STANDARD BARBERING AND NATURAL HAIR ACADEMY",
        "location": "SHREVEPORT, LA"
    },
    {
        "name": "CHAMPLAIN COLLEGE",
        "location": "BURLINGTON, VT"
    },
    {
        "name": "WESTERN NEVADA COLLEGE",
        "location": "CARSON CITY, NV"
    },
    {
        "name": "CONCORDIA UNIVERSITY-ANN ARBOR",
        "location": "ANN ARBOR, MI"
    },
    {
        "name": "BRYANT & STRATTON COLLEGE-WAUWATOSA",
        "location": "WAUWATOSA, WI"
    },
    {
        "name": "MILAN INSTITUTE OF COSMETOLOGY-FAIRFIELD",
        "location": "FAIRFIELD, CA"
    },
    {
        "name": "CET-COLTON",
        "location": "COLTON, CA"
    },
    {
        "name": "SIMPSON UNIVERSITY",
        "location": "REDDING, CA"
    },
    {
        "name": "EDMONDS COLLEGE",
        "location": "LYNNWOOD, WA"
    },
    {
        "name": "AMERICAN INDIAN OIC INC",
        "location": "MINNEAPOLIS, MN"
    },
    {
        "name": "HENDERSON STATE UNIVERSITY",
        "location": "ARKADELPHIA, AR"
    },
    {
        "name": "HANDS ON THERAPY",
        "location": "MESQUITE, TX"
    },
    {
        "name": "UNIVERSITY OF MAINE AT MACHIAS",
        "location": "MACHIAS, ME"
    },
    {
        "name": "MOUNT CARMEL COLLEGE OF NURSING",
        "location": "COLUMBUS, OH"
    },
    {
        "name": "ANTIOCH UNIVERSITY-SEATTLE",
        "location": "SEATTLE, WA"
    },
    {
        "name": "SAMUEL MERRITT UNIVERSITY",
        "location": "OAKLAND, CA"
    },
    {
        "name": "UPPER VALLEY EDUCATORS INSTITUTE",
        "location": "LEBANON, NH"
    },
    {
        "name": "MIDWEST COLLEGE OF ORIENTAL MEDICINE-EVANSTON",
        "location": "EVANSTON, IL"
    },
    {
        "name": "PCI COLLEGE",
        "location": "CERRITOS, CA"
    },
    {
        "name": "PITTSBURGH TECHNICAL COLLEGE",
        "location": "OAKDALE, PA"
    },
    {
        "name": "NORTHPOINT BIBLE COLLEGE",
        "location": "HAVERHILL, MA"
    },
    {
        "name": "TENNESSEE WESLEYAN UNIVERSITY",
        "location": "ATHENS, TN"
    },
    {
        "name": "MERCY HOSPITAL SCHOOL OF PRACTICAL NURSING-PLANTATION GENERAL HOSPITAL",
        "location": "MIAMI, FL"
    },
    {
        "name": "LINCOLN TECHNICAL INSTITUTE-PARAMUS",
        "location": "PARAMUS, NJ"
    },
    {
        "name": "AVEDA INSTITUTE-NEW YORK",
        "location": "NEW YORK, NY"
    },
    {
        "name": "SAMARITAN HOSPITAL SCHOOL OF NURSING",
        "location": "TROY, NY"
    },
    {
        "name": "VANGUARD COLLEGE OF COSMETOLOGY-METAIRIE",
        "location": "METAIRIE, LA"
    },
    {
        "name": "NEW YORK SCHOOL FOR MEDICAL AND DENTAL ASSISTANTS",
        "location": "LONG ISLAND CITY, NY"
    },
    {
        "name": "UNIVERSAL TECHNICAL INSTITUTE OF ILLINOIS INC",
        "location": "LISLE, IL"
    },
    {
        "name": "ROB ROY ACADEMY-WORCESTER",
        "location": "WORCESTER, MA"
    },
    {
        "name": "UNIVERSITY OF ARKANSAS-PULASKI TECHNICAL COLLEGE",
        "location": "NORTH LITTLE ROCK, AR"
    },
    {
        "name": "ALASKA CHRISTIAN COLLEGE",
        "location": "SOLDOTNA, AK"
    },
    {
        "name": "UNIVERSAL SPA TRAINING ACADEMY",
        "location": "DOWNERS GROVE, IL"
    },
    {
        "name": "NATIONAL AMERICAN UNIVERSITY-BELLEVUE",
        "location": "BELLEVUE, NE"
    },
    {
        "name": "MYCOMPUTERCAREER.EDU-RALEIGH",
        "location": "RALEIGH, NC"
    },
    {
        "name": "EDUCATORS OF BEAUTY COLLEGE OF COSMETOLOGY-ROCKFORD",
        "location": "ROCKFORD, IL"
    },
    {
        "name": "BERGIN UNIVERSITY OF CANINE STUDIES",
        "location": "PENNGROVE, CA"
    },
    {
        "name": "CAPILO SCHOOL OF HAIR DESIGN",
        "location": "AUGUSTA, ME"
    },
    {
        "name": "EDGEWOOD COLLEGE",
        "location": "MADISON, WI"
    },
    {
        "name": "CULINARY INSTITUTE INC",
        "location": "HOUSTON, TX"
    },
    {
        "name": "MUHLENBERG COLLEGE",
        "location": "ALLENTOWN, PA"
    },
    {
        "name": "ARLINGTON BAPTIST UNIVERSITY",
        "location": "ARLINGTON, TX"
    },
    {
        "name": "EMPIRE BEAUTY SCHOOL-LEHIGH VALLEY",
        "location": "WHITEHALL, PA"
    },
    {
        "name": "CALIFORNIA STATE UNIVERSITY-CHICO",
        "location": "CHICO, CA"
    },
    {
        "name": "UNIVERSITY OF ILLINOIS URBANA-CHAMPAIGN",
        "location": "CHAMPAIGN, IL"
    },
    {
        "name": "ST. JOHN'S COLLEGE-DEPARTMENT OF NURSING",
        "location": "SPRINGFIELD, IL"
    },
    {
        "name": "AVEDA ARTS & SCIENCES INSTITUTE-BATON ROUGE",
        "location": "BATON ROUGE, LA"
    },
    {
        "name": "CONCORDE CAREER COLLEGE-GARDEN GROVE",
        "location": "GARDEN GROVE, CA"
    },
    {
        "name": "WOODBURY UNIVERSITY",
        "location": "BURBANK, CA"
    },
    {
        "name": "PICKENS TECHNICAL COLLEGE",
        "location": "AURORA, CO"
    },
    {
        "name": "HAWKEYE COMMUNITY COLLEGE",
        "location": "WATERLOO, IA"
    },
    {
        "name": "CENTRAL SCHOOL OF PRACTICAL NURSING",
        "location": "INDEPENDENCE, OH"
    },
    {
        "name": "STRATFORD SCHOOL FOR AVIATION MAINTENANCE TECHNICIANS",
        "location": "STRATFORD, CT"
    },
    {
        "name": "BRIGHTON CENTER'S CENTER FOR EMPLOYMENT TRAINING",
        "location": "NEWPORT, KY"
    },
    {
        "name": "HARRIS SCHOOL OF BUSINESS-DOVER CAMPUS",
        "location": "DOVER, DE"
    },
    {
        "name": "CAMBRIDGE TECHNICAL INSTITUTE",
        "location": "SAN JUAN, PR"
    },
    {
        "name": "PAUL MITCHELL THE SCHOOL-GREAT LAKES",
        "location": "PORT HURON, MI"
    },
    {
        "name": "COLLEGEAMERICA-COLORADO SPRINGS",
        "location": "COLORADO SPRINGS, CO"
    },
    {
        "name": "HARRIS SCHOOL OF BUSINESS-LINWOOD CAMPUS",
        "location": "LINWOOD, NJ"
    },
    {
        "name": "EASTERN CONNECTICUT STATE UNIVERSITY",
        "location": "WILLIMANTIC, CT"
    },
    {
        "name": "GOLDEY-BEACOM COLLEGE",
        "location": "WILMINGTON, DE"
    },
    {
        "name": "UNIVERSITY OF HAWAII AT HILO",
        "location": "HILO, HI"
    },
    {
        "name": "BETHANY COLLEGE",
        "location": "LINDSBORG, KS"
    },
    {
        "name": "MISSOURI VALLEY COLLEGE",
        "location": "MARSHALL, MO"
    },
    {
        "name": "UNIVERSITY OF MISSOURI-KANSAS CITY",
        "location": "KANSAS CITY, MO"
    },
    {
        "name": "WORLD MISSION UNIVERSITY",
        "location": "LOS ANGELES, CA"
    },
    {
        "name": "SPERTUS COLLEGE",
        "location": "CHICAGO, IL"
    },
    {
        "name": "LINCOLN COLLEGE",
        "location": "LINCOLN, IL"
    },
    {
        "name": "SOUTHERN UNIVERSITY AT SHREVEPORT",
        "location": "SHREVEPORT, LA"
    },
    {
        "name": "SALON PROFESSIONAL ACADEMY OF SAN ANTONIO",
        "location": "SAN ANTONIO, TX"
    },
    {
        "name": "BELLASA PROFESSIONAL INSTITUTE",
        "location": "NORTH MIAMI, FL"
    },
    {
        "name": "AMERICAN INSTITUTE OF HEALTHCARE & TECHNOLOGY",
        "location": "STRATFORD, CT"
    },
    {
        "name": "A BETTER U BEAUTY BARBER ACADEMY",
        "location": "ALBUQUERQUE, NM"
    },
    {
        "name": "COLLEGE UNBOUND",
        "location": "PROVIDENCE, RI"
    },
    {
        "name": "VALLEY COLLEGE-CLEVELAND",
        "location": "CLEVELAND, OH"
    },
    {
        "name": "UNIVERSITY OF THE CUMBERLANDS",
        "location": "WILLIAMSBURG, KY"
    },
    {
        "name": "AMERICAN ISLAMIC COLLEGE",
        "location": "CHICAGO, IL"
    },
    {
        "name": "THE SANTA BARBARA AND VENTURA COLLEGES OF LAW AT SANTA BARBARA",
        "location": "SANTA BARBARA, CA"
    },
    {
        "name": "ACADEMY OF INTERACTIVE ENTERTAINMENT",
        "location": "LAFAYETTE, LA"
    },
    {
        "name": "TULSA WELDING SCHOOL-HOUSTON",
        "location": "HOUSTON, TX"
    },
    {
        "name": "THE NORTH COAST COLLEGE",
        "location": "LAKEWOOD, OH"
    },
    {
        "name": "PIMA MEDICAL INSTITUTE-DILLON",
        "location": "DILLON, MT"
    },
    {
        "name": "NEW YORK THEOLOGICAL SEMINARY",
        "location": "NEW YORK, NY"
    },
    {
        "name": "CENTRAL NEW MEXICO COMMUNITY COLLEGE",
        "location": "ALBUQUERQUE, NM"
    },
    {
        "name": "PENNSYLVANIA STATE UNIVERSITY-DICKINSON LAW",
        "location": "CARLISLE, PA"
    },
    {
        "name": "PITT COMMUNITY COLLEGE",
        "location": "WINTERVILLE, NC"
    },
    {
        "name": "DORSEY SCHOOL OF BUSINESS-WATERFORD PONTIAC",
        "location": "PONTIAC, MI"
    },
    {
        "name": "ALLEGANY COLLEGE OF MARYLAND",
        "location": "CUMBERLAND, MD"
    },
    {
        "name": "GREAT BASIN COLLEGE",
        "location": "ELKO, NV"
    },
    {
        "name": "FLORIDA TECHNICAL COLLEGE",
        "location": "ORLANDO, FL"
    },
    {
        "name": "RABBINICAL COLLEGE BOBOVER YESHIVA BNEI ZION",
        "location": "BROOKLYN, NY"
    },
    {
        "name": "BOSTON COLLEGE",
        "location": "CHESTNUT HILL, MA"
    },
    {
        "name": "ILLINOIS MEDIA SCHOOL-CHICAGO CAMPUS",
        "location": "CHICAGO, IL"
    },
    {
        "name": "CONCORDE CAREER COLLEGE-DALLAS",
        "location": "DALLAS, TX"
    },
    {
        "name": "LONG ISLAND NAIL SKIN & HAIR INSTITUTE",
        "location": "LEVITTOWN, NY"
    },
    {
        "name": "CET-OXNARD",
        "location": "OXNARD, CA"
    },
    {
        "name": "CET-SANTA MARIA",
        "location": "SANTA MARIA, CA"
    },
    {
        "name": "LAWSON STATE COMMUNITY COLLEGE",
        "location": "BIRMINGHAM, AL"
    },
    {
        "name": "UNIVERSITY OF SPA & COSMETOLOGY ARTS",
        "location": "SPRINGFIELD, IL"
    },
    {
        "name": "COLLEGE OF CENTRAL FLORIDA",
        "location": "OCALA, FL"
    },
    {
        "name": "INDIAN HILLS COMMUNITY COLLEGE",
        "location": "OTTUMWA, IA"
    },
    {
        "name": "BALL STATE UNIVERSITY",
        "location": "MUNCIE, IN"
    },
    {
        "name": "OKLAHOMA BAPTIST UNIVERSITY",
        "location": "SHAWNEE, OK"
    },
    {
        "name": "BERKS CAREER & TECHNOLOGY CENTER",
        "location": "LEESPORT, PA"
    },
    {
        "name": "OHIO STATE UNIVERSITY-MANSFIELD CAMPUS",
        "location": "MANSFIELD, OH"
    },
    {
        "name": "MOUNT MARTY UNIVERSITY",
        "location": "YANKTON, SD"
    },
    {
        "name": "CARSON-NEWMAN UNIVERSITY",
        "location": "JEFFERSON CITY, TN"
    },
    {
        "name": "WELCH COLLEGE",
        "location": "GALLATIN, TN"
    },
    {
        "name": "ALLIANCE COMPUTING SOLUTIONS",
        "location": "FLUSHING, NY"
    },
    {
        "name": "NOSSI COLLEGE OF ART",
        "location": "NASHVILLE, TN"
    },
    {
        "name": "THE UNIVERSITY OF TEXAS MD ANDERSON CANCER CENTER",
        "location": "HOUSTON, TX"
    },
    {
        "name": "UNIVERSITY OF FLORIDA-ONLINE",
        "location": "GAINESVILLE, FL"
    },
    {
        "name": "ALLAN HANCOCK COLLEGE",
        "location": "SANTA MARIA, CA"
    },
    {
        "name": "UNIVERSITY OF MARYLAND-BALTIMORE COUNTY",
        "location": "BALTIMORE, MD"
    },
    {
        "name": "UNIVERSITY OF NORTH CAROLINA WILMINGTON",
        "location": "WILMINGTON, NC"
    },
    {
        "name": "UNIVERSITY OF NORTH FLORIDA",
        "location": "JACKSONVILLE, FL"
    },
    {
        "name": "JOHN BROWN UNIVERSITY",
        "location": "SILOAM SPRINGS, AR"
    },
    {
        "name": "CONTRA COSTA COMMUNITY COLLEGE DISTRICT OFFICE",
        "location": "MARTINEZ, CA"
    },
    {
        "name": "MIAMI AD SCHOOL-ATLANTA",
        "location": "ATLANTA, GA"
    },
    {
        "name": "ALBION COLLEGE",
        "location": "ALBION, MI"
    },
    {
        "name": "SALEM STATE UNIVERSITY",
        "location": "SALEM, MA"
    },
    {
        "name": "GUSTAVUS ADOLPHUS COLLEGE",
        "location": "SAINT PETER, MN"
    },
    {
        "name": "CAZENOVIA COLLEGE",
        "location": "CAZENOVIA, NY"
    },
    {
        "name": "INTER AMERICAN UNIVERSITY OF PUERTO RICO-METRO",
        "location": "SAN JUAN, PR"
    },
    {
        "name": "INTERNATIONAL TECHNICAL COLLEGE",
        "location": "SAN JUAN, PR"
    },
    {
        "name": "WHITE EARTH TRIBAL AND COMMUNITY COLLEGE",
        "location": "MAHNOMEN, MN"
    },
    {
        "name": "SANTA ANA COLLEGE",
        "location": "SANTA ANA, CA"
    },
    {
        "name": "WARREN WILSON COLLEGE",
        "location": "SWANNANOA, NC"
    },
    {
        "name": "MIDDLE GEORGIA STATE UNIVERSITY",
        "location": "MACON, GA"
    },
    {
        "name": "RAPHAEL'S SCHOOL OF BEAUTY CULTURE INC-NILES",
        "location": "NILES, OH"
    },
    {
        "name": "UNIVERSITY OF NEW HAMPSHIRE",
        "location": "DURHAM, NH"
    },
    {
        "name": "MERIDIAN COLLEGE",
        "location": "SARASOTA, FL"
    },
    {
        "name": "CLOYD'S BARBER SCHOOL 2 INC",
        "location": "MONROE, LA"
    },
    {
        "name": "COLORADO ACADEMY OF VETERINARY TECHNOLOGY",
        "location": "COLORADO SPRINGS, CO"
    },
    {
        "name": "APEX TECHNICAL SCHOOL",
        "location": "LONG ISLAND CITY, NY"
    },
    {
        "name": "SOUTH CENTRAL CAREER CENTER",
        "location": "WEST PLAINS, MO"
    },
    {
        "name": "CASS CAREER CENTER",
        "location": "HARRISONVILLE, MO"
    },
    {
        "name": "INTERNATIONAL BUSINESS COLLEGE-INDIANAPOLIS",
        "location": "INDIANAPOLIS, IN"
    },
    {
        "name": "CORNELL COLLEGE",
        "location": "MOUNT VERNON, IA"
    },
    {
        "name": "RIVER PARISHES COMMUNITY COLLEGE",
        "location": "GONZALES, LA"
    },
    {
        "name": "DOANE UNIVERSITY",
        "location": "CRETE, NE"
    },
    {
        "name": "COLUMBIA-GREENE COMMUNITY COLLEGE",
        "location": "HUDSON, NY"
    },
    {
        "name": "TONI & GUY HAIRDRESSING ACADEMY-ALBUQUERQUE",
        "location": "ALBUQUERQUE, NM"
    },
    {
        "name": "PENNSYLVANIA ACADEMY OF THE FINE ARTS",
        "location": "PHILADELPHIA, PA"
    },
    {
        "name": "UNIVERSITY OF BRIDGEPORT",
        "location": "BRIDGEPORT, CT"
    },
    {
        "name": "MEREDITH MANOR INTERNATIONAL EQUESTRIAN CENTER",
        "location": "WAVERLY, WV"
    },
    {
        "name": "BETHUNE-COOKMAN UNIVERSITY",
        "location": "DAYTONA BEACH, FL"
    },
    {
        "name": "PONCE HEALTH SCIENCES UNIVERSITY",
        "location": "PONCE, PR"
    },
    {
        "name": "UNIVERSITY OF ALASKA SOUTHEAST",
        "location": "JUNEAU, AK"
    },
    {
        "name": "PAUL MITCHELL THE SCHOOL-HONOLULU",
        "location": "HONOLULU, HI"
    },
    {
        "name": "RHODE ISLAND COLLEGE",
        "location": "PROVIDENCE, RI"
    },
    {
        "name": "HARRISBURG UNIVERSITY OF SCIENCE AND TECHNOLOGY",
        "location": "HARRISBURG, PA"
    },
    {
        "name": "EMBRY-RIDDLE AERONAUTICAL UNIVERSITY-PRESCOTT",
        "location": "PRESCOTT, AZ"
    },
    {
        "name": "IRVINE VALLEY COLLEGE",
        "location": "IRVINE, CA"
    },
    {
        "name": "MIDLAND COLLEGE",
        "location": "MIDLAND, TX"
    },
    {
        "name": "FAYETTE COUNTY CAREER & TECHNICAL INSTITUTE PRACTICAL NURSING PROGRAM",
        "location": "UNIONTOWN, PA"
    },
    {
        "name": "FORTIS COLLEGE",
        "location": "HOUSTON, TX"
    },
    {
        "name": "ERIKSON INSTITUTE",
        "location": "CHICAGO, IL"
    },
    {
        "name": "EMPIRE BEAUTY SCHOOL-MILWAUKEE",
        "location": "MILWAUKEE, WI"
    },
    {
        "name": "ARIZONA CHRISTIAN UNIVERSITY",
        "location": "GLENDALE, AZ"
    },
    {
        "name": "HARVEY MUDD COLLEGE",
        "location": "CLAREMONT, CA"
    },
    {
        "name": "VENTURA COUNTY COMMUNITY COLLEGE SYSTEM OFFICE",
        "location": "CAMARILLO, CA"
    },
    {
        "name": "CITY COLLEGES OF CHICAGO-OLIVE-HARVEY COLLEGE",
        "location": "CHICAGO, IL"
    },
    {
        "name": "AMERICAN INSTITUTE-CLIFTON",
        "location": "CLIFTON, NJ"
    },
    {
        "name": "LONG ISLAND BEAUTY SCHOOL-HEMPSTEAD",
        "location": "HEMPSTEAD, NY"
    },
    {
        "name": "THE NEW SCHOOL CENTER FOR MEDIA",
        "location": "ALBANY, NY"
    },
    {
        "name": "WEST HILLS COLLEGE-COALINGA",
        "location": "COALINGA, CA"
    },
    {
        "name": "UNIVERSITY OF CENTRAL ARKANSAS",
        "location": "CONWAY, AR"
    },
    {
        "name": "EAST ARKANSAS COMMUNITY COLLEGE",
        "location": "FORREST CITY, AR"
    },
    {
        "name": "SAINT XAVIER UNIVERSITY",
        "location": "CHICAGO, IL"
    },
    {
        "name": "DIVINE MERCY UNIVERSITY",
        "location": "STERLING, VA"
    },
    {
        "name": "CAPITOL SCHOOL OF HAIRSTYLING AND ESTHETICS",
        "location": "OMAHA, NE"
    },
    {
        "name": "ACE INSTITUTE OF TECHNOLOGY",
        "location": "NEW YORK, NY"
    },
    {
        "name": "ACADEMY OF CAREER TRAINING",
        "location": "KISSIMMEE, FL"
    },
    {
        "name": "MERKAZ BNOS-BUSINESS SCHOOL",
        "location": "BROOKLYN, NY"
    },
    {
        "name": "AMERICAN INSTITUTE-WEST HARTFORD",
        "location": "WEST HARTFORD, CT"
    },
    {
        "name": "UNIVERSITY OF ANTELOPE VALLEY",
        "location": "LANCASTER, CA"
    },
    {
        "name": "CAYCE/REILLY SCHOOL OF MASSAGE",
        "location": "VIRGINIA BEACH, VA"
    },
    {
        "name": "ILLINOIS COLLEGE OF OPTOMETRY",
        "location": "CHICAGO, IL"
    },
    {
        "name": "OLYMPIAN ACADEMY OF COSMETOLOGY",
        "location": "ALAMOGORDO, NM"
    },
    {
        "name": "THE BEAUTY INSTITUTE",
        "location": "STROUDSBURG, PA"
    },
    {
        "name": "FREED-HARDEMAN UNIVERSITY",
        "location": "HENDERSON, TN"
    },
    {
        "name": "KAPIOLANI COMMUNITY COLLEGE",
        "location": "HONOLULU, HI"
    },
    {
        "name": "HAMPSHIRE COLLEGE",
        "location": "AMHERST, MA"
    },
    {
        "name": "HIGH POINT UNIVERSITY",
        "location": "HIGH POINT, NC"
    },
    {
        "name": "RIDER UNIVERSITY",
        "location": "LAWRENCEVILLE, NJ"
    },
    {
        "name": "MASSAGE INSTITUTE OF MEMPHIS",
        "location": "MEMPHIS, TN"
    },
    {
        "name": "WADE GORDON HAIRDRESSING ACADEMY",
        "location": "AMARILLO, TX"
    },
    {
        "name": "HOLLYWOOD CULTURAL COLLEGE",
        "location": "LOS ANGELES, CA"
    },
    {
        "name": "FLORIDA PROFESSIONAL INSTITUTE",
        "location": "MIAMI, FL"
    },
    {
        "name": "NUC UNIVERSITY - IBC INSTITUTE - CAGUAS",
        "location": "CAGUAS, PR"
    },
    {
        "name": "PAUL MITCHELL THE SCHOOL-MURFREESBORO-NASHVILLE",
        "location": "HENDERSONVILLE, TN"
    },
    {
        "name": "AMERICAN COLLEGE OF BARBERING - MURFREESBORO,TN",
        "location": "MURFREESBORO, TN"
    },
    {
        "name": "TRIANGLE TECH-CHAMBERSBURG",
        "location": "CHAMBERSBURG, PA"
    },
    {
        "name": "PROVO COLLEGE-IDAHO FALLS CAMPUS",
        "location": "IDAHO FALLS, ID"
    },
    {
        "name": "UNIVERSITY OF PUERTO RICO-UTUADO",
        "location": "UTUADO, PR"
    },
    {
        "name": "BEYOND 21ST CENTURY BEAUTY ACADEMY",
        "location": "SANTA FE SPRINGS, CA"
    },
    {
        "name": "CELEBRITY BARBER SCHOOL",
        "location": "MONROE, LA"
    },
    {
        "name": "THE SALON PROFESSIONAL ACADEMY-LEWISVILLE",
        "location": "LEWISVILLE, TX"
    },
    {
        "name": "ST PETERSBURG COLLEGE",
        "location": "CLEARWATER, FL"
    },
    {
        "name": "LOYOLA UNIVERSITY CHICAGO",
        "location": "CHICAGO, IL"
    },
    {
        "name": "LINCOLN TRAIL COLLEGE",
        "location": "ROBINSON, IL"
    },
    {
        "name": "FORT WORTH BEAUTY SCHOOL",
        "location": "BENBROOK, TX"
    },
    {
        "name": "PAUL MITCHELL THE SCHOOL-JESSUP",
        "location": "JESSUP, MD"
    },
    {
        "name": "TEXAS CHRISTIAN UNIVERSITY",
        "location": "FORT WORTH, TX"
    },
    {
        "name": "MERCER COUNTY COMMUNITY COLLEGE",
        "location": "WEST WINDSOR, NJ"
    },
    {
        "name": "INTERNATIONAL ACADEMY OF STYLE",
        "location": "RENO, NV"
    },
    {
        "name": "PAUL MITCHELL THE SCHOOL-AUSTIN",
        "location": "AUSTIN, TX"
    },
    {
        "name": "OGDEN-WEBER TECHNICAL COLLEGE",
        "location": "OGDEN, UT"
    },
    {
        "name": "GATEWAY TECHNICAL COLLEGE",
        "location": "KENOSHA, WI"
    },
    {
        "name": "JOHNSON UNIVERSITY",
        "location": "KNOXVILLE, TN"
    },
    {
        "name": "STRAYER UNIVERSITY-GLOBAL REGION",
        "location": "WASHINGTON, DC"
    },
    {
        "name": "EMPIRE BEAUTY SCHOOL-WYOMING VALLEY",
        "location": "MOOSIC, PA"
    },
    {
        "name": "UNIVERSITY OF NEBRASKA-CENTRAL ADMINISTRATION SYSTEM OFFICE",
        "location": "LINCOLN, NE"
    },
    {
        "name": "ROSEDALE TECHNICAL COLLEGE",
        "location": "PITTSBURGH, PA"
    },
    {
        "name": "PLATT COLLEGE-OKC-MEMORIAL",
        "location": "OKLAHOMA CITY, OK"
    },
    {
        "name": "PIKES PEAK COMMUNITY COLLEGE",
        "location": "COLORADO SPRINGS, CO"
    },
    {
        "name": "TRINITY CHRISTIAN COLLEGE",
        "location": "PALOS HEIGHTS, IL"
    },
    {
        "name": "UNITEK COLLEGE",
        "location": "SOUTH SAN FRANCISCO, CA"
    },
    {
        "name": "MINNESOTA SCHOOL OF COSMETOLOGY-PLYMOUTH CAMPUS",
        "location": "PLYMOUTH, MN"
    },
    {
        "name": "KENT STATE UNIVERSITY AT SALEM",
        "location": "SALEM, OH"
    },
    {
        "name": "TRI-STATE COSMETOLOGY INSTITUTE",
        "location": "EL PASO, TX"
    },
    {
        "name": "UNIVERSITY OF PHOENIX-TEXAS",
        "location": "HOUSTON, TX"
    },
    {
        "name": "CITY UNIVERSITY OF SEATTLE",
        "location": "SEATTLE, WA"
    },
    {
        "name": "COACHELLA VALLEY BEAUTY COLLEGE-HEMET",
        "location": "HEMET, CA"
    },
    {
        "name": "METROPOLITAN COLLEGE OF NEW YORK",
        "location": "NEW YORK, NY"
    },
    {
        "name": "GEMOLOGICAL INSTITUTE OF AMERICA-NEW YORK",
        "location": "NEW YORK, NY"
    },
    {
        "name": "SWEDISH INSTITUTE A COLLEGE OF HEALTH SCIENCES",
        "location": "NEW YORK, NY"
    },
    {
        "name": "ROSALIND FRANKLIN UNIVERSITY OF MEDICINE AND SCIENCE",
        "location": "NORTH CHICAGO, IL"
    },
    {
        "name": "STRAYER UNIVERSITY-DISTRICT OF COLUMBIA",
        "location": "WASHINGTON, DC"
    },
    {
        "name": "INTERCOAST COLLEGES-RANCHO CORDOVA",
        "location": "RANCHO CORDOVA, CA"
    },
    {
        "name": "NORTH-WEST COLLEGE-VAN NUYS",
        "location": "VAN NUYS, CA"
    },
    {
        "name": "DESIGN INSTITUTE OF SAN DIEGO",
        "location": "SAN DIEGO, CA"
    },
    {
        "name": "CHRISTIAN THEOLOGICAL SEMINARY",
        "location": "INDIANAPOLIS, IN"
    },
    {
        "name": "BIG BEND TECHNICAL COLLEGE",
        "location": "PERRY, FL"
    },
    {
        "name": "ARTISTIC NAILS AND BEAUTY ACADEMY-TAMPA",
        "location": "TAMPA, FL"
    },
    {
        "name": "NEW JERSEY INSTITUTE OF TECHNOLOGY",
        "location": "NEWARK, NJ"
    },
    {
        "name": "INTER AMERICAN UNIVERSITY OF PUERTO RICO-PONCE",
        "location": "MERCEDITA, PR"
    },
    {
        "name": "ANNENBERG SCHOOL OF NURSING",
        "location": "RESEDA, CA"
    },
    {
        "name": "COLORADO SCHOOL OF TRADITIONAL CHINESE MEDICINE",
        "location": "DENVER, CO"
    },
    {
        "name": "ILISAGVIK COLLEGE",
        "location": "BARROW, AK"
    },
    {
        "name": "STRATFORD UNIVERSITY",
        "location": "ALEXANDRIA, VA"
    },
    {
        "name": "UNIVERSITY OF MARY",
        "location": "BISMARCK, ND"
    },
    {
        "name": "PITTSBURGH INSTITUTE OF MORTUARY SCIENCE INC",
        "location": "PITTSBURGH, PA"
    },
    {
        "name": "MCCORMICK THEOLOGICAL SEMINARY",
        "location": "CHICAGO, IL"
    },
    {
        "name": "GARRETT-EVANGELICAL THEOLOGICAL SEMINARY",
        "location": "EVANSTON, IL"
    },
    {
        "name": "LAKE SUPERIOR STATE UNIVERSITY",
        "location": "SAULT STE MARIE, MI"
    },
    {
        "name": "CROWDER COLLEGE",
        "location": "NEOSHO, MO"
    },
    {
        "name": "M J MURPHY BEAUTY COLLEGE OF MOUNT PLEASANT",
        "location": "MOUNT PLEASANT, MI"
    },
    {
        "name": "BAIS MEDRASH ELYON",
        "location": "MONSEY, NY"
    },
    {
        "name": "OHIO STATE COLLEGE OF BARBER STYLING",
        "location": "COLUMBUS, OH"
    },
    {
        "name": "GODS BIBLE SCHOOL AND COLLEGE",
        "location": "CINCINNATI, OH"
    },
    {
        "name": "EVES COLLEGE OF HAIRSTYLING",
        "location": "LAWTON, OK"
    },
    {
        "name": "FORREST COLLEGE",
        "location": "ANDERSON, SC"
    },
    {
        "name": "STATE COLLEGE OF BEAUTY CULTURE INC",
        "location": "WAUSAU, WI"
    },
    {
        "name": "GRAND RIVER TECHNICAL SCHOOL",
        "location": "CHILLICOTHE, MO"
    },
    {
        "name": "MARIA COLLEGE OF ALBANY",
        "location": "ALBANY, NY"
    },
    {
        "name": "PLAZA COLLEGE",
        "location": "FOREST HILLS, NY"
    },
    {
        "name": "TRIANGLE TECH INC-GREENSBURG",
        "location": "GREENSBURG, PA"
    },
    {
        "name": "ECCLESIA COLLEGE",
        "location": "SPRINGDALE, AR"
    },
    {
        "name": "UNIVERSITY OF WEST ALABAMA",
        "location": "LIVINGSTON, AL"
    },
    {
        "name": "UNIVERSITY OF NORTH ALABAMA",
        "location": "FLORENCE, AL"
    },
    {
        "name": "SNEAD STATE COMMUNITY COLLEGE",
        "location": "BOAZ, AL"
    },
    {
        "name": "PINEVILLE BEAUTY SCHOOL",
        "location": "PINEVILLE, LA"
    },
    {
        "name": "LOUISIANA ACADEMY OF BEAUTY",
        "location": "EUNICE, LA"
    },
    {
        "name": "LIBERTY UNIVERSITY",
        "location": "LYNCHBURG, VA"
    },
    {
        "name": "TENAJ SALON INSTITUTE",
        "location": "THE VILLAGES, FL"
    },
    {
        "name": "EMPIRE BEAUTY SCHOOL-MORROW",
        "location": "MORROW, GA"
    },
    {
        "name": "MILAN INSTITUTE-BOISE",
        "location": "BOISE, ID"
    },
    {
        "name": "AMERICAN UNIVERSITY OF HEALTH SCIENCES",
        "location": "SIGNAL HILL, CA"
    },
    {
        "name": "MIAMI AD SCHOOL-SAN FRANCISCO",
        "location": "SAN FRANCISCO, CA"
    },
    {
        "name": "EASTERN VIRGINIA CAREER COLLEGE",
        "location": "FREDERICKSBURG, VA"
    },
    {
        "name": "JAY'S TECHNICAL INSTITUTE",
        "location": "HOUSTON, TX"
    },
    {
        "name": "JOHN D ROCKEFELLER IV CAREER CENTER",
        "location": "NEW CUMBERLAND, WV"
    },
    {
        "name": "OKLAHOMA PANHANDLE STATE UNIVERSITY",
        "location": "GOODWELL, OK"
    },
    {
        "name": "SOUTHWEST WISCONSIN TECHNICAL COLLEGE",
        "location": "FENNIMORE, WI"
    },
    {
        "name": "LEWIS AND CLARK COMMUNITY COLLEGE",
        "location": "GODFREY, IL"
    },
    {
        "name": "HUSTON-TILLOTSON UNIVERSITY",
        "location": "AUSTIN, TX"
    },
    {
        "name": "THE UNIVERSITY OF TEXAS HEALTH SCIENCE CENTER AT HOUSTON",
        "location": "HOUSTON, TX"
    },
    {
        "name": "YTI CAREER INSTITUTE-ALTOONA",
        "location": "ALTOONA, PA"
    },
    {
        "name": "CENTRAL COAST COLLEGE",
        "location": "SALINAS, CA"
    },
    {
        "name": "AUTOMOTIVE TRAINING CENTER-WARMINSTER",
        "location": "WARMINSTER, PA"
    },
    {
        "name": "UNIVERSITY OF THE WEST",
        "location": "ROSEMEAD, CA"
    },
    {
        "name": "WHITWORTH UNIVERSITY-ADULT DEGREE PROGRAMS",
        "location": "SPOKANE, WA"
    },
    {
        "name": "UNIVERSITY OF NEW ORLEANS",
        "location": "NEW ORLEANS, LA"
    },
    {
        "name": "SAYBROOK UNIVERSITY",
        "location": "PASADENA, CA"
    },
    {
        "name": "CALIFORNIA STATE UNIVERSITY-NORTHRIDGE",
        "location": "NORTHRIDGE, CA"
    },
    {
        "name": "JOHN WOOD COMMUNITY COLLEGE",
        "location": "QUINCY, IL"
    },
    {
        "name": "MID CITIES BARBER COLLEGE",
        "location": "GRAND PRAIRIE, TX"
    },
    {
        "name": "PALOMAR INSTITUTE OF COSMETOLOGY",
        "location": "SAN MARCOS, CA"
    },
    {
        "name": "PHILLIPS THEOLOGICAL SEMINARY",
        "location": "TULSA, OK"
    },
    {
        "name": "BRANFORD HALL CAREER INSTITUTE-SOUTHINGTON CAMPUS",
        "location": "SOUTHINGTON, CT"
    },
    {
        "name": "ACADEMY DI CAPELLI-SCHOOL OF COSMETOLOGY",
        "location": "WALLINGFORD, CT"
    },
    {
        "name": "HOT SPRINGS BEAUTY COLLEGE",
        "location": "HOT SPRINGS, AR"
    },
    {
        "name": "GLENDALE CAREER COLLEGE",
        "location": "GLENDALE, CA"
    },
    {
        "name": "UNIVERSAL TECHNICAL INSTITUTE OF NORTHERN CALIFORNIA INC",
        "location": "SACRAMENTO, CA"
    },
    {
        "name": "QUINEBAUG VALLEY COMMUNITY COLLEGE",
        "location": "DANIELSON, CT"
    },
    {
        "name": "NEW ENGLAND HAIR ACADEMY",
        "location": "MALDEN, MA"
    },
    {
        "name": "HARCUM COLLEGE",
        "location": "BRYN MAWR, PA"
    },
    {
        "name": "PEIRCE COLLEGE",
        "location": "PHILADELPHIA, PA"
    },
    {
        "name": "WASHINGTON HOSPITAL SCHOOL OF NURSING",
        "location": "WASHINGTON, PA"
    },
    {
        "name": "MEDSPA ACADEMIES",
        "location": "SOUTH JORDAN, UT"
    },
    {
        "name": "JOHN PATRICK UNIVERSITY OF HEALTH AND APPLIED SCIENCES",
        "location": "SOUTH BEND, IN"
    },
    {
        "name": "YESHIVA GEDOLA TIFERES YERACHMIEL",
        "location": "LAKEWOOD, NJ"
    },
    {
        "name": "ELEVATE SALON INSTITUTE",
        "location": "DURHAM, NC"
    },
    {
        "name": "COMMERCIAL DIVERS INTERNATIONAL",
        "location": "GOODYEAR, AZ"
    },
    {
        "name": "WESTERN MARICOPA EDUCATION CENTER",
        "location": "GLENDALE, AZ"
    },
    {
        "name": "ALTURA COLLEGE",
        "location": "PULLMAN, WA"
    },
    {
        "name": "NUC UNIVERSITY - IBC INSTITUTE - BAYAM?N",
        "location": "BAYAMON, PR"
    },
    {
        "name": "SANS TECHNOLOGY INSTITUTE",
        "location": "BETHESDA, MD"
    },
    {
        "name": "ELEVATE SALON INSTITUTE",
        "location": "DURHAM, NC"
    },
    {
        "name": "LESTON COLLEGE -",
        "location": "ISABELA, PR"
    },
    {
        "name": "RABBINICAL SEMINARY OF AMERICA - MA'YAN HATORAH",
        "location": "RICHMOND HILL, NY"
    },
    {
        "name": "UNIVERSITY OF MARYLAND EASTERN SHORE",
        "location": "PRINCESS ANNE, MD"
    },
    {
        "name": "MILLIGAN UNIVERSITY",
        "location": "MILLIGAN, TN"
    },
    {
        "name": "BELLA ACADEMY OF COSMETOLOGY",
        "location": "MANITOWOC, WI"
    },
    {
        "name": "MANATEE TECHNICAL COLLEGE",
        "location": "BRADENTON, FL"
    },
    {
        "name": "PIBERRY INSTITUTE",
        "location": "HOMESTEAD, FL"
    },
    {
        "name": "EASTERN GATEWAY COMMUNITY COLLEGE",
        "location": "STEUBENVILLE, OH"
    },
    {
        "name": "ARTHUR'S BEAUTY COLLEGE",
        "location": "JONESBORO, AR"
    },
    {
        "name": "OREGON STATE UNIVERSITY",
        "location": "CORVALLIS, OR"
    },
    {
        "name": "SOUTHSIDE VIRGINIA COMMUNITY COLLEGE",
        "location": "ALBERTA, VA"
    },
    {
        "name": "THEOLOGICAL SEMINARY OF THE REFORMED EPISCOPAL CHURCH",
        "location": "BLUE BELL, PA"
    },
    {
        "name": "ROWAN COLLEGE AT BURLINGTON COUNTY",
        "location": "MOUNT LAUREL, NJ"
    },
    {
        "name": "CAPE FEAR COMMUNITY COLLEGE",
        "location": "WILMINGTON, NC"
    },
    {
        "name": "STRAYER UNIVERSITY-SOUTH CAROLINA",
        "location": "GREENVILLE, SC"
    },
    {
        "name": "NOVA ACADEMY OF COSMETOLOGY",
        "location": "ROCHESTER, MN"
    },
    {
        "name": "PAUL MITCHELL THE SCHOOL-MILWAUKEE",
        "location": "PAWAUKEE, WI"
    },
    {
        "name": "COLLEGE OF EASTERN IDAHO",
        "location": "IDAHO FALLS, ID"
    },
    {
        "name": "NORTHERN KENTUCKY UNIVERSITY",
        "location": "HIGHLAND HEIGHTS, KY"
    },
    {
        "name": "BEULAH HEIGHTS UNIVERSITY",
        "location": "ATLANTA, GA"
    },
    {
        "name": "HOLISTIC MASSAGE TRAINING INSTITUTE",
        "location": "BALTIMORE, MD"
    },
    {
        "name": "TROY UNIVERSITY",
        "location": "TROY, AL"
    },
    {
        "name": "YUBA COLLEGE",
        "location": "MARYSVILLE, CA"
    },
    {
        "name": "DODGE CITY COMMUNITY COLLEGE",
        "location": "DODGE CITY, KS"
    },
    {
        "name": "SOUTHEASTERN OKLAHOMA STATE UNIVERSITY",
        "location": "DURANT, OK"
    },
    {
        "name": "TEXAS A&M UNIVERSITY-COMMERCE",
        "location": "COMMERCE, TX"
    },
    {
        "name": "RASMUSSEN UNIVERSITY-KANSAS",
        "location": "TOPEKA, KS"
    },
    {
        "name": "SANFORD BURNHAM PREBYS MEDICAL DISCOVERY INSTITUTE",
        "location": "LA JOLLA, CA"
    },
    {
        "name": "BUTLER TECHNOLOGY AND CAREER DEVELOPMENT SCHOOLS",
        "location": "MONROE, OH"
    },
    {
        "name": "U S GRANT JOINT VOCATIONAL SCHOOL",
        "location": "BETHEL, OH"
    },
    {
        "name": "JACKSON STATE COMMUNITY COLLEGE",
        "location": "JACKSON, TN"
    },
    {
        "name": "TENNESSEE COLLEGE OF APPLIED TECHNOLOGY-SHELBYVILLE",
        "location": "SHELBYVILLE, TN"
    },
    {
        "name": "ROSS MEDICAL EDUCATION CENTER-JOHNSON CITY",
        "location": "JOHNSON CITY, TN"
    },
    {
        "name": "UNIVERSITY OF PHOENIX-NORTH CAROLINA",
        "location": "CHARLOTTE, NC"
    },
    {
        "name": "BUTLER COMMUNITY COLLEGE",
        "location": "EL DORADO, KS"
    },
    {
        "name": "POMONA COLLEGE",
        "location": "CLAREMONT, CA"
    },
    {
        "name": "SAINT MARY'S COLLEGE OF CALIFORNIA",
        "location": "MORAGA, CA"
    },
    {
        "name": "NATIONAL LOUIS UNIVERSITY",
        "location": "CHICAGO, IL"
    },
    {
        "name": "ORANGE TECHNICAL COLLEGE-WESTSIDE CAMPUS",
        "location": "WINTER GARDEN, FL"
    },
    {
        "name": "ST. MARY'S COLLEGE OF MARYLAND",
        "location": "ST. MARY'S CITY, MD"
    },
    {
        "name": "FAIRLEIGH DICKINSON UNIVERSITY-FLORHAM CAMPUS",
        "location": "MADISON, NJ"
    },
    {
        "name": "TULSA WELDING SCHOOL-JACKSONVILLE",
        "location": "JACKSONVILLE, FL"
    },
    {
        "name": "PACIFIC NORTHWEST COLLEGE OF ART",
        "location": "PORTLAND, OR"
    },
    {
        "name": "STONE ACADEMY-EAST HARTFORD",
        "location": "EAST HARTFORD, CT"
    },
    {
        "name": "OREGON COLLEGE OF ORIENTAL MEDICINE",
        "location": "PORTLAND, OR"
    },
    {
        "name": "CAPRI INSTITUTE OF HAIR DESIGN-PARAMUS",
        "location": "PARAMUS, NJ"
    },
    {
        "name": "CAMBRIDGE INSTITUTE OF ALLIED HEALTH & TECHNOLOGY",
        "location": "ALTAMONTE SPRINGS, FL"
    },
    {
        "name": "PROFESSIONAL'S CHOICE HAIR DESIGN ACADEMY",
        "location": "JOLIET, IL"
    },
    {
        "name": "TABOR COLLEGE",
        "location": "HILLSBORO, KS"
    },
    {
        "name": "SOUTHEASTERN COMMUNITY COLLEGE",
        "location": "WHITEVILLE, NC"
    },
    {
        "name": "HASTINGS COLLEGE",
        "location": "HASTINGS, NE"
    },
    {
        "name": "XENON INTERNATIONAL ACADEMY-OMAHA",
        "location": "OMAHA, NE"
    },
    {
        "name": "PERU STATE COLLEGE",
        "location": "PERU, NE"
    },
    {
        "name": "EASTERN NEW MEXICO UNIVERSITY-ROSWELL CAMPUS",
        "location": "ROSWELL, NM"
    },
    {
        "name": "CONTINENTAL SCHOOL OF BEAUTY CULTURE-ROCHESTER",
        "location": "ROCHESTER, NY"
    },
    {
        "name": "BRYANT & STRATTON COLLEGE-GREECE",
        "location": "ROCHESTER, NY"
    },
    {
        "name": "UPMC MERCY SCHOOL OF NURSING",
        "location": "PITTSBURGH, PA"
    },
    {
        "name": "COMMONWEALTH TECHNICAL INSTITUTE",
        "location": "JOHNSTOWN, PA"
    },
    {
        "name": "JEAN MADELINE AVEDA INSTITUTE",
        "location": "PHILADELPHIA, PA"
    },
    {
        "name": "TOURO UNIVERSITY CALIFORNIA",
        "location": "VALLEJO, CA"
    },
    {
        "name": "BAYLOR COLLEGE OF MEDICINE",
        "location": "HOUSTON, TX"
    },
    {
        "name": "DUKE UNIVERSITY",
        "location": "DURHAM, NC"
    },
    {
        "name": "ROSSLYN TRAINING ACADEMY OF COSMETOLOGY",
        "location": "AGUADA, PR"
    },
    {
        "name": "JERSEY COLLEGE",
        "location": "TETERBORO, NJ"
    },
    {
        "name": "FORTIS INSTITUTE-TOWSON",
        "location": "TOWSON, MD"
    },
    {
        "name": "SH'OR YOSHUV RABBINICAL COLLEGE",
        "location": "LAWRENCE, NY"
    },
    {
        "name": "GEORGIAN COURT UNIVERSITY",
        "location": "LAKEWOOD, NJ"
    },
    {
        "name": "ARTISTIC NAILS AND BEAUTY ACADEMY-LAKELAND",
        "location": "LAKELAND, FL"
    },
    {
        "name": "CAROLINA COLLEGE OF BIBLICAL STUDIES",
        "location": "FAYETTEVILLE, NC"
    },
    {
        "name": "ELITE COSMETOLOGY SCHOOL",
        "location": "YUCCA VALLEY, CA"
    },
    {
        "name": "CENTRALIA COLLEGE",
        "location": "CENTRALIA, WA"
    },
    {
        "name": "NEW SAINT ANDREWS COLLEGE",
        "location": "MOSCOW, ID"
    },
    {
        "name": "THE SEATTLE SCHOOL OF THEOLOGY & PSYCHOLOGY",
        "location": "SEATTLE, WA"
    },
    {
        "name": "BEXLEY HALL SEABURY WESTERN THEOLOGICAL SEMINARY FEDERATION, INC.",
        "location": "CHICAGO, IL"
    },
    {
        "name": "STEVENS-HENAGER COLLEGE",
        "location": "LOGAN, UT"
    },
    {
        "name": "STARK STATE COLLEGE",
        "location": "NORTH CANTON, OH"
    },
    {
        "name": "INDIAN CAPITAL TECHNOLOGY CENTER-MUSKOGEE",
        "location": "MUSKOGEE, OK"
    },
    {
        "name": "UNIVERSITY OF ST THOMAS",
        "location": "HOUSTON, TX"
    },
    {
        "name": "FRESNO CITY COLLEGE",
        "location": "FRESNO, CA"
    },
    {
        "name": "UNIVERSITY OF SOUTHERN MAINE",
        "location": "PORTLAND, ME"
    },
    {
        "name": "UNIVERSITY OF NEW ENGLAND",
        "location": "BIDDEFORD, ME"
    },
    {
        "name": "NORTHERN INSTITUTE OF COSMETOLOGY",
        "location": "LORAIN, OH"
    },
    {
        "name": "INTERCOAST COLLEGES-SANTA ANA",
        "location": "SANTA ANA, CA"
    },
    {
        "name": "RASMUSSEN UNIVERSITY-ILLINOIS",
        "location": "ROCKFORD, IL"
    },
    {
        "name": "SCOTTSDALE COMMUNITY COLLEGE",
        "location": "SCOTTSDALE, AZ"
    },
    {
        "name": "SAN BERNARDINO COMMUNITY COLLEGE DISTRICT",
        "location": "SAN BERNARDINO, CA"
    },
    {
        "name": "MISSION COLLEGE",
        "location": "SANTA CLARA, CA"
    },
    {
        "name": "CHICAGO STATE UNIVERSITY",
        "location": "CHICAGO, IL"
    },
    {
        "name": "SHAWNEE COMMUNITY COLLEGE",
        "location": "ULLIN, IL"
    },
    {
        "name": "NASHUA COMMUNITY COLLEGE",
        "location": "NASHUA, NH"
    },
    {
        "name": "NAVAL POSTGRADUATE SCHOOL",
        "location": "MONTEREY, CA"
    },
    {
        "name": "PALO VERDE COLLEGE",
        "location": "BLYTHE, CA"
    },
    {
        "name": "NORTHWEST IOWA COMMUNITY COLLEGE",
        "location": "SHELDON, IA"
    },
    {
        "name": "VERMILION COMMUNITY COLLEGE",
        "location": "ELY, MN"
    },
    {
        "name": "AMERICAN BAPTIST COLLEGE",
        "location": "NASHVILLE, TN"
    },
    {
        "name": "REGIS UNIVERSITY",
        "location": "DENVER, CO"
    },
    {
        "name": "PLATT COLLEGE",
        "location": "TULSA, OK"
    },
    {
        "name": "GEORGE FOX UNIVERSITY",
        "location": "NEWBERG, OR"
    },
    {
        "name": "CASE WESTERN RESERVE UNIVERSITY",
        "location": "CLEVELAND, OH"
    },
    {
        "name": "BRADFORD SCHOOL",
        "location": "COLUMBUS, OH"
    },
    {
        "name": "ROBERT FIANCE BEAUTY SCHOOLS-NORTH PLAINFIELD",
        "location": "NORTH PLAINFIELD, NJ"
    },
    {
        "name": "TEXAS COLLEGE OF COSMETOLOGY-SAN ANGELO",
        "location": "SAN ANGELO, TX"
    },
    {
        "name": "WAYNE COUNTY SCHOOLS CAREER CENTER",
        "location": "SMITHVILLE, OH"
    },
    {
        "name": "COLBY-SAWYER COLLEGE",
        "location": "NEW LONDON, NH"
    },
    {
        "name": "HEALING HANDS SCHOOL OF HOLISTIC HEALTH",
        "location": "ESCONDIDO, CA"
    },
    {
        "name": "YESHIVA TORAS CHAIM",
        "location": "LAKEWOOD, NJ"
    },
    {
        "name": "CHEEKS BEAUTY ACADEMY",
        "location": "LOVELAND, CO"
    },
    {
        "name": "NORTHWESTERN COLLEGE",
        "location": "BRIDGEVIEW, IL"
    },
    {
        "name": "MANCHESTER UNIVERSITY",
        "location": "NORTH MANCHESTER, IN"
    },
    {
        "name": "LEECH LAKE TRIBAL COLLEGE",
        "location": "CASS LAKE, MN"
    },
    {
        "name": "MISSOURI SOUTHERN STATE UNIVERSITY",
        "location": "JOPLIN, MO"
    },
    {
        "name": "UNIVERSITY OF CENTRAL FLORIDA",
        "location": "ORLANDO, FL"
    },
    {
        "name": "SOUTH BAYLO UNIVERSITY",
        "location": "ANAHEIM, CA"
    },
    {
        "name": "SHASTA BIBLE COLLEGE AND GRADUATE SCHOOL",
        "location": "REDDING, CA"
    },
    {
        "name": "EAST-WEST UNIVERSITY",
        "location": "CHICAGO, IL"
    },
    {
        "name": "COLLEGE OF HEALTH CARE PROFESSIONS (THE)",
        "location": "HOUSTON, TX"
    },
    {
        "name": "SOUTHSIDE COLLEGE OF HEALTH SCIENCES",
        "location": "COLONIAL HEIGHTS, VA"
    },
    {
        "name": "HUNTINGTON JUNIOR COLLEGE",
        "location": "HUNTINGTON, WV"
    },
    {
        "name": "MIDDLESEX COMMUNITY COLLEGE",
        "location": "MIDDLETOWN, CT"
    },
    {
        "name": "HAWAII INSTITUTE OF HAIR DESIGN",
        "location": "HONOLULU, HI"
    },
    {
        "name": "ARIZONA COLLEGE OF NURSING-TEMPE",
        "location": "TEMPE, AZ"
    },
    {
        "name": "VICTOR VALLEY COMMUNITY COLLEGE - AVIATION TECHNOLOGY",
        "location": "VICTORVILLE, CA"
    },
    {
        "name": "HACKENSACK MERIDIAN SCHOOL OF MEDICINE",
        "location": "NUTLEY, NJ"
    },
    {
        "name": "SAN JOAQUIN VALLEY COLLEGE-PORTERVILLE",
        "location": "PORTERVILLE, CA"
    },
    {
        "name": "CALIFORNIA UNIVERSITY OF SCIENCE AND MEDICINE",
        "location": "COLTON, CA"
    },
    {
        "name": "AANIIIH NAKODA COLLEGE",
        "location": "HARLEM, MT"
    },
    {
        "name": "UNIVERSITY OF PUERTO RICO-ARECIBO",
        "location": "ARECIBO, PR"
    },
    {
        "name": "HOWARD COMMUNITY COLLEGE",
        "location": "COLUMBIA, MD"
    },
    {
        "name": "VIRGINIA BEACH THEOLOGICAL SEMINARY",
        "location": "VIRGINIA BEACH, VA"
    },
    {
        "name": "CORTIVA INSTITUTE-ARLINGTON",
        "location": "ARLINGTON, TX"
    },
    {
        "name": "ACAYDIA SCHOOL OF AESTHETICS",
        "location": "PROVO, UT"
    },
    {
        "name": "BROWARD COLLEGE",
        "location": "FORT LAUDERDALE, FL"
    },
    {
        "name": "MARIETTA COLLEGE",
        "location": "MARIETTA, OH"
    },
    {
        "name": "LEARNING BRIDGE CAREER INSTITUTE",
        "location": "HOUMA, LA"
    },
    {
        "name": "ELIM BIBLE INSTITUTE AND COLLEGE",
        "location": "LIMA, NY"
    },
    {
        "name": "PAUL MITCHELL THE SCHOOL-TWIN FALLS",
        "location": "TWIN FALLS, ID"
    },
    {
        "name": "PAUL MITCHELL THE SCHOOL-NORMAL",
        "location": "NORMAL, IL"
    },
    {
        "name": "UNIVERSITY OF OKLAHOMA",
        "location": "NORMAN, OK"
    },
    {
        "name": "SPRING HILL COLLEGE",
        "location": "MOBILE, AL"
    },
    {
        "name": "CARL SANDBURG COLLEGE",
        "location": "GALESBURG, IL"
    },
    {
        "name": "CENTRAL OREGON COMMUNITY COLLEGE",
        "location": "BEND, OR"
    },
    {
        "name": "OLD DOMINION UNIVERSITY",
        "location": "NORFOLK, VA"
    },
    {
        "name": "FRANKLIN AND MARSHALL COLLEGE",
        "location": "LANCASTER, PA"
    },
    {
        "name": "TENNESSEE COLLEGE OF APPLIED TECHNOLOGY-MEMPHIS",
        "location": "MEMPHIS, TN"
    },
    {
        "name": "PIMA MEDICAL INSTITUTE-HOUSTON",
        "location": "HOUSTON, TX"
    },
    {
        "name": "NORTHERN VIRGINIA SCHOOL OF THERAPEUTIC MASSAGE",
        "location": "FALLS CHURCH, VA"
    },
    {
        "name": "CLARENDON COLLEGE",
        "location": "CLARENDON, TX"
    },
    {
        "name": "SAN JACINTO COMMUNITY COLLEGE",
        "location": "PASADENA, TX"
    },
    {
        "name": "PAUL MITCHELL THE SCHOOL-LAS VEGAS",
        "location": "LAS VEGAS, NV"
    },
    {
        "name": "DIABLO VALLEY COLLEGE",
        "location": "PLEASANT HILL, CA"
    },
    {
        "name": "JOHN PAUL THE GREAT CATHOLIC UNIVERSITY",
        "location": "ESCONDIDO, CA"
    },
    {
        "name": "MILAN INSTITUTE-LAS VEGAS",
        "location": "LAS VEGAS, NV"
    },
    {
        "name": "FORTIS COLLEGE-CENTERVILLE",
        "location": "CENTERVILLE, OH"
    },
    {
        "name": "WASHBURN INSTITUTE OF TECHNOLOGY",
        "location": "TOPEKA, KS"
    },
    {
        "name": "BUCKEYE JOINT VOCATIONAL SCHOOL",
        "location": "NEW PHILADELPHIA, OH"
    },
    {
        "name": "SOUTHWESTERN OKLAHOMA STATE UNIVERSITY",
        "location": "WEATHERFORD, OK"
    },
    {
        "name": "ORANGEBURG CALHOUN TECHNICAL COLLEGE",
        "location": "ORANGEBURG, SC"
    },
    {
        "name": "MOTORING TECHNICAL TRAINING INSTITUTE",
        "location": "EAST PROVIDENCE, RI"
    },
    {
        "name": "OWENSBORO COMMUNITY AND TECHNICAL COLLEGE",
        "location": "OWENSBORO, KY"
    },
    {
        "name": "FLORIDA INSTITUTE OF TECHNOLOGY-ONLINE",
        "location": "MELBOURNE, FL"
    },
    {
        "name": "CALIFORNIA COLLEGE SAN DIEGO",
        "location": "SAN MARCOS, CA"
    },
    {
        "name": "MOBERLY AREA COMMUNITY COLLEGE",
        "location": "MOBERLY, MO"
    },
    {
        "name": "HOLMES COMMUNITY COLLEGE",
        "location": "GOODMAN, MS"
    },
    {
        "name": "REGENT UNIVERSITY",
        "location": "VIRGINIA BEACH, VA"
    },
    {
        "name": "MURRAY STATE COLLEGE",
        "location": "TISHOMINGO, OK"
    },
    {
        "name": "ALLEGHENY COLLEGE",
        "location": "MEADVILLE, PA"
    },
    {
        "name": "UNIVERSITY OF PHOENIX-GEORGIA",
        "location": "ATLANTA, GA"
    },
    {
        "name": "PAUL MITCHELL THE SCHOOL-CINCINNATI",
        "location": "CINCINNATI, OH"
    },
    {
        "name": "WEST VIRGINIA NORTHERN COMMUNITY COLLEGE",
        "location": "WHEELING, WV"
    },
    {
        "name": "CALIFORNIA STATE UNIVERSITY-SAN BERNARDINO",
        "location": "SAN BERNARDINO, CA"
    },
    {
        "name": "DIXIE TECHNICAL COLLEGE",
        "location": "SAINT GEORGE, UT"
    },
    {
        "name": "INLAND MASSAGE INSTITUTE",
        "location": "SPOKANE, WA"
    },
    {
        "name": "UNIVERSITY OF CALIFORNIA-RIVERSIDE",
        "location": "RIVERSIDE, CA"
    },
    {
        "name": "SAN JOAQUIN VALLEY COLLEGE-TEMECULA",
        "location": "TEMECULA, CA"
    },
    {
        "name": "CONCORDIA UNIVERSITY-PORTLAND",
        "location": "PORTLAND, OR"
    },
    {
        "name": "CUMBERLAND UNIVERSITY",
        "location": "LEBANON, TN"
    },
    {
        "name": "GEORGE T BAKER AVIATION TECHNICAL COLLEGE",
        "location": "MIAMI, FL"
    },
    {
        "name": "ST. JOHN VIANNEY COLLEGE SEMINARY",
        "location": "MIAMI, FL"
    },
    {
        "name": "UNIVERSITY OF MAINE AT FARMINGTON",
        "location": "FARMINGTON, ME"
    },
    {
        "name": "LE MOYNE COLLEGE",
        "location": "SYRACUSE, NY"
    },
    {
        "name": "JAMES SPRUNT COMMUNITY COLLEGE",
        "location": "KENANSVILLE, NC"
    },
    {
        "name": "RASMUSSEN UNIVERSITY-NORTH DAKOTA",
        "location": "FARGO, ND"
    },
    {
        "name": "PORTERVILLE COLLEGE",
        "location": "PORTERVILLE, CA"
    },
    {
        "name": "NOVA COLLEGE DE PUERTO RICO",
        "location": "BAYAMON, PR"
    },
    {
        "name": "PLATT COLLEGE-LAWTON",
        "location": "LAWTON, OK"
    },
    {
        "name": "MISSOURI COLLEGE OF COSMETOLOGY NORTH",
        "location": "SPRINGFIELD, MO"
    },
    {
        "name": "INSTITUTE FOR THERAPEUTIC MASSAGE",
        "location": "HASKELL, NJ"
    },
    {
        "name": "INSTITUTE OF HEALTH SCIENCES",
        "location": "HUNT VALLEY, MD"
    },
    {
        "name": "OEHRLEIN SCHOOL OF COSMETOLOGY",
        "location": "EAST PEORIA, IL"
    },
    {
        "name": "SAINT FRANCIS MEDICAL CENTER COLLEGE OF NURSING",
        "location": "PEORIA, IL"
    },
    {
        "name": "BARCLAY COLLEGE",
        "location": "HAVILAND, KS"
    },
    {
        "name": "FOSTERS COSMETOLOGY COLLEGE",
        "location": "RIPLEY, MS"
    },
    {
        "name": "BRITTANY BEAUTY ACADEMY",
        "location": "BROOKLYN, NY"
    },
    {
        "name": "RABBINICAL COLLEGE OF LONG ISLAND",
        "location": "LONG BEACH, NY"
    },
    {
        "name": "HAMILTON COLLEGE",
        "location": "CLINTON, NY"
    },
    {
        "name": "AMERICAN ACADEMY OF COSMETOLOGY",
        "location": "ORANGE PARK, FL"
    },
    {
        "name": "BUTLER BEAUTY ACADEMY",
        "location": "BUTLER, PA"
    },
    {
        "name": "WESLEYAN UNIVERSITY",
        "location": "MIDDLETOWN, CT"
    },
    {
        "name": "PRESENTATION COLLEGE",
        "location": "ABERDEEN, SD"
    },
    {
        "name": "SCHREINER UNIVERSITY",
        "location": "KERRVILLE, TX"
    },
    {
        "name": "AMERICAN MEDICAL SCIENCES CENTER",
        "location": "GLENDALE, CA"
    },
    {
        "name": "CURRY COLLEGE",
        "location": "MILTON, MA"
    },
    {
        "name": "ALHAMBRA BEAUTY COLLEGE",
        "location": "ALHAMBRA, CA"
    },
    {
        "name": "TRIANGLE TECH INC-BETHLEHEM",
        "location": "BETHLEHEM, PA"
    },
    {
        "name": "ALABAMA A&M UNIVERSITY",
        "location": "NORMAL, AL"
    },
    {
        "name": "GLENDALE COMMUNITY COLLEGE",
        "location": "GLENDALE, AZ"
    },
    {
        "name": "CHAMBERLAIN UNIVERSITY-FLORIDA",
        "location": "JACKSONVILLE, FL"
    },
    {
        "name": "DUVALL'S SCHOOL OF COSMETOLOGY",
        "location": "BEDFORD, TX"
    },
    {
        "name": "OGLE SCHOOL HAIR SKIN NAILS-NORTH DALLAS",
        "location": "DALLAS, TX"
    },
    {
        "name": "FLAGLER TECHNICAL COLLEGE",
        "location": "PALM COAST, FL"
    },
    {
        "name": "JOSE MARIA VARGAS UNIVERSITY",
        "location": "PEMBROKE PINES, FL"
    },
    {
        "name": "PACIFIC COLLEGE OF HEALTH SCIENCE-CHICAGO",
        "location": "CHICAGO, IL"
    },
    {
        "name": "CAREER BEAUTY COLLEGE",
        "location": "LAWRENCEBURG, TN"
    },
    {
        "name": "COSMETOLOGY SCHOOL OF ARTS AND SCIENCE LLC",
        "location": "BURLEY, ID"
    },
    {
        "name": "EAST CENTRAL UNIVERSITY",
        "location": "ADA, OK"
    },
    {
        "name": "UNIVERSITY OF WISCONSIN-EAU CLAIRE",
        "location": "EAU CLAIRE, WI"
    },
    {
        "name": "TEXAS WESLEYAN UNIVERSITY",
        "location": "FORT WORTH, TX"
    },
    {
        "name": "EASTERN UNIVERSITY",
        "location": "SAINT DAVIDS, PA"
    },
    {
        "name": "SAN ANTONIO COLLEGE",
        "location": "SAN ANTONIO, TX"
    },
    {
        "name": "WALLA WALLA COMMUNITY COLLEGE",
        "location": "WALLA WALLA, WA"
    },
    {
        "name": "VICI BEAUTY SCHOOL",
        "location": "GREENFIELD, WI"
    },
    {
        "name": "NORTHWEST COLLEGE OF ART & DESIGN",
        "location": "TACOMA, WA"
    },
    {
        "name": "SOUTHERN CAREERS INSTITUTE-CORPUS CHRISTI",
        "location": "CORPUS CHRISTI, TX"
    },
    {
        "name": "INTERNATIONAL INSTITUTE FOR RESTORATIVE PRACTICES",
        "location": "BETHLEHEM, PA"
    },
    {
        "name": "AVERETT UNIVERSITY-NON-TRADITIONAL PROGRAMS",
        "location": "DANVILLE, VA"
    },
    {
        "name": "AMERICAN FILM INSTITUTE CONSERVATORY",
        "location": "LOS ANGELES, CA"
    },
    {
        "name": "WESTMINSTER THEOLOGICAL SEMINARY IN CALIFORNIA",
        "location": "ESCONDIDO, CA"
    },
    {
        "name": "FULLERTON COLLEGE",
        "location": "FULLERTON, CA"
    },
    {
        "name": "UNIVERSITY OF GUAM",
        "location": "MANGILAO, GU"
    },
    {
        "name": "LOS ANGELES SOUTHWEST COLLEGE",
        "location": "LOS ANGELES, CA"
    },
    {
        "name": "SAN BERNARDINO VALLEY COLLEGE",
        "location": "SAN BERNARDINO, CA"
    },
    {
        "name": "COLUMBIA COLLEGE CHICAGO",
        "location": "CHICAGO, IL"
    },
    {
        "name": "BLACK HILLS STATE UNIVERSITY",
        "location": "SPEARFISH, SD"
    },
    {
        "name": "SAINT ELIZABETH COLLEGE OF NURSING",
        "location": "UTICA, NY"
    },
    {
        "name": "NEW ENGLAND TRACTOR TRAILER TRAINING SCHOOL OF MASSACHUSETTS",
        "location": "NORTH ANDOVER, MA"
    },
    {
        "name": "THE UNIVERSITY OF AESTHETICS & COSMETOLOGY",
        "location": "DOWNERS GROVE, IL"
    },
    {
        "name": "IVAEM COLLEGE",
        "location": "CAGUAS, PR"
    },
    {
        "name": "ATENAS COLLEGE",
        "location": "MANATI, PR"
    },
    {
        "name": "DRAGON RISES COLLEGE OF ORIENTAL MEDICINE",
        "location": "GAINESVILLE, FL"
    },
    {
        "name": "SOUTHWESTERN COLLEGE",
        "location": "WINFIELD, KS"
    },
    {
        "name": "UNIVERSITY OF THE SOUTHWEST",
        "location": "HOBBS, NM"
    },
    {
        "name": "PERRY TECHNICAL INSTITUTE",
        "location": "YAKIMA, WA"
    },
    {
        "name": "VALLEY COLLEGE-BECKLEY",
        "location": "BECKLEY, WV"
    },
    {
        "name": "BRIDGEWATER STATE UNIVERSITY",
        "location": "BRIDGEWATER, MA"
    },
    {
        "name": "MANUEL AND THERESA'S SCHOOL OF HAIR DESIGN-VICTORIA",
        "location": "VICTORIA, TX"
    },
    {
        "name": "BAIS MEDRASH MAYAN HATORAH",
        "location": "LAKEWOOD, NJ"
    },
    {
        "name": "BULL CITY DURHAM BEAUTY AND BARBER COLLEGE",
        "location": "DURHAM, NC"
    },
    {
        "name": "EMPIRE BEAUTY SCHOOL-LAKELAND",
        "location": "LAKELAND, FL"
    },
    {
        "name": "INSTITUTE OF BUDDHIST STUDIES",
        "location": "BERKELEY, CA"
    },
    {
        "name": "LEHIGH VALLEY BARBER SCHOOL",
        "location": "BETHLEHEM, PA"
    },
    {
        "name": "VOGUE INTERNATIONAL ACADEMY",
        "location": "HOUSTON, TX"
    },
    {
        "name": "GLOBAL MEDICAL & TECHNICAL TRAINING INSTITUTE",
        "location": "MIAMI, FL"
    },
    {
        "name": "SAN JOAQUIN VALLEY COLLEGE-HANFORD CLASSROOM",
        "location": "HANFORD, CA"
    },
    {
        "name": "CHRIST MISSION COLLEGE",
        "location": "SAN ANTONIO, TX"
    },
    {
        "name": "ACCESS CAREERS-ISLANDIA",
        "location": "ISLANDIA, NY"
    },
    {
        "name": "ADVENTHEALTH UNIVERSITY",
        "location": "ORLANDO, FL"
    },
    {
        "name": "FLORIDA CAREER COLLEGE-BOYNTON BEACH",
        "location": "BOYNTON BEACH, FL"
    },
    {
        "name": "TREND BARBER COLLEGE",
        "location": "HOUSTON, TX"
    },
    {
        "name": "STRAYER UNIVERSITY-PENNSYLVANIA",
        "location": "TREVOSE, PA"
    },
    {
        "name": "JOLIE HEALTH & BEAUTY ACADEMY-CHERRY HILL",
        "location": "CHERRY HILL, NJ"
    },
    {
        "name": "SAN FRANCISCO FILM SCHOOL",
        "location": "SAN FRANCISCO, CA"
    },
    {
        "name": "REND LAKE COLLEGE",
        "location": "INA, IL"
    },
    {
        "name": "WAUBONSEE COMMUNITY COLLEGE",
        "location": "SUGAR GROVE, IL"
    },
    {
        "name": "MIAMI UNIVERSITY-MIDDLETOWN",
        "location": "MIDDLETOWN, OH"
    },
    {
        "name": "CENTRAL YESHIVA BETH JOSEPH",
        "location": "BROOKLYN, NY"
    },
    {
        "name": "WESTERN TECHNICAL COLLEGE",
        "location": "EL PASO, TX"
    },
    {
        "name": "TULSA TECHNOLOGY CENTER",
        "location": "TULSA, OK"
    },
    {
        "name": "CHAMBERLAIN UNIVERSITY-OHIO",
        "location": "COLUMBUS, OH"
    },
    {
        "name": "UNITED THEOLOGICAL SEMINARY",
        "location": "DAYTON, OH"
    },
    {
        "name": "HOLY FAMILY COLLEGE",
        "location": "MANITOWOC, WI"
    },
    {
        "name": "BUENA VISTA UNIVERSITY",
        "location": "STORM LAKE, IA"
    },
    {
        "name": "ACADEMY OF ART UNIVERSITY",
        "location": "SAN FRANCISCO, CA"
    },
    {
        "name": "EVANGELICAL THEOLOGICAL SEMINARY",
        "location": "MYERSTOWN, PA"
    },
    {
        "name": "MICHIGAN STATE UNIVERSITY",
        "location": "EAST LANSING, MI"
    },
    {
        "name": "KING'S COLLEGE",
        "location": "WILKES-BARRE, PA"
    },
    {
        "name": "THE UNIVERSITY OF THE SOUTH",
        "location": "SEWANEE, TN"
    },
    {
        "name": "CEDAR VALLEY COLLEGE",
        "location": "LANCASTER, TX"
    },
    {
        "name": "CENTRAL TEXAS COLLEGE",
        "location": "KILLEEN, TX"
    },
    {
        "name": "ANTELOPE VALLEY COLLEGE",
        "location": "LANCASTER, CA"
    },
    {
        "name": "LONG BEACH CITY COLLEGE",
        "location": "LONG BEACH, CA"
    },
    {
        "name": "AVALON SCHOOL OF COSMETOLOGY-LAYTON",
        "location": "LAYTON, UT"
    },
    {
        "name": "ALASKA VOCATIONAL TECHNICAL CENTER",
        "location": "SEWARD, AK"
    },
    {
        "name": "SALINA AREA TECHNICAL COLLEGE",
        "location": "SALINA, KS"
    },
    {
        "name": "BELLUS ACADEMY",
        "location": "MANHATTAN, KS"
    },
    {
        "name": "SOUTHEASTERN BAPTIST THEOLOGICAL SEMINARY",
        "location": "WAKE FOREST, NC"
    },
    {
        "name": "SHENANDOAH UNIVERSITY",
        "location": "WINCHESTER, VA"
    },
    {
        "name": "MIAMI UNIVERSITY-OXFORD",
        "location": "OXFORD, OH"
    },
    {
        "name": "THE HAIR ACADEMY LLC",
        "location": "FAYETTEVILLE, TN"
    },
    {
        "name": "UNIVERSITY OF HOUSTON",
        "location": "HOUSTON, TX"
    },
    {
        "name": "RIPON COLLEGE",
        "location": "RIPON, WI"
    },
    {
        "name": "UNIVERSITY OF SOUTH CAROLINA-SUMTER",
        "location": "SUMTER, SC"
    },
    {
        "name": "WARREN COUNTY CAREER CENTER",
        "location": "LEBANON, OH"
    },
    {
        "name": "PARISIAN SPA INSTITUTE",
        "location": "JACKSONVILLE, FL"
    },
    {
        "name": "TARRANT COUNTY COLLEGE DISTRICT",
        "location": "FORT WORTH, TX"
    },
    {
        "name": "PAUL MITCHELL THE SCHOOL-MERRILLVILLE",
        "location": "MERRILLVILLE, IN"
    },
    {
        "name": "CASTLETON UNIVERSITY",
        "location": "CASTLETON, VT"
    },
    {
        "name": "WARNER UNIVERSITY",
        "location": "LAKE WALES, FL"
    },
    {
        "name": "LABOURE COLLEGE",
        "location": "MILTON, MA"
    },
    {
        "name": "FLORIDA POLYTECHNIC UNIVERSITY",
        "location": "LAKELAND, FL"
    },
    {
        "name": "ROSS COLLEGE-SYLVANIA",
        "location": "SYLVANIA, OH"
    },
    {
        "name": "PHILLIPS COMMUNITY COLLEGE OF THE UNIVERSITY OF ARKANSAS",
        "location": "HELENA, AR"
    },
    {
        "name": "UNITED STATES MERCHANT MARINE ACADEMY",
        "location": "KINGS POINT, NY"
    },
    {
        "name": "GROSSMONT-CUYAMACA COMMUNITY COLLEGE DISTRICT",
        "location": "EL CAJON, CA"
    },
    {
        "name": "SOUTHEASTERN ILLINOIS COLLEGE",
        "location": "HARRISBURG, IL"
    },
    {
        "name": "KENNETH SHULER SCHOOL OF COSMETOLOGY-COLUMBIA",
        "location": "COLUMBIA, SC"
    },
    {
        "name": "HOMESTEAD SCHOOLS",
        "location": "TORRANCE, CA"
    },
    {
        "name": "OUR LADY OF THE LAKE UNIVERSITY",
        "location": "SAN ANTONIO, TX"
    },
    {
        "name": "LAKELAND UNIVERSITY",
        "location": "PLYMOUTH, WI"
    },
    {
        "name": "CENTURA COLLEGE-NEWPORT NEWS",
        "location": "NEWPORT NEWS, VA"
    },
    {
        "name": "UNION COLLEGE",
        "location": "LINCOLN, NE"
    },
    {
        "name": "AVEDA ARTS & SCIENCES INSTITUTE-SAN ANTONIO",
        "location": "SAN ANTONIO, TX"
    },
    {
        "name": "ADVANCED WELDING INSTITUTE",
        "location": "SOUTH BURLINGTON, VT"
    },
    {
        "name": "INDIANA INSTITUTE OF TECHNOLOGY",
        "location": "FORT WAYNE, IN"
    },
    {
        "name": "AMERICAN SAMOA COMMUNITY COLLEGE",
        "location": "PAGO PAGO, AS"
    },
    {
        "name": "HERITAGE BIBLE COLLEGE",
        "location": "DUNN, NC"
    },
    {
        "name": "PAUL MITCHELL THE SCHOOL-FAYETTEVILLE",
        "location": "FAYETTEVILLE, NC"
    },
    {
        "name": "COLEGIO UNIVERSITARIO DE SAN JUAN",
        "location": "SAN JUAN, PR"
    },
    {
        "name": "PLATT COLLEGE-SAN DIEGO",
        "location": "SAN DIEGO, CA"
    },
    {
        "name": "YORK COUNTY SCHOOL OF TECHNOLOGY-ADULT & CONTINUING EDUCATION",
        "location": "YORK, PA"
    },
    {
        "name": "HDS TRUCK DRIVING INSTITUTE",
        "location": "TUCSON, AZ"
    },
    {
        "name": "AMBRIA COLLEGE OF NURSING",
        "location": "HOFFMAN ESTATES, IL"
    },
    {
        "name": "KEUKA COLLEGE",
        "location": "KEUKA PARK, NY"
    },
    {
        "name": "CENTER FOR MASSAGE",
        "location": "ASHEVILLE, NC"
    },
    {
        "name": "SOUTH UNIVERSITY-MONTGOMERY",
        "location": "MONTGOMERY, AL"
    },
    {
        "name": "LINCOLN UNIVERSITY",
        "location": "OAKLAND, CA"
    },
    {
        "name": "HENDRIX COLLEGE",
        "location": "CONWAY, AR"
    },
    {
        "name": "COVENANT COLLEGE",
        "location": "LOOKOUT MOUNTAIN, GA"
    },
    {
        "name": "UNIVERSITY OF WASHINGTON",
        "location": "SEATTLE, WA"
    },
    {
        "name": "SAN JOAQUIN VALLEY COLLEGE-ONTARIO",
        "location": "ONTARIO, CA"
    },
    {
        "name": "TOHONO O'ODHAM COMMUNITY COLLEGE",
        "location": "SELLS, AZ"
    },
    {
        "name": "AMERITECH COLLEGE-DRAPER",
        "location": "DRAPER, UT"
    },
    {
        "name": "RICE UNIVERSITY",
        "location": "HOUSTON, TX"
    },
    {
        "name": "UNIVERSITY OF NOTRE DAME",
        "location": "NOTRE DAME, IN"
    },
    {
        "name": "WAYLAND BAPTIST UNIVERSITY",
        "location": "PLAINVIEW, TX"
    },
    {
        "name": "UNIVERSITY OF VIRGINIA",
        "location": "CHARLOTTESVILLE, VA"
    },
    {
        "name": "KIAMICHI TECHNOLOGY CENTER-MCALESTER",
        "location": "MCALESTER, OK"
    },
    {
        "name": "UNIVERSITY OF PHOENIX-UTAH",
        "location": "SALT LAKE CITY, UT"
    },
    {
        "name": "INTERNATIONAL TECHNOLOGICAL UNIVERSITY",
        "location": "SANTA CLARA, CA"
    },
    {
        "name": "ROBERT MORRIS UNIVERSITY ILLINOIS",
        "location": "CHICAGO, IL"
    },
    {
        "name": "NEW HOPE CHRISTIAN COLLEGE-EUGENE",
        "location": "EUGENE, OR"
    },
    {
        "name": "CLARKS SUMMIT UNIVERSITY",
        "location": "CLARKS SUMMIT, PA"
    },
    {
        "name": "LINFIELD UNIVERSITY-ONLINE AND CONTINUING EDUCATION",
        "location": "MCMINNVILLE, OR"
    },
    {
        "name": "MARYMOUNT MANHATTAN COLLEGE",
        "location": "NEW YORK, NY"
    },
    {
        "name": "CRISWELL COLLEGE",
        "location": "DALLAS, TX"
    },
    {
        "name": "PC AGE-METROPARK",
        "location": "ISELIN, NJ"
    },
    {
        "name": "PALM BEACH ACADEMY OF HEALTH & BEAUTY",
        "location": "LAKE PARK, FL"
    },
    {
        "name": "REMINGTON COLLEGE-SHREVEPORT CAMPUS",
        "location": "SHREVEPORT, LA"
    },
    {
        "name": "INSTITUTE FOR BUSINESS AND TECHNOLOGY",
        "location": "SANTA CLARA, CA"
    },
    {
        "name": "FLORIDA SCHOOL OF MASSAGE",
        "location": "GAINESVILLE, FL"
    },
    {
        "name": "DORSEY SCHOOL OF BUSINESS-MADISON HEIGHTS",
        "location": "MADISON HEIGHTS, MI"
    },
    {
        "name": "RESEARCH COLLEGE OF NURSING",
        "location": "KANSAS CITY, MO"
    },
    {
        "name": "ST JOHN'S SEMINARY",
        "location": "CAMARILLO, CA"
    },
    {
        "name": "COLLEGE OF COURT REPORTING INC",
        "location": "VALPARAISO, IN"
    },
    {
        "name": "ROWAN COLLEGE OF SOUTH JERSEY GLOUCESTER CAMPUS",
        "location": "SEWELL, NJ"
    },
    {
        "name": "SALEM COMMUNITY COLLEGE",
        "location": "CARNEYS POINT, NJ"
    },
    {
        "name": "CAPRI INSTITUTE OF HAIR DESIGN-KENILWORTH",
        "location": "KENILWORTH, NJ"
    },
    {
        "name": "RECONSTRUCTIONIST RABBINICAL COLLEGE",
        "location": "WYNCOTE, PA"
    },
    {
        "name": "FIVE TOWNS COLLEGE",
        "location": "DIX HILLS, NY"
    },
    {
        "name": "UNITECH TRAINING ACADEMY-BATON ROUGE",
        "location": "BATON ROUGE, LA"
    },
    {
        "name": "INSTITUTE OF MEDICAL ULTRASOUND",
        "location": "ATLANTA, GA"
    },
    {
        "name": "PRO BEAUTY ACADEMY",
        "location": "EDISON, NJ"
    },
    {
        "name": "COLUMBIA COLLEGE - SPRINGFIELD TMOBILE",
        "location": "SPRINGFIELD, MO"
    },
    {
        "name": "TOTAL BEAUTY INSTITUTE",
        "location": "JACKSONVILLE, FL"
    },
    {
        "name": "PREMIERE AESTHETICS INSTITUTE",
        "location": "BEND, OR"
    },
    {
        "name": "PAUL MITCHELL THE SCHOOL-RENO-NORTH TAHOE",
        "location": "TRUCKEE, CA"
    },
    {
        "name": "NATIONAL UNIVERSITY COLLEGE - PEMBROKE PINES",
        "location": "PEMBROKE PINES, FL"
    },
    {
        "name": "NUC UNIVERSITY - IBC INSTITUTE - MAYAG?EZ",
        "location": "MAYAGUEZ, PR"
    },
    {
        "name": "SAN JOAQUIN VALLEY COLLEGE-RANCHO MIRAGE",
        "location": "RANCHO MIRAGE, CA"
    },
    {
        "name": "SAN JACINTO COMMUNITY COLLEGE DISTRICT - GENERATION PARK CAMPUS",
        "location": "HOUSTON, TX"
    },
    {
        "name": "PLATT COLLEGE-MILLER-MOTTE COLLEGE-CHATTANOOGA 2",
        "location": "CHATTANGOOGA, TN"
    },
    {
        "name": "TECHSHERPAS 365",
        "location": "TAMPA, FL"
    },
    {
        "name": "PPG TECHNICAL COLLEGE",
        "location": "CAGUAS, PR"
    },
    {
        "name": "UNITECH TRAINING ACADEMY-ALEXANDRIA",
        "location": "ALEXANDRIA, LA"
    },
    {
        "name": "FLORIDA INTERNATIONAL TRAINING INSTITUTE",
        "location": "MIAMI, FL"
    },
    {
        "name": "CALIFORNIA BARBER AND BEAUTY COLLEGE",
        "location": "SAN DIEGO, CA"
    },
    {
        "name": "RIO SALADO COLLEGE",
        "location": "TEMPE, AZ"
    },
    {
        "name": "CAROLINA UNIVERSITY",
        "location": "WINSTON-SALEM, NC"
    },
    {
        "name": "KENNY'S ACADEMY OF BARBERING",
        "location": "INDIANAPOLIS, IN"
    },
    {
        "name": "PRINCETON UNIVERSITY",
        "location": "PRINCETON, NJ"
    },
    {
        "name": "THE BEAUTY INSTITUTE",
        "location": "ALLENTOWN, PA"
    },
    {
        "name": "TRI-COUNTY COMMUNITY COLLEGE",
        "location": "MURPHY, NC"
    },
    {
        "name": "WESTERN PIEDMONT COMMUNITY COLLEGE",
        "location": "MORGANTON, NC"
    },
    {
        "name": "AUBURN CAREER CENTER",
        "location": "CONCORD TWP, OH"
    },
    {
        "name": "SOUTHERN CAREERS INSTITUTE-BROWNSVILLE",
        "location": "BROWNSVILLE, TX"
    },
    {
        "name": "LUBBOCK CHRISTIAN UNIVERSITY",
        "location": "LUBBOCK, TX"
    },
    {
        "name": "BOSSIER PARISH COMMUNITY COLLEGE",
        "location": "BOSSIER CITY, LA"
    },
    {
        "name": "BENJAMIN FRANKLIN INSTITUTE OF TECHNOLOGY",
        "location": "BOSTON, MA"
    },
    {
        "name": "SOUTHWEST TENNESSEE COMMUNITY COLLEGE",
        "location": "MEMPHIS, TN"
    },
    {
        "name": "LINCOLN COLLEGE OF TECHNOLOGY-GRAND PRAIRIE",
        "location": "GRAND PRAIRIE, TX"
    },
    {
        "name": "PAUL MITCHELL THE SCHOOL-SAN ANTONIO",
        "location": "SAN ANTONIO, TX"
    },
    {
        "name": "COLUMBIANA COUNTY CAREER AND TECHNICAL CENTER",
        "location": "LISBON, OH"
    },
    {
        "name": "EMPIRE BEAUTY SCHOOL-VIRGINIA BEACH",
        "location": "VIRGINIA BEACH, VA"
    },
    {
        "name": "CANTON CITY SCHOOLS ADULT CAREER AND TECHNICAL EDUCATION",
        "location": "CANTON, OH"
    },
    {
        "name": "CAMERON UNIVERSITY",
        "location": "LAWTON, OK"
    },
    {
        "name": "TENNESSEE TECHNOLOGICAL UNIVERSITY",
        "location": "COOKEVILLE, TN"
    },
    {
        "name": "BAYLOR UNIVERSITY",
        "location": "WACO, TX"
    },
    {
        "name": "WEST TEXAS A&M UNIVERSITY",
        "location": "CANYON, TX"
    },
    {
        "name": "OHIO UNIVERSITY-CHILLICOTHE CAMPUS",
        "location": "CHILLICOTHE, OH"
    },
    {
        "name": "MERCYHURST UNIVERSITY",
        "location": "ERIE, PA"
    },
    {
        "name": "CHISHOLM TRAIL TECHNOLOGY CENTER",
        "location": "OMEGA, OK"
    },
    {
        "name": "UNIVERSITY OF PHOENIX-ARIZONA",
        "location": "PHOENIX, AZ"
    },
    {
        "name": "UNIVERSITY OF PHOENIX-VIRGINIA",
        "location": "VIRGINIA BEACH, VA"
    },
    {
        "name": "CALIFORNIA LUTHERAN UNIVERSITY",
        "location": "THOUSAND OAKS, CA"
    },
    {
        "name": "THE CATHOLIC UNIVERSITY OF AMERICA",
        "location": "WASHINGTON, DC"
    },
    {
        "name": "CARRINGTON COLLEGE-BOISE",
        "location": "BOISE, ID"
    },
    {
        "name": "ILLINOIS VALLEY COMMUNITY COLLEGE",
        "location": "OGLESBY, IL"
    },
    {
        "name": "ARTISTIC ACADEMY OF HAIR DESIGN",
        "location": "MORRIS PLAINS, NJ"
    },
    {
        "name": "WILKES-BARRE AREA CAREER AND TECHNICAL CENTER PRACTICAL NURSING",
        "location": "WILKES BARRE, PA"
    },
    {
        "name": "LORENZO WALKER TECHNICAL COLLEGE",
        "location": "NAPLES, FL"
    },
    {
        "name": "UNIVERSITY OF EVANSVILLE",
        "location": "EVANSVILLE, IN"
    },
    {
        "name": "ALMA COLLEGE",
        "location": "ALMA, MI"
    },
    {
        "name": "UNIVERSITY SYSTEM OF MARYLAND",
        "location": "BALTIMORE, MD"
    },
    {
        "name": "MCPHS UNIVERSITY",
        "location": "BOSTON, MA"
    },
    {
        "name": "BETHEL UNIVERSITY",
        "location": "SAINT PAUL, MN"
    },
    {
        "name": "PAUL MITCHELL THE SCHOOL-MISSOURI COLUMBIA",
        "location": "COLUMBIA, MO"
    },
    {
        "name": "CHESTER COUNTY INTERMEDIATE UNIT",
        "location": "DOWNINGTOWN, PA"
    },
    {
        "name": "UNIVERSITY OF NORTH CAROLINA AT CHARLOTTE",
        "location": "CHARLOTTE, NC"
    },
    {
        "name": "EVANS HAIRSTYLING COLLEGE-REXBURG",
        "location": "REXBURG, ID"
    },
    {
        "name": "SAN JOAQUIN VALLEY COLLEGE-HESPERIA",
        "location": "HESPERIA, CA"
    },
    {
        "name": "EDUCATIONAL TECHNICAL COLLEGE-RECINTO DE BAYAMON",
        "location": "BAYAMON, PR"
    },
    {
        "name": "CORTIVA INSTITUTE-MAITLAND",
        "location": "MAITLAND, FL"
    },
    {
        "name": "WALDEN UNIVERSITY",
        "location": "MINNEAPOLIS, MN"
    },
    {
        "name": "ASSOCIATED BETH RIVKAH SCHOOLS",
        "location": "BROOKLYN, NY"
    },
    {
        "name": "CONCORDE CAREER COLLEGE-MEMPHIS",
        "location": "MEMPHIS, TN"
    },
    {
        "name": "CHATFIELD COLLEGE",
        "location": "SAINT MARTIN, OH"
    },
    {
        "name": "OHIO BUSINESS COLLEGE-SHEFFIELD",
        "location": "SHEFFIELD VILLAGE, OH"
    },
    {
        "name": "SUMTER BEAUTY COLLEGE",
        "location": "SUMTER, SC"
    },
    {
        "name": "LOVE BEAUTY SCHOOL INC",
        "location": "MANCHESTER, TN"
    },
    {
        "name": "UNIVERSITY OF HEALTH SCIENCES AND PHARMACY IN ST. LOUIS",
        "location": "SAINT LOUIS, MO"
    },
    {
        "name": "PAUL SMITHS COLLEGE OF ARTS AND SCIENCE",
        "location": "PAUL SMITHS, NY"
    },
    {
        "name": "SUNY COLLEGE OF AGRICULTURE AND TECHNOLOGY AT COBLESKILL",
        "location": "COBLESKILL, NY"
    },
    {
        "name": "ALASKA PACIFIC UNIVERSITY",
        "location": "ANCHORAGE, AK"
    },
    {
        "name": "UNIVERSITY OF ARKANSAS COMMUNITY COLLEGE RICH MOUNTAIN",
        "location": "MENA, AR"
    },
    {
        "name": "D A DORSEY TECHNICAL COLLEGE",
        "location": "MIAMI, FL"
    },
    {
        "name": "RIVERSIDE COLLEGE OF HEALTH CAREERS",
        "location": "NEWPORT NEWS, VA"
    },
    {
        "name": "ROANE STATE COMMUNITY COLLEGE",
        "location": "HARRIMAN, TN"
    },
    {
        "name": "STATE CENTER COMMUNITY COLLEGE DISTRICT",
        "location": "FRESNO, CA"
    },
    {
        "name": "CEDAR CREST COLLEGE",
        "location": "ALLENTOWN, PA"
    },
    {
        "name": "ST. MARY'S UNIVERSITY",
        "location": "SAN ANTONIO, TX"
    },
    {
        "name": "NORTHWEST EDUCATIONAL CENTER",
        "location": "HOUSTON, TX"
    },
    {
        "name": "FORTIS COLLEGE-RICHMOND",
        "location": "RICHMOND, VA"
    },
    {
        "name": "BRYAN UNIVERSITY",
        "location": "TEMPE, AZ"
    },
    {
        "name": "BERKELEY CITY COLLEGE",
        "location": "BERKELEY, CA"
    },
    {
        "name": "LA JAMES INTERNATIONAL COLLEGE-JOHNSTON",
        "location": "JOHNSTON, IA"
    },
    {
        "name": "AMERICAN EDUCATIONAL COLLEGE",
        "location": "BAYAMON, PR"
    },
    {
        "name": "UNIVERSITY OF PHOENIX-NEW MEXICO",
        "location": "ALBUQUERQUE, NM"
    },
    {
        "name": "UNIVERSITY OF THE PACIFIC",
        "location": "STOCKTON, CA"
    },
    {
        "name": "SOUTHEASTERN COMMUNITY COLLEGE",
        "location": "WEST BURLINGTON, IA"
    },
    {
        "name": "SIENA HEIGHTS UNIVERSITY",
        "location": "ADRIAN, MI"
    },
    {
        "name": "PENNSYLVANIA STATE UNIVERSITY-PENN STATE BEAVER",
        "location": "MONACA, PA"
    },
    {
        "name": "WESTMONT COLLEGE",
        "location": "SANTA BARBARA, CA"
    },
    {
        "name": "MODESTO JUNIOR COLLEGE",
        "location": "MODESTO, CA"
    },
    {
        "name": "BLUE CLIFF COLLEGE-LAFAYETTE",
        "location": "LAFAYETTE, LA"
    },
    {
        "name": "BAYAMON COMMUNITY COLLEGE",
        "location": "BAYAMON, PR"
    },
    {
        "name": "COLEGIO TECNICO DE ELECTRICIDAD GALLOZA",
        "location": "AGUADA, PR"
    },
    {
        "name": "WABASH COLLEGE",
        "location": "CRAWFORDSVILLE, IN"
    },
    {
        "name": "MASSACHUSETTS INSTITUTE OF TECHNOLOGY",
        "location": "CAMBRIDGE, MA"
    },
    {
        "name": "BATES COLLEGE",
        "location": "LEWISTON, ME"
    },
    {
        "name": "NORTHERN MICHIGAN UNIVERSITY",
        "location": "MARQUETTE, MI"
    },
    {
        "name": "SOUTHWEST MINNESOTA STATE UNIVERSITY",
        "location": "MARSHALL, MN"
    },
    {
        "name": "DAWSON COMMUNITY COLLEGE",
        "location": "GLENDIVE, MT"
    },
    {
        "name": "DAKOTA COLLEGE AT BOTTINEAU",
        "location": "BOTTINEAU, ND"
    },
    {
        "name": "EMPIRE BEAUTY SCHOOL-HANOVER PARK",
        "location": "HANOVER PARK, IL"
    },
    {
        "name": "DRURY UNIVERSITY",
        "location": "SPRINGFIELD, MO"
    },
    {
        "name": "JOHNSON C SMITH UNIVERSITY",
        "location": "CHARLOTTE, NC"
    },
    {
        "name": "SOUTHERN STATES UNIVERSITY",
        "location": "SAN DIEGO, CA"
    },
    {
        "name": "BOLIVAR TECHNICAL COLLEGE",
        "location": "BOLIVAR, MO"
    },
    {
        "name": "MASTER'S BARBER & STYLING COLLEGE",
        "location": "OLD HICKORY, TN"
    },
    {
        "name": "THE COLLEGE OF HEALTH CARE PROFESSIONS-SOUTH SAN ANTONIO",
        "location": "SAN ANTONIO, TX"
    },
    {
        "name": "SHEAR PERFECTION ACADEMY OF COSMETOLOGY",
        "location": "NASHVILLE, TN"
    },
    {
        "name": "STRAYER UNIVERSITY - DECATUR CAMPUS",
        "location": "DECATUR, AL"
    },
    {
        "name": "GUIDANCE COLLEGE",
        "location": "HOUSTON, TX"
    },
    {
        "name": "EDUCATIONAL TECHNICAL COLLEGE",
        "location": "LARES, PR"
    },
    {
        "name": "AI MIAMI INTERNATIONAL UNIVERSITY OF ART AND DESIGN",
        "location": "MIAMI, FL"
    },
    {
        "name": "PITC INSTITUTE",
        "location": "WYNCOTE, PA"
    },
    {
        "name": "FLORIDA CAREER COLLEGE-HIALEAH",
        "location": "HIALEAH, FL"
    },
    {
        "name": "DAVINES PROFESSIONAL ACADEMY OF BEAUTY AND BUSINESS",
        "location": "LINCOLN, NE"
    },
    {
        "name": "THE SALON PROFESSIONAL ACADEMY",
        "location": "SHOREWOOD, IL"
    },
    {
        "name": "UNIVERSITY OF FLORIDA",
        "location": "GAINESVILLE, FL"
    },
    {
        "name": "ANSON COLLEGE OF COSMETOLOGY",
        "location": "WADESBORO, NC"
    },
    {
        "name": "MOUNT SAINT JOSEPH UNIVERSITY",
        "location": "CINCINNATI, OH"
    },
    {
        "name": "NATIONAL PERSONAL TRAINING INSTITUTE",
        "location": "WINTER PARK, FL"
    },
    {
        "name": "SIMMONS UNIVERSITY",
        "location": "BOSTON, MA"
    },
    {
        "name": "NORTHEASTERN OKLAHOMA A&M COLLEGE",
        "location": "MIAMI, OK"
    },
    {
        "name": "FORSYTH TECHNICAL COMMUNITY COLLEGE",
        "location": "WINSTON-SALEM, NC"
    },
    {
        "name": "UNIVERSITY OF WISCONSIN-PARKSIDE",
        "location": "KENOSHA, WI"
    },
    {
        "name": "MARQUETTE UNIVERSITY",
        "location": "MILWAUKEE, WI"
    },
    {
        "name": "BELMONT COLLEGE",
        "location": "ST CLAIRSVILLE, OH"
    },
    {
        "name": "EUROPEAN MASSAGE THERAPY SCHOOL-LAS VEGAS",
        "location": "LAS VEGAS, NV"
    },
    {
        "name": "HERZING UNIVERSITY-AKRON",
        "location": "AKRON, OH"
    },
    {
        "name": "LE MOYNE-OWEN COLLEGE",
        "location": "MEMPHIS, TN"
    },
    {
        "name": "RADFORD M LOCKLIN TECHNICAL COLLEGE",
        "location": "MILTON, FL"
    },
    {
        "name": "DENHAM SPRINGS BEAUTY SCHOOL",
        "location": "DENHAM SPRINGS, LA"
    },
    {
        "name": "APPALACHIAN COLLEGE OF PHARMACY",
        "location": "OAKWOOD, VA"
    },
    {
        "name": "WILLIAMSBURG TECHNICAL COLLEGE",
        "location": "KINGSTREE, SC"
    },
    {
        "name": "MOORE NORMAN TECHNOLOGY CENTER",
        "location": "NORMAN, OK"
    },
    {
        "name": "JOHN C CALHOUN STATE COMMUNITY COLLEGE",
        "location": "TANNER, AL"
    },
    {
        "name": "HAYS ACADEMY OF HAIR DESIGN",
        "location": "SALINA, KS"
    },
    {
        "name": "WESTERN MICHIGAN UNIVERSITY",
        "location": "KALAMAZOO, MI"
    },
    {
        "name": "CENTRAL LAKES COLLEGE-BRAINERD",
        "location": "BRAINERD, MN"
    },
    {
        "name": "ITAWAMBA COMMUNITY COLLEGE",
        "location": "FULTON, MS"
    },
    {
        "name": "SPARTANBURG METHODIST COLLEGE",
        "location": "SPARTANBURG, SC"
    },
    {
        "name": "UNIVERSITY OF CINCINNATI-CLERMONT COLLEGE",
        "location": "BATAVIA, OH"
    },
    {
        "name": "LYNNES WELDING TRAINING",
        "location": "FARGO, ND"
    },
    {
        "name": "DEVRY UNIVERSITY-NEVADA",
        "location": "HENDERSON, NV"
    },
    {
        "name": "DEVRY UNIVERSITY-TEXAS",
        "location": "IRVING, TX"
    },
    {
        "name": "VIRGINIA MILITARY INSTITUTE",
        "location": "LEXINGTON, VA"
    },
    {
        "name": "PENNSYLVANIA STATE UNIVERSITY-PENN STATE YORK",
        "location": "YORK, PA"
    },
    {
        "name": "BETHEL UNIVERSITY",
        "location": "MCKENZIE, TN"
    },
    {
        "name": "YAHWEH BEAUTY ACADEMY",
        "location": "KILLEEN, TX"
    },
    {
        "name": "UNIVERSITY OF WISCONSIN-LA CROSSE",
        "location": "LA CROSSE, WI"
    },
    {
        "name": "WISCONSIN INDIANHEAD TECHNICAL COLLEGE",
        "location": "SHELL LAKE, WI"
    },
    {
        "name": "BALDWIN WALLACE UNIVERSITY",
        "location": "BEREA, OH"
    },
    {
        "name": "UNIVERSITY OF EAST-WEST MEDICINE",
        "location": "SUNNYVALE, CA"
    },
    {
        "name": "MONTESSORI CASA INTERNATIONAL",
        "location": "DENVER, CO"
    },
    {
        "name": "CITY COLLEGES OF CHICAGO-KENNEDY-KING COLLEGE",
        "location": "CHICAGO, IL"
    },
    {
        "name": "EMILY GRIFFITH TECHNICAL COLLEGE",
        "location": "DENVER, CO"
    },
    {
        "name": "INTERNATIONAL SALON AND SPA ACADEMY",
        "location": "COLORADO SPRINGS, CO"
    },
    {
        "name": "THE UNIVERSITY OF TENNESSEE-MARTIN",
        "location": "MARTIN, TN"
    },
    {
        "name": "AUTRY TECHNOLOGY CENTER",
        "location": "ENID, OK"
    },
    {
        "name": "ANABAPTIST MENNONITE BIBLICAL SEMINARY",
        "location": "ELKHART, IN"
    },
    {
        "name": "TRICOCI UNIVERSITY OF BEAUTY CULTURE-HIGHLAND",
        "location": "HIGHLAND, IN"
    },
    {
        "name": "BALTIMORE STUDIO OF HAIR DESIGN",
        "location": "BALTIMORE, MD"
    },
    {
        "name": "COLLEGE FOR CREATIVE STUDIES",
        "location": "DETROIT, MI"
    },
    {
        "name": "CARLETON COLLEGE",
        "location": "NORTHFIELD, MN"
    },
    {
        "name": "NAZARETH COLLEGE",
        "location": "ROCHESTER, NY"
    },
    {
        "name": "WESLEY BIBLICAL SEMINARY",
        "location": "RIDGELAND, MS"
    },
    {
        "name": "THE SALON PROFESSIONAL ACADEMY-NASHVILLE",
        "location": "NASHVILLE, TN"
    },
    {
        "name": "LUNA COMMUNITY COLLEGE",
        "location": "LAS VEGAS, NM"
    },
    {
        "name": "PLATT COLLEGE-MCCANN-MONROE",
        "location": "MONROE, LA"
    },
    {
        "name": "WEST VIRGINIA WESLEYAN COLLEGE",
        "location": "BUCKHANNON, WV"
    },
    {
        "name": "CARIBBEAN FORENSIC AND TECHNICAL COLLEGE",
        "location": "SAN JUAN, PR"
    },
    {
        "name": "TOCCOA FALLS COLLEGE",
        "location": "TOCCOA FALLS, GA"
    },
    {
        "name": "THE COLLEGE OF WOOSTER",
        "location": "WOOSTER, OH"
    },
    {
        "name": "RABBINICAL ACADEMY MESIVTA RABBI CHAIM BERLIN",
        "location": "BROOKLYN, NY"
    },
    {
        "name": "MOUNT ALOYSIUS COLLEGE",
        "location": "CRESSON, PA"
    },
    {
        "name": "CENTER FOR ADVANCED LEGAL STUDIES",
        "location": "HOUSTON, TX"
    },
    {
        "name": "BROADVIEW UNIVERSITY-WEST JORDAN",
        "location": "WEST JORDAN, UT"
    },
    {
        "name": "LIVINGSTONE COLLEGE",
        "location": "SALISBURY, NC"
    },
    {
        "name": "MARIST COLLEGE",
        "location": "POUGHKEEPSIE, NY"
    },
    {
        "name": "SAINT JOHN'S SEMINARY",
        "location": "BRIGHTON, MA"
    },
    {
        "name": "NORTH HENNEPIN COMMUNITY COLLEGE",
        "location": "BROOKLYN PARK, MN"
    },
    {
        "name": "CENTRAL METHODIST UNIVERSITY-COLLEGE OF LIBERAL ARTS AND SCIENCES",
        "location": "FAYETTE, MO"
    },
    {
        "name": "SWEET BRIAR COLLEGE",
        "location": "SWEET BRIAR, VA"
    },
    {
        "name": "INTER AMERICAN UNIVERSITY OF PUERTO RICO-GUAYAMA",
        "location": "GUAYAMA, PR"
    },
    {
        "name": "JUDSON COLLEGE",
        "location": "MARION, AL"
    },
    {
        "name": "JOLIE HAIR AND BEAUTY ACADEMY-LUDLOW",
        "location": "LUDLOW, MA"
    },
    {
        "name": "JOHNSON COUNTY COMMUNITY COLLEGE",
        "location": "OVERLAND PARK, KS"
    },
    {
        "name": "MASSACHUSETTS COLLEGE OF ART AND DESIGN",
        "location": "BOSTON, MA"
    },
    {
        "name": "PARK UNIVERSITY",
        "location": "PARKVILLE, MO"
    },
    {
        "name": "DAEMEN COLLEGE",
        "location": "AMHERST, NY"
    },
    {
        "name": "PCI ACADEMY-AMES",
        "location": "AMES, IA"
    },
    {
        "name": "AVIATION INSTITUTE OF MAINTENANCE-ATLANTA",
        "location": "DULUTH, GA"
    },
    {
        "name": "MILAN INSTITUTE-PALM DESERT",
        "location": "PALM DESERT, CA"
    },
    {
        "name": "OMNITECH INSTITUTE",
        "location": "ATLANTA, GA"
    },
    {
        "name": "SKINWORKS SCHOOL OF ADVANCED SKINCARE",
        "location": "SALT LAKE CITY, UT"
    },
    {
        "name": "MOUNTWEST COMMUNITY AND TECHNICAL COLLEGE",
        "location": "HUNTINGTON, WV"
    },
    {
        "name": "COLORADO STATE UNIVERSITY-SYSTEM OFFICE",
        "location": "DENVER, CO"
    },
    {
        "name": "ASHEVILLE-BUNCOMBE TECHNICAL COMMUNITY COLLEGE",
        "location": "ASHEVILLE, NC"
    },
    {
        "name": "PIKE COUNTY JOINT VOCATIONAL SCHOOL DISTRICT",
        "location": "PIKETON, OH"
    },
    {
        "name": "CAREER TECHNOLOGY CENTER OF LACKAWANNA COUNTY",
        "location": "SCRANTON, PA"
    },
    {
        "name": "WESTMINSTER COLLEGE",
        "location": "SALT LAKE CITY, UT"
    },
    {
        "name": "NORTHEAST TECHNOLOGY CENTER-CLAREMORE",
        "location": "CLAREMORE, OK"
    },
    {
        "name": "BUSHNELL UNIVERSITY",
        "location": "EUGENE, OR"
    },
    {
        "name": "BRANDMAN UNIVERSITY",
        "location": "IRVINE, CA"
    },
    {
        "name": "LYON COLLEGE",
        "location": "BATESVILLE, AR"
    },
    {
        "name": "UNIVERSITY OF COLORADO SYSTEM OFFICE",
        "location": "DENVER, CO"
    },
    {
        "name": "CALIFORNIA INSTITUTE OF TECHNOLOGY",
        "location": "PASADENA, CA"
    },
    {
        "name": "CONCORD UNIVERSITY",
        "location": "ATHENS, WV"
    },
    {
        "name": "CET-EL PASO",
        "location": "EL PASO, TX"
    },
    {
        "name": "BIRTHWISE MIDWIFERY SCHOOL",
        "location": "BRIDGTON, ME"
    },
    {
        "name": "MILAN INSTITUTE-SPARKS",
        "location": "SPARKS, NV"
    },
    {
        "name": "CONCORDE CAREER INSTITUTE-MIRAMAR",
        "location": "MIRAMAR, FL"
    },
    {
        "name": "ATLANTIC TECHNICAL COLLEGE",
        "location": "COCONUT CREEK, FL"
    },
    {
        "name": "EASTERN MAINE COMMUNITY COLLEGE",
        "location": "BANGOR, ME"
    },
    {
        "name": "LAKE SUPERIOR COLLEGE",
        "location": "DULUTH, MN"
    },
    {
        "name": "MERIDIAN COMMUNITY COLLEGE",
        "location": "MERIDIAN, MS"
    },
    {
        "name": "AMERICAN INTERNATIONAL COLLEGE",
        "location": "SPRINGFIELD, MA"
    },
    {
        "name": "TELSHE YESHIVA-CHICAGO",
        "location": "CHICAGO, IL"
    },
    {
        "name": "ROBERT FIANCE BEAUTY SCHOOLS-WEST NEW YORK",
        "location": "WEST NEW YORK, NJ"
    },
    {
        "name": "GRATZ COLLEGE",
        "location": "MELROSE PARK, PA"
    },
    {
        "name": "J'S BARBER COLLEGE",
        "location": "NEW IBERIA, LA"
    },
    {
        "name": "EMPIRE BEAUTY SCHOOL-TAMPA",
        "location": "TAMPA, FL"
    },
    {
        "name": "SUNCOAST TECHNICAL EDUCATION CENTER",
        "location": "BROOKSVILLE, FL"
    },
    {
        "name": "CALIFORNIA COLLEGE OF BARBERING AND COSMETOLOGY",
        "location": "STOCKTON, CA"
    },
    {
        "name": "MICHAEL'S BARBER & HAIR STYLIST ACADEMY",
        "location": "IRVING, TX"
    },
    {
        "name": "ADRIAN H. WALLACE BARBER ACADEMY",
        "location": "PENSACOLA, FL"
    },
    {
        "name": "ADVANTAGE TECHNICAL COLLEGE-AGUADILLA",
        "location": "AGUADILLA, PR"
    },
    {
        "name": "WINSTON SALEM BARBER SCHOOL",
        "location": "WINSTON-SALEM, NC"
    },
    {
        "name": "CONCORDIA SEMINARY",
        "location": "SAINT LOUIS, MO"
    },
    {
        "name": "VIRGINIA UNIVERSITY OF LYNCHBURG",
        "location": "LYNCHBURG, VA"
    },
    {
        "name": "SAN DIEGO CULINARY INSTITUTE",
        "location": "LA MESA, CA"
    },
    {
        "name": "THE TEMPLE ANNAPOLIS-A PAUL MITCHELL PARTNER SCHOOL",
        "location": "ANNAPOLIS, MD"
    },
    {
        "name": "UNITED INTERNATIONAL COLLEGE",
        "location": "MIRAMAR, FL"
    },
    {
        "name": "MORENO VALLEY COLLEGE",
        "location": "MORENO VALLEY, CA"
    },
    {
        "name": "MOUNT WACHUSETT COMMUNITY COLLEGE",
        "location": "GARDNER, MA"
    },
    {
        "name": "PLATT COLLEGE-MCCANN-ALLENTOWN",
        "location": "ALLENTOWN, PA"
    },
    {
        "name": "MESABI RANGE COLLEGE",
        "location": "VIRGINIA, MN"
    },
    {
        "name": "FRANCISCAN UNIVERSITY OF STEUBENVILLE",
        "location": "STEUBENVILLE, OH"
    },
    {
        "name": "ISOTHERMAL COMMUNITY COLLEGE",
        "location": "SPINDALE, NC"
    },
    {
        "name": "WAYNE COUNTY COMMUNITY COLLEGE DISTRICT",
        "location": "DETROIT, MI"
    },
    {
        "name": "ANDREW COLLEGE",
        "location": "CUTHBERT, GA"
    },
    {
        "name": "CENTRAL LOUISIANA TECHNICAL COMMUNITY COLLEGE",
        "location": "ALEXANDRIA, LA"
    },
    {
        "name": "CONWAY SCHOOL OF LANDSCAPE DESIGN",
        "location": "NORTHAMPTON, MA"
    },
    {
        "name": "DEAN COLLEGE",
        "location": "FRANKLIN, MA"
    },
    {
        "name": "DAKOTA COUNTY TECHNICAL COLLEGE",
        "location": "ROSEMOUNT, MN"
    },
    {
        "name": "PENNSYLVANIA STATE UNIVERSITY-PENN STATE WILKES-BARRE",
        "location": "LEHMAN, PA"
    },
    {
        "name": "ROSS MEDICAL EDUCATION CENTER-DAVISON",
        "location": "DAVISON, MI"
    },
    {
        "name": "UNIVERSITY OF NORTH TEXAS",
        "location": "DENTON, TX"
    },
    {
        "name": "SOUTH FLORIDA STATE COLLEGE",
        "location": "AVON PARK, FL"
    },
    {
        "name": "AIKEN TECHNICAL COLLEGE",
        "location": "GRANITEVILLE, SC"
    },
    {
        "name": "SOUTH COLLEGE",
        "location": "KNOXVILLE, TN"
    },
    {
        "name": "TEMPLE COLLEGE",
        "location": "TEMPLE, TX"
    },
    {
        "name": "SHEAR FINESSE BEAUTY ACADEMY",
        "location": "JACKSONVILLE, FL"
    },
    {
        "name": "COLLEGE OF THE ALBEMARLE",
        "location": "ELIZABETH CITY, NC"
    },
    {
        "name": "CYBERTEX INSTITUTE OF TECHNOLOGY",
        "location": "AUSTIN, TX"
    },
    {
        "name": "ASHLAND COUNTY-WEST HOLMES CAREER CENTER",
        "location": "ASHLAND, OH"
    },
    {
        "name": "MUSKINGUM UNIVERSITY",
        "location": "NEW CONCORD, OH"
    },
    {
        "name": "TERRA STATE COMMUNITY COLLEGE",
        "location": "FREMONT, OH"
    },
    {
        "name": "UNIVERSITY OF THE SCIENCES",
        "location": "PHILADELPHIA, PA"
    },
    {
        "name": "HIGH DESERT MEDICAL COLLEGE",
        "location": "LANCASTER, CA"
    },
    {
        "name": "CALIFORNIA STATE UNIVERSITY-SAN MARCOS",
        "location": "SAN MARCOS, CA"
    },
    {
        "name": "QUINSIGAMOND COMMUNITY COLLEGE",
        "location": "WORCESTER, MA"
    },
    {
        "name": "TOUGALOO COLLEGE",
        "location": "TOUGALOO, MS"
    },
    {
        "name": "AVEDA FREDRIC'S INSTITUTE-CINCINNATI",
        "location": "WEST CHESTER, OH"
    },
    {
        "name": "BARBER SCHOOL OF PITTSBURGH",
        "location": "PITTSBURGH, PA"
    },
    {
        "name": "FORTIS INSTITUTE-LAWRENCEVILLE",
        "location": "LAWRENCEVILLE, NJ"
    },
    {
        "name": "LEWIS & CLARK COLLEGE",
        "location": "PORTLAND, OR"
    },
    {
        "name": "AMERICAN BEAUTY COLLEGE",
        "location": "WEST COVINA, CA"
    },
    {
        "name": "WESLEY COLLEGE",
        "location": "DOVER, DE"
    },
    {
        "name": "DORSEY SCHOOL OF BUSINESS-ROSEVILLE",
        "location": "ROSEVILLE, MI"
    },
    {
        "name": "SMITH COLLEGE",
        "location": "NORTHAMPTON, MA"
    },
    {
        "name": "MICHIGAN COLLEGE OF BEAUTY-MONROE",
        "location": "MONROE, MI"
    },
    {
        "name": "STATE FAIR COMMUNITY COLLEGE",
        "location": "SEDALIA, MO"
    },
    {
        "name": "ST BONAVENTURE UNIVERSITY",
        "location": "SAINT BONAVENTURE, NY"
    },
    {
        "name": "LOUISIANA STATE UNIVERSITY HEALTH SCIENCES CENTER-SHREVEPORT",
        "location": "SHREVEPORT, LA"
    },
    {
        "name": "CITY POINTE BEAUTY ACADEMY",
        "location": "WEBB CITY, MO"
    },
    {
        "name": "UNIVERSITY OF NEBRASKA AT KEARNEY",
        "location": "KEARNEY, NE"
    },
    {
        "name": "PACIFIC COLLEGE OF HEALTH AND SCIENCE",
        "location": "SAN DIEGO, CA"
    },
    {
        "name": "NATIONAL AMERICAN UNIVERSITY-GEORGETOWN",
        "location": "GEORGETOWN, TX"
    },
    {
        "name": "DEVRY UNIVERSITY-ILLINOIS",
        "location": "CHICAGO, IL"
    },
    {
        "name": "DEWEY UNIVERSITY-CAROLINA",
        "location": "CAROLINA, PR"
    },
    {
        "name": "BROWNSON TECHNICAL SCHOOL",
        "location": "ANAHEIM, CA"
    },
    {
        "name": "PAUL MITCHELL THE SCHOOL-TAMPA",
        "location": "TAMPA, FL"
    },
    {
        "name": "CHARTER OAK STATE COLLEGE",
        "location": "NEW BRITAIN, CT"
    },
    {
        "name": "MOUNT ST. MARY'S UNIVERSITY",
        "location": "EMMITSBURG, MD"
    },
    {
        "name": "CHADRON STATE COLLEGE",
        "location": "CHADRON, NE"
    },
    {
        "name": "RUTGERS UNIVERSITY-CAMDEN",
        "location": "CAMDEN, NJ"
    },
    {
        "name": "FORTIS INSTITUTE-WAYNE",
        "location": "WAYNE, NJ"
    },
    {
        "name": "BEAUTY TECHNICAL COLLEGE INC",
        "location": "TAHLEQUAH, OK"
    },
    {
        "name": "BELOIT COLLEGE",
        "location": "BELOIT, WI"
    },
    {
        "name": "EAST TEXAS BAPTIST UNIVERSITY",
        "location": "MARSHALL, TX"
    },
    {
        "name": "EDWARD WATERS COLLEGE",
        "location": "JACKSONVILLE, FL"
    },
    {
        "name": "UNIVERSITY OF SOUTH FLORIDA-SARASOTA-MANATEE",
        "location": "SARASOTA, FL"
    },
    {
        "name": "RANKEN TECHNICAL COLLEGE",
        "location": "SAINT LOUIS, MO"
    },
    {
        "name": "GREENSBORO COLLEGE",
        "location": "GREENSBORO, NC"
    },
    {
        "name": "NORTH CAROLINA A&T STATE UNIVERSITY",
        "location": "GREENSBORO, NC"
    },
    {
        "name": "MARION MILITARY INSTITUTE",
        "location": "MARION, AL"
    },
    {
        "name": "MANHATTAN AREA TECHNICAL COLLEGE",
        "location": "MANHATTAN, KS"
    },
    {
        "name": "COLLEGE OF THE HOLY CROSS",
        "location": "WORCESTER, MA"
    },
    {
        "name": "STRAYER UNIVERSITY-ARKANSAS",
        "location": "LITTLE ROCK, AR"
    },
    {
        "name": "BUCKNER BARBER SCHOOL",
        "location": "DALLAS, TX"
    },
    {
        "name": "MARSHALL UNIVERSITY",
        "location": "HUNTINGTON, WV"
    },
    {
        "name": "THADDEUS STEVENS COLLEGE OF TECHNOLOGY",
        "location": "LANCASTER, PA"
    },
    {
        "name": "AVERETT UNIVERSITY",
        "location": "DANVILLE, VA"
    },
    {
        "name": "OHIO NORTHERN UNIVERSITY",
        "location": "ADA, OH"
    },
    {
        "name": "MT HOOD COMMUNITY COLLEGE",
        "location": "GRESHAM, OR"
    },
    {
        "name": "UNIVERSIDAD CENTRAL DEL CARIBE",
        "location": "BAYAMON, PR"
    },
    {
        "name": "CARRINGTON COLLEGE-SAN LEANDRO CAMPUS",
        "location": "SAN LEANDRO, CA"
    },
    {
        "name": "PIMA MEDICAL INSTITUTE-TUCSON",
        "location": "TUCSON, AZ"
    },
    {
        "name": "CALIFORNIA STATE POLYTECHNIC UNIVERSITY-POMONA",
        "location": "POMONA, CA"
    },
    {
        "name": "UNIVERSITY OF COLORADO DENVER/ANSCHUTZ MEDICAL CAMPUS",
        "location": "DENVER, CO"
    },
    {
        "name": "WEST VIRGINIA UNIVERSITY INSTITUTE OF TECHNOLOGY",
        "location": "BECKLEY, WV"
    },
    {
        "name": "UNIVERSAL COLLEGE OF BEAUTY INC-LOS ANGELES 2",
        "location": "LOS ANGELES, CA"
    },
    {
        "name": "NORTHEASTERN JUNIOR COLLEGE",
        "location": "STERLING, CO"
    },
    {
        "name": "SOUTHERN ARKANSAS UNIVERSITY",
        "location": "MAGNOLIA, AR"
    },
    {
        "name": "SIMPSON COLLEGE",
        "location": "INDIANOLA, IA"
    },
    {
        "name": "LABETTE COMMUNITY COLLEGE",
        "location": "PARSONS, KS"
    },
    {
        "name": "BRAZOSPORT COLLEGE",
        "location": "LAKE JACKSON, TX"
    },
    {
        "name": "ROSS MEDICAL EDUCATION CENTER-KENTWOOD",
        "location": "KENTWOOD, MI"
    },
    {
        "name": "CENTURA COLLEGE-CHESAPEAKE",
        "location": "CHESAPEAKE, VA"
    },
    {
        "name": "TRICOCI UNIVERSITY OF BEAUTY CULTURE-BRIDGEVIEW",
        "location": "BRIDGEVIEW, IL"
    },
    {
        "name": "EAST WEST COLLEGE OF NATURAL MEDICINE",
        "location": "SARASOTA, FL"
    },
    {
        "name": "ROSEMAN UNIVERSITY OF HEALTH SCIENCES",
        "location": "HENDERSON, NV"
    },
    {
        "name": "AVEDA INSTITUTE-TALLAHASSEE",
        "location": "TALLAHASSEE, FL"
    },
    {
        "name": "MILAN INSTITUTE-FRESNO",
        "location": "FRESNO, CA"
    },
    {
        "name": "NATIONAL CONSERVATORY OF DRAMATIC ARTS",
        "location": "WASHINGTON, DC"
    },
    {
        "name": "CAPE CORAL TECHNICAL COLLEGE",
        "location": "CAPE CORAL, FL"
    },
    {
        "name": "YORK COUNTY COMMUNITY COLLEGE",
        "location": "WELLS, ME"
    },
    {
        "name": "BAYSHIRE ACADEMY OF BEAUTY CRAFT INC",
        "location": "BAY CITY, MI"
    },
    {
        "name": "MICHIGAN COLLEGE OF BEAUTY-TROY",
        "location": "TROY, MI"
    },
    {
        "name": "MISSISSIPPI COLLEGE OF BEAUTY CULTURE",
        "location": "LAUREL, MS"
    },
    {
        "name": "MITCHELLS ACADEMY",
        "location": "WILSON, NC"
    },
    {
        "name": "ILLINOIS MEDIA SCHOOL",
        "location": "LOMBARD, IL"
    },
    {
        "name": "PHILADELPHIA COLLEGE OF OSTEOPATHIC MEDICINE",
        "location": "PHILADELPHIA, PA"
    },
    {
        "name": "CLEARY UNIVERSITY",
        "location": "HOWELL, MI"
    },
    {
        "name": "GLITZ SCHOOL OF COSMETOLOGY",
        "location": "LAS CRUCES, NM"
    },
    {
        "name": "PONCE HEALTH SCIENCES UNIVERSITY-CENTRO UNIVERSITARIO DE SAN JUAN",
        "location": "SANTURCE, PR"
    },
    {
        "name": "SAN DIEGO GLOBAL KNOWLEDGE UNIVERSITY",
        "location": "SAN DIEGO, CA"
    },
    {
        "name": "PMCA PITTSBURGH MULTICULTURAL COSMETOLOGY ACADEMY",
        "location": "PITTSBURGH, PA"
    },
    {
        "name": "HEALTH-TECH INSTITUTE OF MEMPHIS",
        "location": "MEMPHIS, TN"
    },
    {
        "name": "PONCE HEALTH SCIENCES UNIVERSITY-ST LOUIS",
        "location": "ST. LOUIS, MO"
    },
    {
        "name": "DERECH HACHAIM SEMINARY",
        "location": "MONROE, NY"
    },
    {
        "name": "LOTUS SCHOOL OF INTEGRATED PROFESSIONS",
        "location": "HENRICO, VA"
    },
    {
        "name": "PONCE HEALTH SCIENCES UNIVERSITY-EAST",
        "location": "PONCE, PR"
    },
    {
        "name": "PASCO-HERNANDO STATE COLLEGE",
        "location": "NEW PORT RICHEY, FL"
    },
    {
        "name": "YESHIVA ZICHRON ARYEH",
        "location": "FAR ROCKAWAY, NY"
    },
    {
        "name": "REGIONAL CENTER FOR BORDER HEALTH",
        "location": "SOMERTON, AZ"
    },
    {
        "name": "DELTA COLLEGE",
        "location": "UNIVERSITY CENTER, MI"
    },
    {
        "name": "HOPE COLLEGE OF ARTS AND SCIENCES",
        "location": "POMPANO BEACH, FL"
    },
    {
        "name": "LAMAR STATE COLLEGE-ORANGE",
        "location": "ORANGE, TX"
    },
    {
        "name": "UNIVERSITY OF OREGON",
        "location": "EUGENE, OR"
    },
    {
        "name": "SUMMIT SALON ACADEMY-PORTLAND",
        "location": "TIGARD, OR"
    },
    {
        "name": "UNIVERSITY OF HOUSTON-VICTORIA",
        "location": "VICTORIA, TX"
    },
    {
        "name": "MID-STATE TECHNICAL COLLEGE",
        "location": "WISCONSIN RAPIDS, WI"
    },
    {
        "name": "GURNICK ACADEMY OF MEDICAL ARTS",
        "location": "SAN MATEO, CA"
    },
    {
        "name": "RHODES COLLEGE",
        "location": "MEMPHIS, TN"
    },
    {
        "name": "KENTUCKY COMMUNITY AND TECHNICAL COLLEGE SYSTEM",
        "location": "VERSAILLES, KY"
    },
    {
        "name": "HAMLINE UNIVERSITY",
        "location": "SAINT PAUL, MN"
    },
    {
        "name": "PENNSYLVANIA STATE UNIVERSITY-PENN STATE BERKS",
        "location": "READING, PA"
    },
    {
        "name": "PENNSYLVANIA STATE UNIVERSITY-PENN STATE HAZLETON",
        "location": "HAZLETON, PA"
    },
    {
        "name": "MADISON ADULT CAREER CENTER",
        "location": "MANSFIELD, OH"
    },
    {
        "name": "UNIVERSITY OF RIO GRANDE",
        "location": "RIO GRANDE, OH"
    },
    {
        "name": "LANDER UNIVERSITY",
        "location": "GREENWOOD, SC"
    },
    {
        "name": "NORTHERN STATE UNIVERSITY",
        "location": "ABERDEEN, SD"
    },
    {
        "name": "TENNESSEE COLLEGE OF APPLIED TECHNOLOGY-NEWBERN",
        "location": "NEWBERN, TN"
    },
    {
        "name": "MCLENNAN COMMUNITY COLLEGE",
        "location": "WACO, TX"
    },
    {
        "name": "PAUL MITCHELL THE SCHOOL-OVERLAND PARK",
        "location": "OVERLAND PARK, KS"
    },
    {
        "name": "UNIVERSITY OF WISCONSIN-MILWAUKEE",
        "location": "MILWAUKEE, WI"
    },
    {
        "name": "KENT STATE UNIVERSITY AT ASHTABULA",
        "location": "ASHTABULA, OH"
    },
    {
        "name": "TENNESSEE COLLEGE OF APPLIED TECHNOLOGY-ATHENS",
        "location": "ATHENS, TN"
    },
    {
        "name": "NATIONAL AMERICAN UNIVERSITY-RICHARDSON",
        "location": "RICHARDSON, TX"
    },
    {
        "name": "VIRGINIA WESLEYAN UNIVERSITY",
        "location": "VIRGINIA BEACH, VA"
    },
    {
        "name": "CATHOLIC DISTANCE UNIVERSITY",
        "location": "CHARLES TOWN, WV"
    },
    {
        "name": "NEW HORIZONS MEDICAL INSTITUTE",
        "location": "NORCROSS, GA"
    },
    {
        "name": "OGLE SCHOOL HAIR SKIN NAILS-STAFFORD",
        "location": "STAFFORD, TX"
    },
    {
        "name": "CEM COLLEGE-MAYAGUEZ",
        "location": "MAYAGUEZ, PR"
    },
    {
        "name": "AMERICAN INTERCONTINENTAL UNIVERSITY",
        "location": "CHANDLER, AZ"
    },
    {
        "name": "PLATT COLLEGE-MOORE",
        "location": "MOORE, OK"
    },
    {
        "name": "CLARY SAGE COLLEGE",
        "location": "TULSA, OK"
    },
    {
        "name": "SHORTER COLLEGE",
        "location": "N LITTLE ROCK, AR"
    },
    {
        "name": "MYCOMPUTERCAREER.EDU-COLUMBUS",
        "location": "WESTERVILLE, OH"
    },
    {
        "name": "BOISE BIBLE COLLEGE",
        "location": "BOISE, ID"
    },
    {
        "name": "CONVERSE COLLEGE",
        "location": "SPARTANBURG, SC"
    },
    {
        "name": "THE CHICAGO SCHOOL OF PROFESSIONAL PSYCHOLOGY AT CHICAGO",
        "location": "CHICAGO, IL"
    },
    {
        "name": "COLLEGE OF SOUTHERN MARYLAND",
        "location": "LA PLATA, MD"
    },
    {
        "name": "BOSTON UNIVERSITY",
        "location": "BOSTON, MA"
    },
    {
        "name": "NICHOLS COLLEGE",
        "location": "DUDLEY, MA"
    },
    {
        "name": "THE MICHIGAN BARBER SCHOOL",
        "location": "DETROIT, MI"
    },
    {
        "name": "CONCORDIA UNIVERSITY-NEBRASKA",
        "location": "SEWARD, NE"
    },
    {
        "name": "BRYANT & STRATTON COLLEGE-ALBANY",
        "location": "ALBANY, NY"
    },
    {
        "name": "P&A SCHOLARS BEAUTY SCHOOL",
        "location": "DETROIT, MI"
    },
    {
        "name": "OTTAWA UNIVERSITY-MILWAUKEE",
        "location": "BROOKFIELD, WI"
    },
    {
        "name": "AOMA GRADUATE SCHOOL OF INTEGRATIVE MEDICINE",
        "location": "AUSTIN, TX"
    },
    {
        "name": "PIERCE COLLEGE-PUYALLUP",
        "location": "LAKEWOOD, WA"
    },
    {
        "name": "SOUTHERN TEXAS CAREERS ACADEMY",
        "location": "MCALLEN, TX"
    },
    {
        "name": "CORNISH COLLEGE OF THE ARTS",
        "location": "SEATTLE, WA"
    },
    {
        "name": "ACADEMY FOR FIVE ELEMENT ACUPUNCTURE",
        "location": "GAINESVILLE, FL"
    },
    {
        "name": "ELIZABETH GRADY SCHOOL OF ESTHETICS AND MASSAGE THERAPY",
        "location": "MEDFORD, MA"
    },
    {
        "name": "INTERACTIVE COLLEGE OF TECHNOLOGY-NEWPORT",
        "location": "NEWPORT, KY"
    },
    {
        "name": "NEW YORK COLLEGE OF TRADITIONAL CHINESE MEDICINE",
        "location": "MINEOLA, NY"
    },
    {
        "name": "HAYWOOD COMMUNITY COLLEGE",
        "location": "CLYDE, NC"
    },
    {
        "name": "JOE KUBERT SCHOOL OF CARTOON AND GRAPHIC ART",
        "location": "DOVER, NJ"
    },
    {
        "name": "CLINTON ESSEX WARREN WASHINGTON BOCES",
        "location": "PLATTSBURGH, NY"
    },
    {
        "name": "HUNTER BUSINESS SCHOOL",
        "location": "LEVITTOWN, NY"
    },
    {
        "name": "PRESBYTERIAN COLLEGE",
        "location": "CLINTON, SC"
    },
    {
        "name": "SOUTH TEXAS COLLEGE OF LAW HOUSTON",
        "location": "HOUSTON, TX"
    },
    {
        "name": "SHAW UNIVERSITY",
        "location": "RALEIGH, NC"
    },
    {
        "name": "REMINGTON COLLEGE-BATON ROUGE CAMPUS",
        "location": "BATON ROUGE, LA"
    },
    {
        "name": "LOUISVILLE PRESBYTERIAN THEOLOGICAL SEMINARY",
        "location": "LOUISVILLE, KY"
    },
    {
        "name": "STRAYER UNIVERSITY-TENNESSEE",
        "location": "MEMPHIS, TN"
    },
    {
        "name": "WELLSPRING SCHOOL OF ALLIED HEALTH-LAWRENCE",
        "location": "LAWRENCE, KS"
    },
    {
        "name": "CELEBRITY SCHOOL OF BEAUTY",
        "location": "MIAMI, FL"
    },
    {
        "name": "NEW ENGLAND COLLEGE OF OPTOMETRY",
        "location": "BOSTON, MA"
    },
    {
        "name": "TETERBORO SCHOOL OF AERONAUTICS",
        "location": "TETERBORO, NJ"
    },
    {
        "name": "HOUGHTON COLLEGE",
        "location": "HOUGHTON, NY"
    },
    {
        "name": "CONTINENTAL SCHOOL OF BEAUTY CULTURE-WEST SENECA",
        "location": "WEST SENECA, NY"
    },
    {
        "name": "ADLER GRADUATE SCHOOL",
        "location": "MINNETONKA, MN"
    },
    {
        "name": "EMPIRE BEAUTY SCHOOL-HANOVER",
        "location": "HANOVER, PA"
    },
    {
        "name": "UNIVERSAL TECHNICAL INSTITUTE OF CALIFORNIA INC",
        "location": "RANCHO CUCAMONGA, CA"
    },
    {
        "name": "NEW MEXICO STATE UNIVERSITY-DONA ANA",
        "location": "LAS CRUCES, NM"
    },
    {
        "name": "THE SALON PROFESSIONAL ACADEMY-FT MYERS",
        "location": "FORT MYERS, FL"
    },
    {
        "name": "MILAN INSTITUTE OF COSMETOLOGY-EL PASO",
        "location": "EL PASO, TX"
    },
    {
        "name": "BEAUTY ACADEMY OF SOUTH FLORIDA",
        "location": "HIALEAH GARDENS, FL"
    },
    {
        "name": "MANDALYN ACADEMY",
        "location": "AMERICAN FORK, UT"
    },
    {
        "name": "WON INSTITUTE OF GRADUATE STUDIES",
        "location": "GLENSIDE, PA"
    },
    {
        "name": "LORD FAIRFAX COMMUNITY COLLEGE",
        "location": "MIDDLETOWN, VA"
    },
    {
        "name": "ARKANSAS STATE UNIVERSITY-NEWPORT",
        "location": "NEWPORT, AR"
    },
    {
        "name": "HARTNELL COLLEGE",
        "location": "SALINAS, CA"
    },
    {
        "name": "MIRACOSTA COLLEGE",
        "location": "OCEANSIDE, CA"
    },
    {
        "name": "FRANKLIN UNIVERSITY",
        "location": "COLUMBUS, OH"
    },
    {
        "name": "LINN-BENTON COMMUNITY COLLEGE",
        "location": "ALBANY, OR"
    },
    {
        "name": "NORTHAMPTON COUNTY AREA COMMUNITY COLLEGE",
        "location": "BETHLEHEM, PA"
    },
    {
        "name": "WILBERFORCE UNIVERSITY",
        "location": "WILBERFORCE, OH"
    },
    {
        "name": "BRIGHAM YOUNG UNIVERSITY",
        "location": "PROVO, UT"
    },
    {
        "name": "WALLA WALLA UNIVERSITY",
        "location": "COLLEGE PLACE, WA"
    },
    {
        "name": "MAKE-UP DESIGNORY",
        "location": "BURBANK, CA"
    },
    {
        "name": "VISIBLE MUSIC COLLEGE",
        "location": "MEMPHIS, TN"
    },
    {
        "name": "MILAN INSTITUTE OF COSMETOLOGY-SAN ANTONIO MILITARY",
        "location": "SAN ANTONIO, TX"
    },
    {
        "name": "IMPERIAL VALLEY COLLEGE",
        "location": "IMPERIAL, CA"
    },
    {
        "name": "LUTHER COLLEGE",
        "location": "DECORAH, IA"
    },
    {
        "name": "EASTERN ILLINOIS UNIVERSITY",
        "location": "CHARLESTON, IL"
    },
    {
        "name": "MID-AMERICA COLLEGE OF FUNERAL SERVICE",
        "location": "JEFFERSONVILLE, IN"
    },
    {
        "name": "BATON ROUGE SCHOOL OF COMPUTERS",
        "location": "BATON ROUGE, LA"
    },
    {
        "name": "LOUISIANA COLLEGE",
        "location": "PINEVILLE, LA"
    },
    {
        "name": "NOTRE DAME DE NAMUR UNIVERSITY",
        "location": "BELMONT, CA"
    },
    {
        "name": "CERRITOS COLLEGE",
        "location": "NORWALK, CA"
    },
    {
        "name": "DANVILLE AREA COMMUNITY COLLEGE",
        "location": "DANVILLE, IL"
    },
    {
        "name": "HUTCHINSON COMMUNITY COLLEGE",
        "location": "HUTCHINSON, KS"
    },
    {
        "name": "BON SECOURS ST MARY'S HOSPITAL SCHOOL OF MEDICAL IMAGING",
        "location": "RICHMOND, VA"
    },
    {
        "name": "PONTIFICAL CATHOLIC UNIVERSITY OF PUERTO RICO-MAYAGUEZ",
        "location": "MAYAGUEZ, PR"
    },
    {
        "name": "HEBREW UNION COLLEGE-JEWISH INSTITUTE OF RELIGION",
        "location": "NEW YORK, NY"
    },
    {
        "name": "INDUSTRIAL TECHNICAL COLLEGE",
        "location": "HUMACAO, PR"
    },
    {
        "name": "AMERICAN CAREER COLLEGE-LOS ANGELES",
        "location": "LOS ANGELES, CA"
    },
    {
        "name": "CAMEO BEAUTY ACADEMY",
        "location": "OAK LAWN, IL"
    },
    {
        "name": "MILDRED ELLEY-PITTSFIELD CAMPUS",
        "location": "PITTSFIELD, MA"
    },
    {
        "name": "ARNOT OGDEN MEDICAL CENTER",
        "location": "ELMIRA, NY"
    },
    {
        "name": "DAVIDSON COLLEGE",
        "location": "DAVIDSON, NC"
    },
    {
        "name": "PLATT COLLEGE-AURORA",
        "location": "AURORA, CO"
    },
    {
        "name": "BELL MAR BEAUTY COLLEGE",
        "location": "CICERO, IL"
    },
    {
        "name": "MACCORMAC COLLEGE",
        "location": "CHICAGO, IL"
    },
    {
        "name": "CALDWELL UNIVERSITY",
        "location": "CALDWELL, NJ"
    },
    {
        "name": "VOGUE COLLEGE OF COSMETOLOGY",
        "location": "SAN ANTONIO, TX"
    },
    {
        "name": "TRI-COMMUNITY ADULT EDUCATION",
        "location": "COVINA, CA"
    },
    {
        "name": "UNIVERSAL TECHNICAL INSTITUTE-BLOOMFIELD",
        "location": "BLOOMFIELD, NJ"
    },
    {
        "name": "VAUGHN BEAUTY COLLEGE",
        "location": "ABERDEEN, MS"
    },
    {
        "name": "LIL LOU'S BEAUTY AND BARBER COLLEGE-HAMMOND",
        "location": "HAMMOND, IN"
    },
    {
        "name": "VSKI COSMETOLOGY SCHOOL",
        "location": "CHARLESTON, SC"
    },
    {
        "name": "GLASGOW CALEDONIAN NEW YORK COLLEGE",
        "location": "NEW YORK, NY"
    },
    {
        "name": "YESHIVA YESODA HATORAH VETZ CHAIM",
        "location": "BROOKLYN, NY"
    },
    {
        "name": "NUC UNIVERSITY - IBC INSTITUTE - YAUCO",
        "location": "YAUCO, PR"
    },
    {
        "name": "NUC UNIVERSITY - FLORIDA TECHNICAL COLLEGE - KISSIMMEE",
        "location": "KISSIMMEE, FL"
    },
    {
        "name": "DORSEY SCHOOL OF BUSINESS-WOODHAVEN CAMPUS",
        "location": "WOODHAVEN, MI"
    },
    {
        "name": "NETWORKS BARBER COLLEGE",
        "location": "CHICAGO, IL"
    },
    {
        "name": "FRAMINGHAM STATE UNIVERSITY",
        "location": "FRAMINGHAM, MA"
    },
    {
        "name": "SUMMIT SALON ACADEMY",
        "location": "TAMPA, FL"
    },
    {
        "name": "STUDIO INCAMMINATI",
        "location": "PHILADELPHIA, PA"
    },
    {
        "name": "TULSA WELDING SCHOOL-JACKSONVILLE",
        "location": "JACKSONVILLE, FL"
    },
    {
        "name": "FLORIDA SCHOOL OF TRADITIONAL MIDWIFERY",
        "location": "GAINESVILLE, FL"
    },
    {
        "name": "EPISCOPAL THEOLOGICAL SEMINARY OF THE SOUTHWEST",
        "location": "AUSTIN, TX"
    },
    {
        "name": "MEHARRY MEDICAL COLLEGE",
        "location": "NASHVILLE, TN"
    },
    {
        "name": "WESTERN SEMINARY",
        "location": "PORTLAND, OR"
    },
    {
        "name": "PORTLAND ACTORS CONSERVATORY",
        "location": "PORTLAND, OR"
    },
    {
        "name": "SUNY ONEONTA",
        "location": "ONEONTA, NY"
    },
    {
        "name": "AUSTIN PRESBYTERIAN THEOLOGICAL SEMINARY",
        "location": "AUSTIN, TX"
    },
    {
        "name": "LINDSEY HOPKINS TECHNICAL COLLEGE",
        "location": "MIAMI, FL"
    },
    {
        "name": "VANDERCOOK COLLEGE OF MUSIC",
        "location": "CHICAGO, IL"
    },
    {
        "name": "COCONINO COMMUNITY COLLEGE",
        "location": "FLAGSTAFF, AZ"
    },
    {
        "name": "PANOLA COLLEGE",
        "location": "CARTHAGE, TX"
    },
    {
        "name": "LIMESTONE UNIVERSITY",
        "location": "GAFFNEY, SC"
    },
    {
        "name": "REDONDO BEACH BEAUTY COLLEGE",
        "location": "REDONDO BEACH, CA"
    },
    {
        "name": "DELTA COLLEGE OF ARTS & TECHNOLOGY-LAFAYETTE CAMPUS",
        "location": "LAFAYETTE, LA"
    },
    {
        "name": "SEGUIN BEAUTY SCHOOL-NEW BRAUNFELS",
        "location": "NEW BRAUNFELS, TX"
    },
    {
        "name": "SOUTHWEST COLLEGIATE INSTITUTE FOR THE DEAF",
        "location": "BIG SPRING, TX"
    },
    {
        "name": "GAVILAN COLLEGE",
        "location": "GILROY, CA"
    },
    {
        "name": "THE UNIVERSITY OF MONTANA",
        "location": "MISSOULA, MT"
    },
    {
        "name": "BRIGHAM YOUNG UNIVERSITY-IDAHO",
        "location": "REXBURG, ID"
    },
    {
        "name": "LUTHER RICE COLLEGE & SEMINARY",
        "location": "LITHONIA, GA"
    },
    {
        "name": "EASTERN OREGON UNIVERSITY",
        "location": "LA GRANDE, OR"
    },
    {
        "name": "ALEXANDRIA TECHNICAL & COMMUNITY COLLEGE",
        "location": "ALEXANDRIA, MN"
    },
    {
        "name": "UNIVERSITY OF SAN FRANCISCO",
        "location": "SAN FRANCISCO, CA"
    },
    {
        "name": "LOUISIANA DELTA COMMUNITY COLLEGE",
        "location": "MONROE, LA"
    },
    {
        "name": "SOUTHCENTRAL KENTUCKY COMMUNITY AND TECHNICAL COLLEGE",
        "location": "BOWLING GREEN, KY"
    },
    {
        "name": "GEM CITY COLLEGE",
        "location": "QUINCY, IL"
    },
    {
        "name": "THE LANDING SCHOOL",
        "location": "ARUNDEL, ME"
    },
    {
        "name": "NORTHWESTERN HEALTH SCIENCES UNIVERSITY",
        "location": "BLOOMINGTON, MN"
    },
    {
        "name": "UNIVERSAL TECHNICAL INSTITUTE-AUTO MOTORCYCLE & MARINE MECHANICS INSTITUTE DIVISION-ORLANDO",
        "location": "ORLANDO, FL"
    },
    {
        "name": "DARTMOUTH COLLEGE",
        "location": "HANOVER, NH"
    },
    {
        "name": "HOHOKUS SCHOOL OF TRADE AND TECHNICAL SCIENCES",
        "location": "PATERSON, NJ"
    },
    {
        "name": "NEW JERSEY CITY UNIVERSITY",
        "location": "JERSEY CITY, NJ"
    },
    {
        "name": "BRITTANY BEAUTY ACADEMY",
        "location": "LEVITTOWN, NY"
    },
    {
        "name": "THREE RIVERS COLLEGE",
        "location": "POPLAR BLUFF, MO"
    },
    {
        "name": "ACADEMY OF HAIR DESIGN-GRENADA",
        "location": "GRENADA, MS"
    },
    {
        "name": "UNIVERSITY OF PROVIDENCE",
        "location": "GREAT FALLS, MT"
    },
    {
        "name": "CARROLL COLLEGE",
        "location": "HELENA, MT"
    },
    {
        "name": "COLLEGE OF MICRONESIA-FSM",
        "location": "POHNPEI, FM"
    },
    {
        "name": "NORTHEAST TECHNICAL INSTITUTE",
        "location": "SCARBOROUGH, ME"
    },
    {
        "name": "TOURO COLLEGE",
        "location": "NEW YORK, NY"
    },
    {
        "name": "SALINE COUNTY CAREER CENTER",
        "location": "MARSHALL, MO"
    },
    {
        "name": "DIVINE WORD COLLEGE",
        "location": "EPWORTH, IA"
    },
    {
        "name": "CORTIVA INSTITUTE-BALTIMORE",
        "location": "LINTHICUM, MD"
    },
    {
        "name": "NEVADA STATE COLLEGE",
        "location": "HENDERSON, NV"
    },
    {
        "name": "CALIFORNIA HEALING ARTS COLLEGE",
        "location": "CARSON, CA"
    },
    {
        "name": "CHOWAN UNIVERSITY",
        "location": "MURFREESBORO, NC"
    },
    {
        "name": "YORK COLLEGE",
        "location": "YORK, NE"
    },
    {
        "name": "NEW ENGLAND SCHOOL OF HAIR DESIGN",
        "location": "WEST LEBANON, NH"
    },
    {
        "name": "JAMESTOWN BUSINESS COLLEGE",
        "location": "JAMESTOWN, NY"
    },
    {
        "name": "COLGATE ROCHESTER CROZER DIVINITY SCHOOL",
        "location": "ROCHESTER, NY"
    },
    {
        "name": "METHODIST THEOLOGICAL SCHOOL IN OHIO",
        "location": "DELAWARE, OH"
    },
    {
        "name": "OHIO VALLEY UNIVERSITY",
        "location": "VIENNA, WV"
    },
    {
        "name": "UNIVERSITY OF ST. AUGUSTINE FOR HEALTH SCIENCES",
        "location": "SAN MARCOS, CA"
    },
    {
        "name": "UNION COUNTY VOCATIONAL TECHNICAL SCHOOL",
        "location": "SCOTCH PLAINS, NJ"
    },
    {
        "name": "EMPIRE BEAUTY SCHOOL-BLOOMINGTON",
        "location": "BLOOMINGTON, MN"
    },
    {
        "name": "PENNCO TECH-BLACKWOOD",
        "location": "BLACKWOOD, NJ"
    },
    {
        "name": "VET TECH INSTITUTE",
        "location": "PITTSBURGH, PA"
    },
    {
        "name": "HERZING UNIVERSITY-BIRMINGHAM",
        "location": "BIRMINGHAM, AL"
    },
    {
        "name": "THE SALON PROFESSIONAL ACADEMY-MELBOURNE",
        "location": "MELBOURNE, FL"
    },
    {
        "name": "ADVANCED COLLEGE OF COSMETOLOGY",
        "location": "WAUPUN, WI"
    },
    {
        "name": "ROSS COLLEGE-QUAD CITIES",
        "location": "DAVENPORT, IA"
    },
    {
        "name": "CREATIVE IMAGES INSTITUTE OF COSMETOLOGY-SOUTH DAYTON",
        "location": "DAYTON, OH"
    },
    {
        "name": "LUZERNE COUNTY COMMUNITY COLLEGE",
        "location": "NANTICOKE, PA"
    },
    {
        "name": "TRICOCI UNIVERSITY OF BEAUTY CULTURE-PEORIA",
        "location": "PEORIA, IL"
    },
    {
        "name": "SOUTH UNIVERSITY-SAVANNAH",
        "location": "SAVANNAH, GA"
    },
    {
        "name": "DCI CAREER INSTITUTE",
        "location": "MONACA, PA"
    },
    {
        "name": "MOUNT MERCY UNIVERSITY",
        "location": "CEDAR RAPIDS, IA"
    },
    {
        "name": "LOUISIANA STATE UNIVERSITY-EUNICE",
        "location": "EUNICE, LA"
    },
    {
        "name": "RARITAN VALLEY COMMUNITY COLLEGE",
        "location": "BRANCHBURG, NJ"
    },
    {
        "name": "YO SAN UNIVERSITY OF TRADITIONAL CHINESE MEDICINE",
        "location": "LOS ANGELES, CA"
    },
    {
        "name": "LOS ANGELES PIERCE COLLEGE",
        "location": "WOODLAND HILLS, CA"
    },
    {
        "name": "COLLEGE OF COASTAL GEORGIA",
        "location": "BRUNSWICK, GA"
    },
    {
        "name": "VIRGINIA WESTERN COMMUNITY COLLEGE",
        "location": "ROANOKE, VA"
    },
    {
        "name": "COLORADO SCHOOL OF MINES",
        "location": "GOLDEN, CO"
    },
    {
        "name": "THE UNIVERSITY OF TEXAS MEDICAL BRANCH AT GALVESTON",
        "location": "GALVESTON, TX"
    },
    {
        "name": "HUERTAS COLLEGE",
        "location": "CAGUAS, PR"
    },
    {
        "name": "SUNY COLLEGE OF OPTOMETRY",
        "location": "NEW YORK, NY"
    },
    {
        "name": "AMERICAN INSTITUTE OF INTERIOR DESIGN",
        "location": "FOUNTAIN HILLS, AZ"
    },
    {
        "name": "PIMA MEDICAL INSTITUTE-LAS VEGAS",
        "location": "LAS VEGAS, NV"
    },
    {
        "name": "ROSEL SCHOOL OF COSMETOLOGY",
        "location": "NILES, IL"
    },
    {
        "name": "FRANCISCAN MISSIONARIES OF OUR LADY UNIVERSITY",
        "location": "BATON ROUGE, LA"
    },
    {
        "name": "CONCEPTION SEMINARY COLLEGE",
        "location": "CONCEPTION, MO"
    },
    {
        "name": "CENTRAL CHRISTIAN COLLEGE OF THE BIBLE",
        "location": "MOBERLY, MO"
    },
    {
        "name": "NORTH CAROLINA WESLEYAN COLLEGE",
        "location": "ROCKY MOUNT, NC"
    },
    {
        "name": "BRIGHAM YOUNG UNIVERSITY-HAWAII",
        "location": "LAIE, HI"
    },
    {
        "name": "HESSTON COLLEGE",
        "location": "HESSTON, KS"
    },
    {
        "name": "ERSKINE COLLEGE",
        "location": "DUE WEST, SC"
    },
    {
        "name": "NORTH CENTRAL INSTITUTE",
        "location": "CLARKSVILLE, TN"
    },
    {
        "name": "MASSACHUSETTS SCHOOL OF LAW",
        "location": "ANDOVER, MA"
    },
    {
        "name": "CLARKSON COLLEGE",
        "location": "OMAHA, NE"
    },
    {
        "name": "SUNY COLLEGE AT OLD WESTBURY",
        "location": "OLD WESTBURY, NY"
    },
    {
        "name": "WESTERN MICHIGAN UNIVERSITY HOMER STRYKER M.D. SCHOOL OF MEDICINE",
        "location": "KALAMAZOO, MI"
    },
    {
        "name": "NATIONAL AMERICAN UNIVERSITY-GARDEN CITY",
        "location": "GARDEN CITY, KS"
    },
    {
        "name": "POLYTECH ADULT EDUCATION",
        "location": "WOODSIDE, DE"
    },
    {
        "name": "CHAMBERLAIN UNIVERSITY-LOUISIANA",
        "location": "JEFFERSON, LA"
    },
    {
        "name": "INDIANA INSTITUTE OF TECHNOLOGY-COLLEGE OF PROFESSIONAL STUDIES",
        "location": "FORT WAYNE, IN"
    },
    {
        "name": "LOTUS SCHOOL OF INTEGRATED PROFESSIONS",
        "location": "HENRICO, VA"
    },
    {
        "name": "ROYAL LEARNING INSTITUTE",
        "location": "JACKSON HEIGHTS, NY"
    },
    {
        "name": "NUC UNIVERSITY - FLORIDA TECHNICAL COLLEGE - DELAND",
        "location": "DELAND, FL"
    },
    {
        "name": "ELITE WELDING ACADEMY",
        "location": "HOUSTON, TX"
    },
    {
        "name": "MEDSPA ACADEMIES - NIMA NATIONAL INSTITUTE OF MODERN AESTHETICS",
        "location": "LAS VEGAS, NV"
    },
    {
        "name": "YOUNG AMERICANS COLLEGE OF THE PERFORMING ARTS",
        "location": "CORONA, CA"
    },
    {
        "name": "PRO BEAUTY ACADEMY",
        "location": "EDISON, NJ"
    },
    {
        "name": "YESHIVAT HECHAL SHEMUEL",
        "location": "BROOKLYN, NY"
    },
    {
        "name": "PAUL MITCHELL THE SCHOOL-SAN JOSE",
        "location": "SAN JOSE, CA"
    },
    {
        "name": "GLENDALE CAREER COLLEGE-BRIGHTWOOD TEACHOUT",
        "location": "SAN DIEGO, CA"
    },
    {
        "name": "CASAL INSTITUTE OF NEVADA",
        "location": "LAS VEGAS, NV"
    },
    {
        "name": "UNITED TALMUDICAL SEMINARY",
        "location": "BROOKLYN, NY"
    },
    {
        "name": "UNIVERSITY OF PUERTO RICO-AGUADILLA",
        "location": "AGUADILLA, PR"
    },
    {
        "name": "STUDIO BEAUTY SCHOOL",
        "location": "SPOKANE VALLEY, WA"
    },
    {
        "name": "NEW BEGINNINGS BEAUTY ACADEMY",
        "location": "PINE BLUFF, AR"
    },
    {
        "name": "NOVA SOUTHEASTERN UNIVERSITY",
        "location": "FORT LAUDERDALE, FL"
    },
    {
        "name": "TREASURE COAST TECHNICAL COLLEGE",
        "location": "VERO BEACH, FL"
    },
    {
        "name": "SOUTHERN ILLINOIS UNIVERSITY-CARBONDALE",
        "location": "CARBONDALE, IL"
    },
    {
        "name": "TRI-STATE BARBER COLLEGE",
        "location": "ASHLAND, KY"
    },
    {
        "name": "GARDEN STATE SCIENCE AND TECHNOLOGY INSTITUTE",
        "location": "JERSEY CITY, NJ"
    },
    {
        "name": "MINNESOTA STATE COMMUNITY AND TECHNICAL COLLEGE",
        "location": "FERGUS FALLS, MN"
    },
    {
        "name": "KENT STATE UNIVERSITY AT GEAUGA",
        "location": "BURTON, OH"
    },
    {
        "name": "ERIE COMMUNITY COLLEGE",
        "location": "BUFFALO, NY"
    },
    {
        "name": "STONY BROOK UNIVERSITY",
        "location": "STONY BROOK, NY"
    },
    {
        "name": "CARTHAGE COLLEGE",
        "location": "KENOSHA, WI"
    },
    {
        "name": "MITCHELL COMMUNITY COLLEGE",
        "location": "STATESVILLE, NC"
    },
    {
        "name": "PAUL MITCHELL THE SCHOOL-CHICAGO",
        "location": "CHICAGO, IL"
    },
    {
        "name": "CENTRAL OHIO TECHNICAL COLLEGE",
        "location": "NEWARK, OH"
    },
    {
        "name": "SOUTH UNIVERSITY-VIRGINIA BEACH",
        "location": "VIRGINIA BEACH, VA"
    },
    {
        "name": "SAN JOAQUIN VALLEY COLLEGE-FRESNO",
        "location": "FRESNO, CA"
    },
    {
        "name": "OKLAHOMA STATE UNIVERSITY-OKLAHOMA CITY",
        "location": "OKLAHOMA CITY, OK"
    },
    {
        "name": "TENNESSEE COLLEGE OF APPLIED TECHNOLOGY-HOHENWALD",
        "location": "HOHENWALD, TN"
    },
    {
        "name": "MOORE COLLEGE OF ART AND DESIGN",
        "location": "PHILADELPHIA, PA"
    },
    {
        "name": "UNIVERSITY OF PITTSBURGH",
        "location": "PITTSBURGH, PA"
    },
    {
        "name": "PALACE BEAUTY COLLEGE",
        "location": "LOS ANGELES, CA"
    },
    {
        "name": "COASTAL CAROLINA UNIVERSITY",
        "location": "CONWAY, SC"
    },
    {
        "name": "LAREDO COLLEGE",
        "location": "LAREDO, TX"
    },
    {
        "name": "EASTERN WASHINGTON UNIVERSITY",
        "location": "CHENEY, WA"
    },
    {
        "name": "SOUTHEASTERN TECHNICAL COLLEGE",
        "location": "VIDALIA, GA"
    },
    {
        "name": "VALLEY GRANDE INSTITUTE FOR ACADEMIC STUDIES",
        "location": "WESLACO, TX"
    },
    {
        "name": "SHELTON STATE COMMUNITY COLLEGE",
        "location": "TUSCALOOSA, AL"
    },
    {
        "name": "AVALON SCHOOL OF COSMETOLOGY-PHOENIX",
        "location": "PHOENIX, AZ"
    },
    {
        "name": "MERCED COLLEGE",
        "location": "MERCED, CA"
    },
    {
        "name": "UNIVERSITY OF SOUTH CAROLINA AIKEN",
        "location": "AIKEN, SC"
    },
    {
        "name": "TEXAS A&M INTERNATIONAL UNIVERSITY",
        "location": "LAREDO, TX"
    },
    {
        "name": "THE COLLEGE OF HEALTH CARE PROFESSIONS-DALLAS",
        "location": "DALLAS, TX"
    },
    {
        "name": "ACADEMY OF SALON PROFESSIONALS",
        "location": "SEDALIA, MO"
    },
    {
        "name": "SHEPHERDS COLLEGE",
        "location": "UNION GROVE, WI"
    },
    {
        "name": "KAIZEN BEAUTY ACADEMY",
        "location": "PEMBROKE PINES, FL"
    },
    {
        "name": "BONNIE JOSEPH ACADEMY OF COSMETOLOGY & BARBERING",
        "location": "HEBER CITY, UT"
    },
    {
        "name": "BROWN UNIVERSITY",
        "location": "PROVIDENCE, RI"
    },
    {
        "name": "TENNESSEE COLLEGE OF APPLIED TECHNOLOGY-ELIZABETHTON",
        "location": "ELIZABETHTON, TN"
    },
    {
        "name": "NORTH-WEST COLLEGE-LONG BEACH",
        "location": "LONG BEACH, CA"
    },
    {
        "name": "UNIVERSITY OF PHOENIX-PENNSYLVANIA",
        "location": "PHILADELPHIA, PA"
    },
    {
        "name": "RABBINICAL COLLEGE OHR YISROEL",
        "location": "BROOKLYN, NY"
    },
    {
        "name": "KALAMAZOO VALLEY COMMUNITY COLLEGE",
        "location": "KALAMAZOO, MI"
    },
    {
        "name": "FREDERICK COMMUNITY COLLEGE",
        "location": "FREDERICK, MD"
    },
    {
        "name": "ELAINE STEVEN BEAUTY COLLEGE",
        "location": "SAINT LOUIS, MO"
    },
    {
        "name": "WILLISTON STATE COLLEGE",
        "location": "WILLISTON, ND"
    },
    {
        "name": "UNIVERSITY OF CALIFORNIA-SAN DIEGO",
        "location": "LA JOLLA, CA"
    },
    {
        "name": "LOYOLA MARYMOUNT UNIVERSITY",
        "location": "LOS ANGELES, CA"
    },
    {
        "name": "AMERICAN COLLEGE OF HAIRSTYLING-DES MOINES",
        "location": "DES MOINES, IA"
    },
    {
        "name": "VALLEY CITY STATE UNIVERSITY",
        "location": "VALLEY CITY, ND"
    },
    {
        "name": "UNIVERSAL COLLEGE OF HEALING ARTS",
        "location": "OMAHA, NE"
    },
    {
        "name": "DENVER COLLEGE OF NURSING",
        "location": "DENVER, CO"
    },
    {
        "name": "GALEN COLLEGE OF NURSING-LOUISVILLE",
        "location": "LOUISVILLE, KY"
    },
    {
        "name": "BANCROFT SCHOOL OF MASSAGE THERAPY",
        "location": "WORCESTER, MA"
    },
    {
        "name": "HOUSE OF HEAVILIN BEAUTY COLLEGE-BLUE SPRINGS",
        "location": "BLUE SPRINGS, MO"
    },
    {
        "name": "EVANGEL UNIVERSITY",
        "location": "SPRINGFIELD, MO"
    },
    {
        "name": "JEFFERSON COMMUNITY COLLEGE",
        "location": "WATERTOWN, NY"
    },
    {
        "name": "MEMORIAL HOSPITAL SCHOOL OF RADIATION THERAPY TECHNOLOGY",
        "location": "NEW YORK, NY"
    },
    {
        "name": "MIRRER YESHIVA CENT INSTITUTE",
        "location": "BROOKLYN, NY"
    },
    {
        "name": "DIVERS ACADEMY INTERNATIONAL",
        "location": "ERIAL, NJ"
    },
    {
        "name": "CALIFORNIA CAREER INSTITUTE",
        "location": "ANAHEIM, CA"
    },
    {
        "name": "MINOT STATE UNIVERSITY",
        "location": "MINOT, ND"
    },
    {
        "name": "ROSS MEDICAL EDUCATION CENTER-PORT HURON",
        "location": "PORT HURON, MI"
    },
    {
        "name": "WEBB INSTITUTE",
        "location": "GLEN COVE, NY"
    },
    {
        "name": "INDIANA UNIVERSITY-BLOOMINGTON",
        "location": "BLOOMINGTON, IN"
    },
    {
        "name": "BLUE CLIFF COLLEGE-METAIRIE",
        "location": "METAIRIE, LA"
    },
    {
        "name": "HOOD THEOLOGICAL SEMINARY",
        "location": "SALISBURY, NC"
    },
    {
        "name": "HAIR PROFESSIONALS SCHOOL OF COSMETOLOGY",
        "location": "OSWEGO, IL"
    },
    {
        "name": "TRI-STATE BIBLE COLLEGE",
        "location": "SOUTH POINT, OH"
    },
    {
        "name": "SUNY COLLEGE OF TECHNOLOGY AT DELHI",
        "location": "DELHI, NY"
    },
    {
        "name": "MESIVTA TORAH VODAATH RABBINICAL SEMINARY",
        "location": "BROOKLYN, NY"
    },
    {
        "name": "ENID BEAUTY COLLEGE",
        "location": "ENID, OK"
    },
    {
        "name": "COLLEGE OF COSMETOLOGY",
        "location": "KLAMATH FALLS, OR"
    },
    {
        "name": "FLORIDA ATLANTIC UNIVERSITY",
        "location": "BOCA RATON, FL"
    },
    {
        "name": "INTERACTIVE COLLEGE OF TECHNOLOGY",
        "location": "HOUSTON, TX"
    },
    {
        "name": "BLUE CLIFF COLLEGE-GULFPORT",
        "location": "GULFPORT, MS"
    },
    {
        "name": "COLLEGE OF THE OZARKS",
        "location": "POINT LOOKOUT, MO"
    },
    {
        "name": "SUNY AT FREDONIA",
        "location": "FREDONIA, NY"
    },
    {
        "name": "CEM COLLEGE-SAN JUAN",
        "location": "SAN JUAN, PR"
    },
    {
        "name": "NEBRASKA WESLEYAN UNIVERSITY",
        "location": "LINCOLN, NE"
    },
    {
        "name": "NORTHWEST SCHOOL OF WOODEN BOAT BUILDING",
        "location": "PORT HADLOCK, WA"
    },
    {
        "name": "EMPIRE BEAUTY SCHOOL-SPEEDWAY",
        "location": "SPEEDWAY, IN"
    },
    {
        "name": "MILDRED ELLEY-NEW YORK CAMPUS",
        "location": "NEW YORK, NY"
    },
    {
        "name": "AVEDA INSTITUTE-BOISE",
        "location": "BOISE, ID"
    },
    {
        "name": "MIDDLEBURY COLLEGE",
        "location": "MIDDLEBURY, VT"
    },
    {
        "name": "PAUL MITCHELL THE SCHOOL-RHODE ISLAND",
        "location": "CRANSTON, RI"
    },
    {
        "name": "ALLEN COUNTY COMMUNITY COLLEGE",
        "location": "IOLA, KS"
    },
    {
        "name": "UNIVERSITY OF MAINE AT AUGUSTA",
        "location": "AUGUSTA, ME"
    },
    {
        "name": "KELLOGG COMMUNITY COLLEGE",
        "location": "BATTLE CREEK, MI"
    },
    {
        "name": "SKIN SCIENCE INSTITUTE",
        "location": "SANDY, UT"
    },
    {
        "name": "UNIVERSITY OF NEW HAVEN",
        "location": "WEST HAVEN, CT"
    },
    {
        "name": "ROSE-HULMAN INSTITUTE OF TECHNOLOGY",
        "location": "TERRE HAUTE, IN"
    },
    {
        "name": "AMERICAN NATIONAL UNIVERSITY",
        "location": "SALEM, VA"
    },
    {
        "name": "FRANCIS TUTTLE TECHNOLOGY CENTER",
        "location": "OKLAHOMA CITY, OK"
    },
    {
        "name": "DENMARK COLLEGE",
        "location": "MERRILLVILLE, IN"
    },
    {
        "name": "ART CENTER COLLEGE OF DESIGN",
        "location": "PASADENA, CA"
    },
    {
        "name": "MILAN INSTITUTE-VISALIA",
        "location": "VISALIA, CA"
    },
    {
        "name": "DOMINICAN UNIVERSITY OF CALIFORNIA",
        "location": "SAN RAFAEL, CA"
    },
    {
        "name": "MILLS COLLEGE",
        "location": "OAKLAND, CA"
    },
    {
        "name": "ROCKY MOUNTAIN COLLEGE OF ART AND DESIGN",
        "location": "LAKEWOOD, CO"
    },
    {
        "name": "SOUTHERN CRESCENT TECHNICAL COLLEGE",
        "location": "GRIFFIN, GA"
    },
    {
        "name": "AYERS CAREER COLLEGE",
        "location": "SHREVEPORT, LA"
    },
    {
        "name": "GREENFIELD COMMUNITY COLLEGE",
        "location": "GREENFIELD, MA"
    },
    {
        "name": "BETH MEDRASH GOVOHA",
        "location": "LAKEWOOD, NJ"
    },
    {
        "name": "ACADEMY OF COSMETOLOGY",
        "location": "MERRITT ISLAND, FL"
    },
    {
        "name": "YUKON BEAUTY COLLEGE INC",
        "location": "YUKON, OK"
    },
    {
        "name": "TONI & GUY HAIRDRESSING ACADEMY-ATLANTA",
        "location": "MARIETTA, GA"
    },
    {
        "name": "EMPIRE BEAUTY SCHOOL-DUNWOODY",
        "location": "DUNWOODY, GA"
    },
    {
        "name": "SANTA MONICA COLLEGE",
        "location": "SANTA MONICA, CA"
    },
    {
        "name": "THE UNIVERSITY OF ALABAMA",
        "location": "TUSCALOOSA, AL"
    },
    {
        "name": "UNIVERSITY OF ARKANSAS COMMUNITY COLLEGE-BATESVILLE",
        "location": "BATESVILLE, AR"
    },
    {
        "name": "SPELMAN COLLEGE",
        "location": "ATLANTA, GA"
    },
    {
        "name": "TILLAMOOK BAY COMMUNITY COLLEGE",
        "location": "TILLAMOOK, OR"
    },
    {
        "name": "SPOKANE COMMUNITY COLLEGE",
        "location": "SPOKANE, WA"
    },
    {
        "name": "TREVECCA NAZARENE UNIVERSITY",
        "location": "NASHVILLE, TN"
    },
    {
        "name": "TAFT COLLEGE",
        "location": "TAFT, CA"
    },
    {
        "name": "PENNSYLVANIA HIGHLANDS COMMUNITY COLLEGE",
        "location": "JOHNSTOWN, PA"
    },
    {
        "name": "FORTIS INSTITUTE-PORT SAINT LUCIE",
        "location": "PORT SAINT LUCIE, FL"
    },
    {
        "name": "BELLUS ACADEMY-EL CAJON",
        "location": "EL CAJON, CA"
    },
    {
        "name": "MENLO COLLEGE",
        "location": "ATHERTON, CA"
    },
    {
        "name": "SAN FRANCISCO CONSERVATORY OF MUSIC",
        "location": "SAN FRANCISCO, CA"
    },
    {
        "name": "COLORADO SCHOOL OF HEALING ARTS",
        "location": "LAKEWOOD, CO"
    },
    {
        "name": "SPRING ARBOR UNIVERSITY",
        "location": "SPRING ARBOR, MI"
    },
    {
        "name": "FOND DU LAC TRIBAL AND COMMUNITY COLLEGE",
        "location": "CLOQUET, MN"
    },
    {
        "name": "SOUTHWEST BAPTIST UNIVERSITY",
        "location": "BOLIVAR, MO"
    },
    {
        "name": "MILES COMMUNITY COLLEGE",
        "location": "MILES CITY, MT"
    },
    {
        "name": "UNIVERSITY OF NEBRASKA AT OMAHA",
        "location": "OMAHA, NE"
    },
    {
        "name": "CUNY BOROUGH OF MANHATTAN COMMUNITY COLLEGE",
        "location": "NEW YORK, NY"
    },
    {
        "name": "NORTHWEST UNIVERSITY",
        "location": "KIRKLAND, WA"
    },
    {
        "name": "CAREER QUEST LEARNING CENTER-MT. PLEASANT",
        "location": "MOUNT PLEASANT, MI"
    },
    {
        "name": "DEVRY UNIVERSITY-CALIFORNIA",
        "location": "ONTARIO, CA"
    },
    {
        "name": "CALIFORNIA INSTITUTE OF MEDICAL SCIENCE",
        "location": "CLOVIS, CA"
    },
    {
        "name": "CONTRA COSTA MEDICAL CAREER COLLEGE",
        "location": "ANTIOCH, CA"
    },
    {
        "name": "TONI & GUY HAIRDRESSING ACADEMY-RIO RANCHO",
        "location": "RIO RANCHO, NM"
    },
    {
        "name": "HEALTH AND TECHNOLOGY TRAINING INSTITUTE",
        "location": "PHILADELPHIA, PA"
    },
    {
        "name": "SOUTHWESTERN BAPTIST THEOLOGICAL SEMINARY",
        "location": "FORT WORTH, TX"
    },
    {
        "name": "DURANT INSTITUTE OF HAIR DESIGN",
        "location": "DURANT, OK"
    },
    {
        "name": "EMPIRE BEAUTY SCHOOL-WINSTON-SALEM",
        "location": "WINSTON-SALEM, NC"
    },
    {
        "name": "FLORIDA CAREER COLLEGE-LAUDERDALE LAKES",
        "location": "LAUDERDALE LAKES, FL"
    },
    {
        "name": "SUMMIT SALON ACADEMY-PERRYSBURG",
        "location": "PERRYSBURG, OH"
    },
    {
        "name": "UNIVERSITY OF SAINT MARY",
        "location": "LEAVENWORTH, KS"
    },
    {
        "name": "TOLEDO PUBLIC SCHOOLS ADULT AND CONTINUING EDUCATION",
        "location": "TOLEDO, OH"
    },
    {
        "name": "MY LE'S BEAUTY COLLEGE",
        "location": "GRETNA, LA"
    },
    {
        "name": "NORTH LAKE COLLEGE",
        "location": "IRVING, TX"
    },
    {
        "name": "UNIVERSITY AT BUFFALO",
        "location": "BUFFALO, NY"
    },
    {
        "name": "J SARGEANT REYNOLDS COMMUNITY COLLEGE",
        "location": "RICHMOND, VA"
    },
    {
        "name": "FISHER COLLEGE",
        "location": "BOSTON, MA"
    },
    {
        "name": "HARVARD UNIVERSITY",
        "location": "CAMBRIDGE, MA"
    },
    {
        "name": "BOB JONES UNIVERSITY",
        "location": "GREENVILLE, SC"
    },
    {
        "name": "CLEMSON UNIVERSITY",
        "location": "CLEMSON, SC"
    },
    {
        "name": "SOUTHERN ADVENTIST UNIVERSITY",
        "location": "COLLEGEDALE, TN"
    },
    {
        "name": "NORTHERN ARIZONA UNIVERSITY",
        "location": "FLAGSTAFF, AZ"
    },
    {
        "name": "SALT LAKE COMMUNITY COLLEGE",
        "location": "SALT LAKE CITY, UT"
    },
    {
        "name": "WASHINGTON STATE UNIVERSITY",
        "location": "PULLMAN, WA"
    },
    {
        "name": "WESTERN TECHNOLOGY CENTER",
        "location": "BURNS FLAT, OK"
    },
    {
        "name": "SAN JOAQUIN DELTA COLLEGE",
        "location": "STOCKTON, CA"
    },
    {
        "name": "SOUTHEAST TECHNICAL COLLEGE",
        "location": "SIOUX FALLS, SD"
    },
    {
        "name": "TEXARKANA COLLEGE",
        "location": "TEXARKANA, TX"
    },
    {
        "name": "NORTHWEST INDIAN COLLEGE",
        "location": "BELLINGHAM, WA"
    },
    {
        "name": "WOODRUFF MEDICAL TRAINING AND TESTING",
        "location": "TUCKER, GA"
    },
    {
        "name": "EDISON STATE COMMUNITY COLLEGE",
        "location": "PIQUA, OH"
    },
    {
        "name": "SIOUX FALLS SEMINARY",
        "location": "SIOUX FALLS, SD"
    },
    {
        "name": "ALAMO CITY BARBER COLLEGE",
        "location": "SAN ANTONIO, TX"
    },
    {
        "name": "CAPITAL AREA SCHOOL OF PRACTICAL NURSING",
        "location": "SPRINGFIELD, IL"
    },
    {
        "name": "CALIFORNIA UNIVERSITY OF PENNSYLVANIA",
        "location": "CALIFORNIA, PA"
    },
    {
        "name": "PIVOT POINT ACADEMY",
        "location": "BLOOMINGDALE, IL"
    },
    {
        "name": "APPALACHIAN SCHOOL OF LAW",
        "location": "GRUNDY, VA"
    },
    {
        "name": "JOLIE HEALTH AND BEAUTY ACADEMY-TURNERSVILLE",
        "location": "TURNERSVILLE, NJ"
    },
    {
        "name": "FLORIDA COLLEGE",
        "location": "TEMPLE TERRACE, FL"
    },
    {
        "name": "AMERICAN MUSICAL AND DRAMATIC ACADEMY",
        "location": "NEW YORK, NY"
    },
    {
        "name": "FORTIS INSTITUTE-NASHVILLE",
        "location": "NASHVILLE, TN"
    },
    {
        "name": "HARDING UNIVERSITY",
        "location": "SEARCY, AR"
    },
    {
        "name": "WASHINGTON SARATOGA WARREN HAMILTON ESSEX BOCES-PRACTICAL NURSING PROGRAM",
        "location": "HUDSON FALLS, NY"
    },
    {
        "name": "MOREHOUSE COLLEGE",
        "location": "ATLANTA, GA"
    },
    {
        "name": "WOFFORD COLLEGE",
        "location": "SPARTANBURG, SC"
    },
    {
        "name": "VERNON COLLEGE",
        "location": "VERNON, TX"
    },
    {
        "name": "STILLMAN COLLEGE",
        "location": "TUSCALOOSA, AL"
    },
    {
        "name": "UNIVERSITY OF VALLEY FORGE",
        "location": "PHOENIXVILLE, PA"
    },
    {
        "name": "WORSHAM COLLEGE OF MORTUARY SCIENCE",
        "location": "WHEELING, IL"
    },
    {
        "name": "GRAHAM HOSPITAL SCHOOL OF NURSING",
        "location": "CANTON, IL"
    },
    {
        "name": "SPA TECH INSTITUTE-WESTBROOK",
        "location": "WESTBROOK, ME"
    },
    {
        "name": "UCAS UNIVERSITY OF COSMETOLOGY ARTS & SCIENCES-LA JOYA",
        "location": "LA JOYA, TX"
    },
    {
        "name": "SAINT LOUIS CHRISTIAN COLLEGE",
        "location": "FLORISSANT, MO"
    },
    {
        "name": "FAIRLEIGH DICKINSON UNIVERSITY",
        "location": "TEANECK, NJ"
    },
    {
        "name": "VANGUARD-SENTINEL ADULT CAREER AND TECHNOLOGY CENTER",
        "location": "FREMONT, OH"
    },
    {
        "name": "GREATER LOWELL TECHNICAL SCHOOL",
        "location": "TYNGSBORO, MA"
    },
    {
        "name": "RUDAE'S SCHOOL OF BEAUTY CULTURE-FT WAYNE",
        "location": "FORT WAYNE, IN"
    },
    {
        "name": "UNIVERSITY OF NORTH CAROLINA AT CHAPEL HILL",
        "location": "CHAPEL HILL, NC"
    },
    {
        "name": "SOUTHERN CAREERS INSTITUTE-SAN ANTONIO",
        "location": "SAN ANTONIO, TX"
    },
    {
        "name": "MONTECLARO ESCUELA DE HOTELERIA Y ARTES CULINARIAS",
        "location": "RIO GRANDE, PR"
    },
    {
        "name": "MACMURRAY COLLEGE",
        "location": "JACKSONVILLE, IL"
    },
    {
        "name": "MANHATTAN CHRISTIAN COLLEGE",
        "location": "MANHATTAN, KS"
    },
    {
        "name": "CLOVIS COMMUNITY COLLEGE",
        "location": "CLOVIS, NM"
    },
    {
        "name": "CLINTON COMMUNITY COLLEGE",
        "location": "PLATTSBURGH, NY"
    },
    {
        "name": "ASA COLLEGE",
        "location": "BROOKLYN, NY"
    },
    {
        "name": "EMERALD COAST TECHNICAL COLLEGE",
        "location": "DEFUNIAK SPRINGS, FL"
    },
    {
        "name": "SKIDMORE COLLEGE",
        "location": "SARATOGA SPRINGS, NY"
    },
    {
        "name": "MONTEFIORE SCHOOL OF NURSING",
        "location": "MOUNT VERNON, NY"
    },
    {
        "name": "NER ISRAEL RABBINICAL COLLEGE",
        "location": "BALTIMORE, MD"
    },
    {
        "name": "CUNY QUEENSBOROUGH COMMUNITY COLLEGE",
        "location": "BAYSIDE, NY"
    },
    {
        "name": "MID-ATLANTIC CHRISTIAN UNIVERSITY",
        "location": "ELIZABETH CITY, NC"
    },
    {
        "name": "EAST VALLEY INSTITUTE OF TECHNOLOGY",
        "location": "MESA, AZ"
    },
    {
        "name": "BARRY UNIVERSITY",
        "location": "MIAMI, FL"
    },
    {
        "name": "SANTA ANA BEAUTY ACADEMY",
        "location": "SANTA ANA, CA"
    },
    {
        "name": "PACIFIC LUTHERAN UNIVERSITY",
        "location": "TACOMA, WA"
    },
    {
        "name": "UNIVERSITY OF NORTH TEXAS SYSTEM",
        "location": "DALLAS, TX"
    },
    {
        "name": "STELLAR CAREER COLLEGE",
        "location": "MODESTO, CA"
    },
    {
        "name": "NEUMONT COLLEGE OF COMPUTER SCIENCE",
        "location": "SALT LAKE CITY, UT"
    },
    {
        "name": "CAREER CARE INSTITUTE",
        "location": "LANCASTER, CA"
    },
    {
        "name": "NORTHWESTERN OKLAHOMA STATE UNIVERSITY",
        "location": "ALVA, OK"
    },
    {
        "name": "BIRMINGHAM-SOUTHERN COLLEGE",
        "location": "BIRMINGHAM, AL"
    },
    {
        "name": "MISERICORDIA UNIVERSITY",
        "location": "DALLAS, PA"
    },
    {
        "name": "AUSTIN GRADUATE SCHOOL OF THEOLOGY",
        "location": "AUSTIN, TX"
    },
    {
        "name": "SCHOOL OF THE ART INSTITUTE OF CHICAGO",
        "location": "CHICAGO, IL"
    },
    {
        "name": "CONCORDE CAREER COLLEGE-KANSAS CITY",
        "location": "KANSAS CITY, MO"
    },
    {
        "name": "MISSOURI UNIVERSITY OF SCIENCE AND TECHNOLOGY",
        "location": "ROLLA, MO"
    },
    {
        "name": "FRANCISCAN SCHOOL OF THEOLOGY",
        "location": "SAN DIEGO, CA"
    },
    {
        "name": "SAN DIEGO CITY COLLEGE",
        "location": "SAN DIEGO, CA"
    },
    {
        "name": "WORCESTER POLYTECHNIC INSTITUTE",
        "location": "WORCESTER, MA"
    },
    {
        "name": "DALLAS INSTITUTE OF FUNERAL SERVICE",
        "location": "DALLAS, TX"
    },
    {
        "name": "WESTERN WASHINGTON UNIVERSITY",
        "location": "BELLINGHAM, WA"
    },
    {
        "name": "WHATCOM COMMUNITY COLLEGE",
        "location": "BELLINGHAM, WA"
    },
    {
        "name": "PACIFIC UNIVERSITY",
        "location": "FOREST GROVE, OR"
    },
    {
        "name": "EAST CAROLINA UNIVERSITY",
        "location": "GREENVILLE, NC"
    },
    {
        "name": "SAINT VINCENT COLLEGE",
        "location": "LATROBE, PA"
    },
    {
        "name": "SOUTH HILLS BEAUTY ACADEMY",
        "location": "PITTSBURGH, PA"
    },
    {
        "name": "LOS ANGELES FILM SCHOOL",
        "location": "HOLLYWOOD, CA"
    },
    {
        "name": "BERKELEY COLLEGE-NEW YORK",
        "location": "NEW YORK, NY"
    },
    {
        "name": "PAUL MITCHELL THE SCHOOL-RALEIGH",
        "location": "RALEIGH, NC"
    },
    {
        "name": "DELAWARE LEARNING INSTITUTE OF COSMETOLOGY",
        "location": "DAGSBORO, DE"
    },
    {
        "name": "WARTBURG THEOLOGICAL SEMINARY",
        "location": "DUBUQUE, IA"
    },
    {
        "name": "BERKLEE COLLEGE OF MUSIC",
        "location": "BOSTON, MA"
    },
    {
        "name": "OZARK CHRISTIAN COLLEGE",
        "location": "JOPLIN, MO"
    },
    {
        "name": "SAINT AUGUSTINE'S UNIVERSITY",
        "location": "RALEIGH, NC"
    },
    {
        "name": "ROXBOROUGH MEMORIAL HOSPITAL SCHOOL OF NURSING",
        "location": "PHILADELPHIA, PA"
    },
    {
        "name": "YESHIVA GEDOLAH TIFERES BORUCH",
        "location": "NORTH PLAINFIELD, NJ"
    },
    {
        "name": "KCK BEAUTY & BARBER ACADEMY",
        "location": "JACKSONVILLE, FL"
    },
    {
        "name": "D&S SCHOOL OF COSMETOLOGY",
        "location": "WATERFORD, MI"
    },
    {
        "name": "DERECH HACHAIM SEMINARY",
        "location": "MONROE, NY"
    },
    {
        "name": "YELLOWSTONE CHRISTIAN COLLEGE",
        "location": "BILLINGS, MT"
    },
    {
        "name": "BAIS MEDRASH OF DEXTER PARK",
        "location": "CHESTNUT RIDGE, NY"
    },
    {
        "name": "OHEL MARGULIA SEMINARY",
        "location": "MONSEY, NY"
    },
    {
        "name": "TONSORIAL ARTS BARBER COLLEGE",
        "location": "TEXARKANA, TX"
    },
    {
        "name": "YESHIVA OF FAR ROCKAWAY DERECH AYSON RABBINICAL SEMINARY",
        "location": "FAR ROCKAWAY, NY"
    },
    {
        "name": "UNIVERSITY OF THE DISTRICT OF COLUMBIA-DAVID A CLARKE SCHOOL OF LAW",
        "location": "WASHINGTON, DC"
    },
    {
        "name": "AMERICAN UNIVERSITY",
        "location": "WASHINGTON, DC"
    },
    {
        "name": "AVIATION INSTITUTE OF MAINTENANCE-FREMONT",
        "location": "FREMONT, CA"
    },
    {
        "name": "UNITED EDUCATION INSTITUTE-ONTARIO",
        "location": "ONTARIO, CA"
    },
    {
        "name": "TEXAS COLLEGE OF COSMETOLOGY-LUBBOCK",
        "location": "LUBBOCK, TX"
    },
    {
        "name": "LAREDO CHI ACADEMY BEAUTY SCHOOL",
        "location": "LAREDO, TX"
    },
    {
        "name": "SONORAN DESERT INSTITUTE",
        "location": "TEMPE, AZ"
    },
    {
        "name": "COLBY COMMUNITY COLLEGE",
        "location": "COLBY, KS"
    },
    {
        "name": "HENRY FORD COLLEGE",
        "location": "DEARBORN, MI"
    },
    {
        "name": "OCEAN COUNTY COLLEGE",
        "location": "TOMS RIVER, NJ"
    },
    {
        "name": "SOUTHERN METHODIST UNIVERSITY",
        "location": "DALLAS, TX"
    },
    {
        "name": "ABILENE CHRISTIAN UNIVERSITY",
        "location": "ABILENE, TX"
    },
    {
        "name": "PACE UNIVERSITY",
        "location": "NEW YORK, NY"
    },
    {
        "name": "CHATHAM UNIVERSITY",
        "location": "PITTSBURGH, PA"
    },
    {
        "name": "COLLEGE OF THE REDWOODS",
        "location": "EUREKA, CA"
    },
    {
        "name": "ROBERT MORGAN EDUCATIONAL CENTER AND TECHNICAL COLLEGE",
        "location": "MIAMI, FL"
    },
    {
        "name": "RANDOLPH COLLEGE",
        "location": "LYNCHBURG, VA"
    },
    {
        "name": "ROGER WILLIAMS UNIVERSITY",
        "location": "BRISTOL, RI"
    },
    {
        "name": "UNIVERSITY OF SOUTH CAROLINA BEAUFORT",
        "location": "BLUFFTON, SC"
    },
    {
        "name": "BALDWIN BEAUTY SCHOOL-SOUTH AUSTIN",
        "location": "AUSTIN, TX"
    },
    {
        "name": "REMINGTON COLLEGE-NORTH HOUSTON CAMPUS",
        "location": "HOUSTON, TX"
    },
    {
        "name": "COCHISE COUNTY COMMUNITY COLLEGE DISTRICT",
        "location": "SIERRA VISTA, AZ"
    },
    {
        "name": "UPPER VALLEY CAREER CENTER",
        "location": "PIQUA, OH"
    },
    {
        "name": "GREATER ALTOONA CAREER & TECHNOLOGY CENTER",
        "location": "ALTOONA, PA"
    },
    {
        "name": "EASTERN SHORE COMMUNITY COLLEGE",
        "location": "MELFA, VA"
    },
    {
        "name": "DEPAUW UNIVERSITY",
        "location": "GREENCASTLE, IN"
    },
    {
        "name": "UNITEK COLLEGE",
        "location": "HAYWARD, CA"
    },
    {
        "name": "SAVANNAH LAW SCHOOL",
        "location": "SAVANNAH, GA"
    },
    {
        "name": "YESHIVA YESODEI HATORAH",
        "location": "LAKEWOOD, NJ"
    },
    {
        "name": "CLATSOP COMMUNITY COLLEGE",
        "location": "ASTORIA, OR"
    },
    {
        "name": "HILLSDALE COLLEGE",
        "location": "HILLSDALE, MI"
    },
    {
        "name": "PIPO ACADEMY OF HAIR DESIGN",
        "location": "EL PASO, TX"
    },
    {
        "name": "CHAMP'S BARBER SCHOOL",
        "location": "LANCASTER, PA"
    },
    {
        "name": "BARBER INSTITUTE OF TEXAS",
        "location": "LONGVIEW, TX"
    },
    {
        "name": "PARK PLACE PREMIER BARBER SCHOOL",
        "location": "NEW ORLEANS, LA"
    },
    {
        "name": "NEW HORIZONS MEDICAL INSTITUTE-WINDER",
        "location": "WINDER, GA"
    },
    {
        "name": "SAE EXPRESSION COLLEGE",
        "location": "EMERYVILLE, CA"
    },
    {
        "name": "THE SALON PROFESSIONAL ACADEMY-HUNTSVILLE",
        "location": "HUNTSVILLE, AL"
    },
    {
        "name": "WAYNE STATE UNIVERSITY",
        "location": "DETROIT, MI"
    },
    {
        "name": "MIDWEST INSTITUTE",
        "location": "FENTON, MO"
    },
    {
        "name": "YESHIVA OF NITRA RABBINICAL COLLEGE",
        "location": "MOUNT KISCO, NY"
    },
    {
        "name": "SOUTH GEORGIA TECHNICAL COLLEGE",
        "location": "AMERICUS, GA"
    },
    {
        "name": "UNIVERSITY OF HARTFORD",
        "location": "WEST HARTFORD, CT"
    },
    {
        "name": "WABASH VALLEY COLLEGE",
        "location": "MOUNT CARMEL, IL"
    },
    {
        "name": "RELAY GRADUATE SCHOOL OF EDUCATION",
        "location": "NEW YORK, NY"
    },
    {
        "name": "DEVRY UNIVERSITY-VIRGINIA",
        "location": "ARLINGTON, VA"
    },
    {
        "name": "CENTRAL STATE UNIVERSITY",
        "location": "WILBERFORCE, OH"
    },
    {
        "name": "TDDS TECHNICAL INSTITUTE",
        "location": "LAKE MILTON, OH"
    },
    {
        "name": "OLIVET COLLEGE",
        "location": "OLIVET, MI"
    },
    {
        "name": "HOBART WILLIAM SMITH COLLEGES",
        "location": "GENEVA, NY"
    },
    {
        "name": "INTER AMERICAN UNIVERSITY OF PUERTO RICO-CENTRAL OFFICE",
        "location": "SAN JUAN, PR"
    },
    {
        "name": "ASPEN UNIVERSITY",
        "location": "DENVER, CO"
    },
    {
        "name": "VERVE COLLEGE",
        "location": "OAK BROOK, IL"
    },
    {
        "name": "INTERNATIONAL AIR AND HOSPITALITY ACADEMY",
        "location": "VANCOUVER, WA"
    },
    {
        "name": "BJ'S BEAUTY & BARBER COLLEGE",
        "location": "TACOMA, WA"
    },
    {
        "name": "THOMAS MORE UNIVERSITY",
        "location": "CRESTVIEW HILLS, KY"
    },
    {
        "name": "PCI ACADEMY-PLYMOUTH",
        "location": "PLYMOUTH, MN"
    },
    {
        "name": "PENSACOLA SCHOOL OF MASSAGE THERAPY & HEALTH CAREERS",
        "location": "PENSACOLA, FL"
    },
    {
        "name": "LIVING ARTS COLLEGE",
        "location": "RALEIGH, NC"
    },
    {
        "name": "TRANSYLVANIA UNIVERSITY",
        "location": "LEXINGTON, KY"
    },
    {
        "name": "SEMINOLE STATE COLLEGE OF FLORIDA",
        "location": "SANFORD, FL"
    },
    {
        "name": "XAVIER UNIVERSITY OF LOUISIANA",
        "location": "NEW ORLEANS, LA"
    },
    {
        "name": "UNIVERSITY OF PUERTO RICO-CENTRAL ADMINISTRATION",
        "location": "SAN JUAN, PR"
    },
    {
        "name": "TUCSON COLLEGE OF BEAUTY",
        "location": "TUCSON, AZ"
    },
    {
        "name": "ROCKHURST UNIVERSITY",
        "location": "KANSAS CITY, MO"
    },
    {
        "name": "INSTITUTE OF MEDICAL CAREERS",
        "location": "PITTSBURGH, PA"
    },
    {
        "name": "RHODE ISLAND SCHOOL OF DESIGN",
        "location": "PROVIDENCE, RI"
    },
    {
        "name": "TREND BARBER COLLEGE",
        "location": "HOUSTON, TX"
    },
    {
        "name": "REMINGTON COLLEGE-NASHVILLE CAMPUS",
        "location": "NASHVILLE, TN"
    },
    {
        "name": "W L BONNER COLLEGE",
        "location": "COLUMBIA, SC"
    },
    {
        "name": "UNITED STATES UNIVERSITY",
        "location": "SAN DIEGO, CA"
    },
    {
        "name": "PENNSYLVANIA STATE UNIVERSITY-PENN STATE ALTOONA",
        "location": "ALTOONA, PA"
    },
    {
        "name": "GERMANNA COMMUNITY COLLEGE",
        "location": "LOCUST GROVE, VA"
    },
    {
        "name": "QUINNIPIAC UNIVERSITY",
        "location": "HAMDEN, CT"
    },
    {
        "name": "PAUL MITCHELL THE SCHOOL-MURFREESBORO",
        "location": "MURFREESBORO, TN"
    },
    {
        "name": "UNIVERSITY OF ADVANCING TECHNOLOGY",
        "location": "TEMPE, AZ"
    },
    {
        "name": "REMINGTON COLLEGE-MEMPHIS CAMPUS",
        "location": "MEMPHIS, TN"
    },
    {
        "name": "YOSEMITE COMMUNITY COLLEGE DISTRICT OFFICE",
        "location": "MODESTO, CA"
    },
    {
        "name": "SAVANNAH STATE UNIVERSITY",
        "location": "SAVANNAH, GA"
    },
    {
        "name": "NORTHWESTERN STATE UNIVERSITY OF LOUISIANA",
        "location": "NATCHITOCHES, LA"
    },
    {
        "name": "METROPOLITAN COMMUNITY COLLEGE-KANSAS CITY",
        "location": "KANSAS CITY, MO"
    },
    {
        "name": "BLOOMFIELD COLLEGE",
        "location": "BLOOMFIELD, NJ"
    },
    {
        "name": "SAN DIEGO COMMUNITY COLLEGE DISTRICT-DISTRICT OFFICE",
        "location": "SAN DIEGO, CA"
    },
    {
        "name": "WEST VALLEY MISSION COMMUNITY COLLEGE DISTRICT OFFICE",
        "location": "SARATOGA, CA"
    },
    {
        "name": "SOUTHWESTERN COMMUNITY COLLEGE",
        "location": "CRESTON, IA"
    },
    {
        "name": "CHARLESTON SCHOOL OF BEAUTY CULTURE",
        "location": "CHARLESTON, WV"
    },
    {
        "name": "UNIVERSIDAD DEL SAGRADO CORAZON",
        "location": "SANTURCE, PR"
    },
    {
        "name": "WARRENSBURG AREA CAREER CENTER",
        "location": "WARRENSBURG, MO"
    },
    {
        "name": "HENRICO COUNTY-SAINT MARYS HOSPITAL SCHOOL OF PRACTICAL NURSING",
        "location": "HENRICO, VA"
    },
    {
        "name": "TRINITY COLLEGE OF PUERTO RICO",
        "location": "PONCE, PR"
    },
    {
        "name": "KENNETH SHULER SCHOOL OF COSMETOLOGY-ROCK HILL",
        "location": "ROCK HILL, SC"
    },
    {
        "name": "AMERICAN COLLEGE OF HAIR DESIGN INC",
        "location": "SEDALIA, MO"
    },
    {
        "name": "LIL LOU'S BEAUTY AND BARBER COLLEGE",
        "location": "GARY, IN"
    },
    {
        "name": "ONONDAGA CORTLAND MADISON BOCES",
        "location": "LIVERPOOL, NY"
    },
    {
        "name": "SOUTH FLORIDA INSTITUTE OF TECHNOLOGY",
        "location": "MIAMI, FL"
    },
    {
        "name": "BAIS MEDRASH TORAS CHESED",
        "location": "LAKEWOOD, NJ"
    },
    {
        "name": "CEM COLLEGE-BAYAMON",
        "location": "BAYAMÓN, PR"
    },
    {
        "name": "NEW TYLER BARBER COLLEGE INC",
        "location": "NORTH LITTLE ROCK, AR"
    },
    {
        "name": "NEW ENGLAND TRACTOR TRAILER TRAINING SCHOOL OF CONNECTICUT",
        "location": "SOMERS, CT"
    },
    {
        "name": "STAGE ONE-THE HAIR SCHOOL",
        "location": "LAKE CHARLES, LA"
    },
    {
        "name": "COLBY COLLEGE",
        "location": "WATERVILLE, ME"
    },
    {
        "name": "SPECS HOWARD SCHOOL OF MEDIA ARTS",
        "location": "SOUTHFIELD, MI"
    },
    {
        "name": "BLESSING RIEMAN COLLEGE OF NURSING AND HEALTH SCIENCES",
        "location": "QUINCY, IL"
    },
    {
        "name": "DON ROBERTS SCHOOL OF HAIR DESIGN",
        "location": "SCHERERVILLE, IN"
    },
    {
        "name": "SAINT FRANCIS MEDICAL CENTER SCHOOL OF NURSING",
        "location": "TRENTON, NJ"
    },
    {
        "name": "AMERICAN COLLEGE OF FINANCIAL SERVICES",
        "location": "KING OF PRUSSIA, PA"
    },
    {
        "name": "INTERNATIONAL BEAUTY SCHOOL 4",
        "location": "MARTINSBURG, WV"
    },
    {
        "name": "MASSACHUSETTS MARITIME ACADEMY",
        "location": "BUZZARDS BAY, MA"
    },
    {
        "name": "SPRINGFIELD TECHNICAL COMMUNITY COLLEGE",
        "location": "SPRINGFIELD, MA"
    },
    {
        "name": "MONTCLAIR STATE UNIVERSITY",
        "location": "MONTCLAIR, NJ"
    },
    {
        "name": "EMBRY-RIDDLE AERONAUTICAL UNIVERSITY-WORLDWIDE",
        "location": "DAYTONA BEACH, FL"
    },
    {
        "name": "MADONNA UNIVERSITY",
        "location": "LIVONIA, MI"
    },
    {
        "name": "ALLGOOD BEAUTY INSTITUTE",
        "location": "FRISCO, TX"
    },
    {
        "name": "YESHIVA OF OCEAN",
        "location": "GREENFIELD PARK, NY"
    },
    {
        "name": "CONGREGATION TALMIDEI MESIVTA TIFERES SHMIEL ALEKSANDER",
        "location": "BROOKLYN, NY"
    },
    {
        "name": "SUNCOAST TECHNICAL EDUCATION CENTER -",
        "location": "BROOKSVILLE, FL"
    },
    {
        "name": "GREAT LAKES BOAT BUILDING SCHOOL",
        "location": "CEDARVILLE, MI"
    },
    {
        "name": "PCI ACADEMY-IOWA CITY",
        "location": "IOWA CITY, IA"
    },
    {
        "name": "BOWIE STATE UNIVERSITY",
        "location": "BOWIE, MD"
    },
    {
        "name": "MAHARISHI INTERNATIONAL UNIVERSITY",
        "location": "FAIRFIELD, IA"
    },
    {
        "name": "CONCORDE CAREER COLLEGE-SOUTHAVEN",
        "location": "SOUTHAVEN, MS"
    },
    {
        "name": "ACADEMY FOR CAREERS AND TECHNOLOGY",
        "location": "MULLINS, SC"
    },
    {
        "name": "FAIRFAX UNIVERSITY OF AMERICA",
        "location": "FAIRFAX, VA"
    },
    {
        "name": "PHIPPS ACADEMY OF BARBERING",
        "location": "RICHTON PARK, IL"
    },
    {
        "name": "OHIO UNIVERSITY-LANCASTER CAMPUS",
        "location": "LANCASTER, OH"
    },
    {
        "name": "CABRINI UNIVERSITY",
        "location": "RADNOR, PA"
    },
    {
        "name": "SOUTHERN VIRGINIA UNIVERSITY",
        "location": "BUENA VISTA, VA"
    },
    {
        "name": "EMPIRE BEAUTY SCHOOL-WEST PALM",
        "location": "WEST PALM BEACH, FL"
    },
    {
        "name": "HERZING UNIVERSITY-KENOSHA",
        "location": "KENOSHA, WI"
    },
    {
        "name": "AVEDA ARTS & SCIENCES INSTITUTE-COVINGTON",
        "location": "COVINGTON, LA"
    },
    {
        "name": "GOGEBIC COMMUNITY COLLEGE",
        "location": "IRONWOOD, MI"
    },
    {
        "name": "OREGON STATE UNIVERSITY-CASCADES CAMPUS",
        "location": "BEND, OR"
    },
    {
        "name": "CONCORDE CAREER INSTITUTE-ORLANDO",
        "location": "ORLANDO, FL"
    },
    {
        "name": "PIONEER CAREER AND TECHNOLOGY CENTER",
        "location": "SHELBY, OH"
    },
    {
        "name": "INDIANA UNIVERSITY-EAST",
        "location": "RICHMOND, IN"
    },
    {
        "name": "LAWRENCE & COMPANY COLLEGE OF COSMETOLOGY",
        "location": "HANFORD, CA"
    },
    {
        "name": "EMPIRE BEAUTY SCHOOL-ROCHESTER",
        "location": "ROCHESTER, NY"
    },
    {
        "name": "COMMUNITY COLLEGE OF BEAVER COUNTY",
        "location": "MONACA, PA"
    },
    {
        "name": "BLALOCK'S PROFESSIONAL BEAUTY COLLEGE",
        "location": "SHREVEPORT, LA"
    },
    {
        "name": "SUSQUEHANNA UNIVERSITY",
        "location": "SELINSGROVE, PA"
    },
    {
        "name": "UNIVERSITY OF SOUTH CAROLINA-LANCASTER",
        "location": "LANCASTER, SC"
    },
    {
        "name": "UNIVERSITY OF PHOENIX-MICHIGAN",
        "location": "SOUTHFIELD, MI"
    },
    {
        "name": "NORTHWEST COLLEGE-MEDFORD",
        "location": "MEDFORD, OR"
    },
    {
        "name": "TRINITY COLLEGE",
        "location": "HARTFORD, CT"
    },
    {
        "name": "CARRINGTON COLLEGE-ADMINISTRATIVE OFFICE",
        "location": "SACRAMENTO, CA"
    },
    {
        "name": "SOUTHEAST TEXAS CAREER INSTITUTE",
        "location": "SILSBEE, TX"
    },
    {
        "name": "COASTLINE BEAUTY COLLEGE",
        "location": "FOUNTAIN VALLEY, CA"
    },
    {
        "name": "NORTHWEST TECHNICAL INSTITUTE",
        "location": "SPRINGDALE, AR"
    },
    {
        "name": "COLLEGE OF SAN MATEO",
        "location": "SAN MATEO, CA"
    },
    {
        "name": "CENTRAL CAROLINA TECHNICAL COLLEGE",
        "location": "SUMTER, SC"
    },
    {
        "name": "THE CHICAGO SCHOOL OF PROFESSIONAL PSYCHOLOGY AT LOS ANGELES",
        "location": "LOS ANGELES, CA"
    },
    {
        "name": "CALVIN THEOLOGICAL SEMINARY",
        "location": "GRAND RAPIDS, MI"
    },
    {
        "name": "DAVIS TECHNICAL COLLEGE",
        "location": "KAYSVILLE, UT"
    },
    {
        "name": "ST. THOMAS UNIVERSITY",
        "location": "MIAMI GARDENS, FL"
    },
    {
        "name": "CANNELLA SCHOOL OF HAIR DESIGN-CHICAGO",
        "location": "CHICAGO, IL"
    },
    {
        "name": "WASHINGTON COLLEGE",
        "location": "CHESTERTOWN, MD"
    },
    {
        "name": "THANH LE COLLEGE SCHOOL OF COSMETOLOGY",
        "location": "GARDEN GROVE, CA"
    },
    {
        "name": "EMPIRE BEAUTY SCHOOL-MONROEVILLE",
        "location": "MONROEVILLE, PA"
    },
    {
        "name": "LEON STUDIO ONE SCHOOL OF BEAUTY KNOWLEDGE",
        "location": "WILLIAMSVILLE, NY"
    },
    {
        "name": "CHARLES H MCCANN TECHNICAL SCHOOL",
        "location": "NORTH ADAMS, MA"
    },
    {
        "name": "OHIO STATE SCHOOL OF COSMETOLOGY-CANAL WINCHESTER",
        "location": "CANAL WINCHESTER, OH"
    },
    {
        "name": "UNIVERSITY OF NEW MEXICO-TAOS CAMPUS",
        "location": "RANCHOS DE TAOS, NM"
    },
    {
        "name": "INSTITUTE OF HEALTH & TECHNOLOGY",
        "location": "HATTIESBURG, MS"
    },
    {
        "name": "OKALOOSA TECHNICAL COLLEGE",
        "location": "FORT WALTON BEACH, FL"
    },
    {
        "name": "ST CLAIR COUNTY COMMUNITY COLLEGE",
        "location": "PORT HURON, MI"
    },
    {
        "name": "BLUE CLIFF COLLEGE-HOUMA",
        "location": "HOUMA, LA"
    },
    {
        "name": "UNIVERSITY OF NORTHWESTERN-ST PAUL",
        "location": "SAINT PAUL, MN"
    },
    {
        "name": "SAGINAW CHIPPEWA TRIBAL COLLEGE",
        "location": "MOUNT PLEASANT, MI"
    },
    {
        "name": "BETH HAMEDRASH SHAAREI YOSHER INSTITUTE",
        "location": "BROOKLYN, NY"
    },
    {
        "name": "UNIVERSITY OF SIOUX FALLS",
        "location": "SIOUX FALLS, SD"
    },
    {
        "name": "LAREDO BEAUTY COLLEGE INC",
        "location": "LAREDO, TX"
    },
    {
        "name": "EMPIRE BEAUTY SCHOOL-SPRING LAKE PARK",
        "location": "SPRING LAKE PARK, MN"
    },
    {
        "name": "GEORGETOWN COLLEGE",
        "location": "GEORGETOWN, KY"
    },
    {
        "name": "UNIVERSITY OF NEBRASKA MEDICAL CENTER",
        "location": "OMAHA, NE"
    },
    {
        "name": "ROBERT FIANCE BEAUTY SCHOOLS",
        "location": "BOYNTON BEACH, FL"
    },
    {
        "name": "ST FRANCIS MEDICAL CENTER-SCHOOL OF RADIOLOGIC TECHNOLOGY",
        "location": "TRENTON, NJ"
    },
    {
        "name": "CUNY HOSTOS COMMUNITY COLLEGE",
        "location": "BRONX, NY"
    },
    {
        "name": "CUNY YORK COLLEGE",
        "location": "JAMAICA, NY"
    },
    {
        "name": "INTER AMERICAN UNIVERSITY OF PUERTO RICO-SCHOOL OF LAW",
        "location": "SAN JUAN, PR"
    },
    {
        "name": "NORTHWEST COLLEGE-TUALATIN",
        "location": "TUALATIN, OR"
    },
    {
        "name": "STONEHILL COLLEGE",
        "location": "EASTON, MA"
    },
    {
        "name": "FLAGLER COLLEGE",
        "location": "SAINT AUGUSTINE, FL"
    },
    {
        "name": "RENAISSANCE ACADEMIE",
        "location": "PROVO, UT"
    },
    {
        "name": "WARNER PACIFIC UNIVERSITY PROFESSIONAL AND GRADUATE STUDIES",
        "location": "PORTLAND, OR"
    },
    {
        "name": "HEARTLAND COMMUNITY COLLEGE",
        "location": "NORMAL, IL"
    },
    {
        "name": "UNIVERSITY OF VERMONT",
        "location": "BURLINGTON, VT"
    },
    {
        "name": "ANTIOCH UNIVERSITY-SYSTEM ADMINISTRATION",
        "location": "YELLOW SPRINGS, OH"
    },
    {
        "name": "COMMUNITY CHRISTIAN COLLEGE",
        "location": "REDLANDS, CA"
    },
    {
        "name": "FRANKLIN COUNTY CAREER AND TECHNOLOGY CENTER",
        "location": "CHAMBERSBURG, PA"
    },
    {
        "name": "CALIFORNIA CHRISTIAN COLLEGE",
        "location": "FRESNO, CA"
    },
    {
        "name": "GRAYSON COLLEGE",
        "location": "DENISON, TX"
    },
    {
        "name": "JOHN TYLER COMMUNITY COLLEGE",
        "location": "CHESTER, VA"
    },
    {
        "name": "MADISON AREA TECHNICAL COLLEGE",
        "location": "MADISON, WI"
    },
    {
        "name": "NORTH PARK UNIVERSITY",
        "location": "CHICAGO, IL"
    },
    {
        "name": "AVIATION INSTITUTE OF MAINTENANCE-HOUSTON",
        "location": "HOUSTON, TX"
    },
    {
        "name": "ECPI UNIVERSITY",
        "location": "VIRGINIA BEACH, VA"
    },
    {
        "name": "ADVANCE BEAUTY COLLEGE",
        "location": "GARDEN GROVE, CA"
    },
    {
        "name": "GNOMON",
        "location": "HOLLYWOOD, CA"
    },
    {
        "name": "CET-SOLEDAD",
        "location": "SOLEDAD, CA"
    },
    {
        "name": "BRIDGES BEAUTY COLLEGE",
        "location": "VICTORVILLE, CA"
    },
    {
        "name": "IOWA SCHOOL OF BEAUTY-SIOUX CITY",
        "location": "SIOUX CITY, IA"
    },
    {
        "name": "NEW ORLEANS BAPTIST THEOLOGICAL SEMINARY",
        "location": "NEW ORLEANS, LA"
    },
    {
        "name": "WESTERN PENNSYLVANIA HOSPITAL SCHOOL OF NURSING",
        "location": "PITTSBURGH, PA"
    },
    {
        "name": "AMERICAN UNIVERSITY OF PUERTO RICO",
        "location": "BAYAMON, PR"
    },
    {
        "name": "PERALTA COMMUNITY COLLEGE SYSTEM OFFICE",
        "location": "OAKLAND, CA"
    },
    {
        "name": "SAN FRANCISCO ART INSTITUTE",
        "location": "SAN FRANCISCO, CA"
    },
    {
        "name": "CHARLES A JONES CAREER AND EDUCATION CENTER",
        "location": "SACRAMENTO, CA"
    },
    {
        "name": "NORTH IOWA AREA COMMUNITY COLLEGE",
        "location": "MASON CITY, IA"
    },
    {
        "name": "SHORELINE COMMUNITY COLLEGE",
        "location": "SHORELINE, WA"
    },
    {
        "name": "SAINT AMBROSE UNIVERSITY",
        "location": "DAVENPORT, IA"
    },
    {
        "name": "BENNETT COLLEGE",
        "location": "GREENSBORO, NC"
    },
    {
        "name": "FAYETTEVILLE STATE UNIVERSITY",
        "location": "FAYETTEVILLE, NC"
    },
    {
        "name": "ATHENAEUM OF OHIO",
        "location": "CINCINNATI, OH"
    },
    {
        "name": "UNION THEOLOGICAL SEMINARY IN THE CITY OF NEW YORK",
        "location": "NEW YORK, NY"
    },
    {
        "name": "ICAHN SCHOOL OF MEDICINE AT MOUNT SINAI",
        "location": "NEW YORK, NY"
    },
    {
        "name": "CAYUGA ONONDAGA BOCES-PRACTICAL NURSING PROGRAM",
        "location": "AUBURN, NY"
    },
    {
        "name": "THE BEAUTY INSTITUTE",
        "location": "WEST PALM BEACH, FL"
    },
    {
        "name": "PAUL MITCHELL THE SCHOOL-NORTH HAVEN",
        "location": "NORTH HAVEN, CT"
    },
    {
        "name": "ITASCA COMMUNITY COLLEGE",
        "location": "GRAND RAPIDS, MN"
    },
    {
        "name": "PACIFICA GRADUATE INSTITUTE",
        "location": "CARPINTERIA, CA"
    },
    {
        "name": "PEARL RIVER COMMUNITY COLLEGE",
        "location": "POPLARVILLE, MS"
    },
    {
        "name": "GREAT LAKES TRUCK DRIVING SCHOOL",
        "location": "COLUMBIA STATION, OH"
    },
    {
        "name": "REFORMED UNIVERSITY",
        "location": "LAWRENCEVILLE, GA"
    },
    {
        "name": "CHRISTINA AND COMPANY EDUCATION CENTER",
        "location": "LAFAYETTE, IN"
    },
    {
        "name": "MERIDIAN UNIVERSITY",
        "location": "PETALUMA, CA"
    },
    {
        "name": "PREMIERE INTERNATIONAL COLLEGE",
        "location": "FORT MYERS, FL"
    },
    {
        "name": "NATIONAL AMERICAN UNIVERSITY-KINGS BAY",
        "location": "KINGS BAY, GA"
    },
    {
        "name": "GATHER 4 HIM CHRISTIAN COLLEGE",
        "location": "KENNEWICK, WA"
    },
    {
        "name": "SAN JOAQUIN VALLEY COLLEGE-ATASCADERO",
        "location": "ATASCADERO, CA"
    },
    {
        "name": "COLUMBIA COLLEGE - IMPERIAL",
        "location": "IMPERIAL, CA"
    },
    {
        "name": "EDP UNIVERSITY OF PUERTO RICO-HUMACAO",
        "location": "HUMACAO, PR"
    },
    {
        "name": "STRAYER UNIVERSITY - MONTGOMERY CAMPUS",
        "location": "MONTGOMERY, AL"
    },
    {
        "name": "UNIVERSITY OF PUERTO RICO-BAYAMON",
        "location": "BAYAMON, PR"
    },
    {
        "name": "UNIVERSITY OF PUERTO RICO-CAROLINA",
        "location": "CAROLINA, PR"
    },
    {
        "name": "FLORIDA CAREER COLLEGE-MARGATE",
        "location": "MARGATE, FL"
    },
    {
        "name": "UNIVERSAL TECHNICAL INSTITUTE-DALLAS FORT WORTH",
        "location": "IRVING, TX"
    },
    {
        "name": "ASI CAREER INSTITUTE",
        "location": "TURNERSVILLE, NJ"
    },
    {
        "name": "VOGUE COLLEGE OF COSMETOLOGY-SAN ANTONIO FREDERICKSBURG",
        "location": "SAN ANTONIO, TX"
    },
    {
        "name": "MANDL SCHOOL-THE COLLEGE OF ALLIED HEALTH",
        "location": "NEW YORK, NY"
    },
    {
        "name": "TIGI HAIRDRESSING ACADEMY GUILFORD",
        "location": "GUILFORD, CT"
    },
    {
        "name": "SANDRA ACADEMY OF SALON SERVICES, INC",
        "location": "NEW TAZEWELL, TN"
    },
    {
        "name": "AMERICAN TECHNICAL INSTITUTE",
        "location": "BAYAMON, PR"
    },
    {
        "name": "TEXAS SOUTHMOST COLLEGE",
        "location": "BROWNSVILLE, TX"
    },
    {
        "name": "DOUGLAS EDUCATION CENTER",
        "location": "MONESSEN, PA"
    },
    {
        "name": "PAUL MITCHELL THE SCHOOL-MODESTO",
        "location": "MODESTO, CA"
    },
    {
        "name": "UNITED STATES NAVAL ACADEMY",
        "location": "ANNAPOLIS, MD"
    },
    {
        "name": "DIVERSIFIED VOCATIONAL COLLEGE",
        "location": "LOS ANGELES, CA"
    },
    {
        "name": "BENE'S CAREER ACADEMY",
        "location": "NEW PORT RICHEY, FL"
    },
    {
        "name": "UNIVERSITY OF WEST LOS ANGELES",
        "location": "INGLEWOOD, CA"
    },
    {
        "name": "PENNSYLVANIA STATE UNIVERSITY-PENN STATE SHENANGO",
        "location": "SHARON, PA"
    },
    {
        "name": "CLEARFIELD COUNTY CAREER AND TECHNOLOGY CENTER",
        "location": "CLEARFIELD, PA"
    },
    {
        "name": "UNIVERSITY OF ILLINOIS SYSTEM OFFICES",
        "location": "URBANA, IL"
    },
    {
        "name": "YAVAPAI COLLEGE",
        "location": "PRESCOTT, AZ"
    },
    {
        "name": "CERRO COSO COMMUNITY COLLEGE",
        "location": "RIDGECREST, CA"
    },
    {
        "name": "KENT STATE UNIVERSITY AT TRUMBULL",
        "location": "WARREN, OH"
    },
    {
        "name": "EASTERN OKLAHOMA STATE COLLEGE",
        "location": "WILBURTON, OK"
    },
    {
        "name": "UMPQUA COMMUNITY COLLEGE",
        "location": "ROSEBURG, OR"
    },
    {
        "name": "LINCOLN COLLEGE OF TECHNOLOGY-NASHVILLE",
        "location": "NASHVILLE, TN"
    },
    {
        "name": "YORK TECHNICAL COLLEGE",
        "location": "ROCK HILL, SC"
    },
    {
        "name": "WALSH UNIVERSITY",
        "location": "NORTH CANTON, OH"
    },
    {
        "name": "DEVRY UNIVERSITY-INDIANA",
        "location": "MERRILLVILLE, IN"
    },
    {
        "name": "LAUREL TECHNICAL INSTITUTE",
        "location": "MEADVILLE, PA"
    },
    {
        "name": "TEXAS A&M UNIVERSITY-TEXARKANA",
        "location": "TEXARKANA, TX"
    },
    {
        "name": "SAE INSTITUTE OF TECHNOLOGY-CHICAGO",
        "location": "CHICAGO, IL"
    },
    {
        "name": "CENTRAL BAPTIST COLLEGE",
        "location": "CONWAY, AR"
    },
    {
        "name": "CONCORDE CAREER INSTITUTE-TAMPA",
        "location": "TAMPA, FL"
    },
    {
        "name": "AVEDA INSTITUTE-TWIN FALLS",
        "location": "TWIN FALLS, ID"
    },
    {
        "name": "MICHIGAN STATE UNIVERSITY-COLLEGE OF LAW",
        "location": "EAST LANSING, MI"
    },
    {
        "name": "FELICIAN UNIVERSITY",
        "location": "LODI, NJ"
    },
    {
        "name": "CONCORDIA COLLEGE",
        "location": "BRONXVILLE, NY"
    },
    {
        "name": "SAMPSON COMMUNITY COLLEGE",
        "location": "CLINTON, NC"
    },
    {
        "name": "INSTITUTO TECNOLOGICO DE PUERTO RICO-RECINTO DE MANATI",
        "location": "MANATI, PR"
    },
    {
        "name": "INTER AMERICAN UNIVERSITY OF PUERTO RICO-ARECIBO",
        "location": "ARECIBO, PR"
    },
    {
        "name": "UNIVERSITY SYSTEM OF MARYLAND-RESEARCH CENTERS",
        "location": "BALTIMORE, MD"
    },
    {
        "name": "INTER AMERICAN UNIVERSITY OF PUERTO RICO-SCHOOL OF OPTOMETRY",
        "location": "BAYAMON, PR"
    },
    {
        "name": "METROPOLITAN LEARNING INSTITUTE",
        "location": "REGO PARK, NY"
    },
    {
        "name": "AMERICAN ADVANCED TECHNICIANS INSTITUTE",
        "location": "HIALEAH, FL"
    },
    {
        "name": "ASPEN BEAUTY ACADEMY OF LAUREL",
        "location": "LAUREL, MD"
    },
    {
        "name": "EMPIRE BEAUTY SCHOOL-YORK",
        "location": "YORK, PA"
    },
    {
        "name": "CITY COLLEGE-MIAMI",
        "location": "MIAMI, FL"
    },
    {
        "name": "CENTER FOR ALLIED HEALTH EDUCATION",
        "location": "BROOKLYN, NY"
    },
    {
        "name": "LA JAMES INTERNATIONAL COLLEGE-FT DODGE",
        "location": "FORT DODGE, IA"
    },
    {
        "name": "IOWA WESLEYAN UNIVERSITY",
        "location": "MOUNT PLEASANT, IA"
    },
    {
        "name": "WESTCHESTER SCHOOL OF BEAUTY CULTURE",
        "location": "MOUNT VERNON, NY"
    },
    {
        "name": "ASSUMPTION COLLEGE FOR SISTERS",
        "location": "DENVILLE, NJ"
    },
    {
        "name": "DELAWARE CHENANGO MADISON OTSEGO BOCES-PRACTICAL NURSING PROGRAM",
        "location": "NORWICH, NY"
    },
    {
        "name": "LONG ISLAND UNIVERSITY",
        "location": "BROOKVILLE, NY"
    },
    {
        "name": "BELANGER SCHOOL OF NURSING",
        "location": "SCHENECTADY, NY"
    },
    {
        "name": "EMPIRE BEAUTY SCHOOL-LEBANON",
        "location": "LEBANON, PA"
    },
    {
        "name": "EMPIRE BEAUTY SCHOOL-POTTSVILLE",
        "location": "POTTSVILLE, PA"
    },
    {
        "name": "NEWBERRY COLLEGE",
        "location": "NEWBERRY, SC"
    },
    {
        "name": "HARTFORD SEMINARY",
        "location": "HARTFORD, CT"
    },
    {
        "name": "TEXAS LUTHERAN UNIVERSITY",
        "location": "SEGUIN, TX"
    },
    {
        "name": "NORTH CAROLINA STATE UNIVERSITY AT RALEIGH",
        "location": "RALEIGH, NC"
    },
    {
        "name": "PAUL MITCHELL THE SCHOOL-MICHIGAN",
        "location": "STERLING HEIGHTS, MI"
    },
    {
        "name": "CAMBRIDGE COLLEGE OF HEALTHCARE & TECHNOLOGY",
        "location": "DELRAY BEACH, FL"
    },
    {
        "name": "UNIVERSITY OF MOUNT OLIVE",
        "location": "MOUNT OLIVE, NC"
    },
    {
        "name": "PHOENIX SEMINARY",
        "location": "SCOTTSDALE, AZ"
    },
    {
        "name": "INNER STATE BEAUTY SCHOOL",
        "location": "LYNDHURST, OH"
    },
    {
        "name": "AUBURN UNIVERSITY",
        "location": "AUBURN, AL"
    },
    {
        "name": "PAUL MITCHELL THE SCHOOL-COLORADO SPRINGS",
        "location": "COLORADO SPRINGS, CO"
    },
    {
        "name": "BELLA CAPELLI ACADEMY",
        "location": "MONROEVILLE, PA"
    },
    {
        "name": "ADVANCED TRAINING INSTITUTE",
        "location": "LAS VEGAS, NV"
    },
    {
        "name": "EVERETT COMMUNITY COLLEGE",
        "location": "EVERETT, WA"
    },
    {
        "name": "UNIVERSITY OF PUGET SOUND",
        "location": "TACOMA, WA"
    },
    {
        "name": "AMERICAN COLLEGE OF HEALTHCARE AND TECHNOLOGY",
        "location": "RIVERSIDE, CA"
    },
    {
        "name": "DANVILLE COMMUNITY COLLEGE",
        "location": "DANVILLE, VA"
    },
    {
        "name": "CALIFORNIA STATE UNIVERSITY-FULLERTON",
        "location": "FULLERTON, CA"
    },
    {
        "name": "COSUMNES RIVER COLLEGE",
        "location": "SACRAMENTO, CA"
    },
    {
        "name": "MARYWOOD UNIVERSITY",
        "location": "SCRANTON, PA"
    },
    {
        "name": "CITIZENS SCHOOL OF NURSING",
        "location": "TARENTUM, PA"
    },
    {
        "name": "MESSIAH UNIVERSITY",
        "location": "MECHANICSBURG, PA"
    },
    {
        "name": "ACADEMY OF CAREERS AND TECHNOLOGY",
        "location": "BECKLEY, WV"
    },
    {
        "name": "UNIVERSIDAD ANA G. MENDEZ-CAROLINA CAMPUS",
        "location": "CAROLINA, PR"
    },
    {
        "name": "WEST HILLS COLLEGE-LEMOORE",
        "location": "LEMOORE, CA"
    },
    {
        "name": "FIDM-FASHION INSTITUTE OF DESIGN & MERCHANDISING-SAN FRANCISCO",
        "location": "SAN FRANCISCO, CA"
    },
    {
        "name": "COUNTY COLLEGE OF MORRIS",
        "location": "RANDOLPH, NJ"
    },
    {
        "name": "STONE ACADEMY-WEST HAVEN",
        "location": "WEST HAVEN, CT"
    },
    {
        "name": "ALBANY STATE UNIVERSITY",
        "location": "ALBANY, GA"
    },
    {
        "name": "GRADY HEALTH SYSTEM PROFESSIONAL SCHOOLS",
        "location": "ATLANTA, GA"
    },
    {
        "name": "ARKANSAS COLLEGE OF BARBERING AND HAIR DESIGN",
        "location": "NORTH LITTLE ROCK, AR"
    },
    {
        "name": "MERCER UNIVERSITY",
        "location": "MACON, GA"
    },
    {
        "name": "LINCOLN TECHNICAL INSTITUTE-LINCOLN",
        "location": "LINCOLN, RI"
    },
    {
        "name": "PAUL MITCHELL THE SCHOOL-ARKANSAS",
        "location": "FAYETTEVILLE, AR"
    },
    {
        "name": "MARYMOUNT CALIFORNIA UNIVERSITY",
        "location": "RANCHO PALOS VERDES, CA"
    },
    {
        "name": "BETHANY THEOLOGICAL SEMINARY",
        "location": "RICHMOND, IN"
    },
    {
        "name": "MIDDLEBURY INSTITUTE OF INTERNATIONAL STUDIES AT MONTEREY",
        "location": "MONTEREY, CA"
    },
    {
        "name": "LINCOLN COLLEGE OF TECHNOLOGY-MELROSE PARK",
        "location": "MELROSE PARK, IL"
    },
    {
        "name": "KEENE STATE COLLEGE",
        "location": "KEENE, NH"
    },
    {
        "name": "SOUTH HILLS SCHOOL OF BUSINESS & TECHNOLOGY",
        "location": "STATE COLLEGE, PA"
    },
    {
        "name": "WAYNESBURG UNIVERSITY",
        "location": "WAYNESBURG, PA"
    },
    {
        "name": "MOUNT HOLYOKE COLLEGE",
        "location": "SOUTH HADLEY, MA"
    },
    {
        "name": "LASELL UNIVERSITY",
        "location": "NEWTON, MA"
    },
    {
        "name": "MONTGOMERY COLLEGE",
        "location": "ROCKVILLE, MD"
    },
    {
        "name": "REGAN CAREER INSTITUTE",
        "location": "EL MONTE, CA"
    },
    {
        "name": "INNOVATE SALON ACADEMY",
        "location": "EWING, NJ"
    },
    {
        "name": "AMERICAN COLLEGE OF THE BUILDING ARTS",
        "location": "CHARLESTON, SC"
    },
    {
        "name": "EDP UNIVERSITY OF PUERTO RICO-MANATI",
        "location": "MANATI, PR"
    },
    {
        "name": "BFF KIDZ TRAINING",
        "location": "BRANDON, FL"
    },
    {
        "name": "ELITE WELDING ACADEMY",
        "location": "SOUTH POINT, OH"
    },
    {
        "name": "ROSS MEDICAL EDUCATION CENTER-MUNCIE",
        "location": "MUNCIE, IN"
    },
    {
        "name": "VALOR CHRISTIAN COLLEGE",
        "location": "CANAL WINCHESTER, OH"
    },
    {
        "name": "DAYTONA STATE COLLEGE",
        "location": "DAYTONA BEACH, FL"
    },
    {
        "name": "KANSAS CITY KANSAS COMMUNITY COLLEGE",
        "location": "KANSAS CITY, KS"
    },
    {
        "name": "ALBIZU UNIVERSITY-SAN JUAN",
        "location": "SAN JUAN, PR"
    },
    {
        "name": "MORTON COLLEGE",
        "location": "CICERO, IL"
    },
    {
        "name": "ARCLABS",
        "location": "PIEDMONT, SC"
    },
    {
        "name": "YESHIVA GEDOLAH SHAAREI SHMUEL",
        "location": "LAKEWOOD, NJ"
    },
    {
        "name": "HOUSE OF HEAVILIN BEAUTY COLLEGE-ACADEMY OF BEAUTY PROFESSIONALS",
        "location": "APPLETON, WI"
    },
    {
        "name": "HOUSE OF HEAVILIN BEAUTY COLLEGE-ACADEMY OF BEAUTY PROFESSIONALS",
        "location": "GREEN BAY, WI"
    },
    {
        "name": "TEXAS SOUTHERN UNIVERSITY",
        "location": "HOUSTON, TX"
    },
    {
        "name": "ORAL ROBERTS UNIVERSITY",
        "location": "TULSA, OK"
    },
    {
        "name": "SUNY COLLEGE AT POTSDAM",
        "location": "POTSDAM, NY"
    },
    {
        "name": "NORTH CENTRAL MICHIGAN COLLEGE",
        "location": "PETOSKEY, MI"
    },
    {
        "name": "PAUL MITCHELL THE SCHOOL-EAST BAY",
        "location": "PLEASANT HILL, CA"
    },
    {
        "name": "UEI COLLEGE-FRESNO",
        "location": "FRESNO, CA"
    },
    {
        "name": "THE COLLECTIVE SCHOOL OF MUSIC",
        "location": "NEW YORK, NY"
    },
    {
        "name": "FREMONT COLLEGE",
        "location": "CERRITOS, CA"
    },
    {
        "name": "OHIO CHRISTIAN UNIVERSITY",
        "location": "CIRCLEVILLE, OH"
    },
    {
        "name": "PARIS JUNIOR COLLEGE",
        "location": "PARIS, TX"
    },
    {
        "name": "COWLEY COUNTY COMMUNITY COLLEGE",
        "location": "ARKANSAS CITY, KS"
    },
    {
        "name": "AUGUSTA UNIVERSITY",
        "location": "AUGUSTA, GA"
    },
    {
        "name": "GENESIS CAREER COLLEGE-LEBANON",
        "location": "LEBANON, TN"
    },
    {
        "name": "MOORPARK COLLEGE",
        "location": "MOORPARK, CA"
    },
    {
        "name": "CLEVELAND INSTITUTE OF MUSIC",
        "location": "CLEVELAND, OH"
    },
    {
        "name": "INTERACTIVE COLLEGE OF TECHNOLOGY-GAINESVILLE",
        "location": "GAINESVILLE, GA"
    },
    {
        "name": "CALIFORNIA INSTITUTE OF THE ARTS",
        "location": "VALENCIA, CA"
    },
    {
        "name": "UPPER IOWA UNIVERSITY",
        "location": "FAYETTE, IA"
    },
    {
        "name": "UNIVERSITY OF ILLINOIS SPRINGFIELD",
        "location": "SPRINGFIELD, IL"
    },
    {
        "name": "SAINT ANTHONY COLLEGE OF NURSING",
        "location": "ROCKFORD, IL"
    },
    {
        "name": "MINNESOTA SCHOOL OF COSMETOLOGY-WOODBURY CAMPUS",
        "location": "WOODBURY, MN"
    },
    {
        "name": "HOUSE OF HEAVILIN BEAUTY COLLEGE-KANSAS CITY",
        "location": "KANSAS CITY, MO"
    },
    {
        "name": "MERCY COLLEGE",
        "location": "DOBBS FERRY, NY"
    },
    {
        "name": "NUETA HIDATSA SAHNISH COLLEGE",
        "location": "NEW TOWN, ND"
    },
    {
        "name": "BROOKLINE COLLEGE-TUCSON",
        "location": "TUCSON, AZ"
    },
    {
        "name": "TEXAS COUNTY TECHNICAL COLLEGE",
        "location": "HOUSTON, MO"
    },
    {
        "name": "INSTITUTE OF TAOIST EDUCATION AND ACUPUNCTURE",
        "location": "LOUISVILLE, CO"
    },
    {
        "name": "UPSTATE MEDICAL UNIVERSITY",
        "location": "SYRACUSE, NY"
    },
    {
        "name": "SHAWSHEEN VALLEY SCHOOL OF PRACTICAL NURSING",
        "location": "BILLERICA, MA"
    },
    {
        "name": "ESCUELA TECNICA DE ELECTRICIDAD",
        "location": "PONCE, PR"
    },
    {
        "name": "FLORIDA COASTAL SCHOOL OF LAW",
        "location": "JACKSONVILLE, FL"
    },
    {
        "name": "PACIFIC ISLANDS UNIVERSITY",
        "location": "MANGILAO, GU"
    },
    {
        "name": "COSMETOLOGY CONCEPTS NILES",
        "location": "NILES, IL"
    },
    {
        "name": "STEVEN PAPAGEORGE HAIR ACADEMY",
        "location": "CHICAGO, IL"
    },
    {
        "name": "CARRINGTON COLLEGE-ONTARIO",
        "location": "ONTARIO, CA"
    },
    {
        "name": "HARRIS SCHOOL OF BUSINESS-VOORHEES CAMPUS",
        "location": "VOORHEES, NJ"
    },
    {
        "name": "NEW MEXICO MILITARY INSTITUTE",
        "location": "ROSWELL, NM"
    },
    {
        "name": "ONONDAGA COMMUNITY COLLEGE",
        "location": "SYRACUSE, NY"
    },
    {
        "name": "SEBRING CAREER SCHOOLS-HUNTSVILLE",
        "location": "HUNTSVILLE, TX"
    },
    {
        "name": "COLLEGE OF BUSINESS AND TECHNOLOGY-CUTLER BAY",
        "location": "CUTLER BAY, FL"
    },
    {
        "name": "EASTWICK COLLEGE-NUTLEY",
        "location": "NUTLEY, NJ"
    },
    {
        "name": "HONDROS COLLEGE OF NURSING",
        "location": "WESTERVILLE, OH"
    },
    {
        "name": "INSTITUTO TECNOLOGICO DE PUERTO RICO-RECINTO DE GUAYAMA",
        "location": "GUAYAMA, PR"
    },
    {
        "name": "TRAXLERS SCHOOL OF HAIR",
        "location": "JACKSON, MS"
    },
    {
        "name": "RED RIVER TECHNOLOGY CENTER",
        "location": "DUNCAN, OK"
    },
    {
        "name": "ARKANSAS STATE UNIVERSITY THREE RIVERS",
        "location": "MALVERN, AR"
    },
    {
        "name": "MIDWESTERN UNIVERSITY-GLENDALE",
        "location": "GLENDALE, AZ"
    },
    {
        "name": "CLARK UNIVERSITY",
        "location": "WORCESTER, MA"
    },
    {
        "name": "MISSOURI BAPTIST UNIVERSITY",
        "location": "SAINT LOUIS, MO"
    },
    {
        "name": "ROCKLAND COMMUNITY COLLEGE",
        "location": "SUFFERN, NY"
    },
    {
        "name": "EMPIRE BEAUTY SCHOOL-SPRINGFIELD",
        "location": "SPRINGFIELD, PA"
    },
    {
        "name": "MILAN INSTITUTE OF COSMETOLOGY-LA QUINTA",
        "location": "LA QUINTA, CA"
    },
    {
        "name": "WADE GORDON HAIRDRESSING ACADEMY",
        "location": "AMARILLO, TX"
    },
    {
        "name": "AMERICAN INTERCONTINENTAL UNIVERSITY-HOUSTON",
        "location": "HOUSTON, TX"
    },
    {
        "name": "COLUMBUS COLLEGE OF ART AND DESIGN",
        "location": "COLUMBUS, OH"
    },
    {
        "name": "GREENE COUNTY CAREER AND TECHNOLOGY CENTER",
        "location": "WAYNESBURG, PA"
    },
    {
        "name": "UNIVERSITY OF ARKANSAS AT LITTLE ROCK",
        "location": "LITTLE ROCK, AR"
    },
    {
        "name": "THOMAS AQUINAS COLLEGE",
        "location": "SANTA PAULA, CA"
    },
    {
        "name": "UNIVERSITY OF DUBUQUE",
        "location": "DUBUQUE, IA"
    },
    {
        "name": "SAN DIEGO MIRAMAR COLLEGE",
        "location": "SAN DIEGO, CA"
    },
    {
        "name": "COSSATOT COMMUNITY COLLEGE OF THE UNIVERSITY OF ARKANSAS",
        "location": "DE QUEEN, AR"
    },
    {
        "name": "LAMAR COMMUNITY COLLEGE",
        "location": "LAMAR, CO"
    },
    {
        "name": "UNIVERSITY OF TEXAS SOUTHWESTERN MEDICAL CENTER",
        "location": "DALLAS, TX"
    },
    {
        "name": "MCHENRY COUNTY COLLEGE",
        "location": "CRYSTAL LAKE, IL"
    },
    {
        "name": "SOUTHWESTERN ASSEMBLIES OF GOD UNIVERSITY",
        "location": "WAXAHACHIE, TX"
    },
    {
        "name": "THE UNIVERSITY OF TEXAS AT EL PASO",
        "location": "EL PASO, TX"
    },
    {
        "name": "ICPR JUNIOR COLLEGE-ARECIBO",
        "location": "ARECIBO, PR"
    },
    {
        "name": "COLEGIO MAYOR DE TECNOLOGIA INC",
        "location": "ARROYO, PR"
    },
    {
        "name": "COLUMBIA INSTITUTE",
        "location": "SILVER SPRING, MD"
    },
    {
        "name": "MANHATTAN SCHOOL OF COMPUTER TECHNOLOGY",
        "location": "BROOKLYN, NY"
    },
    {
        "name": "SPA TECH INSTITUTE-IPSWICH",
        "location": "IPSWICH, MA"
    },
    {
        "name": "CONSERVATORY OF RECORDING ARTS AND SCIENCES",
        "location": "TEMPE, AZ"
    },
    {
        "name": "PREMIERE CAREER COLLEGE",
        "location": "IRWINDALE, CA"
    },
    {
        "name": "LANCASTER BEAUTY SCHOOL",
        "location": "LANCASTER, CA"
    },
    {
        "name": "FLORIDA INSTITUTE OF ULTRASOUND INC",
        "location": "PENSACOLA, FL"
    },
    {
        "name": "THE COLLEGE OF SAINT SCHOLASTICA",
        "location": "DULUTH, MN"
    },
    {
        "name": "COTTEY COLLEGE",
        "location": "NEVADA, MO"
    },
    {
        "name": "CENTRAL CALIFORNIA SCHOOL OF CONTINUING EDUCATION",
        "location": "SAN LUIS OBISPO, CA"
    },
    {
        "name": "POLK STATE COLLEGE",
        "location": "WINTER HAVEN, FL"
    },
    {
        "name": "HEBREW THEOLOGICAL COLLEGE",
        "location": "SKOKIE, IL"
    },
    {
        "name": "CONTINENTAL SCHOOL OF BEAUTY CULTURE-OLEAN",
        "location": "OLEAN, NY"
    },
    {
        "name": "ANDERSON UNIVERSITY",
        "location": "ANDERSON, SC"
    },
    {
        "name": "NORTH CAROLINA CENTRAL UNIVERSITY",
        "location": "DURHAM, NC"
    },
    {
        "name": "GALEN COLLEGE OF NURSING-ARH",
        "location": "HAZARD, KY"
    },
    {
        "name": "BERKOWITS SCHOOL OF ELECTROLYSIS",
        "location": "FOREST HILLS, NY"
    },
    {
        "name": "PUERTO RICO SCHOOL OF NURSE ANESTHETISTS",
        "location": "HATO REY, PR"
    },
    {
        "name": "NUC UNIVERSITY - IBC INSTITUTE - ARECIBO",
        "location": "ARECIBO, PR"
    },
    {
        "name": "STELLAR CAREER COLLEGE - CHICAGO, IL",
        "location": "CHICAGO, IL"
    },
    {
        "name": "D&S SCHOOL OF COSMETOLOGY",
        "location": "WATERFORD, MI"
    },
    {
        "name": "NEW YORK SEMINARY",
        "location": "BROOKLYN, NY"
    },
    {
        "name": "SOUTHERN CALIFORNIA HEALTH INSTITUTE (SOCHI) - NORTH HOLLYWOOD",
        "location": "NORTH HOLLYWOOD, CA"
    },
    {
        "name": "FORTIS INSTITUTE-COOKEVILLE",
        "location": "COOKEVILLE, TN"
    },
    {
        "name": "TEXAS HEALTHTECH INSTITUTE",
        "location": "BEAUMONT, TX"
    },
    {
        "name": "WEST VIRGINIA JUNIOR COLLEGE-UNITED CAREER INSTITUTE",
        "location": "IRWIN, PA"
    },
    {
        "name": "FORTIS COLLEGE",
        "location": "MOBILE, AL"
    },
    {
        "name": "BISHOP STATE COMMUNITY COLLEGE",
        "location": "MOBILE, AL"
    },
    {
        "name": "AVEDA INSTITUTE-MADISON",
        "location": "MADISON, WI"
    },
    {
        "name": "INFINITY COLLEGE",
        "location": "LAFAYETTE, LA"
    },
    {
        "name": "ATLANTIS UNIVERSITY",
        "location": "MIAMI, FL"
    },
    {
        "name": "EASTERN FLORIDA STATE COLLEGE",
        "location": "COCOA, FL"
    },
    {
        "name": "COLLEGE OF LAKE COUNTY",
        "location": "GRAYSLAKE, IL"
    },
    {
        "name": "SPOON RIVER COLLEGE",
        "location": "CANTON, IL"
    },
    {
        "name": "UNIVERSIDAD CENTRAL DE BAYAMON",
        "location": "BAYAMÓN, PR"
    },
    {
        "name": "QUINCY COLLEGE",
        "location": "QUINCY, MA"
    },
    {
        "name": "NATIONAL CAREER INSTITUTE",
        "location": "EAST ORANGE, NJ"
    },
    {
        "name": "BLUE RIDGE COMMUNITY COLLEGE",
        "location": "FLAT ROCK, NC"
    },
    {
        "name": "UNIVERSITY OF ARIZONA",
        "location": "TUCSON, AZ"
    },
    {
        "name": "THE SPA SCHOOL",
        "location": "COLUMBUS, OH"
    },
    {
        "name": "TALMUDIC COLLEGE OF FLORIDA",
        "location": "MIAMI BEACH, FL"
    },
    {
        "name": "MILWAUKEE SCHOOL OF ENGINEERING",
        "location": "MILWAUKEE, WI"
    },
    {
        "name": "BUNKER HILL COMMUNITY COLLEGE",
        "location": "BOSTON, MA"
    },
    {
        "name": "VOGUE COLLEGE OF COSMETOLOGY-MCALLEN",
        "location": "MCALLEN, TX"
    },
    {
        "name": "LAMAR INSTITUTE OF TECHNOLOGY",
        "location": "BEAUMONT, TX"
    },
    {
        "name": "MANHATTAN INSTITUTE",
        "location": "NEW YORK, NY"
    },
    {
        "name": "NORTH GREENVILLE UNIVERSITY",
        "location": "TIGERVILLE, SC"
    },
    {
        "name": "EMPIRE BEAUTY SCHOOL-RICHMOND",
        "location": "RICHMOND, VA"
    },
    {
        "name": "NORTHERN TIER CAREER CENTER",
        "location": "TOWANDA, PA"
    },
    {
        "name": "UNIVERSITY OF CALIFORNIA-MERCED",
        "location": "MERCED, CA"
    },
    {
        "name": "SANTA FE COLLEGE",
        "location": "GAINESVILLE, FL"
    },
    {
        "name": "COLLEGE OF SOUTHERN IDAHO",
        "location": "TWIN FALLS, ID"
    },
    {
        "name": "KLAMATH COMMUNITY COLLEGE",
        "location": "KLAMATH FALLS, OR"
    },
    {
        "name": "ELAINE STERLING INSTITUTE",
        "location": "ATLANTA, GA"
    },
    {
        "name": "EMPIRE BEAUTY SCHOOL-GLEN BURNIE",
        "location": "GLEN BURNIE, MD"
    },
    {
        "name": "ROSE STATE COLLEGE",
        "location": "MIDWEST CITY, OK"
    },
    {
        "name": "ROSS MEDICAL EDUCATION CENTER-ERLANGER",
        "location": "ERLANGER, KY"
    },
    {
        "name": "SISSETON WAHPETON COLLEGE",
        "location": "SISSETON, SD"
    },
    {
        "name": "NORTHEAST TEXAS COMMUNITY COLLEGE",
        "location": "MOUNT PLEASANT, TX"
    },
    {
        "name": "MEDQUEST COLLEGE",
        "location": "LOUISVILLE, KY"
    },
    {
        "name": "WALTERS STATE COMMUNITY COLLEGE",
        "location": "MORRISTOWN, TN"
    },
    {
        "name": "CISCO COLLEGE",
        "location": "CISCO, TX"
    },
    {
        "name": "ALABAMA COLLEGE OF OSTEOPATHIC MEDICINE",
        "location": "DOTHAN, AL"
    },
    {
        "name": "HILL COLLEGE",
        "location": "HILLSBORO, TX"
    },
    {
        "name": "MONONGALIA COUNTY TECHNICAL EDUCATION CENTER",
        "location": "MORGANTOWN, WV"
    },
    {
        "name": "WEST VALLEY COLLEGE",
        "location": "SARATOGA, CA"
    },
    {
        "name": "OXNARD COLLEGE",
        "location": "OXNARD, CA"
    },
    {
        "name": "CAREERS UNLIMITED",
        "location": "OREM, UT"
    },
    {
        "name": "HEALTHCARE CAREER COLLEGE",
        "location": "PARAMOUNT, CA"
    },
    {
        "name": "SOUTH GEORGIA STATE COLLEGE",
        "location": "DOUGLAS, GA"
    },
    {
        "name": "PAUL MITCHELL THE SCHOOL-BIRMINGHAM",
        "location": "HOOVER, AL"
    },
    {
        "name": "UNIVERSITY OF WESTERN STATES",
        "location": "PORTLAND, OR"
    },
    {
        "name": "SHERIDAN TECHNICAL COLLEGE",
        "location": "HOLLYWOOD, FL"
    },
    {
        "name": "EMPIRE BEAUTY SCHOOL-MAINE",
        "location": "PORTLAND, ME"
    },
    {
        "name": "BARD COLLEGE AT SIMON'S ROCK",
        "location": "GREAT BARRINGTON, MA"
    },
    {
        "name": "NEBRASKA METHODIST COLLEGE OF NURSING & ALLIED HEALTH",
        "location": "OMAHA, NE"
    },
    {
        "name": "NEBRASKA CHRISTIAN COLLEGE OF HOPE INTERNATIONAL UNIVERSITY",
        "location": "PAPILLION, NE"
    },
    {
        "name": "CAREER COLLEGE OF NORTHERN NEVADA",
        "location": "SPARKS, NV"
    },
    {
        "name": "HARRIS SCHOOL OF BUSINESS-CHERRY HILL CAMPUS",
        "location": "CHERRY HILL, NJ"
    },
    {
        "name": "EMPIRE BEAUTY SCHOOL-QUEENS",
        "location": "ASTORIA, NY"
    },
    {
        "name": "EDP UNIVERSITY OF PUERTO RICO INC-SAN SEBASTIAN",
        "location": "SAN SEBASTIAN, PR"
    },
    {
        "name": "INTER AMERICAN UNIVERSITY OF PUERTO RICO-AGUADILLA",
        "location": "AGUADILLA, PR"
    },
    {
        "name": "FLORIDA COLLEGE OF INTEGRATIVE MEDICINE",
        "location": "ORLANDO, FL"
    },
    {
        "name": "ROCKY VISTA UNIVERSITY",
        "location": "PARKER, CO"
    },
    {
        "name": "GEMINI SCHOOL OF VISUAL ARTS & COMMUNICATION",
        "location": "CEDAR PARK, TX"
    },
    {
        "name": "PAUL MITCHELL THE SCHOOL-WOODBRIDGE",
        "location": "WOODBRIDGE, VA"
    },
    {
        "name": "SUMNER COLLEGE",
        "location": "PORTLAND, OR"
    },
    {
        "name": "SUFFOLK COUNTY COMMUNITY COLLEGE",
        "location": "SELDEN, NY"
    },
    {
        "name": "ATLANTA INSTITUTE OF MUSIC AND MEDIA",
        "location": "DULUTH, GA"
    },
    {
        "name": "CARLOW UNIVERSITY",
        "location": "PITTSBURGH, PA"
    },
    {
        "name": "BUCKS COUNTY SCHOOL OF BEAUTY CULTURE INC",
        "location": "FEASTERVILLE, PA"
    },
    {
        "name": "TRI COUNTY REGIONAL VOCATIONAL TECHNICAL HIGH SCHOOL",
        "location": "FRANKLIN, MA"
    },
    {
        "name": "UNIVERSITY OF HAWAII AT MANOA",
        "location": "HONOLULU, HI"
    },
    {
        "name": "UNIVERSITY OF MICHIGAN-FLINT",
        "location": "FLINT, MI"
    },
    {
        "name": "SCOTT COLLEGE OF COSMETOLOGY",
        "location": "WHEELING, WV"
    },
    {
        "name": "COPIAH-LINCOLN COMMUNITY COLLEGE",
        "location": "WESSON, MS"
    },
    {
        "name": "PONTIFICAL JOHN PAUL II INSTITUTE FOR STUDIES ON MARRIAGE AND FAMILY",
        "location": "WASHINGTON, DC"
    },
    {
        "name": "ISLAND DRAFTING AND TECHNICAL INSTITUTE",
        "location": "AMITYVILLE, NY"
    },
    {
        "name": "OTSEGO AREA BOCES-PRACTICAL NURSING PROGRAM",
        "location": "ONEONTA, NY"
    },
    {
        "name": "YESHIVA SHAAR HATORAH",
        "location": "KEW GARDENS, NY"
    },
    {
        "name": "GERBERS AKRON BEAUTY SCHOOL",
        "location": "AKRON, OH"
    },
    {
        "name": "TINT SCHOOL OF MAKEUP AND COSMETOLOGY-DALLAS",
        "location": "GRAND PRAIRIE, TX"
    },
    {
        "name": "ARIZONA BOARD OF REGENTS",
        "location": "PHOENIX, AZ"
    },
    {
        "name": "ACADEMY OF HAIR DESIGN-JASPER",
        "location": "JASPER, TX"
    },
    {
        "name": "PHOENIX INSTITUTE OF HERBAL MEDICINE & ACUPUNCTURE",
        "location": "PHOENIX, AZ"
    },
    {
        "name": "PRESCOTT COLLEGE",
        "location": "PRESCOTT, AZ"
    },
    {
        "name": "LA JAMES INTERNATIONAL COLLEGE-IOWA CITY",
        "location": "IOWA CITY, IA"
    },
    {
        "name": "WISCONSIN LUTHERAN COLLEGE",
        "location": "MILWAUKEE, WI"
    },
    {
        "name": "MR JOHN'S SCHOOL OF COSMETOLOGY & NAILS-JACKSONVILLE",
        "location": "JACKSONVILLE, IL"
    },
    {
        "name": "LEGRAND INSTITUTE OF COSMETOLOGY INC",
        "location": "CAMDEN, SC"
    },
    {
        "name": "OBERLIN COLLEGE",
        "location": "OBERLIN, OH"
    },
    {
        "name": "PORTLAND COMMUNITY COLLEGE",
        "location": "PORTLAND, OR"
    },
    {
        "name": "WELDER TRAINING AND TESTING INSTITUTE",
        "location": "ALLENTOWN, PA"
    },
    {
        "name": "OLIVET NAZARENE UNIVERSITY",
        "location": "BOURBONNAIS, IL"
    },
    {
        "name": "MARIAN UNIVERSITY",
        "location": "INDIANAPOLIS, IN"
    },
    {
        "name": "LAS POSITAS COLLEGE",
        "location": "LIVERMORE, CA"
    },
    {
        "name": "EASTERN CENTER FOR ARTS AND TECHNOLOGY",
        "location": "WILLOW GROVE, PA"
    },
    {
        "name": "MORGAN COMMUNITY COLLEGE",
        "location": "FORT MORGAN, CO"
    },
    {
        "name": "MENDOCINO COLLEGE",
        "location": "UKIAH, CA"
    },
    {
        "name": "MAYFIELD COLLEGE",
        "location": "CATHEDRAL CITY, CA"
    },
    {
        "name": "GRAMBLING STATE UNIVERSITY",
        "location": "GRAMBLING, LA"
    },
    {
        "name": "HAIR ACADEMY",
        "location": "NEW CARROLLTON, MD"
    },
    {
        "name": "LAKE CAREER AND TECHNICAL CENTER",
        "location": "CAMDENTON, MO"
    },
    {
        "name": "NATIONAL HOLISTIC INSTITUTE",
        "location": "EMERYVILLE, CA"
    },
    {
        "name": "HUMBOLDT STATE UNIVERSITY",
        "location": "ARCATA, CA"
    },
    {
        "name": "DOMINICAN UNIVERSITY",
        "location": "RIVER FOREST, IL"
    },
    {
        "name": "TONI & GUY HAIRDRESSING ACADEMY-WORCESTER",
        "location": "WORCESTER, MA"
    },
    {
        "name": "LAURUS COLLEGE",
        "location": "SAN LUIS OBISPO, CA"
    },
    {
        "name": "PAUL MITCHELL THE SCHOOL-HUNTSVILLE",
        "location": "MADISON, AL"
    },
    {
        "name": "TOYOTA TECHNOLOGICAL INSTITUTE AT CHICAGO",
        "location": "CHICAGO, IL"
    },
    {
        "name": "EASTERN COLLEGE OF HEALTH VOCATIONS-LITTLE ROCK",
        "location": "LITTLE ROCK, AR"
    },
    {
        "name": "ALLEN COLLEGE",
        "location": "WATERLOO, IA"
    },
    {
        "name": "MISSISSIPPI DELTA COMMUNITY COLLEGE",
        "location": "MOORHEAD, MS"
    },
    {
        "name": "THE COLLEGE OF THE FLORIDA KEYS",
        "location": "KEY WEST, FL"
    },
    {
        "name": "THOMAS EDISON STATE UNIVERSITY",
        "location": "TRENTON, NJ"
    },
    {
        "name": "RINGLING COLLEGE OF ART AND DESIGN",
        "location": "SARASOTA, FL"
    },
    {
        "name": "ATLANTA SCHOOL OF MASSAGE",
        "location": "ATLANTA, GA"
    },
    {
        "name": "RAMAPO COLLEGE OF NEW JERSEY",
        "location": "MAHWAH, NJ"
    },
    {
        "name": "LANSDALE SCHOOL OF COSMETOLOGY INC",
        "location": "LANSDALE, PA"
    },
    {
        "name": "HARTWICK COLLEGE",
        "location": "ONEONTA, NY"
    },
    {
        "name": "ST. THOMAS AQUINAS COLLEGE",
        "location": "SPARKILL, NY"
    },
    {
        "name": "CINCINNATI SCHOOL OF BARBERING & HAIR DESIGN",
        "location": "CINCINNATI, OH"
    },
    {
        "name": "SALON SUCCESS ACADEMY-WEST COVINA",
        "location": "WEST COVINA, CA"
    },
    {
        "name": "LATIN AMERICAN BIBLE INSTITUTE",
        "location": "LA PUENTE, CA"
    },
    {
        "name": "UNITECH TRAINING ACADEMY-LAKE CHARLES",
        "location": "LAKE CHARLES, LA"
    },
    {
        "name": "UNIVERSITY OF TEXAS HEALTH SCIENCE CENTER AT TYLER",
        "location": "TYLER, TX"
    },
    {
        "name": "RIVER VALLEY SCHOOL OF MASSAGE",
        "location": "RUSSELLVILLE, AR"
    },
    {
        "name": "PIMA MEDICAL INSTITUTE-PHOENIX",
        "location": "PHOENIX, AZ"
    },
    {
        "name": "SAN IGNACIO UNIVERSITY",
        "location": "DORAL, FL"
    },
    {
        "name": "EA LA MAR'S COSMETOLOGY & BARBER COLLEGE",
        "location": "KANSAS CITY, MO"
    },
    {
        "name": "NORTHLAND COMMUNITY AND TECHNICAL COLLEGE",
        "location": "THIEF RIVER FALLS, MN"
    },
    {
        "name": "THE COLLEGE OF HEALTH CARE PROFESSIONS-MCALLEN CAMPUS",
        "location": "MCALLEN, TX"
    },
    {
        "name": "CHAMBERLAIN UNIVERSITY-CALIFORNIA",
        "location": "RANCHO CORDOVA, CA"
    },
    {
        "name": "DENISON UNIVERSITY",
        "location": "GRANVILLE, OH"
    },
    {
        "name": "OKLAHOMA STATE UNIVERSITY CENTER FOR HEALTH SCIENCES",
        "location": "TULSA, OK"
    },
    {
        "name": "ALAMANCE COMMUNITY COLLEGE",
        "location": "GRAHAM, NC"
    },
    {
        "name": "BUTLER COUNTY COMMUNITY COLLEGE",
        "location": "BUTLER, PA"
    },
    {
        "name": "SOUTH UNIVERSITY-RICHMOND",
        "location": "GLEN ALLEN, VA"
    },
    {
        "name": "TENNESSEE COLLEGE OF APPLIED TECHNOLOGY-KNOXVILLE",
        "location": "KNOXVILLE, TN"
    },
    {
        "name": "BETHESDA UNIVERSITY",
        "location": "ANAHEIM, CA"
    },
    {
        "name": "LINCOLN TECHNICAL INSTITUTE-SOMERVILLE",
        "location": "SOMERVILLE, MA"
    },
    {
        "name": "COLLEGE OF MASSAGE THERAPY",
        "location": "BLACKFOOT, ID"
    },
    {
        "name": "SETON HILL UNIVERSITY",
        "location": "GREENSBURG, PA"
    },
    {
        "name": "CLINTON COLLEGE",
        "location": "ROCK HILL, SC"
    },
    {
        "name": "BELLEVUE COLLEGE",
        "location": "BELLEVUE, WA"
    },
    {
        "name": "BEST CARE COLLEGE",
        "location": "EAST ORANGE, NJ"
    },
    {
        "name": "DEWEY UNIVERSITY-MANATI",
        "location": "MANATI, PR"
    },
    {
        "name": "SOUTHERN UNION STATE COMMUNITY COLLEGE",
        "location": "WADLEY, AL"
    },
    {
        "name": "GARDEN CITY COMMUNITY COLLEGE",
        "location": "GARDEN CITY, KS"
    },
    {
        "name": "FINGER LAKES HEALTH COLLEGE OF NURSING & HEALTH SCIENCES",
        "location": "GENEVA, NY"
    },
    {
        "name": "ZANE STATE COLLEGE",
        "location": "ZANESVILLE, OH"
    },
    {
        "name": "WASHINGTON COUNTY CAREER CENTER-ADULT TECHNICAL TRAINING",
        "location": "MARIETTA, OH"
    },
    {
        "name": "PURDUE UNIVERSITY FORT WAYNE",
        "location": "FORT WAYNE, IN"
    },
    {
        "name": "HINTON BARBER AND BEAUTY COLLEGE",
        "location": "VALLEJO, CA"
    },
    {
        "name": "SHILOH UNIVERSITY",
        "location": "KALONA, IA"
    },
    {
        "name": "SANFORD MEDICAL CENTER",
        "location": "SIOUX FALLS, SD"
    },
    {
        "name": "PIONEER TECHNOLOGY CENTER",
        "location": "PONCA CITY, OK"
    },
    {
        "name": "TENNESSEE COLLEGE OF APPLIED TECHNOLOGY-DICKSON",
        "location": "DICKSON, TN"
    },
    {
        "name": "STANDARD HEALTHCARE SERVICES-COLLEGE OF NURSING",
        "location": "FALLS CHURCH, VA"
    },
    {
        "name": "NATIONAL AMERICAN UNIVERSITY-HAROLD D. BUCKINGHAM GRADUATE SCHOOL",
        "location": "RAPID CITY, SD"
    },
    {
        "name": "NORTHEASTERN UNIVERSITY LIFELONG LEARNING NETWORK",
        "location": "BOSTON, MA"
    },
    {
        "name": "UNIVERSITY OF NEW MEXICO-VALENCIA COUNTY CAMPUS",
        "location": "LOS LUNAS, NM"
    },
    {
        "name": "THE COLLEGE OF IDAHO",
        "location": "CALDWELL, ID"
    },
    {
        "name": "PLATT COLLEGE-MILLER-MOTTE TECHNICAL-MACON",
        "location": "MACON, GA"
    },
    {
        "name": "GREENE COUNTY VOCATIONAL SCHOOL DISTRICT",
        "location": "XENIA, OH"
    },
    {
        "name": "UNIVERSITY OF PHOENIX-ILLINOIS",
        "location": "CHICAGO, IL"
    },
    {
        "name": "SAUK VALLEY COMMUNITY COLLEGE",
        "location": "DIXON, IL"
    },
    {
        "name": "WEST VIRGINIA JUNIOR COLLEGE-CHARLESTON",
        "location": "CROSS LANES, WV"
    },
    {
        "name": "WENTWORTH INSTITUTE OF TECHNOLOGY",
        "location": "BOSTON, MA"
    },
    {
        "name": "COSMETOLOGY CAREERS UNLIMITED COLLEGE OF HAIR SKIN AND NAILS",
        "location": "DULUTH, MN"
    },
    {
        "name": "SAN JUAN COLLEGE",
        "location": "FARMINGTON, NM"
    },
    {
        "name": "LINCOLN TECHNICAL INSTITUTE-SOUTH PLAINFIELD",
        "location": "SOUTH PLAINFIELD, NJ"
    },
    {
        "name": "CARIBBEAN UNIVERSITY-VEGA BAJA",
        "location": "VEGA BAJA, PR"
    },
    {
        "name": "COLLEGE OF THE MARSHALL ISLANDS",
        "location": "MAJURO, MH"
    },
    {
        "name": "CHICAGO SCHOOL OF PROFESSIONAL PSYCHOLOGY - COLLEGE OF NURSING",
        "location": "RICHARDSON, TX"
    },
    {
        "name": "LEHIGH CARBON COMMUNITY COLLEGE",
        "location": "SCHNECKSVILLE, PA"
    },
    {
        "name": "BELLE ACADEMY OF COSMETOLOGY LLC",
        "location": "WATERBURY, CT"
    },
    {
        "name": "DEVRY UNIVERSITY-GEORGIA",
        "location": "DECATUR, GA"
    },
    {
        "name": "JOFFREY BALLET SCHOOL",
        "location": "NEW YORK, NY"
    },
    {
        "name": "AQUINAS COLLEGE",
        "location": "GRAND RAPIDS, MI"
    },
    {
        "name": "MORRISON INSTITUTE OF TECHNOLOGY",
        "location": "MORRISON, IL"
    },
    {
        "name": "CVPH MEDICAL CENTER SCHOOL OF RADIOLOGIC TECHNOLOGY",
        "location": "PLATTSBURGH, NY"
    },
    {
        "name": "ARNOLDS BEAUTY SCHOOL",
        "location": "MILAN, TN"
    },
    {
        "name": "ACADEMY FOR JEWISH RELIGION-CALIFORNIA",
        "location": "LOS ANGELES, CA"
    },
    {
        "name": "HOUSTON TRAINING SCHOOL",
        "location": "HOUSTON, TX"
    },
    {
        "name": "EMPIRE BEAUTY SCHOOL-LACONIA",
        "location": "LACONIA, NH"
    },
    {
        "name": "CLARKSON UNIVERSITY",
        "location": "POTSDAM, NY"
    },
    {
        "name": "MARION S WHELAN SCHOOL OF NURSING OF GENEVA GENERAL HOSPITAL",
        "location": "GENEVA, NY"
    },
    {
        "name": "KENYON COLLEGE",
        "location": "GAMBIER, OH"
    },
    {
        "name": "LOUISIANA STATE UNIVERSITY-ALEXANDRIA",
        "location": "ALEXANDRIA, LA"
    },
    {
        "name": "TONI & GUY HAIRDRESSING ACADEMY-CRANSTON",
        "location": "CRANSTON, RI"
    },
    {
        "name": "PLATT COLLEGE-MILLER-MOTTE TECHNICAL-COLUMBUS",
        "location": "COLUMBUS, GA"
    },
    {
        "name": "UNITEK COLLEGE",
        "location": "FREMONT, CA"
    },
    {
        "name": "HARRIS SCHOOL OF BUSINESS-UPPER DARBY CAMPUS",
        "location": "UPPER DARBY, PA"
    },
    {
        "name": "MOHAVE COMMUNITY COLLEGE",
        "location": "KINGMAN, AZ"
    },
    {
        "name": "EMPIRE BEAUTY SCHOOL-MIDLOTHIAN",
        "location": "MIDLOTHIAN, VA"
    },
    {
        "name": "PRECISION MANUFACTURING INSTITUTE",
        "location": "MEADVILLE, PA"
    },
    {
        "name": "OHIO STATE UNIVERSITY AGRICULTURAL TECHNICAL INSTITUTE",
        "location": "WOOSTER, OH"
    },
    {
        "name": "OKLAHOMA STATE UNIVERSITY INSTITUTE OF TECHNOLOGY",
        "location": "OKMULGEE, OK"
    },
    {
        "name": "COMMUNITY COLLEGE OF AURORA",
        "location": "AURORA, CO"
    },
    {
        "name": "LORAIN COUNTY COMMUNITY COLLEGE",
        "location": "ELYRIA, OH"
    },
    {
        "name": "OLYMPIC COLLEGE",
        "location": "BREMERTON, WA"
    },
    {
        "name": "FRONT RANGE COMMUNITY COLLEGE",
        "location": "WESTMINSTER, CO"
    },
    {
        "name": "PIMA MEDICAL INSTITUTE-EAST VALLEY",
        "location": "MESA, AZ"
    },
    {
        "name": "NORWALK COMMUNITY COLLEGE",
        "location": "NORWALK, CT"
    },
    {
        "name": "SEGUIN BEAUTY SCHOOL-SEGUIN",
        "location": "SEGUIN, TX"
    },
    {
        "name": "ESTRELLA MOUNTAIN COMMUNITY COLLEGE",
        "location": "AVONDALE, AZ"
    },
    {
        "name": "CYPRESS COLLEGE",
        "location": "CYPRESS, CA"
    },
    {
        "name": "WESTERN IOWA TECH COMMUNITY COLLEGE",
        "location": "SIOUX CITY, IA"
    },
    {
        "name": "RICHLAND COMMUNITY COLLEGE",
        "location": "DECATUR, IL"
    },
    {
        "name": "LANE COLLEGE",
        "location": "JACKSON, TN"
    },
    {
        "name": "WISCONSIN SCHOOL OF PROFESSIONAL PSYCHOLOGY",
        "location": "MILWAUKEE, WI"
    },
    {
        "name": "LOS ANGELES CITY COLLEGE",
        "location": "LOS ANGELES, CA"
    },
    {
        "name": "ALBRIGHT COLLEGE",
        "location": "READING, PA"
    },
    {
        "name": "CAREER TECHNICAL INSTITUTE",
        "location": "WASHINGTON, DC"
    },
    {
        "name": "CHAMBERSBURG BEAUTY SCHOOL",
        "location": "CHAMBERSBURG, PA"
    },
    {
        "name": "WEILL MEDICAL COLLEGE OF CORNELL UNIVERSITY",
        "location": "NEW YORK, NY"
    },
    {
        "name": "INSTITUTE OF CLINICAL ACUPUNCTURE & ORIENTAL MED",
        "location": "HONOLULU, HI"
    },
    {
        "name": "SOUTHERN CALIFORNIA UNIVERSITY OF HEALTH SCIENCES",
        "location": "WHITTIER, CA"
    },
    {
        "name": "ESTES INSTITUTE OF COSMETOLOGY ARTS AND SCIENCE",
        "location": "VISALIA, CA"
    },
    {
        "name": "UNIVERSITY OF PIKEVILLE",
        "location": "PIKEVILLE, KY"
    },
    {
        "name": "POPLAR BLUFF TECHNICAL CAREER CENTER",
        "location": "POPLAR BLUFF, MO"
    },
    {
        "name": "HIGHLANDS COLLEGE OF MONTANA TECH",
        "location": "BUTTE, MT"
    },
    {
        "name": "CITY COLLEGE-FORT LAUDERDALE",
        "location": "FORT LAUDERDALE, FL"
    },
    {
        "name": "INTERNATIONAL SCHOOL OF SKIN NAILCARE & MASSAGE THERAPY",
        "location": "ATLANTA, GA"
    },
    {
        "name": "THE SALON PROFESSIONAL ACADEMY-CEDAR FALLS",
        "location": "CEDAR FALLS, IA"
    },
    {
        "name": "PAUL MITCHELL THE SCHOOL-PORTSMOUTH",
        "location": "PORTSMOUTH, NH"
    },
    {
        "name": "PARISIAN BEAUTY SCHOOL",
        "location": "HACKENSACK, NJ"
    },
    {
        "name": "AUTOMOTIVE TRAINING CENTER-EXTON",
        "location": "EXTON, PA"
    },
    {
        "name": "ALL-STATE CAREER SCHOOL",
        "location": "ESSINGTON, PA"
    },
    {
        "name": "BRYAN COLLEGE-DAYTON",
        "location": "DAYTON, TN"
    },
    {
        "name": "BIG BEND COMMUNITY COLLEGE",
        "location": "MOSES LAKE, WA"
    },
    {
        "name": "WINSTON-SALEM STATE UNIVERSITY",
        "location": "WINSTON-SALEM, NC"
    },
    {
        "name": "NIAGARA COUNTY COMMUNITY COLLEGE",
        "location": "SANBORN, NY"
    },
    {
        "name": "UNIVERSITY OF SAINT KATHERINE",
        "location": "SAN MARCOS, CA"
    },
    {
        "name": "WILLIAMSON COLLEGE OF THE TRADES",
        "location": "MEDIA, PA"
    },
    {
        "name": "DANIEL MORGAN GRADUATE SCHOOL OF NATIONAL SECURITY",
        "location": "WASHINGTON, DC"
    },
    {
        "name": "LYNNES WELDING TRAINING-BISMARCK",
        "location": "BISMARCK, ND"
    },
    {
        "name": "FORTIS INSTITUTE-COOKEVILLE",
        "location": "COOKEVILLE, TN"
    },
    {
        "name": "MAINE MEDIA COLLEGE",
        "location": "ROCKPORT, ME"
    },
    {
        "name": "MEDICAL CAREER COLLEGE OF NORTHERN CALIFORNIA",
        "location": "ROSEVILLE, CA"
    },
    {
        "name": "MIXED INSTITUTE OF COSMETOLOGY & BARBER",
        "location": "SACRAMENTO, CA"
    },
    {
        "name": "LIL LOU'S BEAUTY AND BARBER COLLEGE-HAMMOND",
        "location": "HAMMOND, IN"
    },
    {
        "name": "KC BEAUTY ACADEMY",
        "location": "LOS ANGELES, CA"
    },
    {
        "name": "DAVENPORT UNIVERSITY - DETROIT",
        "location": "DETROIT, MI"
    },
    {
        "name": "PONTIFICAL FACULTY OF THE IMMACULATE CONCEPTION AT THE DOMINICAN HOUSE OF STUDIES",
        "location": "WASHINGTON, DC"
    },
    {
        "name": "LONGWOOD UNIVERSITY",
        "location": "FARMVILLE, VA"
    },
    {
        "name": "FLORIDA CAREER COLLEGE-TAMPA",
        "location": "TAMPA, FL"
    },
    {
        "name": "IOWA LAKES COMMUNITY COLLEGE",
        "location": "ESTHERVILLE, IA"
    },
    {
        "name": "KENTUCKY HORSESHOEING SCHOOL",
        "location": "RICHMOND, KY"
    },
    {
        "name": "INDIANA WESLEYAN UNIVERSITY-NATIONAL & GLOBAL",
        "location": "MARION, IN"
    },
    {
        "name": "ALABAMA SCHOOL OF NAIL TECHNOLOGY & COSMETOLOGY",
        "location": "JACKSON, AL"
    },
    {
        "name": "OWENS COMMUNITY COLLEGE",
        "location": "PERRYSBURG, OH"
    },
    {
        "name": "LA BELLE BEAUTY SCHOOL",
        "location": "HIALEAH, FL"
    },
    {
        "name": "CAPE COD COMMUNITY COLLEGE",
        "location": "WEST BARNSTABLE, MA"
    },
    {
        "name": "UPMC SHADYSIDE SCHOOL OF NURSING",
        "location": "PITTSBURGH, PA"
    },
    {
        "name": "THE COLLEGE OF HEALTH CARE PROFESSIONS-SAN ANTONIO",
        "location": "SAN ANTONIO, TX"
    },
    {
        "name": "LAKE WASHINGTON INSTITUTE OF TECHNOLOGY",
        "location": "KIRKLAND, WA"
    },
    {
        "name": "NORTH-WEST COLLEGE-GLENDALE",
        "location": "GLENDALE, CA"
    },
    {
        "name": "CITY COLLEGE OF SAN FRANCISCO",
        "location": "SAN FRANCISCO, CA"
    },
    {
        "name": "CITY COLLEGES OF CHICAGO-WILBUR WRIGHT COLLEGE",
        "location": "CHICAGO, IL"
    },
    {
        "name": "COLLEGE OF DUPAGE",
        "location": "GLEN ELLYN, IL"
    },
    {
        "name": "AMBERTON UNIVERSITY",
        "location": "GARLAND, TX"
    },
    {
        "name": "FERRUM COLLEGE",
        "location": "FERRUM, VA"
    },
    {
        "name": "GROVE CITY COLLEGE",
        "location": "GROVE CITY, PA"
    },
    {
        "name": "KILGORE COLLEGE",
        "location": "KILGORE, TX"
    },
    {
        "name": "RICCI'S ACADEMY OF COSMETOLOGY",
        "location": "NEWTOWN, CT"
    },
    {
        "name": "TUNXIS COMMUNITY COLLEGE",
        "location": "FARMINGTON, CT"
    },
    {
        "name": "CECIL COLLEGE",
        "location": "NORTH EAST, MD"
    },
    {
        "name": "MOUNTAIN STATE SCHOOL OF MASSAGE",
        "location": "CHARLESTON, WV"
    },
    {
        "name": "UNIVERSITY OF MISSISSIPPI",
        "location": "UNIVERSITY, MS"
    },
    {
        "name": "Z HAIR ACADEMY",
        "location": "OVERLAND PARK, KS"
    },
    {
        "name": "COLLEGEAMERICA-FLAGSTAFF",
        "location": "FLAGSTAFF, AZ"
    },
    {
        "name": "YOUNG HARRIS COLLEGE",
        "location": "YOUNG HARRIS, GA"
    },
    {
        "name": "ULSTER BOCES-SCHOOL OF PRACTICAL NURSING",
        "location": "PORT EWEN, NY"
    },
    {
        "name": "FORTIS COLLEGE-MONTGOMERY",
        "location": "MONTGOMERY, AL"
    },
    {
        "name": "SOUTH TEXAS TRAINING CENTER",
        "location": "SAN BENITO, TX"
    },
    {
        "name": "NORTH FLORIDA COLLEGE",
        "location": "MADISON, FL"
    },
    {
        "name": "TRINITY BAPTIST COLLEGE",
        "location": "JACKSONVILLE, FL"
    },
    {
        "name": "HELENA COLLEGE UNIVERSITY OF MONTANA",
        "location": "HELENA, MT"
    },
    {
        "name": "CUNY LEHMAN COLLEGE",
        "location": "BRONX, NY"
    },
    {
        "name": "RICHMOND COMMUNITY COLLEGE",
        "location": "HAMLET, NC"
    },
    {
        "name": "CET-ALEXANDRIA",
        "location": "ALEXANDRIA, VA"
    },
    {
        "name": "PROFESSIONAL SKILLS INSTITUTE",
        "location": "MAUMEE, OH"
    },
    {
        "name": "DORSEY SCHOOL OF BUSINESS-WAYNE",
        "location": "WAYNE, MI"
    },
    {
        "name": "GALEN COLLEGE OF NURSING-TAMPA BAY",
        "location": "SAINT PETERSBURG, FL"
    },
    {
        "name": "CONTINENTAL SCHOOL OF BEAUTY CULTURE-MATTYDALE",
        "location": "MATTYDALE, NY"
    },
    {
        "name": "ACADEMY OF CHINESE CULTURE AND HEALTH SCIENCES",
        "location": "OAKLAND, CA"
    },
    {
        "name": "ART ACADEMY OF CINCINNATI",
        "location": "CINCINNATI, OH"
    },
    {
        "name": "SABER COLLEGE",
        "location": "MIAMI, FL"
    },
    {
        "name": "MILLENNIUM TRAINING INSTITUTE",
        "location": "WOBURN, MA"
    },
    {
        "name": "WILLIAM JAMES COLLEGE",
        "location": "NEWTON, MA"
    },
    {
        "name": "AMERICAN BUSINESS AND TECHNOLOGY UNIVERSITY",
        "location": "ST JOSEPH, MO"
    },
    {
        "name": "STAUTZENBERGER COLLEGE-MAUMEE",
        "location": "MAUMEE, OH"
    },
    {
        "name": "LEBANON VALLEY COLLEGE",
        "location": "ANNVILLE, PA"
    },
    {
        "name": "OAKLAND COMMUNITY COLLEGE",
        "location": "BLOOMFIELD HILLS, MI"
    },
    {
        "name": "COZMO BEAUTY SCHOOL",
        "location": "BONITA SPRINGS, FL"
    },
    {
        "name": "CUNY MEDGAR EVERS COLLEGE",
        "location": "BROOKLYN, NY"
    },
    {
        "name": "UNIVERSIDAD TEOLOGICA DEL CARIBE",
        "location": "TRUJILLO ALTO, PR"
    },
    {
        "name": "MODERN HAIRSTYLING INSTITUTE-ARECIBO",
        "location": "ARECIBO, PR"
    },
    {
        "name": "ALABAMA STATE COLLEGE OF BARBER STYLING",
        "location": "GARDENDALE, AL"
    },
    {
        "name": "SOUTHWEST COLLEGE OF NATUROPATHIC MEDICINE & HEALTH SCIENCES",
        "location": "TEMPE, AZ"
    },
    {
        "name": "COSMETOLOGY TRAINING CENTER",
        "location": "LAFAYETTE, LA"
    },
    {
        "name": "DIMAN REGIONAL TECHNICAL INSTITUTE",
        "location": "FALL RIVER, MA"
    },
    {
        "name": "FLORIDA MEMORIAL UNIVERSITY",
        "location": "MIAMI GARDENS, FL"
    },
    {
        "name": "AVENUE FIVE INSTITUTE",
        "location": "AUSTIN, TX"
    },
    {
        "name": "THE SALON PROFESSIONAL ACADEMY-KENOSHA",
        "location": "KENOSHA, WI"
    },
    {
        "name": "NORTHLAND PIONEER COLLEGE",
        "location": "HOLBROOK, AZ"
    },
    {
        "name": "ESTELLE SKIN CARE AND SPA INSTITUTE",
        "location": "SKOKIE, IL"
    },
    {
        "name": "DES MOINES UNIVERSITY-OSTEOPATHIC MEDICAL CENTER",
        "location": "DES MOINES, IA"
    },
    {
        "name": "SOMA INSTITUTE-THE NATIONAL SCHOOL OF CLINICAL MASSAGE THERAPY",
        "location": "CHICAGO, IL"
    },
    {
        "name": "HACIENDA LA PUENTE ADULT EDUCATION",
        "location": "LA PUENTE, CA"
    },
    {
        "name": "THE INSTITUTE OF BEAUTY AND WELLNESS",
        "location": "MILWAUKEE, WI"
    },
    {
        "name": "EMPIRE BEAUTY SCHOOL-NW PHOENIX",
        "location": "PHOENIX, AZ"
    },
    {
        "name": "CALIFORNIA STATE UNIVERSITY-FRESNO",
        "location": "FRESNO, CA"
    },
    {
        "name": "VICTOR VALLEY COLLEGE",
        "location": "VICTORVILLE, CA"
    },
    {
        "name": "DENVER SEMINARY",
        "location": "LITTLETON, CO"
    },
    {
        "name": "CALIFORNIA STATE UNIVERSITY-LOS ANGELES",
        "location": "LOS ANGELES, CA"
    },
    {
        "name": "COAST COMMUNITY COLLEGE DISTRICT OFFICE",
        "location": "COSTA MESA, CA"
    },
    {
        "name": "VENTURA ADULT AND CONTINUING EDUCATION",
        "location": "VENTURA, CA"
    },
    {
        "name": "MILLIKIN UNIVERSITY",
        "location": "DECATUR, IL"
    },
    {
        "name": "E Q SCHOOL OF HAIR DESIGN",
        "location": "COUNCIL BLUFFS, IA"
    },
    {
        "name": "LOS ANGELES COUNTY COLLEGE OF NURSING AND ALLIED HEALTH",
        "location": "LOS ANGELES, CA"
    },
    {
        "name": "BIOLA UNIVERSITY",
        "location": "LA MIRADA, CA"
    },
    {
        "name": "UNIVERSITY OF MASSACHUSETTS-LOWELL",
        "location": "LOWELL, MA"
    },
    {
        "name": "LOWER COLUMBIA COLLEGE",
        "location": "LONGVIEW, WA"
    },
    {
        "name": "SAINT NORBERT COLLEGE",
        "location": "DE PERE, WI"
    },
    {
        "name": "FRESNO PACIFIC UNIVERSITY",
        "location": "FRESNO, CA"
    },
    {
        "name": "ROCHESTER INSTITUTE OF TECHNOLOGY",
        "location": "ROCHESTER, NY"
    },
    {
        "name": "ROSS MEDICAL EDUCATION CENTER-ROOSEVELT PARK",
        "location": "ROOSEVELT PARK, MI"
    },
    {
        "name": "CDA TECHNICAL INSTITUTE",
        "location": "JACKSONVILLE, FL"
    },
    {
        "name": "ROBERTO-VENN SCHOOL OF LUTHIERY",
        "location": "PHOENIX, AZ"
    },
    {
        "name": "IBMC COLLEGE",
        "location": "FORT COLLINS, CO"
    },
    {
        "name": "SAINT ELIZABETH SCHOOL OF NURSING",
        "location": "LAFAYETTE, IN"
    },
    {
        "name": "BERKSHIRE COMMUNITY COLLEGE",
        "location": "PITTSFIELD, MA"
    },
    {
        "name": "MITCHELLS ACADEMY",
        "location": "RALEIGH, NC"
    },
    {
        "name": "CAPSTONE COLLEGE",
        "location": "PASADENA, CA"
    },
    {
        "name": "G SKIN & BEAUTY INSTITUTE",
        "location": "OAKBROOK, IL"
    },
    {
        "name": "CANNELLA SCHOOL OF HAIR DESIGN-VILLA PARK",
        "location": "VILLA PARK, IL"
    },
    {
        "name": "EMPIRE BEAUTY SCHOOL-UNION",
        "location": "UNION, NJ"
    },
    {
        "name": "DUNWOODY COLLEGE OF TECHNOLOGY",
        "location": "MINNEAPOLIS, MN"
    },
    {
        "name": "GOSHEN SCHOOL OF COSMETOLOGY",
        "location": "CLEVELAND, MS"
    },
    {
        "name": "MCI",
        "location": "MCALLEN, TX"
    },
    {
        "name": "ESTEEM ACADEMY OF BEAUTY",
        "location": "SOUTH OGDEN, UT"
    },
    {
        "name": "PEARLANDS INNOVATIVE SCHOOL OF BEAUTY",
        "location": "PEARLAND, TX"
    },
    {
        "name": "INDIAN BIBLE COLLEGE",
        "location": "FLAGSTAFF, AZ"
    },
    {
        "name": "THE PROFESSIONAL COSMETOLOGY ACADEMY",
        "location": "LAREDO, TX"
    },
    {
        "name": "WESTERN MARICOPA EDUCATION CENTER - SOUTHWEST CAMPUS",
        "location": "BUCKEYE, AZ"
    },
    {
        "name": "PAUL MITCHELL THE SCHOOL-SPRINGFIELD",
        "location": "SPRINGFIELD, MO"
    },
    {
        "name": "WITHLACOOCHEE TECHNICAL COLLEGE",
        "location": "INVERNESS, FL"
    },
    {
        "name": "WILLIAM T MCFATTER TECHNICAL COLLEGE",
        "location": "DAVIE, FL"
    },
    {
        "name": "UNIVERSITY OF PUERTO RICO-MEDICAL SCIENCES",
        "location": "SAN JUAN, PR"
    },
    {
        "name": "WASHINGTON BARBER COLLEGE INC",
        "location": "LITTLE ROCK, AR"
    },
    {
        "name": "THE VOCATIONAL NURSING INSTITUTE INC",
        "location": "HOUSTON, TX"
    },
    {
        "name": "EMPIRE BEAUTY SCHOOL-NORTHLAKE",
        "location": "ATLANTA, GA"
    },
    {
        "name": "BEVERLY HILLS DESIGN INSTITUTE",
        "location": "BEVERLY HILLS, CA"
    },
    {
        "name": "AESTHETIC SCIENCE INSTITUTE",
        "location": "LATHAM, NY"
    },
    {
        "name": "MKG BEAUTY & BUSINESS",
        "location": "CRANSTON, RI"
    },
    {
        "name": "EMPIRE BEAUTY SCHOOL-MANHATTAN",
        "location": "NEW YORK, NY"
    },
    {
        "name": "MINGO EXTENDED LEARNING CENTER",
        "location": "DELBARTON, WV"
    },
    {
        "name": "DES MOINES AREA COMMUNITY COLLEGE",
        "location": "ANKENY, IA"
    },
    {
        "name": "CONSTRUCTION TRAINING CENTER",
        "location": "COLUMBIA, SC"
    },
    {
        "name": "MINNESOTA WEST COMMUNITY AND TECHNICAL COLLEGE",
        "location": "GRANITE FALLS, MN"
    },
    {
        "name": "HENNEPIN TECHNICAL COLLEGE",
        "location": "BROOKLYN PARK, MN"
    },
    {
        "name": "AVALON SCHOOL OF COSMETOLOGY",
        "location": "WORTHINGTON, MN"
    },
    {
        "name": "FLATHEAD VALLEY COMMUNITY COLLEGE",
        "location": "KALISPELL, MT"
    },
    {
        "name": "GREAT PLAINS TECHNOLOGY CENTER",
        "location": "LAWTON, OK"
    },
    {
        "name": "PAUL QUINN COLLEGE",
        "location": "DALLAS, TX"
    },
    {
        "name": "DURHAM TECHNICAL COMMUNITY COLLEGE",
        "location": "DURHAM, NC"
    },
    {
        "name": "SAGE SCHOOL OF MASSAGE & ESTHETICS",
        "location": "BEND, OR"
    },
    {
        "name": "INTERACTIVE COLLEGE OF TECHNOLOGY-MORROW",
        "location": "MORROW, GA"
    },
    {
        "name": "LIVELY TECHNICAL COLLEGE",
        "location": "TALLAHASSEE, FL"
    },
    {
        "name": "CAMBRIDGE COLLEGE",
        "location": "BOSTON, MA"
    },
    {
        "name": "MARICOPA COMMUNITY COLLEGE SYSTEM OFFICE",
        "location": "TEMPE, AZ"
    },
    {
        "name": "DENTAL ASSISTANT PRO LLC-COLUMBUS",
        "location": "WESTERVILLE, OH"
    },
    {
        "name": "COMMUNITY COLLEGE OF PHILADELPHIA",
        "location": "PHILADELPHIA, PA"
    },
    {
        "name": "MID MICHIGAN COLLEGE",
        "location": "HARRISON, MI"
    },
    {
        "name": "PIEDMONT COMMUNITY COLLEGE",
        "location": "ROXBORO, NC"
    },
    {
        "name": "HUSSIAN COLLEGE-DAYMAR COLLEGE COLUMBUS",
        "location": "COLUMBUS, OH"
    },
    {
        "name": "AVIATION INSTITUTE OF MAINTENANCE-LAS VEGAS",
        "location": "LAS VEGAS, NV"
    },
    {
        "name": "BLUE MOUNTAIN COMMUNITY COLLEGE",
        "location": "PENDLETON, OR"
    },
    {
        "name": "LANCASTER COUNTY CAREER AND TECHNOLOGY CENTER",
        "location": "WILLOW STREET, PA"
    },
    {
        "name": "RANGER COLLEGE",
        "location": "RANGER, TX"
    },
    {
        "name": "MILWAUKEE AREA TECHNICAL COLLEGE",
        "location": "MILWAUKEE, WI"
    },
    {
        "name": "HERZING UNIVERSITY-ATLANTA",
        "location": "ATLANTA, GA"
    },
    {
        "name": "GRADUATE THEOLOGICAL UNION",
        "location": "BERKELEY, CA"
    },
    {
        "name": "UNIVERSITY OF HAWAII MAUI COLLEGE",
        "location": "KAHULUI, HI"
    },
    {
        "name": "ELEVATE SALON INSTITUTE-CHUBBUCK",
        "location": "CHUBBUCK, ID"
    },
    {
        "name": "MARYVILLE COLLEGE",
        "location": "MARYVILLE, TN"
    },
    {
        "name": "UNIVERSITY OF ST FRANCIS",
        "location": "JOLIET, IL"
    },
    {
        "name": "CARDIAC AND VASCULAR INSTITUTE OF ULTRASOUND",
        "location": "MOBILE, AL"
    },
    {
        "name": "MOREHEAD STATE UNIVERSITY",
        "location": "MOREHEAD, KY"
    },
    {
        "name": "VALENCIA COLLEGE",
        "location": "ORLANDO, FL"
    },
    {
        "name": "UNIVERSITY OF MAINE AT FORT KENT",
        "location": "FORT KENT, ME"
    },
    {
        "name": "LAWRENCE TECHNOLOGICAL UNIVERSITY",
        "location": "SOUTHFIELD, MI"
    },
    {
        "name": "ROCHESTER UNIVERSITY",
        "location": "ROCHESTER HILLS, MI"
    },
    {
        "name": "COLUMBIA CENTRAL UNIVERSITY-CAGUAS",
        "location": "CAGUAS, PR"
    },
    {
        "name": "THE COLLEGE OF HEALTH CARE PROFESSIONS-AUSTIN",
        "location": "AUSTIN, TX"
    },
    {
        "name": "MILAN INSTITUTE-SAN ANTONIO INGRAM",
        "location": "SAN ANTONIO, TX"
    },
    {
        "name": "SOUTH TEXAS VOCATIONAL TECHNICAL INSTITUTE-BROWNSVILLE",
        "location": "BROWNSVILLE, TX"
    },
    {
        "name": "UNITECH TRAINING ACADEMY-LAFAYETTE",
        "location": "LAFAYETTE, LA"
    },
    {
        "name": "NEW ENGLAND TRACTOR TRAILER TRAINING SCHOOL OF CT-BRIDGEPORT",
        "location": "BRIDGEPORT, CT"
    },
    {
        "name": "SCHOOL OF MISSIONARY AVIATION TECHNOLOGY",
        "location": "IONIA, MI"
    },
    {
        "name": "DILLARD UNIVERSITY",
        "location": "NEW ORLEANS, LA"
    },
    {
        "name": "INSTITUTE OF PROFESSIONAL CAREERS",
        "location": "LAS VEGAS, NV"
    },
    {
        "name": "THOMAS UNIVERSITY",
        "location": "THOMASVILLE, GA"
    },
    {
        "name": "NATIONAL CAREER EDUCATION",
        "location": "CITRUS HEIGHTS, CA"
    },
    {
        "name": "NEW MEXICO STATE UNIVERSITY-CARLSBAD",
        "location": "CARLSBAD, NM"
    },
    {
        "name": "CHARLES STUART SCHOOL OF DIAMOND SETTING",
        "location": "BROOKLYN, NY"
    },
    {
        "name": "PRATT INSTITUTE-MAIN",
        "location": "BROOKLYN, NY"
    },
    {
        "name": "SUNY COLLEGE AT GENESEO",
        "location": "GENESEO, NY"
    },
    {
        "name": "MODERN WELDING SCHOOL",
        "location": "SCHENECTADY, NY"
    },
    {
        "name": "EMPIRE BEAUTY SCHOOL-PEEKSKILL",
        "location": "PEEKSKILL, NY"
    },
    {
        "name": "OHIO STATE BEAUTY ACADEMY",
        "location": "LIMA, OH"
    },
    {
        "name": "FAMILY OF FAITH CHRISTIAN UNIVERSITY",
        "location": "SHAWNEE, OK"
    },
    {
        "name": "LANCASTER THEOLOGICAL SEMINARY",
        "location": "LANCASTER, PA"
    },
    {
        "name": "LANCASTER BIBLE COLLEGE",
        "location": "LANCASTER, PA"
    },
    {
        "name": "AMERICAN COLLEGE FOR MEDICAL CAREERS",
        "location": "ORLANDO, FL"
    },
    {
        "name": "ROB ROY ACADEMY-TAUNTON",
        "location": "TAUNTON, MA"
    },
    {
        "name": "UNIVERSITY OF MISSOURI-COLUMBIA",
        "location": "COLUMBIA, MO"
    },
    {
        "name": "ROLLA TECHNICAL INSTITUTE/CENTER",
        "location": "ROLLA, MO"
    },
    {
        "name": "SALEM COLLEGE OF HAIRSTYLING",
        "location": "ROLLA, MO"
    },
    {
        "name": "ALLEN SCHOOL-BROOKLYN",
        "location": "BROOKLYN, NY"
    },
    {
        "name": "SUNY COLLEGE OF TECHNOLOGY AT ALFRED",
        "location": "ALFRED, NY"
    },
    {
        "name": "STETSON UNIVERSITY",
        "location": "DELAND, FL"
    },
    {
        "name": "AVILA UNIVERSITY",
        "location": "KANSAS CITY, MO"
    },
    {
        "name": "FORTIS COLLEGE-NORFOLK",
        "location": "NORFOLK, VA"
    },
    {
        "name": "EMPIRE BEAUTY SCHOOL-KENNESAW",
        "location": "KENNESAW, GA"
    },
    {
        "name": "OKLAHOMA STATE UNIVERSITY",
        "location": "STILLWATER, OK"
    },
    {
        "name": "COASTAL ALABAMA COMMUNITY COLLEGE",
        "location": "BAY MINETTE, AL"
    },
    {
        "name": "ARAPAHOE COMMUNITY COLLEGE",
        "location": "LITTLETON, CO"
    },
    {
        "name": "SOUTH PLAINS COLLEGE",
        "location": "LEVELLAND, TX"
    },
    {
        "name": "PRAIRIE VIEW A&M UNIVERSITY",
        "location": "PRAIRIE VIEW, TX"
    },
    {
        "name": "UNIVERSITY OF HOUSTON-SYSTEM ADMINISTRATION",
        "location": "HOUSTON, TX"
    },
    {
        "name": "SIT GRADUATE INSTITUTE",
        "location": "BRATTLEBORO, VT"
    },
    {
        "name": "UNIVERSITY OF WISCONSIN-MADISON",
        "location": "MADISON, WI"
    },
    {
        "name": "PAUL MITCHELL THE SCHOOL-SAN DIEGO",
        "location": "SAN DIEGO, CA"
    },
    {
        "name": "ARTHUR'S BEAUTY COLLEGE",
        "location": "FORT SMITH, AR"
    },
    {
        "name": "CITY COLLEGES OF CHICAGO-RICHARD J DALEY COLLEGE",
        "location": "CHICAGO, IL"
    },
    {
        "name": "FAYETTE INSTITUTE OF TECHNOLOGY",
        "location": "OAK HILL, WV"
    },
    {
        "name": "PACIFIC SCHOOL OF RELIGION",
        "location": "BERKELEY, CA"
    },
    {
        "name": "GEORGE C WALLACE STATE COMMUNITY COLLEGE-HANCEVILLE",
        "location": "HANCEVILLE, AL"
    },
    {
        "name": "EMPORIA STATE UNIVERSITY",
        "location": "EMPORIA, KS"
    },
    {
        "name": "DAKOTA STATE UNIVERSITY",
        "location": "MADISON, SD"
    },
    {
        "name": "EASTERN VIRGINIA MEDICAL SCHOOL",
        "location": "NORFOLK, VA"
    },
    {
        "name": "ROBERTS WESLEYAN COLLEGE",
        "location": "ROCHESTER, NY"
    },
    {
        "name": "SOUTHEASTERN COLLEGE-WEST PALM BEACH",
        "location": "WEST PALM BEACH, FL"
    },
    {
        "name": "BROOKLINE COLLEGE-ALBUQUERQUE",
        "location": "ALBUQUERQUE, NM"
    },
    {
        "name": "ROSS MEDICAL EDUCATION CENTER-NEW BALTIMORE",
        "location": "NEW BALTIMORE, MI"
    },
    {
        "name": "CHARLES OF ITALY BEAUTY COLLEGE",
        "location": "LAKE HAVASU CITY, AZ"
    },
    {
        "name": "CET-SAN DIEGO",
        "location": "SAN DIEGO, CA"
    },
    {
        "name": "DELTA COLLEGE OF ARTS & TECHNOLOGY",
        "location": "BATON ROUGE, LA"
    },
    {
        "name": "NEW ENGLAND CULINARY INSTITUTE",
        "location": "MONTPELIER, VT"
    },
    {
        "name": "VERMONT LAW SCHOOL",
        "location": "SOUTH ROYALTON, VT"
    },
    {
        "name": "DAVIS & ELKINS COLLEGE",
        "location": "ELKINS, WV"
    },
    {
        "name": "HILBERT COLLEGE",
        "location": "HAMBURG, NY"
    },
    {
        "name": "SUNY AT PURCHASE COLLEGE",
        "location": "PURCHASE, NY"
    },
    {
        "name": "CORNERSTONE UNIVERSITY",
        "location": "GRAND RAPIDS, MI"
    },
    {
        "name": "INTERNATIONAL BARBER COLLEGE",
        "location": "CHANDLER, AZ"
    },
    {
        "name": "WINONAH'S INTERNATIONAL SCHOOL OF COSMETOLOGY",
        "location": "HOOVER, AL"
    },
    {
        "name": "THE UNIVERSITY OF TENNESSEE SYSTEM OFFICE",
        "location": "KNOXVILLE, TN"
    },
    {
        "name": "SOUTHERN CAREERS INSTITUTE-WACO",
        "location": "WACO, TX"
    },
    {
        "name": "OAK VALLEY COLLEGE",
        "location": "RIALTO, CA"
    },
    {
        "name": "ZION MASSAGE COLLEGE",
        "location": "ST. GEORGE, UT"
    },
    {
        "name": "ST. LOUIS MED TECH",
        "location": "ST. LOUIS, MO"
    },
    {
        "name": "AMERICAN FITNESS AND NUTRITION ACADEMY",
        "location": "PASADENA, CA"
    },
    {
        "name": "UNIVERSITY OF ARKANSAS SYSTEM EVERSITY",
        "location": "LITTLE ROCK, AR"
    },
    {
        "name": "AVIATOR COLLEGE OF AERONAUTICAL SCIENCE & TECHNOLOGY - KISSIMMEE",
        "location": "KISSIMMEE, FL"
    },
    {
        "name": "UNIVERSIDAD ANA G. MENDEZ-CUPEY CAMPUS",
        "location": "SAN JUAN, PR"
    },
    {
        "name": "HEALING ARTS CENTER",
        "location": "ST. LOUIS, MO"
    },
    {
        "name": "WEBBER INTERNATIONAL UNIVERSITY",
        "location": "BABSON PARK, FL"
    },
    {
        "name": "CAPITOL TECHNOLOGY UNIVERSITY",
        "location": "LAUREL, MD"
    },
    {
        "name": "SALON INSTITUTE-TOLEDO CAMPUS",
        "location": "TOLEDO, OH"
    },
    {
        "name": "AVEDA INSTITUTE PORTLAND-VANCOUVER CAMPUS",
        "location": "VANCOUVER, WA"
    },
    {
        "name": "UNITED EDUCATION INSTITUTE-ENCINO",
        "location": "ENCINO, CA"
    },
    {
        "name": "EMORY UNIVERSITY-OXFORD COLLEGE",
        "location": "OXFORD, GA"
    },
    {
        "name": "AMERICAN COLLEGE OF BARBERING",
        "location": "LOUISVILLE, KY"
    },
    {
        "name": "IDAHO STATE UNIVERSITY",
        "location": "POCATELLO, ID"
    },
    {
        "name": "TUFTS UNIVERSITY",
        "location": "MEDFORD, MA"
    },
    {
        "name": "BOWLING GREEN STATE UNIVERSITY-FIRELANDS",
        "location": "HURON, OH"
    },
    {
        "name": "CUYAHOGA COMMUNITY COLLEGE DISTRICT",
        "location": "CLEVELAND, OH"
    },
    {
        "name": "SITTING BULL COLLEGE",
        "location": "FORT YATES, ND"
    },
    {
        "name": "STRAYER UNIVERSITY-TEXAS",
        "location": "AUSTIN, TX"
    },
    {
        "name": "LARAMIE COUNTY COMMUNITY COLLEGE",
        "location": "CHEYENNE, WY"
    },
    {
        "name": "COSMO BEAUTY ACADEMY",
        "location": "SACRAMENTO, CA"
    },
    {
        "name": "UNIVERSITY OF NORTHWESTERN OHIO",
        "location": "LIMA, OH"
    },
    {
        "name": "AIR FORCE INSTITUTE OF TECHNOLOGY-GRADUATE SCHOOL OF ENGINEERING & MANAGEMENT",
        "location": "WRIGHT-PATTERSON AFB, OH"
    },
    {
        "name": "TENNESSEE COLLEGE OF APPLIED TECHNOLOGY-LIVINGSTON",
        "location": "LIVINGSTON, TN"
    },
    {
        "name": "UNIVERSITY OF WISCONSIN-OSHKOSH",
        "location": "OSHKOSH, WI"
    },
    {
        "name": "ROSS MEDICAL EDUCATION CENTER-CANTON",
        "location": "CANTON, MI"
    },
    {
        "name": "KESER TORAH-MAYAN HATALMUD",
        "location": "LAKEWOOD, NJ"
    },
    {
        "name": "SAINT JOSEPH'S UNIVERSITY",
        "location": "PHILADELPHIA, PA"
    },
    {
        "name": "WESTMORELAND COUNTY COMMUNITY COLLEGE",
        "location": "YOUNGWOOD, PA"
    },
    {
        "name": "GALEN COLLEGE OF NURSING-CINCINNATI",
        "location": "CINCINNATI, OH"
    },
    {
        "name": "NEW DIMENSIONS BEAUTY ACADEMY INC",
        "location": "PARKER, CO"
    },
    {
        "name": "UNIVERSITY OF SOUTH DAKOTA",
        "location": "VERMILLION, SD"
    },
    {
        "name": "FORTIS COLLEGE-SALT LAKE CITY",
        "location": "SALT LAKE CITY, UT"
    },
    {
        "name": "SOUTHERN OREGON UNIVERSITY",
        "location": "ASHLAND, OR"
    },
    {
        "name": "HEADLINES ACADEMY INC",
        "location": "RAPID CITY, SD"
    },
    {
        "name": "JAMES MADISON UNIVERSITY",
        "location": "HARRISONBURG, VA"
    },
    {
        "name": "LEE UNIVERSITY",
        "location": "CLEVELAND, TN"
    },
    {
        "name": "BEAU MONDE ACADEMY OF COSMETOLOGY AND BARBERING",
        "location": "PORTLAND, OR"
    },
    {
        "name": "THE COLLEGE OF HEALTH CARE PROFESSIONS-SOUTHWEST HOUSTON",
        "location": "HOUSTON, TX"
    },
    {
        "name": "CAREER ACADEMY OF HAIR DESIGN",
        "location": "SPRINGDALE, AR"
    },
    {
        "name": "ALLIANT INTERNATIONAL UNIVERSITY-SAN DIEGO",
        "location": "SAN DIEGO, CA"
    },
    {
        "name": "UNIVERSITY OF LA VERNE",
        "location": "LA VERNE, CA"
    },
    {
        "name": "FLORIDA GATEWAY COLLEGE",
        "location": "LAKE CITY, FL"
    },
    {
        "name": "WASHINGTON COUNTY COMMUNITY COLLEGE",
        "location": "CALAIS, ME"
    },
    {
        "name": "CENTRAL MICHIGAN UNIVERSITY",
        "location": "MOUNT PLEASANT, MI"
    },
    {
        "name": "CROWN COLLEGE",
        "location": "SAINT BONIFACIUS, MN"
    },
    {
        "name": "PAUL MITCHELL THE SCHOOL-INDIANAPOLIS",
        "location": "INDIANAPOLIS, IN"
    },
    {
        "name": "FORT PECK COMMUNITY COLLEGE",
        "location": "POPLAR, MT"
    },
    {
        "name": "ST BERNARD'S SCHOOL OF THEOLOGY AND MINISTRY",
        "location": "ROCHESTER, NY"
    },
    {
        "name": "EMMA'S BEAUTY ACADEMY-MAYAGUEZ",
        "location": "MAYAGUEZ, PR"
    },
    {
        "name": "JEFFERSON COUNTY DUBOIS AREA VOCATIONAL TECHNICAL PRACTICAL NURSING PROGRAM",
        "location": "REYNOLDSVILLE, PA"
    },
    {
        "name": "REMINGTON COLLEGE-COLUMBIA CAMPUS",
        "location": "COLUMBIA, SC"
    },
    {
        "name": "PATRICK HENRY COLLEGE",
        "location": "PURCELLVILLE, VA"
    },
    {
        "name": "CAPELLA UNIVERSITY",
        "location": "MINNEAPOLIS, MN"
    },
    {
        "name": "SUNY ADIRONDACK",
        "location": "QUEENSBURY, NY"
    },
    {
        "name": "ATLANTIC INSTITUTE OF ORIENTAL MEDICINE",
        "location": "FORT LAUDERDALE, FL"
    },
    {
        "name": "FRANKLIN W OLIN COLLEGE OF ENGINEERING",
        "location": "NEEDHAM, MA"
    },
    {
        "name": "AMERICAN HAIR ACADEMY",
        "location": "MT. PLEASANT, IA"
    },
    {
        "name": "ANGELES COLLEGE",
        "location": "LOS ANGELES, CA"
    },
    {
        "name": "ITHACA COLLEGE",
        "location": "ITHACA, NY"
    },
    {
        "name": "EMPIRE BEAUTY SCHOOL-CINCINNATI",
        "location": "CINCINNATI, OH"
    },
    {
        "name": "MERCY COLLEGE OF OHIO",
        "location": "TOLEDO, OH"
    },
    {
        "name": "EMPIRE BEAUTY SCHOOL-READING",
        "location": "READING, PA"
    },
    {
        "name": "ALDERSON BROADDUS UNIVERSITY",
        "location": "PHILIPPI, WV"
    },
    {
        "name": "SHERMAN COLLEGE OF CHIROPRACTIC",
        "location": "SPARTANBURG, SC"
    },
    {
        "name": "CATAWBA COLLEGE",
        "location": "SALISBURY, NC"
    },
    {
        "name": "PINE MANOR COLLEGE",
        "location": "CHESTNUT HILL, MA"
    },
    {
        "name": "ADELPHI UNIVERSITY",
        "location": "GARDEN CITY, NY"
    },
    {
        "name": "ALBANY COLLEGE OF PHARMACY AND HEALTH SCIENCES",
        "location": "ALBANY, NY"
    },
    {
        "name": "MODERN HAIRSTYLING INSTITUTE-BAYAMON",
        "location": "BAYAMON, PR"
    },
    {
        "name": "TURNING POINT BEAUTY COLLEGE",
        "location": "CASA GRANDE, AZ"
    },
    {
        "name": "CHARTER COLLEGE",
        "location": "VANCOUVER, WA"
    },
    {
        "name": "TRIANGLE TECH INC-PITTSBURGH",
        "location": "PITTSBURGH, PA"
    },
    {
        "name": "AVEDA FREDRIC'S INSTITUTE-INDIANAPOLIS",
        "location": "INDIANAPOLIS, IN"
    },
    {
        "name": "SOUTHWEST VIRGINIA COMMUNITY COLLEGE",
        "location": "CEDAR BLUFF, VA"
    },
    {
        "name": "ILLINOIS EASTERN COMMUNITY COLLEGE-SYSTEM OFFICE",
        "location": "OLNEY, IL"
    },
    {
        "name": "ATI COLLEGE-NORWALK",
        "location": "WHITTER, CA"
    },
    {
        "name": "AVIATION INSTITUTE OF MAINTENANCE-MANASSAS",
        "location": "MANASSAS, VA"
    },
    {
        "name": "REDLANDS COMMUNITY COLLEGE",
        "location": "EL RENO, OK"
    },
    {
        "name": "LEHIGH UNIVERSITY",
        "location": "BETHLEHEM, PA"
    },
    {
        "name": "PRO WAY HAIR SCHOOL",
        "location": "STONE MOUNTAIN, GA"
    },
    {
        "name": "G SKIN & BEAUTY INSTITUTE",
        "location": "SCHAUMBURG, IL"
    },
    {
        "name": "MERCER COUNTY CAREER CENTER",
        "location": "MERCER, PA"
    },
    {
        "name": "HUNTSVILLE BIBLE COLLEGE",
        "location": "HUNTSVILLE, AL"
    },
    {
        "name": "INTELLITEC COLLEGE-COLORADO SPRINGS",
        "location": "COLORADO SPRINGS, CO"
    },
    {
        "name": "DEPAUL UNIVERSITY",
        "location": "CHICAGO, IL"
    },
    {
        "name": "MARTIN UNIVERSITY",
        "location": "INDIANAPOLIS, IN"
    },
    {
        "name": "YESHIVA GEDOLAH OF GREATER DETROIT",
        "location": "OAK PARK, MI"
    },
    {
        "name": "COLLEGE OF MENOMINEE NATION",
        "location": "KESHENA, WI"
    },
    {
        "name": "WIREGRASS GEORGIA TECHNICAL COLLEGE",
        "location": "VALDOSTA, GA"
    },
    {
        "name": "TOWSON UNIVERSITY",
        "location": "TOWSON, MD"
    },
    {
        "name": "GOUCHER COLLEGE",
        "location": "BALTIMORE, MD"
    },
    {
        "name": "SEATTLE PACIFIC UNIVERSITY",
        "location": "SEATTLE, WA"
    },
    {
        "name": "LIPSCOMB UNIVERSITY",
        "location": "NASHVILLE, TN"
    },
    {
        "name": "SKYLINE COLLEGE",
        "location": "SAN BRUNO, CA"
    },
    {
        "name": "GARNET CAREER CENTER",
        "location": "CHARLESTON, WV"
    },
    {
        "name": "AULTMAN COLLEGE OF NURSING AND HEALTH SCIENCES",
        "location": "CANTON, OH"
    },
    {
        "name": "ROCKEFELLER UNIVERSITY",
        "location": "NEW YORK, NY"
    },
    {
        "name": "SCHOOL OF VISUAL ARTS",
        "location": "NEW YORK, NY"
    },
    {
        "name": "NORTHERN BAPTIST THEOLOGICAL SEMINARY",
        "location": "LISLE, IL"
    },
    {
        "name": "EMPIRE BEAUTY SCHOOL-HOOKSETT",
        "location": "HOOKSETT, NH"
    },
    {
        "name": "DIGRIGOLI SCHOOL OF COSMETOLOGY",
        "location": "WEST SPRINGFIELD, MA"
    },
    {
        "name": "COLUMBIA COLLEGE HOLLYWOOD",
        "location": "TARZANA, CA"
    },
    {
        "name": "DELAWARE COLLEGE OF ART AND DESIGN",
        "location": "WILMINGTON, DE"
    },
    {
        "name": "CONCORDE CAREER INSTITUTE-JACKSONVILLE",
        "location": "JACKSONVILLE, FL"
    },
    {
        "name": "WALDORF UNIVERSITY",
        "location": "FOREST CITY, IA"
    },
    {
        "name": "WICHITA TECHNICAL INSTITUTE",
        "location": "WICHITA, KS"
    },
    {
        "name": "GREAT FALLS COLLEGE MONTANA STATE UNIVERSITY",
        "location": "GREAT FALLS, MT"
    },
    {
        "name": "WASHINGTON ADVENTIST UNIVERSITY",
        "location": "TAKOMA PARK, MD"
    },
    {
        "name": "THE SALON PROFESSIONAL ACADEMY-NAMPA",
        "location": "NAMPA, ID"
    },
    {
        "name": "NEW MEXICO JUNIOR COLLEGE",
        "location": "HOBBS, NM"
    },
    {
        "name": "CENTRAL YESHIVA TOMCHEI TMIMIM LUBAVITZ",
        "location": "BROOKLYN, NY"
    },
    {
        "name": "PENNSYLVANIA INSTITUTE OF TECHNOLOGY",
        "location": "MEDIA, PA"
    },
    {
        "name": "LOUISIANA STATE UNIVERSITY HEALTH SCIENCES CENTER-NEW ORLEANS",
        "location": "NEW ORLEANS, LA"
    },
    {
        "name": "MERRIMACK COLLEGE",
        "location": "NORTH ANDOVER, MA"
    },
    {
        "name": "REGIS COLLEGE",
        "location": "WESTON, MA"
    },
    {
        "name": "AUGSBURG UNIVERSITY",
        "location": "MINNEAPOLIS, MN"
    },
    {
        "name": "BAPTIST BIBLE COLLEGE",
        "location": "SPRINGFIELD, MO"
    },
    {
        "name": "SUNY BROCKPORT",
        "location": "BROCKPORT, NY"
    },
    {
        "name": "YESHIVA OHR NAFTOLI",
        "location": "NEW WINDSOR, NY"
    },
    {
        "name": "SACRAMENTO ULTRASOUND INSTITUTE",
        "location": "SACRAMENTO, CA"
    },
    {
        "name": "BALDY VIEW REGIONAL OCCUPATIONAL PROGRAM",
        "location": "ONTARIO, CA"
    },
    {
        "name": "MY BEAUTY & BARBER COLLEGE",
        "location": "SACRAMENTO, CA"
    },
    {
        "name": "TRICOCI UNIVERSITY OF BEAUTY CULTURE-JANESVILLE",
        "location": "JANESVILLE, WI"
    },
    {
        "name": "AMSLEE INSTITUTE",
        "location": "SARASOTA, FL"
    },
    {
        "name": "INSTITUTE OF LUTHERAN THEOLOGY",
        "location": "BROOKINGS, SD"
    },
    {
        "name": "YESHIVA GEDOLA TIFERES YAAKOV YITZCHOK",
        "location": "LAKEWOOD, NJ"
    },
    {
        "name": "NEW YORK SEMINARY",
        "location": "BROOKLYN, NY"
    },
    {
        "name": "PONCE HEALTH SCIENCES UNIVERSITY-ST LOUIS",
        "location": "ST. LOUIS, MO"
    },
    {
        "name": "UNIVERSITY OF WEST LOS ANGELES - CHATSWORTH",
        "location": "CHATSWORTH, CA"
    },
    {
        "name": "J D ACADEMY OF SALON AND SPA",
        "location": "DANVILLE, CA"
    },
    {
        "name": "CAREER SCHOOL OF NY",
        "location": "STATEN ISLAND, NY"
    },
    {
        "name": "ABC BEAUTY ACADEMY",
        "location": "RICHARDSON, TX"
    },
    {
        "name": "ACADEMY OF COSMETOLOGY INC",
        "location": "BOZEMAN, MT"
    },
    {
        "name": "THE RECORDING CONSERVATORY OF AUSTIN",
        "location": "AUSTIN, TX"
    },
    {
        "name": "YESHIVA SHOLOM SHACHNA",
        "location": "BROOKLYN, NY"
    },
    {
        "name": "AMG SCHOOL OF LICENSED PRACTICAL NURSING",
        "location": "BROOKLYN, NY"
    },
    {
        "name": "CENTER FOR ULTRASOUND RESEARCH & EDUCATION",
        "location": "WHITE PLAINS, NY"
    },
    {
        "name": "AIKEN SCHOOL OF COSMETOLOGY AND BARBERING",
        "location": "AIKEN, SC"
    },
    {
        "name": "WILLIAM RAINEY HARPER COLLEGE",
        "location": "PALATINE, IL"
    },
    {
        "name": "INSTITUTE OF CULINARY EDUCATION",
        "location": "NEW YORK, NY"
    },
    {
        "name": "WYTHEVILLE COMMUNITY COLLEGE",
        "location": "WYTHEVILLE, VA"
    },
    {
        "name": "POTOMAC STATE COLLEGE OF WEST VIRGINIA UNIVERSITY",
        "location": "KEYSER, WV"
    },
    {
        "name": "BUCKS COUNTY COMMUNITY COLLEGE",
        "location": "NEWTOWN, PA"
    },
    {
        "name": "SCHILLING-DOUGLAS SCHOOL OF HAIR DESIGN LLC",
        "location": "NEWARK, DE"
    },
    {
        "name": "MGH INSTITUTE OF HEALTH PROFESSIONS",
        "location": "BOSTON, MA"
    },
    {
        "name": "PENNSYLVANIA STATE UNIVERSITY-PENN STATE NEW KENSINGTON",
        "location": "NEW KENSINGTON, PA"
    },
    {
        "name": "DENMARK TECHNICAL COLLEGE",
        "location": "DENMARK, SC"
    },
    {
        "name": "CENTRAL TECHNOLOGY CENTER",
        "location": "DRUMRIGHT, OK"
    },
    {
        "name": "PAUL MITCHELL THE SCHOOL-OGDEN",
        "location": "OGDEN, UT"
    },
    {
        "name": "LARRY'S BARBER COLLEGE",
        "location": "CHICAGO, IL"
    },
    {
        "name": "WESTERN OKLAHOMA STATE COLLEGE",
        "location": "ALTUS, OK"
    },
    {
        "name": "DIAMOND BEAUTY COLLEGE",
        "location": "SOUTH EL MONTE, CA"
    },
    {
        "name": "INTERNATIONAL SCHOOL OF COSMETOLOGY",
        "location": "SCOTTSDALE, AZ"
    },
    {
        "name": "CHATTANOOGA COLLEGE MEDICAL DENTAL AND TECHNICAL CAREERS",
        "location": "CHATTANOOGA, TN"
    },
    {
        "name": "TENNESSEE COLLEGE OF APPLIED TECHNOLOGY-CROSSVILLE",
        "location": "CROSSVILLE, TN"
    },
    {
        "name": "NORTH-WEST COLLEGE-ANAHEIM",
        "location": "ANAHEIM, CA"
    },
    {
        "name": "WESTERN CONNECTICUT STATE UNIVERSITY",
        "location": "DANBURY, CT"
    },
    {
        "name": "MASSACHUSETTS BAY COMMUNITY COLLEGE",
        "location": "WELLESLEY HILLS, MA"
    },
    {
        "name": "AVI CAREER TRAINING",
        "location": "GREAT FALLS, VA"
    },
    {
        "name": "MONTANA BIBLE COLLEGE",
        "location": "BOZEMAN, MT"
    },
    {
        "name": "BROOKLINE COLLEGE-PHOENIX",
        "location": "PHOENIX, AZ"
    },
    {
        "name": "LAKE REGION STATE COLLEGE",
        "location": "DEVILS LAKE, ND"
    },
    {
        "name": "BRENAU UNIVERSITY",
        "location": "GAINESVILLE, GA"
    },
    {
        "name": "JOHN A LOGAN COLLEGE",
        "location": "CARTERVILLE, IL"
    },
    {
        "name": "HUMPHREYS UNIVERSITY-STOCKTON AND MODESTO CAMPUSES",
        "location": "STOCKTON, CA"
    },
    {
        "name": "CARROLL UNIVERSITY",
        "location": "WAUKESHA, WI"
    },
    {
        "name": "PAUL MITCHELL THE SCHOOL-PASADENA",
        "location": "PASADENA, CA"
    },
    {
        "name": "BREWSTER TECHNICAL COLLEGE",
        "location": "TAMPA, FL"
    },
    {
        "name": "LEEWARD COMMUNITY COLLEGE",
        "location": "PEARL CITY, HI"
    },
    {
        "name": "UNIVERSITY OF MARYLAND-GLOBAL CAMPUS",
        "location": "ADELPHI, MD"
    },
    {
        "name": "BENTLEY UNIVERSITY",
        "location": "WALTHAM, MA"
    },
    {
        "name": "BOSTON ARCHITECTURAL COLLEGE",
        "location": "BOSTON, MA"
    },
    {
        "name": "SUMMIT SALON ACADEMY KANSAS CITY",
        "location": "INDEPENDENCE, MO"
    },
    {
        "name": "AVIATION INSTITUTE OF MAINTENANCE-INDIANAPOLIS",
        "location": "INDIANAPOLIS, IN"
    },
    {
        "name": "AUGUSTE ESCOFFIER SCHOOL OF CULINARY ARTS-BOULDER",
        "location": "BOULDER, CO"
    },
    {
        "name": "UNITECH TRAINING ACADEMY-WEST MONROE",
        "location": "WEST MONROE, LA"
    },
    {
        "name": "RIVERSIDE COUNTY OFFICE OF EDUCATION-SCHOOL OF CAREER EDUCATION",
        "location": "RIVERSIDE, CA"
    },
    {
        "name": "PROFESSIONAL TECHNICAL INSTITUTION",
        "location": "BAYAMON, PR"
    },
    {
        "name": "LINCOLN TECHNICAL INSTITUTE-WHITESTONE",
        "location": "WHITESTONE, NY"
    },
    {
        "name": "COLGATE UNIVERSITY",
        "location": "HAMILTON, NY"
    },
    {
        "name": "SUNY COLLEGE OF ENVIRONMENTAL SCIENCE AND FORESTRY",
        "location": "SYRACUSE, NY"
    },
    {
        "name": "AMERICAN BEAUTY ACADEMY",
        "location": "PAYSON, UT"
    },
    {
        "name": "ASNUNTUCK COMMUNITY COLLEGE",
        "location": "ENFIELD, CT"
    },
    {
        "name": "SCHOOL OF AUTOMOTIVE MACHINISTS & TECHNOLOGY",
        "location": "HOUSTON, TX"
    },
    {
        "name": "VANGUARD COLLEGE OF COSMETOLOGY-BATON ROUGE",
        "location": "BATON ROUGE, LA"
    },
    {
        "name": "EHOVE CAREER CENTER",
        "location": "MILAN, OH"
    },
    {
        "name": "KENT STATE UNIVERSITY AT TUSCARAWAS",
        "location": "NEW PHILADELPHIA, OH"
    },
    {
        "name": "NUC UNIVERSITY",
        "location": "BAYAMON, PR"
    },
    {
        "name": "J. F. DRAKE STATE COMMUNITY AND TECHNICAL COLLEGE",
        "location": "HUNTSVILLE, AL"
    },
    {
        "name": "CARRINGTON COLLEGE-PLEASANT HILL CAMPUS",
        "location": "PLEASANT HILL, CA"
    },
    {
        "name": "EVERGREEN BEAUTY AND BARBER COLLEGE-EVERETT",
        "location": "EVERETT, WA"
    },
    {
        "name": "IOWA WESTERN COMMUNITY COLLEGE",
        "location": "COUNCIL BLUFFS, IA"
    },
    {
        "name": "TRICOCI UNIVERSITY OF BEAUTY CULTURE-ROCKFORD",
        "location": "ROCKFORD, IL"
    },
    {
        "name": "CHOFFIN CAREER AND TECHNICAL CENTER",
        "location": "YOUNGSTOWN, OH"
    },
    {
        "name": "RICHLAND COLLEGE",
        "location": "DALLAS, TX"
    },
    {
        "name": "VIRGINIA BEACH CITY PUBLIC SCHOOLS SCHOOL OF PRACTICAL NURSING",
        "location": "VIRGINIA BEACH, VA"
    },
    {
        "name": "MID-EASTCTC-ADULT EDUCATION",
        "location": "ZANESVILLE, OH"
    },
    {
        "name": "UNIVERSITY OF COLORADO COLORADO SPRINGS",
        "location": "COLORADO SPRINGS, CO"
    },
    {
        "name": "BARD COLLEGE",
        "location": "ANNANDALE-ON-HUDSON, NY"
    },
    {
        "name": "LOS ANGELES VALLEY COLLEGE",
        "location": "VALLEY GLEN, CA"
    },
    {
        "name": "AZUSA PACIFIC UNIVERSITY",
        "location": "AZUSA, CA"
    },
    {
        "name": "NEUMANN UNIVERSITY",
        "location": "ASTON, PA"
    },
    {
        "name": "CHARLESTON SOUTHERN UNIVERSITY",
        "location": "CHARLESTON, SC"
    },
    {
        "name": "REFORMED PRESBYTERIAN THEOLOGICAL SEMINARY",
        "location": "PITTSBURGH, PA"
    },
    {
        "name": "MONTY TECH",
        "location": "FITCHBURG, MA"
    },
    {
        "name": "UNITECH TRAINING ACADEMY-HOUMA",
        "location": "HOUMA, LA"
    },
    {
        "name": "CUNY GRADUATE SCHOOL AND UNIVERSITY CENTER",
        "location": "NEW YORK, NY"
    },
    {
        "name": "AMERICAN ACADEMY OF DRAMATIC ARTS-NEW YORK",
        "location": "NEW YORK, NY"
    },
    {
        "name": "COLUMBIA COLLEGE OF NURSING",
        "location": "GLENDALE, WI"
    },
    {
        "name": "DR. IDA ROLF INSTITUTE",
        "location": "BOULDER, CO"
    },
    {
        "name": "DEWEY UNIVERSITY-HATO REY",
        "location": "HATO REY, PR"
    },
    {
        "name": "CONNECTICUT COLLEGE",
        "location": "NEW LONDON, CT"
    },
    {
        "name": "EUREKA COLLEGE",
        "location": "EUREKA, IL"
    },
    {
        "name": "PJ'S COLLEGE OF COSMETOLOGY-RICHMOND",
        "location": "RICHMOND, IN"
    },
    {
        "name": "HUSSIAN COLLEGE-DAYMAR COLLEGE BOWLING GREEN",
        "location": "BOWLING GREEN, KY"
    },
    {
        "name": "SOUTHERN UNIVERSITY AND A&M COLLEGE",
        "location": "BATON ROUGE, LA"
    },
    {
        "name": "NORTHWEST MISSOURI STATE UNIVERSITY",
        "location": "MARYVILLE, MO"
    },
    {
        "name": "CHRIS BEAUTY COLLEGE",
        "location": "GULFPORT, MS"
    },
    {
        "name": "PLATT COLLEGE-MILLER-MOTTE-WILMINGTON",
        "location": "WILMINGTON, NC"
    },
    {
        "name": "REFLECTIONS ACADEMY OF BEAUTY",
        "location": "DECATUR, IL"
    },
    {
        "name": "KEENE BEAUTY ACADEMY",
        "location": "KEENE, NH"
    },
    {
        "name": "THE SALON PROFESSIONAL ACADEMY",
        "location": "RAPID CITY, SD"
    },
    {
        "name": "O'BRIENS AVEDA INSTITUTE",
        "location": "WILLISTON, VT"
    },
    {
        "name": "WILLIAM PEACE UNIVERSITY",
        "location": "RALEIGH, NC"
    },
    {
        "name": "BAY PATH UNIVERSITY",
        "location": "LONGMEADOW, MA"
    },
    {
        "name": "MANHATTANVILLE COLLEGE",
        "location": "PURCHASE, NY"
    },
    {
        "name": "REXBURG COLLEGE OF MASSAGE THERAPY",
        "location": "REXBURG, ID"
    },
    {
        "name": "CHAMPION CHRISTIAN COLLEGE",
        "location": "HOT SPRINGS, AR"
    },
    {
        "name": "NO GREASE BARBER SCHOOL",
        "location": "CHARLOTTE, NC"
    },
    {
        "name": "INSTITUTE OF CULINARY EDUCATION",
        "location": "PASADENA, CA"
    },
    {
        "name": "UEI COLLEGE-SACRAMENTO",
        "location": "SACRAMENTO, CA"
    },
    {
        "name": "MIDWEST BARBER COLLEGE",
        "location": "TOPEKA, KS"
    },
    {
        "name": "EDP UNIVERSITY OF PUERTO RICO-MANATI",
        "location": "MANATI, PR"
    },
    {
        "name": "MICHAEL'S BARBER & HAIR STYLIST ACADEMY",
        "location": "IRVING, TX"
    },
    {
        "name": "STAUTZENBERGER COLLEGE-ROCKFORD CAREER COLLEGE",
        "location": "ROCKFORD, IL"
    },
    {
        "name": "K & G 5 STAR BARBER COLLEGE",
        "location": "LEAGUE CITY, TX"
    },
    {
        "name": "GOULD'S ACADEMY",
        "location": "MEMPHIS, TN"
    },
    {
        "name": "THE SALON PROFESSIONAL ACADEMY-APPLETON",
        "location": "APPLETON, WI"
    },
    {
        "name": "ABCO TECHNOLOGY",
        "location": "INGLEWOOD, CA"
    },
    {
        "name": "STRAYER UNIVERSITY-NEW JERSEY",
        "location": "CHERRY HILL, NJ"
    },
    {
        "name": "CALIFORNIA INSTITUTE OF ADVANCED MANAGEMENT",
        "location": "ALHAMBRA, CA"
    },
    {
        "name": "FLORIDA STATE COLLEGE AT JACKSONVILLE",
        "location": "JACKSONVILLE, FL"
    },
    {
        "name": "CARIBBEAN UNIVERSITY-BAYAMON",
        "location": "BAYAMON, PR"
    },
    {
        "name": "IMAGE MAKER BEAUTY INSTITUTE",
        "location": "HENDERSONVILLE, TN"
    },
    {
        "name": "WESTERN TECHNICAL COLLEGE",
        "location": "EL PASO, TX"
    },
    {
        "name": "ROSS MEDICAL EDUCATION CENTER-LAFAYETTE",
        "location": "LAFAYETTE, IN"
    },
    {
        "name": "HUSSIAN COLLEGE-DAYMAR COLLEGE NASHVILLE",
        "location": "NASHVILLE, TN"
    },
    {
        "name": "NORTHEAST MISSISSIPPI COMMUNITY COLLEGE",
        "location": "BOONEVILLE, MS"
    },
    {
        "name": "SAM HOUSTON STATE UNIVERSITY",
        "location": "HUNTSVILLE, TX"
    },
    {
        "name": "TIDEWATER COMMUNITY COLLEGE",
        "location": "NORFOLK, VA"
    },
    {
        "name": "AVEDA INSTITUTE-DENVER",
        "location": "DENVER, CO"
    },
    {
        "name": "JOLIE HAIR AND BEAUTY ACADEMY-WILKES-BARRE",
        "location": "WILKES BARRE, PA"
    },
    {
        "name": "HELLENIC COLLEGE-HOLY CROSS GREEK ORTHODOX SCHOOL OF THEOLOGY",
        "location": "BROOKLINE, MA"
    },
    {
        "name": "ROSS MEDICAL EDUCATION CENTER-GRANGER",
        "location": "GRANGER, IN"
    },
    {
        "name": "UNIVERSITY OF SCRANTON",
        "location": "SCRANTON, PA"
    },
    {
        "name": "NORTHEASTERN TECHNICAL COLLEGE",
        "location": "CHERAW, SC"
    },
    {
        "name": "TEXAS A&M UNIVERSITY-CORPUS CHRISTI",
        "location": "CORPUS CHRISTI, TX"
    },
    {
        "name": "MIDWEST TECHNICAL INSTITUTE-RIDGELAND",
        "location": "RIDGELAND, MS"
    },
    {
        "name": "BRAND COLLEGE",
        "location": "GLENDALE, CA"
    },
    {
        "name": "HOUSTON BAPTIST UNIVERSITY",
        "location": "HOUSTON, TX"
    },
    {
        "name": "INNOVATE SALON ACADEMY",
        "location": "SOUTH PLAINFIELD, NJ"
    },
    {
        "name": "WASHINGTON AND LEE UNIVERSITY",
        "location": "LEXINGTON, VA"
    },
    {
        "name": "PELLISSIPPI STATE COMMUNITY COLLEGE",
        "location": "KNOXVILLE, TN"
    },
    {
        "name": "NAVARRO COLLEGE",
        "location": "CORSICANA, TX"
    },
    {
        "name": "TINT SCHOOL OF MAKEUP & COSMETOLOGY-SEATTLE",
        "location": "SEATTLE, WA"
    },
    {
        "name": "PAUL MITCHELL THE SCHOOL-TOLEDO",
        "location": "SYLVANIA, OH"
    },
    {
        "name": "AVEDA INSTITUTE-PROVO",
        "location": "PROVO, UT"
    },
    {
        "name": "VAUGHN COLLEGE OF AERONAUTICS AND TECHNOLOGY",
        "location": "FLUSHING, NY"
    },
    {
        "name": "NEW YORK UNIVERSITY",
        "location": "NEW YORK, NY"
    },
    {
        "name": "UNIVERSITY OF CALIFORNIA-SANTA BARBARA",
        "location": "SANTA BARBARA, CA"
    },
    {
        "name": "SHASTA COLLEGE",
        "location": "REDDING, CA"
    },
    {
        "name": "PROVIDENCE CHRISTIAN COLLEGE",
        "location": "PASADENA, CA"
    },
    {
        "name": "SOUTH UNIVERSITY-SAVANNAH ONLINE",
        "location": "SAVANNAH, GA"
    },
    {
        "name": "VILLANOVA UNIVERSITY",
        "location": "VILLANOVA, PA"
    },
    {
        "name": "CENTRAL WASHINGTON UNIVERSITY",
        "location": "ELLENSBURG, WA"
    },
    {
        "name": "SOUTH UNIVERSITY-WEST PALM BEACH",
        "location": "ROYAL PALM BEACH, FL"
    },
    {
        "name": "GEORGETOWN UNIVERSITY",
        "location": "WASHINGTON, DC"
    },
    {
        "name": "WRIGHT BEAUTY ACADEMY",
        "location": "BATTLE CREEK, MI"
    },
    {
        "name": "CRANBROOK ACADEMY OF ART",
        "location": "BLOOMFIELD HILLS, MI"
    },
    {
        "name": "STEVENS INSTITUTE OF TECHNOLOGY",
        "location": "HOBOKEN, NJ"
    },
    {
        "name": "BRYANT & STRATTON COLLEGE-BUFFALO",
        "location": "BUFFALO, NY"
    },
    {
        "name": "FARMINGDALE STATE COLLEGE",
        "location": "FARMINGDALE, NY"
    },
    {
        "name": "MIFFLIN COUNTY ACADEMY OF SCIENCE AND TECHNOLOGY",
        "location": "LEWISTOWN, PA"
    },
    {
        "name": "CENTURA COLLEGE-RICHMOND MAIN",
        "location": "NORTH CHESTERFIELD, VA"
    },
    {
        "name": "ACUPUNCTURE AND MASSAGE COLLEGE",
        "location": "MIAMI, FL"
    },
    {
        "name": "HAIR ACADEMY II",
        "location": "HILLCREST HEIGHTS, MD"
    },
    {
        "name": "QUEST COLLEGE",
        "location": "SAN ANTONIO, TX"
    },
    {
        "name": "NATIONAL BEAUTY COLLEGE",
        "location": "DENVER, CO"
    },
    {
        "name": "UNITED TRIBES TECHNICAL COLLEGE",
        "location": "BISMARCK, ND"
    },
    {
        "name": "PENNSYLVANIA GUNSMITH SCHOOL",
        "location": "PITTSBURGH, PA"
    },
    {
        "name": "GEORGIA INSTITUTE OF COSMETOLOGY",
        "location": "ATHENS, GA"
    },
    {
        "name": "MODERN HAIRSTYLING INSTITUTE-CAROLINA",
        "location": "CAROLINA, PR"
    },
    {
        "name": "MARSHALL B KETCHUM UNIVERSITY",
        "location": "FULLERTON, CA"
    },
    {
        "name": "FORMATIONS INSTITUTE OF COSMETOLOGY & BARBERING",
        "location": "WOODWARD, OK"
    },
    {
        "name": "ENDICOTT COLLEGE",
        "location": "BEVERLY, MA"
    },
    {
        "name": "OMEGA STUDIOS' SCHOOL OF APPLIED RECORDING ARTS & SCIENCES",
        "location": "ROCKVILLE, MD"
    },
    {
        "name": "EMPIRE BEAUTY SCHOOL-SOMERSWORTH",
        "location": "SOMERSWORTH, NH"
    },
    {
        "name": "OHR HAMEIR THEOLOGICAL SEMINARY",
        "location": "PEEKSKILL, NY"
    },
    {
        "name": "UNIVERSITY OF ROCHESTER",
        "location": "ROCHESTER, NY"
    },
    {
        "name": "UNIVERSITY OF MONTEVALLO",
        "location": "MONTEVALLO, AL"
    },
    {
        "name": "OAKWOOD UNIVERSITY",
        "location": "HUNTSVILLE, AL"
    },
    {
        "name": "SALON SUCCESS ACADEMY-CORONA",
        "location": "CORONA, CA"
    },
    {
        "name": "COLUMBUS TECHNICAL COLLEGE",
        "location": "COLUMBUS, GA"
    },
    {
        "name": "UNITED STATES SPORTS ACADEMY",
        "location": "DAPHNE, AL"
    },
    {
        "name": "SUMMIT SALON ACADEMY",
        "location": "ANDERSON, IN"
    },
    {
        "name": "EMPIRE BEAUTY SCHOOL-NASHVILLE",
        "location": "BRENTWOOD, TN"
    },
    {
        "name": "SOUTH UNIVERSITY-AUSTIN",
        "location": "ROUND ROCK, TX"
    },
    {
        "name": "THE UNIVERSITY OF TEXAS AT ARLINGTON",
        "location": "ARLINGTON, TX"
    },
    {
        "name": "SAE INSTITUTE OF TECHNOLOGY-NASHVILLE",
        "location": "NASHVILLE, TN"
    },
    {
        "name": "CLARION UNIVERSITY OF PENNSYLVANIA",
        "location": "CLARION, PA"
    },
    {
        "name": "OHIO DOMINICAN UNIVERSITY",
        "location": "COLUMBUS, OH"
    },
    {
        "name": "SAINT MARY-OF-THE-WOODS COLLEGE",
        "location": "SAINT MARY OF THE WOODS, IN"
    },
    {
        "name": "WEST VIRGINIA UNIVERSITY AT PARKERSBURG",
        "location": "PARKERSBURG, WV"
    },
    {
        "name": "MERCY-ST LUKE'S SCHOOL OF RADIOLOGIC TECHNOLOGY",
        "location": "CEDAR RAPIDS, IA"
    },
    {
        "name": "ATA COLLEGE",
        "location": "TULSA, OK"
    },
    {
        "name": "SCRIPPS COLLEGE",
        "location": "CLAREMONT, CA"
    },
    {
        "name": "CITY COLLEGES OF CHICAGO-HARRY S TRUMAN COLLEGE",
        "location": "CHICAGO, IL"
    },
    {
        "name": "NICHOLLS STATE UNIVERSITY",
        "location": "THIBODAUX, LA"
    },
    {
        "name": "PALO ALTO UNIVERSITY",
        "location": "PALO ALTO, CA"
    },
    {
        "name": "CORTIVA INSTITUTE-CROMWELL",
        "location": "CROMWELL, CT"
    },
    {
        "name": "WILLIAM PENN UNIVERSITY",
        "location": "OSKALOOSA, IA"
    },
    {
        "name": "PHILANDER SMITH COLLEGE",
        "location": "LITTLE ROCK, AR"
    },
    {
        "name": "COLLEGE OF ALAMEDA",
        "location": "ALAMEDA, CA"
    },
    {
        "name": "LINCOLN COLLEGE OF TECHNOLOGY-INDIANAPOLIS",
        "location": "INDIANAPOLIS, IN"
    },
    {
        "name": "CINCINNATI COLLEGE OF MORTUARY SCIENCE",
        "location": "CINCINNATI, OH"
    },
    {
        "name": "CONCORDE CAREER COLLEGE-PORTLAND",
        "location": "PORTLAND, OR"
    },
    {
        "name": "CORINTH ACADEMY OF COSMETOLOGY",
        "location": "CORINTH, MS"
    },
    {
        "name": "PORTER AND CHESTER INSTITUTE OF HAMDEN",
        "location": "HAMDEN, CT"
    },
    {
        "name": "BLADES SCHOOL OF HAIR DESIGN",
        "location": "CALIFORNIA, MD"
    },
    {
        "name": "OAK HILLS CHRISTIAN COLLEGE",
        "location": "BEMIDJI, MN"
    },
    {
        "name": "SOUTHERN UNIVERSITY LAW CENTER",
        "location": "BATON ROUGE, LA"
    },
    {
        "name": "UNION COLLEGE",
        "location": "SCHENECTADY, NY"
    },
    {
        "name": "CHARLES R DREW UNIVERSITY OF MEDICINE AND SCIENCE",
        "location": "LOS ANGELES, CA"
    },
    {
        "name": "INDIAN RIVER STATE COLLEGE",
        "location": "FORT PIERCE, FL"
    },
    {
        "name": "ACADEMY OF HAIR DESIGN-LAS VEGAS",
        "location": "LAS VEGAS, NV"
    },
    {
        "name": "HERKIMER COUNTY BOCES-PRACTICAL NURSING PROGRAM",
        "location": "ILION, NY"
    },
    {
        "name": "TOTALLY COSMO SCHOOL OF MODERN COSMETOLOGY",
        "location": "BROKEN BOW, OK"
    },
    {
        "name": "HCI COLLEGE",
        "location": "WEST PALM BEACH, FL"
    },
    {
        "name": "GADSDEN TECHNICAL INSTITUTE",
        "location": "QUINCY, FL"
    },
    {
        "name": "ROSS COLLEGE-GRAND RAPIDS NORTH",
        "location": "GRAND RAPIDS, MI"
    },
    {
        "name": "FORTIS COLLEGE-CUTLER BAY",
        "location": "CUTLER BAY, FL"
    },
    {
        "name": "AVENUE ACADEMY, A COSMETOLOGY INSTITUTE",
        "location": "ALBUQUERQUE, NM"
    },
    {
        "name": "INSTALLER INSTITUTE",
        "location": "HOLLY HILL, FL"
    },
    {
        "name": "PAUL MITCHELL THE SCHOOL-SAN JOSE",
        "location": "SAN JOSE, CA"
    },
    {
        "name": "COLUMBIA COLLEGE - USCG BASE HONOLULU",
        "location": "HONOLULU, HI"
    },
    {
        "name": "AVEDA INSTITUTE DES MOINES - AVEDA INSTITUTE ROCHESTER",
        "location": "ROCHESTER, MN"
    },
    {
        "name": "ST. JOHN'S COLLEGE",
        "location": "ANNAPOLIS, MD"
    },
    {
        "name": "ULSTER COUNTY COMMUNITY COLLEGE",
        "location": "STONE RIDGE, NY"
    },
    {
        "name": "ALEXANDER ACADEMY",
        "location": "LUNENBURG, MA"
    },
    {
        "name": "PRINCETON THEOLOGICAL SEMINARY",
        "location": "PRINCETON, NJ"
    },
    {
        "name": "WADE GORDON HAIRDRESSING ACADEMY-LUBBOCK",
        "location": "LUBBOCK, TX"
    },
    {
        "name": "CHAMBERLAIN UNIVERSITY-INDIANA",
        "location": "INDIANAPOLIS, IN"
    },
    {
        "name": "STEVENS-HENAGER COLLEGE",
        "location": "OREM, UT"
    },
    {
        "name": "BARBER TECH ACADEMY",
        "location": "ORANGEBURG, SC"
    },
    {
        "name": "PREMIER BARBER INSTITUTE",
        "location": "NORRISTOWN, PA"
    },
    {
        "name": "KENT STATE UNIVERSITY AT EAST LIVERPOOL",
        "location": "EAST LIVERPOOL, OH"
    },
    {
        "name": "COPPER MOUNTAIN COMMUNITY COLLEGE",
        "location": "JOSHUA TREE, CA"
    },
    {
        "name": "PINELLAS TECHNICAL COLLEGE-ST. PETERSBURG",
        "location": "SAINT PETERSBURG, FL"
    },
    {
        "name": "NEWMAN UNIVERSITY",
        "location": "WICHITA, KS"
    },
    {
        "name": "EMPIRE BEAUTY SCHOOL-ELIZABETHTOWN",
        "location": "ELIZABETHTOWN, KY"
    },
    {
        "name": "CONSERVATORY OF MUSIC OF PUERTO RICO",
        "location": "SAN JUAN, PR"
    },
    {
        "name": "ROSEMONT COLLEGE",
        "location": "ROSEMONT, PA"
    },
    {
        "name": "SCIOTO COUNTY CAREER TECHNICAL CENTER",
        "location": "LUCASVILLE, OH"
    },
    {
        "name": "INSTITUTE FOR DOCTORAL STUDIES IN THE VISUAL ARTS",
        "location": "PORTLAND, ME"
    },
    {
        "name": "DENTAL ASSISTANT PRO-LEBANON",
        "location": "LEBANON, OH"
    },
    {
        "name": "NAPA VALLEY COLLEGE",
        "location": "NAPA, CA"
    },
    {
        "name": "NORTHWEST-SHOALS COMMUNITY COLLEGE",
        "location": "MUSCLE SHOALS, AL"
    },
    {
        "name": "MARIAN HEALTH CAREERS CENTER-VAN NUYS CAMPUS",
        "location": "VAN NUYS, CA"
    },
    {
        "name": "CITY COLLEGE-HOLLYWOOD",
        "location": "HOLLYWOOD, FL"
    },
    {
        "name": "PAUL MITCHELL THE SCHOOL-RENO",
        "location": "RENO, NV"
    },
    {
        "name": "TENNESSEE COLLEGE OF APPLIED TECHNOLOGY-COVINGTON",
        "location": "COVINGTON, TN"
    },
    {
        "name": "LETOURNEAU UNIVERSITY",
        "location": "LONGVIEW, TX"
    },
    {
        "name": "STEPHEN F AUSTIN STATE UNIVERSITY",
        "location": "NACOGDOCHES, TX"
    },
    {
        "name": "INDIANA UNIVERSITY-KOKOMO",
        "location": "KOKOMO, IN"
    },
    {
        "name": "EMPIRE BEAUTY SCHOOL-SAVANNAH",
        "location": "SAVANNAH, GA"
    },
    {
        "name": "NEOSHO COUNTY COMMUNITY COLLEGE",
        "location": "CHANUTE, KS"
    },
    {
        "name": "MEDICAL CAREER INSTITUTE",
        "location": "OCEAN, NJ"
    },
    {
        "name": "PLATT COLLEGE-RIVERSIDE",
        "location": "RIVERSIDE, CA"
    },
    {
        "name": "SPARTAN COLLEGE OF AERONAUTICS AND TECHNOLOGY",
        "location": "TULSA, OK"
    },
    {
        "name": "OZARKS TECHNICAL COMMUNITY COLLEGE",
        "location": "SPRINGFIELD, MO"
    },
    {
        "name": "BRYN MAWR COLLEGE",
        "location": "BRYN MAWR, PA"
    },
    {
        "name": "CALIFORNIA TECHNICAL ACADEMY",
        "location": "RIVERSIDE, CA"
    },
    {
        "name": "VISTA COLLEGE",
        "location": "EL PASO, TX"
    },
    {
        "name": "TARLETON STATE UNIVERSITY",
        "location": "STEPHENVILLE, TX"
    },
    {
        "name": "RIVER VALLEY COSMETOLOGY INSTITUTE",
        "location": "POTEAU, OK"
    },
    {
        "name": "BEYOND MEASURE BARBERING INSTITUTE",
        "location": "MEBANE, NC"
    },
    {
        "name": "MCDOUGLE TECHNICAL INSTITUTE",
        "location": "POMPANO BEACH, FL"
    },
    {
        "name": "FIRST COAST BARBER ACADEMY",
        "location": "JACKSONVILLE, FL"
    },
    {
        "name": "DERMAL SCIENCE INTERNATIONAL AESTHETICS AND NAIL ACADEMY",
        "location": "RESTON, VA"
    },
    {
        "name": "THE SOUTHERN BAPTIST THEOLOGICAL SEMINARY",
        "location": "LOUISVILLE, KY"
    },
    {
        "name": "NORTHWESTERN MICHIGAN COLLEGE",
        "location": "TRAVERSE CITY, MI"
    },
    {
        "name": "MIDDLESEX COUNTY COLLEGE",
        "location": "EDISON, NJ"
    },
    {
        "name": "CITRUS HEIGHTS BEAUTY COLLEGE",
        "location": "CITRUS HEIGHTS, CA"
    },
    {
        "name": "CDE CAREER INSTITUTE",
        "location": "TANNERSVILLE, PA"
    },
    {
        "name": "PAUL MITCHELL THE SCHOOL-SACRAMENTO",
        "location": "SACRAMENTO, CA"
    },
    {
        "name": "CHIPOLA COLLEGE",
        "location": "MARIANNA, FL"
    },
    {
        "name": "MURRAY STATE UNIVERSITY",
        "location": "MURRAY, KY"
    },
    {
        "name": "ROSS MEDICAL EDUCATION CENTER-LANSING",
        "location": "LANSING, MI"
    },
    {
        "name": "COX COLLEGE",
        "location": "SPRINGFIELD, MO"
    },
    {
        "name": "SUMMIT CHRISTIAN COLLEGE",
        "location": "GERING, NE"
    },
    {
        "name": "UNIVERSITY SYSTEM OF NEW HAMPSHIRE SYSTEM OFFICE",
        "location": "CONCORD, NH"
    },
    {
        "name": "NATIONAL BEAUTY COLLEGE",
        "location": "CANTON, OH"
    },
    {
        "name": "ROSEMEAD BEAUTY SCHOOL",
        "location": "ROSEMEAD, CA"
    },
    {
        "name": "SACRAMENTO CITY COLLEGE",
        "location": "SACRAMENTO, CA"
    },
    {
        "name": "PROVO COLLEGE",
        "location": "PROVO, UT"
    },
    {
        "name": "CREATIVE IMAGES INSTITUTE OF COSMETOLOGY-NORTH DAYTON",
        "location": "DAYTON, OH"
    },
    {
        "name": "HOLLYWOOD INSTITUTE",
        "location": "MARGATE, FL"
    },
    {
        "name": "INTERCOAST COLLEGES-FAIRFIELD",
        "location": "FAIRFIELD, CA"
    },
    {
        "name": "JOHNSON & WALES UNIVERSITY-NORTH MIAMI",
        "location": "NORTH MIAMI, FL"
    },
    {
        "name": "EPIC BIBLE COLLEGE",
        "location": "SACRAMENTO, CA"
    },
    {
        "name": "MEADVILLE LOMBARD THEOLOGICAL SCHOOL",
        "location": "CHICAGO, IL"
    },
    {
        "name": "MASSACHUSETTS COLLEGE OF LIBERAL ARTS",
        "location": "NORTH ADAMS, MA"
    },
    {
        "name": "SUNY WESTCHESTER COMMUNITY COLLEGE",
        "location": "VALHALLA, NY"
    },
    {
        "name": "PENN COMMERCIAL BUSINESS/TECHNICAL SCHOOL",
        "location": "WASHINGTON, PA"
    },
    {
        "name": "TWIN CITY BEAUTY COLLEGE",
        "location": "SAINT JOSEPH, MI"
    },
    {
        "name": "LIBERTY JUNIOR COLLEGE",
        "location": "CAYEY, PR"
    },
    {
        "name": "COVENANT THEOLOGICAL SEMINARY",
        "location": "SAINT LOUIS, MO"
    },
    {
        "name": "NEW HAMPSHIRE INSTITUTE FOR THERAPEUTIC ARTS",
        "location": "HUDSON, NH"
    },
    {
        "name": "INTER AMERICAN UNIVERSITY OF PUERTO RICO-BAYAMON",
        "location": "BAYAMON, PR"
    },
    {
        "name": "TRIANGLE TECH INC-SUNBURY",
        "location": "SUNBURY, PA"
    },
    {
        "name": "UNIVERSITY OF ARKANSAS FOR MEDICAL SCIENCES",
        "location": "LITTLE ROCK, AR"
    },
    {
        "name": "CELEBRITY STYLIST BEAUTY SCHOOL",
        "location": "MONROE, LA"
    },
    {
        "name": "WESTERN WYOMING COMMUNITY COLLEGE",
        "location": "ROCK SPRINGS, WY"
    },
    {
        "name": "LOS ANGELES PACIFIC UNIVERSITY",
        "location": "SAN DIMAS, CA"
    },
    {
        "name": "HEALING MOUNTAIN MASSAGE SCHOOL",
        "location": "SALT LAKE CITY, UT"
    },
    {
        "name": "SAN JOAQUIN VALLEY COLLEGE-MODESTO",
        "location": "SALIDA, CA"
    },
    {
        "name": "SEMINOLE STATE COLLEGE",
        "location": "SEMINOLE, OK"
    },
    {
        "name": "WENATCHEE VALLEY COLLEGE",
        "location": "WENATCHEE, WA"
    },
    {
        "name": "SIERRA COLLEGE",
        "location": "ROCKLIN, CA"
    },
    {
        "name": "YESHIVATH BETH MOSHE",
        "location": "SCRANTON, PA"
    },
    {
        "name": "URSINUS COLLEGE",
        "location": "COLLEGEVILLE, PA"
    },
    {
        "name": "SANDUSKY CAREER CENTER",
        "location": "SANDUSKY, OH"
    },
    {
        "name": "COGSWELL UNIVERSITY OF SILICON VALLEY",
        "location": "SAN JOSE, CA"
    },
    {
        "name": "COLLEGEAMERICA-DENVER",
        "location": "DENVER, CO"
    },
    {
        "name": "OUACHITA BAPTIST UNIVERSITY",
        "location": "ARKADELPHIA, AR"
    },
    {
        "name": "ROOSEVELT UNIVERSITY",
        "location": "CHICAGO, IL"
    },
    {
        "name": "PRATT COMMUNITY COLLEGE",
        "location": "PRATT, KS"
    },
    {
        "name": "SUL ROSS STATE UNIVERSITY",
        "location": "ALPINE, TX"
    },
    {
        "name": "BELMONT UNIVERSITY",
        "location": "NASHVILLE, TN"
    },
    {
        "name": "MONTEREY PENINSULA COLLEGE",
        "location": "MONTEREY, CA"
    },
    {
        "name": "DE ANZA COLLEGE",
        "location": "CUPERTINO, CA"
    },
    {
        "name": "CENTER FOR INSTRUCTION, TECHNOLOGY & INNOVATION",
        "location": "MEXICO, NY"
    },
    {
        "name": "FRANKLIN TECHNOLOGY CENTER ADULT EDUCATION",
        "location": "JOPLIN, MO"
    },
    {
        "name": "UNIVERSITY OF PHOENIX-WASHINGTON",
        "location": "TUKWILA, WA"
    },
    {
        "name": "THE SALON PROFESSIONAL ACADEMY-BATTLE CREEK",
        "location": "BATTLE CREEK, MI"
    },
    {
        "name": "AMERICAN MEDICAL ACADEMY",
        "location": "MIAMI, FL"
    },
    {
        "name": "PAUL MITCHELL THE SCHOOL-ORLANDO",
        "location": "OVIEDO, FL"
    },
    {
        "name": "JOHNSON & WALES UNIVERSITY-CHARLOTTE",
        "location": "CHARLOTTE, NC"
    },
    {
        "name": "BELLUS ACADEMY-CHULA VISTA",
        "location": "CHULA VISTA, CA"
    },
    {
        "name": "NEWBERRY SCHOOL OF BEAUTY",
        "location": "GRANADA HILLS, CA"
    },
    {
        "name": "RENSSELAER AT HARTFORD",
        "location": "HARTFORD, CT"
    },
    {
        "name": "FROSTBURG STATE UNIVERSITY",
        "location": "FROSTBURG, MD"
    },
    {
        "name": "BAY MILLS COMMUNITY COLLEGE",
        "location": "BRIMLEY, MI"
    },
    {
        "name": "NORTHWEST TECHNICAL COLLEGE",
        "location": "BEMIDJI, MN"
    },
    {
        "name": "BUTTE ACADEMY OF BEAUTY CULTURE",
        "location": "BUTTE, MT"
    },
    {
        "name": "MCDOWELL TECHNICAL COMMUNITY COLLEGE",
        "location": "MARION, NC"
    },
    {
        "name": "LORAINES ACADEMY & SPA",
        "location": "SAINT PETERSBURG, FL"
    },
    {
        "name": "NEVADA CAREER INSTITUTE",
        "location": "LAS VEGAS, NV"
    },
    {
        "name": "CURTIS INSTITUTE OF MUSIC",
        "location": "PHILADELPHIA, PA"
    },
    {
        "name": "PENTECOSTAL THEOLOGICAL SEMINARY",
        "location": "CLEVELAND, TN"
    },
    {
        "name": "CLARKSBURG BEAUTY ACADEMY AND SCHOOL OF MASSAGE THERAPY",
        "location": "CLARKSBURG, WV"
    },
    {
        "name": "GASTON COLLEGE",
        "location": "DALLAS, NC"
    },
    {
        "name": "CARRINGTON COLLEGE-SPOKANE",
        "location": "SPOKANE, WA"
    },
    {
        "name": "YESHIVA SHAAR EPHRAIM",
        "location": "MONSEY, NY"
    },
    {
        "name": "BLUSH SCHOOL OF MAKEUP",
        "location": "SAN FRANCISCO, CA"
    },
    {
        "name": "MYSTROS BARBER ACADEMY",
        "location": "HOUSTON, TX"
    },
    {
        "name": "THE CONTINENTS UNIVERSITY OF ARTS AND SCIENCES",
        "location": "ORLANDO, FL"
    },
    {
        "name": "ARIZONA COLLEGE-DALLAS",
        "location": "DALLAS, TX"
    },
    {
        "name": "THE SALON PROFESSIONAL ACADEMY-WASHINGTON DC",
        "location": "WASHINGTON, DC"
    },
    {
        "name": "WEBB'S BARBER SCHOOL OF ARTS",
        "location": "MACON, GA"
    },
    {
        "name": "AUSTIN PRESBYTERIAN THEOLOGICAL SEMINARY- YMCA OUTDOOR CENTER",
        "location": "ANTIOCH, TN"
    },
    {
        "name": "IDAHO COLLEGE OF OSTEOPATHIC MEDICINE",
        "location": "MERIDIAN, ID"
    },
    {
        "name": "SOUTHERN CAREERS INSTITUTE-WACO",
        "location": "WACO, TX"
    },
    {
        "name": "THE SALON PROFESSIONAL ACADEMY-WASHINGTON DC",
        "location": "WASHINGTON, DC"
    },
    {
        "name": "SUNSTATE ACADEMY-JONES TECHNICAL INSTITUTE",
        "location": "JACKSONVILLE, FL"
    },
    {
        "name": "FORTIS COLLEGE-CUYAHOGA FALLS",
        "location": "CUYAHOGA FALLS, OH"
    },
    {
        "name": "INTERNATIONAL SPORTS SCIENCES ASSOCIATION",
        "location": "CARPINTERIA, CA"
    },
    {
        "name": "HORIZON UNIVERSITY",
        "location": "INDIANAPOLIS, IN"
    },
    {
        "name": "HVAC TECHNICAL INSTITUTE",
        "location": "CHICAGO, IL"
    },
    {
        "name": "DALTON INSTITUTE OF ESTHETICS AND COSMETOLOGY",
        "location": "DALTON, GA"
    },
    {
        "name": "HAIR ACADEMY SCHOOL OF BARBERING & BEAUTY",
        "location": "NEWARK, DE"
    },
    {
        "name": "PROFILE INSTITUTE OF BARBER-STYLING",
        "location": "ATLANTA, GA"
    },
    {
        "name": "PACIFIC RIM CHRISTIAN UNIVERSITY",
        "location": "HONOLULU, HI"
    },
    {
        "name": "PHAGANS CENTRAL OREGON BEAUTY COLLEGE",
        "location": "BEND, OR"
    },
    {
        "name": "PARKER UNIVERSITY",
        "location": "DALLAS, TX"
    },
    {
        "name": "BITTERROOT SCHOOL OF COSMETOLOGY",
        "location": "HAMILTON, MT"
    },
    {
        "name": "EDINBORO UNIVERSITY OF PENNSYLVANIA",
        "location": "EDINBORO, PA"
    },
    {
        "name": "COMMUNITY COLLEGE OF RHODE ISLAND",
        "location": "WARWICK, RI"
    },
    {
        "name": "STRAYER UNIVERSITY-GEORGIA",
        "location": "ATLANTA, GA"
    },
    {
        "name": "BLINN COLLEGE",
        "location": "BRENHAM, TX"
    },
    {
        "name": "ASPIRA CITY COLLEGE",
        "location": "PHILADELPHIA, PA"
    },
    {
        "name": "RASMUSSEN UNIVERSITY-FLORIDA",
        "location": "OCALA, FL"
    },
    {
        "name": "BRITTANY BEAUTY ACADEMY",
        "location": "NEW YORK, NY"
    },
    {
        "name": "IMMACULATA UNIVERSITY",
        "location": "IMMACULATA, PA"
    },
    {
        "name": "GEORGIA STATE UNIVERSITY-PERIMETER COLLEGE",
        "location": "ATLANTA, GA"
    },
    {
        "name": "RIVERSIDE CITY COLLEGE",
        "location": "RIVERSIDE, CA"
    },
    {
        "name": "SAN FRANCISCO STATE UNIVERSITY",
        "location": "SAN FRANCISCO, CA"
    },
    {
        "name": "CUNY STELLA AND CHARLES GUTTMAN COMMUNITY COLLEGE",
        "location": "NEW YORK, NY"
    },
    {
        "name": "UNIVERSITY OF WEST GEORGIA",
        "location": "CARROLLTON, GA"
    },
    {
        "name": "CURVE METRIC SCHOOL OF HAIR DESIGN",
        "location": "ELMWOOD PARK, IL"
    },
    {
        "name": "EAST STROUDSBURG UNIVERSITY OF PENNSYLVANIA",
        "location": "EAST STROUDSBURG, PA"
    },
    {
        "name": "STANLY COMMUNITY COLLEGE",
        "location": "ALBEMARLE, NC"
    },
    {
        "name": "EMPIRE BEAUTY SCHOOL-AUGUSTA",
        "location": "AUGUSTA, GA"
    },
    {
        "name": "CLARK STATE COMMUNITY COLLEGE",
        "location": "SPRINGFIELD, OH"
    },
    {
        "name": "TIFFIN UNIVERSITY",
        "location": "TIFFIN, OH"
    },
    {
        "name": "YORK COLLEGE OF PENNSYLVANIA",
        "location": "YORK, PA"
    },
    {
        "name": "THOMAS JEFFERSON UNIVERSITY",
        "location": "PHILADELPHIA, PA"
    },
    {
        "name": "SOUTHWEST UNIVERSITY AT EL PASO",
        "location": "EL PASO, TX"
    },
    {
        "name": "UNIVERSITY OF NORTH DAKOTA",
        "location": "GRAND FORKS, ND"
    },
    {
        "name": "THE CHICAGO SCHOOL OF PROFESSIONAL PSYCHOLOGY AT ANAHEIM",
        "location": "ANAHEIM, CA"
    },
    {
        "name": "CALIFORNIA NURSES EDUCATIONAL INSTITUTE",
        "location": "PALM SPRINGS, CA"
    },
    {
        "name": "MILAN INSTITUTE-BAKERSFIELD",
        "location": "BAKERSFIELD, CA"
    },
    {
        "name": "BUCKEYE HILLS CAREER CENTER",
        "location": "RIO GRANDE, OH"
    },
    {
        "name": "FULL SAIL UNIVERSITY",
        "location": "WINTER PARK, FL"
    },
    {
        "name": "TRI-COUNTY BEAUTY ACADEMY",
        "location": "LITCHFIELD, IL"
    },
    {
        "name": "MICHIGAN SCHOOL OF PSYCHOLOGY",
        "location": "FARMINGTON HILLS, MI"
    },
    {
        "name": "BERK TRADE AND BUSINESS SCHOOL",
        "location": "LONG ISLAND CITY, NY"
    },
    {
        "name": "SUNY CORTLAND",
        "location": "CORTLAND, NY"
    },
    {
        "name": "WEST COAST ULTRASOUND INSTITUTE",
        "location": "LOS ANGELES, CA"
    },
    {
        "name": "AMERICAN ACADEMY OF ACUPUNCTURE AND ORIENTAL MEDICINE",
        "location": "ROSEVILLE, MN"
    },
    {
        "name": "EASTERN NEW MEXICO UNIVERSITY RUIDOSO BRANCH COMMUNITY COLLEGE",
        "location": "RUIDOSO, NM"
    },
    {
        "name": "MEMPHIS THEOLOGICAL SEMINARY",
        "location": "MEMPHIS, TN"
    },
    {
        "name": "ELLSWORTH COMMUNITY COLLEGE",
        "location": "IOWA FALLS, IA"
    },
    {
        "name": "TRUETT MCCONNELL UNIVERSITY",
        "location": "CLEVELAND, GA"
    },
    {
        "name": "ISABELLA GRAHAM HART SCHOOL OF PRACTICAL NURSING",
        "location": "ROCHESTER, NY"
    },
    {
        "name": "SAINT VLADIMIRS ORTHODOX THEOLOGICAL SEMINARY",
        "location": "YONKERS, NY"
    },
    {
        "name": "MOLER HOLLYWOOD BEAUTY ACADEMY",
        "location": "CINCINNATI, OH"
    },
    {
        "name": "COKER UNIVERSITY",
        "location": "HARTSVILLE, SC"
    },
    {
        "name": "MOUNTAIN STATE COLLEGE",
        "location": "PARKERSBURG, WV"
    },
    {
        "name": "CENTRAL TEXAS BEAUTY COLLEGE-ROUND ROCK",
        "location": "ROUND ROCK, TX"
    },
    {
        "name": "WAKE TECHNICAL COMMUNITY COLLEGE",
        "location": "RALEIGH, NC"
    },
    {
        "name": "BOSTON BAPTIST COLLEGE",
        "location": "BOSTON, MA"
    },
    {
        "name": "UNIVERSITY OF NEVADA-RENO",
        "location": "RENO, NV"
    },
    {
        "name": "TALMUDICAL ACADEMY-NEW JERSEY",
        "location": "ADELPHIA, NJ"
    },
    {
        "name": "UNIVERSITY OF DAYTON",
        "location": "DAYTON, OH"
    },
    {
        "name": "REMINGTON COLLEGE-LITTLE ROCK CAMPUS",
        "location": "LITTLE ROCK, AR"
    },
    {
        "name": "BEACON COLLEGE",
        "location": "LEESBURG, FL"
    },
    {
        "name": "ROXBURY COMMUNITY COLLEGE",
        "location": "ROXBURY CROSSING, MA"
    },
    {
        "name": "MERIDIAN INSTITUTE OF SURGICAL ASSISTING",
        "location": "NASHVILLE, TN"
    },
    {
        "name": "INSTITUTE OF TECHNOLOGY",
        "location": "SALEM, OR"
    },
    {
        "name": "COLORADO MEDIA SCHOOL",
        "location": "LAKEWOOD, CO"
    },
    {
        "name": "BAPTIST UNIVERSITY OF THE AMERICAS",
        "location": "SAN ANTONIO, TX"
    },
    {
        "name": "TENNESSEE COLLEGE OF APPLIED TECHNOLOGY-HARTSVILLE",
        "location": "HARTSVILLE, TN"
    },
    {
        "name": "CHIPPEWA VALLEY TECHNICAL COLLEGE",
        "location": "EAU CLAIRE, WI"
    },
    {
        "name": "LAKE TAHOE COMMUNITY COLLEGE",
        "location": "SOUTH LAKE TAHOE, CA"
    },
    {
        "name": "THOMAS NELSON COMMUNITY COLLEGE",
        "location": "HAMPTON, VA"
    },
    {
        "name": "UNIVERSITY OF SCIENCE AND ARTS OF OKLAHOMA",
        "location": "CHICKASHA, OK"
    },
    {
        "name": "ALLIANCE CAREER CENTER",
        "location": "ALLIANCE, OH"
    },
    {
        "name": "EL CAMINO COMMUNITY COLLEGE DISTRICT",
        "location": "TORRANCE, CA"
    },
    {
        "name": "INTELLITEC COLLEGE-GRAND JUNCTION",
        "location": "GRAND JUNCTION, CO"
    },
    {
        "name": "TENNESSEE COLLEGE OF APPLIED TECHNOLOGY-MCMINNVILLE",
        "location": "MCMINNVILLE, TN"
    },
    {
        "name": "CONCORDIA UNIVERSITY-IRVINE",
        "location": "IRVINE, CA"
    },
    {
        "name": "LA SIERRA UNIVERSITY",
        "location": "RIVERSIDE, CA"
    },
    {
        "name": "CAPRI COLLEGE-DUBUQUE",
        "location": "DUBUQUE, IA"
    },
    {
        "name": "GREAT BAY COMMUNITY COLLEGE",
        "location": "PORTSMOUTH, NH"
    },
    {
        "name": "BECKFIELD COLLEGE-FLORENCE",
        "location": "FLORENCE, KY"
    },
    {
        "name": "NORTHWESTERN POLYTECHNIC UNIVERSITY",
        "location": "FREMONT, CA"
    },
    {
        "name": "REID STATE TECHNICAL COLLEGE",
        "location": "EVERGREEN, AL"
    },
    {
        "name": "UNIVERSITY OF ARKANSAS HOPE-TEXARKANA",
        "location": "HOPE, AR"
    },
    {
        "name": "LINCOLN TECHNICAL INSTITUTE-EAST WINDSOR",
        "location": "EAST WINDSOR, CT"
    },
    {
        "name": "CANADA COLLEGE",
        "location": "REDWOOD CITY, CA"
    },
    {
        "name": "MOUNT MARY UNIVERSITY",
        "location": "MILWAUKEE, WI"
    },
    {
        "name": "YESHIVA KARLIN STOLIN",
        "location": "BROOKLYN, NY"
    },
    {
        "name": "SOUTHWEST SCHOOL OF BUSINESS AND TECHNICAL CAREERS-SAN ANTONIO",
        "location": "SAN ANTONIO, TX"
    },
    {
        "name": "CT AERO TECH SCHOOL",
        "location": "HARTFORD, CT"
    },
    {
        "name": "CITY COLLEGE-ALTAMONTE SPRINGS",
        "location": "ALTAMONTE SPRINGS, FL"
    },
    {
        "name": "ADVANCED BARBER COLLEGE AND HAIR DESIGN",
        "location": "WESLACO, TX"
    },
    {
        "name": "CUNY SYSTEM OFFICE",
        "location": "NEW YORK, NY"
    },
    {
        "name": "PIMA MEDICAL INSTITUTE-ALBUQUERQUE",
        "location": "ALBUQUERQUE, NM"
    },
    {
        "name": "DONGGUK UNIVERSITY LOS ANGELES",
        "location": "LOS ANGELES, CA"
    },
    {
        "name": "BEL-REA INSTITUTE OF ANIMAL TECHNOLOGY",
        "location": "DENVER, CO"
    },
    {
        "name": "COLLEGEAMERICA-FORT COLLINS",
        "location": "FORT COLLINS, CO"
    },
    {
        "name": "ESTELLE MEDICAL ACADEMY",
        "location": "SKOKIE, IL"
    },
    {
        "name": "PJ'S COLLEGE OF COSMETOLOGY-CLARKSVILLE",
        "location": "CLARKSVILLE, IN"
    },
    {
        "name": "CABARRUS COLLEGE OF HEALTH SCIENCES",
        "location": "CONCORD, NC"
    },
    {
        "name": "SUNY BUFFALO STATE",
        "location": "BUFFALO, NY"
    },
    {
        "name": "PHAGANS BEAUTY COLLEGE",
        "location": "CORVALLIS, OR"
    },
    {
        "name": "MR WAYNE'S SCHOOL OF UNISEX HAIR DESIGN",
        "location": "COOKEVILLE, TN"
    },
    {
        "name": "HENDERSON COMMUNITY COLLEGE",
        "location": "HENDERSON, KY"
    },
    {
        "name": "ANNA MARIA COLLEGE",
        "location": "PAXTON, MA"
    },
    {
        "name": "OTTAWA UNIVERSITY-SURPRISE",
        "location": "SURPRISE, AZ"
    },
    {
        "name": "NORTHERN TECHNICAL COLLEGE",
        "location": "PINE BLUFF, AR"
    },
    {
        "name": "STRAND INSTITUTE OF BEAUTY & ESTHETICS",
        "location": "PORTLAND, TX"
    },
    {
        "name": "RED LAKE NATION COLLEGE",
        "location": "RED LAKE, MN"
    },
    {
        "name": "VICTORY CAREER COLLEGE",
        "location": "TORRANCE, CA"
    },
    {
        "name": "TEXAS TECH UNIVERSITY HEALTH SCIENCES CENTER-EL PASO",
        "location": "EL PASO, TX"
    },
    {
        "name": "ADVANTAGE TECHNICAL COLLEGE",
        "location": "SAN JUAN, PR"
    },
    {
        "name": "FAITH THEOLOGICAL SEMINARY AND CHRISTIAN COLLEGE",
        "location": "TAMPA, FL"
    },
    {
        "name": "EMPIRE BEAUTY SCHOOL-S MEMPHIS",
        "location": "MEMPHIS, TN"
    },
    {
        "name": "PAUL MITCHELL THE SCHOOL-TULSA",
        "location": "TULSA, OK"
    },
    {
        "name": "UNITED EDUCATION INSTITUTE-WEST COVINA",
        "location": "WEST COVINA, CA"
    },
    {
        "name": "TRICOCI UNIVERSITY OF BEAUTY CULTURE-ELGIN",
        "location": "ELGIN, IL"
    },
    {
        "name": "NORTH DAKOTA STATE UNIVERSITY",
        "location": "FARGO, ND"
    },
    {
        "name": "BURRELL COLLEGE OF OSTEOPATHIC MEDICINE",
        "location": "LAS CRUCES, NM"
    },
    {
        "name": "UNIVERSITY OF THE PEOPLE",
        "location": "PASADENA, CA"
    },
    {
        "name": "COLLEGE OF SOUTHERN NEVADA",
        "location": "LAS VEGAS, NV"
    },
    {
        "name": "BRIDGERLAND TECHNICAL COLLEGE",
        "location": "LOGAN, UT"
    },
    {
        "name": "UNIVERSITY OF AKRON",
        "location": "AKRON, OH"
    },
    {
        "name": "BRITE DIVINITY SCHOOL",
        "location": "FORT WORTH, TX"
    },
    {
        "name": "THE ART INSTITUTE OF AUSTIN",
        "location": "BASTROP, TX"
    },
    {
        "name": "NORTHCENTRAL TECHNICAL COLLEGE",
        "location": "WAUSAU, WI"
    },
    {
        "name": "ARIZONA WESTERN COLLEGE",
        "location": "YUMA, AZ"
    },
    {
        "name": "PAUL MITCHELL THE SCHOOL-COLUMBIA",
        "location": "COLUMBIA, SC"
    },
    {
        "name": "NEW YORK SCHOOL OF ESTHETICS & DAY SPA",
        "location": "WHITE PLAINS, NY"
    },
    {
        "name": "AVEDA INSTITUTE-TUCSON",
        "location": "TUCSON, AZ"
    },
    {
        "name": "JOLIE HAIR AND BEAUTY ACADEMY-NORTHFIELD",
        "location": "NORTHFIELD, NJ"
    },
    {
        "name": "OREGON INSTITUTE OF TECHNOLOGY",
        "location": "KLAMATH FALLS, OR"
    },
    {
        "name": "LAC COURTE OREILLES OJIBWE COLLEGE",
        "location": "HAYWARD, WI"
    },
    {
        "name": "GORDON COOPER TECHNOLOGY CENTER",
        "location": "SHAWNEE, OK"
    },
    {
        "name": "NUVANI INSTITUTE",
        "location": "SAN ANTONIO, TX"
    },
    {
        "name": "CLEVELAND STATE COMMUNITY COLLEGE",
        "location": "CLEVELAND, TN"
    },
    {
        "name": "FRONTIER COMMUNITY COLLEGE",
        "location": "FAIRFIELD, IL"
    },
    {
        "name": "PAUL MITCHELL THE SCHOOL-LOMBARD",
        "location": "LOMBARD, IL"
    },
    {
        "name": "CALIFORNIA INTERNATIONAL BUSINESS UNIVERSITY",
        "location": "SAN DIEGO, CA"
    },
    {
        "name": "PAUL MITCHELL THE SCHOOL-ARDMORE",
        "location": "ARDMORE, OK"
    },
    {
        "name": "ARIZONA SCHOOL OF INTEGRATIVE STUDIES",
        "location": "TUCSON, AZ"
    },
    {
        "name": "ALL BEAUTY COLLEGE",
        "location": "KINGMAN, AZ"
    },
    {
        "name": "GEORGIA GWINNETT COLLEGE",
        "location": "LAWRENCEVILLE, GA"
    },
    {
        "name": "SOUTHWEST TECHNICAL COLLEGE",
        "location": "CEDAR CITY, UT"
    },
    {
        "name": "SOUTHWEST UNIVERSITY OF VISUAL ARTS-TUCSON",
        "location": "TUCSON, AZ"
    },
    {
        "name": "CONCORDIA UNIVERSITY-CHICAGO",
        "location": "RIVER FOREST, IL"
    },
    {
        "name": "PAUL MITCHELL THE SCHOOL-KNOXVILLE",
        "location": "KNOXVILLE, TN"
    },
    {
        "name": "SPARTAN COLLEGE OF AERONAUTICS AND TECHNOLOGY",
        "location": "BROOMFIELD, CO"
    },
    {
        "name": "CONCORDE CAREER COLLEGE-AURORA",
        "location": "AURORA, CO"
    },
    {
        "name": "FIRST CLASS COSMETOLOGY SCHOOL",
        "location": "BELOIT, WI"
    },
    {
        "name": "L3HARRIS",
        "location": "SANFORD, FL"
    },
    {
        "name": "UNIVERSITY OF LOUISIANA AT MONROE",
        "location": "MONROE, LA"
    },
    {
        "name": "THOMAS COLLEGE",
        "location": "WATERVILLE, ME"
    },
    {
        "name": "MAINE MARITIME ACADEMY",
        "location": "CASTINE, ME"
    },
    {
        "name": "STEVENS-THE INSTITUTE OF BUSINESS & ARTS",
        "location": "SAINT LOUIS, MO"
    },
    {
        "name": "HOFSTRA UNIVERSITY",
        "location": "HEMPSTEAD, NY"
    },
    {
        "name": "MONROE COLLEGE",
        "location": "BRONX, NY"
    },
    {
        "name": "PAUL MITCHELL THE SCHOOL-ST. GEORGE",
        "location": "SAINT GEORGE, UT"
    },
    {
        "name": "EMPIRE BEAUTY SCHOOL-BORDENTOWN",
        "location": "BORDENTOWN, NJ"
    },
    {
        "name": "ALCORN STATE UNIVERSITY",
        "location": "ALCORN STATE, MS"
    },
    {
        "name": "MIDWIVES COLLEGE OF UTAH",
        "location": "SALT LAKE CITY, UT"
    },
    {
        "name": "NEW YORK AUTOMOTIVE AND DIESEL INSTITUTE",
        "location": "JAMAICA, NY"
    },
    {
        "name": "COLLEEN O'HARAS BEAUTY ACADEMY",
        "location": "SANTA ANA, CA"
    },
    {
        "name": "TRICOCI UNIVERSITY OF BEAUTY CULTURE-DANVILLE",
        "location": "DANVILLE, IL"
    },
    {
        "name": "SUFFOLK UNIVERSITY",
        "location": "BOSTON, MA"
    },
    {
        "name": "INTERNATIONAL INSTITUTE OF COSMETOLOGY",
        "location": "WETHERSFIELD, CT"
    },
    {
        "name": "DAVIS COLLEGE",
        "location": "TOLEDO, OH"
    },
    {
        "name": "SOUTHERN SCHOOL OF BEAUTY INC",
        "location": "DURANT, OK"
    },
    {
        "name": "BUTLER BEAUTY ACADEMY-KITTANNING BEAUTY ACADEMY",
        "location": "KITTANNING, PA"
    },
    {
        "name": "MOTORING TECHNICAL TRAINING INSTITUTE",
        "location": "SEEKONK, MA"
    },
    {
        "name": "SPALDING UNIVERSITY",
        "location": "LOUISVILLE, KY"
    },
    {
        "name": "UNIVERSITY OF ST THOMAS",
        "location": "SAINT PAUL, MN"
    },
    {
        "name": "SAINT LOUIS UNIVERSITY",
        "location": "SAINT LOUIS, MO"
    },
    {
        "name": "ADULT AND CONTINUING EDUCATION-BCTS",
        "location": "HACKENSACK, NJ"
    },
    {
        "name": "P B COSMETOLOGY EDUCATION CENTER",
        "location": "GLOUCESTER, NJ"
    },
    {
        "name": "TUSKEGEE UNIVERSITY",
        "location": "TUSKEGEE, AL"
    },
    {
        "name": "TRINITY COLLEGE OF FLORIDA",
        "location": "TRINITY, FL"
    },
    {
        "name": "THE SALON PROFESSIONAL ACADEMY-EVANSVILLE",
        "location": "EVANSVILLE, IN"
    },
    {
        "name": "AMERICAN SCHOOL OF NURSING AND MEDICAL CAREERS",
        "location": "MANCHESTER, NH"
    },
    {
        "name": "KEWEENAW BAY OJIBWA COMMUNITY COLLEGE",
        "location": "BARAGA, MI"
    },
    {
        "name": "PAROBA COLLEGE OF COSMETOLOGY",
        "location": "EVERETT, WA"
    },
    {
        "name": "CABELL COUNTY CAREER TECHNOLOGY CENTER",
        "location": "HUNTINGTON, WV"
    },
    {
        "name": "WEST VIRGINIA JUNIOR COLLEGE-BRIDGEPORT",
        "location": "BRIDGEPORT, WV"
    },
    {
        "name": "ALTIERUS CAREER COLLEGE-NORCROSS",
        "location": "NORCROSS, GA"
    },
    {
        "name": "HUSSIAN COLLEGE-DAYMAR COLLEGE MURFREESBORO",
        "location": "MURFREESBORO, TN"
    },
    {
        "name": "WESTERN TECHNICAL COLLEGE",
        "location": "LA CROSSE, WI"
    },
    {
        "name": "COLLEGE OF MARIN",
        "location": "KENTFIELD, CA"
    },
    {
        "name": "KANKAKEE COMMUNITY COLLEGE",
        "location": "KANKAKEE, IL"
    },
    {
        "name": "JENKS BEAUTY COLLEGE",
        "location": "JENKS, OK"
    },
    {
        "name": "SEATTLE UNIVERSITY",
        "location": "SEATTLE, WA"
    },
    {
        "name": "PAUL MITCHELL THE SCHOOL-HOUSTON",
        "location": "HOUSTON, TX"
    },
    {
        "name": "CADDO KIOWA TECHNOLOGY CENTER",
        "location": "FORT COBB, OK"
    },
    {
        "name": "SUNSTATE ACADEMY",
        "location": "CLEARWATER, FL"
    },
    {
        "name": "VALLEY COLLEGE OF MEDICAL CAREERS",
        "location": "WEST HILLS, CA"
    },
    {
        "name": "FLETCHER TECHNICAL COMMUNITY COLLEGE",
        "location": "SCHRIEVER, LA"
    },
    {
        "name": "BOWDOIN COLLEGE",
        "location": "BRUNSWICK, ME"
    },
    {
        "name": "LEX LA-RAY TECHNICAL CENTER",
        "location": "LEXINGTON, MO"
    },
    {
        "name": "ACADEMY FOR NURSING AND HEALTH OCCUPATIONS",
        "location": "WEST PALM BEACH, FL"
    },
    {
        "name": "THE KING'S COLLEGE",
        "location": "NEW YORK, NY"
    },
    {
        "name": "WEST LOS ANGELES COLLEGE",
        "location": "CULVER CITY, CA"
    },
    {
        "name": "PRAIRIE STATE COLLEGE",
        "location": "CHICAGO HEIGHTS, IL"
    },
    {
        "name": "MIDDLE TENNESSEE STATE UNIVERSITY",
        "location": "MURFREESBORO, TN"
    },
    {
        "name": "NORFOLK STATE UNIVERSITY",
        "location": "NORFOLK, VA"
    },
    {
        "name": "SAINT JOHN FISHER COLLEGE",
        "location": "ROCHESTER, NY"
    },
    {
        "name": "LENAPE TECHNICAL SCHOOL PRACTICAL NURSING PROGRAM",
        "location": "FORD CITY, PA"
    },
    {
        "name": "CARVER CAREER CENTER",
        "location": "CHARLESTON, WV"
    },
    {
        "name": "MOLER BARBER COLLEGE",
        "location": "OAKLAND, CA"
    },
    {
        "name": "LUTHERAN SCHOOL OF THEOLOGY AT CHICAGO",
        "location": "CHICAGO, IL"
    },
    {
        "name": "RUST COLLEGE",
        "location": "HOLLY SPRINGS, MS"
    },
    {
        "name": "MARTIN COMMUNITY COLLEGE",
        "location": "WILLIAMSTON, NC"
    },
    {
        "name": "HAWAII COMMUNITY COLLEGE",
        "location": "HILO, HI"
    },
    {
        "name": "COE COLLEGE",
        "location": "CEDAR RAPIDS, IA"
    },
    {
        "name": "WESTERN NEW MEXICO UNIVERSITY",
        "location": "SILVER CITY, NM"
    },
    {
        "name": "NEW YORK CHIROPRACTIC COLLEGE",
        "location": "SENECA FALLS, NY"
    },
    {
        "name": "THE SALON PROFESSIONAL ACADEMY-ALTOONA",
        "location": "ALTOONA, PA"
    },
    {
        "name": "IONA COLLEGE",
        "location": "NEW ROCHELLE, NY"
    },
    {
        "name": "ANOUSHEH SCHOOL OF HAIR",
        "location": "BINGHAMTON, NY"
    },
    {
        "name": "FALCON INSTITUTE OF HEALTH AND SCIENCE",
        "location": "BETHLEHEM, PA"
    },
    {
        "name": "WELLSPRING SCHOOL OF ALLIED HEALTH-WICHITA",
        "location": "WICHITA, KS"
    },
    {
        "name": "ALDER GRADUATE SCHOOL OF EDUCATION",
        "location": "REDWOOD CITY, CA"
    },
    {
        "name": "KENNY'S BEAUTY ACADEMY",
        "location": "ARLINGTON, VA"
    },
    {
        "name": "YESHIVA OF OCEAN",
        "location": "GREENFIELD PARK, NY"
    },
    {
        "name": "SHEAR PERFECTION ACADEMY OF COSMETOLOGY",
        "location": "NASHVILLE, TN"
    },
    {
        "name": "HIGH DESERT MEDICAL COLLEGE - TEMECULA",
        "location": "TEMECULA, CA"
    },
    {
        "name": "ESTEEM ACADEMY OF BEAUTY",
        "location": "SOUTH OGDEN, UT"
    },
    {
        "name": "XTYLO BEAUTY COLLEGE",
        "location": "PHOENIX, AZ"
    },
    {
        "name": "URBAN BARBER COLLEGE - SAN JOSE",
        "location": "SAN JOSE, CA"
    }
]

export default universities;
