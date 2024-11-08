import { useEffect, useState } from "react"
import "./App.css"


function App() {
  /* fetch("http://tools.lawandtranslation.com/align/martaricsi/32016R0679/HU/EN")
  .then(res => res.json())
  .then(req => ) */

  const [data, setData] = useState(null)
  let [lang, setLang] = useState("EN")
  useEffect(() => {
    setData({
      "TUs": [
        {
          "EN": "4.5.2016 EN",
          "HU": "4.5.2016 HU"
        },
        {
          "EN": "Official Journal of the European Union",
          "HU": "Az Európai Unió Hivatalos Lapja"
        },
        {
          "EN": "L 119/1",
          "HU": "L 119/1"
        },
        {
          "EN": "___________________________________________________________________________",
          "HU": "___________________________________________________________________________"
        },
        {
          "EN": "REGULATION (EU) 2016/679 OF THE EUROPEAN PARLIAMENT AND OF THE COUNCIL",
          "HU": "AZ EURÓPAI PARLAMENT ÉS A TANÁCS (EU) 2016/679 RENDELETE"
        },
        {
          "EN": "of 27 April 2016",
          "HU": "(2016. április 27.)"
        },
        {
          "EN": "on the protection of natural persons with regard to the processing of personal data and on the free movement of such data, and repealing Directive 95/46/EC (General Data Protection Regulation)",
          "HU": "a természetes személyeknek a személyes adatok kezelése tekintetében történő védelméről és az ilyen adatok szabad áramlásáról, valamint a 95/46/EK rendelet hatályon kívül helyezéséről (általános adatvédelmi rendelet)"
        },
        {
          "EN": "(Text with EEA relevance)",
          "HU": "(EGT-vonatkozású szöveg)"
        },
        {
          "EN": "THE EUROPEAN PARLIAMENT AND THE COUNCIL OF THE EUROPEAN UNION,",
          "HU": "AZ EURÓPAI PARLAMENT ÉS AZ EURÓPAI UNIÓ TANÁCSA,"
        },
        {
          "EN": "Having regard to the Treaty on the Functioning of the European Union, and in particular Article 16 thereof,",
          "HU": "tekintettel az Európai Unió működéséről szóló szerződésre és különösen annak 16. cikkére,"
        },
        {
          "EN": "Having regard to the proposal from the European Commission,",
          "HU": "tekintettel az Európai Bizottság javaslatára,"
        },
        {
          "EN": "After transmission of the draft legislative act to the national parliaments,",
          "HU": "a jogalkotási aktus tervezete nemzeti parlamenteknek való megküldését követően,"
        },
        {
          "EN": "Having regard to the opinion of the European Economic and Social Committee [1](1),",
          "HU": "tekintettel az Európai Gazdasági és Szociális Bizottság véleményére [1](1),"
        },
        {
          "EN": "Having regard to the opinion of the Committee of the Regions [2](2),",
          "HU": "tekintettel a Régiók Bizottságának véleményére [2](2),"
        },
        {
          "EN": "Acting in accordance with the ordinary legislative procedure [3](3),",
          "HU": "rendes jogalkotási eljárás keretében [3](3),"
        },
        {
          "EN": "Whereas:",
          "HU": "mivel:"
        },
        {
          "EN": "(1) The protection of natural persons in relation to the processing of personal data is a fundamental right.",
          "HU": "(1) A természetes személyek személyes adataik kezelésével összefüggő védelme alapvető jog."
        },
        {
          "EN": "Article 8(1) of the Charter of Fundamental Rights of the European Union (the ‘Charter’) and Article 16(1) of the Treaty on the Functioning of the European Union (TFEU) provide that everyone has the right to the protection of personal data concerning him or her.",
          "HU": "Az Európai Unió Alapjogi Chartája (Charta) 8. cikkének (1) bekezdése és az Európai Unió működéséről szóló szerződés (EUMSZ) 16. cikkének (1) bekezdése rögzíti, hogy mindenkinek joga van a rá vonatkozó személyes adatok védelméhez."
        },
        {
          "EN": "(2) The principles of, and rules on the protection of natural persons with regard to the processing of their personal data should, whatever their nationality or residence, respect their fundamental rights and freedoms, in particular their right to the protection of personal data.",
          "HU": "(2) A természetes személyek személyes adataik kezelésével összefüggő védelméhez kapcsolódó elvek és szabályok a természetes személyek állampolgárságától és lakóhelyétől függetlenül tiszteletben tartják e természetes személyek alapvető jogait és szabadságait, különösen, ami a személyes adataik védelméhez való jogukat illeti."
        },
        {
          "EN": "This Regulation is intended to contribute to the accomplishment of an area of freedom, security and justice and of an economic union, to economic and social progress, to the strengthening and the convergence of the economies within the internal market, and to the well-being of natural persons.",
          "HU": "Ez hozzájárul a szabadságon, a biztonságon és a jog érvényesülésén alapuló térség, valamint a gazdasági unió megteremtéséhez, a gazdasági és társadalmi fejlődéshez, a belső piacon belüli gazdaságok erősödéséhez és konvergenciájához, valamint a természetes személyek jólétéhez."
        },
        {
          "EN": "(3) Directive 95/46/EC of the European Parliament and of the Council [4](4) seeks to harmonise the protection of fundamental rights and freedoms of natural persons in respect of processing activities and to ensure the free flow of personal data between Member States.",
          "HU": "(3) A 95/46/EK európai parlamenti és tanácsi irányelv [4](4) célja, hogy harmonizálja az adatkezelési tevékenységek tekintetében a természetes személyek alapvető jogainak és szabadságainak védelmét, valamint, hogy biztosítsa a személyes adatok tagállamok közötti szabad áramlását."
        },
        {
          "EN": "(4) The processing of personal data should be designed to serve mankind.",
          "HU": "(4) A személyes adatok kezelését az emberiség szolgálatába kell állítani."
        },
        {
          "EN": "The right to the protection of personal data is not an absolute right; it must be considered in relation to its function in society and be balanced against other fundamental rights, in accordance with the principle of proportionality.",
          "HU": "A személyes adatok védelméhez való jog nem abszolút jog, azt az arányosság elvével összhangban, a társadalomban betöltött szerepének függvényében kell figyelembe venni, egyensúlyban más alapvető jogokkal."
        },
        {
          "EN": "This Regulation respects all fundamental rights and observes the freedoms and principles recognised in the Charter as enshrined in the Treaties, in particular the respect for private and family life, home and communications, the protection of personal data, freedom of thought, conscience and religion, freedom of expression and information, freedom to conduct a business, the right to an effective remedy and to a fair trial, and cultural, religious and linguistic diversity.",
          "HU": "Ez a rendelet minden alapvető jogot tiszteletben tart, és szem előtt tartja a Chartában elismert és a Szerződésekben rögzített szabadságokat és elveket, különösen ami a magán- és a családi élet, az otthon és a kapcsolattartás tiszteletben tartásához és a személyes adatok védelméhez, a gondolat-, a lelkiismeret- és a vallásszabadsághoz, a véleménynyilvánítás szabadságához és a tájékozódás szabadságához, a vállalkozás szabadságához, a hatékony jogorvoslathoz és a tisztességes eljáráshoz, és a kulturális, vallási és nyelvi sokféleséghez való jogot illeti."
        },
        {
          "EN": "(5) The economic and social integration resulting from the functioning of the internal market has led to a substantial increase in cross-border flows of personal data.",
          "HU": "(5) A belső piac működéséből eredő gazdasági és társadalmi integráció lényegesen megnövelte a személyes adatok határokon átnyúló áramlását."
        },
        {
          "EN": "The exchange of personal data between public and private actors, including natural persons, associations and undertakings across the Union has increased.",
          "HU": "Megnövekedett az állami és a magánszereplők, köztük a természetes személyek, egyesületek és a vállalkozások között Unió-szerte zajló személyes adatok cseréje."
        },
        {
          "EN": "National authorities in the Member States are being called upon by Union law to cooperate and exchange personal data so as to be able to perform their duties or carry out tasks on behalf of an authority in another Member State.",
          "HU": "Az uniós jog együttműködésre és személyes adatok cseréjére kötelezi tagállamok nemzeti hatóságait annak érdekében, hogy képesek legyenek feladataikat ellátni, illetve hogy más tagállam hatóságai nevében eljárjanak."
        },
        {
          "EN": "(6) Rapid technological developments and globalisation have brought new challenges for the protection of personal data.",
          "HU": "(6) A gyors technológiai fejlődés és a globalizáció új kihívások elé állította a személyes adatok védelmét."
        },
        {
          "EN": "The scale of the collection and sharing of personal data has increased significantly.",
          "HU": "A személyes adatok gyűjtése és megosztása jelentős mértékben megnőtt."
        },
        {
          "EN": "Technology allows both private companies and public authorities to make use of personal data on an unprecedented scale in order to pursue their activities.",
          "HU": "A technológia a vállalkozások és a közhatalmi szervek számára tevékenységük folytatásához a személyes adatok felhasználását minden eddiginél nagyobb mértékben lehetővé teszi."
        },
        {
          "EN": "Natural persons increasingly make personal information available publicly and globally.",
          "HU": "Az emberek egyre nagyobb mértékben hoznak nyilvánosságra és tesznek globális szinten elérhetővé személyes adatokat."
        },
        {
          "EN": "Technology has transformed both the economy and social life, and should further facilitate the free flow of personal data within the Union and the transfer to third countries and international organisations, while ensuring a high level of the protection of personal data.",
          "HU": "A technológia egyaránt átalakította a gazdasági és a társadalmi életet, és egyre inkább elősegíti a személyes adatok Unión belüli szabad áramlását és a személyes adatok harmadik országok és nemzetközi szervezetek részére történő továbbítását, biztosítva egyúttal a személyes adatok magas szintű védelmét."
        },
        {
          "EN": "(7) Those developments require a strong and more coherent data protection framework in the Union, backed by strong enforcement, given the importance of creating the trust that will allow the digital economy to develop across the internal market.",
          "HU": "(7) E fejlemények egy olyan szilárd és az eddiginél következetesebb uniós adatvédelmi keretet igényelnek, amelyet erős kikényszeríthetőség támogat, hiszen a bizalom megteremtése fontos a digitális gazdaság belső piaci fejlődéséhez."
        },
        {
          "EN": "Natural persons should have control of their own personal data.",
          "HU": "A természetes személyek számára biztosítani kell, hogy saját személyes adataik felett maguk rendelkezzenek."
        },
        {
          "EN": "Legal and practical certainty for natural persons, economic operators and public authorities should be enhanced.",
          "HU": "A természetes személyek, a gazdasági szereplők és a közhatalmi szervek számára a jogbiztonságot és a gyakorlati biztonságot fokozni kell."
        },
        {
          "EN": "(8) Where this Regulation provides for specifications or restrictions of its rules by Member State law, Member States may, as far as necessary for coherence and for making the national provisions comprehensible to the persons to whom they apply, incorporate elements of this Regulation into their national law.",
          "HU": "(8) Ha e rendelet úgy rendelkezik, hogy a benne foglalt szabályokat tagállami jog által pontosítani, illetve korlátozni lehet, a tagállamok e rendelet egyes elemeit beépíthetik a nemzeti jogukba, ha az a koherencia biztosításához, valamint ahhoz szükséges, hogy a nemzeti rendelkezések a hatályuk alá tartozó személyek számára érthetők legyenek."
        },
        {
          "EN": "(9) The objectives and principles of Directive 95/46/EC remain sound, but it has not prevented fragmentation in the implementation of data protection across the Union, legal uncertainty or a widespread public perception that there are significant risks to the protection of natural persons, in particular with regard to online activity.",
          "HU": "(9) A 95/46/EK irányelv célkitűzései és elvei továbbra is érvényesek, azonban az irányelv nem akadályozta meg sem azt, hogy az Unió tagállamaiban az adatvédelem végrehajtása széttagolt módon valósuljon meg, sem a jogbizonytalanságot, sem pedig azt, hogy széles körben az a benyomás alakuljon ki, hogy természetes személy védelme – különösen az online tevékenységek esetében – jelentős kockázatoknak van kitéve."
        },
        {
          "EN": "Differences in the level of protection of the rights and freedoms of natural persons, in particular the right to the protection of personal data, with regard to the processing of personal data in the Member States may prevent the free flow of personal data throughout the Union.",
          "HU": "Az a tény, hogy a személyes adatok kezelése tekintetében a természetes személyek jogai és szabadságai egyes tagállamokban eltérő szintű védelmet élveznek, különösen, ami személyes adatok védelméhez való jogot illeti, a személyes adatok Unióban történő szabad áramlásának útjában állhat."
        },
        {
          "EN": "Those differences may therefore constitute an obstacle to the pursuit of economic activities at the level of the Union, distort competition and impede authorities in the discharge of their responsibilities under Union law.",
          "HU": "Ebből eredően ezek az eltérések a gazdasági tevékenységek uniós szinten való folytatásának akadályát képezhetik, torzíthatják a versenyt, és hátráltathatják a hatóságokat az uniós jog szerinti feladataik ellátásában."
        },
        {
          "EN": "Such a difference in levels of protection is due to the existence of differences in the implementation and application of Directive 95/46/EC.",
          "HU": "A jogok és szabadságok védelmi szintjében mutatkozó ilyen eltérések a 95/46/EK irányelv végrehajtásában és alkalmazásában fennálló eltérésekre vezethetők vissza."
        },
        {
          "EN": "(10) In order to ensure a consistent and high level of protection of natural persons and to remove the obstacles to flows of personal data within the Union, the level of protection of the rights and freedoms of natural persons with regard to the processing of such data should be equivalent in all Member States.",
          "HU": "(10) A természetes személyek következetes és magas szintű védelmének biztosítása és a személyes adatok Unión belüli áramlása előtti akadályok elhárítása érdekében a természetes személyeknek az ilyen adatok kezelésével összefüggésben fennálló jogait és szabadságait minden tagállamban azonos szintű védelemben kell részesíteni."
        },
        {
          "EN": "Consistent and homogenous application of the rules for the protection of the fundamental rights and freedoms of natural persons with regard to the processing of personal data should be ensured throughout the Union.",
          "HU": "A természetes személyeknek a személyes adataik kezeléséhez kapcsolódó alapvető jogai és szabadságai védelmére vonatkozó szabályok következetes és egységes alkalmazását az Unió egész területén biztosítani kell."
        },
        {
          "EN": "Regarding the processing of personal data for compliance with a legal obligation, for the performance of a task carried out in the public interest or in the exercise of official authority vested in the controller, Member States should be allowed to maintain or introduce national provisions to further specify the application of the rules of this Regulation.",
          "HU": "A tagállamok számára lehetővé kell tenni, hogy az e rendeletben foglalt szabályok alkalmazását pontosító nemzeti rendelkezéseket tartsanak fenn vagy vezessenek be, ha a személyes adatok kezelésére jogi kötelezettség teljesítéséhez, illetve közérdekből vagy az adatkezelőre ruházott közhatalmi jogosítvány gyakorlása keretében végzett feladat végrehajtásához szükséges."
        },
        {
          "EN": "In conjunction with the general and horizontal law on data protection implementing Directive 95/46/EC, Member States have several sector-specific laws in areas that need more specific provisions.",
          "HU": "A 95/46/EK irányelvet végrehajtó általános és horizontális adatvédelmi jogszabályokhoz kapcsolódóan a tagállamok számos ágazatspecifikus jogszabályt hoztak azokon a területeken, ahol konkrétabb rendelkezésekre van szükség."
        },
        {
          "EN": "This Regulation also provides a margin of manoeuvre for Member States to specify its rules, including for the processing of special categories of personal data (‘sensitive data’).",
          "HU": "Ez a rendelet a tagállamok számára mozgásteret biztosít ahhoz, hogy pontosítsák a benne meghatározott szabályokat, ideértve a személyes adatok különleges kategóriáira („különleges adatok”) vonatkozókat is."
        },
        {
          "EN": "To that extent, this Regulation does not exclude Member State law that sets out the circumstances for specific processing situations, including determining more precisely the conditions under which the processing of personal data is lawful.",
          "HU": "Ennyiben tehát ez a rendelet nem zárja ki olyan tagállami jog elfogadását, amely meghatározza a különleges adatkezelési helyzetek körülményeit, ezen belül pontosabban megállapítja, hogy milyen feltételek mellett jogszerű a személyes adatok kezelése."
        },
        {
          "EN": "(11) Effective protection of personal data throughout the Union requires the strengthening and setting out in detail of the rights of data subjects and the obligations of those who process and determine the processing of personal data, as well as equivalent powers for monitoring and ensuring compliance with the rules for the protection of personal data and equivalent sanctions for infringements in the Member States.",
          "HU": "(11) Ahhoz, hogy a személyes adatok az Unió egész területén hatékony védelemben részesüljenek, az érintettek jogait, valamint a személyes adatokat kezelő, illetve az adatkezelést meghatározó személyek kötelezettségeit megerősíteni és részletesen meghatározni szükséges, ugyanakkor pedig az egyes tagállamokban a személyes adatok védelmére vonatkozó szabályok betartásának ellenőrzéséhez és biztosításához egyenértékű hatáskört is biztosítani szükséges, és a jogsértőkre azonos szankciókat kell alkalmazni."
        },
        {
          "EN": "(12) Article 16(2) TFEU mandates the European Parliament and the Council to lay down the rules relating to the protection of natural persons with regard to the processing of personal data and the rules relating to the free movement of personal data.",
          "HU": "(12) Az EUMSZ 16. cikkének (2) bekezdése felhatalmazza az Európai Parlamentet és a Tanácsot a természetes személyeknek a személyes adatok kezelése tekintetében történő védelmére és a személyes adatok szabad áramlására vonatkozó szabályok megállapítására."
        },
        {
          "EN": "(13) In order to ensure a consistent level of protection for natural persons throughout the Union and to prevent divergences hampering the free movement of personal data within the internal market, a Regulation is necessary to provide legal certainty and transparency for economic operators, including micro, small and medium-sized enterprises, and to provide natural persons in all Member States with the same level of legally enforceable rights and obligations and responsibilities for controllers and processors, to ensure consistent monitoring of the processing of personal data, and equivalent sanctions in all Member States as well as effective cooperation between the supervisory authorities of different Member States.",
          "HU": "(13) A természetes személyek egységes, uniós-szintű védelmének biztosítása, valamint a személyes adatok belső piacon való szabad áramlását akadályozó eltérések megelőzése érdekében rendelettel kell biztosítani a jogbiztonságot és az áttekinthetőséget valamennyi tagállam gazdasági szereplői részére – beleértve a mikro-, kis- és középvállalkozásokat is –, továbbá rendelettel kell biztosítani a természetes személyek részére minden tagállamban azonos szintű, jogi úton érvényesíthető jogokat és kötelezettségeket, az adatkezelők és adatfeldolgozók számára azonos felelősséget, a személyes adatok kezelésének következetes nyomon követését, valamennyi tagállamban azonos szankciók alkalmazását, és a különböző tagállamok felügyeleti hatóságai közötti hatékony együttműködést."
        },
        {
          "EN": "The proper functioning of the internal market requires that the free movement of personal data within the Union is not restricted or prohibited for reasons connected with the protection of natural persons with regard to the processing of personal data.",
          "HU": "A belső piac megfelelő működése érdekében a személyes adatok Unión belüli szabad áramlását a természetes személyeknek a személyes adatok kezelése tekintetében történő védelmével összefüggő okokból nem szabad korlátozni vagy megtiltani."
        },
        {
          "EN": "To take account of the specific situation of micro, small and medium-sized enterprises, this Regulation includes a derogation for organisations with fewer than 250 employees with regard to record-keeping.",
          "HU": "A mikro-, kis- és középvállalkozások sajátos helyzetének figyelembevétele érdekében a 250 főnél kevesebb személyt foglalkoztató szervezetek esetében e rendelet a nyilvántartás vezetése tekintetében eltérést tartalmaz."
        },
        {
          "EN": "In addition, the Union institutions and bodies, and Member States and their supervisory authorities, are encouraged to take account of the specific needs of micro, small and medium-sized enterprises in the application of this Regulation.",
          "HU": "Emellett, e rendelet alkalmazása során az uniós intézményeket és szerveket, és a tagállamokat és azok felügyeleti hatóságait ösztönözni kell, hogy vegyék figyelembe a mikro-, kis- és középvállalkozások sajátos szükségleteit."
        },
        {
          "EN": "The notion of micro, small and medium-sized enterprises should draw from Article 2 of the Annex to Commission Recommendation 2003/361/EC [5](5).",
          "HU": "A mikro-, kis- és középvállalkozások fogalma kapcsán a 2003/361/EK bizottsági ajánlás [5](5) mellékletének 2. cikkét kell alapul venni."
        },
        {
          "EN": "(14) The protection afforded by this Regulation should apply to natural persons, whatever their nationality or place of residence, in relation to the processing of their personal data.",
          "HU": "(14) A természetes személyeket a személyes adataik kezelésével kapcsolatban e rendelet alapján nyújtott védelem állampolgárságuktól és lakóhelyüktől függetlenül megilleti."
        },
        {
          "EN": "This Regulation does not cover the processing of personal data which concerns legal persons and in particular undertakings established as legal persons, including the name and the form of the legal person and the contact details of the legal person.",
          "HU": "E rendelet hatálya nem terjed ki az olyan személyes adatkezelésre, amely jogi személyekre, illetve amely különösen olyan vállalkozásokra vonatkozik, amelyeket jogi személyként hoztak létre, beleértve a jogi személy nevét és formáját, valamint a jogi személy elérhetőségére vonatkozó adatokat."
        },
        {
          "EN": "(15) In order to prevent creating a serious risk of circumvention, the protection of natural persons should be technologically neutral and should not depend on the techniques used.",
          "HU": "(15) A komoly szabály-kerülési kockázat veszélyének elkerülése érdekében a természetes személyek védelmének technológiailag semlegesnek kell lennie és nem függhet a felhasznált technikai megoldásoktól."
        },
        {
          "EN": "The protection of natural persons should apply to the processing of personal data by automated means, as well as to manual processing, if the personal data are contained or are intended to be contained in a filing system.",
          "HU": "A természetes személyek védelme a személyes adatok automatizált eszközök útján végzett kezelése mellett a manuális kezelésre is vonatkozik, ha a személyes adatokat nyilvántartási rendszerben tárolják vagy kívánják tárolni."
        },
        {
          "EN": "Files or sets of files, as well as their cover pages, which are not structured according to specific criteria should not fall within the scope of this Regulation.",
          "HU": "Olyan iratok, illetve iratok csoportjai, és azok borítóoldalai, amelyek nem rendszerezettek meghatározott szempontok szerint, nem tartoznak e rendelet hatálya alá."
        },
        {
          "EN": "(16) This Regulation does not apply to issues of protection of fundamental rights and freedoms or the free flow of personal data related to activities which fall outside the scope of Union law, such as activities concerning national security.",
          "HU": "(16) E rendelet nem vonatkozik az alapvető jogok és szabadságok olyan tevékenységekkel kapcsolatos védelmére, illetve a személyes adatok olyan tevékenységekkel kapcsolatos szabad áramlására, amelyek az uniós jog hatályán kívül esnek, mint például a nemzetbiztonsággal kapcsolatos tevékenységek."
        },
        {
          "EN": "This Regulation does not apply to the processing of personal data by the Member States when carrying out activities in relation to the common foreign and security policy of the Union.",
          "HU": "Nem tartozik e rendelet hatálya alá a tagállamok által olyan tevékenységek keretében végzett személyes adatok kezelése sem, amelyeket a tagállamok az Unió közös kül- és biztonságpolitikájával összefüggésben végeznek."
        },
        {
          "EN": "(17) Regulation (EC) No 45/2001 of the European Parliament and of the Council [6](6) applies to the processing of personal data by the Union institutions, bodies, offices and agencies.",
          "HU": "(17) A személyes adatok uniós intézmények, szervek, hivatalok és ügynökségek általi kezelésére a 45/2001/EK európai parlamenti és tanácsi rendelet [6](6) vonatkozik."
        },
        {
          "EN": "Regulation (EC) No 45/2001 and other Union legal acts applicable to such processing of personal data should be adapted to the principles and rules established in this Regulation and applied in the light of this Regulation.",
          "HU": "A 45/2001/EK rendeletet, valamint a személyes adatok ilyen kezelésére vonatkozó egyéb uniós jogi aktusokat az e rendeletben foglalt elvekhez és szabályokhoz hozzá kell igazítani, és e rendelet fényében kell alkalmazni."
        },
        {
          "EN": "In order to provide a strong and coherent data protection framework in the Union, the necessary adaptations of Regulation (EC) No 45/2001 should follow after the adoption of this Regulation, in order to allow application at the same time as this Regulation.",
          "HU": "Annak érdekében, hogy az Unióban szigorú és koherens adatvédelmi keret jöjjön létre és annak érdekében, hogy e két jogszabály alkalmazása egy időben kezdődhessen meg, e rendelet elfogadását a 45/2001/EK rendelet szükséges kiigazítása követi."
        },
        {
          "EN": "(18) This Regulation does not apply to the processing of personal data by a natural person in the course of a purely personal or household activity and thus with no connection to a professional or commercial activity.",
          "HU": "(18) Ez a rendelet nem alkalmazandó a személyes adatoknak a természetes személy által kizárólag személyes vagy otthoni tevékenység keretében végzett kezelésére, amely így semmilyen szakmai vagy üzleti tevékenységgel nem hozható összefüggésbe."
        },
        {
          "EN": "Personal or household activities could include correspondence and the holding of addresses, or social networking and online activity undertaken within the context of such activities.",
          "HU": "Személyes vagy otthoni tevékenységnek minősül például a levelezés, a címtárolás, valamint az említett személyes és otthoni tevékenységek keretében végzett, közösségi hálózatokon törté ő kapcsolattartás és online tevékenységek."
        },
        {
          "EN": "However, this Regulation applies to controllers or processors which provide the means for processing personal data for such personal or household activities.",
          "HU": "E rendeletet kell alkalmazni azonban azokra az adatkezelőkre és adatfeldolgozókra, akik a személyes adatok ilyen személyes vagy otthoni tevékenység keretében végzett kezeléséhez az eszközöket biztosítják."
        },
        {
          "EN": "(19) The protection of natural persons with regard to the processing of personal data by competent authorities for the purposes of the prevention, investigation, detection or prosecution of criminal offences or the execution of criminal penalties, including the safeguarding against and the prevention of threats to public security and the free movement of such data, is the subject of a specific Union legal act.",
          "HU": "(19) A személyes adatoknak az illetékes hatóságok által bűncselekmények megelőzése, nyomozása, felderítése, a vádeljárás lefolytatása vagy büntetőjogi szankciók végrehajtása céljából, ezeken belül ideértve a közbiztonságot fenyegető veszélyekkel szembeni védelem és e veszélyek megelőzése céljából végzett kezelése vonatkozásában a természetes személyek védelme, valamint az ilyen adatok szabad áramlása külön uniós jogi aktus tárgyát képezi."
        },
        {
          "EN": "This Regulation should not, therefore, apply to processing activities for those purposes.",
          "HU": "E rendelet ezért az e célok érdekében végzett adatkezelési tevékenységekre nem alkalmazandó."
        },
        {
          "EN": "However, personal data processed by public authorities under this Regulation should, when used for those purposes, be governed by a more specific Union legal act, namely Directive (EU) 2016/680 of the European Parliament and of the Council [7](7).",
          "HU": "Ugyanakkor a közhatalmi szervek e rendelet alapján végzett személyes adatkezelését, ha az adatokat a fenti célok érdekében használják fel, a kifejezetten erre vonatkozó külön uniós jogi aktusnak, az (EU) 2016/680 európai parlamenti és tanácsi irányelvnek [7](7) kell szabályoznia."
        },
        {
          "EN": "Member States may entrust competent authorities within the meaning of Directive (EU) 2016/680 with tasks which are not necessarily carried out for the purposes of the prevention, investigation, detection or prosecution of criminal offences or the execution of criminal penalties, including the safeguarding against and prevention of threats to public security, so that the processing of personal data for those other purposes, in so far as it is within the scope of Union law, falls within the scope of this Regulation.",
          "HU": "A tagállamok az (EU) 2016/680 irányelv szerinti illetékes hatóságokat megbízhatják olyan egyéb feladatokkal is, amelyeknek ellátása nem feltétlenül a bűncselekmények megelőzése, nyomozása, felderítése vagy a vádeljárás lefolytatása vagy büntetőjogi szankciók végrehajtása, illetve nem a közbiztonságot fenyegető veszélyekkel szembeni védelem és e veszélyek megelőzése céljából történik, ebben az esetben a személyes adatoknak az említett egyéb célokból történő, egyébiránt az uniós jog hatálya alá tartozó kezelése e rendelet hatálya alá tartozik."
        },
        {
          "EN": "With regard to the processing of personal data by those competent authorities for purposes falling within scope of this Regulation, Member States should be able to maintain or introduce more specific provisions to adapt the application of the rules of this Regulation.",
          "HU": "Az említett illetékes hatóságok által az e rendelet hatálya alá tartozó célokból végzett személyesadat-kezelésre vonatkozóan a tagállamok számára lehetővé kell tenni, hogy konkrétabb rendelkezéseket tartsanak fenn vagy vezessenek be annak érdekében, hogy kiigazítsák az e rendeletben foglalt szabályok alkalmazását."
        },
        {
          "EN": "Such provisions may determine more precisely specific requirements for the processing of personal data by those competent authorities for those other purposes, taking into account the constitutional, organisational and administrative structure of the respective Member State.",
          "HU": "Ezekben a rendelkezésekben a tagállamok – alkotmányos, szervezeti és közigazgatási szerkezetüket figyelembe véve – pontosabban meghatározhatják az említett illetékes hatóságok által az említett egyéb célokból végzett személyesadat-kezelésre vonatkozó egyedi követelményeket."
        },
        {
          "EN": "When the processing of personal data by private bodies falls within the scope of this Regulation, this Regulation should provide for the possibility for Member States under specific conditions to restrict by law certain obligations and rights when such a restriction constitutes a necessary and proportionate measure in a democratic society to safeguard specific important interests including public security and the prevention, investigation, detection or prosecution of criminal offences or the execution of criminal penalties, including the safeguarding against and the prevention of threats to public security.",
          "HU": "Azokban az esetekben, amikor a személyes adatok magánfél szervezetek általi kezelése e rendelet hatálya alá esik, e rendelet keretében lehetőséget kell biztosítani a tagállamok számára, hogy – bizonyos különös feltételek mellett – egyes jogokra és kötelezettségekre vonatkozóan jogi korlátozást alkalmazzanak, feltéve hogy e korlátozás egy demokratikus társadalomban szükséges és arányos intézkedésnek minősül bizonyos fontos érdekek védelme – így például a közbiztonság, valamint a bűncselekmények megelőzése, nyomozása, felderítése és a vádeljárás lefolytatása, illetve büntetőjogi szankciók végrehajtása, ezeken belül ideértve a közbiztonságot fenyegető veszélyekkel szembeni védelmet és e veszélyek megelőzését – érdekében."
        },
        {
          "EN": "This is relevant for instance in the framework of anti-money laundering or the activities of forensic laboratories.",
          "HU": "Ennek például a pénzmosás elleni küzdelem és a bűnügyi szakértői laboratóriumok vonatkozásában van jelentősége."
        },
        {
          "EN": "(20) While this Regulation applies, inter alia, to the activities of courts and other judicial authorities, Union or Member State law could specify the processing operations and processing procedures in relation to the processing of personal data by courts and other judicial authorities.",
          "HU": "(20) Bár ezt a rendeletet a bíróságok és más igazságügyi hatóságok tevékenységeire is alkalmazni kell, az uniós, illetve a tagállami jog a személyes adatok kezelésével összefüggésben a bíróságok és más igazságügyi hatóságok által végzett kezelési műveleteket és eljárásokat pontosabban meghatározhatja."
        },
        {
          "EN": "The competence of the supervisory authorities should not cover the processing of personal data when courts are acting in their judicial capacity, in order to safeguard the independence of the judiciary in the performance of its judicial tasks, including decision-making.",
          "HU": "Annak érdekében, hogy az igazságszolgáltatási feladataik ellátása során, beleértve a döntéshozatalt is, biztosítva legyen a bírói kar függetlensége, a felügyeleti hatóságok hatásköre nem terjedhet ki a személyes adatok olyan kezelésére, amelyet a bíróságok igazságszolgáltatási feladatkörükben eljárva végeznek."
        },
        {
          "EN": "It should be possible to entrust supervision of such data processing operations to specific bodies within the judicial system of the Member State, which should, in particular ensure compliance with the rules of this Regulation, enhance awareness among members of the judiciary of their obligations under this Regulation and handle complaints in relation to such data processing operations.",
          "HU": "Lehetővé kell tenni, hogy az ilyen adatkezelési műveletek felügyeletével a tagállamok igazságügyi rendszerén belül olyan szakosodott szerveket bízzanak meg, amelyek elsősorban biztosítják az e rendeletben foglalt szabályoknak való megfelelést, növelik a bírói kar tudatosságát az e rendelet szerinti kötelezettségeik tekintetében és kezelik az említett adatkezelési tevékenységgel kapcsolatos panaszokat."
        },
        {
          "EN": "(21) This Regulation is without prejudice to the application of Directive 2000/31/EC of the European Parliament and of the Council [8](8), in particular of the liability rules of intermediary service providers in Articles 12 to 15 of that Directive.",
          "HU": "(21) Ez a rendelet nem érinti a 2000/31/EK európai parlamenti és tanácsi irányelv [8](8), és különösen az irányelv 12–15. cikkei szerinti, a közvetítő szolgáltatók felelősségére vonatkozó szabályok alkalmazását."
        },
        {
          "EN": "That Directive seeks to contribute to the proper functioning of the internal market by ensuring the free movement of information society services between Member States.",
          "HU": "Az említett irányelv a belső piac megfelelő működéséhez azzal járul hozzá, hogy biztosítja az információs társadalommal összefüggő szolgáltatások tagállamok közötti szabad mozgását."
        },
        {
          "EN": "(22) Any processing of personal data in the context of the activities of an establishment of a controller or a processor in the Union should be carried out in accordance with this Regulation, regardless of whether the processing itself takes place within the Union.",
          "HU": "(22) Az adatkezelő vagy adatfeldolgozó a tevékenységi helyén folytatott működése során, az Unió területén végzett bármely személyesadat-kezelést e rendelettel összhangban kell végezni, tekintet nélkül arra, hogy maga az adatkezelés az Unió területén történik-e."
        },
        {
          "EN": "Establishment implies the effective and real exercise of activity through stable arrangements.",
          "HU": "A tevékenységi hely valamely tevékenység tényleges és valós, tartós jelleget biztosító keretek közötti gyakorlását feltételezi."
        },
        {
          "EN": "The legal form of such arrangements, whether through a branch or a subsidiary with a legal personality, is not the determining factor in that respect.",
          "HU": "E keretek jogi formája – legyen szó akár fióktelepről vagy jogi személyiséggel rendelkező leányvállalatról – e tekintetben nem meghatározó tényező."
        },
        {
          "EN": "(23) In order to ensure that natural persons are not deprived of the protection to which they are entitled under this Regulation, the processing of personal data of data subjects who are in the Union by a controller or a processor not established in the Union should be subject to this Regulation where the processing activities are related to offering goods or services to such data subjects irrespective of whether connected to a payment.",
          "HU": "(23) Annak biztosítása érdekében, hogy a természetes személyeket e rendelet szerinti védelemtől ne lehessen megfosztani, helyénvaló, hogy ha az adatkezelési tevékenységek termékeknek vagy szolgáltatásoknak az említett érintettek részére történő nyújtásához kapcsolódnak, az Unióban tevékenységi hellyel nem rendelkező adatkezelő vagy adatfeldolgozó az Unióban tartózkodó érintettek személyes adatainak kezelését e rendelet betartásával végezze, függetlenül attól, hogy ahhoz társul-e kifizetés."
        },
        {
          "EN": "In order to determine whether such a controller or processor is offering goods or services to data subjects who are in the Union, it should be ascertained whether it is apparent that the controller or processor envisages offering services to data subjects in one or more Member States in the Union.",
          "HU": "Annak megállapítása érdekében, hogy az ilyen adatkezelő vagy adatfeldolgozó kínál-e termékeket és szolgáltatásokat Unió területén lévő érintetteknek, meg kell bizonyosodni arról, hogy nyilvánvaló-e, hogy az adatkezelő vagy adatfeldolgozó az Unió egy vagy több tagállamában az érintettek számára szolgáltatásokat tervez nyújtani."
        },
        {
          "EN": "Whereas the mere accessibility of the controller's, processor's or an intermediary's website in the Union, of an email address or of other contact details, or the use of a language generally used in the third country where the controller is established, is insufficient to ascertain such intention, factors such as the use of a language or a currency generally used in one or more Member States with the possibility of ordering goods and services in that other language, or the mentioning of customers or users who are in the Union, may make it apparent that the controller envisages offering goods or services to data subjects in the Union.",
          "HU": "Nem tekintendő e szándék nyilvánvaló jelének az a puszta tény, hogy az adatkezelő, adatfeldolgozó vagy valamely közvetítő honlapja, e-mail címe vagy más elérhetősége hozzáférhető az Unió területén, sem pedig az adatkezelő tevékenységi helye szerinti harmadik országban általánosan használt nyelv használata, ha viszont például az adatkezelő olyan nyelvet vagy pénznemet használ, amely egy vagy több tagállamban is általánosan használatos, és így lehetőséget biztosít termékeknek és szolgáltatásoknak az említett másik nyelven történő megrendelésére, vagy az Unióban tartózkodó fogyasztókra vagy felhasználókra tesz utalást, az egyértelműen jelezheti, hogy az adatkezelő említett érintetteknek az Unió területén termékeket vagy szolgáltatásokat szándékozik kínálni."
        },
        {
          "EN": "(24) The processing of personal data of data subjects who are in the Union by a controller or processor not established in the Union should also be subject to this Regulation when it is related to the monitoring of the behaviour of such data subjects in so far as their behaviour takes place within the Union.",
          "HU": "(24) Az Unióban tartózkodó érintettek személyes adatainak az Unióban tevékenységi hellyel nem rendelkező adatkezelő vagy adatfeldolgozó általi kezelése abban az esetben is e rendelet hatálya alá tartozik, amennyiben az érintettek Unión belüli magatartásának a megfigyeléséhez kapcsolódnak."
        },
        {
          "EN": "In order to determine whether a processing activity can be considered to monitor the behaviour of data subjects, it should be ascertained whether natural persons are tracked on the internet including potential subsequent use of personal data processing techniques which consist of profiling a natural person, particularly in order to take decisions concerning her or him or for analysing or predicting her or his personal preferences, behaviours and attitudes.",
          "HU": "Annak meghatározása, hogy az adatkezelés az érintettek magatartásának megfigyelésének minősül-e, meg kell megvizsgálni, hogy a természetes személyeket nyomon követik-e az interneten, illetve ezt követően a természetes személy profiljának megalkotását is magában foglaló adatkezelési technikákat alkalmaznak-e, annak érdekében, hogy elsősorban a természetes személyre vonatkozó döntéseket hozzanak, valamint, hogy elemezzék vagy előre jelezzék a természetes személy személyes preferenciáit, magatartását vagy beállítottságát."
        },
        {
          "EN": "(25) Where Member State law applies by virtue of public international law, this Regulation should also apply to a controller not established in the Union, such as in a Member State's diplomatic mission or consular post.",
          "HU": "(25) Ha a nemzetközi közjog értelmében valamely tagállam jogát kell alkalmazni, e rendeletet kell alkalmazni az Unióban tevékenységi hellyel nem rendelkező adatkezelőkre is, így például a tagállamok diplomáciai vagy konzuli képviseleteire."
        },
        {
          "EN": "(26) The principles of data protection should apply to any information concerning an identified or identifiable natural person.",
          "HU": "(26) Az adatvédelem elveit minden azonosított vagy azonosítható természetes személyre vonatkozó információ esetében alkalmazni kell."
        },
        {
          "EN": "Personal data which have undergone pseudonymisation, which could be attributed to a natural person by the use of additional information should be considered to be information on an identifiable natural person.",
          "HU": "Az álnevesített személyes adatok, amelyeket további információ felhasználásával valamely természetes személlyel kapcsolatba lehet hozni, azonosítható természetes személyre vonatkozó adatnak kell tekinteni."
        },
        {
          "EN": "To determine whether a natural person is identifiable, account should be taken of all the means reasonably likely to be used, such as singling out, either by the controller or by another person to identify the natural person directly or indirectly.",
          "HU": "Valamely természetes személy azonosíthatóságának meghatározásakor minden olyan módszert figyelembe kell venni – ideértve például a megjelölést –, amelyről észszerűen feltételezhető, hogy az adatkezelő vagy más személy a természetes személy közvetlen vagy közvetett azonosítására felhasználhatja."
        },
        {
          "EN": "To ascertain whether means are reasonably likely to be used to identify the natural person, account should be taken of all objective factors, such as the costs of and the amount of time required for identification, taking into consideration the available technology at the time of the processing and technological developments.",
          "HU": "Annak meghatározásakor, hogy mely eszközökről feltételezhető észszerűen, hogy egy adott természetes személy azonosítására fogják felhasználni, az összes objektív tényezőt figyelembe kell venni, így például az azonosítás költségeit és időigényét, számításba véve az adatkezeléskor rendelkezésre álló technológiákat, és a technológia fejlődését."
        },
        {
          "EN": "The principles of data protection should therefore not apply to anonymous information, namely information which does not relate to an identified or identifiable natural person or to personal data rendered anonymous in such a manner that the data subject is not or no longer identifiable.",
          "HU": "Az adatvédelem elveit ennek megfelelően az anonim információkra nem kell alkalmazni, nevezetesen olyan információkra, amelyek nem azonosított vagy azonosítható természetes személyre vonatkoznak, valamint az olyan személyes adatokra, amelyeket olyan módon anonimizáltak, amelynek következtében az érintett nem vagy többé nem azonosítható."
        },
        {
          "EN": "This Regulation does not therefore concern the processing of such anonymous information, including for statistical or research purposes.",
          "HU": "Ez a rendelet ezért nem vonatkozik az ilyen anonim információk kezelésére, a statisztikai vagy kutatási célú adatkezelést is ideértve."
        },
        {
          "EN": "(27) This Regulation does not apply to the personal data of deceased persons.",
          "HU": "(27) Ezt a rendelet nem kell alkalmazni az elhunyt személyekkel kapcsolatos személyes adatokra."
        },
        {
          "EN": "Member States may provide for rules regarding the processing of personal data of deceased persons.",
          "HU": "A tagállamok számára lehetővé kell tenni, hogy az elhunyt személyek személyes adatainak kezelését szabályozzák."
        },
        {
          "EN": "(28) The application of pseudonymisation to personal data can reduce the risks to the data subjects concerned and help controllers and processors to meet their data-protection obligations.",
          "HU": "(28) A személyes adatok álnevesítése csökkentheti az érintettek számára a kockázatokat, valamint segíthet az adatkezelőknek és az adatfeldolgozóknak abban, hogy az adatvédelmi kötelezettségeiknek megfeleljenek."
        },
        {
          "EN": "The explicit introduction of ‘pseudonymisation’ in this Regulation is not intended to preclude any other measures of data protection.",
          "HU": "Az „álnevesítés” e rendeletbe történő kifejezett bevezetése nem irányul más adatvédelmi intézkedés kizárására."
        },
        {
          "EN": "(29) In order to create incentives to apply pseudonymisation when processing personal data, measures of pseudonymisation should, whilst allowing general analysis, be possible within the same controller when that controller has taken technical and organisational measures necessary to ensure, for the processing concerned, that this Regulation is implemented, and that additional information for attributing the personal data to a specific data subject is kept separately.",
          "HU": "(29) Az álnevesítés személyes adatok kezelése során történő alkalmazásának ösztönzése céljából lehetővé kell tenni az álnevesítésre irányuló intézkedések és az általános elemzés egyidejű alkalmazását egyazon adatkezelő szervezetén belül, amennyiben az adatkezelő meghozta azokat a technikai és szervezési intézkedéseket, amelyek e rendelet az érintett adatkezelés vonatkozásában történő végrehajtásához szükségesek, továbbá biztosítja, hogy az ahhoz szükséges további információkat, amely által a személyes adatokat egy adott érintetthez lehessen kapcsolni, elkülönítve tárolják."
        },
        {
          "EN": "The controller processing the personal data should indicate the authorised persons within the same controller.",
          "HU": "A személyes adatokat kezelő adatkezelő megjelöli, hogy ugyanazon a szervezeten belül ki minősül feljogosított személyek."
        },
        {
          "EN": "(30) Natural persons may be associated with online identifiers provided by their devices, applications, tools and protocols, such as internet protocol addresses, cookie identifiers or other identifiers such as radio frequency identification tags.",
          "HU": "(30) A természetes személyek összefüggésbe hozhatók az általuk használt készülékek, alkalmazások, eszközök és protokollok által rendelkezésre bocsátott online azonosítókkal, például IP-címekkel és cookie-azonosítókkal, valamint egyéb azonosítókkal, például rádiófrekvenciás azonosító címkékkel."
        },
        {
          "EN": "This may leave traces which, in particular when combined with unique identifiers and other information received by the servers, may be used to create profiles of the natural persons and identify them.",
          "HU": "Ezáltal olyan nyomok keletkezhetnek, amelyek egyedi azonosítókkal és a szerverek által fogadott egyéb információkkal összekapcsolva felhasználhatók a természetes személyes profiljának létrehozására és az adott személy azonosítására."
        },
        {
          "EN": "(31) Public authorities to which personal data are disclosed in accordance with a legal obligation for the exercise of their official mission, such as tax and customs authorities, financial investigation units, independent administrative authorities, or financial market authorities responsible for the regulation and supervision of securities markets should not be regarded as recipients if they receive personal data which are necessary to carry out a particular inquiry in the general interest, in accordance with Union or Member State law.",
          "HU": "(31) Azok a közhatalmi szervek, amelyekkel hivatalos feladataikkal kapcsolatos jogi kötelezettségeik keretében személyes adatokat közölnek, így például az adó- és vámhatóságok, a pénzügyi nyomozóegységek, a független közigazgatási hatóságok, valamint az értékpapírpiacok szabályozásáért és felügyeletéért felelős pénzügyi hatóságok nem tekinthetők címzettnek, amikor olyan személyes adatokat kapnak, amelyek az uniós vagy a tagállami jog alapján egy konkrét közérdekű vizsgálat lefolytatásához szükségesek."
        },
        {
          "EN": "The requests for disclosure sent by the public authorities should always be in writing, reasoned and occasional and should not concern the entirety of a filing system or lead to the interconnection of filing systems.",
          "HU": "A közhatalmi szervek nyilvánosságra hozatal iránti kérelmeit eseti alapon, írásban, indokolással ellátva kell benyújtani, és azok nem vonatkozhatnak teljes nyilvántartási rendszerekre, illetve nem eredményezhetik nyilvántartási rendszerek összekapcsolását."
        },
        {
          "EN": "The processing of personal data by those public authorities should comply with the applicable data-protection rules according to the purposes of the processing.",
          "HU": "Az említett személyes adatok e közhatalmi szervek általi kezelése során – az adatkezelés céljának megfe – a vonatkozó adatvédelmi szabályokat be kell tartani."
        },
        {
          "EN": "(32) Consent should be given by a clear affirmative act establishing a freely given, specific, informed and unambiguous indication of the data subject's agreement to the processing of personal data relating to him or her, such as by a written statement, including by electronic means, or an oral statement.",
          "HU": "(32) Az adatkezelésre csak akkor kerülhet sor, ha az érintett egyértelmű megerősítő cselekedettel, például írásbeli – ideértve az elektronikus úton tett –, vagy szóbeli nyilatkozattal önkéntes, konkrét, tájékoztatáson alapuló és egyértelmű hozzájárulását adja a természetes személyt érintő személyes adatok kezeléséhez."
        },
        {
          "EN": "This could include ticking a box when visiting an internet website, choosing technical settings for information society services or another statement or conduct which clearly indicates in this context the data subject's acceptance of the proposed processing of his or her personal data.",
          "HU": "Ilyen hozzájárulásnak minősül az is, ha az érintett valamely internetes honlap megtekintése során bejelöl egy erre vonatkozó négyzetet, az információs társadalommal összefüggő szolgáltatások igénybevétele során erre vonatkozó technikai beállításokat hajt végre, valamint bármely egyéb olyan nyilatkozat vagy cselekedet is, amely az adott összefüggésben az érintett hozzájárulását személyes adatainak tervezett kezeléséhez egyértelműen jelzi."
        },
        {
          "EN": "Silence, pre-ticked boxes or inactivity should not therefore constitute consent.",
          "HU": "A hallgatás, az előre bejelölt négyzet vagy a nem cselekvés ezért nem minősül hozzájárulásnak."
        },
        {
          "EN": "Consent should cover all processing activities carried out for the same purpose or purposes.",
          "HU": "A hozzájárulás az ugyanazon cél vagy célok érdekében végzett összes adatkezelési tevékenységre kiterjed."
        },
        {
          "EN": "When the processing has multiple purposes, consent should be given for all of them.",
          "HU": "Ha az adatkezelés egyszerre több célt is szolgál, akkor a hozzájárulást az összes adatkezelési célra vonatkozóan meg kell adni."
        },
        {
          "EN": "If the data subject's consent is to be given following a request by electronic means, the request must be clear, concise and not unnecessarily disruptive to the use of the service for which it is provided.",
          "HU": "Ha az érintett hozzájárulását elektronikus felkérést követően adja meg, a felkérésnek egyértelműnek és tömörnek kell lennie, és az nem gátolhatja szükségtelenül azon szolgáltatás igénybevételét, amely vonatkozásában a hozzájárulást kérik."
        },
        {
          "EN": "(33) It is often not possible to fully identify the purpose of personal data processing for scientific research purposes at the time of data collection.",
          "HU": "(33) Gyakran nem lehetséges a tudományos kutatási célú személyesadat-kezelés célját az adatgyűjtés időpontjában teljes mértékben azonosítani."
        },
        {
          "EN": "Therefore, data subjects should be allowed to give their consent to certain areas of scientific research when in keeping with recognised ethical standards for scientific research.",
          "HU": "Ezért lehetővé kell tenni az érintettek számára, hogy a tudományos kutatás bizonyos területeire vonatkozóan hozzájárulásukat adják az adatkezeléshez, betartva a tudományos kutatásokra vonatkozó, elismert etikai előírásokat."
        },
        {
          "EN": "Data subjects should have the opportunity to give their consent only to certain areas of research or parts of research projects to the extent allowed by the intended purpose.",
          "HU": "Az érintettek számára biztosítani kell annak lehetőségét, hogy – annyiban, ha a célok ezt lehetővé teszik – csak egyes kutatási területekre vagy a kutatási projekteknek csupán bizonyos részeire vonatkozóan adjanak hozzájárulást."
        },
        {
          "EN": "(34) Genetic data should be defined as personal data relating to the inherited or acquired genetic characteristics of a natural person which result from the analysis of a biological sample from the natural person in question, in particular chromosomal, deoxyribonucleic acid (DNA) or ribonucleic acid (RNA) analysis, or from the analysis of another element enabling equivalent information to be obtained.",
          "HU": "(34) A genetikai adatot olyan, a természetes személy örökölt vagy szerzett genetikai jellemzőivel összefüggő személyes adatként kell meghatározni, és amely az érintett személytől vett biológiai minta elemzésének – különösen kromoszómaelemzésnek, illetve a dezoxiribonukleinsav (DNS) vagy a ribonukleinsav (RNS) vizsgálatának, vagy az ezekből nyerhető információkkal megegyező információk kinyerését lehetővé tevő bármilyen más elem vizsgálatának – az eredménye."
        },
        {
          "EN": "(35) Personal data concerning health should include all data pertaining to the health status of a data subject which reveal information relating to the past, current or future physical or mental health status of the data subject.",
          "HU": "(35) Az egészségügyi személyes adatok közé tartoznak az érintett egészségi állapotára vonatkozó olyan adatok, amelyek információt hordoznak az érintett múltbeli, jelenlegi vagy jövőbeli testi vagy pszichikai egészségi állapotáról."
        },
        {
          "EN": "This includes information about the natural person collected in the course of the registration for, or the provision of, health care services as referred to in Directive 2011/24/EU of the European Parliament and of the Council [9](9) to that natural person; a number, symbol or particular assigned to a natural person to uniquely identify the natural person for health purposes; information derived from the testing or examination of a body part or bodily substance, including from genetic data and biological samples; and any information on, for example, a disease, disability, disease risk, medical history, clinical treatment or the physiological or biomedical state of the data subject independent of its source, for example from a physician or other health professional, a hospital, a medical device or an in vitro diagnostic test.",
          "HU": "Ide tartoznak az alábbiak: a természetes személyre vonatkozó olyan személyes adatok, amelyeket az egyénnek a 2011/24/EU európai parlamenti és tanácsi irányelvben [9](9) említett egészségügyi szolgáltatások céljából történő nyilvántartásba vétel, vagy ilyen szolgáltatások nyújtása során gyűjtöttek, a természetes személy egészségügyi célokból történő egyéni azonosítása érdekében hozzá rendelt szám, jel vagy adat, valamely testrész vagy a testet alkotó anyag – beleértve a genetikai adatokat és a biológiai mintákat is – teszteléséből vagy vizsgálatából származó információk, és bármilyen, például az érintett betegségével, fogyatékosságával, betegségkockázatával, kórtörténetével, klinikai kezelésével vagy fiziológiai vagy orvosbiológiai állapotával kapcsolatos információ, függetlenül annak forrásától, amely lehet például orvos vagy egyéb egészségügyi dolgozó, kórház, orvostechnikai eszköz vagy in vitro diagnosztikai teszt."
        },
        {
          "EN": "(36) The main establishment of a controller in the Union should be the place of its central administration in the Union, unless the decisions on the purposes and means of the processing of personal data are taken in another establishment of the controller in the Union, in which case that other establishment should be considered to be the main establishment.",
          "HU": "(36) Az adatkezelő Unión belüli tevékenységi központja az Unión belüli központi ügyvitelének helye, kivéve, ha a személyes adatok kezelésének céljaira és eszközeire vonatkozó döntéseket az adatkezelő egy másik Unión belüli tevékenységi helyén hozzák, amely esetben ez utóbbi másik tevékenységi központot kell a tevékenységi központnak tekinteni."
        },
        {
          "EN": "The main establishment of a controller in the Union should be determined according to objective criteria and should imply the effective and real exercise of management activities determining the main decisions as to the purposes and means of processing through stable arrangements.",
          "HU": "Az adatkezelő Unión belüli tevékenységi központját objektív szempontok alapján kell meghatározni, és e fogalom magában foglalja az adatkezelés céljára és eszközeire vonatkozó fő döntéseket meghatározó ügyvezetési tevékenység tényleges és valós, tartós jelleget biztosító körülmények közötti gyakorlását."
        },
        {
          "EN": "That criterion should not depend on whether the processing of personal data is carried out at that location.",
          "HU": "E szempont nem függhet attól, hogy a személyes adatok kezelése a szóban forgó helyszínen zajlik-e."
        },
        {
          "EN": "The presence and use of technical means and technologies for processing personal data or processing activities do not, in themselves, constitute a main establishment and are therefore not determining criteria for a main establishment.",
          "HU": "A személyes adatok kezelésére szolgáló műszaki eszközök jelenléte és használata, illetve az adatkezelési tevékenység önmagában nem jár tevékenységi központként való minősítéssel, és ezért nem meghatározó szempontja a tevékenységi központnak."
        },
        {
          "EN": "The main establishment of the processor should be the place of its central administration in the Union or, if it has no central administration in the Union, the place where the main processing activities take place in the Union.",
          "HU": "Az adatfeldolgozó tevékenységi központja az Unión belüli központi ügyvitelének helye kell, hogy legyen, vagy ha az Unióban nem rendelkezik központi ügyviteli hellyel, akkor az a hely, ahol az Unióban a fő adatkezelési tevékenységek zajlanak."
        },
        {
          "EN": "In cases involving both the controller and the processor, the competent lead supervisory authority should remain the supervisory authority of the Member State where the controller has its main establishment, but the supervisory authority of the processor should be considered to be a supervisory authority concerned and that supervisory authority should participate in the cooperation procedure provided for by this Regulation.",
          "HU": "Az adatkezelőt és az adatfeldolgozót egyaránt érintő esetekben továbbra is annak a tagállamnak a felügyeleti hatósága az illetékes fő felügyeleti hatóság, amelynek területén az adatkezelő tevékenységi központja található, azonban az adatfeldolgozó felügyeleti hatósága érintett felügyeleti hatóságnak tekintendő, ennek a felügyeleti hatóságnak részt kell vennie az e rendeletben meghatározott együttműködési eljárásban."
        },
        {
          "EN": "In any case, the supervisory authorities of the Member State or Member States where the processor has one or more establishments should not be considered to be supervisory authorities concerned where the draft decision concerns only the controller.",
          "HU": "Az olyan tagállam(ok) felügyeleti hatóságai, amely(ek) területén az adatfeldolgozó egy vagy több tevékenységi hellyel rendelkezik, semmi esetre sem tekinthetők érintett felügyeleti hatóságnak, ha az adott döntéstervezet csak az adatkezelőre vonatkozik."
        },
        {
          "EN": "Where the processing is carried out by a group of undertakings, the main establishment of the controlling undertaking should be considered to be the main establishment of the group of undertakings, except where the purposes and means of processing are determined by another undertaking.",
          "HU": "Ha az adatkezelést vállalkozáscsoport végzi, az ellenőrző vállalkozás tevékenységi központja tekintendő a vállalkozáscsoport tevékenységi központjának, kivéve, ha az adatkezelés céljait és eszközeit valamely más vállalkozás határozza meg."
        },
        {
          "EN": "(37) A group of undertakings should cover a controlling undertaking and its controlled undertakings, whereby the controlling undertaking should be the undertaking which can exert a dominant influence over the other undertakings by virtue, for example, of ownership, financial participation or the rules which govern it or the power to have personal data protection rules implemented.",
          "HU": "(37) A vállalkozáscsoportot egy ellenőrző vállalkozás és az általa ellenőrzött vállalkozások alkotják; ellenőrző vállalkozásnak azt a vállalkozást kell tekinteni, amely – például tulajdonosi jogok, pénzügyi részesedés vagy az arra vonatkozó szabályok, vagy a személyes adatok védelmére vonatkozó szabályok végrehajtására való jogosultság révén – a többi vállalkozás felett meghatározó befolyást gyakorol."
        },
        {
          "EN": "An undertaking which controls the processing of personal data in undertakings affiliated to it should be regarded, together with those undertakings, as a group of undertakings.",
          "HU": "Az a vállalkozás, amely ellenőrzi a hozzá kapcsolt vállalkozásokban a személyes adatok kezelését, ezen intézményekkel együtt „vállalkozáscsoportnak” tekinthető jogalanyt alkot."
        },
        {
          "EN": "(38) Children merit specific protection with regard to their personal data, as they may be less aware of the risks, consequences and safeguards concerned and their rights in relation to the processing of personal data.",
          "HU": "(38) A gyermekek személyes adatai különös védelmet érdemelnek, mivel ők kevésbé lehetnek tisztában a személyes adatok kezelésével összefüggő kockázatokkal, következményeivel és az ahhoz kapcsolódó garanciákkal és jogosultságokkal."
        },
        {
          "EN": "Such specific protection should, in particular, apply to the use of personal data of children for the purposes of marketing or creating personality or user profiles and the collection of personal data with regard to children when using services offered directly to a child.",
          "HU": "Ezt a különös védelmet főként a gyermekek személyes adatainak olyan felhasználására kell alkalmazni, amely marketingcélokat, illetve személyi vagy felhasználói profilok létrehozásának célját szolgálja, továbbá a gyermekek személyes adatainak a közvetlenül a részükre nyújtott szolgáltatások igénybevétele során történő gyűjtésére."
        },
        {
          "EN": "The consent of the holder of parental responsibility should not be necessary in the context of preventive or counselling services offered directly to a child.",
          "HU": "A közvetlenül a gyermek részére nyújtott megelőzési és tanácsadási szolgáltatások esetében nincs szükség a szülői felügyelet gyakorlójának hozzájárulására."
        },
        {
          "EN": "(39) Any processing of personal data should be lawful and fair.",
          "HU": "(39) A személyes adatok kezelésének jogszerűnek és tisztességesnek kell lennie."
        },
        {
          "EN": "It should be transparent to natural persons that personal data concerning them are collected, used, consulted or otherwise processed and to what extent the personal data are or will be processed.",
          "HU": "A természetes személyek számára átláthatónak kell lennie, hogy a rájuk vonatkozó személyes adataikat hogyan gyűjtik, használják fel, azokba hogy tekintenek bele vagy milyen egyéb módon kezelik, valamint azzal összefüggésben, hogy a személyes adatokat milyen mértékben kezelik vagy fogják kezelni."
        },
        {
          "EN": "The principle of transparency requires that any information and communication relating to the processing of those personal data be easily accessible and easy to understand, and that clear and plain language be used.",
          "HU": "Az átláthatóság elve megköveteli, hogy a személyes adatok kezelésével összefüggő tájékoztatás, illetve kommunikáció könnyen hozzáférhető és közérthető legyen, valamint hogy azt világosan és egyszerű nyelvezettel fogalmazzák meg."
        },
        {
          "EN": "That principle concerns, in particular, information to the data subjects on the identity of the controller and the purposes of the processing and further information to ensure fair and transparent processing in respect of the natural persons concerned and their right to obtain confirmation and communication of personal data concerning them which are being processed.",
          "HU": "Ez az elv vonatkozik különösen az érintetteknek az adatkezelő kilétéről és az adatkezelés céljáról való tájékoztatására, valamint az azt célzó további tájékoztatásra, hogy biztosított legyen az érintett személyes adatainak tisztességes és átlátható kezelése, továbbá arra a tájékoztatásra, hogy az érintetteknek jogukban áll megerősítést és tájékoztatást kapni a róluk kezelt adatokról."
        },
        {
          "EN": "Natural persons should be made aware of risks, rules, safeguards and rights in relation to the processing of personal data and how to exercise their rights in relation to such processing.",
          "HU": "A természetes személyt a személyes adatok kezelésével összefüggő kockázatokról, szabályokról, garanciákról és jogokról tájékoztatni kell, valamint arról, hogy hogyan gyakorolhatja az adatkezelés kapcsán megillető jogokat."
        },
        {
          "EN": "In particular, the specific purposes for which personal data are processed should be explicit and legitimate and determined at the time of the collection of the personal data.",
          "HU": "A személyes adatkezelés konkrét céljainak mindenekelőtt explicit módon megfogalmazottaknak és jogszerűeknek, továbbá már a személyes adatok gyűjtésének időpontjában meghatározottaknak kell lenniük."
        },
        {
          "EN": "The personal data should be adequate, relevant and limited to what is necessary for the purposes for which they are processed.",
          "HU": "A személyes adatoknak a kezelésük céljára alkalmasaknak és relevánsaknak kell lenniük, az adatok körét pedig a célhoz szükséges minimumra kell korlátozni."
        },
        {
          "EN": "This requires, in particular, ensuring that the period for which the personal data are stored is limited to a strict minimum.",
          "HU": "Ehhez pedig biztosítani kell különösen azt, hogy a személyes adatok tárolása a lehető legrövidebb időtartamra korlátozódjon."
        },
        {
          "EN": "Personal data should be processed only if the purpose of the processing could not reasonably be fulfilled by other means.",
          "HU": "Személyes adatok csak abban az esetben kezelhetők, ha az adatkezelés célját egyéb eszközzel észszerű módon nem lehetséges elérni."
        },
        {
          "EN": "In order to ensure that the personal data are not kept longer than necessary, time limits should be established by the controller for erasure or for a periodic review.",
          "HU": "Annak biztosítása érdekében, hogy a személyes adatok tárolása a szükséges időtartamra korlátozódjon, az adatkezelő törlési vagy rendszeres felülvizsgálati határidőket állapít meg."
        },
        {
          "EN": "Every reasonable step should be taken to ensure that personal data which are inaccurate are rectified or deleted.",
          "HU": "A pontatlan személyes adatok helyesbítése vagy törlése érdekében minden észszerű lépést meg kell tenni."
        },
        {
          "EN": "Personal data should be processed in a manner that ensures appropriate security and confidentiality of the personal data, including for preventing unauthorised access to or use of personal data and the equipment used for the processing.",
          "HU": "A személyes adatokat olyan módon kell kezelni, amely biztosítja azok megfelelő szintű biztonságát és bizalmas kezelését, többek között annak érdekében, hogy megakadályozza a személyes adatokhoz és a személyes adatok kezeléséhez használt eszközökhöz való jogosulatlan hozzáférést, illetve azok jogosulatlan felhasználását."
        },
        {
          "EN": "(40) In order for processing to be lawful, personal data should be processed on the basis of the consent of the data subject concerned or some other legitimate basis, laid down by law, either in this Regulation or in other Union or Member State law as referred to in this Regulation, including the necessity for compliance with the legal obligation to which the controller is subject or the necessity for the performance of a contract to which the data subject is party or in order to take steps at the request of the data subject prior to entering into a contract.",
          "HU": "(40) Annak érdekében, hogy a személyes adatok kezelése jogszerű legyen, annak az érintett hozzájárulásán kell alapulnia, vagy valamely egyéb jogszerű, jogszabály által megállapított – akár e rendeletben, akár más, az e rendeletben említettek szerinti uniós vagy tagállami jogban foglalt – alappal kell rendelkeznie, ideértve az adatkezelőre vonatkozó jogi kötelezettségeknek való megfelelés szükségességét, az érintett által kötött esetleges szerződés teljesítését, illetve az érintett által kért, a szerződéskötést megelőzően megteendő lépéseket."
        },
        {
          "EN": "(41) Where this Regulation refers to a legal basis or a legislative measure, this does not necessarily require a legislative act adopted by a parliament, without prejudice to requirements pursuant to the constitutional order of the Member State concerned.",
          "HU": "(41) Amikor ez a rendelet jogalapra vagy jogalkotási intézkedésre hivatkozik, ez nem szükségszerűen jelent – az érintett tagállam alkotmányos rendjéből fakadó követelmények sérelme nélkül – valamely parlament által elfogadott jogszabályt."
        },
        {
          "EN": "However, such a legal basis or legislative measure should be clear and precise and its application should be foreseeable to persons subject to it, in accordance with the case-law of the Court of Justice of the European Union (the ‘Court of Justice’) and the European Court of Human Rights.",
          "HU": "Mindazonáltal az ilyen jogalapnak vagy jogalkotási intézkedésnek világosnak és pontosnak kell lennie, alkalmazásának pedig előreláthatónak kell lennie a hatálya alá tartozó személyek számára, összhangban az Európai Unió Bíróságának (a továbbiakban: Bíróság) és az Emberi Jogok Európai Bíróságának az ítélkezési gyakorlatával."
        },
        {
          "EN": "(42) Where processing is based on the data subject's consent, the controller should be able to demonstrate that the data subject has given consent to the processing operation.",
          "HU": "(42) Ha az adatkezelés az érintett hozzájárulásán alapul, az adatkezelő számára lehetővé kell tenni, hogy bizonyítani tudja, hogy az adatkezelési művelethez az érintett hozzájárult."
        },
        {
          "EN": "In particular in the context of a written declaration on another matter, safeguards should ensure that the data subject is aware of the fact that and the extent to which consent is given.",
          "HU": "Különösen a más ügyben tett írásbeli nyilatkozattal összefüggésben garanciákkal szükséges biztosítani azt, hogy az érintett tisztában legyen azzal a ténnyel, hogy hozzájárulását adta, valamint azzal, hogy ezt milyen mértékben tette."
        },
        {
          "EN": "In accordance with Council Directive 93/13/EEC [10](10) a declaration of consent pre-formulated by the controller should be provided in an intelligible and easily accessible form, using clear and plain language and it should not contain unfair terms.",
          "HU": "A 93/13/EGK tanácsi irányelvnek [10](10) megfelelően az adatkezelő előre megfogalmazott hozzájárulási nyilatkozatról gondoskodik, amelyet érthető és könnyen hozzáférhető formában bocsát rendelkezésre, nyelvezetének pedig világosnak és egyszerűnek kell lennie, és nem tartalmazhat tisztességtelen feltételeket."
        },
        {
          "EN": "For consent to be informed, the data subject should be aware at least of the identity of the controller and the purposes of the processing for which the personal data are intended.",
          "HU": "Ahhoz, hogy a hozzájárulás tájékoztatáson alapulónak minősüljön, az érintettnek legalább tisztában kell lennie az adatkezelő kilétével és a személyes adatok kezelésének céljával."
        },
        {
          "EN": "Consent should not be regarded as freely given if the data subject has no genuine or free choice or is unable to refuse or withdraw consent without detriment.",
          "HU": "A hozzájárulás megadása nem tekinthető önkéntesnek, ha az érintett nem rendelkezik valós vagy szabad választási lehetőséggel, és nem áll módjában a hozzájárulás anélküli megtagadása vagy visszavonása, hogy ez kárára válna."
        },
        {
          "EN": "(43) In order to ensure that consent is freely given, consent should not provide a valid legal ground for the processing of personal data in a specific case where there is a clear imbalance between the data subject and the controller, in particular where the controller is a public authority and it is therefore unlikely that consent was freely given in all the circumstances of that specific situation.",
          "HU": "(43) Annak biztosítása érdekében, hogy hozzájárulást önkéntesen adták, a hozzájárulás olyan egyedi esetekben nem szolgálhat érvényes jogalapként a személyes adatok kezeléséhez, amelyekben az érintett és az adatkezelő között egyértelműen egyenlőtlen viszony áll fenn, különösen ha az adatkezelő közhatalmi szerv, és az adott helyzet valamennyi körülményét figyelembe véve ezért valószínűtlen, hogy a szóban forgó hozzájárulás megadása önkéntesen történt."
        },
        {
          "EN": "Consent is presumed not to be freely given if it does not allow separate consent to be given to different personal data processing operations despite it being appropriate in the individual case, or if the performance of a contract, including the provision of a service, is dependent on the consent despite such consent not being necessary for such performance.",
          "HU": "A hozzájárulás nem tekinthető önkéntesnek, ha nem tesz lehetővé külön-külön hozzájárulást a különböző személyes adatkezelési műveletekhez, noha az adott esetben megfelelő, illetve ha egy – például szolgáltatási – szerződés teljesítését a hozzájárulástól teszik függővé, annak ellenére, hogy a hozzájárulás nem szükséges az a szerződés teljesítéséhez."
        },
        {
          "EN": "(44) Processing should be lawful where it is necessary in the context of a contract or the intention to enter into a contract.",
          "HU": "(44) Az adatkezelés jogszerűnek minősül, ha arra valamely szerződés vagy szerződéskötési szándék keretében van szükség."
        },
        {
          "EN": "(45) Where processing is carried out in accordance with a legal obligation to which the controller is subject or where processing is necessary for the performance of a task carried out in the public interest or in the exercise of official authority, the processing should have a basis in Union or Member State law.",
          "HU": "(45) Ha az adatkezelésre az adatkezelőre vonatkozó jogi kötelezettség teljesítése keretében kerül sor, vagy ha az közérdekű feladat végrehajtásához, illetve közhatalmi jogosítvány gyakorlásához szükséges, az adatkezelésnek az uniós jogban vagy valamely tagállam jogában foglalt jogalappal kell rendelkeznie."
        },
        {
          "EN": "This Regulation does not require a specific law for each individual processing.",
          "HU": "Ez a rendelet nem követeli meg, hogy az egyes konkrét adatkezelési műveletekre külön-külön jogszabály vonatkozzon."
        },
        {
          "EN": "A law as a basis for several processing operations based on a legal obligation to which the controller is subject or where processing is necessary for the performance of a task carried out in the public interest or in the exercise of an official authority may be sufficient.",
          "HU": "Elegendő lehet az is, ha egyetlen jogszabály szolgál jogalapul több olyan adatkezelési művelethez is, amely az adatkezelőre vonatkozó jogi kötelezettségen alapul, illetve amelyre közérdekből végzett feladat ellátásához vagy közhatalmi jogosítvány gyakorlásához van szükség."
        },
        {
          "EN": "It should also be for Union or Member State law to determine the purpose of processing.",
          "HU": "Az adatkezelés célját is uniós vagy tagállami jogban kell meghatározni."
        },
        {
          "EN": "Furthermore, that law could specify the general conditions of this Regulation governing the lawfulness of personal data processing, establish specifications for determining the controller, the type of personal data which are subject to the processing, the data subjects concerned, the entities to which the personal data may be disclosed, the purpose limitations, the storage period and other measures to ensure lawful and fair processing.",
          "HU": "E rendeletnek a személyes adatok kezelésének jogszerűségére vonatkozó általános feltételeit ezen túlmenően ezek pontosíthatják, az adatkezelő megjelölésére vonatkozó pontos szabályokat, az adatkezelés tárgyát képező személyes adatok típusát, az érintetteket, azokat a szervezeteket, amelyekkel a személyes adatok közölhetők, az adatkezelés céljára vonatkozó korlátozásokat, az adattárolás időtartamát, valamint egyéb, a jogszerű és tisztességes adatkezelés biztosításához szükséges intézkedéseket is meghatározhatják."
        },
        {
          "EN": "It should also be for Union or Member State law to determine whether the controller performing a task carried out in the public interest or in the exercise of official authority should be a public authority or another natural or legal person governed by public law, or, where it is in the public interest to do so, including for health purposes such as public health and social protection and the management of health care services, by private law, such as a professional association.",
          "HU": "Uniós vagy tagállami jog határozza meg továbbá, hogy a közérdekű vagy közhatalmi feladatot teljesítő adatkezelőnek közhatalmi szervnek vagy egyéb, a közjog hatálya alá tartozó természetes vagy jogi személynek, vagy ha ezt a közérdek egészségügyi célok, mint például a népegészségügyi, illetve szociális védelmi és az egészségügyi szolgálatok irányítása miatt indokolttá teszi, a magánjog hatálya alá tartozó szervnek – például szakmai egyesületnek – kell-e lennie."
        },
        {
          "EN": "(46) The processing of personal data should also be regarded to be lawful where it is necessary to protect an interest which is essential for the life of the data subject or that of another natural person.",
          "HU": "(46) Az adatkezelést szintén jogszerűnek kell tekinteni akkor, amikor az az érintett életének vagy más fent említett természetes személy érdekeinek védelmében történik."
        },
        {
          "EN": "Processing of personal data based on the vital interest of another natural person should in principle take place only where the processing cannot be manifestly based on another legal basis.",
          "HU": "Más természetes személy létfontosságú érdekeire hivatkozással személyes adatkezelésre elvben csak akkor kerülhet sor, ha a szóban forgó adatkezelés egyéb jogalapon nem végezhető."
        },
        {
          "EN": "Some types of processing may serve both important grounds of public interest and the vital interests of the data subject as for instance when processing is necessary for humanitarian purposes, including for monitoring epidemics and their spread or in situations of humanitarian emergencies, in particular in situations of natural and man-made disasters.",
          "HU": "A személyes adatkezelés néhány típusa szolgálhat egyszerre fontos közérdeket és az érintett létfontosságú érdekeit is, például olyan esetben, amikor az adatkezelésre humanitárius okokból, ideértve, ha arra a járványok és terjedéseik nyomon követéséhez, vagy humanitárius vészhelyzetben, különösen természeti vagy ember által okozott katasztrófák esetében van szükség."
        },
        {
          "EN": "(47) The legitimate interests of a controller, including those of a controller to which the personal data may be disclosed, or of a third party, may provide a legal basis for processing, provided that the interests or the fundamental rights and freedoms of the data subject are not overriding, taking into consideration the reasonable expectations of data subjects based on their relationship with the controller.",
          "HU": "(47) Az adatkezelő – ideértve azt az adatkezelőt is, akivel a személyes adatokat közölhetik – vagy valamely harmadik fél jogos érdeke jogalapot teremthet az adatkezelésre, feltéve hogy az érintett érdekei, alapvető jogai és szabadságai nem élveznek elsőbbséget, figyelembe véve az adatkezelővel való kapcsolata alapján az érintett észszerű elvárásait."
        },
        {
          "EN": "Such legitimate interest could exist for example where there is a relevant and appropriate relationship between the data subject and the controller in situations such as where the data subject is a client or in the service of the controller.",
          "HU": "Az ilyen jogos érdekről lehet szó például olyankor, amikor releváns és megfelelő kapcsolat áll fenn az érintett és az adatkezelő között, például olyan esetekben, amikor az érintett az adatkezelő ügyfele vagy annak alkalmazásában áll."
        },
        {
          "EN": "At any rate the existence of a legitimate interest would need careful assessment including whether a data subject can reasonably expect at the time and in the context of the collection of the personal data that processing for that purpose may take place.",
          "HU": "A jogos érdek fennállásának megállapításához mindenképpen körültekintően meg kell vizsgálni többek között azt, hogy az érintett a személyes adatok gyűjtésének időpontjában és azzal összefüggésben számíthat-e észszerűen arra, hogy adatkezelésre az adott célból kerülhet sor."
        },
        {
          "EN": "The interests and fundamental rights of the data subject could in particular override the interest of the data controller where personal data are processed in circumstances where data subjects do not reasonably expect further processing.",
          "HU": "Az érintett érdekei és alapvető jogai elsőbbséget élvezhetnek az adatkezelő érdekével szemben, ha a személyes adatokat olyan körülmények között kezelik, amelyek közepette az érintettek nem számítanak további adatkezelésre."
        },
        {
          "EN": "Given that it is for the legislator to provide by law for the legal basis for public authorities to process personal data, that legal basis should not apply to the processing by public authorities in the performance of their tasks.",
          "HU": "Mivel a jogalkotó feladata, hogy jogszabályban határozza meg, hogy a közhatalmi szervek milyen jogalapon kezelhetek személyes adatokat, az adatkezelő jogszerű érdekét alátámasztó jogalapot nem lehet alkalmazni, a közhatalmi szervek által feladataik ellátása során végzett adatkezelésre."
        },
        {
          "EN": "The processing of personal data strictly necessary for the purposes of preventing fraud also constitutes a legitimate interest of the data controller concerned.",
          "HU": "Személyes adatoknak a csalások megelőzése céljából feltétlenül szükséges kezelése szintén az érintett adatkezelő jogos érdekének minősül."
        },
        {
          "EN": "The processing of personal data for direct marketing purposes may be regarded as carried out for a legitimate interest.",
          "HU": "Személyes adatok közvetlen üzletszerzési célú kezelése szintén jogos érdeken alapulónak tekinthető."
        },
        {
          "EN": "(48) Controllers that are part of a group of undertakings or institutions affiliated to a central body may have a legitimate interest in transmitting personal data within the group of undertakings for internal administrative purposes, including the processing of clients' or employees' personal data.",
          "HU": "(48) A vállalkozáscsoport vagy központi szervhez kapcsolódó intézmények részét képező adatkezelőknek jogos érdeke fűződhet ahhoz, hogy a vállalkozáscsoporton belül belső adminisztratív célból személyes adatokat továbbítsanak, ideértve az ügyfelek és az alkalmazottak személyes adatainak a kezelését is."
        },
        {
          "EN": "The general principles for the transfer of personal data, within a group of undertakings, to an undertaking located in a third country remain unaffected.",
          "HU": "A személyes adatok továbbítására vonatkozó általános elvek nem különböznek abban az esetben sem, ha a vállalkozáscsoporton belüli személyes adatok továbbításának címzettje harmadik országban található."
        },
        {
          "EN": "(49) The processing of personal data to the extent strictly necessary and proportionate for the purposes of ensuring network and information security, i.e. the ability of a network or an information system to resist, at a given level of confidence, accidental events or unlawful or malicious actions that compromise the availability, authenticity, integrity and confidentiality of stored or transmitted personal data, and the security of the related services offered by, or accessible via, those networks and systems, by public authorities, by computer emergency response teams (CERTs), computer security incident response teams (CSIRTs), by providers of electronic communications networks and services and by providers of security technologies and services, constitutes a legitimate interest of the data controller concerned.",
          "HU": "(49) Az érintett adatkezelő jogos érdekének minősül a közhatalmi szervek, számítástechnikai vészhelyzetekre reagáló egység (CERT), hálózatbiztonsági incidenskezelő egységek (CSIRT), elektronikus hírközlési hálózatok üzemeltetői és szolgáltatások nyújtói, valamint biztonságtechnológiai szolgáltatók által végrehajtott olyan mértékű személyes adatkezelés, amely a hálózati és informatikai biztonság garantálásához feltétlenül szükséges és arányos, vagyis adott titkossági szinten az érintett hálózat vagy információs rendszer ellenálló képessége az e hálózatokon és rendszereken tárolt vagy továbbított adatok, valamint az e hálózatok és rendszerek által nyújtott vagy rajtuk keresztül elérhető kapcsolódó szolgáltatások hozzáférhetőségét, hitelességét, integritását és bizalmas jellegét sértő véletlen eseményekkel, illetve jogellenes vagy rosszhiszemű tevékenységekkel szemben."
        },
        {
          "EN": "This could, for example, include preventing unauthorised access to electronic communications networks and malicious code distribution and stopping ‘denial of service’ attacks and damage to computer and electronic communication systems.",
          "HU": "Ez magában foglalhatja például az elektronikus kommunikációs hálózatokhoz való engedély nélküli hozzáférés és a rosszindulatú programterjesztés megakadályozását, továbbá a szolgáltatás megtagadásával járó támadások, valamint a számítógépes és elektronikus kommunikációs rendszerekben való károkozás megállítását."
        },
        {
          "EN": "(50) The processing of personal data for purposes other than those for which the personal data were initially collected should be allowed only where the processing is compatible with the purposes for which the personal data were initially collected.",
          "HU": "(50) A személyes adatoknak a gyűjtésük eredeti céljától eltérő egyéb célból történő kezelése csak akkor megengedett, ha az adatkezelés összeegyeztethető az adatkezelés eredeti céljaival, amelyekre a személyes adatokat eredetileg gyűjtötték."
        },
        {
          "EN": "In such a case, no legal basis separate from that which allowed the collection of the personal data is required.",
          "HU": "Ebben az esetben nincs szükség attól a jogalaptól eltérő, külön jogalapra, mint amely lehetővé tette a személyes adatok gyűjtését."
        },
        {
          "EN": "If the processing is necessary for the performance of a task carried out in the public interest or in the exercise of official authority vested in the controller, Union or Member State law may determine and specify the tasks and purposes for which the further processing should be regarded as compatible and lawful.",
          "HU": "Ha az adatkezelés közérdekből elvégzendő feladat végrehajtása vagy az adatkezelőre ruházott közhatalmi jogosítvány gyakorlása érdekében szükséges, uniós vagy tagállami jog meghatározhatja és pontosan leírhatja azokat a feladatokat és célokat, amelyek tekintetében a további adatkezelés jogszerűnek és összeegyeztethetőnek tekintendő."
        },
        {
          "EN": "Further processing for archiving purposes in the public interest, scientific or historical research purposes or statistical purposes should be considered to be compatible lawful processing operations.",
          "HU": "A közérdekű archiválás céljából, tudományos és történelmi kutatási célból vagy statisztikai célból folytatott további adatkezelést összeegyeztethető, jogszerű adatkezelési műveleteknek kell tekinteni."
        },
        {
          "EN": "The legal basis provided by Union or Member State law for the processing of personal data may also provide a legal basis for further processing.",
          "HU": "Az uniós vagy tagállami jogban foglalt, a személyes adatok kezelésére vonatkozó jogalap a további adatkezeléshez is jogalapul szolgálhat."
        },
        {
          "EN": "In order to ascertain whether a purpose of further processing is compatible with the purpose for which the personal data are initially collected, the controller, after having met all the requirements for the lawfulness of the original processing, should take into account, inter alia: any link between those purposes and the purposes of the intended further processing; the context in which the personal data have been collected, in particular the reasonable expectations of data subjects based on their relationship with the controller as to their further use; the nature of the personal data; the consequences of the intended further processing for data subjects; and the existence of appropriate safeguards in both the original and intended further processing operations.",
          "HU": "Annak megállapításához, hogy a további adatkezelés célja összeegyeztethető-e a személyes adatok gyűjtésének eredeti céljával, az adatkezelő – az eredeti adatkezelés jogszerűségére vonatkozó valamennyi előírás teljesítését követően – figyelembe veszi többek között minden, az említett eredeti célok és a tervezett további adatkezelési célok között fennálló összefüggést, az adatgyűjtés körülményeit, ideértve különösen az érintettnek a további adatfelhasználásra vonatkozó, az adatkezelővel fennálló kapcsolatán alapuló észszerű elvárásait is, továbbá a személyes adatok jellegét, a tervezett további adatkezelés következményeit az érintettekre nézve, valamint a megfelelő garanciák meglétét mind az eredeti, mind a tervezett további személyesadat-kezelési műveletek során."
        },
        {
          "EN": "Where the data subject has given consent or the processing is based on Union or Member State law which constitutes a necessary and proportionate measure in a democratic society to safeguard, in particular, important objectives of general public interest, the controller should be allowed to further process the personal data irrespective of the compatibility of the purposes.",
          "HU": "Ha az érintett hozzájárulását adta, illetve ha az adatkezelés uniós vagy tagállami jogon alapul, és egy demokratikus társadalomban szükséges és arányos intézkedésnek minősül bizonyos fontos közérdekek védelme szempontjából, a célok összeegyeztethetőségétől függetlenül az adatkezelő jogosult a szóban forgó adatokon további adatkezelést végezni."
        },
        {
          "EN": "In any case, the application of the principles set out in this Regulation and in particular the information of the data subject on those other purposes and on his or her rights including the right to object, should be ensured.",
          "HU": "Minden esetben biztosítani kell az e rendeletben rögzített elvek érvényesülését, valamint különösen az érintett tájékoztatását ezen egyéb célokról és a jogairól, ideértve a tiltakozáshoz való jogról."
        },
        {
          "EN": "Indicating possible criminal acts or threats to public security by the controller and transmitting the relevant personal data in individual cases or in several cases relating to the same criminal act or threats to public security to a competent authority should be regarded as being in the legitimate interest pursued by the controller.",
          "HU": "Az adatkezelő jogos érdekének tekintendő, ha jelzi a lehetséges bűncselekményeket vagy a közbiztonságot fenyegető veszélyeket, és az ugyanazon bűncselekményhez vagy közbiztonságot fenyegető veszélyhez kapcsolódó releváns személyes adatokat egyedi esetekben vagy több különálló esetben továbbítja az illetékes hatóságnak."
        },
        {
          "EN": "However, such transmission in the legitimate interest of the controller or further processing of personal data should be prohibited if the processing is not compatible with a legal, professional or other binding obligation of secrecy.",
          "HU": "Ha azonban az adatkezelés nem egyeztethető össze valamely jogi, szakmai vagy egyéb titoktartási kötelezettséggel, az adatkezelő jogos érdekében álló ilyen adattovábbítást, illetve a személyes adatok további kezelését meg kell tiltani."
        },
        {
          "EN": "(51) Personal data which are, by their nature, particularly sensitive in relation to fundamental rights and freedoms merit specific protection as the context of their processing could create significant risks to the fundamental rights and freedoms.",
          "HU": "(51) Az alapvető jogok és szabadságok szempontjából a természetüknél fogva különösen érzékeny személyes adatok egyedi védelmet igényelnek, mivel az alapvető jogokra és szabadságokra nézve a kezelésük körülményei jelentős kockázatot hordozhatnak."
        },
        {
          "EN": "Those personal data should include personal data revealing racial or ethnic origin, whereby the use of the term ‘racial origin’ in this Regulation does not imply an acceptance by the Union of theories which attempt to determine the existence of separate human races.",
          "HU": "Ilyen adatnak minősül a faji vagy etnikai származásra utaló személyes adatok is; e tekintetben megjegyzendő, hogy a „faji származás” kifejezés e rendelet keretében történő alkalmazása nem értelmezhető úgy, hogy az Unió elfogadja a különböző emberi fajok létezésének megállapítására törekvő elméleteket."
        },
        {
          "EN": "The processing of photographs should not systematically be considered to be processing of special categories of personal data as they are covered by the definition of biometric data only when processed through a specific technical means allowing the unique identification or authentication of a natural person.",
          "HU": "A fényképek kezelését nem szükséges szisztematikusan különleges adatkezelésnek tekinteni, mivel azokra csak azokban az esetekben vonatkozik a biometrikus adatok fogalommeghatározása, amikor a természetes személy egyedi azonosítását vagy hitelesítését lehetővé tevő speciális eszközzel kezelik őket."
        },
        {
          "EN": "Such personal data should not be processed, unless processing is allowed in specific cases set out in this Regulation, taking into account that Member States law may lay down specific provisions on data protection in order to adapt the application of the rules of this Regulation for compliance with a legal obligation or for the performance of a task carried out in the public interest or in the exercise of official authority vested in the controller.",
          "HU": "Az ilyen adatok nem kezelhetők, kivéve, ha az adatkezelés az e rendeletben meghatározott egyedi esetekben megengedett, azt is figyelembe véve, hogy a tagállami jog különös rendelkezéseket állapíthat meg az adatok védelmére vonatkozóan annak érdekében, hogy kiigazítsák az e rendeletben foglalt szabályok alkalmazását valamely jogi kötelezettségnek való megfelelés vagy közérdekből végzett feladat végrehajtása vagy az adatkezelőre ruházott közhatalmi jogosítvány gyakorlása tekintetében."
        },
        {
          "EN": "In addition to the specific requirements for such processing, the general principles and other rules of this Regulation should apply, in particular as regards the conditions for lawful processing.",
          "HU": "Az ilyen adatkezelésre vonatkozó konkrét előírásokon kívül e rendelet általános elveit és egyéb szabályait kell alkalmazni, különösen a jogszerű adatkezelés feltételei tekintetében."
        },
        {
          "EN": "Derogations from the general prohibition for processing such special categories of personal data should be explicitly provided, inter alia, where the data subject gives his or her explicit consent or in respect of specific needs in particular where the processing is carried out in the course of legitimate activities by certain associations or foundations the purpose of which is to permit the exercise of fundamental freedoms.",
          "HU": "A személyes adatok ilyen különleges kategóriáinak kezelésére vonatkozó általános tilalomtól való eltérésről kifejezetten rendelkezni kell, ideértve, ha az érintett egyértelmű hozzájárulását adja, vagy bizonyos sajátos adatkezelési szükségletekre tekintettel, különösen, ha az adatkezelést jogszerű tevékenységük keretében olyan egyesületek, illetve alapítványok végzik –, amelyek célja az alapvető szabadságok gyakorlásának lehetővé tétele."
        },
        {
          "EN": "(52) Derogating from the prohibition on processing special categories of personal data should also be allowed when provided for in Union or Member State law and subject to suitable safeguards, so as to protect personal data and other fundamental rights, where it is in the public interest to do so, in particular processing personal data in the field of employment law, social protection law including pensions and for health security, monitoring and alert purposes, the prevention or control of communicable diseases and other serious threats to health.",
          "HU": "(52) A személyes adatok különleges kategóriáira vonatkozó adatkezelési tilalomtól való eltérés szintén megengedhető, ha erről az uniós vagy tagállami jog rendelkezik, és ha arra megfelelő garanciák mellett kerül sor a személyes adatok és más alapvető jogok védelme érdekében, ha ez valamely közérdeken alapul, így különösen a foglalkoztatási jog és a szociális védelmi jog területén, a nyugdíjakat is beleértve, valamint a népegészség-védelem, a nyomonkövetési és riasztási célok, a fertőző betegségek és más súlyos egészségügyi veszélyek megelőzése, valamint az ellenük való védekezés érdekében végzett személyesadat-kezelés esetében."
        },
        {
          "EN": "Such a derogation may be made for health purposes, including public health and the management of health-care services, especially in order to ensure the quality and cost-effectiveness of the procedures used for settling claims for benefits and services in the health insurance system, or for archiving purposes in the public interest, scientific or historical research purposes or statistical purposes.",
          "HU": "Ezekre az eltérésekre egészségügyi célokból – köztük a népegészségüggyel és az egészségügyi szolgáltatások irányításával kapcsolatos célokból – kerülhet sor, különösen annak biztosítása érdekében, hogy az egészségbiztosítási rendszer szolgáltatásaival és juttatásaival kapcsolatos igények rendezésére szolgáló eljárások magas szintűek és költséghatékonyak legyenek, továbbá a közérdekű archiválás céljából, tudományos és történelmi kutatási célból vagy statisztikai célból."
        },
        {
          "EN": "A derogation should also allow the processing of such personal data where necessary for the establishment, exercise or defence of legal claims, whether in court proceedings or in an administrative or out-of-court procedure.",
          "HU": "Eltérés alapján az ilyen személyes adatok kezelése olyan esetekben lehetséges, amikor az jogi igények előterjesztése, érvényesítése, illetve védelme céljából szükséges, függetlenül attól, hogy erre bírósági eljárás, közigazgatási, vagy egyéb, nem bírósági útra tatozó eljárás keretében kerül-e sor."
        },
        {
          "EN": "(53) Special categories of personal data which merit higher protection should be processed for health-related purposes only where necessary to achieve those purposes for the benefit of natural persons and society as a whole, in particular in the context of the management of health or social care services and systems, including processing by the management and central national health authorities of such data for the purpose of quality control, management information and the general national and local supervision of the health or social care system, and ensuring continuity of health or social care and cross-border healthcare or health security, monitoring and alert purposes, or for archiving purposes in the public interest, scientific or historical research purposes or statistical purposes, based on Union or Member State law which has to meet an objective of public interest, as well as for studies conducted in the public interest in the area of public health.",
          "HU": "(53) A különleges kategóriába tartozó, magasabb szintű védelmet igénylő személyes adatokat kizárólag abban az esetben lehet az egészséggel kapcsolatos célokból kezelni, ha az az említett céloknak a természetes személyek és a társadalom egészének érdekében történő eléréséhez szükséges, különösen az egészségügyi és szociális szolgáltatások és rendszerek irányításának összefüggésében, beleértve azt is, amikor az irányító és központi nemzeti egészségügyi hatóságok a következő célokból végzik az ilyen adatok kezelését: minőségellenőrzés, információkezelés, valamint az egészségügyi és szociális rendszer általános országos és helyi felügyelete, továbbá az egészségügyi és szociális ellátás, a határokon átnyúló egészségügyi ellátás, valamint a népegészség-védelem folytonosságának biztosítása, nyomonkövetési és riasztási célok, a közérdekű archiválás céljából, tudományos és történelmi kutatási vagy statisztikai célból közérdekű célt szolgáló uniós vagy tagállami jog alapján, illetve a népegészség területén közérdekből készített tanulmányok céljából."
        },
        {
          "EN": "Therefore, this Regulation should provide for harmonised conditions for the processing of special categories of personal data concerning health, in respect of specific needs, in particular where the processing of such data is carried out for certain health-related purposes by persons subject to a legal obligation of professional secrecy.",
          "HU": "Ebből kifolyólag a sajátos adatkezelési szükségletek tekintetében ebben a rendeletben harmonizált feltételeket kell meghatározni az egészségügyi személyes adatok különleges kategóriáinak kezelésére vonatkozóan, különösen azt illetően, ha ezen adatok kezelését bizonyos egészséggel kapcsolatos célokból olyan személyek végzik, akikre jogszabályban megállapított szakmai titoktartási kötelezettség vonatkozik."
        },
        {
          "EN": "Union or Member State law should provide for specific and suitable measures so as to protect the fundamental rights and the personal data of natural persons.",
          "HU": "Az uniós vagy tagállami jogban rendelkezni kell olyan célzott és megfelelő intézkedésekről, amelyek a természetes személyek alapvető jogainak és személyes adatainak védelmére irányulnak."
        },
        {
          "EN": "Member States should be allowed to maintain or introduce further conditions, including limitations, with regard to the processing of genetic data, biometric data or data concerning health.",
          "HU": "A tagállamok további feltételeket – például korlátozásokat – tarthatnak hatályban, illetve vezethetnek be a genetikai adatok, a biometrikus adatok és az egészségügyi adatok kezelésére vonatkozóan."
        },
        {
          "EN": "However, this should not hamper the free flow of personal data within the Union when those conditions apply to cross-border processing of such data.",
          "HU": "Ez azonban nem akadályozhatja a személyes adatok Unión belüli szabad áramlását azokban az esetekben, amikor az említett feltételek az ilyen adatok határokon átnyúló kezelésére vonatkoznak."
        },
        {
          "EN": "(54) The processing of special categories of personal data may be necessary for reasons of public interest in the areas of public health without consent of the data subject.",
          "HU": "(54) A népegészség területén közérdekből szükséges lehet a személyes adatok különleges kategóriáinak az érintett hozzájárulása nélkül történő kezelése."
        },
        {
          "EN": "Such processing should be subject to suitable and specific measures so as to protect the rights and freedoms of natural persons.",
          "HU": "Az ilyen adatkezelés vonatkozásában a természetes személyek jogainak és szabadságainak védelme érdekében, megfelelő és célzott intézkedéseket kell hozni."
        },
        {
          "EN": "In that context, ‘public health’ should be interpreted as defined in Regulation (EC) No 1338/2008 of the European Parliament and of the Council [11](11), namely all elements related to health, namely health status, including morbidity and disability, the determinants having an effect on that health status, health care needs, resources allocated to health care, the provision of, and universal access to, health care as well as health care expenditure and financing, and the causes of mortality.",
          "HU": "Ebben az összefüggésben a „népegészség” fogalmát az 1338/2008/EK európai parlamenti és tanácsi rendeletben [11](11) meghatározottak szerint a következőképpen kell értelmezni: valamennyi, az egészséggel kapcsolatos elem, nevezetesen az egészségi állapot – beleértve a morbiditást és a fogyatékosságot –, az egészségi állapotot meghatározó tényezők, az egészségügyi ellátással kapcsolatos igények, az egészségügyi ellátásra biztosított források, az egészségügyi ellátás nyújtása és az ahhoz való általános hozzáférés, valamint az egészségügyi ellátással kapcsolatos kiadások és finanszírozás, továbbá a halálokok."
        },
        {
          "EN": "Such processing of data concerning health for reasons of public interest should not result in personal data being processed for other purposes by third parties such as employers or insurance and banking companies.",
          "HU": "Az egészségügyi adatok ilyen közérdekű kezelése nem eredményezheti a személyes adatok más célokból harmadik személyek, így munkáltatók, vagy biztosítók és bankok általi kezelését."
        },
        {
          "EN": "(55) Moreover, the processing of personal data by official authorities for the purpose of achieving the aims, laid down by constitutional law or by international public law, of officially recognised religious associations, is carried out on grounds of public interest.",
          "HU": "(55) A személyes adatok hatóságok általi, hivatalosan elismert vallási szervezetek alkotmányjogban vagy nemzetközi közjogban megállapított céljainak elérése érdekében történő kezelése közérdeken alapulónak minősül."
        },
        {
          "EN": "(56) Where in the course of electoral activities, the operation of the democratic system in a Member State requires that political parties compile personal data on people's political opinions, the processing of such data may be permitted for reasons of public interest, provided that appropriate safeguards are established.",
          "HU": "(56) Ha választással kapcsolatos tevékenységek során valamely tagállamban a demokratikus rendszer működése megkívánja, hogy a politikai pártok személyes adatokat gyűjtsenek az emberek politikai véleményéről, akkor az ilyen adatok kezelése közérdekből megengedhető, feltéve hogy megfelelő garanciák vannak érvényben."
        },
        {
          "EN": "(57) If the personal data processed by a controller do not permit the controller to identify a natural person, the data controller should not be obliged to acquire additional information in order to identify the data subject for the sole purpose of complying with any provision of this Regulation.",
          "HU": "(57) Ha az adatkezelő által kezelt személyes adatok nem teszik lehetővé az adatkezelő számára valamely természetes személy azonosítását, akkor az adatkezelőt az érintett személyazonosságának megállapítása érdekben nem lehet további információk beszerzésére kötelezni annak érdekében, hogy az adatkezelő megfeleljen e rendelet valamely rendelkezésének."
        },
        {
          "EN": "However, the controller should not refuse to take additional information provided by the data subject in order to support the exercise of his or her rights.",
          "HU": "Az adatkezelő ugyanakkor nem utasíthatja vissza az érintett által a jogai gyakorlásának támogatása érdekében nyújtott további információkat."
        },
        {
          "EN": "Identification should include the digital identification of a data subject, for example through authentication mechanism such as the same credentials, used by the data subject to log-in to the on-line service offered by the data controller.",
          "HU": "Az azonosítás magában foglalja az érintettek például olyan hitelesítési mechanizmus révén történő digitális azonosítását, amelynek keretében az érintett ugyanazokat a belépési azonosító adatokat adja meg, amelyeket az adatkezelő által nyújtott online szolgáltatáshoz történő bejelentkezéshez használ."
        },
        {
          "EN": "(58) The principle of transparency requires that any information addressed to the public or to the data subject be concise, easily accessible and easy to understand, and that clear and plain language and, additionally, where appropriate, visualisation be used.",
          "HU": "(58) Az átláthatóság elve megköveteli, hogy a nyilvánosságnak vagy az érintettnek nyújtott tájékoztatás tömör, könnyen hozzáférhető és könnyen érthető legyen, valamint hogy azt világos és közérthető nyelven fogalmazzák meg, illetve – ezen túlmenően – szükség esetén vizuálisan is megjelenítsék."
        },
        {
          "EN": "Such information could be provided in electronic form, for example, when addressed to the public, through a website.",
          "HU": "Az ilyen tájékoztatás nyújtható elektronikus formátumban is, így például a nyilvánosságnak szánt tájékoztatás közölhető valamely honlapon keresztül."
        },
        {
          "EN": "This is of particular relevance in situations where the proliferation of actors and the technological complexity of practice make it difficult for the data subject to know and understand whether, by whom and for what purpose personal data relating to him or her are being collected, such as in the case of online advertising.",
          "HU": "Ez különösen olyan helyzetekben lehet fontos, amikor a szereplők nagy száma és a gyakorlat technológiai összetettsége megnehezíti az érintett számára annak megismerését és megértését, hogy gyűjtenek-e róla személyes adatokat, és ha igen, ki és milyen célból, ilyen például az online reklámozás esete."
        },
        {
          "EN": "Given that children merit specific protection, any information and communication, where processing is addressed to a child, should be in such a clear and plain language that the child can easily understand.",
          "HU": "Mivel a gyermekek különös védelmet igényelnek, a kifejezetten gyermekekre vonatkozó adatkezelés vonatkozásában minden információt és kommunikációt olyan világos és közérthető nyelven kell megfogalmazni, amelyet a gyermek könnyen megért."
        },
        {
          "EN": "(59) Modalities should be provided for facilitating the exercise of the data subject's rights under this Regulation, including mechanisms to request and, if applicable, obtain, free of charge, in particular, access to and rectification or erasure of personal data and the exercise of the right to object.",
          "HU": "(59) Az érintettek e rendeletben biztosított jogainak gyakorlását megkönnyítő intézkedéseket kell biztosítani, ideértve olyan mechanizmusok biztosítását, amely által többek között az érintettnek lehetősége van díjmentesen kérelmezni, illetve adott esetben megkapni különösen a személyes adatokhoz való hozzáférést, azok helyesbítését és törlését, valamint gyakorolja a tiltakozáshoz való jogát."
        },
        {
          "EN": "The controller should also provide means for requests to be made electronically, especially where personal data are processed by electronic means.",
          "HU": "Az adatkezelő ennek megfelelően biztosítja a kérelmek elektronikus benyújtását lehetővé tevő eszközöket is különösen, ha a személyes adatok kezelése elektronikus úton történik."
        },
        {
          "EN": "The controller should be obliged to respond to requests from the data subject without undue delay and at the latest within one month and to give reasons where the controller does not intend to comply with any such requests.",
          "HU": "Az adatkezelőt kötelezni kell arra, hogy az érintett kérelmére indokolatlan késedelem nélkül, de legkésőbb egy hónapon belül válaszoljon, és ha az adatkezelő az érintett bármely kérelmének nem tesz eleget, indokolnia kell azt."
        },
        {
          "EN": "(60) The principles of fair and transparent processing require that the data subject be informed of the existence of the processing operation and its purposes.",
          "HU": "(60) A tisztességes és átlátható adatkezelés elve megköveteli, hogy az érintett tájékoztatást kapjon az adatkezelés tényéről és céljairól."
        },
        {
          "EN": "The controller should provide the data subject with any further information necessary to ensure fair and transparent processing taking into account the specific circumstances and context in which the personal data are processed.",
          "HU": "Az adatkezelő olyan további információt is az érintett rendelkezésére bocsát, amelyek a tisztességes és átlátható adatkezelés biztosításához szükségesek, figyelembe véve a személyes adatok kezelésének konkrét körülményeit és kontextusát."
        },
        {
          "EN": "Furthermore, the data subject should be informed of the existence of profiling and the consequences of such profiling.",
          "HU": "Az érintettet továbbá a profilalkotás tényéről és annak következményeiről tájékoztatni kell."
        },
        {
          "EN": "Where the personal data are collected from the data subject, the data subject should also be informed whether he or she is obliged to provide the personal data and of the consequences, where he or she does not provide such data.",
          "HU": "Ha a személyes adatokat az érintettől gyűjtik, az érintettet arról is tájékoztatni kell, hogy köteles-e a személyes adatokat közölni, valamint hogy az adatszolgáltatás elmaradása milyen következményekkel jár."
        },
        {
          "EN": "That information may be provided in combination with standardised icons in order to give in an easily visible, intelligible and clearly legible manner, a meaningful overview of the intended processing.",
          "HU": "Ezeket az információkat szabványosított ikonokkal is ki lehet egészíteni annak érdekében, hogy az érintett a tervezett adatkezelésről jól látható, könnyen érthető és jól olvasható formában általános tájékoztatást kapjon."
        },
        {
          "EN": "Where the icons are presented electronically, they should be machine-readable.",
          "HU": "Amikor az ikonokat elektronikus formátumban jelenítik meg, azoknak géppel olvashatóknak kell lenniük."
        },
        {
          "EN": "(61) The information in relation to the processing of personal data relating to the data subject should be given to him or her at the time of collection from the data subject, or, where the personal data are obtained from another source, within a reasonable period, depending on the circumstances of the case.",
          "HU": "(61) Az érintettre vonatkozó személyes adatok kezelésével összefüggő tájékoztatást az adatgyűjtés időpontjában kell az érintett részére megadni, illetve ha az adatokat nem az érintettől, hanem más forrásból gyűjtötték, az ügy körülményeit figyelembe véve, észszerű határidőn belül kell rendelkezésre bocsátani."
        },
        {
          "EN": "Where personal data can be legitimately disclosed to another recipient, the data subject should be informed when the personal data are first disclosed to the recipient.",
          "HU": "Ha a személyes adatok jogszerűen közölhetőek más címzettel, a címzettel történő első közléskor arról az érintettet tájékoztatni kell."
        },
        {
          "EN": "Where the controller intends to process the personal data for a purpose other than that for which they were collected, the controller should provide the data subject prior to that further processing with information on that other purpose and other necessary information.",
          "HU": "Ha az adatkezelő a személyes adatokat a gyűjtésük eredeti céljától eltérő célból kívánja kezelni, a további adatkezelést megelőzően az érintettet erről az eltérő célról és minden egyéb szükséges tudnivalóról tájékoztatnia kell."
        },
        {
          "EN": "Where the origin of the personal data cannot be provided to the data subject because various sources have been used, general information should be provided.",
          "HU": "Ha az adatkezelő nem tud tájékoztatást nyújtani az érintett részére a személyes adatok eredetéről, mivel azok különböző forrásokból származnak, általános tájékoztatást kell adni."
        },
        {
          "EN": "(62) However, it is not necessary to impose the obligation to provide information where the data subject already possesses the information, where the recording or disclosure of the personal data is expressly laid down by law or where the provision of information to the data subject proves to be impossible or would involve a disproportionate effort.",
          "HU": "(62) Mindazonáltal a tájékoztatás nyújtására vonatkozó kötelezettség előírása nem szükséges, ha az érintettnek ez az információ már a birtokában van, vagy ha a személyes adat rögzítését, illetve közlését valamely jogszabály kifejezetten előírja, vagy ha az érintett tájékoztatása lehetetlennek bizonyul vagy aránytalanul nagy erőfeszítést igényelne."
        },
        {
          "EN": "The latter could in particular be the case where processing is carried out for archiving purposes in the public interest, scientific or historical research purposes or statistical purposes.",
          "HU": "E helyzet állhat elő különösen akkor, ha az adatkezelés közérdekű archiválás célt, tudományos és történelmi kutatási célt vagy statisztikai célt szolgál."
        },
        {
          "EN": "In that regard, the number of data subjects, the age of the data and any appropriate safeguards adopted should be taken into consideration.",
          "HU": "E tekintetben az érintettek számát, az adatok korát, valamint az elfogadott megfelelő garanciákat figyelembe kell venni."
        },
        {
          "EN": "(63) A data subject should have the right of access to personal data which have been collected concerning him or her, and to exercise that right easily and at reasonable intervals, in order to be aware of, and verify, the lawfulness of the processing.",
          "HU": "(63) Az érintett jogosult, hogy hozzáférjen a rá vonatkozóan gyűjtött adatokhoz, valamint arra, hogy egyszerűen és észszerű időközönként, az adatkezelés jogszerűségének megállapítása és ellenőrzése érdekében gyakorolja e jogát."
        },
        {
          "EN": "This includes the right for data subjects to have access to data concerning their health, for example the data in their medical records containing information such as diagnoses, examination results, assessments by treating physicians and any treatment or interventions provided.",
          "HU": "Ez magában foglalja az érintett jogát arra, hogy az egészségi állapotára vonatkozó személyes adatokhoz – mint például a diagnózis, a vizsgálati leletek, a kezelőorvosok véleményei, valamint a kezeléseket és a beavatkozásokat tartalmazó egészségügyi dokumentációk – hozzáférjen."
        },
        {
          "EN": "Every data subject should therefore have the right to know and obtain communication in particular with regard to the purposes for which the personal data are processed, where possible the period for which the personal data are processed, the recipients of the personal data, the logic involved in any automatic personal data processing and, at least when based on profiling, the consequences of such processing.",
          "HU": "Ezért minden érintett számára biztosítani kell a jogot arra, hogy megismerje különösen a személyes adatok kezelésének céljait, továbbá ha lehetséges, azt, hogy a személyes adatok kezelése milyen időtartamra vonatkozik, a személyes adatok címzettjeit, azt, hogy a személyes adatok automatizált kezelése milyen logika alapján történt, valamint azt, hogy az adatkezelés – legalább abban az esetben, amikor az profilalkotásra épül – milyen következményekkel járhat, továbbá hogy minderről tájékoztatást kapjon."
        },
        {
          "EN": "Where possible, the controller should be able to provide remote access to a secure system which would provide the data subject with direct access to his or her personal data.",
          "HU": "Ha lehetséges, az adatkezelő távoli hozzáférést biztosíthat egy biztonságos rendszerhez, amelyen keresztül az érintett a saját személyes adataihoz közvetlenül hozzáférhet."
        },
        {
          "EN": "That right should not adversely affect the rights or freedoms of others, including trade secrets or intellectual property and in particular the copyright protecting the software.",
          "HU": "Ez a jog nem érintheti hátrányosan mások jogait és szabadságait, beleértve az üzleti titkokat vagy a szellemi tulajdont, és különösen a szoftverek védelmét biztosító szerzői jogokat."
        },
        {
          "EN": "However, the result of those considerations should not be a refusal to provide all information to the data subject.",
          "HU": "Ezek a megfontolások mindazonáltal nem eredményezhetik azt, hogy az érintettől minden információt megtagadnak."
        },
        {
          "EN": "Where the controller processes a large quantity of information concerning the data subject, the controller should be able to request that, before the information is delivered, the data subject specify the information or processing activities to which the request relates.",
          "HU": "Ha az adatkezelő nagy mennyiségű információt kezel az érintettre vonatkozóan, kérheti az érintettet, hogy az információk közlését megelőzően pontosítsa, hogy kérése mely információkra vagy mely adatkezelési tevékenységekre vonatkozik."
        },
        {
          "EN": "(64) The controller should use all reasonable measures to verify the identity of a data subject who requests access, in particular in the context of online services and online identifiers.",
          "HU": "(64) Az adatkezelő minden észszerű intézkedést megtesz a hozzáférést kérő érintett személyazonosságának megállapítására, különösen az online szolgáltatásokkal és az online azonosítókkal összefüggésben."
        },
        {
          "EN": "A controller should not retain personal data for the sole purpose of being able to react to potential requests.",
          "HU": "Az adatkezelő nem őrizheti meg a személyes adatokat kizárólag abból a célból, hogy a lehetséges kérelmeket meg tudja válaszolni."
        },
        {
          "EN": "(65) A data subject should have the right to have personal data concerning him or her rectified and a ‘right to be forgotten’ where the retention of such data infringes this Regulation or Union or Member State law to which the controller is subject.",
          "HU": "(65) Az érintett jogosult arra, hogy kérhesse a rá vonatkozó személyes adatok helyesbítését és megilleti őt az „elfeledtetéshez való jog”, ha a szóban forgó adatok megőrzése sérti e rendeletet vagy az olyan uniós vagy tagállami jogot, amelynek hatálya az adatkezelőre kiterjed."
        },
        {
          "EN": "In particular, a data subject should have the right to have his or her personal data erased and no longer processed where the personal data are no longer necessary in relation to the purposes for which they are collected or otherwise processed, where a data subject has withdrawn his or her consent or objects to the processing of personal data concerning him or her, or where the processing of his or her personal data does not otherwise comply with this Regulation.",
          "HU": "Az érintett jogosult különösen arra, hogy személyes adatait töröljék és a továbbiakban ne kezeljék, ha a személyes adatok gyűjtése vagy más módon való kezelése az adatkezelés eredeti céljaival összefüggésben már nincs szükség, vagy ha az érintettek visszavonták az adatok kezeléshez adott hozzájárulásukat, vagy ha személyes adataik kezelése egyéb szempontból nem felel meg e rendeletnek."
        },
        {
          "EN": "That right is relevant in particular where the data subject has given his or her consent as a child and is not fully aware of the risks involved by the processing, and later wants to remove such personal data, especially on the internet.",
          "HU": "Ez a jog különösen akkor lényeges, ha az érintett gyermekként adta meg hozzájárulását, amikor még nem volt teljes mértékben tisztában az adatkezelés kockázataival, később pedig el akarja távolítani a szóban forgó személyes adatokat, különösen az internetről."
        },
        {
          "EN": "The data subject should be able to exercise that right notwithstanding the fact that he or she is no longer a child.",
          "HU": "Az érintett e jogát gyakorolhatja akkor is, ha már nem gyermek."
        },
        {
          "EN": "However, the further retention of the personal data should be lawful where it is necessary, for exercising the right of freedom of expression and information, for compliance with a legal obligation, for the performance of a task carried out in the public interest or in the exercise of official authority vested in the controller, on the grounds of public interest in the area of public health, for archiving purposes in the public interest, scientific or historical research purposes or statistical purposes, or for the establishment, exercise or defence of legal claims.",
          "HU": "Ugyanakkor a személyes adatok további megőrzése jogszerűnek tekinthető, ha az a véleménynyilvánítás és a tájékozódás szabadságához való jog gyakorlása, valamely jogi kötelezettségnek való megfelelés, illetőleg közérdekből végzett feladat végrehajtása vagy az adatkezelőre ruházott közhatalmi jogosítvány gyakorlása miatt, vagy a népegészségügy területét érintő közérdekből, közérdekű archiválás céljából, tudományos és történelmi kutatási célból vagy statisztikai célból, vagy jogi igények előterjesztéséhez, érvényesítéséhez, illetve védelméhez szükséges."
        },
        {
          "EN": "(66) To strengthen the right to be forgotten in the online environment, the right to erasure should also be extended in such a way that a controller who has made the personal data public should be obliged to inform the controllers which are processing such personal data to erase any links to, or copies or replications of those personal data.",
          "HU": "(66) Az elfeledtetéshez való jog online környezetben történő megerősítése érdekében a törléshez való jogot emellett oly módon szükséges kiterjeszteni, hogy a személyes adatokat nyilvánosságra hozó adatkezelőnek észszerű lépéseket kell tennie – ideértve a technikai intézkedések alkalmazását is – annak érdekében, hogy az ilyen személyes adatokat kezelő adatkezelőket tájékoztassa arról, hogy az érintett kezdeményezte a szóban forgó személyes adatokra mutató linkek vagy e személyes adatok másolatának, illetve másodpéldányának törlését."
        },
        {
          "EN": "In doing so, that controller should take reasonable steps, taking into account available technology and the means available to the controller, including technical measures, to inform the controllers which are processing the personal data of the data subject's request.",
          "HU": "E tájékoztatás során az adatkezelő a rendelkezésre álló technológiát és a végrehajtás költségeit figyelembe veszi annak érdekében, hogy a személyes adatokat kezelő adatkezelők értesüljenek az érintett kéréséről."
        },
        {
          "EN": "(67) Methods by which to restrict the processing of personal data could include, inter alia, temporarily moving the selected data to another processing system, making the selected personal data unavailable to users, or temporarily removing published data from a website.",
          "HU": "(67) A személyes adatok kezelésének korlátozására alkalmazott módszerek közé tartozhat többek között a szóban forgó személyes adatoknak egy másik adatkezelő rendszerbe történő ideiglenes áthelyezése vagy a felhasználók számára való hozzáférhetőségük megszüntetése, vagy egy honlapról az ott közzétett adatok ideiglenes eltávolítása."
        },
        {
          "EN": "In automated filing systems, the restriction of processing should in principle be ensured by technical means in such a manner that the personal data are not subject to further processing operations and cannot be changed.",
          "HU": "Az adatkezelés korlátozását az automatizált nyilvántartási rendszerekben alapvetően technikai eszközökkel kell biztosítani, oly módon, hogy a személyes adatokon további adatkezelési műveleteket ne végezzenek el és azokat ne lehessen megváltoztatni."
        },
        {
          "EN": "The fact that the processing of personal data is restricted should be clearly indicated in the system.",
          "HU": "Azt a tényt, hogy a személyes adatok kezelése korlátozott, egyértelműen jelezni kell a rendszerben."
        },
        {
          "EN": "(68) To further strengthen the control over his or her own data, where the processing of personal data is carried out by automated means, the data subject should also be allowed to receive personal data concerning him or her which he or she has provided to a controller in a structured, commonly used, machine-readable and interoperable format, and to transmit it to another controller.",
          "HU": "(68) Ha a személyes adatok kezelése automatizált módon történik, az érintettek számára – a saját adataik feletti rendelkezés további erősítése érdekében – lehetővé kell tenni azt is, hogy az általuk az adatkezelő rendelkezésére bocsátott, rájuk vonatkozó személyes adatokat tagolt, széles körben használt, géppel olvasható és interoperábilis formátumban megkapják, és azokat egy másik adatkezelő részére továbbítsák."
        },
        {
          "EN": "Data controllers should be encouraged to develop interoperable formats that enable data portability.",
          "HU": "Az adatkezelőket ösztönözni kell, hogy az adathordozhatóságot lehetővé tevő interoperábilis formátumokat fejlesszenek ki."
        },
        {
          "EN": "That right should apply where the data subject provided the personal data on the basis of his or her consent or the processing is necessary for the performance of a contract.",
          "HU": "Ez a jog abban az esetben gyakorolható, ha az érintett a személyes adatokat a hozzájárulása alapján bocsátotta rendelkezésre, illetve ha az adatkezelés szerződés teljesítéséhez szükséges."
        },
        {
          "EN": "It should not apply where processing is based on a legal ground other than consent or contract.",
          "HU": "E jog nem gyakorolható akkor, ha az adatkezelés jogalapja a hozzájárulástól vagy szerződéstől eltérő egyéb jogalap."
        },
        {
          "EN": "By its very nature, that right should not be exercised against controllers processing personal data in the exercise of their public duties.",
          "HU": "Ez a jog természeténél fogva nem állhat fenn olyan adatkezelőkkel szemben, akik a személyes adatok kezelését közhatalmi feladataik gyakorlása keretében végzik."
        },
        {
          "EN": "It should therefore not apply where the processing of the personal data is necessary for compliance with a legal obligation to which the controller is subject or for the performance of a task carried out in the public interest or in the exercise of an official authority vested in the controller.",
          "HU": "Ennélfogva nem gyakorolható különösen akkor, ha a személyes adatok kezelésére valamely, az adatkezelőre alkalmazandó jogi kötelezettség teljesítéséhez, illetve közérdekből vagy az adatkezelőre ruházott közhatalmi jogosítvány gyakorlása keretében végzett feladat végrehajtásához szükséges."
        },
        {
          "EN": "The data subject's right to transmit or receive personal data concerning him or her should not create an obligation for the controllers to adopt or maintain processing systems which are technically compatible.",
          "HU": "Az érintett azon joga, hogy továbbítsa, illetve megkapja a rá vonatkozóan kezelt személyes adatokat, nem teremthet olyan kötelezettséget az adatkezelők számára, hogy egymással műszakilag kompatibilis adatkezelő rendszereket vezessenek be vagy tartsanak fenn."
        },
        {
          "EN": "Where, in a certain set of personal data, more than one data subject is concerned, the right to receive the personal data should be without prejudice to the rights and freedoms of other data subjects in accordance with this Regulation.",
          "HU": "Ha egy adott személyes adatállomány egynél több érintettre vonatkozik, a személyes adatok megszerzéséhez való jog nem sértheti az egyéb érintettek e rendelet szerinti jogait."
        },
        {
          "EN": "Furthermore, that right should not prejudice the right of the data subject to obtain the erasure of personal data and the limitations of that right as set out in this Regulation and should, in particular, not imply the erasure of personal data concerning the data subject which have been provided by him or her for the performance of a contract to the extent that and for as long as the personal data are necessary for the performance of that contract.",
          "HU": "Ez a jog nem érinti továbbá az érintettnek jogát arra, hogy a személyes adatainak törlését elérje, sem pedig az e jogra vonatkozóan e rendeletben megállapított korlátozásokat, továbbá nem járhat különösen az érintettre vonatkozó olyan személyes adatok törlésével, amelyeket az érintett valamely szerződés teljesítése céljából bocsátott rendelkezésre, ha és ameddig a szóban forgó személyes adatokra szükség van az adott szerződés teljesítéséhez."
        },
        {
          "EN": "Where technically feasible, the data subject should have the right to have the personal data transmitted directly from one controller to another.",
          "HU": "Az érintett jogosult arra, hogy az adatokat az adatkezelők egymás között közvetlenül továbbítsák, ha ez technikailag megvalósítható."
        },
        {
          "EN": "(69) Where personal data might lawfully be processed because processing is necessary for the performance of a task carried out in the public interest or in the exercise of official authority vested in the controller, or on grounds of the legitimate interests of a controller or a third party, a data subject should, nevertheless, be entitled to object to the processing of any personal data relating to his or her particular situation.",
          "HU": "(69) Bármely érintett számára akkor is biztosítani kell a jogot arra, hogy az egyedi helyzetükre vonatkozó adatok kezelése ellen tiltakozzon, ha a személyes adatok jogszerűen kezelhetők, mert az adatkezelésre közérdekből vagy az adatkezelőre ruházott közhatalmi jogosítvány gyakorlása keretében végzett feladat végrehajtásához, illetve az adatkezelő vagy egy harmadik fél jogos érdekei alapján van szükség."
        },
        {
          "EN": "It should be for the controller to demonstrate that its compelling legitimate interest overrides the interests or the fundamental rights and freedoms of the data subject.",
          "HU": "Az adatkezelő bizonyítja, hogy az érintett érdekeivel vagy alapvető jogaival és szabadságaival szemben az ő kényszerítő erejű jogos érdeke elsőbbséget élvezhet."
        },
        {
          "EN": "(70) Where personal data are processed for the purposes of direct marketing, the data subject should have the right to object to such processing, including profiling to the extent that it is related to such direct marketing, whether with regard to initial or further processing, at any time and free of charge.",
          "HU": "(70) Ha a személyes adatok kezelése közvetlen üzletszerzés érdekében történik, az érintett számára biztosítani kell a jogot arra, hogy bármikor díjmentesen tiltakozzon a rá vonatkozó személyes adatok e célból történő – eredeti vagy további – kezelése ellen, amelybe beletartozik a profilalkotás is, ha az a közvetlen üzletszerzéshez kapcsolódik."
        },
        {
          "EN": "That right should be explicitly brought to the attention of the data subject and presented clearly and separately from any other information.",
          "HU": "Az érintett figyelmét e jogra kifejezetten fel kell hívni, és az erre vonatkozó tájékoztatást egyértelműen és minden más információtól elkülönítve kell megjeleníteni."
        },
        {
          "EN": "(71) The data subject should have the right not to be subject to a decision, which may include a measure, evaluating personal aspects relating to him or her which is based solely on automated processing and which produces legal effects concerning him or her or similarly significantly affects him or her, such as automatic refusal of an online credit application or e-recruiting practices without any human intervention.",
          "HU": "(71) Az érintett jogosult arra, hogy ne terjedjen ki rá olyan, kizárólag automatizált adatkezelésen alapuló – akár intézkedést is magában foglaló – döntés hatálya, amely a rá vonatkozó egyes személyes jellemzők kiértékelésén alapul, és amely rá nézve joghatással jár vagy őt hasonlóan jelentős mértékben érinti, mint például egy online hitelkérelem automatikus elutasítása vagy emberi beavatkozás nélkül folytatott online munkaerő-toborzás."
        },
        {
          "EN": "Such processing includes ‘profiling’ that consists of any form of automated processing of personal data evaluating the personal aspects relating to a natural person, in particular to analyse or predict aspects concerning the data subject's performance at work, economic situation, health, personal preferences or interests, reliability or behaviour, location or movements, where it produces legal effects concerning him or her or similarly significantly affects him or her.",
          "HU": "Ilyen adatkezelésnek minősül a „profilalkotás” is, vagyis a természetes személyekre vonatkozó személyes jellemzők bármilyen automatizált személyes adatok kezelése keretében történő kiértékelése, különösen az érintett munkahelyi teljesítményére, gazdasági helyzetére, egészségi állapotára, személyes preferenciáira vagy érdeklődési körökre, megbízhatóságra vagy viselkedésre, tartózkodási helyére vagy mozgására vonatkozó jellemzők elemzésére és előrejelzésére, ha az az érintettre nézve joghatással jár vagy őt hasonlóan jelentős mértékben érinti."
        },
        {
          "EN": "However, decision-making based on such processing, including profiling, should be allowed where expressly authorised by Union or Member State law to which the controller is subject, including for fraud and tax-evasion monitoring and prevention purposes conducted in accordance with the regulations, standards and recommendations of Union institutions or national oversight bodies and to ensure the security and reliability of a service provided by the controller, or necessary for the entering or performance of a contract between the data subject and a controller, or when the data subject has given his or her explicit consent.",
          "HU": "Megengedhető azonban az efféle adatkezelésen – ideértve profilalkotást is – alapuló döntéshozatal, ha azt az olyan uniós vagy tagállami jog kifejezetten engedélyezi, amelynek hatálya alá az adatkezelő tartozik, például a csalások és az adócsalás nyomon követése és megelőzése céljából, feltéve hogy erre az uniós intézmények vagy a tagállami felügyeleti hatóságok szabályaival, előírásaival és ajánlásaival összhangban kerül sor, vagy az adatkezelő által nyújtott szolgáltatás biztonságának és megbízhatóságának a biztosítása érdekében, vagy ha arra valamely, az érintett és egy adatkezelő közötti szerződés megkötése vagy teljesítése érdekében van szükség, vagy ha az érintett ahhoz kifejezett hozzájárulását adta."
        },
        {
          "EN": "In any case, such processing should be subject to suitable safeguards, which should include specific information to the data subject and the right to obtain human intervention, to express his or her point of view, to obtain an explanation of the decision reached after such assessment and to challenge the decision.",
          "HU": "Az ilyen adatkezelés mindazonáltal csakis megfelelő garanciák mellett végezhető, amelybe beletartozik az érintett külön tájékoztatása és az ahhoz való joga, hogy emberi beavatkozást kérjen és kapjon, különösen hogy kifejtse álláspontját, hogy magyarázatot kapjon az ilyen értékelés alapján hozott döntésről és hogy megtámadja a döntést."
        },
        {
          "EN": "Such measure should not concern a child.",
          "HU": "Az ilyen intézkedés gyermekre nem vonatkozhat."
        },
        {
          "EN": "In order to ensure fair and transparent processing in respect of the data subject, taking into account the specific circumstances and context in which the personal data are processed, the controller should use appropriate mathematical or statistical procedures for the profiling, implement technical and organisational measures appropriate to ensure, in particular, that factors which result in inaccuracies in personal data are corrected and the risk of errors is minimised, secure personal data in a manner that takes account of the potential risks involved for the interests and rights of the data subject and that prevents, inter alia, discriminatory effects on natural persons on the basis of racial or ethnic origin, political opinion, religion or beliefs, trade union membership, genetic or health status or sexual orientation, or that result in measures having such an effect.",
          "HU": "Az érintett szempontjából tekintve tisztességes és átlátható adatkezelés biztosítása érdekében – az adatkezelés konkrét körülményeinek figyelembevételével – az adatkezelő a profilalkotáshoz megfelelő matematikai és statisztikai eljárásokat alkalmaz, olyan technikai és szervezési intézkedéseket vezet be, amelyek biztosítják különösen az adatok pontatlanságát előidéző tényezők korrekcióját és a hibalehetőségek minimálisra csökkentését, továbbá a személyes adatok biztonságáról oly módon gondoskodik, amely az érintett érdekeit és jogait potenciálisan veszélyeztető tényezőket figyelembe veszi, és amely megakadályozza egyebek között az olyan hatások érvényesülését, amelyek a természetes személyek közötti hátrányos megkülönböztetést eredményeznek faji vagy etnikai származás, politikai vélemény, vallási vagy világnézeti meggyőződés, szakszervezeti tagság, genetikai vagy egészségi állapot, szexuális irányultság vagy nemi identitás alapján, illetve amelyek ilyen hatást kiváltó intézkedésekhez vezetnek."
        },
        {
          "EN": "Automated decision-making and profiling based on special categories of personal data should be allowed only under specific conditions.",
          "HU": "A személyes adatok különleges kategóriáit célzó automatizált döntéshozatal és profilalkotás csak bizonyos meghatározott feltételek mellett engedélyezhető."
        },
        {
          "EN": "(72) Profiling is subject to the rules of this Regulation governing the processing of personal data, such as the legal grounds for processing or data protection principles.",
          "HU": "(72) A profilalkotást ennek a rendeletnek a személyes adatok kezelésére vonatkozó rendelkezései szabályozzák, például az adatkezelés jogalapja és az adatkezelési elvek tekintetében."
        },
        {
          "EN": "The European Data Protection Board established by this Regulation (the ‘Board’) should be able to issue guidance in that context.",
          "HU": "Az e rendelet által létrehozott Európai Adatvédelmi Testület (a továbbiakban: a Testület) számára lehetővé kell tenni, hogy erre vonatkozóan iránymutatást adjon ki."
        },
        {
          "EN": "(73) Restrictions concerning specific principles and the rights of information, access to and rectification or erasure of personal data, the right to data portability, the right to object, decisions based on profiling, as well as the communication of a personal data breach to a data subject and certain related obligations of the controllers may be imposed by Union or Member State law, as far as necessary and proportionate in a democratic society to safeguard public security, including the protection of human life especially in response to natural or manmade disasters, the prevention, investigation and prosecution of criminal offences or the execution of criminal penalties, including the safeguarding against and the prevention of threats to public security, or of breaches of ethics for regulated professions, other important objectives of general public interest of the Union or of a Member State, in particular an important economic or financial interest of the Union or of a Member State, the keeping of public registers kept for reasons of general public interest, further processing of archived personal data to provide specific information related to the political behaviour under former totalitarian state regimes or the protection of the data subject or the rights and freedoms of others, including social protection, public health and humanitarian purposes.",
          "HU": "(73) Az uniós és a tagállami jog olyan mértékig korlátozhat bizonyos elveket, a tájékoztatáshoz való jogot, a hozzáférési, helyesbítési és törlési jogot, az adathordozhatósághoz való jogot, a tiltakozáshoz való jogot, a profilalkotáson alapuló döntéseket és az adatvédelmi incidens érintettel történő közlését, valamint az adatkezelők bizonyos kapcsolódó kötelezettségeit, amilyen mértékig ez egy demokratikus társadalomban szükségesnek és arányosnak tekinthető a közbiztonság védelme érdekében – beleértve az emberi élet védelmét különösen a természeti vagy ember okozta katasztrófákkal szemben, valamint a bűncselekményeknek vagy a szabályozott szakmák etikai szabályai megsértésének a megelőzését, kivizsgálását és a megfelelő büntető- vagy fegyelmi eljárás lefolytatását, illetve a büntetőjogi szankciók végrehajtását és ezen belül többek között a közbiztonságot fenyegető veszélyekkel szembeni védelmet és e veszélyek megelőzését is –, továbbá valamely egyéb uniós vagy tagállami közérdek jelentős céljai, így különösen az Unió vagy valamely tagállam fontos gazdasági vagy pénzügyi érdekének védelme, általános közérdeket szolgáló nyilvántartások vezetése, archivált személyes adatoknak a volt totalitárius államrendszerek alatt tanúsított politikai magatartáshoz kapcsolódó konkrét információk szolgáltatása érdekében történő további kezelése, illetve az érintett vagy mások jogainak és szabadságainak a védelme érdekében, ideértve a szociális védelmet, a népegészségügyet és a humanitárius okokat is."
        },
        {
          "EN": "Those restrictions should be in accordance with the requirements set out in the Charter and in the European Convention for the Protection of Human Rights and Fundamental Freedoms.",
          "HU": "E korlátozásoknak tiszteletben kell tartaniuk a Charta, valamint az emberi jogok és alapvető szabadságok védelméről szóló európai egyezmény rendelkezéseit."
        },
        {
          "EN": "(74) The responsibility and liability of the controller for any processing of personal data carried out by the controller or on the controller's behalf should be established.",
          "HU": "(74) A személyes adatoknak az adatkezelő által vagy az adatkezelő nevében végzett bármilyen jellegű kezelése tekintetében az adatkezelő hatáskörét és felelősségét szabályozni kell."
        },
        {
          "EN": "In particular, the controller should be obliged to implement appropriate and effective measures and be able to demonstrate the compliance of processing activities with this Regulation, including the effectiveness of the measures.",
          "HU": "Az adatkezelőt kötelezni kell különösen arra, hogy megfelelő és hatékony intézkedéseket hajtson végre, valamint hogy képes legyen igazolni azt, hogy az adatkezelési tevékenységek e rendeletnek megfelelnek, és az alkalmazott intézkedések hatékonysága is az e rendelet által előírt szintű."
        },
        {
          "EN": "Those measures should take into account the nature, scope, context and purposes of the processing and the risk to the rights and freedoms of natural persons.",
          "HU": "Ezeket az intézkedéseket az adatkezelés jellegének, hatókörének, körülményeinek és céljainak, valamint a természetes személyek jogait és szabadságait érintő kockázatnak a figyelembevételével kell meghozni."
        },
        {
          "EN": "(75) The risk to the rights and freedoms of natural persons, of varying likelihood and severity, may result from personal data processing which could lead to physical, material or non-material damage, in particular: where the processing may give rise to discrimination, identity theft or fraud, financial loss, damage to the reputation, loss of confidentiality of personal data protected by professional secrecy, unauthorised reversal of pseudonymisation, or any other significant economic or social disadvantage; where data subjects might be deprived of their rights and freedoms or prevented from exercising control over their personal data; where personal data are processed which reveal racial or ethnic origin, political opinions, religion or philosophical beliefs, trade union membership, and the processing of genetic data, data concerning health or data concerning sex life or criminal convictions and offences or related security measures; where personal aspects are evaluated, in particular analysing or predicting aspects concerning performance at work, economic situation, health, personal preferences or interests, reliability or behaviour, location or movements, in order to create or use personal profiles; where personal data of vulnerable natural persons, in particular of children, are processed; or where processing involves a large amount of personal data and affects a large number of data subjects.",
          "HU": "(75) A természetes személyek jogait és szabadságait érintő – változó valószínűségű és súlyosságú – kockázatok származhatnak a személyes adatok kezeléséből, amelyek fizikai, vagyoni vagy nem vagyoni károkhoz vezethetnek, különösen, ha az adatkezelésből hátrányos megkülönböztetés, személyazonosság-lopás vagy személyazonossággal való visszaélés, pénzügyi veszteség, a jó hírnév sérelme, a szakmai titoktartási kötelezettség által védett személyes adatok bizalmas jellegének sérülése, az álnevesítés engedély nélkül történő feloldása, vagy bármilyen egyéb jelentős gazdasági vagy szociális hátrány fakadhat; vagy ha az érintettek nem gyakorolhatják jogaikat és szabadságaikat, vagy nem rendelkezhetnek saját személyes adataik felett; vagy ha olyan személyes adatok kezelése történik, amelyek faji vagy etnikai származásra, vagy politikai véleményre, vallási vagy világnézeti meggyőződésre vagy szakszervezeti tagságra utalnak, valamint ha a kezelt adatok genetikai adatok, egészségügyi adatok vagy a szexuális életre, büntetőjogi felelősség megállapítására, illetve bűncselekményekre, vagy ezekhez kapcsolódó biztonsági intézkedésekre vonatkoznak; vagy ha személyes jellemzők értékelésére, így különösen munkahelyi teljesítménnyel kapcsolatos jellemzők, gazdasági helyzet, egészségi állapot, személyes preferenciák vagy érdeklődési körök, megbízhatóság vagy viselkedés, tartózkodási hely vagy mozgás elemzésére vagy előrejelzésére kerül sor személyes profil létrehozása vagy felhasználása céljából; vagy ha kiszolgáltatott személyek – különösen, ha gyermekek – személyes adatainak a kezelésére kerül sor; vagy ha az adatkezelés nagy mennyiségű személyes adat alapján zajlik, és nagyszámú érintettre terjed ki."
        },
        {
          "EN": "(76) The likelihood and severity of the risk to the rights and freedoms of the data subject should be determined by reference to the nature, scope, context and purposes of the processing.",
          "HU": "(76) Az érintett jogait és szabadságait érintő kockázat valószínűségét és súlyosságát az adatkezelés jellegének, hatókörének, körülményeinek és céljainak függvényében kell meghatározni."
        },
        {
          "EN": "Risk should be evaluated on the basis of an objective assessment, by which it is established whether data processing operations involve a risk or a high risk.",
          "HU": "A kockázatot olyan objektív értékelés alapján kell felmérni, amelynek során szükséges megállapítani, hogy az adatkezelési műveletek kockázattal, illetve nagy kockázattal járnak-e."
        },
        {
          "EN": "(77) Guidance on the implementation of appropriate measures and on the demonstration of compliance by the controller or the processor, especially as regards the identification of the risk related to the processing, their assessment in terms of origin, nature, likelihood and severity, and the identification of best practices to mitigate the risk, could be provided in particular by means of approved codes of conduct, approved certifications, guidelines provided by the Board or indications provided by a data protection officer.",
          "HU": "(77) A megfelelő intézkedéseknek az adatkezelő vagy adatfeldolgozó általi végrehajtásához, valamint a megfelelés általuk való bizonyításához – különösen ami az adatkezeléssel kapcsolatos kockázat beazonosítását, valamint a kockázat forrásának, jellegének, valószínűségének és súlyosságának a felmérését illeti –, továbbá a kockázat mérséklésével kapcsolatos bevált gyakorlatoknak az azonosításához útmutatással szolgálhatnak különösen a jóváhagyott magatartási kódexek, a jóváhagyott tanúsítási eljárások, a Testület iránymutatásai vagy az adatvédelmi tisztviselő által nyújtott iránymutatások."
        },
        {
          "EN": "The Board may also issue guidelines on processing operations that are considered to be unlikely to result in a high risk to the rights and freedoms of natural persons and indicate what measures may be sufficient in such cases to address such risk.",
          "HU": "A Testület emellett iránymutatásokat adhat ki az olyan adatkezelési műveletekre vonatkozóan is, amelyek valószínűsíthetően nem járnak magas kockázattal a természetes személyek jogaira és szabadságaira nézve, és megadhatják, hogy ilyen esetben mely intézkedések elegendők a szóban forgó kockázat kezeléséhez."
        },
        {
          "EN": "(78) The protection of the rights and freedoms of natural persons with regard to the processing of personal data require that appropriate technical and organisational measures be taken to ensure that the requirements of this Regulation are met.",
          "HU": "(78) A természetes személyeket személyes adataik kezelése tekintetében megillető jogok és szabadságok védelme megköveteli az e rendelet követelményeinek teljesítését biztosító megfelelő technikai és szervezési intézkedések meghozatalát."
        },
        {
          "EN": "In order to be able to demonstrate compliance with this Regulation, the controller should adopt internal policies and implement measures which meet in particular the principles of data protection by design and data protection by default.",
          "HU": "Ahhoz, hogy az adatkezelő igazolni tudja az e rendeletnek való megfelelést, olyan belső szabályokat kell alkalmaznia, valamint olyan intézkedéseket kell végrehajtania, amelyek teljesítik különösen a beépített és az alapértelmezett adatvédelem elveit."
        },
        {
          "EN": "Such measures could consist, inter alia, of minimising the processing of personal data, pseudonymising personal data as soon as possible, transparency with regard to the functions and processing of personal data, enabling the data subject to monitor the data processing, enabling the controller to create and improve security features.",
          "HU": "Az említett intézkedések magukban foglalhatják a személyes adatok kezelésének minimálisra csökkentését, a személyes adatok mihamarabbi álnevesítését, a személyes adatok funkcióinak és kezelésének átláthatóságát, valamint azt, hogy az érintett nyomon követhesse az adatkezelést, az adatkezelő pedig biztonsági elemeket hozhasson létre és továbbfejleszthesse azokat."
        },
        {
          "EN": "When developing, designing, selecting and using applications, services and products that are based on the processing of personal data or process personal data to fulfil their task, producers of the products, services and applications should be encouraged to take into account the right to data protection when developing and designing such products, services and applications and, with due regard to the state of the art, to make sure that controllers and processors are able to fulfil their data protection obligations.",
          "HU": "Az olyan alkalmazások, szolgáltatások és termékek kifejlesztésekor, tervezésekor, kiválasztásakor és felhasználásakor, amelyek személyes adatok kezelésén alapulnak vagy rendeltetésük teljesítéséhez személyes adatokat kezelnek, a termékek, szolgáltatások és alkalmazások előállítóit arra kell ösztönözni, hogy e termékek, szolgáltatások és alkalmazások kifejlesztésekor és tervezésekor szem előtt tartsák a személyes adatok védeleméhez való jogot, és a tudomány és technológia állását kellően figyelembe véve gondoskodjanak arról, hogy az adatkezelők és az adatfeldolgozók adatvédelmi kötelezettségeiknek eleget tegyenek."
        },
        {
          "EN": "The principles of data protection by design and by default should also be taken into consideration in the context of public tenders.",
          "HU": "A beépített és az alapértelmezett adatvédelem elveit a közbeszerzések során is figyelembe kell venni."
        },
        {
          "EN": "(79) The protection of the rights and freedoms of data subjects as well as the responsibility and liability of controllers and processors, also in relation to the monitoring by and measures of supervisory authorities, requires a clear allocation of the responsibilities under this Regulation, including where a controller determines the purposes and means of the processing jointly with other controllers or where a processing operation is carried out on behalf of a controller.",
          "HU": "(79) Az érintettek jogainak és szabadságainak védelme csakúgy, mint az adatkezelők és az adatfeldolgozók hatásköre és felelőssége – a felügyeleti hatóságok általi ellenőrzéssel és azok intézkedéseivel összefüggésben is – megköveteli az e rendelet szerinti hatáskörök egyértelmű felosztását, ideértve azt az esetet is, amikor az adatkezelő más adatkezelőkkel közösen határozza meg az adatkezelés céljait és eszközeit, vagy amikor egy adatkezelő nevében végeznek adatkezelési műveletet."
        },
        {
          "EN": "(80) Where a controller or a processor not established in the Union is processing personal data of data subjects who are in the Union whose processing activities are related to the offering of goods or services, irrespective of whether a payment of the data subject is required, to such data subjects in the Union, or to the monitoring of their behaviour as far as their behaviour takes place within the Union, the controller or the processor should designate a representative, unless the processing is occasional, does not include processing, on a large scale, of special categories of personal data or the processing of personal data relating to criminal convictions and offences, and is unlikely to result in a risk to the rights and freedoms of natural persons, taking into account the nature, context, scope and purposes of the processing or if the controller is a public authority or body.",
          "HU": "(80) Ha az Unióban tartózkodó érintettek személyes adatait az Unióban tevékenységi hellyel nem rendelkező olyan adatkezelő vagy adatfeldolgozó kezeli, amelynek az adatkezelési tevékenysége termékeknek vagy szolgáltatásoknak az ilyen érintettek számára történő Unión belüli kínálásához – függetlenül attól, hogy az érintetteknek fizetniük kell-e azokért – vagy az ilyen érintettek Unión belüli magatartásának a megfigyeléséhez kapcsolódik, az adatkezelő vagy az adatfeldolgozó képviselőt jelöl ki, kivéve, ha az általa végzett adatkezelés alkalmi jellegű, nem terjed ki a személyes adatok különleges kategóriáinak, illetve a büntetőjogi felelősség megállapításával és bűncselekményekkel kapcsolatos személyes adatoknak nagy számban történő kezelésére, továbbá a jellegét, hatókörét, körülményeit és céljait tekintve valószínűsíthetően nem jelent kockázatot az érintettek jogaira és szabadságaira nézve, illetve ha az adatkezelő közhatalmi szerv vagy egyéb, közfeladatot ellátó szerv."
        },
        {
          "EN": "The representative should act on behalf of the controller or the processor and may be addressed by any supervisory authority.",
          "HU": "A képviselő az adatkezelő vagy az adatfeldolgozó nevében jár el, és e minőségében bármelyik felügyeleti hatóság megkeresheti."
        },
        {
          "EN": "The representative should be explicitly designated by a written mandate of the controller or of the processor to act on its behalf with regard to its obligations under this Regulation.",
          "HU": "Az adatkezelő vagy az adatfeldolgozó írásbeli megbízás útján kifejezetten kijelöli a képviselőt arra, hogy nevében az e rendelet értelmében fennálló kötelezettségei tekintetében eljárjon."
        },
        {
          "EN": "The designation of such a representative does not affect the responsibility or liability of the controller or of the processor under this Regulation.",
          "HU": "A képviselő kijelölése nem érinti az adatkezelőre, illetve adatfeldolgozóra e rendelet értelmében háruló hatásköröket és felelősséget."
        },
        {
          "EN": "Such a representative should perform its tasks according to the mandate received from the controller or processor, including cooperating with the competent supervisory authorities with regard to any action taken to ensure compliance with this Regulation.",
          "HU": "A képviselő feladatait az adatkezelőtől vagy az adatfeldolgozótól kapott – és ideértve az illetékes felügyeleti hatóságokkal az e rendeletnek való megfelelés biztosítása érdekében tett bármely lépés tekintetében való együttműködést is előíró – megbízással összhangban látja el."
        },
        {
          "EN": "The designated representative should be subject to enforcement proceedings in the event of non-compliance by the controller or processor.",
          "HU": "Meg nem felelés esetén, a kijelölt képviselővel szemben az adatkezelő vagy az adatfeldolgozó kikényszerítési eljárásokat indíthat."
        },
        {
          "EN": "(81) To ensure compliance with the requirements of this Regulation in respect of the processing to be carried out by the processor on behalf of the controller, when entrusting a processor with processing activities, the controller should use only processors providing sufficient guarantees, in particular in terms of expert knowledge, reliability and resources, to implement technical and organisational measures which will meet the requirements of this Regulation, including for the security of processing.",
          "HU": "(81) Annak biztosítása érdekében, hogy az e rendeletben az adatfeldolgozó által az adatkezelő nevében elvégzendő adatkezelésre vonatkozóan előírt követelmények teljesüljenek, ha az adatkezelő adatfeldolgozót bíz meg az adatkezelési tevékenységek elvégzésével, csakis olyan adatfeldolgozókat vehet igénybe, amelyek megfelelő garanciákat nyújtanak – különösen a szakértelem, a megbízhatóság és az erőforrások tekintetében – arra vonatkozóan, hogy az e rendelet követelményeinek teljesülését biztosító technikai és szervezési intézkedéseket végrehajtják, ideértve az adatkezelés biztonságát is."
        },
        {
          "EN": "The adherence of the processor to an approved code of conduct or an approved certification mechanism may be used as an element to demonstrate compliance with the obligations of the controller.",
          "HU": "Az adatkezelő kötelezettségei teljesítésének bizonyítására felhasználható, ha az adatfeldolgozó csatlakozik valamelyik jóváhagyott magatartási kódexhez vagy jóváhagyott tanúsítási mechanizmushoz."
        },
        {
          "EN": "The carrying-out of processing by a processor should be governed by a contract or other legal act under Union or Member State law, binding the processor to the controller, setting out the subject-matter and duration of the processing, the nature and purposes of the processing, the type of personal data and categories of data subjects, taking into account the specific tasks and responsibilities of the processor in the context of the processing to be carried out and the risk to the rights and freedoms of the data subject.",
          "HU": "Az adatkezelés adatfeldolgozó általi elvégzését uniós vagy tagállami jog alapján létrejött szerződés vagy egyéb jogi aktus szabályozza, amely köti adatfeldolgozót az adatkezelővel szemben, meghatározza az adatkezelés tárgyát és időtartamát, az adatkezelés jellegét és céljait, a személyes adatok típusát és az érintettek kategóriáit, figyelembe véve az adatfeldolgozóra az elvégzendő adatkezelés kapcsán háruló konkrét feladatokat és felelősségeket, valamint az érintettek jogait és szabadságait érintő kockázatot is."
        },
        {
          "EN": "The controller and processor may choose to use an individual contract or standard contractual clauses which are adopted either directly by the Commission or by a supervisory authority in accordance with the consistency mechanism and then adopted by the Commission.",
          "HU": "Az adatkezelő és az adatfeldolgozó dönthet egyedi szerződés vagy általános szerződési feltételek alkalmazása mellett, mely utóbbiakat vagy közvetlenül a Bizottság, vagy az egységességi mechanizmus alapján valamely felügyeleti hatóság, majd pedig a Bizottság fogad el."
        },
        {
          "EN": "After the completion of the processing on behalf of the controller, the processor should, at the choice of the controller, return or delete the personal data, unless there is a requirement to store the personal data under Union or Member State law to which the processor is subject.",
          "HU": "Az adatkezelésnek az adatkezelő nevében való elvégzését követően az adatfeldolgozó az adatkezelő választása szerint visszaszolgáltatja vagy törli a személyes adatokat, kivéve, ha az adatfeldolgozóra alkalmazandó uniós vagy tagállami jog előírja azok tárolását."
        },
        {
          "EN": "(82) In order to demonstrate compliance with this Regulation, the controller or processor should maintain records of processing activities under its responsibility.",
          "HU": "(82) Az adatkezelő vagy az adatfeldolgozó az e rendeletnek való megfelelés bizonyítása érdekében nyilvántartást vezet a hatásköre alapján végzett adatkezelési tevékenységekről."
        },
        {
          "EN": "Each controller and processor should be obliged to cooperate with the supervisory authority and make those records, on request, available to it, so that it might serve for monitoring those processing operations.",
          "HU": "Minden adatkezelő és adatfeldolgozó köteles a felügyeleti hatósággal együttműködni és ezeket a nyilvántartásokat kérésre hozzáférhetővé tenni az érintett adatkezelési műveletek ellenőrzése érdekében."
        },
        {
          "EN": "(83) In order to maintain security and to prevent processing in infringement of this Regulation, the controller or processor should evaluate the risks inherent in the processing and implement measures to mitigate those risks, such as encryption.",
          "HU": "(83) A biztonság fenntartása és az e rendeletet sértő adatkezelés megelőzése érdekében az adatkezelő vagy az adatfeldolgozó értékeli az adatkezelés természetéből fakadó kockázatokat, és az e kockázatok csökkentését szolgáló intézkedéseket, például titkosítást alkalmaz."
        },
        {
          "EN": "Those measures should ensure an appropriate level of security, including confidentiality, taking into account the state of the art and the costs of implementation in relation to the risks and the nature of the personal data to be protected.",
          "HU": "Ezek az intézkedések biztosítják a megfelelő szintű biztonságot – ideértve a bizalmas kezelést is –, figyelembe véve a tudomány és technológia állását, valamint a végrehajtás kockázatokkal és a védelmet igénylő személyes adatok jellegével összefüggő költségeit."
        },
        {
          "EN": "In assessing data security risk, consideration should be given to the risks that are presented by personal data processing, such as accidental or unlawful destruction, loss, alteration, unauthorised disclosure of, or access to, personal data transmitted, stored or otherwise processed which may in particular lead to physical, material or non-material damage.",
          "HU": "Az adatbiztonsági kockázat felmérése során a személyes adatok kezelése jelentette olyan kockázatokat – mint például a továbbított, tárolt vagy más módon kezelt személyes adatok véletlen vagy jogellenes megsemmisítése, elvesztése, megváltoztatása, jogosulatlan közlése vagy az azokhoz való jogosulatlan hozzáférés –mérlegelni kell, amelyek fizikai, vagyoni vagy nem vagyoni károkhoz vezethetnek."
        },
        {
          "EN": "(84) In order to enhance compliance with this Regulation where processing operations are likely to result in a high risk to the rights and freedoms of natural persons, the controller should be responsible for the carrying-out of a data protection impact assessment to evaluate, in particular, the origin, nature, particularity and severity of that risk.",
          "HU": "(84) Az e rendeletnek való megfelelés olyan esetek érdekében történő előmozdítása érdekében, amikor valószínűsíthető, hogy az adatkezelési műveletek magas kockázattal járnának a természetes személyek jogaira és szabadságaira nézve, az e kockázat forrását, jellegét, egyediségét és súlyosságát felmérő adatvédelmi hatásvizsgálat elvégzéséért az adatkezelő felel."
        },
        {
          "EN": "The outcome of the assessment should be taken into account when determining the appropriate measures to be taken in order to demonstrate that the processing of personal data complies with this Regulation.",
          "HU": "A hatásvizsgálat megállapításait figyelembe kell venni annak meghatározásakor, hogy mely intézkedések a megfelelőek annak bizonyítására, hogy a személyes adatok kezelése megfelel e rendeletnek."
        },
        {
          "EN": "Where a data-protection impact assessment indicates that processing operations involve a high risk which the controller cannot mitigate by appropriate measures in terms of available technology and costs of implementation, a consultation of the supervisory authority should take place prior to the processing.",
          "HU": "Ha az adatvédelmi hatásvizsgálat szerint az adatkezelési műveletek olyan magas kockázattal járnak, amelyet az adatkezelő nem képes a rendelkezésre álló technológia és a végrehajtási költségek szempontjából is megfelelő intézkedésekkel mérsékelni, az adatkezelést megelőzően a felügyeleti hatósággal konzultálni kell."
        },
        {
          "EN": "(85) A personal data breach may, if not addressed in an appropriate and timely manner, result in physical, material or non-material damage to natural persons such as loss of control over their personal data or limitation of their rights, discrimination, identity theft or fraud, financial loss, unauthorised reversal of pseudonymisation, damage to reputation, loss of confidentiality of personal data protected by professional secrecy or any other significant economic or social disadvantage to the natural person concerned.",
          "HU": "(85) Az adatvédelmi incidens megfelelő és kellő idejű intézkedés hiányában fizikai, vagyoni vagy nem vagyoni károkat okozhat a természetes személyeknek, többek között a személyes adataik feletti rendelkezés elvesztését vagy a jogaik korlátozását, a hátrányos megkülönböztetést, a személyazonosság-lopást vagy a személyazonossággal való visszaélést, a pénzügyi veszteséget, az álnevesítés engedély nélküli feloldását, a jó hírnév sérelmét, a szakmai titoktartási kötelezettség által védett személyes adatok bizalmas jellegének sérülését, illetve a szóban forgó természetes személyeket sújtó egyéb jelentős gazdasági vagy szociális hátrányt."
        },
        {
          "EN": "Therefore, as soon as the controller becomes aware that a personal data breach has occurred, the controller should notify the personal data breach to the supervisory authority without undue delay and, where feasible, not later than 72 hours after having become aware of it, unless the controller is able to demonstrate, in accordance with the accountability principle, that the personal data breach is unlikely to result in a risk to the rights and freedoms of natural persons.",
          "HU": "Következésképpen, amint az adatkezelő tudomására jut az adatvédelmi incidens, azt indokolatlan késedelem nélkül, és ha lehetséges, legkésőbb 72 órával azután, hogy az adatvédelmi incidens a tudomására jutott, bejelenteni köteles az illetékes felügyeleti hatóságnál, kivéve, ha az elszámoltathatóság elvével összhangban bizonyítani tudja, hogy az adatvédelmi incidens valószínűsíthetően nem jár kockázattal a természetes személyek jogaira és szabadságaira nézve."
        },
        {
          "EN": "Where such notification cannot be achieved within 72 hours, the reasons for the delay should accompany the notification and information may be provided in phases without undue further delay.",
          "HU": "Ha a bejelentés 72 órán belül nem tehető meg, abban meg kell jelölni a késedelem okát, az előírt információkat pedig – további indokolatlan késedelem nélkül – részletekben is közölni lehet."
        },
        {
          "EN": "(86) The controller should communicate to the data subject a personal data breach, without undue delay, where that personal data breach is likely to result in a high risk to the rights and freedoms of the natural person in order to allow him or her to take the necessary precautions.",
          "HU": "(86) Az érintettet az adatkezelő indokolatlan késedelem nélkül tájékoztatja, ha az adatvédelmi incidens valószínűsíthetően magas kockázattal jár a természetes személyek jogaira és szabadságaira nézve, annak érdekében, hogy megtehesse a szükséges óvintézkedéseket."
        },
        {
          "EN": "The communication should describe the nature of the personal data breach as well as recommendations for the natural person concerned to mitigate potential adverse effects.",
          "HU": "Az tájékoztatásnak tartalmaznia kell annak leírását, hogy milyen jellegű az adatvédelmi incidens, valamint az érintett a természetes személynek szóló, a lehetséges hátrányos hatások enyhítését célzó javaslatokat."
        },
        {
          "EN": "Such communications to data subjects should be made as soon as reasonably feasible and in close cooperation with the supervisory authority, respecting guidance provided by it or by other relevant authorities such as law-enforcement authorities.",
          "HU": "Az érintettek tájékoztatásáról az észszerűség keretei között a lehető leghamarabb gondoskodni kell, szorosan együttműködve a felügyeleti hatósággal, és betartva az általa vagy más érintett hatóságok például bűnüldöző hatóságok által adott útmutatást."
        },
        {
          "EN": "For example, the need to mitigate an immediate risk of damage would call for prompt communication with data subjects whereas the need to implement appropriate measures against continuing or similar personal data breaches may justify more time for communication.",
          "HU": "Például az érintettek sürgős tájékoztatása a kár közvetlen veszélyének mérsékléséhez szükséges, azonban annak megelőzése több időt igényelhet, hogy a folyamatos vagy azonos jellegű adatvédelmi incidens esetében megfelelő intézkedéseket kell végrehajtani."
        },
        {
          "EN": "(87) It should be ascertained whether all appropriate technological protection and organisational measures have been implemented to establish immediately whether a personal data breach has taken place and to inform promptly the supervisory authority and the data subject.",
          "HU": "(87) Meg kell bizonyosodni arról, hogy az összes megfelelő technológiai védelmi és szervezési intézkedés végrehajtásra került-e, egyrészt az adatvédelmi incidens haladéktalan megállapítása, másrészt a felügyeleti hatóságnak történő bejelentés és az érintett sürgős értesítése érdekében."
        },
        {
          "EN": "The fact that the notification was made without undue delay should be established taking into account in particular the nature and gravity of the personal data breach and its consequences and adverse effects for the data subject.",
          "HU": "Azt, hogy az értesítésre indokolatlan késedelem nélkül került-e sor, különösen az adatvédelmi incidens jellegére és súlyosságára, valamint annak az érintettre gyakorolt következményeire, illetve hátrányos hatásaira figyelemmel kell megállapítani."
        },
        {
          "EN": "Such notification may result in an intervention of the supervisory authority in accordance with its tasks and powers laid down in this Regulation.",
          "HU": "A felügyeleti hatóságnak történt bejelentést az e rendeletben meghatározott feladataival és hatásköreivel összhangban történő beavatkozását eredményezheti."
        },
        {
          "EN": "(88) In setting detailed rules concerning the format and procedures applicable to the notification of personal data breaches, due consideration should be given to the circumstances of that breach, including whether or not personal data had been protected by appropriate technical protection measures, effectively limiting the likelihood of identity fraud or other forms of misuse.",
          "HU": "(88) Az adatvédelmi incidensről szóló értesítés formájára és az arra alkalmazandó eljárásokra vonatkozó részletes szabályok megállapításakor az adatvédelmi incidens körülményeire megfelelő figyelmet kell fordítani, beleértve azt is, hogy a személyes adatokat olyan megfelelő technikai védelmi intézkedésekkel védték-e, amelyek hatékonyan korlátozzák a személyazonossággal való visszaélés vagy a visszaélés más formái előfordulásának a valószínűségét."
        },
        {
          "EN": "Moreover, such rules and procedures should take into account the legitimate interests of law-enforcement authorities where early disclosure could unnecessarily hamper the investigation of the circumstances of a personal data breach.",
          "HU": "E szabályoknak és eljárásoknak figyelembe kell venniük továbbá a bűnüldöző hatóságok jogos érdekeit olyan esetekben, amikor az idő előtti közlés szükségtelenül veszélyeztethetné az adatvédelmi incidens körülményeinek kivizsgálását."
        },
        {
          "EN": "(89) Directive 95/46/EC provided for a general obligation to notify the processing of personal data to the supervisory authorities.",
          "HU": "(89) A 95/46/EK irányelv általános jelleggel előírta, hogy a személyes adatok kezeléséről a felügyeleti hatóságot értesíteni kell."
        },
        {
          "EN": "While that obligation produces administrative and financial burdens, it did not in all cases contribute to improving the protection of personal data.",
          "HU": "Ez a kötelezettség igazgatási és pénzügyi terhekkel jár, azonban nem minden esetben járul hozzá a személyes adatok védelmének javításához."
        },
        {
          "EN": "Such indiscriminate general notification obligations should therefore be abolished, and replaced by effective procedures and mechanisms which focus instead on those types of processing operations which are likely to result in a high risk to the rights and freedoms of natural persons by virtue of their nature, scope, context and purposes.",
          "HU": "Ezért ezeket a megkülönböztetés nélküli általános jellegű értesítési kötelezettségeket meg kell szüntetni és olyan hatékony eljárásokkal és mechanizmusokkal kell felváltani, amelyek az adatkezelési műveletek azon típusaira összpontosítanak, amelyek a jellegüknél, hatókörüknél, körülményénél és céljaiknál fogva a természetes személyek jogaira és szabadságaira nézve valószínűsíthetően magas kockázattal járnak."
        },
        {
          "EN": "Such types of processing operations may be those which in, particular, involve using new technologies, or are of a new kind and where no data protection impact assessment has been carried out before by the controller, or where they become necessary in the light of the time that has elapsed since the initial processing.",
          "HU": "Az adatkezelési műveletek említett típusai közé tartozhatnak különösen azok, amelyek új technológiákat alkalmaznak, illetve amelyek új fajtájúak, és amelyek esetében az adatkezelő még nem végezte el az adatvédelmi hatásvizsgálatot, vagy amelyek esetében az adatvédelmi hatásvizsgálat az első adatkezelés óta eltelt időre tekintettel vált szükségessé."
        },
        {
          "EN": "(90) In such cases, a data protection impact assessment should be carried out by the controller prior to the processing in order to assess the particular likelihood and severity of the high risk, taking into account the nature, scope, context and purposes of the processing and the sources of the risk.",
          "HU": "(90) A természetes személyek jogaira és szabadságaira nézve magas kockázattal járó ilyen esetekben az adatkezelő – annak érdekében, hogy az adatkezelés jellegét, hatókörét, körülményeit és céljait, valamint a kockázat forrásait figyelembe véve felmérje a magas kockázat különös valószínűségét és súlyosságát – az adatkezelés előtt adatvédelmi hatásvizsgálatot végez."
        },
        {
          "EN": "That impact assessment should include, in particular, the measures, safeguards and mechanisms envisaged for mitigating that risk, ensuring the protection of personal data and demonstrating compliance with this Regulation.",
          "HU": "Ez a hatásvizsgálat magában foglalja különösen az említett kockázat mérséklését, a személyes adatok védelmét, valamint az e rendeletnek való megfelelés bizonyítását célzó tervezett intézkedéseket, garanciákat és mechanizmusokat."
        },
        {
          "EN": "(91) This should in particular apply to large-scale processing operations which aim to process a considerable amount of personal data at regional, national or supranational level and which could affect a large number of data subjects and which are likely to result in a high risk, for example, on account of their sensitivity, where in accordance with the achieved state of technological knowledge a new technology is used on a large scale as well as to other processing operations which result in a high risk to the rights and freedoms of data subjects, in particular where those operations render it more difficult for data subjects to exercise their rights.",
          "HU": "(91) Ez különösen vonatkozik egyrészt azokra a nagymértékű adatkezelési műveletekre, amelyek jelentős mennyiségű személyes adat regionális, nemzeti vagy szupranacionális szintű kezelését célozzák, és amelyek az érintettek jelentős számára hatással lehet, és amelyek például az adatok érzékenysége folytán valószínűsíthetően magas kockázattal járnak, másrészt azokra az adatkezelési műveletekre, amelyeknél nagy arányban a technológia elismert állásának megfelelő új technológiát alkalmaznak, valamint olyan más adatkezelési műveletekre is, amelyek magas kockázattal járnak az érintettek jogaira és szabadságaira nézve, különösen, ha az említett műveletek megnehezítik az érintettek számára, hogy a jogaikat gyakorolják."
        },
        {
          "EN": "A data protection impact assessment should also be made where personal data are processed for taking decisions regarding specific natural persons following any systematic and extensive evaluation of personal aspects relating to natural persons based on profiling those data or following the processing of special categories of personal data, biometric data, or data on criminal convictions and offences or related security measures.",
          "HU": "Adatvédelmi hatásvizsgálatot kell végezni továbbá, amikor az a személyes adatkezelés célja, hogy konkrét természetes személyekkel kapcsolatban döntést lehessen hozni azt követően, hogy elvégzik a természetes személyek személyes jellemzőinek szisztematikus és kiterjedt értékelését az említett adatokon alapuló profilalkotás alapján, illetve a személyes adatok különleges kategóriáira, a biometrikus adatokra vagy a büntetőjogi felelősség megállapítására és a bűncselekményekre vagy a kapcsolódó biztonsági intézkedésekre vonatkozó adatok kezelését követően."
        },
        {
          "EN": "A data protection impact assessment is equally required for monitoring publicly accessible areas on a large scale, especially when using optic-electronic devices or for any other operations where the competent supervisory authority considers that the processing is likely to result in a high risk to the rights and freedoms of data subjects, in particular because they prevent data subjects from exercising a right or using a service or a contract, or because they are carried out systematically on a large scale.",
          "HU": "Az adatvédelmi hatásvizsgálatok elvégzése a nyilvános helyek nagymértékű megfigyelése esetében szintén követelmény, különösen, ha ezt elektronikus optikai eszközök alkalmazásával hajtják végre, valamint az olyan egyéb műveletek esetében is, amelyeknél az illetékes felügyeleti hatóság úgy ítéli meg, hogy az adatkezelés valószínűsíthetően magas kockázattal jár az érintettek jogaira és szabadságaira nézve, különösen mivel megakadályozza, hogy az érintettek a jogaikat gyakorolják vagy szolgáltatásokat vegyenek igénybe vagy szerződést érvényesítsenek, vagy mivel az említett műveletekre szisztematikusan és nagy számban kerül sor."
        },
        {
          "EN": "The processing of personal data should not be considered to be on a large scale if the processing concerns personal data from patients or clients by an individual physician, other health care professional or lawyer.",
          "HU": "A személyes adatok kezelése nem tekinthető nagymértékűnek, ha az adatkezelés egy adott szakorvos, egészségügyi szakember betegei vagy egy adott ügyvéd ügyfelei személyes adataira vonatkozik."
        },
        {
          "EN": "In such cases, a data protection impact assessment should not be mandatory.",
          "HU": "Ilyen esetekben az adatvédelmi hatásvizsgálatot nem kell kötelezővé tenni."
        },
        {
          "EN": "(92) There are circumstances under which it may be reasonable and economical for the subject of a data protection impact assessment to be broader than a single project, for example where public authorities or bodies intend to establish a common application or processing platform or where several controllers plan to introduce a common application or processing environment across an industry sector or segment or for a widely used horizontal activity.",
          "HU": "(92) Bizonyos körülmények között észszerűnek és gazdaságosnak bizonyulhat az adatvédelmi hatásvizsgálat nem egyetlen projekt tekintetében történő lefolytatása, például ha közhatalmi szervek vagy egyéb, közfeladatot ellátó szervek közös alkalmazást vagy adatkezelési felületet kívánnak létrehozni, vagy ha több adatkezelő közös alkalmazást vagy adatkezelési környezetet kíván bevezetni valamely ágazat vagy szegmens, vagy valamely széles körben végzett horizontális tevékenység tekintetében."
        },
        {
          "EN": "(93) In the context of the adoption of the Member State law on which the performance of the tasks of the public authority or public body is based and which regulates the specific processing operation or set of operations in question, Member States may deem it necessary to carry out such assessment prior to the processing activities.",
          "HU": "(93) Az olyan tagállami jog elfogadásával összefüggésben, amelyen a közhatalmi szerv vagy egyéb, közfeladatot ellátó szerv feladatainak teljesítésén alapul, és amely a szóban forgó specifikus adatkezelési műveletet vagy műveleteket szabályozza, a tagállamok szükségesnek ítélhetik azt, hogy az adott adatkezelési tevékenységek megkezdése előtt ilyen hatásvizsgálatot folytassanak le."
        },
        {
          "EN": "(94) Where a data protection impact assessment indicates that the processing would, in the absence of safeguards, security measures and mechanisms to mitigate the risk, result in a high risk to the rights and freedoms of natural persons and the controller is of the opinion that the risk cannot be mitigated by reasonable means in terms of available technologies and costs of implementation, the supervisory authority should be consulted prior to the start of processing activities.",
          "HU": "(94) Ha az adatvédelmi hatásvizsgálat azt jelzi, hogy a kockázat mérséklését célzó garanciák, biztonsági intézkedések és mechanizmusok hiányában az adatkezelés magas kockázattal járna a természetes személyek jogaira és szabadságaira nézve, és az adatkezelő véleménye alapján a kockázat nem mérsékelhető a rendelkezésre álló technológiák és a végrehajtási költségek szempontjából észszerű módon, akkor az adatkezelési tevékenység megkezdése előtt a felügyeleti hatósággal konzultálni kell."
        },
        {
          "EN": "Such high risk is likely to result from certain types of processing and the extent and frequency of processing, which may result also in a realisation of damage or interference with the rights and freedoms of the natural person.",
          "HU": "Valószínűsíthetően ilyen magas kockázattal járnak a személyes adatok kezelésének bizonyos típusai és az adatkezelés bizonyos mértéke és gyakorisága, amelyek emellett kárt is okozhatnak, illetve hátrányosan érinthetik a természetes személy jogait és szabadságait."
        },
        {
          "EN": "The supervisory authority should respond to the request for consultation within a specified period.",
          "HU": "A felügyeleti hatóság a konzultáció iránti megkeresésre meghatározott határidőn belül választ ad."
        },
        {
          "EN": "However, the absence of a reaction of the supervisory authority within that period should be without prejudice to any intervention of the supervisory authority in accordance with its tasks and powers laid down in this Regulation, including the power to prohibit processing operations.",
          "HU": "Ha azonban, a felügyeleti hatóság az említett határidőn belül nem reagál, nem érinti a felügyeleti hatóságnak az e rendeletben megállapított feladataival és hatásköreivel összhangban álló beavatkozási jogkörét, az adatkezelési műveletek megtiltására vonatkozó hatáskörét is beleértve."
        },
        {
          "EN": "As part of that consultation process, the outcome of a data protection impact assessment carried out with regard to the processing at issue may be submitted to the supervisory authority, in particular the measures envisaged to mitigate the risk to the rights and freedoms of natural persons.",
          "HU": "E konzultációs eljárás során a szóban forgó adatkezelés tekintetében végzett adatvédelmi hatásvizsgálat eredményét, és különösen a természetes személyek jogait és szabadságait veszélyeztető kockázat mérséklésére szolgáló intézkedések tervezetét be lehet nyújtani a felügyeleti hatóságnak."
        },
        {
          "EN": "(95) The processor should assist the controller, where necessary and upon request, in ensuring compliance with the obligations deriving from the carrying out of data protection impact assessments and from prior consultation of the supervisory authority.",
          "HU": "(95) Az adatfeldolgozó – szükség esetén és kérésre – segíti az adatkezelőt abban, hogy teljesüljenek az adatvédelmi hatásvizsgálatok elvégzéséből és a felügyeleti hatósággal folytatott előzetes konzultációból eredő kötelezettségek."
        },
        {
          "EN": "(96) A consultation of the supervisory authority should also take place in the course of the preparation of a legislative or regulatory measure which provides for the processing of personal data, in order to ensure compliance of the intended processing with this Regulation and in particular to mitigate the risk involved for the data subject.",
          "HU": "(96) A személyes adatok kezelésével összefüggő jogalkotási vagy szabályozási intézkedések előkészítése során a felügyeleti hatósággal konzultálni kell, így biztosítandó, hogy a tervezett adatkezelés megfeleljen e rendeletnek, különösen annak érdekében, hogy az érintettek számára fennálló kockázat mérséklődjön."
        },
        {
          "EN": "(97) Where the processing is carried out by a public authority, except for courts or independent judicial authorities when acting in their judicial capacity, where, in the private sector, processing is carried out by a controller whose core activities consist of processing operations that require regular and systematic monitoring of the data subjects on a large scale, or where the core activities of the controller or the processor consist of processing on a large scale of special categories of personal data and data relating to criminal convictions and offences, a person with expert knowledge of data protection law and practices should assist the controller or processor to monitor internal compliance with this Regulation.",
          "HU": "(97) Ha az adatkezelést közhatalmi szerv végzi – kivéve a bíróságokat és az egyéb, független igazságügyi hatóságokat, amikor azok igazságszolgáltatási feladataik körében járnak el –, illetve ha az adatkezelést a magánszektorban működő olyan adatkezelő végzi, amelynek fő tevékenységei olyan adatkezelési műveleteket foglalnak magukban, amelyek az érintettek nagymértékű, rendszeres és szisztematikus nyomon követését teszik szükségessé, vagy ha az adatkezelő vagy az adatfeldolgozó alaptevékenysége során a személyes adatok különleges kategóriáit és a büntetőjogi felelősség megállapítására vonatkozó határozatokhoz és bűncselekményekhez kapcsolódó adatokat nagy számban kezel, az adatkezelőt vagy az adatfeldolgozót az e rendeletnek való belső megfelelés ellenőrzésében egy, az adatvédelmi jogot és gyakorlatot szakértői szinten ismerő személy segíti."
        },
        {
          "EN": "In the private sector, the core activities of a controller relate to its primary activities and do not relate to the processing of personal data as ancillary activities.",
          "HU": "A magánszektorban működő adatkezelők fő tevékenységei körébe az adatkezelők elsődleges tevékenységei tartoznak, a járulékos tevékenységként végzett személyes adatok kezelése nem."
        },
        {
          "EN": "The necessary level of expert knowledge should be determined in particular according to the data processing operations carried out and the protection required for the personal data processed by the controller or the processor.",
          "HU": "A szakértői ismeretek szükséges szintjét különösen az adatkezelő vagy az adatfeldolgozó által végzett adatkezelés, valamint az általuk kezelt személyes adatok tekintetében megkövetelt védelem alapján kell meghatározni."
        },
        {
          "EN": "Such data protection officers, whether or not they are an employee of the controller, should be in a position to perform their duties and tasks in an independent manner.",
          "HU": "Az adatvédelmi tisztviselők – függetlenül attól, hogy az adatkezelő alkalmazásában állnak-e – módjában kell, hogy álljon kötelezettségeik és feladataik független ellátása."
        },
        {
          "EN": "(98) Associations or other bodies representing categories of controllers or processors should be encouraged to draw up codes of conduct, within the limits of this Regulation, so as to facilitate the effective application of this Regulation, taking account of the specific characteristics of the processing carried out in certain sectors and the specific needs of micro, small and medium enterprises.",
          "HU": "(98) Az adatkezelők, illetve adatfeldolgozók kategóriáit képviselő egyesületeket vagy egyéb szerveket az e rendelet által szabott határokon belül, az e rendelet hatékony alkalmazásának az elősegítése érdekében magatartási kódexek létrehozására kell ösztönözni, adatkezelés sajátosságaira, valamint a mikro-, kis- és középvállalkozások sajátos szükségleteire figyelemmel."
        },
        {
          "EN": "In particular, such codes of conduct could calibrate the obligations of controllers and processors, taking into account the risk likely to result from the processing for the rights and freedoms of natural persons.",
          "HU": "E magatartási kódexek keretében meg lehetne határozni az adatkezelők és az adatfeldolgozók kötelezettségeit, figyelembe véve azt a kockázatot, amellyel az adatkezelés a természetes személyek jogaira és szabadságaira nézve valószínűsíthetően jár."
        },
        {
          "EN": "(99) When drawing up a code of conduct, or when amending or extending such a code, associations and other bodies representing categories of controllers or processors should consult relevant stakeholders, including data subjects where feasible, and have regard to submissions received and views expressed in response to such consultations.",
          "HU": "(99) Az adatkezelőket, illetve adatfeldolgozókat képviselő egyesületek vagy egyéb szervek a magatartási kódex létrehozásakor vagy egy már meglévő kódex módosításakor vagy kibővítésekor konzultálnak az érdekelt felekkel – ha ez megoldható köztük az érintettekkel is –, és az e konzultációk során kapott beadványokat, illetve véleményeket figyelembe veszik."
        },
        {
          "EN": "(100) In order to enhance transparency and compliance with this Regulation, the establishment of certification mechanisms and data protection seals and marks should be encouraged, allowing data subjects to quickly assess the level of data protection of relevant products and services.",
          "HU": "(100) Az átláthatóság és az e rendeletnek való megfelelés elősegítése érdekében ösztönözni kell olyan tanúsítási mechanizmusok, és adatvédelmi bélyegzők illetve jelölések létrehozását, amelyek lehetővé teszik az érintettek számára, hogy gyorsan értékelni tudják az adott termékek és szolgáltatások adatvédelmi szintjét."
        },
        {
          "EN": "(101) Flows of personal data to and from countries outside the Union and international organisations are necessary for the expansion of international trade and international cooperation.",
          "HU": "(101) A nemzetközi kereskedelem és a nemzetközi együttműködés bővítéséhez szükség van a személyes adatoknak az Unión kívüli országok és a nemzetközi szervezetek viszonylatában megvalósuló forgalmára."
        },
        {
          "EN": "The increase in such flows has raised new challenges and concerns with regard to the protection of personal data.",
          "HU": "Az ilyen forgalom növekedése új kihívásokat és problémákat támaszt a személyes adatok védelme tekintetében."
        },
        {
          "EN": "However, when personal data are transferred from the Union to controllers, processors or other recipients in third countries or to international organisations, the level of protection of natural persons ensured in the Union by this Regulation should not be undermined, including in cases of onward transfers of personal data from the third country or international organisation to controllers, processors in the same or another third country or international organisation.",
          "HU": "Mindazonáltal a személyes adatoknak az Unióból harmadik országbeli adatkezelőknek, adatfeldolgozóknak, egyéb címzetteknek vagy nemzetközi szervezetek részére történő továbbítása esetén nem sérülhet a természetes személyeknek az Unióban e rendelettel biztosított védelem szintje, és annak fenn kell maradnia az ilyen személyes adatoknak az adott harmadik országból vagy nemzetközi szervezettől ezt követően ugyanazon vagy másik harmadik országbeli adatkezelőnek, adatfeldolgozónak vagy nemzetközi szervezetnek történő újbóli továbbítása esetén is."
        },
        {
          "EN": "In any event, transfers to third countries and international organisations may only be carried out in full compliance with this Regulation.",
          "HU": "A harmadik országokba és a nemzetközi szervezetekhez való továbbítás csak e rendelet teljes betartása mellett hajtható végre."
        },
        {
          "EN": "A transfer could take place only if, subject to the other provisions of this Regulation, the conditions laid down in the provisions of this Regulation relating to the transfer of personal data to third countries or international organisations are complied with by the controller or processor.",
          "HU": "A továbbításra akkor kerülhet csak sor, ha az adatkezelő vagy az adatfeldolgozó – e rendelet egyéb rendelkezéseire is figyelemmel – teljesíti az harmadik országok vagy nemzetközi szervezeteknek történő adattovábbításra vonatkozó, e rendeletben meghatározott feltételeket."
        },
        {
          "EN": "(102) This Regulation is without prejudice to international agreements concluded between the Union and third countries regulating the transfer of personal data including appropriate safeguards for the data subjects.",
          "HU": "(102) Ez a rendelet nem érinti az Unió és harmadik országok között létrejött, a személyes adatok továbbításáról – és ennek keretében az érintetteknek szolgáltatandó megfelelő garanciákról – szóló nemzetközi megállapodásokat."
        },
        {
          "EN": "Member States may conclude international agreements which involve the transfer of personal data to third countries or international organisations, as far as such agreements do not affect this Regulation or any other provisions of Union law and include an appropriate level of protection for the fundamental rights of the data subjects.",
          "HU": "A tagállamok köthetnek olyan nemzetközi megállapodásokat, amelyek kiterjednek a személyes adatoknak a harmadik országok vagy a nemzetközi szervezetek részére történő továbbítására, ha e megállapodások nem érintik e rendeletet vagy az uniós jog egyéb rendelkezéseit, továbbá biztosítják az érintettek alapvető jogainak megfelelő szintű védelmét."
        },
        {
          "EN": "(103) The Commission may decide with effect for the entire Union that a third country, a territory or specified sector within a third country, or an international organisation, offers an adequate level of data protection, thus providing legal certainty and uniformity throughout the Union as regards the third country or international organisation which is considered to provide such level of protection.",
          "HU": "(103) Az Unió egészére kiterjedő hatállyal a Bizottság dönthet úgy, hogy harmadik ország, egy harmadik ország valamely területe vagy meghatározott ágazata, illetve valamely nemzetközi szervezet megfelelő adatvédelmi szintet nyújt, így biztosítva az Unió egész területén a jogbiztonságot és az egységességet az ilyen védelmi szintet biztosító harmadik országok vagy nemzetközi szervezetek tekintetében."
        },
        {
          "EN": "In such cases, transfers of personal data to that third country or international organisation may take place without the need to obtain any further authorisation.",
          "HU": "Ilyen esetekben a személyes adatok az említett országokba vagy nemzetközi szervezetek részére történő továbbítása további engedély beszerzése nélkül lehetséges."
        },
        {
          "EN": "The Commission may also decide, having given notice and a full statement setting out the reasons to the third country or international organisation, to revoke such a decision.",
          "HU": "A Bizottság a harmadik országnak vagy nemzetközi szervezetnek küldött, teljes körű indokolással ellátott értesítést követően határozhat úgy is, hogy visszavonja ezt a döntést."
        },
        {
          "EN": "(104) In line with the fundamental values on which the Union is founded, in particular the protection of human rights, the Commission should, in its assessment of the third country, or of a territory or specified sector within a third country, take into account how a particular third country respects the rule of law, access to justice as well as international human rights norms and standards and its general and sectoral law, including legislation concerning public security, defence and national security as well as public order and criminal law.",
          "HU": "(104) A Bizottság – az Unió alapjául szolgáló alapvető értékekkel, így különösen az emberi jogok védelmével összhangban – a harmadik országra vagy egy harmadik ország valamely területére vagy meghatározott ágazatára vonatkozó értékelés elkészítésekor figyelembe veszi azt, hogy az adott harmadik országban mennyire tartják tiszteletben a jogállamiságot, az igazságszolgáltatáshoz való jogot, valamint a nemzetközi emberi jogi normákat és előírásokat, valamint megvizsgálja az adott ország általános és ágazati jogszabályait, ideértve a közbiztonságra, a védelemre és a nemzetbiztonságra vonatkozó jogszabályait, valamint közrendjét és büntetőjogát is."
        },
        {
          "EN": "The adoption of an adequacy decision with regard to a territory or a specified sector in a third country should take into account clear and objective criteria, such as specific processing activities and the scope of applicable legal standards and legislation in force in the third country.",
          "HU": "Az adott ország valamely területére vagy meghatározott ágazatára vonatkozó megfelelőségi határozat elfogadásakor olyan egyértelmű és objektív szempontokat szükséges figyelembe venni, mint például a konkrét adatkezelési tevékenységek, továbbá a harmadik országban alkalmazandó jogi normák és jogszabályok hatálya."
        },
        {
          "EN": "The third country should offer guarantees ensuring an adequate level of protection essentially equivalent to that ensured within the Union, in particular where personal data are processed in one or several specific sectors.",
          "HU": "A harmadik országnak olyan kötelezettséget kell vállalnia, amelyek megfelelő – az Unión belül biztosítottal lényegében megegyező – védelmi szintet biztosítanak, különösen amikor a személyes adatokat egy vagy több konkrét ágazatban kezelik."
        },
        {
          "EN": "In particular, the third country should ensure effective independent data protection supervision and should provide for cooperation mechanisms with the Member States' data protection authorities, and the data subjects should be provided with effective and enforceable rights and effective administrative and judicial redress.",
          "HU": "A harmadik országnak különösen gondoskodnia kell a tényleges, független adatvédelmi felügyeletről és tagállami adatvédelmi hatóságokkal való együttműködési mechanizmusairól, továbbá biztosítania kell, hogy az érintettek tényleges és érvényesíthető jogokkal, valamint hatékony közigazgatási és bírósági jogorvoslati lehetőségekkel rendelkezzenek."
        },
        {
          "EN": "(105) Apart from the international commitments the third country or international organisation has entered into, the Commission should take account of obligations arising from the third country's or international organisation's participation in multilateral or regional systems in particular in relation to the protection of personal data, as well as the implementation of such obligations.",
          "HU": "(105) A harmadik ország vagy a nemzetközi szervezet által vállalt nemzetközi kötelezettségeken túl a Bizottság figyelembe veszi a harmadik ország vagy a nemzetközi szervezet egyéb, többoldalú vagy regionális rendszerekben való részvételéből eredő – különösen a személyes adatok védelmével kapcsolatos – kötelezettségeit is, továbbá az említett kötelezettségek végrehajtását."
        },
        {
          "EN": "In particular, the third country's accession to the Council of Europe Convention of 28 January 1981 for the Protection of Individuals with regard to the Automatic Processing of Personal Data and its Additional Protocol should be taken into account.",
          "HU": "Különösen figyelembe kell venni azt, ha a harmadik ország csatlakozott a személyes adatok gépi feldolgozása során a természetes személyek védelméről szóló, 1981. január 28-i Európa tanácsi egyezményhez, valamint annak kiegészítő jegyzőkönyvéhez."
        },
        {
          "EN": "The Commission should consult the Board when assessing the level of protection in third countries or international organisations.",
          "HU": "A Bizottság a harmadik országok vagy a nemzetközi szervezetek által biztosított védelem szintjének értékelésekor konzultál a Testülettel."
        },
        {
          "EN": "(106) The Commission should monitor the functioning of decisions on the level of protection in a third country, a territory or specified sector within a third country, or an international organisation, and monitor the functioning of decisions adopted on the basis of Article 25(6) or Article 26(4) of Directive 95/46/EC.",
          "HU": "(106) A Bizottság ellenőrzi a harmadik ország, a harmadik ország valamely területe vagy egy meghatározott ágazata, illetve valamely nemzetközi szervezet által biztosított védelem szintjével kapcsolatos határozatok működésének ellenőrzését, ideértve a 95/46/EK irányelv 25. cikk (6) vagy a 26. cikk (4) bekezdése alapján elfogadott határozatokat is."
        },
        {
          "EN": "In its adequacy decisions, the Commission should provide for a periodic review mechanism of their functioning.",
          "HU": "A megfelelőségi határozatokban a Bizottság rendelkezik a határozatok működésének időszakos felülvizsgálatát célzó mechanizmusról."
        },
        {
          "EN": "That periodic review should be conducted in consultation with the third country or international organisation in question and take into account all relevant developments in the third country or international organisation.",
          "HU": "Az időszakos felülvizsgálatot az említett harmadik országgal vagy nemzetközi szervezettel konzultálva kell elvégezni, és annak során a harmadik országgal vagy nemzetközi szervezettel kapcsolatos minden releváns fejleményt figyelembe kell venni."
        },
        {
          "EN": "For the purposes of monitoring and of carrying out the periodic reviews, the Commission should take into consideration the views and findings of the European Parliament and of the Council as well as of other relevant bodies and sources.",
          "HU": "A nyomon követés és az időszakos felülvizsgálatok elvégzése céljából a Bizottság figyelembe veszi az Európai Parlament és a Tanács, valamint az egyéb érintett szervek és források véleményét és megállapításait."
        },
        {
          "EN": "The Commission should evaluate, within a reasonable time, the functioning of the latter decisions and report any relevant findings to the Committee within the meaning of Regulation (EU) No 182/2011 of the European Parliament and of the Council [12](12) as established under this Regulation, to the European Parliament and to the Council.",
          "HU": "A Bizottság – észszerű határidőn belül – értékeli az utóbbi határozatok végrehajtását, és jelzi az e kérdést érintő megállapításait az e rendelet szerint létrehozott, a 182/2011/EU európai parlamenti és tanácsi rendelet [12](12) értelmében vett bizottság, valamint az Európai Parlament és a Tanács felé."
        },
        {
          "EN": "(107) The Commission may recognise that a third country, a territory or a specified sector within a third country, or an international organisation no longer ensures an adequate level of data protection.",
          "HU": "(107) A Bizottság azt is megállapíthatja, hogy az adott harmadik ország, a harmadik ország valamely területe vagy meghatározott ágazata, illetve valamely nemzetközi szervezet már nem biztosít megfelelő szintű adatvédelmet."
        },
        {
          "EN": "Consequently the transfer of personal data to that third country or international organisation should be prohibited, unless the requirements in this Regulation relating to transfers subject to appropriate safeguards, including binding corporate rules, and derogations for specific situations are fulfilled.",
          "HU": "Következésképpen a személyes adatok ilyen harmadik országba vagy nemzetközi szervezet részére történő továbbítását meg kell tiltani, kivéve, ha e rendeletbe foglalt, a személyes adatok továbbításra megfelelő garanciák alapján történik, ideértve a kötelező erejű vállalati szabályokat, és a meghatározott helyzetekben biztosított eltérésekre vonatkozó követelményeket."
        },
        {
          "EN": "In that case, provision should be made for consultations between the Commission and such third countries or international organisations.",
          "HU": "Erre az esetre a Bizottság és az ilyen harmadik országok vagy nemzetközi szervezetek közötti konzultációkra vonatkozó eljárásokról rendelkezni kell."
        },
        {
          "EN": "The Commission should, in a timely manner, inform the third country or international organisation of the reasons and enter into consultations with it in order to remedy the situation.",
          "HU": "A Bizottság megfelelő időben tájékoztatja az érintett harmadik országot vagy nemzetközi szervezetet az indokokról, és vele a helyzet orvoslása érdekében konzultációkat folytat."
        },
        {
          "EN": "(108) In the absence of an adequacy decision, the controller or processor should take measures to compensate for the lack of data protection in a third country by way of appropriate safeguards for the data subject.",
          "HU": "(108) Megfelelőségi határozat hiányában az adatkezelő vagy az adatfeldolgozó a megfelelő garanciák érintett számára való biztosítása útján gondoskodik az adatvédelem harmadik országbeli hiányosságainak ellensúlyozásáról."
        },
        {
          "EN": "Such appropriate safeguards may consist of making use of binding corporate rules, standard data protection clauses adopted by the Commission, standard data protection clauses adopted by a supervisory authority or contractual clauses authorised by a supervisory authority.",
          "HU": "Ezek a megfelelő garanciák magukban foglalhatják a kötelező erejű vállalati szabályok, a Bizottság által elfogadott általános adatvédelmi kikötések, a felügyeleti hatóság által elfogadott általános adatvédelmi kikötések vagy a felügyeleti hatóság által engedélyezett általános szerződési feltételek alkalmazását."
        },
        {
          "EN": "Those safeguards should ensure compliance with data protection requirements and the rights of the data subjects appropriate to processing within the Union, including the availability of enforceable data subject rights and of effective legal remedies, including to obtain effective administrative or judicial redress and to claim compensation, in the Union or in a third country.",
          "HU": "A garanciák biztosítják az adatvédelmi követelményeknek való megfelelést, és az Unión belüli adatkezelés esetén biztosított jogokkal azonos szintű jogokat biztosítanak az érintettek számára, beleértve az érintettek jogainak érvényesíthetőségét és a hatékony jogorvoslat lehetőségét, ezen belül ideértve azt, hogy az érintettek hatékony közigazgatási vagy bírósági jogorvoslatot vehessenek igénybe és kártérítést igényelhessenek az Unióban vagy egy harmadik országban."
        },
        {
          "EN": "They should relate in particular to compliance with the general principles relating to personal data processing, the principles of data protection by design and by default.",
          "HU": "A garanciák különösen a személyes adatok kezelésre vonatkozó általános elveknek, valamint a beépített és alapértelmezett adatvédelem elveinek való megfelelésre vonatkoznak."
        },
        {
          "EN": "Transfers may also be carried out by public authorities or bodies with public authorities or bodies in third countries or with international organisations with corresponding duties or functions, including on the basis of provisions to be inserted into administrative arrangements, such as a memorandum of understanding, providing for enforceable and effective rights for data subjects.",
          "HU": "Adattovábbítást közhatalmi szerv vagy egyéb, közfeladatot ellátó szervek is végezhetnek, harmadik országbeli közhatalmi szervek vagy egyéb, közfeladatot ellátó szervek vagy hasonló feladatot vagy funkciókat ellátó nemzetközi szervezetek felé, ideértve a közigazgatási megállapodásokba – például egyetértési megállapodás formájában – beillesztendő, az érintetteknek tényleges és érvényesíthető jogokat biztosító rendelkezések alapján."
        },
        {
          "EN": "Authorisation by the competent supervisory authority should be obtained when the safeguards are provided for in administrative arrangements that are not legally binding.",
          "HU": "Az illetékes felügyeleti hatóság engedélyét be kell szerezni abban az esetben, ha a garanciákat olyan közigazgatási megállapodások tartalmazzák, amelyek jogilag nem kötelező erejűek."
        },
        {
          "EN": "(109) The possibility for the controller or processor to use standard data-protection clauses adopted by the Commission or by a supervisory authority should prevent controllers or processors neither from including the standard data-protection clauses in a wider contract, such as a contract between the processor and another processor, nor from adding other clauses or additional safeguards provided that they do not contradict, directly or indirectly, the standard contractual clauses adopted by the Commission or by a supervisory authority or prejudice the fundamental rights or freedoms of the data subjects.",
          "HU": "(109) Az a lehetőség, mely szerint az adatkezelő vagy az adatfeldolgozó alkalmazhatja a Bizottság vagy a felügyeleti hatóság által elfogadott általános adatvédelmi kikötéseket, egyik sem zárja ki, hogy az adatkezelő vagy az adatfeldolgozó szélesebb körű szerződésben – ideértve az adatfeldolgozó és valamely egyéb adatfeldolgozó közötti szerződéseket is – alkalmazza ezen általános adatvédelmi kikötéseket, sem azt, hogy további rendelkezéseket vagy garanciákat adjon hozzá, feltéve hogy azok sem közvetlen, sem közvetett módon nem ellentétesek a Bizottság vagy a felügyeleti hatóság által elfogadott általános szerződési feltételekkel, és nem sértik az érintettek alapvető jogait és szabadságait."
        },
        {
          "EN": "Controllers and processors should be encouraged to provide additional safeguards via contractual commitments that supplement standard protection clauses.",
          "HU": "Az adatkezelőket és az adatfeldolgozókat arra kell ösztönözni, hogy az általános adatvédelmi kikötéseket kiegészítő további szerződéses kötelezettségvállalások útján még erőteljesebb garanciákat nyújtsanak."
        },
        {
          "EN": "(110) A group of undertakings, or a group of enterprises engaged in a joint economic activity, should be able to make use of approved binding corporate rules for its international transfers from the Union to organisations within the same group of undertakings, or group of enterprises engaged in a joint economic activity, provided that such corporate rules include all essential principles and enforceable rights to ensure appropriate safeguards for transfers or categories of transfers of personal data.",
          "HU": "(110) A vállalkozáscsoportok és a közös gazdasági tevékenységet folytató vállalkozások ugyanazon csoportjai számára lehetővé kell tenni, hogy jóváhagyott kötelező erejű vállalati szabályokat alkalmazzanak az Unióból a vállalkozáscsoporton vagy a közös gazdasági tevékenységet folytató vállalkozások ugyanazon csoportján belüli szervezetekhez irányuló nemzetközi adattovábbítások során, feltéve hogy e kötelező erejű vállalati szabályok minden olyan alapvető elvet és érvényesíthető jogot magukban foglalnak, amelyek megfelelő garanciát nyújtanak a személyes adatoknak vagy azok bizonyos kategóriáinak a továbbítására vonatkozóan."
        },
        {
          "EN": "(111) Provisions should be made for the possibility for transfers in certain circumstances where the data subject has given his or her explicit consent, where the transfer is occasional and necessary in relation to a contract or a legal claim, regardless of whether in a judicial procedure or whether in an administrative or any out-of-court procedure, including procedures before regulatory bodies.",
          "HU": "(111) Ha az érintett kifejezett hozzájárulását adta, az adatok továbbítását bizonyos körülmények esetén lehetővé kell tenni, ha az adattovábbítás alkalomszerű, és valamely szerződéssel vagy jogi igénnyel kapcsolatban válik szükségessé, függetlenül attól, hogy a szerződés teljesítésére vagy a jogi igény érvényesítésére bírósági eljárás, illetve közigazgatási vagy egyéb nem bírósági útra tartozó eljárás keretében kerül-e sor, ideértve a szabályozói szervek előtt zajló eljárásokat is."
        },
        {
          "EN": "Provision should also be made for the possibility for transfers where important grounds of public interest laid down by Union or Member State law so require or where the transfer is made from a register established by law and intended for consultation by the public or persons having a legitimate interest.",
          "HU": "Szintén lehetővé kell tenni az adatok továbbítását, ha azt az uniós vagy tagállami jogban megállapított fontos közérdek védelme megkívánja, vagy ha a továbbításra jogszabály alapján létrehozott nyilvántartásból kerül sor, és célja a nyilvánosság vagy az e tekintetben jogos érdekkel rendelkezők általi betekintés biztosítása."
        },
        {
          "EN": "In the latter case, such a transfer should not involve the entirety of the personal data or entire categories of the data contained in the register and, when the register is intended for consultation by persons having a legitimate interest, the transfer should be made only at the request of those persons or, if they are to be the recipients, taking into full account the interests and fundamental rights of the data subject.",
          "HU": "Ez utóbbi esetben az ilyen továbbítás nem vonatkozhat a nyilvántartásban szereplő személye adatok vagy adatkategóriák összességére, és ha a nyilvántartás célja a jogos érdekkel rendelkező személyek általi betekintés biztosítása, a nekik való továbbításra kizárólag e személyek kérelmére kerülhet sor, vagy akkor, ha ők a címzettek, teljes mértékben figyelembe véve az érintettek érdekeit és alapvető jogait."
        },
        {
          "EN": "(112) Those derogations should in particular apply to data transfers required and necessary for important reasons of public interest, for example in cases of international data exchange between competition authorities, tax or customs administrations, between financial supervisory authorities, between services competent for social security matters, or for public health, for example in the case of contact tracing for contagious diseases or in order to reduce and/or eliminate doping in sport.",
          "HU": "(112) Ezeket az eltéréseket különösen a fontos közérdekből szükséges adattovábbításokra kell alkalmazni, például a versenyhatóságok, adó- és vámhatóságok, pénzügyi felügyeleti hatóságok vagy a társadalombiztosítási ügyekért vagy a népegészségügyért felelős hivatalok közötti nemzetközi adatcsere érdekében, például fertőző betegségek felmerülésének esetekor a fertőzöttekkel való érintkezések nyomon követése vagy a doppingszerek sportban való használatának visszaszorítása és/vagy megszüntetése céljából."
        },
        {
          "EN": "A transfer of personal data should also be regarded as lawful where it is necessary to protect an interest which is essential for the data subject's or another person's vital interests, including physical integrity or life, if the data subject is incapable of giving consent.",
          "HU": "A személyes adatok továbbítása hasonlóképpen jogszerűnek tekintendő, ha olyan érdek védelméhez szükséges, amely az érintett vagy valamely más személy létfontosságú érdekeinek – köztük testi épségének vagy életének – védelme szempontjából bír alapvető fontossággal, és az érintettnek nem áll módjában hozzájárulását megadni."
        },
        {
          "EN": "In the absence of an adequacy decision, Union or Member State law may, for important reasons of public interest, expressly set limits to the transfer of specific categories of data to a third country or an international organisation.",
          "HU": "Megfelelőségi határozat hiányában az uniós jog vagy a tagállami jog fontos közérdekből kifejezetten korlátozhatja bizonyos kategóriába tartozó adatoknak valamely harmadik országba vagy nemzetközi szervezet részére történő továbbítását."
        },
        {
          "EN": "Member States should notify such provisions to the Commission.",
          "HU": "A tagállamok az ilyen rendelkezésekről a Bizottságot értesítik."
        },
        {
          "EN": "Any transfer to an international humanitarian organisation of personal data of a data subject who is physically or legally incapable of giving consent, with a view to accomplishing a task incumbent under the Geneva Conventions or to complying with international humanitarian law applicable in armed conflicts, could be considered to be necessary for an important reason of public interest or because it is in the vital interest of the data subject.",
          "HU": "Ha a genfi egyezmények által előírt feladat elvégzése, illetve a nemzetközi humanitárius jog fegyveres konfliktus esetén alkalmazandó rendelkezéseinek történő megfelelés alapján valamely nemzetközi humanitárius szervezet számára olyan érintett személyes adatait továbbítják, akinek fizikailag vagy jogilag nem áll módjában a hozzájárulás megadása, erre úgy lehet tekinteni, mint ami fontos közérdekből vagy az érintett létfontosságú érdeke védelmében szükséges."
        },
        {
          "EN": "(113) Transfers which can be qualified as not repetitive and that only concern a limited number of data subjects, could also be possible for the purposes of the compelling legitimate interests pursued by the controller, when those interests are not overridden by the interests or rights and freedoms of the data subject and when the controller has assessed all the circumstances surrounding the data transfer.",
          "HU": "(113) Az ismétlődőnek nem minősíthető és csupán korlátozott számú érintettre vonatkozó adattovábbítás szintén megengedhető az adatkezelő által követett, kényszerítő erejű jogos érdekből, feltéve hogy ezen érdekekkel szemben nem élveznek elsőbbséget az érintett érdekei vagy jogai és szabadságai, és az adatkezelő az adattovábbítás összes körülményét felmérte."
        },
        {
          "EN": "The controller should give particular consideration to the nature of the personal data, the purpose and duration of the proposed processing operation or operations, as well as the situation in the country of origin, the third country and the country of final destination, and should provide suitable safeguards to protect fundamental rights and freedoms of natural persons with regard to the processing of their personal data.",
          "HU": "Az adatkezelőnek különös figyelmet kell fordítania a személyes adatok jellegére, a tervezett adatkezelési művelet vagy műveletek céljára és időtartamára, valamint a származási országban, a harmadik országban és a célországban fennálló helyzetre, továbbá a személyes adatok kezelése tekintetében a természetes személyek alapvető jogainak és szabadságainak védelme érdekében nyújtott megfelelő garanciákra."
        },
        {
          "EN": "Such transfers should be possible only in residual cases where none of the other grounds for transfer are applicable.",
          "HU": "Ilyen adattovábbítás csak abban az esetben lehetséges, ha az adattovábbítás egyéb lehetséges indokait nem lehet alkalmazni."
        },
        {
          "EN": "For scientific or historical research purposes or statistical purposes, the legitimate expectations of society for an increase of knowledge should be taken into consideration.",
          "HU": "A tudományos és történelmi kutatási célokból, vagy statisztikai célokból folytatott adatkezelés esetében figyelembe kell venni a társadalomnak a tudás növelésével kapcsolatos jogos elvárásait."
        },
        {
          "EN": "The controller should inform the supervisory authority and the data subject about the transfer.",
          "HU": "Az adatkezelő az adattovábbításról tájékoztatja a felügyeleti hatóságot és az érintettet."
        },
        {
          "EN": "(114) In any case, where the Commission has taken no decision on the adequate level of data protection in a third country, the controller or processor should make use of solutions that provide data subjects with enforceable and effective rights as regards the processing of their data in the Union once those data have been transferred so that that they will continue to benefit from fundamental rights and safeguards.",
          "HU": "(114) Ha a Bizottság az adott harmadik ország viszonylatában nem hozott határozatot a harmadik ország adatvédelemi szintjéről, az adatkezelő vagy az adatfeldolgozó olyan megoldásokhoz folyamodhat, amelyek az érintettek számára olyan tényleges és érvényesíthető jogokat garantálnak, hogy az érintettek az adattovábbítást követően is élvezhetik az őket megillető alapvető jogokat és garanciákat."
        },
        {
          "EN": "(115) Some third countries adopt laws, regulations and other legal acts which purport to directly regulate the processing activities of natural and legal persons under the jurisdiction of the Member States.",
          "HU": "(115) Néhány harmadik ország olyan törvényeket, rendeleteket és más jogszabályokat fogad el, amelyek jogot formálnak a tagállamok joghatósága alá tartozó természetes vagy jogi személyek által végzett adatkezelési tevékenységek közvetlen szabályozására."
        },
        {
          "EN": "This may include judgments of courts or tribunals or decisions of administrative authorities in third countries requiring a controller or processor to transfer or disclose personal data, and which are not based on an international agreement, such as a mutual legal assistance treaty, in force between the requesting third country and the Union or a Member State.",
          "HU": "Ide tartoznak a harmadik országok bíróságai és törvényszékei által hozott ítéletek, valamint közigazgatási hatóságai által hozott döntések, amelyek valamely adatkezelő vagy adatfeldolgozó számára személyes adatok továbbítását vagy közlését írják elő, és amelyek nem egy olyan hatályos nemzetközi megállapodáson, például kölcsönös jogsegélyről szóló megállapodáson alapulnak, amely a megkereső harmadik ország és az Unió vagy egy tagállama között jött létre."
        },
        {
          "EN": "The extraterritorial application of those laws, regulations and other legal acts may be in breach of international law and may impede the attainment of the protection of natural persons ensured in the Union by this Regulation.",
          "HU": "E törvények, rendeletek és más jogszabályok országhatáron kívüli alkalmazása sértheti a nemzetközi jogot és akadályozhatja a természetes személyeknek az Unióban e rendelet által biztosított védelmét."
        },
        {
          "EN": "Transfers should only be allowed where the conditions of this Regulation for a transfer to third countries are met.",
          "HU": "Az adattovábbítás csak akkor engedélyezhető, ha az e rendeletben a harmadik országokba történő adattovábbítás tekintetében meghatározott feltételek teljesülnek."
        },
        {
          "EN": "This may be the case, inter alia, where disclosure is necessary for an important ground of public interest recognised in Union or Member State law to which the controller is subject.",
          "HU": "Ez többek között akkor állhat fenn, ha az adatközlés olyan, az uniós jogban vagy azon tagállam jogában elismert fontos közérdekből szükséges, amelynek az adatkezelő a hatálya alá tartozik."
        },
        {
          "EN": "(116) When personal data moves across borders outside the Union it may put at increased risk the ability of natural persons to exercise data protection rights in particular to protect themselves from the unlawful use or disclosure of that information.",
          "HU": "(116) A személyes adatok uniós külső határokat átlépő továbbításakor megnövekedhet annak a kockázata, hogy a természetes személyek adatvédelmi jogaikat nem képesek gyakorolni, különösen ami az adatok jogellenes felhasználása vagy közlése elleni védelmet illeti."
        },
        {
          "EN": "At the same time, supervisory authorities may find that they are unable to pursue complaints or conduct investigations relating to the activities outside their borders.",
          "HU": "Ugyanakkor előfordulhat, hogy a felügyeleti hatóságok nem tudnak az országuk határaikon kívül folyó tevékenységek tekintetében a panaszok kapcsán eljárni vagy vizsgálatot lefolytatni."
        },
        {
          "EN": "Their efforts to work together in the cross-border context may also be hampered by insufficient preventative or remedial powers, inconsistent legal regimes, and practical obstacles like resource constraints.",
          "HU": "A határokon átnyúló összefüggésben tett erőfeszítéseiket az elégtelen megelőzési vagy jogorvoslati hatáskör, az egymásnak ellentmondó jogrendszerek, valamint olyan gyakorlati akadályok is hátráltathatják, mint a források korlátozott volta."
        },
        {
          "EN": "Therefore, there is a need to promote closer cooperation among data protection supervisory authorities to help them exchange information and carry out investigations with their international counterparts.",
          "HU": "Ezért elő kell mozdítani az adatvédelmi felügyeleti hatóságok közötti szorosabb együttműködést az információcsere és a nemzetközi partnerekkel folytatott vizsgálatok elősegítése érdekében."
        },
        {
          "EN": "For the purposes of developing international cooperation mechanisms to facilitate and provide international mutual assistance for the enforcement of legislation for the protection of personal data, the Commission and the supervisory authorities should exchange information and cooperate in activities related to the exercise of their powers with competent authorities in third countries, based on reciprocity and in accordance with this Regulation.",
          "HU": "A személyes adatok védelmét célzó jogszabályok érvényesítését célzó kölcsönös nemzetközi segítségnyújtást megkönnyítő, illetve biztosító nemzetközi együttműködési mechanizmusok kifejlesztése érdekében a Bizottság és a felügyeleti hatóságok hatáskörük gyakorlása során kölcsönösségen alapuló információcserét és együttműködést folytatnak a harmadik országbeli illetékes hatóságokkal, e rendelettel összhangban."
        },
        {
          "EN": "(117) The establishment of supervisory authorities in Member States, empowered to perform their tasks and exercise their powers with complete independence, is an essential component of the protection of natural persons with regard to the processing of their personal data.",
          "HU": "(117) A természetes személyek személyes adatainak kezelésével összefüggésben fennálló védelemnek alapvető alkotóeleme, hogy a tagállamokban feladataik ellátása és hatásköreik gyakorlása során teljes függetlenséget élvező felügyeleti hatóságokat hozzanak létre."
        },
        {
          "EN": "Member States should be able to establish more than one supervisory authority, to reflect their constitutional, organisational and administrative structure.",
          "HU": "A tagállamok saját alkotmányos, szervezeti és közigazgatási szerkezetükhöz igazodva egynél több felügyeleti hatóságot is létrehozhatnak."
        },
        {
          "EN": "(118) The independence of supervisory authorities should not mean that the supervisory authorities cannot be subject to control or monitoring mechanisms regarding their financial expenditure or to judicial review.",
          "HU": "(118) A felügyeleti hatóságok függetlensége nem értelmezhető úgy, mintha ki lennének vonva a pénzügyi kiadásaik ellenőrzésére vagy nyomon követésére szolgáló mechanizmusok vagy a bírósági felülvizsgálat hatálya alól."
        },
        {
          "EN": "(119) Where a Member State establishes several supervisory authorities, it should establish by law mechanisms for ensuring the effective participation of those supervisory authorities in the consistency mechanism.",
          "HU": "(119) Ha valamely tagállam több felügyeleti hatóságot is létrehoz, jogszabályban szükséges rögzíteni azokat mechanizmusokat, amelyek biztosítják e felügyeleti hatóságok hatékony részvételét az egységességi mechanizmusban."
        },
        {
          "EN": "That Member State should in particular designate the supervisory authority which functions as a single contact point for the effective participation of those authorities in the mechanism, to ensure swift and smooth cooperation with other supervisory authorities, the Board and the Commission.",
          "HU": "Az említett tagállam kijelöli különösen azt a felügyeleti hatóságot, amely egyedüli kapcsolattartóként jár el más felügyeleti hatóságokkal annak érdekében, hogy az egységességi mechanizmusban hatékonyan részt vegyen, valamint a Testülettel és a Bizottsággal történő gyors és zökkenőmentes együttműködés érdekében."
        },
        {
          "EN": "(120) Each supervisory authority should be provided with the financial and human resources, premises and infrastructure necessary for the effective performance of their tasks, including those related to mutual assistance and cooperation with other supervisory authorities throughout the Union.",
          "HU": "(120) Valamennyi felügyeleti hatóság számára biztosítani kell a feladatai – beleértve az Unió bármely másik felügyeleti hatóságával való kölcsönös segítségnyújtáshoz és együttműködéshez kapcsolódó feladatokat is – hatékony ellátásához szükséges anyagi és személyzeti forrásokat, helyiségeket és infrastruktúrát."
        },
        {
          "EN": "Each supervisory authority should have a separate, public annual budget, which may be part of the overall state or national budget.",
          "HU": "Minden felügyeleti hatóság saját, nyilvános, éves költségvetéssel rendelkezik, amely az állami vagy nemzeti költségvetés részét képezheti."
        },
        {
          "EN": "(121) The general conditions for the member or members of the supervisory authority should be laid down by law in each Member State and should in particular provide that those members are to be appointed, by means of a transparent procedure, either by the parliament, government or the head of State of the Member State on the basis of a proposal from the government, a member of the government, the parliament or a chamber of the parliament, or by an independent body entrusted under Member State law.",
          "HU": "(121) A felügyeleti hatóság tagjára vagy tagjaira vonatkozó általános feltételeket minden tagállamban jogszabályban kell rögzíteni, hogy tagjait átlátható eljárás keretében az adott tagállam parlamentje, kormánya vagy államfője nevezi ki a kormány, a kormány egyik tagja, a parlament vagy valamelyik parlamenti kamara, vagy pedig a tagállami jogban a kinevezéssel megbízott független szerv javaslata alapján."
        },
        {
          "EN": "In order to ensure the independence of the supervisory authority, the member or members should act with integrity, refrain from any action that is incompatible with their duties and should not, during their term of office, engage in any incompatible occupation, whether gainful or not.",
          "HU": "A felügyeleti hatóság függetlenségének biztosítása érdekében, az említett tag vagy tagok tisztességesen járnak el, tartózkodnak a feladatkörükkel össze nem egyeztethető cselekményektől, valamint hivatali idejük alatt nem vállalhatnak semmilyen azzal összeférhetetlen szakmai tevékenységet, sem javadalmazás ellenében, sem a nélkül."
        },
        {
          "EN": "The supervisory authority should have its own staff, chosen by the supervisory authority or an independent body established by Member State law, which should be subject to the exclusive direction of the member or members of the supervisory authority.",
          "HU": "A felügyeleti hatóság saját személyzettel rendelkezik, amelyet a felügyeleti hatóság vagy a tagállam joga által létrehozott független szerv választ ki, és amely a felügyeleti hatóság egy tagja vagy tagjai kizárólagos irányítása alá tartozik."
        },
        {
          "EN": "(122) Each supervisory authority should be competent on the territory of its own Member State to exercise the powers and to perform the tasks conferred on it in accordance with this Regulation.",
          "HU": "(122) Az egyes felügyeleti hatóságok saját tagállamuk területén illetékesek az e rendelettel összhangban rájuk ruházott hatáskörök és feladatok gyakorlására, illetve végzésére."
        },
        {
          "EN": "This should cover in particular the processing in the context of the activities of an establishment of the controller or processor on the territory of its own Member State, the processing of personal data carried out by public authorities or private bodies acting in the public interest, processing affecting data subjects on its territory or processing carried out by a controller or processor not established in the Union when targeting data subjects residing on its territory.",
          "HU": "Ez kiterjed különösen az adatkezelők vagy az adatfeldolgozók tevékenységi helyén folytatott tevékenységekkel összefüggésben a tagállamuk területén végzett adatkezelésre, a személyes adatoknak a közhatalmi szervek vagy közérdekből eljáró magánfél szervezetek által végzett kezelésére, a tagállamuk területén élő érintettekre irányuló adatkezelésre, illetve az Unióban tevékenységi hellyel nem rendelkező adatkezelők vagy adatfeldolgozók által végzett adatkezelésre, ha az érintettek az adott tagállam területén tartózkodnak."
        },
        {
          "EN": "This should include handling complaints lodged by a data subject, conducting investigations on the application of this Regulation and promoting public awareness of the risks, rules, safeguards and rights in relation to the processing of personal data.",
          "HU": "Ez magában foglalja, hogy az érintettek által benyújtott panaszokkal kapcsolatban eljár, lefolytatja az e rendelet alkalmazásával kapcsolatos vizsgálatokat, valamint a személyes adatok kezelésével összefüggő kockázatok, szabályok, garanciák és jogok terén tájékoztatja a nyilvánosságot is."
        },
        {
          "EN": "(123) The supervisory authorities should monitor the application of the provisions pursuant to this Regulation and contribute to its consistent application throughout the Union, in order to protect natural persons in relation to the processing of their personal data and to facilitate the free flow of personal data within the internal market.",
          "HU": "(123) A felügyeleti hatóságok annak érdekében, hogy védjék a természetes személyek személyes adatainak kezelését, valamint biztosítsák a személyes adatok belső piacon belüli szabad áramlását, figyelemmel kísérik az e rendelet szerinti rendelkezések alkalmazását, és hozzájárulnak azoknak az Unió egész területén történő egységes alkalmazásához."
        },
        {
          "EN": "For that purpose, the supervisory authorities should cooperate with each other and with the Commission, without the need for any agreement between Member States on the provision of mutual assistance or on such cooperation.",
          "HU": "E célból a felügyeleti hatóságok együttműködnek egymással és a Bizottsággal, anélkül, hogy a kölcsönös segítségnyújtásról vagy erről az együttműködésről szükséges lenne a tagállamoknak megállapodniuk."
        },
        {
          "EN": "(124) Where the processing of personal data takes place in the context of the activities of an establishment of a controller or a processor in the Union and the controller or processor is established in more than one Member State, or where processing taking place in the context of the activities of a single establishment of a controller or processor in the Union substantially affects or is likely to substantially affect data subjects in more than one Member State, the supervisory authority for the main establishment of the controller or processor or for the single establishment of the controller or processor should act as lead authority.",
          "HU": "(124) Ha a személyes adatok kezelésére az adatkezelő vagy az adatfeldolgozó Unión belüli tevékenységi helyén folytatott tevékenységekkel összefüggésben kerül sor, és az adatkezelő vagy az adatfeldolgozó egynél több tagállamban rendelkezik tevékenységi hellyel, vagy ha az adatkezelő vagy az adatfeldolgozó kizárólag Unión belüli tevékenységi helyen folytatott tevékenységekkel összefüggésben megvalósuló adatkezelés az érintetteket egynél több tagállamban jelentős mértékben érinti vagy valószínűsíthetően jelentős mértékben érinti, akkor fő hatóságként az adatkezelő vagy az adatfeldolgozó tevékenységi központja vagy egyetlen tevékenységi helye szerinti felügyeleti hatósága jár el."
        },
        {
          "EN": "It should cooperate with the other authorities concerned, because the controller or processor has an establishment on the territory of their Member State, because data subjects residing on their territory are substantially affected, or because a complaint has been lodged with them.",
          "HU": "A fő hatóság együttműködik olyan egyéb hatóságokkal, amelyek szintén érintettek amiatt, hogy az adatkezelő vagy adatfeldolgozó tevékenységi hellyel rendelkezik a tagállamuk területén, hogy a területükön lakóhellyel rendelkező érintettek jelentős mértékben érintve vannak, vagy, hogy panaszt nyújtottak be hozzájuk."
        },
        {
          "EN": "Also where a data subject not residing in that Member State has lodged a complaint, the supervisory authority with which such complaint has been lodged should also be a supervisory authority concerned.",
          "HU": "Továbbá, ha az adott tagállam területén lakóhellyel nem rendelkező érintett nyújtott be panaszt, azt a felügyeleti hatóságot, amelyhez a panaszt benyújtotta, szintén érintett felügyeleti hatóságnak kell tekinteni."
        },
        {
          "EN": "Within its tasks to issue guidelines on any question covering the application of this Regulation, the Board should be able to issue guidelines in particular on the criteria to be taken into account in order to ascertain whether the processing in question substantially affects data subjects in more than one Member State and on what constitutes a relevant and reasoned objection.",
          "HU": "Az e rendelet alkalmazásával kapcsolatos kérdésekre vonatkozó iránymutatások kiadásával összefüggő feladatai keretében a Testület számára lehetővé kell tenni, hogy iránymutatásokat adjon ki különösen azokra a szempontokra vonatkozóan, amelyeket figyelembe kell venni ahhoz, hogy meg lehessen győződni arról, hogy a szóban forgó adatkezelés egynél több tagállamban érint-e jelentős mértékben érintetteket, valamint arra vonatkozóan, hogy mi tekintendő releváns és megalapozott kifogásnak."
        },
        {
          "EN": "(125) The lead authority should be competent to adopt binding decisions regarding measures applying the powers conferred on it in accordance with this Regulation.",
          "HU": "(125) Az e rendelettel összhangban rá ruházott hatáskörökkel élve, az intézkedésekre vonatkozó kötelező erejű döntések elfogadására a fő hatóság illetékes."
        },
        {
          "EN": "In its capacity as lead authority, the supervisory authority should closely involve and coordinate the supervisory authorities concerned in the decision-making process.",
          "HU": "A fő hatóságként eljáró felügyeleti hatóság a döntéshozatali folyamatba szorosan az érintett felügyeleti hatóságokat, és e folyamat során azokkal koordinál."
        },
        {
          "EN": "Where the decision is to reject the complaint by the data subject in whole or in part, that decision should be adopted by the supervisory authority with which the complaint has been lodged.",
          "HU": "Az érintett által benyújtott panasz részben vagy egészben történő elutasítására vonatkozó döntések esetében a döntést az a felügyeleti hatóság hozza meg, amelyhez a panaszt benyújtották."
        },
        {
          "EN": "(126) The decision should be agreed jointly by the lead supervisory authority and the supervisory authorities concerned and should be directed towards the main or single establishment of the controller or processor and be binding on the controller and processor.",
          "HU": "(126) A fő felügyeleti hatóság és az érintett felügyeleti hatóságok együttesen állapodnak meg a döntésről, amely az adatkezelő vagy az adatfeldolgozó tevékenységi központjára vagy egyetlen tevékenységi helyére irányul, és amely az adatkezelőre és az adatfeldolgozóra nézve kötelezőnek kell lennie."
        },
        {
          "EN": "The controller or processor should take the necessary measures to ensure compliance with this Regulation and the implementation of the decision notified by the lead supervisory authority to the main establishment of the controller or processor as regards the processing activities in the Union.",
          "HU": "Az adatkezelő vagy az adatfeldolgozó megteszi az ahhoz szükséges intézkedéseket, hogy biztosítsa az e rendeletnek való megfelelést és azt, hogy a fő felügyeleti hatóság által az adatkezelő vagy az adatfeldolgozó tevékenységi központjának megküldött döntést az Unión belüli kezelési tevékenységek tekintetében végrehajtsák."
        },
        {
          "EN": "(127) Each supervisory authority not acting as the lead supervisory authority should be competent to handle local cases where the controller or processor is established in more than one Member State, but the subject matter of the specific processing concerns only processing carried out in a single Member State and involves only data subjects in that single Member State, for example, where the subject matter concerns the processing of employees' personal data in the specific employment context of a Member State.",
          "HU": "(127) A nem fő felügyeleti hatóságként eljáró egyes felügyeleti hatóságok illetékesek helyi ügyekben abban az esetben, ha az adatkezelő vagy az adatfeldolgozó ugyan egynél több tagállamban rendelkezik tevékenységi hellyel, azonban a konkrét adatkezelés tárgya csak egyetlen tagállamban végzett adatkezelésre vonatkozik, és csak abban az egyetlen tagállamban élő érintettekre irányul, például ha a személyes adatok kezelésének tárgya a munkavállalói adatoknak konkrét foglalkoztatással összefüggő kezelése egy adott tagállamban."
        },
        {
          "EN": "In such cases, the supervisory authority should inform the lead supervisory authority without delay about the matter.",
          "HU": "Ilyen esetekben a felügyeleti hatóság az ügyről a fő felügyeleti hatóságot haladéktalanul tájékoztatja."
        },
        {
          "EN": "After being informed, the lead supervisory authority should decide, whether it will handle the case pursuant to the provision on cooperation between the lead supervisory authority and other supervisory authorities concerned (‘one-stop-shop mechanism’), or whether the supervisory authority which informed it should handle the case at local level.",
          "HU": "A tájékoztatás kézhezvételét követően a fő felügyeleti hatóság eldönti, hogy eljár-e az ügyben a fő felügyeleti hatóság és a más érintett felügyeleti hatóság közötti együttműködésre vonatkozó rendelkezésnek megfelelően („egységességi mechanizmus”), vagy pedig az ügyben a helyi szinten a tájékoztatást adó felügyeleti hatóság járjon el."
        },
        {
          "EN": "When deciding whether it will handle the case, the lead supervisory authority should take into account whether there is an establishment of the controller or processor in the Member State of the supervisory authority which informed it in order to ensure effective enforcement of a decision vis-à-vis the controller or processor.",
          "HU": "Amikor döntést hoz arról, hogy maga jár el az ügyben, a fő felügyeleti hatóság figyelembe veszi, hogy az adatkezelő vagy az adatfeldolgozó rendelkezik-e tevékenységi hellyel az őt tájékoztató felügyeleti hatóság tagállamában, annak biztosítása érdekében, hogy a döntést hatékonyan végre lehessen hajtani az adatkezelővel vagy az adatfeldolgozóval szemben."
        },
        {
          "EN": "Where the lead supervisory authority decides to handle the case, the supervisory authority which informed it should have the possibility to submit a draft for a decision, of which the lead supervisory authority should take utmost account when preparing its draft decision in that one-stop-shop mechanism.",
          "HU": "Ha a fő felügyeleti hatóság úgy dönt, hogy eljár az ügyben, az őt tájékoztató felügyeleti hatóság számára lehetővé kell tenni, hogy benyújtson egy döntéstervezetet, amelyet a fő felügyeleti hatóság a legmesszebbmenőkig figyelembe vesz akkor, amikor az együttműködés és az egységességi mechanizmus keretén belül saját döntéstervezetét megszövegezi."
        },
        {
          "EN": "(128) The rules on the lead supervisory authority and the one-stop-shop mechanism should not apply where the processing is carried out by public authorities or private bodies in the public interest.",
          "HU": "(128) A fő felügyeleti hatóságra és az együttműködést és egységességi mechanizmusra vonatkozó szabályokat nem lehet alkalmazni abban az esetben, ha az adatkezelést közhatalmi szervek vagy közérdekből eljáró magánfél szervezetek végzik."
        },
        {
          "EN": "In such cases the only supervisory authority competent to exercise the powers conferred to it in accordance with this Regulation should be the supervisory authority of the Member State where the public authority or private body is established.",
          "HU": "Ilyen esetben kizárólag az a felügyeleti hatóság lehet illetékes az e rendelettel összhangban rá ruházott hatáskörök gyakorlására, amely annak a tagállamnak a felügyeleti hatósága, ahol az adott közhatalmi szerv vagy magánfél szerv székhelye található."
        },
        {
          "EN": "(129) In order to ensure consistent monitoring and enforcement of this Regulation throughout the Union, the supervisory authorities should have in each Member State the same tasks and effective powers, including powers of investigation, corrective powers and sanctions, and authorisation and advisory powers, in particular in cases of complaints from natural persons, and without prejudice to the powers of prosecutorial authorities under Member State law, to bring infringements of this Regulation to the attention of the judicial authorities and engage in legal proceedings.",
          "HU": "(129) E rendelet Unió-szerte következetes végrehajtásának és e végrehajtás következetes nyomon követésének biztosítása érdekében a felügyeleti hatóságokat minden tagállamban ugyanazokkal a feladatokkal és tényleges hatáskörökkel kell felruházni, ideértve a vizsgálati hatáskört, a korrekciós és szankciós hatáskört és a szankciókat, valamint az engedélyezési és a tanácsadási hatáskört, különösen a természetes személyek panaszaival kapcsolatos ügyekben, továbbá – az ügyészi hatóságok tagállami jog szerinti hatásköreinek sérelme nélkül – az arra vonatkozó hatáskört, hogy e rendelet megsértése esetén az igazságügyi hatóságokhoz forduljanak, és bírósági eljárást kezdeményezzenek."
        },
        {
          "EN": "Such powers should also include the power to impose a temporary or definitive limitation, including a ban, on processing.",
          "HU": "E hatáskörök magukban foglalják az adatkezelés átmeneti vagy végleges korlátozását, ideértve az adatkezelés tilalmának elrendelésére vonatkozó jogosultságot."
        },
        {
          "EN": "Member States may specify other tasks related to the protection of personal data under this Regulation.",
          "HU": "A személyes adatok e rendelet szerinti védelmével kapcsolatos egyéb feladatokat a tagállamok is meghatározhatnak."
        },
        {
          "EN": "The powers of supervisory authorities should be exercised in accordance with appropriate procedural safeguards set out in Union and Member State law, impartially, fairly and within a reasonable time.",
          "HU": "A felügyeleti hatóságok hatásköreiket az uniós és a tagállami jogban foglalt megfelelő eljárási garanciáknak megfelelően, pártatlanul, tisztességesen és észszerű határidőn belül gyakorolják."
        },
        {
          "EN": "In particular each measure should be appropriate, necessary and proportionate in view of ensuring compliance with this Regulation, taking into account the circumstances of each individual case, respect the right of every person to be heard before any individual measure which would affect him or her adversely is taken and avoid superfluous costs and excessive inconveniences for the persons concerned.",
          "HU": "Különösen, az e rendeletnek való megfelelés biztosítása érdekében minden egyes intézkedésnek megfelelőnek, szükségesnek és arányosnak kell lennie, és azok kapcsán figyelembe kell venni az adott eset körülményeit, tiszteletben kell tartani azt, hogy minden személynek joga van ahhoz, hogy az őt esetleg hátrányosan érintő egyedi intézkedés meghozatala előtt meghallgassák, továbbá kerülni kell, hogy az intézkedés az érintett személynek felesleges költségeket és túlzott kényelmetlenséget okozzon."
        },
        {
          "EN": "Investigatory powers as regards access to premises should be exercised in accordance with specific requirements in Member State procedural law, such as the requirement to obtain a prior judicial authorisation.",
          "HU": "A helyiségekbe való belépést illetően a vizsgálati hatáskört a vonatkozó tagállami eljárásjogban foglalt különös követelményekkel összhangban kell gyakorolni, ilyen például az előzetes bírósági engedély beszerzésének követelménye."
        },
        {
          "EN": "Each legally binding measure of the supervisory authority should be in writing, be clear and unambiguous, indicate the supervisory authority which has issued the measure, the date of issue of the measure, bear the signature of the head, or a member of the supervisory authority authorised by him or her, give the reasons for the measure, and refer to the right of an effective remedy.",
          "HU": "A felügyeleti hatóság minden jogilag kötelező erejű intézkedést írásban hozza meg, az intézkedésnek világosnak és egyértelműnek kell lennie, fel kell tüntetni rajta az intézkedést hozó felügyeleti hatóságot, az intézkedés meghozatalának dátumát, a felügyeleti hatóság vezetőjének vagy a hatóság általa felhatalmazott tagjának azt az aláírásával kell ellátnia, az intézkedést indokolni kell és hivatkozni kell benne a hatékony jogorvoslathoz való jogra."
        },
        {
          "EN": "This should not preclude additional requirements pursuant to Member State procedural law.",
          "HU": "Ez nem zárja ki további tagállami eljárásjogi követelmények megállapítását."
        },
        {
          "EN": "The adoption of a legally binding decision implies that it may give rise to judicial review in the Member State of the supervisory authority that adopted the decision.",
          "HU": "Az említett jogilag kötelező erejű döntés elfogadása azzal jár, hogy az az adott döntést elfogadó felügyeleti hatóság szerinti tagállamban bírósági felülvizsgálat alá vethető."
        },
        {
          "EN": "(130) Where the supervisory authority with which the complaint has been lodged is not the lead supervisory authority, the lead supervisory authority should closely cooperate with the supervisory authority with which the complaint has been lodged in accordance with the provisions on cooperation and consistency laid down in this Regulation.",
          "HU": "(130) Ha a felügyeleti hatóság, amelyhez a panaszt benyújtották, nem a fő felügyeleti hatóság, a fő felügyeleti hatóság e rendeletben az együttműködésre és az összhang biztosítására megállapított rendelkezéseknek megfelelően szorosan együttműködik azzal a felügyeleti hatósággal, amelyhez a panaszt benyújtották."
        },
        {
          "EN": "In such cases, the lead supervisory authority should, when taking measures intended to produce legal effects, including the imposition of administrative fines, take utmost account of the view of the supervisory authority with which the complaint has been lodged and which should remain competent to carry out any investigation on the territory of its own Member State in liaison with the competent supervisory authority.",
          "HU": "Minden ilyen esetben a fő felügyeleti hatóság minden olyan intézkedés meghozatalakor, amelynek célja valamely joghatás elérése – ideértve a közigazgatási bírságok kiszabását is – a lehető legnagyobb mértékben figyelembe veszi annak a felügyeleti hatóságnak a véleményét, amelyhez a panaszt benyújtották, és amely hatóság a saját tagállama területén lefolytatandó vizsgálat tekinttében illetékes marad, együttműködésben a fő felügyeleti hatósággal."
        },
        {
          "EN": "(131) Where another supervisory authority should act as a lead supervisory authority for the processing activities of the controller or processor but the concrete subject matter of a complaint or the possible infringement concerns only processing activities of the controller or processor in the Member State where the complaint has been lodged or the possible infringement detected and the matter does not substantially affect or is not likely to substantially affect data subjects in other Member States, the supervisory authority receiving a complaint or detecting or being informed otherwise of situations that entail possible infringements of this Regulation should seek an amicable settlement with the controller and, if this proves unsuccessful, exercise its full range of powers.",
          "HU": "(131) Azokban az ügyekben, amelyekben az adatkezelő vagy az adatfeldolgozó adatkezelési tevékenységei tekintetében egy másik felügyeleti hatóság jár el fő felügyeleti hatóságként, azonban a panasz konkrét tárgya vagy az esetleges jogsértés kizárólag a panasz benyújtásának helye szerinti tagállamban működő adatkezelő vagy adatfeldolgozó adatkezelési tevékenységeit érinti, és az ügy nem érint jelentős mértékben vagy valószínűsíthetően nem érint jelentős mértékben más tagállamokban élő érintetteket, az a felügyeleti hatóság, amelyhez panasz érkezik, vagy amely e rendelet esetleges megsértését eredményező helyzetet észlel vagy arról egyéb módon értesül, az adatkezelővel békés vitarendezésre törekszik, és ennek sikertelensége esetén gyakorolja valamennyi hatáskörét."
        },
        {
          "EN": "This should include: specific processing carried out in the territory of the Member State of the supervisory authority or with regard to data subjects on the territory of that Member State; processing that is carried out in the context of an offer of goods or services specifically aimed at data subjects in the territory of the Member State of the supervisory authority; or processing that has to be assessed taking into account relevant legal obligations under Member State law.",
          "HU": "Ennek ki kell terjednie a felügyeleti hatóság szerinti tagállam területén végzett konkrét adatkezelésre vagy az említett tagállam területén élő érintettekre irányuló konkrét adatkezelésre, az olyan adatkezelésre, amelyet termékeknek vagy szolgáltatásoknak kifejezetten a felügyeleti hatóság szerinti tagállam területén élő érintettek részére történő kínálásával összefüggésben végeznek, vagy amelyet a tagállami jog szerinti vonatkozó jogi kötelezettségeket figyelembe véve kell értékelni."
        },
        {
          "EN": "(132) Awareness-raising activities by supervisory authorities addressed to the public should include specific measures directed at controllers and processors, including micro, small and medium-sized enterprises, as well as natural persons in particular in the educational context.",
          "HU": "(132) A felügyeleti hatóságok által végzett, a nyilvánosságot célzó figyelemfelkeltő tevékenységek magukban foglalnak olyan konkrét intézkedéseket, amelyek az adatkezelőkre és az adatfeldolgozókra – beleértve a mikro-, kis- és középvállalkozásokat is –, valamint különösen oktatási keretek között a természetes személyekre irányulnak."
        },
        {
          "EN": "(133) The supervisory authorities should assist each other in performing their tasks and provide mutual assistance, so as to ensure the consistent application and enforcement of this Regulation in the internal market.",
          "HU": "(133) Annak érdekében, hogy e rendelet egységes alkalmazását és végrehajtását a belső piacon biztosítsák, a felügyeleti hatóságok feladataik ellátásában egymást segítik, és egymásnak kölcsönös segítséget nyújtanak."
        },
        {
          "EN": "A supervisory authority requesting mutual assistance may adopt a provisional measure if it receives no response to a request for mutual assistance within one month of the receipt of that request by the other supervisory authority.",
          "HU": "A kölcsönös segítségnyújtást kezdeményező felügyeleti hatóság ideiglenes intézkedést fogadhat el, ha a kölcsönös segítségnyújtás iránti megkeresésére a megkeresett felügyeleti hatóságtól a megkeresés kézhezvételétől számított egy hónapon belül nem érkezik válasz."
        },
        {
          "EN": "(134) Each supervisory authority should, where appropriate, participate in joint operations with other supervisory authorities.",
          "HU": "(134) Minden felügyeleti hatóság, indokolt esetben, részt vesz a felügyeleti hatóságok együttes műveleteiben."
        },
        {
          "EN": "The requested supervisory authority should be obliged to respond to the request within a specified time period.",
          "HU": "A megkeresett felügyeleti hatóságot kötelezni kell arra, hogy a megkeresésre meghatározott időn belül választ adjon."
        },
        {
          "EN": "(135) In order to ensure the consistent application of this Regulation throughout the Union, a consistency mechanism for cooperation between the supervisory authorities should be established.",
          "HU": "(135) E rendelet Unió-szerte történő egységes alkalmazásának biztosítása érdekében, a felügyeleti hatóságok közötti együttműködést szolgáló egységességi mechanizmust kell létrehozni."
        },
        {
          "EN": "That mechanism should in particular apply where a supervisory authority intends to adopt a measure intended to produce legal effects as regards processing operations which substantially affect a significant number of data subjects in several Member States.",
          "HU": "Ezt a mechanizmust különösen akkor kell alkalmazni, amikor egy felügyeleti hatóság célja olyan intézkedés elfogadása, amely több tagállamban nagyszámú érintettet jelentős mértékben érintő adatkezelési műveletekre vonatkozóan joghatást ér el."
        },
        {
          "EN": "It should also apply where any supervisory authority concerned or the Commission requests that such matter should be handled in the consistency mechanism.",
          "HU": "A mechanizmus abban az esetben is alkalmazni kell, ha valamely érintett felügyeleti hatóság vagy a Bizottság kéri egy ilyen ügy egységességi mechanizmus keretében történő kezelését."
        },
        {
          "EN": "That mechanism should be without prejudice to any measures that the Commission may take in the exercise of its powers under the Treaties.",
          "HU": "Az egységességi mechanizmust a Bizottság azon intézkedéseinek sérelme nélkül kell alkalmazni, amelyeket a Szerződések szerinti hatásköreinek gyakorlása keretében tesz."
        },
        {
          "EN": "(136) In applying the consistency mechanism, the Board should, within a determined period of time, issue an opinion, if a majority of its members so decides or if so requested by any supervisory authority concerned or the Commission.",
          "HU": "(136) Az egységességi mechanizmus alkalmazása keretében a Testület tagjainak többségi döntése alapján, vagy bármely érintett felügyeleti hatóság vagy a Bizottság kérésére meghatározott időn belül véleményt bocsát ki."
        },
        {
          "EN": "The Board should also be empowered to adopt legally binding decisions where there are disputes between supervisory authorities.",
          "HU": "A Testületet fel kell hatalmazni arra, hogy ha a felügyeleti hatóságok közötti jogviták vannak, jogilag kötelező erejű döntéseket hozzon."
        },
        {
          "EN": "For that purpose, it should issue, in principle by a two-thirds majority of its members, legally binding decisions in clearly specified cases where there are conflicting views among supervisory authorities, in particular in the cooperation mechanism between the lead supervisory authority and supervisory authorities concerned on the merits of the case, in particular whether there is an infringement of this Regulation.",
          "HU": "E célból – elvben – tagjainak kétharmados többségével jogilag kötelező erejű döntéseket hoz olyan egyértelműen meghatározott esetekben, amelyekben a felügyeleti hatóságok – különösen az együttműködési mechanizmusban a fő felügyeleti hatóság és az érintett felügyeleti hatóság – álláspontjai ellentétesek az adott ügy érdemét, különösen azt illetően, hogy e rendeletet megsértették-e."
        },
        {
          "EN": "(137) There may be an urgent need to act in order to protect the rights and freedoms of data subjects, in particular when the danger exists that the enforcement of a right of a data subject could be considerably impeded.",
          "HU": "(137) Az érintettek jogainak és szabadságainak védelme céljából sürgős intézkedésre is szükség lehet, különösen abban az esetben, amikor fennáll annak a veszélye, hogy az érintett jelentősen akadályoztatva van jogainak gyakorlásában."
        },
        {
          "EN": "A supervisory authority should therefore be able to adopt duly justified provisional measures on its territory with a specified period of validity which should not exceed three months.",
          "HU": "A felügyeleti hatóság számára ezért lehetővé kell tenni, hogy a tagállamának területére vonatkozóan kellően indokolt ideiglenes intézkedéseket fogadjon el; amely intézkedések érvényessége meghatározott időtartamra, de legfeljebb három hónapra szólhat."
        },
        {
          "EN": "(138) The application of such mechanism should be a condition for the lawfulness of a measure intended to produce legal effects by a supervisory authority in those cases where its application is mandatory.",
          "HU": "(138) Az ilyen mechanizmus alkalmazását feltételként kell szabni ahhoz, hogy a felügyeleti hatóság joghatás kiváltására irányuló intézkedése jogszerű legyen azokban az esetekben, amikor a mechanizmus alkalmazása kötelező."
        },
        {
          "EN": "In other cases of cross-border relevance, the cooperation mechanism between the lead supervisory authority and supervisory authorities concerned should be applied and mutual assistance and joint operations might be carried out between the supervisory authorities concerned on a bilateral or multilateral basis without triggering the consistency mechanism.",
          "HU": "Az egyéb határokon átnyúló jelentőségű ügyekben a fő felügyeleti hatóság és az érintett felügyeleti hatóságok közötti együttműködési mechanizmust kell alkalmazni, továbbá az érintett felügyeleti hatóságok anélkül is folytathatnak két- vagy többoldalú kölcsönös segítségnyújtást, illetve közös műveleteket, hogy az egységességi mechanizmust aktiválnák."
        },
        {
          "EN": "(139) In order to promote the consistent application of this Regulation, the Board should be set up as an independent body of the Union.",
          "HU": "(139) E rendelet egységes alkalmazásának elősegítése érdekében független uniós szervként létre kell hozni a Testületet."
        },
        {
          "EN": "To fulfil its objectives, the Board should have legal personality.",
          "HU": "Annak érdekében, hogy céljait teljesítése, a Testület jogi személyiséggel rendelkezik."
        },
        {
          "EN": "The Board should be represented by its Chair.",
          "HU": "A Testületet az elnök képviseli."
        },
        {
          "EN": "It should replace the Working Party on the Protection of Individuals with Regard to the Processing of Personal Data established by Directive 95/46/EC.",
          "HU": "A 95/46/EK irányelvvel létrehozott, a személyesadat-feldolgozás vonatkozásában az egyének védelmével foglalkozó munkacsoport helyébe a Testület lép."
        },
        {
          "EN": "It should consist of the head of a supervisory authority of each Member State and the European Data Protection Supervisor or their respective representatives.",
          "HU": "A Testület minden tagállam egy felügyeleti hatóságának vezetőjéből és az európai adatvédelmi biztosból, vagy ezek képviselőiből áll."
        },
        {
          "EN": "The Commission should participate in the Board's activities without voting rights and the European Data Protection Supervisor should have specific voting rights.",
          "HU": "A Bizottság szavazati jog nélkül, az európai adatvédelmi biztos pedig korlátozott szavazati joggal vesz részt a Testület tevékenységeiben."
        },
        {
          "EN": "The Board should contribute to the consistent application of this Regulation throughout the Union, including by advising the Commission, in particular on the level of protection in third countries or international organisations, and promoting cooperation of the supervisory authorities throughout the Union.",
          "HU": "A Testület az Unió egész területén hozzájárul e rendelet egységes alkalmazásához, ideértve a Bizottság részére történő – különösen a harmadik országokban vagy nemzetközi szervezetek által biztosított védelem szintjével kapcsolatos – tanácsadást és a felügyeleti hatóságok közötti, Unión belüli együttműködés előmozdítását is."
        },
        {
          "EN": "The Board should act independently when performing its tasks.",
          "HU": "A Testület feladatai ellátása során függetlenül jár el."
        },
        {
          "EN": "(140) The Board should be assisted by a secretariat provided by the European Data Protection Supervisor.",
          "HU": "(140) A Testületet az európai adatvédelmi biztos által biztosított titkárság segíti."
        },
        {
          "EN": "The staff of the European Data Protection Supervisor involved in carrying out the tasks conferred on the Board by this Regulation should perform its tasks exclusively under the instructions of, and report to, the Chair of the Board.",
          "HU": "Az európai adatvédelmi biztos mellett dolgozó alkalmazottak, akik az e rendelettel a Testületre ruházott feladatokat végeznek, feladataik elvégzése tekintetében kizárólag a Testület elnökének utasításai alapján járhatnak el, és kizárólag neki tartoznak felelősséggel."
        },
        {
          "EN": "(141) Every data subject should have the right to lodge a complaint with a single supervisory authority, in particular in the Member State of his or her habitual residence, and the right to an effective judicial remedy in accordance with Article 47 of the Charter if the data subject considers that his or her rights under this Regulation are infringed or where the supervisory authority does not act on a complaint, partially or wholly rejects or dismisses a complaint or does not act where such action is necessary to protect the rights of the data subject.",
          "HU": "(141) Minden érintett jogosult arra, hogy panaszt tegyen egy – különösen a szokásos tartózkodási helye szerinti tagállambeli – felügyeleti hatóságnál, és a Charta 47. cikkével összhangban hatékony bírósági jogorvoslattal éljen, ha az úgy ítéli meg, hogy az e rendelet alapján elfogadott rendelkezések értelmében őt megillető jogokat megsértették, vagy ha a felügyeleti hatóság nem jár el valamely panasza alapján, illetve részben vagy egészben elutasítja vagy megalapozatlannak tekinti a panaszát, vagy nem jár el olyan esetben, amikor fellépése az érintett jogainak védelmében szükséges lenne."
        },
        {
          "EN": "The investigation following a complaint should be carried out, subject to judicial review, to the extent that is appropriate in the specific case.",
          "HU": "A panasz benyújtását követően – a konkrét esethez szükséges mértékben – vizsgálatot kell lefolytatni, amely bírósági felülvizsgálat tárgyát képezheti."
        },
        {
          "EN": "The supervisory authority should inform the data subject of the progress and the outcome of the complaint within a reasonable period.",
          "HU": "A felügyeleti hatóság észszerű határidőn belül tájékoztatja az érintettet a panaszhoz fűződő fejleményekről és eredményekről."
        },
        {
          "EN": "If the case requires further investigation or coordination with another supervisory authority, intermediate information should be given to the data subject.",
          "HU": "Ha az ügy további vizsgálatot vagy egy másik felügyeleti hatósággal való együttműködést tesz szükségessé, az érintettet időközben tájékoztatni kell."
        },
        {
          "EN": "In order to facilitate the submission of complaints, each supervisory authority should take measures such as providing a complaint submission form which can also be completed electronically, without excluding other means of communication.",
          "HU": "A panaszok benyújtásának megkönnyítése érdekében mindegyik felügyeleti hatóság intézkedéseket tesz, például olyan panasztételi formanyomtatványt biztosít, amely elektronikus úton is kitölthető, nem zárva ki azonban más kommunikációs eszközök alkalmazását sem."
        },
        {
          "EN": "(142) Where a data subject considers that his or her rights under this Regulation are infringed, he or she should have the right to mandate a not-for-profit body, organisation or association which is constituted in accordance with the law of a Member State, has statutory objectives which are in the public interest and is active in the field of the protection of personal data to lodge a complaint on his or her behalf with a supervisory authority, exercise the right to a judicial remedy on behalf of data subjects or, if provided for in Member State law, exercise the right to receive compensation on behalf of data subjects.",
          "HU": "(142) Ha az érintett úgy ítéli meg, hogy az ezen rendelet értelmében fennálló jogait megsértették, jogában áll megbízni egy, a személyes adatok védelmével foglalkozó, az alapszabályában rögzített közérdekű célokat szolgáló, a tagállami jognak megfelelően létrehozott nonprofit szervet, szervezetet vagy egyesületet, hogy a nevében eljárva panaszt nyújtson be valamely felügyeleti hatóságnál, gyakorolja a bírósági jogorvoslathoz való jogot, illetve gyakorolja a kártérítéshez való jogot, ha ez utóbbit a tagállami jog biztosítja."
        },
        {
          "EN": "A Member State may provide for such a body, organisation or association to have the right to lodge a complaint in that Member State, independently of a data subject's mandate, and the right to an effective judicial remedy where it has reasons to consider that the rights of a data subject have been infringed as a result of the processing of personal data which infringes this Regulation.",
          "HU": "A tagállam rendelkezhet arról, hogy az adott tagállamban ilyen szerv, szervezet vagy egyesület jogosult arra, hogy az érintett megbízásától függetlenül ebben a tagállamban panaszt nyújtson be és hatékony bírósági jogorvoslattal élhessen, ha alapos okkal úgy véli, hogy az érintett jogai sérültek annak következtében, hogy személyes adataik kezelése e rendelet megsértésével történt."
        },
        {
          "EN": "That body, organisation or association may not be allowed to claim compensation on a data subject's behalf independently of the data subject's mandate.",
          "HU": "Ez a szerv, szervezet vagy egyesület nem jogosult, hogy az érintett nevében, annak megbízásától függetlenül kártérítést igényeljen."
        },
        {
          "EN": "(143) Any natural or legal person has the right to bring an action for annulment of decisions of the Board before the Court of Justice under the conditions provided for in Article 263 TFEU.",
          "HU": "(143) Minden természetes vagy jogi személy jogosult, hogy az EUMSZ 263. cikkében meghatározott feltételek szerint eljárást indítson a Bíróságon a Testület döntéseinek megsemmisítése iránt."
        },
        {
          "EN": "As addressees of such decisions, the supervisory authorities concerned which wish to challenge them have to bring action within two months of being notified of them, in accordance with Article 263 TFEU.",
          "HU": "Azok az érintett felügyeleti hatóságok, amelyek e döntések címzettjeiként fellebbezni kívánnak azok ellen, az EUMSZ 263. cikkének megfelelően a döntésről való értesítésüket követő két hónapon belül indítják meg keresetüket."
        },
        {
          "EN": "Where decisions of the Board are of direct and individual concern to a controller, processor or complainant, the latter may bring an action for annulment against those decisions within two months of their publication on the website of the Board, in accordance with Article 263 TFEU.",
          "HU": "Ha a Testület döntései közvetlenül és egyénileg érintenek valamely adatkezelőt, adatfeldolgozót vagy a panaszost, a panaszos az EUMSZ 263. cikkének megfelelően eljárást indíthat az adott döntések megsemmisítése iránt, mégpedig azoknak a Testület honlapján való közzététele dátumától számított két hónapon belül."
        },
        {
          "EN": "Without prejudice to this right under Article 263 TFEU, each natural or legal person should have an effective judicial remedy before the competent national court against a decision of a supervisory authority which produces legal effects concerning that person.",
          "HU": "Az EUMSZ 263. cikkében biztosított e jog sérelme nélkül, minden természetes vagy jogi személy számára biztosítani kell, hogy egy valamely felügyeleti hatóság által hozott és a szóban forgó személyre nézve jogkövetkezményekkel járó döntéssel szemben hatékony bírósági jogorvoslattal élhessen valamely illetékes tagállami bíróságnál."
        },
        {
          "EN": "Such a decision concerns in particular the exercise of investigative, corrective and authorisation powers by the supervisory authority or the dismissal or rejection of complaints.",
          "HU": "Ide tartoznak különösen a felügyeleti hatóság vizsgálati, korrekciós és engedélyezési hatásköreinek gyakorlására, illetve a panaszok megalapozatlannak tekintésére vagy elutasítására vonatkozó döntések."
        },
        {
          "EN": "However, the right to an effective judicial remedy does not encompass measures taken by supervisory authorities which are not legally binding, such as opinions issued by or advice provided by the supervisory authority.",
          "HU": "Mindazonáltal a hatékony bírósági jogorvoslathoz való jog nem vonatkozik a felügyeleti hatóságok által tett, jogilag kötelező erővel nem bíró intézkedéseikre, például a felügyeleti hatóság által kibocsátott véleményekre vagy az általa nyújtott tanácsra."
        },
        {
          "EN": "Proceedings against a supervisory authority should be brought before the courts of the Member State where the supervisory authority is established and should be conducted in accordance with that Member State's procedural law.",
          "HU": "A felügyeleti hatósággal szembeni eljárást a felügyeleti hatóság székhelye szerinti tagállam bírósága előtt kell megindítani, és az eljárást az érintett tagállam eljárásjoga szerint kell lefolytatni."
        },
        {
          "EN": "Those courts should exercise full jurisdiction, which should include jurisdiction to examine all questions of fact and law relevant to the dispute before them.",
          "HU": "Az említett bíróság teljes körű joghatósággal rendelkezik, amely magában foglalja az általa tárgyalt jogvita szempontjából releváns összes ténybeli és jogi kérdés vizsgálata tekintetében fennálló joghatóságot is."
        },
        {
          "EN": "Where a complaint has been rejected or dismissed by a supervisory authority, the complainant may bring proceedings before the courts in the same Member State.",
          "HU": "Ha valamely felügyeleti hatóság elutasított vagy megalapozatlannak talált egy panaszt, a panaszos ugyanazon tagállam bírósága előtt eljárást indíthat."
        },
        {
          "EN": "In the context of judicial remedies relating to the application of this Regulation, national courts which consider a decision on the question necessary to enable them to give judgment, may, or in the case provided for in Article 267 TFEU, must, request the Court of Justice to give a preliminary ruling on the interpretation of Union law, including this Regulation.",
          "HU": "Az e rendelet alkalmazásával kapcsolatos bírósági jogorvoslatok összefüggésében azok a tagállami bíróságok, amelyek úgy ítélik meg, hogy az ítélethozatalhoz az adott kérdéssel kapcsolatos előzetes döntésre van szükség, kérhetik, illetve az EUMSZ 267. cikkében meghatározott esetben kérniük kell a Bíróságot, hogy az e rendeletet is magában foglaló uniós jog értelmezéséről hozzon előzetes döntést."
        },
        {
          "EN": "Furthermore, where a decision of a supervisory authority implementing a decision of the Board is challenged before a national court and the validity of the decision of the Board is at issue, that national court does not have the power to declare the Board's decision invalid but must refer the question of validity to the Court of Justice in accordance with Article 267 TFEU as interpreted by the Court of Justice, where it considers the decision invalid.",
          "HU": "Ezenkívül, ha valamely felügyeleti hatóság a Testület döntését végrehajtó döntésével szemben olyan keresetet indítanak valamelyik tagállami bíróság előtt, amelynek a tárgya a Testület döntésének az érvényessége, a szóban forgó tagállami bíróság nem rendelkezik hatáskörrel arra, hogy érvénytelennek nyilvánítsa a Testület döntését, hanem az érvényesség kérdését a Bíróság elé utalja az EUMSZ Bíróság által értelmezett 267. cikkének megfelelően, amennyiben véleménye szerint a döntés érvénytelen."
        },
        {
          "EN": "However, a national court may not refer a question on the validity of the decision of the Board at the request of a natural or legal person which had the opportunity to bring an action for annulment of that decision, in particular if it was directly and individually concerned by that decision, but had not done so within the period laid down in Article 263 TFEU.",
          "HU": "A tagállami bíróságok azonban nem utalhatnak a Bíróság elé a Testület döntésének az érvényességével kapcsolatos kérdést olyan természetes vagy jogi személy kérelmére, akinek volt lehetősége az adott döntés megsemmisítése iránti keresetet indítani, ám elmulasztotta azt megtenni az EUMSZ 263. cikkében megállapított határidőn belül, különösen, ha a szóban forgó személyt a döntés közvetlenül és egyénileg érinti."
        },
        {
          "EN": "(144) Where a court seized of proceedings against a decision by a supervisory authority has reason to believe that proceedings concerning the same processing, such as the same subject matter as regards processing by the same controller or processor, or the same cause of action, are brought before a competent court in another Member State, it should contact that court in order to confirm the existence of such related proceedings.",
          "HU": "(144) Ha egy olyan bíróság, amely előtt eljárást indítottak valamely felügyeleti hatóság által hozott döntéssel szemben, okkal feltételezheti, hogy ugyanazon adatkezelésre vonatkozóan – például ha ugyanazon adatkezelő vagy adatfeldolgozó adatkezelése esetében megegyezik a tárgy, illetve ha megegyezik a jogalap – már eljárás indult valamely más tagállam illetékes bírósága előtt, annak érdekében, hogy meggyőződjön ezeknek az összefüggő eljárásoknak a létezéséről, ez utóbbi bírósággal felveszi a kapcsolatot."
        },
        {
          "EN": "If related proceedings are pending before a court in another Member State, any court other than the court first seized may stay its proceedings or may, on request of one of the parties, decline jurisdiction in favour of the court first seized if that court has jurisdiction over the proceedings in question and its law permits the consolidation of such related proceedings.",
          "HU": "Ha valamely más tagállam bírósága előtt összefüggő eljárások vannak folyamatban, valamennyi olyan bíróságnak, amely előtt az eljárás később indult meg, felfüggesztheti az eljárását, vagy valamelyik fél megkeresésére a joghatóságának hiányát állapíthatja meg annak a bíróságnak javára, amely előtt elsőként indult meg az eljárás, ha ez utóbbi bíróságnak van joghatósága a szóban forgó eljárások tekintetében és az adott tagállam joga lehetővé teszi az összefüggő eljárások összevonását."
        },
        {
          "EN": "Proceedings are deemed to be related where they are so closely connected that it is expedient to hear and determine them together in order to avoid the risk of irreconcilable judgments resulting from separate proceedings.",
          "HU": "Az eljárások akkor tekintendők összefüggőnek, ha közöttük olyan szoros kapcsolatáll fenn, hogy a külön eljárásokban hozott, egymásnak ellentmondó ítéletek elkerülése érdekében célszerű azokat együttesen tárgyalni és róluk együtt határozatot hozni."
        },
        {
          "EN": "(145) For proceedings against a controller or processor, the plaintiff should have the choice to bring the action before the courts of the Member States where the controller or processor has an establishment or where the data subject resides, unless the controller is a public authority of a Member State acting in the exercise of its public powers.",
          "HU": "(145) Az adatkezelő vagy adatfeldolgozó elleni eljárást illetően a felperes számára lehetővé kell tenni, hogy eldöntse, hogy az eljárást annak a tagállamnak a bírósága előtt indítja-e meg, ahol az adatkezelő vagy adatfeldolgozó tevékenységi hellyel rendelkezik, vagy pedig az érintett tartózkodási helye szerinti tagállam bírósága előtt, kivéve, ha az adatkezelő valamely tagállam közhatalmi jogosítványait gyakorolva eljáró közhatalmi szervének minősül."
        },
        {
          "EN": "(146) The controller or processor should compensate any damage which a person may suffer as a result of processing that infringes this Regulation.",
          "HU": "(146) Az adatkezelő vagy az adatfeldolgozó az e rendeletet sértő adatkezelés miatt okozott kárt köteles megtéríteni."
        },
        {
          "EN": "The controller or processor should be exempt from liability if it proves that it is not in any way responsible for the damage.",
          "HU": "Az adatkezelőt vagy az adatfeldolgozót a kártérítési kötelezettség alól abban az esetben mentesíteni kell, ha bizonyítja, hogy a kár bekövetkeztéért őt semmilyen felelősség nem terheli."
        },
        {
          "EN": "The concept of damage should be broadly interpreted in the light of the case-law of the Court of Justice in a manner which fully reflects the objectives of this Regulation.",
          "HU": "A kár fogalmát a Bíróság ítélkezési gyakorlatának fényében tágan kell értelmezni, mégpedig oly módon, hogy az teljes mértékben tükrözze e rendelet célkitűzéseit."
        },
        {
          "EN": "This is without prejudice to any claims for damage deriving from the violation of other rules in Union or Member State law.",
          "HU": "Ez nem érinti a más uniós vagy tagállami jog megsértéséből eredő károkkal kapcsolatos esetleges kártérítési igényeket."
        },
        {
          "EN": "Processing that infringes this Regulation also includes processing that infringes delegated and implementing acts adopted in accordance with this Regulation and Member State law specifying rules of this Regulation.",
          "HU": "Az e rendeletet sértő adatkezelés magában foglalja az e rendelettel összhangban elfogadott, felhatalmazáson alapuló jogi aktusokat és végrehajtási jogi aktusokat, valamint az e rendeletben foglalt szabályokat pontosító tagállami jogot sértő adatkezelést is."
        },
        {
          "EN": "Data subjects should receive full and effective compensation for the damage they have suffered.",
          "HU": "Az érintetteket az őket ért kárért teljes és tényleges kártérítés illeti meg."
        },
        {
          "EN": "Where controllers or processors are involved in the same processing, each controller or processor should be held liable for the entire damage.",
          "HU": "Ha egy adatkezelésben több adatkezelő, illetve adatfeldolgozó vesz részt, akkor minden egyes adatkezelő vagy adatfeldolgozó egyetemleges felelősséggel tartozik a teljes kárért."
        },
        {
          "EN": "However, where they are joined to the same judicial proceedings, in accordance with Member State law, compensation may be apportioned according to the responsibility of each controller or processor for the damage caused by the processing, provided that full and effective compensation of the data subject who suffered the damage is ensured.",
          "HU": "Ha azonban az érintett adatkezelőket a tagállami jognak megfelelően bevonják ugyanabba az eljárásba, a kártérítési kötelezettség megosztható az egyes adatkezelők, illetve adatfeldolgozók között az általuk okozott kár arányában, feltéve hogy így is biztosított marad, hogy az érintettet ért kárt teljes mértékben és ténylegesen megtérítik."
        },
        {
          "EN": "Any controller or processor which has paid full compensation may subsequently institute recourse proceedings against other controllers or processors involved in the same processing.",
          "HU": "Azok az adatkezelők vagy adatfeldolgozók, akik teljes kártérítést fizettek, ezt követően viszontkereseti eljárást indíthatnak az ugyanazon adatkezelésben részt vevő más adatkezelőkkel vagy adatfeldolgozókkal szemben."
        },
        {
          "EN": "(147) Where specific rules on jurisdiction are contained in this Regulation, in particular as regards proceedings seeking a judicial remedy including compensation, against a controller or processor, general jurisdiction rules such as those of Regulation (EU) No 1215/2012 of the European Parliament and of the Council [13](13) should not prejudice the application of such specific rules.",
          "HU": "(147) Ha e rendelet egyedi szabályokat állapít meg a joghatósággal kapcsolatban, különösen a valamely adatkezelővel vagy adatfeldolgozóval szembeni bírósági jogorvoslat – például kártérítés – céljából indított eljárások tekintetében, az általános joghatósági szabályok – például az 1215/2012/EU európai parlamenti és tanácsi rendeletben [13](13) foglalt szabályoknak – ezen egyedi szabályok alkalmazását nem befolyásolhatják."
        },
        {
          "EN": "(148) In order to strengthen the enforcement of the rules of this Regulation, penalties including administrative fines should be imposed for any infringement of this Regulation, in addition to, or instead of appropriate measures imposed by the supervisory authority pursuant to this Regulation.",
          "HU": "(148) Az e rendelet által előírt szabályok betartatásának erősítése érdekében e rendelet bármely megsértése esetén a felügyeleti hatóság által e rendelet alapján előírt megfelelő intézkedéseken felül vagy azok helyett szankciókat – ideértve a közigazgatási bírságokat is – kell kiszabni."
        },
        {
          "EN": "In a case of a minor infringement or if the fine likely to be imposed would constitute a disproportionate burden to a natural person, a reprimand may be issued instead of a fine.",
          "HU": "E rendelet kisebb megsértése esetén, illetve ha a valószínűsíthetően kiszabásra kerülő bírság egy természetes személy számára aránytalan terhet jelentene, a bírság helyett megrovás is alkalmazható."
        },
        {
          "EN": "Due regard should however be given to the nature, gravity and duration of the infringement, the intentional character of the infringement, actions taken to mitigate the damage suffered, degree of responsibility or any relevant previous infringements, the manner in which the infringement became known to the supervisory authority, compliance with measures ordered against the controller or processor, adherence to a code of conduct and any other aggravating or mitigating factor.",
          "HU": "Kellő figyelmet kell azonban fordítani a jogsértés természetére, súlyosságára, időtartamára, szándékos jellegére és arra, hogy tettek-e intézkedéseket az elszenvedett kár mértékének csökkentésére, továbbá a felelősség mértékére, a korábban e téren elkövetett jogsértésekre, arra, ahogyan a felügyeleti hatóság tudomást szerzett a jogsértésről, valamint arra, hogy az adatkezelő vagy adatfeldolgozó betartja-e a vele szemben elrendelt intézkedéseket és hogy alkalmaz-e valamely magatartási kódexet, valamint minden egyéb súlyosbító vagy enyhítő körülményre."
        },
        {
          "EN": "The imposition of penalties including administrative fines should be subject to appropriate procedural safeguards in accordance with the general principles of Union law and the Charter, including effective judicial protection and due process.",
          "HU": "A szankciók – ideértve a közigazgatási bírságok – kiszabására az uniós jog és a Charta általános elveivel összhangban megfelelő eljárási garanciákat – ideértve hatékony jogvédelmet és a tisztességes eljáráshoz való jogot – kell alkalmazni."
        },
        {
          "EN": "(149) Member States should be able to lay down the rules on criminal penalties for infringements of this Regulation, including for infringements of national rules adopted pursuant to and within the limits of this Regulation.",
          "HU": "(149) A tagállamok megállapíthatják az e rendelet megsértése – így ideértve az e rendelet alapján és általa szabott korlátokon belül elfogadott nemzeti szabályok megsértése – esetén alkalmazandó büntetőjogi szankciókra vonatkozó szabályokat."
        },
        {
          "EN": "Those criminal penalties may also allow for the deprivation of the profits obtained through infringements of this Regulation.",
          "HU": "E büntetőjogi szankciók lehetővé tehetik például az e rendelet megsértése révén szerzett vagyoni előny elvonását."
        },
        {
          "EN": "However, the imposition of criminal penalties for infringements of such national rules and of administrative penalties should not lead to a breach of the principle of ne bis in idem, as interpreted by the Court of Justice.",
          "HU": "Az ilyen tagállami szabályok megsértésére vonatkozó büntetőjogi szankciók, illetve közigazgatási szankciók kiszabása azonban nem eredményezheti a Bíróság értelmezése szerinti ne bis in idem elv megsértését."
        },
        {
          "EN": "(150) In order to strengthen and harmonise administrative penalties for infringements of this Regulation, each supervisory authority should have the power to impose administrative fines.",
          "HU": "(150) Az e rendelet megsértése esetén alkalmazott közigazgatási szankciók szigorítása és harmonizálása érdekében minden felügyeleti hatóság hatáskörrel rendelkezik a közigazgatási bírság kiszabására."
        },
        {
          "EN": "This Regulation should indicate infringements and the upper limit and criteria for setting the related administrative fines, which should be determined by the competent supervisory authority in each individual case, taking into account all relevant circumstances of the specific situation, with due regard in particular to the nature, gravity and duration of the infringement and of its consequences and the measures taken to ensure compliance with the obligations under this Regulation and to prevent or mitigate the consequences of the infringement.",
          "HU": "E rendeletben kell meghatározni a jogsértéseket, valamint a kapcsolódó közigazgatási bírságok összegének felső határát és azok megállapításának szempontjait; a közigazgatási bírságot az egyes esetekben az illetékes felügyeleti hatóság állapítja meg a konkrét helyzet valamennyi releváns körülményét figyelembe véve, és kellő figyelmet fordítva különösen a jogsértés természetére, súlyosságára és időtartamára, továbbá a jogsértés következményeire, valamint az e rendelet szerinti kötelezettségek teljesítésének biztosítása és a jogsértés következményeinek megelőzése vagy enyhítése érdekében tett intézkedésekre."
        },
        {
          "EN": "Where administrative fines are imposed on an undertaking, an undertaking should be understood to be an undertaking in accordance with Articles 101 and 102 TFEU for those purposes.",
          "HU": "Ha a közigazgatási bírságokat vállalkozásokra szabják ki, akkor a vállalkozás fogalmát e célból az EUMSZ 101. és 102. cikkében meghatározott vállalkozásokra vonatkozó szabályoknak megfelelően kell értelmezni."
        },
        {
          "EN": "Where administrative fines are imposed on persons that are not an undertaking, the supervisory authority should take account of the general level of income in the Member State as well as the economic situation of the person in considering the appropriate amount of the fine.",
          "HU": "Ha a közigazgatási bírságokat vállalkozásoktól eltérő személyekre szabják ki, a felügyeleti hatóság a bírság megfelelő összegének meghatározása során figyelembe veszi a jövedelmek általános szintjét az adott tagállamban, valamint az adott személy gazdasági helyzetét."
        },
        {
          "EN": "The consistency mechanism may also be used to promote a consistent application of administrative fines.",
          "HU": "Az egységességi mechanizmus a közigazgatási bírságok összehangolt alkalmazásának előmozdítására is felhasználható."
        },
        {
          "EN": "It should be for the Member States to determine whether and to which extent public authorities should be subject to administrative fines.",
          "HU": "A tagállamokra kell bízni annak eldöntését, hogy a közhatalmi szervekkel szemben alkalmazható legyen-e közigazgatási bírság, és ha igen, milyen mértékben."
        },
        {
          "EN": "Imposing an administrative fine or giving a warning does not affect the application of other powers of the supervisory authorities or of other penalties under this Regulation.",
          "HU": "A közigazgatási bírság kiszabása vagy a megrovás nem érinti a felügyeleti hatóságok egyéb hatásköreinek vagy az e rendelet szerinti egyéb szankcióknak az alkalmazását."
        },
        {
          "EN": "(151) The legal systems of Denmark and Estonia do not allow for administrative fines as set out in this Regulation.",
          "HU": "(151) Dánia és Észtország jogrendszere nem teszi lehetővé az e rendeletben meghatározott közigazgatási bírságok kiszabását."
        },
        {
          "EN": "The rules on administrative fines may be applied in such a manner that in Denmark the fine is imposed by competent national courts as a criminal penalty and in Estonia the fine is imposed by the supervisory authority in the framework of a misdemeanour procedure, provided that such an application of the rules in those Member States has an equivalent effect to administrative fines imposed by supervisory authorities.",
          "HU": "A közigazgatási bírságokra vonatkozó szabályok Dániában oly módon alkalmazhatók, hogy a bírságot az illetékes nemzeti bíróságok büntetőjogi szankcióként róják ki, Észtországban pedig a felügyeleti hatóság rója ki a bírságot fegyelmi eljárás keretében, feltéve hogy a szabályok ilyen fajta alkalmazása ezekben a tagállamokban a felügyeleti hatóságok által kiszabott közigazgatási bírságokkal azonos joghatással járnak."
        },
        {
          "EN": "Therefore the competent national courts should take into account the recommendation by the supervisory authority initiating the fine.",
          "HU": "Ezért az illetékes nemzeti bíróságok figyelembe veszik a bírság kiszabását kezdeményező felügyeleti hatóság ajánlását."
        },
        {
          "EN": "In any event, the fines imposed should be effective, proportionate and dissuasive.",
          "HU": "A kiszabott bírságoknak minden esetben hatékonynak, arányosnak és visszatartó erejűnek kell lenniük."
        },
        {
          "EN": "(152) Where this Regulation does not harmonise administrative penalties or where necessary in other cases, for example in cases of serious infringements of this Regulation, Member States should implement a system which provides for effective, proportionate and dissuasive penalties.",
          "HU": "(152) Ha e rendelet nem harmonizálja a közigazgatási szankciókat, vagy ha egyéb esetekben ez szükséges – például e rendelet súlyos megsértése esetén –, a tagállamok hatékony, arányos és visszatartó erejű szankciókat előíró rendszert vezetnek be."
        },
        {
          "EN": "The nature of such penalties, criminal or administrative, should be determined by Member State law.",
          "HU": "E szankciók büntetőjogi vagy közigazgatási jellegét a tagállami jog határozza meg."
        },
        {
          "EN": "(153) Member States law should reconcile the rules governing freedom of expression and information, including journalistic, academic, artistic and or literary expression with the right to the protection of personal data pursuant to this Regulation.",
          "HU": "(153) A tagállamok jogának össze kell egyeztetnie a véleménynyilvánítás és a tájékozódás – ideértve az újságírói, a tudományos, a művészi, illetve az irodalmi kifejezés – szabadságára vonatkozó szabályokat a személyes adatok védelmére vonatkozó, e rendelet szerinti joggal."
        },
        {
          "EN": "The processing of personal data solely for journalistic purposes, or for the purposes of academic, artistic or literary expression should be subject to derogations or exemptions from certain provisions of this Regulation if necessary to reconcile the right to the protection of personal data with the right to freedom of expression and information, as enshrined in Article 11 of the Charter.",
          "HU": "Helyénvaló, hogy a kizárólag a személyes adatoknak az újságírás, a tudományos, a művészi vagy az irodalmi kifejezés céljából végzett kezelése eltérés tárgyát képezze vagy mentesüljön az e rendelet egyes rendelkezéseiben szereplő követelmények alól, ha ez ahhoz szükséges, hogy a személyes adatok védelméhez való jogot a véleménynyilvánítás szabadságához és tájékozódáshoz való joggal összeegyeztessék, amelyet a Charta 11. cikke biztosít."
        },
        {
          "EN": "This should apply in particular to the processing of personal data in the audiovisual field and in news archives and press libraries.",
          "HU": "Ez alkalmazandó különösen a személyes adatok audiovizuális területen, valamint a hírarchívumokban és sajtókönyvtárakban történő kezelésére."
        },
        {
          "EN": "Therefore, Member States should adopt legislative measures which lay down the exemptions and derogations necessary for the purpose of balancing those fundamental rights.",
          "HU": "Következésképpen a tagállamok jogalkotási intézkedések elfogadásával határozzák meg az ezen alapvető jogok közötti egyensúly érdekében a szükséges kivételeket és eltéréseket."
        },
        {
          "EN": "Member States should adopt such exemptions and derogations on general principles, the rights of the data subject, the controller and the processor, the transfer of personal data to third countries or international organisations, the independent supervisory authorities, cooperation and consistency, and specific data-processing situations.",
          "HU": "A tagállamok kivételeket és eltéréseket fogadnak el az általános elvek, az érintett jogai, az adatkezelő és adatfeldolgozó, a személyes adatoknak harmadik országokba vagy nemzetközi szervezetek részére történő továbbítása, a független felügyeleti hatóságok, az együttműködés és az egységes alkalmazás, illetve az egyedi adatkezelési helyzetek tekintetében."
        },
        {
          "EN": "Where such exemptions or derogations differ from one Member State to another, the law of the Member State to which the controller is subject should apply.",
          "HU": "Ha ezek a kivételek vagy eltérések a tagállamok között különböznek, az adatkezelőre alkalmazandó tagállami jogot kell alkalmazni."
        },
        {
          "EN": "In order to take account of the importance of the right to freedom of expression in every democratic society, it is necessary to interpret notions relating to that freedom, such as journalism, broadly.",
          "HU": "A véleménynyilvánítás szabadságához való jog minden demokratikus társadalomban fennálló jelentőségének figyelembevétele érdekében az e szabadsághoz tartozó olyan fogalmakat, mint az újságírás, tágan kell értelmezni."
        },
        {
          "EN": "(154) This Regulation allows the principle of public access to official documents to be taken into account when applying this Regulation.",
          "HU": "(154) E rendelet lehetővé teszi a hivatalos iratokhoz való nyilvános hozzáférés elvének figyelembevételét e rendelet alkalmazása során."
        },
        {
          "EN": "Public access to official documents may be considered to be in the public interest.",
          "HU": "A hivatalos iratokhoz való nyilvános hozzáférés közérdeknek tekinthető."
        },
        {
          "EN": "Personal data in documents held by a public authority or a public body should be able to be publicly disclosed by that authority or body if the disclosure is provided for by Union or Member State law to which the public authority or public body is subject.",
          "HU": "Lehetővé kell tenni, hogy a közhatalmi szervek vagy egyéb, közfeladatot ellátó szervek birtokában lévő dokumentumokban szereplő személyes adatokat az érintett hatóság vagy szerv nyilvánosságra hozza, ha a nyilvánosságra hozatalt az uniós jog vagy annak a tagállamnak a joga, amelynek az adott közhatalmi szerv vagy egyéb, közfeladatot ellátó szerv a hatálya alá tartozik, előírja."
        },
        {
          "EN": "Such laws should reconcile public access to official documents and the reuse of public sector information with the right to the protection of personal data and may therefore provide for the necessary reconciliation with the right to the protection of personal data pursuant to this Regulation.",
          "HU": "Ezeknek a jogoknak össze kell egyeztetniük a hivatalos dokumentumokhoz való nyilvános hozzáférést és a közszféra információinak további felhasználását a személyes adatok védelméhez való joggal, és ennélfogva rendelkezhetnek a személyes adatok védelméhez való, e rendelet szerinti joggal történő szükséges összeegyeztetésről."
        },
        {
          "EN": "The reference to public authorities and bodies should in that context include all authorities or other bodies covered by Member State law on public access to documents.",
          "HU": "A közhatalmi szervek és egyéb, közfeladatot ellátó szervek szervekre való hivatkozásba ebben az összefüggésben mindazon hatóságokat vagy egyéb olyan szerveket is bele kell érteni, amelyekre vonatkozik a dokumentumokhoz való nyilvános hozzáférést szabályozó tagállami jog."
        },
        {
          "EN": "Directive 2003/98/EC of the European Parliament and of the Council [14](14) leaves intact and in no way affects the level of protection of natural persons with regard to the processing of personal data under the provisions of Union and Member State law, and in particular does not alter the obligations and rights set out in this Regulation.",
          "HU": "A 2003/98/EK európai parlamenti és tanácsi irányelv [14](14) nem módosítja és nem érinti a természetes személyeknek a személyes adatok kezelése tekintetében történő, az uniós és a tagállami jogba foglalt rendelkezések védelmi szintjét, és különösen nem módosítja az ebben e rendeletben foglalt kötelezettségeket és jogokat."
        },
        {
          "EN": "In particular, that Directive should not apply to documents to which access is excluded or restricted by virtue of the access regimes on the grounds of protection of personal data, and parts of documents accessible by virtue of those regimes which contain personal data the re-use of which has been provided for by law as being incompatible with the law concerning the protection of natural persons with regard to the processing of personal data.",
          "HU": "Különösen, az említett irányelvet nem kell alkalmazni olyan dokumentumokra, amelyekhez a hozzáférést a hozzáférési szabályok a személyes adatok védelmének indokával korlátozzák vagy kizárják, valamint az említett szabályok értelmében hozzáférhető dokumentumok azon részeire, amelyek olyan személyes adatokat tartalmaznak, amelyek további felhasználása jogszabályi definíció szerint összeegyeztethetetlen a természetes személyeknek a személyes adatok kezelése tekintetében történő védelmére vonatkozó jogszabályokkal."
        },
        {
          "EN": "(155) Member State law or collective agreements, including ‘works agreements’, may provide for specific rules on the processing of employees' personal data in the employment context, in particular for the conditions under which personal data in the employment context may be processed on the basis of the consent of the employee, the purposes of the recruitment, the performance of the contract of employment, including discharge of obligations laid down by law or by collective agreements, management, planning and organisation of work, equality and diversity in the workplace, health and safety at work, and for the purposes of the exercise and enjoyment, on an individual or collective basis, of rights and benefits related to employment, and for the purpose of the termination of the employment relationship.",
          "HU": "(155) A tagállami jog vagy kollektív szerződések – ideértve az üzemi megállapodásokat is – előírhatnak olyan konkrét szabályokat, amelyek a munkavállalók személyes adatainak a foglalkoztatással összefüggő kezelését szabályozzák, különösen azokat a feltételeket, amelyek mellett a munkavállalók személyes adatainak a foglalkoztatással összefüggő kezelésére – a munkavállaló hozzájárulása alapján, a munkaerő-felvétel és a munkaszerződés teljesítése céljából – kerülhet sor, ideértve a jogszabályban vagy kollektív szerződésben meghatározott kötelezettségek teljesítését, a munka irányítását, tervezését és szervezését, a munkahelyi egyenlőséget és sokszínűséget, a munkahelyi egészségvédelmet és biztonságot, továbbá a foglalkoztatáshoz kapcsolódó jogok és juttatások egyéni vagy kollektív gyakorlását és érvényesülését, valamint a munkaviszony megszüntetése céljából történő adatkezelést."
        },
        {
          "EN": "(156) The processing of personal data for archiving purposes in the public interest, scientific or historical research purposes or statistical purposes should be subject to appropriate safeguards for the rights and freedoms of the data subject pursuant to this Regulation.",
          "HU": "(156) E rendelet alapján a személyes adatok közérdekű archiválás céljából, tudományos és történelmi kutatási célból vagy statisztikai célból történő kezelésére az érintettek jogai és szabadságai tekintetében megfelelő garanciák vonatkoznak."
        },
        {
          "EN": "Those safeguards should ensure that technical and organisational measures are in place in order to ensure, in particular, the principle of data minimisation.",
          "HU": "Ez említett garanciák biztosítják, hogy technikai és szervezési intézkedéseket hoztak különösen annak érdekében, hogy az adattakarékosság elve érvényesüljön."
        },
        {
          "EN": "The further processing of personal data for archiving purposes in the public interest, scientific or historical research purposes or statistical purposes is to be carried out when the controller has assessed the feasibility to fulfil those purposes by processing data which do not permit or no longer permit the identification of data subjects, provided that appropriate safeguards exist (such as, for instance, pseudonymisation of the data).",
          "HU": "A személyes adatok közérdekű archiválás céljából, tudományos és történelmi kutatási célból vagy statisztikai célból történő további kezelésére akkor kerülhet sor, ha az adatkezelő előzetesen felmérte, hogy ezek a célok megvalósíthatók olyan személyes adatok kezelésével, amelyek eleve nem vagy a továbbiakban már nem teszik lehetővé az érintettek azonosítását, feltéve hogy megfelelő garanciák állnak rendelkezésre (mint például a személyes adatok álnevesítése)."
        },
        {
          "EN": "Member States should provide for appropriate safeguards for the processing of personal data for archiving purposes in the public interest, scientific or historical research purposes or statistical purposes.",
          "HU": "A tagállamok megfelelő garanciákról kell rendelkezniük a személyes adatok közérdekű archiválás céljából, tudományos és történelmi kutatási célból vagy statisztikai célból történő kezelése tekintetében."
        },
        {
          "EN": "Member States should be authorised to provide, under specific conditions and subject to appropriate safeguards for data subjects, specifications and derogations with regard to the information requirements and rights to rectification, to erasure, to be forgotten, to restriction of processing, to data portability, and to object when processing personal data for archiving purposes in the public interest, scientific or historical research purposes or statistical purposes.",
          "HU": "A tagállamok számára engedélyezni kell, hogy konkrét feltételekkel és az érintettek számára nyújtott megfelelő garanciák mellett pontosításokat és eltéréseket alkalmazzanak a tájékoztatási követelményekre, a helyesbítéshez való jogra, a törléshez való jogra, az elfeledtetéshez való jogra, az adatkezelés korlátozásához való jogra, valamint az adathordozhatósághoz való jogra, továbbá a közérdekű archiválás céljából, tudományos és történelmi kutatási célból vagy statisztikai célból történő adatkezeléssel összefüggő tiltakozáshoz való jogra vonatkozóan."
        },
        {
          "EN": "The conditions and safeguards in question may entail specific procedures for data subjects to exercise those rights if this is appropriate in the light of the purposes sought by the specific processing along with technical and organisational measures aimed at minimising the processing of personal data in pursuance of the proportionality and necessity principles.",
          "HU": "A szóban forgó feltételek és garanciák eredményezhetnek egyrészt az említett jogoknak az érintettek általi érvényesítését szolgáló eljárásokat – ha ez megfelelő az adott adatkezelés céljainak fényében –, másrészt az arányosság és a szükségesség elveinek érvényesítése érdekében a személyes adatok kezelésének minimálisra korlátozását célzó technikai és szervezési intézkedéseket."
        },
        {
          "EN": "The processing of personal data for scientific purposes should also comply with other relevant legislation such as on clinical trials.",
          "HU": "A személyes adatok tudományos célú kezelésének meg kell felelnie az egyéb, például a klinikai vizsgálatokat szabályozó jogszabályoknak is."
        },
        {
          "EN": "(157) By coupling information from registries, researchers can obtain new knowledge of great value with regard to widespread medical conditions such as cardiovascular disease, cancer and depression.",
          "HU": "(157) A nyilvántartásokból nyert információk összevetésével a kutatók jelentős értékű új tudásra tehetnek szert többek között a széles körben elterjedt betegségekkel – például a szív- és érrendszeri betegségekkel, a rákkal, és a depresszióval – kapcsolatban."
        },
        {
          "EN": "On the basis of registries, research results can be enhanced, as they draw on a larger population.",
          "HU": "A kutatási eredményeket a nyilvántartások segítségével javítani lehet, mivel az adatok a lakosság szélesebb körétől származnak."
        },
        {
          "EN": "Within social science, research on the basis of registries enables researchers to obtain essential knowledge about the long-term correlation of a number of social conditions such as unemployment and education with other life conditions.",
          "HU": "A társadalomtudományokban a nyilvántartások alapján végzett kutatásokkal a kutatók lényeges ismeretekre tehetnek szert több társadalmi körülmény – mint például a munkanélküliség és az iskolai végzettség – egyéb életkörülményekkel való hosszú távú összefüggéséről."
        },
        {
          "EN": "Research results obtained through registries provide solid, high-quality knowledge which can provide the basis for the formulation and implementation of knowledge-based policy, improve the quality of life for a number of people and improve the efficiency of social services.",
          "HU": "A nyilvántartások alapján elért kutatási eredmények szilárd, színvonalas tudást nyújtanak, mely alapul szolgálhat a tudásalapú szakpolitikák kidolgozásához és végrehajtásához, javíthatja számos ember életminőségét, valamint fokozhatja a szociális szolgálatok hatékonyságát."
        },
        {
          "EN": "In order to facilitate scientific research, personal data can be processed for scientific research purposes, subject to appropriate conditions and safeguards set out in Union or Member State law.",
          "HU": "A tudományos kutatás megkönnyítése érdekében a személyes adatok az uniós vagy a tagállami jogban meghatározott megfelelő feltételek és garanciák mellett tudományos kutatási célból kezelhetők."
        },
        {
          "EN": "(158) Where personal data are processed for archiving purposes, this Regulation should also apply to that processing, bearing in mind that this Regulation should not apply to deceased persons.",
          "HU": "(158) E rendeletet az archiválási célokat szolgáló személyes adatok kezelésekor is alkalmazni kell, szem előtt tartva, hogy e rendelet nem alkalmazható elhunyt személyek személyes adataira."
        },
        {
          "EN": "Public authorities or public or private bodies that hold records of public interest should be services which, pursuant to Union or Member State law, have a legal obligation to acquire, preserve, appraise, arrange, describe, communicate, promote, disseminate and provide access to records of enduring value for general public interest.",
          "HU": "A közérdekű adatokat tároló közhatalmi szervek vagy egyéb, közfeladatot ellátó szervek vagy magánfél szervezetek olyan szolgálatok kell, hogy legyenek, amelyek uniós vagy a tagállami jog szerint kötelesek az általános közérdek szempontjából tartós értéket képviselő adatokat beszerezni, megőrizni, értékelni, rendezni, leírni, közölni, előmozdítani, terjeszteni, illetve azokhoz hozzáférést biztosítani."
        },
        {
          "EN": "Member States should also be authorised to provide for the further processing of personal data for archiving purposes, for example with a view to providing specific information related to the political behaviour under former totalitarian state regimes, genocide, crimes against humanity, in particular the Holocaust, or war crimes.",
          "HU": "A tagállamok számára továbbá lehetővé kell tenni, hogy rendelkezzenek a személyes adatok archiválási célokat szolgáló további kezeléséről, például a volt totalitárius államrendszerek alatt tanúsított politikai magatartáshoz, népirtáshoz, az emberiesség elleni bűncselekményekhez, különösen a holokauszthoz és a háborús bűncselekményekhez kapcsolódó konkrét információk szolgáltatása érdekében."
        },
        {
          "EN": "(159) Where personal data are processed for scientific research purposes, this Regulation should also apply to that processing.",
          "HU": "(159) E rendeletet a személyes adatok tudományos kutatási célú kezelése esetében is alkalmazni kell."
        },
        {
          "EN": "For the purposes of this Regulation, the processing of personal data for scientific research purposes should be interpreted in a broad manner including for example technological development and demonstration, fundamental research, applied research and privately funded research.",
          "HU": "E rendelet alkalmazásában a személyes adatok tudományos kutatási célú kezelését tág körűen kell értelmezni, oly módon, hogy az magában foglalja többek között a technológiafejlesztési és demonstrációs tevékenységeket, az alapkutatást, az alkalmazott kutatást, és a magánfinanszírozású kutatást."
        },
        {
          "EN": "In addition, it should take into account the Union's objective under Article 179(1) TFEU of achieving a European Research Area.",
          "HU": "Emellett az ilyen célú adatkezelés összefüggésében figyelembe kell venni az EUMSZ 179. cikkének (1) bekezdésében foglalt, az európai kutatási térség létrehozására irányuló célkitűzést."
        },
        {
          "EN": "Scientific research purposes should also include studies conducted in the public interest in the area of public health.",
          "HU": "A tudományos kutatási célok közé kell sorolni a népegészségügy terén folytatott közérdekű kutatásokat is."
        },
        {
          "EN": "To meet the specificities of processing personal data for scientific research purposes, specific conditions should apply in particular as regards the publication or otherwise disclosure of personal data in the context of scientific research purposes.",
          "HU": "Ahhoz, hogy az adatkezelés megfeleljen a személyes adatok tudományos kutatási célú kezelésére vonatkozó jellemzőknek, speciális feltételeknek kell eleget tenni különösen a személyes adatok tudományos kutatási célok keretében történő közzétételére vagy egyéb nyilvánosságra hozatalát illetően."
        },
        {
          "EN": "If the result of scientific research in particular in the health context gives reason for further measures in the interest of the data subject, the general rules of this Regulation should apply in view of those measures.",
          "HU": "Ha a – különösen az egészségügyi témakörben végzett – tudományos kutatás eredménye miatt az érintett érdekében további intézkedések válnak indokolttá, ezen intézkedések tekintetében az e rendeletben foglalt általános szabályokat kell alkalmazni."
        },
        {
          "EN": "(160) Where personal data are processed for historical research purposes, this Regulation should also apply to that processing.",
          "HU": "(160) E rendeletet a történelmi kutatási célokból kezelt személyes adatok esetében is alkalmazni kell."
        },
        {
          "EN": "This should also include historical research and research for genealogical purposes, bearing in mind that this Regulation should not apply to deceased persons.",
          "HU": "Ide kell sorolni a történelmi kutatásokat és a genealógiai célú kutatást is, szem előtt tartva, hogy e rendelet elhunyt személyre nem alkalmazandó."
        },
        {
          "EN": "(161) For the purpose of consenting to the participation in scientific research activities in clinical trials, the relevant provisions of Regulation (EU) No 536/2014 of the European Parliament and of the Council [15](15) should apply.",
          "HU": "(161) A klinikai vizsgálatok során végzett tudományos kutatásban való részvételhez történő hozzájárulás tekintetében az 536/2014/EU európai parlamenti és tanácsi rendelet [15](15) releváns rendelkezéseit kell alkalmazni."
        },
        {
          "EN": "(162) Where personal data are processed for statistical purposes, this Regulation should apply to that processing.",
          "HU": "(162) E rendeletet a személyes adatok statisztikai célú kezelése esetében is alkalmazni kell."
        },
        {
          "EN": "Union or Member State law should, within the limits of this Regulation, determine statistical content, control of access, specifications for the processing of personal data for statistical purposes and appropriate measures to safeguard the rights and freedoms of the data subject and for ensuring statistical confidentiality.",
          "HU": "E rendelet jelentette korlátokon belül az uniós vagy a tagállami jog határozza meg a statisztikai tartalmat, a hozzáférés ellenőrzését, a személyes adatok statisztikai célú kezelésének szempontjait, az érintettek jogainak és szabadságainak védelmét és a statisztikai adatok bizalmas jellegének garantálását szolgáló megfelelő intézkedéseket."
        },
        {
          "EN": "Statistical purposes mean any operation of collection and the processing of personal data necessary for statistical surveys or for the production of statistical results.",
          "HU": "Statisztikai célúnak minősül a személyes adatok statisztikai felmérések vagy statisztikai eredmények kiszámításának céljából történő gyűjtése és kezelése."
        },
        {
          "EN": "Those statistical results may further be used for different purposes, including a scientific research purpose.",
          "HU": "Ezeket a statisztikai eredményeket a későbbiekben többféle célra is fel lehet használni, többek között tudományos kutatás céljára is."
        },
        {
          "EN": "The statistical purpose implies that the result of processing for statistical purposes is not personal data, but aggregate data, and that this result or the personal data are not used in support of measures or decisions regarding any particular natural person.",
          "HU": "A statisztikai célból következik, hogy a statisztikai célú adatkezelés eredménye nem személyes adat, hanem összesített adat, és hogy ezt az eredményt vagy a személyes adatokat nem használják fel konkrét természetes személyekre vonatkozó intézkedések vagy döntések alátámasztására."
        },
        {
          "EN": "(163) The confidential information which the Union and national statistical authorities collect for the production of official European and official national statistics should be protected.",
          "HU": "(163) Az uniós és a nemzeti statisztikai hatóságok által a hivatalos uniós és a hivatalos nemzeti statisztikák készítéséhez gyűjtött bizalmas adatokat védeni kell."
        },
        {
          "EN": "European statistics should be developed, produced and disseminated in accordance with the statistical principles as set out in Article 338(2) TFEU, while national statistics should also comply with Member State law.",
          "HU": "Az uniós statisztikákat az EUMSZ 338. cikkének (2) bekezdésében foglalt statisztikai elveknek megfelelően kell kidolgozni, elkészíteni és terjeszteni, ugyanakkor a nemzeti statisztikák a tagállami jognak is meg kell, hogy feleljenek."
        },
        {
          "EN": "Regulation (EC) No 223/2009 of the European Parliament and of the Council [16](16) provides further specifications on statistical confidentiality for European statistics.",
          "HU": "A 223/2009/EK európai parlamenti és tanácsi rendelet [16](16) további konkrét rendelkezéseket határoz meg az uniós statisztikákra vonatkozó titoktartási kötelezettségekről."
        },
        {
          "EN": "(164) As regards the powers of the supervisory authorities to obtain from the controller or processor access to personal data and access to their premises, Member States may adopt by law, within the limits of this Regulation, specific rules in order to safeguard the professional or other equivalent secrecy obligations, in so far as necessary to reconcile the right to the protection of personal data with an obligation of professional secrecy.",
          "HU": "(164) A felügyeleti hatóságok azon jogköre tekintetében, hogy az adatkezelőtől vagy adatfeldolgozótól hozzáférést kapjanak a személyes adatokhoz, illetve belépési engedélyt kapjanak annak helyiségeibe, a tagállamok e rendelet keretein belül jogszabályban különös rendelkezéseket hozhatnak annak érdekében, hogy a szakmai vagy más, azzal egyenértékű titoktartási kötelezettségeket biztosítsák, ha a személyes adatok védelméhez való jogot a szakmai titoktartásra vonatkozó kötelezettséggel kell összeegyeztetni."
        },
        {
          "EN": "This is without prejudice to existing Member State obligations to adopt rules on professional secrecy where required by Union law.",
          "HU": "Ez nem érinti a tagállamok azon meglévő kötelezettségét, hogy szakmai titoktartási rendelkezéseket fogadjanak el, ha az uniós jog ezt megköveteli."
        },
        {
          "EN": "(165) This Regulation respects and does not prejudice the status under existing constitutional law of churches and religious associations or communities in the Member States, as recognised in Article 17 TFEU.",
          "HU": "(165) E rendelet az EUMSZ 17. cikke értelmében tiszteletben tartja és nem sérti az egyházak és vallási szervezetek vagy közösségek hatályos alkotmányos jog szerinti jogállását a tagállamokban."
        },
        {
          "EN": "(166) In order to fulfil the objectives of this Regulation, namely to protect the fundamental rights and freedoms of natural persons and in particular their right to the protection of personal data and to ensure the free movement of personal data within the Union, the power to adopt acts in accordance with Article 290 TFEU should be delegated to the Commission.",
          "HU": "(166) E rendelet célkitűzéseinek megvalósítása, vagyis a természetes személyek alapvető jogainak és szabadságainak – különösen a személyes adatok védelméhez való joguk – védelme, valamint a személyes adatok Unión belüli szabad áramlásának biztosítása érdekében a Bizottságot fel kell hatalmazni arra, hogy az EUMSZ 290. cikkének megfelelően jogi aktusokat fogadjon el."
        },
        {
          "EN": "In particular, delegated acts should be adopted in respect of criteria and requirements for certification mechanisms, information to be presented by standardised icons and procedures for providing such icons.",
          "HU": "Felhatalmazáson alapuló jogi aktusokat kell elfogadni különösen a tanúsítási mechanizmusok szempontjai és követelményei, a szabványosított ikonokkal megjelenítendő információk és az ilyen ikonok meghatározására szolgáló eljárások tekintetében."
        },
        {
          "EN": "It is of particular importance that the Commission carry out appropriate consultations during its preparatory work, including at expert level.",
          "HU": "Különösen fontos, hogy a Bizottság az előkészítő munkája során megfelelő konzultációkat folytasson, többek között szakértői szinten is."
        },
        {
          "EN": "The Commission, when preparing and drawing-up delegated acts, should ensure a simultaneous, timely and appropriate transmission of relevant documents to the European Parliament and to the Council.",
          "HU": "A felhatalmazáson alapuló jogi aktusok előkészítésekor és megszövegezésekor a Bizottság gondoskodik arról, hogy kellő időben, és a tagállami szakértőknek való megküldéssel egyidejűleg megküldje az összes dokumentumot, így a jogi aktusok tervezetét is az Európai Parlament és a Tanács részére."
        },
        {
          "EN": "(167) In order to ensure uniform conditions for the implementation of this Regulation, implementing powers should be conferred on the Commission when provided for by this Regulation.",
          "HU": "(167) E rendelet végrehajtása egységes feltételeinek biztosítása érdekében a Bizottságra végrehajtási hatásköröket kell ruházni, ha e rendelet úgy rendelkezik."
        },
        {
          "EN": "Those powers should be exercised in accordance with Regulation (EU) No 182/2011.",
          "HU": "Ezeket a végrehajtási hatásköröket a 182/2011/EU rendeletnek megfelelően kell gyakorolni."
        },
        {
          "EN": "In that context, the Commission should consider specific measures for micro, small and medium-sized enterprises.",
          "HU": "Ezzel összefüggésben a Bizottságnak mérlegelnie kell különös intézkedések alkalmazását a mikro-, kis- és középvállalkozások tekintetében."
        },
        {
          "EN": "(168) The examination procedure should be used for the adoption of implementing acts on standard contractual clauses between controllers and processors and between processors; codes of conduct; technical standards and mechanisms for certification; the adequate level of protection afforded by a third country, a territory or a specified sector within that third country, or an international organisation; standard protection clauses; formats and procedures for the exchange of information by electronic means between controllers, processors and supervisory authorities for binding corporate rules; mutual assistance; and arrangements for the exchange of information by electronic means between supervisory authorities, and between supervisory authorities and the Board.",
          "HU": "(168) Vizsgálóbizottsági eljárást kell alkalmazni az adatkezelők és adatfeldolgozók közötti, illetve az adatfeldolgozók közötti általános szerződési feltételekre; a magatartási kódexekre; a tanúsítás technikai standardjaira és mechanizmusaira; a harmadik ország, a harmadik ország valamely területe vagy meghatározott ágazata, illetve valamely nemzetközi szervezet által biztosított megfelelő védelmi szintre; az általános adatvédelmi kikötések elfogadására; az adatkezelők, az adatfeldolgozók és a felügyeleti hatóságok között, a kötelező erejű vállalati szabályokra vonatkozóan folytatott elektronikus információcsere formájára és eljárásaira; a kölcsönös segítségnyújtásra; a felügyeleti hatóságok közötti, illetve a felügyeleti hatóságok és a Testület közötti elektronikus információcserére vonatkozó szabályokkal kapcsolatos végrehajtási jogi aktusok elfogadására."
        },
        {
          "EN": "(169) The Commission should adopt immediately applicable implementing acts where available evidence reveals that a third country, a territory or a specified sector within that third country, or an international organisation does not ensure an adequate level of protection, and imperative grounds of urgency so require.",
          "HU": "(169) A Bizottságnak azonnal alkalmazandó végrehajtási jogi aktusokat kell elfogadnia azokban a kellően indokolt, rendkívül sürgős esetekben, ha a rendelkezésre álló bizonyítékokból az derül ki, hogy a harmadik ország, a harmadik ország valamely területe vagy meghatározott ágazata, illetve valamely nemzetközi szervezet már nem biztosít megfelelő védelmi szintet."
        },
        {
          "EN": "(170) Since the objective of this Regulation, namely to ensure an equivalent level of protection of natural persons and the free flow of personal data throughout the Union, cannot be sufficiently achieved by the Member States and can rather, by reason of the scale or effects of the action, be better achieved at Union level, the Union may adopt measures, in accordance with the principle of subsidiarity as set out in Article 5 of the Treaty on European Union (TEU).",
          "HU": "(170) Mivel e rendelet célját, nevezetesen a természetes személyek azonos szintű védelmét, valamint a személyes adatok Unión belüli szabad áramlását a tagállamok nem tudják kielégítően megvalósítani, az Unió szintjén azonban az intézkedés terjedelme vagy hatásainak meghatározása miatt e célok jobban megvalósíthatók, az Unió intézkedéseket hozhat az Európai Unióról szóló szerződés (EUSZ) 5. cikkében foglalt szubszidiaritás elvének megfelelően."
        },
        {
          "EN": "In accordance with the principle of proportionality as set out in that Article, this Regulation does not go beyond what is necessary in order to achieve that objective.",
          "HU": "Az említett cikkben foglalt arányossági elvnek megfelelően ez a rendelet nem lépi túl az e célok eléréséhez szükséges mértéket."
        },
        {
          "EN": "(171) Directive 95/46/EC should be repealed by this Regulation.",
          "HU": "(171) E rendelet hatályon kívül helyezi a 95/46/EK irányelvet."
        },
        {
          "EN": "Processing already under way on the date of application of this Regulation should be brought into conformity with this Regulation within the period of two years after which this Regulation enters into force.",
          "HU": "Az e rendelet alkalmazásának időpontja előtt megkezdett adatkezelést e rendelet hatálybalépésének időpontjától számított két éven belül összhangba kell hozni e rendelettel."
        },
        {
          "EN": "Where processing is based on consent pursuant to Directive 95/46/EC, it is not necessary for the data subject to give his or her consent again if the manner in which the consent has been given is in line with the conditions of this Regulation, so as to allow the controller to continue such processing after the date of application of this Regulation.",
          "HU": "Ha az adatkezelés a 95/46/EK irányelv szerinti hozzájáruláson alapul és az érintett az e rendeletben foglalt feltételekkel összhangban adta meg hozzájárulását, nem kell ismételten az érintett engedélyét kérni ahhoz, hogy az adatkezelő e rendelet alkalmazási időpontját követően is folytathassa az adatkezelést."
        },
        {
          "EN": "Commission decisions adopted and authorisations by supervisory authorities based on Directive 95/46/EC remain in force until amended, replaced or repealed.",
          "HU": "A 95/46/EK irányelv alapján a Bizottság által hozott határozatok, valamint a felügyeleti hatóságok által kiadott engedélyek hatályban maradnak mindaddig, amíg módosításukra, felváltásukra vagy hatályon kívül helyezésükre sor nem kerül."
        },
        {
          "EN": "(172) The European Data Protection Supervisor was consulted in accordance with Article 28(2) of Regulation (EC) No 45/2001 and delivered an opinion on 7 March 2012 [17](17).",
          "HU": "(172) Az európai adatvédelmi biztossal a 45/2001/EK rendelet 28. cikkének (2) bekezdésével összhangban konzultációra került sor, és a biztos 2012. március 7-én véleményt nyilvánított [17](17)."
        },
        {
          "EN": "(173) This Regulation should apply to all matters concerning the protection of fundamental rights and freedoms vis-à-vis the processing of personal data which are not subject to specific obligations with the same objective set out in Directive 2002/58/EC of the European Parliament and of the Council [18](18), including the obligations on the controller and the rights of natural persons.",
          "HU": "(173) E rendeletet kell alkalmazni a természetes személyeknek a személyes adatok kezelése tekintetében történő védelme vonatkozásában az alapvető jogok és szabadságok védelmét érintő minden olyan esetben, amelyekre nem vonatkoznak azonos célú, a 2002/58/EK európai parlamenti és tanácsi irányelvben [18](18) meghatározott különös kötelezettségek, ideértve az adatkezelő kötelezettségeit és a természetes személyek jogait is."
        },
        {
          "EN": "In order to clarify the relationship between this Regulation and Directive 2002/58/EC, that Directive should be amended accordingly.",
          "HU": "Az e rendelet és a 2002/58/EK irányelv közötti kapcsolat egyértelművé tétele érdekében ez utóbbi irányelvet ennek megfelelően módosítani kell."
        },
        {
          "EN": "Once this Regulation is adopted, Directive 2002/58/EC should be reviewed in particular in order to ensure consistency with this Regulation,",
          "HU": "E rendelet elfogadását követően a 2002/58/EK irányelvet elsősorban az e rendelettel való összhang biztosítása érdekében felül kell vizsgálni,"
        },
        {
          "EN": "HAVE ADOPTED THIS REGULATION:",
          "HU": "ELFOGADTA EZT A RENDELETET:"
        },
        {
          "EN": "CHAPTER I",
          "HU": "I. FEJEZET"
        },
        {
          "EN": "General provisions",
          "HU": "Általános rendelkezések"
        },
        {
          "EN": "",
          "HU": "1. cikk"
        },
        {
          "EN": "Article 1",
          "HU": "Tárgy"
        },
        {
          "EN": "Subject-matter and objectives 1. This Regulation lays down rules relating to the protection of natural persons with regard to the processing of personal data and rules relating to the free movement of personal data.",
          "HU": "(1) Ez a rendelet a természetes személyeknek a személyes adatok kezelése tekintetében történő védelmére és a személyes adatok szabad áramlására vonatkozó szabályokat állapít meg."
        },
        {
          "EN": "2. This Regulation protects fundamental rights and freedoms of natural persons and in particular their right to the protection of personal data.",
          "HU": "(2) Ez a rendelet a természetes személyek alapvető jogait és szabadságait és különösen a személyes adatok védelméhez való jogukat védi."
        },
        {
          "EN": "3. The free movement of personal data within the Union shall be neither restricted nor prohibited for reasons connected with the protection of natural persons with regard to the processing of personal data.",
          "HU": "(3) A személyes adatok Unión belüli szabad áramlása nem korlátozható vagy tiltható meg a természetes személyeknek a személyes adatok kezelése tekintetében történő védelmével összefüggő okokból."
        },
        {
          "EN": "Article 2",
          "HU": "2. cikk"
        },
        {
          "EN": "Material scope",
          "HU": "Tárgyi hatály"
        },
        {
          "EN": "1. This Regulation applies to the processing of personal data wholly or partly by automated means and to the processing other than by automated means of personal data which form part of a filing system or are intended to form part of a filing system.",
          "HU": "(1) E rendeletet kell alkalmazni a személyes adatok részben vagy egészben automatizált módon történő kezelésére, valamint azoknak a személyes adatoknak a nem automatizált módon történő kezelésére, amelyek valamely nyilvántartási rendszer részét képezik, vagy amelyeket egy nyilvántartási rendszer részévé kívánnak tenni."
        },
        {
          "EN": "2. This Regulation does not apply to the processing of personal data:",
          "HU": "(2) E rendelet nem alkalmazandó a személyes adatok kezelésére, ha azt:"
        },
        {
          "EN": "(a) in the course of an activity which falls outside the scope of Union law;",
          "HU": "a) az uniós jog hatályán kívül eső tevékenységek során végzik;"
        },
        {
          "EN": "(b) by the Member States when carrying out activities which fall within the scope of Chapter 2 of Title V of the TEU;",
          "HU": "b) a tagállamok az EUSZ V. címe 2. fejezetének hatálya alá tartozó tevékenységek során végzik;"
        },
        {
          "EN": "(c) by a natural person in the course of a purely personal or household activity;",
          "HU": "c) természetes személyek kizárólag személyes vagy otthoni tevékenységük keretében végzik;"
        },
        {
          "EN": "(d) by competent authorities for the purposes of the prevention, investigation, detection or prosecution of criminal offences or the execution of criminal penalties, including the safeguarding against and the prevention of threats to public security.",
          "HU": "d) az illetékes hatóságok bűncselekmények megelőzése, nyomozása, felderítése, vádeljárás lefolytatása vagy büntetőjogi szankciók végrehajtása céljából végzik, ideértve a közbiztonságot fenyegető veszélyekkel szembeni védelmet és e veszélyek megelőzését."
        },
        {
          "EN": "3. For the processing of personal data by the Union institutions, bodies, offices and agencies, Regulation (EC) No 45/2001 applies.",
          "HU": "(3) A személyes adatok uniós intézmények, szervek, hivatalok és ügynökségek általi kezelésére a 45/2001/EK rendeletet kell alkalmazni."
        },
        {
          "EN": "Regulation (EC) No 45/2001 and other Union legal acts applicable to such processing of personal data shall be adapted to the principles and rules of this Regulation in accordance with Article 98.",
          "HU": "A 45/2001/EK rendeletet, valamint a személyes adatok ilyen kezelésére vonatkozó egyéb uniós jogi aktusokat a 98. cikkel összhangban hozzá kell igazítani az e rendeletben foglalt elvekhez és szabályokhoz."
        },
        {
          "EN": "4. This Regulation shall be without prejudice to the application of Directive 2000/31/EC, in particular of the liability rules of intermediary service providers in Articles 12 to 15 of that Directive.",
          "HU": "(4) E rendelet nem érinti a 2000/31/EK irányelv alkalmazását, különösen az irányelv 12–15. cikkében foglalt, a közvetítő szolgáltatók felelősségére vonatkozó szabályokat."
        },
        {
          "EN": "Article 3",
          "HU": "3. cikk"
        },
        {
          "EN": "Territorial scope",
          "HU": "Területi hatály"
        },
        {
          "EN": "1. This Regulation applies to the processing of personal data in the context of the activities of an establishment of a controller or a processor in the Union, regardless of whether the processing takes place in the Union or not.",
          "HU": "(1) E rendeletet kell alkalmazni a személyes adatoknak az Unióban tevékenységi hellyel rendelkező adatkezelők vagy adatfeldolgozók tevékenységeivel összefüggésben végzett kezelésére, függetlenül attól, hogy az adatkezelés az Unió területén történik vagy nem."
        },
        {
          "EN": "2. This Regulation applies to the processing of personal data of data subjects who are in the Union by a controller or processor not established in the Union, where the processing activities are related to:",
          "HU": "(2) E rendeletet kell alkalmazni az Unióban tartózkodó érintettek személyes adatainak az Unióban tevékenységi hellyel nem rendelkező adatkezelő vagy adatfeldolgozó által végzett kezelésére, ha az adatkezelési tevékenységek:"
        },
        {
          "EN": "(a) the offering of goods or services, irrespective of whether a payment of the data subject is required, to such data subjects in the Union; or",
          "HU": "a) áruknak vagy szolgáltatásoknak az Unióban tartózkodó érintettek számára történő nyújtásához kapcsolódnak, függetlenül attól, hogy az érintettnek fizetnie kell-e azokért; vagy"
        },
        {
          "EN": "(b) the monitoring of their behaviour as far as their behaviour takes place within the Union.",
          "HU": "b) az érintettek viselkedésének megfigyeléséhez kapcsolódnak, feltéve hogy az Unió területén belül tanúsított viselkedésükről van szó."
        },
        {
          "EN": "3. This Regulation applies to the processing of personal data by a controller not established in the Union, but in a place where Member State law applies by virtue of public international law.",
          "HU": "(3) E rendeletet kell alkalmazni a személyes adatoknak a nem az Unióban, hanem olyan helyen tevékenységi hellyel rendelkező adatkezelő által végzett kezelésére, ahol a nemzetközi közjog értelmében valamely tagállam joga alkalmazandó."
        },
        {
          "EN": "Article 4",
          "HU": "4. cikk"
        },
        {
          "EN": "Definitions",
          "HU": "Fogalommeghatározások"
        },
        {
          "EN": "For the purposes of this Regulation:",
          "HU": "E rendelet alkalmazásában:"
        },
        {
          "EN": "(1) ‘personal data’ means any information relating to an identified or identifiable natural person (‘data subject’); an identifiable natural person is one who can be identified, directly or indirectly, in particular by reference to an identifier such as a name, an identification number, location data, an online identifier or to one or more factors specific to the physical, physiological, genetic, mental, economic, cultural or social identity of that natural person;",
          "HU": "1. „személyes adat”: azonosított vagy azonosítható természetes személyre („érintett”) vonatkozó bármely információ; azonosítható az a természetes személy, aki közvetlen vagy közvetett módon, különösen valamely azonosító, például név, szám, helymeghatározó adat, online azonosító vagy a természetes személy testi, fiziológiai, genetikai, szellemi, gazdasági, kulturális vagy szociális azonosságára vonatkozó egy vagy több tényező alapján azonosítható;"
        },
        {
          "EN": "(2) ‘processing’ means any operation or set of operations which is performed on personal data or on sets of personal data, whether or not by automated means, such as collection, recording, organisation, structuring, storage, adaptation or alteration, retrieval, consultation, use, disclosure by transmission, dissemination or otherwise making available, alignment or combination, restriction, erasure or destruction;",
          "HU": "2. „adatkezelés”: a személyes adatokon vagy adatállományokon automatizált vagy nem automatizált módon végzett bármely művelet vagy műveletek összessége, így a gyűjtés, rögzítés, rendszerezés, tagolás, tárolás, átalakítás vagy megváltoztatás, lekérdezés, betekintés, felhasználás, közlés továbbítás, terjesztés vagy egyéb módon történő hozzáférhetővé tétel útján, összehangolás vagy összekapcsolás, korlátozás, törlés, illetve megsemmisítés;"
        },
        {
          "EN": "(3) ‘restriction of processing’ means the marking of stored personal data with the aim of limiting their processing in the future;",
          "HU": "3. „az adatkezelés korlátozása”: a tárolt személyes adatok megjelölése jövőbeli kezelésük korlátozása céljából;"
        },
        {
          "EN": "(4) ‘profiling’ means any form of automated processing of personal data consisting of the use of personal data to evaluate certain personal aspects relating to a natural person, in particular to analyse or predict aspects concerning that natural person's performance at work, economic situation, health, personal preferences, interests, reliability, behaviour, location or movements;",
          "HU": "4. „profilalkotás”: személyes adatok automatizált kezelésének bármely olyan formája, amelynek során a személyes adatokat valamely természetes személyhez fűződő bizonyos személyes jellemzők értékelésére, különösen a munkahelyi teljesítményhez, gazdasági helyzethez, egészségi állapothoz, személyes preferenciákhoz, érdeklődéshez, megbízhatósághoz, viselkedéshez, tartózkodási helyhez vagy mozgáshoz kapcsolódó jellemzők elemzésére vagy előrejelzésére használják;"
        },
        {
          "EN": "(5) ‘pseudonymisation’ means the processing of personal data in such a manner that the personal data can no longer be attributed to a specific data subject without the use of additional information, provided that such additional information is kept separately and is subject to technical and organisational measures to ensure that the personal data are not attributed to an identified or identifiable natural person;",
          "HU": "5. „álnevesítés”: a személyes adatok olyan módon történő kezelése, amelynek következtében további információk felhasználása nélkül többé már nem állapítható meg, hogy a személyes adat mely konkrét természetes személyre vonatkozik, feltéve hogy az ilyen további információt külön tárolják, és technikai és szervezési intézkedések megtételével biztosított, hogy azonosított vagy azonosítható természetes személyekhez ezt a személyes adatot nem lehet kapcsolni;"
        },
        {
          "EN": "(6) ‘filing system’ means any structured set of personal data which are accessible according to specific criteria, whether centralised, decentralised or dispersed on a functional or geographical basis;",
          "HU": "6. „nyilvántartási rendszer”: a személyes adatok bármely módon – centralizált, decentralizált vagy funkcionális vagy földrajzi szempontok szerint – tagolt állománya, amely meghatározott ismérvek alapján hozzáférhető;"
        },
        {
          "EN": "(7) ‘controller’ means the natural or legal person, public authority, agency or other body which, alone or jointly with others, determines the purposes and means of the processing of personal data; where the purposes and means of such processing are determined by Union or Member State law, the controller or the specific criteria for its nomination may be provided for by Union or Member State law;",
          "HU": "7. „adatkezelő”: az a természetes vagy jogi személy, közhatalmi szerv, ügynökség vagy bármely egyéb szerv, amely a személyes adatok kezelésének céljait és eszközeit önállóan vagy másokkal együtt meghatározza; ha az adatkezelés céljait és eszközeit az uniós vagy a tagállami jog határozza meg, az adatkezelőt vagy az adatkezelő kijelölésére vonatkozó különös szempontokat az uniós vagy a tagállami jog is meghatározhatja;"
        },
        {
          "EN": "(8) ‘processor’ means a natural or legal person, public authority, agency or other body which processes personal data on behalf of the controller;",
          "HU": "8. „adatfeldolgozó”: az a természetes vagy jogi személy, közhatalmi szerv, ügynökség vagy bármely egyéb szerv, amely az adatkezelő nevében személyes adatokat kezel;"
        },
        {
          "EN": "(9) ‘recipient’ means a natural or legal person, public authority, agency or another body, to which the personal data are disclosed, whether a third party or not.",
          "HU": "9. „címzett”: az a természetes vagy jogi személy, közhatalmi szerv, ügynökség vagy bármely egyéb szerv, akivel vagy amellyel a személyes adatot közlik, függetlenül attól, hogy harmadik fél-e."
        },
        {
          "EN": "However, public authorities which may receive personal data in the framework of a particular inquiry in accordance with Union or Member State law shall not be regarded as recipients; the processing of those data by those public authorities shall be in compliance with the applicable data protection rules according to the purposes of the processing;",
          "HU": "Azon közhatalmi szervek, amelyek egy egyedi vizsgálat keretében az uniós vagy a tagállami joggal összhangban férhetnek hozzá személyes adatokhoz, nem minősülnek címzettnek; az említett adatok e közhatalmi szervek általi kezelése meg kell, hogy feleljen az adatkezelés céljainak megfelelően az alkalmazandó adatvédelmi szabályoknak;"
        },
        {
          "EN": "(10) ‘third party’ means a natural or legal person, public authority, agency or body other than the data subject, controller, processor and persons who, under the direct authority of the controller or processor, are authorised to process personal data;",
          "HU": "10. „harmadik fél”: az a természetes vagy jogi személy, közhatalmi szerv, ügynökség vagy bármely egyéb szerv, amely nem azonos az érintettel, az adatkezelővel, az adatfeldolgozóval vagy azokkal a személyekkel, akik az adatkezelő vagy adatfeldolgozó közvetlen irányítása alatt a személyes adatok kezelésére felhatalmazást kaptak;"
        },
        {
          "EN": "(11) ‘consent’ of the data subject means any freely given, specific, informed and unambiguous indication of the data subject's wishes by which he or she, by a statement or by a clear affirmative action, signifies agreement to the processing of personal data relating to him or her;",
          "HU": "11. „az érintett hozzájárulása”: az érintett akaratának önkéntes, konkrét és megfelelő tájékoztatáson alapuló és egyértelmű kinyilvánítása, amellyel az érintett nyilatkozat vagy a megerősítést félreérthetetlenül kifejező cselekedet útján jelzi, hogy beleegyezését adja az őt érintő személyes adatok kezeléséhez;"
        },
        {
          "EN": "(12) ‘personal data breach’ means a breach of security leading to the accidental or unlawful destruction, loss, alteration, unauthorised disclosure of, or access to, personal data transmitted, stored or otherwise processed;",
          "HU": "12. „adatvédelmi incidens”: a biztonság olyan sérülése, amely a továbbított, tárolt vagy más módon kezelt személyes adatok véletlen vagy jogellenes megsemmisítését, elvesztését, megváltoztatását, jogosulatlan közlését vagy az azokhoz való jogosulatlan hozzáférést eredményezi;"
        },
        {
          "EN": "(13) ‘genetic data’ means personal data relating to the inherited or acquired genetic characteristics of a natural person which give unique information about the physiology or the health of that natural person and which result, in particular, from an analysis of a biological sample from the natural person in question;",
          "HU": "13. „genetikai adat”: egy természetes személy örökölt vagy szerzett genetikai jellemzőire vonatkozó minden olyan személyes adat, amely az adott személy fiziológiájára vagy egészségi állapotára vonatkozó egyedi információt hordoz, és amely elsősorban az említett természetes személyből vett biológiai minta elemzéséből ered;"
        },
        {
          "EN": "(14) ‘biometric data’ means personal data resulting from specific technical processing relating to the physical, physiological or behavioural characteristics of a natural person, which allow or confirm the unique identification of that natural person, such as facial images or dactyloscopic data;",
          "HU": "14. „biometrikus adat”: egy természetes személy testi, fiziológiai vagy viselkedési jellemzőire vonatkozó minden olyan sajátos technikai eljárásokkal nyert személyes adat, amely lehetővé teszi vagy megerősíti a természetes személy egyedi azonosítását, ilyen például az arckép vagy a daktiloszkópiai adat;"
        },
        {
          "EN": "(15) ‘data concerning health’ means personal data related to the physical or mental health of a natural person, including the provision of health care services, which reveal information about his or her health status;",
          "HU": "15. „egészségügyi adat”: egy természetes személy testi vagy pszichikai egészségi állapotára vonatkozó személyes adat, ideértve a természetes személy számára nyújtott egészségügyi szolgáltatásokra vonatkozó olyan adatot is, amely információt hordoz a természetes személy egészségi állapotáról;"
        },
        {
          "EN": "(16) ‘main establishment’ means:",
          "HU": "16. „tevékenységi központ”:"
        },
        {
          "EN": "(a) as regards a controller with establishments in more than one Member State, the place of its central administration in the Union, unless the decisions on the purposes and means of the processing of personal data are taken in another establishment of the controller in the Union and the latter establishment has the power to have such decisions implemented, in which case the establishment having taken such decisions is to be considered to be the main establishment;",
          "HU": "a) az egynél több tagállamban tevékenységi hellyel rendelkező adatkezelő esetében az Unión belüli központi ügyvitelének helye, ha azonban a személyes adatok kezelésének céljaira és eszközeire vonatkozó döntéseket az adatkezelő egy Unión belüli másik tevékenységi helyén hozzák, és az utóbbi tevékenységi hely rendelkezik hatáskörrel az említett döntések végrehajtatására, az említett döntéseket meghozó tevékenységi helyet kell tevékenységi központnak tekinteni;"
        },
        {
          "EN": "(b) as regards a processor with establishments in more than one Member State, the place of its central administration in the Union, or, if the processor has no central administration in the Union, the establishment of the processor in the Union where the main processing activities in the context of the activities of an establishment of the processor take place to the extent that the processor is subject to specific obligations under this Regulation;",
          "HU": "b) az egynél több tagállamban tevékenységi hellyel rendelkező adatfeldolgozó esetében az Unión belüli központi ügyvitelének helye, vagy ha az adatfeldolgozó az Unióban nem rendelkezik központi ügyviteli hellyel, akkor az adatfeldolgozónak az az Unión belüli tevékenységi helye, ahol az adatfeldolgozó tevékenységi helyén folytatott tevékenységekkel összefüggésben végzett fő adatkezelési tevékenységek zajlanak, amennyiben az adatfeldolgozóra e rendelet szerint meghatározott kötelezettségek vonatkoznak;"
        },
        {
          "EN": "(17) ‘representative’ means a natural or legal person established in the Union who, designated by the controller or processor in writing pursuant to Article 27, represents the controller or processor with regard to their respective obligations under this Regulation;",
          "HU": "17. „képviselő”: az az Unióban tevékenységi hellyel, illetve lakóhellyel rendelkező és az adatkezelő vagy adatfeldolgozó által a 27. cikk alapján írásban megjelölt természetes vagy jogi személy, aki, illetve amely az adatkezelőt vagy adatfeldolgozót képviseli az adatkezelőre vagy adatfeldolgozóra az e rendelet értelmében háruló kötelezettségek vonatkozásában;"
        },
        {
          "EN": "(18) ‘enterprise’ means a natural or legal person engaged in an economic activity, irrespective of its legal form, including partnerships or associations regularly engaged in an economic activity;",
          "HU": "18. „vállalkozás”: gazdasági tevékenységet folytató természetes vagy jogi személy, függetlenül a jogi formájától, ideértve a rendszeres gazdasági tevékenységet folytató személyegyesítő társaságokat és egyesületeket is;"
        },
        {
          "EN": "(19) ‘group of undertakings’ means a controlling undertaking and its controlled undertakings;",
          "HU": "19. „vállalkozáscsoport”: az ellenőrző vállalkozás és az általa ellenőrzött vállalkozások;"
        },
        {
          "EN": "(20) ‘binding corporate rules’ means personal data protection policies which are adhered to by a controller or processor established on the territory of a Member State for transfers or a set of transfers of personal data to a controller or processor in one or more third countries within a group of undertakings, or group of enterprises engaged in a joint economic activity;",
          "HU": "20. „kötelező erejű vállalati szabályok”: a személyes adatok védelmére vonatkozó szabályzat, amelyet az Unió valamely tagállamának területén tevékenységi hellyel rendelkező adatkezelő vagy adatfeldolgozó egy vagy több harmadik országban a személyes adatoknak az ugyanazon vállalkozáscsoporton vagy közös gazdasági tevékenységet folytató vállalkozások ugyanazon csoportján belüli adatkezelő vagy adatfeldolgozó részéről történő továbbítása vagy ilyen továbbítások sorozata tekintetében követ;"
        },
        {
          "EN": "(21) ‘supervisory authority’ means an independent public authority which is established by a Member State pursuant to Article 51;",
          "HU": "21. „felügyeleti hatóság”: egy tagállam által az 51. cikknek megfelelően létrehozott független közhatalmi szerv;"
        },
        {
          "EN": "(22) ‘supervisory authority concerned’ means a supervisory authority which is concerned by the processing of personal data because:",
          "HU": "22. „érintett felügyeleti hatóság”: az a felügyeleti hatóság, amelyet a személyes adatok kezelése a következő okok valamelyike alapján érint:"
        },
        {
          "EN": "(a) the controller or processor is established on the territory of the Member State of that supervisory authority;",
          "HU": "a) az adatkezelő vagy az adatfeldolgozó az említett felügyeleti hatóság tagállamának területén rendelkezik tevékenységi hellyel;"
        },
        {
          "EN": "(b) data subjects residing in the Member State of that supervisory authority are substantially affected or likely to be substantially affected by the processing; or",
          "HU": "b) az adatkezelés jelentős mértékben érinti vagy valószínűsíthetően jelentős mértékben érinti a felügyeleti hatóság tagállamában lakóhellyel rendelkező érintetteket; vagy"
        },
        {
          "EN": "(c) a complaint has been lodged with that supervisory authority;",
          "HU": "c) panaszt nyújtottak be az említett felügyeleti hatósághoz;"
        },
        {
          "EN": "(23) ‘cross-border processing’ means either:",
          "HU": "23. „személyes adatok határokon átnyúló adatkezelése”:"
        },
        {
          "EN": "(a) processing of personal data which takes place in the context of the activities of establishments in more than one Member State of a controller or processor in the Union where the controller or processor is established in more than one Member State; or",
          "HU": "a) személyes adatoknak az Unióban megvalósuló olyan kezelése, amelyre az egynél több tagállamban tevékenységi hellyel rendelkező adatkezelő vagy adatfeldolgozó több tagállamban található tevékenységi helyein folytatott tevékenységekkel összefüggésben kerül sor; vagy"
        },
        {
          "EN": "(b) processing of personal data which takes place in the context of the activities of a single establishment of a controller or processor in the Union but which substantially affects or is likely to substantially affect data subjects in more than one Member State.",
          "HU": "b) személyes adatoknak az Unióban megvalósuló olyan kezelése, amelyre az adatkezelő vagy az adatfeldolgozó egyetlen tevékenységi helyén folytatott tevékenységekkel összefüggésben kerül sor úgy, hogy egynél több tagállamban jelentős mértékben érint vagy valószínűsíthetően jelentős mértékben érint érintetteket;"
        },
        {
          "EN": "(24) ‘relevant and reasoned objection’ means an objection to a draft decision as to whether there is an infringement of this Regulation, or whether envisaged action in relation to the controller or processor complies with this Regulation, which clearly demonstrates the significance of the risks posed by the draft decision as regards the fundamental rights and freedoms of data subjects and, where applicable, the free flow of personal data within the Union;",
          "HU": "24. „releváns és megalapozott kifogás”: a döntéstervezettel szemben benyújtott, azzal kapcsolatos kifogás, hogy ezt a rendeletet megsértették-e, illetve hogy az adatkezelőre vagy az adatfeldolgozóra vonatkozó tervezett intézkedés összhangban van-e a rendelettel; a kifogásban egyértelműen be kell mutatni a döntéstervezet által az érintettek alapvető jogaira és szabadságaira, valamint adott esetben a személyes adatok Unión belüli szabad áramlására jelentett kockázatok jelentőségét;"
        },
        {
          "EN": "(25) ‘information society service’ means a service as defined in point (b) of Article 1(1) of Directive (EU) 2015/1535 of the European Parliament and of the Council [19](19);",
          "HU": "25. „az információs társadalommal összefüggő szolgáltatás”: az (EU) 2015/1535 európai parlamenti és tanácsi irányelv [19](19) 1. cikke (1) bekezdésének b) pontja értelmében vett szolgáltatás;"
        },
        {
          "EN": "(26) ‘international organisation’ means an organisation and its subordinate bodies governed by public international law, or any other body which is set up by, or on the basis of, an agreement between two or more countries.",
          "HU": "26. „nemzetközi szervezet”: a nemzetközi közjog hatálya alá tartozó szervezet vagy annak alárendelt szervei, vagy olyan egyéb szerv, amelyet két vagy több ország közötti megállapodás hozott létre vagy amely ilyen megállapodás alapján jött létre. II."
        },
        {
          "EN": "CHAPTER II",
          "HU": "FEJEZET"
        },
        {
          "EN": "Principles",
          "HU": "Elvek"
        },
        {
          "EN": "Article 5",
          "HU": "5. cikk"
        },
        {
          "EN": "Principles relating to processing of personal data",
          "HU": "A személyes adatok kezelésére vonatkozó elvek"
        },
        {
          "EN": "1. Personal data shall be:",
          "HU": "(1) A személyes adatok:"
        },
        {
          "EN": "(a) processed lawfully, fairly and in a transparent manner in relation to the data subject (‘lawfulness, fairness and transparency’);",
          "HU": "a) kezelését jogszerűen és tisztességesen, valamint az érintett számára átlátható módon kell végezni („jogszerűség, tisztességes eljárás és átláthatóság”);"
        },
        {
          "EN": "(b) collected for specified, explicit and legitimate purposes and not further processed in a manner that is incompatible with those purposes; further processing for archiving purposes in the public interest, scientific or historical research purposes or statistical purposes shall, in accordance with Article 89(1), not be considered to be incompatible with the initial purposes (‘purpose limitation’);",
          "HU": "b) gyűjtése csak meghatározott, egyértelmű és jogszerű célból történjen, és azokat ne kezeljék ezekkel a célokkal össze nem egyeztethető módon; a 89. cikk (1) bekezdésének megfelelően nem minősül az eredeti céllal össze nem egyeztethetőnek a közérdekű archiválás céljából, tudományos és történelmi kutatási célból vagy statisztikai célból történő további adatkezelés („célhoz kötöttség”);"
        },
        {
          "EN": "(c) adequate, relevant and limited to what is necessary in relation to the purposes for which they are processed (‘data minimisation’);",
          "HU": "c) az adatkezelés céljai szempontjából megfelelőek és relevánsak kell, hogy legyenek, és a szükségesre kell korlátozódniuk („adattakarékosság”);"
        },
        {
          "EN": "(d) accurate and, where necessary, kept up to date; every reasonable step must be taken to ensure that personal data that are inaccurate, having regard to the purposes for which they are processed, are erased or rectified without delay (‘accuracy’);",
          "HU": "d) pontosnak és szükség esetén naprakésznek kell lenniük; minden észszerű intézkedést meg kell tenni annak érdekében, hogy az adatkezelés céljai szempontjából pontatlan személyes adatokat haladéktalanul töröljék vagy helyesbítsék („pontosság”);"
        },
        {
          "EN": "(e) kept in a form which permits identification of data subjects for no longer than is necessary for the purposes for which the personal data are processed; personal data may be stored for longer periods insofar as the personal data will be processed solely for archiving purposes in the public interest, scientific or historical research purposes or statistical purposes in accordance with Article 89(1) subject to implementation of the appropriate technical and organisational measures required by this Regulation in order to safeguard the rights and freedoms of the data subject (‘storage limitation’);",
          "HU": "e) tárolásának olyan formában kell történnie, amely az érintettek azonosítását csak a személyes adatok kezelése céljainak eléréséhez szükséges ideig teszi lehetővé; a személyes adatok ennél hosszabb ideig történő tárolására csak akkor kerülhet sor, amennyiben a személyes adatok kezelésére a 89. cikk (1) bekezdésének megfelelően közérdekű archiválás céljából, tudományos és történelmi kutatási célból vagy statisztikai célból kerül majd sor, az e rendeletben az érintettek jogainak és szabadságainak védelme érdekében előírt megfelelő technikai és szervezési intézkedések végrehajtására is figyelemmel („korlátozott tárolhatóság”);"
        },
        {
          "EN": "(f) processed in a manner that ensures appropriate security of the personal data, including protection against unauthorised or unlawful processing and against accidental loss, destruction or damage, using appropriate technical or organisational measures (‘integrity and confidentiality’).",
          "HU": "f) kezelését oly módon kell végezni, hogy megfelelő technikai vagy szervezési intézkedések alkalmazásával biztosítva legyen a személyes adatok megfelelő biztonsága, az adatok jogosulatlan vagy jogellenes kezelésével, véletlen elvesztésével, megsemmisítésével vagy károsodásával szembeni védelmet is ideértve („integritás és bizalmas jelleg”)."
        },
        {
          "EN": "2. The controller shall be responsible for, and be able to demonstrate compliance with, paragraph 1 (‘accountability’).",
          "HU": "(2) Az adatkezelő felelős az (1) bekezdésnek való megfelelésért, továbbá képesnek kell lennie e megfelelés igazolására („elszámoltathatóság”)."
        },
        {
          "EN": "Article 6",
          "HU": "6. cikk"
        },
        {
          "EN": "Lawfulness of processing",
          "HU": "Az adatkezelés jogszerűsége"
        },
        {
          "EN": "1. Processing shall be lawful only if and to the extent that at least one of the following applies:",
          "HU": "(1) A személyes adatok kezelése kizárólag akkor és annyiban jogszerű, amennyiben legalább az alábbiak egyike teljesül:"
        },
        {
          "EN": "(a) the data subject has given consent to the processing of his or her personal data for one or more specific purposes;",
          "HU": "a) az érintett hozzájárulását adta személyes adatainak egy vagy több konkrét célból történő kezeléséhez;"
        },
        {
          "EN": "(b) processing is necessary for the performance of a contract to which the data subject is party or in order to take steps at the request of the data subject prior to entering into a contract;",
          "HU": "b) az adatkezelés olyan szerződés teljesítéséhez szükséges, amelyben az érintett az egyik fél, vagy az a szerződés megkötését megelőzően az érintett kérésére történő lépések megtételéhez szükséges;"
        },
        {
          "EN": "(c) processing is necessary for compliance with a legal obligation to which the controller is subject;",
          "HU": "c) az adatkezelés az adatkezelőre vonatkozó jogi kötelezettség teljesítéséhez szükséges;"
        },
        {
          "EN": "(d) processing is necessary in order to protect the vital interests of the data subject or of another natural person;",
          "HU": "d) az adatkezelés az érintett vagy egy másik természetes személy létfontosságú érdekeinek védelme miatt szükséges;"
        },
        {
          "EN": "(e) processing is necessary for the performance of a task carried out in the public interest or in the exercise of official authority vested in the controller;",
          "HU": "e) az adatkezelés közérdekű vagy az adatkezelőre ruházott közhatalmi jogosítvány gyakorlásának keretében végzett feladat végrehajtásához szükséges;"
        },
        {
          "EN": "(f) processing is necessary for the purposes of the legitimate interests pursued by the controller or by a third party, except where such interests are overridden by the interests or fundamental rights and freedoms of the data subject which require protection of personal data, in particular where the data subject is a child.",
          "HU": "f) az adatkezelés az adatkezelő vagy egy harmadik fél jogos érdekeinek érvényesítéséhez szükséges, kivéve, ha ezen érdekekkel szemben elsőbbséget élveznek az érintett olyan érdekei vagy alapvető jogai és szabadságai, amelyek személyes adatok védelmét teszik szükségessé, különösen, ha az érintett gyermek."
        },
        {
          "EN": "Point (f) of the first subparagraph shall not apply to processing carried out by public authorities in the performance of their tasks.",
          "HU": "Az első albekezdés f) pontja nem alkalmazható a közhatalmi szervek által feladataik ellátása során végzett adatkezelésre."
        },
        {
          "EN": "2. Member States may maintain or introduce more specific provisions to adapt the application of the rules of this Regulation with regard to processing for compliance with points (c) and (e) of paragraph 1 by determining more precisely specific requirements for the processing and other measures to ensure lawful and fair processing including for other specific processing situations as provided for in Chapter IX.",
          "HU": "(2) Az e rendeletben foglalt, adatkezelésre vonatkozó szabályok alkalmazásának kiigazítása érdekében, a tagállamok az (1) bekezdés c) és e) pontjának való megfelelés céljából fenntarthatnak vagy bevezethetnek konkrétabb rendelkezéseket, amelyekben pontosabban meghatározzák az adatkezelésre vonatkozó konkrét követelményeket, és amelyekben további intézkedéseket tesznek az adatkezelés jogszerűségének és tisztességességének biztosítására, ideértve a IX. fejezetben meghatározott egyéb konkrét adatkezelési helyzeteket is."
        },
        {
          "EN": "3. The basis for the processing referred to in point (c) and (e) of paragraph 1 shall be laid down by:",
          "HU": "(3) Az (1) bekezdés c) és e) pontja szerinti adatkezelés jogalapját a következőknek kell megállapítania:"
        },
        {
          "EN": "(a) Union law; or",
          "HU": "a) az uniós jog, vagy"
        },
        {
          "EN": "(b) Member State law to which the controller is subject.",
          "HU": "b) azon tagállami jog, amelynek hatálya alá az adatkezelő tartozik."
        },
        {
          "EN": "The purpose of the processing shall be determined in that legal basis or, as regards the processing referred to in point (e) of paragraph 1, shall be necessary for the performance of a task carried out in the public interest or in the exercise of official authority vested in the controller.",
          "HU": "Az adatkezelés célját e jogalapra hivatkozással kell meghatározni, illetve az (1) bekezdés e) pontjában említett adatkezelés tekintetében annak szükségesnek kell lennie valamely közérdekű vagy az adatkezelőre ruházott közhatalmi jogosítvány gyakorlásának keretében végzett feladat végrehajtásához."
        },
        {
          "EN": "That legal basis may contain specific provisions to adapt the application of rules of this Regulation, inter alia: the general conditions governing the lawfulness of processing by the controller; the types of data which are subject to the processing; the data subjects concerned; the entities to, and the purposes for which, the personal data may be disclosed; the purpose limitation; storage periods; and processing operations and processing procedures, including measures to ensure lawful and fair processing such as those for other specific processing situations as provided for in Chapter IX.",
          "HU": "Ez a jogalap tartalmazhat az e rendeletben foglalt szabályok alkalmazását kiigazító rendelkezéseket, ideértve az adatkezelő általi adatkezelés jogszerűségére irányadó általános feltételeket, az adatkezelés tárgyát képező adatok típusát, az érintetteket, azokat a jogalanyokat, amelyekkel a személyes adatok közölhetők, illetve az ilyen adatközlés céljait, az adatkezelés céljára vonatkozó korlátozásokat, az adattárolás időtartamát és az adatkezelési műveleteket, valamint egyéb adatkezelési eljárásokat, így a törvényes és tisztességes adatkezelés biztosításához szükséges intézkedéseket is, ideértve a IX. fejezetben meghatározott egyéb konkrét adatkezelési helyzetekre vonatkozóan."
        },
        {
          "EN": "The Union or the Member State law shall meet an objective of public interest and be proportionate to the legitimate aim pursued.",
          "HU": "Az uniós vagy tagállami jognak közérdekű célt kell szolgálnia, és arányosnak kell lennie az elérni kívánt jogszerű céllal."
        },
        {
          "EN": "4. Where the processing for a purpose other than that for which the personal data have been collected is not based on the data subject's consent or on a Union or Member State law which constitutes a necessary and proportionate measure in a democratic society to safeguard the objectives referred to in Article 23(1), the controller shall, in order to ascertain whether processing for another purpose is compatible with the purpose for which the personal data are initially collected, take into account, inter alia:",
          "HU": "(4) Ha az adatgyűjtés céljától eltérő célból történő adatkezelés nem az érintett hozzájárulásán vagy valamely olyan uniós vagy tagállami jogon alapul, amely szükséges és arányos intézkedésnek minősül egy demokratikus társadalomban a 23. cikk (1) bekezdésében rögzített célok eléréséhez, annak megállapításához, hogy az eltérő célú adatkezelés összeegyeztethető-e azzal a céllal, amelyből a személyes adatokat eredetileg gyűjtötték, az adatkezelő többek között figyelembe veszi:"
        },
        {
          "EN": "(a) any link between the purposes for which the personal data have been collected and the purposes of the intended further processing;",
          "HU": "a) a személyes adatok gyűjtésének céljait és a tervezett további adatkezelés céljai közötti esetleges kapcsolatokat;"
        },
        {
          "EN": "(b) the context in which the personal data have been collected, in particular regarding the relationship between data subjects and the controller;",
          "HU": "b) a személyes adatok gyűjtésének körülményeit, különös tekintettel az érintettek és az adatkezelő közötti kapcsolatokra;"
        },
        {
          "EN": "(c) the nature of the personal data, in particular whether special categories of personal data are processed, pursuant to Article 9, or whether personal data related to criminal convictions and offences are processed, pursuant to Article 10;",
          "HU": "c) a személyes adatok jellegét, különösen pedig azt, hogy a 9. cikk szerinti személyes adatok különleges kategóriáinak kezeléséről van-e szó, illetve, hogy büntetőjogi felelősség megállapítására és bűncselekményekre vonatkozó adatoknak a 10. cikk szerinti kezeléséről van-e szó;"
        },
        {
          "EN": "(d) the possible consequences of the intended further processing for data subjects;",
          "HU": "d) azt, hogy az érintettekre nézve milyen esetleges következményekkel járna az adatok tervezett további kezelése;"
        },
        {
          "EN": "(e) the existence of appropriate safeguards, which may include encryption or pseudonymisation.",
          "HU": "e) megfelelő garanciák meglétét, ami jelenthet titkosítást vagy álnevesítést is."
        },
        {
          "EN": "Article 7",
          "HU": "7. cikk"
        },
        {
          "EN": "Conditions for consent",
          "HU": "A hozzájárulás feltételei"
        },
        {
          "EN": "1. Where processing is based on consent, the controller shall be able to demonstrate that the data subject has consented to processing of his or her personal data.",
          "HU": "(1) Ha az adatkezelés hozzájáruláson alapul, az adatkezelőnek képesnek kell lennie annak igazolására, hogy az érintett személyes adatainak kezeléséhez hozzájárult."
        },
        {
          "EN": "2. If the data subject's consent is given in the context of a written declaration which also concerns other matters, the request for consent shall be presented in a manner which is clearly distinguishable from the other matters, in an intelligible and easily accessible form, using clear and plain language.",
          "HU": "(2) Ha az érintett hozzájárulását olyan írásbeli nyilatkozat keretében adja meg, amely más ügyekre is vonatkozik, a hozzájárulás iránti kérelmet ezektől a más ügyektől egyértelműen megkülönböztethető módon kell előadni, érthető és könnyen hozzáférhető formában, világos és egyszerű nyelvezettel."
        },
        {
          "EN": "Any part of such a declaration which constitutes an infringement of this Regulation shall not be binding.",
          "HU": "Az érintett hozzájárulását tartalmazó ilyen nyilatkozat bármely olyan része, amely sérti e rendeletet, kötelező erővel nem bír."
        },
        {
          "EN": "3. The data subject shall have the right to withdraw his or her consent at any time.",
          "HU": "(3) Az érintett jogosult arra, hogy hozzájárulását bármikor visszavonja."
        },
        {
          "EN": "The withdrawal of consent shall not affect the lawfulness of processing based on consent before its withdrawal.",
          "HU": "A hozzájárulás visszavonása nem érinti a hozzájáruláson alapuló, a visszavonás előtti adatkezelés jogszerűségét."
        },
        {
          "EN": "Prior to giving consent, the data subject shall be informed thereof.",
          "HU": "A hozzájárulás megadása előtt az érintettet erről tájékoztatni kell."
        },
        {
          "EN": "It shall be as easy to withdraw as to give consent.",
          "HU": "A hozzájárulás visszavonását ugyanolyan egyszerű módon kell lehetővé tenni, mint annak megadását."
        },
        {
          "EN": "4. When assessing whether consent is freely given, utmost account shall be taken of whether, inter alia, the performance of a contract, including the provision of a service, is conditional on consent to the processing of personal data that is not necessary for the performance of that contract.",
          "HU": "(4) Annak megállapítása során, hogy a hozzájárulás önkéntes-e, a lehető legnagyobb mértékben figyelembe kell venni azt a tényt, egyebek mellett, hogy a szerződés teljesítésének – beleértve a szolgáltatások nyújtását is – feltételéül szabták-e az olyan személyes adatok kezeléséhez való hozzájárulást, amelyek nem szükségesek a szerződés teljesítéséhez."
        },
        {
          "EN": "Article 8",
          "HU": "8. cikk"
        },
        {
          "EN": "Conditions applicable to child's consent in relation to information society services",
          "HU": "A gyermek hozzájárulására vonatkozó feltételek az információs társadalommal összefüggő szolgáltatások vonatkozásában"
        },
        {
          "EN": "1. Where point (a) of Article 6(1) applies, in relation to the offer of information society services directly to a child, the processing of the personal data of a child shall be lawful where the child is at least 16 years old.",
          "HU": "(1) Ha a 6. cikk (1) bekezdésének a) pontja alkalmazandó, a közvetlenül gyermekeknek kínált, információs társadalommal összefüggő szolgáltatások vonatkozásában végzett személyes adatok kezelése akkor jogszerű, ha a gyermek a 16. életévét betöltötte."
        },
        {
          "EN": "Where the child is below the age of 16 years, such processing shall be lawful only if and to the extent that consent is given or authorised by the holder of parental responsibility over the child.",
          "HU": "A 16. életévét be nem töltött gyermek esetén, a gyermekek személyes adatainak kezelése csak akkor és olyan mértékben jogszerű, ha a hozzájárulást a gyermek feletti szülői felügyeletet gyakorló adta meg, illetve engedélyezte."
        },
        {
          "EN": "Member States may provide by law for a lower age for those purposes provided that such lower age is not below 13 years.",
          "HU": "A tagállamok e célokból jogszabályban ennél alacsonyabb, de a 13. életévnél nem alacsonyabb életkort is megállapíthatnak."
        },
        {
          "EN": "2. The controller shall make reasonable efforts to verify in such cases that consent is given or authorised by the holder of parental responsibility over the child, taking into consideration available technology.",
          "HU": "(2) Az adatkezelő – figyelembe véve az elérhető technológiát – észszerű erőfeszítéseket tesz, hogy ilyen esetekben ellenőrizze, hogy a hozzájárulást a gyermek feletti szülői felügyeleti jog gyakorlója adta meg, illetve engedélyezte."
        },
        {
          "EN": "3. Paragraph 1 shall not affect the general contract law of Member States such as the rules on the validity, formation or effect of a contract in relation to a child.",
          "HU": "(3) Az (1) bekezdés nem érinti a tagállamok általános szerződési jogát, például a gyermek által kötött szerződések érvényességére, formájára vagy hatályára vonatkozó szabályokat."
        },
        {
          "EN": "Article 9",
          "HU": "9. cikk"
        },
        {
          "EN": "Processing of special categories of personal data",
          "HU": "A személyes adatok különleges kategóriáinak kezelése"
        },
        {
          "EN": "1. Processing of personal data revealing racial or ethnic origin, political opinions, religious or philosophical beliefs, or trade union membership, and the processing of genetic data, biometric data for the purpose of uniquely identifying a natural person, data concerning health or data concerning a natural person's sex life or sexual orientation shall be prohibited.",
          "HU": "(1) A faji vagy etnikai származásra, politikai véleményre, vallási vagy világnézeti meggyőződésre vagy szakszervezeti tagságra utaló személyes adatok, valamint a természetes személyek egyedi azonosítását célzó genetikai és biometrikus adatok, az egészségügyi adatok és a természetes személyek szexuális életére vagy szexuális irányultságára vonatkozó személyes adatok kezelése tilos."
        },
        {
          "EN": "2. Paragraph 1 shall not apply if one of the following applies:",
          "HU": "(2) Az (1) bekezdés nem alkalmazandó abban az esetben, ha:"
        },
        {
          "EN": "(a) the data subject has given explicit consent to the processing of those personal data for one or more specified purposes, except where Union or Member State law provide that the prohibition referred to in paragraph 1 may not be lifted by the data subject;",
          "HU": "a) az érintett kifejezett hozzájárulását adta az említett személyes adatok egy vagy több konkrét célból történő kezeléséhez, kivéve, ha az uniós vagy tagállami jog úgy rendelkezik, hogy az (1) bekezdésben említett tilalom nem oldható fel az érintett hozzájárulásával;"
        },
        {
          "EN": "(b) processing is necessary for the purposes of carrying out the obligations and exercising specific rights of the controller or of the data subject in the field of employment and social security and social protection law in so far as it is authorised by Union or Member State law or a collective agreement pursuant to Member State law providing for appropriate safeguards for the fundamental rights and the interests of the data subject;",
          "HU": "b) az adatkezelés az adatkezelőnek vagy az érintettnek a foglalkoztatást, valamint a szociális biztonságot és szociális védelmet szabályozó jogi előírásokból fakadó kötelezettségei teljesítése és konkrét jogai gyakorlása érdekében szükséges, ha az érintett alapvető jogait és érdekeit védő megfelelő garanciákról is rendelkező uniós vagy tagállami jog, illetve a tagállami jog szerinti kollektív szerződés ezt lehetővé teszi;"
        },
        {
          "EN": "(c) processing is necessary to protect the vital interests of the data subject or of another natural person where the data subject is physically or legally incapable of giving consent;",
          "HU": "c) az adatkezelés az érintett vagy más természetes személy létfontosságú érdekeinek védelméhez szükséges, ha az érintett fizikai vagy jogi cselekvőképtelensége folytán nem képes a hozzájárulását megadni;"
        },
        {
          "EN": "(d) processing is carried out in the course of its legitimate activities with appropriate safeguards by a foundation, association or any other not-for-profit body with a political, philosophical, religious or trade union aim and on condition that the processing relates solely to the members or to former members of the body or to persons who have regular contact with it in connection with its purposes and that the personal data are not disclosed outside that body without the consent of the data subjects;",
          "HU": "d) az adatkezelés valamely politikai, világnézeti, vallási vagy szakszervezeti célú alapítvány, egyesület vagy bármely más nonprofit szervezet megfelelő garanciák mellett végzett jogszerű tevékenysége keretében történik, azzal a feltétellel, hogy az adatkezelés kizárólag az ilyen szerv jelenlegi vagy volt tagjaira, vagy olyan személyekre vonatkozik, akik a szervezettel rendszeres kapcsolatban állnak a szervezet céljaihoz kapcsolódóan, és hogy a személyes adatokat az érintettek hozzájárulása nélkül nem teszik hozzáférhetővé a szervezeten kívüli személyek számára;"
        },
        {
          "EN": "(e) processing relates to personal data which are manifestly made public by the data subject;",
          "HU": "e) az adatkezelés olyan személyes adatokra vonatkozik, amelyeket az érintett kifejezetten nyilvánosságra hozott;"
        },
        {
          "EN": "(f) processing is necessary for the establishment, exercise or defence of legal claims or whenever courts are acting in their judicial capacity;",
          "HU": "f) az adatkezelés jogi igények előterjesztéséhez, érvényesítéséhez, illetve védelméhez szükséges, vagy amikor a bíróságok igazságszolgáltatási feladatkörükben járnak el;"
        },
        {
          "EN": "(g) processing is necessary for reasons of substantial public interest, on the basis of Union or Member State law which shall be proportionate to the aim pursued, respect the essence of the right to data protection and provide for suitable and specific measures to safeguard the fundamental rights and the interests of the data subject;",
          "HU": "g) az adatkezelés jelentős közérdek miatt szükséges, uniós jog vagy tagállami jog alapján, amely arányos az elérni kívánt céllal, tiszteletben tartja a személyes adatok védelméhez való jog lényeges tartalmát, és az érintett alapvető jogainak és érdekeinek biztosítására megfelelő és konkrét intézkedéseket ír elő;"
        },
        {
          "EN": "(h) processing is necessary for the purposes of preventive or occupational medicine, for the assessment of the working capacity of the employee, medical diagnosis, the provision of health or social care or treatment or the management of health or social care systems and services on the basis of Union or Member State law or pursuant to contract with a health professional and subject to the conditions and safeguards referred to in paragraph 3;",
          "HU": "h) az adatkezelés megelőző egészségügyi vagy munkahelyi egészségügyi célokból, a munkavállaló munkavégzési képességének felmérése, orvosi diagnózis felállítása, egészségügyi vagy szociális ellátás vagy kezelés nyújtása, illetve egészségügyi vagy szociális rendszerek és szolgáltatások irányítása érdekében szükséges, uniós vagy tagállami jog alapján vagy egészségügyi szakemberrel kötött szerződés értelmében, továbbá a (3) bekezdésben említett feltételekre és garanciákra figyelemmel;"
        },
        {
          "EN": "(i) processing is necessary for reasons of public interest in the area of public health, such as protecting against serious cross-border threats to health or ensuring high standards of quality and safety of health care and of medicinal products or medical devices, on the basis of Union or Member State law which provides for suitable and specific measures to safeguard the rights and freedoms of the data subject, in particular professional secrecy;",
          "HU": "i) az adatkezelés a népegészségügy területét érintő olyan közérdekből szükséges, mint a határokon át terjedő súlyos egészségügyi veszélyekkel szembeni védelem vagy az egészségügyi ellátás, a gyógyszerek és az orvostechnikai eszközök magas színvonalának és biztonságának a biztosítása, és olyan uniós vagy tagállami jog alapján történik, amely megfelelő és konkrét intézkedésekről rendelkezik az érintett jogait és szabadságait védő garanciákra, és különösen a szakmai titoktartásra vonatkozóan;"
        },
        {
          "EN": "(j) processing is necessary for archiving purposes in the public interest, scientific or historical research purposes or statistical purposes in accordance with Article 89(1) based on Union or Member State law which shall be proportionate to the aim pursued, respect the essence of the right to data protection and provide for suitable and specific measures to safeguard the fundamental rights and the interests of the data subject.",
          "HU": "j) az adatkezelés a 89. cikk (1) bekezdésével összhangban a közérdekű archiválás céljából, tudományos és történelmi kutatási célból vagy statisztikai célból szükséges olyan uniós vagy tagállami jog alapján, amely arányos az elérni kívánt céllal, tiszteletben tartja a személyes adatok védelméhez való jog lényeges tartalmát, és az érintett alapvető jogainak és érdekeinek biztosítására megfelelő és konkrét intézkedéseket ír elő;"
        },
        {
          "EN": "3. Personal data referred to in paragraph 1 may be processed for the purposes referred to in point (h) of paragraph 2 when those data are processed by or under the responsibility of a professional subject to the obligation of professional secrecy under Union or Member State law or rules established by national competent bodies or by another person also subject to an obligation of secrecy under Union or Member State law or rules established by national competent bodies.",
          "HU": "(3) Az (1) bekezdésben említett személyes adatokat abban az esetben lehet a (2) bekezdés h) pontjában említett célokból kezelni, ha ezen adatok kezelése olyan szakember által vagy olyan szakember felelőssége mellett történik, aki uniós vagy tagállami jogban, illetve az arra hatáskörrel rendelkező tagállami szervek által megállapított szabályokban meghatározott szakmai titoktartási kötelezettség hatálya alatt áll, illetve olyan más személy által, aki szintén uniós vagy tagállami jogban, illetve az arra hatáskörrel rendelkező tagállami szervek által megállapított szabályokban meghatározott titoktartási kötelezettség hatálya alatt áll."
        },
        {
          "EN": "4. Member States may maintain or introduce further conditions, including limitations, with regard to the processing of genetic data, biometric data or data concerning health.",
          "HU": "(4) A tagállamok további feltételeket – köztük korlátozásokat – tarthatnak hatályban, illetve vezethetnek be a genetikai adatok, a biometrikus adatok és az egészségügyi adatok kezelésére vonatkozóan."
        },
        {
          "EN": "Article 10",
          "HU": "10. cikk"
        },
        {
          "EN": "Processing of personal data relating to criminal convictions and offences",
          "HU": "A büntetőjogi felelősség megállapítására vonatkozó határozatokra és a bűncselekményekre vonatkozó személyes adatok kezelése"
        },
        {
          "EN": "Processing of personal data relating to criminal convictions and offences or related security measures based on Article 6(1) shall be carried out only under the control of official authority or when the processing is authorised by Union or Member State law providing for appropriate safeguards for the rights and freedoms of data subjects.",
          "HU": "A büntetőjogi felelősség megállapítására vonatkozó határozatokra és a bűncselekményekre, illetve a kapcsolódó biztonsági intézkedésekre vonatkozó személyes adatoknak a 6. cikk (1) bekezdése alapján történő kezelésére kizárólag abban az esetben kerülhet sor, ha az közhatalmi szerv adatkezelésében történik, vagy ha az adatkezelést az érintett jogai és szabadságai tekintetében megfelelő garanciákat nyújtó uniós vagy tagállami jog lehetővé teszi."
        },
        {
          "EN": "Any comprehensive register of criminal convictions shall be kept only under the control of official authority.",
          "HU": "A büntetőjogi felelősség megállapítására vonatkozó határozatok teljes körű nyilvántartása csak közhatalmi szerv által végzett adatkezelés keretében történhet."
        },
        {
          "EN": "Article 11",
          "HU": "11. cikk"
        },
        {
          "EN": "Processing which does not require identification",
          "HU": "Azonosítást nem igénylő adatkezelés"
        },
        {
          "EN": "1. If the purposes for which a controller processes personal data do not or do no longer require the identification of a data subject by the controller, the controller shall not be obliged to maintain, acquire or process additional information in order to identify the data subject for the sole purpose of complying with this Regulation.",
          "HU": "(1) Ha azok a célok, amelyekből az adatkezelő a személyes adatokat kezeli, nem vagy már nem teszik szükségessé az érintettnek az adatkezelő általi azonosítását, az adatkezelő nem köteles kiegészítő információkat megőrizni, beszerezni vagy kezelni annak érdekében, hogy pusztán azért azonosítsa az érintettet, hogy megfeleljen e rendeletnek."
        },
        {
          "EN": "2. Where, in cases referred to in paragraph 1 of this Article, the controller is able to demonstrate that it is not in a position to identify the data subject, the controller shall inform the data subject accordingly, if possible.",
          "HU": "(2) Ha az e cikk (1) bekezdésében említett esetekben az adatkezelő bizonyítani tudja, hogy nincs abban a helyzetben, hogy azonosítsa az érintettet, erről lehetőség szerint őt megfelelő módon tájékoztatja."
        },
        {
          "EN": "In such cases, Articles 15 to 20 shall not apply except where the data subject, for the purpose of exercising his or her rights under those articles, provides additional information enabling his or her identification.",
          "HU": "Ilyen esetekben a 15–20. cikk nem alkalmazandó, kivéve, ha az érintett abból a célból, hogy az említett cikkek szerinti jogait gyakorolja, az azonosítását lehetővé tevő kiegészítő információkat nyújt."
        },
        {
          "EN": "CHAPTER III",
          "HU": "III. FEJEZET"
        },
        {
          "EN": "Rights of the data subject",
          "HU": "Az érintett jogai"
        },
        {
          "EN": "Section 1",
          "HU": "1. szakasz"
        },
        {
          "EN": "Transparency and modalities",
          "HU": "Átláthatóság és intézkedések"
        },
        {
          "EN": "Article 12",
          "HU": "12. cikk"
        },
        {
          "EN": "Transparent information, communication and modalities for the exercise of the rights of the data subject",
          "HU": "Átlátható tájékoztatás, kommunikáció és az érintett jogainak gyakorlására vonatkozó intézkedések"
        },
        {
          "EN": "1. The controller shall take appropriate measures to provide any information referred to in Articles 13 and 14 and any communication under Articles 15 to 22 and 34 relating to processing to the data subject in a concise, transparent, intelligible and easily accessible form, using clear and plain language, in particular for any information addressed specifically to a child.",
          "HU": "(1) Az adatkezelő megfelelő intézkedéseket hoz annak érdekében, hogy az érintett részére a személyes adatok kezelésére vonatkozó, a 13. és a 14. cikkben említett valamennyi információt és a 15–22. és 34. cikk szerinti minden egyes tájékoztatást tömör, átlátható, érthető és könnyen hozzáférhető formában, világosan és közérthetően megfogalmazva nyújtsa, különösen a gyermekeknek címzett bármely információ esetében."
        },
        {
          "EN": "The information shall be provided in writing, or by other means, including, where appropriate, by electronic means.",
          "HU": "Az információkat írásban vagy más módon – ideértve adott esetben az elektronikus utat is – kell megadni."
        },
        {
          "EN": "When requested by the data subject, the information may be provided orally, provided that the identity of the data subject is proven by other means.",
          "HU": "Az érintett kérésére szóbeli tájékoztatás is adható, feltéve, hogy más módon igazolták az érintett személyazonosságát."
        },
        {
          "EN": "2. The controller shall facilitate the exercise of data subject rights under Articles 15 to 22.",
          "HU": "(2) Az adatkezelő elősegíti az érintett 15–22. cikk szerinti jogainak a gyakorlását."
        },
        {
          "EN": "In the cases referred to in Article 11(2), the controller shall not refuse to act on the request of the data subject for exercising his or her rights under Articles 15 to 22, unless the controller demonstrates that it is not in a position to identify the data subject.",
          "HU": "A 11. cikk (2) bekezdésében említett esetekben az adatkezelő az érintett 15–22. cikk szerinti jogai gyakorlására irányuló kérelmének a teljesítését nem tagadhatja meg, kivéve, ha bizonyítja, hogy az érintettet nem áll módjában azonosítani."
        },
        {
          "EN": "3. The controller shall provide information on action taken on a request under Articles 15 to 22 to the data subject without undue delay and in any event within one month of receipt of the request.",
          "HU": "(3) Az adatkezelő indokolatlan késedelem nélkül, de mindenféleképpen a kérelem beérkezésétől számított egy hónapon belül tájékoztatja az érintettet a 15–22. cikk szerinti kérelem nyomán hozott intézkedésekről."
        },
        {
          "EN": "That period may be extended by two further months where necessary, taking into account the complexity and number of the requests.",
          "HU": "Szükség esetén, figyelembe véve a kérelem összetettségét és a kérelmek számát, ez a határidő további két hónappal meghosszabbítható."
        },
        {
          "EN": "The controller shall inform the data subject of any such extension within one month of receipt of the request, together with the reasons for the delay.",
          "HU": "A határidő meghosszabbításáról az adatkezelő a késedelem okainak megjelölésével a kérelem kézhezvételétől számított egy hónapon belül tájékoztatja az érintettet."
        },
        {
          "EN": "Where the data subject makes the request by electronic form means, the information shall be provided by electronic means where possible, unless otherwise requested by the data subject.",
          "HU": "Ha az érintett elektronikus úton nyújtotta be a kérelmet, a tájékoztatást lehetőség szerint elektronikus úton kell megadni, kivéve, ha az érintett azt másként kéri."
        },
        {
          "EN": "4. If the controller does not take action on the request of the data subject, the controller shall inform the data subject without delay and at the latest within one month of receipt of the request of the reasons for not taking action and on the possibility of lodging a complaint with a supervisory authority and seeking a judicial remedy.",
          "HU": "(4) Ha az adatkezelő nem tesz intézkedéseket az érintett kérelme nyomán, késedelem nélkül, de legkésőbb a kérelem beérkezésétől számított egy hónapon belül tájékoztatja az érintettet az intézkedés elmaradásának okairól, valamint arról, hogy az érintett panaszt nyújthat be valamely felügyeleti hatóságnál, és élhet bírósági jogorvoslati jogával."
        },
        {
          "EN": "5. Information provided under Articles 13 and 14 and any communication and any actions taken under Articles 15 to 22 and 34 shall be provided free of charge.",
          "HU": "(5) A 13. és 14. cikk szerinti információkat és a 15–22. és 34. cikk szerinti tájékoztatást és intézkedést díjmentesen kell biztosítani."
        },
        {
          "EN": "Where requests from a data subject are manifestly unfounded or excessive, in particular because of their repetitive character, the controller may either:",
          "HU": "Ha az érintett kérelme egyértelműen megalapozatlan vagy – különösen ismétlődő jellege miatt – túlzó, az adatkezelő, figyelemmel a kért információ vagy tájékoztatás nyújtásával vagy a kért intézkedés meghozatalával járó adminisztratív költségekre:"
        },
        {
          "EN": "(a) charge a reasonable fee taking into account the administrative costs of providing the information or communication or taking the action requested; or",
          "HU": "a) észszerű összegű díjat számíthat fel, vagy"
        },
        {
          "EN": "(b) refuse to act on the request.",
          "HU": "b) megtagadhatja a kérelem alapján történő intézkedést."
        },
        {
          "EN": "The controller shall bear the burden of demonstrating the manifestly unfounded or excessive character of the request.",
          "HU": "A kérelem egyértelműen megalapozatlan vagy túlzó jellegének bizonyítása az adatkezelőt terheli."
        },
        {
          "EN": "6. Without prejudice to Article 11, where the controller has reasonable doubts concerning the identity of the natural person making the request referred to in Articles 15 to 21, the controller may request the provision of additional information necessary to confirm the identity of the data subject.",
          "HU": "(6) A 11. cikk sérelme nélkül, ha az adatkezelőnek megalapozott kétségei vannak a 15–21. cikk szerinti kérelmet benyújtó természetes személy kilétével kapcsolatban, további, az érintett személyazonosságának megerősítéséhez szükséges információk nyújtását kérheti."
        },
        {
          "EN": "7. The information to be provided to data subjects pursuant to Articles 13 and 14 may be provided in combination with standardised icons in order to give in an easily visible, intelligible and clearly legible manner a meaningful overview of the intended processing.",
          "HU": "(7) Az érintett részére a 13. és 14. cikk alapján nyújtandó információkat szabványosított ikonokkal is ki lehet egészíteni annak érdekében, hogy a tervezett adatkezelésről az érintett jól látható, könnyen érthető és jól olvasható formában kapjon általános tájékoztatást."
        },
        {
          "EN": "Where the icons are presented electronically they shall be machine-readable.",
          "HU": "Az elektronikusan megjelenített ikonoknak géppel olvashatónak kell lenniük."
        },
        {
          "EN": "8. The Commission shall be empowered to adopt delegated acts in accordance with Article 92 for the purpose of determining the information to be presented by the icons and the procedures for providing standardised icons.",
          "HU": "(8) A Bizottság felhatalmazást kap arra, hogy a 92. cikkel összhangban felhatalmazáson alapuló jogi aktusokat fogadjon el az ikonok által megjelenítendő információk és a szabványosított ikonok biztosítására vonatkozó eljárások meghatározása céljából."
        },
        {
          "EN": "Section 2",
          "HU": "2. szakasz"
        },
        {
          "EN": "Information and access to personal data",
          "HU": "Tájékoztatás és a személyes adatokhoz való hozzáférés"
        },
        {
          "EN": "Article 13",
          "HU": "13. cikk"
        },
        {
          "EN": "Information to be provided where personal data are collected from the data subject",
          "HU": "Rendelkezésre bocsátandó információk, ha a személyes adatokat az érintettől gyűjtik"
        },
        {
          "EN": "1. Where personal data relating to a data subject are collected from the data subject, the controller shall, at the time when personal data are obtained, provide the data subject with all of the following information:",
          "HU": "(1) Ha az érintettre vonatkozó személyes adatokat az érintettől gyűjtik, az adatkezelő a személyes adatok megszerzésének időpontjában az érintett rendelkezésére bocsátja a következő információk mindegyikét:"
        },
        {
          "EN": "(a) the identity and the contact details of the controller and, where applicable, of the controller's representative;",
          "HU": "a) az adatkezelőnek és – ha van ilyen – az adatkezelő képviselőjének a kiléte és elérhetőségei;"
        },
        {
          "EN": "(b) the contact details of the data protection officer, where applicable;",
          "HU": "b) az adatvédelmi tisztviselő elérhetőségei, ha van ilyen;"
        },
        {
          "EN": "(c) the purposes of the processing for which the personal data are intended as well as the legal basis for the processing;",
          "HU": "c) a személyes adatok tervezett kezelésének célja, valamint az adatkezelés jogalapja;"
        },
        {
          "EN": "(d) where the processing is based on point (f) of Article 6(1), the legitimate interests pursued by the controller or by a third party;",
          "HU": "d) a 6. cikk (1) bekezdésének f) pontján alapuló adatkezelés esetén, az adatkezelő vagy harmadik fél jogos érdekei;"
        },
        {
          "EN": "(e) the recipients or categories of recipients of the personal data, if any;",
          "HU": "e) adott esetben a személyes adatok címzettjei, illetve a címzettek kategóriái, ha van ilyen;"
        },
        {
          "EN": "(f) where applicable, the fact that the controller intends to transfer personal data to a third country or international organisation and the existence or absence of an adequacy decision by the Commission, or in the case of transfers referred to in Article 46 or 47, or the second subparagraph of Article 49(1), reference to the appropriate or suitable safeguards and the means by which to obtain a copy of them or where they have been made available.",
          "HU": "f) adott esetben annak ténye, hogy az adatkezelő harmadik országba vagy nemzetközi szervezet részére kívánja továbbítani a személyes adatokat, továbbá a Bizottság megfelelőségi határozatának léte vagy annak hiánya, vagy a 46. cikkben, a 47. cikkben vagy a 49. cikk (1) bekezdésének második albekezdésében említett adattovábbítás esetén a megfelelő és alkalmas garanciák megjelölése, valamint az azok másolatának megszerzésére szolgáló módokra vagy az azok elérhetőségére való hivatkozás."
        },
        {
          "EN": "2. In addition to the information referred to in paragraph 1, the controller shall, at the time when personal data are obtained, provide the data subject with the following further information necessary to ensure fair and transparent processing:",
          "HU": "(2) Az (1) bekezdésben említett információk mellett az adatkezelő a személyes adatok megszerzésének időpontjában, annak érdekében, hogy a tisztességes és átlátható adatkezelést biztosítsa, az érintettet a következő kiegészítő információkról tájékoztatja:"
        },
        {
          "EN": "(a) the period for which the personal data will be stored, or if that is not possible, the criteria used to determine that period;",
          "HU": "a) a személyes adatok tárolásának időtartamáról, vagy ha ez nem lehetséges, ezen időtartam meghatározásának szempontjairól;"
        },
        {
          "EN": "(b) the existence of the right to request from the controller access to and rectification or erasure of personal data or restriction of processing concerning the data subject or to object to processing as well as the right to data portability;",
          "HU": "b) az érintett azon jogáról, hogy kérelmezheti az adatkezelőtől a rá vonatkozó személyes adatokhoz való hozzáférést, azok helyesbítését, törlését vagy kezelésének korlátozását, és tiltakozhat az ilyen személyes adatok kezelése ellen, valamint az érintett adathordozhatósághoz való jogáról;"
        },
        {
          "EN": "(c) where the processing is based on point (a) of Article 6(1) or point (a) of Article 9(2), the existence of the right to withdraw consent at any time, without affecting the lawfulness of processing based on consent before its withdrawal;",
          "HU": "c) a 6. cikk (1) bekezdésének a) pontján vagy a 9. cikk (2) bekezdésének a) pontján alapuló adatkezelés esetén a hozzájárulás bármely időpontban történő visszavonásához való jog, amely nem érinti a visszavonás előtt a hozzájárulás alapján végrehajtott adatkezelés jogszerűségét;"
        },
        {
          "EN": "(d) the right to lodge a complaint with a supervisory authority;",
          "HU": "d) a felügyeleti hatósághoz címzett panasz benyújtásának jogáról;"
        },
        {
          "EN": "(e) whether the provision of personal data is a statutory or contractual requirement, or a requirement necessary to enter into a contract, as well as whether the data subject is obliged to provide the personal data and of the possible consequences of failure to provide such data;",
          "HU": "e) arról, hogy a személyes adat szolgáltatása jogszabályon vagy szerződéses kötelezettségen alapul vagy szerződés kötésének előfeltétele-e, valamint hogy az érintett köteles-e a személyes adatokat megadni, továbbá hogy milyen lehetséges következményeikkel járhat az adatszolgáltatás elmaradása;"
        },
        {
          "EN": "(f) the existence of automated decision-making, including profiling, referred to in Article 22(1) and (4) and, at least in those cases, meaningful information about the logic involved, as well as the significance and the envisaged consequences of such processing for the data subject.",
          "HU": "f) a 22. cikk (1) és (4) bekezdésében említett automatizált döntéshozatal ténye, ideértve a profilalkotást is, valamint legalább ezekben az esetekben az alkalmazott logikára és arra vonatkozóan érthető információk, hogy az ilyen adatkezelés milyen jelentőséggel, és az érintettre nézve milyen várható következményekkel bír."
        },
        {
          "EN": "3. Where the controller intends to further process the personal data for a purpose other than that for which the personal data were collected, the controller shall provide the data subject prior to that further processing with information on that other purpose and with any relevant further information as referred to in paragraph 2.",
          "HU": "(3) Ha az adatkezelő a személyes adatokon a gyűjtésük céljától eltérő célból további adatkezelést kíván végezni, a további adatkezelést megelőzően tájékoztatnia kell az érintettet erről az eltérő célról és a (2) bekezdésben említett minden releváns kiegészítő információról."
        },
        {
          "EN": "4. Paragraphs 1, 2 and 3 shall not apply where and insofar as the data subject already has the information.",
          "HU": "(4) Az (1), (2) és (3) bekezdés nem alkalmazandó, ha és amilyen mértékben az érintett már rendelkezik az információkkal."
        },
        {
          "EN": "Article 14",
          "HU": "14. cikk"
        },
        {
          "EN": "Information to be provided where personal data have not been obtained from the data subject",
          "HU": "Rendelkezésre bocsátandó információk, ha a személyes adatokat nem az érintettől szerezték meg"
        },
        {
          "EN": "1. Where personal data have not been obtained from the data subject, the controller shall provide the data subject with the following information:",
          "HU": "(1) Ha a személyes adatokat nem az érintettől szerezték meg, az adatkezelő az érintett rendelkezésére bocsátja a következő információkat:"
        },
        {
          "EN": "(a) the identity and the contact details of the controller and, where applicable, of the controller's representative;",
          "HU": "a) az adatkezelőnek és – ha van ilyen – az adatkezelő képviselőjének a kiléte és elérhetőségei;"
        },
        {
          "EN": "(b) the contact details of the data protection officer, where applicable;",
          "HU": "b) az adatvédelmi tisztviselő elérhetőségei, ha van ilyen;"
        },
        {
          "EN": "(c) the purposes of the processing for which the personal data are intended as well as the legal basis for the processing;",
          "HU": "c) a személyes adatok tervezett kezelésének célja, valamint az adatkezelés jogalapja;"
        },
        {
          "EN": "(d) the categories of personal data concerned;",
          "HU": "d) az érintett személyes adatok kategóriái;"
        },
        {
          "EN": "(e) the recipients or categories of recipients of the personal data, if any;",
          "HU": "e) a személyes adatok címzettjei, illetve a címzettek kategóriái, ha van ilyen;"
        },
        {
          "EN": "(f) where applicable, that the controller intends to transfer personal data to a recipient in a third country or international organisation and the existence or absence of an adequacy decision by the Commission, or in the case of transfers referred to in Article 46 or 47, or the second subparagraph of Article 49(1), reference to the appropriate or suitable safeguards and the means to obtain a copy of them or where they have been made available.",
          "HU": "f) adott esetben annak ténye, hogy az adatkezelő valamely harmadik országbeli címzett vagy valamely nemzetközi szervezet részére kívánja továbbítani a személyes adatokat, továbbá a Bizottság megfelelőségi határozatának léte vagy annak hiánya, vagy a 46. cikkben, a 47. cikkben vagy a 49. cikk (1) bekezdésének második albekezdésében említett adattovábbítás esetén a megfelelő és alkalmas garanciák megjelölése, valamint az ezek másolatának megszerzésére szolgáló módokra vagy az elérhetőségükre való hivatkozás."
        },
        {
          "EN": "2. In addition to the information referred to in paragraph 1, the controller shall provide the data subject with the following information necessary to ensure fair and transparent processing in respect of the data subject:",
          "HU": "(2) Az (1) bekezdésben említett információk mellett az adatkezelő az érintett rendelkezésére bocsátja az érintettre nézve tisztességes és átlátható adatkezelés biztosításához szükséges következő kiegészítő információkat:"
        },
        {
          "EN": "(a) the period for which the personal data will be stored, or if that is not possible, the criteria used to determine that period;",
          "HU": "a) a személyes adatok tárolásának időtartama, vagy ha ez nem lehetséges, ezen időtartam meghatározásának szempontjai;"
        },
        {
          "EN": "(b) where the processing is based on point (f) of Article 6(1), the legitimate interests pursued by the controller or by a third party;",
          "HU": "b) ha az adatkezelés a 6. cikk (1) bekezdésének f) pontján alapul, az adatkezelő vagy harmadik fél jogos érdekeiről;"
        },
        {
          "EN": "(c) the existence of the right to request from the controller access to and rectification or erasure of personal data or restriction of processing concerning the data subject and to object to processing as well as the right to data portability;",
          "HU": "c) az érintett azon joga, hogy kérelmezheti az adatkezelőtől a rá vonatkozó személyes adatokhoz való hozzáférést, azok helyesbítését, törlését vagy kezelésének korlátozását, és tiltakozhat a személyes adatok kezelése ellen, valamint az érintett adathordozhatósághoz való joga;"
        },
        {
          "EN": "(d) where processing is based on point (a) of Article 6(1) or point (a) of Article 9(2), the existence of the right to withdraw consent at any time, without affecting the lawfulness of processing based on consent before its withdrawal;",
          "HU": "d) a 6. cikk (1) bekezdésének a) pontján vagy a 9. cikk (2) bekezdésének a) pontján alapuló adatkezelés esetén a hozzájárulás bármely időpontban való visszavonásához való jog, amely nem érinti a visszavonás előtt a hozzájárulás alapján végrehajtott adatkezelés jogszerűségét;"
        },
        {
          "EN": "(e) the right to lodge a complaint with a supervisory authority;",
          "HU": "e) a valamely felügyeleti hatósághoz címzett panasz benyújtásának joga;"
        },
        {
          "EN": "(f) from which source the personal data originate, and if applicable, whether it came from publicly accessible sources;",
          "HU": "f) a személyes adatok forrása és adott esetben az, hogy az adatok nyilvánosan hozzáférhető forrásokból származnak-e; és"
        },
        {
          "EN": "(g) the existence of automated decision-making, including profiling, referred to in Article 22(1) and (4) and, at least in those cases, meaningful information about the logic involved, as well as the significance and the envisaged consequences of such processing for the data subject.",
          "HU": "g) a 22. cikk (1) és (4) bekezdésében említett automatizált döntéshozatal ténye, ideértve a profilalkotást is, valamint legalább ezekben az esetekben az alkalmazott logikára és arra vonatkozó érthető információk, hogy az ilyen adatkezelés milyen jelentőséggel, és az érintettre nézve milyen várható következményekkel bír."
        },
        {
          "EN": "3. The controller shall provide the information referred to in paragraphs 1 and 2:",
          "HU": "(3) Az adatkezelő az (1) és (2) bekezdés szerinti tájékoztatást az alábbiak szerint adja meg:"
        },
        {
          "EN": "(a) within a reasonable period after obtaining the personal data, but at the latest within one month, having regard to the specific circumstances in which the personal data are processed;",
          "HU": "a) a személyes adatok kezelésének konkrét körülményeit tekintetbe véve, a személyes adatok megszerzésétől számított észszerű határidőn, de legkésőbb egy hónapon belül;"
        },
        {
          "EN": "(b) if the personal data are to be used for communication with the data subject, at the latest at the time of the first communication to that data subject; or",
          "HU": "b) ha a személyes adatokat az érintettel való kapcsolattartás céljára használják, legalább az érintettel való első kapcsolatfelvétel alkalmával; vagy"
        },
        {
          "EN": "(c) if a disclosure to another recipient is envisaged, at the latest when the personal data are first disclosed.",
          "HU": "c) ha várhatóan más címzettel is közlik az adatokat, legkésőbb a személyes adatok első alkalommal való közlésekor."
        },
        {
          "EN": "4. Where the controller intends to further process the personal data for a purpose other than that for which the personal data were obtained, the controller shall provide the data subject prior to that further processing with information on that other purpose and with any relevant further information as referred to in paragraph 2.",
          "HU": "(4) Ha az adatkezelő a személyes adatokon a megszerzésük céljától eltérő célból további adatkezelést kíván végezni, a további adatkezelést megelőzően tájékoztatnia kell az érintettet erről az eltérő célról és a (2) bekezdésben említett minden releváns kiegészítő információról."
        },
        {
          "EN": "5. Paragraphs 1 to 4 shall not apply where and insofar as:",
          "HU": "(5) Az (1)–(4) bekezdést nem kell alkalmazni, ha és amilyen mértékben:"
        },
        {
          "EN": "(a) the data subject already has the information;",
          "HU": "a) az érintett már rendelkezik az információkkal;"
        },
        {
          "EN": "(b) the provision of such information proves impossible or would involve a disproportionate effort, in particular for processing for archiving purposes in the public interest, scientific or historical research purposes or statistical purposes, subject to the conditions and safeguards referred to in Article 89(1) or in so far as the obligation referred to in paragraph 1 of this Article is likely to render impossible or seriously impair the achievement of the objectives of that processing.",
          "HU": "b) a szóban forgó információk rendelkezésre bocsátása lehetetlennek bizonyul, vagy aránytalanul nagy erőfeszítést igényelne, különösen a közérdekű archiválás céljából, tudományos és történelmi kutatási célból vagy statisztikai célból, a 89. cikk (1) bekezdésében foglalt feltételek és garanciák figyelembevételével végzett adatkezelés esetében, vagy amennyiben az e cikk (1) bekezdésében említett kötelezettség valószínűsíthetően lehetetlenné tenné vagy komolyan veszélyeztetné ezen adatkezelés céljainak elérését."
        },
        {
          "EN": "In such cases the controller shall take appropriate measures to protect the data subject's rights and freedoms and legitimate interests, including making the information publicly available;",
          "HU": "Ilyen esetekben az adatkezelőnek megfelelő intézkedéseket kell hoznia – az információk nyilvánosan elérhetővé tételét is ideértve – az érintett jogainak, szabadságainak és jogos érdekeinek védelme érdekében;"
        },
        {
          "EN": "(c) obtaining or disclosure is expressly laid down by Union or Member State law to which the controller is subject and which provides appropriate measures to protect the data subject's legitimate interests; or",
          "HU": "c) az adat megszerzését vagy közlését kifejezetten előírja az adatkezelőre alkalmazandó uniós vagy tagállami jog, amely az érintett jogos érdekeinek védelmét szolgáló megfelelő intézkedésekről rendelkezik; vagy"
        },
        {
          "EN": "(d) where the personal data must remain confidential subject to an obligation of professional secrecy regulated by Union or Member State law, including a statutory obligation of secrecy.",
          "HU": "d) a személyes adatoknak valamely uniós vagy tagállami jogban előírt szakmai titoktartási kötelezettség alapján, ideértve a jogszabályon alapuló titoktartási kötelezettséget is, bizalmasnak kell maradnia."
        },
        {
          "EN": "Article 15",
          "HU": "15. cikk"
        },
        {
          "EN": "Right of access by the data subject",
          "HU": "Az érintett hozzáférési joga"
        },
        {
          "EN": "1. The data subject shall have the right to obtain from the controller confirmation as to whether or not personal data concerning him or her are being processed, and, where that is the case, access to the personal data and the following information:",
          "HU": "(1) Az érintett jogosult arra, hogy az adatkezelőtől visszajelzést kapjon arra vonatkozóan, hogy személyes adatainak kezelése folyamatban van-e, és ha ilyen adatkezelés folyamatban van, jogosult arra, hogy a személyes adatokhoz és a következő információkhoz hozzáférést kapjon:"
        },
        {
          "EN": "(a) the purposes of the processing;",
          "HU": "a) az adatkezelés céljai;"
        },
        {
          "EN": "(b) the categories of personal data concerned;",
          "HU": "b) az érintett személyes adatok kategóriái;"
        },
        {
          "EN": "(c) the recipients or categories of recipient to whom the personal data have been or will be disclosed, in particular recipients in third countries or international organisations;",
          "HU": "c) azon címzettek vagy címzettek kategóriái, akikkel, illetve amelyekkel a személyes adatokat közölték vagy közölni fogják, ideértve különösen a harmadik országbeli címzetteket, illetve a nemzetközi szervezeteket;"
        },
        {
          "EN": "(d) where possible, the envisaged period for which the personal data will be stored, or, if not possible, the criteria used to determine that period;",
          "HU": "d) adott esetben a személyes adatok tárolásának tervezett időtartama, vagy ha ez nem lehetséges, ezen időtartam meghatározásának szempontjai;"
        },
        {
          "EN": "(e) the existence of the right to request from the controller rectification or erasure of personal data or restriction of processing of personal data concerning the data subject or to object to such processing;",
          "HU": "e) az érintett azon joga, hogy kérelmezheti az adatkezelőtől a rá vonatkozó személyes adatok helyesbítését, törlését vagy kezelésének korlátozását, és tiltakozhat az ilyen személyes adatok kezelése ellen;"
        },
        {
          "EN": "(f) the right to lodge a complaint with a supervisory authority;",
          "HU": "f) a valamely felügyeleti hatósághoz címzett panasz benyújtásának joga;"
        },
        {
          "EN": "(g) where the personal data are not collected from the data subject, any available information as to their source;",
          "HU": "g) ha az adatokat nem az érintettől gyűjtötték, a forrásukra vonatkozó minden elérhető információ;"
        },
        {
          "EN": "(h) the existence of automated decision-making, including profiling, referred to in Article 22(1) and (4) and, at least in those cases, meaningful information about the logic involved, as well as the significance and the envisaged consequences of such processing for the data subject.",
          "HU": "h) a 22. cikk (1) és (4) bekezdésében említett automatizált döntéshozatal ténye, ideértve a profilalkotást is, valamint legalább ezekben az esetekben az alkalmazott logikára és arra vonatkozó érthető információk, hogy az ilyen adatkezelés milyen jelentőséggel bír, és az érintettre nézve milyen várható következményekkel jár."
        },
        {
          "EN": "2. Where personal data are transferred to a third country or to an international organisation, the data subject shall have the right to be informed of the appropriate safeguards pursuant to Article 46 relating to the transfer.",
          "HU": "(2) Ha személyes adatoknak harmadik országba vagy nemzetközi szervezet részére történő továbbítására kerül sor, az érintett jogosult arra, hogy tájékoztatást kapjon a továbbításra vonatkozóan a 46. cikk szerinti megfelelő garanciákról."
        },
        {
          "EN": "3. The controller shall provide a copy of the personal data undergoing processing.",
          "HU": "(3) Az adatkezelő az adatkezelés tárgyát képező személyes adatok másolatát az érintett rendelkezésére bocsátja."
        },
        {
          "EN": "For any further copies requested by the data subject, the controller may charge a reasonable fee based on administrative costs.",
          "HU": "Az érintett által kért további másolatokért az adatkezelő az adminisztratív költségeken alapuló, észszerű mértékű díjat számíthat fel."
        },
        {
          "EN": "Where the data subject makes the request by electronic means, and unless otherwise requested by the data subject, the information shall be provided in a commonly used electronic form.",
          "HU": "Ha az érintett elektronikus úton nyújtotta be a kérelmet, az információkat széles körben használt elektronikus formátumban kell rendelkezésre bocsátani, kivéve, ha az érintett másként kéri."
        },
        {
          "EN": "4. The right to obtain a copy referred to in paragraph 3 shall not adversely affect the rights and freedoms of others.",
          "HU": "(4) A (3) bekezdésben említett, másolat igénylésére vonatkozó jog nem érintheti hátrányosan mások jogait és szabadságait."
        },
        {
          "EN": "Section 3",
          "HU": "3. szakasz"
        },
        {
          "EN": "Rectification and erasure",
          "HU": "Helyesbítés és törlés"
        },
        {
          "EN": "Article 16",
          "HU": "16. cikk"
        },
        {
          "EN": "Right to rectification",
          "HU": "A helyesbítéshez való jog"
        },
        {
          "EN": "The data subject shall have the right to obtain from the controller without undue delay the rectification of inaccurate personal data concerning him or her.",
          "HU": "Az érintett jogosult arra, hogy kérésére az adatkezelő indokolatlan késedelem nélkül helyesbítse a rá vonatkozó pontatlan személyes adatokat."
        },
        {
          "EN": "Taking into account the purposes of the processing, the data subject shall have the right to have incomplete personal data completed, including by means of providing a supplementary statement.",
          "HU": "Figyelembe véve az adatkezelés célját, az érintett jogosult arra, hogy kérje a hiányos személyes adatok – egyebek mellett kiegészítő nyilatkozat útján történő – kiegészítését."
        },
        {
          "EN": "Article 17",
          "HU": "17. cikk"
        },
        {
          "EN": "Right to erasure (‘right to be forgotten’)",
          "HU": "A törléshez való jog („az elfeledtetéshez való jog”)"
        },
        {
          "EN": "1. The data subject shall have the right to obtain from the controller the erasure of personal data concerning him or her without undue delay and the controller shall have the obligation to erase personal data without undue delay where one of the following grounds applies:",
          "HU": "(1) Az érintett jogosult arra, hogy kérésére az adatkezelő indokolatlan késedelem nélkül törölje a rá vonatkozó személyes adatokat, az adatkezelő pedig köteles arra, hogy az érintettre vonatkozó személyes adatokat indokolatlan késedelem nélkül törölje, ha az alábbi indokok valamelyike fennáll:"
        },
        {
          "EN": "(a) the personal data are no longer necessary in relation to the purposes for which they were collected or otherwise processed;",
          "HU": "a) a személyes adatokra már nincs szükség abból a célból, amelyből azokat gyűjtötték vagy más módon kezelték;"
        },
        {
          "EN": "(b) the data subject withdraws consent on which the processing is based according to point (a) of Article 6(1), or point (a) of Article 9(2), and where there is no other legal ground for the processing;",
          "HU": "b) az érintett visszavonja a 6. cikk (1) bekezdésének a) pontja vagy a 9. cikk (2) bekezdésének a) pontja értelmében az adatkezelés alapját képező hozzájárulását, és az adatkezelésnek nincs más jogalapja;"
        },
        {
          "EN": "(c) the data subject objects to the processing pursuant to Article 21(1) and there are no overriding legitimate grounds for the processing, or the data subject objects to the processing pursuant to Article 21(2);",
          "HU": "c) az érintett a 21. cikk (1) bekezdése alapján tiltakozik az adatkezeléseó ellen, és nincs elsőbbséget élvező jogszerű ok az adatkezelésre, vagy az érintett a 21. cikk (2) bekezdése alapján tiltakozik az adatkezelés ellen;"
        },
        {
          "EN": "(d) the personal data have been unlawfully processed;",
          "HU": "d) a személyes adatokat jogellenesen kezelték;"
        },
        {
          "EN": "(e) the personal data have to be erased for compliance with a legal obligation in Union or Member State law to which the controller is subject;",
          "HU": "e) a személyes adatokat az adatkezelőre alkalmazandó uniós vagy tagállami jogban előírt jogi kötelezettség teljesítéséhez törölni kell;"
        },
        {
          "EN": "(f) the personal data have been collected in relation to the offer of information society services referred to in Article 8(1).",
          "HU": "f) a személyes adatok gyűjtésére a 8. cikk (1) bekezdésében említett, információs társadalommal összefüggő szolgáltatások kínálásával kapcsolatosan került sor."
        },
        {
          "EN": "2. Where the controller has made the personal data public and is obliged pursuant to paragraph 1 to erase the personal data, the controller, taking account of available technology and the cost of implementation, shall take reasonable steps, including technical measures, to inform controllers which are processing the personal data that the data subject has requested the erasure by such controllers of any links to, or copy or replication of, those personal data.",
          "HU": "(2) Ha az adatkezelő nyilvánosságra hozta a személyes adatot, és az (1) bekezdés értelmében azt törölni köteles, az elérhető technológia és a megvalósítás költségeinek figyelembevételével megteszi az észszerűen elvárható lépéseket – ideértve technikai intézkedéseket – annak érdekében, hogy tájékoztassa az adatokat kezelő adatkezelőket, hogy az érintett kérelmezte tőlük a szóban forgó személyes adatokra mutató linkek vagy e személyes adatok másolatának, illetve másodpéldányának törlését."
        },
        {
          "EN": "3. Paragraphs 1 and 2 shall not apply to the extent that processing is necessary:",
          "HU": "(3) Az (1) és (2) bekezdés nem alkalmazandó, amennyiben az adatkezelés szükséges:"
        },
        {
          "EN": "(a) for exercising the right of freedom of expression and information;",
          "HU": "a) a véleménynyilvánítás szabadságához és a tájékozódáshoz való jog gyakorlása céljából;"
        },
        {
          "EN": "(b) for compliance with a legal obligation which requires processing by Union or Member State law to which the controller is subject or for the performance of a task carried out in the public interest or in the exercise of official authority vested in the controller;",
          "HU": "b) a személyes adatok kezelését előíró, az adatkezelőre alkalmazandó uniós vagy tagállami jog szerinti kötelezettség teljesítése, illetve közérdekből vagy az adatkezelőre ruházott közhatalmi jogosítvány gyakorlása keretében végzett feladat végrehajtása céljából;"
        },
        {
          "EN": "(c) for reasons of public interest in the area of public health in accordance with points (h) and (i) of Article 9(2) as well as Article 9(3);",
          "HU": "c) a 9. cikk (2) bekezdése h) és i) pontjának, valamint a 9. cikk (3) bekezdésének megfelelően a népegészségügy területét érintő közérdek alapján;"
        },
        {
          "EN": "(d) for archiving purposes in the public interest, scientific or historical research purposes or statistical purposes in accordance with Article 89(1) in so far as the right referred to in paragraph 1 is likely to render impossible or seriously impair the achievement of the objectives of that processing; or",
          "HU": "d) a 89. cikk (1) bekezdésével összhangban a közérdekű archiválás céljából, tudományos és történelmi kutatási célból vagy statisztikai célból, amennyiben az (1) bekezdésben említett jog valószínűsíthetően lehetetlenné tenné vagy komolyan veszélyeztetné ezt az adatkezelést; vagy"
        },
        {
          "EN": "(e) for the establishment, exercise or defence of legal claims.",
          "HU": "e) jogi igények előterjesztéséhez, érvényesítéséhez, illetve védelméhez."
        },
        {
          "EN": "Article 18",
          "HU": "18. cikk"
        },
        {
          "EN": "Right to restriction of processing",
          "HU": "Az adatkezelés korlátozásához való jog"
        },
        {
          "EN": "1. The data subject shall have the right to obtain from the controller restriction of processing where one of the following applies:",
          "HU": "(1) Az érintett jogosult arra, hogy kérésére az adatkezelő korlátozza az adatkezelést, ha az alábbiak valamelyike teljesül:"
        },
        {
          "EN": "(a) the accuracy of the personal data is contested by the data subject, for a period enabling the controller to verify the accuracy of the personal data;",
          "HU": "a) az érintett vitatja a személyes adatok pontosságát, ez esetben a korlátozás arra az időtartamra vonatkozik, amely lehetővé teszi, hogy az adatkezelő ellenőrizze a személyes adatok pontosságát;"
        },
        {
          "EN": "(b) the processing is unlawful and the data subject opposes the erasure of the personal data and requests the restriction of their use instead;",
          "HU": "b) az adatkezelés jogellenes, és az érintett ellenzi az adatok törlését, és ehelyett kéri azok felhasználásának korlátozását;"
        },
        {
          "EN": "(c) the controller no longer needs the personal data for the purposes of the processing, but they are required by the data subject for the establishment, exercise or defence of legal claims;",
          "HU": "c) az adatkezelőnek már nincs szüksége a személyes adatokra adatkezelés céljából, de az érintett igényli azokat jogi igények előterjesztéséhez, érvényesítéséhez vagy védelméhez; vagy"
        },
        {
          "EN": "(d) the data subject has objected to processing pursuant to Article 21(1) pending the verification whether the legitimate grounds of the controller override those of the data subject.",
          "HU": "d) az érintett a 21. cikk (1) bekezdése szerint tiltakozott az adatkezelés ellen; ez esetben a korlátozás arra az időtartamra vonatkozik, amíg megállapításra nem kerül, hogy az adatkezelő jogos indokai elsőbbséget élveznek-e az érintett jogos indokaival szemben."
        },
        {
          "EN": "2. Where processing has been restricted under paragraph 1, such personal data shall, with the exception of storage, only be processed with the data subject's consent or for the establishment, exercise or defence of legal claims or for the protection of the rights of another natural or legal person or for reasons of important public interest of the Union or of a Member State.",
          "HU": "(2) Ha az adatkezelés az (1) bekezdés alapján korlátozás alá esik, az ilyen személyes adatokat a tárolás kivételével csak az érintett hozzájárulásával, vagy jogi igények előterjesztéséhez, érvényesítéséhez vagy védelméhez, vagy más természetes vagy jogi személy jogainak védelme érdekében, vagy az Unió, illetve valamely tagállam fontos közérdekéből lehet kezelni."
        },
        {
          "EN": "3. A data subject who has obtained restriction of processing pursuant to paragraph 1 shall be informed by the controller before the restriction of processing is lifted.",
          "HU": "(3) Az adatkezelő az érintettet, akinek a kérésére az (1) bekezdés alapján korlátozták az adatkezelést, az adatkezelés korlátozásának feloldásáról előzetesen tájékoztatja."
        },
        {
          "EN": "Article 19",
          "HU": "19. cikk"
        },
        {
          "EN": "Notification obligation regarding rectification or erasure of personal data or restriction of processing",
          "HU": "A személyes adatok helyesbítéséhez vagy törléséhez, illetve az adatkezelés korlátozásához kapcsolódó értesítési kötelezettség"
        },
        {
          "EN": "The controller shall communicate any rectification or erasure of personal data or restriction of processing carried out in accordance with Article 16, Article 17(1) and Article 18 to each recipient to whom the personal data have been disclosed, unless this proves impossible or involves disproportionate effort.",
          "HU": "Az adatkezelő minden olyan címzettet tájékoztat a 16. cikk, a 17. cikk (1) bekezdése, illetve a 18. cikk szerinti valamennyi helyesbítésről, törlésről vagy adatkezelés-korlátozásról, akivel, illetve amellyel a személyes adatot közölték, kivéve, ha ez lehetetlennek bizonyul, vagy aránytalanul nagy erőfeszítést igényel."
        },
        {
          "EN": "The controller shall inform the data subject about those recipients if the data subject requests it.",
          "HU": "Az érintettet kérésére az adatkezelő tájékoztatja e címzettekről."
        },
        {
          "EN": "Article 20",
          "HU": "20. cikk"
        },
        {
          "EN": "Right to data portability",
          "HU": "Az adathordozhatósághoz való jog"
        },
        {
          "EN": "1. The data subject shall have the right to receive the personal data concerning him or her, which he or she has provided to a controller, in a structured, commonly used and machine-readable format and have the right to transmit those data to another controller without hindrance from the controller to which the personal data have been provided, where:",
          "HU": "(1) Az érintett jogosult arra, hogy a rá vonatkozó, általa egy adatkezelő rendelkezésére bocsátott személyes adatokat tagolt, széles körben használt, géppel olvasható formátumban megkapja, továbbá jogosult arra, hogy ezeket az adatokat egy másik adatkezelőnek továbbítsa anélkül, hogy ezt akadályozná az az adatkezelő, amelynek a személyes adatokat a rendelkezésére bocsátotta, ha:"
        },
        {
          "EN": "(a) the processing is based on consent pursuant to point (a) of Article 6(1) or point (a) of Article 9(2) or on a contract pursuant to point (b) of Article 6(1); and",
          "HU": "a) az adatkezelés a 6. cikk (1) bekezdésének a) pontja vagy a 9. cikk (2) bekezdésének a) pontja szerinti hozzájáruláson, vagy a 6. cikk (1) bekezdésének b) pontja szerinti szerződésen alapul; és"
        },
        {
          "EN": "(b) the processing is carried out by automated means.",
          "HU": "b) az adatkezelés automatizált módon történik."
        },
        {
          "EN": "2. In exercising his or her right to data portability pursuant to paragraph 1, the data subject shall have the right to have the personal data transmitted directly from one controller to another, where technically feasible.",
          "HU": "(2) Az adatok hordozhatóságához való jog (1) bekezdés szerinti gyakorlása során az érintett jogosult arra, hogy – ha ez technikailag megvalósítható – kérje a személyes adatok adatkezelők közötti közvetlen továbbítását."
        },
        {
          "EN": "3. The exercise of the right referred to in paragraph 1 of this Article shall be without prejudice to Article 17.",
          "HU": "(3) Az e cikk (1) bekezdésében említett jog gyakorlása nem sértheti a 17. cikket."
        },
        {
          "EN": "That right shall not apply to processing necessary for the performance of a task carried out in the public interest or in the exercise of official authority vested in the controller.",
          "HU": "Az említett jog nem alkalmazandó abban az esetben, ha az adatkezelés közérdekű vagy az adatkezelőre ruházott közhatalmi jogosítványai gyakorlásának keretében végzett feladat végrehajtásához szükséges."
        },
        {
          "EN": "4. The right referred to in paragraph 1 shall not adversely affect the rights and freedoms of others.",
          "HU": "(4) Az (1) bekezdésben említett jog nem érintheti hátrányosan mások jogait és szabadságait."
        },
        {
          "EN": "Section 4",
          "HU": "4. szakasz"
        },
        {
          "EN": "Right to object and automated individual decision-making",
          "HU": "A tiltakozáshoz való jog és automatizált döntéshozatal egyedi ügyekben"
        },
        {
          "EN": "Article 21",
          "HU": "21. cikk"
        },
        {
          "EN": "Right to object",
          "HU": "A tiltakozáshoz való jog"
        },
        {
          "EN": "1. The data subject shall have the right to object, on grounds relating to his or her particular situation, at any time to processing of personal data concerning him or her which is based on point (e) or (f) of Article 6(1), including profiling based on those provisions.",
          "HU": "(1) Az érintett jogosult arra, hogy a saját helyzetével kapcsolatos okokból bármikor tiltakozzon személyes adatainak a 6. cikk (1) bekezdésének e) vagy f) pontján alapuló kezelése ellen, ideértve az említett rendelkezéseken alapuló profilalkotást is."
        },
        {
          "EN": "The controller shall no longer process the personal data unless the controller demonstrates compelling legitimate grounds for the processing which override the interests, rights and freedoms of the data subject or for the establishment, exercise or defence of legal claims.",
          "HU": "Ebben az esetben az adatkezelő a személyes adatokat nem kezelheti tovább, kivéve, ha az adatkezelő bizonyítja, hogy az adatkezelést olyan kényszerítő erejű jogos okok indokolják, amelyek elsőbbséget élveznek az érintett érdekeivel, jogaival és szabadságaival szemben, vagy amelyek jogi igények előterjesztéséhez, érvényesítéséhez vagy védelméhez kapcsolódnak."
        },
        {
          "EN": "2. Where personal data are processed for direct marketing purposes, the data subject shall have the right to object at any time to processing of personal data concerning him or her for such marketing, which includes profiling to the extent that it is related to such direct marketing.",
          "HU": "(2) Ha a személyes adatok kezelése közvetlen üzletszerzés érdekében történik, az érintett jogosult arra, hogy bármikor tiltakozzon a rá vonatkozó személyes adatok e célból történő kezelése ellen, ideértve a profilalkotást is, amennyiben az a közvetlen üzletszerzéshez kapcsolódik."
        },
        {
          "EN": "3. Where the data subject objects to processing for direct marketing purposes, the personal data shall no longer be processed for such purposes.",
          "HU": "(3) Ha az érintett tiltakozik a személyes adatok közvetlen üzletszerzés érdekében történő kezelése ellen, akkor a személyes adatok a továbbiakban e célból nem kezelhetők."
        },
        {
          "EN": "4. At the latest at the time of the first communication with the data subject, the right referred to in paragraphs 1 and 2 shall be explicitly brought to the attention of the data subject and shall be presented clearly and separately from any other information.",
          "HU": "(4) Az (1) és (2) bekezdésben említett jogra legkésőbb az érintettel való első kapcsolatfelvétel során kifejezetten fel kell hívni annak figyelmét, és az erre vonatkozó tájékoztatást egyértelműen és minden más információtól elkülönítve kell megjeleníteni."
        },
        {
          "EN": "5. In the context of the use of information society services, and notwithstanding Directive 2002/58/EC, the data subject may exercise his or her right to object by automated means using technical specifications.",
          "HU": "(5) Az információs társadalommal összefüggő szolgáltatások igénybevételéhez kapcsolódóan és a 2002/58/EK irányelvtől eltérve az érintett a tiltakozáshoz való jogot műszaki előírásokon alapuló automatizált eszközökkel is gyakorolhatja."
        },
        {
          "EN": "6. Where personal data are processed for scientific or historical research purposes or statistical purposes pursuant to Article 89(1), the data subject, on grounds relating to his or her particular situation, shall have the right to object to processing of personal data concerning him or her, unless the processing is necessary for the performance of a task carried out for reasons of public interest.",
          "HU": "(6) Ha a személyes adatok kezelésére a 89. cikk (1) bekezdésének megfelelően tudományos és történelmi kutatási célból vagy statisztikai célból kerül sor, az érintett jogosult arra, hogy a saját helyzetével kapcsolatos okokból tiltakozhasson a rá vonatkozó személyes adatok kezelése ellen, kivéve, ha az adatkezelésre közérdekű okból végzett feladat végrehajtása érdekében van szükség."
        },
        {
          "EN": "Article 22",
          "HU": "22. cikk"
        },
        {
          "EN": "Automated individual decision-making, including profiling",
          "HU": "Automatizált döntéshozatal egyedi ügyekben, beleértve a profilalkotást"
        },
        {
          "EN": "1. The data subject shall have the right not to be subject to a decision based solely on automated processing, including profiling, which produces legal effects concerning him or her or similarly significantly affects him or her.",
          "HU": "(1) Az érintett jogosult arra, hogy ne terjedjen ki rá az olyan, kizárólag automatizált adatkezelésen – ideértve a profilalkotást is – alapuló döntés hatálya, amely rá nézve joghatással járna vagy őt hasonlóképpen jelentős mértékben érintené."
        },
        {
          "EN": "2. Paragraph 1 shall not apply if the decision:",
          "HU": "(2) Az (1) bekezdés nem alkalmazandó abban az esetben, ha a döntés:"
        },
        {
          "EN": "(a) is necessary for entering into, or performance of, a contract between the data subject and a data controller;",
          "HU": "a) az érintett és az adatkezelő közötti szerződés megkötése vagy teljesítése érdekében szükséges;"
        },
        {
          "EN": "(b) is authorised by Union or Member State law to which the controller is subject and which also lays down suitable measures to safeguard the data subject's rights and freedoms and legitimate interests; or",
          "HU": "b) meghozatalát az adatkezelőre alkalmazandó olyan uniós vagy tagállami jog teszi lehetővé, amely az érintett jogainak és szabadságainak, valamint jogos érdekeinek védelmét szolgáló megfelelő intézkedéseket is megállapít; vagy"
        },
        {
          "EN": "(c) is based on the data subject's explicit consent.",
          "HU": "c) az érintett kifejezett hozzájárulásán alapul."
        },
        {
          "EN": "3. In the cases referred to in points (a) and (c) of paragraph 2, the data controller shall implement suitable measures to safeguard the data subject's rights and freedoms and legitimate interests, at least the right to obtain human intervention on the part of the controller, to express his or her point of view and to contest the decision.",
          "HU": "(3) A (2) bekezdés a) és c) pontjában említett esetekben az adatkezelő köteles megfelelő intézkedéseket tenni az érintett jogainak, szabadságainak és jogos érdekeinek védelme érdekében, ideértve az érintettnek legalább azt a jogát, hogy az adatkezelő részéről emberi beavatkozást kérjen, álláspontját kifejezze, és a döntéssel szemben kifogást nyújtson be."
        },
        {
          "EN": "4. Decisions referred to in paragraph 2 shall not be based on special categories of personal data referred to in Article 9(1), unless point (a) or (g) of Article 9(2) applies and suitable measures to safeguard the data subject's rights and freedoms and legitimate interests are in place.",
          "HU": "(4) A (2) bekezdésben említett döntések nem alapulhatnak a személyes adatoknak a 9. cikk (1) bekezdésében említett különleges kategóriáin, kivéve, ha a 9. cikk (2) bekezdésének a) vagy g) pontja alkalmazandó, és az érintett jogainak, szabadságainak és jogos érdekeinek védelme érdekében megfelelő intézkedések megtételére került sor."
        },
        {
          "EN": "Section 5",
          "HU": "5. szakasz"
        },
        {
          "EN": "Restrictions",
          "HU": "Korlátozások"
        },
        {
          "EN": "Article 23",
          "HU": "23. cikk"
        },
        {
          "EN": "Restrictions",
          "HU": "Korlátozások"
        },
        {
          "EN": "1. Union or Member State law to which the data controller or processor is subject may restrict by way of a legislative measure the scope of the obligations and rights provided for in Articles 12 to 22 and Article 34, as well as Article 5 in so far as its provisions correspond to the rights and obligations provided for in Articles 12 to 22, when such a restriction respects the essence of the fundamental rights and freedoms and is a necessary and proportionate measure in a democratic society to safeguard:",
          "HU": "(1) Az adatkezelőre vagy adatfeldolgozóra alkalmazandó uniós vagy tagállami jog jogalkotási intézkedésekkel korlátozhatja a 12–22. cikkben és a 34. cikkben foglalt, valamint a 12–22. cikkben meghatározott jogokkal és kötelezettségekkel összhangban lévő rendelkezései tekintetében az 5. cikkben foglalt jogok és kötelezettségek hatályát, ha a korlátozás tiszteletben tartja az alapvető jogok és szabadságok lényeges tartalmát, valamint az alábbiak védelméhez szükséges és arányos intézkedés egy demokratikus társadalomban:"
        },
        {
          "EN": "(a) national security;",
          "HU": "a) nemzetbiztonság;"
        },
        {
          "EN": "(b) defence;",
          "HU": "b) honvédelem;"
        },
        {
          "EN": "(c) public security;",
          "HU": "c) közbiztonság;"
        },
        {
          "EN": "(d) the prevention, investigation, detection or prosecution of criminal offences or the execution of criminal penalties, including the safeguarding against and the prevention of threats to public security;",
          "HU": "d) bűncselekmények megelőzése, nyomozása, felderítése vagy a vádeljárás lefolytatása, illetve büntetőjogi szankciók végrehajtása, beleértve a közbiztonságot fenyegető veszélyekkel szembeni védelmet és e veszélyek megelőzését;"
        },
        {
          "EN": "(e) other important objectives of general public interest of the Union or of a Member State, in particular an important economic or financial interest of the Union or of a Member State, including monetary, budgetary and taxation a matters, public health and social security;",
          "HU": "e) az Unió vagy valamely tagállam egyéb fontos, általános közérdekű célkitűzései, különösen az Unió vagy valamely tagállam fontos gazdasági vagy pénzügyi érdeke, beleértve a monetáris, a költségvetési és az adózási kérdéseket, a népegészségügyet és a szociális biztonságot;"
        },
        {
          "EN": "(f) the protection of judicial independence and judicial proceedings;",
          "HU": "f) a bírói függetlenség és a bírósági eljárások védelme;"
        },
        {
          "EN": "(g) the prevention, investigation, detection and prosecution of breaches of ethics for regulated professions;",
          "HU": "g) a szabályozott foglalkozások esetében az etikai vétségek megelőzése, kivizsgálása, felderítése és az ezekkel kapcsolatos eljárások lefolytatása;"
        },
        {
          "EN": "(h) a monitoring, inspection or regulatory function connected, even occasionally, to the exercise of official authority in the cases referred to in points (a) to (e) and (g);",
          "HU": "h) az a)–e) és a g) pontban említett esetekben – akár alkalmanként – a közhatalmi feladatok ellátásához kapcsolódó ellenőrzési, vizsgálati vagy szabályozási tevékenység;"
        },
        {
          "EN": "(i) the protection of the data subject or the rights and freedoms of others;",
          "HU": "i) az érintett védelme vagy mások jogainak és szabadságainak védelme;"
        },
        {
          "EN": "(j) the enforcement of civil law claims.",
          "HU": "j) polgári jogi követelések érvényesítése."
        },
        {
          "EN": "2. In particular, any legislative measure referred to in paragraph 1 shall contain specific provisions at least, where relevant, as to:",
          "HU": "(2) Az (1) bekezdésben említett jogalkotási intézkedések adott esetben részletes rendelkezéseket tartalmaznak legalább:"
        },
        {
          "EN": "(a) the purposes of the processing or categories of processing;",
          "HU": "a) az adatkezelés céljaira vagy az adatkezelés kategóriáira,"
        },
        {
          "EN": "(b) the categories of personal data;",
          "HU": "b) a személyes adatok kategóriáira,"
        },
        {
          "EN": "(c) the scope of the restrictions introduced;",
          "HU": "c) a bevezetett korlátozások hatályára,"
        },
        {
          "EN": "(d) the safeguards to prevent abuse or unlawful access or transfer;",
          "HU": "d) a visszaélésre, illetve a jogosulatlan hozzáférésre vagy továbbítás megakadályozását célzó garanciákra,"
        },
        {
          "EN": "(e) the specification of the controller or categories of controllers;",
          "HU": "e) az adatkezelő meghatározására vagy az adatkezelők kategóriáinak meghatározására,"
        },
        {
          "EN": "(f) the storage periods and the applicable safeguards taking into account the nature, scope and purposes of the processing or categories of processing;",
          "HU": "f) az adattárolás időtartamára, valamint az alkalmazandó garanciákra, figyelembe véve az adatkezelés vagy az adatkezelési kategóriák jellegét, hatályát és céljait,"
        },
        {
          "EN": "(g) the risks to the rights and freedoms of data subjects; and",
          "HU": "g) az érintettek jogait és szabadságait érintő kockázatokra, és"
        },
        {
          "EN": "(h) the right of data subjects to be informed about the restriction, unless that may be prejudicial to the purpose of the restriction.",
          "HU": "h) az érintettek arra vonatkozó jogára, hogy tájékoztatást kapjanak a korlátozásról, kivéve, ha ez hátrányosan befolyásolhatja a korlátozás célját. IV."
        },
        {
          "EN": "CHAPTER IV",
          "HU": "FEJEZET"
        },
        {
          "EN": "Controller and processor",
          "HU": "Az adatkezelő és az adatfeldolgozó"
        },
        {
          "EN": "Section 1",
          "HU": "1. szakasz"
        },
        {
          "EN": "General obligations",
          "HU": "Általános kötelezettségek"
        },
        {
          "EN": "Article 24",
          "HU": "24. cikk"
        },
        {
          "EN": "Responsibility of the controller",
          "HU": "Az adatkezelő feladatai"
        },
        {
          "EN": "1. Taking into account the nature, scope, context and purposes of processing as well as the risks of varying likelihood and severity for the rights and freedoms of natural persons, the controller shall implement appropriate technical and organisational measures to ensure and to be able to demonstrate that processing is performed in accordance with this Regulation.",
          "HU": "(1) Az adatkezelő az adatkezelés jellege, hatóköre, körülményei és céljai, valamint a természetes személyek jogaira és szabadságaira jelentett, változó valószínűségű és súlyosságú kockázat figyelembevételével megfelelő technikai és szervezési intézkedéseket hajt végre annak biztosítása és bizonyítása céljából, hogy a személyes adatok kezelése e rendelettel összhangban történik."
        },
        {
          "EN": "Those measures shall be reviewed and updated where necessary.",
          "HU": "Ezeket az intézkedéseket az adatkezelő felülvizsgálja és szükség esetén naprakésszé teszi."
        },
        {
          "EN": "2. Where proportionate in relation to processing activities, the measures referred to in paragraph 1 shall include the implementation of appropriate data protection policies by the controller.",
          "HU": "(2) Ha az az adatkezelési tevékenység vonatkozásában arányos, az (1) bekezdésben említett intézkedések részeként az adatkezelő megfelelő belső adatvédelmi szabályokat is alkalmaz."
        },
        {
          "EN": "3. Adherence to approved codes of conduct as referred to in Article 40 or approved certification mechanisms as referred to in Article 42 may be used as an element by which to demonstrate compliance with the obligations of the controller.",
          "HU": "(3) A 40. cikk szerinti jóváhagyott magatartási kódexekhez vagy a 42. cikk szerinti jóváhagyott tanúsítási mechanizmushoz való csatlakozás felhasználható annak bizonyítása részeként, hogy az adatkezelő teljesíti kötelezettségeit."
        },
        {
          "EN": "Article 25",
          "HU": "25. cikk"
        },
        {
          "EN": "Data protection by design and by default",
          "HU": "Beépített és alapértelmezett adatvédelem"
        },
        {
          "EN": "1. Taking into account the state of the art, the cost of implementation and the nature, scope, context and purposes of processing as well as the risks of varying likelihood and severity for rights and freedoms of natural persons posed by the processing, the controller shall, both at the time of the determination of the means for processing and at the time of the processing itself, implement appropriate technical and organisational measures, such as pseudonymisation, which are designed to implement data-protection principles, such as data minimisation, in an effective manner and to integrate the necessary safeguards into the processing in order to meet the requirements of this Regulation and protect the rights of data subjects.",
          "HU": "(1) Az adatkezelő a tudomány és technológia állása és a megvalósítás költségei, továbbá az adatkezelés jellege, hatóköre, körülményei és céljai, valamint a természetes személyek jogaira és szabadságaira jelentett, változó valószínűségű és súlyosságú kockázat figyelembevételével mind az adatkezelés módjának meghatározásakor, mind pedig az adatkezelés során olyan megfelelő technikai és szervezési intézkedéseket – például álnevesítést – hajt végre, amelyek célja egyrészt az adatvédelmi elvek, például az adattakarékosság hatékony megvalósítása, másrészt az e rendeletben foglalt követelmények teljesítéséhez és az érintettek jogainak védelméhez szükséges garanciák beépítése az adatkezelés folyamatába."
        },
        {
          "EN": "2. The controller shall implement appropriate technical and organisational measures for ensuring that, by default, only personal data which are necessary for each specific purpose of the processing are processed.",
          "HU": "(2) Az adatkezelő megfelelő technikai és szervezési intézkedéseket hajt végre annak biztosítására, hogy alapértelmezés szerint kizárólag olyan személyes adatok kezelésére kerüljön sor, amelyek az adott konkrét adatkezelési cél szempontjából szükségesek."
        },
        {
          "EN": "That obligation applies to the amount of personal data collected, the extent of their processing, the period of their storage and their accessibility.",
          "HU": "Ez a kötelezettség vonatkozik a gyűjtött személyes adatok mennyiségére, kezelésük mértékére, tárolásuk időtartamára és hozzáférhetőségükre."
        },
        {
          "EN": "In particular, such measures shall ensure that by default personal data are not made accessible without the individual's intervention to an indefinite number of natural persons.",
          "HU": "Ezek az intézkedések különösen azt kell, hogy biztosítsák, hogy a személyes adatok alapértelmezés szerint a természetes személy beavatkozása nélkül ne válhassanak hozzáférhetővé meghatározatlan számú személy számára."
        },
        {
          "EN": "3. An approved certification mechanism pursuant to Article 42 may be used as an element to demonstrate compliance with the requirements set out in paragraphs 1 and 2 of this Article.",
          "HU": "(3) A 42. cikk szerinti jóváhagyott tanúsítási mechanizmus felhasználható annak bizonyítása részeként, hogy az adatkezelő teljesíti az e cikk (1) és (2) bekezdésében előírt követelményeket."
        },
        {
          "EN": "Article 26",
          "HU": "26. cikk"
        },
        {
          "EN": "Joint controllers",
          "HU": "Közös adatkezelők"
        },
        {
          "EN": "1. Where two or more controllers jointly determine the purposes and means of processing, they shall be joint controllers.",
          "HU": "(1) Ha az adatkezelés céljait és eszközeit két vagy több adatkezelő közösen határozza meg, azok közös adatkezelőknek minősülnek."
        },
        {
          "EN": "They shall in a transparent manner determine their respective responsibilities for compliance with the obligations under this Regulation, in particular as regards the exercising of the rights of the data subject and their respective duties to provide the information referred to in Articles 13 and 14, by means of an arrangement between them unless, and in so far as, the respective responsibilities of the controllers are determined by Union or Member State law to which the controllers are subject.",
          "HU": "A közös adatkezelők átlátható módon, a közöttük létrejött megállapodásban határozzák meg az e rendelet szerinti kötelezettségek teljesítéséért fennálló, különösen az érintett jogainak gyakorlásával és a 13. és a 14. cikkben említett információk rendelkezésre bocsátásával kapcsolatos feladataikkal összefüggő felelősségük megoszlását, kivéve azt az esetet és annyiban, ha és amennyiben az adatkezelőkre vonatkozó felelősség megoszlását a rájuk alkalmazandó uniós vagy tagállami jog határozza meg."
        },
        {
          "EN": "The arrangement may designate a contact point for data subjects.",
          "HU": "A megállapodásban az érintettek számára kapcsolattartót lehet kijelölni."
        },
        {
          "EN": "2. The arrangement referred to in paragraph 1 shall duly reflect the respective roles and relationships of the joint controllers vis-à-vis the data subjects.",
          "HU": "(2) Az (1) bekezdésben említett megállapodásnak megfelelően tükröznie kell a közös adatkezelők érintettekkel szembeni szerepét és a velük való kapcsolatukat."
        },
        {
          "EN": "The essence of the arrangement shall be made available to the data subject.",
          "HU": "A megállapodás lényegét az érintett rendelkezésére kell bocsátani."
        },
        {
          "EN": "3. Irrespective of the terms of the arrangement referred to in paragraph 1, the data subject may exercise his or her rights under this Regulation in respect of and against each of the controllers.",
          "HU": "(3) Az érintett az (1) bekezdésben említett megállapodás feltételeitől függetlenül mindegyik adatkezelő vonatkozásában és mindegyik adatkezelővel szemben gyakorolhatja az e rendelet szerinti jogait."
        },
        {
          "EN": "Article 27",
          "HU": "27. cikk"
        },
        {
          "EN": "Representatives of controllers or processors not established in the Union",
          "HU": "Az Unióban tevékenységi hellyel nem rendelkező adatkezelők vagy adatfeldolgozók képviselői"
        },
        {
          "EN": "1. Where Article 3(2) applies, the controller or the processor shall designate in writing a representative in the Union.",
          "HU": "(1) A 3. cikk (2) bekezdésében meghatározott esetben az adatkezelő vagy az adatfeldolgozó írásban uniós képviselőt jelöl ki."
        },
        {
          "EN": "2. The obligation laid down in paragraph 1 of this Article shall not apply to:",
          "HU": "(2) Az e cikk (1) bekezdésében foglalt kötelezettséget nem kell alkalmazni:"
        },
        {
          "EN": "(a) processing which is occasional, does not include, on a large scale, processing of special categories of data as referred to in Article 9(1) or processing of personal data relating to criminal convictions and offences referred to in Article 10, and is unlikely to result in a risk to the rights and freedoms of natural persons, taking into account the nature, context, scope and purposes of the processing; or",
          "HU": "a) az alkalmi jellegű adatkezelésre, amely nem terjed ki sem a személyes adatoknak a 9. cikk (1) bekezdésében említett különleges kategóriáira, sem a 10. cikkben említett, büntetőjogi felelősség megállapítására vonatkozó határozatokra és bűncselekményekre vonatkozó személyes adatok nagy számban történő kezelésére, és amely – figyelembe véve az adatkezelés jellegét, körülményeit, hatókörét és céljait – valószínűsíthetően nem jelent kockázatot a természetes személyek jogaira és szabadságaira nézve; vagy"
        },
        {
          "EN": "(b) a public authority or body.",
          "HU": "b) közhatalmi vagy egyéb, közfeladatot ellátó szervekre."
        },
        {
          "EN": "3. The representative shall be established in one of the Member States where the data subjects, whose personal data are processed in relation to the offering of goods or services to them, or whose behaviour is monitored, are.",
          "HU": "(3) A képviselőnek tevékenységi hellyel kell rendelkeznie az egyik olyan tagállamban, ahol azon érintettek tartózkodnak, akiknek személyes adatait áruknak vagy szolgáltatásoknak a részükre történő nyújtása során kezelik vagy akiknek a magatartását megfigyelik."
        },
        {
          "EN": "4. The representative shall be mandated by the controller or processor to be addressed in addition to or instead of the controller or the processor by, in particular, supervisory authorities and data subjects, on all issues related to processing, for the purposes of ensuring compliance with this Regulation.",
          "HU": "(4) Az adatkezelő vagy az adatfeldolgozó által a képviselő számára adott megbízásnak ki kell terjednie arra, hogy az adatkezeléssel összefüggő minden ügyben, az e rendeletnek való megfelelés biztosítása érdekében – különösen a felügyeleti hatóságok és az érintettek megkeresésére – az adatkezelő vagy az adatfeldolgozó helyett vagy mellett a képviselő járjon el."
        },
        {
          "EN": "5. The designation of a representative by the controller or processor shall be without prejudice to legal actions which could be initiated against the controller or the processor themselves.",
          "HU": "(5) Az a tény, hogy az adatkezelő vagy az adatfeldolgozó képviselőt jelöl ki, nem érinti az adatkezelővel vagy az adatfeldolgozóval szembeni keresetindításhoz való jogot."
        },
        {
          "EN": "Article 28",
          "HU": "28. cikk"
        },
        {
          "EN": "Processor",
          "HU": "Az adatfeldolgozó"
        },
        {
          "EN": "1. Where processing is to be carried out on behalf of a controller, the controller shall use only processors providing sufficient guarantees to implement appropriate technical and organisational measures in such a manner that processing will meet the requirements of this Regulation and ensure the protection of the rights of the data subject.",
          "HU": "(1) Ha az adatkezelést az adatkezelő nevében más végzi, az adatkezelő kizárólag olyan adatfeldolgozókat vehet igénybe, akik vagy amelyek megfelelő garanciákat nyújtanak az adatkezelés e rendelet követelményeinek való megfelelését és az érintettek jogainak védelmét biztosító, megfelelő technikai és szervezési intézkedések végrehajtására."
        },
        {
          "EN": "2. The processor shall not engage another processor without prior specific or general written authorisation of the controller.",
          "HU": "(2) Az adatfeldolgozó az adatkezelő előzetesen írásban tett eseti vagy általános felhatalmazása nélkül további adatfeldolgozót nem vehet igénybe."
        },
        {
          "EN": "In the case of general written authorisation, the processor shall inform the controller of any intended changes concerning the addition or replacement of other processors, thereby giving the controller the opportunity to object to such changes.",
          "HU": "Az általános írásbeli felhatalmazás esetén az adatfeldolgozó tájékoztatja az adatkezelőt minden olyan tervezett változásról, amely további adatfeldolgozók igénybevételét vagy azok cseréjét érinti, ezzel biztosítva lehetőséget az adatkezelőnek arra, hogy ezekkel a változtatásokkal szemben kifogást emeljen."
        },
        {
          "EN": "3. Processing by a processor shall be governed by a contract or other legal act under Union or Member State law, that is binding on the processor with regard to the controller and that sets out the subject-matter and duration of the processing, the nature and purpose of the processing, the type of personal data and categories of data subjects and the obligations and rights of the controller.",
          "HU": "(3) Az adatfeldolgozó által végzett adatkezelést az uniós jog vagy tagállami jog alapján létrejött olyan – az adatkezelés tárgyát, időtartamát, jellegét és célját, a személyes adatok típusát, az érintettek kategóriáit, valamint az adatkezelő kötelezettségeit és jogait meghatározó –szerződésnek vagy más jogi aktusnak kell szabályoznia, amely köti az adatfeldolgozót az adatkezelővel szemben."
        },
        {
          "EN": "That contract or other legal act shall stipulate, in particular, that the processor:",
          "HU": "A szerződés vagy más jogi aktus különösen előírja, hogy az adatfeldolgozó:"
        },
        {
          "EN": "(a) processes the personal data only on documented instructions from the controller, including with regard to transfers of personal data to a third country or an international organisation, unless required to do so by Union or Member State law to which the processor is subject; in such a case, the processor shall inform the controller of that legal requirement before processing, unless that law prohibits such information on important grounds of public interest;",
          "HU": "a) a személyes adatokat kizárólag az adatkezelő írásbeli utasításai alapján kezeli – beleértve a személyes adatoknak valamely harmadik ország vagy nemzetközi szervezet számára való továbbítását is –, kivéve akkor, ha az adatkezelést az adatfeldolgozóra alkalmazandó uniós vagy tagállami jog írja elő; ebben az esetben erről a jogi előírásról az adatfeldolgozó az adatkezelőt az adatkezelést megelőzően értesíti, kivéve, ha az adatkezelő értesítését az adott jogszabály fontos közérdekből tiltja;"
        },
        {
          "EN": "(b) ensures that persons authorised to process the personal data have committed themselves to confidentiality or are under an appropriate statutory obligation of confidentiality;",
          "HU": "b) biztosítja azt, hogy a személyes adatok kezelésére feljogosított személyek titoktartási kötelezettséget vállalnak vagy jogszabályon alapuló megfelelő titoktartási kötelezettség alatt állnak;"
        },
        {
          "EN": "(c) takes all measures required pursuant to Article 32;",
          "HU": "c) meghozza a 32. cikkben előírt intézkedéseket;"
        },
        {
          "EN": "(d) respects the conditions referred to in paragraphs 2 and 4 for engaging another processor;",
          "HU": "d) tiszteletben tartja a további adatfeldolgozó igénybevételére vonatkozóan a (2) és (4) bekezdésben említett feltételeket;"
        },
        {
          "EN": "(e) taking into account the nature of the processing, assists the controller by appropriate technical and organisational measures, insofar as this is possible, for the fulfilment of the controller's obligation to respond to requests for exercising the data subject's rights laid down in Chapter III;",
          "HU": "e) az adatkezelés jellegének figyelembevételével megfelelő technikai és szervezési intézkedésekkel a lehetséges mértékben segíti az adatkezelőt abban, hogy teljesíteni tudja kötelezettségét az érintett III. fejezetben foglalt jogainak gyakorlásához kapcsolódó kérelmek megválaszolása tekintetében;"
        },
        {
          "EN": "(f) assists the controller in ensuring compliance with the obligations pursuant to Articles 32 to 36 taking into account the nature of processing and the information available to the processor;",
          "HU": "f) segíti az adatkezelőt a 32–36. cikk szerinti kötelezettségek teljesítésében, figyelembe véve az adatkezelés jellegét és az adatfeldolgozó rendelkezésére álló információkat;"
        },
        {
          "EN": "(g) at the choice of the controller, deletes or returns all the personal data to the controller after the end of the provision of services relating to processing, and deletes existing copies unless Union or Member State law requires storage of the personal data;",
          "HU": "g) az adatkezelési szolgáltatás nyújtásának befejezését követően az adatkezelő döntése alapján minden személyes adatot töröl vagy visszajuttat az adatkezelőnek, és törli a meglévő másolatokat, kivéve, ha az uniós vagy a tagállami jog az személyes adatok tárolását írja elő;"
        },
        {
          "EN": "(h) makes available to the controller all information necessary to demonstrate compliance with the obligations laid down in this Article and allow for and contribute to audits, including inspections, conducted by the controller or another auditor mandated by the controller.",
          "HU": "h) az adatkezelő rendelkezésére bocsát minden olyan információt, amely az e cikkben meghatározott kötelezettségek teljesítésének igazolásához szükséges, továbbá amely lehetővé teszi és elősegíti az adatkezelő által vagy az általa megbízott más ellenőr által végzett auditokat, beleértve a helyszíni vizsgálatokat is."
        },
        {
          "EN": "With regard to point (h) of the first subparagraph, the processor shall immediately inform the controller if, in its opinion, an instruction infringes this Regulation or other Union or Member State data protection provisions.",
          "HU": "Az első albekezdés h) pontjával kapcsolatban az adatfeldolgozó haladéktalanul tájékoztatja az adatkezelőt, ha úgy véli, hogy annak valamely utasítása sérti ezt a rendeletet vagy a tagállami vagy uniós adatvédelmi rendelkezéseket."
        },
        {
          "EN": "4. Where a processor engages another processor for carrying out specific processing activities on behalf of the controller, the same data protection obligations as set out in the contract or other legal act between the controller and the processor as referred to in paragraph 3 shall be imposed on that other processor by way of a contract or other legal act under Union or Member State law, in particular providing sufficient guarantees to implement appropriate technical and organisational measures in such a manner that the processing will meet the requirements of this Regulation.",
          "HU": "(4) Ha az adatfeldolgozó bizonyos, az adatkezelő nevében végzett konkrét adatkezelési tevékenységekhez további adatfeldolgozó szolgáltatásait is igénybe veszi, uniós vagy tagállami jog alapján létrejött szerződés vagy más jogi aktus útján erre a további adatfeldolgozóra is ugyanazok az adatvédelmi kötelezettségeket kell telepíteni, mint amelyek az adatkezelő és az adatfeldolgozó között létrejött, a (3) bekezdésben említett szerződésben vagy egyéb jogi aktusban szerepelnek, különösen úgy, hogy a további adatfeldolgozónak megfelelő garanciákat kell nyújtania a megfelelő technikai és szervezési intézkedések végrehajtására, és ezáltal biztosítania kell, hogy az adatkezelés megfeleljen e rendelet követelményeinek."
        },
        {
          "EN": "Where that other processor fails to fulfil its data protection obligations, the initial processor shall remain fully liable to the controller for the performance of that other processor's obligations.",
          "HU": "Ha a további adatfeldolgozó nem teljesíti adatvédelmi kötelezettségeit, az őt megbízó adatfeldolgozó teljes felelősséggel tartozik az adatkezelő felé a további adatfeldolgozó kötelezettségeinek a teljesítéséért."
        },
        {
          "EN": "5. Adherence of a processor to an approved code of conduct as referred to in Article 40 or an approved certification mechanism as referred to in Article 42 may be used as an element by which to demonstrate sufficient guarantees as referred to in paragraphs 1 and 4 of this Article.",
          "HU": "(5) A 40. cikk szerinti jóváhagyott magatartási kódexekhez vagy a 42. cikk szerinti jóváhagyott tanúsítási mechanizmushoz való csatlakozás felhasználható annak bizonyítása részeként, hogy az adatfeldolgozó biztosítja az (1) és (4) bekezdésben említett megfelelő garanciákat."
        },
        {
          "EN": "6. Without prejudice to an individual contract between the controller and the processor, the contract or the other legal act referred to in paragraphs 3 and 4 of this Article may be based, in whole or in part, on standard contractual clauses referred to in paragraphs 7 and 8 of this Article, including when they are part of a certification granted to the controller or processor pursuant to Articles 42 and 43.",
          "HU": "(6) Az adatkezelő és az adatfeldolgozó közötti egyedi szerződés sérelme nélkül az e cikk (3) és (4) bekezdésében említett szerződés vagy más jogi aktus teljes egészében vagy részben az e cikk (7) és (8) bekezdésében említett általános szerződési feltételeken alapulhat, beleértve azt is, amikor ezek a 42. és a 43. cikk alapján az adatkezelőnek vagy az adatfeldolgozónak megadott tanúsítvány részét képezik."
        },
        {
          "EN": "7. The Commission may lay down standard contractual clauses for the matters referred to in paragraph 3 and 4 of this Article and in accordance with the examination procedure referred to in Article 93(2).",
          "HU": "(7) A Bizottság – a 93. cikk (2) bekezdésében említett vizsgálóbizottsági eljárásnak megfelelően – általános szerződési feltételeket határozhat meg az e cikk (3) és (4) bekezdésében foglaltakra vonatkozóan."
        },
        {
          "EN": "8. A supervisory authority may adopt standard contractual clauses for the matters referred to in paragraph 3 and 4 of this Article and in accordance with the consistency mechanism referred to in Article 63.",
          "HU": "(8) A felügyeleti hatóságok a 63. cikkben említett egységességi mechanizmusnak megfelelően általános szerződési feltételeket fogadhatnak el az e cikk (3) és (4) bekezdésében foglaltakra vonatkozóan."
        },
        {
          "EN": "9. The contract or the other legal act referred to in paragraphs 3 and 4 shall be in writing, including in electronic form.",
          "HU": "(9) A (3) és (4) bekezdésben említett szerződést vagy más jogi aktust írásba kell foglalni, ideértve az elektronikus formátumot is."
        },
        {
          "EN": "10. Without prejudice to Articles 82, 83 and 84, if a processor infringes this Regulation by determining the purposes and means of processing, the processor shall be considered to be a controller in respect of that processing.",
          "HU": "(10) A 82., 83. és 84. cikk sérelme nélkül, ha egy adatfeldolgozó e rendeletet sértve maga határozza meg az adatkezelés céljait és eszközeit, akkor őt az adott adatkezelés tekintetében adatkezelőnek kell tekinteni."
        },
        {
          "EN": "Article 29",
          "HU": "29. cikk"
        },
        {
          "EN": "Processing under the authority of the controller or processor",
          "HU": "Az adatkezelő vagy az adatfeldolgozó irányítása alatt végzett adatkezelés"
        },
        {
          "EN": "The processor and any person acting under the authority of the controller or of the processor, who has access to personal data, shall not process those data except on instructions from the controller, unless required to do so by Union or Member State law.",
          "HU": "Az adatfeldolgozó és bármely, az adatkezelő vagy az adatfeldolgozó irányítása alatt eljáró, a személyes adatokhoz hozzáféréssel rendelkező személy ezeket az adatokat kizárólag az adatkezelő utasításának megfelelően kezelheti, kivéve, ha az ettől való eltérésre őt uniós vagy tagállami jog kötelezi."
        },
        {
          "EN": "Article 30",
          "HU": "30. cikk"
        },
        {
          "EN": "Records of processing activities",
          "HU": "Az adatkezelési tevékenységek nyilvántartása"
        },
        {
          "EN": "1. Each controller and, where applicable, the controller's representative, shall maintain a record of processing activities under its responsibility.",
          "HU": "(1) Minden adatkezelő és – ha van ilyen – az adatkezelő képviselője a felelősségébe tartozóan végzett adatkezelési tevékenységekről nyilvántartást vezet."
        },
        {
          "EN": "That record shall contain all of the following information:",
          "HU": "E nyilvántartás a következő információkat tartalmazza:"
        },
        {
          "EN": "(a) the name and contact details of the controller and, where applicable, the joint controller, the controller's representative and the data protection officer;",
          "HU": "a) az adatkezelő neve és elérhetősége, valamint – ha van ilyen – a közös adatkezelőnek, az adatkezelő képviselőjének és az adatvédelmi tisztviselőnek a neve és elérhetősége;"
        },
        {
          "EN": "(b) the purposes of the processing;",
          "HU": "b) az adatkezelés céljai;"
        },
        {
          "EN": "(c) a description of the categories of data subjects and of the categories of personal data;",
          "HU": "c) az érintettek kategóriáinak, valamint a személyes adatok kategóriáinak ismertetése;"
        },
        {
          "EN": "(d) the categories of recipients to whom the personal data have been or will be disclosed including recipients in third countries or international organisations;",
          "HU": "d) olyan címzettek kategóriái, akikkel a személyes adatokat közlik vagy közölni fogják, ideértve a harmadik országbeli címzetteket vagy nemzetközi szervezeteket;"
        },
        {
          "EN": "(e) where applicable, transfers of personal data to a third country or an international organisation, including the identification of that third country or international organisation and, in the case of transfers referred to in the second subparagraph of Article 49(1), the documentation of suitable safeguards;",
          "HU": "e) adott esetben a személyes adatok harmadik országba vagy nemzetközi szervezet részére történő továbbítására vonatkozó információk, beleértve a harmadik ország vagy a nemzetközi szervezet azonosítását, valamint a 49. cikk (1) bekezdésének második albekezdés szerinti továbbítás esetében a megfelelő garanciák leírása;"
        },
        {
          "EN": "(f) where possible, the envisaged time limits for erasure of the different categories of data;",
          "HU": "f) ha lehetséges, a különböző adatkategóriák törlésére előirányzott határidők;"
        },
        {
          "EN": "(g) where possible, a general description of the technical and organisational security measures referred to in Article 32(1).",
          "HU": "g) ha lehetséges, a 32. cikk (1) bekezdésében említett technikai és szervezési intézkedések általános leírása."
        },
        {
          "EN": "2. Each processor and, where applicable, the processor's representative shall maintain a record of all categories of processing activities carried out on behalf of a controller, containing:",
          "HU": "(2) Minden adatfeldolgozó és – ha van ilyen – az adatfeldolgozó képviselője nyilvántartást vezet az adatkezelő nevében végzett adatkezelési tevékenységek minden kategóriájáról; a nyilvántartás a következő információkat tartalmazza:"
        },
        {
          "EN": "(a) the name and contact details of the processor or processors and of each controller on behalf of which the processor is acting, and, where applicable, of the controller's or the processor's representative, and the data protection officer;",
          "HU": "a) az adatfeldolgozó vagy adatfeldolgozók neve és elérhetőségei, és minden olyan adatkezelő neve és elérhetőségei, amelynek vagy akinek a nevében az adatfeldolgozó eljár, továbbá – ha van ilyen – az adatkezelő vagy az adatfeldolgozó képviselőjének, valamint az adatvédelmi tisztviselőnek a neve és elérhetőségei;"
        },
        {
          "EN": "(b) the categories of processing carried out on behalf of each controller;",
          "HU": "b) az egyes adatkezelők nevében végzett adatkezelési tevékenységek kategóriái;"
        },
        {
          "EN": "(c) where applicable, transfers of personal data to a third country or an international organisation, including the identification of that third country or international organisation and, in the case of transfers referred to in the second subparagraph of Article 49(1), the documentation of suitable safeguards;",
          "HU": "c) adott esetben a személyes adatok harmadik országba vagy nemzetközi szervezet részére történő továbbítása, beleértve a harmadik ország vagy a nemzetközi szervezet azonosítását, valamint a 49. cikk (1) bekezdésének második albekezdése szerinti továbbítás esetében a megfelelő garanciák leírása;"
        },
        {
          "EN": "(d) where possible, a general description of the technical and organisational security measures referred to in Article 32(1).",
          "HU": "d) ha lehetséges, a 32. cikk (1) bekezdésében említett technikai és szervezési intézkedések általános leírása."
        },
        {
          "EN": "3. The records referred to in paragraphs 1 and 2 shall be in writing, including in electronic form.",
          "HU": "(3) Az (1) és (2) bekezdésben említett nyilvántartást írásban kell vezetni, ideértve az elektronikus formátumot is."
        },
        {
          "EN": "4. The controller or the processor and, where applicable, the controller's or the processor's representative, shall make the record available to the supervisory authority on request.",
          "HU": "(4) Az adatkezelő vagy az adatfeldolgozó, valamint – ha van ilyen – az adatkezelő vagy az adatfeldolgozó képviselője megkeresés alapján a felügyeleti hatóság részére rendelkezésére bocsátja a nyilvántartást."
        },
        {
          "EN": "5. The obligations referred to in paragraphs 1 and 2 shall not apply to an enterprise or an organisation employing fewer than 250 persons unless the processing it carries out is likely to result in a risk to the rights and freedoms of data subjects, the processing is not occasional, or the processing includes special categories of data as referred to in Article 9(1) or personal data relating to criminal convictions and offences referred to in Article 10.",
          "HU": "(5) Az (1) és (2) bekezdésben foglalt kötelezettségek nem vonatkoznak a 250 főnél kevesebb személyt foglalkoztató vállalkozásra vagy szervezetre, kivéve, ha az általa végzett adatkezelés az érintettek jogaira és szabadságaira nézve valószínűsíthetően kockázattal jár, ha az adatkezelés nem alkalmi jellegű, vagy ha az adatkezelés kiterjed a személyes adatok 9. cikk (1) bekezdésében említett különleges kategóriáinak vagy a 10. cikkben említett, büntetőjogi felelősség megállapítására vonatkozó határozatokra és bűncselekményekre vonatkozó személyes adatoknak a kezelésére."
        },
        {
          "EN": "Article 31",
          "HU": "31. cikk"
        },
        {
          "EN": "Cooperation with the supervisory authority",
          "HU": "Együttműködés a felügyeleti hatósággal"
        },
        {
          "EN": "The controller and the processor and, where applicable, their representatives, shall cooperate, on request, with the supervisory authority in the performance of its tasks.",
          "HU": "Az adatkezelő és az adatfeldolgozó, valamint – ha van ilyen – az adatkezelő vagy az adatfeldolgozó képviselője feladatai végrehajtása során a felügyeleti hatósággal – annak megkeresése alapján – együttműködik."
        },
        {
          "EN": "Section 2",
          "HU": "2. szakasz"
        },
        {
          "EN": "Security of personal data",
          "HU": "Adatbiztonság"
        },
        {
          "EN": "Article 32",
          "HU": "32. cikk"
        },
        {
          "EN": "Security of processing",
          "HU": "Az adatkezelés biztonsága"
        },
        {
          "EN": "1. Taking into account the state of the art, the costs of implementation and the nature, scope, context and purposes of processing as well as the risk of varying likelihood and severity for the rights and freedoms of natural persons, the controller and the processor shall implement appropriate technical and organisational measures to ensure a level of security appropriate to the risk, including inter alia as appropriate:",
          "HU": "(1) Az adatkezelő és az adatfeldolgozó a tudomány és technológia állása és a megvalósítás költségei, továbbá az adatkezelés jellege, hatóköre, körülményei és céljai, valamint a természetes személyek jogaira és szabadságaira jelentett, változó valószínűségű és súlyosságú kockázat figyelembevételével megfelelő technikai és szervezési intézkedéseket hajt végre annak érdekében, hogy a kockázat mértékének megfelelő szintű adatbiztonságot garantálja, ideértve, többek között, adott esetben:"
        },
        {
          "EN": "(a) the pseudonymisation and encryption of personal data;",
          "HU": "a) a személyes adatok álnevesítését és titkosítását;"
        },
        {
          "EN": "(b) the ability to ensure the ongoing confidentiality, integrity, availability and resilience of processing systems and services;",
          "HU": "b) a személyes adatok kezelésére használt rendszerek és szolgáltatások folyamatos bizalmas jellegének biztosítását, integritását, rendelkezésre állását és ellenálló képességét;"
        },
        {
          "EN": "(c) the ability to restore the availability and access to personal data in a timely manner in the event of a physical or technical incident;",
          "HU": "c) fizikai vagy műszaki incidens esetén az arra való képességet, hogy a személyes adatokhoz való hozzáférést és az adatok rendelkezésre állását kellő időben vissza lehet állítani;"
        },
        {
          "EN": "(d) a process for regularly testing, assessing and evaluating the effectiveness of technical and organisational measures for ensuring the security of the processing.",
          "HU": "d) az adatkezelés biztonságának garantálására hozott technikai és szervezési intézkedések hatékonyságának rendszeres tesztelésére, felmérésére és értékelésére szolgáló eljárást."
        },
        {
          "EN": "2. In assessing the appropriate level of security account shall be taken in particular of the risks that are presented by processing, in particular from accidental or unlawful destruction, loss, alteration, unauthorised disclosure of, or access to personal data transmitted, stored or otherwise processed.",
          "HU": "(2) A biztonság megfelelő szintjének meghatározásakor kifejezetten figyelembe kell venni az adatkezelésből eredő olyan kockázatokat, amelyek különösen a továbbított, tárolt vagy más módon kezelt személyes adatok véletlen vagy jogellenes megsemmisítéséből, elvesztéséből, megváltoztatásából, jogosulatlan nyilvánosságra hozatalából vagy az azokhoz való jogosulatlan hozzáférésből erednek."
        },
        {
          "EN": "3. Adherence to an approved code of conduct as referred to in Article 40 or an approved certification mechanism as referred to in Article 42 may be used as an element by which to demonstrate compliance with the requirements set out in paragraph 1 of this Article.",
          "HU": "(3) Az adatkezelő, illetve az adatfeldolgozó 40. cikk szerinti jóváhagyott magatartási kódexekhez vagy a 42. cikk szerinti jóváhagyott tanúsítási mechanizmushoz való csatlakozását felhasználhatja annak bizonyítása részeként, hogy az e cikk (1) bekezdésében meghatározott követelményeket teljesíti."
        },
        {
          "EN": "4. The controller and processor shall take steps to ensure that any natural person acting under the authority of the controller or the processor who has access to personal data does not process them except on instructions from the controller, unless he or she is required to do so by Union or Member State law.",
          "HU": "(4) Az adatkezelő és az adatfeldolgozó intézkedéseket hoz annak biztosítására, hogy az adatkezelő vagy az adatfeldolgozó irányítása alatt eljáró, a személyes adatokhoz hozzáféréssel rendelkező természetes személyek kizárólag az adatkezelő utasításának megfelelően kezelhessék az említett adatokat, kivéve, ha az ettől való eltérésre uniós vagy tagállami jog kötelezi őket."
        },
        {
          "EN": "Article 33",
          "HU": "33. cikk"
        },
        {
          "EN": "Notification of a personal data breach to the supervisory authority",
          "HU": "Az adatvédelmi incidens bejelentése a felügyeleti hatóságnak"
        },
        {
          "EN": "1. In the case of a personal data breach, the controller shall without undue delay and, where feasible, not later than 72 hours after having become aware of it, notify the personal data breach to the supervisory authority competent in accordance with Article 55, unless the personal data breach is unlikely to result in a risk to the rights and freedoms of natural persons.",
          "HU": "(1) Az adatvédelmi incidenst az adatkezelő indokolatlan késedelem nélkül, és ha lehetséges, legkésőbb 72 órával azután, hogy az adatvédelmi incidens a tudomására jutott, bejelenti az 55. cikk alapján illetékes felügyeleti hatóságnak, kivéve, ha az adatvédelmi incidens valószínűsíthetően nem jár kockázattal a természetes személyek jogaira és szabadságaira nézve."
        },
        {
          "EN": "Where the notification to the supervisory authority is not made within 72 hours, it shall be accompanied by reasons for the delay.",
          "HU": "Ha a bejelentés nem történik meg 72 órán belül, mellékelni kell hozzá a késedelem igazolására szolgáló indokokat is."
        },
        {
          "EN": "2. The processor shall notify the controller without undue delay after becoming aware of a personal data breach.",
          "HU": "(2) Az adatfeldolgozó az adatvédelmi incidenst, az arról való tudomásszerzését követően indokolatlan késedelem nélkül bejelenti az adatkezelőnek."
        },
        {
          "EN": "3. The notification referred to in paragraph 1 shall at least:",
          "HU": "(3) Az (1) bekezdésben említett bejelentésben legalább:"
        },
        {
          "EN": "(a) describe the nature of the personal data breach including where possible, the categories and approximate number of data subjects concerned and the categories and approximate number of personal data records concerned;",
          "HU": "a) ismertetni kell az adatvédelmi incidens jellegét, beleértve – ha lehetséges – az érintettek kategóriáit és hozzávetőleges számát, valamint az incidenssel érintett adatok kategóriáit és hozzávetőleges számát;"
        },
        {
          "EN": "(b) communicate the name and contact details of the data protection officer or other contact point where more information can be obtained;",
          "HU": "b) közölni kell az adatvédelmi tisztviselő vagy a további tájékoztatást nyújtó egyéb kapcsolattartó nevét és elérhetőségeit;"
        },
        {
          "EN": "(c) describe the likely consequences of the personal data breach;",
          "HU": "c) ismertetni kell az adatvédelmi incidensből eredő, valószínűsíthető következményeket;"
        },
        {
          "EN": "(d) describe the measures taken or proposed to be taken by the controller to address the personal data breach, including, where appropriate, measures to mitigate its possible adverse effects.",
          "HU": "d) ismertetni kell az adatkezelő által az adatvédelmi incidens orvoslására tett vagy tervezett intézkedéseket, beleértve adott esetben az adatvédelmi incidensből eredő esetleges hátrányos következmények enyhítését célzó intézkedéseket."
        },
        {
          "EN": "4. Where, and in so far as, it is not possible to provide the information at the same time, the information may be provided in phases without undue further delay.",
          "HU": "(4) Ha és amennyiben nem lehetséges az információkat egyidejűleg közölni, azok további indokolatlan késedelem nélkül később részletekben is közölhetők."
        },
        {
          "EN": "5. The controller shall document any personal data breaches, comprising the facts relating to the personal data breach, its effects and the remedial action taken.",
          "HU": "(5) Az adatkezelő nyilvántartja az adatvédelmi incidenseket, feltüntetve az adatvédelmi incidenshez kapcsolódó tényeket, annak hatásait és az orvoslására tett intézkedéseket."
        },
        {
          "EN": "That documentation shall enable the supervisory authority to verify compliance with this Article.",
          "HU": "E nyilvántartás lehetővé teszi, hogy a felügyeleti hatóság ellenőrizze az e cikk követelményeinek való megfelelést."
        },
        {
          "EN": "Article 34",
          "HU": "34. cikk"
        },
        {
          "EN": "Communication of a personal data breach to the data subject",
          "HU": "Az érintett tájékoztatása az adatvédelmi incidensről"
        },
        {
          "EN": "1. When the personal data breach is likely to result in a high risk to the rights and freedoms of natural persons, the controller shall communicate the personal data breach to the data subject without undue delay.",
          "HU": "(1) Ha az adatvédelmi incidens valószínűsíthetően magas kockázattal jár a természetes személyek jogaira és szabadságaira nézve, az adatkezelő indokolatlan késedelem nélkül tájékoztatja az érintettet az adatvédelmi incidensről."
        },
        {
          "EN": "2. The communication to the data subject referred to in paragraph 1 of this Article shall describe in clear and plain language the nature of the personal data breach and contain at least the information and measures referred to in points (b), (c) and (d) of Article 33(3).",
          "HU": "(2) Az (1) bekezdésben említett, az érintett részére adott tájékoztatásban világosan és közérthetően ismertetni kell az adatvédelmi incidens jellegét, és közölni kell legalább a 33. cikk (3) bekezdésének b), c) és d) pontjában említett információkat és intézkedéseket."
        },
        {
          "EN": "3. The communication to the data subject referred to in paragraph 1 shall not be required if any of the following conditions are met:",
          "HU": "(3) Az érintettet nem kell az (1) bekezdésben említettek szerint tájékoztatni, ha a következő feltételek bármelyike teljesül:"
        },
        {
          "EN": "(a) the controller has implemented appropriate technical and organisational protection measures, and those measures were applied to the personal data affected by the personal data breach, in particular those that render the personal data unintelligible to any person who is not authorised to access it, such as encryption;",
          "HU": "a) az adatkezelő megfelelő technikai és szervezési védelmi intézkedéseket hajtott végre, és ezeket az intézkedéseket az adatvédelmi incidens által érintett adatok tekintetében alkalmazták, különösen azokat az intézkedéseket – mint például a titkosítás alkalmazása –, amelyek a személyes adatokhoz való hozzáférésre fel nem jogosított személyek számára értelmezhetetlenné teszik az adatokat;"
        },
        {
          "EN": "(b) the controller has taken subsequent measures which ensure that the high risk to the rights and freedoms of data subjects referred to in paragraph 1 is no longer likely to materialise;",
          "HU": "b) az adatkezelő az adatvédelmi incidenst követően olyan további intézkedéseket tett, amelyek biztosítják, hogy az érintett jogaira és szabadságaira jelentett, az (1) bekezdésben említett magas kockázat a továbbiakban valószínűsíthetően nem valósul meg;"
        },
        {
          "EN": "(c) it would involve disproportionate effort.",
          "HU": "c) a tájékoztatás aránytalan erőfeszítést tenne szükségessé."
        },
        {
          "EN": "In such a case, there shall instead be a public communication or similar measure whereby the data subjects are informed in an equally effective manner.",
          "HU": "Ilyen esetekben az érintetteket nyilvánosan közzétett információk útján kell tájékoztatni, vagy olyan hasonló intézkedést kell hozni, amely biztosítja az érintettek hasonlóan hatékony tájékoztatását."
        },
        {
          "EN": "4. If the controller has not already communicated the personal data breach to the data subject, the supervisory authority, having considered the likelihood of the personal data breach resulting in a high risk, may require it to do so or may decide that any of the conditions referred to in paragraph 3 are met.",
          "HU": "(4) Ha az adatkezelő még nem értesítette az érintettet az adatvédelmi incidensről, a felügyeleti hatóság, miután mérlegelte, hogy az adatvédelmi incidens valószínűsíthetően magas kockázattal jár-e, elrendelheti az érintett tájékoztatását, vagy megállapíthatja a (3) bekezdésben említett feltételek valamelyikének teljesülését."
        },
        {
          "EN": "Section 3",
          "HU": "3. szakasz"
        },
        {
          "EN": "Data protection impact assessment and prior consultation",
          "HU": "Adatvédelmi hatásvizsgálat és előzetes konzultáció"
        },
        {
          "EN": "Article 35",
          "HU": "35. cikk"
        },
        {
          "EN": "Data protection impact assessment",
          "HU": "Adatvédelmi hatásvizsgálat"
        },
        {
          "EN": "1. Where a type of processing in particular using new technologies, and taking into account the nature, scope, context and purposes of the processing, is likely to result in a high risk to the rights and freedoms of natural persons, the controller shall, prior to the processing, carry out an assessment of the impact of the envisaged processing operations on the protection of personal data.",
          "HU": "(1) Ha az adatkezelés valamely – különösen új technológiákat alkalmazó – típusa –, figyelemmel annak jellegére, hatókörére, körülményére és céljaira, valószínűsíthetően magas kockázattal jár a természetes személyek jogaira és szabadságaira nézve, akkor az adatkezelő az adatkezelést megelőzően hatásvizsgálatot végez arra vonatkozóan, hogy a tervezett adatkezelési műveletek a személyes adatok védelmét hogyan érintik."
        },
        {
          "EN": "A single assessment may address a set of similar processing operations that present similar high risks.",
          "HU": "Olyan egymáshoz hasonló típusú adatkezelési műveletek, amelyek egymáshoz hasonló magas kockázatokat jelentenek, egyetlen hatásvizsgálat keretei között is értékelhetőek."
        },
        {
          "EN": "2. The controller shall seek the advice of the data protection officer, where designated, when carrying out a data protection impact assessment.",
          "HU": "(2) Ha van kijelölt adatvédelmi tisztviselő, az adatkezelő az adatvédelmi hatásvizsgálat elvégzésekor az adatvédelmi tisztviselő szakmai tanácsát köteles kikérni."
        },
        {
          "EN": "3. A data protection impact assessment referred to in paragraph 1 shall in particular be required in the case of:",
          "HU": "(3) Az (1) bekezdésben említett adatvédelmi hatásvizsgálatot különösen az alábbi esetekben kell elvégezni:"
        },
        {
          "EN": "(a) a systematic and extensive evaluation of personal aspects relating to natural persons which is based on automated processing, including profiling, and on which decisions are based that produce legal effects concerning the natural person or similarly significantly affect the natural person;",
          "HU": "a) természetes személyekre vonatkozó egyes személyes jellemzők olyan módszeres és kiterjedt értékelése, amely automatizált adatkezelésen – ideértve a profilalkotást is –alapul, és amelyre a természetes személy tekintetében joghatással bíró vagy a természetes személyt hasonlóképpen jelentős mértékben érintő döntések épülnek;"
        },
        {
          "EN": "(b) processing on a large scale of special categories of data referred to in Article 9(1), or of personal data relating to criminal convictions and offences referred to in Article 10; or",
          "HU": "b) a 9. cikk (1) bekezdésében említett személyes adatok különleges kategóriái, vagy a 10. cikkben említett, büntetőjogi felelősség megállapítására vonatkozó határozatokra és bűncselekményekre vonatkozó személyes adatok nagy számban történő kezelése; vagy"
        },
        {
          "EN": "(c) a systematic monitoring of a publicly accessible area on a large scale.",
          "HU": "c) nyilvános helyek nagymértékű, módszeres megfigyelése."
        },
        {
          "EN": "4. The supervisory authority shall establish and make public a list of the kind of processing operations which are subject to the requirement for a data protection impact assessment pursuant to paragraph 1.",
          "HU": "(4) A felügyeleti hatóságnak össze kell állítania és nyilvánosságra kell hoznia az olyan adatkezelési műveletek típusainak a jegyzékét, amelyekre vonatkozóan az (1) bekezdés értelmében adatvédelmi hatásvizsgálatot kell végezni."
        },
        {
          "EN": "The supervisory authority shall communicate those lists to the Board referred to in Article 68.",
          "HU": "A felügyeleti hatóság továbbítja az említett jegyzékeket a Testület részére."
        },
        {
          "EN": "5. The supervisory authority may also establish and make public a list of the kind of processing operations for which no data protection impact assessment is required.",
          "HU": "(5) A felügyeleti hatóság összeállíthatja és nyilvánosságra hozhatja az olyan adatkezelési műveletek típusainak a jegyzékét is, amelyekre vonatkozóan nem kell adatvédelmi hatásvizsgálatot végezni."
        },
        {
          "EN": "The supervisory authority shall communicate those lists to the Board.",
          "HU": "A felügyeleti hatóság továbbítja ezeket a jegyzékeket a Testület részére."
        },
        {
          "EN": "6. Prior to the adoption of the lists referred to in paragraphs 4 and 5, the competent supervisory authority shall apply the consistency mechanism referred to in Article 63 where such lists involve processing activities which are related to the offering of goods or services to data subjects or to the monitoring of their behaviour in several Member States, or may substantially affect the free movement of personal data within the Union.",
          "HU": "(6) A (4) és (5) bekezdésben említett jegyzékek elfogadását megelőzően az illetékes felügyeleti hatóság igénybe veszi a 63. cikkben említett egységességi mechanizmust, ha ezek a jegyzékek olyan adatkezelési tevékenységeket tartalmaznak, amelyek az érintettek számára történő, több tagállamra kiterjedő áru- vagy szolgáltatás nyújtásához vagy az érintettek viselkedésének több tagállamra kiterjedő megfigyeléséhez kapcsolódnak, vagy érdemben érinthetik a személyes adatok Unión belüli szabad áramlását."
        },
        {
          "EN": "7. The assessment shall contain at least:",
          "HU": "(7) A hatásvizsgálat kiterjed legalább:"
        },
        {
          "EN": "(a) a systematic description of the envisaged processing operations and the purposes of the processing, including, where applicable, the legitimate interest pursued by the controller;",
          "HU": "a) a tervezett adatkezelési műveletek módszeres leírására és az adatkezelés céljainak ismertetésére, beleértve adott esetben az adatkezelő által érvényesíteni kívánt jogos érdeket;"
        },
        {
          "EN": "(b) an assessment of the necessity and proportionality of the processing operations in relation to the purposes;",
          "HU": "b) az adatkezelés céljaira figyelemmel az adatkezelési műveletek szükségességi és arányossági vizsgálatára;"
        },
        {
          "EN": "(c) an assessment of the risks to the rights and freedoms of data subjects referred to in paragraph 1; and",
          "HU": "c) az (1) bekezdésben említett, az érintett jogait és szabadságait érintő kockázatok vizsgálatára; és"
        },
        {
          "EN": "(d) the measures envisaged to address the risks, including safeguards, security measures and mechanisms to ensure the protection of personal data and to demonstrate compliance with this Regulation taking into account the rights and legitimate interests of data subjects and other persons concerned.",
          "HU": "d) a kockázatok kezelését célzó intézkedések bemutatására, ideértve a személyes adatok védelmét és az e rendelettel való összhang igazolását szolgáló, az érintettek és más személyek jogait és jogos érdekeit figyelembe vevő garanciákat, biztonsági intézkedéseket és mechanizmusokat."
        },
        {
          "EN": "8. Compliance with approved codes of conduct referred to in Article 40 by the relevant controllers or processors shall be taken into due account in assessing the impact of the processing operations performed by such controllers or processors, in particular for the purposes of a data protection impact assessment.",
          "HU": "(8) Az adatkezelők, illetve adatfeldolgozók által végzett adatkezelési műveletek hatásainak értékelése – különösen az adatvédelmi hatásvizsgálatok – során megfelelően figyelembe kell venni, hogy a szóban forgó adatkezelők, illetve adatfeldolgozók teljesítik-e a 40. cikkben említett jóváhagyott magatartási kódexek előírásait."
        },
        {
          "EN": "9. Where appropriate, the controller shall seek the views of data subjects or their representatives on the intended processing, without prejudice to the protection of commercial or public interests or the security of processing operations.",
          "HU": "(9) Az adatkezelő adott esetben – a kereskedelmi érdekek vagy a közérdek védelmének vagy az adatkezelési műveletek biztonságának sérelme nélkül – kikéri az érintettek vagy képviselőik véleményét a tervezett adatkezelésről."
        },
        {
          "EN": "10. Where processing pursuant to point (c) or (e) of Article 6(1) has a legal basis in Union law or in the law of the Member State to which the controller is subject, that law regulates the specific processing operation or set of operations in question, and a data protection impact assessment has already been carried out as part of a general impact assessment in the context of the adoption of that legal basis, paragraphs 1 to 7 shall not apply unless Member States deem it to be necessary to carry out such an assessment prior to processing activities.",
          "HU": "(10) Ha a 6. cikk (1) bekezdésének c) vagy e) pontja szerinti adatkezelés jogalapját uniós vagy az adatkezelőre alkalmazandó tagállami jog írja elő, és e jog a szóban forgó konkrét adatkezelési műveletet vagy műveleteket is szabályozza, valamint e jogalap elfogadása során egy általános hatásvizsgálat részeként már végeztek adatvédelmi hatásvizsgálatot, akkor az (1)–(7) bekezdést nem kell alkalmazni, kivéve, ha a tagállamok az adatkezelési tevékenységet megelőzően ilyen hatásvizsgálat elvégzését szükségesnek tartják."
        },
        {
          "EN": "11. Where necessary, the controller shall carry out a review to assess if processing is performed in accordance with the data protection impact assessment at least when there is a change of the risk represented by processing operations.",
          "HU": "(11) Az adatkezelő szükség szerint, de legalább az adatkezelési műveletek által jelentett kockázat változása esetén ellenőrzést folytat le annak értékelése céljából, hogy a személyes adatok kezelése az adatvédelmi hatásvizsgálatnak megfelelően történik-e."
        },
        {
          "EN": "Article 36",
          "HU": "36. cikk"
        },
        {
          "EN": "Prior consultation",
          "HU": "Előzetes konzultáció"
        },
        {
          "EN": "1. The controller shall consult the supervisory authority prior to processing where a data protection impact assessment under Article 35 indicates that the processing would result in a high risk in the absence of measures taken by the controller to mitigate the risk.",
          "HU": "(1) Ha a 35. cikkben előírt adatvédelmi hatásvizsgálat megállapítja, hogy az adatkezelés az adatkezelő által a kockázat mérséklése céljából tett intézkedések hiányában valószínűsíthetően magas kockázattal jár, a személyes adatok kezelését megelőzően az adatkezelő konzultál a felügyeleti hatósággal."
        },
        {
          "EN": "2. Where the supervisory authority is of the opinion that the intended processing referred to in paragraph 1 would infringe this Regulation, in particular where the controller has insufficiently identified or mitigated the risk, the supervisory authority shall, within period of up to eight weeks of receipt of the request for consultation, provide written advice to the controller and, where applicable to the processor, and may use any of its powers referred to in Article 58.",
          "HU": "(2) Ha a felügyeleti hatóság véleménye szerint az (1) bekezdés szerint tervezett adatkezelés megsértené e rendeletet – különösen, ha az adatkezelő a kockázatot nem elégséges módon azonosította vagy csökkentette –, a felügyeleti hatóság az adatkezelőnek és adott esetben az adatfeldolgozónak legkésőbb a konzultáció iránti megkeresés kézhezvételétől számított nyolc héten belül írásban tanácsot ad, továbbá gyakorolhatja az 58. cikkben említett hatásköreit."
        },
        {
          "EN": "That period may be extended by six weeks, taking into account the complexity of the intended processing.",
          "HU": "Ez a határidő – a tervezett adatkezelés összetettségétől függően – hat héttel meghosszabbítható."
        },
        {
          "EN": "The supervisory authority shall inform the controller and, where applicable, the processor, of any such extension within one month of receipt of the request for consultation together with the reasons for the delay.",
          "HU": "A felügyeleti hatóság a megkeresés kézhezvételétől számított egy hónapon belül tájékoztatja az adatkezelőt vagy adott esetben az adatfeldolgozót a meghosszabbításról és a késedelem okairól."
        },
        {
          "EN": "Those periods may be suspended until the supervisory authority has obtained information it has requested for the purposes of the consultation.",
          "HU": "Az említett időtartamok felfüggeszthetők arra az időtartamra, amíg a felügyeleti hatóság nem jut hozzá azokhoz az információkhoz, amelyeket adott esetben a konzultáció céljából kért."
        },
        {
          "EN": "3. When consulting the supervisory authority pursuant to paragraph 1, the controller shall provide the supervisory authority with:",
          "HU": "(3) Az adatkezelő a felügyeleti hatósággal folytatott, (1) bekezdés szerinti konzultáció során a felügyeleti hatóságot tájékoztatja:"
        },
        {
          "EN": "(a) where applicable, the respective responsibilities of the controller, joint controllers and processors involved in the processing, in particular for processing within a group of undertakings;",
          "HU": "a) adott esetben az adatkezelésben részt vevő adatkezelő, közös adatkezelők és adatfeldolgozók feladatköreiről, különösen vállalkozáscsoporton belüli adatkezelés esetén;"
        },
        {
          "EN": "(b) the purposes and means of the intended processing;",
          "HU": "b) a tervezett adatkezelés céljairól és módjairól;"
        },
        {
          "EN": "(c) the measures and safeguards provided to protect the rights and freedoms of data subjects pursuant to this Regulation;",
          "HU": "c) az érintettek e rendelet értelmében fennálló jogainak és szabadságainak védelmében hozott intézkedésekről és garanciákról;"
        },
        {
          "EN": "(d) where applicable, the contact details of the data protection officer;",
          "HU": "d) adott esetben, az adatvédelmi tisztviselő elérhetőségeiről;"
        },
        {
          "EN": "(e) the data protection impact assessment provided for in Article 35; and",
          "HU": "e) a 35. cikk szerinti adatvédelmi hatásvizsgálatról; és"
        },
        {
          "EN": "(f) any other information requested by the supervisory authority.",
          "HU": "f) a felügyeleti hatóság által kért minden egyéb információról."
        },
        {
          "EN": "4. Member States shall consult the supervisory authority during the preparation of a proposal for a legislative measure to be adopted by a national parliament, or of a regulatory measure based on such a legislative measure, which relates to processing.",
          "HU": "(4) A tagállamok konzultálnak a felügyeleti hatósággal minden, a személyes adatok kezeléséhez kapcsolódó, a nemzeti parlament által elfogadandó jogalkotási intézkedésre – vagy ilyen jogalkotási intézkedésen alapuló szabályozási intézkedésre – irányuló javaslat előkészítése során."
        },
        {
          "EN": "5. Notwithstanding paragraph 1, Member State law may require controllers to consult with, and obtain prior authorisation from, the supervisory authority in relation to processing by a controller for the performance of a task carried out by the controller in the public interest, including processing in relation to social protection and public health.",
          "HU": "(5) Az (1) bekezdéstől eltérve a tagállami jog előírhatja, hogy az adatkezelők konzultáljanak a felügyeleti hatósággal, és szerezzék be a felügyeleti hatóság előzetes engedélyét akkor is, ha valamely közérdek alapján ellátandó feladat végrehajtásához kapcsolódóan kezelnek személyes adatokat, ideértve a személyes adatoknak a szociális védelemhez és a népegészségügyhöz kapcsolódó kezelését is."
        },
        {
          "EN": "Section 4",
          "HU": "4. szakasz"
        },
        {
          "EN": "Data protection officer",
          "HU": "Adatvédelmi tisztviselő"
        },
        {
          "EN": "Article 37",
          "HU": "37. cikk"
        },
        {
          "EN": "Designation of the data protection officer",
          "HU": "Az adatvédelmi tisztviselő kijelölése"
        },
        {
          "EN": "1. The controller and the processor shall designate a data protection officer in any case where:",
          "HU": "(1) Az adatkezelő és az adatfeldolgozó adatvédelmi tisztviselőt jelöl ki minden olyan esetben, amikor:"
        },
        {
          "EN": "(a) the processing is carried out by a public authority or body, except for courts acting in their judicial capacity;",
          "HU": "a) az adatkezelést közhatalmi szervek vagy egyéb, közfeladatot ellátó szervek végzik, kivéve az igazságszolgáltatási feladatkörükben eljáró bíróságokat;"
        },
        {
          "EN": "(b) the core activities of the controller or the processor consist of processing operations which, by virtue of their nature, their scope and/or their purposes, require regular and systematic monitoring of data subjects on a large scale; or",
          "HU": "b) az adatkezelő vagy az adatfeldolgozó fő tevékenységei olyan adatkezelési műveleteket foglalnak magukban, amelyek jellegüknél, hatókörüknél és/vagy céljaiknál fogva az érintettek rendszeres és szisztematikus, nagymértékű megfigyelését teszik szükségessé;"
        },
        {
          "EN": "(c) the core activities of the controller or the processor consist of processing on a large scale of special categories of data pursuant to Article 9 and personal data relating to criminal convictions and offences referred to in Article 10.",
          "HU": "c) az adatkezelő vagy az adatfeldolgozó fő tevékenységei a személyes adatok 9. cikk szerinti különleges kategóriáinak és a 10. cikkben említett, büntetőjogi felelősség megállapítására vonatkozó határozatokra és bűncselekményekre vonatkozó adatok nagy számban történő kezelését foglalják magukban."
        },
        {
          "EN": "2. A group of undertakings may appoint a single data protection officer provided that a data protection officer is easily accessible from each establishment.",
          "HU": "(2) A vállalkozáscsoport közös adatvédelmi tisztviselőt is kijelölhet, ha az adatvédelmi tisztviselő valamennyi tevékenységi helyről könnyen elérhető."
        },
        {
          "EN": "3. Where the controller or the processor is a public authority or body, a single data protection officer may be designated for several such authorities or bodies, taking account of their organisational structure and size.",
          "HU": "(3) Ha az adatkezelő vagy az adatfeldolgozó közhatalmi szerv vagy egyéb, közfeladatot ellátó szerv, közös adatvédelmi tisztviselő jelölhető ki több ilyen szerv számára, az adott szervek szervezeti felépítésének és méretének figyelembevételével."
        },
        {
          "EN": "4. In cases other than those referred to in paragraph 1, the controller or processor or associations and other bodies representing categories of controllers or processors may or, where required by Union or Member State law shall, designate a data protection officer.",
          "HU": "(4) Az (1) bekezdésben foglaltaktól eltérő esetekben az adatkezelő vagy az adatfeldolgozó, illetve az adatkezelők vagy adatfeldolgozók kategóriáit képviselő egyesületek és egyéb szervezetek adatvédelmi tisztviselőt jelölhetnek ki, vagy ha ezt uniós vagy tagállami jog írja elő, kötelesek kijelölni."
        },
        {
          "EN": "The data protection officer may act for such associations and other bodies representing controllers or processors.",
          "HU": "Az adatkezelőket vagy adatfeldolgozókat képviselő ilyen egyesületek és egyéb szervezetek nevében az adatvédelmi tisztviselő eljárhat."
        },
        {
          "EN": "5. The data protection officer shall be designated on the basis of professional qualities and, in particular, expert knowledge of data protection law and practices and the ability to fulfil the tasks referred to in Article 39.",
          "HU": "(5) Az adatvédelmi tisztviselőt szakmai rátermettség és különösen az adatvédelmi jog és gyakorlat szakértői szintű ismerete, valamint a 39. cikkben említett feladatok ellátására való alkalmasság alapján kell kijelölni."
        },
        {
          "EN": "6. The data protection officer may be a staff member of the controller or processor, or fulfil the tasks on the basis of a service contract.",
          "HU": "(6) Az adatvédelmi tisztviselő az adatkezelő vagy az adatfeldolgozó alkalmazottja lehet, vagy szolgáltatási szerződés keretében láthatja el a feladatait."
        },
        {
          "EN": "7. The controller or the processor shall publish the contact details of the data protection officer and communicate them to the supervisory authority.",
          "HU": "(7) Az adatkezelő vagy az adatfeldolgozó közzéteszi az adatvédelmi tisztviselő nevét és elérhetőségét, és azokat a felügyeleti hatósággal közli."
        },
        {
          "EN": "Article 38",
          "HU": "38. cikk"
        },
        {
          "EN": "Position of the data protection officer",
          "HU": "Az adatvédelmi tisztviselő jogállása"
        },
        {
          "EN": "1. The controller and the processor shall ensure that the data protection officer is involved, properly and in a timely manner, in all issues which relate to the protection of personal data.",
          "HU": "(1) Az adatkezelő és az adatfeldolgozó biztosítja, hogy az adatvédelmi tisztviselő a személyes adatok védelmével kapcsolatos összes ügybe megfelelő módon és időben bekapcsolódjon."
        },
        {
          "EN": "2. The controller and processor shall support the data protection officer in performing the tasks referred to in Article 39 by providing resources necessary to carry out those tasks and access to personal data and processing operations, and to maintain his or her expert knowledge.",
          "HU": "(2) Az adatkezelő és az adatfeldolgozó támogatja az adatvédelmi tisztviselőt a 39. cikkben említett feladatai ellátásában azáltal, hogy biztosítja számára azokat az forrásokat, amelyek e feladatok végrehajtásához, a személyes adatokhoz és az adatkezelési műveletekhez való hozzáféréshez, valamint az adatvédelmi tisztviselő szakértői szintű ismereteinek fenntartásához szükségesek."
        },
        {
          "EN": "3. The controller and processor shall ensure that the data protection officer does not receive any instructions regarding the exercise of those tasks.",
          "HU": "(3) Az adatkezelő és az adatfeldolgozó biztosítja, hogy az adatvédelmi tisztviselő a feladatai ellátásával kapcsolatban utasításokat senkitől ne fogadjon el."
        },
        {
          "EN": "He or she shall not be dismissed or penalised by the controller or the processor for performing his tasks.",
          "HU": "Az adatkezelő vagy az adatfeldolgozó az adatvédelmi tisztviselőt feladatai ellátásával összefüggésben nem bocsáthatja el és szankcióval nem sújthatja."
        },
        {
          "EN": "The data protection officer shall directly report to the highest management level of the controller or the processor.",
          "HU": "Az adatvédelmi tisztviselő közvetlenül az adatkezelő vagy az adatfeldolgozó legfelső vezetésének tartozik felelősséggel."
        },
        {
          "EN": "4. Data subjects may contact the data protection officer with regard to all issues related to processing of their personal data and to the exercise of their rights under this Regulation.",
          "HU": "(4) Az érintettek a személyes adataik kezeléséhez és az e rendelet szerinti jogaik gyakorlásához kapcsolódó valamennyi kérdésben az adatvédelmi tisztviselőhöz fordulhatnak."
        },
        {
          "EN": "5. The data protection officer shall be bound by secrecy or confidentiality concerning the performance of his or her tasks, in accordance with Union or Member State law.",
          "HU": "(5) Az adatvédelmi tisztviselőt feladatai teljesítésével kapcsolatban uniós vagy tagállami jogban meghatározott titoktartási kötelezettség vagy az adatok bizalmas kezelésére vonatkozó kötelezettség köti."
        },
        {
          "EN": "6. The data protection officer may fulfil other tasks and duties.",
          "HU": "(6) Az adatvédelmi tisztviselő más feladatokat is elláthat."
        },
        {
          "EN": "The controller or processor shall ensure that any such tasks and duties do not result in a conflict of interests.",
          "HU": "Az adatkezelő vagy az adatfeldolgozó biztosítja, hogy e feladatokból ne fakadjon összeférhetetlenség."
        },
        {
          "EN": "Article 39",
          "HU": "39. cikk"
        },
        {
          "EN": "Tasks of the data protection officer",
          "HU": "Az adatvédelmi tisztviselő feladatai"
        },
        {
          "EN": "1. The data protection officer shall have at least the following tasks:",
          "HU": "(1) Az adatvédelmi tisztviselő legalább a következő feladatokat ellátja:"
        },
        {
          "EN": "(a) to inform and advise the controller or the processor and the employees who carry out processing of their obligations pursuant to this Regulation and to other Union or Member State data protection provisions;",
          "HU": "a) tájékoztat és szakmai tanácsot ad az adatkezelő vagy az adatfeldolgozó, továbbá az adatkezelést végző alkalmazottak részére az e rendelet, valamint az egyéb uniós vagy tagállami adatvédelmi rendelkezések szerinti kötelezettségeikkel kapcsolatban;"
        },
        {
          "EN": "(b) to monitor compliance with this Regulation, with other Union or Member State data protection provisions and with the policies of the controller or processor in relation to the protection of personal data, including the assignment of responsibilities, awareness-raising and training of staff involved in processing operations, and the related audits;",
          "HU": "b) ellenőrzi az e rendeletnek, valamint az egyéb uniós vagy tagállami adatvédelmi rendelkezéseknek, továbbá az adatkezelő vagy az adatfeldolgozó személyes adatok védelmével kapcsolatos belső szabályainak való megfelelést, ideértve a feladatkörök kijelölését, az adatkezelési műveletekben vevő személyzet tudatosság-növelését és képzését, valamint a kapcsolódó auditokat is;"
        },
        {
          "EN": "(c) to provide advice where requested as regards the data protection impact assessment and monitor its performance pursuant to Article 35;",
          "HU": "c) kérésre szakmai tanácsot ad az adatvédelmi hatásvizsgálatra vonatkozóan, valamint nyomon követi a hatásvizsgálat 35. cikk szerinti elvégzését;"
        },
        {
          "EN": "(d) to cooperate with the supervisory authority;",
          "HU": "d) együttműködik a felügyeleti hatósággal; és"
        },
        {
          "EN": "(e) to act as the contact point for the supervisory authority on issues relating to processing, including the prior consultation referred to in Article 36, and to consult, where appropriate, with regard to any other matter.",
          "HU": "e) az adatkezeléssel összefüggő ügyekben – ideértve a 36. cikkben említett előzetes konzultációt is – kapcsolattartó pontként szolgál a felügyeleti hatóság felé, valamint adott esetben bármely egyéb kérdésben konzultációt folytat vele."
        },
        {
          "EN": "2. The data protection officer shall in the performance of his or her tasks have due regard to the risk associated with processing operations, taking into account the nature, scope, context and purposes of processing.",
          "HU": "(2) Az adatvédelmi tisztviselő feladatait az adatkezelési műveletekhez fűződő kockázat megfelelő figyelembevételével, az adatkezelés jellegére, hatókörére, körülményére és céljára is tekintettel végzi."
        },
        {
          "EN": "Section 5",
          "HU": "5. szakasz"
        },
        {
          "EN": "Codes of conduct and certification",
          "HU": "Magatartási kódexek és tanúsítás"
        },
        {
          "EN": "Article 40",
          "HU": "40. cikk"
        },
        {
          "EN": "Codes of conduct",
          "HU": "Magatartási kódexek"
        },
        {
          "EN": "1. The Member States, the supervisory authorities, the Board and the Commission shall encourage the drawing up of codes of conduct intended to contribute to the proper application of this Regulation, taking account of the specific features of the various processing sectors and the specific needs of micro, small and medium-sized enterprises.",
          "HU": "(1) A tagállamok, a felügyeleti hatóságok, a Testület és a Bizottság ösztönzik olyan magatartási kódexek kidolgozását, amelyek – a különböző adatkezelő ágazatok egyedi jellemzőinek, valamint a mikro-, kis- és középvállalkozások sajátos igényeinek figyelembevételével – segítik e rendelet helyes alkalmazását."
        },
        {
          "EN": "2. Associations and other bodies representing categories of controllers or processors may prepare codes of conduct, or amend or extend such codes, for the purpose of specifying the application of this Regulation, such as with regard to:",
          "HU": "(2) Az adatkezelők vagy az adatfeldolgozók kategóriáit képviselő egyesületek és egyéb szervezetek magatartási kódexeket dolgozhatnak ki, illetve a már meglévő magatartási kódexeket módosíthatják vagy bővíthetik abból a célból, hogy pontosítsák e rendelet alkalmazását, így például az alábbiakkal kapcsolatban:"
        },
        {
          "EN": "(a) fair and transparent processing;",
          "HU": "a) tisztességes és átlátható adatkezelés;"
        },
        {
          "EN": "(b) the legitimate interests pursued by controllers in specific contexts;",
          "HU": "b) az adatkezelők jogos érdekei meghatározott körülmények között;"
        },
        {
          "EN": "(c) the collection of personal data;",
          "HU": "c) az adatgyűjtés;"
        },
        {
          "EN": "(d) the pseudonymisation of personal data;",
          "HU": "d) személyes adatok álnevesítése;"
        },
        {
          "EN": "(e) the information provided to the public and to data subjects;",
          "HU": "e) a nyilvánosság és az érintettek tájékoztatása;"
        },
        {
          "EN": "(f) the exercise of the rights of data subjects;",
          "HU": "f) az érintettek jogainak gyakorlása;"
        },
        {
          "EN": "(g) the information provided to, and the protection of, children, and the manner in which the consent of the holders of parental responsibility over children is to be obtained;",
          "HU": "g) a gyermekek tájékoztatása és védelme, valamint a szülői felügyelet gyakorlójától származó hozzájárulás kikérésének módja;"
        },
        {
          "EN": "(h) the measures and procedures referred to in Articles 24 and 25 and the measures to ensure security of processing referred to in Article 32;",
          "HU": "h) a 24. és a 25. cikkben említett intézkedések és eljárások, valamint a 32. cikkben említett, az adatkezelés biztonságát szolgáló intézkedések;"
        },
        {
          "EN": "(i) the notification of personal data breaches to supervisory authorities and the communication of such personal data breaches to data subjects;",
          "HU": "i) a felügyeleti hatóságok értesítése, valamint az érintettek tájékoztatása az adatvédelmi incidensekről;"
        },
        {
          "EN": "(j) the transfer of personal data to third countries or international organisations; or",
          "HU": "j) a személyes adatok harmadik országok vagy nemzetközi szervezetek részére történő továbbítása; vagy"
        },
        {
          "EN": "(k) out-of-court proceedings and other dispute resolution procedures for resolving disputes between controllers and data subjects with regard to processing, without prejudice to the rights of data subjects pursuant to Articles 77 and 79.",
          "HU": "k) az adatkezelő és az érintettek között az adatkezeléssel kapcsolatban felmerülő vitás ügyek megoldására irányuló, nem bírósági útra tartozó eljárások és egyéb vitarendezési eljárások, az érintettek 77. és 79. cikk szerinti jogainak sérelme nélkül."
        },
        {
          "EN": "3. In addition to adherence by controllers or processors subject to this Regulation, codes of conduct approved pursuant to paragraph 5 of this Article and having general validity pursuant to paragraph 9 of this Article may also be adhered to by controllers or processors that are not subject to this Regulation pursuant to Article 3 in order to provide appropriate safeguards within the framework of personal data transfers to third countries or international organisations under the terms referred to in point (e) of Article 46(2).",
          "HU": "(3) Az e rendelet hatálya alá tartozó adatkezelők vagy adatfeldolgozók általi betartása mellett a 3. cikk értelmében e rendelet hatálya alá nem tartozó adatkezelők vagy adatfeldolgozók is betarthatják az e cikk (5) bekezdése szerint jóváhagyott és e cikk (9) bekezdése alapján általános érvénnyel rendelkező magatartási kódexeket annak érdekében, hogy a 46. cikk (2) bekezdésének e) pontjában foglalt feltételekkel összhangban megfelelő garanciákat nyújtsanak a személyes adatok harmadik országokba vagy nemzetközi szervezetek részére történő továbbítása keretében."
        },
        {
          "EN": "Such controllers or processors shall make binding and enforceable commitments, via contractual or other legally binding instruments, to apply those appropriate safeguards including with regard to the rights of data subjects.",
          "HU": "Az ilyen adatkezelők vagy adatfeldolgozók szerződéses vagy egyéb, jogilag kötelező erejű eszközök révén kötelező erejű és kikényszeríthető kötelezettségvállalást tesznek arra, hogy alkalmazzák a megfelelő garanciákat, ideértve az érintettek jogaira vonatkozókat is."
        },
        {
          "EN": "4. A code of conduct referred to in paragraph 2 of this Article shall contain mechanisms which enable the body referred to in Article 41(1) to carry out the mandatory monitoring of compliance with its provisions by the controllers or processors which undertake to apply it, without prejudice to the tasks and powers of supervisory authorities competent pursuant to Article 55 or 56.",
          "HU": "(4) Az 55. vagy az 56. cikk alapján illetékes felügyeleti hatóság feladat- és hatáskörének sérelme nélkül az e cikk (2) bekezdése szerinti magatartási kódexek olyan mechanizmusokat határoznak meg, amelyek lehetővé teszik a 41. cikk (1) bekezdésében említett szervezet számára, hogy elvégezze annak kötelező ellenőrzését, hogy a kódex alkalmazását vállaló adatkezelők vagy adatfeldolgozók megfelelnek-e a kódex rendelkezéseinek."
        },
        {
          "EN": "5. Associations and other bodies referred to in paragraph 2 of this Article which intend to prepare a code of conduct or to amend or extend an existing code shall submit the draft code, amendment or extension to the supervisory authority which is competent pursuant to Article 55.",
          "HU": "(5) Ha az e cikk (2) bekezdésében említett egyesületek és egyéb szervezetek magatartási kódexet kívánnak kidolgozni vagy meglévő kódexet kívánnak módosítani vagy kibővíteni, a kódextervezetet, a módosítást vagy a kiegészítést benyújtják az 55. cikk alapján illetékes felügyeleti hatóságnak."
        },
        {
          "EN": "The supervisory authority shall provide an opinion on whether the draft code, amendment or extension complies with this Regulation and shall approve that draft code, amendment or extension if it finds that it provides sufficient appropriate safeguards.",
          "HU": "A felügyeleti hatóság véleményt bocsát ki arról, hogy a kódextervezet, a módosítás vagy a kiegészítés összhangban van-e ezzel a rendelettel, és jóváhagyja a kódextervezetet, a módosítást vagy a kiegészítést, amennyiben megállapítja, hogy az elegendő és megfelelő garanciát nyújt."
        },
        {
          "EN": "6. Where the draft code, or amendment or extension is approved in accordance with paragraph 5, and where the code of conduct concerned does not relate to processing activities in several Member States, the supervisory authority shall register and publish the code.",
          "HU": "(6) Ha a kódextervezetet, a módosítást vagy a kiegészítést jóváhagyják az (5) bekezdésben foglaltak szerint és ha az érintett magatartási kódex nem vonatkozik több tagállamot érintő adatkezelési tevékenységekre, a felügyeleti hatóság a kódexet nyilvántartásba veszi és közzéteszi."
        },
        {
          "EN": "7. Where a draft code of conduct relates to processing activities in several Member States, the supervisory authority which is competent pursuant to Article 55 shall, before approving the draft code, amendment or extension, submit it in the procedure referred to in Article 63 to the Board which shall provide an opinion on whether the draft code, amendment or extension complies with this Regulation or, in the situation referred to in paragraph 3 of this Article, provides appropriate safeguards.",
          "HU": "(7) Ha a magatartási kódex tervezete több tagállamot is érintő adatkezelési tevékenységekre vonatkozik, az 55. cikk alapján illetékes felügyeleti hatóság a kódextervezet, a módosítás vagy a kiegészítés jóváhagyását megelőzően a 63. cikkben említett eljárás keretében benyújtja azt a Testületnek, amely véleményt bocsát ki arról, hogy a kódextervezet, a módosítás vagy a kiegészítés összhangban van-e ezen rendelettel, illetve az e cikk (3) bekezdésében említett esetben arról, hogy megfelelő garanciákat nyújt-e."
        },
        {
          "EN": "8. Where the opinion referred to in paragraph 7 confirms that the draft code, amendment or extension complies with this Regulation, or, in the situation referred to in paragraph 3, provides appropriate safeguards, the Board shall submit its opinion to the Commission.",
          "HU": "(8) Ha a (7) bekezdésben említett vélemény megerősíti, hogy a magatartási kódex tervezete, a módosítás vagy a kiegészítés összhangban van e rendelettel, illetve a (3) bekezdésben említett esetben azt, hogy megfelelő garanciákat nyújt, a Testület benyújtja véleményét a Bizottságnak."
        },
        {
          "EN": "9. The Commission may, by way of implementing acts, decide that the approved code of conduct, amendment or extension submitted to it pursuant to paragraph 8 of this Article have general validity within the Union.",
          "HU": "(9) A Bizottság végrehajtási jogi aktusok útján határozhat arról, hogy a hozzá az e cikk (8) bekezdése szerint benyújtott, jóváhagyott magatartási kódex, módosítás vagy kiegészítés az Unió területén általános érvénnyel rendelkezik."
        },
        {
          "EN": "Those implementing acts shall be adopted in accordance with the examination procedure set out in Article 93(2).",
          "HU": "Ezeket a végrehajtási jogi aktusokat a 93. cikk (2) bekezdésében említett vizsgálóbizottsági eljárásnak megfelelően kell elfogadni."
        },
        {
          "EN": "10. The Commission shall ensure appropriate publicity for the approved codes which have been decided as having general validity in accordance with paragraph 9.",
          "HU": "(10) A Bizottság biztosítja azon jóváhagyott kódexek megfelelő nyilvánosságát, amelyek esetében a (9) bekezdéssel összhangban úgy határozott, hogy általánosan érvényesek."
        },
        {
          "EN": "11. The Board shall collate all approved codes of conduct, amendments and extensions in a register and shall make them publicly available by way of appropriate means.",
          "HU": "(11) A Testület valamennyi jóváhagyott magatartási kódexet, módosítást és kiegészítést egy nyilvántartásban állítja össze, és megfelelő módon nyilvánosan elérhetővé teszi őket."
        },
        {
          "EN": "Article 41",
          "HU": "41. cikk"
        },
        {
          "EN": "Monitoring of approved codes of conduct",
          "HU": "A jóváhagyott magatartási kódexeknek való megfelelés ellenőrzése"
        },
        {
          "EN": "1. Without prejudice to the tasks and powers of the competent supervisory authority under Articles 57 and 58, the monitoring of compliance with a code of conduct pursuant to Article 40 may be carried out by a body which has an appropriate level of expertise in relation to the subject-matter of the code and is accredited for that purpose by the competent supervisory authority.",
          "HU": "(1) Az 57. vagy az 58. cikk alapján illetékes felügyeleti hatóság feladat- és hatásköreinek sérelme nélkül a 40. cikk szerinti magatartási kódexnek való megfelelés ellenőrzését olyan szervezet végezheti, amely a kódex tárgya tekintetében megfelelő szakértelemmel rendelkezik, és amelyet az illetékes felügyeleti hatóság erre akkreditál."
        },
        {
          "EN": "2. A body as referred to in paragraph 1 may be accredited to monitor compliance with a code of conduct where that body has:",
          "HU": "(2) Az (1) bekezdésben említett szervezetet a magatartási kódexnek való megfelelés ellenőrzésére abban az esetben lehet akkreditálni, ha a szervezet:"
        },
        {
          "EN": "(a) demonstrated its independence and expertise in relation to the subject-matter of the code to the satisfaction of the competent supervisory authority;",
          "HU": "a) az illetékes felügyeleti hatóság számára kielégítő bizonyítékot szolgáltatott arra nézve, hogy független, és a kódex tárgyában szakértelemmel bír;"
        },
        {
          "EN": "(b) established procedures which allow it to assess the eligibility of controllers and processors concerned to apply the code, to monitor their compliance with its provisions and to periodically review its operation;",
          "HU": "b) létrehozott olyan eljárásokat, amelyek révén meg tudja állapítani, hogy az érintett adatkezelők és adatfeldolgozók alkalmasak-e a kódex alkalmazására, ellenőrizni tudja, hogy az érintett adatkezelők és adatfeldolgozók betartják-e a kódex rendelkezéseit, és rendszeres időközönként felül tudja vizsgálni a kódex működését;"
        },
        {
          "EN": "(c) established procedures and structures to handle complaints about infringements of the code or the manner in which the code has been, or is being, implemented by a controller or processor, and to make those procedures and structures transparent to data subjects and the public; and",
          "HU": "c) létrehozott olyan eljárásokat és struktúrákat, amelyek révén kezelni tudja a kódex megsértésével vagy a kódex adatkezelő vagy adatfeldolgozó általi alkalmazásával kapcsolatos panaszokat, és ezeket az eljárásokat és struktúrákat az érintettek és a nyilvánosság számára átláthatóvá teszi; és"
        },
        {
          "EN": "(d) demonstrated to the satisfaction of the competent supervisory authority that its tasks and duties do not result in a conflict of interests.",
          "HU": "d) az illetékes felügyeleti hatóság számára kielégítő bizonyítékot szolgáltat arra nézve, hogy feladataival kapcsolatban nem áll fenn összeférhetetlenség."
        },
        {
          "EN": "3. The competent supervisory authority shall submit the draft criteria for accreditation of a body as referred to in paragraph 1 of this Article to the Board pursuant to the consistency mechanism referred to in Article 63.",
          "HU": "(3) A 63. cikkben említett, egységességi mechanizmusnak megfelelően az illetékes felügyeleti hatóság az e cikk (1) bekezdésében említett szervezet akkreditációjával kapcsolatos szempontok tervezetét a Testületnek benyújtja."
        },
        {
          "EN": "4. Without prejudice to the tasks and powers of the competent supervisory authority and the provisions of Chapter VIII, a body as referred to in paragraph 1 of this Article shall, subject to appropriate safeguards, take appropriate action in cases of infringement of the code by a controller or processor, including suspension or exclusion of the controller or processor concerned from the code.",
          "HU": "(4) Az illetékes felügyeleti hatóság feladat- és hatásköreinek, valamint a VIII. fejezet rendelkezéseinek sérelme nélkül az e cikk (1) bekezdésében említett szervezet a kódex valamely adatkezelő vagy adatfeldolgozó általi megsértése esetén – megfelelő garanciák mellett – megfelelő intézkedéseket tesz, beleértve az érintett adatkezelő vagy adatfeldolgozó felfüggesztését vagy kizárását a kódex alkalmazásából."
        },
        {
          "EN": "It shall inform the competent supervisory authority of such actions and the reasons for taking them.",
          "HU": "Ezekről az intézkedésekről és azok indokairól az illetékes felügyeleti hatóságot tájékoztatja."
        },
        {
          "EN": "5. The competent supervisory authority shall revoke the accreditation of a body as referred to in paragraph 1 if the conditions for accreditation are not, or are no longer, met or where actions taken by the body infringe this Regulation.",
          "HU": "(5) Az illetékes felügyeleti hatóság visszavonja az (1) bekezdésben említett szervezet akkreditációját, ha az az akkreditációs feltételeknek nem vagy már nem felel meg, vagy ha a szerv intézkedései megsértik e rendeletet."
        },
        {
          "EN": "6. This Article shall not apply to processing carried out by public authorities and bodies.",
          "HU": "(6) Ez a cikk nem alkalmazandó a közhatalmi szervek és közfeladatot ellátó egyéb szervek által végzett adatkezelésre."
        },
        {
          "EN": "Article 42",
          "HU": "42. cikk"
        },
        {
          "EN": "Certification",
          "HU": "Tanúsítás"
        },
        {
          "EN": "1. The Member States, the supervisory authorities, the Board and the Commission shall encourage, in particular at Union level, the establishment of data protection certification mechanisms and of data protection seals and marks, for the purpose of demonstrating compliance with this Regulation of processing operations by controllers and processors.",
          "HU": "(1) A tagállamok, a felügyeleti hatóságok, a Testület, valamint a Bizottság – különösen uniós szinten – ösztönzik olyan adatvédelmi tanúsítási mechanizmusok, valamint adatvédelmi bélyegzők, illetve jelölések létrehozását, amelyek bizonyítják, hogy az adatkezelő vagy adatfeldolgozó által végrehajtott adatkezelési műveletek megfelelnek e rendelet előírásainak."
        },
        {
          "EN": "The specific needs of micro, small and medium-sized enterprises shall be taken into account.",
          "HU": "Figyelembe kell venni a mikro-, kis- és középvállalkozások sajátos igényeit."
        },
        {
          "EN": "2. In addition to adherence by controllers or processors subject to this Regulation, data protection certification mechanisms, seals or marks approved pursuant to paragraph 5 of this Article may be established for the purpose of demonstrating the existence of appropriate safeguards provided by controllers or processors that are not subject to this Regulation pursuant to Article 3 within the framework of personal data transfers to third countries or international organisations under the terms referred to in point (f) of Article 46(2).",
          "HU": "(2) Az e rendelet hatálya alá tartozó adatkezelők vagy adatfeldolgozók általi betartása mellett az (5) bekezdésnek megfelelően jóváhagyott adatvédelmi tanúsítási mechanizmusokat, bélyegzőket vagy jelöléseket annak bizonyítására is létre lehet hozni, hogy a 3. cikk értelmében e rendelet hatálya alá nem tartozó adatkezelők vagy adatfeldolgozók a 46. cikk (2) bekezdésének f) pontjában foglalt feltételekkel összhangban megfelelő garanciákat nyújtsanak a személyes adatok harmadik országokba vagy nemzetközi szervezetek részére történő továbbítása keretében."
        },
        {
          "EN": "Such controllers or processors shall make binding and enforceable commitments, via contractual or other legally binding instruments, to apply those appropriate safeguards, including with regard to the rights of data subjects.",
          "HU": "Az ilyen adatkezelők vagy adatfeldolgozók szerződéses vagy egyéb, jogilag kötelező erejű eszközök révén kötelező erejű és kikényszeríthető kötelezettségvállalást tesznek arra, hogy alkalmazzák a megfelelő garanciákat, ideértve az érintettek jogaira vonatkozókat is."
        },
        {
          "EN": "3. The certification shall be voluntary and available via a process that is transparent.",
          "HU": "(3) A tanúsításnak önkéntesnek kell lennie, és átlátható eljáráson keresztül kell elérhetővé tenni."
        },
        {
          "EN": "4. A certification pursuant to this Article does not reduce the responsibility of the controller or the processor for compliance with this Regulation and is without prejudice to the tasks and powers of the supervisory authorities which are competent pursuant to Article 55 or 56.",
          "HU": "(4) Az e cikk szerinti tanúsítás nem csökkenti az adatkezelő vagy adatfeldolgozó e rendelet betartásáért való felelősségét, és nem sérti az 55. vagy az 56. cikk alapján illetékes felügyeleti hatóságok feladat- és hatáskörét."
        },
        {
          "EN": "5. A certification pursuant to this Article shall be issued by the certification bodies referred to in Article 43 or by the competent supervisory authority, on the basis of criteria approved by that competent supervisory authority pursuant to Article 58(3) or by the Board pursuant to Article 63.",
          "HU": "(5) Az e cikk szerinti tanúsítványt a 43. cikkben említett tanúsító szervezetek vagy az illetékes felügyeleti hatóságok állítják ki, az illetékes felügyeleti hatóság által az 58. cikk (3) bekezdésének, vagy a Testület által a 63. cikknek megfelelően jóváhagyott szempontok alapján."
        },
        {
          "EN": "Where the criteria are approved by the Board, this may result in a common certification, the European Data Protection Seal.",
          "HU": "Ha a szempontokat a Testület hagyja jóvá, ennek eredményeként közös tanúsítvány, az európai adatvédelmi bélyegző állítható ki."
        },
        {
          "EN": "6. The controller or processor which submits its processing to the certification mechanism shall provide the certification body referred to in Article 43, or where applicable, the competent supervisory authority, with all information and access to its processing activities which are necessary to conduct the certification procedure.",
          "HU": "(6) Az adatkezelő vagy adatfeldolgozó, amely az adatkezelési tevékenységét aláveti a tanúsítási mechanizmusnak, a 43. cikkben említett tanúsító szervezet vagy adott esetben az illetékes felügyeleti hatóság részére minden olyan információt megad és minden olyan adatkezelési tevékenységéhez hozzáférést biztosít, amely a tanúsítási eljárás lefolytatásához szükséges."
        },
        {
          "EN": "7. Certification shall be issued to a controller or processor for a maximum period of three years and may be renewed, under the same conditions, provided that the relevant requirements continue to be met.",
          "HU": "(7) Az adatkezelő vagy adatfeldolgozó részére a tanúsítványt legfeljebb hároméves időtartamra lehet kiállítani, amely azonos feltételek mellett a tanúsítvány megújítható, feltéve, hogy a vonatkozó követelmények továbbra is teljesülnek."
        },
        {
          "EN": "Certification shall be withdrawn, as applicable, by the certification bodies referred to in Article 43 or by the competent supervisory authority where the requirements for the certification are not or are no longer met.",
          "HU": "Adott esetben, ha a tanúsításra vonatkozó követelmények nem vagy már nem teljesülnek, a 43. cikkben említett tanúsító szervezet vagy az illetékes felügyeleti hatóság a tanúsítványt visszavonja."
        },
        {
          "EN": "8. The Board shall collate all certification mechanisms and data protection seals and marks in a register and shall make them publicly available by any appropriate means.",
          "HU": "(8) A Testület valamennyi tanúsítási mechanizmust és adatvédelmi bélyegzőt, illetve jelölést egy nyilvántartásban állítja össze, és megfelelő módon nyilvánosan elérhetővé teszi őket."
        },
        {
          "EN": "Article 43",
          "HU": "43. cikk"
        },
        {
          "EN": "Certification bodies",
          "HU": "Tanúsító szervezetek"
        },
        {
          "EN": "1. Without prejudice to the tasks and powers of the competent supervisory authority under Articles 57 and 58, certification bodies which have an appropriate level of expertise in relation to data protection shall, after informing the supervisory authority in order to allow it to exercise its powers pursuant to point (h) of Article 58(2) where necessary, issue and renew certification.",
          "HU": "(1) Az illetékes felügyeleti hatóság 57. és 58. cikk alapján fennálló feladat- és hatásköreinek sérelme nélkül a tanúsítvány kiállítását és megújítását – a felügyeleti hatóság a célból való tájékoztatását követően, hogy az szükség esetén gyakorolhassa az 58. cikk (2) bekezdésének h) pontja szerinti hatáskörét – olyan tanúsító szervezet végzi, amely az adatvédelem terén megfelelő szakértelemmel rendelkezik."
        },
        {
          "EN": "Member States shall ensure that those certification bodies are accredited by one or both of the following:",
          "HU": "A tagállamok biztosítják, hogy e tanúsító szervezetek akkreditációját az alábbiak közül egy vagy mindkettő elvégezte:"
        },
        {
          "EN": "(a) the supervisory authority which is competent pursuant to Article 55 or 56;",
          "HU": "a) az a felügyeleti hatóság, amelyik az 55. vagy az 56. cikk alapján illetékes;"
        },
        {
          "EN": "(b) the national accreditation body named in accordance with Regulation (EC) No 765/2008 of the European Parliament and of the Council [20](20) in accordance with EN-ISO/IEC 17065/2012 and with the additional requirements established by the supervisory authority which is competent pursuant to Article 55 or 56.",
          "HU": "b) az EN-ISO/IEC 17065/2012 szabványnak megfelelően, a 765/2008/EK európai parlamenti és tanácsi rendelettel [20](20), valamint az 55. vagy az 56. cikk alapján illetékes a felügyeleti hatóság által megállapított kiegészítő követelményekkel összhangban megnevezett nemzeti akkreditáló testület."
        },
        {
          "EN": "2. Certification bodies referred to in paragraph 1 shall be accredited in accordance with that paragraph only where they have:",
          "HU": "(2) Az (1) bekezdésben említett tanúsító szervezetet kizárólag abban az esetben lehet az említett bekezdéssel összhangban akkreditálni, ha:"
        },
        {
          "EN": "(a) demonstrated their independence and expertise in relation to the subject-matter of the certification to the satisfaction of the competent supervisory authority;",
          "HU": "a) az illetékes felügyeleti hatóság számára kielégítő bizonyítékot szolgáltatott arra nézve, hogy független, és a tanúsítás tárgyában szakértelemmel bír;"
        },
        {
          "EN": "(b) undertaken to respect the criteria referred to in Article 42(5) and approved by the supervisory authority which is competent pursuant to Article 55 or 56 or by the Board pursuant to Article 63;",
          "HU": "b) vállalja, hogy tiszteletben tartja a 42. cikk (5) bekezdésében említett, az 55. vagy az 56. cikk alapján illetékes felügyeleti hatóság, illetve a 63. cikknek megfelelően a Testület által jóváhagyott szempontokat;"
        },
        {
          "EN": "(c) established procedures for the issuing, periodic review and withdrawal of data protection certification, seals and marks;",
          "HU": "c) eljárásokat hozott létre az adatvédelmi tanúsítványok, bélyegzők, illetve jelölések kibocsátására, rendszeres időközönkénti felülvizsgálatára és visszavonására;"
        },
        {
          "EN": "(d) established procedures and structures to handle complaints about infringements of the certification or the manner in which the certification has been, or is being, implemented by the controller or processor, and to make those procedures and structures transparent to data subjects and the public; and",
          "HU": "d) olyan eljárásokat és struktúrákat hozott létre, amelyek révén kezelni tudja a tanúsítvánnyal kapcsolatos jogsértésekkel vagy annak az adatkezelő vagy adatfeldolgozó általi alkalmazásával kapcsolatos panaszokat, és ezeket az eljárásokat és struktúrákat az érintettek és a nyilvánosság számára átláthatóvá tudja tenni; és"
        },
        {
          "EN": "(e) demonstrated, to the satisfaction of the competent supervisory authority, that their tasks and duties do not result in a conflict of interests.",
          "HU": "e) az illetékes felügyeleti hatóság számára kielégítő bizonyítékot szolgáltat arra nézve, hogy feladataival kapcsolatban nem áll fenn összeférhetetlenség."
        },
        {
          "EN": "3. The accreditation of certification bodies as referred to in paragraphs 1 and 2 of this Article shall take place on the basis of criteria approved by the supervisory authority which is competent pursuant to Article 55 or 56 or by the Board pursuant to Article 63.",
          "HU": "(3) Az e cikk (1) és (2) bekezdésében említett tanúsító szervezet akkreditálását az 55. vagy az 56. cikk alapján illetékes felügyeleti hatóság által, illetve az 57. cikknek megfelelően a Testület által jóváhagyott szempontok alapján kell elvégezni."
        },
        {
          "EN": "In the case of accreditation pursuant to point (b) of paragraph 1 of this Article, those requirements shall complement those envisaged in Regulation (EC) No 765/2008 and the technical rules that describe the methods and procedures of the certification bodies.",
          "HU": "Ha az akkreditálásra az e cikk (1) bekezdése b) pontja alapján kerül sor, ezek a követelmények kiegészítik a 765/2008/EK rendeletben előirányzott követelményeket és a tanúsító szervek módszereire és eljárásaira vonatkozó technikai szabályokat."
        },
        {
          "EN": "4. The certification bodies referred to in paragraph 1 shall be responsible for the proper assessment leading to the certification or the withdrawal of such certification without prejudice to the responsibility of the controller or processor for compliance with this Regulation.",
          "HU": "(4) Az adatkezelő vagy adatfeldolgozó e rendelet betartására vonatkozó felelősségének sérelme nélkül a tanúsítás vagy annak visszavonása alapjául szolgáló megfelelő vizsgálat lefolytatásáért az (1) bekezdésben említett tanúsító szervezet felelős."
        },
        {
          "EN": "The accreditation shall be issued for a maximum period of five years and may be renewed on the same conditions provided that the certification body meets the requirements set out in this Article.",
          "HU": "Az akkreditációt legfeljebb ötéves időtartamra lehet megadni, és az azonos feltételek mellett mindaddig megújítható, feltéve hogy az adott tanúsító szervezet teljesíti az e cikkben meghatározott követelményeket."
        },
        {
          "EN": "5. The certification bodies referred to in paragraph 1 shall provide the competent supervisory authorities with the reasons for granting or withdrawing the requested certification.",
          "HU": "(5) Az (1) bekezdésben említett tanúsító szervezet közli az illetékes felügyeleti hatósággal a kért tanúsítvány megadásának vagy visszavonásának okait."
        },
        {
          "EN": "6. The requirements referred to in paragraph 3 of this Article and the criteria referred to in Article 42(5) shall be made public by the supervisory authority in an easily accessible form.",
          "HU": "(6) Az e cikk (3) bekezdésében említett követelményeket és a 42. cikk (5) bekezdésében említett szempontokat a felügyeleti hatóság könnyen hozzáférhető formában közzéteszi."
        },
        {
          "EN": "The supervisory authorities shall also transmit those requirements and criteria to the Board.",
          "HU": "A felügyeleti hatóságok ezeket a követelményeket és szempontokat a Testület részére is továbbítják."
        },
        {
          "EN": "The Board shall collate all certification mechanisms and data protection seals in a register and shall make them publicly available by any appropriate means.",
          "HU": "A Testület valamennyi tanúsítási mechanizmust és adatvédelmi bélyegzőt egy nyilvántartásban állítja össze, és azokat megfelelő módon nyilvánosan elérhetővé teszi."
        },
        {
          "EN": "7. Without prejudice to Chapter VIII, the competent supervisory authority or the national accreditation body shall revoke an accreditation of a certification body pursuant to paragraph 1 of this Article where the conditions for the accreditation are not, or are no longer, met or where actions taken by a certification body infringe this Regulation.",
          "HU": "(7) A VIII. fejezet sérelme nélkül az illetékes felügyeleti hatóság vagy a nemzeti akkreditáló testület visszavonja az e cikk (1) bekezdésében említett tanúsító szervezet akkreditációját, ha az az akkreditációs feltételeknek nem vagy már nem felel meg, vagy ha a tanúsító szervezet intézkedései megsértik e rendeletet."
        },
        {
          "EN": "8. The Commission shall be empowered to adopt delegated acts in accordance with Article 92 for the purpose of specifying the requirements to be taken into account for the data protection certification mechanisms referred to in Article 42(1).",
          "HU": "(8) A Bizottság felhatalmazást kap arra, hogy a 42. cikk (1) bekezdésében említett adatvédelmi tanúsítási mechanizmusok tekintetében figyelembe veendő követelmények meghatározása érdekében a 92. cikkel összhangban felhatalmazáson alapuló jogi aktusokat fogadjon el."
        },
        {
          "EN": "9. The Commission may adopt implementing acts laying down technical standards for certification mechanisms and data protection seals and marks, and mechanisms to promote and recognise those certification mechanisms, seals and marks.",
          "HU": "(9) A Bizottság végrehajtási jogi aktusok elfogadása révén a tanúsítási mechanizmusokra és az adatvédelmi bélyegzőkre, illetve jelölésekre vonatkozó technikai szabványokat, valamint a tanúsítási mechanizmusok és a bélyegzők, illetve jelölések népszerűsítésére és elismerésére szolgáló mechanizmusokat határozhat meg."
        },
        {
          "EN": "Those implementing acts shall be adopted in accordance with the examination procedure referred to in Article 93(2).",
          "HU": "Ezeket a végrehajtási jogi aktusokat a 93. cikk (2) bekezdésében említett vizsgálóbizottsági eljárásnak megfelelően kell elfogadni."
        },
        {
          "EN": "CHAPTER V",
          "HU": "V. FEJEZET"
        },
        {
          "EN": "Transfers of personal data to third countries or international organisations",
          "HU": "A személyes adatok harmadik országokba vagy nemzetközi szervezetek részére történő továbbítása"
        },
        {
          "EN": "Article 44",
          "HU": "44. cikk"
        },
        {
          "EN": "General principle for transfers",
          "HU": "Az adattovábbításra vonatkozó általános elv"
        },
        {
          "EN": "Any transfer of personal data which are undergoing processing or are intended for processing after transfer to a third country or to an international organisation shall take place only if, subject to the other provisions of this Regulation, the conditions laid down in this Chapter are complied with by the controller and processor, including for onward transfers of personal data from the third country or an international organisation to another third country or to another international organisation.",
          "HU": "Olyan személyes adatok továbbítására – ideértve a személyes adatok harmadik országból vagy nemzetközi szervezettől egy további harmadik országba vagy további nemzetközi szervezet részére történő újbóli továbbítását is –, amelyeket harmadik országba vagy nemzetközi szervezet részére történő továbbításukat követően adatkezelésnek vetnek alá vagy szándékoznak alávetni, csak abban az esetben kerülhet sor, e rendelet egyéb rendelkezéseinek betartása mellett, ha az adatkezelő és az adatfeldolgozó teljesíti az e fejezetben rögzített feltételeket."
        },
        {
          "EN": "All provisions in this Chapter shall be applied in order to ensure that the level of protection of natural persons guaranteed by this Regulation is not undermined.",
          "HU": "E fejezet valamennyi rendelkezését alkalmazni kell annak biztosítása érdekében, hogy a természetes személyek számára e rendeletben garantált védelem szintje ne sérüljön."
        },
        {
          "EN": "Article 45",
          "HU": "45. cikk"
        },
        {
          "EN": "Transfers on the basis of an adequacy decision",
          "HU": "Adattovábbítás megfelelőségi határozat alapján"
        },
        {
          "EN": "1. A transfer of personal data to a third country or an international organisation may take place where the Commission has decided that the third country, a territory or one or more specified sectors within that third country, or the international organisation in question ensures an adequate level of protection.",
          "HU": "(1) Személyes adatok harmadik országba vagy nemzetközi szervezet részére történő továbbítására akkor kerülhet sor, ha a Bizottság megállapította, hogy a harmadik ország, a harmadik ország valamely területe, vagy egy vagy több meghatározott ágazata, vagy a szóban forgó nemzetközi szervezet megfelelő védelmi szintet biztosít."
        },
        {
          "EN": "Such a transfer shall not require any specific authorisation.",
          "HU": "Az ilyen adattovábbításhoz nem szükséges külön engedély."
        },
        {
          "EN": "2. When assessing the adequacy of the level of protection, the Commission shall, in particular, take account of the following elements:",
          "HU": "(2) A védelmi szint megfelelőségének mérlegelése során a Bizottság különösen a következő tényezőket veszi figyelembe:"
        },
        {
          "EN": "(a) the rule of law, respect for human rights and fundamental freedoms, relevant legislation, both general and sectoral, including concerning public security, defence, national security and criminal law and the access of public authorities to personal data, as well as the implementation of such legislation, data protection rules, professional rules and security measures, including rules for the onward transfer of personal data to another third country or international organisation which are complied with in that country or international organisation, case-law, as well as effective and enforceable data subject rights and effective administrative and judicial redress for the data subjects whose personal data are being transferred;",
          "HU": "a) a jogállamiság, az emberi jogok és alapvető szabadságok tiszteletben tartása, a vonatkozó általános és ágazati jogszabályok, köztük a közbiztonságra, a védelemre, valamint a nemzetbiztonságra vonatkozó és a büntetőjogi rendelkezések, a közhatalmi szerveknek a személyes adatokhoz való hozzáférését szabályozó rendelkezések, valamint e jogszabályok végrehajtása, adatvédelmi szabályok, szakmai szabályok és biztonsági intézkedések, ideértve a személyes adatok másik harmadik ország vagy nemzetközi szervezet részére történő újbóli továbbítására vonatkozó azon szabályokat, amelyeknek az adott országban vagy nemzetközi szervezeten belül meg kell felelni; ítélkezési gyakorlat, továbbá az, hogy az érintettek, akiknek a személyes adatait továbbítják, rendelkeznek-e hatékonyan érvényesíthető – a hatékony közigazgatási és bírósági jogorvoslatot is magukban foglaló – jogokkal;"
        },
        {
          "EN": "(b) the existence and effective functioning of one or more independent supervisory authorities in the third country or to which an international organisation is subject, with responsibility for ensuring and enforcing compliance with the data protection rules, including adequate enforcement powers, for assisting and advising the data subjects in exercising their rights and for cooperation with the supervisory authorities of the Member States; and",
          "HU": "b) a szóban forgó harmadik országban létezik-e egy vagy több olyan független és hatékonyan működő felügyeleti hatóság – a szóban forgó nemzetközi szervezet pedig ilyen hatóság ellenőrzése alatt áll-e –, amely felelős az adatvédelmi szabályok betartásának biztosításáért és végrehajtásáért, rendelkezik többek között megfelelő kikényszerítési hatáskörrel, és felelős az érintettek részére történő, a jogaik gyakorlásával kapcsolatos segítségnyújtásért és tanácsadásért, valamint a tagállami felügyeleti hatóságokkal való együttműködésért; továbbá"
        },
        {
          "EN": "(c) the international commitments the third country or international organisation concerned has entered into, or other obligations arising from legally binding conventions or instruments as well as from its participation in multilateral or regional systems, in particular in relation to the protection of personal data.",
          "HU": "c) a szóban forgó harmadik ország vagy nemzetközi szervezet nemzetközi kötelezettségei vagy egyéb, jogilag kötelező erejű egyezményekből vagy jogi eszközökből, valamint többoldalú vagy regionális rendszerekben való részvételéből eredő – különösen a személyes adatok védelmével kapcsolatos – kötelezettségei."
        },
        {
          "EN": "3. The Commission, after assessing the adequacy of the level of protection, may decide, by means of implementing act, that a third country, a territory or one or more specified sectors within a third country, or an international organisation ensures an adequate level of protection within the meaning of paragraph 2 of this Article.",
          "HU": "(3) A védelmi szint megfelelőségének értékelését követően a Bizottság végrehajtási jogi aktusok útján határozhat arról, hogy a harmadik ország, a harmadik ország valamely területe, illetve egy vagy több meghatározott ágazata, illetve valamely nemzetközi szervezet a (2) bekezdés értelmében biztosítja a megfelelő védelmi szintet."
        },
        {
          "EN": "The implementing act shall provide for a mechanism for a periodic review, at least every four years, which shall take into account all relevant developments in the third country or international organisation.",
          "HU": "A végrehajtási jogi aktusban rendelkezni kell egy rendszeres, legalább négyévente elvégzendő felülvizsgálatra irányuló mechanizmusról, amely az adott harmadik országban vagy nemzetközi szervezetnél végbement valamennyi releváns fejleményt figyelembe vesz."
        },
        {
          "EN": "The implementing act shall specify its territorial and sectoral application and, where applicable, identify the supervisory authority or authorities referred to in point (b) of paragraph 2 of this Article.",
          "HU": "A végrehajtási jogi aktusban pontosan rögzíteni kell annak területi és ágazati alkalmazási körét, és – adott esetben – meg kell határozni a (2) bekezdés b) pontjában említett felügyeleti hatóságot, illetve hatóságokat."
        },
        {
          "EN": "The implementing act shall be adopted in accordance with the examination procedure referred to in Article 93(2).",
          "HU": "A végrehajtási jogi aktust a 93. cikk (2) bekezdésében említett vizsgálóbizottsági eljárásnak megfelelően kell elfogadni."
        },
        {
          "EN": "4. The Commission shall, on an ongoing basis, monitor developments in third countries and international organisations that could affect the functioning of decisions adopted pursuant to paragraph 3 of this Article and decisions adopted on the basis of Article 25(6) of Directive 95/46/EC.",
          "HU": "(4) A Bizottság folyamatosan figyelemmel kíséri a harmadik országokban és a nemzetközi szervezeteknél végbement azon fejleményeket, amelyek érinthetik az e cikk (3) bekezdése, valamint a 95/46/EK irányelv 25. cikkének (6) bekezdése alapján elfogadott határozatok végrehajtását."
        },
        {
          "EN": "5. The Commission shall, where available information reveals, in particular following the review referred to in paragraph 3 of this Article, that a third country, a territory or one or more specified sectors within a third country, or an international organisation no longer ensures an adequate level of protection within the meaning of paragraph 2 of this Article, to the extent necessary, repeal, amend or suspend the decision referred to in paragraph 3 of this Article by means of implementing acts without retro-active effect.",
          "HU": "(5) A Bizottság – a rendelkezésekre álló információk, különösen az e cikk (3) bekezdésében említett felülvizsgálat alapján – határoz arról, hogy a harmadik ország, a harmadik ország valamely területe vagy meghatározott ágazata, vagy valamely nemzetközi szervezet már nem biztosítja az e cikk (2) bekezdése értelmében vett megfelelő védelmi szintet, és a szükséges mértékben, az e cikk (3) bekezdésében említett korábbi határozatot végrehajtási jogi aktus útján, visszaható hatály nélkül hatályon kívül helyezi, módosítja vagy felfüggeszti."
        },
        {
          "EN": "Those implementing acts shall be adopted in accordance with the examination procedure referred to in Article 93(2).",
          "HU": "A végrehajtási jogi aktust a 93. cikk (2) bekezdésében említett vizsgálóbizottsági eljárásnak, rendkívüli sürgősséget igénylő esetekben pedig a 93. cikk (3) bekezdésében említett eljárásnak megfelelően kell elfogadni."
        },
        {
          "EN": "On duly justified imperative grounds of urgency, the Commission shall adopt immediately applicable implementing acts in accordance with the procedure referred to in Article 93(3).",
          "HU": "A Bizottság kellően indokolt, rendkívül sürgős esetben a 93. cikk (3) bekezdésében említett eljárásnak megfelelően azonnal alkalmazandó végrehajtási jogi aktusokat fogad el."
        },
        {
          "EN": "6. The Commission shall enter into consultations with the third country or international organisation with a view to remedying the situation giving rise to the decision made pursuant to paragraph 5.",
          "HU": "(6) A Bizottság konzultációt kezdeményez a harmadik országgal vagy nemzetközi szervezettel az (5) bekezdés szerinti határozat meghozatalához vezető helyzet orvoslását illetően."
        },
        {
          "EN": "7. A decision pursuant to paragraph 5 of this Article is without prejudice to transfers of personal data to the third country, a territory or one or more specified sectors within that third country, or the international organisation in question pursuant to Articles 46 to 49.",
          "HU": "(7) Az (5) bekezdés szerinti határozat nem érinti a személyes adatoknak a szóban forgó harmadik ország, a harmadik ország valamely területe vagy egy vagy több meghatározott ágazata, illetve a szóban forgó nemzetközi szervezet részére a 46–49. cikk alapján történő továbbítását."
        },
        {
          "EN": "8. The Commission shall publish in the Official Journal of the European Union and on its website a list of the third countries, territories and specified sectors within a third country and international organisations for which it has decided that an adequate level of protection is or is no longer ensured.",
          "HU": "(8) A Bizottság az Európai Unió Hivatalos Lapjában és annak honlapján közzéteszi az olyan harmadik országok, harmadik országon belüli területek és meghatározott ágazatok, valamint nemzetközi szervezetek jegyzékét, amelyek esetében úgy ítélte meg, hogy biztosítják, vagy többé nem biztosítják a megfelelő védelmi szintet."
        },
        {
          "EN": "9. Decisions adopted by the Commission on the basis of Article 25(6) of Directive 95/46/EC shall remain in force until amended, replaced or repealed by a Commission Decision adopted in accordance with paragraph 3 or 5 of this Article.",
          "HU": "(9) A Bizottság által a 95/46/EK irányelv 25. cikkének (6) bekezdése alapján elfogadott határozatok mindaddig hatályban maradnak, amíg azokat az e cikk (3) vagy az (5) bekezdésével összhangban elfogadott bizottsági határozat nem módosítja, nem váltja fel vagy nem helyezi hatályon kívül."
        },
        {
          "EN": "Article 46",
          "HU": "46. cikk"
        },
        {
          "EN": "Transfers subject to appropriate safeguards",
          "HU": "Megfelelő garanciák alapján történő adattovábbítások"
        },
        {
          "EN": "1. In the absence of a decision pursuant to Article 45(3), a controller or processor may transfer personal data to a third country or an international organisation only if the controller or processor has provided appropriate safeguards, and on condition that enforceable data subject rights and effective legal remedies for data subjects are available.",
          "HU": "(1) A 45. cikk (3) bekezdése szerinti határozat hiányában az adatkezelő vagy adatfeldolgozó csak abban az esetben továbbíthat személyes adatokat harmadik országba vagy nemzetközi szervezet részére, ha az adatkezelő vagy adatfeldolgozó megfelelő garanciákat nyújtott, és csak azzal a feltétellel, hogy az érintettek számára érvényesíthető jogok és hatékony jogorvoslati lehetőségek állnak rendelkezésre."
        },
        {
          "EN": "2. The appropriate safeguards referred to in paragraph 1 may be provided for, without requiring any specific authorisation from a supervisory authority, by:",
          "HU": "(2) A felügyeleti hatóság külön engedélye nélkül az (1) bekezdés szerinti megfelelő garanciákat az alábbiak jelenthetik:"
        },
        {
          "EN": "(a) a legally binding and enforceable instrument between public authorities or bodies;",
          "HU": "a) közhatalmi vagy egyéb, közfeladatot ellátó szervek közötti, jogilag kötelező erejű, kikényszeríthető jogi eszköz;"
        },
        {
          "EN": "(b) binding corporate rules in accordance with Article 47;",
          "HU": "b) a 47. cikk szerinti kötelező erejű vállalati szabályok;"
        },
        {
          "EN": "(c) standard data protection clauses adopted by the Commission in accordance with the examination procedure referred to in Article 93(2);",
          "HU": "c) a Bizottság által a 93. cikk (2) bekezdésében említett vizsgálóbizottsági eljárással összhangban elfogadott általános adatvédelmi kikötések;"
        },
        {
          "EN": "(d) standard data protection clauses adopted by a supervisory authority and approved by the Commission pursuant to the examination procedure referred to in Article 93(2);",
          "HU": "d) a felügyeleti hatóság által elfogadott és a Bizottság által a 93. cikk (2) bekezdésében említett vizsgálóbizottsági eljárásnak megfelelően jóváhagyott általános adatvédelmi kikötések;"
        },
        {
          "EN": "(e) an approved code of conduct pursuant to Article 40 together with binding and enforceable commitments of the controller or processor in the third country to apply the appropriate safeguards, including as regards data subjects' rights; or",
          "HU": "e) a 40. cikk szerinti, jóváhagyott magatartási kódex a harmadik országbeli adatkezelő vagy adatfeldolgozó arra vonatkozó, kötelező erejű és kikényszeríthető kötelezettségvállalásával együtt, hogy alkalmazza a megfelelő – ideértve az érintettek jogaira vonatkozó – garanciákat; vagy"
        },
        {
          "EN": "(f) an approved certification mechanism pursuant to Article 42 together with binding and enforceable commitments of the controller or processor in the third country to apply the appropriate safeguards, including as regards data subjects' rights.",
          "HU": "f) a 42. cikk szerinti, jóváhagyott tanúsítási mechanizmus a harmadik országbeli adatkezelő vagy adatfeldolgozó arra vonatkozó, kötelező erejű és kikényszeríthető kötelezettségvállalásával együtt, hogy alkalmazza a megfelelő garanciákat, ideértve az érintettek jogait illetően is."
        },
        {
          "EN": "3. Subject to the authorisation from the competent supervisory authority, the appropriate safeguards referred to in paragraph 1 may also be provided for, in particular, by:",
          "HU": "(3) Az illetékes felügyeleti hatóság engedélyével az (1) bekezdésben említett megfelelő garanciákként különösen az alábbiak is szolgálhatnak:"
        },
        {
          "EN": "(a) contractual clauses between the controller or processor and the controller, processor or the recipient of the personal data in the third country or international organisation; or",
          "HU": "a) az adatkezelő vagy adatfeldolgozó és a harmadik országbeli vagy a nemzetközi szervezeten belüli adatkezelő, adatfeldolgozó vagy a személyes adatok címzettje között létrejött szerződéses rendelkezések; vagy"
        },
        {
          "EN": "(b) provisions to be inserted into administrative arrangements between public authorities or bodies which include enforceable and effective data subject rights.",
          "HU": "b) közhatalmi vagy egyéb, közfeladatot ellátó szervek között létrejött, közigazgatási megállapodásba beillesztendő rendelkezések, köztük az érintettek érvényesíthető és tényleges jogaira vonatkozó rendelkezések."
        },
        {
          "EN": "4. The supervisory authority shall apply the consistency mechanism referred to in Article 63 in the cases referred to in paragraph 3 of this Article.",
          "HU": "(4) A felügyeleti hatóság az e cikk (3) bekezdésében említett esetekben a 63. cikkben említett egységességi mechanizmust alkalmazza."
        },
        {
          "EN": "5. Authorisations by a Member State or supervisory authority on the basis of Article 26(2) of Directive 95/46/EC shall remain valid until amended, replaced or repealed, if necessary, by that supervisory authority.",
          "HU": "(5) A valamely tagállam vagy felügyeleti hatóság által a 95/46/EK irányelv 26. cikkének (2) bekezdése alapján kiadott engedélyek hatályban maradnak mindaddig, amíg azokat szükség esetén a felügyeleti hatóság nem módosítja, nem váltja fel vagy nem helyezi hatályon kívül."
        },
        {
          "EN": "Decisions adopted by the Commission on the basis of Article 26(4) of Directive 95/46/EC shall remain in force until amended, replaced or repealed, if necessary, by a Commission Decision adopted in accordance with paragraph 2 of this Article.",
          "HU": "A Bizottság által a 95/46/EK irányelv 26. cikkének (4) bekezdése alapján elfogadott határozatok mindaddig hatályban maradnak, amíg azokat szükség esetén az e cikk (2) bekezdésével összhangban elfogadott bizottsági határozat nem módosítja, nem váltja fel vagy nem helyezi hatályon kívül."
        },
        {
          "EN": "Article 47",
          "HU": "47. cikk"
        },
        {
          "EN": "Binding corporate rules",
          "HU": "Kötelező erejű vállalati szabályok"
        },
        {
          "EN": "1. The competent supervisory authority shall approve binding corporate rules in accordance with the consistency mechanism set out in Article 63, provided that they:",
          "HU": "(1) Az illetékes felügyeleti hatóság a 63. cikkben meghatározott, egységességi mechanizmusnak megfelelően jóváhagyja a kötelező erejű vállalati szabályokat, ha az:"
        },
        {
          "EN": "(a) are legally binding and apply to and are enforced by every member concerned of the group of undertakings, or group of enterprises engaged in a joint economic activity, including their employees;",
          "HU": "a) a vállalkozáscsoport vagy a közös gazdasági tevékenységet folytató vállalkozások csoportja minden érintett tagjára, beleértve az alkalmazottakat is, jogilag kötelező erejű, alkalmazandó és általuk érvényesített;"
        },
        {
          "EN": "(b) expressly confer enforceable rights on data subjects with regard to the processing of their personal data; and",
          "HU": "b) kifejezetten rendelkezik az érintetteknek a személyes adataik kezelése tekintetében kikényszeríthető jogairól; és"
        },
        {
          "EN": "(c) fulfil the requirements laid down in paragraph 2.",
          "HU": "c) megfelel a (2) bekezdés szerinti követelményeknek."
        },
        {
          "EN": "2. The binding corporate rules referred to in paragraph 1 shall specify at least:",
          "HU": "(2) Az (1) bekezdésben említett kötelező erejű vállalati szabályok tartalmazzák legalább:"
        },
        {
          "EN": "(a) the structure and contact details of the group of undertakings, or group of enterprises engaged in a joint economic activity and of each of its members;",
          "HU": "a) a vállalkozáscsoport vagy közös gazdasági tevékenységet folytató vállalkozások csoportja minden egyes tagjának szervezeti felépítését és az elérhetőségét;"
        },
        {
          "EN": "(b) the data transfers or set of transfers, including the categories of personal data, the type of processing and its purposes, the type of data subjects affected and the identification of the third country or countries in question;",
          "HU": "b) az adattovábbításokat vagy a továbbítások sorozatát, beleértve a személyes adatok kategóriáit, az adatkezelés fajtáját és céljait, az érintettek fajtáit és a szóban forgó harmadik ország vagy országok azonosítását;"
        },
        {
          "EN": "(c) their legally binding nature, both internally and externally;",
          "HU": "c) a vállalkozások adatvédelmi szabályzatának belső és külső tekintetben jogilag kötelező jellegét;"
        },
        {
          "EN": "(d) the application of the general data protection principles, in particular purpose limitation, data minimisation, limited storage periods, data quality, data protection by design and by default, legal basis for processing, processing of special categories of personal data, measures to ensure data security, and the requirements in respect of onward transfers to bodies not bound by the binding corporate rules;",
          "HU": "d) az általános adatvédelmi elvek alkalmazását, különösen a célhoz kötöttség, az adattakarékosság, a korlátozott tárolási időtartamok, az adatminőség, a beépített és alapértelmezett adatvédelem, az adatkezelés jogalapja, a személyes adatok különleges kategóriáinak kezelése, az adatbiztonságot garantáló intézkedések, valamint az olyan szervezeteknek történő újbóli továbbítás feltételeit, amelyekre nézve nem kötelezőek a kötelező erejű vállalati szabályok;"
        },
        {
          "EN": "(e) the rights of data subjects in regard to processing and the means to exercise those rights, including the right not to be subject to decisions based solely on automated processing, including profiling in accordance with Article 22, the right to lodge a complaint with the competent supervisory authority and before the competent courts of the Member States in accordance with Article 79, and to obtain redress and, where appropriate, compensation for a breach of the binding corporate rules;",
          "HU": "e) az érintettek személyes adataik kezelése tekintetében fennálló jogait és e jogok gyakorlásának módjait, beleértve a 22. cikk szerinti, kizárólag automatizált adatkezelésen – ideértve a profilalkotást is – alapuló döntések alóli mentesülés jogát, az érintett 79. cikkben meghatározott jogát, hogy az illetékes felügyeleti hatóságnál és a tagállamok illetékes bíróságainál panaszt nyújthat be, továbbá a jogorvoslathoz való jogát, valamint adott esetben a kötelező erejű vállalati szabályok megsértése esetén a kártérítéshez való jogát;"
        },
        {
          "EN": "(f) the acceptance by the controller or processor established on the territory of a Member State of liability for any breaches of the binding corporate rules by any member concerned not established in the Union; the controller or the processor shall be exempt from that liability, in whole or in part, only if it proves that that member is not responsible for the event giving rise to the damage;",
          "HU": "f) a valamely tagállamban tevékenységi hellyel rendelkező adatkezelő vagy adatfeldolgozó felelősségének elismerését abban az esetben, ha a kötelező erejű vállalati szabályokat a csoportnak az Unióban tevékenységi hellyel nem rendelkező bármely érintett tagja megsérti; az adatkezelő vagy adatfeldolgozó részben vagy egészben csak akkor mentesül e felelőség alól, ha bizonyítja, hogy tagja nem felelős a kár előidézésében;"
        },
        {
          "EN": "(g) how the information on the binding corporate rules, in particular on the provisions referred to in points (d), (e) and (f) of this paragraph is provided to the data subjects in addition to Articles 13 and 14;",
          "HU": "g) azt, hogy a 13. és a 14. cikkben említetten kívül miként biztosítják az érintetteknek a kötelező erejű vállalati szabályokra, különösen az e bekezdés d), e) és f) pontja szerinti rendelkezésekre vonatkozó információkat;"
        },
        {
          "EN": "(h) the tasks of any data protection officer designated in accordance with Article 37 or any other person or entity in charge of the monitoring compliance with the binding corporate rules within the group of undertakings, or group of enterprises engaged in a joint economic activity, as well as monitoring training and complaint-handling;",
          "HU": "h) a 37. cikk értelmében kijelölt adatvédelmi tisztviselők vagy a vállalkozáscsoporton vagy közös gazdasági tevékenységet folytató vállalkozások csoportján belül a kötelező erejű vállalati szabályoknak való megfelelés, valamint a képzés és a panaszkezelés nyomon követéséért felelős személyek vagy szervezetek feladatait;"
        },
        {
          "EN": "(i) the complaint procedures;",
          "HU": "i) a panasztételi eljárásokat;"
        },
        {
          "EN": "(j) the mechanisms within the group of undertakings, or group of enterprises engaged in a joint economic activity for ensuring the verification of compliance with the binding corporate rules.",
          "HU": "j) a kötelező erejű vállalati szabályoknak való megfelelés ellenőrzésének biztosítására szolgáló, a vállalkozáscsoporton vagy közös gazdasági tevékenységet folytató vállalkozások csoportján belüli mechanizmusokat."
        },
        {
          "EN": "Such mechanisms shall include data protection audits and methods for ensuring corrective actions to protect the rights of the data subject.",
          "HU": "E mechanizmusok tartalmazzák az adatvédelmi auditokat és az érintettek jogainak védelmét szolgáló korrekciós intézkedéseket biztosító mechanizmusokat."
        },
        {
          "EN": "Results of such verification should be communicated to the person or entity referred to in point (h) and to the board of the controlling undertaking of a group of undertakings, or of the group of enterprises engaged in a joint economic activity, and should be available upon request to the competent supervisory authority;",
          "HU": "Az ilyen ellenőrzések eredményeit közölni kell a h) pontban említett személlyel vagy szervezettel, valamint a vállalkozáscsoportot vagy a közös gazdasági tevékenységet folytató vállalkozások csoportját ellenőrző vállalkozás felügyelőbizottságával, és kérésre az illetékes felügyeleti hatóság rendelkezésére kell bocsátani őket;"
        },
        {
          "EN": "(k) the mechanisms for reporting and recording changes to the rules and reporting those changes to the supervisory authority;",
          "HU": "k) a kötelező erejű vállalati szabályok változásainak bejelentésére és rögzítésére, valamint e változásoknak a felügyeleti hatóság számára történő bejelentésére szolgáló mechanizmusokat;"
        },
        {
          "EN": "(l) the cooperation mechanism with the supervisory authority to ensure compliance by any member of the group of undertakings, or group of enterprises engaged in a joint economic activity, in particular by making available to the supervisory authority the results of verifications of the measures referred to in point (j);",
          "HU": "l) a kötelező erejű vállalati szabályoknak a vállalkozáscsoport vagy közös gazdasági tevékenységet folytató vállalkozások csoportjának tagjai általi betartásának biztosítása érdekében a felügyeleti hatósággal folytatott együttműködési mechanizmust, beleértve különösen azt, hogy a felügyeleti hatóság számára elérhetővé teszik az intézkedések e bekezdés j) pontja szerinti ellenőrzésének eredményeit;"
        },
        {
          "EN": "(m) the mechanisms for reporting to the competent supervisory authority any legal requirements to which a member of the group of undertakings, or group of enterprises engaged in a joint economic activity is subject in a third country which are likely to have a substantial adverse effect on the guarantees provided by the binding corporate rules; and",
          "HU": "m) arra vonatkozó mechanizmusokat, hogy hogyan kell jelenteni az illetékes felügyeleti hatóság számára a vállalkozáscsoport vagy közös gazdasági tevékenységet folytató vállalkozások csoportjának tagjára valamely harmadik országban vonatkozó azon jogi előírásokat, amelyek valószínűsíthetően jelentős mértékben hátrányosan érintenék a kötelező erejű vállalati szabályokban előírt garanciákat; valamint"
        },
        {
          "EN": "(n) the appropriate data protection training to personnel having permanent or regular access to personal data.",
          "HU": "n) a személyes adatokba állandó jelleggel vagy rendszeresen betekintő személyzetnek nyújtandó megfelelő adatvédelmi képzést."
        },
        {
          "EN": "3. The Commission may specify the format and procedures for the exchange of information between controllers, processors and supervisory authorities for binding corporate rules within the meaning of this Article.",
          "HU": "(3) A Bizottság meghatározhatja az e cikk szerinti, a kötelező erejű vállalati szabályokra vonatkozóan az adatkezelők, az adatfeldolgozók és a felügyeleti hatóságok között folytatott információcsere formátumát és eljárásait."
        },
        {
          "EN": "Those implementing acts shall be adopted in accordance with the examination procedure set out in Article 93(2).",
          "HU": "Ezeket a végrehajtási jogi aktusokat a 93. cikk (2) bekezdésében említett vizsgálóbizottsági eljárásnak megfelelően kell elfogadni."
        },
        {
          "EN": "Article 48",
          "HU": "48. cikk"
        },
        {
          "EN": "Transfers or disclosures not authorised by Union law",
          "HU": "Az uniós jog által nem engedélyezett továbbítás és közlés"
        },
        {
          "EN": "Any judgment of a court or tribunal and any decision of an administrative authority of a third country requiring a controller or processor to transfer or disclose personal data may only be recognised or enforceable in any manner if based on an international agreement, such as a mutual legal assistance treaty, in force between the requesting third country and the Union or a Member State, without prejudice to other grounds for transfer pursuant to this Chapter.",
          "HU": "Valamely harmadik ország bíróságának bármely olyan ítélete, illetve közigazgatási hatóságának bármely olyan döntése, amely valamely adatkezelő vagy adatfeldolgozó számára személyes adatok továbbítását vagy közlését írja elő, kizárólag akkor ismerhető el vagy hajtható bármely módon végre, ha az az adatok megismerését igénylő harmadik ország és az Unió vagy egy tagállama között létrejött, hatályos nemzetközi megállapodáson, például kölcsönös jogsegélyszerződésen alapul, az adattovábbítás e fejezet szerinti egyéb módozatainak sérelme nélkül."
        },
        {
          "EN": "Article 49",
          "HU": "49. cikk"
        },
        {
          "EN": "Derogations for specific situations",
          "HU": "Különös helyzetekben biztosított eltérések"
        },
        {
          "EN": "1. In the absence of an adequacy decision pursuant to Article 45(3), or of appropriate safeguards pursuant to Article 46, including binding corporate rules, a transfer or a set of transfers of personal data to a third country or an international organisation shall take place only on one of the following conditions:",
          "HU": "(1) A 45. cikk (3) bekezdése szerinti megfelelőségi határozat, illetve a 46. cikk szerinti megfelelő garanciák hiányában – beleértve a kötelező erejű vállalati szabályokat is –, a személyes adatok harmadik ország vagy nemzetközi szervezet részére történő továbbítására vagy többszöri továbbítására csak az alábbi feltételek legalább egyikének teljesülése esetén kerülhet sor:"
        },
        {
          "EN": "(a) the data subject has explicitly consented to the proposed transfer, after having been informed of the possible risks of such transfers for the data subject due to the absence of an adequacy decision and appropriate safeguards;",
          "HU": "a) az érintett kifejezetten hozzájárulását adta a tervezett továbbításhoz azt követően, hogy tájékoztatták az adattovábbításból eredő – a megfelelőségi határozat és a megfelelő garanciák hiányából fakadó – esetleges kockázatokról;"
        },
        {
          "EN": "(b) the transfer is necessary for the performance of a contract between the data subject and the controller or the implementation of pre-contractual measures taken at the data subject's request;",
          "HU": "b) az adattovábbítás az érintett és az adatkezelő közötti szerződés teljesítéséhez, vagy az érintett kérésére hozott, szerződést megelőző intézkedések végrehajtásához szükséges;"
        },
        {
          "EN": "(c) the transfer is necessary for the conclusion or performance of a contract concluded in the interest of the data subject between the controller and another natural or legal person;",
          "HU": "c) az adattovábbítás az adatkezelő és valamely más természetes vagy jogi személy közötti, az érintett érdekét szolgáló szerződés megkötéséhez vagy teljesítéséhez szükséges;"
        },
        {
          "EN": "(d) the transfer is necessary for important reasons of public interest;",
          "HU": "d) az adattovábbítás fontos közérdekből szükséges;"
        },
        {
          "EN": "(e) the transfer is necessary for the establishment, exercise or defence of legal claims;",
          "HU": "e) az adattovábbítás jogi igények előterjesztése, érvényesítése és védelme miatt szükséges;"
        },
        {
          "EN": "(f) the transfer is necessary in order to protect the vital interests of the data subject or of other persons, where the data subject is physically or legally incapable of giving consent;",
          "HU": "f) az adattovábbítás az érintett vagy valamely más személy létfontosságú érdekeinek védelme miatt szükséges, és az érintett fizikailag vagy jogilag képtelen a hozzájárulás megadására;"
        },
        {
          "EN": "(g) the transfer is made from a register which according to Union or Member State law is intended to provide information to the public and which is open to consultation either by the public in general or by any person who can demonstrate a legitimate interest, but only to the extent that the conditions laid down by Union or Member State law for consultation are fulfilled in the particular case.",
          "HU": "g) a továbbított adatok olyan nyilvántartásból származnak, amely az uniós vagy a tagállami jog értelmében a nyilvánosság tájékoztatását szolgálja, és amely vagy általában a nyilvánosság, vagy az ezzel kapcsolatos jogos érdekét igazoló bármely személy számára betekintés céljából hozzáférhető, de csak ha az uniós vagy tagállami jog által a betekintésre megállapított feltételek az adott különleges esetben teljesülnek."
        },
        {
          "EN": "Where a transfer could not be based on a provision in Article 45 or 46, including the provisions on binding corporate rules, and none of the derogations for a specific situation referred to in the first subparagraph of this paragraph is applicable, a transfer to a third country or an international organisation may take place only if the transfer is not repetitive, concerns only a limited number of data subjects, is necessary for the purposes of compelling legitimate interests pursued by the controller which are not overridden by the interests or rights and freedoms of the data subject, and the controller has assessed all the circumstances surrounding the data transfer and has on the basis of that assessment provided suitable safeguards with regard to the protection of personal data.",
          "HU": "Ha az adattovábbítás nem alapulhat a 45. vagy a 46. cikk rendelkezésein, beleértve a kötelező erejű vállalati szabályok rendelkezéseit is, és az első albekezdésben említett egyedi helyzetekre vonatkozó eltérések egyike sem alkalmazandó, harmadik országok és nemzetközi szervezetek részére történő adattovábbítás csak akkor történhet, ha az adattovábbítás nem ismétlődő, csak korlátozott számú érintettre vonatkozik, az adatkezelő olyan kényszerítő erejű jogos érdekében szükséges, amely érdekhez képest nem élveznek elsőbbséget az érintett érdekei, jogai és szabadságai, és az adatkezelő az adattovábbítás minden körülményét megvizsgálta, és e vizsgálat alapján megfelelő garanciákat nyújtott a személyes adatok védelme tekintetében."
        },
        {
          "EN": "The controller shall inform the supervisory authority of the transfer.",
          "HU": "Az adatkezelőnek tájékoztatnia kell a felügyeleti hatóságot az adattovábbításról."
        },
        {
          "EN": "The controller shall, in addition to providing the information referred to in Articles 13 and 14, inform the data subject of the transfer and on the compelling legitimate interests pursued.",
          "HU": "Az adatkezelő a 13. és a 14. cikkben említett információk nyújtásán kívül az érintettet tájékoztatja az adattovábbításról, valamint az adatkezelő kényszerítő erejű jogos érdekéről."
        },
        {
          "EN": "2. A transfer pursuant to point (g) of the first subparagraph of paragraph 1 shall not involve the entirety of the personal data or entire categories of the personal data contained in the register.",
          "HU": "(2) Az (1) bekezdés első albekezdésének g) pontja szerinti adattovábbítás nem érintheti a nyilvántartásban szereplő személyes adatok vagy személyes adatok kategóriáinak összességét."
        },
        {
          "EN": "Where the register is intended for consultation by persons having a legitimate interest, the transfer shall be made only at the request of those persons or if they are to be the recipients.",
          "HU": "Ha a nyilvántartásba kizárólag olyan személyek tekinthetnek be, akiknek ehhez jogos érdeke fűződik, az adattovábbításra kizárólag e személyek kérelmére kerülhet sor, illetve abban az esetben, ha ők a címzettek."
        },
        {
          "EN": "3. Points (a), (b) and (c) of the first subparagraph of paragraph 1 and the second subparagraph thereof shall not apply to activities carried out by public authorities in the exercise of their public powers.",
          "HU": "(3) Az (1) bekezdés első albekezdésének a), b) és c) pontja, valamint második albekezdése nem alkalmazandó a közhatalmi szervek által közhatalmi jogosítványaik gyakorlása során végzett tevékenységekre."
        },
        {
          "EN": "4. The public interest referred to in point (d) of the first subparagraph of paragraph 1 shall be recognised in Union law or in the law of the Member State to which the controller is subject.",
          "HU": "(4) Az (1) bekezdés első albekezdésének d) pontjában említett közérdeket akkor kell figyelembe venni, ha azt az uniós jog vagy az adatkezelőre vonatkozó tagállami jog elismeri."
        },
        {
          "EN": "5. In the absence of an adequacy decision, Union or Member State law may, for important reasons of public interest, expressly set limits to the transfer of specific categories of personal data to a third country or an international organisation.",
          "HU": "(5) Megfelelőségi határozat hiányában az uniós jog vagy a tagállami jog fontos közérdekből kifejezetten korlátozhatja bizonyos kategóriákba tartozó személyes adatok valamely harmadik országba vagy nemzetközi szervezethez történő továbbítását."
        },
        {
          "EN": "Member States shall notify such provisions to the Commission.",
          "HU": "A tagállamok az ilyen rendelkezéseket bejelentik a Bizottságnak."
        },
        {
          "EN": "6. The controller or processor shall document the assessment as well as the suitable safeguards referred to in the second subparagraph of paragraph 1 of this Article in the records referred to in Article 30.",
          "HU": "(6) Az adatkezelő vagy az adatfeldolgozó az e cikk (1) bekezdésének második albekezdésében említett vizsgálatot és megfelelő garanciákat a 30. cikkben említett nyilvántartásban dokumentálja."
        },
        {
          "EN": "Article 50",
          "HU": "50. cikk"
        },
        {
          "EN": "International cooperation for the protection of personal data",
          "HU": "A személyes adatok védelmével kapcsolatos nemzetközi együttműködés"
        },
        {
          "EN": "In relation to third countries and international organisations, the Commission and supervisory authorities shall take appropriate steps to:",
          "HU": "A harmadik országok és nemzetközi szervezetek viszonylatában a Bizottság és a felügyeleti hatóságok megfelelő lépéseket tesznek annak érdekében, hogy:"
        },
        {
          "EN": "(a) develop international cooperation mechanisms to facilitate the effective enforcement of legislation for the protection of personal data;",
          "HU": "a) a személyes adatok védelméről szóló jogszabályok hatékony érvényesítésének elősegítését célzó nemzetközi együttműködési mechanizmusokat alakítsanak ki;"
        },
        {
          "EN": "(b) provide international mutual assistance in the enforcement of legislation for the protection of personal data, including through notification, complaint referral, investigative assistance and information exchange, subject to appropriate safeguards for the protection of personal data and other fundamental rights and freedoms;",
          "HU": "b) a személyes adatok védelméről szóló jogszabályok érvényesítése terén kölcsönös nemzetközi segítségnyújtást biztosítsanak, egyebek mellett értesítés, a panaszok illetékes hatósághoz történő továbbítása, a vizsgálatokban történő segítségnyújtás és információcsere útján, a személyes adatok védelmére és a többi alapvető jogra és szabadságra vonatkozó megfelelő garanciákra is figyelemmel;"
        },
        {
          "EN": "(c) engage relevant stakeholders in discussion and activities aimed at furthering international cooperation in the enforcement of legislation for the protection of personal data;",
          "HU": "c) az érdekelt feleket bevonják a személyes adatok védelméről szóló jogszabályok érvényesítése érdekében folytatott nemzetközi együttműködés előmozdítását célzó párbeszédbe és tevékenységekbe;"
        },
        {
          "EN": "(d) promote the exchange and documentation of personal data protection legislation and practice, including on jurisdictional conflicts with third countries.",
          "HU": "d) előmozdítsák a személyes adatok védelméről szóló jogszabályok és gyakorlat átadását és dokumentálását, beleértve a harmadik országok viszonylatában felmerülő joghatósági összeütközéseket is. VI."
        },
        {
          "EN": "CHAPTER VI",
          "HU": "FEJEZET"
        },
        {
          "EN": "Independent supervisory authorities",
          "HU": "Független felügyeleti hatóságok"
        },
        {
          "EN": "Section 1",
          "HU": "1. szakasz"
        },
        {
          "EN": "Independent status",
          "HU": "Független jogállás"
        },
        {
          "EN": "Article 51",
          "HU": "51. cikk"
        },
        {
          "EN": "Supervisory authority",
          "HU": "Felügyeleti hatóság"
        },
        {
          "EN": "1. Each Member State shall provide for one or more independent public authorities to be responsible for monitoring the application of this Regulation, in order to protect the fundamental rights and freedoms of natural persons in relation to processing and to facilitate the free flow of personal data within the Union (‘supervisory authority’).",
          "HU": "(1) A természetes személyek alapvető jogainak és szabadságainak a személyes adataik kezelése tekintetében történő védelme, valamint a személyes adatok Unión belüli szabad áramlásának megkönnyítése érdekében minden tagállam előírja, hogy e rendelet alkalmazásának ellenőrzéséért egy vagy több független közhatalmi szerv (felügyeleti hatóság) felel."
        },
        {
          "EN": "2. Each supervisory authority shall contribute to the consistent application of this Regulation throughout the Union.",
          "HU": "(2) Minden felügyeleti hatóság elősegíti e rendeletnek az Unió egész területén történő egységes alkalmazását."
        },
        {
          "EN": "For that purpose, the supervisory authorities shall cooperate with each other and the Commission in accordance with Chapter VII.",
          "HU": "A felügyeleti hatóságok e célból együttműködnek egymással és a Bizottsággal, a VII. fejezettel összhangban."
        },
        {
          "EN": "3. Where more than one supervisory authority is established in a Member State, that Member State shall designate the supervisory authority which is to represent those authorities in the Board and shall set out the mechanism to ensure compliance by the other authorities with the rules relating to the consistency mechanism referred to in Article 63.",
          "HU": "(3) Ha valamely tagállamban egynél több felügyeleti hatóságot hoznak létre, az adott tagállam kijelöli azt a felügyeleti hatóságot, amelyik a Testületben ellátja a szóban forgó hatóságok képviseletét, és létrehozza az arra szolgáló mechanizmust, hogy a többi hatóság a 63. cikkben említett egységességi mechanizmusra vonatkozó szabályokat betartsa."
        },
        {
          "EN": "4. Each Member State shall notify to the Commission the provisions of its law which it adopts pursuant to this Chapter, by 25 May 2018 and, without delay, any subsequent amendment affecting them.",
          "HU": "(4) Minden tagállam 2018. május 25-ig értesíti a Bizottságot jogának azon rendelkezéseiről, amelyeket e fejezet alapján elfogad, továbbá haladéktalanul értesíti a Bizottságot az említett rendelkezéseket érintő későbbi módosításokról."
        },
        {
          "EN": "Article 52",
          "HU": "52. cikk"
        },
        {
          "EN": "Independence",
          "HU": "Függetlenség"
        },
        {
          "EN": "1. Each supervisory authority shall act with complete independence in performing its tasks and exercising its powers in accordance with this Regulation.",
          "HU": "(1) A felügyeleti hatóságok az e rendelet alapján rájuk ruházott feladatok elvégzése és hatáskörök gyakorlása során teljesen függetlenül járnak el."
        },
        {
          "EN": "2. The member or members of each supervisory authority shall, in the performance of their tasks and exercise of their powers in accordance with this Regulation, remain free from external influence, whether direct or indirect, and shall neither seek nor take instructions from anybody.",
          "HU": "(2) Az egyes felügyeleti hatóságok tagja vagy tagjai az e rendelettel összhangban rájuk ruházott feladatok végzése és hatáskörök gyakorlása során bármilyen – közvetlen vagy közvetett – külső befolyástól mentesen járnak el, és utasítást senkitől sem kérhetnek vagy fogadhatnak el."
        },
        {
          "EN": "3. Member or members of each supervisory authority shall refrain from any action incompatible with their duties and shall not, during their term of office, engage in any incompatible occupation, whether gainful or not.",
          "HU": "(3) A felügyeleti hatóságok tagjai tartózkodnak a feladatkörükkel összeférhetetlen cselekményektől, valamint hivatali idejük alatt sem javadalmazás ellenében, sem anélkül nem vállalhatnak azzal összeférhetetlen szakmai tevékenységet."
        },
        {
          "EN": "4. Each Member State shall ensure that each supervisory authority is provided with the human, technical and financial resources, premises and infrastructure necessary for the effective performance of its tasks and exercise of its powers, including those to be carried out in the context of mutual assistance, cooperation and participation in the Board.",
          "HU": "(4) A tagállamok biztosítják, hogy mindegyik felügyeleti hatóság rendelkezésére áll a feladataik és hatásköreik – ideértve a kölcsönös segítségnyújtást, az együttműködést és a Testületben való részvételt – eredményes ellátásához, illetve gyakorlásához szükséges emberi, műszaki és pénzügyi források, helyiségek és infrastruktúra."
        },
        {
          "EN": "5. Each Member State shall ensure that each supervisory authority chooses and has its own staff which shall be subject to the exclusive direction of the member or members of the supervisory authority concerned.",
          "HU": "(5) A tagállamok biztosítják, hogy mindegyik felügyeleti hatóság saját személyzettel rendelkezik és maga választja ki azt, amely a felügyeleti hatóság tagjának vagy tagjainak kizárólagos irányítása alá tartozik."
        },
        {
          "EN": "",
          "HU": "(6) A tagállamok biztosítják, hogy mindegyik felügyeleti hatóság a függetlenségét nem befolyásoló pénzügyi ellenőrzés alá tartozik."
        },
        {
          "EN": "6. Each Member State shall ensure that each supervisory authority is subject to financial control which does not affect its independence and that it has separate, public annual budgets, which may be part of the overall state or national budget.",
          "HU": "A tagállamok biztosítják, hogy mindegyik felügyeleti hatóság saját, nyilvános, éves költségvetéssel rendelkezik, amely az állami vagy nemzeti költségvetés részét képezheti."
        },
        {
          "EN": "Article 53",
          "HU": "53. cikk"
        },
        {
          "EN": "General conditions for the members of the supervisory authority",
          "HU": "A felügyeleti hatóság tagjaira vonatkozó általános feltételek"
        },
        {
          "EN": "1. Member States shall provide for each member of their supervisory authorities to be appointed by means of a transparent procedure by:",
          "HU": "(1) A tagállamok előírják, hogy a felügyeleti hatóságaik minden tagját átlátható eljárás keretében nevezze ki az alábbiak egyike:"
        },
        {
          "EN": "—",
          "HU": "—"
        },
        {
          "EN": "their parliament;",
          "HU": "a parlamentjük;"
        },
        {
          "EN": "—",
          "HU": "—"
        },
        {
          "EN": "their government;",
          "HU": "a kormányuk;"
        },
        {
          "EN": "—",
          "HU": "—"
        },
        {
          "EN": "their head of State; or",
          "HU": "az államfőjük vagy"
        },
        {
          "EN": "—",
          "HU": "—"
        },
        {
          "EN": "an independent body entrusted with the appointment under Member State law.",
          "HU": "a tagállami jog alapján a kinevezéssel megbízott független szerv."
        },
        {
          "EN": "2. Each member shall have the qualifications, experience and skills, in particular in the area of the protection of personal data, required to perform its duties and exercise its powers.",
          "HU": "(2) A felügyeleti hatóságok tagja rendelkezik feladatai ellátásához és hatásköre gyakorlásához szükséges képesítéssel, tapasztalattal és készségekkel, különösen a személyes adatok védelme területén."
        },
        {
          "EN": "3. The duties of a member shall end in the event of the expiry of the term of office, resignation or compulsory retirement, in accordance with the law of the Member State concerned.",
          "HU": "(3) A tagok feladatköre a hivatali idő lejártával, lemondással vagy kötelező nyugdíjazással szűnik meg, az érintett tagállam jogában előírtaknak megfelelően."
        },
        {
          "EN": "4. A member shall be dismissed only in cases of serious misconduct or if the member no longer fulfils the conditions required for the performance of the duties.",
          "HU": "(4) Tag felmentésére kizárólag súlyos kötelességszegés esetén vagy abban az esetben kerülhet sor, ha a tag már nem felel meg a feladatai ellátásához szükséges feltételeknek."
        },
        {
          "EN": "Article 54",
          "HU": "54. cikk"
        },
        {
          "EN": "Rules on the establishment of the supervisory authority",
          "HU": "A felügyeleti hatóság létrehozására vonatkozó szabályok"
        },
        {
          "EN": "1. Each Member State shall provide by law for all of the following:",
          "HU": "(1) A tagállamok jogszabályban rendelkeznek:"
        },
        {
          "EN": "(a) the establishment of each supervisory authority;",
          "HU": "a) minden egyes felügyeleti hatóság létrehozásáról;"
        },
        {
          "EN": "(b) the qualifications and eligibility conditions required to be appointed as member of each supervisory authority;",
          "HU": "b) az egyes felügyeleti hatóságok tagjává való kinevezéshez szükséges képesítésekről és pályázati feltételekről;"
        },
        {
          "EN": "(c) the rules and procedures for the appointment of the member or members of each supervisory authority;",
          "HU": "c) az egyes felügyeleti hatóságok tagjának vagy tagjainak kinevezésére vonatkozó szabályokról és eljárásokról;"
        },
        {
          "EN": "(d) the duration of the term of the member or members of each supervisory authority of no less than four years, except for the first appointment after 24 May 2016, part of which may take place for a shorter period where that is necessary to protect the independence of the supervisory authority by means of a staggered appointment procedure;",
          "HU": "d) az egyes felügyeleti hatóságok tagja vagy tagjai megbízatásának időtartamáról, amelynek legalább négy évre kell szólnia, kivéve a 2016. május 24-ét követő első kinevezést, amely rövidebb időtartamra is szólhat, ha a felügyeleti hatóság függetlenségének megőrzése érdekében a kinevezéseket több lépcsőben kell végrehajtani;"
        },
        {
          "EN": "(e) whether and, if so, for how many terms the member or members of each supervisory authority is eligible for reappointment;",
          "HU": "e) arról, hogy az egyes felügyeleti hatóságok tagja vagy tagjai újra kinevezhetők-e, és ha igen, hány ciklusra; és"
        },
        {
          "EN": "(f) the conditions governing the obligations of the member or members and staff of each supervisory authority, prohibitions on actions, occupations and benefits incompatible therewith during and after the term of office and rules governing the cessation of employment.",
          "HU": "f) az egyes felügyeleti hatóságok tagjának vagy tagjainak, valamint személyzetének kötelezettségeire vonatkozó feltételekről, a hivatali idő alatt és azt követően az alkalmazással összeférhetetlen cselekményekről, szakmai tevékenységre és juttatásokra vonatkozó tiltó rendelkezésekről, valamint az alkalmazás megszűnésére vonatkozó szabályokról."
        },
        {
          "EN": "2. The member or members and the staff of each supervisory authority shall, in accordance with Union or Member State law, be subject to a duty of professional secrecy both during and after their term of office, with regard to any confidential information which has come to their knowledge in the course of the performance of their tasks or exercise of their powers.",
          "HU": "(2) Az uniós vagy tagállami jognak megfelelően mindegyik felügyeleti hatóság tagját vagy tagjait és személyzetét a feladataik ellátása és hatáskörük gyakorlása során tudomásukra jutott bármely bizalmas információ tekintetében hivatali idejük alatt és annak lejártát követően is szakmai titoktartási kötelezettség terheli."
        },
        {
          "EN": "During their term of office, that duty of professional secrecy shall in particular apply to reporting by natural persons of infringements of this Regulation.",
          "HU": "Hivatali idejük alatt ez a szakmai titoktartási kötelezettség különösen vonatkozik a természetes személyek által e rendelet megsértését illetően tett bejelentésekre."
        },
        {
          "EN": "Section 2",
          "HU": "2. szakasz"
        },
        {
          "EN": "Competence, tasks and powers",
          "HU": "Illetékesség, feladatok és hatáskörök"
        },
        {
          "EN": "Article 55",
          "HU": "55. cikk"
        },
        {
          "EN": "Competence",
          "HU": "Illetékesség"
        },
        {
          "EN": "1. Each supervisory authority shall be competent for the performance of the tasks assigned to and the exercise of the powers conferred on it in accordance with this Regulation on the territory of its own Member State.",
          "HU": "(1) A felügyeleti hatóság a saját tagállamának területén illetékes az e rendelet alapján ráruházott feladatok végzésére és hatáskörök gyakorlására."
        },
        {
          "EN": "2. Where processing is carried out by public authorities or private bodies acting on the basis of point (c) or (e) of Article 6(1), the supervisory authority of the Member State concerned shall be competent.",
          "HU": "(2) Ha az adatkezelést a 6. cikk (1) bekezdésének c) vagy e) pontja alapján eljáró közhatalmi szervek vagy magánfél szervezetek végzik, az érintett tagállam felügyeleti hatósága az illetékes."
        },
        {
          "EN": "In such cases Article 56 does not apply.",
          "HU": "Ezekben az esetekben az 56. cikk nem alkalmazandó."
        },
        {
          "EN": "3. Supervisory authorities shall not be competent to supervise processing operations of courts acting in their judicial capacity.",
          "HU": "(3) A felügyeleti hatóságok hatásköre nem terjed ki a bíróságok által igazságügyi feladataik ellátása során végzett adatkezelési műveletek felügyeletére."
        },
        {
          "EN": "Article 56",
          "HU": "56. cikk"
        },
        {
          "EN": "Competence of the lead supervisory authority",
          "HU": "A fő felügyeleti hatóság illetékessége"
        },
        {
          "EN": "1. Without prejudice to Article 55, the supervisory authority of the main establishment or of the single establishment of the controller or processor shall be competent to act as lead supervisory authority for the cross-border processing carried out by that controller or processor in accordance with the procedure provided in Article 60.",
          "HU": "(1) Az 55. cikk sérelme nélkül, az adatkezelő vagy az adatfeldolgozó tevékenységi központja vagy egyetlen tevékenységi helye szerinti felügyeleti hatóság jogosult fő felügyeleti hatóságként eljárni az említett adatkezelő vagy az adatfeldolgozó által végzett határokon átnyúló adatkezelés tekintetében, a 60. cikk szerinti eljárással összhangban."
        },
        {
          "EN": "2. By derogation from paragraph 1, each supervisory authority shall be competent to handle a complaint lodged with it or a possible infringement of this Regulation, if the subject matter relates only to an establishment in its Member State or substantially affects data subjects only in its Member State.",
          "HU": "(2) Az (1) bekezdéstől eltérve, minden felügyeleti hatóság jogosult a hozzá benyújtott panaszok kezelésére, illetve jogosult e rendelet esetleges megsértése esetén eljárni, ha az ügy tárgya kizárólag egy, a tagállamában található tevékenységi helyet érint, vagy ha kizárólag a tagállamában érint jelentős mértékben érintetteket."
        },
        {
          "EN": "3. In the cases referred to in paragraph 2 of this Article, the supervisory authority shall inform the lead supervisory authority without delay on that matter.",
          "HU": "(3) Az e cikk (2) bekezdésében említett esetekben a felügyeleti hatóság haladéktalanul tájékoztatja az ügyről a fő felügyeleti hatóságot."
        },
        {
          "EN": "Within a period of three weeks after being informed the lead supervisory authority shall decide whether or not it will handle the case in accordance with the procedure provided in Article 60, taking into account whether or not there is an establishment of the controller or processor in the Member State of which the supervisory authority informed it.",
          "HU": "A fő felügyeleti hatóság a tájékoztatását követő három héten belül dönt arról, hogy a 60. cikkben foglalt eljárással összhangban eljár-e az ügyben, figyelembe véve azt, hogy az adatkezelő vagy az adatfeldolgozó rendelkezik-e tevékenységi hellyel abban a tagállamban, amelynek a felügyeleti hatósága a fő felügyeleti hatóságot tájékoztatta."
        },
        {
          "EN": "4. Where the lead supervisory authority decides to handle the case, the procedure provided in Article 60 shall apply.",
          "HU": "(4) Ha a fő felügyeleti hatóság úgy határoz, hogy eljár az ügyben, a 60. cikkben meghatározott eljárást kell alkalmazni."
        },
        {
          "EN": "The supervisory authority which informed the lead supervisory authority may submit to the lead supervisory authority a draft for a decision.",
          "HU": "A fő felügyeleti hatóságot tájékoztató felügyeleti hatóság döntéstervezetet nyújthat be a fő felügyeleti hatóságnak."
        },
        {
          "EN": "The lead supervisory authority shall take utmost account of that draft when preparing the draft decision referred to in Article 60(3).",
          "HU": "A fő felügyeleti hatóság a 60. cikk (3) bekezdésében említett döntéstervezet elkészítése során a lehető legnagyobb mértékben figyelembe veszi az említett tervezetet."
        },
        {
          "EN": "5. Where the lead supervisory authority decides not to handle the case, the supervisory authority which informed the lead supervisory authority shall handle it according to Articles 61 and 62.",
          "HU": "(5) Abban az esetben, ha a fő felügyeleti hatóság úgy határoz, hogy nem jár el az ügyben, a fő felügyeleti hatóságot tájékoztató felügyeleti hatóság jár el a 61. és a 62. cikknek megfelelően."
        },
        {
          "EN": "6. The lead supervisory authority shall be the sole interlocutor of the controller or processor for the cross-border processing carried out by that controller or processor.",
          "HU": "(6) A fő felügyeleti hatóság az adatkezelő vagy adatfeldolgozó egyetlen kapcsolattartója az általuk végzett, határokon átnyúló adatkezeléssel kapcsolatban."
        },
        {
          "EN": "Article 57",
          "HU": "57. cikk"
        },
        {
          "EN": "Tasks",
          "HU": "Feladatok"
        },
        {
          "EN": "1. Without prejudice to other tasks set out under this Regulation, each supervisory authority shall on its territory:",
          "HU": "(1) Az e rendeletben meghatározott egyéb feladatok sérelme nélkül, a felügyeleti hatóság a saját területén ellátja a következő feladatokat:"
        },
        {
          "EN": "(a) monitor and enforce the application of this Regulation;",
          "HU": "a) nyomon követi és kikényszeríti e rendelet alkalmazását;"
        },
        {
          "EN": "(b) promote public awareness and understanding of the risks, rules, safeguards and rights in relation to processing.",
          "HU": "b) elősegíti a nyilvánosság figyelmének felkeltését és az ismeretek terjesztését a személyes adatok kezelésével összefüggő kockázatok, szabályok, garanciák és jogok vonatkozásában."
        },
        {
          "EN": "Activities addressed specifically to children shall receive specific attention;",
          "HU": "Különös figyelmet fordít a kifejezetten gyermekekre irányuló tevékenységekre;"
        },
        {
          "EN": "(c) advise, in accordance with Member State law, the national parliament, the government, and other institutions and bodies on legislative and administrative measures relating to the protection of natural persons' rights and freedoms with regard to processing;",
          "HU": "c) a tagállami joggal összhangban tanácsot ad a nemzeti parlamentnek, a kormánynak és más intézményeknek és szerveknek a természetes személyek jogainak és szabadságainak a személyes adataik kezelése tekintetében történő védelmével kapcsolatos jogalkotási és közigazgatási intézkedésekről;"
        },
        {
          "EN": "(d) promote the awareness of controllers and processors of their obligations under this Regulation;",
          "HU": "d) felhívja az adatkezelők és az adatfeldolgozók figyelmét az e rendelet szerinti kötelezettségeikre;"
        },
        {
          "EN": "(e) upon request, provide information to any data subject concerning the exercise of their rights under this Regulation and, if appropriate, cooperate with the supervisory authorities in other Member States to that end;",
          "HU": "e) kérésre tájékoztatást ad bármely érintettnek az e rendelet alapján őt megillető jogok gyakorlásával kapcsolatban, és e célból adott esetben együttműködik más tagállamok felügyeleti hatóságaival;"
        },
        {
          "EN": "(f) handle complaints lodged by a data subject, or by a body, organisation or association in accordance with Article 80, and investigate, to the extent appropriate, the subject matter of the complaint and inform the complainant of the progress and the outcome of the investigation within a reasonable period, in particular if further investigation or coordination with another supervisory authority is necessary;",
          "HU": "f) kezeli az érintett vagy valamely szerv, szervezet vagy egyesület által a 80. cikkel összhangban benyújtott panaszokat, a panasz tárgyát a szükséges mértékben kivizsgálja, továbbá észszerű határidőn belül tájékoztatja a panaszost a vizsgálattal kapcsolatos fejleményekről és eredményekről, különösen, ha további vizsgálat vagy egy másik felügyeleti hatósággal való együttműködés válik szükségessé;"
        },
        {
          "EN": "(g) cooperate with, including sharing information and provide mutual assistance to, other supervisory authorities with a view to ensuring the consistency of application and enforcement of this Regulation;",
          "HU": "g) együttműködik más felügyeleti hatóságokkal, ideértve az információcserét és a kölcsönös segítségnyújtást is, e rendelet egységes alkalmazásának és érvényesítésének biztosítása érdekében;"
        },
        {
          "EN": "(h) conduct investigations on the application of this Regulation, including on the basis of information received from another supervisory authority or other public authority;",
          "HU": "h) vizsgálatot folytat e rendelet alkalmazásával kapcsolatban, akár más felügyeleti hatóságtól vagy más közhatalmi szervtől kapott információ alapján;"
        },
        {
          "EN": "(i) monitor relevant developments, insofar as they have an impact on the protection of personal data, in particular the development of information and communication technologies and commercial practices;",
          "HU": "i) figyelemmel kíséri a személyes adatok védelmére kiható jelentősebb fejleményeket, különösen az információs és kommunikációs technológiák, valamint a kereskedelmi gyakorlatok fejlődését;"
        },
        {
          "EN": "(j) adopt standard contractual clauses referred to in Article 28(8) and in point (d) of Article 46(2);",
          "HU": "j) megállapítja a 28. cikk (8) bekezdésében és a 46. cikk (2) bekezdésének d) pontjában említett általános szerződési feltételeket;"
        },
        {
          "EN": "(k) establish and maintain a list in relation to the requirement for data protection impact assessment pursuant to Article 35(4);",
          "HU": "k) a 35. cikk (4) bekezdésének megfelelően jegyzéket állít össze és az adatvédelmi hatásvizsgálatra vonatkozó kötelezettséggel kapcsolatban vezeti azt;"
        },
        {
          "EN": "(l) give advice on the processing operations referred to in Article 36(2);",
          "HU": "l) tanácsot ad a 36. cikk (2) bekezdésében említett adatkezelési műveletekkel kapcsolatban;"
        },
        {
          "EN": "(m) encourage the drawing up of codes of conduct pursuant to Article 40(1) and provide an opinion and approve such codes of conduct which provide sufficient safeguards, pursuant to Article 40(5);",
          "HU": "m) ösztönzi a 40. cikk (1) bekezdése szerinti magatartási kódex kidolgozását, valamint a 40. cikk (5) bekezdésével összhangban véleményezi, illetve jóváhagyja a megfelelő garanciákat kínáló ilyen magatartási kódexeket;"
        },
        {
          "EN": "(n) encourage the establishment of data protection certification mechanisms and of data protection seals and marks pursuant to Article 42(1), and approve the criteria of certification pursuant to Article 42(5);",
          "HU": "n) ösztönzi a 42. cikk (1) bekezdése szerinti az adatvédelmi tanúsítási mechanizmusok, valamint adatvédelmi bélyegzők, illetve jelölések létrehozását, és a 42. cikk (5) bekezdésének megfelelően jóváhagyja a tanúsítási szempontokat;"
        },
        {
          "EN": "(o) where applicable, carry out a periodic review of certifications issued in accordance with Article 42(7);",
          "HU": "o) adott esetben rendszeres időközönként felülvizsgálja a 42. cikk (7) bekezdésének megfelelően kiadott tanúsítványokat;"
        },
        {
          "EN": "(p) draft and publish the criteria for accreditation of a body for monitoring codes of conduct pursuant to Article 41 and of a certification body pursuant to Article 43;",
          "HU": "p) meghatározza és közzéteszi a magatartási kódexnek való megfelelést ellenőrző 41. cikk szerinti szervezet és a 43. cikk szerinti tanúsító szervezet akkreditációjára vonatkozó szempontokat;"
        },
        {
          "EN": "(q) conduct the accreditation of a body for monitoring codes of conduct pursuant to Article 41 and of a certification body pursuant to Article 43;",
          "HU": "q) elvégzi a magatartási kódexnek való megfelelést ellenőrző, a 41. cikk szerinti szervezet és a 43. cikk szerinti tanúsító szervezet akkreditációját;"
        },
        {
          "EN": "(r) authorise contractual clauses and provisions referred to in Article 46(3);",
          "HU": "r) engedélyezi a 46. cikk (3) bekezdésében említett szerződéses feltételeket és rendelkezéseket;"
        },
        {
          "EN": "(s) approve binding corporate rules pursuant to Article 47;",
          "HU": "s) jóváhagyja a 47. cikk szerinti kötelező erejű vállalati szabályokat;"
        },
        {
          "EN": "(t) contribute to the activities of the Board;",
          "HU": "t) hozzájárul a Testület tevékenységeihez;"
        },
        {
          "EN": "(u) keep internal records of infringements of this Regulation and of measures taken in accordance with Article 58(2); and",
          "HU": "u) belső nyilvántartást vezet e rendelet megsértéséről és az 58. cikk (2) bekezdése szerint meghozott intézkedésekről; és"
        },
        {
          "EN": "(v) fulfil any other tasks related to the protection of personal data.",
          "HU": "v) a személyes adatok védelméhez kapcsolódó minden más feladatot ellát."
        },
        {
          "EN": "2. Each supervisory authority shall facilitate the submission of complaints referred to in point (f) of paragraph 1 by measures such as a complaint submission form which can also be completed electronically, without excluding other means of communication.",
          "HU": "(2) A felügyeleti hatóság megkönnyíti az (1) bekezdés f) pontjában említett panasz benyújtását például olyan intézkedésekkel, hogy elektronikus úton is kitölthető panasz benyújtására szolgáló formanyomtatványt hoz létre, nem zárva ki azonban más kommunikációs eszközök alkalmazását sem."
        },
        {
          "EN": "3. The performance of the tasks of each supervisory authority shall be free of charge for the data subject and, where applicable, for the data protection officer.",
          "HU": "(3) A felügyeleti hatóság úgy látja el feladatait, hogy az az érintett és adott esetben az adatvédelmi tisztviselő számára térítésmentes legyen."
        },
        {
          "EN": "4. Where requests are manifestly unfounded or excessive, in particular because of their repetitive character, the supervisory authority may charge a reasonable fee based on administrative costs, or refuse to act on the request.",
          "HU": "(4) Ha a kérelmek egyértelműen megalapozatlanok vagy – különösen ismétlődő jellegük miatt – túlzók, a felügyeleti hatóság észszerű, az adminisztratív költségeken alapuló díjat számíthat fel, vagy megtagadhatja, hogy eljárjon a kérelemmel kapcsolatban."
        },
        {
          "EN": "The supervisory authority shall bear the burden of demonstrating the manifestly unfounded or excessive character of the request.",
          "HU": "Annak bizonyítása, hogy a kérelem egyértelműen megalapozatlan vagy túlzó, a felügyeleti hatóságot terheli."
        },
        {
          "EN": "Article 58",
          "HU": "58. cikk"
        },
        {
          "EN": "Powers",
          "HU": "Hatáskörök"
        },
        {
          "EN": "1. Each supervisory authority shall have all of the following investigative powers:",
          "HU": "(1) A felügyeleti hatóság vizsgálati hatáskörében eljárva:"
        },
        {
          "EN": "(a) to order the controller and the processor, and, where applicable, the controller's or the processor's representative to provide any information it requires for the performance of its tasks;",
          "HU": "a) utasítja az adatkezelőt és az adatfeldolgozót, illetve adott esetben az adatkezelő vagy az adatfeldolgozó képviselőjét, hogy számára a feladatai elvégzéséhez szükséges tájékoztatást megadja;"
        },
        {
          "EN": "(b) to carry out investigations in the form of data protection audits;",
          "HU": "b) vizsgálatot folytat adatvédelmi auditok formájában;"
        },
        {
          "EN": "(c) to carry out a review on certifications issued pursuant to Article 42(7);",
          "HU": "c) elvégzi a 42. cikk (7) bekezdésének megfelelően kiadott tanúsítványok felülvizsgálatát;"
        },
        {
          "EN": "(d) to notify the controller or the processor of an alleged infringement of this Regulation;",
          "HU": "d) értesíti az adatkezelőt vagy az adatfeldolgozót e rendelet feltételezett megsértéséről;"
        },
        {
          "EN": "(e) to obtain, from the controller and the processor, access to all personal data and to all information necessary for the performance of its tasks;",
          "HU": "e) hozzáférést kap az adatkezelőtől vagy az adatfeldolgozótól a feladatainak teljesítéséhez szükséges minden személyes adathoz és minden információhoz; és"
        },
        {
          "EN": "(f) to obtain access to any premises of the controller and the processor, including to any data processing equipment and means, in accordance with Union or Member State procedural law.",
          "HU": "f) az uniós vagy tagállami eljárásjoggal összhangban hozzáférést kap az adatkezelő vagy az adatfeldolgozó bármely helyiségéhez, ideértve minden adatkezeléshez használt felszerelést és eszközt."
        },
        {
          "EN": "2. Each supervisory authority shall have all of the following corrective powers:",
          "HU": "(2) A felügyeleti hatóság korrekciós hatáskörében eljárva:"
        },
        {
          "EN": "(a) to issue warnings to a controller or processor that intended processing operations are likely to infringe provisions of this Regulation;",
          "HU": "a) figyelmezteti az adatkezelőt vagy az adatfeldolgozót, hogy egyes tervezett adatkezelési tevékenységei valószínűsíthetően sértik e rendelet rendelkezéseit;"
        },
        {
          "EN": "(b) to issue reprimands to a controller or a processor where processing operations have infringed provisions of this Regulation;",
          "HU": "b) elmarasztalja az adatkezelőt vagy az adatfeldolgozót, ha adatkezelési tevékenysége megsértette e rendelet rendelkezéseit;"
        },
        {
          "EN": "(c) to order the controller or the processor to comply with the data subject's requests to exercise his or her rights pursuant to this Regulation;",
          "HU": "c) utasítja az adatkezelőt vagy az adatfeldolgozót, hogy teljesítse az érintettnek az e rendelet szerinti jogai gyakorlására vonatkozó kérelmét;"
        },
        {
          "EN": "(d) to order the controller or processor to bring processing operations into compliance with the provisions of this Regulation, where appropriate, in a specified manner and within a specified period;",
          "HU": "d) utasítja az adatkezelőt vagy az adatfeldolgozót, hogy adatkezelési műveleteit – adott esetben meghatározott módon és meghatározott időn belül – hozza összhangba e rendelet rendelkezéseivel;"
        },
        {
          "EN": "(e) to order the controller to communicate a personal data breach to the data subject;",
          "HU": "e) utasítja az adatkezelőt, hogy tájékoztassa az érintettet az adatvédelmi incidensről;"
        },
        {
          "EN": "(f) to impose a temporary or definitive limitation including a ban on processing;",
          "HU": "f) átmenetileg vagy véglegesen korlátozza az adatkezelést, ideértve az adatkezelés megtiltását is;"
        },
        {
          "EN": "(g) to order the rectification or erasure of personal data or restriction of processing pursuant to Articles 16, 17 and 18 and the notification of such actions to recipients to whom the personal data have been disclosed pursuant to Article 17(2) and Article 19;",
          "HU": "g) a 16., 17., illetve a 18. cikkben foglaltaknak megfelelően elrendeli a személyes adatok helyesbítését, vagy törlését, illetve az adatkezelés korlátozását, valamint a 17. cikk (2) bekezdésének és a 19. cikknek megfelelően elrendeli azon címzettek erről való értesítését, akikkel vagy amelyekkel a személyes adatokat közölték;"
        },
        {
          "EN": "(h) to withdraw a certification or to order the certification body to withdraw a certification issued pursuant to Articles 42 and 43, or to order the certification body not to issue certification if the requirements for the certification are not or are no longer met;",
          "HU": "h) visszavonja a tanúsítványt vagy utasítja a tanúsító szervezetet a 42. és a 43. cikknek megfelelően kiadott tanúsítvány visszavonására, vagy utasítja a tanúsító szervezetet, hogy ne adja ki a tanúsítványt, ha a tanúsítás feltételei nem vagy már nem teljesülnek;"
        },
        {
          "EN": "(i) to impose an administrative fine pursuant to Article 83, in addition to, or instead of measures referred to in this paragraph, depending on the circumstances of each individual case;",
          "HU": "i) a 83. cikknek megfelelően közigazgatási bírságot szab ki, az adott eset körülményeitől függően az e bekezdésben említett intézkedéseken túlmenően vagy azok helyett; és"
        },
        {
          "EN": "(j) to order the suspension of data flows to a recipient in a third country or to an international organisation.",
          "HU": "j) elrendeli a harmadik országbeli címzett vagy nemzetközi szervezet felé irányuló adatáramlás felfüggesztését."
        },
        {
          "EN": "3. Each supervisory authority shall have all of the following authorisation and advisory powers:",
          "HU": "(3) A felügyeleti hatóság engedélyezési és tanácsadási hatáskörében eljárva:"
        },
        {
          "EN": "(a) to advise the controller in accordance with the prior consultation procedure referred to in Article 36;",
          "HU": "a) tanácsot ad az adatkezelőnek a 36. cikkben említett előzetes konzultációs eljárás keretében;"
        },
        {
          "EN": "(b) to issue, on its own initiative or on request, opinions to the national parliament, the Member State government or, in accordance with Member State law, to other institutions and bodies as well as to the public on any issue related to the protection of personal data;",
          "HU": "b) saját kezdeményezésére vagy kérésre a személyes adatok védelmével kapcsolatos bármilyen kérdésben véleményt bocsát ki a nemzeti parlament, a tagállami kormány vagy a tagállami joggal összhangban más intézmények és szervek, valamint a nyilvánosság részére;"
        },
        {
          "EN": "(c) to authorise processing referred to in Article 36(5), if the law of the Member State requires such prior authorisation;",
          "HU": "c) engedélyezi a 36. cikk (5) bekezdése szerinti adatkezelést, ha a tagállam joga azt előzetes engedélyhez köti;"
        },
        {
          "EN": "(d) to issue an opinion and approve draft codes of conduct pursuant to Article 40(5);",
          "HU": "d) a 40. cikk (5) bekezdésével összhangban véleményezi és jóváhagyja a magatartási kódexek tervezetét;"
        },
        {
          "EN": "(e) to accredit certification bodies pursuant to Article 43;",
          "HU": "e) akkreditálja a 43. cikk szerinti tanúsító szervezeteket;"
        },
        {
          "EN": "(f) to issue certifications and approve criteria of certification in accordance with Article 42(5);",
          "HU": "f) a 42. cikk (5) bekezdésével összhangban tanúsítványokat állít ki és a jóváhagyja a tanúsítási szempontokat;"
        },
        {
          "EN": "(g) to adopt standard data protection clauses referred to in Article 28(8) and in point (d) of Article 46(2);",
          "HU": "g) elfogadja a 28. cikk (8) bekezdésben és a 46. cikk (2) bekezdésének d) pontjában említett általános adatvédelmi kikötéseket"
        },
        {
          "EN": "(h) to authorise contractual clauses referred to in point (a) of Article 46(3);",
          "HU": "h) engedélyezi a 46. cikk (3) bekezdésének a) pontjában említett szerződéses rendelkezéseket;"
        },
        {
          "EN": "(i) to authorise administrative arrangements referred to in point (b) of Article 46(3);",
          "HU": "i) engedélyezi a 46. cikk (3) bekezdésének b) pontjában említett közigazgatási megállapodásokat; és"
        },
        {
          "EN": "(j) to approve binding corporate rules pursuant to Article 47.",
          "HU": "j) jóváhagyja a 47. cikk szerinti kötelező erejű vállalati szabályokat."
        },
        {
          "EN": "4. The exercise of the powers conferred on the supervisory authority pursuant to this Article shall be subject to appropriate safeguards, including effective judicial remedy and due process, set out in Union and Member State law in accordance with the Charter.",
          "HU": "(4) Az e cikk alapján a felügyeleti hatóságra ruházott hatáskörök gyakorlására megfelelő garanciák mellett kerülhet sor, ideértve az uniós és a tagállami jogban a Chartával összhangban meghatározott hatékony bírósági jogorvoslatot és tisztességes eljárást is."
        },
        {
          "EN": "5. Each Member State shall provide by law that its supervisory authority shall have the power to bring infringements of this Regulation to the attention of the judicial authorities and where appropriate, to commence or engage otherwise in legal proceedings, in order to enforce the provisions of this Regulation.",
          "HU": "(5) A tagállamok jogszabályban előírják, hogy a felügyeleti hatóságuk hatáskörrel rendelkezik arra, hogy e rendelet megsértéséről tájékoztassa az igazságügyi hatóságokat, és adott esetben bírósági eljárást kezdeményezzen vagy abban más módon részt vegyen e rendelet rendelkezéseinek érvényre juttatása érdekében."
        },
        {
          "EN": "6. Each Member State may provide by law that its supervisory authority shall have additional powers to those referred to in paragraphs 1, 2 and 3.",
          "HU": "(6) A tagállamok jogszabályban előírhatják, hogy felügyeleti hatóságuk az (1), (2) és (3) bekezdésben említetteken kívüli hatáskörökkel is rendelkezzen."
        },
        {
          "EN": "The exercise of those powers shall not impair the effective operation of Chapter VII.",
          "HU": "E hatáskörök gyakorlása nem hátráltathatja a VII. fejezet hatékony végrehajtását."
        },
        {
          "EN": "Article 59",
          "HU": "59. cikk"
        },
        {
          "EN": "Activity reports",
          "HU": "Tevékenységi jelentés"
        },
        {
          "EN": "Each supervisory authority shall draw up an annual report on its activities, which may include a list of types of infringement notified and types of measures taken in accordance with Article 58(2).",
          "HU": "A felügyeleti hatóság éves jelentést készít a tevékenységeiről, amely tartalmazhatja a bejelentett jogsértések típusainak és az 58. cikk (2) bekezdésével összhangban tett intézkedések fajtáit is."
        },
        {
          "EN": "Those reports shall be transmitted to the national parliament, the government and other authorities as designated by Member State law.",
          "HU": "A jelentést a nemzeti parlamentnek, a kormánynak és a tagállami jogban megjelölt más hatóságoknak kell benyújtani."
        },
        {
          "EN": "They shall be made available to the public, to the Commission and to the Board.",
          "HU": "A jelentéseket elérhetővé kell tenni a nyilvánosság, a Bizottság és a Testület számára."
        },
        {
          "EN": "CHAPTER VII",
          "HU": "VII. FEJEZET"
        },
        {
          "EN": "Cooperation and consistency",
          "HU": "Együttműködés és egységesség"
        },
        {
          "EN": "Section 1",
          "HU": "1. szakasz"
        },
        {
          "EN": "Cooperation",
          "HU": "Együttműködés"
        },
        {
          "EN": "Article 60",
          "HU": "60. cikk"
        },
        {
          "EN": "Cooperation between the lead supervisory authority and the other supervisory authorities concerned",
          "HU": "Együttműködés a fő felügyeleti hatóság és a többi érintett felügyeleti hatóság között"
        },
        {
          "EN": "1. The lead supervisory authority shall cooperate with the other supervisory authorities concerned in accordance with this Article in an endeavour to reach consensus.",
          "HU": "(1) A fő felügyeleti hatóság e cikknek megfelelően, konszenzusra törekedve együttműködik a többi érintett felügyeleti hatósággal."
        },
        {
          "EN": "The lead supervisory authority and the supervisory authorities concerned shall exchange all relevant information with each other.",
          "HU": "A fő felügyeleti hatóság és az érintett felügyeleti hatóságok minden releváns információt kicserélnek egymással."
        },
        {
          "EN": "2. The lead supervisory authority may request at any time other supervisory authorities concerned to provide mutual assistance pursuant to Article 61 and may conduct joint operations pursuant to Article 62, in particular for carrying out investigations or for monitoring the implementation of a measure concerning a controller or processor established in another Member State.",
          "HU": "(2) A fő felügyeleti hatóság bármikor kérheti más érintett felügyeleti hatóságoktól a 61. cikk szerinti kölcsönös segítségnyújtást és végezhet a 62. cikk szerinti közös műveleteket, különösen olyan vizsgálatok lefolytatása vagy olyan intézkedések végrehajtásának nyomon követése céljából, amelyek valamely másik tagállamban tevékenységi hellyel rendelkező adatkezelővel, illetve adatfeldolgozóval kapcsolatosak."
        },
        {
          "EN": "3. The lead supervisory authority shall, without delay, communicate the relevant information on the matter to the other supervisory authorities concerned.",
          "HU": "(3) A fő felügyeleti hatóság késedelem nélkül közli a többi érintett felügyeleti hatósággal az üggyel kapcsolatos releváns információkat."
        },
        {
          "EN": "It shall without delay submit a draft decision to the other supervisory authorities concerned for their opinion and take due account of their views.",
          "HU": "A döntés tervezetét haladéktalanul benyújtja a többi érintett felügyeleti hatóságnak, hogy azok véleményezhessék, és véleményüket kellően figyelembe veszi."
        },
        {
          "EN": "4. Where any of the other supervisory authorities concerned within a period of four weeks after having been consulted in accordance with paragraph 3 of this Article, expresses a relevant and reasoned objection to the draft decision, the lead supervisory authority shall, if it does not follow the relevant and reasoned objection or is of the opinion that the objection is not relevant or reasoned, submit the matter to the consistency mechanism referred to in Article 63.",
          "HU": "(4) Ha a többi érintett felügyeleti hatóság valamelyike az e cikk (3) bekezdése szerinti konzultációt követő négy héten belül releváns és megalapozott kifogást emel a döntéstervezettel szemben, a fő felügyeleti hatóság, ha nem ért egyet a releváns és megalapozott kifogással, vagy azt nem találja relevánsnak vagy megalapozottnak, az ügyet a 63. cikkben említett, egységességi mechanizmus keretében kezeli."
        },
        {
          "EN": "5. Where the lead supervisory authority intends to follow the relevant and reasoned objection made, it shall submit to the other supervisory authorities concerned a revised draft decision for their opinion.",
          "HU": "(5) Ha a fő felügyeleti hatóság helyt kíván adni a releváns és megalapozott kifogásnak, módosított döntéstervezetet nyújt be a többi érintett felügyeleti hatóságnak, hogy azok véleményezhessék."
        },
        {
          "EN": "That revised draft decision shall be subject to the procedure referred to in paragraph 4 within a period of two weeks.",
          "HU": "A módosított döntéstervezet tekintetében két héten belül kell lefolytatni a (4) bekezdésben említett eljárást."
        },
        {
          "EN": "6. Where none of the other supervisory authorities concerned has objected to the draft decision submitted by the lead supervisory authority within the period referred to in paragraphs 4 and 5, the lead supervisory authority and the supervisory authorities concerned shall be deemed to be in agreement with that draft decision and shall be bound by it.",
          "HU": "(6) Ha a (4), illetve az (5) bekezdésben említett határidőn belül a többi érintett felügyeleti hatóság egyike sem emel kifogást a fő felügyeleti hatóság által benyújtott döntéstervezettel szemben, úgy kell tekinteni, hogy a fő felügyeleti hatóság és az érintett felügyeleti hatóságok egyetértenek a döntéstervezettel és az rájuk nézve kötelező."
        },
        {
          "EN": "7. The lead supervisory authority shall adopt and notify the decision to the main establishment or single establishment of the controller or processor, as the case may be and inform the other supervisory authorities concerned and the Board of the decision in question, including a summary of the relevant facts and grounds.",
          "HU": "(7) A fő felügyeleti hatóság elfogadja a döntését és közli azt az adatkezelő, vagy adott esetben az adatfeldolgozó tevékenységi központjával vagy egyetlen tevékenységi helyével, továbbá a releváns tények és indokok összefoglalásával tájékoztatja a szóban forgó döntésről a többi érintett felügyeleti hatóságot és a Testületet."
        },
        {
          "EN": "The supervisory authority with which a complaint has been lodged shall inform the complainant on the decision.",
          "HU": "Az a felügyeleti hatóság, amelyhez a panaszt benyújtották, tájékoztatja a panaszost a döntésről."
        },
        {
          "EN": "8. By derogation from paragraph 7, where a complaint is dismissed or rejected, the supervisory authority with which the complaint was lodged shall adopt the decision and notify it to the complainant and shall inform the controller thereof.",
          "HU": "(8) Amennyiben a panaszt visszautasították vagy elutasították, a (7) bekezdéstől eltérve az a felügyeleti hatóság fogadja el a döntést, közli a panaszosal, és tájékoztatja az adatkezelőt, amelyhez a panaszt benyújtották."
        },
        {
          "EN": "9. Where the lead supervisory authority and the supervisory authorities concerned agree to dismiss or reject parts of a complaint and to act on other parts of that complaint, a separate decision shall be adopted for each of those parts of the matter.",
          "HU": "(9) Ha a fő felügyeleti hatóság és az érintett felügyeleti hatóságok egyetértenek abban, hogy a panasz egyes részeit visszautasítják vagy elutasítják, más részeivel kapcsolatban viszont eljárnak, külön döntést fogadnak el az ügy minden ilyen részére vonatkozóan."
        },
        {
          "EN": "The lead supervisory authority shall adopt the decision for the part concerning actions in relation to the controller, shall notify it to the main establishment or single establishment of the controller or processor on the territory of its Member State and shall inform the complainant thereof, while the supervisory authority of the complainant shall adopt the decision for the part concerning dismissal or rejection of that complaint, and shall notify it to that complainant and shall inform the controller or processor thereof.",
          "HU": "Az adatkezelővel kapcsolatos intézkedéseket érintő részre vonatkozó döntést a fő felügyeleti hatóság fogadja el, és közli az adatkezelőnek, illetve az adatfeldolgozónak a hatóság tagállama területén lévő tevékenységi központjával vagy egyetlen tevékenységi helyével, valamint tájékoztatja a panaszost; a panasz visszautasított vagy elutasított részére vonatkozó döntést a panaszos felügyeleti hatósága fogadja el, és közli a panaszossal, valamint tájékoztatja az adatkezelőt vagy az adatfeldolgozót."
        },
        {
          "EN": "10. After being notified of the decision of the lead supervisory authority pursuant to paragraphs 7 and 9, the controller or processor shall take the necessary measures to ensure compliance with the decision as regards processing activities in the context of all its establishments in the Union.",
          "HU": "(10) Az adatkezelő, illetve az adatfeldolgozó, miután a (7) vagy a (9) bekezdésnek megfelelően közölték vele a fő felügyeleti hatóság döntését, megteszi a szükséges intézkedéseket annak érdekében, hogy az adatkezelési tevékenységek az Unióban lévő minden tevékenységi helyén megfeleljenek a döntésben foglaltaknak."
        },
        {
          "EN": "The controller or processor shall notify the measures taken for complying with the decision to the lead supervisory authority, which shall inform the other supervisory authorities concerned.",
          "HU": "Az adatkezelő, illetve az adatfeldolgozó közli a fő felügyeleti hatósággal a döntésnek való megfelelés érdekében tett intézkedéseket, ezt követően a fő felügyeleti hatóság tájékoztatja a többi érintett felügyeleti hatóságot."
        },
        {
          "EN": "11. Where, in exceptional circumstances, a supervisory authority concerned has reasons to consider that there is an urgent need to act in order to protect the interests of data subjects, the urgency procedure referred to in Article 66 shall apply.",
          "HU": "(11) Ha egy érintett felügyeleti hatóság rendkívüli körülmények fennállása esetén megalapozottan úgy véli, hogy az érintettek érdekeinek védelme érdekében sürgős fellépésre van szükség, a 66. cikkben említett sürgősségi eljárást kell alkalmazni."
        },
        {
          "EN": "12. The lead supervisory authority and the other supervisory authorities concerned shall supply the information required under this Article to each other by electronic means, using a standardised format.",
          "HU": "(12) A fő felügyeleti hatóság és a többi érintett felügyeleti hatóság elektronikus úton, egységes formátum alkalmazásával továbbítja egymásnak az e cikkben előírt információkat."
        },
        {
          "EN": "Article 61",
          "HU": "61. cikk"
        },
        {
          "EN": "Mutual assistance",
          "HU": "Kölcsönös segítségnyújtás"
        },
        {
          "EN": "1. Supervisory authorities shall provide each other with relevant information and mutual assistance in order to implement and apply this Regulation in a consistent manner, and shall put in place measures for effective cooperation with one another.",
          "HU": "(1) A felügyeleti hatóságok e rendelet egységes végrehajtása és alkalmazása érdekében megosztják egymással a releváns információkat, és kölcsönösen segítséget nyújtanak egymásnak, valamint a hatékony együttműködést célzó intézkedéseket tesznek."
        },
        {
          "EN": "Mutual assistance shall cover, in particular, information requests and supervisory measures, such as requests to carry out prior authorisations and consultations, inspections and investigations.",
          "HU": "A kölcsönös segítségnyújtás különösen információkérésekre és felügyeleti intézkedésekre, például az előzetes engedélyezés és egyeztetés, az ellenőrzés és a vizsgálat lefolytatása iránti megkeresésekre terjed ki."
        },
        {
          "EN": "2. Each supervisory authority shall take all appropriate measures required to reply to a request of another supervisory authority without undue delay and no later than one month after receiving the request.",
          "HU": "(2) Minden felügyeleti hatóság megteszi a megfelelő intézkedéseket annak érdekében, hogy a más felügyeleti hatóságtól érkező megkereséseket indokolatlan késedelem nélkül, de legkésőbb a megkeresés kézhezvételétől számított egy hónapon belül megválaszolja."
        },
        {
          "EN": "Such measures may include, in particular, the transmission of relevant information on the conduct of an investigation.",
          "HU": "Ezen intézkedések közé tartozhat különösen a vizsgálatok lefolytatásával kapcsolatos releváns információk továbbítása."
        },
        {
          "EN": "3. Requests for assistance shall contain all the necessary information, including the purpose of and reasons for the request.",
          "HU": "(3) A segítségnyújtás iránti megkeresésnek minden szükséges információt tartalmaznia kell, beleértve a megkeresés célját és okait."
        },
        {
          "EN": "Information exchanged shall be used only for the purpose for which it was requested.",
          "HU": "A kicserélt információk kizárólag a megkeresésben meghatározott célra használhatók fel."
        },
        {
          "EN": "4. The requested supervisory authority shall not refuse to comply with the request unless:",
          "HU": "(4) A megkeresett felügyeleti hatóság csak abban az esetben tagadhatja meg a megkeresés teljesítését, ha:"
        },
        {
          "EN": "(a) it is not competent for the subject-matter of the request or for the measures it is requested to execute; or",
          "HU": "a) a megkeresés tárgyát vagy a kért intézkedés végrehajtását illetően nem jogosult eljárni; vagy"
        },
        {
          "EN": "(b) compliance with the request would infringe this Regulation or Union or Member State law to which the supervisory authority receiving the request is subject.",
          "HU": "b) a megkeresés teljesítése sértené e rendeletet, az uniós vagy azon tagállami jogot, amelynek hatálya alá a megkeresett felügyeleti hatóság tartozik."
        },
        {
          "EN": "5. The requested supervisory authority shall inform the requesting supervisory authority of the results or, as the case may be, of the progress of the measures taken in order to respond to the request.",
          "HU": "(5) A megkeresett felügyeleti hatóság tájékoztatja a megkereső felügyeleti hatóságot az ügyben elért eredményekről vagy adott esetben a megkeresés teljesítése érdekében hozott intézkedésekkel kapcsolatos fejleményekről."
        },
        {
          "EN": "The requested supervisory authority shall provide reasons for any refusal to comply with a request pursuant to paragraph 4.",
          "HU": "Ha a felügyeleti hatóság megtagadja a megkeresés teljesítését, ezt köteles a (4) bekezdésnek megfelelően indokolni."
        },
        {
          "EN": "6. Requested supervisory authorities shall, as a rule, supply the information requested by other supervisory authorities by electronic means, using a standardised format.",
          "HU": "(6) A megkeresett felügyeleti hatóságok főszabályként elektronikus úton, egységes formátum alkalmazásával továbbítják a másik felügyeleti hatóság által kért információt."
        },
        {
          "EN": "7. Requested supervisory authorities shall not charge a fee for any action taken by them pursuant to a request for mutual assistance.",
          "HU": "(7) A megkeresett felügyeleti hatóság által a kölcsönös segítségnyújtás iránti megkeresés nyomán tett intézkedések térítésmentesek."
        },
        {
          "EN": "Supervisory authorities may agree on rules to indemnify each other for specific expenditure arising from the provision of mutual assistance in exceptional circumstances.",
          "HU": "A felügyeleti hatóságok megállapodhatnak más felügyeleti hatóságokkal a rendkívüli körülmények közötti kölcsönös segítségnyújtásból eredő különleges költségek kölcsönös megtérítésére vonatkozó szabályokról."
        },
        {
          "EN": "8. Where a supervisory authority does not provide the information referred to in paragraph 5 of this Article within one month of receiving the request of another supervisory authority, the requesting supervisory authority may adopt a provisional measure on the territory of its Member State in accordance with Article 55(1).",
          "HU": "(8) Ha egy felügyeleti hatóság a másik felügyeleti hatóság megkeresésének kézhezvételétől számított egy hónapon belül nem adja meg az e cikk (5) bekezdésében említett információkat, a megkereső felügyeleti hatóság az 55. cikk (1) bekezdésével összhangban a saját tagállama területén ideiglenes intézkedést fogadhat el."
        },
        {
          "EN": "In that case, the urgent need to act under Article 66(1) shall be presumed to be met and require an urgent binding decision from the Board pursuant to Article 66(2).",
          "HU": "Ebben az esetben vélelmezni kell, hogy a 66. cikk (1) bekezdése szerinti sürgős fellépésre van szükség, és a Testület sürgősségi eljárás keretében kötelező erejű döntést fogad el a 66. cikk (2) bekezdésével összhangban."
        },
        {
          "EN": "9. The Commission may, by means of implementing acts, specify the format and procedures for mutual assistance referred to in this Article and the arrangements for the exchange of information by electronic means between supervisory authorities, and between supervisory authorities and the Board, in particular the standardised format referred to in paragraph 6 of this Article.",
          "HU": "(9) A Bizottság végrehajtási jogi aktusok révén meghatározhatja az e cikk szerinti kölcsönös segítségnyújtás formáját és eljárásait, valamint a felügyeleti hatóságok közötti, illetve a felügyeleti hatóságok és a Testület közötti elektronikus információcserére vonatkozó szabályokat, különösen az e cikk (6) bekezdésében említett egységes formátumot."
        },
        {
          "EN": "Those implementing acts shall be adopted in accordance with the examination procedure referred to in Article 93(2).",
          "HU": "Ezeket a végrehajtási jogi aktusokat a 93. cikk (2) bekezdésében említett vizsgálóbizottsági eljárásnak megfelelően kell elfogadni."
        },
        {
          "EN": "Article 62",
          "HU": "62. cikk"
        },
        {
          "EN": "Joint operations of supervisory authorities",
          "HU": "A felügyeleti hatóságok közös műveletei"
        },
        {
          "EN": "1. The supervisory authorities shall, where appropriate, conduct joint operations including joint investigations and joint enforcement measures in which members or staff of the supervisory authorities of other Member States are involved.",
          "HU": "(1) A felügyeleti hatóságok adott esetben közös műveleteket hajtanak végre, ideértve a közös vizsgálatokat és a közös végrehajtási intézkedéseket is, amelyekben más tagállamok felügyeleti hatóságainak tagjai vagy alkalmazottai is részt vesznek."
        },
        {
          "EN": "2. Where the controller or processor has establishments in several Member States or where a significant number of data subjects in more than one Member State are likely to be substantially affected by processing operations, a supervisory authority of each of those Member States shall have the right to participate in joint operations.",
          "HU": "(2) Ha az adatkezelő vagy az adatfeldolgozó több tagállamban is rendelkezik tevékenységi hellyel, vagy ha az adatkezelési műveletek több tagállamban is valószínűsíthetően jelentős mértékben érintenek nagyszámú érintettet, az összes szóban forgó tagállam felügyeleti hatósága jogosult részt venni a közös műveletekben."
        },
        {
          "EN": "The supervisory authority which is competent pursuant to Article 56(1) or (4) shall invite the supervisory authority of each of those Member States to take part in the joint operations and shall respond without delay to the request of a supervisory authority to participate.",
          "HU": "Az 56. cikk (1) vagy (4) bekezdése alapján illetékes felügyeleti hatóság felkéri az összes szóban forgó tagállam felügyeleti hatóságát, hogy vegyenek részt a közös műveletekben, és haladéktalanul válaszol a felügyeleti hatóság részvételre irányuló megkeresésére."
        },
        {
          "EN": "3. A supervisory authority may, in accordance with Member State law, and with the seconding supervisory authority's authorisation, confer powers, including investigative powers on the seconding supervisory authority's members or staff involved in joint operations or, in so far as the law of the Member State of the host supervisory authority permits, allow the seconding supervisory authority's members or staff to exercise their investigative powers in accordance with the law of the Member State of the seconding supervisory authority.",
          "HU": "(3) A felügyeleti hatóság a tagállami joggal összhangban, valamint a kirendelő felügyeleti hatóság engedélyével, hatáskört – ideértve a vizsgálati hatáskört is – ruházhat át a kirendelő felügyeleti hatóság közös műveletben részt vevő tagjaira vagy alkalmazottaira, vagy – amennyiben a fogadó felügyeleti hatóság tagállamának joga lehetővé teszi –, engedélyezheti a kirendelő felügyeleti hatóság tagjai vagy alkalmazottai számára, hogy vizsgálati hatáskörüket a kirendelő felügyeleti hatóság tagállami jogának megfelelően gyakorolják."
        },
        {
          "EN": "Such investigative powers may be exercised only under the guidance and in the presence of members or staff of the host supervisory authority.",
          "HU": "A vizsgálati hatáskört kizárólag a fogadó felügyeleti hatóság tagjainak vagy alkalmazottainak irányítása mellett és jelenlétében lehet gyakorolni."
        },
        {
          "EN": "The seconding supervisory authority's members or staff shall be subject to the Member State law of the host supervisory authority.",
          "HU": "A kirendelő felügyeleti hatóság tagjai vagy alkalmazottai a fogadó felügyeleti hatóság tagállami jogának hatálya alá tartoznak."
        },
        {
          "EN": "4. Where, in accordance with paragraph 1, staff of a seconding supervisory authority operate in another Member State, the Member State of the host supervisory authority shall assume responsibility for their actions, including liability, for any damage caused by them during their operations, in accordance with the law of the Member State in whose territory they are operating.",
          "HU": "(4) Ha egy kirendelő felügyeleti hatóság alkalmazottai az (1) bekezdésnek megfelelően egy másik tagállamban végeznek tevékenységet, cselekedeteikért, ideértve a tevékenységük során általuk okozott károkat is, a fogadó felügyeleti hatóság tagállama viseli a felelősséget a tevékenységvégzés helye szerinti tagállam jogának megfelelően."
        },
        {
          "EN": "5. The Member State in whose territory the damage was caused shall make good such damage under the conditions applicable to damage caused by its own staff.",
          "HU": "(5) A károkozás helye szerinti tagállam a kárt ugyanolyan feltételek mellett téríti meg, mintha azt a saját alkalmazottai okozták volna."
        },
        {
          "EN": "The Member State of the seconding supervisory authority whose staff has caused damage to any person in the territory of another Member State shall reimburse that other Member State in full any sums it has paid to the persons entitled on their behalf.",
          "HU": "Azon kirendelő felügyeleti hatóság tagállama, amelynek alkalmazottai egy másik tagállam területén valamely személynek kárt okoztak, teljes mértékben megtéríti ennek a másik tagállamnak azt az összeget, amelyet az a kártérítésre jogosult személynek kifizetett."
        },
        {
          "EN": "6. Without prejudice to the exercise of its rights vis-à-vis third parties and with the exception of paragraph 5, each Member State shall refrain, in the case provided for in paragraph 1, from requesting reimbursement from another Member State in relation to damage referred to in paragraph 4.",
          "HU": "(6) A harmadik felekkel szembeni jogai gyakorlásának sérelme nélkül és az (5) bekezdésben foglaltak kivételével, az (1) bekezdésben meghatározott esetben minden tagállam eltekint attól, hogy a (4) bekezdésben említett károk megtérítését követelje egy másik tagállamtól."
        },
        {
          "EN": "7. Where a joint operation is intended and a supervisory authority does not, within one month, comply with the obligation laid down in the second sentence of paragraph 2 of this Article, the other supervisory authorities may adopt a provisional measure on the territory of its Member State in accordance with Article 55.",
          "HU": "(7) Ha egy felügyeleti hatóság egy tervezett közös művelet esetében, egy hónapon belül nem tesz eleget az e cikk (2) bekezdése második mondatában foglalt kötelezettségnek, a többi felügyeleti hatóság az 55. cikkel összhangban a saját tagállama területén ideiglenes intézkedést fogadhat el."
        },
        {
          "EN": "In that case, the urgent need to act under Article 66(1) shall be presumed to be met and require an opinion or an urgent binding decision from the Board pursuant to Article 66(2).",
          "HU": "Ebben az esetben vélelmezni kell, hogy a 66. cikk (1) bekezdése szerinti sürgős fellépésre van szükség, és a Testület sürgősségi eljárás keretében véleményt bocsát ki vagy kötelező erejű döntést fogad el a 66. cikk (2) bekezdésével összhangban."
        },
        {
          "EN": "Section 2",
          "HU": "2. szakasz"
        },
        {
          "EN": "Consistency",
          "HU": "Egységesség"
        },
        {
          "EN": "Article 63",
          "HU": "63. cikk"
        },
        {
          "EN": "Consistency mechanism",
          "HU": "Az egységességi mechanizmus"
        },
        {
          "EN": "In order to contribute to the consistent application of this Regulation throughout the Union, the supervisory authorities shall cooperate with each other and, where relevant, with the Commission, through the consistency mechanism as set out in this Section.",
          "HU": "Az e rendeletnek az Unió egész területén történő egységes alkalmazásához való hozzájárulás érdekében a felügyeleti hatóságok együttműködnek egymással és adott esetben a Bizottsággal az e szakaszban meghatározott egységességi mechanizmus útján."
        },
        {
          "EN": "Article 64",
          "HU": "64. cikk"
        },
        {
          "EN": "Opinion of the Board",
          "HU": "Az Európai Adatvédelmi Testület véleménye"
        },
        {
          "EN": "1. The Board shall issue an opinion where a competent supervisory authority intends to adopt any of the measures below.",
          "HU": "(1) A Testület véleményt bocsát ki, ha valamely illetékes felügyeleti hatóság az alábbiakban felsorolt intézkedések valamelyikének elfogadását tervezi."
        },
        {
          "EN": "To that end, the competent supervisory authority shall communicate the draft decision to the Board, when it:",
          "HU": "Ebből a célból az illetékes felügyeleti hatóságnak közölnie kell a döntéstervezetet a Testülettel, ha a döntés:"
        },
        {
          "EN": "(a) aims to adopt a list of the processing operations subject to the requirement for a data protection impact assessment pursuant to Article 35(4);",
          "HU": "a) olyan adatkezelési műveletek jegyzékének az elfogadására irányul, amelyekre a 35. cikk (4) bekezdése szerint vonatkozik az adatvédelmi hatásvizsgálat követelménye;"
        },
        {
          "EN": "(b) concerns a matter pursuant to Article 40(7) whether a draft code of conduct or an amendment or extension to a code of conduct complies with this Regulation;",
          "HU": "b) a 40. cikk (7) bekezdése szerint azon kérdésre vonatkozik, hogy valamely magatartási kódex tervezete, illetve valamely magatartási kódex módosítása vagy bővítése összhangban van-e ezzel a rendelettel;"
        },
        {
          "EN": "(c) aims to approve the criteria for accreditation of a body pursuant to Article 41(3) or a certification body pursuant to Article 43(3);",
          "HU": "c) a 41. cikk (3) bekezdése szerint valamely szervezet, illetve a 43 cikk (3) bekezdése szerint valamely tanúsító szervezet akkreditációjára vonatkozó szempontok jóváhagyására irányul;"
        },
        {
          "EN": "(d) aims to determine standard data protection clauses referred to in point (d) of Article 46(2) and in Article 28(8);",
          "HU": "d) a 46. cikk (2) bekezdésének d) pontjában és a 28. cikk (8) bekezdésében említett általános adatvédelmi kikötések meghatározására irányul;"
        },
        {
          "EN": "(e) aims to authorise contractual clauses referred to in point (a) of Article 46(3); or",
          "HU": "e) a 46. cikk (3) bekezdésének a) pontjában említett szerződéses rendelkezések engedélyezésére irányul; vagy"
        },
        {
          "EN": "(f) aims to approve binding corporate rules within the meaning of Article 47.",
          "HU": "f) a 47. cikk szerinti kötelező erejű vállalati szabályok jóváhagyására irányul."
        },
        {
          "EN": "2. Any supervisory authority, the Chair of the Board or the Commission may request that any matter of general application or producing effects in more than one Member State be examined by the Board with a view to obtaining an opinion, in particular where a competent supervisory authority does not comply with the obligations for mutual assistance in accordance with Article 61 or for joint operations in accordance with Article 62.",
          "HU": "(2) Bármely felügyeleti hatóság, a Testület elnöke vagy a Bizottság kérheti, hogy a Testület vizsgáljon meg egy általános érvényű vagy egynél több tagállamban hatással bíró ügyet, és bocsásson ki róla véleményt, különösen, ha valamely illetékes felügyeleti hatóság nem teljesíti a 61. cikk szerinti kölcsönös segítségnyújtás vagy a 62. cikk szerinti közös műveletek tekintetében fennálló kötelezettségeit."
        },
        {
          "EN": "3. In the cases referred to in paragraphs 1 and 2, the Board shall issue an opinion on the matter submitted to it provided that it has not already issued an opinion on the same matter.",
          "HU": "(3) Az (1) és (2) bekezdésben említett esetekben a Testület véleményt bocsát ki az elé terjesztett ügyről, kivéve, ha ugyanazon ügyről már bocsátott ki véleményt."
        },
        {
          "EN": "That opinion shall be adopted within eight weeks by simple majority of the members of the Board.",
          "HU": "A véleményt a Testület nyolc héten belül, tagjainak egyszerű többségével fogadja el."
        },
        {
          "EN": "That period may be extended by a further six weeks, taking into account the complexity of the subject matter.",
          "HU": "Az ügy összetettségére figyelemmel ez a határidő további hat héttel meghosszabbítható."
        },
        {
          "EN": "Regarding the draft decision referred to in paragraph 1 circulated to the members of the Board in accordance with paragraph 5, a member which has not objected within a reasonable period indicated by the Chair, shall be deemed to be in agreement with the draft decision.",
          "HU": "Az (1) bekezdésben említett, a Testület tagjai részére a (5) bekezdésnek megfelelően eljuttatott döntéstervezetet illetően úgy kell tekinteni, hogy azok a tagok, akik az elnök által megszabott észszerű határidőn belül nem emeltek kifogást, egyetértenek a döntéstervezettel."
        },
        {
          "EN": "4. Supervisory authorities and the Commission shall, without undue delay, communicate by electronic means to the Board, using a standardised format any relevant information, including as the case may be a summary of the facts, the draft decision, the grounds which make the enactment of such measure necessary, and the views of other supervisory authorities concerned.",
          "HU": "(4) A felügyeleti hatóságok és a Bizottság indokolatlan késedelem nélkül elektronikus úton, egységes formátum alkalmazásával közölnek a Testülettel minden releváns információt, ideértve az esettől függően a tények összefoglalóját, a döntéstervezetet, az intézkedés megtételét szükségessé tevő indokokat, és más érintett felügyeleti hatóságok véleményét."
        },
        {
          "EN": "5. The Chair of the Board shall, without undue, delay inform by electronic means:",
          "HU": "(5) A Testület elnöke indokolatlan késedelem nélkül elektronikus úton tájékoztatja:"
        },
        {
          "EN": "(a) the members of the Board and the Commission of any relevant information which has been communicated to it using a standardised format.",
          "HU": "a) egységes formátum alkalmazásával tájékoztatja a Testület tagjait és a Bizottságot a vele közölt releváns információkról."
        },
        {
          "EN": "The secretariat of the Board shall, where necessary, provide translations of relevant information; and",
          "HU": "A Testület titkársága szükség esetén gondoskodik a releváns információk fordításáról; és"
        },
        {
          "EN": "(b) the supervisory authority referred to, as the case may be, in paragraphs 1 and 2, and the Commission of the opinion and make it public.",
          "HU": "b) tájékoztatja az esettől függően az (1) vagy a (2) bekezdésben említett felügyeleti hatóságot, valamint a Bizottságot a véleményről, amelyet nyilvánosságra hoz."
        },
        {
          "EN": "6. The competent supervisory authority shall not adopt its draft decision referred to in paragraph 1 within the period referred to in paragraph 3.",
          "HU": "(6) Az illetékes felügyeleti hatóság a (3) bekezdésben említett határidőn belül nem fogadhatja el az (1) bekezdésben említett döntéstervezetét."
        },
        {
          "EN": "7. The supervisory authority referred to in paragraph 1 shall take utmost account of the opinion of the Board and shall, within two weeks after receiving the opinion, communicate to the Chair of the Board by electronic means whether it will maintain or amend its draft decision and, if any, the amended draft decision, using a standardised format.",
          "HU": "(7) Az (1) bekezdésben említett felügyeleti hatóság a lehető legnagyobb mértékben figyelembe veszi a Testület véleményét, és a vélemény kézhezvételét követő két héten belül, elektronikus úton, egységes formátum alkalmazásával közli a Testület elnökével, hogy a döntéstervezetet változatlan formában fenntartja-e, vagy pedig módosítani fogja, és adott esetben megküldi a módosított döntéstervezetet."
        },
        {
          "EN": "8. Where the supervisory authority concerned informs the Chair of the Board within the period referred to in paragraph 7 of this Article that it does not intend to follow the opinion of the Board, in whole or in part, providing the relevant grounds, Article 65(1) shall apply.",
          "HU": "(8) Ha az érintett felügyeleti hatóság az e cikk (7) bekezdésében említett határidőn belül, a releváns indokok megadásával arról tájékoztatja a Testület elnökét, hogy egészében vagy részben nem kíván a Testület véleménye alapján eljárni, akkor a 65. cikk (1) bekezdését kell alkalmazni."
        },
        {
          "EN": "Article 65",
          "HU": "65. cikk"
        },
        {
          "EN": "Dispute resolution by the Board",
          "HU": "A Testület vitarendezési eljárása"
        },
        {
          "EN": "1. In order to ensure the correct and consistent application of this Regulation in individual cases, the Board shall adopt a binding decision in the following cases:",
          "HU": "(1) Annak érdekében, hogy az egyes esetekben biztosított legyen e rendelet helyes és egységes alkalmazása, a Testület kötelező erejű döntést fogad el az alábbi esetekben:"
        },
        {
          "EN": "(a) where, in a case referred to in Article 60(4), a supervisory authority concerned has raised a relevant and reasoned objection to a draft decision of the lead authority or the lead authority has rejected such an objection as being not relevant or reasoned.",
          "HU": "a) ha a 60. cikk (4) bekezdésében említett esetben valamely érintett felügyeleti hatóság releváns és megalapozott kifogást emelt a fő felügyeleti hatóság döntéstervezetével szemben, vagy ha a fő felügyeleti hatóság elutasított egy ilyen kifogást arra hivatkozva, hogy az nem releváns vagy nem megalapozott."
        },
        {
          "EN": "The binding decision shall concern all the matters which are the subject of the relevant and reasoned objection, in particular whether there is an infringement of this Regulation;",
          "HU": "A kötelező erejű döntésnek ki kell terjednie a releváns és megalapozott kifogásban szereplő összes kérdésre, különösen arra, hogy a rendelet sérült-e;"
        },
        {
          "EN": "(b) where there are conflicting views on which of the supervisory authorities concerned is competent for the main establishment;",
          "HU": "b) ha eltérnek az álláspontok azt illetően, hogy az érintett felügyeleti hatóságok közül melyik illetékes a tevékenységi központ tekintetében;"
        },
        {
          "EN": "(c) where a competent supervisory authority does not request the opinion of the Board in the cases referred to in Article 64(1), or does not follow the opinion of the Board issued under Article 64.",
          "HU": "c) ha valamely illetékes felügyeleti hatóság nem kéri ki a Testület véleményét a 64. cikk (1) bekezdésében említett esetekben, vagy nem a Testület által a 64. cikk alapján kibocsátott vélemény alapján jár el."
        },
        {
          "EN": "In that case, any supervisory authority concerned or the Commission may communicate the matter to the Board.",
          "HU": "Ebben az esetben bármely érintett felügyeleti hatóság vagy a Bizottság a Testület tudomására hozhatja az ügyet."
        },
        {
          "EN": "2. The decision referred to in paragraph 1 shall be adopted within one month from the referral of the subject-matter by a two-thirds majority of the members of the Board.",
          "HU": "(2) Az (1) bekezdésben említett döntést a Testület az ügy benyújtásától számított egy hónapon belül, tagjainak kétharmados többségével fogadja el."
        },
        {
          "EN": "That period may be extended by a further month on account of the complexity of the subject-matter.",
          "HU": "Az ügy összetettségére figyelemmel ez a határidő további egy hónappal meghosszabbítható."
        },
        {
          "EN": "The decision referred to in paragraph 1 shall be reasoned and addressed to the lead supervisory authority and all the supervisory authorities concerned and binding on them.",
          "HU": "Az (1) bekezdésben említett döntést indokolni kell, és meg kell küldeni a fő felügyeleti hatóságnak és minden érintett felügyeleti hatóságnak, amelyekre nézve kötelező erővel rendelkezik."
        },
        {
          "EN": "3. Where the Board has been unable to adopt a decision within the periods referred to in paragraph 2, it shall adopt its decision within two weeks following the expiration of the second month referred to in paragraph 2 by a simple majority of the members of the Board.",
          "HU": "(3) Ha a Testület döntését nem képes a (2) bekezdésben említett határidőkön belül elfogadni, a döntést a (2) bekezdésben említett második hónap leteltét követő két héten belül, tagjainak egyszerű többségével fogadja el."
        },
        {
          "EN": "Where the members of the Board are split, the decision shall by adopted by the vote of its Chair.",
          "HU": "A Testület tagjainak szavazategyenlősége esetén a döntés elfogadásáról az elnök szavazata dönt."
        },
        {
          "EN": "4. The supervisory authorities concerned shall not adopt a decision on the subject matter submitted to the Board under paragraph 1 during the periods referred to in paragraphs 2 and 3.",
          "HU": "(4) Az érintett felügyeleti hatóságok a (2) és (3) bekezdésben említett határidők lejártáig nem fogadhatnak el döntést az (1) bekezdés alapján a Testület elé terjesztett ügyről."
        },
        {
          "EN": "5. The Chair of the Board shall notify, without undue delay, the decision referred to in paragraph 1 to the supervisory authorities concerned.",
          "HU": "(5) A Testület elnöke indokolatlan késedelem nélkül értesíti az érintett felügyeleti hatóságokat az (1) bekezdésben említett döntésről."
        },
        {
          "EN": "It shall inform the Commission thereof.",
          "HU": "Erről tájékoztatnia kell a Bizottságot."
        },
        {
          "EN": "The decision shall be published on the website of the Board without delay after the supervisory authority has notified the final decision referred to in paragraph 6.",
          "HU": "A döntést haladéktalanul közzé kell tenni a Testület honlapján azt követően, hogy a felügyeleti hatóság bejelentette a (6) bekezdésben említett jogerős döntést."
        },
        {
          "EN": "6. The lead supervisory authority or, as the case may be, the supervisory authority with which the complaint has been lodged shall adopt its final decision on the basis of the decision referred to in paragraph 1 of this Article, without undue delay and at the latest by one month after the Board has notified its decision.",
          "HU": "(6) A fő felügyeleti hatóság vagy – az esettől függően – az a felügyeleti hatóság, amelyhez a panaszt benyújtották, az e cikk (1) bekezdésében említett döntés alapján indokolatlan késedelem nélkül, de legkésőbb egy hónappal azt követően, hogy a Testület bejelentette döntését elfogadja jogerős döntését."
        },
        {
          "EN": "The lead supervisory authority or, as the case may be, the supervisory authority with which the complaint has been lodged, shall inform the Board of the date when its final decision is notified respectively to the controller or the processor and to the data subject.",
          "HU": "A fő felügyeleti hatóság vagy – az esettől függően – az a felügyeleti hatóság, amelyhez a panaszt benyújtották, tájékoztatja a Testületet arról a dátumról, amikor az adatkezelővel, az adatfeldolgozóval, illetve az érintettel közli jogerős döntését."
        },
        {
          "EN": "The final decision of the supervisory authorities concerned shall be adopted under the terms of Article 60(7), (8) and (9).",
          "HU": "Az érintett felügyeleti hatóságok jogerős döntését a 60. cikk (7), (8) és (9) bekezdésében foglaltaknak megfelelően kell elfogadni."
        },
        {
          "EN": "The final decision shall refer to the decision referred to in paragraph 1 of this Article and shall specify that the decision referred to in that paragraph will be published on the website of the Board in accordance with paragraph 5 of this Article.",
          "HU": "A jogerős döntésben utalni kell az e cikk (1) bekezdésben említett döntésre, valamint közölni kell, hogy az (1) bekezdésében említett döntést a (5) bekezdéssel összhangban közzé fogják tenni a Testület honlapján."
        },
        {
          "EN": "The final decision shall attach the decision referred to in paragraph 1 of this Article.",
          "HU": "A jogerős döntéshez csatolni kell az e cikk (1) bekezdésében említett döntést."
        },
        {
          "EN": "Article 66",
          "HU": "66. cikk"
        },
        {
          "EN": "Urgency procedure",
          "HU": "Sürgősségi eljárás"
        },
        {
          "EN": "1. In exceptional circumstances, where a supervisory authority concerned considers that there is an urgent need to act in order to protect the rights and freedoms of data subjects, it may, by way of derogation from the consistency mechanism referred to in Articles 63, 64 and 65 or the procedure referred to in Article 60, immediately adopt provisional measures intended to produce legal effects on its own territory with a specified period of validity which shall not exceed three months.",
          "HU": "(1) Ha egy érintett felügyeleti hatóság rendkívüli körülmények fennállása esetén, úgy véli, hogy az érintettek jogainak és szabadságainak védelme érdekében sürgős fellépésre van szükség, akkor a 63., 64. és 65. cikkben említett egységességi mechanizmustól, illetve a 60. cikkben említett eljárástól eltérve haladéktalanul legfeljebb három hónapra szóló meghatározott érvényességi idejű ideiglenes intézkedéseket fogadhat el abból a célból, hogy saját tagállama területén joghatást váltson ki."
        },
        {
          "EN": "The supervisory authority shall, without delay, communicate those measures and the reasons for adopting them to the other supervisory authorities concerned, to the Board and to the Commission.",
          "HU": "A felügyeleti hatóság haladéktalanul közli az ilyen intézkedéseket és elfogadásuk indokait a többi érintett felügyeleti hatósággal, a Testülettel és a Bizottsággal."
        },
        {
          "EN": "2. Where a supervisory authority has taken a measure pursuant to paragraph 1 and considers that final measures need urgently be adopted, it may request an urgent opinion or an urgent binding decision from the Board, giving reasons for requesting such opinion or decision.",
          "HU": "(2) Ha egy felügyeleti hatóság az (1) bekezdés szerinti intézkedést hozott, és úgy véli, hogy végleges intézkedések sürgős elfogadására van szükség, kérését megindokolva kérheti a Testületet, hogy sürgősségi eljárás keretében bocsásson ki véleményt vagy fogadjon el kötelező erejű döntést."
        },
        {
          "EN": "3. Any supervisory authority may request an urgent opinion or an urgent binding decision, as the case may be, from the Board where a competent supervisory authority has not taken an appropriate measure in a situation where there is an urgent need to act, in order to protect the rights and freedoms of data subjects, giving reasons for requesting such opinion or decision, including for the urgent need to act.",
          "HU": "(3) Kérését a sürgős fellépés szükségességére kiterjedően is megindokolva bármely felügyeleti hatóság kérheti a Testületet, hogy sürgősségi eljárás keretében az esettől függően bocsásson ki véleményt vagy fogadjon el kötelező erejű döntést, ha valamely illetékes felügyeleti hatóság nem tett megfelelő intézkedést olyan helyzetben, amikor az érintettek jogainak és szabadságainak védelme érdekében sürgős fellépésre van szükség."
        },
        {
          "EN": "4. By derogation from Article 64(3) and Article 65(2), an urgent opinion or an urgent binding decision referred to in paragraphs 2 and 3 of this Article shall be adopted within two weeks by simple majority of the members of the Board.",
          "HU": "(4) A 64. cikk (3) bekezdésétől és a 65. cikk (2) bekezdésétől eltérve az e cikk (2) és (3) bekezdésében említett, sürgősségi eljárás keretében elfogadandó véleményt, illetve kötelező erejű döntést a Testület két héten belül, tagjainak egyszerű többségével fogadja el."
        },
        {
          "EN": "Article 67",
          "HU": "67. cikk"
        },
        {
          "EN": "Exchange of information",
          "HU": "Információcsere"
        },
        {
          "EN": "The Commission may adopt implementing acts of general scope in order to specify the arrangements for the exchange of information by electronic means between supervisory authorities, and between supervisory authorities and the Board, in particular the standardised format referred to in Article 64.",
          "HU": "A Bizottság általános hatályú végrehajtási jogi aktusok elfogadása révén meghatározhatja a felügyeleti hatóságok közötti, illetve a felügyeleti hatóságok és a Testület közötti elektronikus információcserére vonatkozó szabályokat, különösen a 64. cikkben említett egységes formátumot."
        },
        {
          "EN": "Those implementing acts shall be adopted in accordance with the examination procedure referred to in Article 93(2).",
          "HU": "Ezeket a végrehajtási jogi aktusokat a 93. cikk (2) bekezdésében említett vizsgálóbizottsági eljárásnak megfelelően kell elfogadni."
        },
        {
          "EN": "Section 3",
          "HU": "3. szakasz"
        },
        {
          "EN": "European data protection board",
          "HU": "Európai adatvédelmi testület"
        },
        {
          "EN": "Article 68",
          "HU": "68. cikk"
        },
        {
          "EN": "European Data Protection Board",
          "HU": "Az Európai Adatvédelmi Testület"
        },
        {
          "EN": "1. The European Data Protection Board (the ‘Board’) is hereby established as a body of the Union and shall have legal personality.",
          "HU": "(1) Létrejön az Európai Adatvédelmi Testület („a Testület”) mint jogi személyiséggel rendelkező uniós szerv."
        },
        {
          "EN": "2. The Board shall be represented by its Chair.",
          "HU": "(2) A Testületet az elnöke képviseli."
        },
        {
          "EN": "3. The Board shall be composed of the head of one supervisory authority of each Member State and of the European Data Protection Supervisor, or their respective representatives.",
          "HU": "(3) A Testület minden tagállam egy felügyeleti hatóságának vezetőjéből és az európai adatvédelmi biztosból vagy azok képviselőiből áll."
        },
        {
          "EN": "4. Where in a Member State more than one supervisory authority is responsible for monitoring the application of the provisions pursuant to this Regulation, a joint representative shall be appointed in accordance with that Member State's law.",
          "HU": "(4) Ha valamely tagállamban egynél több felügyeleti hatóság felelős az e rendelet szerinti rendelkezések alkalmazásának ellenőrzéséért, közös képviselőt kell kinevezni az érintett tagállam jogának megfelelően."
        },
        {
          "EN": "5. The Commission shall have the right to participate in the activities and meetings of the Board without voting right.",
          "HU": "(5) A Bizottság szavazati jog nélkül részt vehet a Testület tevékenységében és ülésein."
        },
        {
          "EN": "The Commission shall designate a representative.",
          "HU": "A Bizottság kijelöli képviselőjét."
        },
        {
          "EN": "The Chair of the Board shall communicate to the Commission the activities of the Board.",
          "HU": "A Testület elnöke tájékoztatja a Bizottságot a Testület tevékenységeiről."
        },
        {
          "EN": "6. In the cases referred to in Article 65, the European Data Protection Supervisor shall have voting rights only on decisions which concern principles and rules applicable to the Union institutions, bodies, offices and agencies which correspond in substance to those of this Regulation.",
          "HU": "(6) A 65. cikkben említett esetekben az európai adatvédelmi biztos kizárólag az uniós intézményekre, szervekre, hivatalokra és ügynökségekre alkalmazandó azon elveket és szabályokat érintő döntések tekintetében rendelkezik szavazati joggal, amelyek tartalmilag megfelelnek az e rendeletben foglalt elveknek és szabályoknak."
        },
        {
          "EN": "Article 69",
          "HU": "69. cikk"
        },
        {
          "EN": "Independence",
          "HU": "Függetlenség"
        },
        {
          "EN": "1. The Board shall act independently when performing its tasks or exercising its powers pursuant to Articles 70 and 71.",
          "HU": "(1) A Testület a 70. és 71. cikk szerinti feladatainak ellátása, illetve hatásköreinek gyakorlása során függetlenül jár el."
        },
        {
          "EN": "2. Without prejudice to requests by the Commission referred to in point (b) of Article 70(1) and in Article 70(2), the Board shall, in the performance of its tasks or the exercise of its powers, neither seek nor take instructions from anybody.",
          "HU": "(2) A 70. cikk (1) bekezdésének b) pontjában és a 70. cikk (2) bekezdésében említett, a Bizottságtól érkező kérések sérelme nélkül, a Testület feladatainak ellátása, illetve hatásköreinek gyakorlása során nem kérhet, és nem fogadhat el utasítást."
        },
        {
          "EN": "Article 70",
          "HU": "70. cikk"
        },
        {
          "EN": "Tasks of the Board",
          "HU": "Az Európai Adatvédelmi Testület feladatai"
        },
        {
          "EN": "1. The Board shall ensure the consistent application of this Regulation.",
          "HU": "(1) A Testület biztosítja e rendelet egységes alkalmazását."
        },
        {
          "EN": "To that end, the Board shall, on its own initiative or, where relevant, at the request of the Commission, in particular:",
          "HU": "Ennek érdekében a Testület saját kezdeményezésére vagy adott esetben a Bizottság kérésére ellátja különösen a következő feladatokat:"
        },
        {
          "EN": "(a) monitor and ensure the correct application of this Regulation in the cases provided for in Articles 64 and 65 without prejudice to the tasks of national supervisory authorities;",
          "HU": "a) ellenőrzi és biztosítja e rendelet helyes alkalmazását a 64. és 65. cikkben meghatározott esetekben, a nemzeti felügyeleti hatóságok feladatainak sérelme nélkül;"
        },
        {
          "EN": "(b) advise the Commission on any issue related to the protection of personal data in the Union, including on any proposed amendment of this Regulation;",
          "HU": "b) tanácsot ad a Bizottságnak a személyes adatok Unión belüli védelmével kapcsolatos kérdésekben, ideértve az e rendelet módosítására irányuló javaslatokat is;"
        },
        {
          "EN": "(c) advise the Commission on the format and procedures for the exchange of information between controllers, processors and supervisory authorities for binding corporate rules;",
          "HU": "c) tanácsot ad a Bizottságnak az adatkezelők, az adatfeldolgozók és a felügyeleti hatóságok között a kötelező erejű vállalati szabályokkal kapcsolatban folytatott információcsere formátumára és eljárásaira vonatkozóan;"
        },
        {
          "EN": "(d) issue guidelines, recommendations, and best practices on procedures for erasing links, copies or replications of personal data from publicly available communication services as referred to in Article 17(2);",
          "HU": "d) iránymutatásokat, ajánlásokat és legjobb gyakorlatokat bocsát ki a személyes adatokra mutató linkeknek, az ilyen adatok másolatainak vagy másodpéldányainak a nyilvánosság számára hozzáférhető kommunikációs szolgáltatásokból történő törlésére vonatkozóan, a 17. cikk (2) bekezdésben említettek szerint;"
        },
        {
          "EN": "(e) examine, on its own initiative, on request of one of its members or on request of the Commission, any question covering the application of this Regulation and issue guidelines, recommendations and best practices in order to encourage consistent application of this Regulation;",
          "HU": "e) saját kezdeményezésére, illetve valamely tagjának vagy a Bizottságnak a kérésére megvizsgálja az e rendelet alkalmazását érintő kérdéseket, valamint e rendelet egységes alkalmazásának elősegítése érdekében iránymutatásokat, ajánlásokat és legjobb gyakorlatokat bocsát ki;"
        },
        {
          "EN": "(f) issue guidelines, recommendations and best practices in accordance with point (e) of this paragraph for further specifying the criteria and conditions for decisions based on profiling pursuant to Article 22(2);",
          "HU": "f) e bekezdés e) pontjával összhangban iránymutatásokat, ajánlásokat és legjobb gyakorlatokat bocsát ki a 22. cikk (2) bekezdése szerinti profilalkotáson alapuló döntéshozatalra vonatkozó szempontok és feltételek további pontosítása érdekében;"
        },
        {
          "EN": "(g) issue guidelines, recommendations and best practices in accordance with point (e) of this paragraph for establishing the personal data breaches and determining the undue delay referred to in Article 33(1) and (2) and for the particular circumstances in which a controller or a processor is required to notify the personal data breach;",
          "HU": "g) e bekezdés e) pontjával összhangban iránymutatásokat, ajánlásokat és legjobb gyakorlatokat bocsát ki a 33. cikk (1) és (2) bekezdésében említett adatvédelmi incidens és indokolatlan késedelem tényének megállapítására, valamint azokra a konkrét körülményekre vonatkozóan, amelyek fennállása esetén az adatkezelőnek vagy az adatfeldolgozónak be kell jelentenie az adatvédelmi incidenst;"
        },
        {
          "EN": "(h) issue guidelines, recommendations and best practices in accordance with point (e) of this paragraph as to the circumstances in which a personal data breach is likely to result in a high risk to the rights and freedoms of the natural persons referred to in Article 34(1).",
          "HU": "h) e bekezdés e) pontjával összhangban iránymutatásokat, ajánlásokat és legjobb gyakorlatokat bocsát ki azokra a körülményekre vonatkozóan, amelyek fennállása esetén az adatvédelmi incidens valószínűsíthetően magas kockázattal jár a természetes személyek jogaira és szabadságaira nézve, a 34. cikk (1) bekezdésében említettek szerint;"
        },
        {
          "EN": "(i) issue guidelines, recommendations and best practices in accordance with point (e) of this paragraph for the purpose of further specifying the criteria and requirements for personal data transfers based on binding corporate rules adhered to by controllers and binding corporate rules adhered to by processors and on further necessary requirements to ensure the protection of personal data of the data subjects concerned referred to in Article 47;",
          "HU": "i) e bekezdés e) pontjával összhangban iránymutatásokat, ajánlásokat és legjobb gyakorlatokat bocsát ki az adatkezelők, illetve az adatfeldolgozók által követett, a kötelező erejű vállalati szabályokon alapuló, személyes adatok továbbítására vonatkozó, a 47. cikkben említett szempontok és követelmények, valamint az érintettek személyes adatainak védelmét biztosítani hivatott ugyanazon cikkben említett egyéb szükséges követelmények további pontosítása céljából;"
        },
        {
          "EN": "(j) issue guidelines, recommendations and best practices in accordance with point (e) of this paragraph for the purpose of further specifying the criteria and requirements for the personal data transfers on the basis of Article 49(1);",
          "HU": "j) e bekezdés e) pontjával összhangban iránymutatásokat, ajánlásokat és legjobb gyakorlatokat bocsát ki a személyes adatoknak a 49. cikk (1) bekezdése alapján történő továbbítására vonatkozó szempontok és előírások további pontosítása céljából;"
        },
        {
          "EN": "(k) draw up guidelines for supervisory authorities concerning the application of measures referred to in Article 58(1), (2) and (3) and the setting of administrative fines pursuant to Article 83;",
          "HU": "k) iránymutatásokat dolgoz ki a felügyeleti hatóságok számára az 58. cikk (1), (2) és (3) bekezdésében említett intézkedések alkalmazására, valamint a 83. cikk szerinti közigazgatási bírságok megállapítására vonatkozóan;"
        },
        {
          "EN": "(l) review the practical application of the guidelines, recommendations and best practices referred to in points (e) and (f);",
          "HU": "l) felülvizsgálja az e), illetve f) pontban említett iránymutatások, ajánlások és legjobb gyakorlatok gyakorlati alkalmazását;"
        },
        {
          "EN": "(m) issue guidelines, recommendations and best practices in accordance with point (e) of this paragraph for establishing common procedures for reporting by natural persons of infringements of this Regulation pursuant to Article 54(2);",
          "HU": "m) e bekezdés e) pontjával összhangban iránymutatásokat, ajánlásokat és legjobb gyakorlatokat bocsát ki az 54. cikk (2) bekezdésben említett, a természetes személyek által e rendelet megsértését illetően tett bejelentésekre vonatkozó közös eljárások megállapítása érdekében,;"
        },
        {
          "EN": "(n) encourage the drawing-up of codes of conduct and the establishment of data protection certification mechanisms and data protection seals and marks pursuant to Articles 40 and 42;",
          "HU": "n) ösztönzi a magatartási kódexek kidolgozását, valamint az adatvédelmi tanúsítási mechanizmusok és az adatvédelmi bélyegzők, illetve jelölések létrehozását a 40. és 42. cikkben említettek szerint;"
        },
        {
          "EN": "(o) carry out the accreditation of certification bodies and its periodic review pursuant to Article 43 and maintain a public register of accredited bodies pursuant to Article 43(6) and of the accredited controllers or processors established in third countries pursuant to Article 42(7);",
          "HU": "o) a 43. cikknek megfelelően elvégzi a tanúsító szervezetek akkreditációját és annak rendszeres felülvizsgálatát, nyilvános nyilvántartást vezet egyrészt a 43. cikk (6) bekezdése szerint az akkreditált szervezetekről, másrészt a 42. cikk (7) bekezdése szerint a harmadik országban tevékenységi hellyel rendelkező akkreditált adatkezelőkről és adatfeldolgozókról;"
        },
        {
          "EN": "(p) specify the requirements referred to in Article 43(3) with a view to the accreditation of certification bodies under Article 42;",
          "HU": "p) részletesen meghatározza a 43. cikk (3) bekezdésében említett követelményeket a tanúsító szervezetek 42. cikk szerinti akkreditációja céljából;"
        },
        {
          "EN": "(q) provide the Commission with an opinion on the certification requirements referred to in Article 43(8);",
          "HU": "q) véleményezi a Bizottság számára a 43. cikk (8) bekezdésében említett tanúsítási követelményeket;"
        },
        {
          "EN": "(r) provide the Commission with an opinion on the icons referred to in Article 12(7);",
          "HU": "r) véleményezi a Bizottság számára a 12. cikk (7) bekezdésében említett ikonokat;"
        },
        {
          "EN": "(s) provide the Commission with an opinion for the assessment of the adequacy of the level of protection in a third country or international organisation, including for the assessment whether a third country, a territory or one or more specified sectors within that third country, or an international organisation no longer ensures an adequate level of protection.",
          "HU": "s) véleményt bocsát ki a Bizottság számára a valamely harmadik országban vagy nemzetközi szervezetben biztosított védelmi szint megfelelőségének megítéléséhez, ideértve annak megállapítását is, ha a harmadik ország, a harmadik ország valamely területe vagy egy vagy több meghatározott ágazata, vagy a nemzetközi szervezet már nem biztosít megfelelő védelmi szintet."
        },
        {
          "EN": "To that end, the Commission shall provide the Board with all necessary documentation, including correspondence with the government of the third country, with regard to that third country, territory or specified sector, or with the international organisation.",
          "HU": "A Bizottság e célból biztosítja a Testület számára az összes szükséges dokumentációt, köztük a harmadik ország kormányával, a harmadik ország, annak valamely területe vagy meghatározott ágazata tekintetében, illetve a nemzetközi szervezettel folytatott levélváltást;"
        },
        {
          "EN": "(t) issue opinions on draft decisions of supervisory authorities pursuant to the consistency mechanism referred to in Article 64(1), on matters submitted pursuant to Article 64(2) and to issue binding decisions pursuant to Article 65, including in cases referred to in Article 66;",
          "HU": "t) az egységességi mechanizmus keretében véleményt bocsát ki a felügyeleti hatóságok 64 cikk (1) bekezdése szerinti döntéstervezeteiről, a 64. cikk (2) bekezdésének megfelelően elé terjesztett ügyekről,, valamint a 65. cikk értelmében – ideértve a 66. cikkben említett eseteket is – kötelező erejű döntéseket hoz;"
        },
        {
          "EN": "(u) promote the cooperation and the effective bilateral and multilateral exchange of information and best practices between the supervisory authorities;",
          "HU": "u) előmozdítja az együttműködést, valamint az információk és gyakorlatok hatékony két- vagy többoldalú cseréjét a felügyeleti hatóságok között;"
        },
        {
          "EN": "(v) promote common training programmes and facilitate personnel exchanges between the supervisory authorities and, where appropriate, with the supervisory authorities of third countries or with international organisations;",
          "HU": "v) támogatja a közös képzési programokat, továbbá megkönnyíti a csereprogramokat a felügyeleti hatóságok között, valamint adott esetben harmadik országok felügyeleti hatóságaival vagy nemzetközi szervezetekkel;"
        },
        {
          "EN": "(w) promote the exchange of knowledge and documentation on data protection legislation and practice with data protection supervisory authorities worldwide.",
          "HU": "w) az adatvédelmi felügyeleti hatóságok körében világszerte előmozdítja az adatvédelmi jogszabályokra és gyakorlatokra vonatkozó ismeretek és dokumentáció cseréjét;"
        },
        {
          "EN": "(x) issue opinions on codes of conduct drawn up at Union level pursuant to Article 40(9); and",
          "HU": "x) véleményt bocsát ki a 40. cikk (9) bekezdése szerinti, uniós szinten kidolgozott magatartási kódexekről; és"
        },
        {
          "EN": "(y) maintain a publicly accessible electronic register of decisions taken by supervisory authorities and courts on issues handled in the consistency mechanism.",
          "HU": "y) nyilvánosan hozzáférhető elektronikus nyilvántartást vezet az egységességi mechanizmus keretében kezelt ügyekkel kapcsolatban a felügyeleti hatóságok és a bíróságok által hozott határozatokról."
        },
        {
          "EN": "2. Where the Commission requests advice from the Board, it may indicate a time limit, taking into account the urgency of the matter.",
          "HU": "(2) A Bizottság, ha tanácsot kér a Testülettől, az ügy sürgősségét figyelembe véve határidőt jelölhet meg."
        },
        {
          "EN": "3. The Board shall forward its opinions, guidelines, recommendations, and best practices to the Commission and to the committee referred to in Article 93 and make them public.",
          "HU": "(3) A Testület továbbítja a véleményeit, iránymutatásait, ajánlásait és legjobb gyakorlatait a Bizottságnak és a 93. cikkben említett bizottságnak, és nyilvánosságra hozza azokat."
        },
        {
          "EN": "4. The Board shall, where appropriate, consult interested parties and give them the opportunity to comment within a reasonable period.",
          "HU": "(4) A Testület adott esetben konzultál az érintett felekkel, és lehetőséget biztosít számukra, hogy észszerű határidőn belül közöljék észrevételeiket."
        },
        {
          "EN": "The Board shall, without prejudice to Article 76, make the results of the consultation procedure publicly available.",
          "HU": "A Testület, a 76. cikk sérelme nélkül,nyilvánosan elérhetővé teszi a konzultációs eljárás eredményeit."
        },
        {
          "EN": "Article 71",
          "HU": "71. cikk"
        },
        {
          "EN": "Reports",
          "HU": "Jelentések"
        },
        {
          "EN": "1. The Board shall draw up an annual report regarding the protection of natural persons with regard to processing in the Union and, where relevant, in third countries and international organisations.",
          "HU": "(1) A Testület éves jelentést készít a természetes személyeknek az Unióban, valamint adott esetben harmadik országokban és nemzetközi szervezetekben folyó adatkezelés tekintetében történő védelméről."
        },
        {
          "EN": "The report shall be made public and be transmitted to the European Parliament, to the Council and to the Commission.",
          "HU": "A jelentést közzé kell tenni, és továbbítani kell az Európai Parlamentnek, a Tanácsnak és a Bizottságnak."
        },
        {
          "EN": "2. The annual report shall include a review of the practical application of the guidelines, recommendations and best practices referred to in point (l) of Article 70(1) as well as of the binding decisions referred to in Article 65.",
          "HU": "(2) Az éves jelentés tartalmazza a 70. cikk (1) bekezdésének l) pontjában említett iránymutatások, ajánlások és legjobb gyakorlatok gyakorlati alkalmazásának, valamint a 65. cikkben említett kötelező erejű határozatoknak az áttekintését."
        },
        {
          "EN": "Article 72",
          "HU": "72. cikk"
        },
        {
          "EN": "Procedure",
          "HU": "Eljárás"
        },
        {
          "EN": "1. The Board shall take decisions by a simple majority of its members, unless otherwise provided for in this Regulation.",
          "HU": "(1) A Testület tagjainak egyszerű többségével hozza meg döntéseit, kivéve, ha ez a rendelet eltérően rendelkezik."
        },
        {
          "EN": "2. The Board shall adopt its own rules of procedure by a two-thirds majority of its members and organise its own operational arrangements.",
          "HU": "(2) A Testület tagjainak kétharmados többségével elfogadja saját eljárási szabályzatát, és megállapítja működési rendjét."
        },
        {
          "EN": "Article 73",
          "HU": "73. cikk"
        },
        {
          "EN": "Chair",
          "HU": "Az elnök"
        },
        {
          "EN": "1. The Board shall elect a chair and two deputy chairs from amongst its members by simple majority.",
          "HU": "(1) A Testület a tagjai közül egyszerű többséggel elnököt és két elnökhelyettest választ."
        },
        {
          "EN": "2. The term of office of the Chair and of the deputy chairs shall be five years and be renewable once.",
          "HU": "(2) Az elnök és az elnökhelyettesek megbízatása öt évre szól, és egy alkalommal megújítható."
        },
        {
          "EN": "Article 74",
          "HU": "74. cikk"
        },
        {
          "EN": "Tasks of the Chair",
          "HU": "Az elnök feladatai"
        },
        {
          "EN": "1. The Chair shall have the following tasks:",
          "HU": "(1) Az elnök feladatai a következők:"
        },
        {
          "EN": "(a) to convene the meetings of the Board and prepare its agenda;",
          "HU": "a) összehívja a Testület üléseit, és összeállítja azok napirendjét;"
        },
        {
          "EN": "(b) to notify decisions adopted by the Board pursuant to Article 65 to the lead supervisory authority and the supervisory authorities concerned;",
          "HU": "b) a Testület által a 65. cikknek megfelelően elfogadott döntéseket közli a fő felügyeleti hatósággal és az érintett felügyeleti hatóságokkal;"
        },
        {
          "EN": "(c) to ensure the timely performance of the tasks of the Board, in particular in relation to the consistency mechanism referred to in Article 63.",
          "HU": "c) biztosítja a Testület feladatainak időben történő elvégzését, különösen az 63. cikkben említett egységességi mechanizmussal összefüggésben."
        },
        {
          "EN": "2. The Board shall lay down the allocation of tasks between the Chair and the deputy chairs in its rules of procedure.",
          "HU": "(2) A Testületnek az eljárási szabályzatában meghatározza az elnök és az elnökhelyettesek közötti feladatmegosztást."
        },
        {
          "EN": "Article 75",
          "HU": "75. cikk"
        },
        {
          "EN": "Secretariat",
          "HU": "Titkárság"
        },
        {
          "EN": "1. The Board shall have a secretariat, which shall be provided by the European Data Protection Supervisor.",
          "HU": "(1) A Testület titkársággal rendelkezik, amelyet az európai adatvédelmi biztos biztosít."
        },
        {
          "EN": "2. The secretariat shall perform its tasks exclusively under the instructions of the Chair of the Board.",
          "HU": "(2) A titkárság kizárólag a Testület elnökének utasításai alapján végzi a feladatait."
        },
        {
          "EN": "3. The staff of the European Data Protection Supervisor involved in carrying out the tasks conferred on the Board by this Regulation shall be subject to separate reporting lines from the staff involved in carrying out tasks conferred on the European Data Protection Supervisor.",
          "HU": "(3) Az európai adatvédelmi biztos azon alkalmazottait, akik az e rendelettel a Testületre ruházott feladatok ellátásában részt vesznek, az európai adatvédelmi biztosra ruházott feladatok ellátásában részt vevő alkalmazottaktól eltérő függelmi rendszerben kell alkalmazni."
        },
        {
          "EN": "4. Where appropriate, the Board and the European Data Protection Supervisor shall establish and publish a Memorandum of Understanding implementing this Article, determining the terms of their cooperation, and applicable to the staff of the European Data Protection Supervisor involved in carrying out the tasks conferred on the Board by this Regulation.",
          "HU": "(4) A Testület és az európai adatvédelmi biztos adott esetben e cikk végrehajtásáról egyetértési megállapodást kötnek, amelyet közzétesznek, és ebben rendelkeznek együttműködésük feltételeiről; e megállapodást kell alkalmazni az európai adatvédelmi biztos hivatalának azon alkalmazottaira, akik részt vesznek az e rendelettel a Testületre ruházott feladatok ellátásában."
        },
        {
          "EN": "5. The secretariat shall provide analytical, administrative and logistical support to the Board.",
          "HU": "(5) A titkárság elemzési, igazgatási és logisztikai támogatást nyújt a Testületnek."
        },
        {
          "EN": "6. The secretariat shall be responsible in particular for:",
          "HU": "(6) A titkárság különösen a következőkért felel:"
        },
        {
          "EN": "(a) the day-to-day business of the Board;",
          "HU": "a) a Testület napi működése;"
        },
        {
          "EN": "(b) communication between the members of the Board, its Chair and the Commission;",
          "HU": "b) a Testület tagjai, elnöke és a Bizottság közötti kommunikáció,"
        },
        {
          "EN": "(c) communication with other institutions and the public;",
          "HU": "c) a más intézményekkel és a nyilvánossággal folytatott kommunikáció;"
        },
        {
          "EN": "(d) the use of electronic means for the internal and external communication;",
          "HU": "d) az elektronikus eszközök használata a belső és külső kommunikáció céljára;"
        },
        {
          "EN": "(e) the translation of relevant information;",
          "HU": "e) a releváns információk fordítása;"
        },
        {
          "EN": "(f) the preparation and follow-up of the meetings of the Board;",
          "HU": "f) a Testület üléseinek előkészítése és az azokat követő intézkedések;"
        },
        {
          "EN": "(g) the preparation, drafting and publication of opinions, decisions on the settlement of disputes between supervisory authorities and other texts adopted by the Board.",
          "HU": "g) a Testület által elfogadott vélemények, a felügyeleti hatóságok közötti viták rendezéséről szóló döntések és egyéb szövegek előkészítése, szövegezése és közzététele."
        },
        {
          "EN": "Article 76",
          "HU": "76. cikk"
        },
        {
          "EN": "Confidentiality",
          "HU": "Titoktartás"
        },
        {
          "EN": "1. The discussions of the Board shall be confidential where the Board deems it necessary, as provided for in its rules of procedure.",
          "HU": "(1) A Testület megbeszélései az eljárási szabályzat előírásai szerint titkosak, ha a Testület azt szükségesnek tartja."
        },
        {
          "EN": "2. Access to documents submitted to members of the Board, experts and representatives of third parties shall be governed by Regulation (EC) No 1049/2001 of the European Parliament and of the Council [21](21).",
          "HU": "(2) A Testület tagjainak, a szakértőknek és a harmadik felek képviselőinek benyújtott dokumentumokhoz való hozzáférésre az 1049/2001/EK európai parlamenti és tanácsi rendelet [21](21) az irányadó."
        },
        {
          "EN": "CHAPTER VIII",
          "HU": "VIII. FEJEZET"
        },
        {
          "EN": "Remedies, liability and penalties",
          "HU": "Jogorvoslat, felelősség és szankciók"
        },
        {
          "EN": "Article 77",
          "HU": "77. cikk"
        },
        {
          "EN": "Right to lodge a complaint with a supervisory authority",
          "HU": "A felügyeleti hatóságnál történő panasztételhez való jog"
        },
        {
          "EN": "1. Without prejudice to any other administrative or judicial remedy, every data subject shall have the right to lodge a complaint with a supervisory authority, in particular in the Member State of his or her habitual residence, place of work or place of the alleged infringement if the data subject considers that the processing of personal data relating to him or her infringes this Regulation.",
          "HU": "(1) Az egyéb közigazgatási vagy bírósági jogorvoslatok sérelme nélkül, minden érintett jogosult arra, hogy panaszt tegyen egy felügyeleti hatóságnál – különösen a szokásos tartózkodási helye, a munkahelye vagy a feltételezett jogsértés helye szerinti tagállamban –, ha az érintett megítélése szerint a rá vonatkozó személyes adatok kezelése megsérti e rendeletet."
        },
        {
          "EN": "2. The supervisory authority with which the complaint has been lodged shall inform the complainant on the progress and the outcome of the complaint including the possibility of a judicial remedy pursuant to Article 78.",
          "HU": "(2) Az a felügyeleti hatóság, amelyhez a panaszt benyújtották, köteles tájékoztatni az ügyfelet a panasszal kapcsolatos eljárási fejleményekről és annak eredményéről, ideértve azt is, hogy a 78. cikk alapján az ügyfél jogosult bírósági jogorvoslattal élni."
        },
        {
          "EN": "Article 78",
          "HU": "78. cikk"
        },
        {
          "EN": "Right to an effective judicial remedy against a supervisory authority",
          "HU": "A felügyeleti hatósággal szembeni hatékony bírósági jogorvoslathoz való jog"
        },
        {
          "EN": "1. Without prejudice to any other administrative or non-judicial remedy, each natural or legal person shall have the right to an effective judicial remedy against a legally binding decision of a supervisory authority concerning them.",
          "HU": "(1) Az egyéb közigazgatási vagy nem bírósági útra tartozó jogorvoslatok sérelme nélkül, minden természetes és jogi személy jogosult a hatékony bírósági jogorvoslatra a felügyeleti hatóság rá vonatkozó, jogilag kötelező erejű döntésével szemben."
        },
        {
          "EN": "2. Without prejudice to any other administrative or non-judicial remedy, each data subject shall have the right to a an effective judicial remedy where the supervisory authority which is competent pursuant to Articles 55 and 56 does not handle a complaint or does not inform the data subject within three months on the progress or outcome of the complaint lodged pursuant to Article 77.",
          "HU": "(2) Az egyéb közigazgatási vagy nem bírósági útra tartozó jogorvoslatok sérelme nélkül, minden érintett jogosult a hatékony bírósági jogorvoslatra, ha az 55. vagy 56. cikk alapján illetékes felügyeleti hatóság nem foglalkozik a panasszal, vagy három hónapon belül nem tájékoztatja az érintettet a 77. cikk alapján benyújtott panasszal kapcsolatos eljárási fejleményekről vagy annak eredményéről."
        },
        {
          "EN": "3. Proceedings against a supervisory authority shall be brought before the courts of the Member State where the supervisory authority is established.",
          "HU": "(3) A felügyeleti hatósággal szembeni eljárást a felügyeleti hatóság székhelye szerinti tagállam bírósága előtt kell megindítani."
        },
        {
          "EN": "4. Where proceedings are brought against a decision of a supervisory authority which was preceded by an opinion or a decision of the Board in the consistency mechanism, the supervisory authority shall forward that opinion or decision to the court.",
          "HU": "(4) Ha a felügyeleti hatóság olyan döntése ellen indítanak eljárást, amellyel kapcsolatban az egységességi mechanizmus keretében a Testület előzőleg véleményt bocsátott ki vagy döntést hozott, a felügyeleti hatóság köteles ezt a véleményt vagy döntést a bíróságnak megküldeni."
        },
        {
          "EN": "Article 79",
          "HU": "79. cikk"
        },
        {
          "EN": "Right to an effective judicial remedy against a controller or processor",
          "HU": "Az adatkezelővel vagy az adatfeldolgozóval szembeni hatékony bírósági jogorvoslathoz való jog"
        },
        {
          "EN": "1. Without prejudice to any available administrative or non-judicial remedy, including the right to lodge a complaint with a supervisory authority pursuant to Article 77, each data subject shall have the right to an effective judicial remedy where he or she considers that his or her rights under this Regulation have been infringed as a result of the processing of his or her personal data in non-compliance with this Regulation.",
          "HU": "(1) A rendelkezésre álló közigazgatási vagy nem bírósági útra tartozó jogorvoslatok – köztük a felügyeleti hatóságnál történő panasztételhez való, 77. cikk szerinti jog – sérelme nélkül, minden érintett hatékony bírósági jogorvoslatra jogosult, ha megítélése szerint a személyes adatainak e rendeletnek nem megfelelő kezelése következtében megsértették az e rendelet szerinti jogait."
        },
        {
          "EN": "2. Proceedings against a controller or a processor shall be brought before the courts of the Member State where the controller or processor has an establishment.",
          "HU": "(2) Az adatkezelővel vagy az adatfeldolgozóval szembeni eljárást az adatkezelő vagy az adatfeldolgozó tevékenységi helye szerinti tagállam bírósága előtt kell megindítani."
        },
        {
          "EN": "Alternatively, such proceedings may be brought before the courts of the Member State where the data subject has his or her habitual residence, unless the controller or processor is a public authority of a Member State acting in the exercise of its public powers.",
          "HU": "Az ilyen eljárás megindítható az érintett szokásos tartózkodási helye szerinti tagállam bírósága előtt is, kivéve, ha az adatkezelő vagy az adatfeldolgozó valamely tagállamnak a közhatalmi jogkörében eljáró közhatalmi szerve."
        },
        {
          "EN": "Article 80",
          "HU": "80. cikk"
        },
        {
          "EN": "Representation of data subjects",
          "HU": "Az érintettek képviselete"
        },
        {
          "EN": "1. The data subject shall have the right to mandate a not-for-profit body, organisation or association which has been properly constituted in accordance with the law of a Member State, has statutory objectives which are in the public interest, and is active in the field of the protection of data subjects' rights and freedoms with regard to the protection of their personal data to lodge the complaint on his or her behalf, to exercise the rights referred to in Articles 77, 78 and 79 on his or her behalf, and to exercise the right to receive compensation referred to in Article 82 on his or her behalf where provided for by Member State law.",
          "HU": "(1) Az érintett jogosult arra, hogy panaszának a nevében történő benyújtásával, a 77., 78. és 79. cikkben említett jogoknak a nevében való gyakorlásával, valamint – ha a tagállam joga ezt lehetővé teszi – a 82. cikkben említett kártérítési jognak a nevében történő érvényesítésével olyan nonprofit jellegű szervet, szervezetet vagy egyesületet bízzon meg, amelyet valamely tagállam jogának megfelelően hoztak létre, és amelynek az alapszabályában rögzített céljai a közérdeket szolgálják, és amely az érintettek jogainak és szabadságainak a személyes adataik vonatkozásában biztosított védelme területén tevékenykedik."
        },
        {
          "EN": "2. Member States may provide that any body, organisation or association referred to in paragraph 1 of this Article, independently of a data subject's mandate, has the right to lodge, in that Member State, a complaint with the supervisory authority which is competent pursuant to Article 77 and to exercise the rights referred to in Articles 78 and 79 if it considers that the rights of a data subject under this Regulation have been infringed as a result of the processing.",
          "HU": "(2) A tagállamok rendelkezhetnek úgy, hogy az adott tagállamban az e cikk (1) bekezdésében említett bármely szerv, szervezet vagy egyesület – az érintettől kapott megbízástól függetlenül – jogosult legyen arra, hogy a 77. cikk alapján eljárni jogosult felügyeleti hatósághoz panaszt nyújtson be, valamint hogy gyakorolja a 78. és 79. cikkben említett jogokat, ha megítélése szerint az érintett személyes adatainak kezelése következtében megsértették az érintett e rendelet szerinti jogait."
        },
        {
          "EN": "Article 81",
          "HU": "81. cikk"
        },
        {
          "EN": "Suspension of proceedings",
          "HU": "Az eljárás felfüggesztése"
        },
        {
          "EN": "1. Where a competent court of a Member State has information on proceedings, concerning the same subject matter as regards processing by the same controller or processor, that are pending in a court in another Member State, it shall contact that court in the other Member State to confirm the existence of such proceedings.",
          "HU": "(1) Ha valamely tagállam illetékes bírósága információval rendelkezik arról, hogy ugyanazon adatkezelő vagy adatfeldolgozó adatkezelése tekintetében, ugyanabban a tárgyban egy másik tagállam bírósága előtt eljárás van folyamatban, köteles megkeresni e másik tagállam bíróságát, hogy megbizonyosodjon arról, valóban folyamatban van-e ilyen eljárás."
        },
        {
          "EN": "2. Where proceedings concerning the same subject matter as regards processing of the same controller or processor are pending in a court in another Member State, any competent court other than the court first seized may suspend its proceedings.",
          "HU": "(2) Ha ugyanazon adatkezelő vagy adatfeldolgozó adatkezelése tekintetében, ugyanabban a tárgyban egy másik tagállam bírósága előtt eljárás van folyamatban, valamennyi olyan illetékes bíróság, amely előtt az eljárás később indult meg, felfüggesztheti az előtte folyó eljárást."
        },
        {
          "EN": "3. Where those proceedings are pending at first instance, any court other than the court first seized may also, on the application of one of the parties, decline jurisdiction if the court first seized has jurisdiction over the actions in question and its law permits the consolidation thereof.",
          "HU": "(3) Ha ezen eljárások első fokon vannak folyamatban, valamennyi olyan bíróság, amely előtt az eljárás később indult meg, valamely fél kérelmére joghatóságának hiányát is megállapíthatja, ha az említett eljárásokra az a bíróság, amely előtt elsőként indult meg az eljárás, joghatósággal rendelkezik, és a rá vonatkozó jog az eljárások egyesítését lehetővé teszi."
        },
        {
          "EN": "Article 82",
          "HU": "82. cikk"
        },
        {
          "EN": "Right to compensation and liability",
          "HU": "A kártérítéshez való jog és a felelősség"
        },
        {
          "EN": "1. Any person who has suffered material or non-material damage as a result of an infringement of this Regulation shall have the right to receive compensation from the controller or processor for the damage suffered.",
          "HU": "(1) Minden olyan személy, aki e rendelet megsértésének eredményeként vagyoni vagy nem vagyoni kárt szenvedett, az elszenvedett kárért az adatkezelőtől vagy az adatfeldolgozótól kártérítésre jogosult."
        },
        {
          "EN": "2. Any controller involved in processing shall be liable for the damage caused by processing which infringes this Regulation.",
          "HU": "(2) Az adatkezelésben érintett valamennyi adatkezelő felelősséggel tartozik minden olyan kárért, amelyet az e rendeletet sértő adatkezelés okozott."
        },
        {
          "EN": "A processor shall be liable for the damage caused by processing only where it has not complied with obligations of this Regulation specifically directed to processors or where it has acted outside or contrary to lawful instructions of the controller.",
          "HU": "Az adatfeldolgozó csak abban az esetben tartozik felelősséggel az adatkezelés által okozott károkért, ha nem tartotta be az e rendeletben meghatározott, kifejezetten az adatfeldolgozókat terhelő kötelezettségeket, vagy ha az adatkezelő jogszerű utasításait figyelmen kívül hagyta vagy azokkal ellentétesen járt el."
        },
        {
          "EN": "3. A controller or processor shall be exempt from liability under paragraph 2 if it proves that it is not in any way responsible for the event giving rise to the damage.",
          "HU": "(3) Az adatkezelő, illetve az adatfeldolgozó mentesül az e cikk (2) bekezdése szerinti felelősség alól, ha bizonyítja, hogy a kárt előidéző eseményért őt semmilyen módon nem terheli felelősség."
        },
        {
          "EN": "4. Where more than one controller or processor, or both a controller and a processor, are involved in the same processing and where they are, under paragraphs 2 and 3, responsible for any damage caused by processing, each controller or processor shall be held liable for the entire damage in order to ensure effective compensation of the data subject.",
          "HU": "(4) Ha több adatkezelő vagy több adatfeldolgozó vagy mind az adatkezelő mind az adatfeldolgozó érintett ugyanabban az adatkezelésben, és – a (2) és (3) bekezdés alapján – felelősséggel tartozik az adatkezelés által okozott károkért, minden egyes adatkezelő vagy adatfeldolgozó az érintett tényleges kártérítésének biztosítása érdekében egyetemleges felelősséggel tartozik a teljes kárért."
        },
        {
          "EN": "5. Where a controller or processor has, in accordance with paragraph 4, paid full compensation for the damage suffered, that controller or processor shall be entitled to claim back from the other controllers or processors involved in the same processing that part of the compensation corresponding to their part of responsibility for the damage, in accordance with the conditions set out in paragraph 2.",
          "HU": "(5) Ha valamely adatkezelő vagy adatfeldolgozó a (4) bekezdéssel összhangban teljes kártérítést fizetett az elszenvedett kárért, jogosult arra, hogy az ugyanazon adatkezelésben érintett többi adatkezelőtől vagy adatfeldolgozótól visszaigényelje a kártérítésnek azt a részét, amely megfelel a (2) bekezdésben megállapított feltételek értelmében a károkozásért viselt felelősségük mértékének."
        },
        {
          "EN": "6. Court proceedings for exercising the right to receive compensation shall be brought before the courts competent under the law of the Member State referred to in Article 79(2).",
          "HU": "(6) A kártérítéshez való jog érvényesítését célzó bírósági eljárást az előtt a bíróság előtt kell megindítani, amely a 79. cikk (2) bekezdésében említett tagállam joga szerint illetékes."
        },
        {
          "EN": "Article 83",
          "HU": "83. cikk"
        },
        {
          "EN": "General conditions for imposing administrative fines",
          "HU": "A közigazgatási bírságok kiszabására vonatkozó általános feltételek"
        },
        {
          "EN": "1. Each supervisory authority shall ensure that the imposition of administrative fines pursuant to this Article in respect of infringements of this Regulation referred to in paragraphs 4, 5 and 6 shall in each individual case be effective, proportionate and dissuasive.",
          "HU": "(1) Valamennyi felügyeleti hatóság biztosítja, hogy e rendeletnek a (4), (5), (6) bekezdésben említett megsértése miatt az e cikk alapján kiszabott közigazgatási bírságok minden egyes esetben hatékonyak, arányosak és visszatartó erejűek legyenek."
        },
        {
          "EN": "2. Administrative fines shall, depending on the circumstances of each individual case, be imposed in addition to, or instead of, measures referred to in points (a) to (h) and (j) of Article 58(2).",
          "HU": "(2) A közigazgatási bírságokat az adott eset körülményeitől függően az 58. cikk (2) bekezdésének a)–h) és j) pontjában említett intézkedések mellett vagy helyett kell kiszabni."
        },
        {
          "EN": "When deciding whether to impose an administrative fine and deciding on the amount of the administrative fine in each individual case due regard shall be given to the following:",
          "HU": "Annak eldöntésekor, hogy szükség van-e közigazgatási bírság kiszabására, illetve a közigazgatási bírság összegének megállapításakor minden egyes esetben kellőképpen figyelembe kell venni a következőket:"
        },
        {
          "EN": "(a) the nature, gravity and duration of the infringement taking into account the nature scope or purpose of the processing concerned as well as the number of data subjects affected and the level of damage suffered by them;",
          "HU": "a) a jogsértés jellege, súlyossága és időtartama, figyelembe véve a szóban forgó adatkezelés jellegét, körét vagy célját, továbbá azon érintettek száma, akiket a jogsértés érint, valamint az általuk elszenvedett kár mértéke;"
        },
        {
          "EN": "(b) the intentional or negligent character of the infringement;",
          "HU": "b) a jogsértés szándékos vagy gondatlan jellege;"
        },
        {
          "EN": "(c) any action taken by the controller or processor to mitigate the damage suffered by data subjects;",
          "HU": "c) az adatkezelő vagy az adatfeldolgozó részéről az érintettek által elszenvedett kár enyhítése érdekében tett bármely intézkedés;"
        },
        {
          "EN": "(d) the degree of responsibility of the controller or processor taking into account technical and organisational measures implemented by them pursuant to Articles 25 and 32;",
          "HU": "d) az adatkezelő vagy az adatfeldolgozó felelősségének mértéke, figyelembe véve az általa a 25. és 32. cikk alapján foganatosított technikai és szervezési intézkedéseket;"
        },
        {
          "EN": "(e) any relevant previous infringements by the controller or processor;",
          "HU": "e) az adatkezelő vagy az adatfeldolgozó által korábban elkövetett releváns jogsértések;"
        },
        {
          "EN": "(f) the degree of cooperation with the supervisory authority, in order to remedy the infringement and mitigate the possible adverse effects of the infringement;",
          "HU": "f) a felügyeleti hatósággal a jogsértés orvoslása és a jogsértés esetlegesen negatív hatásainak enyhítése érdekében folytatott együttműködés mértéke;"
        },
        {
          "EN": "(g) the categories of personal data affected by the infringement;",
          "HU": "g) a jogsértés által érintett személyes adatok kategóriái;"
        },
        {
          "EN": "(h) the manner in which the infringement became known to the supervisory authority, in particular whether, and if so to what extent, the controller or processor notified the infringement;",
          "HU": "h) az, ahogyan a felügyeleti hatóság tudomást szerzett a jogsértésről, különös tekintettel arra, hogy az adatkezelő vagy az adatfeldolgozó jelentette-e be a jogsértést, és ha igen, milyen részletességgel;"
        },
        {
          "EN": "(i) where measures referred to in Article 58(2) have previously been ordered against the controller or processor concerned with regard to the same subject-matter, compliance with those measures;",
          "HU": "i) ha az érintett adatkezelővel vagy adatfeldolgozóval szemben korábban – ugyanabban a tárgyban – elrendelték az 58. cikk (2) bekezdésében említett intézkedések valamelyikét, a szóban forgó intézkedéseknek való megfelelés;"
        },
        {
          "EN": "(j) adherence to approved codes of conduct pursuant to Article 40 or approved certification mechanisms pursuant to Article 42; and",
          "HU": "j) az, hogy az adatkezelő vagy az adatfeldolgozó tartotta-e magát a 40. cikk szerinti jóváhagyott magatartási kódexekhez vagy a 42. cikk szerinti jóváhagyott tanúsítási mechanizmusokhoz; valamint"
        },
        {
          "EN": "(k) any other aggravating or mitigating factor applicable to the circumstances of the case, such as financial benefits gained, or losses avoided, directly or indirectly, from the infringement.",
          "HU": "k) az eset körülményei szempontjából releváns egyéb súlyosbító vagy enyhítő tényezők, például a jogsértés közvetlen vagy közvetett következményeként szerzett pénzügyi haszon vagy elkerült veszteség."
        },
        {
          "EN": "3. If a controller or processor intentionally or negligently, for the same or linked processing operations, infringes several provisions of this Regulation, the total amount of the administrative fine shall not exceed the amount specified for the gravest infringement.",
          "HU": "(3) Ha egy adatkezelő vagy adatfeldolgozó egyazon adatkezelési művelet vagy egymáshoz kapcsolódó adatkezelési műveletek tekintetében – szándékosan vagy gondatlanságból – e rendelet több rendelkezését is megsérti, a bírság teljes összege nem haladhatja meg a legsúlyosabb jogsértés esetén meghatározott összeget."
        },
        {
          "EN": "4. Infringements of the following provisions shall, in accordance with paragraph 2, be subject to administrative fines up to 10 000 000 EUR, or in the case of an undertaking, up to 2 % of the total worldwide annual turnover of the preceding financial year, whichever is higher:",
          "HU": "(4) Az alábbi rendelkezések megsértése – a (2) bekezdéssel összhangban – legfeljebb 10 000 000 EUR összegű közigazgatási bírsággal, illetve a vállalkozások esetében az előző pénzügyi év teljes éves világpiaci forgalmának legfeljebb 2 %-át kitevő összeggel sújtható; a kettő közül a magasabb összeget kell kiszabni:"
        },
        {
          "EN": "(a) the obligations of the controller and the processor pursuant to Articles 8, 11, 25 to 39 and 42 and 43;",
          "HU": "a) az adatkezelő és az adatfeldolgozó tekintetében a 8., a 11., a 25-39., a 42. és a 43. cikkben meghatározott kötelezettségek;"
        },
        {
          "EN": "(b) the obligations of the certification body pursuant to Articles 42 and 43;",
          "HU": "b) a tanúsító szervezet tekintetében a 42. és 43. cikkben meghatározott kötelezettségek;"
        },
        {
          "EN": "(c) the obligations of the monitoring body pursuant to Article 41(4).",
          "HU": "c) az ellenőrző szervezet tekintetében a 41. cikk (4) bekezdésében meghatározott kötelezettségek;"
        },
        {
          "EN": "5. Infringements of the following provisions shall, in accordance with paragraph 2, be subject to administrative fines up to 20 000 000 EUR, or in the case of an undertaking, up to 4 % of the total worldwide annual turnover of the preceding financial year, whichever is higher:",
          "HU": "(5) Az alábbi rendelkezések megsértését – a (2) bekezdéssel összhangban – legfeljebb 20 000 000 EUR összegű közigazgatási bírsággal, illetve a vállalkozások esetében az előző pénzügyi év teljes éves világpiaci forgalmának legfeljebb 4 %-át kitevő összeggel kell sújtani, azzal, hogy a kettő közül a magasabb összeget kell kiszabni:"
        },
        {
          "EN": "(a) the basic principles for processing, including conditions for consent, pursuant to Articles 5, 6, 7 and 9;",
          "HU": "a) az adatkezelés elvei – ideértve a hozzájárulás feltételeit – az 5., 6., 7. és 9. cikknek megfelelően;"
        },
        {
          "EN": "(b) the data subjects' rights pursuant to Articles 12 to 22;",
          "HU": "b) az érintettek jogai a 12–22. cikknek megfelelően;"
        },
        {
          "EN": "(c) the transfers of personal data to a recipient in a third country or an international organisation pursuant to Articles 44 to 49;",
          "HU": "c) személyes adatoknak harmadik országbeli címzett vagy nemzetközi szervezet részére történő továbbítása a 44–49. cikknek megfelelően;"
        },
        {
          "EN": "(d) any obligations pursuant to Member State law adopted under Chapter IX;",
          "HU": "d) a IX. fejezet alapján elfogadott tagállami jog szerinti kötelezettségek;"
        },
        {
          "EN": "(e) non-compliance with an order or a temporary or definitive limitation on processing or the suspension of data flows by the supervisory authority pursuant to Article 58(2) or failure to provide access in violation of Article 58(1).",
          "HU": "e) a felügyeleti hatóság 58. cikk (2) bekezdése szerinti utasításának, illetve az adatkezelés átmeneti vagy végleges korlátozására vagy az adatáramlás felfüggesztésére vonatkozó felszólításának be nem tartása vagy az 58. cikk (1) bekezdését megsértve a hozzáférés biztosításának elmulasztása."
        },
        {
          "EN": "6. Non-compliance with an order by the supervisory authority as referred to in Article 58(2) shall, in accordance with paragraph 2 of this Article, be subject to administrative fines up to 20 000 000 EUR, or in the case of an undertaking, up to 4 % of the total worldwide annual turnover of the preceding financial year, whichever is higher.",
          "HU": "(6) A felügyeleti hatóság 58. cikk (2) bekezdése szerinti utasításának be nem tartása – az e cikk (2) bekezdésével összhangban – legfeljebb 20 000 000 EUR összegű közigazgatási bírsággal, illetve a vállalkozások esetében az előző pénzügyi év teljes éves világpiaci forgalmának legfeljebb 4 %-át kitevő összeggel sújtható; a kettő közül a magasabb összeget kell kiszabni."
        },
        {
          "EN": "7. Without prejudice to the corrective powers of supervisory authorities pursuant to Article 58(2), each Member State may lay down the rules on whether and to what extent administrative fines may be imposed on public authorities and bodies established in that Member State.",
          "HU": "(7) A felügyeleti hatóságok 58. cikk (2) bekezdése szerinti korrekciós hatáskörének sérelme nélkül, minden egyes tagállam megállapíthatja az arra vonatkozó szabályokat, hogy az adott tagállami székhelyű közhatalmi vagy egyéb, közfeladatot ellátó szervvel szemben kiszabható-e közigazgatási bírság, és ha igen, milyen mértékű."
        },
        {
          "EN": "8. The exercise by the supervisory authority of its powers under this Article shall be subject to appropriate procedural safeguards in accordance with Union and Member State law, including effective judicial remedy and due process.",
          "HU": "(8) A felügyeleti hatóság e cikk szerinti hatásköreit megfelelő, az uniós és a tagállami joggal összhangban álló eljárási garanciák – ideértve a hatékony jogorvoslat lehetőségét és a tisztességes eljárást – biztosításával gyakorolja."
        },
        {
          "EN": "9. Where the legal system of the Member State does not provide for administrative fines, this Article may be applied in such a manner that the fine is initiated by the competent supervisory authority and imposed by competent national courts, while ensuring that those legal remedies are effective and have an equivalent effect to the administrative fines imposed by supervisory authorities.",
          "HU": "(9) Ha a tagállam jogrendszere nem rendelkezik közigazgatási bírságokról, e cikk oly módon alkalmazható, hogy a bírságot az illetékes felügyeleti hatóság kezdeményezésére az illetékes nemzeti bíróság rója ki e jogorvoslatok hatékonyságának és a felügyeleti hatóságok által kiszabott közigazgatási bírságokéval megegyező hatásának biztosítása mellett."
        },
        {
          "EN": "In any event, the fines imposed shall be effective, proportionate and dissuasive.",
          "HU": "A kiszabott bírságoknak minden esetben hatékonynak, arányosnak és visszatartó erejűnek kell lenniük."
        },
        {
          "EN": "Those Member States shall notify to the Commission the provisions of their laws which they adopt pursuant to this paragraph by 25 May 2018 and, without delay, any subsequent amendment law or amendment affecting them.",
          "HU": "E tagállamok az e bekezdésnek megfelelően elfogadott jogszabályokról 2018. május 25-ig, az ezt követően azokat módosító jogszabályokról, illetve az azokat érintő későbbi módosításokról pedig haladéktalanul értesítik a Bizottságot."
        },
        {
          "EN": "Article 84",
          "HU": "84. cikk"
        },
        {
          "EN": "Penalties",
          "HU": "Szankciók"
        },
        {
          "EN": "1. Member States shall lay down the rules on other penalties applicable to infringements of this Regulation in particular for infringements which are not subject to administrative fines pursuant to Article 83, and shall take all measures necessary to ensure that they are implemented.",
          "HU": "(1) A tagállamok megállapítják az e rendelet megsértése esetén alkalmazandó további szankciókra vonatkozó szabályokat, különösen azon jogsértések tekintetében, amelyek nem tartoznak a 83. cikkben meghatározott, közigazgatási bírságokkal sújtható jogsértések közé, és meghoznak minden szükséges intézkedést ezek végrehajtására."
        },
        {
          "EN": "Such penalties shall be effective, proportionate and dissuasive.",
          "HU": "E szankcióknak hatékonynak, arányosnak és visszatartó erejűnek kell lenniük."
        },
        {
          "EN": "2. Each Member State shall notify to the Commission the provisions of its law which it adopts pursuant to paragraph 1, by 25 May 2018 and, without delay, any subsequent amendment affecting them.",
          "HU": "(2) A tagállamok az (1) bekezdésnek megfelelően elfogadott jogszabályokról 2018. május 25-ig, az e szabályokat érintő minden későbbi módosításról pedig haladéktalanul tájékoztatják a Bizottságot. IX."
        },
        {
          "EN": "CHAPTER IX",
          "HU": "FEJEZET"
        },
        {
          "EN": "Provisions relating to specific processing situations",
          "HU": "Az adatkezelés különös eseteire vonatkozó rendelkezések"
        },
        {
          "EN": "Article 85",
          "HU": "85. cikk"
        },
        {
          "EN": "Processing and freedom of expression and information",
          "HU": "A személyes adatok kezelése és a véleménynyilvánítás szabadságához és a tájékozódáshoz való jog"
        },
        {
          "EN": "1. Member States shall by law reconcile the right to the protection of personal data pursuant to this Regulation with the right to freedom of expression and information, including processing for journalistic purposes and the purposes of academic, artistic or literary expression.",
          "HU": "(1) A tagállamok jogszabályban összeegyeztetik a személyes adatok e rendelet szerinti védelméhez való jogot a véleménynyilvánítás szabadságához és a tájékozódáshoz való joggal, ideértve a személyes adatok újságírási célból, illetve tudományos, művészi vagy irodalmi kifejezés céljából végzett kezelését is."
        },
        {
          "EN": "2. For processing carried out for journalistic purposes or the purpose of academic artistic or literary expression, Member States shall provide for exemptions or derogations from Chapter II (principles), Chapter III (rights of the data subject), Chapter IV (controller and processor), Chapter V (transfer of personal data to third countries or international organisations), Chapter VI (independent supervisory authorities), Chapter VII (cooperation and consistency) and Chapter IX (specific data processing situations) if they are necessary to reconcile the right to the protection of personal data with the freedom of expression and information.",
          "HU": "(2) A személyes adatok újságírási célból, illetve tudományos, művészi vagy irodalmi kifejezés céljából végzett kezelésére vonatkozóan a tagállamok kivételeket vagy eltéréseket határoznak meg a II. fejezet (elvek), a III. fejezet (az érintett jogai), a IV. fejezet (az adatkezelő és az adatfeldolgozó), az V. fejezet (a személyes adatok harmadik országokba vagy nemzetközi szervezetek részére történő továbbítása), a VI. fejezet (független felügyeleti hatóságok), a VII. fejezet (együttműködés és egységesség) és a IX. fejezet (az adatkezelés különös esetei) alól, ha e kivételek vagy eltérések szükségesek ahhoz, hogy a személyes adatok védelméhez való jogot össze lehessen egyeztetni a véleménynyilvánítás szabadságához és a tájékozódáshoz való joggal."
        },
        {
          "EN": "3. Each Member State shall notify to the Commission the provisions of its law which it has adopted pursuant to paragraph 2 and, without delay, any subsequent amendment law or amendment affecting them.",
          "HU": "(3) A tagállamok értesítik a Bizottságot azon jogi rendelkezésekről, amelyeket a (2) bekezdés alapján elfogadtak, továbbá haladéktalanul értesítik a Bizottságot az említett jogi rendelkezéseket érintő későbbi módosító jogszabályokról, illetve módosításokról."
        },
        {
          "EN": "Article 86",
          "HU": "86. cikk"
        },
        {
          "EN": "Processing and public access to official documents",
          "HU": "A személyes adatok kezelése és a hivatalos dokumentumokhoz való nyilvános hozzáférés"
        },
        {
          "EN": "Personal data in official documents held by a public authority or a public body or a private body for the performance of a task carried out in the public interest may be disclosed by the authority or body in accordance with Union or Member State law to which the public authority or body is subject in order to reconcile public access to official documents with the right to the protection of personal data pursuant to this Regulation.",
          "HU": "A közérdekű feladat teljesítése céljából közhatalmi szervek, vagy egyéb, közfeladatot ellátó szervek, illetve magánfél szervezetek birtokában lévő hivatalos dokumentumokban szereplő személyes adatokat az adott szerv vagy szervezet az uniós joggal vagy a szervre vagy szervezetre alkalmazandó tagállami joggal összhangban nyilvánosságra hozhatja annak érdekében, hogy a hivatalos dokumentumokhoz való nyilvános hozzáférést összeegyeztesse a személyes adatok e rendelet szerinti védelméhez való joggal."
        },
        {
          "EN": "Article 87",
          "HU": "87. cikk"
        },
        {
          "EN": "Processing of the national identification number",
          "HU": "A nemzeti azonosító számok kezelése"
        },
        {
          "EN": "Member States may further determine the specific conditions for the processing of a national identification number or any other identifier of general application.",
          "HU": "A tagállamok részletesebben meghatározhatják a nemzeti azonosító számok vagy egyéb általános jellegű azonosító jelek kezelésének konkrét feltételeit."
        },
        {
          "EN": "In that case the national identification number or any other identifier of general application shall be used only under appropriate safeguards for the rights and freedoms of the data subject pursuant to this Regulation.",
          "HU": "Ebben az esetben a nemzeti azonosító számok, illetve az egyéb általános jellegű azonosító jelek felhasználására kizárólag az érintett jogainak és szabadságainak e rendelet szerinti megfelelő garanciái mellett kerülhet sor."
        },
        {
          "EN": "Article 88",
          "HU": "88. cikk"
        },
        {
          "EN": "Processing in the context of employment",
          "HU": "Adatkezelés a foglalkoztatással összefüggően"
        },
        {
          "EN": "1. Member States may, by law or by collective agreements, provide for more specific rules to ensure the protection of the rights and freedoms in respect of the processing of employees' personal data in the employment context, in particular for the purposes of the recruitment, the performance of the contract of employment, including discharge of obligations laid down by law or by collective agreements, management, planning and organisation of work, equality and diversity in the workplace, health and safety at work, protection of employer's or customer's property and for the purposes of the exercise and enjoyment, on an individual or collective basis, of rights and benefits related to employment, and for the purpose of the termination of the employment relationship.",
          "HU": "(1) A tagállamok jogszabályban vagy kollektív szerződésekben pontosabban meghatározott szabályokat állapíthatnak meg annak érdekében, hogy biztosítsák a jogok és szabadságok védelmét a munkavállalók személyes adatainak a foglalkoztatással összefüggő kezelése tekintetében, különösen a munkaerő-felvétel, a munkaszerződés teljesítése céljából, ideértve a jogszabályban vagy kollektív szerződésben meghatározott kötelezettségek teljesítését, a munka irányítását, tervezését és szervezését, a munkahelyi egyenlőséget és sokféleséget, a munkahelyi egészségvédelmet és biztonságot, a munkáltató vagy a fogyasztó tulajdonának védelmét is, továbbá a foglalkoztatáshoz kapcsolódó jogok és juttatások egyéni vagy kollektív gyakorlása és élvezete céljából, valamint a munkaviszony megszüntetése céljából."
        },
        {
          "EN": "2. Those rules shall include suitable and specific measures to safeguard the data subject's human dignity, legitimate interests and fundamental rights, with particular regard to the transparency of processing, the transfer of personal data within a group of undertakings, or a group of enterprises engaged in a joint economic activity and monitoring systems at the work place.",
          "HU": "(2) E szabályok olyan megfelelő és egyedi intézkedéseket foglalnak magukban, amelyek alkalmasak az érintett emberi méltóságának, jogos érdekeinek és alapvető jogainak megóvására, különösen az adatkezelés átláthatósága, vállalkozáscsoporton vagy a közös gazdasági tevékenységet folytató vállalkozások ugyanazon csoportján belüli adattovábbítás, valamint a munkahelyi ellenőrzési rendszerek tekintetében."
        },
        {
          "EN": "3. Each Member State shall notify to the Commission those provisions of its law which it adopts pursuant to paragraph 1, by 25 May 2018 and, without delay, any subsequent amendment affecting them.",
          "HU": "(3) Minden tagállam legkésőbb 2018. május 25-ig értesíti a Bizottságot azon jogi rendelkezésekről, amelyeket az (1) bekezdés alapján elfogad, továbbá haladéktalanul értesíti a Bizottságot az említett jogi rendelkezéseket érintő későbbi módosításokról."
        },
        {
          "EN": "Article 89",
          "HU": "89. cikk"
        },
        {
          "EN": "Safeguards and derogations relating to processing for archiving purposes in the public interest, scientific or historical research purposes or statistical purposes",
          "HU": "A közérdekű archiválás céljából, tudományos és történelmi kutatási célból vagy statisztikai célból folytatott adatkezelésre vonatkozó garanciák és eltérések"
        },
        {
          "EN": "1. Processing for archiving purposes in the public interest, scientific or historical research purposes or statistical purposes, shall be subject to appropriate safeguards, in accordance with this Regulation, for the rights and freedoms of the data subject.",
          "HU": "(1) A személyes adatok közérdekű archiválás céljából, tudományos és történelmi kutatási célból vagy statisztikai célból folytatott kezelését e rendelettel összhangban az érintett jogait és szabadságait védő megfelelő garanciák mellett kell végezni."
        },
        {
          "EN": "Those safeguards shall ensure that technical and organisational measures are in place in particular in order to ensure respect for the principle of data minimisation.",
          "HU": "E garanciáknak biztosítaniuk kell, hogy olyan technikai és szervezési intézkedések legyenek érvényben, melyek biztosítják különösen az adattakarékosság elvének betartását."
        },
        {
          "EN": "Those measures may include pseudonymisation provided that those purposes can be fulfilled in that manner.",
          "HU": "Ezen intézkedések közé tartozhat az álnevesítés, amennyiben az említett célok ily módon megvalósíthatók."
        },
        {
          "EN": "Where those purposes can be fulfilled by further processing which does not permit or no longer permits the identification of data subjects, those purposes shall be fulfilled in that manner.",
          "HU": "Amennyiben e célok megvalósíthatók az adatok oly módon történő további kezelése révén, amely nem vagy már nem teszi lehetővé az érintettek azonosítását, a célokat ilyen módon kell megvalósítani."
        },
        {
          "EN": "2. Where personal data are processed for scientific or historical research purposes or statistical purposes, Union or Member State law may provide for derogations from the rights referred to in Articles 15, 16, 18 and 21 subject to the conditions and safeguards referred to in paragraph 1 of this Article in so far as such rights are likely to render impossible or seriously impair the achievement of the specific purposes, and such derogations are necessary for the fulfilment of those purposes.",
          "HU": "(2) A személyes adatok közérdekű archiválás céljából, tudományos és történelmi kutatási célból vagy statisztikai célból folytatott kezelése vonatkozásában az uniós vagy a tagállami jog – az e cikk (1) bekezdésében említett feltételekre és garanciákra is figyelemmel – eltérést állapíthat meg a 15., 16., 18. és 21. cikkben említett jogokat illetően, ha e jogok valószínűsíthetően lehetetlenné teszik vagy súlyosan hátráltatják az adott célok elérését, és azok megvalósításához szükség van ilyen eltérésre."
        },
        {
          "EN": "3. Where personal data are processed for archiving purposes in the public interest, Union or Member State law may provide for derogations from the rights referred to in Articles 15, 16, 18, 19, 20 and 21 subject to the conditions and safeguards referred to in paragraph 1 of this Article in so far as such rights are likely to render impossible or seriously impair the achievement of the specific purposes, and such derogations are necessary for the fulfilment of those purposes.",
          "HU": "(3) A személyes adatok közérdekű archiválás céljából való kezelése vonatkozásában az uniós vagy a tagállami jog – az e cikk (1) bekezdésében említett feltételekre és garanciákra is figyelemmel – eltérést állapíthat meg a 15., 16., 18., 19., 20. és 21. cikkben említett jogokat illetően, ha e jogok valószínűsíthetően lehetetlenné teszik vagy súlyosan hátráltatják az adott célok elérését, és azok megvalósításához szükség van ilyen eltérésre."
        },
        {
          "EN": "4. Where processing referred to in paragraphs 2 and 3 serves at the same time another purpose, the derogations shall apply only to processing for the purposes referred to in those paragraphs.",
          "HU": "(4) Ha a (2), illetve (3) bekezdésben említett adatkezelés egyidejűleg más célokat is szolgál, az eltérést kizárólag az érintett bekezdésben említett adatkezelési célokra kell alkalmazni."
        },
        {
          "EN": "Article 90",
          "HU": "90. cikk"
        },
        {
          "EN": "Obligations of secrecy",
          "HU": "Titoktartási kötelezettségek"
        },
        {
          "EN": "1. Member States may adopt specific rules to set out the powers of the supervisory authorities laid down in points (e) and (f) of Article 58(1) in relation to controllers or processors that are subject, under Union or Member State law or rules established by national competent bodies, to an obligation of professional secrecy or other equivalent obligations of secrecy where this is necessary and proportionate to reconcile the right of the protection of personal data with the obligation of secrecy.",
          "HU": "(1) A tagállamok egyedi szabályokat fogadhatnak el annak érdekében, hogy meghatározzák a felügyeleti hatóságoknak az 58. cikk (1) bekezdésének e) és f) pontjában foglalt hatáskörét olyan adatkezelőkre vagy adatfeldolgozókra vonatkozóan, amelyek az uniós vagy a tagállami jog alapján, vagy az illetékes nemzeti szervek által alkotott szabályok alapján szakmai titoktartási kötelezettség vagy azzal egyenértékű egyéb titoktartási kötelezettség hatálya alá tartoznak, ha ez szükséges és arányos a személyes adatok védelméhez való jog és a titoktartási kötelezettség összeegyeztetése érdekében."
        },
        {
          "EN": "Those rules shall apply only with regard to personal data which the controller or processor has received as a result of or has obtained in an activity covered by that obligation of secrecy.",
          "HU": "E szabályokat csak azokra a személyes adatokra kell alkalmazni, amelyeket az adatkezelő vagy az adatfeldolgozó e titoktartási kötelezettség hatálya alá tartozó tevékenység során kapott vagy szerzett."
        },
        {
          "EN": "2. Each Member State shall notify to the Commission the rules adopted pursuant to paragraph 1, by 25 May 2018 and, without delay, any subsequent amendment affecting them.",
          "HU": "(2) Minden tagállam legkésőbb 2018. május 25-ig értesíti a Bizottságot az (1) bekezdés alapján elfogadott szabályokról, továbbá haladéktalanul értesíti a Bizottságot az említett szabályokat érintő későbbi módosításokról."
        },
        {
          "EN": "Article 91",
          "HU": "91. cikk"
        },
        {
          "EN": "Existing data protection rules of churches and religious associations",
          "HU": "Egyházak és vallási szervezetek létező adatvédelmi szabályai"
        },
        {
          "EN": "1. Where in a Member State, churches and religious associations or communities apply, at the time of entry into force of this Regulation, comprehensive rules relating to the protection of natural persons with regard to processing, such rules may continue to apply, provided that they are brought into line with this Regulation.",
          "HU": "(1) Ha egy tagállamban egyház, illetve vallási szervezet vagy közösség e rendelet hatálybalépésének időpontjában átfogó szabályokat alkalmaz a természetes személyek személyes adatok kezelése tekintetében történő védelme vonatkozásában, e szabályok tovább alkalmazhatók, ha összhangba hozzák őket e rendelettel."
        },
        {
          "EN": "2. Churches and religious associations which apply comprehensive rules in accordance with paragraph 1 of this Article shall be subject to the supervision of an independent supervisory authority, which may be specific, provided that it fulfils the conditions laid down in Chapter VI of this Regulation.",
          "HU": "(2) Az e cikk (1) bekezdésének megfelelően átfogó szabályokat alkalmazó egyház vagy vallási szervezet egy független felügyeleti hatóság ellenőrzése alá tartozik, amely lehet egy külön, e céljra egyedileg kijelölt hatóság is, feltéve hogy megfelel az e rendelet VI. fejezetében megállapított feltételeknek."
        },
        {
          "EN": "CHAPTER X",
          "HU": "X. FEJEZET"
        },
        {
          "EN": "Delegated acts and implementing acts",
          "HU": "Felhatalmazáson alapuló jogi aktusok és végrehajtási jogi aktusok"
        },
        {
          "EN": "Article 92",
          "HU": "92. cikk"
        },
        {
          "EN": "Exercise of the delegation",
          "HU": "A felhatalmazás gyakorlása"
        },
        {
          "EN": "1. The power to adopt delegated acts is conferred on the Commission subject to the conditions laid down in this Article.",
          "HU": "(1) A felhatalmazáson alapuló jogi aktusok elfogadására vonatkozóan a Bizottság részére adott felhatalmazás gyakorlásának feltételeit ez a cikk határozza meg."
        },
        {
          "EN": "2. The delegation of power referred to in Article 12(8) and Article 43(8) shall be conferred on the Commission for an indeterminate period of time from 24 May 2016.",
          "HU": "(2) A Bizottságnak a 12. cikk (8) bekezdésében és a 43. cikk (8) bekezdésében említett, felhatalmazáson alapuló jogi aktus elfogadására vonatkozó felhatalmazása határozatlan időre 2016. május 24-től kezdődő hatállyal."
        },
        {
          "EN": "3. The delegation of power referred to in Article 12(8) and Article 43(8) may be revoked at any time by the European Parliament or by the Council.",
          "HU": "(3) Az Európai Parlament vagy a Tanács bármikor visszavonhatja a 12. cikk (8) bekezdésében és a 43. cikk (8) bekezdésében említett felhatalmazást."
        },
        {
          "EN": "A decision of revocation shall put an end to the delegation of power specified in that decision.",
          "HU": "A visszavonásról szóló határozat megszünteti az abban meghatározott felhatalmazást."
        },
        {
          "EN": "It shall take effect the day following that of its publication in the Official Journal of the European Union or at a later date specified therein.",
          "HU": "A határozat az Európai Unió Hivatalos Lapjában való kihirdetését követő napon, vagy a benne megjelölt későbbi időpontban lép hatályba."
        },
        {
          "EN": "It shall not affect the validity of any delegated acts already in force.",
          "HU": "A határozat nem érinti a már hatályban lévő, felhatalmazáson alapuló jogi aktusok érvényességét."
        },
        {
          "EN": "4. As soon as it adopts a delegated act, the Commission shall notify it simultaneously to the European Parliament and to the Council.",
          "HU": "(4) A Bizottság a felhatalmazáson alapuló jogi aktus elfogadását követően haladéktalanul és egyidejűleg értesíti arról az Európai Parlamentet és a Tanácsot."
        },
        {
          "EN": "5. A delegated act adopted pursuant to Article 12(8) and Article 43(8) shall enter into force only if no objection has been expressed by either the European Parliament or the Council within a period of three months of notification of that act to the European Parliament and the Council or if, before the expiry of that period, the European Parliament and the Council have both informed the Commission that they will not object.",
          "HU": "(5) A 12. cikk (8) bekezdése és a 43. cikk (8) bekezdése értelmében elfogadott, felhatalmazáson alapuló jogi aktus csak akkor lép hatályba, ha az Európai Parlamentnek és a Tanácsnak a jogi aktusról való értesítését követő három hónapon belül sem az Európai Parlament, sem a Tanács nem emelt ellene kifogást, illetve ha az említett időtartam lejártát megelőzően mind az Európai Parlament, mind a Tanács arról tájékoztatta a Bizottságot, hogy nem fog kifogást emelni."
        },
        {
          "EN": "That period shall be extended by three months at the initiative of the European Parliament or of the Council.",
          "HU": "Az Európai Parlament vagy a Tanács kezdeményezésére ez az időtartam három hónappal meghosszabbodik."
        },
        {
          "EN": "Article 93",
          "HU": "93. cikk"
        },
        {
          "EN": "Committee procedure",
          "HU": "Bizottsági eljárásrend"
        },
        {
          "EN": "1. The Commission shall be assisted by a committee.",
          "HU": "(1) A Bizottság munkáját egy bizottság segíti."
        },
        {
          "EN": "That committee shall be a committee within the meaning of Regulation (EU) No 182/2011.",
          "HU": "Ez a bizottság a 182/2011/EU rendelet szerinti bizottság."
        },
        {
          "EN": "2. Where reference is made to this paragraph, Article 5 of Regulation (EU) No 182/2011 shall apply.",
          "HU": "(2) Az e bekezdésre történő hivatkozáskor a 182/2011/EU rendelet 5. cikkét kell alkalmazni."
        },
        {
          "EN": "3. Where reference is made to this paragraph, Article 8 of Regulation (EU) No 182/2011, in conjunction with Article 5 thereof, shall apply.",
          "HU": "(3) Az e bekezdésre történő hivatkozáskor a 182/2011/EU rendeletnek az 5. cikkével együtt értelmezett 8. cikkét kell alkalmazni. XI."
        },
        {
          "EN": "CHAPTER XI",
          "HU": "FEJEZET"
        },
        {
          "EN": "Final provisions",
          "HU": "Záró rendelkezések"
        },
        {
          "EN": "Article 94",
          "HU": "94. cikk"
        },
        {
          "EN": "Repeal of Directive 95/46/EC",
          "HU": "A 95/46/EK irányelv hatályon kívül helyezése"
        },
        {
          "EN": "1. Directive 95/46/EC is repealed with effect from 25 May 2018.",
          "HU": "(1) A 95/46/EK irányelv 2018. május 25-i hatállyal hatályát veszti."
        },
        {
          "EN": "2. References to the repealed Directive shall be construed as references to this Regulation.",
          "HU": "(2) A hatályon kívül helyezett irányelvre történő hivatkozásokat az e rendeletre történő hivatkozásnak kell tekinteni."
        },
        {
          "EN": "References to the Working Party on the Protection of Individuals with regard to the Processing of Personal Data established by Article 29 of Directive 95/46/EC shall be construed as references to the European Data Protection Board established by this Regulation.",
          "HU": "A 95/46/EK irányelv 29. cikke által létrehozott, a természetes személyeknek a személyes adatok feldolgozása tekintetében való védelmével foglalkozó munkacsoportra történő hivatkozást az e rendelet által létrehozott Európai Adatvédelmi Testületre történő hivatkozásnak kell tekinteni."
        },
        {
          "EN": "Article 95",
          "HU": "95. cikk"
        },
        {
          "EN": "Relationship with Directive 2002/58/EC",
          "HU": "Kapcsolat a 2002/58/EK irányelvvel"
        },
        {
          "EN": "This Regulation shall not impose additional obligations on natural or legal persons in relation to processing in connection with the provision of publicly available electronic communications services in public communication networks in the Union in relation to matters for which they are subject to specific obligations with the same objective set out in Directive 2002/58/EC.",
          "HU": "E rendelet nem ró további kötelezettségeket a természetes vagy jogi személyekre az Unión belüli nyilvános hírközlési hálózatokon keresztül történő nyilvánosan elérhető hírközlési szolgáltatással összefüggésben kezelt adatok tekintetében azon kérdésekkel kapcsolatban, amelyek vonatkozásában ők a 2002/58/EK irányelvben megállapított, azonos célkitűzésekkel bíró különös kötelezettségek hatálya alá tartoznak."
        },
        {
          "EN": "Article 96",
          "HU": "96. cikk"
        },
        {
          "EN": "Relationship with previously concluded Agreements",
          "HU": "Kapcsolat korábban kötött megállapodásokkal"
        },
        {
          "EN": "International agreements involving the transfer of personal data to third countries or international organisations which were concluded by Member States prior to 24 May 2016, and which comply with Union law as applicable prior to that date, shall remain in force until amended, replaced or revoked.",
          "HU": "A tagállamok által az 2016. május 24. előtt kötött azon nemzetközi megállapodások, melyek személyes adatok harmadik országok vagy nemzetközi szervezetek részére történő továbbításáról rendelkeznek, és amelyek megfelelnek az említett dátum előtt alkalmazandó uniós jognak, módosításukig, felváltásukig vagy visszavonásukig változatlanul hatályban maradnak."
        },
        {
          "EN": "Article 97",
          "HU": "97. cikk"
        },
        {
          "EN": "Commission reports",
          "HU": "A Bizottság jelentései"
        },
        {
          "EN": "1. By 25 May 2020 and every four years thereafter, the Commission shall submit a report on the evaluation and review of this Regulation to the European Parliament and to the Council.",
          "HU": "(1) A Bizottság 2020. május 25-ig és minden azt követő negyedik évben jelentést terjeszt az Európai Parlament és a Tanács elé e rendelet értékeléséről és felülvizsgálatáról."
        },
        {
          "EN": "The reports shall be made public. 2. In the context of the evaluations and reviews referred to in paragraph 1, the Commission shall examine, in particular, the application and functioning of:",
          "HU": "(2) Az (1) bekezdésben említett értékelések és felülvizsgálat keretében a Bizottság különösen a következő rendelkezések alkalmazását és hatékonyságát vizsgálja:"
        },
        {
          "EN": "(a) Chapter V on the transfer of personal data to third countries or international organisations with particular regard to decisions adopted pursuant to Article 45(3) of this Regulation and decisions adopted on the basis of Article 25(6) of Directive 95/46/EC;",
          "HU": "a) a személyes adatok harmadik országokba vagy nemzetközi szervezetek részére történő továbbításáról szóló V. fejezet, különös tekintettel az e rendelet 43. cikkének (3) bekezdése szerint, valamint a 95/46/EK irányelv 25. cikkének (6) bekezdése alapján elfogadott határozatokra;"
        },
        {
          "EN": "(b) Chapter VII on cooperation and consistency.",
          "HU": "b) az együttműködésről és az egységességről szóló VII. fejezet."
        },
        {
          "EN": "3. For the purpose of paragraph 1, the Commission may request information from Member States and supervisory authorities.",
          "HU": "(3) A Bizottság az (1) bekezdésben említett célokból információkat kérhet a tagállamoktól és a felügyeleti hatóságoktól."
        },
        {
          "EN": "4. In carrying out the evaluations and reviews referred to in paragraphs 1 and 2, the Commission shall take into account the positions and findings of the European Parliament, of the Council, and of other relevant bodies or sources.",
          "HU": "(4) A Bizottság az (1) és (2) bekezdésben említett értékelések és felülvizsgálatok során figyelembe veszi az Európai Parlament, a Tanács és az egyéb érintett szervek vagy források álláspontját és megállapításait."
        },
        {
          "EN": "5. The Commission shall, if necessary, submit appropriate proposals to amend this Regulation, in particular taking into account of developments in information technology and in the light of the state of progress in the information society.",
          "HU": "(5) A Bizottság szükség esetén megfelelő javaslatokat nyújt be e rendelet módosítására, figyelembe véve különösen az információs technológia fejlődését és az információs társadalom fejlődési szintjét."
        },
        {
          "EN": "Article 98",
          "HU": "98. cikk"
        },
        {
          "EN": "Review of other Union legal acts on data protection",
          "HU": "Az egyéb uniós adatvédelmi aktusok felülvizsgálata"
        },
        {
          "EN": "The Commission shall, if appropriate, submit legislative proposals with a view to amending other Union legal acts on the protection of personal data, in order to ensure uniform and consistent protection of natural persons with regard to processing.",
          "HU": "A Bizottság adott esetben jogalkotási javaslatokat nyújt be a személyes adatok védelméről szóló egyéb uniós jogi aktusok módosítására, a természetes személyek személyes adataik kezelése tekintetében való védelmének egységessége és következetessége érdekében."
        },
        {
          "EN": "This shall in particular concern the rules relating to the protection of natural persons with regard to processing by Union institutions, bodies, offices and agencies and on the free movement of such data.",
          "HU": "Ez különösen a természetes személyeknek a személyes adataik uniós intézmények, szervek, hivatalok és ügynökségek általi kezelése tekintetében való védelmére és a személyes adatok szabad áramlására vonatkozó szabályokat érinti."
        },
        {
          "EN": "Article 99",
          "HU": "99. cikk"
        },
        {
          "EN": "Entry into force and application",
          "HU": "Hatálybalépés és alkalmazás"
        },
        {
          "EN": "1. This Regulation shall enter into force on the twentieth day following that of its publication in the Official Journal of the European Union.",
          "HU": "(1) Ez a rendelet az Európai Unió Hivatalos Lapjában való kihirdetését követő huszadik napon lép hatályba."
        },
        {
          "EN": "2. It shall apply from 25 May 2018.",
          "HU": "(2) Ezt a rendeletet 2018. május 25-től kell alkalmazni."
        },
        {
          "EN": "This Regulation shall be binding in its entirety and directly applicable in all Member States.",
          "HU": "Ez a rendelet teljes egészében kötelező és közvetlenül alkalmazandó valamennyi tagállamban."
        },
        {
          "EN": "Done at Brussels, 27 April 2016.",
          "HU": "Kelt Brüsszelben, 2016. április 27-én."
        },
        {
          "EN": "For the European Parliament",
          "HU": "az Európai Parlament részéről"
        },
        {
          "EN": "The President",
          "HU": "az elnök"
        },
        {
          "EN": "M. SCHULZ",
          "HU": "M. SCHULZ"
        },
        {
          "EN": "For the Council",
          "HU": "a Tanács részéről"
        },
        {
          "EN": "The President",
          "HU": "az elnök"
        },
        {
          "EN": "J.A. HENNIS-PLASSCHAERT",
          "HU": "J.A. HENNIS-PLASSCHAERT"
        },
        {
          "EN": "___________________________________________________________________________",
          "HU": "___________________________________________________________________________"
        },
        {
          "EN": "[22](1) [23]OJ C 229, 31.7.2012, p.",
          "HU": "[22](1) [23]HL C 229., 2012.7.31., 90. o."
        },
        {
          "EN": "90. [24](2) [25]OJ C 391, 18.12.2012, p.",
          "HU": "[24](2) [25]HL C 391., 2012.12.18., 127. o."
        },
        {
          "EN": "127. [26](3) Position of the European Parliament of 12 March 2014 (not yet published in the Official Journal) and position of the Council at first reading of 8 April 2016 (not yet published in the Official Journal).",
          "HU": "[26](3) Az Európai Parlament 2014. március 12-i álláspontja (a Hivatalos Lapban még nem tették közzé) és a Tanács 2016. április 8-i álláspontja első olvasatban."
        },
        {
          "EN": "Position of the European Parliament of 14 April 2016.",
          "HU": "Az Európai Parlament 2016. április 14-i álláspontja."
        },
        {
          "EN": "[27](4) Directive 95/46/EC of the European Parliament and of the Council of 24 October 1995 on the protection of individuals with regard to the processing of personal data and on the free movement of such data ([28]OJ L 281, 23.11.1995, p.",
          "HU": "[27](4) Az Európai Parlament és a Tanács 95/46/EK irányelve (1995. október 24.) a személyes adatok feldolgozása vonatkozásában az egyének védelméről és az ilyen adatok szabad áramlásáról ([28]HL L 281., 1995.11.23., 31. o.)."
        },
        {
          "EN": "31). [29](5) Commission Recommendation of 6 May 2003 concerning the definition of micro, small and medium-sized enterprises (C(2003) 1422) ([30]OJ L 124, 20.5.2003, p. 36).",
          "HU": "[29](5) A Bizottság 2003/361/EK ajánlása (2003. május 6.) a mikro-, kis- és középvállalkozások fogalma kapcsán a kis- és közepes méretű vállalkozások meghatározásáról (C(2003) 1422) ([30]HL L 124., 2003.5.20., 36. o.)."
        },
        {
          "EN": "[31](6) Regulation (EC) No 45/2001 of the European Parliament and of the Council of 18 December 2000 on the protection of individuals with regard to the processing of personal data by the Community institutions and bodies and on the free movement of such data ([32]OJ L 8, 12.1.2001, p. 1).",
          "HU": "[31](6) Az Európai Parlament és a Tanács 45/2001/EK rendelete (2000. december 18.) a személyes adatok közösségi intézmények és szervek által történő feldolgozása tekintetében az egyének védelméről, valamint az ilyen adatok szabad áramlásáról ([32]HL L 8., 2001.1.12., 1. o.)."
        },
        {
          "EN": "[33](7) Directive (EU) 2016/680 of the European Parliament and of the Council of 27 April 2016 on the protection of natural persons with regard to the processing of personal data by competent authorities for the purposes of prevention, investigation, detection or prosecution of criminal offences or the execution of criminal penalties, and the free movement of such data and repealing Council Framework Decision 2008/977/JHA (see page 89 of this Official Journal).",
          "HU": "[33](7) Az Európai Parlament és a Tanács (EU) 2016/680 irányelve (2016. április 27.) személyes adatoknak az illetékes hatóságok által a bűncselekmények megelőzése, nyomozása, felderítése, üldözése vagy büntetőjogi szankciók végrehajtása céljából végzett kezelése tekintetében a természetes személyek védelméről és az ilyen adatok szabad áramlásáról, valamint a 2008/977/IBtanácsi kerethatározat hatályon kívül helyezéséről (lásd e Hivatalos lap 89. oldalát)."
        },
        {
          "EN": "[34](8) Directive 2000/31/EC of the European Parliament and of the Council of 8 June 2000 on certain legal aspects of information society services, in particular electronic commerce, in the Internal Market (‘Directive on electronic commerce’) ([35]OJ L 178, 17.7.2000, p.",
          "HU": "[34](8) Az Európai Parlament és a Tanács 2000/31/EK irányelve (2000. június 8.) a belső piacon az információs társadalommal összefüggő szolgáltatások, különösen az elektronikus kereskedelem, egyes jogi vonatkozásairól (Elektronikus kereskedelemről szóló irányelv) ([35]HL L 178., 2000.7.17., 1. o.)."
        },
        {
          "EN": "1). [36](9) Directive 2011/24/EU of the European Parliament and of the Council of 9 March 2011 on the application of patients' rights in cross-border healthcare ([37]OJ L 88, 4.4.2011, p.",
          "HU": "[36](9) Az Európai Parlament és a Tanács 2011/24/EU irányelve (2011. március 9.) a határon átnyúló egészségügyi ellátásra vonatkozó betegjogok érvényesítéséről ([37]HL L 88., 2011.4.4., 45. o.)."
        },
        {
          "EN": "45). [38](10) Council Directive 93/13/EEC of 5 April 1993 on unfair terms in consumer contracts ([39]OJ L 95, 21.4.1993, p. 29).",
          "HU": "[38](10) A Tanács 93/13/EGK irányelve (1993. április 5.) a fogyasztókkal kötött szerződésekben alkalmazott tisztességtelen feltételekről ([39]HL L 95., 1993.4.21., 29. o.)."
        },
        {
          "EN": "[40](11) Regulation (EC) No 1338/2008 of the European Parliament and of the Council of 16 December 2008 on Community statistics on public health and health and safety at work ([41]OJ L 354, 31.12.2008, p. 70).",
          "HU": "[40](11) Az Európai Parlament és a Tanács 1338/2008/EK rendelete ( 2008. december 16.) a népegészségre és a munkahelyi egészségre és biztonságra vonatkozó közösségi statisztikáról ([41]HL L 354., 2008.12.31., 70. o.)."
        },
        {
          "EN": "[42](12) Regulation (EU) No 182/2011 of the European Parliament and of the Council of 16 February 2011 laying down the rules and general principles concerning mechanisms for control by Member States of the Commission's exercise of implementing powers ([43]OJ L 55, 28.2.2011, p.",
          "HU": "[42](12) Az Európai Parlament és a Tanács 182/2011/EU rendelete (2011. február 16.) a Bizottság végrehajtási hatásköreinek gyakorlására vonatkozó tagállami ellenőrzési mechanizmusok szabályainak és általános elveinek megállapításáról ([43]HL L 55., 2011.2.28., 13. o.)."
        },
        {
          "EN": "13). [44](13) Regulation (EU) No 1215/2012 of the European Parliament and of the Council of 12 December 2012 on jurisdiction and the recognition and enforcement of judgments in civil and commercial matters ([45]OJ L 351, 20.12.2012, p.",
          "HU": "[44](13) Az Európai Parlament és a Tanács 1215/2012/EU rendelete (2012. december 12.) a polgári és kereskedelmi ügyekben a joghatóságról, valamint a határozatok elismeréséről és végrehajtásáról ([45]HL L 351., 2012.12.20., 1. o.)."
        },
        {
          "EN": "1). [46](14) Directive 2003/98/EC of the European Parliament and of the Council of 17 November 2003 on the re-use of public sector information ([47]OJ L 345, 31.12.2003, p. 90).",
          "HU": "[46](14) Az Európai Parlament és a Tanács 2003/98/EK irányelve (2003. november 17.) a közszféra információinak további felhasználásáról ([47]HL L 345., 2003.12.31., 90. o.)."
        },
        {
          "EN": "[48](15) Regulation (EU) No 536/2014 of the European Parliament and of the Council of 16 April 2014 on clinical trials on medicinal products for human use, and repealing Directive 2001/20/EC ([49]OJ L 158, 27.5.2014, p. 1).",
          "HU": "[48](15) Az Európai Parlament és a Tanács 536/2014/EU rendelete (2014. április 16.) az emberi felhasználásra szánt gyógyszerek klinikai vizsgálatairól és a 2001/20/EK irányelv hatályon kívül helyezéséről ([49]HL L 158., 2014.5.27., 1. o.)."
        },
        {
          "EN": "[50](16) Regulation (EC) No 223/2009 of the European Parliament and of the Council of 11 March 2009 on European statistics and repealing Regulation (EC, Euratom) No 1101/2008 of the European Parliament and of the Council on the transmission of data subject to statistical confidentiality to the Statistical Office of the European Communities, Council Regulation (EC) No 322/97 on Community Statistics, and Council Decision 89/382/EEC, Euratom establishing a Committee on the Statistical Programmes of the European Communities ([51]OJ L 87, 31.3.2009, p. 164).",
          "HU": "[50](16) Az Európai Parlament és a Tanács 223/2009/EK rendelete (2009. március 11.) az európai statisztikákról és a titoktartási kötelezettség hatálya alá tartozó statisztikai adatoknak az Európai Közösségek Statisztikai Hivatala részére történő továbbításáról szóló 1101/2008/EK, Euratom európai parlamenti és tanácsi rendelet, a közösségi statisztikákról szóló 322/97/EK tanácsi rendelet és az Európai Közösségek statisztikai programbizottságának létrehozásáról szóló 89/382/EGK, Euratom tanácsi határozat hatályon kívül helyezéséről ([51]HL L 87., 2009.3.31., 164. o.)."
        },
        {
          "EN": "[52](17) [53]OJ C 192, 30.6.2012, p.",
          "HU": "[52](17) [53]HL C 192., 2012.6.30., 7. o."
        },
        {
          "EN": "7. [54](18) Directive 2002/58/EC of the European Parliament and of the Council of 12 July 2002 concerning the processing of personal data and the protection of privacy in the electronic communications sector (Directive on privacy and electronic communications) ([55]OJ L 201, 31.7.2002, p.",
          "HU": "[54](18) Az Európai Parlament és a Tanács 2002/58/EK irányelve (2002. július 12.) az elektronikus hírközlési ágazatban a személyes adatok kezeléséről, feldolgozásáról és a magánélet védelméről (Elektronikus hírközlési adatvédelmi irányelv) ([55]HL L 201., 2002.7.31., 37. o.)."
        },
        {
          "EN": "37). [56](19) Directive (EU) 2015/1535 of the European Parliament and of the Council of 9 September 2015 laying down a procedure for the provision of information in the field of technical regulations and of rules on Information Society services ([57]OJ L 241, 17.9.2015, p. 1).",
          "HU": "[56](19) Az Európai Parlament és Tanács (EU) 2015/1535 irányelve (2015. szeptember 9.) a műszaki szabályokkal és az információs társadalom szolgáltatásaira vonatkozó szabályokkal kapcsolatos információszolgáltatási eljárás megállapításáról ([57]HL L 241., 2015.9.17., 1. o.)"
        },
        {
          "EN": "[58](20) Regulation (EC) No 765/2008 of the European Parliament and of the Council of 9 July 2008 setting out the requirements for accreditation and market surveillance relating to the marketing of products and repealing Regulation (EEC) No 339/93 ([59]OJ L 218, 13.8.2008, p.",
          "HU": "[58](20) Az Európai Parlament és a Tanács 765/2008/EK rendelete (2008. július 9.) a termékek forgalmazása tekintetében az akkreditálás és piacfelügyelet előírásainak megállapításáról és a 339/93/EGK rendelet hatályon kívül helyezéséről ([59]HL L 218., 2008.8.13., 30. o.)."
        },
        {
          "EN": "30). [60](21) Regulation (EC) No 1049/2001 of the European Parliament and of the Council of 30 May 2001 regarding public access to European Parliament, Council and Commission documents ([61]OJ L 145, 31.5.2001, p. 43).",
          "HU": "[60](21) Az Európai Parlament és a Tanács 1049/2001/EK rendelete (2001. május 30.) az Európai Parlament, a Tanács és a Bizottság dokumentumaihoz való nyilvános hozzáférésről ([61]HL L 145., 2001.5.31., 43. o.)."
        },
        {
          "EN": "___________________________________________________________________________",
          "HU": "___________________________________________________________________________"
        },
        {
          "EN": "References",
          "HU": "References"
        },
        {
          "EN": "1. https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32016R0679#ntr1-L_2016119EN.01000101-E0001",
          "HU": "1. https://eur-lex.europa.eu/legal-content/HU/TXT/HTML/?uri=CELEX:32016R0679#ntr1-L_2016119HU.01000101-E0001"
        },
        {
          "EN": "2. https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32016R0679#ntr2-L_2016119EN.01000101-E0002",
          "HU": "2. https://eur-lex.europa.eu/legal-content/HU/TXT/HTML/?uri=CELEX:32016R0679#ntr2-L_2016119HU.01000101-E0002"
        },
        {
          "EN": "3. https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32016R0679#ntr3-L_2016119EN.01000101-E0003",
          "HU": "3. https://eur-lex.europa.eu/legal-content/HU/TXT/HTML/?uri=CELEX:32016R0679#ntr3-L_2016119HU.01000101-E0003"
        },
        {
          "EN": "4. https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32016R0679#ntr4-L_2016119EN.01000101-E0004",
          "HU": "4. https://eur-lex.europa.eu/legal-content/HU/TXT/HTML/?uri=CELEX:32016R0679#ntr4-L_2016119HU.01000101-E0004"
        },
        {
          "EN": "5. https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32016R0679#ntr5-L_2016119EN.01000101-E0005",
          "HU": "5. https://eur-lex.europa.eu/legal-content/HU/TXT/HTML/?uri=CELEX:32016R0679#ntr5-L_2016119HU.01000101-E0005"
        },
        {
          "EN": "6. https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32016R0679#ntr6-L_2016119EN.01000101-E0006",
          "HU": "6. https://eur-lex.europa.eu/legal-content/HU/TXT/HTML/?uri=CELEX:32016R0679#ntr6-L_2016119HU.01000101-E0006"
        },
        {
          "EN": "7. https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32016R0679#ntr7-L_2016119EN.01000101-E0007",
          "HU": "7. https://eur-lex.europa.eu/legal-content/HU/TXT/HTML/?uri=CELEX:32016R0679#ntr7-L_2016119HU.01000101-E0007"
        },
        {
          "EN": "8. https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32016R0679#ntr8-L_2016119EN.01000101-E0008",
          "HU": "8. https://eur-lex.europa.eu/legal-content/HU/TXT/HTML/?uri=CELEX:32016R0679#ntr8-L_2016119HU.01000101-E0008"
        },
        {
          "EN": "9. https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32016R0679#ntr9-L_2016119EN.01000101-E0009",
          "HU": "9. https://eur-lex.europa.eu/legal-content/HU/TXT/HTML/?uri=CELEX:32016R0679#ntr9-L_2016119HU.01000101-E0009"
        },
        {
          "EN": "10. https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32016R0679#ntr10-L_2016119EN.01000101-E0010",
          "HU": "10. https://eur-lex.europa.eu/legal-content/HU/TXT/HTML/?uri=CELEX:32016R0679#ntr10-L_2016119HU.01000101-E0010"
        },
        {
          "EN": "11. https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32016R0679#ntr11-L_2016119EN.01000101-E0011",
          "HU": "11. https://eur-lex.europa.eu/legal-content/HU/TXT/HTML/?uri=CELEX:32016R0679#ntr11-L_2016119HU.01000101-E0011"
        },
        {
          "EN": "12. https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32016R0679#ntr12-L_2016119EN.01000101-E0012",
          "HU": "12. https://eur-lex.europa.eu/legal-content/HU/TXT/HTML/?uri=CELEX:32016R0679#ntr12-L_2016119HU.01000101-E0012"
        },
        {
          "EN": "13. https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32016R0679#ntr13-L_2016119EN.01000101-E0013",
          "HU": "13. https://eur-lex.europa.eu/legal-content/HU/TXT/HTML/?uri=CELEX:32016R0679#ntr13-L_2016119HU.01000101-E0013"
        },
        {
          "EN": "14. https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32016R0679#ntr14-L_2016119EN.01000101-E0014",
          "HU": "14. https://eur-lex.europa.eu/legal-content/HU/TXT/HTML/?uri=CELEX:32016R0679#ntr14-L_2016119HU.01000101-E0014"
        },
        {
          "EN": "15. https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32016R0679#ntr15-L_2016119EN.01000101-E0015",
          "HU": "15. https://eur-lex.europa.eu/legal-content/HU/TXT/HTML/?uri=CELEX:32016R0679#ntr15-L_2016119HU.01000101-E0015"
        },
        {
          "EN": "16. https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32016R0679#ntr16-L_2016119EN.01000101-E0016",
          "HU": "16. https://eur-lex.europa.eu/legal-content/HU/TXT/HTML/?uri=CELEX:32016R0679#ntr16-L_2016119HU.01000101-E0016"
        },
        {
          "EN": "17. https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32016R0679#ntr17-L_2016119EN.01000101-E0017",
          "HU": "17. https://eur-lex.europa.eu/legal-content/HU/TXT/HTML/?uri=CELEX:32016R0679#ntr17-L_2016119HU.01000101-E0017"
        },
        {
          "EN": "18. https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32016R0679#ntr18-L_2016119EN.01000101-E0018",
          "HU": "18. https://eur-lex.europa.eu/legal-content/HU/TXT/HTML/?uri=CELEX:32016R0679#ntr18-L_2016119HU.01000101-E0018"
        },
        {
          "EN": "19. https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32016R0679#ntr19-L_2016119EN.01000101-E0019",
          "HU": "19. https://eur-lex.europa.eu/legal-content/HU/TXT/HTML/?uri=CELEX:32016R0679#ntr19-L_2016119HU.01000101-E0019"
        },
        {
          "EN": "20. https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32016R0679#ntr20-L_2016119EN.01000101-E0020",
          "HU": "20. https://eur-lex.europa.eu/legal-content/HU/TXT/HTML/?uri=CELEX:32016R0679#ntr20-L_2016119HU.01000101-E0020"
        },
        {
          "EN": "21. https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32016R0679#ntr21-L_2016119EN.01000101-E0021",
          "HU": "21. https://eur-lex.europa.eu/legal-content/HU/TXT/HTML/?uri=CELEX:32016R0679#ntr21-L_2016119HU.01000101-E0021"
        },
        {
          "EN": "22. https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32016R0679#ntc1-L_2016119EN.01000101-E0001",
          "HU": "22. https://eur-lex.europa.eu/legal-content/HU/TXT/HTML/?uri=CELEX:32016R0679#ntc1-L_2016119HU.01000101-E0001"
        },
        {
          "EN": "23. https://eur-lex.europa.eu/legal-content/EN/AUTO/?uri=OJ:C:2012:229:TOC",
          "HU": "23. https://eur-lex.europa.eu/legal-content/HU/AUTO/?uri=OJ:C:2012:229:TOC"
        },
        {
          "EN": "24. https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32016R0679#ntc2-L_2016119EN.01000101-E0002",
          "HU": "24. https://eur-lex.europa.eu/legal-content/HU/TXT/HTML/?uri=CELEX:32016R0679#ntc2-L_2016119HU.01000101-E0002"
        },
        {
          "EN": "25. https://eur-lex.europa.eu/legal-content/EN/AUTO/?uri=OJ:C:2012:391:TOC",
          "HU": "25. https://eur-lex.europa.eu/legal-content/HU/AUTO/?uri=OJ:C:2012:391:TOC"
        },
        {
          "EN": "26. https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32016R0679#ntc3-L_2016119EN.01000101-E0003",
          "HU": "26. https://eur-lex.europa.eu/legal-content/HU/TXT/HTML/?uri=CELEX:32016R0679#ntc3-L_2016119HU.01000101-E0003"
        },
        {
          "EN": "27. https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32016R0679#ntc4-L_2016119EN.01000101-E0004",
          "HU": "27. https://eur-lex.europa.eu/legal-content/HU/TXT/HTML/?uri=CELEX:32016R0679#ntc4-L_2016119HU.01000101-E0004"
        },
        {
          "EN": "28. https://eur-lex.europa.eu/legal-content/EN/AUTO/?uri=OJ:L:1995:281:TOC",
          "HU": "28. https://eur-lex.europa.eu/legal-content/HU/AUTO/?uri=OJ:L:1995:281:TOC"
        },
        {
          "EN": "29. https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32016R0679#ntc5-L_2016119EN.01000101-E0005",
          "HU": "29. https://eur-lex.europa.eu/legal-content/HU/TXT/HTML/?uri=CELEX:32016R0679#ntc5-L_2016119HU.01000101-E0005"
        },
        {
          "EN": "30. https://eur-lex.europa.eu/legal-content/EN/AUTO/?uri=OJ:L:2003:124:TOC",
          "HU": "30. https://eur-lex.europa.eu/legal-content/HU/AUTO/?uri=OJ:L:2003:124:TOC"
        },
        {
          "EN": "31. https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32016R0679#ntc6-L_2016119EN.01000101-E0006",
          "HU": "31. https://eur-lex.europa.eu/legal-content/HU/TXT/HTML/?uri=CELEX:32016R0679#ntc6-L_2016119HU.01000101-E0006"
        },
        {
          "EN": "32. https://eur-lex.europa.eu/legal-content/EN/AUTO/?uri=OJ:L:2001:008:TOC",
          "HU": "32. https://eur-lex.europa.eu/legal-content/HU/AUTO/?uri=OJ:L:2001:008:TOC"
        },
        {
          "EN": "33. https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32016R0679#ntc7-L_2016119EN.01000101-E0007",
          "HU": "33. https://eur-lex.europa.eu/legal-content/HU/TXT/HTML/?uri=CELEX:32016R0679#ntc7-L_2016119HU.01000101-E0007"
        },
        {
          "EN": "34. https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32016R0679#ntc8-L_2016119EN.01000101-E0008",
          "HU": "34. https://eur-lex.europa.eu/legal-content/HU/TXT/HTML/?uri=CELEX:32016R0679#ntc8-L_2016119HU.01000101-E0008"
        },
        {
          "EN": "35. https://eur-lex.europa.eu/legal-content/EN/AUTO/?uri=OJ:L:2000:178:TOC",
          "HU": "35. https://eur-lex.europa.eu/legal-content/HU/AUTO/?uri=OJ:L:2000:178:TOC"
        },
        {
          "EN": "36. https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32016R0679#ntc9-L_2016119EN.01000101-E0009",
          "HU": "36. https://eur-lex.europa.eu/legal-content/HU/TXT/HTML/?uri=CELEX:32016R0679#ntc9-L_2016119HU.01000101-E0009"
        },
        {
          "EN": "37. https://eur-lex.europa.eu/legal-content/EN/AUTO/?uri=OJ:L:2011:088:TOC",
          "HU": "37. https://eur-lex.europa.eu/legal-content/HU/AUTO/?uri=OJ:L:2011:088:TOC"
        },
        {
          "EN": "38. https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32016R0679#ntc10-L_2016119EN.01000101-E0010",
          "HU": "38. https://eur-lex.europa.eu/legal-content/HU/TXT/HTML/?uri=CELEX:32016R0679#ntc10-L_2016119HU.01000101-E0010"
        },
        {
          "EN": "39. https://eur-lex.europa.eu/legal-content/EN/AUTO/?uri=OJ:L:1993:095:TOC",
          "HU": "39. https://eur-lex.europa.eu/legal-content/HU/AUTO/?uri=OJ:L:1993:095:TOC"
        },
        {
          "EN": "40. https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32016R0679#ntc11-L_2016119EN.01000101-E0011",
          "HU": "40. https://eur-lex.europa.eu/legal-content/HU/TXT/HTML/?uri=CELEX:32016R0679#ntc11-L_2016119HU.01000101-E0011"
        },
        {
          "EN": "41. https://eur-lex.europa.eu/legal-content/EN/AUTO/?uri=OJ:L:2008:354:TOC",
          "HU": "41. https://eur-lex.europa.eu/legal-content/HU/AUTO/?uri=OJ:L:2008:354:TOC"
        },
        {
          "EN": "42. https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32016R0679#ntc12-L_2016119EN.01000101-E0012",
          "HU": "42. https://eur-lex.europa.eu/legal-content/HU/TXT/HTML/?uri=CELEX:32016R0679#ntc12-L_2016119HU.01000101-E0012"
        },
        {
          "EN": "43. https://eur-lex.europa.eu/legal-content/EN/AUTO/?uri=OJ:L:2011:055:TOC",
          "HU": "43. https://eur-lex.europa.eu/legal-content/HU/AUTO/?uri=OJ:L:2011:055:TOC"
        },
        {
          "EN": "44. https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32016R0679#ntc13-L_2016119EN.01000101-E0013",
          "HU": "44. https://eur-lex.europa.eu/legal-content/HU/TXT/HTML/?uri=CELEX:32016R0679#ntc13-L_2016119HU.01000101-E0013"
        },
        {
          "EN": "45. https://eur-lex.europa.eu/legal-content/EN/AUTO/?uri=OJ:L:2012:351:TOC",
          "HU": "45. https://eur-lex.europa.eu/legal-content/HU/AUTO/?uri=OJ:L:2012:351:TOC"
        },
        {
          "EN": "46. https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32016R0679#ntc14-L_2016119EN.01000101-E0014",
          "HU": "46. https://eur-lex.europa.eu/legal-content/HU/TXT/HTML/?uri=CELEX:32016R0679#ntc14-L_2016119HU.01000101-E0014"
        },
        {
          "EN": "47. https://eur-lex.europa.eu/legal-content/EN/AUTO/?uri=OJ:L:2003:345:TOC",
          "HU": "47. https://eur-lex.europa.eu/legal-content/HU/AUTO/?uri=OJ:L:2003:345:TOC"
        },
        {
          "EN": "48. https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32016R0679#ntc15-L_2016119EN.01000101-E0015",
          "HU": "48. https://eur-lex.europa.eu/legal-content/HU/TXT/HTML/?uri=CELEX:32016R0679#ntc15-L_2016119HU.01000101-E0015"
        },
        {
          "EN": "49. https://eur-lex.europa.eu/legal-content/EN/AUTO/?uri=OJ:L:2014:158:TOC",
          "HU": "49. https://eur-lex.europa.eu/legal-content/HU/AUTO/?uri=OJ:L:2014:158:TOC"
        },
        {
          "EN": "50. https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32016R0679#ntc16-L_2016119EN.01000101-E0016",
          "HU": "50. https://eur-lex.europa.eu/legal-content/HU/TXT/HTML/?uri=CELEX:32016R0679#ntc16-L_2016119HU.01000101-E0016"
        },
        {
          "EN": "51. https://eur-lex.europa.eu/legal-content/EN/AUTO/?uri=OJ:L:2009:087:TOC",
          "HU": "51. https://eur-lex.europa.eu/legal-content/HU/AUTO/?uri=OJ:L:2009:087:TOC"
        },
        {
          "EN": "52. https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32016R0679#ntc17-L_2016119EN.01000101-E0017",
          "HU": "52. https://eur-lex.europa.eu/legal-content/HU/TXT/HTML/?uri=CELEX:32016R0679#ntc17-L_2016119HU.01000101-E0017"
        },
        {
          "EN": "53. https://eur-lex.europa.eu/legal-content/EN/AUTO/?uri=OJ:C:2012:192:TOC",
          "HU": "53. https://eur-lex.europa.eu/legal-content/HU/AUTO/?uri=OJ:C:2012:192:TOC"
        },
        {
          "EN": "54. https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32016R0679#ntc18-L_2016119EN.01000101-E0018",
          "HU": "54. https://eur-lex.europa.eu/legal-content/HU/TXT/HTML/?uri=CELEX:32016R0679#ntc18-L_2016119HU.01000101-E0018"
        },
        {
          "EN": "55. https://eur-lex.europa.eu/legal-content/EN/AUTO/?uri=OJ:L:2002:201:TOC",
          "HU": "55. https://eur-lex.europa.eu/legal-content/HU/AUTO/?uri=OJ:L:2002:201:TOC"
        },
        {
          "EN": "56. https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32016R0679#ntc19-L_2016119EN.01000101-E0019",
          "HU": "56. https://eur-lex.europa.eu/legal-content/HU/TXT/HTML/?uri=CELEX:32016R0679#ntc19-L_2016119HU.01000101-E0019"
        },
        {
          "EN": "57. https://eur-lex.europa.eu/legal-content/EN/AUTO/?uri=OJ:L:2015:241:TOC",
          "HU": "57. https://eur-lex.europa.eu/legal-content/HU/AUTO/?uri=OJ:L:2015:241:TOC"
        },
        {
          "EN": "58. https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32016R0679#ntc20-L_2016119EN.01000101-E0020",
          "HU": "58. https://eur-lex.europa.eu/legal-content/HU/TXT/HTML/?uri=CELEX:32016R0679#ntc20-L_2016119HU.01000101-E0020"
        },
        {
          "EN": "59. https://eur-lex.europa.eu/legal-content/EN/AUTO/?uri=OJ:L:2008:218:TOC",
          "HU": "59. https://eur-lex.europa.eu/legal-content/HU/AUTO/?uri=OJ:L:2008:218:TOC"
        },
        {
          "EN": "60. https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32016R0679#ntc21-L_2016119EN.01000101-E0021",
          "HU": "60. https://eur-lex.europa.eu/legal-content/HU/TXT/HTML/?uri=CELEX:32016R0679#ntc21-L_2016119HU.01000101-E0021"
        },
        {
          "EN": "61. https://eur-lex.europa.eu/legal-content/EN/AUTO/?uri=OJ:L:2001:145:TOC",
          "HU": "61. https://eur-lex.europa.eu/legal-content/HU/AUTO/?uri=OJ:L:2001:145:TOC"
        }
      ],
      "celex": "32016R0679",
      "lang1": "HU",
      "lang2": "EN"
    })
  }, [])
  const handleClick = () => {
    setLang(lang === "HU" ? "EN" : "HU")
  
  }


  return (
    <>

      {data ?
      <>
      <div className= "lang" onClick={handleClick}>
        <span className={lang === "EN" ? "selected" : ""}>EN</span>
        <span className={lang === "HU" ? "selected" : ""}>HU</span>
      </div>
       {data["TUs"].map((obj, index) => <p key={index}>{obj[lang]}</p>)}
       </>
      : "loading"}
    </>
  )
}

export default App
