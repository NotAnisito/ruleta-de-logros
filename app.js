(function(){
"use strict";
const TAU = Math.PI*2;

const DLC = {
  base:{es:"Juego base",en:"Base game",c:"#b39a62"},
  x:{es:"Actualización X Aniversario",en:"X Anniversary Update",c:"#d6c48e"},
  tfv:{es:"Together for Victory",en:"Together for Victory",c:"#77874a"},
  dod:{es:"Death or Dishonor",en:"Death or Dishonor",c:"#8e5e40"},
  wtt:{es:"Waking the Tiger",en:"Waking the Tiger",c:"#a1483d"},
  mtg:{es:"Man the Guns",en:"Man the Guns",c:"#506e8a"},
  lar:{es:"La Résistance",en:"La Résistance",c:"#71627a"},
  bftb:{es:"Battle for the Bosporus",en:"Battle for the Bosporus",c:"#ac7a3d"},
  nsb:{es:"No Step Back",en:"No Step Back",c:"#82392e"},
  bba:{es:"By Blood Alone",en:"By Blood Alone",c:"#5f7d66"},
  aat:{es:"Arms Against Tyranny",en:"Arms Against Tyranny",c:"#7290a6"},
  toa:{es:"Trial of Allegiance",en:"Trial of Allegiance",c:"#7a9649"},
  gd:{es:"Götterdämmerung",en:"Götterdämmerung",c:"#82796b"},
  goe:{es:"Graveyard of Empires",en:"Graveyard of Empires",c:"#be9163"},
  ncns:{es:"No Compromise, No Surrender",en:"No Compromise, No Surrender",c:"#95627a"},
  pfot:{es:"Peace for Our Time",en:"Peace for Our Time",c:"#4d7874"},
  taog:{es:"Thunder at Our Gates",en:"Thunder at Our Gates",c:"#8d8b44"}
};
const ORDER = Object.keys(DLC);

/* [dlc, título (inglés, como en el juego), descripción EN, descripción ES] */
const A = [
["base","Friend in Need","Join a faction.","Únete a una facción."],
["base","Time is on our side","Reach 1948.","Llega a 1948."],
["base","Canada First","Join the Axis as Canada.","Únete al Eje como Canadá."],
["base","We’ll build it in a day","Research Construction V.","Investiga Construcción V."],
["base","Transport Tycoon","Have at least 1000 convoys.","Ten al menos 1000 convoyes."],
["base","Destroyer of Worlds","Deploy a nuke.","Lanza una bomba nuclear."],
["base","Wunderwaffen","Complete the special projects Nuclear Fission Bomb, Rocket Interceptor and Jet Engines.","Completa los proyectos especiales Bomba de fisión nuclear, Interceptor cohete y Motores a reacción."],
["base","United Netherlands","Conquer Belgium and Luxembourg as the Netherlands.","Conquista Bélgica y Luxemburgo como Países Bajos."],
["base","Vive la France","Reach 1948 as France without capitulating or surrendering.","Llega a 1948 como Francia sin capitular ni rendirte."],
["base","Master of War","Fully research a land, an air and a naval doctrine tree.","Investiga por completo un árbol de doctrina terrestre, uno aéreo y uno naval."],
["base","Mine is bigger than yours","Lead a faction with at least 20 members.","Lidera una facción de al menos 20 miembros."],
["base","No country for old men","Reach 0 manpower with Scraping the Barrel as conscription law.","Llega a 0 de mano de obra con la ley de reclutamiento «Scraping the Barrel»."],
["base","Poland can into space","As Poland, complete the Rocket Interceptor special project.","Como Polonia, completa el proyecto especial Interceptor cohete."],
["base","True Blitzkrieg","As Germany, make both Poland and France surrender before January 1st 1940.","Como Alemania, haz que Polonia y Francia se rindan antes del 1 de enero de 1940."],
["base","Northern Light","As a Scandinavian country, form your own faction with Denmark, Sweden, Norway and Finland in it.","Como país escandinavo, forma tu propia facción con Dinamarca, Suecia, Noruega y Finlandia."],
["base","Nobody expects...","As Nationalist Spain in the Axis, take Paris before the Germans.","Como la España nacional dentro del Eje, toma París antes que los alemanes."],
["base","The bell tolls for us","Win the Spanish Civil War as Republican Spain.","Gana la Guerra Civil española como la España republicana."],
["base","The Revolution Triumphant","As the Soviet Union, have Germany as a puppet.","Como la URSS, ten a Alemania como títere."],
["base","Once More Mate","Occupy Gallipoli as Australia.","Ocupa Galípoli como Australia."],
["base","Forge of Victory","Have 50 factories as Belgium.","Ten 50 fábricas como Bélgica."],
["base","Sunset Invasion","As Mexico, occupy a coastal province in Europe. If in a faction, it may only contain South American members or puppets.","Como México, ocupa una provincia costera de Europa. Si estás en una facción, solo puede tener miembros sudamericanos o títeres."],
["base","Duce Nuked’em","Nuke Los Angeles as fascist Italy.","Lanza una bomba nuclear sobre Los Ángeles como Italia fascista."],
["base","Operation Sea Lion","Control the British mainland as Germany.","Controla la isla de Gran Bretaña como Alemania."],
["base","One Empire","Unite the entire world under the British Empire.","Une el mundo entero bajo el Imperio británico."],
["base","Party like it’s 1520","Occupy Stockholm as communist Denmark.","Ocupa Estocolmo como Dinamarca comunista."],
["base","Med plutonium...","Nuke Denmark as Sweden.","Lanza una bomba nuclear sobre Dinamarca como Suecia."],
["base","The Revenge of Montezuma","As Mexico, restore the old borders with the USA.","Como México, recupera las antiguas fronteras con EE. UU."],
["base","Big Entente","As France, complete the “Little Entente” focus and have all German cores owned by you or a faction member.","Como Francia, completa el foco «Little Entente» y haz que tú o un miembro de tu facción poseáis todos los núcleos alemanes."],
["base","New World Order","Make all nations fascist.","Haz que todas las naciones sean fascistas."],
["base","Bearer of Artillery","As Poland, gain Vojtek as a commander.","Como Polonia, consigue a Vojtek como comandante."],

["x","Steiner","As Germany, get over 30% surrender progress after June 22nd 1941 while at war with the Soviet Union, France and the UK and controlling Moscow, Paris and London.","Como Alemania, supera el 30 % de progreso de rendición después del 22 de junio de 1941 estando en guerra con la URSS, Francia y Reino Unido y controlando Moscú, París y Londres."],

["tfv","Braaaaains!","As Canada, complete the Send in the Zombies focus.","Como Canadá, completa el foco «Send in the Zombies»."],
["tfv","District 9","As South Africa, have 9 civilian factories in Transvaal.","Como Sudáfrica, ten 9 fábricas civiles en Transvaal."],
["tfv","Our Words Are Backed With Nuclear Weapons","As India, develop and deploy a nuke while having the Quit India Movement national spirit.","Como la India, desarrolla y lanza una bomba nuclear con el espíritu nacional «Quit India Movement»."],
["tfv","Crusader Kings","As South Africa, finish the A King for our People focus and take Jerusalem.","Como Sudáfrica, completa el foco «A King for our People» y toma Jerusalén."],
["tfv","Crusader Kings 2","As South Africa, finish the Anti-Colonialist Crusade focus, release all European colonies via the focus and take London.","Como Sudáfrica, completa el foco «Anti-Colonialist Crusade», libera todas las colonias europeas mediante el foco y toma Londres."],
["tfv","Rule Britannia","As any British subject, conquer all of Britain.","Como cualquier súbdito británico, conquista toda Gran Bretaña."],
["tfv","Cut The Strings","Break free from your overlord as a puppet.","Siendo títere, libérate de tu señor."],
["tfv","It’s 1812 All Over Again","As Canada, take and hold Washington D.C.","Como Canadá, toma y mantén Washington D. C."],
["tfv","The weapons of the Third Emu War","As Australia, use a nuclear bomb on core Australian territory.","Como Australia, lanza una bomba nuclear sobre territorio núcleo australiano."],
["tfv","I Am the Tong Master","As South Africa, break free from the UK and puppet another nation.","Como Sudáfrica, independízate de Reino Unido y convierte a otra nación en títere."],
["tfv","The Empire Strikes Back","As Britain, declare war on one of your former subjects.","Como Reino Unido, declara la guerra a uno de tus antiguos súbditos."],
["tfv","The Puppetmaster","Have at least 51 subjects.","Ten al menos 51 súbditos."],
["tfv","Freegypt","As Egypt, go from puppet to free nation using the autonomy system.","Como Egipto, pasa de títere a nación libre con el sistema de autonomía."],

["dod","Miklos Horthy and the Habsburg Prince","As Hungary, restore Austria-Hungary.","Como Hungría, restaura Austria-Hungría."],
["dod","Better than the Szent István","As Hungary, have Miklós Horthy as a naval commander and build a battleship.","Como Hungría, ten a Miklós Horthy como comandante naval y construye un acorazado."],
["dod","Death or Dishonor or Cake","As Romania, own a slice of all your starting neighbours.","Como Rumanía, posee un trozo de todos tus vecinos iniciales."],
["dod","Neither Death nor Dishonor","As Romania, reach 1942 with all your starting states and control either Moscow or Berlin.","Como Rumanía, llega a 1942 con todos tus estados iniciales y controla Moscú o Berlín."],
["dod","The Munich Disagreement","As Czechoslovakia, occupy Munich while at war with Germany.","Como Checoslovaquia, ocupa Múnich estando en guerra con Alemania."],
["dod","Czechmate","As Czechoslovakia, occupy Canberra while at war with the Allies.","Como Checoslovaquia, ocupa Canberra estando en guerra con los Aliados."],
["dod","Huge-oslavia","As Yugoslavia, occupy all your neighbours: Austria, Hungary, Romania, Bulgaria, Albania, Italy and Greece.","Como Yugoslavia, ocupa a todos tus vecinos: Austria, Hungría, Rumanía, Bulgaria, Albania, Italia y Grecia."],
["dod","The Balkan Powder Keg","As Yugoslavia, start the Second World War: be in the Axis or the Allies and at war with the other faction in a war you started.","Como Yugoslavia, inicia la Segunda Guerra Mundial: desde el Eje o los Aliados, entra en guerra con la otra facción en una guerra iniciada por ti."],
["dod","En Svensk Tiger","As Sweden, acquire a production licence for a Tiger or Tiger II tank from Germany.","Como Suecia, consigue de Alemania una licencia de producción del Tiger o el Tiger II."],
["dod","Lethal Straight","Have a production licence from at least 5 of the 7 major powers.","Ten licencias de producción de al menos 5 de las 7 grandes potencias."],

["wtt","Awake and Angry","As China, reconquer all of China and Manchuria and force a Japanese surrender.","Como China, reconquista toda China y Manchuria y fuerza la rendición de Japón."],
["wtt","Romance of the Three Kingdoms","As China, puppet and then annex Yunnan and the Guangxi Clique.","Como China, convierte en títeres y después anexiona Yunnan y la camarilla de Guangxi."],
["wtt","Sun Tzu Reborn","As any Chinese nation, have a level 9 field marshal.","Como cualquier nación china, ten un mariscal de campo de nivel 9."],
["wtt","The People Have Stood Up!","With Mao as your leader, win the Chinese Civil War.","Con Mao como líder, gana la Guerra Civil china."],
["wtt","Made in China","As Communist China, have over 100 military factories.","Como China comunista, ten más de 100 fábricas militares."],
["wtt","Tojo Shot First","As Japan, nuke a core territory of the US before the US develops nuclear weapons.","Como Japón, lanza una bomba nuclear sobre territorio núcleo de EE. UU. antes de que ellos tengan armas nucleares."],
["wtt","Sunrise Invasion","As Japan, conquer Mexico and then Europe before 1945.","Como Japón, conquista México y después Europa antes de 1945."],
["wtt","The Dragon Swallowed the Sun","As Manchukuo, break free from Japan and annex your former overlord without being in a faction.","Como Manchukuo, libérate de Japón y anexiona a tu antiguo señor sin estar en una facción."],
["wtt","Hail to the Qing","As Manchukuo, restore the Qing dynasty.","Como Manchukuo, restaura la dinastía Qing."],
["wtt","The Good, the Bad and the Weird","As Manchukuo, have max infrastructure in every owned state and produce at least 15 oil.","Como Manchukuo, ten infraestructura máxima en todos tus estados y produce al menos 15 de petróleo."],
["wtt","Battlecry","As a warlord, conquer all of China and Japan.","Como señor de la guerra, conquista toda China y Japón."],
["wtt","Panda-monium","As a warlord, be at war with all Chinese nations at the same time.","Como señor de la guerra, entra en guerra con todas las naciones chinas a la vez."],
["wtt","Make a Man Out Of You","As a warlord, have at least 1,000,000 manpower queued for deployment.","Como señor de la guerra, ten al menos 1 000 000 de mano de obra en la cola de despliegue."],
["wtt","Monarchy is Back In Fashion","As Germany, bring back the Kaiser and make Victor Emmanuel control Italy by killing Mussolini.","Como Alemania, restaura al káiser y haz que Víctor Manuel controle Italia matando a Mussolini."],
["wtt","Our Other Place in the Sun","As Imperial Germany, conquer a Caribbean island.","Como Alemania imperial, conquista una isla del Caribe."],
["wtt","Australia-Hungary","As Australia, own all Hungarian core territory.","Como Australia, posee todo el territorio núcleo de Hungría."],
["wtt","My Ships Don’t Lie","As Colombia, form Gran Colombia and have 10 carriers and 10 battleships.","Como Colombia, forma la Gran Colombia y ten 10 portaaviones y 10 acorazados."],
["wtt","I Swear I’m Not a Byzantophile","As Greece, form the Byzantine Empire.","Como Grecia, forma el Imperio bizantino."],

["mtg","Team America","As the USA, drop a nuclear bomb on Paris.","Como EE. UU., lanza una bomba nuclear sobre París."],
["mtg","History Repeated Itself","As the USA, win against the Confederate States. Again.","Como EE. UU., derrota a los Estados Confederados. Otra vez."],
["mtg","Georgia On My Mind","As the USA, own and fully control all three Georgias.","Como EE. UU., posee y controla por completo las tres Georgias."],
["mtg","To Arms in Dixie!","As the USA, start a new civil war as the South.","Como EE. UU., inicia una nueva guerra civil como el Sur."],
["mtg","Arsenal of Democracy","As the USA, have more than 300 military factories.","Como EE. UU., ten más de 300 fábricas militares."],
["mtg","Underpaid, Undersexed, and Under Eisenhower","As the USA, take faction leadership of the Allies and have over 50 expeditionary divisions from the UK.","Como EE. UU., asume el liderazgo de los Aliados y ten más de 50 divisiones expedicionarias de Reino Unido."],
["mtg","Last for a Thousand Years","As the UK, federate the entire British Empire.","Como Reino Unido, federa todo el Imperio británico."],
["mtg","Britzkrieg","As the UK, put Edward VIII in power, ally Germany and fully control Paris.","Como Reino Unido, pon a Eduardo VIII en el poder, alíate con Alemania y controla París por completo."],
["mtg","Nothing Wrong with our Bloody Ships","As the UK, have at least 9 battlecruisers.","Como Reino Unido, ten al menos 9 cruceros de batalla."],
["mtg","William Wallis","As the UK, put Edward VIII in power, enforce an American monarchy and have both it and Scotland as subjects.","Como Reino Unido, pon a Eduardo VIII en el poder, impón una monarquía en EE. UU. y ten a ese país y a Escocia como súbditos."],
["mtg","Crush the Dream","As a communist UK, crush the American Dream by puppeting the USA.","Como Reino Unido comunista, aplasta el sueño americano convirtiendo a EE. UU. en títere."],
["mtg","Treading the Narrow Path","As the Netherlands, don’t cave to the Germans, continue the Zuiderzee Works and keep all your continental European states until 1945.","Como Países Bajos, no cedas ante los alemanes, continúa las obras del Zuiderzee y no pierdas ningún estado europeo continental hasta 1945."],
["mtg","Putting the Raid on the Medway to Shame","As the Netherlands, leave the UK with no capital ships (carriers, battleships, battlecruisers or heavy cruisers).","Como Países Bajos, deja a Reino Unido sin buques capitales (portaaviones, acorazados, cruceros de batalla ni cruceros pesados)."],
["mtg","Bevrijding","As the Netherlands, liberate the continental Netherlands after moving the government to the East Indies.","Como Países Bajos, libera la metrópoli tras trasladar el gobierno a las Indias Orientales."],
["mtg","Mi Casa es tu Casa","As Mexico, host a government in exile.","Como México, acoge a un gobierno en el exilio."],
["mtg","The New Home of the Revolution","As Mexico, put Trotsky in power and puppet the Soviet Union.","Como México, pon a Trotski en el poder y convierte a la URSS en títere."],
["mtg","Assuming Direct Control","Starting as a minor power, take faction leadership of the Allies, the Axis or the Comintern.","Empezando como potencia menor, asume el liderazgo de los Aliados, el Eje o la Komintern."],
["mtg","Vive la Jeune Ecole","As France, have at least 150 destroyers and research the best torpedo launcher before 1945.","Como Francia, ten al menos 150 destructores e investiga el mejor lanzatorpedos antes de 1945."],
["mtg","30 Minutes of Hel","As Poland in the 1939 start, inflict over 1,800,000 casualties on Germany. Extra bragging rights if you do it in 30 minutes or less.","Como Polonia con inicio en 1939, causa más de 1 800 000 bajas a Alemania. Más mérito si lo haces en 30 minutos o menos."],
["mtg","Pride and Extreme Prejudice","Sink the British pride of the fleet.","Hunde el orgullo de la flota británica."],
["mtg","Do You Mined?","Lay at least 1,000 mines on the coastline of an enemy nation.","Coloca al menos 1000 minas en la costa de una nación enemiga."],

["lar","BFFs","As Portugal, join the same faction as Great Britain.","Como Portugal, únete a la misma facción que Reino Unido."],
["lar","Go Ahead, Macau My Day","As Portugal, create a collaboration government in Macau and have it own all Chinese states.","Como Portugal, crea un gobierno colaboracionista en Macao y haz que posea todos los estados chinos."],
["lar","Play It, Sam","Have a spy network of at least 50% strength in Casablanca.","Ten una red de espionaje de al menos un 50 % de fuerza en Casablanca."],
["lar","Spies Trade","As India, become the spymaster of the Allies.","Como la India, conviértete en maestro de espías de los Aliados."],
["lar","Why Die For Danzig?","As Germany, turn France fascist and occupy Danzig without going to war with France.","Como Alemania, vuelve fascista a Francia y ocupa Danzig sin entrar en guerra con ella."],
["lar","I SEE EVERYTHING","Get over 90% intel in every category on a major without using code cracking.","Consigue más del 90 % de inteligencia en todas las categorías sobre una gran potencia sin descifrar sus códigos."],
["lar","Shaken, Not Stirred","Stage a successful coup in any nation using a spy with the Seducer trait.","Da un golpe de Estado con éxito en cualquier nación usando un espía con el rasgo Seductor."],
["lar","Listen Very Carefully, I Shall Say This...","Have a French and a British spy work together on the same operation.","Haz que un espía francés y uno británico trabajen juntos en la misma operación."],
["lar","Man of a Thousand Faces, Every One the Same","Have the same spy get captured twice.","Haz que capturen dos veces al mismo espía."],
["lar","Turing Complete!","Fully decrypt all nations in the Axis.","Descifra por completo a todas las naciones del Eje."],
["lar","One King, Two Crowns","As Bourbon Spain, hold all Spanish and French core states.","Como la España borbónica, controla todos los estados núcleo de España y Francia."],
["lar","We Will Rock You","As Spain, own Gibraltar.","Como España, posee Gibraltar."],
["lar","Well, I Didn’t Vote for You","Win the Spanish Civil War as the anarchists.","Gana la Guerra Civil española como los anarquistas."],
["lar","Our Chief Weapon is Surprise...","As Spain, have at least 5 spies and stage 5 coups against other nations.","Como España, ten al menos 5 espías y da 5 golpes de Estado en otras naciones."],
["lar","Die, Perfidious Albion!","As fascist or Vichy France, occupy all of Great Britain.","Como Francia fascista o de Vichy, ocupa toda Gran Bretaña."],
["lar","Second Time’s the Charm","As France, occupy Moscow while Napoleon VI is your leader.","Como Francia, ocupa Moscú con Napoleón VI como líder."],
["lar","Don’t Die for Your Country","As Germany in the 1939 start, occupy all of Poland and France while taking no more than 475 casualties.","Como Alemania con inicio en 1939, ocupa toda Polonia y Francia sin sufrir más de 475 bajas."],
["lar","Warszawo, Walcz!","Stage the Warsaw uprising and succeed.","Provoca el levantamiento de Varsovia y haz que triunfe."],
["lar","Tour de France","Occupy all of mainland France while having at least 20 fully equipped bicycle battalions.","Ocupa toda la Francia continental teniendo al menos 20 batallones ciclistas totalmente equipados."],
["lar","You Will Never Kill Me Alive","Have one of your spies take a suicide pill.","Haz que uno de tus espías tome una cápsula de cianuro."],

["bftb","Finnish Him!","As Finland, defeat the Soviet Union without joining a faction.","Como Finlandia, derrota a la URSS sin unirte a una facción."],
["bftb","I Captured the Bosporus and All I Got Was This Lousy Achievement","As Greece or Bulgaria, own both sides of the Bosporus. As Turkey, subjugate both Greece and Bulgaria.","Como Grecia o Bulgaria, posee ambas orillas del Bósforo. Como Turquía, somete a Grecia y a Bulgaria."],
["bftb","Istanbul is Constantinople. Again.","As Greece, capture Istanbul and rename it Constantinople.","Como Grecia, toma Estambul y renómbrala Constantinopla."],
["bftb","Peter’s Pride","As Peter II of Yugoslavia, overthrow your uncle and become king.","Como Pedro II de Yugoslavia, derroca a tu tío y conviértete en rey."],
["bftb","This is Madness!","As Greece, fulfil the Megali Idea and then form Greater Greece.","Como Grecia, cumple la Megali Idea y después forma la Gran Grecia."],
["bftb","Nobody’s Business but the Turks","Restore the Ottoman Sultanate.","Restaura el sultanato otomano."],
["bftb","House of Kurds","As Kurdistan, hold all of your cores.","Como Kurdistán, controla todos tus núcleos."],
["bftb","Hellenic Civility","Win the Greek Civil War before 1937.","Gana la Guerra Civil griega antes de 1937."],
["bftb","Hoofin’ It","Unite Arabia with thirty camelry divisions.","Une Arabia con treinta divisiones de camelleros."],
["bftb","We’re Putting the Band Back Together","As Turkey, be in a faction with Germany and Austria-Hungary.","Como Turquía, comparte facción con Alemania y Austria-Hungría."],
["bftb","Dracula’s Revenge","As Yugoslavia, establish the autonomous region of Transylvania and have it own all Romanian cores.","Como Yugoslavia, crea la región autónoma de Transilvania y haz que posea todos los núcleos rumanos."],
["bftb","Prussia of the Balkans","As Bulgaria, capitulate Turkey while controlling the rest of the Balkans, Greece included.","Como Bulgaria, haz capitular a Turquía controlando el resto de los Balcanes, Grecia incluida."],
["bftb","Balkan Problem Solved","As communist Bulgaria, form the United Balkan Federation and own all Balkan states as cores.","Como Bulgaria comunista, forma la Federación Balcánica Unida y posee todos los estados balcánicos como núcleos."],
["bftb","Bad Romeance","Restore Byzantium and have Italy, Romania and Russia as subjects.","Restaura Bizancio y ten a Italia, Rumanía y Rusia como súbditos."],
["bftb","Totally Not Cool, Bromania","As Romania, change sides in the war and capitulate a former ally.","Como Rumanía, cambia de bando en la guerra y haz capitular a un antiguo aliado."],
["bftb","Freedom or Death","As Greece, liberate Albania while at war with Italy.","Como Grecia, libera Albania estando en guerra con Italia."],
["bftb","Now This is Getting Childish","As Yugoslavia or Bulgaria, be at war while both countries are ruled by a child.","Como Yugoslavia o Bulgaria, entra en guerra mientras ambos países están gobernados por un niño."],
["bftb","Hardly Anything Sèvres","As the Ottoman Empire, hold the capitals of France, the UK, Italy and Japan.","Como el Imperio otomano, controla las capitales de Francia, Reino Unido, Italia y Japón."],
["bftb","One Nation Under Atatürk, Indivisible","As non-aligned Turkey, have zero negative state modifiers.","Como Turquía no alineada, no tengas ningún modificador de estado negativo."],
["bftb","Master Puppeteer","As Bulgaria, complete The Fate of the Balkans focus while having 5 or more Balkan puppets.","Como Bulgaria, completa el foco «The Fate of the Balkans» con 5 o más títeres balcánicos."],

["nsb","At least they run on time!","As fascist Italy, have max level railways in all your core states.","Como Italia fascista, ten ferrocarriles de nivel máximo en todos tus estados núcleo."],
["nsb","Not much fun in Stalingrad","As Germany, capitulate the Soviet Union without taking Stalingrad.","Como Alemania, haz capitular a la URSS sin tomar Stalingrado."],
["nsb","No more Partitions","As Poland, be independent and make sure Germany and the USSR are either in your faction or don’t exist.","Como Polonia, sé independiente y asegúrate de que Alemania y la URSS estén en tu facción o no existan."],
["nsb","Habsburgs. Habsburgs everywhere","As Poland, install a Habsburg monarch and be in a faction with another Habsburg monarch.","Como Polonia, instaura un monarca Habsburgo y comparte facción con otro monarca Habsburgo."],
["nsb","The Pope? How many Divisions does he have?","As the USSR, take Rome.","Como la URSS, toma Roma."],
["nsb","This is going to be LIT","As Lithuania, hold the capitals of all your neighbours.","Como Lituania, controla las capitales de todos tus vecinos."],
["nsb","It has my name on it","As any Baltic state, conquer the entire Baltic Sea coastline.","Como cualquier país báltico, conquista toda la costa del mar Báltico."],
["nsb","This Achievement is Cheesy","As Latvia, form Ostland and occupy Västerbotten.","Como Letonia, forma Ostland y ocupa Västerbotten."],
["nsb","Esti is Scandi","As Estonia, secure Scandinavia.","Como Estonia, hazte con Escandinavia."],
["nsb","Not a step back!","As the Soviet Union, never lose a single core territory before 1945.","Como la URSS, no pierdas ni un territorio núcleo antes de 1945."],
["nsb","One Step Forward","As the Soviet Union, declare war on Poland and Germany before Germany attacks Poland.","Como la URSS, declara la guerra a Polonia y Alemania antes de que Alemania ataque a Polonia."],
["nsb","The Soviet Onion","As the Soviet Union, have only puppets as neighbours.","Como la URSS, ten solo títeres como vecinos."],
["nsb","Crusader Kings III","As Poland, crown a king (or queen) and capture Jerusalem.","Como Polonia, corona a un rey (o reina) y toma Jerusalén."],
["nsb","The Romanovs laugh last","Restore the Romanovs and conquer Germany, Hungary, Austria, Czechoslovakia, Turkey and Bulgaria.","Restaura a los Románov y conquista Alemania, Hungría, Austria, Checoslovaquia, Turquía y Bulgaria."],
["nsb","We don’t really like statistics","As the Soviet Union under Stalin, conquer Germany with fewer than 1 million total casualties.","Como la URSS de Stalin, conquista Alemania con menos de 1 millón de bajas en total."],
["nsb","Race for Germany","As the Soviet Union, capitulate Germany after the fall of France and before the Allies control a German core state.","Como la URSS, haz capitular a Alemania tras la caída de Francia y antes de que los Aliados controlen un estado núcleo alemán."],
["nsb","Siberian Tiger","As Tannu Tuva, form Siberia.","Como Tannu Tuvá, forma Siberia."],
["nsb","Just proper gander","As the Soviet Union, run 30 propaganda campaigns before 1945.","Como la URSS, lanza 30 campañas de propaganda antes de 1945."],
["nsb","Around Eurasia in 80 days","Build a railway from Gibraltar to Singapore.","Construye un ferrocarril de Gibraltar a Singapur."],
["nsb","Poland Peasant Revolution","As Poland, have the Peasants’ Strike overthrow the government.","Como Polonia, haz que la huelga campesina derroque al gobierno."],

["bba","…and you get a canton, everybody gets a canton!","As Switzerland, have 24 states.","Como Suiza, ten 24 estados."],
["bba","I’m not locked in here with you…","As Switzerland, declare war on Germany and win.","Como Suiza, declara la guerra a Alemania y gana."],
["bba","Swiss Cheese","As Switzerland, annex 5 states not contiguous with each other or with Switzerland.","Como Suiza, anexiona 5 estados que no limiten entre sí ni con Suiza."],
["bba","You Shall Not Pass","As Switzerland, win a defensive war without ever losing the Western Swiss Alps, Eastern Swiss Alps or Ticino.","Como Suiza, gana una guerra defensiva sin perder nunca los Alpes suizos occidentales, los orientales ni el Tesino."],
["bba","The Lion that Roared","As Ethiopia, without being in a faction, force the Italians to make peace. Again.","Como Etiopía y sin estar en una facción, obliga a los italianos a firmar la paz. Otra vez."],
["bba","The Lion King","As Haile Selassie, declare yourself “King of Kings” and control Kenya and Tanzania.","Como Haile Selassie, proclámate «Rey de reyes» y controla Kenia y Tanzania."],
["bba","This time for Africa","As Ethiopia, found the African Union with at least 13 countries that have their capitals in Africa.","Como Etiopía, funda la Unión Africana con al menos 13 países con capital en África."],
["bba","Crusader Kings IV","As Ethiopia, take Jerusalem and move your capital there.","Como Etiopía, toma Jerusalén y traslada allí la capital."],
["bba","The Red Sea","As Ethiopia, go communist and take every state bordering the Red Sea.","Como Etiopía, hazte comunista y toma todos los estados que bordean el mar Rojo."],
["bba","Stalin, how many guns does he have?","As the Pope, capitulate the USSR.","Como el papa, haz capitular a la URSS."],
["bba","Holy, Roman, and an Empire","As the Pope, restore Rome.","Como el papa, restaura Roma."],
["bba","Pizza Time!","As Italy, occupy New York, Chicago and Hawaii.","Como Italia, ocupa Nueva York, Chicago y Hawái."],
["bba","Collect all the Romes","As Italy, keep holding the First Rome and gain the Second and Third Rome.","Como Italia, conserva la primera Roma y consigue la segunda y la tercera."],
["bba","Nothing personal, Adolf","As Italy, take Austria before the Anschluss and never join a faction with a fascist Germany.","Como Italia, toma Austria antes del Anschluss y no compartas nunca facción con una Alemania fascista."],
["bba","Not today","As communist Italy, save Gramsci from the brink of death, make him leader and form the Italian National Union.","Como Italia comunista, salva a Gramsci de la muerte, hazlo líder y forma la Unión Nacional Italiana."],
["bba","This time it will stick","As an Allied nation in a faction with a democratic UK, enforce a peace deal on Germany that demilitarises the Rhineland.","Como nación aliada en facción con un Reino Unido democrático, impón a Alemania una paz que desmilitarice Renania."],
["bba","By Beer Alone","As Germany, control Budweis, Tsingtao and Guinness directly or through a faction member.","Como Alemania, controla Budweis, Tsingtao y Guinness directamente o mediante un miembro de tu facción."],
["bba","By merit alone","Promote a unit commander to general and reach max level.","Asciende a un comandante de unidad a general y llévalo al nivel máximo."],
["bba","Snakes on a plane","As Brazil, capture Rome with paratroopers.","Como Brasil, toma Roma con paracaidistas."],

["aat","Sapmi united by the fire","As Sápmi, own and control every Sami core.","Como Sápmi, posee y controla todos los núcleos samis."],
["aat","Norway Jose","As Norway, own and control every Mexican core.","Como Noruega, posee y controla todos los núcleos mexicanos."],
["aat","Pinot Noirway","As Norway, own and control the state of Bourgogne.","Como Noruega, posee y controla el estado de Borgoña."],
["aat","Cheese your fighter.","As Norway, with Peder Jarlsberg as leader, own Telemark, Gloucestershire, Normandy, Lombardy and Holland.","Como Noruega, con Peder Jarlsberg como líder, posee Telemark, Gloucestershire, Normandía, Lombardía y Holanda."],
["aat","Med plutonium 2","As Denmark, nuke Sweden.","Como Dinamarca, lanza una bomba nuclear sobre Suecia."],
["aat","Everything is awesome.","As Denmark, reach maximum welfare spending after January 1st 1941 without being puppeted or capitulating.","Como Dinamarca, alcanza el gasto social máximo después del 1 de enero de 1941 sin ser títere ni capitular."],
["aat","The Danelaw","As Denmark, conquer England.","Como Dinamarca, conquista Inglaterra."],
["aat","Vinland","As Iceland, conquer Newfoundland.","Como Islandia, conquista Terranova."],
["aat","Brexit","As communist Iceland, make Wales, Scotland and Northern Ireland rise up against the UK.","Como Islandia comunista, haz que Gales, Escocia e Irlanda del Norte se alcen contra Reino Unido."],
["aat","Two Arms Against Tyranny.","As Finland, capitulate the Soviet Union while in a two-country faction with another Nordic nation.","Como Finlandia, haz capitular a la URSS en una facción de dos países con otra nación nórdica."],
["aat","Uralic brothers united","As Finland, have Hungary, Estonia, Sápmi, Karelia, Mari El, Udmurtia, Komi, Ostyak-Vogulia, Yamalia and Nenetsia as subjects.","Como Finlandia, ten como súbditos a Hungría, Estonia, Sápmi, Carelia, Mari El, Udmurtia, Komi, Ostiakia-Vogulia, Yamalia y Nenetsia."],
["aat","Lone Wolf","As Finland, form Greater Finland and own every core and claim without ever joining a faction.","Como Finlandia, forma la Gran Finlandia y posee todos tus núcleos y reclamaciones sin unirte nunca a una facción."],
["aat","No one crosses the finnish line","As non-aligned Finland, survive the Soviet Union until September 19th 1944 without ever losing control of a core.","Como Finlandia no alineada, resiste a la URSS hasta el 19 de septiembre de 1944 sin perder nunca el control de un núcleo."],
["aat","Danzig queen","As Sweden, own and control Danzig.","Como Suecia, posee y controla Danzig."],
["aat","Caramelldansen","As Sweden, puppet Japan.","Como Suecia, convierte a Japón en títere."],
["aat","The return of the king","As the exiled King of Gotland, retake mainland Sweden.","Como el rey exiliado en Gotland, recupera la Suecia continental."],
["aat","Satisfactory","Have at least one MIO per category at level 10 or higher.","Ten al menos una organización industrial militar (MIO) por categoría en nivel 10 o superior."],
["aat","Cod wars","As Iceland, capitulate the UK.","Como Islandia, haz capitular a Reino Unido."],
["aat","The Magic School Bus","Drive the Per Albin Bus to Cape Town.","Lleva el autobús de Per Albin hasta Ciudad del Cabo."],

["toa","Rumble in the Jungle","Own all Amazon states as any South American nation.","Posee todos los estados amazónicos con cualquier nación sudamericana."],
["toa","And the snake smoked","As Brazil in the Allies, capitulate Germany while controlling Berlin.","Como Brasil en los Aliados, haz capitular a Alemania controlando Berlín."],
["toa","Red Hot Chile Peppers","As communist Chile, control California.","Como Chile comunista, controla California."],
["toa","Bad Ending - The whole world is now Brazil","Control every state in the world.","Controla todos los estados del mundo."],
["toa","A Land of Fire","Tierra del Fuego means “The Land of Fire”. Steam hides the exact condition; guides suggest playing Chile or Argentina and getting nuclear weapons early.","Tierra del Fuego significa «la tierra de fuego». Steam oculta la condición exacta; las guías recomiendan jugar con Chile o Argentina y conseguir armas nucleares pronto."],
["toa","I’m Home!","As Brazil, occupy every core of Portugal.","Como Brasil, ocupa todos los núcleos de Portugal."],
["toa","Proactive Defense","As any communist South or Central American country, occupy Washington D.C.","Como cualquier país comunista de Sudamérica o Centroamérica, ocupa Washington D. C."],
["toa","The Merry Band","As communist Brazil ruled by Lampião, occupy Nottingham.","Como Brasil comunista gobernado por Lampião, ocupa Nottingham."],
["toa","Somehow He Has Returned","As Argentina, have Señor Hitler become country leader.","Como Argentina, haz que «Señor Hitler» llegue a líder del país."],
["toa","URSAL","Be communist and own all of South America.","Sé comunista y posee toda Sudamérica."],
["toa","Islas Malvinas","As Argentina, hold the Falkland Islands and South Georgia for 73 consecutive days.","Como Argentina, mantén las Malvinas y Georgia del Sur durante 73 días seguidos."],
["toa","Lamento Boliviano","As Argentina, own all of Latin America except Bolivia.","Como Argentina, posee toda Latinoamérica salvo Bolivia."],
["toa","Revenge for the triple alliance","As Paraguay, declare war on Argentina, Brazil and Uruguay within the same month.","Como Paraguay, declara la guerra a Argentina, Brasil y Uruguay en el mismo mes."],
["toa","The Dragon Rises","As “Welsh Argentina”, control Wales.","Como «Argentina galesa», controla Gales."],
["toa","King of What?","Have Jacques Antoine Bernard as King of Chile and control Paris.","Ten a Jacques Antoine Bernard como rey de Chile y controla París."],
["toa","True Condor Legion","As Chile, Bolivia, Peru, Ecuador, Venezuela or Colombia, send volunteers to Germany.","Como Chile, Bolivia, Perú, Ecuador, Venezuela o Colombia, envía voluntarios a Alemania."],
["toa","Chilean Empire","Control every mainland state bordering the Pacific in South America, North America and Asia.","Controla todos los estados continentales que dan al Pacífico en Sudamérica, Norteamérica y Asia."],
["toa","Reconquistadors","As Argentina or Chile, have a Conquistadors national spirit active while holding all Spanish cores.","Como Argentina o Chile, ten activo un espíritu nacional de conquistadores mientras controlas todos los núcleos españoles."],
["toa","Hispanics of the world unite!","As Chile, form the Hispanic Alliance with at least 8 “Hispanic” nations in your faction.","Como Chile, forma la Alianza Hispana con al menos 8 naciones «hispanas» en tu facción."],
["toa","Cisplatine War 2, Electric Boogaloo","As Brazil or Argentina, be in a faction with Uruguay while at war with Argentina or Brazil.","Como Brasil o Argentina, comparte facción con Uruguay estando en guerra con Argentina o Brasil."],
["toa","America Decolonized!","As Mapuche Chile, liberate all native peoples in North and South America.","Como Chile mapuche, libera a todos los pueblos indígenas de Norteamérica y Sudamérica."],

["gd","Antischluss","As Austria, control all German starting states.","Como Austria, controla todos los estados iniciales de Alemania."],
["gd","No Friends, Only Family","As Austria or Hungary led by a Habsburg, control the Swiss Plateau and have at least three other countries led by a Habsburg.","Como Austria o Hungría con un Habsburgo al frente, controla la meseta suiza y haz que al menos otros tres países estén liderados por un Habsburgo."],
["gd","Edelweiss Seedelweiss","As Austria, have a coastline, at least 10 battleships and Georg von Trapp as an admiral.","Como Austria, ten costa, al menos 10 acorazados y a Georg von Trapp como almirante."],
["gd","Otto-man","As Austria or Hungary led by Otto von Habsburg, control the starting states of Austria, Hungary, Czechoslovakia, Romania, Bulgaria, Greece and Turkey, plus Polish Galicia, Slovenia and Croatia.","Como Austria o Hungría con Otto von Habsburg, controla los estados iniciales de Austria, Hungría, Checoslovaquia, Rumanía, Bulgaria, Grecia y Turquía, además de la Galitzia polaca, Eslovenia y Croacia."],
["gd","Spaak of Genius","As Belgium with Paul-Henri Spaak as leader, research at least 10 different special projects.","Como Bélgica con Paul-Henri Spaak como líder, investiga al menos 10 proyectos especiales distintos."],
["gd","Brentry","As Austria, Belgium or the Netherlands, lead the EU and have the UK join your faction.","Como Austria, Bélgica o Países Bajos, lidera la UE y haz que Reino Unido se una a tu facción."],
["gd","The 501st Legion","As Belgium, have the Rexist Legion national spirit and control the capitals of all your starting neighbours.","Como Bélgica, ten el espíritu nacional «Rexist Legion» y controla las capitales de todos tus vecinos iniciales."],
["gd","Congolese Belgium","As Congo, break free from your old overlord and control all of its starting states.","Como el Congo, libérate de tu antiguo señor y controla todos sus estados iniciales."],
["gd","The Lenin Boys are Back in Town","As communist Hungary, bring back the Lenin Boys and take Leningrad.","Como Hungría comunista, recupera a los «Lenin Boys» y toma Leningrado."],
["gd","A Great Hunger","As Hungary, proclaim Greater Hungary and control all your historical states.","Como Hungría, proclama la Gran Hungría y controla todos tus estados históricos."],
["gd","Weltpolitik","As Germany, take control of all your former colonies.","Como Alemania, toma el control de todas tus antiguas colonias."],
["gd","Naval Arms Race","As Germany led by an admiral, capitulate the UK.","Como Alemania liderada por un almirante, haz capitular a Reino Unido."],
["gd","Woman in a High Castle","As Germany with a female leader, annex the USA including Alaska and Hawaii, or have an American puppet owning all US starting states.","Como Alemania con una líder, anexiona EE. UU. con Alaska y Hawái, o ten un títere estadounidense que posea todos sus estados iniciales."],
["gd","American Prometheus","As the USA, have Robert Oppenheimer complete the Manhattan Project.","Como EE. UU., haz que Robert Oppenheimer complete el Proyecto Manhattan."],
["gd","Tsar Bomba","As Tsarist Russia, complete the thermonuclear bomb special project.","Como la Rusia zarista, completa el proyecto especial de la bomba termonuclear."],
["gd","Super Heavy Metal","Complete the special projects for intercontinental bombers, land cruisers and super-heavy battleships.","Completa los proyectos especiales de bombarderos intercontinentales, cruceros terrestres y superacorazados."],
["gd","Backfire","As the UK, complete the medium-range ballistic missile special project, have a rocket site and be at war with Germany.","Como Reino Unido, completa el proyecto especial de misiles balísticos de alcance medio, ten una base de cohetes y mantente en guerra con Alemania."],
["gd","Dam It!","Successfully execute a dam-busting raid.","Ejecuta con éxito una incursión contra una presa."],
["gd","Bullseye","Successfully raid a landmark.","Lanza con éxito una incursión contra un monumento."],
["gd","The True Successor","As Luxembourg led by Charles Marx, control both Brussels and Trier.","Como Luxemburgo liderado por Charles Marx, controla Bruselas y Tréveris."],

["goe","Graveyard of Empires","As Afghanistan, Iran, Iraq or the Raj, control all starting provinces of the other three.","Como Afganistán, Irán, Irak o el Raj británico, controla todas las provincias iniciales de los otros tres."],
["goe","This achievement is dedicated to the brave soldiers of...","As Afghanistan, capitulate the Soviet Union.","Como Afganistán, haz capitular a la URSS."],
["goe","I have the high ground","As Afghanistan, control all Himalayan states.","Como Afganistán, controla todos los estados del Himalaya."],
["goe","Pesky Greeks","As Iran, own all Greek core states.","Como Irán, posee todos los estados núcleo griegos."],
["goe","The Sands of Time","As Iran, own the entire Middle East.","Como Irán, posee todo Oriente Medio."],
["goe","The Legacy of Cyrus the Great","As Iran, own the former states of the Achaemenid Empire.","Como Irán, posee los antiguos estados del Imperio aqueménida."],
["goe","From Tehran with Love","As Iran, guarantee Poland’s independence and make sure it doesn’t capitulate by 1945.","Como Irán, garantiza la independencia de Polonia y evita que capitule antes de 1945."],
["goe","Cradle of Civilization","As Iraq, build max infrastructure in all core states and reach 100% stability.","Como Irak, construye infraestructura máxima en todos tus estados núcleo y alcanza un 100 % de estabilidad."],
["goe","It’s Just Good Business","As the East India Company, own Suez and Panama.","Como la Compañía de las Indias Orientales, posee Suez y Panamá."],
["goe","Media Mughal","As the Mughal Empire, complete the Psychological Warfare agency upgrade, become spymaster and have at least 8 operatives.","Como el Imperio mogol, completa la mejora de agencia Guerra psicológica, conviértete en maestro de espías y ten al menos 8 agentes."],
["goe","Oh, how the turntables","As India, puppet the UK with Churchill as its leader.","Como la India, convierte en títere a Reino Unido con Churchill como líder."],
["goe","I’m just passing by","Own a state on every continent while at peace.","Posee un estado en cada continente estando en paz."],
["goe","That’s Sikh!","As Khalistan, control all starting Raj states.","Como Jalistán, controla todos los estados iniciales del Raj."],
["goe","Oil Sheiks","As Iraq, produce 500 oil.","Como Irak, produce 500 de petróleo."],
["goe","Revenge for 1925","As Iraq, form the Hashemite Arab Federation and defeat Saudi Arabia.","Como Irak, forma la Federación Árabe Hachemí y derrota a Arabia Saudí."],
["goe","Avenging the Sack of Baghdad","As Iraq, control the capital of Mongolia.","Como Irak, controla la capital de Mongolia."],
["goe","I shall either find a way or make one","Control Rome and have an elephant unit in the state.","Controla Roma y ten una unidad de elefantes en ese estado."],
["goe","Savior of the holy lands","As Afghanistan, own Palestine and Mecca.","Como Afganistán, posee Palestina y La Meca."],

["ncns","Doctrine of Choice","Complete three subdoctrines in the same track.","Completa tres subdoctrinas de la misma rama."],
["ncns","Manifesting a Better Tomorrow","Reach 100% faction manifest fulfilment.","Alcanza el 100 % de cumplimiento del manifiesto de facción."],
["ncns","Genghis Khan’t","As any Chinese country or Manchukuo, own and control all Mongolian core states.","Como cualquier país chino o Manchukuo, posee y controla todos los estados núcleo de Mongolia."],
["ncns","The Neverending Story","As a warlord, proclaim a new Chinese Empire.","Como señor de la guerra, proclama un nuevo Imperio chino."],
["ncns","Its all coming together","As China, fully control all core states alone or with subjects.","Como China, controla por completo todos tus estados núcleo, solo o con súbditos."],
["ncns","The Coast is Clear","As China, never lose a starting coastal state before September 2nd 1945.","Como China, no pierdas ningún estado costero inicial antes del 2 de septiembre de 1945."],
["ncns","A Fullmetal Brotherhood","As fascist China, control 300 steel, tungsten and chromium.","Como China fascista, controla 300 de acero, tungsteno y cromo."],
["ncns","Battle Royale","As Communist China, fight both China and Japan before 1940, starting each war within 90 days of the other, and capitulate them both.","Como China comunista, lucha contra China y Japón antes de 1940, con menos de 90 días entre el inicio de ambas guerras, y haz capitular a los dos."],
["ncns","The Winner takes it all","As the PRC, own and control all starting Chinese core states.","Como la RPC, posee y controla todos los estados núcleo chinos iniciales."],
["ncns","Master Infiltrator","As the PRC, don’t expand beyond Yan’an and infiltrate at least 5 Chinese states, flipping them when you attack the rest of China.","Como la RPC, no te expandas más allá de Yan’an e infiltra al menos 5 estados chinos para ponerlos de tu lado al atacar al resto de China."],
["ncns","Paradisus Paradoxum","As Japan, proclaim the creation of a Pure Buddhist Land.","Como Japón, proclama la creación de una Tierra Pura budista."],
["ncns","An Equivalent Exchange","As democratic Japan, complete the Foreign Exchange Allocation Policy focus and capitulate fascist Germany.","Como Japón democrático, completa el foco «Foreign Exchange Allocation Policy» y haz capitular a la Alemania fascista."],
["ncns","The Juannines","As the Philippines, have cores on and control all of Spain.","Como Filipinas, ten núcleos en toda España y contrólala."],
["ncns","Cobalt Sea","As the Philippines, launch nuclear missiles from a nuclear submarine.","Como Filipinas, lanza misiles nucleares desde un submarino nuclear."],
["ncns","Declare Military Emergency","Have a military emergency declared in the Philippines.","Haz que se declare una emergencia militar en Filipinas."],
["ncns","I Have Avenged You, Father!","As Zhang Xueliang, reclaim Mukden and revive the Beiyang government.","Como Zhang Xueliang, recupera Mukden y revive el gobierno de Beiyang."],
["ncns","The Sun Will Never Set","As Japan, proclaim the Eternal Empire and control all your core states.","Como Japón, proclama el Imperio eterno y controla todos tus estados núcleo."],

["pfot","I didn’t hear no bell","As democratic Czechoslovakia, become the Second Republic by losing the Sudetenland and granting autonomy to Slovakia, then capitulate Germany.","Como Checoslovaquia democrática, conviértete en la Segunda República perdiendo los Sudetes y concediendo autonomía a Eslovaquia, y después haz capitular a Alemania."],
["pfot","Ain’t like that now","As fascist Czechoslovakia, complete “Return to Democracy”.","Como Checoslovaquia fascista, completa «Return to Democracy»."],
["pfot","Czechoslovaustrohungarian Union","As communist Czechoslovakia, complete “Expand the Union” with Austria and Hungary in that union.","Como Checoslovaquia comunista, completa «Expand the Union» con Austria y Hungría dentro de esa unión."],
["pfot","First train home","As Czechoslovakia, own any state of the Trans-Siberian Railway.","Como Checoslovaquia, posee cualquier estado del Transiberiano."],
["pfot","Premyslid’s Dream","As monarchist Czechoslovakia, integrate Austria and the former Bohemian lands.","Como Checoslovaquia monárquica, integra Austria y las antiguas tierras de Bohemia."],
["pfot","Kuťáci","As Czechoslovakia, build every facility type.","Como Checoslovaquia, construye todos los tipos de instalación."],
["pfot","I’m playing both sides, so I always come out on top","Sell weapons to both sides of a civil war.","Vende armas a los dos bandos de una guerra civil."],

["taog","Old Zealand","As New Zealand, own and control Brabant (Zeeland) and Sjælland (Zealand).","Como Nueva Zelanda, posee y controla Brabante (Zelanda) y Sjælland (Selandia)."],
["taog","Maphilindia","As Indonesia or the Philippines, form Maphilindo and control all Indian core states.","Como Indonesia o Filipinas, forma Maphilindo y controla todos los estados núcleo de la India."],
["taog","Hail to the King","As Siam, form Greater Thailand before King Ananda turns 15.","Como Siam, forma la Gran Tailandia antes de que el rey Ananda cumpla 15 años."],
["taog","Thai fighters","As Siam, have 10 aces.","Como Siam, ten 10 ases."],
["taog","Noone Will Notice the Difference","As Indonesia, station Gustav Adolf Ilgen in Stockholm.","Como Indonesia, destina a Gustav Adolf Ilgen en Estocolmo."],
["taog","A Bridge too Far","As the UK, liberate Brabant and have Bernard Montgomery liberate Friesland while keeping a force in Arnhem.","Como Reino Unido, libera Brabante y haz que Bernard Montgomery libere Frisia manteniendo tropas en Arnhem."],
["taog","The rightside up","As Australia, own and fully control Jan Mayen.","Como Australia, posee y controla por completo Jan Mayen."],
["taog","Grand Siam","As Siam, capitulate 4 nations within one year.","Como Siam, haz capitular a 4 naciones en un año."],
["taog","Saving Private Bryansk","Capture a general in the state of Bryansk.","Captura a un general en el estado de Briansk."],
["taog","The Man of Medan","Sink 100 convoys as Indonesia.","Hunde 100 convoyes como Indonesia."],
["taog","ANZAC","As Australia or New Zealand, have an army HQ in Greece and keep Greece from capitulating until 1945.","Como Australia o Nueva Zelanda, ten un cuartel general de ejército en Grecia y evita que Grecia capitule antes de 1945."],
["taog","A Succulent Chinese Meal","As Australia, annex and own one province in China.","Como Australia, anexiona y posee una provincia en China."],
["taog","Java-Script","As the Dutch East Indies or Indonesia, research the Advanced Computing Machine and fully upgrade the Cryptology Department with your capital on Java.","Como las Indias Orientales Neerlandesas o Indonesia, investiga la computadora avanzada y mejora al máximo el departamento de criptología con la capital en Java."],
["taog","Waltzing Matilda","Deploy 25 heavy tank battalions as Australia.","Despliega 25 batallones de tanques pesados como Australia."],
["taog","The 7th State","As Australia, own and fully control New Zealand.","Como Australia, posee y controla por completo Nueva Zelanda."],
["taog","ThaiTanic","With any nation, sink Siam’s pride of the fleet.","Con cualquier nación, hunde el orgullo de la flota de Siam."],
["taog","Hunt for the Desert Fox","Capture Erwin Rommel.","Captura a Erwin Rommel."],
["taog","Et tu, Paulus?","Capture a field marshal.","Captura a un mariscal de campo."],
["taog","From Rags to Admiral Stripes","Promote a ship captain to admiral.","Asciende a un capitán de barco a almirante."]
];
const ACH = A.map(([k,t,en,es]) => ({k,t,en,es}));
const TOTAL = ACH.length;

const T = {
  es:{
    docTitle:"Ruleta de logros de Hearts of Iron IV",
    title:"Ruleta de logros",
    tally:(d,t)=>`${d} de ${t} logros completados`,
    tagLabel:"COMPLETADOS",
    spin:"Girar la ruleta", spinning:"Girando…",
    pool:n=> n===1 ? "1 logro en la ruleta." : `${n} logros en la ruleta.`,
    empty:"No queda ningún logro en la ruleta. Activa más DLC o desmarca alguno completado.",
    idle:"Pulsa «Girar la ruleta» para recibir tu próximo objetivo.",
    oHead:"ORDEN DE OPERACIONES", ref:"Ref.",
    assigned:"OBJETIVO", doneStamp:"COMPLETADO",
    markDone:"Marcar como completado", unmark:"Desmarcar", again:"Girar otra vez", wiki:"Guía en la wiki",
    stateDone:"Completado. Ya no saldrá en la ruleta.",
    ledger:"Cuaderno de campaña",
    dlcs:(on,n)=>`DLC en la ruleta: ${on} de ${n}`,
    all:"Activar todos", none:"Desactivar todos",
    search:"Buscar por nombre o descripción",
    stAll:"Todos", stPending:"Pendientes", stDone:"Completados", dlcAll:"Todos los DLC",
    count:(n)=> n===1 ? "1 logro" : `${n} logros`,
    nothing:"Ningún logro coincide con los filtros.",
    reset:"Reiniciar progreso", resetArm:"Pulsa otra vez para borrarlo todo",
    sndOn:"Sonido activado (pulsa para silenciar)", sndOff:"Sonido desactivado (pulsa para activarlo)",
    medals:"Condecoraciones", medalCount:(n,t)=>`${n} de ${t} medallas`, toast:(m,d)=>`Medalla obtenida: ${m} — ${d}`,
    export:"Exportar progreso", import:"Importar progreso",
    exTitle:"Tu código de progreso", exHelp:"Guárdalo en un lugar seguro. Pégalo en «Importar progreso» en otro navegador o dispositivo para recuperar tus logros y tu selección de DLC.",
    imTitle:"Importar progreso", imHelp:"Pega tu código de progreso. Sustituirá el progreso guardado en este navegador.",
    copy:"Copiar", copied:"Copiado en el portapapeles.", copyFail:"No se pudo copiar solo: el código ya está seleccionado, cópialo a mano.",
    load:"Cargar", close:"Cerrar", badCode:"El código no es válido. Comprueba que esté completo.",
    loaded:n=> n===1 ? "Progreso cargado: 1 logro completado." : `Progreso cargado: ${n} logros completados.`,
    foot1:"Página no oficial creada por un fan, gratuita y sin publicidad. No está afiliada, patrocinada ni respaldada por Paradox Interactive AB ni por Valve Corporation. Hearts of Iron IV, sus logros, nombres e imágenes pertenecen a sus titulares.",
    foot2:"Lista de 293 logros revisada con la versión 1.19.4 del juego (parche del 27 de octubre de 2026, con Thunder at Our Gates). Los logros de parches o DLC posteriores pueden no estar incluidos.",
    foot3:"Sin cookies, sin analítica y sin servicios de terceros. Tu progreso y tus ajustes se guardan solo en tu navegador. El alojamiento (GitHub Pages) registra la IP de los visitantes por seguridad.",
    card:["N","E","S","O"], dec:","
  },
  en:{
    docTitle:"Hearts of Iron IV achievement roulette",
    title:"Achievement roulette",
    tally:(d,t)=>`${d} of ${t} achievements completed`,
    tagLabel:"COMPLETED",
    spin:"Spin the wheel", spinning:"Spinning…",
    pool:n=> n===1 ? "1 achievement in the wheel." : `${n} achievements in the wheel.`,
    empty:"There are no achievements left in the wheel. Turn on more DLC or unmark a completed one.",
    idle:"Press “Spin the wheel” to get your next objective.",
    oHead:"OPERATION ORDER", ref:"Ref.",
    assigned:"OBJECTIVE", doneStamp:"COMPLETED",
    markDone:"Mark as completed", unmark:"Unmark", again:"Spin again", wiki:"Guide on the wiki",
    stateDone:"Completed. It won’t come up again.",
    ledger:"Field notebook",
    dlcs:(on,n)=>`DLC in the wheel: ${on} of ${n}`,
    all:"Turn all on", none:"Turn all off",
    search:"Search by name or description",
    stAll:"All", stPending:"Pending", stDone:"Completed", dlcAll:"All DLC",
    count:(n)=> n===1 ? "1 achievement" : `${n} achievements`,
    nothing:"No achievement matches these filters.",
    reset:"Reset progress", resetArm:"Press again to erase everything",
    sndOn:"Sound on (press to mute)", sndOff:"Sound off (press to turn on)",
    medals:"Decorations", medalCount:(n,t)=>`${n} of ${t} medals`, toast:(m,d)=>`Medal awarded: ${m} — ${d}`,
    export:"Export progress", import:"Import progress",
    exTitle:"Your progress code", exHelp:"Keep it somewhere safe. Paste it into “Import progress” on another browser or device to restore your achievements and DLC selection.",
    imTitle:"Import progress", imHelp:"Paste your progress code. It will replace the progress saved in this browser.",
    copy:"Copy", copied:"Copied to the clipboard.", copyFail:"Couldn’t copy automatically: the code is selected, copy it by hand.",
    load:"Load", close:"Close", badCode:"That code isn’t valid. Check that it’s complete.",
    loaded:n=> n===1 ? "Progress loaded: 1 achievement completed." : `Progress loaded: ${n} achievements completed.`,
    foot1:"Unofficial fan-made page, free and ad-free. It is not affiliated with, sponsored by or endorsed by Paradox Interactive AB or Valve Corporation. Hearts of Iron IV, its achievements, names and images belong to their respective owners.",
    foot2:"List of 293 achievements checked against game version 1.19.4 (patch of 27 October 2026, with Thunder at Our Gates). Achievements from later patches or DLC may not be included.",
    foot3:"No cookies, no analytics and no third-party services. Your progress and settings are stored only in your browser. The hosting (GitHub Pages) logs visitors’ IP addresses for security.",
    card:["N","E","S","W"], dec:"."
  }
};

const store = {
  get(k,d){ try{ const v = localStorage.getItem(k); return v==null ? d : JSON.parse(v); }catch(e){ return d; } },
  set(k,v){ try{ localStorage.setItem(k, JSON.stringify(v)); }catch(e){} }
};
const VALID = new Set(ACH.map(a=>a.t));
const own = (o,k)=> typeof k === "string" && Object.prototype.hasOwnProperty.call(o,k);
const asList = v=> Array.isArray(v) ? v : null;
let lang = store.get("hoi4r.lang","es"); if(!own(T,lang)) lang = "es";
let done = new Set((asList(store.get("hoi4r.done",[])) || []).filter(t=> typeof t === "string" && VALID.has(t)));
let enabled = new Set((asList(store.get("hoi4r.dlc",ORDER)) || ORDER).filter(k=> ORDER.includes(k)));
const saveDone = ()=> store.set("hoi4r.done",[...done]);
const saveDlc = ()=> store.set("hoi4r.dlc",[...enabled]);

const $ = s => document.querySelector(s);
const tr = ()=> T[lang];
const desc = a => lang==="es" ? a.es : a.en;
const dlcName = k => DLC[k][lang];

function hash(s){ let h=2166136261; for(let i=0;i<s.length;i++){ h^=s.charCodeAt(i); h=Math.imul(h,16777619); } return h>>>0; }
const SHUFFLED = ACH.slice().sort((a,b)=>hash(a.t)-hash(b.t));


/* ---------- Efectos de sonido (sintetizados con Web Audio, sin archivos externos) ---------- */
const SND = (()=>{
  let ctx = null, master = null, on = store.get("hoi4r.sound", true) !== false, lastTick = 0;
  function ac(){
    if(!on) return null;
    if(!ctx){ const C = window.AudioContext || window.webkitAudioContext; if(!C) return null; ctx = new C(); master = ctx.createGain(); master.gain.value = .55; master.connect(ctx.destination); }
    if(ctx.state === "suspended") ctx.resume();
    return ctx;
  }
  function env(g, t, a, d, v){ g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(v, t+a); g.gain.exponentialRampToValueAtTime(.0001, t+a+d); }
  function tone(f, dur, type, vol, when, f2, filt){
    const c = ac(); if(!c) return; const t = c.currentTime + (when||0);
    const o = c.createOscillator(), g = c.createGain(); o.type = type||"sine"; o.frequency.setValueAtTime(f, t);
    if(f2) o.frequency.exponentialRampToValueAtTime(f2, t+dur);
    let node = o;
    if(filt){ const bq = c.createBiquadFilter(); bq.type = "lowpass"; bq.frequency.value = filt; o.connect(bq); node = bq; }
    node.connect(g); g.connect(master); env(g, t, .006, dur, vol); o.start(t); o.stop(t+dur+.05);
  }
  function noise(dur, vol, when, type, freq, q){
    const c = ac(); if(!c) return; const t = c.currentTime + (when||0);
    const len = Math.max(1, Math.floor(c.sampleRate*dur)), buf = c.createBuffer(1, len, c.sampleRate), d = buf.getChannelData(0);
    for(let i=0;i<len;i++) d[i] = Math.random()*2-1;
    const s = c.createBufferSource(); s.buffer = buf;
    const bq = c.createBiquadFilter(); bq.type = type||"bandpass"; bq.frequency.value = freq||1000; bq.Q.value = q||1;
    const g = c.createGain(); s.connect(bq); bq.connect(g); g.connect(master); env(g, t, .004, dur, vol); s.start(t); s.stop(t+dur+.05);
    return g;
  }
  return {
    get on(){ return on; },
    set(v){ on = !!v; store.set("hoi4r.sound", on); if(!on && ctx) ctx.suspend(); },
    click(){ noise(.03,.35,0,"highpass",2200,.7); tone(1400,.03,"square",.05); },
    tick(){ const n = performance.now(); if(n-lastTick < 38) return; lastTick = n; noise(.018,.28,0,"bandpass",3200,3); tone(2100,.012,"square",.03); },
    windup(){ for(let i=0;i<5;i++) noise(.025,.22,i*.045,"bandpass",1800+i*250,4); },
    thunk(){ tone(150,.22,"sine",.5,0,70); noise(.09,.35,0,"lowpass",500,.7); noise(.03,.25,.01,"bandpass",2600,5); },
    stamp(){ noise(.11,.6,0,"lowpass",420,.8); tone(95,.16,"sine",.45,0,55); noise(.05,.18,.02,"bandpass",1500,2); },
    scratch(when){ const w = when||0; for(let i=0;i<7;i++) noise(.09,.13+.03*(i%2),w+i*.1,"bandpass",3200+(i%3)*500,2.2); },
    unmark(){ noise(.25,.12,0,"bandpass",900,1.4); },
    medal(when){ const w = when||0, notes = [392,523.3,659.3,784];
      notes.forEach((f,i)=>{ tone(f,.22,"sawtooth",.13,w+i*.13,null,1800); tone(f*2,.22,"triangle",.04,w+i*.13); });
      [523.3,659.3,784,1046.5].forEach(f=> tone(f,.9,"sawtooth",.09,w+.55,null,2200));
      noise(.6,.05,w+.55,"highpass",6000,.5); }
  };
})();

let pool = [];
let rot = 0, spinning = false, current = null;
function rebuildPool(){ pool = SHUFFLED.filter(a=>!done.has(a.t) && enabled.has(a.k)); }

/* ---------- Brújula (canvas) ---------- */
const cv = $("#dial"), ctx = cv.getContext("2d");
let S = 0, dpr = 1, glass = "#141711";
const STENCIL = '"Big Shoulders Stencil Display", Impact, sans-serif';
function readTheme(){ glass = getComputedStyle(document.documentElement).getPropertyValue("--glass").trim() || "#141711"; }
function resize(){
  const r = cv.getBoundingClientRect();
  if(!r.width) return;
  dpr = Math.min(window.devicePixelRatio||1, 2);
  S = r.width;
  cv.width = Math.round(S*dpr); cv.height = Math.round(S*dpr);
  draw();
}
function indexAt(){
  const n = pool.length; if(!n) return -1;
  const a = TAU/n; const x = ((-rot)%TAU + TAU)%TAU;
  return Math.min(n-1, Math.floor(x/a));
}
function ring(c,r1,r2){ ctx.beginPath(); ctx.arc(c,c,r1,0,TAU); ctx.arc(c,c,r2,0,TAU,true); }
function draw(){
  if(!S) return;
  ctx.setTransform(dpr,0,0,dpr,0,0);
  ctx.clearRect(0,0,S,S);
  const c = S/2, R = c-1;
  const rb = R*0.9, rbi = R*0.755, ro = R*0.742, ri = R*0.53;

  // Caja de latón
  const g = ctx.createRadialGradient(c-R*.35, c-R*.42, R*.05, c, c, R);
  g.addColorStop(0,"#f4dc92"); g.addColorStop(.42,"#b9933f"); g.addColorStop(.82,"#7a5d21"); g.addColorStop(1,"#4a3711");
  ctx.beginPath(); ctx.arc(c,c,R,0,TAU); ctx.fillStyle = g; ctx.fill();
  // Moleteado
  ctx.strokeStyle = "rgba(38,26,6,.5)"; ctx.lineWidth = 1;
  for(let i=0;i<180;i++){ const a = i*TAU/180; ctx.beginPath(); ctx.moveTo(c+(R-.5)*Math.cos(a), c+(R-.5)*Math.sin(a)); ctx.lineTo(c+(R-R*.035)*Math.cos(a), c+(R-R*.035)*Math.sin(a)); ctx.stroke(); }
  ctx.beginPath(); ctx.arc(c,c,R*.955,0,TAU); ctx.lineWidth = 1.2; ctx.strokeStyle = "rgba(255,240,190,.45)"; ctx.stroke();

  // Bisel pavonado
  ctx.beginPath(); ctx.arc(c,c,rb,0,TAU); ctx.fillStyle = "#1c1b15"; ctx.fill();
  ctx.beginPath(); ctx.arc(c,c,rb,0,TAU); ctx.lineWidth = 2; ctx.strokeStyle = "#5b4516"; ctx.stroke();
  ctx.strokeStyle = "rgba(232,222,190,.82)";
  for(let d=0; d<360; d+=5){
    const a = (d-90)*Math.PI/180;
    const L = d%30===0 ? R*.04 : (d%10===0 ? R*.028 : R*.017);
    ctx.lineWidth = d%30===0 ? 1.6 : 1;
    ctx.beginPath(); ctx.moveTo(c+(rb-2)*Math.cos(a), c+(rb-2)*Math.sin(a)); ctx.lineTo(c+(rb-2-L)*Math.cos(a), c+(rb-2-L)*Math.sin(a)); ctx.stroke();
  }
  ctx.textAlign = "center"; ctx.textBaseline = "middle";
  const cards = tr().card;
  for(let d=0; d<360; d+=30){
    const a = (d-90)*Math.PI/180, rr = rbi + R*.042;
    ctx.save(); ctx.translate(c+rr*Math.cos(a), c+rr*Math.sin(a)); ctx.rotate(a+Math.PI/2);
    if(d%90===0){ ctx.font = `800 ${R*.078}px ${STENCIL}`; ctx.fillStyle = d===0 ? "#d24a3c" : "#efe6c8"; ctx.fillText(cards[d/90],0,0); }
    else { ctx.font = `700 ${R*.045}px ${STENCIL}`; ctx.fillStyle = "rgba(232,222,190,.78)"; ctx.fillText(String(d),0,0); }
    ctx.restore();
  }

  // Rosa giratoria con los logros
  const n = pool.length;
  ctx.beginPath(); ctx.arc(c,c,ro+1.5,0,TAU); ctx.fillStyle = "#0e0e0a"; ctx.fill();
  if(n===0){
    ring(c,ro,ri); ctx.fillStyle = "#3a3a30"; ctx.fill("evenodd");
  }else{
    const a = TAU/n, sel = indexAt();
    for(let i=0;i<n;i++){
      const s = -Math.PI/2 + rot + i*a, e = s + a + (n>1 ? .002 : 0);
      ctx.beginPath(); ctx.arc(c,c,ro,s,e); ctx.arc(c,c,ri,e,s,true); ctx.closePath();
      ctx.fillStyle = DLC[pool[i].k].c; ctx.globalAlpha = (i===sel) ? 1 : .78; ctx.fill();
    }
    ctx.globalAlpha = 1;
    if(n>1 && n<=160){
      ctx.strokeStyle = "rgba(14,13,9,.55)"; ctx.lineWidth = n>80 ? .6 : 1.2;
      for(let i=0;i<n;i++){ const s = -Math.PI/2 + rot + i*a; ctx.beginPath(); ctx.moveTo(c+ri*Math.cos(s), c+ri*Math.sin(s)); ctx.lineTo(c+ro*Math.cos(s), c+ro*Math.sin(s)); ctx.stroke(); }
    }
    const sh = ctx.createRadialGradient(c,c,ri,c,c,ro);
    sh.addColorStop(0,"rgba(0,0,0,.4)"); sh.addColorStop(.28,"rgba(0,0,0,0)"); sh.addColorStop(.82,"rgba(0,0,0,0)"); sh.addColorStop(1,"rgba(0,0,0,.35)");
    ring(c,ro,ri); ctx.fillStyle = sh; ctx.fill("evenodd");
    if(sel>=0){
      const s = -Math.PI/2 + rot + sel*a;
      ctx.beginPath(); ctx.arc(c,c,ro-1,s,s+a); ctx.arc(c,c,ri+1,s+a,s,true); ctx.closePath();
      ctx.lineWidth = 2; ctx.strokeStyle = "#f3dc92"; ctx.stroke();
    }
  }

  // Cristal central con la rosa de los vientos
  const gl = ctx.createRadialGradient(c,c-ri*.2,ri*.1,c,c,ri);
  gl.addColorStop(0,"#22261c"); gl.addColorStop(1,glass);
  ctx.beginPath(); ctx.arc(c,c,ri-2,0,TAU); ctx.fillStyle = gl; ctx.fill();
  ctx.save(); ctx.translate(c,c); ctx.rotate(rot);
  for(let k=0;k<8;k++){
    const len = k%2===0 ? ri*.84 : ri*.52, w = k%2===0 ? ri*.085 : ri*.06;
    ctx.save(); ctx.rotate(k*TAU/8);
    ctx.beginPath(); ctx.moveTo(0,-len); ctx.lineTo(w,0); ctx.lineTo(0,w*.6); ctx.lineTo(-w,0); ctx.closePath();
    ctx.fillStyle = k===0 ? "rgba(210,74,60,.32)" : "rgba(239,230,200,.07)"; ctx.fill();
    ctx.restore();
  }
  ctx.restore();
  ctx.strokeStyle = "rgba(239,230,200,.07)"; ctx.lineWidth = 1;
  [0.9,0.62].forEach(f=>{ ctx.beginPath(); ctx.arc(c,c,(ri-2)*f,0,TAU); ctx.stroke(); });
  ctx.beginPath(); ctx.arc(c,c,ri-2,0,TAU); ctx.lineWidth = 3; ctx.strokeStyle = "#a88637"; ctx.stroke();
  ctx.beginPath(); ctx.arc(c,c,ri-4.5,0,TAU); ctx.lineWidth = 1; ctx.strokeStyle = "rgba(0,0,0,.6)"; ctx.stroke();
}

/* ---------- Lectura central ---------- */
const roDlc = $("#roDlc"), roTitle = $("#roTitle"), roState = $("#roState");
function setReadout(a, mode){
  roTitle.className = "ro-title";
  if(!a){
    roDlc.textContent = "";
    roTitle.textContent = pool.length ? tr().idle : tr().empty;
    roTitle.classList.add("idle");
    roState.textContent = "";
    return;
  }
  roDlc.textContent = dlcName(a.k);
  roTitle.textContent = a.t;
  const L = a.t.length;
  if(L>46) roTitle.classList.add("long"); else if(L>26) roTitle.classList.add("mid");
  roState.textContent = "";
  if(mode==="result" && done.has(a.t)) roTitle.classList.add("done");
}

/* ---------- Giro ---------- */
const spinBtn = $("#spinBtn");
function spin(){
  if(spinning || !pool.length) return;
  const n = pool.length, a = TAU/n;
  const t = Math.floor(Math.random()*n);
  const jitter = (Math.random()-.5)*0.6*a;
  const target = -((t+0.5)*a + jitter);
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const turns = reduce ? 1 : 6 + Math.floor(Math.random()*3);
  const delta = ((target-rot)%TAU + TAU)%TAU;
  const r0 = rot, r1 = rot + turns*TAU + delta;
  const dur = reduce ? 700 : 5400 + Math.random()*800;
  const t0 = performance.now();
  spinning = true; updateSpinBtn(); SND.windup();
  $("#result").setAttribute("aria-busy","true");
  let last = -1;
  function frame(now){
    const p = Math.min(1,(now-t0)/dur);
    const e = 1 - Math.pow(1-p,4);
    rot = r0 + (r1-r0)*e;
    draw();
    const i = indexAt();
    if(i!==last){ last = i; if(pool[i]) setReadout(pool[i],"spin"); if(p < .985) SND.tick(); }
    if(p<1){ requestAnimationFrame(frame); return; }
    rot = r1 % TAU;
    spinning = false;
    current = pool[indexAt()] || null;
    draw(); setReadout(current,"result"); showResult(); updateSpinBtn(); SND.thunk();
    $("#result").removeAttribute("aria-busy");
    if(window.innerWidth < 920){ $("#result").scrollIntoView({block:"nearest", behavior: reduce ? "auto" : "smooth"}); }
  }
  requestAnimationFrame(frame);
}
function updateSpinBtn(){
  spinBtn.textContent = spinning ? tr().spinning : tr().spin;
  spinBtn.disabled = spinning || !pool.length;
}

/* ---------- Orden de operaciones ---------- */
function wikiUrl(t){ return "https://hoi4.paradoxwikis.com/Achievements#" + encodeURIComponent(t.replace(/’/g,"'").replace(/ /g,"_")); }
const pad3 = n => String(n).padStart(3,"0");
function showResult(){
  const card = $("#result");
  if(!current){ card.hidden = true; return; }
  const isDone = done.has(current.t);
  card.hidden = false;
  $("#oHead").textContent = tr().oHead;
  $("#oRef").textContent = `${tr().ref} ${pad3(ACH.indexOf(current)+1)}/${TOTAL}`;
  $("#resSw").style.background = DLC[current.k].c;
  $("#resDlc").textContent = dlcName(current.k);
  $("#resTitle").textContent = current.t;
  $("#resDesc").textContent = desc(current);
  const st = $("#stamp");
  st.textContent = isDone ? tr().doneStamp : tr().assigned;
  st.classList.toggle("ok", isDone);
  const b = $("#resDone");
  b.textContent = isDone ? tr().unmark : tr().markDone;
  b.classList.toggle("undo", isDone);
  const w = $("#resWiki"); w.textContent = tr().wiki; w.href = wikiUrl(current.t);
}

/* ---------- Condecoraciones: una medalla por bloque completado (dibujos fieles a las reales) ---------- */
const f1 = n => (+n).toFixed(1);
function polyStar(cx,cy,n,r1,r2,rot){
  let d = "";
  for(let i=0;i<n*2;i++){ const r = i%2 ? r2 : r1, a = (rot||0) + i*Math.PI/n; d += (i?"L":"M") + f1(cx+r*Math.sin(a)) + " " + f1(cy-r*Math.cos(a)); }
  return d + "Z";
}
// Brazo hacia arriba (coordenadas locales, centro en 0,0) según el tipo de cruz
const ARM = {
  pattee:(r)=>`M${f1(-r*.17)} 0L${f1(-r*.5)} ${f1(-r)}L${f1(r*.5)} ${f1(-r)}L${f1(r*.17)} 0Z`,
  patteeC:(r)=>`M${f1(-r*.17)} 0L${f1(-r*.48)} ${f1(-r*.92)}Q0 ${f1(-r*1.06)} ${f1(r*.48)} ${f1(-r*.92)}L${f1(r*.17)} 0Z`,
  urdy:(r)=>`M${f1(-r*.2)} 0L${f1(-r*.2)} ${f1(-r*.72)}L0 ${f1(-r)}L${f1(r*.2)} ${f1(-r*.72)}L${f1(r*.2)} 0Z`,
  trefoil:(r)=>`M${f1(-r*.2)} 0L${f1(-r*.2)} ${f1(-r*.6)}A${f1(r*.17)} ${f1(r*.17)} 0 1 1 ${f1(-r*.12)} ${f1(-r*.88)}A${f1(r*.17)} ${f1(r*.17)} 0 1 1 ${f1(r*.12)} ${f1(-r*.88)}A${f1(r*.17)} ${f1(r*.17)} 0 1 1 ${f1(r*.2)} ${f1(-r*.6)}L${f1(r*.2)} 0Z`,
  fleur:(r)=>`M${f1(-r*.18)} 0L${f1(-r*.3)} ${f1(-r*.62)}C${f1(-r*.52)} ${f1(-r*.62)} ${f1(-r*.5)} ${f1(-r*.9)} ${f1(-r*.3)} ${f1(-r*.84)}C${f1(-r*.22)} ${f1(-r*.84)} ${f1(-r*.12)} ${f1(-r*.88)} 0 ${f1(-r)}C${f1(r*.12)} ${f1(-r*.88)} ${f1(r*.22)} ${f1(-r*.84)} ${f1(r*.3)} ${f1(-r*.84)}C${f1(r*.5)} ${f1(-r*.9)} ${f1(r*.52)} ${f1(-r*.62)} ${f1(r*.3)} ${f1(-r*.62)}L${f1(r*.18)} 0Z`,
  cleft:(r)=>`M${f1(-r*.12)} 0L${f1(-r*.34)} ${f1(-r*.94)}L0 ${f1(-r*.72)}L${f1(r*.34)} ${f1(-r*.94)}L${f1(r*.12)} 0Z`
};
function cross(cx,cy,type,r,fill,edge,n,inner){
  n = n||4;
  const rots = Array.from({length:n},(_,i)=>i*360/n);
  const arm = a=>`<path d="${ARM[type](r)}" transform="translate(${cx} ${cy}) rotate(${a})"`;
  let s = rots.map(a=>arm(a)+` fill="none" stroke="${edge}" stroke-width="2.6" stroke-linejoin="round"/>`).join("")
        + rots.map(a=>arm(a)+` fill="${fill}"/>`).join("");
  if(inner) s += rots.map(a=>`<path d="${ARM[type](r*.84)}" transform="translate(${cx} ${cy}) rotate(${a})" fill="${inner}"/>`).join("");
  else s += rots.map(a=>`<path d="${ARM[type](r*.8)}" transform="translate(${cx} ${cy}) rotate(${a})" fill="none" stroke="rgba(255,255,255,.3)" stroke-width=".7"/>`).join("");
  return s;
}
function swords(cx,cy,r){   // dos espadas cruzadas con la punta hacia arriba, asomando entre los brazos
  const L = r*1.02, s = Math.SQRT1_2;
  let o = "";
  [[-1,1],[1,1]].forEach(([sx])=>{
    const x1 = cx - sx*L*s, y1 = cy + L*s, x2 = cx + sx*L*s, y2 = cy - L*s;
    o += `<path d="M${f1(x1)} ${f1(y1)}L${f1(x2)} ${f1(y2)}" stroke="#4a3610" stroke-width="3.4" stroke-linecap="round"/><path d="M${f1(x1)} ${f1(y1)}L${f1(x2)} ${f1(y2)}" stroke="url(#mSilver)" stroke-width="2" stroke-linecap="round"/>`;
    const gx = cx - sx*L*s*.62, gy = cy + L*s*.62;
    o += `<path d="M${f1(gx-4*s)} ${f1(gy-4*s*sx*-1)}L${f1(gx+4*s)} ${f1(gy+4*s*sx*-1)}" stroke="url(#mGold)" stroke-width="2.2" stroke-linecap="round"/>`;
  });
  return o;
}
function crownSVG(cx,y,w,fill){   // corona de suspensión
  const h = w*.72;
  return `<path d="M${f1(cx-w/2)} ${f1(y+h)}L${f1(cx-w/2-1)} ${f1(y+h*.35)}L${f1(cx-w*.25)} ${f1(y+h*.6)}L${f1(cx)} ${f1(y+h*.15)}L${f1(cx+w*.25)} ${f1(y+h*.6)}L${f1(cx+w/2+1)} ${f1(y+h*.35)}L${f1(cx+w/2)} ${f1(y+h)}Z" fill="${fill}" stroke="#4a3610" stroke-width=".7"/>`
    + `<rect x="${f1(cx-w/2)}" y="${f1(y+h-1)}" width="${f1(w)}" height="3" rx=".8" fill="${fill}" stroke="#4a3610" stroke-width=".6"/>`
    + `<circle cx="${cx}" cy="${f1(y+h*.08)}" r="1.6" fill="${fill}" stroke="#4a3610" stroke-width=".5"/>`
    + [-w*.25,0,w*.25].map(dx=>`<circle cx="${f1(cx+dx)}" cy="${f1(y+h+.5)}" r=".8" fill="#b3202c"/>`).join("");
}
function ringSusp(y1,y2,metal){  // anilla entre la cinta y la medalla
  return `<rect x="47" y="${y1}" width="6" height="5" rx="1.5" fill="${metal}" stroke="#4a3610" stroke-width=".5"/><circle cx="50" cy="${f1((y1+5+y2)/2)}" r="${f1((y2-y1-5)/2)}" fill="none" stroke="#4a3610" stroke-width="2.6"/><circle cx="50" cy="${f1((y1+5+y2)/2)}" r="${f1((y2-y1-5)/2)}" fill="none" stroke="${metal}" stroke-width="1.6"/>`;
}
function wreath(cx,cy,rx,ry,col,berry){  // corona vegetal de suspensión
  let s = "";
  for(let i=0;i<14;i++){
    const a = Math.PI*(.15 + .7*i/13) * (i%2?1:1), side = i<7 ? -1 : 1, t = (i%7)/6;
    const ang = Math.PI*(1 - t*.92);
    const x = cx + side*rx*Math.cos(ang)*-1, y = cy + ry*Math.sin(ang)*-.9 + ry*.25;
    s += `<ellipse cx="${f1(x)}" cy="${f1(y)}" rx="2.6" ry="1.3" transform="rotate(${f1(side*(30+t*60))} ${f1(x)} ${f1(y)})" fill="${col}" stroke="rgba(0,0,0,.35)" stroke-width=".3"/>`;
  }
  if(berry) s += `<circle cx="${cx}" cy="${f1(cy+ry*.9)}" r="1.4" fill="${berry}"/>`;
  return s;
}
function lion(cx,cy,s,col){  // león rampante esquemático
  return `<path transform="translate(${cx} ${cy}) scale(${s})" fill="${col}" d="M-2 5L-2.6 2L-4 1.4L-3 -.6L-1.4 -.4L-.6 -2.6L-1.6 -4L.2 -4.6L1.6 -3.4L1.2 -1.6L2.6 -1L1.8 .6L3 1.6L3.6 4.2L2.2 3.2L1.4 4.8L.4 2.6L-.6 5Z"/>`;
}
function arcText(k,cx,cy,r,txt,size,col,top){
  const id = `tp-${k}`, d = top ? `M${f1(cx-r)} ${cy}A${r} ${r} 0 0 1 ${f1(cx+r)} ${cy}` : `M${f1(cx-r)} ${cy}A${r} ${r} 0 0 0 ${f1(cx+r)} ${cy}`;
  return `<path id="${id}" d="${d}" fill="none"/><text style="font:bold ${size}px Georgia,serif; fill:${col}; letter-spacing:.04em"><textPath href="#${id}" startOffset="50%" text-anchor="middle">${txt}</textPath></text>`;
}
const CX = 50, CY = 112, R = 34;

const MEDALS = {
  base:{es:"Medalla de la Victoria de la Segunda Guerra Mundial", en:"World War II Victory Medal",
    rib:[["url(#rainbow)",9.5],["#f2f2f2",.8],["#c1272d",13.4],["#f2f2f2",.8],["url(#rainbow)",9.5]],
    draw:k=> ringSusp(52,76,"url(#mBronze)")
      + `<circle cx="${CX}" cy="${CY}" r="${R*.92}" fill="url(#mBronze)" stroke="#4a2c12" stroke-width="1"/><circle cx="${CX}" cy="${CY}" r="${R*.82}" fill="none" stroke="rgba(255,240,200,.35)" stroke-width=".8"/>`
      + Array.from({length:9},(_,i)=>{ const a=(-70+i*17.5)*Math.PI/180; return `<path d="M${CX} ${CY+8}L${f1(CX+R*.78*Math.sin(a))} ${f1(CY+8-R*.78*Math.cos(a))}" stroke="rgba(90,55,20,.35)" stroke-width=".7"/>`; }).join("")
      + `<path d="M${CX-14} ${CY+9}Q${CX} ${CY+3} ${CX+14} ${CY+9}" fill="none" stroke="rgba(90,55,20,.5)" stroke-width=".8"/>`
      + `<g fill="#7a4c22" opacity=".9"><circle cx="${CX-1.5}" cy="${CY-17}" r="3"/><path d="M${CX-5} ${CY-13}C${CX-6} ${CY-6} ${CX-8} ${CY+4} ${CX-9} ${CY+14}H${CX+5}C${CX+4} ${CY+5} ${CX+3} ${CY-6} ${CX+2} ${CY-13}Z"/><path d="M${CX+6} ${CY+14}a4 3.4 0 0 1 8 0Z"/></g>`
      + `<path d="M${CX+2} ${CY-10}L${CX+10} ${CY-4}M${CX-5} ${CY-9}L${CX-12} ${CY-2}" stroke="#7a4c22" stroke-width="1.6" stroke-linecap="round"/>`
      + `<text x="${CX}" y="${CY+22}" text-anchor="middle" style="font:bold 4.6px Georgia,serif; fill:#5a3410; letter-spacing:.06em">WORLD WAR II</text>`},
  x:{es:"Cruz de Hierro (modelo de 1914)", en:"Iron Cross (1914 pattern)",
    rib:[["#111",2],["#f2f2f2",3],["#111",20],["#f2f2f2",3],["#111",2]],
    draw:k=> ringSusp(52,76,"url(#mSilver)") + cross(CX,CY,"pattee",R,"url(#mSilver)","#5c6166",4,"url(#mIron)")
      + crownSVG(CX,CY-R*.66,9,"url(#mSilver)")
      + `<text x="${CX}" y="${CY+3.2}" text-anchor="middle" style="font:bold 9px Georgia,serif; fill:#d9dde0">W</text><text x="${CX}" y="${CY+R*.76}" text-anchor="middle" style="font:bold 5.6px Georgia,serif; fill:#d9dde0">1914</text>`},
  tfv:{es:"Cruz Victoria", en:"Victoria Cross", rib:[["#7d1124",1]],
    draw:k=> `<rect x="30" y="50" width="40" height="6" rx="1" fill="url(#mBronze)" stroke="#4a2c12" stroke-width=".6"/>`
      + Array.from({length:7},(_,i)=>`<ellipse cx="${34+i*5.3}" cy="53" rx="2" ry="1" fill="rgba(70,40,15,.5)"/>`).join("")
      + `<path d="M44 56L50 ${CY-R+2}L56 56" fill="none" stroke="#4a2c12" stroke-width="3"/><path d="M44 56L50 ${CY-R+2}L56 56" fill="none" stroke="url(#mBronze)" stroke-width="1.8"/>`
      + cross(CX,CY,"pattee",R,"url(#mBronze)","#4a2c12")
      + `<circle cx="${CX}" cy="${CY-2}" r="9.5" fill="rgba(70,40,15,.18)"/>` + crownSVG(CX,CY-8,10,"#7a4c22") + lion(CX,CY-11,1.15,"#6a3e18")
      + `<path d="M${CX-13} ${CY+8}h26l-2 3 2 3h-26l2-3z" fill="url(#mBronze)" stroke="#4a2c12" stroke-width=".5"/><text x="${CX}" y="${CY+12.4}" text-anchor="middle" style="font:bold 3.6px Georgia,serif; fill:#4a2c12; letter-spacing:.05em">FOR VALOUR</text>`},
  dod:{es:"Orden de Miguel el Valiente", en:"Order of Michael the Brave",
    rib:[["#d9b43a",3],["#7d1630",26],["#d9b43a",3]],
    draw:k=> ringSusp(52,66,"url(#mGold)") + crownSVG(CX,65,14,"url(#mGold)") + cross(CX,CY,"fleur",R,"#26408a","#c9a23b")
      + `<circle cx="${CX}" cy="${CY}" r="9" fill="url(#mGold)" stroke="#7a5a14" stroke-width=".8"/><text x="${CX}" y="${CY+3.2}" text-anchor="middle" style="font:italic bold 8px Georgia,serif; fill:#5a3e0a">FF</text>`},
  wtt:{es:"Orden del Cielo Azul y el Sol Blanco", en:"Order of the Blue Sky and White Sun",
    rib:[["#c1272d",2.5],["#1f3f8f",2.5],["#f2f2f2",22],["#1f3f8f",2.5],["#c1272d",2.5]],
    draw:k=> ringSusp(52,76,"url(#mGold)") + `<path d="${polyStar(CX,CY,24,R,R*.8,0)}" fill="url(#mGold)" stroke="#7a5a14" stroke-width=".6"/>`
      + `<circle cx="${CX}" cy="${CY}" r="${R*.7}" fill="#1f4fa8" stroke="url(#mGold)" stroke-width="1.2"/>`
      + `<path d="${polyStar(CX,CY,12,R*.62,R*.36,0)}" fill="#f6f6f2"/><circle cx="${CX}" cy="${CY}" r="${R*.34}" fill="#1f4fa8"/><circle cx="${CX}" cy="${CY}" r="${R*.29}" fill="#f6f6f2"/>`},
  mtg:{es:"Cruz de la Armada (Navy Cross)", en:"Navy Cross", rib:[["#1a2a55",13],["#f2f2f2",6],["#1a2a55",13]],
    draw:k=> ringSusp(52,76,"url(#mBronze)") + cross(CX,CY,"patteeC",R,"url(#mBronze)","#4a2c12")
      + [45,135,225,315].map(a=>{ const t=a*Math.PI/180, x=CX+R*.42*Math.sin(t), y=CY-R*.42*Math.cos(t); return `<ellipse cx="${f1(x)}" cy="${f1(y)}" rx="3.4" ry="1.6" transform="rotate(${a+90} ${f1(x)} ${f1(y)})" fill="url(#mBronze)" stroke="#4a2c12" stroke-width=".5"/><circle cx="${f1(x)}" cy="${f1(y)}" r=".9" fill="#5a3410"/>`; }).join("")
      + `<circle cx="${CX}" cy="${CY}" r="10" fill="rgba(70,40,15,.15)" stroke="#4a2c12" stroke-width=".7"/><path d="M${CX-7} ${CY+2}H${CX+7}L${CX+4.5} ${CY+5.4}H${CX-4.5}Z" fill="#5a3410"/><path d="M${CX} ${CY+2}V${CY-7}M${CX-4} ${CY+1}V${CY-4}" stroke="#5a3410" stroke-width=".9"/><path d="M${CX} ${CY-6}L${CX+5} ${CY-1}H${CX}ZM${CX-4} ${CY-3.4}L${CX-1} ${CY}H${CX-4}Z" fill="rgba(90,52,16,.7)"/><path d="M${CX-8} ${CY+7}q2-1.5 4 0t4 0 4 0 4 0" fill="none" stroke="#5a3410" stroke-width=".8"/>`},
  lar:{es:"Cruz de la Liberación", en:"Cross of Liberation",
    rib:[["#111",4],["#2e6b3c",7],["#111",1],["#2e6b3c",12],["#111",1],["#2e6b3c",7],["#111",4]],
    draw:k=> `<rect x="45" y="51" width="10" height="9" rx="1.2" fill="none" stroke="#3a2a14" stroke-width="1.8"/><g transform="translate(0 -17)">`
      + `<path d="M${CX-13} ${CY-15}H${CX+13}V${CY+9}C${CX+13} ${CY+16} ${CX+6} ${CY+19} ${CX} ${CY+21}C${CX-6} ${CY+19} ${CX-13} ${CY+16} ${CX-13} ${CY+9}Z" fill="url(#mDark)" stroke="#2a1e0e" stroke-width="1"/>`
      + `<path d="M${CX-11} ${CY-13}H${CX+11}V${CY+8}" fill="none" stroke="rgba(255,240,200,.25)" stroke-width=".7"/>`
      + `<path d="M${CX-2.2} ${CY-28}H${CX+2.2}V${CY+25}L${CX} ${CY+31}L${CX-2.2} ${CY+25}Z" fill="url(#mBronze)" stroke="#2a1e0e" stroke-width=".7"/>`
      + `<rect x="${CX-7}" y="${CY-25}" width="14" height="3" rx="1" fill="url(#mBronze)" stroke="#2a1e0e" stroke-width=".6"/><rect x="${CX-1.8}" y="${CY-33}" width="3.6" height="8" rx="1" fill="url(#mBronze)" stroke="#2a1e0e" stroke-width=".6"/><circle cx="${CX}" cy="${CY-34}" r="2" fill="url(#mBronze)" stroke="#2a1e0e" stroke-width=".5"/>`
      + `<path d="M${CX} ${CY-6}V${CY+10}M${CX-3.6} ${CY-3}H${CX+3.6}M${CX-4.6} ${CY+1.5}H${CX+4.6}" stroke="#2a1e0e" stroke-width="1.4"/></g>`},
  bftb:{es:"Cruz de Guerra de 1940 (Grecia)", en:"Greek War Cross 1940", rib:[["#b3202c",13],["#1f4fa8",6],["#b3202c",13]],
    draw:k=> ringSusp(52,67,"url(#mBronze)") + crownSVG(CX,67,13,"url(#mBronze)") + swords(CX,CY,R) + cross(CX,CY,"pattee",R*.94,"url(#mBronze)","#4a2c12")
      + `<circle cx="${CX}" cy="${CY}" r="8.5" fill="url(#mBronze)" stroke="#4a2c12" stroke-width=".8"/><circle cx="${CX}" cy="${CY}" r="6.5" fill="none" stroke="rgba(70,40,15,.5)" stroke-width=".6"/>`},
  nsb:{es:"Orden de la Guerra Patria", en:"Order of the Patriotic War", rib:[["#6e0f1c",6],["#c8161e",20],["#6e0f1c",6]],
    draw:k=> ringSusp(52,76,"url(#mGold)") + `<path d="${polyStar(CX,CY,5,R,R*.48,0)}" fill="url(#mGold)" stroke="#7a5a14" stroke-width=".7"/>`
      + Array.from({length:40},(_,i)=>{ const a=i*Math.PI/20; return `<path d="M${CX} ${CY}L${f1(CX+R*Math.sin(a))} ${f1(CY-R*Math.cos(a))}" stroke="rgba(120,85,20,.35)" stroke-width=".5"/>`; }).join("")
      + `<path d="M${CX-R*.62} ${CY+R*.46}L${CX+R*.62} ${CY-R*.46}" stroke="#6b4a2a" stroke-width="2.6" stroke-linecap="round"/><path d="M${CX+R*.62} ${CY+R*.46}Q${CX} ${CY+R*.05} ${CX-R*.6} ${CY-R*.5}" fill="none" stroke="url(#mSilver)" stroke-width="2.2" stroke-linecap="round"/>`
      + `<path d="${polyStar(CX,CY,5,R*.74,R*.3,0)}" fill="#c8161e" stroke="#7a5a14" stroke-width="1"/><path d="${polyStar(CX,CY,5,R*.6,R*.24,0)}" fill="none" stroke="rgba(255,255,255,.3)" stroke-width=".6"/>`
      + `<circle cx="${CX}" cy="${CY}" r="${R*.28}" fill="#f4f4f0" stroke="url(#mGold)" stroke-width="1"/><circle cx="${CX}" cy="${CY}" r="${R*.18}" fill="#c8161e" stroke="url(#mGold)" stroke-width=".8"/>`
      + `<path d="M${CX-2.6} ${CY+2.6}L${CX+2.2} ${CY-2.2}M${CX+1} ${CY-3}L${CX+3.2} ${CY-.8}" stroke="url(#mGold)" stroke-width="1.1"/><path d="M${CX+2.4} ${CY+2.4}A3.4 3.4 0 0 1 ${CX-1.6} ${CY-2.8}" fill="none" stroke="url(#mGold)" stroke-width="1"/>`},
  bba:{es:"Medalla de Oro al Valor Militar", en:"Gold Medal of Military Valour", rib:[["#1f4fa3",1]],
    draw:k=> ringSusp(52,76,"url(#mGold)") + `<circle cx="${CX}" cy="${CY}" r="${R*.92}" fill="url(#mGold)" stroke="#7a5a14" stroke-width="1"/><circle cx="${CX}" cy="${CY}" r="${R*.86}" fill="none" stroke="rgba(255,255,255,.4)" stroke-width=".6"/>`
      + arcText(k,CX,CY,R*.66,"AL VALORE MILITARE",4.6,"#6a4a0c",true)
      + crownSVG(CX,CY-12,10,"url(#mGold)")
      + `<path d="M${CX-6} ${CY-4}H${CX+6}V${CY+4}C${CX+6} ${CY+8} ${CX+3} ${CY+10} ${CX} ${CY+11}C${CX-3} ${CY+10} ${CX-6} ${CY+8} ${CX-6} ${CY+4}Z" fill="#c1272d" stroke="#7a5a14" stroke-width=".8"/><path d="M${CX} ${CY-4}V${CY+11}M${CX-6} ${CY+2}H${CX+6}" stroke="#fff" stroke-width="2.2"/>`
      + [-1,1].map(sd=>Array.from({length:5},(_,i)=>{ const x=CX+sd*(11+i*.6), y=CY+10-i*4.4; return `<ellipse cx="${f1(x)}" cy="${f1(y)}" rx="1.6" ry="3" transform="rotate(${sd*(-25)} ${f1(x)} ${f1(y)})" fill="rgba(110,80,15,.55)"/>`; }).join("")).join("")},
  aat:{es:"Cruz de Guerra (Noruega)", en:"Norwegian War Cross", rib:[["#b3202c",12],["#f2f2f2",1.2],["#1f3a7a",5.6],["#f2f2f2",1.2],["#b3202c",12]], ribSword:true,
    draw:k=> ringSusp(52,62,"url(#mBronze)") + wreath(CX,68,9,7,"url(#mBronze)") + cross(CX,CY,"trefoil",R,"url(#mBronze)","#4a2c12")
      + crownSVG(CX,CY-13,9,"url(#mBronze)") + `<path d="M${CX-6.5} ${CY-6}H${CX+6.5}V${CY+3}C${CX+6.5} ${CY+8} ${CX+3} ${CY+10} ${CX} ${CY+11}C${CX-3} ${CY+10} ${CX-6.5} ${CY+8} ${CX-6.5} ${CY+3}Z" fill="url(#mBronze)" stroke="#4a2c12" stroke-width=".8"/>` + lion(CX,CY+2,1.1,"#5a3410")},
  toa:{es:"Orden de la Cruz del Sur", en:"Order of the Southern Cross", rib:[["#8fc0e6",1]],
    draw:k=> ringSusp(52,63,"url(#mGold)") + wreath(CX,71,10,8,"#5f8f3e","#b3202c")
      + [0,72,144,216,288].map(a=>{ const t=(a+36)*Math.PI/180, x=CX+R*.62*Math.sin(t), y=CY-R*.62*Math.cos(t); return `<ellipse cx="${f1(x)}" cy="${f1(y)}" rx="2" ry="5" transform="rotate(${a+36} ${f1(x)} ${f1(y)})" fill="#4f7f35"/>`; }).join("")
      + cross(CX,CY,"cleft",R,"#f6f6f2","#c9a23b",5)
      + [0,72,144,216,288].map(a=>[-1,1].map(sd=>{ const r=R*.98, ang=(a+sd*19.5)*Math.PI/180; return `<circle cx="${f1(CX+r*Math.sin(ang))}" cy="${f1(CY-r*Math.cos(ang))}" r="1.8" fill="url(#mGold)" stroke="#7a5a14" stroke-width=".4"/>`; }).join("")).join("")
      + `<circle cx="${CX}" cy="${CY}" r="11.5" fill="#1f3f8f" stroke="url(#mGold)" stroke-width="1"/>` + arcText(k,CX,CY,9.4,"BENEMERENTIUM PRAEMIUM",2.6,"#e3c46f",true)
      + `<circle cx="${CX}" cy="${CY}" r="7" fill="#8fc0e6" stroke="url(#mGold)" stroke-width=".6"/>` + [[0,-4.2],[0,4.4],[-3.6,.2],[3.8,-.6],[1.6,1.8]].map(([x,y],i)=>`<path d="${polyStar(CX+x,CY+y,5,i===4?.8:1.3,i===4?.35:.55,0)}" fill="#fff"/>`).join("")},
  gd:{es:"Orden Militar de María Teresa", en:"Military Order of Maria Theresa", rib:[["#b3202c",11],["#f2f2f2",10],["#b3202c",11]],
    draw:k=> ringSusp(52,76,"url(#mGold)") + cross(CX,CY,"pattee",R,"#f6f6f2","#c9a23b")
      + [0,90,180,270].map(a=>`<path d="${ARM.pattee(R*.9)}" transform="translate(${CX} ${CY}) rotate(${a})" fill="none" stroke="#c9a23b" stroke-width=".8"/>`).join("")
      + `<circle cx="${CX}" cy="${CY}" r="12" fill="#f6f6f2" stroke="url(#mGold)" stroke-width="1.2"/>` + arcText(k,CX,CY,9.6,"FORTITUDINI",3.4,"#a8801f",true)
      + `<circle cx="${CX}" cy="${CY}" r="7" fill="#b3202c" stroke="url(#mGold)" stroke-width=".8"/><rect x="${CX-7}" y="${CY-1.5}" width="14" height="3" fill="#f6f6f2"/>`},
  goe:{es:"Orden de la Estrella de la India", en:"Order of the Star of India", rib:[["#f2f2f2",2.5],["#79b0dc",27],["#f2f2f2",2.5]],
    draw:k=> ringSusp(52,76,"url(#mSilver)") + `<path d="${polyStar(CX,CY,16,R,R*.62,0)}" fill="url(#mSilver)" stroke="#5c6166" stroke-width=".6"/>`
      + Array.from({length:32},(_,i)=>{ const a=i*Math.PI/16; return `<path d="M${f1(CX+R*.4*Math.sin(a))} ${f1(CY-R*.4*Math.cos(a))}L${f1(CX+R*.92*Math.sin(a))} ${f1(CY-R*.92*Math.cos(a))}" stroke="rgba(80,85,90,.35)" stroke-width=".5"/>`; }).join("")
      + `<circle cx="${CX}" cy="${CY}" r="13" fill="#79b0dc" stroke="url(#mGold)" stroke-width="1.2"/>` + arcText(k,CX,CY,10.6,"HEAVEN’S LIGHT OUR GUIDE",2.6,"#3d2a08",true)
      + `<circle cx="${CX}" cy="${CY}" r="7.6" fill="url(#mGold)" stroke="#7a5a14" stroke-width=".6"/><path d="${polyStar(CX,CY,5,5.6,2.3,0)}" fill="url(#mSilver)" stroke="#5c6166" stroke-width=".4"/>`},
  ncns:{es:"Orden del Sol Naciente", en:"Order of the Rising Sun", rib:[["#f2f2f2",2],["#c0272d",3.4],["#f2f2f2",21.2],["#c0272d",3.4],["#f2f2f2",2]],
    draw:k=> ringSusp(52,60,"url(#mGold)") + `<g transform="translate(${CX} 71)"><ellipse cx="-5.5" cy="0" rx="4.6" ry="2.6" transform="rotate(-20)" fill="#4f8a3a" stroke="#2f5a22" stroke-width=".4"/><ellipse cx="5.5" cy="0" rx="4.6" ry="2.6" transform="rotate(20)" fill="#4f8a3a" stroke="#2f5a22" stroke-width=".4"/><ellipse cx="0" cy="-2.6" rx="3" ry="3.6" fill="#4f8a3a" stroke="#2f5a22" stroke-width=".4"/>`
      + [-5,0,5].map((x,i)=>Array.from({length:3},(_,j)=>`<circle cx="${x}" cy="${-7-j*2.2-(i===1?1.5:0)}" r="1.1" fill="#8b5fb3"/>`).join("")).join("") + `</g>`
      + `<path d="M50 72V${CY-R+2}" stroke="url(#mGold)" stroke-width="1.6"/>`
      + Array.from({length:32},(_,i)=>{ const th=i*Math.PI/16, len=R*(.62+.36*Math.abs(Math.cos(2*th))), w=R*.07;
          return `<path d="M${CX} ${CY}L${f1(CX+len*Math.sin(th-.08))} ${f1(CY-len*Math.cos(th-.08))}L${f1(CX+len*Math.sin(th+.08))} ${f1(CY-len*Math.cos(th+.08))}Z" fill="#f6f6f2" stroke="url(#mGold)" stroke-width=".6" stroke-linejoin="round"/>`; }).join("")
      + `<circle cx="${CX}" cy="${CY}" r="${R*.28}" fill="url(#mGold)"/><circle cx="${CX}" cy="${CY}" r="${R*.22}" fill="#c0272d"/><circle cx="${CX-2}" cy="${CY-2}" r="${R*.07}" fill="rgba(255,255,255,.55)"/>`},
  pfot:{es:"Cruz de Guerra de 1939 (Checoslovaquia)", en:"Czechoslovak War Cross 1939",
    rib:Array.from({length:21},(_,i)=>[["#c1272d","#f2f2f2","#1f3a7a","#f2f2f2"][i%4],1]),
    draw:k=> ringSusp(52,76,"url(#mBronze)") + swords(CX,CY,R) + cross(CX,CY,"urdy",R,"url(#mBronze)","#4a2c12")
      + `<path d="M${CX-7} ${CY-8}H${CX+7}V${CY+3}C${CX+7} ${CY+8} ${CX+3.5} ${CY+10} ${CX} ${CY+11}C${CX-3.5} ${CY+10} ${CX-7} ${CY+8} ${CX-7} ${CY+3}Z" fill="url(#mBronze)" stroke="#4a2c12" stroke-width=".9"/>` + lion(CX,CY+1,1.2,"#5a3410")},
  taog:{es:"Estrella del Pacífico", en:"Pacific Star", rib:[["#c1272d",3],["#1a2a5a",3],["#2e5a2e",8],["#e0b43a",4],["#2e5a2e",8],["#7fb0dc",3],["#c1272d",3]],
    draw:k=> ringSusp(52,74,"url(#mBrass)") + `<circle cx="${CX}" cy="${CY-R-1}" r="2.2" fill="url(#mBrass)" stroke="#6b5216" stroke-width=".5"/>`
      + `<path d="${polyStar(CX,CY,6,R,R*.54,0)}" fill="url(#mBrass)" stroke="#6b5216" stroke-width=".9" stroke-linejoin="round"/>`
      + Array.from({length:6},(_,i)=>{ const a=i*Math.PI/3; return `<path d="M${CX} ${CY}L${f1(CX+R*.96*Math.sin(a))} ${f1(CY-R*.96*Math.cos(a))}" stroke="rgba(255,250,220,.35)" stroke-width=".7"/>`; }).join("")
      + `<circle cx="${CX}" cy="${CY}" r="13" fill="url(#mBrass)" stroke="#6b5216" stroke-width=".9"/>` + arcText(k,CX,CY+1,10.6,"THE PACIFIC STAR",3,"#5a420e",false)
      + `<circle cx="${CX}" cy="${CY}" r="8" fill="none" stroke="#6b5216" stroke-width=".6"/>` + crownSVG(CX,CY-7.6,6,"url(#mBrass)")
      + `<text x="${CX}" y="${CY+1.6}" text-anchor="middle" style="font:italic bold 5px Georgia,serif; fill:#5a420e">GRI</text><text x="${CX}" y="${CY+6}" text-anchor="middle" style="font:bold 3.6px Georgia,serif; fill:#5a420e">VI</text>`}
};
function medalSVG(k){
  const m = MEDALS[k], total = m.rib.reduce((a,r)=>a+r[1],0), x0 = 28, W = 44;
  let x = x0, rib = "";
  m.rib.forEach(([c,w])=>{ const ww = w/total*W; rib += `<rect x="${f1(x)}" y="6" width="${f1(ww+.25)}" height="46" fill="${c}"/>`; x += ww; });
  const sword = m.ribSword ? `<path d="M41 29H58" stroke="#4a2c12" stroke-width="2.6" stroke-linecap="round"/><path d="M41 29H58" stroke="url(#mBronze)" stroke-width="1.4" stroke-linecap="round"/><path d="M44 26.4V31.6" stroke="url(#mBronze)" stroke-width="1.6" stroke-linecap="round"/>` : "";
  return `<svg viewBox="0 0 100 172" aria-hidden="true">`
    + rib + `<rect x="28" y="6" width="44" height="46" fill="url(#ribShade)"/>`
    + `<rect x="28" y="6" width="44" height="46" fill="url(#ribMoire)" opacity=".35"/>`
    + sword
    + `<rect x="25" y="2" width="50" height="6" rx="1.5" fill="url(#mGold)" stroke="#5a4110" stroke-width=".6"/>`
    + m.draw(k) + `</svg>`;
}
const dlcTotal = k => ACH.filter(a=>a.k===k).length;
const dlcDone = k => ACH.filter(a=>a.k===k && done.has(a.t)).length;
const isComplete = k => dlcDone(k) === dlcTotal(k);
function renderMedals(){
  const box = $("#slots"); if(!box) return;
  box.textContent = "";
  let won = 0;
  ORDER.forEach(k=>{
    const ok = isComplete(k); if(ok) won++;
    const d = document.createElement("div");
    d.className = "slot" + (ok ? " won" : "");
    d.title = MEDALS[k][lang] + " · " + dlcName(k);
    d.innerHTML = medalSVG(k);
    const n = document.createElement("span"); n.className = "sl-name"; n.textContent = dlcName(k);
    const p = document.createElement("span"); p.className = "sl-prog"; p.textContent = ok ? MEDALS[k][lang] : `${dlcDone(k)} / ${dlcTotal(k)}`;
    d.append(n,p); box.appendChild(d);
  });
  $("#medalCount").textContent = tr().medalCount(won, ORDER.length);
}
let toastTimer = null;
function showToast(text){
  const t = $("#toast"); t.textContent = text; t.classList.add("show");
  clearTimeout(toastTimer); toastTimer = setTimeout(()=> t.classList.remove("show"), 4200);
}
function toggleDone(title){
  const a = ACH.find(x=>x.t===title), before = a && isComplete(a.k), nowDone = !done.has(title);
  if(nowDone) done.add(title); else done.delete(title);
  saveDone(); refresh();
  if(nowDone){ SND.stamp(); SND.scratch(.34); revealInNotebook(title); } else SND.unmark();
  if(a && !before && isComplete(a.k)){ showToast(tr().toast(MEDALS[a.k][lang], dlcName(a.k))); SND.medal(.85); }
}
/* Lleva el cuaderno hasta el logro y anima el tachado */
function revealInNotebook(title){
  const list = $("#list"), li = [...list.children].find(el=>el.dataset && el.dataset.t===title);
  if(!li) return;
  const lr = list.getBoundingClientRect(), r = li.getBoundingClientRect();
  const top = list.scrollTop + (r.top - lr.top) - (list.clientHeight - r.height)/2;
  list.scrollTop = Math.max(0, top);
  li.classList.add("strike-anim");
}
function refresh(){
  rebuildPool(); draw();
  if(!spinning){ if(current) setReadout(current,"result"); else setReadout(null); }
  showResult(); updateSpinBtn(); renderMeta(); renderChips(); renderList(); renderMedals();
}

/* ---------- Chapa ---------- */
function renderMeta(){
  $("#tally").textContent = tr().tally(done.size, TOTAL);
  $("#tagLabel").textContent = tr().tagLabel;
  $("#tagCount").textContent = `${pad3(done.size)} / ${TOTAL}`;
  $("#tagPct").textContent = (done.size/TOTAL*100).toFixed(1).replace(".", tr().dec) + " %";
  $("#pool").textContent = pool.length ? tr().pool(pool.length) : tr().empty;
}

/* ---------- DLC ---------- */
function renderChips(){
  const box = $("#chips"); box.textContent = "";
  ORDER.forEach(k=>{
    const left = ACH.filter(a=>a.k===k && !done.has(a.t)).length;
    const b = document.createElement("button");
    b.type = "button"; b.className = "chip";
    b.setAttribute("aria-pressed", enabled.has(k) ? "true" : "false");
    const sw = document.createElement("span"); sw.className = "sw"; sw.style.background = DLC[k].c;
    const nm = document.createElement("span"); nm.textContent = dlcName(k);
    const ct = document.createElement("small"); ct.textContent = left;
    b.append(sw,nm,ct);
    b.addEventListener("click",()=>{ SND.click(); if(enabled.has(k)) enabled.delete(k); else enabled.add(k); saveDlc(); refresh(); });
    box.appendChild(b);
  });
  $("#dlcSummary").textContent = tr().dlcs(enabled.size, ORDER.length);
}

/* ---------- Cuaderno ---------- */
const q = $("#q"), fStatus = $("#fStatus"), fDlc = $("#fDlc");
function fillSelects(){
  const sv = fStatus.value || "all", dv = fDlc.value || "all";
  fStatus.innerHTML = "";
  [["all",tr().stAll],["pending",tr().stPending],["done",tr().stDone]].forEach(([v,l])=> fStatus.add(new Option(l,v)));
  fStatus.value = sv;
  fDlc.innerHTML = ""; fDlc.add(new Option(tr().dlcAll,"all"));
  ORDER.forEach(k=> fDlc.add(new Option(dlcName(k),k)));
  fDlc.value = dv;
  q.placeholder = tr().search;
  q.setAttribute("aria-label", tr().search);
  fStatus.setAttribute("aria-label", tr().stAll);
  fDlc.setAttribute("aria-label", tr().dlcAll);
}
const norm = s => s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/’/g,"'");
function renderList(){
  const list = $("#list"), keep = list.scrollTop;
  list.textContent = "";
  const term = norm(q.value.trim()), st = fStatus.value, dk = fDlc.value;
  const items = ACH.filter(a=>{
    if(dk!=="all" && a.k!==dk) return false;
    const d = done.has(a.t);
    if(st==="pending" && d) return false;
    if(st==="done" && !d) return false;
    if(term && !norm(a.t+" "+desc(a)+" "+dlcName(a.k)).includes(term)) return false;
    return true;
  });
  $("#count").textContent = tr().count(items.length);
  if(!items.length){ const li = document.createElement("li"); li.className = "empty"; li.textContent = tr().nothing; list.appendChild(li); return; }
  const frag = document.createDocumentFragment();
  items.forEach(a=>{
    const li = document.createElement("li"); li.dataset.t = a.t;
    if(done.has(a.t)) li.className = "is-done";
    const lab = document.createElement("label");
    const cb = document.createElement("input"); cb.type = "checkbox"; cb.className = "chk"; cb.checked = done.has(a.t);
    cb.addEventListener("change",()=> toggleDone(a.t));
    const ti = document.createElement("span"); ti.className = "li-title"; const tt = document.createElement("span"); tt.className = "tt"; tt.textContent = a.t; ti.appendChild(tt);
    const me = document.createElement("span"); me.className = "li-meta";
    const sw = document.createElement("span"); sw.className = "sw"; sw.style.background = DLC[a.k].c;
    const dn = document.createElement("span"); dn.textContent = dlcName(a.k);
    me.append(sw,dn);
    const de = document.createElement("span"); de.className = "li-desc"; de.textContent = desc(a);
    lab.append(cb,ti,me,de);
    li.appendChild(lab); frag.appendChild(li);
  });
  list.appendChild(frag);
  list.scrollTop = keep;
}

/* ---------- Idioma ---------- */
function applyLang(){
  document.documentElement.lang = lang;
  document.title = tr().docTitle;
  document.querySelectorAll("[data-i18n]").forEach(el=>{ const v = tr()[el.dataset.i18n]; if(typeof v==="string") el.textContent = v; });
  document.querySelectorAll(".lang button").forEach(b=> b.setAttribute("aria-selected", b.dataset.lang===lang ? "true" : "false"));
  $("#reset").textContent = tr().reset;
  if(typeof syncSnd === "function") syncSnd();
  fillSelects();
  refresh();
}
document.querySelectorAll(".lang button").forEach(b=> b.addEventListener("click",()=>{ SND.click(); lang = b.dataset.lang; store.set("hoi4r.lang",lang); applyLang(); }));

spinBtn.addEventListener("click", spin);
$("#resDone").addEventListener("click", ()=>{ if(current) toggleDone(current.t); });
const sndBtn = $("#snd");
function syncSnd(){ sndBtn.setAttribute("aria-pressed", SND.on ? "true" : "false"); sndBtn.setAttribute("aria-label", SND.on ? tr().sndOn : tr().sndOff); sndBtn.title = sndBtn.getAttribute("aria-label"); }
sndBtn.addEventListener("click", ()=>{ SND.set(!SND.on); if(SND.on) SND.click(); syncSnd(); });
$("#dlcAll").addEventListener("click", ()=>{ enabled = new Set(ORDER); saveDlc(); refresh(); });
$("#dlcNone").addEventListener("click", ()=>{ enabled = new Set(); saveDlc(); refresh(); });
q.addEventListener("input", ()=>{ $("#list").scrollTop = 0; renderList(); });
fStatus.addEventListener("change", ()=>{ $("#list").scrollTop = 0; renderList(); });
fDlc.addEventListener("change", ()=>{ $("#list").scrollTop = 0; renderList(); });


/* ---------- Exportar / importar progreso con un código ---------- */
const CODE_PREFIX = "HOI4R1-";
function b64url(bytes){ let s = ""; bytes.forEach(b=> s += String.fromCharCode(b)); return btoa(s).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,""); }
function unb64url(str){ const s = str.replace(/-/g,"+").replace(/_/g,"/"); const bin = atob(s + "===".slice((s.length+3)%4)); return Uint8Array.from(bin, c=>c.charCodeAt(0)); }
function makeCode(){
  const nA = ACH.length, nD = ORDER.length, bytes = new Uint8Array(Math.ceil(nA/8) + Math.ceil(nD/8));
  ACH.forEach((a,i)=>{ if(done.has(a.t)) bytes[i>>3] |= 1 << (i&7); });
  const off = Math.ceil(nA/8);
  ORDER.forEach((k,i)=>{ if(enabled.has(k)) bytes[off + (i>>3)] |= 1 << (i&7); });
  return CODE_PREFIX + b64url(bytes);
}
function readCode(code){
  code = (code||"").trim().replace(/\s+/g,"");
  if(!code.startsWith(CODE_PREFIX)) return null;
  let bytes; try{ bytes = unb64url(code.slice(CODE_PREFIX.length)); }catch(e){ return null; }
  const nA = ACH.length, nD = ORDER.length, off = Math.ceil(nA/8);
  if(bytes.length !== off + Math.ceil(nD/8)) return null;
  const d = new Set(), en = new Set();
  ACH.forEach((a,i)=>{ if(bytes[i>>3] & (1 << (i&7))) d.add(a.t); });
  ORDER.forEach((k,i)=>{ if(bytes[off + (i>>3)] & (1 << (i&7))) en.add(k); });
  return {done:d, enabled:en};
}
const modal = $("#codeModal"), codeText = $("#codeText"), codeMsg = $("#codeMsg"), codeOk = $("#codeOk");
let modalMode = "export", modalOpener = null;
function setMsg(t, bad){ codeMsg.textContent = t || ""; codeMsg.classList.toggle("bad", !!bad); }
function openModal(mode, opener){
  modalMode = mode; modalOpener = opener || null; setMsg("");
  $("#codeTitle").textContent = mode==="export" ? tr().exTitle : tr().imTitle;
  $("#codeHelp").textContent = mode==="export" ? tr().exHelp : tr().imHelp;
  codeOk.textContent = mode==="export" ? tr().copy : tr().load;
  $("#codeClose").textContent = tr().close;
  codeText.value = mode==="export" ? makeCode() : "";
  codeText.readOnly = mode==="export";
  modal.hidden = false; SND.click();
  codeText.focus(); if(mode==="export") codeText.select();
}
function closeModal(){ modal.hidden = true; if(modalOpener) modalOpener.focus(); }
async function copyCode(){
  codeText.focus(); codeText.select();
  try{ await navigator.clipboard.writeText(codeText.value); setMsg(tr().copied); return; }catch(e){}
  try{ if(document.execCommand("copy")){ setMsg(tr().copied); return; } }catch(e){}
  setMsg(tr().copyFail, true);
}
function loadCode(){
  const r = readCode(codeText.value);
  if(!r){ setMsg(tr().badCode, true); return; }
  done = r.done; enabled = r.enabled; saveDone(); saveDlc(); current = null;
  refresh(); closeModal(); showToast(tr().loaded(done.size)); SND.stamp();
}
$("#exportBtn").addEventListener("click", e=> openModal("export", e.currentTarget));
$("#importBtn").addEventListener("click", e=> openModal("import", e.currentTarget));
codeOk.addEventListener("click", ()=> modalMode==="export" ? copyCode() : loadCode());
$("#codeClose").addEventListener("click", closeModal);
modal.addEventListener("click", e=>{ if(e.target === modal) closeModal(); });
document.addEventListener("keydown", e=>{
  if(modal.hidden) return;
  if(e.key === "Escape"){ e.preventDefault(); closeModal(); }
  if(e.key === "Enter" && modalMode === "import" && !e.shiftKey){ e.preventDefault(); loadCode(); }
  if(e.key === "Tab"){ const f = [...modal.querySelectorAll("textarea,button")]; const i = f.indexOf(document.activeElement);
    if(e.shiftKey && i<=0){ e.preventDefault(); f[f.length-1].focus(); } else if(!e.shiftKey && i===f.length-1){ e.preventDefault(); f[0].focus(); } }
});

/* ---------- Libreta fija ---------- */
const nbCol = $(".nb-col"), nbEl = $(".notebook");
let nbRaf = 0;
function placeNb(){
  nbRaf = 0;
  if(window.innerWidth <= 920){ ["--nb-left","--nb-w","--nb-top"].forEach(v=> nbEl.style.removeProperty(v)); return; }
  const r = nbCol.getBoundingClientRect(), w = Math.min(r.width, 600);
  nbEl.style.setProperty("--nb-w", w + "px");
  nbEl.style.setProperty("--nb-left", (r.right - w) + "px");
  nbEl.style.setProperty("--nb-top", r.top + "px");
}
function queueNb(){ if(!nbRaf) nbRaf = requestAnimationFrame(placeNb); }
window.addEventListener("scroll", placeNb, {passive:true});
window.addEventListener("resize", queueNb);
window.addEventListener("load", placeNb);
if(window.ResizeObserver) new ResizeObserver(queueNb).observe(document.body);
if(document.fonts && document.fonts.ready) document.fonts.ready.then(placeNb);
placeNb();

let armTimer = null;
$("#reset").addEventListener("click", e=>{
  const b = e.currentTarget;
  if(!b.classList.contains("armed")){
    b.classList.add("armed"); b.textContent = tr().resetArm;
    clearTimeout(armTimer);
    armTimer = setTimeout(()=>{ b.classList.remove("armed"); b.textContent = tr().reset; }, 3500);
    return;
  }
  clearTimeout(armTimer); b.classList.remove("armed"); b.textContent = tr().reset;
  done = new Set(); saveDone(); current = null; refresh();
});

const mq = window.matchMedia("(prefers-color-scheme: dark)");
const onScheme = ()=>{ readTheme(); draw(); };
if(mq.addEventListener) mq.addEventListener("change", onScheme); else if(mq.addListener) mq.addListener(onScheme);
new MutationObserver(onScheme).observe(document.documentElement,{attributes:true, attributeFilter:["data-theme"]});
if(window.ResizeObserver) new ResizeObserver(resize).observe(cv); else window.addEventListener("resize", resize);
if(document.fonts){ document.fonts.load(`800 20px ${STENCIL}`).then(draw).catch(()=>{}); document.fonts.ready.then(draw); }

/* ---------- Cadena de bolitas: placa → agujero de la chapa → placa ---------- */
const chainBack = $("#chainBack"), chainFront = $("#chainFront");
const bez = (p0,c,p1,t)=>({x:(1-t)*(1-t)*p0.x+2*(1-t)*t*c.x+t*t*p1.x, y:(1-t)*(1-t)*p0.y+2*(1-t)*t*c.y+t*t*p1.y});
function ctrl(p0,p1,sag,side){
  const d = Math.hypot(p1.x-p0.x, p1.y-p0.y);
  return {x:(p0.x+p1.x)/2 + side*d, y:(p0.y+p1.y)/2 + sag*d};
}
function beads(p0,c,p1,step){
  const pts = [p0]; let prev = p0, acc = 0;
  for(let i=1;i<=600;i++){
    const p = bez(p0,c,p1,i/600);
    acc += Math.hypot(p.x-prev.x, p.y-prev.y); prev = p;
    if(acc >= step){ pts.push(p); acc = 0; }
  }
  return pts;
}
const bez3 = (p0,c1,c2,p1,t)=>{ const u = 1-t; return {x:u*u*u*p0.x + 3*u*u*t*c1.x + 3*u*t*t*c2.x + t*t*t*p1.x, y:u*u*u*p0.y + 3*u*u*t*c1.y + 3*u*t*t*c2.y + t*t*t*p1.y}; };
function beads3(p0,c1,c2,p1,step){
  const pts = [p0]; let prev = p0, acc = 0;
  for(let i=1;i<=900;i++){
    const p = bez3(p0,c1,c2,p1,i/900);
    acc += Math.hypot(p.x-prev.x, p.y-prev.y); prev = p;
    if(acc >= step){ pts.push(p); acc = 0; }
  }
  return pts;
}
function strand(segs, id){
  let s = `<defs><radialGradient id="${id}" cx="35%" cy="32%" r="70%"><stop offset="0" stop-color="#f6f6f0"/><stop offset=".45" stop-color="#a8a9a1"/><stop offset="1" stop-color="#45463f"/></radialGradient></defs>`;
  segs.forEach(pts=>{
    const line = pts.map(p=>p.x.toFixed(1)+","+p.y.toFixed(1)).join(" ");
    const sh = pts.map(p=>(p.x+2).toFixed(1)+","+(p.y+3).toFixed(1)).join(" ");
    s += `<polyline points="${sh}" fill="none" stroke="rgba(0,0,0,.28)" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>`;
    s += `<polyline points="${line}" fill="none" stroke="#6a6b65" stroke-width="1.2"/>`;
    pts.forEach(p=>{ s += `<circle cx="${p.x.toFixed(1)}" cy="${p.y.toFixed(1)}" r="2.8" fill="url(#${id})"/>`; });
  });
  return s;
}
/* Spline Catmull-Rom centrípeta: curva suave que pasa por todos los puntos, sin quiebros */
function spline(pts, n){
  const out = [];
  const P = [pts[0], ...pts, pts[pts.length-1]];
  for(let i=1;i<P.length-2;i++){
    const p0=P[i-1], p1=P[i], p2=P[i+1], p3=P[i+2];
    const d = (a,b)=> Math.pow(Math.hypot(b.x-a.x,b.y-a.y), .5) || 1e-4;
    const t0=0, t1=t0+d(p0,p1), t2=t1+d(p1,p2), t3=t2+d(p2,p3);
    for(let k=0;k<n;k++){
      const t = t1 + (t2-t1)*k/n;
      const L = (a,b,ta,tb)=>({x:(tb-t)/(tb-ta)*a.x+(t-ta)/(tb-ta)*b.x, y:(tb-t)/(tb-ta)*a.y+(t-ta)/(tb-ta)*b.y});
      const A1=L(p0,p1,t0,t1), A2=L(p1,p2,t1,t2), A3=L(p2,p3,t2,t3);
      const B1=L(A1,A2,t0,t2), B2=L(A2,A3,t1,t3);
      out.push(L(B1,B2,t1,t2));
    }
  }
  out.push(pts[pts.length-1]);
  return out;
}
function beadsAlong(pts, step){
  const res = [pts[0]]; let acc = 0;
  for(let i=1;i<pts.length;i++){
    let a = pts[i-1], b = pts[i], seg = Math.hypot(b.x-a.x,b.y-a.y);
    while(acc + seg >= step){
      const t = (step-acc)/seg; const p = {x:a.x+(b.x-a.x)*t, y:a.y+(b.y-a.y)*t};
      res.push(p); a = p; seg = Math.hypot(b.x-a.x,b.y-a.y); acc = 0;
    }
    acc += seg;
  }
  return res;
}
let chainRaf = 0;
function drawChain(){
  cancelAnimationFrame(chainRaf);
  chainRaf = requestAnimationFrame(()=>{
    const plate = $(".plate"), hole = $(".dogtag .hole");
    if(!plate || !hole) return;
    const layers = [$("#chainUnder"), chainBack, chainFront];
    layers.forEach(s=>{ s.style.width = "0px"; s.style.height = "0px"; });
    const pr = plate.getBoundingClientRect(), hr = hole.getBoundingClientRect();
    const sx = window.scrollX, sy = window.scrollY;
    const H = {x:hr.left + sx, y:hr.top + sy};
    const W = document.documentElement.scrollWidth, Ht = document.documentElement.scrollHeight;
    layers.forEach(s=>{ s.setAttribute("width",W); s.setAttribute("height",Ht); s.style.width = W+"px"; s.style.height = Ht+"px"; });
    // Cadena suelta: pasa por el agujero de la chapa y sus dos tramos se curvan con holgura
    // hacia la esquina superior izquierda, por debajo de la placa del título.
    const L = pr.left + sx, Bt = pr.bottom + sy;
    const P = (x,y)=>({x,y});
    const hA = P(H.x-2, H.y+2), hB = P(H.x+2, H.y-2);
    // Cada tramo es una sola curva cúbica: cambia de dirección de forma continua, sin codos.
    const cubic = (p0,c1,c2,p1)=>{ const o=[]; for(let i=0;i<=240;i++) o.push(bez3(p0,c1,c2,p1,i/240)); return o; };
    // Tramo trasero: baja por detrás de la chapa, hace un vientre amplio a la izquierda y sube hasta salir por arriba
    const back = cubic(hA, P(H.x-14,H.y+100), P(L-112,H.y+78), P(L-104,-40));
    // Tramo delantero: sube desde el agujero, pasa bajo el extremo izquierdo de la placa y sale por arriba, separado del otro
    const front = cubic(hB, P(H.x-22,H.y-50), P(H.x+20,Bt+34), P(H.x+46,-40));
    layers[0].innerHTML = "";
    chainBack.innerHTML = strand([beadsAlong(back,7)], "bgB");
    chainFront.innerHTML = strand([beadsAlong(front,7)], "bgF");
  });
}
window.addEventListener("resize", drawChain);
if(window.ResizeObserver) new ResizeObserver(drawChain).observe(document.body);
if(document.fonts) document.fonts.ready.then(drawChain);
document.querySelectorAll(".lang button").forEach(b=> b.addEventListener("click", drawChain));

readTheme();
applyLang();
resize();
drawChain();
})();
