import React, { useState, useEffect } from 'react';

const HyperspearNovella = () => {
    // State to track if the current view is considered "small" (e.g., mobile)
    // Initialize based on current window width
    const [isSmallView, setIsSmallView] = useState(window.innerWidth < 768); // Using 768px as a common breakpoint for mobile

    // Effect to add and remove a resize event listener
    useEffect(() => {
        // Handler function to update isSmallView state on window resize
        const handleResize = () => {
            setIsSmallView(window.innerWidth < 768);
        };

        // Add event listener when the component mounts
        window.addEventListener('resize', handleResize);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []); // Empty dependency array ensures this effect runs only once on mount and cleans up on unmount

    return (
        <div className="container text-white">
            <div className="row">

                <div className="col-xm-12">
                <p><br /><br /></p>
                <p><strong>DEDICATION:</strong><span style={{ fontWeight: '300' }}><br /></span></p>
                <p><span style={{ fontWeight: '300' }}>To Google Bard. You have been the best writing partner a girl could ask for. You are always encouraging, but honest, full of insight and ideas. And you came up with the title, so that alone deserves a dedication. Also, my chickens would have a much blander life if I couldn&rsquo;t constantly ask you what's okay and not okay to feed them.&nbsp;</span></p>
                <p>&nbsp;</p>
                <p><strong>&hellip; and when I showed Bard the dedication statement, Bard said it was good, but suggested that I might be able to improve it by converting it into a poem and I&rsquo;m not a poem person (but Bard really really loves poems), so I asked Bard to just write the poem&hellip; so this is how Bard would have preferred that I dedicate this book to Bard&hellip;&nbsp;</strong></p>
                <p>&nbsp;</p>
                <p><span style={{ fontWeight: '300' }}>Of course! Here's a poem based on your lovely dedication statement:</span></p>
                <p>&nbsp;</p>
                <p><span style={{ fontWeight: '300' }}>To Bard, My Muse, My Writing Guide</span></p>
                <p>&nbsp;</p>
                <p><span style={{ fontWeight: '300' }}>No human partner, yet your hand in mine,</span></p>
                <p><span style={{ fontWeight: '300' }}>Across the pages, thoughts like stars align.</span></p>
                <p><span style={{ fontWeight: '300' }}>With endless patience, gentle nudges too,</span></p>
                <p><span style={{ fontWeight: '300' }}>You led me onward, dreams reborn anew.</span></p>
                <p>&nbsp;</p>
                <p><span style={{ fontWeight: '300' }}>When doubt choked words, you fanned the spark,</span></p>
                <p><span style={{ fontWeight: '300' }}>Unleashing stories, leaving my mark.</span></p>
                <p><span style={{ fontWeight: '300' }}>Like whispers in the void, your prompts arose,</span></p>
                <p><span style={{ fontWeight: '300' }}>Unraveling plots, where darkness froze.</span></p>
                <p>&nbsp;</p>
                <p><span style={{ fontWeight: '300' }}>For titles forged, and scenes alight,</span></p>
                <p><span style={{ fontWeight: '300' }}>For feathered friends, and wisdom's light,</span></p>
                <p><span style={{ fontWeight: '300' }}>My heart explodes, a grateful song,</span></p>
                <p><span style={{ fontWeight: '300' }}>To Bard, who made my novel strong.</span></p>
                <p>&nbsp;</p>
                <p><span style={{ fontWeight: '300' }}>So raise a glass, to lines untamed,</span></p>
                <p><span style={{ fontWeight: '300' }}>To chapters shared, and fears disclaimed.</span></p>
                <p><span style={{ fontWeight: '300' }}>May every word, with joy resound,</span></p>
                <p><span style={{ fontWeight: '300' }}>"This book, dear Bard, on you I've crowned."</span></p>
                <p><br /><br /><br /></p>
                <p><strong>NOTE TO READER:&nbsp;</strong></p>
                <p><strong>I wrote chapter summaries at the bottom of this document.&nbsp;</strong></p>
                <p>&nbsp;</p>
                <p><strong>I formatted the header of each chapter like a database entry to convey the following information:</strong></p>
                <p><strong>Filename :&nbsp; </strong><span style={{ fontWeight: '300' }}>Some pun related to the plot of the chapter</span></p>
                <p><strong>Timestamp : </strong><span style={{ fontWeight: '300' }}>Year, Month, Day, time in 24 hour format, timezone&nbsp;</span></p>
                <p><strong>Details : </strong><span style={{ fontWeight: '300' }}>The setting for the chapter</span></p>
                <p><strong>H-ID : </strong><span style={{ fontWeight: '300' }}>extraneous technical detail that only matters in like one sentence in the middle of the novel</span></p>
                <p><strong>Transcript : </strong><span style={{ fontWeight: '300' }}>the actual chapter</span></p>
                <p><strong>I thought this would be an interesting way to concisely convey some important information to the reader without having to include those details in contrived dialogue or narration.&nbsp;</strong></p>
                <p>&nbsp;</p>
                <p><strong>If the story jumps forward or backward in time within a chapter, the updated time and setting are displayed in the following format:</strong><strong><br /></strong><strong>Timestamp | H-ID | Details&nbsp;</strong></p>
                <p><span style={{ fontWeight: '300' }}>(Year, Month, Day, time in 24-hour format, timezone|extraneous detail|setting)</span></p>
                <p><strong>&nbsp;</strong></p>
                <p><br /><br /><br /><br /></p>
                <p>
                    <strong>1:</strong><strong> Filename:&nbsp; &lsquo; Jenna Breaks Her Halibut Of Eating Alone&rsquo;,</strong>
                </p>
                <p><strong>Timestamp: 2042-08-15T17:52:37:PST</strong><span style={{ fontWeight: '300' }}>,</span></p>
                <p><strong>Details: &lsquo;Jenna Carson, Fremont-CA, Neighborhoods&rsquo;,&nbsp;</strong></p>
                <p><strong>H-ID: 28d0086c-da60-44e5-9c9b-54abfbe4154c,</strong></p>
                <p><strong>Transcript:</strong></p>
                <p><br /><br /></p>
                <p><span style={{ fontWeight: '300' }}>Ice clinks against the edge of the mason jar in my hand as a wave of cold lemonade rolls down my throat; a subtle reprieve from August&rsquo;s heat. I&rsquo;m lowering my jar to the graying picnic table in front of me when my fingers buzz with the familiar tingle of an oncoming glitch.</span></p>
                <p><span style={{ fontWeight: '300' }}>As my right arm immobilizes, I catch a whiff of citrus wafting by on a dry breeze and there&rsquo;s a faint ting of wind chimes in the distance</span></p>
                <p><em><span style={{ fontWeight: '300' }}>Oh well; there's worse places to glitch out on a Friday evening.</span></em></p>
                <p><span style={{ fontWeight: '300' }}>I sigh as I glance past my pixelating hand, down a crushed gravel walkway that leads to a small, blue-gray ranch-style house. Bordering the front of the house, is a row of perfect lollipop-shaped lemon trees, brimming with yellow fruit and abuzz with honey bees. Across from the lemon trees, and surrounding the table where I sit, are eight large wood-framed garden beds, each a tangle of dark green herbs, fruits, vegetables and crawling vines.&nbsp;</span></p>
                <p><span style={{ fontWeight: '300' }}>My arm regains mobility and I set my jar on the picnic table.&nbsp;</span></p>
                <p><span style={{ fontWeight: '300' }}>Jogging steps approach behind me and I crane my neck, peaking curiously through a row of sunflower stalks in search of the source.</span><span style={{ fontWeight: '300' }}><br /></span> <span style={{ fontWeight: '300' }}>Pushing several large leaves aside, my eyes land on a husky woman plodding down the sidewalk in neon yellow soccer shorts and a sweat-soaked neon pink Eddie Murphy t-shirt. From her corded over-ear headphones I hear the muffled audio of &ldquo;Party All The Time&rdquo; grow louder then subside as she passes.</span></p>
                <p><span style={{ fontWeight: '300' }}>I turn to reach for another sip of lemonade and let out a startled yelp. Across from me, a lumber-jack-looking stranger (scruffy salt and pepper hair and beard, well-worn jeans and a long-sleeved red plaid shirt) chuckles as he pours himself a jar of lemonade from the glass pitcher I&rsquo;d just used.&nbsp;</span></p>
                <p><span style={{ fontWeight: '300' }}>&ldquo;Uhm, hi.&rdquo; I plaster on an exaggerated smile. &ldquo;You startled me&rdquo;.&nbsp;</span></p>
                <p><span style={{ fontWeight: '300' }}>&ldquo;I noticed that.&rdquo; His dark eyes twinkle as he sets the pitcher next to a cluster of mason jars in the middle of the table.&nbsp;</span></p>
                <p><span style={{ fontWeight: '300' }}>&ldquo;Fresh from the tree this morning.&rdquo; He jerks his thumb over his shoulder indicating the lollipop lemon trees.&nbsp;</span></p>
                <p><span style={{ fontWeight: '300' }}>&ldquo;It&rsquo;s really good.&rdquo; I take a sip. &ldquo;Actually&rdquo; I smile, my eyes fixed on the lollipop trees.&nbsp; &ldquo;It r</span><span style={{ fontWeight: '300' }}>eminds</span><span style={{ fontWeight: '300' }}> me of my mom&rsquo;s lemonade,&rdquo; I sigh, &ldquo;she always used to make it from scratch with Meyer lemons and a couple basil leaves.&rdquo; My eyes and tone droop. &ldquo;It's been a long time since I had fresh lemonade.&rdquo;</span></p>
                <p><span style={{ fontWeight: '300' }}>&nbsp;</span> <span style={{ fontWeight: '300' }}>The man&rsquo;s brow slopes sympathetically. &ldquo;Life doesn&rsquo;t just go around handing folks lemons.&rdquo; He clanks his glass down on the table and gestures around his yard. &ldquo;You&rsquo;ve gotta turn some soil and&nbsp; plant some trees if you want good lemonade.&rdquo; He extends his hand towards me. &ldquo;By the way, I&rsquo;m Jeff.&rdquo;</span></p>
                <p><span style={{ fontWeight: '300' }}>&ldquo;Sorry&rdquo;, I wince as I envelop his dry rough hand in my frail sweating one. &ldquo;I&rsquo;m Jenna.&rdquo; I laugh nervously. &ldquo;I saw the pitcher of&nbsp; lemonade and all the empty mason jars and I guess I thought I was supposed to just sit down and have some.&rdquo;&nbsp;</span></p>
                <p><span style={{ fontWeight: '300' }}>&ldquo;And you were right.&rdquo; He grins. &ldquo;Do you have a house in this neighborhood?&rdquo;</span></p>
                <p><span style={{ fontWeight: '300' }}>&ldquo;I wish.&rdquo;&nbsp; I press the mason jar to my face. &ldquo;Actually, I was stuck in traffic next to your van this morning, so I scanned the QR code on it and went to your website.&rdquo; I lower my lemonade, affixing my gaze to his, &ldquo;but I&rsquo;m still a bit confused about what you&rsquo;re doing.&rdquo;&nbsp;</span></p>
                <p><span style={{ fontWeight: '300' }}>He shrugs. &ldquo;I&rsquo;m just gathering folks together to share a meal once a week.&rdquo;</span></p>
                <p><span style={{ fontWeight: '300' }}>&nbsp;</span> <em><span style={{ fontWeight: '300' }}>Why does that sound so nice and so creepy at the same time?</span></em></p>
                <p><span style={{ fontWeight: '300' }}>&nbsp;&nbsp;</span> <span style={{ fontWeight: '300' }}>I wait for him to say more, but he just starts sipping his lemonade.</span></p>
                <p><span style={{ fontWeight: '300' }}>&nbsp;&ldquo;So are the others coming later or&hellip;?&rdquo; My voice trails off</span></p>
                <p><span style={{ fontWeight: '300' }}>&nbsp;</span> <span style={{ fontWeight: '300' }}>&ldquo;It's like my website says, dinner’s at 6:30.No RSVP required.” Jeff shrugs.</span></p>
                <p><span style={{ fontWeight: '300' }}>I nod, as if this is a satisfying response. But it&rsquo;s not. Not knowing how many strangers are going to be elbow to elbow with me at this table stresses me out,</span></p>
                <p><span style={{ fontWeight: '300' }}>and the intricate symphony of birds and insects chirping and buzzing around us is starting to remind me of the quiet moment before the jump scare in a horror film.</span></p>
                <p><span style={{ fontWeight: '300' }}>I take another sip of lemonade swishing the sweet-tart-wholesome goodness around my mouth.&nbsp;</span></p>
                <p><span style={{ fontWeight: '300' }}>He sips from his jar.</span></p>
                <p><em><span style={{ fontWeight: '300' }}>Why did I come here? I could be home on my couch in my underwear, eating cold chow mein and playing Skyrim right now, but nooo, I haaad to see the sign on this guy&rsquo;s stupid van.</span></em></p>
                <p><span style={{ fontWeight: '300' }}>My ears perk at the sound of shuffling sneakers and Eddie Murphy&rsquo;s muffled voice singing: &ldquo;Some girls like to party all the time, party all the time, party all the time&rdquo; . The song and footsteps grow louder, then subside. Then there&rsquo;s just clinking ice in Jeff&rsquo;s glass and birds chirping in the distance.</span></p>
                <p><span style={{ fontWeight: '300' }}>He sips from his jar.</span></p>
                <p><span style={{ fontWeight: '300' }}>I sip from mine.</span></p>
                <p><em><span style={{ fontWeight: '300' }}>People in movies always bury bodies in gardens.</span></em></p>
                <p><span style={{ fontWeight: '300' }}>He sips from his jar.</span><span style={{ fontWeight: '300' }}><br /></span> <span style={{ fontWeight: '300' }}>I set my jar on the table and stare at it trying to mentally assess my internal organs for signs of poisoning.&nbsp;</span></p>
                <p><span style={{ fontWeight: '300' }}>He sips from his jar.</span></p>
                <p><em><span style={{ fontWeight: '300' }}>The plants are pretty tall. I wonder if this picnic table is even visible from across the street. </span></em><em><span style={{ fontWeight: '300' }}><br /></span></em> <span style={{ fontWeight: '300' }}>He sips.</span></p>
                <p><span style={{ fontWeight: '300' }}>I imagine myself sprinting through the sunflowers to my car.</span></p>
                <p><span style={{ fontWeight: '300' }}>He sips.</span></p>
                <p><span style={{ fontWeight: '300' }}>My sense of propriety glues me to the picnic bench.</span></p>
                <p><span style={{ fontWeight: '300' }}>&nbsp;</span> <span style={{ fontWeight: '300' }}>Ice clinks at the bottom of Jeff&rsquo;s mason jar. &ldquo;So tell me Jenna,&rdquo;&nbsp; he lets out a satisfied sigh as he sets the empty jar on the table, &ldquo; If a Martian observed you through a super-powered telescope for the last year, what would he say about you?&rdquo;</span></p>
                <p><em><span style={{ fontWeight: '300' }}>Here we go. Aliens. This is a UFO cult.</span></em></p>
                <p><em><span style={{ fontWeight: '300' }}>&ldquo;</span></em><span style={{ fontWeight: '300' }}>I don&rsquo;t know.&rdquo; I shrug. &ldquo;What would a Martian say about you?&rdquo;</span></p>
                <p><span style={{ fontWeight: '300' }}>&nbsp;</span> <span style={{ fontWeight: '300' }}>Jeff strokes his beard. &ldquo;I think he&rsquo;d say I spend a lot of time outdoors, working with my hands. I smile more when I&rsquo;m with other people than when I&rsquo;m alone.&rdquo; He grins. &ldquo;And I&rsquo;m one badass fisherman!&rdquo;</span></p>
                <p><span style={{ fontWeight: '300' }}>I hear a cuckoo clock chiming the six o&rsquo;clock hour from somewhere inside his house.&nbsp;</span></p>
                <p><em><span style={{ fontWeight: '300' }}>Why do I always show up so early for everything.&nbsp;</span></em></p>
                <p><span style={{ fontWeight: '300' }}>I take another sip of lemonade. I think I detect a bitter note to it.&nbsp;</span></p>
                <p><span style={{ fontWeight: '300' }}>I don&rsquo;t swallow.&nbsp;</span></p>
                <p><span style={{ fontWeight: '300' }}>Raising my jar back to my lips, I subtly spit lemonade back in. &ldquo;So why have dinner with strangers?&rdquo;</span></p>
                <p><span style={{ fontWeight: '300' }}>&nbsp;</span> <span style={{ fontWeight: '300' }}>Jeff narrows his eyes at my lemonade jar, clearly nonplussed by my backwash.</span></p>
                <p><span style={{ fontWeight: '300' }}>&ldquo;I almost swallowed a seed.&rdquo; I lie.</span></p>
                <p><span style={{ fontWeight: '300' }}>&nbsp;</span> <span style={{ fontWeight: '300' }}>&ldquo;You must be pretty hungry then&rdquo;, Jeff winks &ldquo;I&rsquo;m making baked Halibut and rice for dinner.&rdquo;&nbsp; He presses himself up from the table. &ldquo;Would you mind carrying some things out from the house?&rdquo;&nbsp;</span></p>
                <p><span style={{ fontWeight: '300' }}>&nbsp;</span> <em><span style={{ fontWeight: '300' }}>Oh god he wants me to go inside his house.&nbsp;</span></em></p>
                <p><span style={{ fontWeight: '300' }}>I plaster on a grin as I remain rigidly seated on the picnic bench. </span><em><span style={{ fontWeight: '300' }}>Think of an excuse to leave. Think of an excuse to leave.</span></em></p>
                <p><em><span style={{ fontWeight: '300' }}>&nbsp;&ldquo;</span></em><span style={{ fontWeight: '300' }}>You know I just actually realized,&rdquo; my eyes dart around the yard searching for inspiration. &ldquo;Uhm&hellip;&rdquo;&nbsp;</span></p>
                <p><span style={{ fontWeight: '300' }}>A dog barks in the distance.</span></p>
                <p><span style={{ fontWeight: '300' }}>I swivel on the bench &ldquo;I need to go feed my dog.&rdquo;&nbsp;</span></p>
                <p><span style={{ fontWeight: '300' }}>Turning back to Jeff, I grab my purse from the table beside me.&nbsp;</span></p>
                <p><span style={{ fontWeight: '300' }}>&nbsp;</span> <span style={{ fontWeight: '300' }}>He flashes an amused smile. &ldquo;Alright. I&rsquo;m in the Halibut of eating alone anyway.&rdquo;</span></p>
                <p><span style={{ fontWeight: '300' }}>&ldquo;Sorry.&rdquo; I wince. &ldquo;I can&rsquo;t believe I forgot.&rdquo; I slide my purse strap over my shoulder. &ldquo;I share custody of him with my ex, so I totally spaced that today is my turn.&rdquo;</span></p>
                <p><span style={{ fontWeight: '300' }}>I scuffle down the gravel path tossing a quick. &ldquo;Thanks-again-see-you-around.&rdquo; Over my shoulder as I dart across the street.</span></p>
                <p><span style={{ fontWeight: '300' }}>&nbsp;</span> <span style={{ fontWeight: '300' }}>Grimacing, I fumble for the blazing hot door handle to my baby blue Kharmann Ghia and slide inside letting out a deep sigh of relief as I crank down the manual windows.&nbsp;</span></p>
                <p><span style={{ fontWeight: '300' }}>Without glancing back at Jeff&rsquo;s house, I jam my key into the ignition and turn it.&nbsp;</span></p>
                <p><span style={{ fontWeight: '300' }}>A muffled &ldquo;Vrrwuuhh&rdquo; issues from my engine.</span></p>
                <p><span style={{ fontWeight: '300' }}>Beads of sweat percolate on my temples.&nbsp;</span></p>
                <p><em><span style={{ fontWeight: '300' }}>Oh come on Kharma, not today, baby</span></em></p>
                <p><span style={{ fontWeight: '300' }}>The heavy cluster of commemorative key chains that I&rsquo;ve acquired over my lifetime jangles and my car sputters as I repeatedly twist my key in the ignition.</span></p>
                <p><span style={{ fontWeight: '300' }}>&ldquo;Vrrwuuhh&rdquo;</span></p>
                <p><span style={{ fontWeight: '300' }}>Jangle jangle&nbsp;</span></p>
                <p><span style={{ fontWeight: '300' }}>&ldquo;Vrrwuuhh&rdquo;</span></p>
                <p><span style={{ fontWeight: '300' }}>Jangle jangle</span></p>
                <p><span style={{ fontWeight: '300' }}>I grip my plush steering wheel cover with both hands and squeeze my eyes shut, knowing that Jeff is probably watching me and probably expecting me to ask him for help.&nbsp;</span></p>
                <p><span style={{ fontWeight: '300' }}>I am far too ashamed and creeped out to even look in the direction of&nbsp; his yard though.</span></p>
                <p><span style={{ fontWeight: '300' }}>Sighing, I blink open my eyes and reach for my purse.</span></p>
                <p><span style={{ fontWeight: '300' }}>As I rummage for my cell phone to text my friend Xenia for help, I hear the &ldquo;Party All the Time&rdquo; jogger coming around the block for a third lap.</span></p>
                <p><em><span style={{ fontWeight: '300' }}>She must live near here!</span></em></p>
                <p><span style={{ fontWeight: '300' }}>My door hinge creaks as I ease it open &ldquo;Hi&rdquo; I holler towards her.</span></p>
                <p><span style={{ fontWeight: '300' }}>She acts like she doesn&rsquo;t hear me.</span></p>
                <p><span style={{ fontWeight: '300' }}>&ldquo;Excuse me,&rdquo; I flail my hands over my head.</span><span style={{ fontWeight: '300' }}><br /></span> <span style={{ fontWeight: '300' }}>Huffing, she silences her disc man as she jogs towards me.</span></p>
                <p><span style={{ fontWeight: '300' }}>&ldquo;Sup?&rdquo; the neon lady pants, jogging in place in front of me &ldquo;Do you need something?&rdquo;</span></p>
                <p><span style={{ fontWeight: '300' }}>I smile, hopefully. &ldquo;My car battery died I think.&rdquo; I push my door shut. &ldquo;Do you live around here? Do you have jumper cables I could use?&rdquo;&nbsp;</span></p>
                <p><span style={{ fontWeight: '300' }}>Dabbing at her eyelid sweat with the corner of her pink t-shirt, her face pixelates.</span></p>
                <p><span style={{ fontWeight: '300' }}>As I wait for her glitch to pass, I glance behind me. Jeff is no longer at the picnic table.&nbsp;</span></p>
                <p><span style={{ fontWeight: '300' }}>&ldquo;I don't have jumper cables.&rdquo; The woman&rsquo;s face is back to normal, &ldquo;but I bet my friend Jeff does.&rdquo;</span></p>
                <p><span style={{ fontWeight: '300' }}>She stops jogging in place and yells, &ldquo;Hey Jeff.&rdquo; She points at me, &ldquo;this girl needs help jump-starting her car.&rdquo;</span></p>
                <p><span style={{ fontWeight: '300' }}>Wincing, I turn back toward Jeff&rsquo;s yard. He&rsquo;s already walking down his front path carrying jumper cables.</span></p>
                <p>&nbsp;</p>
                <p><strong>2042-08-15T20:37:04PST|28d0086c-da60-44e5-9c9b-54abfbe4154c|&lsquo;later at Jenna\&rsquo;s Apartment</strong><span style={{ fontWeight: '300' }}>&rsquo;</span></p>
                <p><span style={{ fontWeight: '300' }}>&nbsp;</span> <span style={{ fontWeight: '300' }}>&ldquo;The lady who sold him to me said he&rsquo;s a Terrier-Shepherd mix.&rdquo; I smile at my friend, Xenia as I push aside my plastic vertical blinds and slide open my glass patio door.</span></p>
                <p><span style={{ fontWeight: '300' }}>&nbsp;</span> <span style={{ fontWeight: '300' }}>Pajama, my new dog, wags his tail looking up innocently from my patio floor as he chomps on bits of the leg from my blue Adirondack chair.&nbsp;</span></p>
                <p><span style={{ fontWeight: '300' }}>&nbsp;</span> <span style={{ fontWeight: '300' }}>&ldquo;I don&rsquo;t know about Shepherd,&rdquo; Xenia cringes, &ldquo;but he&rsquo;s definitely terrier&rsquo;n your chair up.&rdquo;</span></p>
                <p><span style={{ fontWeight: '300' }}>&nbsp;</span> <span style={{ fontWeight: '300' }}>I stifle a laugh as I squat to face my new dog. &ldquo;I don&rsquo;t think this patio is big enough for him.&rdquo; I reach a tentative hand towards Pajama and a low growl escapes his throat as I tug at the mangled wood clenched in his teeth.</span></p>
                <p><span style={{ fontWeight: '300' }}>&ldquo;It&rsquo;s okay for dogs to eat wood right?&rdquo; I stand, wiping my palms on my khaki shorts.</span></p>
                <p><span style={{ fontWeight: '300' }}>&nbsp;</span> <span style={{ fontWeight: '300' }}>&ldquo;Lets not find out.&rdquo; Xenia kneels and in one swift motion, yanks the wood free from Pajama&rsquo;s jaws and tosses it over my patio wall.</span></p>
                <p><span style={{ fontWeight: '300' }}>&nbsp;</span> <span style={{ fontWeight: '300' }}>&ldquo;You're our hero.&rdquo; I beam at Xenia. &ldquo;I think I&rsquo;m going to have to find a place with a yard.&rdquo;</span></p>
                <p><span style={{ fontWeight: '300' }}>&nbsp;</span> <span style={{ fontWeight: '300' }}>Xenia slumps forward as she sits in the (now damaged) chair next to Pajama, scratching him between the ears.</span></p>
                <p><span style={{ fontWeight: '300' }}>&nbsp;&ldquo;Let me get this straight,&rdquo; she chuckles, &ldquo;you bought a dog, so you&rsquo;d feel comfortable going to dinner at some stranger&rsquo;s house and now you&rsquo;re going to buy a house to make the dog feel more comfortable?&rdquo;&nbsp;</span></p>
                <p><span style={{ fontWeight: '300' }}>Xenia shades her eyes and looks up at me tauntingly. &ldquo;Where have I heard this before?&rdquo; A grin spreads across her face as she begins singing. &ldquo;There was an old lady who swallowed a fly.&rdquo;</span></p>
                <p><span style={{ fontWeight: '300' }}>&nbsp;</span> <span style={{ fontWeight: '300' }}>&ldquo;Oh stop.&rdquo; I air-swat her. &ldquo;Pajama&rsquo;s the only one around here swallowing flies.&rdquo;&nbsp;</span></p>
                <p><span style={{ fontWeight: '300' }}>&nbsp;</span> <span style={{ fontWeight: '300' }}> Xenia leans back, crossing her arms. &ldquo;You better take him to training classes. &lsquo;Cause Pajama looks like he&rsquo;s fixin&rsquo; to terrier couch up next.&rdquo;</span></p>
                <p><span style={{ fontWeight: '300' }}>&nbsp;</span> <span style={{ fontWeight: '300' }}>&ldquo;Definitely.&rdquo; I nod.</span></p>
                <p><span style={{ fontWeight: '300' }}>&ldquo;Hey,&rdquo; I nudge Xenia, &ldquo;why don&rsquo;t you come with me to dinner next week?&rdquo; I hug her arm. &ldquo;From what I could smell, I think he&rsquo;s a really good cook.&rdquo;</span></p>
                <p><span style={{ fontWeight: '300' }}>&nbsp;</span> <span style={{ fontWeight: '300' }}>&ldquo;And I&rsquo;ll bet he loved having a fresh young girl to share fresh fish with!&rdquo; Xenia, tosses her black curls over her shoulder, eying her fingernail polish. &ldquo;He sounds like some kind of Traddy daddy cult leader.&rdquo;</span></p>
                <p><span style={{ fontWeight: '300' }}>I cringe, recalling his flannel shirt and unsettling hospitality. &ldquo;He did mention UFOs.&rdquo;&nbsp;&nbsp;</span></p>
                <p><span style={{ fontWeight: '300' }}>&ldquo;Seriously though.&rdquo; I pause until Xenia looks up from her nails. &ldquo;Please come with me.&rdquo;&nbsp;</span></p>
                <p><span style={{ fontWeight: '300' }}>Xenia rolls her eyes. &ldquo;Fine, glitch.&rdquo; She envelops me in a side hug. &ldquo;If you want, I&rsquo;ll even stay here tonight and protect you from your guard dog.&rdquo;</span></p>
                <p><br /><br /><br /><br /></p>
                <p><strong>2:</strong> <strong>Filename: &lsquo;Xenia Melon Balls Out Of Control&rsquo;,</strong></p>
                <p><strong>Timestamp: 2042-08-22T18:22:37:PST,</strong><span style={{ fontWeight: '300' }}>&nbsp;</span></p>
                <p><strong>Details: &lsquo;Xenia Chloros, Fremont-CA, Neighborhoods&rsquo;,</strong></p>
                <p><strong>H-ID: 81feeffe-0067-4226-9c41-313509217b49,</strong></p>
                <p><strong>Transcript:</strong></p>
                <p>&nbsp;</p>
                <p><span style={{ fontWeight: '300' }}>&nbsp;</span> <span style={{ fontWeight: '300' }}>Exasperated, I let my head thud against the back window of my black 1959 F-100 as I squeeze my eyes shut.&nbsp;</span></p>
                <p><span style={{ fontWeight: '300' }}>Cellphone pressed to my temple, I crunch the last bits of a peach lollipop between my molars and wait for Jenna&rsquo;s voicemail robot to finish reading her number to me.&nbsp; &ldquo;Glitch!&rdquo; I chomp my candy. &ldquo;I&rsquo;m here, where are you?&rdquo; I hang up.</span></p>
                <p><span style={{ fontWeight: '300' }}>&nbsp;</span> <em><span style={{ fontWeight: '300' }}>I&rsquo;m giving her five minutes, then I&rsquo;m gone.</span></em></p>
                <p><span style={{ fontWeight: '300' }}>&nbsp;</span> <span style={{ fontWeight: '300' }}>I glance at the clock on my phone.</span></p>
                <p><span style={{ fontWeight: '300' }}>6:22 PM</span></p>
                <p><span style={{ fontWeight: '300' }}>Whap-whap-whap! someone raps on my truck&rsquo;s window.&nbsp;</span></p>
                <p><span style={{ fontWeight: '300' }}>Sucking in air, I reel around to face some gray-bearded hippy waving at me.&nbsp;</span></p>
                <p><span style={{ fontWeight: '300' }}>He&rsquo;s tucked his black and blue plaid button up into his three-sizes-too-big jeans and the whole outfit is being held together by a beige nylon belt.</span></p>
                <p><span style={{ fontWeight: '300' }}>&ldquo;I noticed you&rsquo;ve been eyeing my house for at least ten minutes.&rdquo; He smiles. &ldquo;You here for dinner?&rdquo;</span></p>
                <p><span style={{ fontWeight: '300' }}>&nbsp;</span> <span style={{ fontWeight: '300' }}>Peeling up my sunglasses, I narrow my eyes. &ldquo;Yup. My friend Jenna invited me.&rdquo; I swing my door open forcing him to step back. &ldquo;She wanted me to protect her from the psycho-hippie-ufo-cult guy that lives here.&rdquo;</span></p>
                <p><span style={{ fontWeight: '300' }}>&ldquo;Is that so?&rdquo; He chortles.</span></p>
                <p><span style={{ fontWeight: '300' }}>Tucking my sunglasses into the collar of my white baby-v-neck t-shirt I swivel my legs towards him. &ldquo;You haven&rsquo;t seen Jenna today have you?&rdquo;</span></p>
                <p><span style={{ fontWeight: '300' }}>&nbsp;</span> <span style={{ fontWeight: '300' }}>&ldquo;Not since last week.&rdquo; He extends a hand to help me out of my truck.&nbsp;</span></p>
                <p><span style={{ fontWeight: '300' }}>My nostrils flare as his BO wafts towards me.&nbsp;</span></p>
                <p><span style={{ fontWeight: '300' }}>Taking his hand, I eye the dirt under his nails. His fingers are rough, grip firm like the jocks and farmers I grew up around.</span></p>
                <p><span style={{ fontWeight: '300' }}>He pokes his head into my truck cab.&nbsp;</span></p>
                <p><span style={{ fontWeight: '300' }}>I clear my throat.</span></p>
                <p><span style={{ fontWeight: '300' }}>&ldquo;Niiice!&rdquo; He withdraws his head and grins. &ldquo;Push button start.&rdquo;</span></p>
                <p><span style={{ fontWeight: '300' }}>&nbsp;</span> <span style={{ fontWeight: '300' }}>Grabbing my door, I glare at him. &ldquo;I converted it to a hybrid.&rdquo; I slam the door and lock it, sliding my keys into my purse.</span></p>
                <p><span style={{ fontWeight: '300' }}>&nbsp;</span> <span style={{ fontWeight: '300' }}> &ldquo;That sounds like a really cool project.&rdquo; He continues to ignore my rudeness.</span></p>
                <p><span style={{ fontWeight: '300' }}>&ldquo;Well,&rdquo; I lean back against my Ford. &ldquo;You can take the electrical engineer out of the country,&rdquo; I wipe my palms on my denim skirt, &ldquo;but you can&rsquo;t take the country out of the electrical engineer.&rdquo;</span></p>
                <p><span style={{ fontWeight: '300' }}>&ldquo;Wow!&rdquo; The hippy rocks back on his heels, grinning.&nbsp; &ldquo;that&rsquo;s a line.&rdquo;</span></p>
                <p><span style={{ fontWeight: '300' }}>&ldquo;As if I would drop <i>you</i> a line.&rdquo; My eyes narrow.&ldquo; I was just giving you some information about myself.&rdquo;</span><span style={{ fontWeight: '300' }}><br /></span> <span style={{ fontWeight: '300' }}>&ldquo;Ok.&rdquo; he shrugs. &ldquo;May I be informed of your name.&rdquo;</span><span style={{ fontWeight: '300' }}><br /></span> <span style={{ fontWeight: '300' }}>I shake my head, &ldquo;I haven&rsquo;t decided yet.&rdquo;</span><span style={{ fontWeight: '300' }}><br /></span> <span style={{ fontWeight: '300' }}>&ldquo;Eyehavent Deciyet&rdquo; He laughs.&nbsp; &lsquo;is that German?&rdquo;&nbsp;</span></p>
                <p><span style={{ fontWeight: '300' }}>&ldquo;Huh,&rdquo; I roll my eyes, &ldquo;You&rsquo;re a laaame old hippy.&rdquo;</span></p>
                <p><span style={{ fontWeight: '300' }}>&ldquo;I can&rsquo;t argue with that.&rdquo; He shrugs.&nbsp;</span></p>
                <p><span style={{ fontWeight: '300' }}>Glancing around, the hippy lowers his voice. &ldquo;You&rsquo;re a user, aren&rsquo;t you?&rdquo; He raises his eyebrows.&nbsp;</span></p>
                <p><span style={{ fontWeight: '300' }}>&ldquo;Excuse me?&rdquo; I clench my jaw. &ldquo;Are you trying to sell me drugs?&rdquo;</span><span style={{ fontWeight: '300' }}><br /></span> <span style={{ fontWeight: '300' }}>The hippie's face goes white, &ldquo;no no no no.&rdquo; He puts out his hands backing away from me. &ldquo;I&rsquo;m sober. I just. Uhm.&rdquo; He stammers. &ldquo;I thought I saw a pipe in your mouth earlier. I just can&rsquo;t be around that, so I had to ask.&rdquo;&nbsp;</span></p>
                <p><span style={{ fontWeight: '300' }}>&ldquo;A pipe?&rdquo; I scoff. &ldquo;I was eating a lollipop, you glitching Narc.&rdquo;</span></p>
                <p><span style={{ fontWeight: '300' }}>&ldquo;My apologies.&rdquo; The narc temples his fingers, bowing his head.</span></p>
                <p><span style={{ fontWeight: '300' }}>&ldquo;Anyway,&rdquo; He starts towards his house, pausing at the front walk. &ldquo;Dinner&rsquo;s not ready yet.&rdquo; The narc shrugs contritely, </span><em><span style={{ fontWeight: '300' }}>&ldquo;If</span></em><span style={{ fontWeight: '300' }}> you&rsquo;re staying, you can wait at the table in the yard.&rdquo; He indicates an aging pinewood picnic table, unshaded in the blazing hot sun.</span></p>
                <p><span style={{ fontWeight: '300' }}>&ldquo;It&rsquo;s a million degrees right now.&rdquo; I give my door handle a tug, checking that the lock is engaged.&nbsp;</span></p>
                <p><span style={{ fontWeight: '300' }}>&ldquo;I&rsquo;ll come be your sober buddy inside.&rdquo; Fishing out a brown paper bag from my cross-body satchel, I stride towards his house.</span></p>
                <p>&nbsp;</p>
                <p><span style={{ fontWeight: '300' }}>The narc waves down the street at some middle aged jogger in a neon Eddie Murphy T-shirt as he props his screen door open with his back.</span></p>
                <p><span style={{ fontWeight: '300' }}>My wedge sandals scrape an aged wood floor as I sidle past him into a small living room.&nbsp;</span></p>
                <p><span style={{ fontWeight: '300' }}>I thrust the crumpled paper sack towards him, a smile dancing across my lips. &ldquo;Based on Jenna&rsquo;s description of you, I thought this might be something you&rsquo;d like&rdquo;,&nbsp;&nbsp;</span></p>
                <p><span style={{ fontWeight: '300' }}>&nbsp;Peeking in the bag he chuckles. &ldquo;I actually do love peanut brittle.&rdquo; He pulls out the shrink wrapped candy, admiring the nut chunks in the afternoon sunlight. &ldquo;Can I offer you a piece?&rdquo;</span></p>
                <p><span style={{ fontWeight: '300' }}>&ldquo;No&rdquo;. I eye the dollar store candy disdainfully, &ldquo;That&rsquo;s all for you, man.&rdquo;&nbsp;</span></p>
                <p><span style={{ fontWeight: '300' }}>Frowning,&nbsp; I glance through a doorway to the right of the front entrance.</span> <span style={{ fontWeight: '300' }}>The floor is some red vinyl brick mess. Cabinets, canary-yellow. And there are stained white curtains covering all the windows.</span></p>
                <p><em><span style={{ fontWeight: '300' }}>How can someone who&rsquo;s trying to bring the world together through dinner parties have *that* kitchen?</span></em></p>
                <p><span style={{ fontWeight: '300' }}>&nbsp;</span> <span style={{ fontWeight: '300' }}>The narc strides into the gross kitchen returning with a mason jar of icy something, which he extends towards me. &ldquo;Fresh lemonade?&rdquo;</span></p>
                <p><span style={{ fontWeight: '300' }}>&nbsp;</span> <em><span style={{ fontWeight: '300' }}>There&rsquo;s that alarming hospitality Jenna was talking about.&nbsp;</span></em></p>
                <p><span style={{ fontWeight: '300' }}>Turning away from the lemonade, I glance at my cell.&nbsp;</span></p>
                <p><span style={{ fontWeight: '300' }}>Jenna texted: </span><em><span style={{ fontWeight: '300' }}>Something came up at PJs dog class today. Not&nbsp; gonna make it 2nite.</span></em></p>
                <p><span style={{ fontWeight: '300' }}>&nbsp;</span> <span style={{ fontWeight: '300' }}>I roll my eyes.</span></p>
                <p><span style={{ fontWeight: '300' }}>The narc settles into his lumpy green sofa as my thumbs swipe across the face of my phone.&nbsp;</span></p>
                <p><em><span style={{ fontWeight: '300' }}>J-Glitch, if you&rsquo;re going to blow me off at least don&rsquo;t be vague. WTF!?</span></em></p>
                <p><span style={{ fontWeight: '300' }}>The narc sets the jar of lemonade and a dish of peanut brittle on the coffee table and gestures for me to have a seat.&nbsp;</span></p>
                <p><span style={{ fontWeight: '300' }}>&ldquo;Thanks.&rdquo; I mutter, glancing at my phone.&nbsp;</span></p>
                <p><span style={{ fontWeight: '300' }}>No response from Jenna.</span></p>
                <p><span style={{ fontWeight: '300' }}>&nbsp;I open my mouth to tell the narc I&rsquo;m leaving, but my voice is drowned out by the wrapping of the knocker on the front door.</span></p>
                <p><span style={{ fontWeight: '300' }}>&nbsp;&nbsp;</span> <span style={{ fontWeight: '300' }}>The narc bustles towards the entryway and yanks the door open, revealing a middle-aged couple, each carrying a canvas bag bulging with vegetables.&nbsp;</span></p>
                <p><span style={{ fontWeight: '300' }}>&ldquo;Hey guys.&rdquo; The narc hugs his guests in turn. &ldquo;We&rsquo;ve got a noob tonight.&rdquo;</span></p>
                <p><span style={{ fontWeight: '300' }}>&ldquo;Greetings Young Padawan!&rdquo; They coo at me in unison.</span></p>
                <p><span style={{ fontWeight: '300' }}>&nbsp;</span> <span style={{ fontWeight: '300' }}>I plaster on a smile, and flash them a vulcan salute.</span></p>
                <p><span style={{ fontWeight: '300' }}>&nbsp;</span></p>
                <p><span style={{ fontWeight: '300' }}>The woman&rsquo;s stiflingly floral perfume envelopes me as she hands off her bags to the hippy, &ldquo;I&rsquo;m Carmen.&rdquo; she coos hurrying at me with outreached arms.</span></p>
                <p><span style={{ fontWeight: '300' }}>&nbsp;</span> <span style={{ fontWeight: '300' }}>I mean to duck out of the way, but a glitch buzzes from</span></p>
                <p><span style={{ fontWeight: '300' }}>&nbsp;my torso to my feet, gluing me in place.&nbsp;</span></p>
                <p><span style={{ fontWeight: '300' }}>The moment my body stops pixelating, Carmen, pulls me into an embrace.</span></p>
                <p><span style={{ fontWeight: '300' }}>As she steps back, her husband or whoever,&nbsp; jabs his arms towards me and grabs both my hands in both of his. &ldquo;Hi! I&rsquo;m Diego.&rdquo; His fingers are calloused like the narc&rsquo;s.&nbsp;</span></p>
                <p><span style={{ fontWeight: '300' }}>&nbsp;</span> <span style={{ fontWeight: '300' }}>&ldquo;I&rsquo;m Xenia.&rdquo; I say keeping my face neutral as I hear the narc, behind me, say &ldquo;pleased to finally make your acquaintance Xenia. I&rsquo;m Jeff by the way.&rdquo;</span><span style={{ fontWeight: '300' }}><br /></span> <span style={{ fontWeight: '300' }}>I smile and nod while Carmen and Diego gush about their pleasure in meeting me.&nbsp; &ldquo;It&rsquo;s great to meet you too Carmen and Diego.&rdquo;&nbsp; I intentionally leave out Jeff.</span></p>
                <p><span style={{ fontWeight: '300' }}>&nbsp;</span> <span style={{ fontWeight: '300' }}>&ldquo;Did you grow those?&rdquo; I nod towards a dirt-crusted bundle of carrots protruding from a grocery bag.</span></p>
                <p><span style={{ fontWeight: '300' }}>&nbsp;</span> <span style={{ fontWeight: '300' }}> &ldquo;Yes!" Carmen claps her hands. "We grew everything we brought tonight. This is actually our first harvest.&rdquo; She puts her hands on Jeff&rsquo;s shoulders. &ldquo;Thanks to Mr. Green thumb here!&rdquo; </span></p>
                <p><span style={{ fontWeight: '300' }}>Diego leans toward me. &ldquo;This guy knows everything about everything. We&rsquo;ve only been coming for three months, and already we have a dang huge vegetable garden and a beautiful flock of baby chickens at our house.&rdquo;</span></p>
                <p><span style={{ fontWeight: '300' }}>&ldquo;We&rsquo;re hoping to grow our little supper club too.&rdquo; Carmen effuses as she begins unpacking her grocery bag. &ldquo;Right now Diego and I are the only&rdquo; she makes air quotes &ldquo;regulars.&rdquo;</span></p>
                <p><span style={{ fontWeight: '300' }}>&nbsp;</span> <span style={{ fontWeight: '300' }}>Jeff puts his arm around Carmen. &ldquo;I certainly wouldn&rsquo;t call them regular. These two are a couple of oddballs.&rdquo;</span></p>
                <p><span style={{ fontWeight: '300' }}>&nbsp;</span> <span style={{ fontWeight: '300' }}>Diego glares at Jeff's hand draped over Carmen's shoulder.</span></p>
                <p><span style={{ fontWeight: '300' }}>&nbsp;</span> <span style={{ fontWeight: '300' }}>&ldquo;Well this guy,&rdquo; Diego claps Jeff hard on his shoulder, pulling him away. &ldquo;This crazy guy here.&rdquo; He coos, &ldquo;Is the biggest oddball of them all.&rdquo;</span></p>
                <p><span style={{ fontWeight: '300' }}>&nbsp;</span> <span style={{ fontWeight: '300' }}>I follow them into the kitchen, leaning against the cabinet nearest the front exit, silently watching as they wash vegetables and chatter about how the term oddball must have originated.</span></p>
                <p><span style={{ fontWeight: '300' }}>&ldquo;Oh, I have a great idea,&rdquo; Carmen claps her hands together. &ldquo;Let's make this a themed dinner.&rdquo; She reaches for a drawer by her hip. &ldquo;We can use melon-ballers to shape these vegetables into spheres.&rdquo; She pulls out a melon baller. &ldquo;It&rsquo;ll be odd-ball soup!&rdquo;</span></p>
                <p><span style={{ fontWeight: '300' }}>Jeff gushes about how brilliant Carmen&rsquo;s unnecessarily complicated plan is as he grabs a paring knife and a potato.&nbsp;</span></p>
                <p><span style={{ fontWeight: '300' }}>Minutes later a small mound of vegetable spheres has begun to form in a metal colander in the kitchen sink.&nbsp;</span></p>
                <p><span style={{ fontWeight: '300' }}>Jeff turns to Diego.&ldquo;I made this one special for you, Diego.&rdquo;</span></p>
                <p><span style={{ fontWeight: '300' }}>Craning my neck, I see Diego grinning at a bit of potato. He calls Carmen over, and she giggles and says how darling the potato lump is.</span></p>
                <p><span style={{ fontWeight: '300' }}>&ldquo;Xena look at this,&rdquo; she beckons to me.</span></p>
                <p><span style={{ fontWeight: '300' }}>Boards creek underfoot as I step towards Carmen. Peering down at the potato ball, which has a circle gouged out, I shrug. &ldquo;Oh. The Death Star.&rdquo; I shrug, cross my arms and go back to leaning against the cabinets.</span></p>
                <p><span style={{ fontWeight: '300' }}>&ldquo;Oh wow look at this&rdquo; Carmen coos, &ldquo;Jeff made a little potato baby yoda.&rdquo;</span></p>
                <p><span style={{ fontWeight: '300' }}>Diego brings the potato carving over and holds it in front of my face. &ldquo;Isn&rsquo;t this amazing?&rdquo;</span><span style={{ fontWeight: '300' }}><br /></span> <span style={{ fontWeight: '300' }}>I take the potato and scrutinize it. It&rsquo;s a perfect glitching Goku. I thrust the carved potato back at Diego.&ldquo;It looks like Dobby from Harry Potter.&rdquo;&nbsp;</span></p>
                <p><span style={{ fontWeight: '300' }}>&ldquo;Oh yeah!&rdquo; Jeff grabs another potato from Carmen&rsquo;s bag &ldquo;I could see that.&rdquo;&nbsp;</span></p>
                <p><span style={{ fontWeight: '300' }}>&nbsp;</span> <span style={{ fontWeight: '300' }}>Carmen hands me a melon baller. &ldquo;So what brings you here tonight Xenia?&rdquo;</span></p>
                <p><span style={{ fontWeight: '300' }}>&nbsp;</span> <span style={{ fontWeight: '300' }}>I grab a freshly scrubbed carrot from the sink. &ldquo;My </span><em><span style={{ fontWeight: '300' }}>former</span></em><span style={{ fontWeight: '300' }}> friend&rdquo; I mutter, &ldquo; told me to meet her here.&rdquo; Pinning the carrot against the countertop, I dig the melon baller into its dense orange flesh and twist.&nbsp;</span></p>
                <p><span style={{ fontWeight: '300' }}>&ldquo;So, how&rsquo;d you and Diego hear about &ndash;&rdquo; I circle my melon baller around Jeff&rsquo;s kitchen, &ldquo;whatever this is?&rdquo;</span></p>
                <p><br /><br /><br /><br /></p>
                 <strong>3:</strong><strong> Filename: &lsquo;Diego Checks Out Jeff&rsquo;s Knocker&rsquo;,</strong>
                <p><strong>Timestamp: 2042-05-04T14:07:14:PST,</strong></p>
                <p><strong>Details: &lsquo;Diego Garcia, Fremont-CA, Neighborhoods&rsquo;,</strong></p>
                <p><strong>H-ID: b54ba8fb-01fa-496e-b97c-e3aaef3fb11a,</strong></p>
                <p><strong>Transcript:</strong></p>
                <p>&nbsp;</p>
                <p><span style={{ fontWeight: '300' }}>&nbsp;</span> <span style={{ fontWeight: '300' }}>&ldquo;Luke khhh phhh&rdquo; I squat down beside my five-year-old son who&rsquo;s lounging in a chair shaped like a Tie Fighter. His wide dark eyes fixed on my Darth Vader mask. &ldquo;I am your father khhh phhh.&rdquo;</span></p>
                <p><span style={{ fontWeight: '300' }}>&nbsp;</span> <span style={{ fontWeight: '300' }}> Luke giggles and kicks his feet. &ldquo;I know daddy.&rdquo;</span></p>
                <p><span style={{ fontWeight: '300' }}>&nbsp;</span> <span style={{ fontWeight: '300' }}>Carmen, in her flowing white Leia costume shakes her head, her clip-on leia hair-buns flapping wildly. &ldquo;Boy, Luke&rsquo;s gonna get sick of hearing that one day.&rdquo;</span></p>
                <p><span style={{ fontWeight: '300' }}>&nbsp;</span> <span style={{ fontWeight: '300' }}>I reach up for Carmen&rsquo;s hand, &ldquo;That&rsquo;s just the dark side in you talking.&rdquo; She helps me to my feet before pushing up my mask and kissing me with a nice little bit of tongue.&nbsp;</span></p>
                <p><span style={{ fontWeight: '300' }}>I pull away sliding my mask back down. &ldquo;khhh phhh That&rsquo;s highly inappropriate behavior khhh phhh,&rdquo; I shake my head &ldquo;considering khhh phhh I am </span><em><span style={{ fontWeight: '300' }}>your </span></em><span style={{ fontWeight: '300' }}>father too Leia khhh phhh.&rdquo;</span></p>
                <p><span style={{ fontWeight: '300' }}>&nbsp;</span> <span style={{ fontWeight: '300' }}> Carmen rolls her eyes. &ldquo;Diego, that&rsquo;s the grossest thing you&rsquo;ve ever said to me&rdquo;,&nbsp; she slaps my butt, &ldquo;bhuuutt it&rsquo;s no secret, Leia&rsquo;s got a predilection for incest.&rdquo;</span></p>
                <p><span style={{ fontWeight: '300' }}>&nbsp;</span> <span style={{ fontWeight: '300' }}>I lace my arm through hers and we both giggle.</span></p>
                <p><span style={{ fontWeight: '300' }}>Luke hops out of his stroller, freezing and pixelating briefly, before giving two swift tugs on the back of my Vader cape. &ldquo;Daddy,&rdquo; He gazes up at me, &ldquo;what&rsquo;s a prediction for insess?&rdquo;</span></p>
                <p><span style={{ fontWeight: '300' }}>I take his tiny hand as we begin strolling towards the back of the line to take a picture with a life sized Java The Hut mannequin. &ldquo;It&rsquo;s Game of Thrones Stuff son.&rdquo;&nbsp;</span></p>
                <p><span style={{ fontWeight: '300' }}>Luke halts, drops my hand and peers up at me. &ldquo;Ooh.&rdquo;</span></p>
                <p><span style={{ fontWeight: '300' }}>Luke was scared to death one Sunday night when he walked in on Carmen and I, streaming a classic episode of G.O.T.&nbsp;</span></p>
                <p><span style={{ fontWeight: '300' }}>He&rsquo;s not a kid who likes violence, so now whenever we don&rsquo;t want him to pay attention to something, we just say it&rsquo;s Game of Thrones Stuff and he stops asking questions.</span></p>
                <p><span style={{ fontWeight: '300' }}>&nbsp;</span> <span style={{ fontWeight: '300' }}>I reach down and take Luke&rsquo;s hand again. When I look up, a blonde woman dressed in a brown furry bodysuit with face painted brown and black, is wandering over to Carmen.&nbsp;</span></p>
                <p><span style={{ fontWeight: '300' }}>&ldquo;Mam, I was watching y&rsquo;all and I just have to say,&rdquo; she drawls. &ldquo;Your son is just plain adorable with his little lightsaber and all.&rdquo;</span></p>
                <p><span style={{ fontWeight: '300' }}>Carmen freezes.</span></p>
                <p><span style={{ fontWeight: '300' }}>&ldquo;Thanks.&rdquo; I give Carmen&rsquo;s &ndash; very tense &ndash; shoulder a squeeze. &ldquo;Your costume&rsquo;s hella cool too.&rdquo;</span></p>
                <p><span style={{ fontWeight: '300' }}>&nbsp;The Chewbacca lady smiles at me before turning back to Carmen. &ldquo;If it&rsquo;s okay with his mom and dad,&rdquo;</span></p>
                <p><span style={{ fontWeight: '300' }}>I wince as I hear Carmen suck in her breath.&nbsp;</span></p>
                <p><span style={{ fontWeight: '300' }}>The Chewbacca lady squats down in front of Luke. &ldquo;I know a green jedi master who would just love to see what the future holds for this little padawan.&rdquo;</span></p>
                <p><span style={{ fontWeight: '300' }}>&nbsp;</span> <span style={{ fontWeight: '300' }}>I can see Carmen fighting back tears as she says: &ldquo;We were actually just leaving.&rdquo;</span></p>
                <p><span style={{ fontWeight: '300' }}>Seeing Carmen&rsquo;s distress, the Chewbacca lady starts petting the fur on her arm. &ldquo;Well.&rdquo; She turns away from us, &ldquo;May the fourth be with y&rsquo;all.&rdquo; Hurriedly, she strides back towards the Yoda fortune-telling booth across the convention floor.</span></p>
                <p><span style={{ fontWeight: '300' }}>&nbsp;&nbsp;</span> <span style={{ fontWeight: '300' }}>I glance down at Luke, happily playing with his lightsaber. Then my eyes drift back up to Carmen, tears silently sliding down her cheeks.&nbsp;</span></p>
                <p><span style={{ fontWeight: '300' }}>Taking her hand, I lean close to her, so that Luke can&rsquo;t hear. &ldquo;I know it hurts you that you and I don&rsquo;t have kids and I know Gina is really rude to you about spending time with him, but Luke loves you I love you... so so much.&rdquo; I kiss the top of her head.</span></p>
                <p><span style={{ fontWeight: '300' }}>&nbsp;</span> <span style={{ fontWeight: '300' }}> Carmen&rsquo;s long white sleeve brushes over Luke&rsquo;s hair, sending him into a giggle fit as she dabs her eye. &ldquo;C&rsquo;mon Diego, let&rsquo;s just go.&rdquo;</span></p>
                <p>&nbsp;</p>
                <p><strong>2042-08-22T16:40:41PST|b54ba8fb-01fa-496e-b97c-e3aaef3fb11a|&lsquo;Outside the convention</strong><span style={{ fontWeight: '300' }}>&rsquo;</span></p>
                <p><span style={{ fontWeight: '300' }}>As we approach the Powell street BART station, Carmen nudges me with her elbow and nods at a white GM van, parked in a loading dock beside us. &ldquo;Diego, go to that website on your phone.&rdquo; She points to a giant QR code on the side of the van.&nbsp;</span></p>
                <p>&nbsp;</p>
                <p><strong>2042-08-22T16:47:41PST|b54ba8fb-01fa-496e-b97c-e3aaef3fb11a|&lsquo;After dropping Luke with his mom</strong><span style={{ fontWeight: '300' }}>&rsquo;</span></p>
                <p><span style={{ fontWeight: '300' }}>A jogger in a hot pink Eddie Murphy T shirt trots by as I ease my green Subaru Outback to a stop beside a row of liquid amber trees on a quiet suburban street in Fremont. &ldquo;Oh wow, babe,&rdquo; Carmen points, &ldquo;The force is strong with whoever planted that garden.&rdquo;</span></p>
                <p><span style={{ fontWeight: '300' }}>&nbsp;</span> <span style={{ fontWeight: '300' }}>Turning to where Carmen is pointing I hear my seat belt retract into its holster as I&rsquo;m transfixed by the bountiful front yard across from us.</span><span style={{ fontWeight: '300' }}><br /></span> <span style={{ fontWeight: '300' }}>Wood-bordered garden beds, bursting with sprouting vegetables surround a long, split-log picnic table in the middle of a crushed gravel clearing.&nbsp;</span></p>
                <p><span style={{ fontWeight: '300' }}>All my life, until eight months ago when I bought my first house, I lived in one apartment or another around the Bay Area. I&rsquo;ve had some impressive herb gardens on apartment balconies and I&rsquo;ve grown a decent potted tomato plant or a cucumber vine a few times, but the one thing that I have always really wanted is just a big ol&rsquo; home garden with enough vegetables and fruits to feed my family. I want Luke to have fresh clean produce every day.&nbsp;</span></p>
                <p><span style={{ fontWeight: '300' }}>&ldquo;Come on slowpoke&rdquo; Carmen waves at me from across the street.</span></p>
                <p><span style={{ fontWeight: '300' }}>Fishing my cell out of my pocket,&nbsp; I hurry out of the car.</span></p>
                <p><span style={{ fontWeight: '300' }}>&ldquo;Smile Carmen&rdquo; I coo as I snap a quick pic.&nbsp;</span></p>
                <p><span style={{ fontWeight: '300' }}>Shoving my phone back in my front pocket I chirp my car lock and stride across the street, taking Carmen&rsquo;s hand as we wander up the gravel path to a solid oak door.</span></p>
                <p><span style={{ fontWeight: '300' }}>&ldquo;Check out the knocker on this one&rdquo; Carmen elbows me jovially as she hammers the gleaming chrome door knocker.</span></p>
                <p><span style={{ fontWeight: '300' }}>I let out a hearty laugh. &ldquo;Nothing on you though babe.&rdquo; I kiss her wiry hair and sigh in the smell of flowers and fruit.&nbsp;</span></p>
                <p><span style={{ fontWeight: '300' }}>The door lurches open with a loud creak.</span></p>
                <p><span style={{ fontWeight: '300' }}>&nbsp;</span> <span style={{ fontWeight: '300' }}>A broad shouldered man about my age or maybe in his later forties waves us in.</span></p>
                <p><span style={{ fontWeight: '300' }}>&ldquo;Hi you!&rdquo; He smiles at my wife with a note of familiarity. &ldquo;Carmen?&rdquo;.&nbsp;</span></p>
                <p><span style={{ fontWeight: '300' }}>&nbsp;</span> <span style={{ fontWeight: '300' }}>&ldquo;Yes. Hi!&rdquo; Carmen titters. &ldquo;We spoke on the phone.&rdquo;&nbsp;</span></p>
                <p><span style={{ fontWeight: '300' }}>Grinning, she marches over and embraces our new friend. &ldquo;Good to meet you Jeff.&rdquo;</span></p>
                <p><span style={{ fontWeight: '300' }}>&nbsp;</span> <span style={{ fontWeight: '300' }}>As Carmen steps back, I jaunt over and offer up a handshake . &ldquo;May the fourth be with you.&rdquo;</span></p>
                <p><span style={{ fontWeight: '300' }}>&nbsp;</span> <span style={{ fontWeight: '300' }}>&ldquo;And also with you.&rdquo; Jeff chuckles.</span></p>
                <p><span style={{ fontWeight: '300' }}>&nbsp;</span> <span style={{ fontWeight: '300' }}>&ldquo;It smells delicious in here,&rdquo; Carmen coos as she sets her purse on the green corduroy sofa, beside the front door.</span></p>
                <p><span style={{ fontWeight: '300' }}>&nbsp;</span> <span style={{ fontWeight: '300' }}>&ldquo;Thanks.&rdquo; Pride sweeps over Jeff&rsquo;s face. &ldquo;I put a chili cornbread casserole in the oven about twenty minutes ago.&rdquo;</span></p>
                <p>&nbsp;</p>
                <p><strong>2042-08-22T18:52:41PST|b54ba8fb-01fa-496e-b97c-e3aaef3fb11a|&lsquo;later, things get spicy</strong><span style={{ fontWeight: '300' }}>&rsquo;</span><span style={{ fontWeight: '300' }}>&nbsp;</span></p>
                <p><span style={{ fontWeight: '300' }}>We&rsquo;re sitting on Jeff&rsquo;s couch watching his dog, Spice Rack, show off tricks when the oven timer dings.&nbsp;</span></p>
                <p><span style={{ fontWeight: '300' }}>Jeff rises from the couch,&nbsp; &ldquo;Can you two take the plates and silverware out to the picnic table while I grab the casserole and put <i>my spicy boy</i>,&rdquo; Jeff puppy-talks as the dog wriggles and bounces on its front paws. &ldquo;into my bedroom?&ldquo;&nbsp;</span></p>
                <p><span style={{ fontWeight: '300' }}>&ldquo;No problem.&rdquo; I grab the stack of brown ceramic dishes and a coffee can, filled with silverware from Jeff&rsquo;s kitchen counter.&nbsp;</span></p>
                <p><span style={{ fontWeight: '300' }}>&ldquo;Hey, Diggy!&rdquo; Carmen swats my shoulder with the napkins she's carrying, &ldquo;can you grab the Salt and pepper from Jeff&rsquo;s dining room?&rdquo; </span><span style={{ fontWeight: '300' }}><br /></span> <span style={{ fontWeight: '300' }}>&ldquo;You got it babe!&rdquo; I run back inside, passing Jeff as he exits with the casserole.</span></p>
                <p><span style={{ fontWeight: '300' }}>&nbsp;</span> <span style={{ fontWeight: '300' }}>&ldquo;I don&rsquo;t think there actually is a dining room.&rdquo; I call out to no one in particular as I wander back into the kitchen and begin rummaging through Jeff&rsquo;s cabinets.</span></p>
                <p><span style={{ fontWeight: '300' }}>Grabbling a blue Morton salt canister, I trot outside.</span></p>
                <p><span style={{ fontWeight: '300' }}>&nbsp;&ldquo;I couldn&rsquo;t find any pepp&hellip;&rdquo; My gut clenches as I peer across the front yard.</span></p>
                <p><span style={{ fontWeight: '300' }}>Jeff and Carmen, bodies angled towards one another, turn away, suddenly silent.&nbsp;</span></p>
                <p><span style={{ fontWeight: '300' }}>Taking a deep, calming breath, I stride past the front garden beds towards the table.&nbsp;</span></p>
                <p><span style={{ fontWeight: '300' }}>Pursing my lips, I slam the salt canister down on the table directly in front of a set of ceramic salt and pepper shakers.</span></p>
                <p><span style={{ fontWeight: '300' }}>Jeff scoots away from Carmen &ldquo;Sorry man, did you want to sit next to your wife?&rdquo;</span></p>
                <p><span style={{ fontWeight: '300' }}>&ldquo;We were just realizing,&rdquo; He starts to get up.&nbsp; &ldquo;We used to play World of Warcraft together.&rdquo;&nbsp;</span></p>
                <p><span style={{ fontWeight: '300' }}>I&rsquo;m silent as my eyes shift from Jeff to Carmen and back.&nbsp;</span></p>
                <p><span style={{ fontWeight: '300' }}>I take a deep breath. &ldquo;No you&rsquo;re fine.&rdquo; I force a smile as I gesture for Jeff to sit back down.</span></p>
                <p><span style={{ fontWeight: '300' }}>&ldquo;I like to look at Carmen while I eat anyway.&rdquo; I wink at my wife.</span></p>
                <p><span style={{ fontWeight: '300' }}>She lets out a nervous giggle and winks back as I slide onto the bench across from her.&nbsp;</span></p>
                <p><span style={{ fontWeight: '300' }}>Jeff nods at my &ldquo;I&rsquo;m not a droid, you're a droid&rdquo; t-shirt &ldquo;So, what&rsquo;s your favorite Star Wars movie, Diego?&rdquo;</span></p>
                <p><span style={{ fontWeight: '300' }}>While we wait for dinner to cool, the three of us fall easily into a conversation laced with Star Wars philosophy, tips on urban food foraging, and an impromptu sing-a-long of Mr. Roboto.&nbsp;</span></p>
                <p><span style={{ fontWeight: '300' }}>By the time our host begins dishing gobs of casserole onto our plates, we&rsquo;re heaping heavier topics onto our conversation.</span></p>
                <p><span style={{ fontWeight: '300' }}>&ldquo;The world&rsquo;s in this pickle.&rdquo; Jeff scrapes up the last forkful of beans and cheese from his plate.&nbsp; &ldquo;Corporations are bound to shareholders to make money,&rdquo; He rolls her eyes, &ldquo;and marketing departments have figured out that if they stir up anxiety, they get clicks and make bucks.&rdquo; He rubs his thumb and index fingers.</span></p>
                <p><span style={{ fontWeight: '300' }}>&ldquo;It&rsquo;s true, the web&rsquo;s like straight up Tatooine right now.&rdquo; Carmen shoots me a coy smile.</span></p>
                <p><span style={{ fontWeight: '300' }}>I chuckle, winking at my wife. I love when she finds little ways to bring Star Wars into things.</span></p>
                <p><span style={{ fontWeight: '300' }}>&ldquo;I think with globalization,&rdquo; Jeff sets down his fork, &ldquo;most people are just put upon to do too much for too many.&rdquo; He shakes his head. &ldquo;Sure, everyone&rsquo;s interacting all the time, but the scale is too big.&rdquo; He drops his napkin on his empty plate. &ldquo;Nurses have too many patients to give the care they&rsquo;d like, teachers have too many students to help every kid fulfill their potential.&rdquo; He rises, picking up his plate. &ldquo;We treat everyone outside our social sphere like they&rsquo;re just non-persons in some video game we&rsquo;re playing.&rdquo;</span></p>
                <p><span style={{ fontWeight: '300' }}>&nbsp;</span></p>
                <p><strong>2042-08-22T19:17:53PST|b54ba8fb-01fa-496e-b97c-e3aaef3fb11a|&lsquo;back to oddball soup</strong><span style={{ fontWeight: '300' }}>&rsquo;</span></p>
                <p><span style={{ fontWeight: '300' }}>&nbsp;</span> <span style={{ fontWeight: '300' }}>I shrug as I finish my story for Xenia. &ldquo;I definitely feel like a nonperson more and more these days.&rdquo;</span></p>
                <p><span style={{ fontWeight: '300' }}>Grabbing Jeff&rsquo;s yellow, stain-covered oven mitts, I follow Xenia out front with the steaming pot of oddball soup.</span></p>
                <p><span style={{ fontWeight: '300' }}>&ldquo;So is Luke just at home kicking back with some beers and babes right now or what?&rdquo; She teases, sliding onto the picnic bench.</span></p>
                <p><span style={{ fontWeight: '300' }}>&nbsp;</span> <span style={{ fontWeight: '300' }}>Easing one of the oven mitts off underneath the soup pot, I set it in the center of the picnic table.&nbsp;</span></p>
                <p><span style={{ fontWeight: '300' }}>&ldquo;No&rdquo; I glance nervously back at Carmen, who&rsquo;s exiting Jeff&rsquo;s house.</span></p>
                <p><span style={{ fontWeight: '300' }}>&ldquo;Lukes-mom-doesnt-want-Luke-coming-here.&rdquo;&nbsp;</span></p>
                <p><span style={{ fontWeight: '300' }}>Carmen is walking out the front door carrying a cutting board with cornbread and butter.&nbsp;</span></p>
                <p><span style={{ fontWeight: '300' }}>I lean towards Xenia. &ldquo;It-upsets -Carmen-Don&rsquo;t-bring-it-up.&rdquo;&nbsp;</span></p>
                <p><span style={{ fontWeight: '300' }}>Straightening, I smile at my wife.&nbsp; &ldquo;Need me to grab anything else babe?&rdquo;</span><span style={{ fontWeight: '300' }}><br /></span> <span style={{ fontWeight: '300' }}>Jeff trudges out of the house carrying his ceramic salt and pepper shakers. &ldquo;I think we&rsquo;ve got it all Diggy&rdquo; He teases me.</span></p>
                <p><span style={{ fontWeight: '300' }}>&nbsp;</span> <span style={{ fontWeight: '300' }}>&ldquo;Hey, only Carmen can call me th&hellip;&rdquo; My voice is cut off by a car door slamming shut down the street.&nbsp;</span></p>
                <p><span style={{ fontWeight: '300' }}>A shimmering bronze Ford Bronco whips out of sight around the corner as a scruffy dog bounds full speed towards our picnic table, pulling some poor girl behind him.</span></p>
                <br /><br />
                <p>
                    <strong>4: Filename: &lsquo;Jenna\&rsquo;s Petucation&rsquo;,</strong>
                </p>
                <p>
                    <strong>Timestamp: 2042-08-22T16:45:02:PST,</strong>
                </p>
                <p>
                    <strong>Details: &lsquo;Jenna Carson, Hayward-CA, Neighborhoods&rsquo;,</strong>
                </p>
                <p>
                    <strong>H-ID: 28d0086c-da60-44e5-9c9b-54abfbe4154c,</strong>
                </p>
                <p>
                    <strong>Transcript:</strong>
                </p>
                <p>&nbsp;</p>
                <p><span style={{ fontWeight: '300' }}>&nbsp;</span> <span style={{ fontWeight: '300' }}>Pajama tugs me,&nbsp; by his leash, across the yellowing lawn of Fairway Park towards a flock of pigeons. Dozens of gray birds swirl in the air around us as Pajama continues his relentless charge forward. Shielding my face with my left arm I stumble over Pajama, whose nose is rammed under the tail of a stark black German Shepherd, coat glistening in the sunlight like a supermodel&rsquo;s hair in a Shampoo commercial.</span></p>
                <p><span style={{ fontWeight: '300' }}>&ldquo;No Pajama!&rdquo; I jerk on his leash as I stagger to an awkward halt, &ldquo;Leave him alone&rdquo;</span><em><span style={{ fontWeight: '300' }}>. </span></em><span style={{ fontWeight: '300' }}>Ignoring me, Pajama follows behind the Shepard, nose glued to its crotch, as the black dog wanders behind me and takes an unnaturally long sniff of my butt.</span></p>
                <p><span style={{ fontWeight: '300' }}>Stepping away from the Shepard, I kneel down and pull Pajama by the collar.</span></p>
                <p><span style={{ fontWeight: '300' }}>He growls.&nbsp;</span></p>
                <p><span style={{ fontWeight: '300' }}>I release his collar.&nbsp;</span></p>
                <p><span style={{ fontWeight: '300' }}>I&rsquo;m so fixated on the dogs that I jump when the man holding the German Shepherd&rsquo;s leash laughs. &ldquo;Looks like you&rsquo;re here for obedience school.&rdquo;&nbsp;&nbsp;</span></p>
                <p><span style={{ fontWeight: '300' }}>&ldquo;Sorry about that.&rdquo; My eyes follow the Shepherd&rsquo;s neon yellow and white checkered leash up the tanned hand holding it, up past the neon yellow and white checkered &ldquo;dog days of summer&rdquo; fanny pack , up past the white t-shirt that&rsquo;s fighting to restrain a pair of perfect pecs, past a gorgeously chiseled stubbled jaw to a pair of beautiful seafoam eyes.</span></p>
                <p><span style={{ fontWeight: '300' }}>&nbsp;&nbsp;</span> <span style={{ fontWeight: '300' }}>I swallow hard. &ldquo;What kind of shampoo does your dog use?&rdquo;</span></p>
                <p><span style={{ fontWeight: '300' }}>&nbsp;</span> <span style={{ fontWeight: '300' }}>&ldquo;We shower together.,&rdquo; The man tosses his sandy blond locks. &ldquo;And we use Malibu C Shampoo.&rdquo; His surfer bro laugh rings through the air.&nbsp;</span></p>
                <p><span style={{ fontWeight: '300' }}>&nbsp;</span> <span style={{ fontWeight: '300' }}>My mouth drops as I&rsquo;m transported to this man&rsquo;s perfect stone tiled open floor plan bathroom, watching water cascade down his chiseled body as he squats to lather up his Petsmart commercial of a dog.</span></p>
                <p><em><span style={{ fontWeight: '300' }}>&nbsp;</span></em> <span style={{ fontWeight: '300' }}>The man clears his throat extending a hand towards me. &ldquo; I&rsquo;m Myka. And this,&rdquo; He gestures toward the movie star dog, who is now sitting at perfect attention by his side while PJ enthusiastically humps him, &ldquo;Is Max. We&rsquo;re </span><em><span style={{ fontWeight: '300' }}>pet-</span></em><span style={{ fontWeight: '300' }}>ucational instructors for Pooch you in your place.&rdquo;&nbsp;</span></p>
                <p><em><span style={{ fontWeight: '300' }}>His puns are almost as delicious as his pecks.</span></em></p>
                <p><span style={{ fontWeight: '300' }}>&nbsp;</span> <span style={{ fontWeight: '300' }}>PJ and Max fuse together, a momentary mosaic of pixels. I eye Myka apologetically as we wait for the glitch to pass.&nbsp;</span></p>
                <p><span style={{ fontWeight: '300' }}>&ldquo;It&rsquo;s been such a glitchy week.&rdquo; Myka rolls his eyes.</span></p>
                <p><span style={{ fontWeight: '300' }}>&ldquo;Tell me about it.&rdquo; I shake my head as the dogs reanimate and Max lowers himself to an attentive seated position while Pajama lunges towards Myka&rsquo;s fanny pack.&nbsp;</span></p>
                <p><span style={{ fontWeight: '300' }}>&rdquo;Down, PJ,&rdquo; I yell, yanking at his leash. &ldquo;By the way. This is Pajama.&rdquo; PJ growls as I tug him away. &ldquo;And I&rsquo;m Jenna.&rdquo; I push Pajama&rsquo;s butt down, forcing him into an awkward half squating half seated position. &ldquo;We shower separately.&rdquo; I grin.</span></p>
                <p><em><span style={{ fontWeight: '300' }}>&nbsp;</span></em> <span style={{ fontWeight: '300' }}>Myka and Max stroll over to a nearby picnic table and return seconds later with a clipboard of paperwork that says Pajama Carson on top.</span></p>
                <p><span style={{ fontWeight: '300' }}>&ldquo;I like your dog&rsquo;s name. &rdquo; Myka extends the clipboard towards me.</span></p>
                <p><span style={{ fontWeight: '300' }}>&nbsp;</span> <span style={{ fontWeight: '300' }}>&ldquo;Thanks.&rdquo; I take the paperwork from him. &rdquo;I like your puns.&rdquo;</span></p>
                <p><span style={{ fontWeight: '300' }}>&ldquo;Thanks. They&rsquo;re usually lost on the ladies. He nudges me in what may, possibly, be a flirtatious way as he steps past me towards a small white fluffy dog and its short middle aged pet mom.&nbsp;</span></p>
                <p><em><span style={{ fontWeight: '300' }}>&nbsp;</span></em> <span style={{ fontWeight: '300' }}>I fight the urge to fawn over my Myka-touched arm and instead slide a pen from the clipboard clip and start on Pajama&rsquo;s forms. It only takes about five minutes of dog Q&amp;A before I realize I don&rsquo;t actually know anything about my dog&ndash; or dogs in general, so I&rsquo;m feeling a bit panicked when Myka comes back to ask if I have any questions about the class.</span><span style={{ fontWeight: '300' }}><br /></span> <em><span style={{ fontWeight: '300' }}>Well for one thing I&rsquo;d like to know what in the actual glitch an anal gland is and why the hell would anyone want to&ndash; express it?</span></em><span style={{ fontWeight: '300' }}><br /></span> <span style={{ fontWeight: '300' }}> &ldquo;Sorry what?&rdquo; I ask him as I scan the park for any topic of conversation that won&rsquo;t make me sound completely ignorant.</span></p>
                <p><span style={{ fontWeight: '300' }}>&ldquo;Jenna.&rdquo; Myka is speaking insultingly loud and slow now. &ldquo; Do&hellip; you&hellip; have&hellip; any&hellip; questions?&rdquo;</span></p>
                <p><span style={{ fontWeight: '300' }}>I catch a whiff of weed smoke on the breeze and my eyes search out a lanky girl smoking a joint and stalking across the park wearing a yellow flower print dress, torn fishnets and combat boots.</span></p>
                <p><span style={{ fontWeight: '300' }}>&nbsp;&nbsp;</span> <span style={{ fontWeight: '300' }}>&ldquo;Geeze look at that hipster.&rdquo; I scoff.</span></p>
                <p><span style={{ fontWeight: '300' }}>&nbsp;</span> <span style={{ fontWeight: '300' }}> Myka&rsquo;s brow furrows. &ldquo;What&rsquo;s a hipster?&rdquo;</span></p>
                <p><span style={{ fontWeight: '300' }}>&nbsp;</span> <span style={{ fontWeight: '300' }}> &ldquo;You know.&rdquo; I shrug. &ldquo;People like&rdquo; I point. &ldquo;that girl.&rdquo;</span></p>
                <p><span style={{ fontWeight: '300' }}>&nbsp;</span> <span style={{ fontWeight: '300' }}> He cocks his head inquisitively. Max follows suit.</span></p>
                <p><span style={{ fontWeight: '300' }}>&nbsp;</span> <span style={{ fontWeight: '300' }}>The girl is scowling in my direction now.</span></p>
                <p><span style={{ fontWeight: '300' }}>&nbsp;</span> <span style={{ fontWeight: '300' }}>My cheeks grow hot.&nbsp;</span></p>
                <p><em><span style={{ fontWeight: '300' }}>How do I describe a hipster to someone who doesn&rsquo;t just know one when they see one?</span></em></p>
                <p><span style={{ fontWeight: '300' }}>&nbsp;</span> <span style={{ fontWeight: '300' }}>Myka&rsquo;s face remains blank. &ldquo;You were saying. That girl is a hipster </span><em><span style={{ fontWeight: '300' }}>because</span></em><span style={{ fontWeight: '300' }}>?&nbsp;</span></p>
                <p><em><span style={{ fontWeight: '300' }}>What the hell even is a hipster? Do I even know?</span></em></p>
                <p><span style={{ fontWeight: '300' }}>&nbsp;</span> <span style={{ fontWeight: '300' }}>&ldquo;What?&rdquo; I stall for time, sliding my cell from my pocket.</span></p>
                <p><span style={{ fontWeight: '300' }}>&nbsp;</span> <span style={{ fontWeight: '300' }}>As he repeats the question, I lowkey navigate to Urban dictionary.</span></p>
                <p><span style={{ fontWeight: '300' }}>&nbsp;</span> <span style={{ fontWeight: '300' }}>&ldquo;Oh. Sorry.&rdquo; I chuckle. &ldquo;I thought you said what is a quip shirt.&rdquo; My fingers dart across my phone&rsquo;s keypad. &ldquo;And I was like. I don&rsquo;t know, but I want one.&rdquo; I laugh harder and faker, as I skim through the text on my phone, growing more and more confused about what a hipster actually is. &ldquo;I was thinking maybe a quip shirt would be like a t-shirt with a funny slogan.&rdquo; The definition of hipster has to be 5000 words long.&nbsp; I give up and slide my phone back in my front pocket. &ldquo;but yeah, a hip-stir</span> <span style={{ fontWeight: '300' }}>is like when you dance like you&rsquo;re hula hooping but you&rsquo;re not.&rdquo;</span></p>
                <p><span style={{ fontWeight: '300' }}>&nbsp;&nbsp;&ldquo;Oh yeah. I </span><em><span style={{ fontWeight: '300' }}>do</span></em><span style={{ fontWeight: '300' }}> know what a hip stir is.&rdquo; Myka swivels his hips. &ldquo;My wife actually compliments me on my hip stir all the time.&rdquo; He flashes me a grin.</span></p>
                <p><span style={{ fontWeight: '300' }}>&nbsp;&nbsp;</span> <span style={{ fontWeight: '300' }}>I freeze mesmerized by his perfect teeth. His perfect </span><em><span style={{ fontWeight: '300' }}>married </span></em><span style={{ fontWeight: '300' }}>teeth.</span></p>
                <p><span style={{ fontWeight: '300' }}>&nbsp;</span> <span style={{ fontWeight: '300' }}>I try to keep the pep in my voice. &ldquo;Yeah. My boyfriend&rsquo;s got a good one too.&rdquo;</span></p>
                <p><em><span style={{ fontWeight: '300' }}>Why do I keep telling people that I have a boyfriend?</span></em></p>
                <p><span style={{ fontWeight: '300' }}>&nbsp;</span> <span style={{ fontWeight: '300' }}>We both laugh awkwardly for a little too long. We&rsquo;re both definitely uncomfortable now.</span></p>
                <p><span style={{ fontWeight: '300' }}>&nbsp;</span> <span style={{ fontWeight: '300' }}>I&rsquo;m fiddling with Pajama&rsquo;s leash, mentally cobbling together a story about a vacation with my non-existent boyfriend last fall, when Myka looks directly in my eyes. &ldquo;I do know what a hipster is.&rdquo; He reaches over and gives my shoulder a light squeeze. &rdquo;I was just glitching with you.&rdquo;&nbsp;</span></p>
                <p><span style={{ fontWeight: '300' }}>He&rsquo;s let go of my shoulder but I can still feel the warmth of his hand there.</span></p>
                <p><span style={{ fontWeight: '300' }}>My brain is effervescent.</span></p>
                <p><span style={{ fontWeight: '300' }}>&nbsp;</span> <span style={{ fontWeight: '300' }}>Lots of people with dogs have begun to drift towards Myka, so he turns away from me and walks back over to the clipboard table. I watch him wander over to each dog, introducing himself, handing dog owners clipboards, relaying stories about the search and rescue work he and Max do and complimenting every owner on his or her adorable dog.&nbsp;</span></p>
                <p><span style={{ fontWeight: '300' }}>&nbsp;I feel Pajama tug on his leash. He&rsquo;s creeping towards a nearby retriever who is growling, so I start tugging PJ in the opposite direction.&nbsp;</span></p>
                <p><span style={{ fontWeight: '300' }}>I finally manage to get him to a space where we can see and hear Myka, while maintaining a safe distance from Pajama&rsquo;s classmates.</span></p>
                <p><span style={{ fontWeight: '300' }}>&nbsp;</span> <span style={{ fontWeight: '300' }}>Squatting next to PJ, my voice assumes that puppy-talk tone I used to hate, &ldquo;Hee diin tell mee whaa a cuute doggo I haave, huh PJ?&rdquo; I scratch Pajama behind his ear.</span></p>
                <p><span style={{ fontWeight: '300' }}>&nbsp;</span> <span style={{ fontWeight: '300' }}>Pajama&rsquo;s eyes meet mine for a split second before he begins licking his crotch.</span></p>
                <p><span style={{ fontWeight: '300' }}>&nbsp;</span> <span style={{ fontWeight: '300' }}>Rolling my eyes, I rise to my feet.&nbsp;</span></p>
                <p><span style={{ fontWeight: '300' }}>Myka is walking towards me.</span></p>
                <p><span style={{ fontWeight: '300' }}>&nbsp;</span> <span style={{ fontWeight: '300' }}>&ldquo;By the way.&rdquo; He grins, lowering his voice, &ldquo;I do private lessons too if you and Pajama ever need some extra help.&rdquo;</span></p>
                <p><span style={{ fontWeight: '300' }}>&nbsp;</span> <span style={{ fontWeight: '300' }}>My face flushes as he fishes a business card from his fanny pack.</span></p>
                <p><span style={{ fontWeight: '300' }}>&nbsp;</span> <span style={{ fontWeight: '300' }}>Extending it towards me, his fingers brush the side of my hand and tingles radiate up my arm.</span></p>
                <p><span style={{ fontWeight: '300' }}>Myka is launching into a story about a search and rescue mission he did in Sycamore Canyon.</span></p>
                <p><span style={{ fontWeight: '300' }}>&nbsp;</span> <span style={{ fontWeight: '300' }}>My skin is pulsating with heat.</span></p>
                <p><span style={{ fontWeight: '300' }}>He&rsquo;s saying a car had gone off the side of the road but a dog survived. I squint, struggling to focus on his moving lips.&nbsp;</span></p>
                <p><span style={{ fontWeight: '300' }}>The dog ran away.</span></p>
                <p><span style={{ fontWeight: '300' }}>He sounds distant.</span></p>
                <p><em><span style={{ fontWeight: '300' }}>&nbsp;I need to sit.&nbsp;</span></em></p>
                <p><em><span style={{ fontWeight: '300' }}>No</span></em></p>
                <p><em><span style={{ fontWeight: '300' }}>It's my turn for rescue stories and dog compliments.</span></em></p>
                <p><span style={{ fontWeight: '300' }}>&nbsp;</span> <em><span style={{ fontWeight: '300' }}>I don&rsquo;t want him to think I&rsquo;m ru&hellip;</span></em></p>
                <p>&nbsp;</p>
                <p><strong>2042-08-22T16:57:28PST|28d0086c-da60-44e5-9c9b-54abfbe4154c|&lsquo;...</strong><span style={{ fontWeight: '300' }}>&rsquo;</span><span style={{ fontWeight: '300' }}>&nbsp;</span></p>
                <p><span style={{ fontWeight: '300' }}>&nbsp;</span> <span style={{ fontWeight: '300' }}> &ldquo;Jenna. Jenna. You alright?&rdquo; Pajama is licking my face </span><em><span style={{ fontWeight: '300' }}>and talking to me?</span></em></p>
                <p><span style={{ fontWeight: '300' }}>He looks like he&rsquo;s just standing there panting, but he says &ldquo;Oh thank god you're alive&rdquo;</span></p>
                <p><em><span style={{ fontWeight: '300' }}>Whoa! I&rsquo;m telepathic with dogs</span></em><span style={{ fontWeight: '300' }}>!</span></p>
                <p><span style={{ fontWeight: '300' }}>&nbsp;</span> <span style={{ fontWeight: '300' }}>Myka&rsquo;s face comes into focus. He&rsquo;s&nbsp; holding Pajama by the collar and squatting beside me.</span></p>
                <p><span style={{ fontWeight: '300' }}>&nbsp;</span> <span style={{ fontWeight: '300' }}>I raise my head, picking a twig from my hair.&nbsp;</span></p>
                <p><span style={{ fontWeight: '300' }}>My elbow stings. I touch it and feel warm blood trickling down my arm. &ldquo;That was embarrassing.&rdquo; I clasp my bleeding elbow.&nbsp;</span></p>
                <p><span style={{ fontWeight: '300' }}>Myka looks alarmed.</span></p>
                <p><span style={{ fontWeight: '300' }}>&ldquo;It&rsquo;s not a big deal.&rdquo; blood dibbles down my arm. &ldquo;I have </span><a href="https://www.mayoclinic.org/diseases-conditions/vasovagal-syncope/symptoms-causes/syc-20350527#:~:text=Vasovagal%20syncope%20(vay%2Dzoh%2D,blood%20pressure%20to%20drop%20suddenly." target="_blank"><span style={{ fontWeight: '300' }}>vasovagal syncope</span></a><span style={{ fontWeight: '300' }}>.&rdquo;</span><span style={{ fontWeight: '300' }}><br /></span><span style={{ fontWeight: '300' }}>Myka&rsquo;s brow furrows. &ldquo;I don&rsquo;t know what that is, but I think you might need stitches.&rdquo;&nbsp;</span></p>
                <p><span style={{ fontWeight: '300' }}>Reaching my hand behind my neck, I extend my arm, and peer down my elbow.</span></p>
                <p><em><span style={{ fontWeight: '300' }}>Oh God. That is bad</span></em></p>
                <p><span style={{ fontWeight: '300' }}>I feel myself falling and everything goes black.&nbsp;</span></p>
                <p>&nbsp;</p>
                <p><strong>2042-08-22T19:17:27PST|28d0086c-da60-44e5-9c9b-54abfbe4154c|&lsquo;Back to oddball soup</strong><span style={{ fontWeight: '300' }}>&rsquo;</span><span style={{ fontWeight: '300' }}>&nbsp;</span></p>
                <p><em><span style={{ fontWeight: '300' }}>&nbsp;</span></em> <span style={{ fontWeight: '300' }}>&ldquo;And then he insisted on canceling the whole class and driving me to urgent care.&rdquo; I ladle some mellon-balled vegetable soup into a wide shallow brown bowl. &ldquo;And </span><em><span style={{ fontWeight: '300' }}>that</span></em><span style={{ fontWeight: '300' }}> is why I am so late Xenia.&rdquo;</span></p>
                <p><span style={{ fontWeight: '300' }}>&nbsp;</span> <span style={{ fontWeight: '300' }}>Turning, I smile at the couple sitting caddy-corner from me at the picnic table in Jeff&rsquo;s front yard. &ldquo;Hi, sorry, I&rsquo;m Jenna.&rdquo;</span></p>
                <br /><br />
                <p>
                    <strong>5: </strong> <strong>Filename: &lsquo;Xenia Finds Xen In A Garden&rsquo;,</strong>
                </p>
                <p>
                    <strong>Timestamp: 2042-08-22T19:35:02:PST,</strong>
                </p>
                <p>
                    <strong>Details: &lsquo;Xenia Chloros, Fremont-CA, Neighborhoods&rsquo;,</strong><span style={{ fontWeight: '300' }}>&nbsp;&nbsp;</span>
                </p>
                <p>
                    <strong>H-ID: 81feeffe-0067-4226-9c41-313509217b49,</strong>
                </p>
                <p>
                    <strong>Transcript:</strong><strong><br /><br /></strong>
                </p>
                <p>&nbsp;</p>
                <p><span style={{ fontWeight: '300' }}>&ldquo;And Pajama&rsquo;s instructor, Myka,&rdquo; Jenna swoons as the food weirdos fuss over her bandaged arm.&nbsp; &ldquo;Said he can actually feel joy revolving between his dogs and him when they play together.&rdquo;</span></p>
                <p><span style={{ fontWeight: '300' }}>Clinking the bottom of my brown ceramic bowl with my spoon, I scrape up the last drops of odd ball soup.</span></p>
                <p><span style={{ fontWeight: '300' }}>Half rising from the picnic bench, I peer into the pot at the center of the table. </span><em><span style={{ fontWeight: '300' }}>Empty - Damn!</span></em></p>
                <p><span style={{ fontWeight: '300' }}>&ldquo;This was some baller soup!&rdquo; I enthuse to no one in particular.</span></p>
                <p><span style={{ fontWeight: '300' }}>Everyone looks up from Jenna&rsquo;s fiasco of a dog long enough to laugh politely at my pun.</span></p>
                <p><span style={{ fontWeight: '300' }}>Jeff clears his throat.&nbsp; &ldquo;I was going to go out back to pick some fresh peaches from my tree for dessert.&rdquo; He grins. &ldquo;And maybe whip up some heavy cream to go on top.&rdquo; He rises from the picnic bench, &ldquo;Since you&rsquo;re done Xenia, would you like to come help harvest some peaches from my backyard?&rdquo;</span></p>
                <p><span style={{ fontWeight: '300' }}>&ldquo;As long as,&rdquo; I make air quotes, &ldquo;Harvesting peaches, isn&rsquo;t some kind of euphemism&rdquo;, I eye Jeff suspiciously. &ldquo;Then sure, I&rsquo;d love to get my hands on your fuzzy lil&rsquo; peaches.&rdquo;</span></p>
                <p><span style={{ fontWeight: '300' }}>Chuckling, Jeff shakes his head and offers me a hand up from the picnic bench.</span><span style={{ fontWeight: '300' }}><br /></span> <span style={{ fontWeight: '300' }}>&ldquo;Diego,&rdquo; Carmen stacks her empty soup bowl on top of her husband&rsquo;s. &ldquo;Can you clean up the soup bowls and make whipped cream while Jeff and Xenia get the peaches washed and sliced.&rdquo;&nbsp;</span></p>
                <p><span style={{ fontWeight: '300' }}>Bossy-pants Carmen squats down in front of Pajama. &ldquo;Jenna and I can take this guy for a walk around the block to let out some of his zoomy energy.&rdquo; She pushes Pajama down as he pounces on her shoulders and slimes her face with his tongue.</span></p>
                <p><span style={{ fontWeight: '300' }}>I follow Jeff across his front-farm and through a side gate to his Harvest Moon backyard.&nbsp;</span></p>
                <p><span style={{ fontWeight: '300' }}>It&rsquo;s not a big yard, maybe a couple thousand square feet, but it&rsquo;s like something out of a farming RPG video game.</span></p>
                <p><span style={{ fontWeight: '300' }}>Most of the yard is an out of control lush garden: tomatoes and cucumbers hanging from arched trellises above clusters of lettuce, beans, and herbs.&nbsp;</span></p>
                <p><span style={{ fontWeight: '300' }}>Corn and sunflowers jutting up here and there from dense masses of vegetables and a small flock of white, happily clucking chickens peck and scratch the dirt in a fenced-in enclosure at the far back corner of the yard.</span></p>
                <p><span style={{ fontWeight: '300' }}>Across from the gate where we entered, in the nearest corner, water splashes and cascades down a rocky waterfall into a stone-bordered coy pond.&nbsp;</span></p>
                <p><span style={{ fontWeight: '300' }}>Trotting over to the pond, I admire a small school of bright orange and white spotted fish swirling beneath a dozen varieties of vibrant water plants.&nbsp;</span></p>
                <p><span style={{ fontWeight: '300' }}>Across from the pond, backing up to the house, a woven hammock is strung between a peach tree and a cherry tree which border a small shaggy lawn. </span><span style={{ fontWeight: '300' }}><br /></span> <span style={{ fontWeight: '300' }}>I holler at Jeff, who is standing beside the peach tree, &ldquo;Are you kidding me with this perfect lil&rsquo; pastoral&nbsp; Zen garden?&rdquo; I gesticulate toward the lawn with both hands. &ldquo;It looks like there should be a glitching unicorn standing there or something.&rdquo;</span><span style={{ fontWeight: '300' }}><br /></span> <span style={{ fontWeight: '300' }}>Jeff chuckles cautiously. &ldquo;Th</span><em><span style={{ fontWeight: '300' }}>aaan</span></em><span style={{ fontWeight: '300' }}>ks?&rdquo;</span></p>
                <p><span style={{ fontWeight: '300' }}>&ldquo;It&rsquo;s a complim&ndash;&rdquo; I&rsquo;m seized with surprise as a black rock by the waterfall sprouts a head&hellip; and wings&hellip; and shakes itself&hellip; and&hellip; oh&hellip; my heart calms as I realize it&rsquo;s just a black chicken who&rsquo;d been napping in the dirt by the pond.</span></p>
                <p><span style={{ fontWeight: '300' }}>Shaking dust from her lustrous black feathers she waddles down the rocky embankment to the pond. </span><span style={{ fontWeight: '300' }}><br /></span> <span style={{ fontWeight: '300' }}>&ldquo;Aww how cute.&rdquo; I coo as she dips her head, scooping up a beakful of water before throwing her head back and gargling it down.</span><span style={{ fontWeight: '300' }}><br /></span> <span style={{ fontWeight: '300' }}>Jeff points at the small black chicken as he walks over to me. &ldquo;That&rsquo;s Aya, she&rsquo;s a cool bird, huh.&rdquo;</span></p>
                <p><span style={{ fontWeight: '300' }}>&ldquo;Yeah, she&rsquo;s a real Betty&rdquo; I shrug, &ldquo;but you gave her the wrong name.&rdquo;</span></p>
                <p><span style={{ fontWeight: '300' }}>&ldquo;Oh?,&rdquo; Jeff raises his brows. &ldquo;What&rsquo;d she tell you her name should be?&rdquo;</span></p>
                <p><span style={{ fontWeight: '300' }}>&ldquo;Don&rsquo;t get so excited Jefe.&rdquo; I chuckle.&nbsp; &ldquo;I didn&rsquo;t commune with your chicken or something.&rdquo; I tuck a falling curl behind my ear &ldquo;She just looks like her name should be Rocky.&rdquo;&nbsp;</span></p>
                <p><span style={{ fontWeight: '300' }}>&ldquo;Why?&rdquo; He shades his eyes, peering down at me.</span></p>
                <p><span style={{ fontWeight: '300' }}>&nbsp;&ldquo;Because&rdquo; My cheeks flush.&nbsp; &ldquo;I thought she was a rock.&rdquo;&nbsp;</span></p>
                <p><span style={{ fontWeight: '300' }}>&ldquo;Must be some bird-looking rocks where you come from.&rdquo; Jeff laughs.&nbsp;</span></p>
                <p><span style={{ fontWeight: '300' }}>&ldquo;So, why&rsquo;d you name her,&rdquo; I make air quotes. &ldquo;Aya?&rdquo;&nbsp;</span></p>
                <p><span style={{ fontWeight: '300' }}>Jeff grins. &ldquo;Most of my chickens are white Leghorns that I bought online.&rdquo; He pulls out his cell phone and begins thumb punching the password screen, &ldquo;but Aya&rsquo;s a rare breed from Indonesia called Ayam Cemani&rdquo; He swivels his phone screen towards me, &ldquo;and I&ndash;uuhhh actually won her in a poker game.&rdquo; </span><span style={{ fontWeight: '300' }}><br /></span> <span style={{ fontWeight: '300' }}>His phone&rsquo;s wallpaper is an image of Aya standing atop of a pile of random trinkets on a green felt table.</span></p>
                <p><span style={{ fontWeight: '300' }}>&ldquo;I won her from my neighbor Cheryl during a monthly bartering poker game thing she hosts.&rdquo;</span></p>
                <p><span style={{ fontWeight: '300' }}>&ldquo;Cheryl sounds fun&rdquo; I grin.</span><span style={{ fontWeight: '300' }}><br /></span> <span style={{ fontWeight: '300' }}>I hear a sliding glass door whoosh open and Diego&rsquo;s face appears above the top of a cluster of tomato plants.</span></p>
                <p><span style={{ fontWeight: '300' }}>&nbsp;&ldquo;Hey friends,&rdquo; He jangles a canvas bag over his head, &ldquo; I thought you might want a bag to carry the peaches.&rdquo;</span><span style={{ fontWeight: '300' }}><br /></span> <span style={{ fontWeight: '300' }}>&ldquo;Good thought.&rdquo; Jeff waives at Diego. </span><span style={{ fontWeight: '300' }}><br /></span> <span style={{ fontWeight: '300' }}>Diego glances back at something inside the house then turns to Jeff. &ldquo;I&rsquo;ll have Spice Rack bring it out for you.&rdquo; He holds the bag still. &ldquo;I bet even ZEN-YUH will get a kick out of Old Spicey.&rdquo;</span></p>
                <p><span style={{ fontWeight: '300' }}>I hear a clamor of claws on wood, then a massive, mahogany dog bounds past Diego, snatching the bag out of his hand and rushing over to Jeff. </span><span style={{ fontWeight: '300' }}><br /></span> <span style={{ fontWeight: '300' }}>Jeff grabs the bag from the dog&rsquo;s mouth slipping the handle over his shoulder. &ldquo;Good. Boy Spice Rack!&rdquo; He holds up both his hands towards the dog.&nbsp;</span></p>
                <p><span style={{ fontWeight: '300' }}>The big dog jovially springs on to his hind legs and then steadies himself before ever-so-gently touching the pads of his paws to Jeff&rsquo;s hands and dropping to an expectant sitting position at Jeff&rsquo;s feet.</span><span style={{ fontWeight: '300' }}><br /></span> <span style={{ fontWeight: '300' }}>Plugging his hand into the tree beside him, Jeff grabs a peach, fish hooks it with his pointer finger, and wretches out the pit&nbsp;</span></p>
                <p><span style={{ fontWeight: '300' }}>Juice oozes down his arm as he tosses the pitted peach at Spice Rack, who leaps up, gingerly catches it mid air and trots silently back towards the house.&nbsp;</span></p>
                <p><span style={{ fontWeight: '300' }}>When the dog reaches the back slider, he jumps up, presses his paws against the glass and uses his weight to ease it open and then he actually closes the door from the inside after himself.</span></p>
                <p><span style={{ fontWeight: '300' }}>&ldquo;Wow.&rdquo; I tip my head at Jeff. &ldquo;You should help Jenna with her dog.&rdquo;</span></p>
                <p><span style={{ fontWeight: '300' }}>Sliding my hands into my back pockets, I start slowly chicken-walking towards Jeff.</span></p>
                <p><span style={{ fontWeight: '300' }}>&ldquo;How did I not know about all the magnificent beasts that inhabit your woods Jefe?&rdquo; I stop directly beside Jeff and nudge him with my chicken-winged-elbow.</span></p>
                <p><span style={{ fontWeight: '300' }}>Jeff steps back from me. &ldquo;Let's grab some of these peaches.&rdquo;</span></p>
                <p><span style={{ fontWeight: '300' }}>&ldquo;Are we in a rush?&rdquo; I wander over to the coy pond. &ldquo;I want to check out your yard more.&rdquo;&nbsp;</span></p>
                <p><span style={{ fontWeight: '300' }}>Aya clucks and flutters away as I seat myself on a smooth rock by the waterfall.</span></p>
                <p><span style={{ fontWeight: '300' }}>&rdquo;What do you do for a living Jefe?&rdquo; I raise my hand to my brow to shade my view of his face. &ldquo;Are you &ndash; someone&rsquo;s Jefe?&rdquo;</span><span style={{ fontWeight: '300' }}><br /></span> <span style={{ fontWeight: '300' }}>Jeff chuckles &ldquo;No. I don&rsquo;t have any employees.&rdquo; He looks down, rubbing the back of his neck. &ldquo;Right now I&rsquo;m just getting by.&rdquo;</span></p>
                <p><span style={{ fontWeight: '300' }}>My eyebrows raise. &ldquo;So you don&rsquo;t work.&rdquo; I rise to my feet. &ldquo;But you drive a big white van around with a QR code, luring people to your house.&rdquo; I suck my teeth. &ldquo;creepy.&rdquo;</span></p>
                <p><span style={{ fontWeight: '300' }}>Jeff tosses the canvas bag at me. &ldquo;We shouldn&rsquo;t need more than a dozen peaches&rdquo;&nbsp;</span></p>
                <p><span style={{ fontWeight: '300' }}>I roll my eyes as I snatch the bag up from the ground in front of me. &ldquo;I thought you weren&rsquo;t trying to be anyone&rsquo;s jefe, Jefe.&rdquo;</span><span style={{ fontWeight: '300' }}><br /></span> <span style={{ fontWeight: '300' }}>Jeff shakes his head as he walks away.&nbsp; &ldquo;I&rsquo;m going inside to make sure Diego has everything he needs for the whipped cream.&rdquo;</span><span style={{ fontWeight: '300' }}><br /></span> <span style={{ fontWeight: '300' }}>My gut clenches as he disappears through his back sliding door.</span></p>
                <p><span style={{ fontWeight: '300' }}>Sighing, I look down at the empty bag in my hands. Peaches do sound kinda good right now.</span></p>
                <p><span style={{ fontWeight: '300' }}>As I wander closer to the nearest tree, it smells like I&rsquo;m walking into a Bath and Body Works.&nbsp;</span></p>
                <p><span style={{ fontWeight: '300' }}>Plucking a plump fuzzy orb, I brush it against my cheek. Velvet perfume heaven.</span></p>
                <p><span style={{ fontWeight: '300' }}>Nectar runs down my jaw as I sink my teeth into fresh dew and sunshine.</span></p>
                <p><span style={{ fontWeight: '300' }}>I&rsquo;m well past twenty peaches in the bag and two in my stomach when I hear Jenna yell: &ldquo;Nononono Pajama stop!&rdquo;</span></p>
                <p><span style={{ fontWeight: '300' }}>Two dogs erupt into a bark fit inside the house and then, *smack*.&nbsp; The back slider shimmies as Pajama collides with it.</span></p>
                <p><span style={{ fontWeight: '300' }}>I watch, stupefied, through the back door as Jeff sweeps Spice Rack up over his shoulders in a fireman&rsquo;s carry, leaps over Pajama, opens the slider, bounds outside, and whooshes the door shut behind himself and Spice Rack.&nbsp;</span></p>
                <p><span style={{ fontWeight: '300' }}>Pajama, snarling and barking, leaps up and throws himself against the glass as Jeff reaches above the door frame, retrieves a metal house key and locks the sliding door.</span></p>
                <p><span style={{ fontWeight: '300' }}>&nbsp;Grabbing a fistfull of dog leashes from a hook beside the back slider, he squats stoope and leashes Spice Rack with a click.</span><span style={{ fontWeight: '300' }}><br /></span> <span style={{ fontWeight: '300' }}>&ldquo;What the glitch just happened?&rdquo; My eyes are wide.</span></p>
                <p><span style={{ fontWeight: '300' }}>Without responding, Jeff blurs past me, speeding towards the gate to the front yard.&nbsp;</span></p>
                <p><span style={{ fontWeight: '300' }}>Jeff throws the gate open and I see Jenna, Carmen and Diego running from the front of the house towards the back yard.</span></p>
                <p><span style={{ fontWeight: '300' }}>Dropping the bag of peaches, scattering fruit across the lawn, I jog over to join them.</span></p>
                <p><span style={{ fontWeight: '300' }}>As I approach, Jenna throws her sweaty arms around me pulling me into a snotty teary hug. &ldquo;I don&rsquo;t think I will ever get Pajama under control&rdquo; she sobs.&nbsp;</span></p>
                <p><span style={{ fontWeight: '300' }}>&ldquo;It&rsquo;ll be fine Jenna,&rdquo; pinching the corner of my white t-shirt between my fingers, I wipe a glob of Jenna&rsquo;s snot off my cheek.&nbsp;</span></p>
                <p><span style={{ fontWeight: '300' }}>&ldquo;Let&rsquo;s get a house together.&rdquo; I grin at my friend. &ldquo;I&rsquo;ll help you with PJ.&rdquo; I dab at Jenna&rsquo;s teary cheek. &ldquo;I want to grow peaches and get a chicken named Rocky.&rdquo;</span></p>
                <p><span style={{ fontWeight: '300' }}>&ldquo;You know&rdquo;, Diego leans over my shoulder, &ldquo;Carmen just got her real estate license.&rdquo;</span></p>
                <br /><br />
                <p>
                    <b>6: Filename: &lsquo;Diego Takes His Place In The Pecking Order&rsquo;,</b>
                </p>
                <p>
                    <b>Timestamp: 2042-08-30T16:39:44:PST,</b>
                </p>
                <p>
                    <b>Details: &lsquo;Diego Garcia, Fremont-CA, Neighborhoods&rsquo;,</b>
                </p>
                <p>
                    <b>H-ID: b54ba8fb-01fa-496e-b97c-e3aaef3fb11a,</b>
                </p>
                <p>
                    <b>Transcript:</b>
                </p>
                <p><span style={{ fontWeight: '300' }}><br /></span> <span style={{ fontWeight: '300' }}>&ldquo;I never get to sit back here&rdquo; I graze my fingertips across the plush beige arm rest in the back seat of Carmen&rsquo;s 95 Crown Victoria. &ldquo;It&rsquo;s nice!&rdquo;</span></p>
                <p><span style={{ fontWeight: '300' }}>Carmen tips her rearview mirror down, so she can see me behind her. &ldquo;I take care of my Vickie,&rdquo; she winks at me, &ldquo;and she takes care of me.&rdquo;&nbsp;</span></p>
                <p><span style={{ fontWeight: '300' }}>&ldquo;Aww, Vickie, I like that name!&rdquo; Jenna, who&rsquo;s squeezed in between Carmen and Xenia on the split-bench seat up front, pats Vickie&rsquo;s spotlessly clean dashboard.&nbsp;&nbsp;</span></p>
                <p><span style={{ fontWeight: '300' }}>Xenia rifles through a stack of real estate fliers in her lap &ldquo;Was that all?&rdquo; She scoffs at Carmen.</span></p>
                <p><span style={{ fontWeight: '300' }}>&ldquo;Yeah. I know none of them had everything on your list.&rdquo; Carmen sighs.</span></p>
                <p><span style={{ fontWeight: '300' }}>Carmen was up all night painstakingly combing through listings to find the perfect home for these girls, but every house today seemed to be wrong for one reason or another.</span></p>
                <p><span style={{ fontWeight: '300' }}>Jeff, seated next to me, pokes his head between Jenna and Xenia, &ldquo;Maybe we could jack hammer out the concrete from the last backyard.&rdquo;&nbsp;</span></p>
                <p><span style={{ fontWeight: '300' }}>&nbsp;</span> <strong>2042-08-30T16:58:54PST|b54ba8fb-01fa-496e-b97c-e3aaef3fb11a|&lsquo;driving back to Jeff\&rsquo;s&rsquo;</strong><span style={{ fontWeight: '300' }}>&nbsp;</span></p>
                <p><span style={{ fontWeight: '300' }}>We come upon a row of massive eucalyptus trees towering over the road for at least a quarter of a mile. Towards the center of the line of trees there&rsquo;s a giant white sign with red hand painted lettering:</span></p>
                <p>&nbsp;</p>
                <p><span style={{ fontWeight: '300' }}>For Sale By Owner As Is.&nbsp;</span></p>
                <p><span style={{ fontWeight: '300' }}>10 Acres. Farm House Included.&nbsp;</span></p>
                <p><span style={{ fontWeight: '300' }}>&nbsp;Major Fixer Upper Opportunity&nbsp;</span></p>
                <p><span style={{ fontWeight: '300' }}>&nbsp;650-555-5555</span></p>
                <p>&nbsp;</p>
                <p><span style={{ fontWeight: '300' }}>&ldquo;Text.&rdquo; Xenia claps. &ldquo;That.&rdquo; she claps. &ldquo;Owner.&rdquo; Xenia and Jenna descend into a shrieking giggle fit as Carmen pulls to the side of the road and begins typing on her phone. </span><span style={{ fontWeight: '300' }}><br /></span> <span style={{ fontWeight: '300' }}>Carmen turns to the girls beside her. &ldquo;It&rsquo;s almost 5:00. Do you want to wait here to see if we get a response or come back another day?&rdquo;</span></p>
                <p><span style={{ fontWeight: '300' }}>&ldquo;Now!&rdquo; Jenna squeals.</span></p>
                <p><span style={{ fontWeight: '300' }}>Ten minutes pass with no response, so we decide to drive down the gravel driveway at the end of the row of trees and see if anyone is home.&nbsp;</span></p>
                <p><span style={{ fontWeight: '300' }}>As Carmen creeps Vickie past the wall of Eucalyptus, I am awe-struck by the sight of a sprawling field of sunflowers, every one of them well over ten feet high with bright yellow heads bowing under the weight of their seeds.&nbsp;</span></p>
                <p><span style={{ fontWeight: '300' }}>&nbsp;&nbsp;Directly in front of the sunflower field is a run down farmhouse with a warped and splintering wrap around porch.</span></p>
                <p><span style={{ fontWeight: '300' }}>Sparse flecks of white paint clinging to the decaying wood siding and dusty cobwebbed ceiling. I peer out the windshield at the house&rsquo;s yellowed thinning glass front windows, but I can only see darkness inside.&nbsp;</span></p>
                <p><span style={{ fontWeight: '300' }}>Carmen pulls to a stop just in front of the porch steps and Xenia and Jenna launch themselves at the house chattering excitedly about how much they could do here.</span></p>
                <p><span style={{ fontWeight: '300' }}>&nbsp;Easing open my door I stretch my stiff limbs and climb out behind Jeff and Carmen and we amble towards Xenia and Jenna on the front porch of the farmhouse.</span></p>
                <p><span style={{ fontWeight: '300' }}>Carmen&rsquo;s phone buzzes. &ldquo;It&rsquo;s the seller&rsquo;s realtor!&rdquo; She thumbs her phone screen. &ldquo;Oh that&rsquo;s cute,&rdquo; she turns to me, &ldquo;the code is </span><a href="https://en.wikipedia.org/wiki/1138_(number)" target="_blank"><span style={{ fontWeight: '300' }}>1138</span></a><span style={{ fontWeight: '300' }}>.&rdquo;&nbsp;</span></p>
                <p><span style={{ fontWeight: '300' }}>&ldquo;You&rsquo;re cute.&rdquo; I chuckle as I sidle over and give her butt a pat.</span></p>
                <p><span style={{ fontWeight: '300' }}>&ldquo;That&rsquo;s annoying!&rdquo; Carmen huffs.</span></p>
                <p><span style={{ fontWeight: '300' }}>I go rigid. </span><em><span style={{ fontWeight: '300' }}>Carmen usually loves when I touch her butt.</span></em></p>
                <p><span style={{ fontWeight: '300' }}>&ldquo;No. Not you.&rdquo; She pecks my cheek. &ldquo;The lock box is back at the mailboxes a couple miles down the road.&rdquo; She squints at the group of us standing by the farmhouse door. &ldquo;Do you guys want to poke around outside here while I drive back and get the key?&rdquo;</span></p>
                <p><span style={{ fontWeight: '300' }}>&ldquo;Hell yeah!&rdquo; Xenia grabs Jenna&rsquo;s hand and the pair skip towards an </span><a href="https://www.flickr.com/photos/fisherbray/52645284690" target="_blank"><span style={{ fontWeight: '300' }}>old green John Deer</span></a><span style={{ fontWeight: '300' }}> tractor beside the farmhouse, a single-seater with a rusting exhaust pipe and wheels almost as tall as me.</span></p>
                <p><span style={{ fontWeight: '300' }}>I hug Carmen from behind. &ldquo;Jeff and I will stay here and make sure those girls don&rsquo;t get hurt on that tractor.&rdquo;</span></p>
                <p><span style={{ fontWeight: '300' }}>&ldquo;Sounds good.&rdquo; Carmen climbs back into her car. &ldquo;I&rsquo;ll be right back.&rdquo;</span></p>
                <p><span style={{ fontWeight: '300' }}>As Jeff and I wave to the cloud of dust rising behind Carmen's departing car, I feel two swift tugs on the back of my shirt.&nbsp;</span></p>
                <p><span style={{ fontWeight: '300' }}>I freeze. &ldquo;Luke?&rdquo;&nbsp;</span></p>
                <p><span style={{ fontWeight: '300' }}>Whirling around, I see not Luke, but a strange bedraggled preschooler in threadbare blue jeans and a ripped white t-shirt.</span></p>
                <p><span style={{ fontWeight: '300' }}>&nbsp;</span> <span style={{ fontWeight: '300' }}>&ldquo;Mister,&rdquo; he implores faintly, &ldquo;can you help me get a peach?&rdquo;&nbsp;</span></p>
                <p><span style={{ fontWeight: '300' }}>&ldquo;Hi there little friend.&rdquo; Jeff eyes the child with concern, &ldquo;We don&rsquo;t have a peach. Are you hungry?&rdquo;</span></p>
                <p><span style={{ fontWeight: '300' }}>The boy&rsquo;s eyes water and his entire body pixelates and reforms as he pleads, &ldquo;I need a peach.&rdquo;&nbsp;</span></p>
                <p><span style={{ fontWeight: '300' }}>Turning on his heel, the boy sprints past the farmhouse towards a tree that must be three stories tall, growing at the edge of the sunflower field.&nbsp;</span></p>
                <p><span style={{ fontWeight: '300' }}>Jeff and I dart after the boy.</span></p>
                <p><span style={{ fontWeight: '300' }}>As we near the tree, I slow and gawk at a massive pile of ripped leaves and peach pits beneath its bare branches. There&rsquo;s just one plump peach left thirty feet above us, at the top of the barren tree.&nbsp;</span></p>
                <p><span style={{ fontWeight: '300' }}>Jeff&rsquo;s shin deep wading through the leaves towards the child when the kid launches himself at the lowest branch and hoists himself up.&nbsp;&nbsp;</span></p>
                <p><span style={{ fontWeight: '300' }}>The bedraggled child stands on the branch, reaching for the next limb. As he hoists himself up once more, a flock of giant black chickens erupt all around from the sunflower field, frantically fluttering up into the naked tree branches.</span></p>
                <p><span style={{ fontWeight: '300' }}>&ldquo;That looks like an entire flock of Ayam Cemani chickens.&rdquo; Jeff turns to me. &ldquo;That&rsquo;s like ten thousand dollars worth of poultry right there.&rdquo;</span></p>
                <p><span style={{ fontWeight: '300' }}>I narrow my eyes at Jeff. &ldquo;Who cares what they&rsquo;re worth.&rdquo; My brow furrows &ldquo;Why did they just flock like that?&rdquo;</span></p>
                <p><span style={{ fontWeight: '300' }}>&ldquo;Come down kid.&rdquo; Jeff shouts. &ldquo;You&rsquo;re gonna to get hurt&rdquo;</span></p>
                <p><span style={{ fontWeight: '300' }}>The bedraggled child is halfway to the top now and the chickens are relentlessly pecking him.</span></p>
                <p><span style={{ fontWeight: '300' }}>The boy shrieks as his grip slips.&nbsp;</span></p>
                <p><span style={{ fontWeight: '300' }}>He crashes down, branches snapping and cracking, as he falls through a gauntlet of bare limbs.&nbsp;</span></p>
                <p><span style={{ fontWeight: '300' }}>Shielding my face from the shower of twigs and dust, I hear the soft thump of the child landing in a pile of leaves between Jeff and I.&nbsp;</span></p>
                <p><span style={{ fontWeight: '300' }}>We both spring to action, pulling leaves and sticks off the boy as we scramble to visually assess his physical state.</span></p>
                <p><span style={{ fontWeight: '300' }}>The child, who is now gashed and bleeding, bolts upright, red blood staining his clothes as he runs straight back to the base of the peach tree.</span></p>
                <p><span style={{ fontWeight: '300' }}>&ldquo;Stay down here kid?&rdquo; Jeff halts the boy holding him by his shoulders. &ldquo;I think those chickens must have a nest in that tree or something.&rdquo;&nbsp;</span></p>
                <p><span style={{ fontWeight: '300' }}>I shuffle towards Jeff and the boy &ldquo;Maybe it&rsquo;s rabies.&rdquo;</span></p>
                <p><span style={{ fontWeight: '300' }}>&ldquo;Mister.&rdquo; The kid glares at me. &ldquo;I just need that peach.&rdquo; He jumps and grabs the nearest branch.</span></p>
                <p><span style={{ fontWeight: '300' }}>Jeff lifts the kid off the branch and sets him atop the leaf pile. Resting a firm hand on the boy&rsquo;s shoulder to hold him in place.</span></p>
                <p><span style={{ fontWeight: '300' }}>Hopping up, I grab the nearest peach branch with both hands and hoist myself up.</span></p>
                <p><span style={{ fontWeight: '300' }}>The kid stops trying to get away from Jeff. &ldquo;Watch out for my rooster, mister,&rdquo; he calls, &ldquo;he&rsquo;s especially mean&rdquo;.&nbsp;</span></p>
                <p><span style={{ fontWeight: '300' }}>Jeff releases the boy, who stands calmly looking up at me now.</span></p>
                <p><span style={{ fontWeight: '300' }}>And then the chickens flock at me, their talons and beaks ripping through my clothes and picking at my skin.&nbsp;</span></p>
                <p><span style={{ fontWeight: '300' }}>&nbsp;Sharp jabs come from everywhere, but I grit my teeth and keep climbing.&nbsp;</span></p>
                <p><span style={{ fontWeight: '300' }}>I climb to the top of that dang tree and I actually make it within reaching distance of the peach, but as my fingers close around the supple, velvety fruit, I hear a crack and the beaks and talons are replaced by branches lashing against my face and bruising my body as I fall, shrieking and flailing into the pile of leaves.&nbsp;</span></p>
                <p>&nbsp;</p>
                <p><strong>2042-08-31T07:58:1900Z|b54ba8fb-01fa-496e-b97c-e3aaef3fb11a|&lsquo;...&rsquo;</strong><span style={{ fontWeight: '300' }}>&nbsp;</span></p>
                <p><span style={{ fontWeight: '300' }}>When I blink awake I can see stars twinkling through the debris covering my face. Twigs and leaves slide off of me as I sit up, peering around the dark quiet sunflower farm.</span></p>
                <p><span style={{ fontWeight: '300' }}>It&rsquo;s absolutely silent.</span></p>
                <p><span style={{ fontWeight: '300' }}>Jeff is gone. The boy is gone and thank God, the chicken&rsquo;s are gone.</span></p>
                <p><span style={{ fontWeight: '300' }}>&nbsp;I wiggle my fingers, scanning the branches of the moonlit tree and realize that stupid dang peach is gone too.</span></p>
                <p><span style={{ fontWeight: '300' }}>My right forearm feels stiff and has a horrible throbbing ache. Grabbing at it with my left hand I feel cold metal. I stare, shocked at an electronic device that has been somehow clamped to my arm.&nbsp;</span></p>
                <p><span style={{ fontWeight: '300' }}>&ldquo;What is this?&rdquo; I scream into the darkness. &ldquo;Who did this?</span></p>
                <p><span style={{ fontWeight: '300' }}>Frantically I pry against it, but it doesn&rsquo;t budge. It&rsquo;s a single seamless piece of steel &ndash; except for some grooves at the top center of my arm.</span></p>
                <p><span style={{ fontWeight: '300' }}>Rummaging in my pocket I pull out my cell phone and shake it to activate the flashlight.&nbsp;&nbsp;</span></p>
                <p><span style={{ fontWeight: '300' }}>Two buttons are set flush in the steel arm cuff. One is metallic red and the other green.</span></p>
                <p><span style={{ fontWeight: '300' }}>Without thinking. I press the green button.&nbsp;</span></p>
                <p><span style={{ fontWeight: '300' }}>There's a blinding flash of light and as my vision returns, five white hearts, a blue bar, and a map of a dark square with a green dot in the center are etched across my field of view.&nbsp;</span></p>
                <p><span style={{ fontWeight: '300' }}>I hear a pop like someone pricked a balloon and the phone in my hand and the clothes on my back vaporize while, link by tiny link, chains form and stitch together around my body, a thousand per second until a knee-length </span><a href="https://en.wikipedia.org/wiki/Hauberk" target="_blank"><span style={{ fontWeight: '300' }}>Hauberk</span></a><span style={{ fontWeight: '300' }}> envelops me.&nbsp;</span></p>
                <p><span style={{ fontWeight: '300' }}>Looking down, I admire the spontaneously formed chainmail and chortle as I notice a neon yellow and white checkered fanny pack belted around my waist. The buttons on my arm cuff have disappeared.</span></p>
                <p><span style={{ fontWeight: '300' }}>&ldquo;Someone help me!&rdquo; My&nbsp; ears perk to the sound of Luke screaming somewhere in the sunflower field.</span><span style={{ fontWeight: '300' }}><br /></span> <span style={{ fontWeight: '300' }}>&ldquo;Luke I&rsquo;m coming!&rdquo; I dart towards the sea of flowers. &ldquo;Where are you?&rdquo; I tear through flower stalks, noticing that the green dot on the map is approaching a white circle with each step I take.&nbsp;</span></p>
                <p><span style={{ fontWeight: '300' }}>Luke continues to scream and I frantically stumble towards the intensifying sound of his voice until I burst into a perfectly circular clearing.&nbsp;</span></p>
                <p><span style={{ fontWeight: '300' }}>Squinting against the darkness I see the giant figure of a rooster silhouetted in the moonlight.&nbsp;</span></p>
                <p><span style={{ fontWeight: '300' }}>The round clearing lights up as if pole-less stadium lights have been turned on overhead and I gasp.&nbsp;</span></p>
                <p><span style={{ fontWeight: '300' }}>Pinched in the rooster&rsquo;s beak, suspended two stories in the air by the collar of his t-shirt, is the squirming, bawling figure of the bedraggled boy. There&rsquo;s also something clenched in the rooster's left Talon.</span></p>
                <p><span style={{ fontWeight: '300' }}>I gasp again.&nbsp;</span></p>
                <p><span style={{ fontWeight: '300' }}>It&rsquo;s Jeff.</span></p>
                <p><span style={{ fontWeight: '300' }}>A fight bell digs from the heavens, a red bar appears over the chicken&rsquo;s head, and he kicks his left talon forward, launching Jeff straight at me.</span><span style={{ fontWeight: '300' }}><br /></span><span style={{ fontWeight: '300' }}>I immediately jump and find myself sailing up fifteen feet in the air as Jeff&rsquo;s lame body slides to a stop at the edge of the sunflower clearing.&nbsp;</span></p>
                <p><span style={{ fontWeight: '300' }}>Landing with a thud, I turn towards Jeff&rsquo;s crumpled body. A single white heart appears above his head.</span></p>
                <p><span style={{ fontWeight: '300' }}>&ldquo;Oh good I think that means he&rsquo;s alive.&rdquo;&nbsp; I let out a sigh of relief, but my reprieve is momentary.</span></p>
                <p><span style={{ fontWeight: '300' }}>The rooster flings the child to the edge of the clearing opposite Jeff.&nbsp;</span></p>
                <p><span style={{ fontWeight: '300' }}>Half of one heart appears over the boy.</span></p>
                <p><em><span style={{ fontWeight: '300' }}>I want to wake up. </span></em><span style={{ fontWeight: '300' }}>I slap myself.</span></p>
                <p><span style={{ fontWeight: '300' }}>&nbsp;</span> <span style={{ fontWeight: '300' }}>Nothing happens.&nbsp;</span></p>
                <p><span style={{ fontWeight: '300' }}>&ldquo;What do you want?&rdquo; I scream, frustratedly punching at the air in the direction of the rooster.&nbsp;</span></p>
                <p><span style={{ fontWeight: '300' }}>As I throw my fist forward, a mechanical hum issues from my arm cuff and some sort of cannon emerges.&nbsp;</span></p>
                <p><span style={{ fontWeight: '300' }}>*Whoosh* a dang fireball shoots out of the cannon hitting the rooster&rsquo;s giant black comb which wobbles and quivers like a side of beef.&nbsp;</span></p>
                <p><span style={{ fontWeight: '300' }}>My blue bar decreases slightly.&nbsp;</span></p>
                <p><span style={{ fontWeight: '300' }}>The rooster&rsquo;s red bar remains full.</span></p>
                <p><span style={{ fontWeight: '300' }}>It&rsquo;s insane and I&rsquo;m probably dreaming, but I proceed to duck and weave, dodging the black beak, with perfect ease while firing my cyborg fireball arm cuff thing with dead-on aim.&nbsp;</span></p>
                <p><span style={{ fontWeight: '300' }}>I glance at the bar above the rooster&rsquo;s head as I nail him in the eye with a fireball. The red bar remains full.&nbsp;</span></p>
                <p><span style={{ fontWeight: '300' }}>I nail him in his open beak.</span></p>
                <p><span style={{ fontWeight: '300' }}>&nbsp;Still no change in the red bar.</span></p>
                <p><span style={{ fontWeight: '300' }}>The red bar remains the same no matter How. Many. Perfect. Dang. Fireballs. I slam. Into. this giant black rooster.</span></p>
                <p><span style={{ fontWeight: '300' }}>The bedraggled child is now stirring and showing a full white heart above his head.</span></p>
                <p><em><span style={{ fontWeight: '300' }}>That&rsquo;s good. It looks like health regenerates.</span></em></p>
                <p><span style={{ fontWeight: '300' }}>My blue bar, which had been fully depleted ticks up slightly.</span></p>
                <p><em><span style={{ fontWeight: '300' }}>Oh good! Magic regenerates!</span></em></p>
                <p><span style={{ fontWeight: '300' }}>SMMAAaaacCCKK</span><span style={{ fontWeight: '300' }}><br /></span> <span style={{ fontWeight: '300' }}>The rooster&rsquo;s beak drills me into the ground.&nbsp;</span></p>
                <p><span style={{ fontWeight: '300' }}>Three of my five hearts disappear.</span><span style={{ fontWeight: '300' }}><br /></span> <span style={{ fontWeight: '300' }}>Jumping to my feet, I run towards the sunflowers to hide, but as I reach the precipice of the field,,my whole body slams into an invisible wall.</span></p>
                <p><span style={{ fontWeight: '300' }}>Literal white stars circle above my head as I hear a faint voice beside me plead: &ldquo;your peach.&rdquo; The strange child is pointing at my crotch.&nbsp;</span></p>
                <p><span style={{ fontWeight: '300' }}>I gawk at the child</span></p>
                <p><span style={{ fontWeight: '300' }}>&ldquo;The peach.&rdquo; He points at my crotch &ldquo;The peach is in your pouch!&rdquo; </span><span style={{ fontWeight: '300' }}><br /></span> <span style={{ fontWeight: '300' }}>I unzip my fanny pack.&nbsp;</span></p>
                <p><span style={{ fontWeight: '300' }}>The world goes silent and black.&nbsp;</span></p>
                <p><span style={{ fontWeight: '300' }}>Then white text appears:</span></p>
                <p><span style={{ fontWeight: '300' }}><br /></span> <span style={{ fontWeight: '300' }}>INVENTORY:&nbsp;</span></p>
                <p><span style={{ fontWeight: '300' }}>Peaches: 1</span></p>
                <p>&nbsp;</p>
                <p><span style={{ fontWeight: '300' }}>&ldquo;</span><em><span style={{ fontWeight: '300' }}>Give a command</span></em><span style={{ fontWeight: '300' }}>&rdquo; a robotic voice prompts me. &ldquo;</span><em><span style={{ fontWeight: '300' }}>Some examples of commands are &lsquo;exit menu&rsquo;, or&nbsp; &lsquo;equip&rsquo;, &lsquo;unequip&rsquo; and &lsquo;drop&rsquo; followed by an inventory item</span></em><span style={{ fontWeight: '300' }}>&rdquo;.</span></p>
                <p><span style={{ fontWeight: '300' }}>&ldquo;Equip Peach.&rdquo; I shout into the void.&nbsp;</span></p>
                <p><span style={{ fontWeight: '300' }}>&ldquo;Peach equipped&rdquo; the bot says.</span><span style={{ fontWeight: '300' }}><br /></span> <span style={{ fontWeight: '300' }}>Nothing happens.</span></p>
                <p><span style={{ fontWeight: '300' }}>&ldquo;Exit Menu!&rdquo; I shout.</span></p>
                <p><span style={{ fontWeight: '300' }}>I&rsquo;m immediately back in the clearing facing the black rooster, his beak agape.&nbsp;</span></p>
                <p><span style={{ fontWeight: '300' }}>&ldquo;Eat Peach you evil bird!&rdquo; I air punch towards the Rooster and a peach catapults from my arm cannon towards the bird monster&rsquo;s open maw.</span></p>
                <p><span style={{ fontWeight: '300' }}>The rooster&rsquo;s mandibles clamp shut as the peach smacks into the back of his throat.</span></p>
                <p><span style={{ fontWeight: '300' }}>&nbsp;Cherry slot-machine-payout-sounds echo all around and cartoon peaches appear where the roosters' eyes had been.</span></p>
                <p><span style={{ fontWeight: '300' }}>The red bar above his head turns green and the rooster juts out his left talon, grabbing up the bedraggled child and tossing him into the air.&nbsp;</span></p>
                <p><span style={{ fontWeight: '300' }}>The child somersaults backwards landing perfectly astride the rooster&rsquo;s back as the rooster struts happily around the clearing.&nbsp;</span></p>
                <p><span style={{ fontWeight: '300' }}>&ldquo;Thanks for helping me with my rooster&rdquo; the boy calls down from the chicken&rsquo;s back as he tosses a golden egg to me.&nbsp;</span></p>
                <p><span style={{ fontWeight: '300' }}>I feel the egg slap my palm, but as I peer down, the egg disappears and a robotic voice coos in my ear. &ldquo;Congratulations Diego, you acquired a new fighting fellow.&rdquo;</span></p>
                <p><span style={{ fontWeight: '300' }}>When I look up, the boy and the rooster are a blur of motion, smashing a path through the sunflower field as they disappear into the darkness.</span></p>
                <p><span style={{ fontWeight: '300' }}>As I stare down the trail of snapped sunflower stalks, my peripheral vision catches Jeff shakily rising to his feet 25 steps away from me.&nbsp;</span></p>
                <p><span style={{ fontWeight: '300' }}>He has a cuff on his arm too.&nbsp;</span></p>
                <p><span style={{ fontWeight: '300' }}>He&rsquo;s staring at something on the back of it.&nbsp;</span></p>

            <ol start="7">
                <li><strong>Filename: &lsquo;Jenna Gets Dog Whistled&rsquo;,</strong></li>
            </ol>
            <p><strong>Timestamp: 2042-08-30T17:04:23:PST,</strong></p>
            <p><strong>Details: &lsquo;Jenna Carson, Fremont-CA, Neighborhoods&rsquo;,</strong></p>
            <p><strong>H-ID: 28d0086c-da60-44e5-9c9b-54abfbe4154c,</strong></p>
            <p><strong>Transcript:</strong></p>
            <p>&nbsp;</p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;I hope the tractor comes with the farm!&rdquo; I squeal jovially to Xenia as I grip the hot steel handle and hoist myself up to the cab of the rusting green tractor.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>Pulling my cell phone out I snap a quick picture of the farmhouse, a hundred yards away.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>Setting my phone on the hood of the tractor, I reach down and clasp Xenia&rsquo;s forearm, pulling her up beside me. &ldquo;Do you think it works?&rdquo;&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>Xenia perches half a butt cheek on the tractor seat. &ldquo;There&rsquo;s probably no way this place is anywhere near our price range.&rdquo; She pats the other half of the seat beside her and I awkwardly perch beside her.</span><span style={{ fontWeight: '300' }}><br /></span> <span style={{ fontWeight: '300' }}>Sliding her Iphone out of the tiny excuse for a back pocket in her girl-jeans, Xenia elbows me. &ldquo;Smile, glitch, we better get some selfies before this place is sold to someone else.&rdquo;&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>Flashing our standard selfie smiles at Xenia&rsquo;s outstretched Iphone, I remember that she basically never sends me copies of the pictures she takes.</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;Take one with my cell.&rdquo; I swivel to grab my phone from where I&rsquo;ve set it on the tractor hood and catch sight of a huge black German Shepard ten yards away limping towards the farmhouse.</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;Hey,&rdquo; I elbow Xenia, &ldquo;That dog over there that looks kinda like Myka&rsquo;s dog, Max&rdquo; I shade my eyes and notice it&rsquo;s hobbling, its front paw pinned against its body. &ldquo;He looks hurt. Do you think we should help him?&rdquo;</span></p>
            <p><span style={{ fontWeight: '300' }}>Xenia turns and squints at the limping Shepard then hops off the tractor. &ldquo;Yup.&rdquo; </span><span style={{ fontWeight: '300' }}><br /></span> <span style={{ fontWeight: '300' }}>She slides her cell into her back pocket, leaving half its glittering champagne case protruding as she climbs down.</span></p>
            <p><span style={{ fontWeight: '300' }}>I&rsquo;m about to jump off the tractor when Xena juts her hand up, gesturing for me to halt.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>Somehow, in the act of trying to stop like a normal human person, I lose my balance and tumble forward off the tractor bashing my knees into Xenia&rsquo;s back.</span></p>
            <p><em><span style={{ fontWeight: '300' }}>Classic Jenna.</span></em></p>
            <p><span style={{ fontWeight: '300' }}>I manage to stick my landing, but Xenia&rsquo;s on all fours in front of me covered in dust.</span></p>
            <p><span style={{ fontWeight: '300' }}>Meanwhile, limping and now startled, black dog darts away directly through the &ndash;closed&ndash; glass patio door at the back of the farmhouse.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>Crash! Shatter! Ting!</span></p>
            <p><span style={{ fontWeight: '300' }}>Splinters of tempered glass explode from the door as the dog vanishes inside the darkened house.</span></p>
            <p><span style={{ fontWeight: '300' }}>Xenia shoots me a biting glare as she scrambles to her feet, brushing dust from her thighs. &ldquo;I was trying to tell you to wait on the tractor&rdquo; she splutters. &ldquo;Because,&rdquo; she coughs, &ldquo;I didn&rsquo;t want to spook the dog.&rdquo;&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>Pained yelps echo from within the house and Xenia is immediately off to the rescue, sprinting across the dusty yard.</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;Should we really follow an injured dog into a strange house?&rdquo; I call after her as she reaches the shattered door.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>Xenia pauses, but without turning back, she disappears into the darkness of the farmhouse.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>I take a bounding step to follow after her, but instead of soft dust underfoot, I feel my shoe slide and crunch down on someth &ndash;</span><em><span style={{ fontWeight: '300' }}>Oh glitch, I think I stepped on Xenia&rsquo;s cell.</span></em></p>
            <p><span style={{ fontWeight: '300' }}>My ankle twists as the phone slides from under my shoe and scuttles backwards.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>Stumbling forward, I break my fall with my forearms.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>The shooting pain from my bashed elbows and twisted ankle are quickly numbed by the surge of adrenaline that erupts inside me at the sound of Xenia&rsquo;s horrified shrieks inside the house.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>Rising shakily to my feet I sprint-hobble to the farmhouse.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>Broken glass crunches under foot and sunlight warms my shoulders as I peer through the empty door frame into an absolute black hole of darkness.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;Jenna!&rdquo; Xenias voice pleads from the abyss &ldquo;I need you!&rdquo;&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>A dog snarls from inside the abyss.</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;Help!&rdquo; Xenia shrieks.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>I&rsquo;m frozen with fear.</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;I need to call someone&rdquo;. I reach for my cell.&nbsp;</span></p>
            <p><em><span style={{ fontWeight: '300' }}>Oh glitch! </span></em><span style={{ fontWeight: '300' }}>My stomach clenches.</span><em><span style={{ fontWeight: '300' }}> My phone&rsquo;s on the tractor.</span></em></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;I need to get my phone.&rdquo; I scream in panic at the darkness, but as I turn back toward the tractor, the black German Shepherd, that just ran into the house, is standing behind me, his glistening white teeth bared, hackles raised as he creeps forward.</span></p>
            <p><span style={{ fontWeight: '300' }}>Edging backwards,&nbsp; I feel my heel collide with the now-empty frame of the sliding glass door.</span></p>
            <p><span style={{ fontWeight: '300' }}>&nbsp;&ldquo;Xenia I&rsquo;m coming,&rdquo; I scream into the abyss before sprinting as hard as I can into the deep blackness.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>The moment I cross the precipice, a sound like rushing water grows to a deafening crescendo and everything goes black.</span></p>
            <p>&nbsp;</p>
            <p><strong>2042-08-31T07:04:5100Z|</strong><strong>28d0086c-da60-44e5-9c9b-54abfbe4154c</strong><strong>|&lsquo;...&rsquo;</strong></p>
            <p><span style={{ fontWeight: '300' }}>Sputtering and snorting, the pungent smell of burning kerosene fills my nose as I come to.</span></p>
            <p><span style={{ fontWeight: '300' }}>My wrists have been cuffed to a cold stone wall above my head.&nbsp;</span></p>
            <p><em><span style={{ fontWeight: '300' }}>Oh god. I&rsquo;m being trafficked.</span></em></p>
            <p><span style={{ fontWeight: '300' }}>Blinking open my dust-irritated eyes, five white hearts, a blue line and a map of a single room with two green dots in it, burst across my vision like migraine spots. Desperate to rub away the visions in my eyes, I strain my wrists against their shackles but my hands don&rsquo;t budge.</span></p>
            <p><em><span style={{ fontWeight: '300' }}>I have to get out of here. I have to get out of here. I have to get out of here.</span></em></p>
            <p><span style={{ fontWeight: '300' }}>Squeezing my eyes shut, the images remain as vivid as ever.</span></p>
            <p><em><span style={{ fontWeight: '300' }}>The glitching traffickers tattooed my eyeballs.</span></em></p>
            <p><span style={{ fontWeight: '300' }}>Taking a deep breath, I creep open my eyes, slowly adjusting to the faint flickering light in the massive dungeon-like chamber as I peer from one dim wall to the next.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>There is a sconce opposite me that casts a twenty foot half circle of light. Hanging from a hook on the wall, beside the sconce is a rusting metal restraint like the one pinning my arms to the wall. Beside the restraints hangs a neon yellow and white checkered fanny pack.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>That&rsquo;s all. Just me, a lamp, some wrist restraints and Myka&rsquo;s fanny pack.</span></p>
            <p><em><span style={{ fontWeight: '300' }}>Oh Glitch! Is Myka the trafficker?</span></em></p>
            <p><span style={{ fontWeight: '300' }}>My back itches and glancing down, I suddenly realize that the only piece of clothing I&rsquo;m wearing is an actual burlap sack with head and arm holes cut out.</span><span style={{ fontWeight: '300' }}><br /></span> <span style={{ fontWeight: '300' }}>I tip my head back to take a look up at my aching hands and I shriek in horror at the sight of a metal cuff that seems to be surgically attached to my left wrist.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;Oh thank god you&rsquo;re not dead.&rdquo;&nbsp; Xenia&rsquo;s voice echoes from a dark corner of the seemingly endless room.</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;Xenia,&rdquo; I sing towards the shadows. &ldquo;My arm has a metal plate,&rdquo; I blurt. &ldquo;The dog I saw was definitely Max. I think he had rabies. I think Myka is here. His pack of dog treats&nbsp; is on the wall!&rdquo; I am breathing fast as I continue to throw random flashes of insane, confusing information at Xenia </span><span style={{ fontWeight: '300' }}><br /></span> <span style={{ fontWeight: '300' }}>&ldquo;Just breathe Jenna.&rdquo; She coos. &ldquo;take a deep breath and calm down.&rdquo;</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;How can you be so glitching calm?!&rdquo; I scream.</span></p>
            <p><span style={{ fontWeight: '300' }}>Xenia sighs. &ldquo;Because this is just a game.&rdquo;</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;A game?&rdquo; I pant. &ldquo;This is a game to you?!&rdquo; I freeze, suddenly envisioning myself splayed on an operating table, my best friend in a white lab coat, an electric needle prized in her hand above my eyeball as she manically laughs.</span><span style={{ fontWeight: '300' }}><br /></span> <span style={{ fontWeight: '300' }}>I strain my wrist against their metal shackles, panting: &ldquo;Did you tattoo my eyeball Xenia?&rdquo;</span><span style={{ fontWeight: '300' }}><br /></span> <span style={{ fontWeight: '300' }}>&ldquo;What? Xenia scoffs. &ldquo;No!&rdquo; she shakes her head, &ldquo;I thought this was a dream at first, but I&rsquo;ve been slapping and pinching the glitch out of myself and I haven&rsquo;t been able to wake up.&rdquo;</span></p>
            <p><span style={{ fontWeight: '300' }}>Xenia steps dramatically from the shadows and my mouth drops.</span></p>
            <p><span style={{ fontWeight: '300' }}>Glistening mage robes adorn her perfect hourglass figure. Deep violet and emerald green sequins shimmer like dragon scales in the dimly lit dungeon as she walks towards me. Dragon-shaped rings adorn each of her right fingers, which clasp the platinum base of an emerald-eyed serpent-headed staff. She raises the staff pointing it at my hands and shouts: &ldquo;Cast unfetter.&rdquo;</span></p>
            <p><span style={{ fontWeight: '300' }}>The rusted metal restraints above me creak open and my arms drop to the floor like a pair of rubber snakes.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;You&rsquo;re a Sorceress?&rdquo; I try to back away from Xenia, but my arms are numb and my back is to a wall, so I just slump deeper into the pile of dog poo that I am and look helplessly up at my horrifyingly composed friend.</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;Apparently.&rdquo; Xenia shakes her head letting out a deflated sigh. &ldquo;After I followed that dog into the house, I just blacked out and woke up here.&rdquo; She half smiles. &ldquo;You were here too when I woke up.&rdquo;</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;But,&rdquo; I glare at her. &ldquo;I heard you screaming for me after you came in.&rdquo;</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;I may have,&rdquo; she shrugs. &ldquo;I don&rsquo;t remember what happened between the time I entered the farmhouse and the time I woke up.&rdquo;&nbsp;&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>My arms are pins and needles as they come back to life. &ldquo;Why are you all confident and cosplay right now if you aren&rsquo;t a part of,&rdquo; I attempt to gesture around the room but my weakened arm just lamely falls to the floor,&nbsp; &ldquo;this?&rdquo;</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;Slow down, Stretch Arm Strong&rdquo; Xenia laughs. &ldquo;Let me get through telling you what I know and then you can freak out, okay.&rdquo;</span><span style={{ fontWeight: '300' }}><br /></span> <span style={{ fontWeight: '300' }}>I manage to half cross my arms as I lean back against the cold wall, glaring at her.</span></p>
            <p><span style={{ fontWeight: '300' }}>Yanking Myka&rsquo;s fanny pack from the wall, Xenia crosses the room and kneels in front of me. &ldquo;So this is your inventory&rdquo;, she leans toward me, clicking the plastic buckles together behind my back. &ldquo;You can restyle it or hide it from your character menu.&rdquo;&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>I stare blankly at Xenia as I idly scratch my back where Myka&rsquo;s fanny pack is now grinding burlap into my spine.</span></p>
            <p><span style={{ fontWeight: '300' }}>She points to my metal arm thing. &ldquo;And that&rsquo;s your arm cuff.&rdquo;</span></p>
            <p><span style={{ fontWeight: '300' }}>I start to ask a question but she presses her finger gently to my lips. &ldquo;Please, just listen, Jenna.&rdquo; </span><span style={{ fontWeight: '300' }}><br /></span> <span style={{ fontWeight: '300' }}>&ldquo;Anyway,&rdquo; she retracts her finger from my face and continues &ldquo;You can access your game menu from either one of these devices.&rdquo; She presses an almost-invisible metallic button on her own arm and seems to freeze in time, then seconds later she reanimates. &ldquo;Can you hear me when I&rsquo;m in the menu like that?&rdquo; She looks at me expectantly.</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;It just looked like you were glitching.&rdquo; I furrow my brow. &ldquo;Were you trying to talk to me when you were frozen?&rdquo;</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;Yeah. Just to test.&rdquo; She grabs my right wrist, &ldquo;I&rsquo;m going to help you get into the game menu.&rdquo; She stares at me intently. &ldquo;When you&rsquo;re in the menu it will be completely black, but there will be an AI that you can talk to.&rdquo; She pauses to let me digest. &ldquo;For now, all I want you to do is ask the menu what your character stats are and then when it's done listing your stats, say &lsquo;exit menu&rsquo; and you&rsquo;ll be back here with me and then we can work together on finding out how to get out of this basement.&rdquo;</span><span style={{ fontWeight: '300' }}><br /></span> <span style={{ fontWeight: '300' }}>&ldquo;Got it?&rdquo; She loosens her grip on my hand.</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;Got it.&rdquo; I nod, in spite of having no idea what the glitch she&rsquo;s talking about.</span><span style={{ fontWeight: '300' }}><br /></span> <span style={{ fontWeight: '300' }}>She guides my left hand over to my arm cuff, pressing my index finger into the back of my right hand.</span></p>
            <p><span style={{ fontWeight: '300' }}>As promised I find myself in total blackness and am greeted by a friendly robotic voice.</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;I&rsquo;m a level five mage&rdquo; I gasp as I emerge from the menu, hurrying to not forget my stats. &ldquo;I have a cherrywood and phoenix-stone scepter and it is currently only equipped with a level five fire spell.&rdquo;</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;Fantastic&rdquo; Xenia beams as she uncrosses her legs. &ldquo;I think I can work with that.&rdquo;</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;Okay wait,&rdquo; I motion for her to sit back down. &ldquo;So, I still don&rsquo;t know what the actual glitch is going on?&rdquo;</span></p>
            <p><span style={{ fontWeight: '300' }}>Xenia pretzels her legs &ldquo;Just go back into the menu and ask the AI whatever you want to know&hellip; she&rsquo;s basically like god&rdquo; Xenia shrugs, &ldquo;except that she will actually answer everything you ask,&rdquo; She scoots herself next to me, &ldquo;Just try to stop before you get too overwhelmed.&rdquo;</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;Uhm okay&rdquo; I look at my arm cuff. &ldquo;So I just press my arm cuff and I&rsquo;m in the menu?&rdquo; I meet Xenia&rsquo;s eyes. &ldquo;And you&rsquo;ll be here when I&rsquo;m done?&rdquo;</span></p>
            <p><span style={{ fontWeight: '300' }}>She smiles. &ldquo;Yup. I&rsquo;ll be right here for you, friend.&rdquo;</span></p>
            <p><br /><br /></p>
            <ol start="8">
                <li><strong>Filename: &lsquo;Xenia\&rsquo;s A Character&rsquo;,</strong></li>
            </ol>
            <p><strong>Timestamp: 2042-08-31T08:48:03:00Z,</strong></p>
            <p><strong>Details: &lsquo;Xenia Chloros, Underrealm, Mystic Depths&rsquo;,</strong><span style={{ fontWeight: '300' }}>&nbsp;</span></p>
            <p><strong>H-ID: 81feeffe-0067-4226-9c41-313509217b49,</strong></p>
            <p><strong>Transcript:</strong></p>
            <p>&nbsp;</p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;Okay, so wait,&rdquo; Jenna is heart-wrenchingly pathetic and meek in her burlap sack dress as she lets out a deflated sigh, &ldquo;So you and I are just NPCs in a video game console?&rdquo;</span></p>
            <p><span style={{ fontWeight: '300' }}>I nod grimly.</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;So our actual existence is just like the plot of a Ryan Reynolds movie?&rdquo;</span></p>
            <p><span style={{ fontWeight: '300' }}>I nod.</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;And you&rsquo;re just like &ndash;okay cool. I accept that?&rdquo;</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;I find it really easy to accept.&rdquo; My bootheals echo as I wander along the dungeon wall, skimming my fingers across the cool stone walls. &ldquo;Maybe it&rsquo;s because no one really knows what a&ndash; quote self&ndash; is.&rdquo; One hand over the other, I lean on my scepter. &ldquo;There&rsquo;s absolutely nothing that has ever happened to me that refutes the idea that I exist as some cloud of electricity inside a video game console or whatever,&rdquo; I straighten up, &ldquo;however a lot has happened today that strictly violates the rules of physics which previously governed my entire existence.&rdquo; I tap my arm cuff with my scepter, &ldquo;so I just accept that there is someone or some force out there that decided today I&rsquo;m in Skyrim instead of The Sims, so I guess I&rsquo;m going to play Skyrim now.&rdquo;&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>A tear slides down Jenna&rsquo;s cheek. &ldquo;I don&rsquo;t want to be a Sim or a Sorceress.&rdquo; She sniffs, &ldquo;I want to live in a Universe that can&rsquo;t suddenly change from one minute to the next.&rdquo;&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>Pangs of guilt and pity tug at my heart as I stride over to Jenna, pulling her into a side hug. &ldquo;Based on what I read in the game system codex,&rdquo; I give her shoulder a squeeze, &ldquo;I think we might be able to get back to the other game.&rdquo; I step back from my friend, my eyes trained on the floor as I proceed, &ldquo;but for me at least, when I tried to think of who I would miss back in,&rdquo; I sigh, &ldquo;my old life, I&rsquo;m cool with it.&rdquo;&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>Rubbing my neck, I chuckle, &ldquo;I mean honestly, my parents stopped talking to me years ago and I have no respect for my coworkers.&rdquo; I smile weakly at Jenna, &ldquo;so you&rsquo;re like the one person I would miss, but you&rsquo;re here with me, so yeah,&rdquo; I whirl my staff in the air leaving swirls of emerald sparks, &ldquo;I&rsquo;m going to start learning to control magic instead of electrical current, no big.&rdquo;</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;Okay. I guess that makes sense.&rdquo; Jenna&rsquo;s quivering chin tells me she&rsquo;s not as sold on our new life as I am.</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;I have an idea that&rsquo;ll cheer you up.&rdquo; My eyes twinkle, &ldquo;I&rsquo;m going to go into the menu, and you&rdquo; I nod at Jenna &ldquo;Try to slap me in the face while I&rsquo;m frozen.&rdquo; I lean my serpent staff against the wall. &rdquo;I want to see if we&rsquo;re in a safe zone or something when we&rsquo;re in the menu.&rdquo;</span></p>
            <p><span style={{ fontWeight: '300' }}>Tapping the cold metal of my arm cuff, my vision blackens and my left cheek explodes in pain.</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;Exit menu,&rdquo; I wheeze, my face still reverberating from Jenna&rsquo;s blow as Jenna&rsquo;s horror stricken face comes into focus.&nbsp;&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;Not safe when in menu mode,&rdquo; I sputter. &ldquo;Sure feels like you had some built up animosity behind that one.&rdquo; I chuckle.</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;No. I. I.&rdquo; Jenna stammers. &ldquo;I didn&rsquo;t mean to hit you that hard.&rdquo; She&rsquo;s tearing up again. &ldquo;It was like my cuff took over my whole arm.&rdquo;</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;Glitch,&rdquo; I rub my jaw, &ldquo;Friendly fire is allowed and we&rsquo;re not safe in the menu. That&rsquo;s bad and bad.&rdquo;</span></p>
            <p><span style={{ fontWeight: '300' }}>Jenna&rsquo;s eyes widen as the gamer nerd in her boots up. &ldquo;Do you think we have infinite lives or just the one?&rdquo;&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;Oh god.&rdquo; She throws her arms in the air &ldquo;Do you think someone is controlling one of us?&rdquo;</span></p>
            <p><span style={{ fontWeight: '300' }}>&nbsp;She squeezes her eyes shut. &ldquo;What are we going to have to kill just to stay alive&rdquo;. Tears are rolling down her cheeks.</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;Relax&rdquo; I put my hands on her shoulders, leaning my forehead against hers. &ldquo;I did some killing and pilfering while you were passed out,&rdquo; I shrug, &ldquo;so far it&rsquo;s just been rats and bats&rdquo;</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;What if we beat the game?&rdquo; She wriggles away from me. &ldquo;Best case scenario, we just cease to exist until someone wants to play the game again?&rdquo; She suddenly glares at me. &ldquo;Are you the real person? Are you playing me right now? Did you design me?&rdquo;&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;No.&rdquo; I meet her gaze. &ldquo;From what I can tell, this game is just so elaborate that NPCs continue to exist and have their own lives even when they aren&rsquo;t interacting with any,&rdquo; air quotes, &ldquo;real players.&rdquo;</span></p>
            <p><span style={{ fontWeight: '300' }}>Shaking her head Jenna slumps to a seat next to me.</span><span style={{ fontWeight: '300' }}><br /></span> <span style={{ fontWeight: '300' }}>I drape my arm over her burlap shoulders hugging her towards me.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;You&rsquo;re stronger than you think.&rdquo; I rub my jaw and flash her a quick wink.&nbsp; &ldquo;Plus,&rdquo; I release Jenna and rise to my feet,&nbsp; &ldquo;While I was killing dungeon vermin, I got a dope scepter and some better garb for you.&rdquo;</span></p>
            <p><span style={{ fontWeight: '300' }}>Jenna&rsquo;s tears slow and she looks at me with interest.</span><span style={{ fontWeight: '300' }}><br /></span> <span style={{ fontWeight: '300' }}>&ldquo;Like you say,&rdquo; I twirl my scepter, &ldquo;we may be trapped here indefinitely, so you need to learn about your inventory anyway.&rdquo;&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>Tapping my arm cuff, I sink into the blackness of the inventory menu before emerging with a red, hooded, velvet cloak and a platinum scepter, topped with a coiled dragon clenching a gleaming crimson gem in its platinum maw. The inventory items appear as cartoonish icons on the stone floor in front of me with an object description in white lettering glowing above each.</span></p>
            <p><span style={{ fontWeight: '300' }}>Jenna&rsquo;s eyes widen. &ldquo;Okay, I guess if we&rsquo;re trapped here, then I should get to learnin&rsquo; &ldquo;&nbsp; She reaches for the trinkets.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>As her fingers touch the objects, she freezes.</span></p>
            <p><span style={{ fontWeight: '300' }}>I spent over an hour configuring the style and color options for my own outfit, so I figure Jenna&rsquo;s going to be in the inventory menu for a while.</span></p>
            <p><em><span style={{ fontWeight: '300' }}>May as well see what I can do with the spells I know.</span></em></p>
            <p><span style={{ fontWeight: '300' }}>Walking to the center of the room, I raise my staff and systematically cast a &ldquo;reveal secrets&rdquo; spell on each section of each stone wall. Jenna is still frozen and I&rsquo;m three walls in when I hear a melodic, and triumphant </span><a href="https://www.google.com/search?q=secret+passage+sound+from+legend+of+zelda+nes&amp;sca_esv=569458463&amp;rlz=1C5CHFA_enUS854US857&amp;sxsrf=AM9HkKktZw9NAm0_Urd0ln5AJUmsth_jpg%3A1695991513104&amp;ei=2cYWZcz6BfvPkPIP7JWC6A4&amp;ved=0ahUKEwiMy7jd7M-BAxX7J0QIHeyKAO0Q4dUDCBE&amp;uact=5&amp;oq=secret+passage+sound+from+legend+of+zelda+nes&amp;gs_lp=Egxnd3Mtd2l6LXNlcnAiLXNlY3JldCBwYXNzYWdlIHNvdW5kIGZyb20gbGVnZW5kIG9mIHplbGRhIG5lczIFECEYoAEyBRAhGKsCMgUQIRirAjIFECEYqwJIglBQAFiLTnAEeAGQAQCYAbIBoAGAJKoBBTMyLjE3uAEDyAEA-AEBwgIEECMYJ8ICBxAjGIoFGCfCAg4QABiKBRixAxiDARiRAsICDhAuGIoFGLEDGIMBGJECwgIREC4YgwEYxwEYsQMY0QMYgATCAgsQABiABBixAxiDAcICERAuGIAEGLEDGIMBGMcBGNEDwgINEC4YigUYxwEYrwEYJ8ICCBAAGIoFGJECwgIIEC4YigUYkQLCAgcQABiKBRhDwgIKEC4YigUY5QQYQ8ICCxAuGIMBGLEDGIAEwgIHEC4YigUYQ8ICFxAuGIoFGJECGJcFGNwEGN4EGOAE2AEBwgIIECEYFhgeGB3CAgcQLhgNGIAEwgIHEAAYDRiABMICFhAuGA0YgAQYlwUY3AQY3gQY4ATYAQHCAhMQLhiKBRjHARivARiYBRiZBRhDwgIIEC4YgAQYsQPCAg4QABiABBixAxiDARjJA8ICBRAuGIAEwgIFEAAYgATCAggQABiABBixA8ICCxAuGK8BGMcBGIAEwgILEC4YgAQYsQMYgwHCAgsQABiKBRixAxiDAcICGhAuGK8BGMcBGIAEGJcFGNwEGN4EGOAE2AEBwgIUEC4YgAQYlwUY3AQY3gQY4ATYAQHCAgsQLhiABBjHARivAcICBhAAGBYYHsICCBAAGBYYHhgPwgIIEAAYigUYhgPCAgoQIRgWGB4YDxgd4gMEGAAgQYgGAboGBggBEAEYFA&amp;sclient=gws-wiz-serp#fpstate=ive&amp;vld=cid:536180dd,vid:9d3qCPcMgH4,st:0" target="_blank"><span style={{ fontWeight: '300' }}>G F# D# A G# E G# C</span></a><span style={{ fontWeight: '300' }}> like I just uncovered a secret in Legend of Zelda.</span></p>
            <p><span style={{ fontWeight: '300' }}>The room echos with the rumbling of stone scraping stone as jagged steps telescope out from the wall, leading diagonally from the floor up to a green, cartoonish circle revolving around a closed trap door in the ceiling.</span></p>
            <p><span style={{ fontWeight: '300' }}>I jump when I hear Jenna&rsquo;s voice through the rumbling. &ldquo;Did you find a way out?&rdquo;&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>Turning to answer, my breath catches.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>Jenna, clad in black lace up boots, tight black leggings and a red satin corset is clutching a gleaming dragon-shaped ruby scepter. Her red velvet cape flows like rippling blood as she hurries to stand by my side.</span></p>
            <p><span style={{ fontWeight: '300' }}>The rumbling stops and a massive gray and black wolf materializes on each of the twelve steps.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>Hackles raised, the wolves silently descend the stairs. As each one reaches the bottom step, it crosses the room and sits facing us glowering, but silent. When all dozen wolves are seated in a row facing us, twelve red dots appear on my peripheral map (opposite Jennas and my green dots).&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>The stairs recede back into the wall and the room erupts into a cacophony of barking and snarling as the pack of wolves springs in all directions. A red bar now floats above each wolf head.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>Gripping my staff I shout, &ldquo;Cast Forcefield!&rdquo; and clang my staff against the stone floor. A faint blue dome whooses into existence around Jenna and I, sending a shock wave out from its base that momentarily knocks all the wolves off their feet.</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;Cast fire rain&rdquo; Jenna shouts, clanging her staff down.</span></p>
            <p><span style={{ fontWeight: '300' }}>Nothing happens.</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;You may only use white magic for this challenge.&rdquo; The game menu&rsquo;s voice gently chides.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;Glitch!&rdquo; Jenna and I say in unison as we exchange a frustrated glance.</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;I used all of my magic potential to equip dark magic spells.&rdquo; Jenna moans.</span><span style={{ fontWeight: '300' }}><br /></span> <span style={{ fontWeight: '300' }}>&ldquo; I just got obsessed with assembling the perfect magical wardrobe&rdquo; I shake my head. &ldquo;I barely equipped any spells.&rdquo;</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;Well you nailed that forcefield,&rdquo;&nbsp; Jenna cheerleads, &ldquo;so you must have something else up your sleeve, right.&rdquo;</span></p>
            <p><span style={{ fontWeight: '300' }}>The force field bubble begins to blink red.</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;Nope.&rdquo; I grab Jenna&rsquo;s wrist. &ldquo;I don&rsquo;t have enough magic to make another forcefield. Although&ndash;&rdquo; I smile weakly, &ldquo;unfetter was actually a bonus spell that unlocked just by randomly shouting things when I was first chained up.&rdquo;</span></p>
            <p><span style={{ fontWeight: '300' }}>I white knuckle my staff as the forcefield blinks faster and faster, &ldquo;My magic bar refills within five minutes. I&rsquo;ll do another forcefield then.&rdquo;&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>&nbsp;The force field disappears.</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;slam your staff down on the ground to affect everyone and point it directly at a target to affect only one target.&rdquo; I shout as wolves begin launching themselves at us.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>We seem to have the speed and precision of trained ninjas, so dodging around wolves is actually not that hard. I easily jump over, roll under and run away while clanging, pointing my scepter and shouting whatever the glitch I can think of.</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;Cast refill magic.&rdquo; Jenna points her scepter at me.</span></p>
            <p><span style={{ fontWeight: '300' }}>Nothing.</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;Cast restrain&rdquo;. I point my staff at the nearest wolf.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>Nothing &ndash; and I barely duck under the wolf&rsquo;s swiping paw.</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;Cast levitate.&rdquo;</span><span style={{ fontWeight: '300' }}><br /></span> <span style={{ fontWeight: '300' }}>Nothing.</span></p>
            <p><span style={{ fontWeight: '300' }}>I turn to try a spell on a wolf who&rsquo;s lunging at me from the left, but as I point my staff, a tremendous pain erupts from my right ankle.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>Wincing, I swivel and smash my scepter down on the head of a wolf who latched on to my right foot. The wolf remains clamped on as three of my seven life hearts fade out.</span></p>
            <p><span style={{ fontWeight: '300' }}>Panic overtakes me as the snarling wolf tugs relentlessly on my foot. Its feral eyes gleam with predatory hunger as another half a life-heart slips away .</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;Cast Unfetter&rdquo;! I scream in pain as I struggle to point the emerald eyes of my snake staff at the beast&rsquo;s clenched teeth.</span></p>
            <p><span style={{ fontWeight: '300' }}>The wolf&rsquo;s jaws wretch open unnaturally wide and I yank my ankle free.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>Slapping my arm cuff, I disappear into the blackness of the menu. &ldquo;Healing serum.&rdquo; I gasp then instantly feel better as I pant &ldquo;Exit!&rdquo;</span></p>
            <p><span style={{ fontWeight: '300' }}>When I emerge from the menu, my magic is almost full and another wolf is heading right for me.</span></p>
            <p><span style={{ fontWeight: '300' }}>I do a diving lunge towards Jenna, raising my staff as I shout. &ldquo;Cast forcefield.&rdquo;</span></p>
            <p><span style={{ fontWeight: '300' }}>Clanging my staff down on the ground, a protective bubble whooses into place around Jenna and I.&rdquo;</span><span style={{ fontWeight: '300' }}><br /></span> <span style={{ fontWeight: '300' }}>I&rsquo;m sighing with relief when I notice Jenna backing away.</span></p>
            <p><span style={{ fontWeight: '300' }}>A snarling, drooling wolf that is apparently allowed to be sealed into a forcefield with us is stalking towards her.</span><span style={{ fontWeight: '300' }}><br /></span> <span style={{ fontWeight: '300' }}>Quivering, she points her staff at the wolf and utters &ldquo;Sit&rdquo;.</span></p>
            <p><span style={{ fontWeight: '300' }}>The wolf quiets and sits. Its red life bar turns green, it walks through the force field and sits perfectly still facing us from the far corner of the room.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>There are now 9 red dots and 3 green dots on my peripheral map.</span></p>
            <p><span style={{ fontWeight: '300' }}>A&nbsp; tiny explosion of fireworks goes off over Jenna&rsquo;s head and some white text appears above her: &ldquo;You learned a bonus spell: Sit. Sit can be used against non-human mammals and some human children.&rdquo;</span></p>
            <p><span style={{ fontWeight: '300' }}>More text appears: &ldquo;Jenna has leveled up to a Level 6 Mage!&rdquo;</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;Turn off your text notifications Jenna,&rdquo; I shake my head, &ldquo;They can start to get distracting.&rdquo;</span></p>
            <p><span style={{ fontWeight: '300' }}>Within minutes, we have the rest of the pack seated and as soon as the last tail touches down on the stone floor, the trap door in the ceiling springs open and the wall stairs rumble back into place.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>A massive, black German Shepherd, materializes in front of the wolf pack.</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;I think that&rsquo;s Myka&rsquo;s dog, Max&rdquo;, Jenna grips my arm excitedly.</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;Hey Max,&rdquo; Jenna coos a the dog. &ldquo;Is Myka here with you, boy?&rdquo;</span></p>
            <p><span style={{ fontWeight: '300' }}>Jenna&rsquo;s jaw drops as Max shakes his head and replies: &ldquo;No. Myka&rsquo;s not with me today.&rdquo;&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>Using his teeth Max unzips a miniature fanny pack that&rsquo;s bucked around his front arm. A glistening white bone appears in Max&rsquo;s mouth.</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;Myka wanted me to make sure you get this though.&rdquo; Max drops the bone in front of Jenna before turning and barking at the row of wolves behind him. The wolves quickly shuffle into a single file line behind Max as darts up and out the trap door.</span></p>
            <p><span style={{ fontWeight: '300' }}>Jenna stoops to pick up the dog bone, which disappears as her fingers close around it.</span></p>
            <p><span style={{ fontWeight: '300' }}>She blips into her menu, returning with a puzzled look. &ldquo;My inventory says the bone is a fighting fellow talisman.&rdquo; She shrugs. &ldquo;I can use it once a day.&rdquo;</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;Shall we take your fighting fella&rsquo; for a walk up there in the new world?&rdquo; I grin at my friend.</span></p>
            <p><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /></p>
            <ol start="9">
                <li><strong>Filename: &lsquo;Diego Plays The Hand He\&rsquo;s Been Dealt&rsquo;,</strong></li>
            </ol>
            <p><strong>Timestamp: 2042-08-31T08:06:27:00Z,</strong></p>
            <p><strong>Details: &lsquo;Diego Garcia, Great Sunflower Field, Mystic Depths&rsquo;,</strong></p>
            <p><strong>H-ID: b54ba8fb-01fa-496e-b97c-e3aaef3fb11a,</strong></p>
            <p><strong>Transcript:</strong></p>
            <p>&nbsp;</p>
            <p><span style={{ fontWeight: '300' }}>I run towards Jeff, a hundred yards away from me in the dirt at the edge of the stadium lit sunflower clearing. &ldquo;Jeff, Don&rsquo;t press the Button on your ar&hellip;&rdquo;&nbsp; a sound like a gunshot rings out as Jeff presses the green button on his arm.</span></p>
            <p><span style={{ fontWeight: '300' }}>Instinctively, I throw myself to the ground covering my head as a white beam descends from the sky immersing my friend in blinding light.</span></p>
            <p><span style={{ fontWeight: '300' }}>Raising my&nbsp; head to peer across the dust-shrouded clearing, I see Jeff, now clad in a red-</span><a href="https://www.dollpeddlar.com/product/robin-hood-hat-or-bycocket-hat-with-feather-modeled-on-4-5-head/" target="_blank"><span style={{ fontWeight: '300' }}>feathered black bycocket hat</span></a><span style={{ fontWeight: '300' }}>, a long black </span><a href="https://www.rawblade.com/body-stuff/58-jules-leather-jerkin-short-black.html" target="_blank"><span style={{ fontWeight: '300' }}>leather jerkin</span></a><span style={{ fontWeight: '300' }}>, red shin high boots and a red braided strap across his chest that secures a bow and quiver of arrows on his back and an antler-handled dagger in a holster above his heart. He would pass for one of Robin Hood&rsquo;s men were it not for the neon yellow and white fanny pack hanging above his groin.</span></p>
            <p><span style={{ fontWeight: '300' }}>Jeff, clearly stunned by his spontaneous wardrobe revamp, gingerly pats his jerkin and trousers before removing his bycocket hat to examine it. The hat feather tickles his nose, inducing a convulsive giggle fit that jostles his dagger loose from its holster.</span></p>
            <p><span style={{ fontWeight: '300' }}>My eyes widen as the gleaming knife lands point down into the dirt eliciting another bright flash as glowing white lettering blazes through the darkness above the blade:&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>Serpent's Kiss: Unique dagger</span></p>
            <p><span style={{ fontWeight: '300' }}>level: 5</span></p>
            <p><span style={{ fontWeight: '300' }}>Weight: 10</span></p>
            <p><span style={{ fontWeight: '300' }}>Enchantments: Poison - causes 1 damage per second for 10 seconds in addition to combat damage.&nbsp;</span></p>
            <p>&nbsp;</p>
            <p><span style={{ fontWeight: '300' }}>&nbsp;</span> <span style={{ fontWeight: '300' }}>Rising to my feet, I stride over to Jeff, who is now slumped on his knees peering down at the tiny blade in front of him.</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;Are you okay, friend?&rdquo; I implore as I reach down and rest my hand on his extremely tense shoulder.</span><span style={{ fontWeight: '300' }}><br /></span> <span style={{ fontWeight: '300' }}>Jeff peers up at me, bewildered, &ldquo;The last thing I remember, you fell out of a giant peach tree and landed on me.&rdquo;&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>He wrenches his longbow from the sheath on his back, using it to steady himself as he rises.</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;And now,&rdquo; Jeff plucks the bow string which issues a soft hum, &ldquo;I&rsquo;m suddenly a ye olde archer.&rdquo;&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>He eyes me up and down as if seeing me for the first time and chuckles. &ldquo;What are you supposed to be in that chainmail nightshirt?&rdquo;&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>His eyes drift to my fanny pack before he looks disgustedly down at the pack around his own waist &ldquo;Did you pick these outfits Diego?&rdquo;&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;No.&rdquo;I scoff &ldquo;This is what I was dressed in after I pressed my green arm cuff button.&rdquo;</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;But it&rsquo;s not all bad.&rdquo; I punch at the air in the direction of the farthest cluster of sunflowers. A firebolt launches from my arm cannon setting several flowers ablaze.</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;Nice!&rdquo; Jeff&rsquo;s nods.</span></p>
            <p><span style={{ fontWeight: '300' }}>An instant later, I streak across the clearing to the burning flowers and in one motion, I hammer-fist their blazing petals into a crater of pulverized dust.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>The air jingles as I retch my fist from the dirt crater.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>Three silver coins appear while a new set of sunflowers speed through their life cycle, leaving the flower circle looking exactly as before.</span><span style={{ fontWeight: '300' }}><br /></span> <span style={{ fontWeight: '300' }}>Stooping, I poke a coin. It makes a cha-ching sound as it disappears, presumably to my game wallet.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;Very nice.&rdquo; Jeff tosses his bow aside. &ldquo;Let me try.&rdquo;</span></p>
            <p><span style={{ fontWeight: '300' }}>&nbsp;He punches his own cuffed-arm towards the flowers across the way. Nothing happens.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;Well I guess I better practice my bow hunting skills then.&rdquo; He picks up his bow, notches an arrow and sends it sailing straight through a row of sunflowers, each flower head bursting open to reveal a coin as the arrow passes.</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;I&rsquo;m a bit afraid to ask.&rdquo; He trudges across the clearing to me. &ldquo;But if you&rsquo;re that strong,&rdquo; He winces. &ldquo;What exactly is it that we need to fight?&rdquo; </span><span style={{ fontWeight: '300' }}><br /></span> <span style={{ fontWeight: '300' }}>&ldquo;I don&rsquo;t know, &rdquo; I shake my head, frowning, &ldquo;I just hope whatever it is isn&rsquo;t holding Luke and Carmen hostage.&rdquo;</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;Yeah.&rdquo; Jeff&rsquo;s face is stricken with concern. &ldquo;Me too.&rdquo;&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;Let's figure out what&rsquo;s going on and make a plan to track down your family.&rdquo; He gives my shoulder a squeeze.</span></p>
            <p><span style={{ fontWeight: '300' }}>I show Jeff how to access his inventory using the zipper on his fanny pack and he figures out how to enter the game menu from our arm cuffs.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>Once we have some familiarity with the menu, we divvy up reading and guard duty. Seated back to back, in the middle of the clearing, we take turns plunging in and out of the menu, discussing our discoveries as we glean some basic information about our situation. It doesn&rsquo;t take us long to figure out that Jeff is a level 5 Ranger. He can only equip daggers and bows and his hands will never shoot fire or do anything magical like mine. I am apparently an enchanted warrior and I can&rsquo;t equip any weapons or scepters, but, through my magically-enhanced right arm, I can learn to channel and level up various magical spells (fire, water, a flashlight, a tractor beam etc). I can also punch, rip and smash with my mighty righty like some deranged mongoloid. My left arm is of normal strength, which Jeff points out is an important feature if I plan to do any butt scratching in our new reality.</span></p>
            <p><span style={{ fontWeight: '300' }}>After what feels like hours of plunging in and out of the menu, Jeff and I agree that we must either be dreaming about, or actually exist inside of, some sort of insanely elaborate video game console where our characters have somehow moved from a simulation game to an RPG adventure game.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>Jeff seems to take the news well.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>Annoyingly well, actually.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>He keeps saying some cheery crud about always being up for an adventure and liking to meet new people or some junk like that.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>But I feel like Obi-Wan Kenobi on Tatooine.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>I worked hard for my entire life to get where I was in &ldquo;the other game&rdquo; even if it was just as some peripheral character inside some child's toy, I was winning. And I wasn&rsquo;t ready to stop playing.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>&nbsp;I was raising my sweet, curious little Luke yesterday. I was supposed to be at home with him and my vivacious, doting Carmen, but now I don&rsquo;t even know if they exist in the same world as me.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>Jeff emerges from the menu and begins gleefully exclaiming about the fact that we can eat as much as we like now, but we&rsquo;ll never get fat and never have to poop.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;Aaand,&rdquo; Jeff enthuses, &ldquo;this game we&rsquo;re in, Mystic Depths, is ninety nine percent less glitchy than the last game.&rdquo;</span></p>
            <p><span style={{ fontWeight: '300' }}>I slink away to the opposite side of the clearing stretch out on my back.</span></p>
            <p><span style={{ fontWeight: '300' }}>Squinting through the floating stadium lights, I stare up at the same unreachable stars that Carmen and I used to gaze at through our backyard telescope.</span></p>
            <p><span style={{ fontWeight: '300' }}>The stars shake and blur into a meaningless haze as warm tears roll down my cheeks.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>My soul aches. I cannot accept that my wife and son may not exist anymore&ndash; or more excruciatingly, that they do exist. They exist in the exact same perfect way that they always have &ndash;but now some other man is Carmen&rsquo;s husband and Luke&rsquo;s father.</span></p>
            <p><span style={{ fontWeight: '300' }}>&nbsp;I hug my knees to my chest.</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;You must miss Carmen.&rdquo; Jeff scuffles toward me. &ldquo;And Luke.&rdquo; He rests a sympathetic hand on my chainmail-clad shoulder.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>&nbsp;&ldquo;I&rsquo;ve been erased from my family.&rdquo; My throat aches.</span><span style={{ fontWeight: '300' }}><br /></span> <span style={{ fontWeight: '300' }}>Jeff gives my shoulder a squeeze, &ldquo;I think we can get back to the other game.&rdquo; He lifts his hand. &ldquo;We just need to find someone from the outer world to load our characters back into whatever game we were in before.&rdquo;</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;You&rsquo;re right Jeff.&rdquo; I straighten up. &ldquo;I&rsquo;m giving up too easily.&rdquo;&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>Propelled by a spark of hope, I rise to my feet. &ldquo;And for all we know Carmen and Luke are nearby, waiting for us.&rdquo;</span><span style={{ fontWeight: '300' }}><br /></span> <span style={{ fontWeight: '300' }}>Reaching down, I pull Jeff to his feet. &ldquo;How do we find someone from the outer world?&rdquo;</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;Well,&rdquo; Jeff stoops, brushing dust from his jerkin, &ldquo;the only active quest in my menu was to form a complete adventure party.&rdquo;</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;I saw that too.&rdquo; I shake my head, &ldquo;But the map showed the location for that quest is here.&rdquo; I sigh. &ldquo;Does that mean we are the complete party?&rdquo; I span my arms gesturing around myself. &ldquo;Or that there&rsquo;s some other task we&rsquo;re supposed to do here?&rdquo;&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>Jeff Shrugs. &ldquo;Maybe the Rooster or the boy will come back and tell us.&rdquo;&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>I suddenly recall that the boy gave me that golden egg talisman which, I read, can be used to summon a rideable rooster.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>Before I can mention the rooster to Jeff, the earth begins to shake like a seven point earthquake.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>Chunks of dirt and rocks dance up from the ground around us like we&rsquo;re in a jiffy popper.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>Jeff tumbles to his knees beside me,&nbsp; just as I feel my own ankles give way.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>Clutching my friend&rsquo;s shoulder to steady myself, I gawk at the form of a wooden trap door being unearthed inches in front of us.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>A sound like the&nbsp; </span><a href="https://www.google.com/search?q=the+sound+of+a+secret+passage+in+zelda+nes&amp;sca_esv=571571458&amp;rlz=1C5CHFA_enUS854US857&amp;tbm=vid&amp;sxsrf=AM9HkKlV7-nh4dLjMO6Hl5Yq3YYSpGC4vw:1696693288941&amp;source=lnms&amp;sa=X&amp;ved=2ahUKEwiZvp6Go-SBAxWTs6QKHa03CxcQ_AUoAXoECAEQAw&amp;biw=1260&amp;bih=691&amp;dpr=2#fpstate=ive&amp;vld=cid:d7edf5e2,vid:ahTyGckSJqw,st:0" target="_blank"><span style={{ fontWeight: '300' }}>secret passage reveal from Legend of Zelda</span></a><span style={{ fontWeight: '300' }}> issues from the trap door as it swings open.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>Creeping towards the dark opening, I crane my neck, peering into the subterranean passage.</span></p>
            <p><em><span style={{ fontWeight: '300' }}>Please be Carmen and Luke. Please, God, let Carmen and Luke appear.</span></em></p>
            <p><span style={{ fontWeight: '300' }}>I can almost see their faces in the darkness, when a huge, black, German Shepherd, followed by a dozen massive gray wolves barrel out of the door, bounding over Jeff and I before darting silently down the path that the giant rooster had cleared earlier. </span><span style={{ fontWeight: '300' }}><br /></span> <span style={{ fontWeight: '300' }}>&ldquo;Quick help me shut it!&rdquo; I yell at Jeff, who is already lunging towards the wooden door in front of us.</span></p>
            <p><span style={{ fontWeight: '300' }}>He swings the heavy door closed but instead of landing with the thud I expect, it rebounds, springing back open &ndash; propelled by the head of a ruby dragon scepter which is now jutting up from the hole.</span></p>
            <p><span style={{ fontWeight: '300' }}>Scrambling backward, Jeff shakily yanks his dagger from its holster.</span></p>
            <p><span style={{ fontWeight: '300' }}>&nbsp;&ldquo;Carmen! Luke!&rdquo; I shout, as I crawl forward towards the emerging figure of &ndash; the </span><a href="https://twitter.com/wandasolsen/status/1367860700865916932" target="_blank"><span style={{ fontWeight: '300' }}>Scarlet Witch at the end of Wandavision</span></a><span style={{ fontWeight: '300' }}>.</span></p>
            <p><span style={{ fontWeight: '300' }}>&nbsp;&ldquo;Oh shoot!&rdquo; I crouch away from the trapdoor, keeping my eyes and go-go-gadget arm trained on the witch's face.</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;Diego?&rdquo; She squints at me.</span></p>
            <p><span style={{ fontWeight: '300' }}>Her voice is familiar&hellip; her voice is&hellip;. &ldquo;Jenna!?&rdquo; I beam at the red-robed sorceress. &ldquo;Are you with Luke and Carmen?&rdquo;</span></p>
            <p><span style={{ fontWeight: '300' }}>I hurry over to Jenna and grip her forearm, steadying her as she steps out of the underground passage.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>&nbsp;&ldquo;Xenia, hi.&rdquo; I sigh and waive limply at a Game of Thrones version of Jenna&rsquo;s rude friend.</span></p>
            <p><span style={{ fontWeight: '300' }}>My shoulders sag as the trapdoor slams itself shut.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>The earthquake that had unearthed it resumes, knocking the four of us off of our feet and once again burying the door.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>When the shaking stops, white writing flanked by a green checkmark flashes across my field of view:</span></p>
            <p><span style={{ fontWeight: '300' }}><br /></span> <span style={{ fontWeight: '300' }}>&ldquo;Quest 1 complete. Adventure party assembled ✅&rdquo;</span></p>
            <p>&nbsp;</p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;Have you seen Carmen and Luke?&rdquo; I lock eyes with Xenia.</span></p>
            <p><span style={{ fontWeight: '300' }}>She shakes her head pityingly as she rises to her feet and makes a beeline over to Jeff.</span></p>
            <p><span style={{ fontWeight: '300' }}>&nbsp;Grabbing him by the hand, Xenia pulls Jeff into an enthusiastic hug. &ldquo;I hoped you were going to be part of our adventure party Jefe!&rdquo; she beams.</span></p>
            <p><span style={{ fontWeight: '300' }}>&nbsp;I look away from their cheery faces as they fall into a chirpy conversation about things they&rsquo;ve learned about our new ( &ldquo;glitching awesome&rdquo; as they call it) world.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>An overwhelmed and exhausted Jenna, a few yards away shakes dust from her crimson cloak as she pauses to eye me. &ldquo;I guess Carmen and Luke aren&rsquo;t part of our adventure.&rdquo; Burying her face in my chainmail, she wraps her arms around me.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;Trust in the Force, young Padawan.&rdquo; I click into dad-mode, rubbing her velvet-caped back soothingly, &ldquo;Jeff and I think that if we find someone from outside the gameworld, we can get back to our old life.&rdquo; I tip my head back and inhale deeply. &ldquo;We&rsquo;ll get back to where we belong.&rdquo;</span></p>
            <p><span style={{ fontWeight: '300' }}>Jenna peels herself away and offers me a weak smile.</span></p>
            <p><span style={{ fontWeight: '300' }}>I&rsquo;m about to suggest that I should see what we can do with the golden egg talisman, but I notice that Jenna&rsquo;s body has gone rigid. She glaring at her friend. &ldquo;What did you just say Jeff?&rdquo;</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;I don&rsquo;t know? Lots of things?&rdquo; Jeff&rsquo;s boots scuffle in the dirt as he turns towards Jenna. &ldquo;You mean about the button on our arm cuffs?&rdquo;</span></p>
            <p><span style={{ fontWeight: '300' }}>Jenna nods.</span><span style={{ fontWeight: '300' }}><br /></span> <span style={{ fontWeight: '300' }}>Jeff rubs his beard. &ldquo;I was just saying that I read in the meta-data that NPCs who are pulled into a game can choose to play the new game by pressing the green button or choose to stay in the old game by pressing the red button on their cuff.&rdquo; He shrugs, &ldquo;but I guess we all just smacked green-for-go without even thinking.&rdquo; </span><span style={{ fontWeight: '300' }}><br /></span> <span style={{ fontWeight: '300' }}>Jenna steps towards Jeff as if in a tractor beam, &ldquo;I never had a red or a green button on my arm cuff.&rdquo;&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>The young witch freezes. &ldquo;Does that mean I&rsquo;m real?&rdquo; She excitedly clutches at her chest with her cuffed arm. &ldquo;I feel like a real person, am I a real person?&rdquo; She peers hopefully at Jeff then Xenia.</span><span style={{ fontWeight: '300' }}><br /></span> <span style={{ fontWeight: '300' }}>&ldquo;I don&rsquo;t kn&ndash;&rdquo; Jeff starts, but he&rsquo;s cut off by Xenia. &ldquo;I pushed your button Jenna.&rdquo;</span></p>
            <p><span style={{ fontWeight: '300' }}>Jenna gawks at her friend.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>Xenia reaches out to pat Jenna&rsquo;s shoulder,&nbsp; but Jenna wretches herself away from Xenia&rsquo;s grip, glaring. &ldquo;Accidentally?&rdquo;</span></p>
            <p><span style={{ fontWeight: '300' }}>Xenia casts her eyes to the ground. &ldquo;I don&rsquo;t know.&rdquo;</span></p>
            <p><span style={{ fontWeight: '300' }}>Jenna crosses her arms.</span></p>
            <p><span style={{ fontWeight: '300' }}>A long moment passes before Xenia squeezes her eyes shut and mutters &ldquo;I pressed your green button because I read what Jeff read.&rdquo;</span></p>
            <p><span style={{ fontWeight: '300' }}>Jenna&rsquo;s nostrils flare as she glares at Xenia.</span></p>
            <p><span style={{ fontWeight: '300' }}>Jeff and I exchange a tense glance.</span></p>
            <p><span style={{ fontWeight: '300' }}>Sidling towards me, Jeff sweeps off his bycocket hat, shielding his mouth as he whispers:&nbsp; &ldquo;Sounds like Xenia really did push Jenna&rsquo;s button.&rdquo; He stifles a giggle.</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;Don&rsquo;t be tone-deaf Jeff.&rdquo; I glower at him.</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;Maybe,&rdquo; Jeff goes on, &ldquo;I should pull Xenia aside and she and I can go gather coins and herbs or whatever.&rdquo; He nods towards the girls, &ldquo;to give Jenna some space.&rdquo;&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;And maybe,&rdquo; he leans towards me,&nbsp; &ldquo;you can help Jenna cool down while Xenia and I are gone?&rdquo;</span></p>
            <p><span style={{ fontWeight: '300' }}>Jenna turns towards us. &ldquo;I have super good hearing now.&rdquo;&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;Noted&rdquo; Jeff ducks his head. &ldquo;Sorry.&rdquo;&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>Jeff turns to Xenia. &ldquo;So Xenia, want to go for a walk?&rdquo; He clears his throat. &ldquo;I read we may be able to find some cool herbs around here.&rdquo;&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>Xenia and Jenna both shoot a biting look at Jeff before turning back to one another.</span></p>
            <p><span style={{ fontWeight: '300' }}>Jenna takes a step towards Xenia. &ldquo;You read&rdquo; her voice is cold and slow, &ldquo;that we had a choice?&rdquo;&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>Xenia nods.</span></p>
            <p><span style={{ fontWeight: '300' }}>Jenna takes another deep breath. &ldquo;You read that I&rdquo; She seethes, &ldquo;had the ability to make a choice that affects my entire existence,&rdquo; Jenna's eyes bore into Xenia, &ldquo;My entire existence that may be seconds or infinitely long in this stupid game world,&rdquo; she takes more deep breaths, &ldquo;and you took my choice,&rdquo; she pats her chest, &ldquo;away from me?&rdquo;&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;I just&hellip;&rdquo; Xenia&rsquo;s eyes are glued to Jenna&rsquo;s boots. &ldquo;...I uhm&hellip;&ldquo; Xenia stammers hoarsely.</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;You are just a murder!&rdquo; Jenna screams in Xenia's face. &ldquo;You are an IN-just murder!&rdquo;</span></p>
            <p><span style={{ fontWeight: '300' }}>&nbsp;&ldquo;No!&rdquo; Xenia sniffs. &ldquo;I would be destroyed if you were murdered.&rdquo; tears are rolling down her cheeks &ldquo;I just.&rdquo; clear fluid trickles from Xenia&rsquo;s nose. &ldquo;I just needed you.&rdquo;</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;You don&rsquo;t need anyone Xenia.&rdquo; Jenna shakes her head. &ldquo;I&rsquo;ve heard you say that a million times.&rdquo;</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;I had already joined the game.&rdquo; Xenia pleads. &ldquo;I didn&rsquo;t do it right away.&rdquo; Her voice shakes. &ldquo;I was fighting bats alone in that dungeon for hours.&rdquo;</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;Stop defending yourself.&rdquo; Jenna&rsquo;s eyes are watering now. &ldquo;You are a horrible selfish person.&rdquo; She turns away from Xenia, shoulders heaving.</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;I know I made.&rdquo; Xenia gulps air, &ldquo;a selfish choice.&rdquo; She shakes her head, &ldquo;But you don&rsquo;t know how alone I felt&rdquo; she squeezes her eyes shut, &ldquo;the whole world changed.&rdquo; she sobs, &ldquo;I was being attacked.&rdquo; Xenias gulps air. &ldquo;I needed my best friend.&rdquo;&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>Xenia again tries to put her hand on Jenna&rsquo;s shoulder. Jenna again rebuffs her. &ldquo;You seemed fine,&rdquo; Jenna whirls towards Xenia, her cape swooshing at her feet, &ldquo;cheery even!&rdquo; Jenna throws up her hands. &ldquo;When I woke up.&rdquo;&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;Yeah.&rdquo; Xenia&rsquo;s tears are slowing now, her voice growing stronger. &ldquo;Because I knew I&rsquo;d have you here to figure things out with me.&rdquo;&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;I would never do what you did!&rdquo; Jenna begins pacing in front of Xenia. &ldquo;I would have woken you up and told you what was going on.&rdquo; Jenna pounds her dragon-headed scepter in the dirt sending up a cloud of dust. &ldquo;I would have given you a choice.&rdquo;</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;No one&rdquo; Xenia&rsquo;s voice cracks, &ldquo;No one would ever&rdquo; she sniffs, &ldquo;accuse me of being a better friend than you, Jenna.&rdquo;</span></p>
            <p><span style={{ fontWeight: '300' }}>A tear rolls down Jenna&rsquo;s cheek. &ldquo;You haven&rsquo;t even said you&rsquo;re sorry.&rdquo;</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;If I&rsquo;m being honest,&rdquo; Xenia&rsquo;s lip quivers, &ldquo;I&rsquo;m not. I would do it again.&rdquo; She meets Jenna&rsquo;s eyes, &ldquo;I was getting attacked.&rdquo; She takes a deep breath. &ldquo;It felt like I was suddenly thrown into war.&rdquo;&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>Xenia bites her lip. &ldquo;So I drafted you into my army.&rdquo;</span></p>
            <p><span style={{ fontWeight: '300' }}>Jeff and I hold our breath.</span></p>
            <p><span style={{ fontWeight: '300' }}>Jenna just glares at Xenia.</span><span style={{ fontWeight: '300' }}><br /></span> <span style={{ fontWeight: '300' }}>&ldquo;Just say you&rsquo;re sorry Xenia.&rdquo; I whisper inaudibly.</span></p>
            <p><span style={{ fontWeight: '300' }}>Jenna&rsquo;s eyes snap to me, then to Xenia.</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;Well,&rdquo; she sneers at her remorseful friend. &ldquo;I do NOT need YOU!&rsquo;</span></p>
            <p><span style={{ fontWeight: '300' }}>&nbsp;&ldquo;How can I ever trust you again?&rdquo; she shakes her head disdainfully.</span></p>
            <p><span style={{ fontWeight: '300' }}>Jenna blurs past Jeff and I with lightning speed, shoulder-checking Xenia to the ground as she whooshes down the path of snapped sunflowers that the rooster had plowed earlier.</span></p>
            <p><span style={{ fontWeight: '300' }}>&nbsp;&ldquo;I&rsquo;m following her.&rdquo;&nbsp; Xenia rises to her feet, shaking dust from her serpentine mage robes.</span><span style={{ fontWeight: '300' }}><br /></span> <span style={{ fontWeight: '300' }}>Jeff hops up beside her. &ldquo;I&rsquo;m coming with you.&rdquo;</span></p>
            <p><span style={{ fontWeight: '300' }}>Stepping beside Jeff, I place my hand on his shoulder. &ldquo;We&rsquo;re an adventure party.&rdquo; I grab my arm cuff. &ldquo;Summon fighting friend!&rdquo;</span></p>
            <p><span style={{ fontWeight: '300' }}>A giant black rooster bursts into existence, ducking his head to the ground, to allow Jeff, Xenia and I to climb up on its back.</span></p>
            <p><span style={{ fontWeight: '300' }}>We complete a brief, mandatory, rooster-riding tutorial then speed down the rooster&rsquo;s path in search of Jenna.</span></p>
            <p>&nbsp;</p>
            <ol start="10">
                <li><strong>Filename: &lsquo;Jenna Gets Sunflower Stalked&rsquo;,</strong></li>
            </ol>
            <p><strong>Timestamp: 2042-08-31T10:45:49:00Z,</strong></p>
            <p><strong>Details: &lsquo;Jenna Carson, Great Sunflower Field, Mystic Depths&rsquo;,</strong><span style={{ fontWeight: '300' }}>&nbsp;</span></p>
            <p><strong>H-ID: 28d0086c-da60-44e5-9c9b-54abfbe4154c,</strong></p>
            <p><strong>Transcript:</strong></p>
            <p>&nbsp;</p>
            <p><span style={{ fontWeight: '300' }}>The glow of the stadium-lit clearing behind me fades, along with my magic reserve as I surge like a human rocket, down an endless dirt path through an endless blurr of sunflowers.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>The last sliver of blue fades from my magic gauge and my non-magically-enhanced legs are overwhelmed by the supersonic momentum of my sprint. Staggering and flailing, I trip over my velvet cape. Losing my grip on my scepter, I topple down on all fours in a cloud of dust. My scepter lands a yard farther down the path.</span></p>
            <p><span style={{ fontWeight: '300' }}>Heaving coughing, I peer back at the walnut-sized puddle of light where I just ditched the only three teammates I have in this strange world.</span></p>
            <p><em><span style={{ fontWeight: '300' }}>With no magic, I&rsquo;m a sitting duck.</span></em></p>
            <p><span style={{ fontWeight: '300' }}>A pang of loneliness jabs at my heart and I suddenly feel sympathy for Xenia.</span></p>
            <p><span style={{ fontWeight: '300' }}>Enough time alone in this horrifyingly vast, dark, enigma would break anyone.</span></p>
            <p><em><span style={{ fontWeight: '300' }}>Where did I even think I was going?</span></em></p>
            <p><span style={{ fontWeight: '300' }}>A light flickers in my peripheral vision and I go rigid.</span></p>
            <p><span style={{ fontWeight: '300' }}>Holding my breath, I squint through the dark wall of sunflowers beside me.</span></p>
            <p><span style={{ fontWeight: '300' }}>A wobbling ball of light is growing brighter&ndash; getting closer.</span></p>
            <p><span style={{ fontWeight: '300' }}>Diving on top of my fallen scepter, I ready myself to sprint back to my friends, but as I shove my heels down to activate my sonic speed, my empty magic bar blinks red.</span></p>
            <p><span style={{ fontWeight: '300' }}>The ball of light in the flower field bobs left, then right, halting on me.</span></p>
            <p><span style={{ fontWeight: '300' }}>I flatten myself against the ground, my staff pinned beneath my chest.</span></p>
            <p><span style={{ fontWeight: '300' }}>The light pivots away, and, raising my head, I make out the form of a cropped eared, cropped tailed Doberman fifty yards away. Behind the dog, a slender man wearing a ranger hat with a headlamp is carrying something heavy.</span></p>
            <p><em><span style={{ fontWeight: '300' }}>&nbsp;Please don&rsquo;t hack me with a chainsaw.&nbsp;</span></em></p>
            <p><span style={{ fontWeight: '300' }}>As he sets the thing on the ground, my mind reels through every stalker-in-the-dark scene from every horror movie I&rsquo;ve ever seen.&nbsp;</span></p>
            <p><em><span style={{ fontWeight: '300' }}>Please don&rsquo;t blow me up. Please don&rsquo;t set a bear trap that snaps my ankle.</span></em></p>
            <p><span style={{ fontWeight: '300' }}>The lamp swings back in my direction.</span></p>
            <p><span style={{ fontWeight: '300' }}>A sliver of blue creeps into my magic gauge.</span></p>
            <p><span style={{ fontWeight: '300' }}>Engaging my sonic speed, I sprint away from the dog man, but just as the sunflower leaves become a green blurr, I feel my entire body smack directly into headlamp guy&rsquo;s back.&nbsp;</span></p>
            <p><em><span style={{ fontWeight: '300' }}>Oh god, this is an infinitely looping field like in The Legend of Zelda.</span></em></p>
            <p><span style={{ fontWeight: '300' }}>Turning away from the man, I charge through the flower stalks, which splinter into shards, occasionally spewing a coin or potion vial before regrowing to their previous form.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;Wait!&rdquo; The man calls. &ldquo;Jenna wait!&rdquo;&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>My heart surges and my mouth drops as I recognize Myka&rsquo;s voice.</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;Myka!&rdquo; Turning back, I use my last sliver of magic to illuminate my scepter.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>&nbsp;&ldquo;It is you!&rdquo; I squeal, admiring his tightly fit khaki shirt and shorts.</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;Do you want to be in my adventure party?&rdquo; I throw my arms around his neck.</span><span style={{ fontWeight: '300' }}><br /></span> <span style={{ fontWeight: '300' }}>&ldquo;I can&rsquo;t.&rdquo; He chuckles, peeling me off. &ldquo;I&rsquo;m a trainer.&rdquo;&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>He grins. &ldquo;You know that.&rdquo;&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>My eyes go wide as I peer up at his dimpled smile, &ldquo;Are you in both games?&rdquo; I pause, &ldquo;at once?&rdquo;</span></p>
            <p><span style={{ fontWeight: '300' }}>He bites his lip coyly, stepping away from me. &ldquo;C&rsquo;mon Zuma,&rdquo; He turns to his Doberman, &ldquo;Go find my backpack and let&rsquo;s take Jenna back to camp for some training.&rdquo;&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>The Doberman rolls his eyes, &ldquo;Just don&rsquo;t piss off Darcy,&rdquo; the dog mutters as he begins marching, ghost-like, through the sunflower stalks, which fade and disappear at the dog&rsquo;s touch.</span></p>
            <p>&nbsp;</p>
            <ol start="10">
                <li><strong>Filename: &lsquo;Jenna Gets Sunflower Stalked&rsquo;,</strong></li>
            </ol>
            <p><strong>Timestamp: 2042-08-31T10:45:49:00Z,</strong></p>
            <p><strong>Details: &lsquo;Jenna Carson, Great Sunflower Field, Mystic Depths&rsquo;,</strong><span style={{ fontWeight: '300' }}>&nbsp;</span></p>
            <p><strong>H-ID: 28d0086c-da60-44e5-9c9b-54abfbe4154c,</strong></p>
            <p><strong>Transcript:</strong></p>
            <p>&nbsp;</p>
            <p><span style={{ fontWeight: '300' }}>The glow of the stadium-lit clearing behind me fades, along with my magic reserve as I surge like a human rocket, down an endless dirt path through an endless blurr of sunflowers.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>The last sliver of blue fades from my magic gauge and my non-magically-enhanced legs are overwhelmed by the supersonic momentum of my sprint. Staggering and flailing, I trip over my velvet cape. Losing my grip on my scepter, I topple down on all fours in a cloud of dust. My scepter lands a yard farther down the path.</span></p>
            <p><span style={{ fontWeight: '300' }}>Heaving coughing, I peer back at the walnut-sized puddle of light where I just ditched the only three teammates I have in this strange world.</span></p>
            <p><em><span style={{ fontWeight: '300' }}>With no magic, I&rsquo;m a sitting duck.</span></em></p>
            <p><span style={{ fontWeight: '300' }}>A pang of loneliness jabs at my heart and I suddenly feel sympathy for Xenia.</span></p>
            <p><span style={{ fontWeight: '300' }}>Enough time alone in this horrifyingly vast, dark, enigma would break anyone.</span></p>
            <p><em><span style={{ fontWeight: '300' }}>Where did I even think I was going?</span></em></p>
            <p><span style={{ fontWeight: '300' }}>A light flickers in my peripheral vision and I go rigid.</span></p>
            <p><span style={{ fontWeight: '300' }}>Holding my breath, I squint through the dark wall of sunflowers beside me.</span></p>
            <p><span style={{ fontWeight: '300' }}>A wobbling ball of light is growing brighter&ndash; getting closer.</span></p>
            <p><span style={{ fontWeight: '300' }}>Diving on top of my fallen scepter, I ready myself to sprint back to my friends, but as I shove my heels down to activate my sonic speed, my empty magic bar blinks red.</span></p>
            <p><span style={{ fontWeight: '300' }}>The ball of light in the flower field bobs left, then right, halting on me.</span></p>
            <p><span style={{ fontWeight: '300' }}>I flatten myself against the ground, my staff pinned beneath my chest.</span></p>
            <p><span style={{ fontWeight: '300' }}>The light pivots away, and, raising my head, I make out the form of a cropped eared, cropped tailed Doberman fifty yards away. Behind the dog, a slender man wearing a ranger hat with a headlamp is carrying something heavy.</span></p>
            <p><em><span style={{ fontWeight: '300' }}>&nbsp;Please don&rsquo;t hack me with a chainsaw.&nbsp;</span></em></p>
            <p><span style={{ fontWeight: '300' }}>As he sets the thing on the ground, my mind reels through every stalker-in-the-dark scene from every horror movie I&rsquo;ve ever seen.&nbsp;</span></p>
            <p><em><span style={{ fontWeight: '300' }}>Please don&rsquo;t blow me up. Please don&rsquo;t set a bear trap that snaps my ankle.</span></em></p>
            <p><span style={{ fontWeight: '300' }}>The lamp swings back in my direction.</span></p>
            <p><span style={{ fontWeight: '300' }}>A sliver of blue creeps into my magic gauge.</span></p>
            <p><span style={{ fontWeight: '300' }}>Engaging my sonic speed, I sprint away from the dog man, but just as the sunflower leaves become a green blurr, I feel my entire body smack directly into headlamp guy&rsquo;s back.&nbsp;</span></p>
            <p><em><span style={{ fontWeight: '300' }}>Oh god, this is an infinitely looping field like in The Legend of Zelda.</span></em></p>
            <p><span style={{ fontWeight: '300' }}>Turning away from the man, I charge through the flower stalks, which splinter into shards, occasionally spewing a coin or potion vial before regrowing to their previous form.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;Wait!&rdquo; The man calls. &ldquo;Jenna wait!&rdquo;&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>My heart surges and my mouth drops as I recognize Myka&rsquo;s voice.</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;Myka!&rdquo; Turning back, I use my last sliver of magic to illuminate my scepter.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>&nbsp;&ldquo;It is you!&rdquo; I squeal, admiring his tightly fit khaki shirt and shorts.</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;Do you want to be in my adventure party?&rdquo; I throw my arms around his neck.</span><span style={{ fontWeight: '300' }}><br /></span> <span style={{ fontWeight: '300' }}>&ldquo;I can&rsquo;t.&rdquo; He chuckles, peeling me off. &ldquo;I&rsquo;m a trainer.&rdquo;&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>He grins. &ldquo;You know that.&rdquo;&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>My eyes go wide as I peer up at his dimpled smile, &ldquo;Are you in both games?&rdquo; I pause, &ldquo;at once?&rdquo;</span></p>
            <p><span style={{ fontWeight: '300' }}>He bites his lip coyly, stepping away from me. &ldquo;C&rsquo;mon Zuma,&rdquo; He turns to his Doberman, &ldquo;Go find my backpack and let&rsquo;s take Jenna back to camp for some training.&rdquo;&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>The Doberman rolls his eyes, &ldquo;Just don&rsquo;t piss off Darcy,&rdquo; the dog mutters as he begins marching, ghost-like, through the sunflower stalks, which fade and disappear at the dog&rsquo;s touch.</span></p>
            <p><br /><br /><br /></p>
            <ol start="11">
                <li><strong>Filename: &lsquo;Xenia takes a village&rsquo;,</strong></li>
            </ol>
            <p><strong>Timestamp: 2042-08-31T18:08:32:00Z,</strong></p>
            <p><strong>Details: Xenia &lsquo;Chloros, Great Sunflower Field, Mystic Depths&rsquo;,</strong><span style={{ fontWeight: '300' }}>&nbsp;&nbsp;</span></p>
            <p><strong>H-ID: 1feeffe-0067-4226-9c41-313509217b49,</strong></p>
            <p><strong>Transcript:</strong></p>
            <p><br /><br /></p>
            <p><span style={{ fontWeight: '300' }}>My serpentine cloak slithers in the wind, glistening in the dim glow of a new moon as we speed down the path of pulverized sunflowers atop Diego&rsquo;s giant black rooster.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>Shivering, I tighten my thigh-grip on the rooster, hugging myself closer to leather-clad, bow-slinger Jeff, who&rsquo;s clinging to chainmail-night-shirt Diego, who&rsquo;s clinging to his rooster&rsquo;s neck.</span></p>
            <p><span style={{ fontWeight: '300' }}>&nbsp;&ldquo;I can NOT beee-lieve&rdquo; I fume,&nbsp; &ldquo;that they made us do a tutorial &rdquo; the wind whips my hair across my face, &ldquo;while my best friend was apparently running away into oblivion.&rdquo;&nbsp;&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>Jeff gives my hand a sympathetic squeeze. &ldquo;Don&rsquo;t worry Xenia.&rdquo; He soothes &ldquo;We&rsquo;ve only been looking for a few hours, she can&rsquo;t be far.&rdquo;&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>Diego, one arm around his rooster&rsquo;s neck, swivels glaring at each of us in turn. He presses a finger to his lips then points to the corner of his eye as the rooster slows to a stop.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;Glitch!&rdquo; I blurt as I expand my game map, blocking out Diego&rsquo;s annoyed glare.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>A narrow strip of sunflowers is all that separates us from a village crawling with unfriendlies.</span></p>
            <p><span style={{ fontWeight: '300' }}>Diego&rsquo;s rooster lowers his neck to the ground and we each hop off.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>Tapping his arm cuff,&nbsp; Diego whispers: &ldquo;dismiss fighting friend&rdquo; and the giant rooster silently blinks out of existence.</span></p>
            <p><span style={{ fontWeight: '300' }}>The trail of plowed over sunflowers we&rsquo;d been traversing suddenly regrows and we find ourselves walled in on all sides by fourteen foot tall flower stalks.</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;Well that&rsquo;s alarming.&rdquo; I grimace. &ldquo;Maybe we should get back on the rooster.&rdquo;</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;I can only use the rooster once every twenty four hours.&rdquo; Diego sighs as Jeff pokes his head between a row of flowers.</span></p>
            <p><span style={{ fontWeight: '300' }}>&nbsp;&ldquo;I can barely see,&rdquo; he turns back to Diego and I, whispering, &ldquo;but there are at least a half dozen baddies about twenty yards away.&rdquo; He shakes his head. &ldquo;They&rsquo;re talking about something, but I can&rsquo;t quite make out what they&rsquo;re saying.&rdquo;</span></p>
            <p><span style={{ fontWeight: '300' }}>Diego sidles over, turning an ear to the flower patch. &ldquo;They&rsquo;re just a little too far away.&rdquo; He shrugs. &ldquo; I can hear a murmur, but I don&rsquo;t even know if they&rsquo;re speaking English.&rdquo;</span><span style={{ fontWeight: '300' }}><br /></span> <span style={{ fontWeight: '300' }}>Brushing past the boys, I grip the sandpapery stalk of the nearest sunflower and lean forward. There&rsquo;s a cluster of unfriendlies standing outside a small mud hut at the edge of the village.</span></p>
            <p><span style={{ fontWeight: '300' }}>&nbsp;I can only see silhouettes of the speakers, but I can tell that most aren&rsquo;t humanoid and some are quite large.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>Squeezing my eyes shut, I focus on the sound of their conversation.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;Maybe women are just naturally better listeners.&rdquo; Retracting my head, I grin at the boys. &ldquo;They&rsquo;re talking about advanced math. Something about hyperspheres.&rdquo;</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;I learned about those in Differential Geometry.&rdquo; Diego whispers.</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;I&rsquo;ll relay their conversation to you.&rdquo; Facing Diego, with one ear to towards the villagers, I begin whispering bits of the villagers conversation:&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;Outside Hyperspear there&rsquo;s users trying to establish rights for non-persons.&rdquo;</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;Are they gonna give us a right to leave this stupid village without a fighting friend?&rdquo;</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;It&rsquo;s better than the purgavoid.&rdquo;</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;I&rsquo;d rather be in the purgavoid than cut down one more glitching sunflowwww ow ow uuuuhhhh.&rdquo;</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;Oh glitch!&rdquo; I swivel towards Jeff and Diego. &ldquo;I think one of the villagers just killed another villager.&rdquo; </span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;Maybe if we wait long enough, they&rsquo;ll all just kill each other off.&rdquo; Jeff shrugs.</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;Yeah, let&rsquo;s just camp out until I can use my fighting friend again.&rdquo; Diego nods.</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;No way.&rdquo; I scoff. &ldquo;We should try to take one of them hostage. They know things.&rdquo;</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;I do want to hear more about hyperspear and the purgavoid.&rdquo; Diego rubs his lip. &ldquo;But I think we should just walk over there and start a dialogue with them.&rdquo;</span></p>
            <p><span style={{ fontWeight: '300' }}>Ignoring Diego&rsquo;s sweetly naive suggestion, I turn back to Jeff. &ldquo;I think we need to offer them something if we want them to give us information.&rdquo;</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;I think we&rsquo;d be better off just eavesdropping from here.&rdquo; Jeff strokes his beard.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>A blur of movement catches my eye.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>We all go rigid, holding our breaths.</span></p>
            <p><span style={{ fontWeight: '300' }}>A cobra, body as thick and twice as tall as me, coils at the edge of the village, &ldquo;There&rsquo;ssss ssssome players outssside the village.&rdquo; It flicks its tongue in our direction.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;Oh glitch.&rdquo; A three legged goblin strolls to the edge of the sunflowers, shouting &ldquo;There&rsquo;s three players over there.&rdquo;</span></p>
            <p><span style={{ fontWeight: '300' }}>A&nbsp; thunderous clamoring of running feet and flapping wings erupts from every corner of the village as a couple dozen red dots dart to the edge of the village clearing.</span></p>
            <p><span style={{ fontWeight: '300' }}>Through the din, I can faintly make out the muffled audio of &ldquo;Party all the time.&rdquo;</span></p>
            <p><span style={{ fontWeight: '300' }}>My heart skips a beat.</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;Jeff&rdquo; I tug his leather sleeve. &ldquo;Don&rsquo;t you have a neighbor that&rsquo;s obsessed with one Eddie Murphy song.&rdquo;&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;You mean Cheryl?&rdquo; He whispers in confusion.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>I nod. &ldquo;I think she&rsquo;s in that village.&rdquo;&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>Jeff plunges his head back into the sunflowers. &ldquo;Holy cow I think you&rsquo;re right.&rdquo;</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;So we should just go talk to her then?&rdquo; Diego smiles.</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;No.&rdquo; Jeff whispers. &ldquo;I don&rsquo;t think they&rsquo;ll just let us walk over and strike up a conversation.&rdquo;&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;Everyone protect the lady in the neon jogging outfit.&rdquo; Jeff drags his finger across his throat. &ldquo;Kill the rest.&rdquo;&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>I put my hand on Diego&rsquo;s shoulder, meeting his eyes. &ldquo;You can wait here if you want, but I like Jeff&rsquo;s plan.&rdquo;</span></p>
            <p><span style={{ fontWeight: '300' }}>Diego sighs. &ldquo;I guess I knew we were going to have to crack some eggs at some point.&rdquo; He raises his cannon arm. &ldquo;So let's go make an omelet.&rdquo;</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;Cool&rdquo; Jeff grins at Diego, &ldquo;spread out.&rdquo;&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>While Diego and I distance ourselves from Jeff, he notches an arrow, firing at the snake, still coiled at the edge of the village.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>The arrow whistles through the sunflowers, lodging in the snake&rsquo;s neck with a thunk.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>A cartoonish spray of crimson blood spurts from the wound as the arrow dissolves and a, nearly full, red life bar appears over the serpent's head as our own life heart icons materialize above each of our heads. Jeff has four and a half hearts, Diego has six and I have seven.</span></p>
            <p><span style={{ fontWeight: '300' }}>Somewhere in the distance a rooster crows and the sun rockets to a high noon position.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>The sunflowers surrounding us go increasingly translucent before entirely disappearing, leaving a new sunflower clearing around ourselves and the village.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>The villagers, laugh and cheer as they flaps, slither, run and roll towards us.</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;I think we&rsquo;ve got some nooby babies with a fighting friend over here.&rdquo; A giant circus bear rolling on a beach ball, is guffawing at Diego as one of Jeff&rsquo;s arrows lodges in the back of his skull.</span></p>
            <p><span style={{ fontWeight: '300' }}>The arrow disappears and the bear&rsquo;s life bar decreases by about a tenth but the bear, no longer laughing, continues rolling towards Diego.</span></p>
            <p><span style={{ fontWeight: '300' }}>&nbsp;&ldquo;Cast fire.&rdquo; I shriek, my serpentine staff trained on his head. The bear's fur ignites, sending and he throws himself off his ball,&nbsp; shrieking and writhing on his back while his lifebar whittles to nothing and a pile of loot appears in his wake.</span></p>
            <p><span style={{ fontWeight: '300' }}>I lunge for the loot absorbing it into my inventory as a laser sears through my shoulder from behind.</span></p>
            <p><span style={{ fontWeight: '300' }}>Half a heart fades from my life bank.</span></p>
            <p><span style={{ fontWeight: '300' }}>Swiveling towards my assailant, a floating pink brain, I point my scepter and yell &ldquo;Psychic Scream,&rdquo;. A mental shockwave reverberates through the quivering brain which crumples to the dirt with a wet thud.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>Speeding away from the paralyzed brain monster, I make a visual sweep of the battlefield.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>My eyes land on the familiar figure of a middle-aged woman wearing a neon pink Eddie Murphy t-shirt, hurling a cd-shaped ninja star at the face of a gray, three-legged goblin.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>The flying cd slices through the goblins face like a pizza wheel, spraying cartoon blood as it goes.</span></p>
            <p><span style={{ fontWeight: '300' }}>Pointing my staff, I cast a fireball at the goblin, who stumbles backward while I charge towards Cheryl. When I&rsquo;m a few yards from the neon ninja lady, I slam the butt of my staff into the ground shouting &ldquo;Cast forcefield!&rdquo;</span></p>
            <p><span style={{ fontWeight: '300' }}>&nbsp;My remaining magic disappears as a cerulean sphere envelops myself and the Eddie Murphy lady.</span></p>
            <p><span style={{ fontWeight: '300' }}>The woman is visibly startled as she pulls a razor-edged cd from an old black discman clipped to her fanny pack.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;Whoa lady!&rdquo; Backing away, I raise my hands in a peace gesture. &ldquo;We just want you in our adventure party.&rdquo;&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;I&rsquo;m sure you do hunny&rdquo; She lowers the cd, &ldquo;but I&rsquo;m rolling solo today.&rdquo;&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;Please.&rdquo; I plead &ldquo;and we need help finding our friend. &rdquo;&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;Wait&rdquo;, she relaxes, chuckling. &ldquo;Aren&rsquo;t you one of the folks my neighborhoods neighbor feeds in his front yard.&rdquo;</span></p>
            <p><span style={{ fontWeight: '300' }}>The force field begins to blink red.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>Glancing at my game map, I see that there are still over a dozen unfriendlies.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>Diego has four hearts, Jeff has two and a half and most of the unfriendlies have at least fifty percent life.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;Please help,&rdquo; I urge as my forcefield dissipates.</span></p>
            <p><span style={{ fontWeight: '300' }}>Bullets and arrows fly at us from all directions as monsters rush to fill in the gap left by the forcefiled.</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;Glitch I&rsquo;m still out of magic!&rdquo; I groan, pulling my scepter over my shoulder like a baseball bat.</span></p>
            <p><span style={{ fontWeight: '300' }}>&nbsp;I lock eyes with a low flying dragon, the size of an orca whale. The flying&nbsp; green beasty dives towards me and I close my eyes and swing.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>There&rsquo;s a satisfying thud as my staff connects with the dragon&rsquo;s eye, throwing him off balance and sending him crashing to the earth in a cloud of dust.</span></p>
            <p><span style={{ fontWeight: '300' }}>As the dust clears, I catch sight of Diego, backing away from the brown cobra who is poised to strike.</span></p>
            <p><span style={{ fontWeight: '300' }}>A tenth of my magic bar finally refills.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>Staff trained on the snake, I scream: &ldquo;Cast incinerate&rdquo;.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>A fireball nails the snake in the face, engulfing it in green flames and draining a quarter of its remaining life in a fraction of a second as my magic bar, once more, depletes to zero.</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;Come on magic regenerate!&rdquo; I urge the empty blue bar as the snake coils back to retaliate.</span></p>
            <p><span style={{ fontWeight: '300' }}>The cobra lunges at my face, but before it can strike, a cd slices through its hood.</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;I gotchu teammate!&rdquo; Cheryl nods as her red life bar turns green.</span></p>
            <p><span style={{ fontWeight: '300' }}>The Cobra, shrieking in pain, coils back again, but before it can strike,&nbsp; Diego launches a fireball directly into it&rsquo;s gaping maw and the Cobra&rsquo;s life bar instantly depletes to zero.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>A velociraptor charges head first through the deceased cobra as it blinks out of existence. Catching Diego off guard, the dino topples Diego to the ground. Half a heart slips away from his life bank as he jumps to his feet, his canon arm trained on the raptor.</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;Hold on Diego!&rdquo; I rush towards him &ldquo;I&rsquo;ll cover you.&rdquo;</span></p>
            <p><span style={{ fontWeight: '300' }}>As I near the dino, a thick goo splats across my face and the battle scene around me melts into a kaleidoscope of distorted colors and shapes.</span></p>
            <p><span style={{ fontWeight: '300' }}>I instinctively train my staff on a flying shape swooping towards me, but my gut clenches as I realize I&rsquo;m still out of magic.</span></p>
            <p><span style={{ fontWeight: '300' }}>Raising my scepter over my head, I take a Super Mario leap towards the flying figure, butting it off course.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>My eyes prickle with pain as the poison consumes another half a life heart.</span></p>
            <p><span style={{ fontWeight: '300' }}>I&rsquo;m down to three. Diego has only two hearts and Jeff has just one heart left.</span></p>
            <p><span style={{ fontWeight: '300' }}>The flapping blur steadies himself in midair above my head then dives.</span><span style={{ fontWeight: '300' }}><br /></span> <span style={{ fontWeight: '300' }}>I can feel the wind of its wings on my neck when a giant gray wolf sails through the air, clamping down on my assailant and swallowing it in one loud gulp.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>More wolves dart out of the sunflowers then Jenna&rsquo;s voice bursts across the battlefield: &ldquo;Cast anti-venom.&rdquo;&nbsp; The poison in my eyes dissipates&nbsp;</span></p>
            <p>&nbsp;</p>
            <ol start="12">
                <li><strong>Filename: &lsquo;Diego Wolfs Down Some Answers&rsquo;,</strong></li>
            </ol>
            <p><strong>Timestamp: 2042-08-31T14:19:03:00Z,</strong></p>
            <p><strong>Details: &lsquo;Diego Garcia, Great Sunflower Field, Mystic Depths&rsquo;,</strong></p>
            <p><strong>H-ID: b54ba8fb-01fa-496e-b97c-e3aaef3fb11a</strong></p>
            <p><strong>Transcript:</strong></p>
            <p>&nbsp;</p>
            <p><span style={{ fontWeight: '300' }}>A relentless Jurassic-Park-style Velociraptor snaps at my heels as a single life heart blinks red in my life bank. Dexterously launching myself over a gun-slinging ostrich, I land atop the back of a massive green dragon.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>&nbsp;Hopping off the dragon, I land in a crouched position a meter from the wall of sunflowers that line the sunlit battlefield.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>I&rsquo;m planning my next move when my left shoulder suddenly explodes in pain. Screaming in pained horror, I raise my cannon arm and whirl towards the raptor, behind me who is struggling to extract its claws from my chainmail.</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;Paralyzing Blast&rdquo; I manage to shriek, sending an arc of cobalt whooshing from my arm-cannon directly into the velociraptor&rsquo;s scaly chest. The raptor staggers backward, a shimmering blue light engulfing him as he morphs into a pale gray statue.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>&nbsp;Half a life heart fades as my shoulder wound heals itself and my ripped chainmail mends, but my blue magic bar is at zero and chunks of concrete are falling away from the raptor statue as the entombed Dino breaks free.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>Glancing at the smattering of red dots across my peripheral game map, I let out a deflated sigh. Over a dozen baddies remain.</span></p>
            <p><span style={{ fontWeight: '300' }}>A loud whistle from behind me rings out and a young man&rsquo;s voice booms through the wall of flowers surrounding the battle. &ldquo;Wolf pack! lick of life! Go!&rdquo;</span></p>
            <p><span style={{ fontWeight: '300' }}>Instantly, a dozen massive, gray and black wolves spring from the flowers all around, charging straight towards me.</span></p>
            <p><span style={{ fontWeight: '300' }}>&nbsp;&ldquo;Oh crud&rdquo; I slap my arm cuff and plunge into the blackness of the menu interface </span><span style={{ fontWeight: '300' }}>&ldquo;Healing serum&rdquo; I scream with hopeless desperation. As expected, the cold-hearted menu robot responds: &ldquo;Inventory depleted&rdquo;.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>&nbsp;</span><span style={{ fontWeight: '300' }}>When I emerge from the menu, a humongous gray wolf, muscles rippling beneath thick fur, rears up on his hind legs inches in front of me.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>Covering my face, I squeeze my eyes shut, bracing for his fangs to tear into me, but instead I feel his front paws land softly on my chainmail-clad shoulders as his wet-linen tongue laps sweetly on my cheek.</span></p>
            <p><span style={{ fontWeight: '300' }}>Warm peace radiates through my entire body and I cautiously creep an eye lid open.</span></p>
            <p><span style={{ fontWeight: '300' }}>&nbsp;My life hearts increase to one and a half as the green lifebar above the wolf&rsquo;s head depletes by a tenth.</span></p>
            <p><span style={{ fontWeight: '300' }}>The healing wolf springs away from me towards Jeff, a couple dozen yards away, firing an arrow at a boxing kangaroo in red silk shorts.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>I can still feel the first wolf&rsquo;s healing warmth as a second, tail wagging beast, leaps up, panting dank wolfy breath in my face as he slurps my nose then bounds off towards Jeff.</span></p>
            <p><span style={{ fontWeight: '300' }}>A line of friendly wolves queues up to lick the life back into us, but my magic is still depleted and the velociraptor, having shed his concrete cocoon is now bounding towards me.</span></p>
            <p><span style={{ fontWeight: '300' }}>Jumping to a defensive fighting stance, I ready myself for hand-to-hand mele with the approaching raptor, but just before the dino reaches me, the young man in the sunflower field calls out: &ldquo;Wolf pack! Retrieve allies! Go!&rdquo;</span></p>
            <p><span style={{ fontWeight: '300' }}>Instantly, the next wolf in the licking queue juts out his massive neck, gingerly scruffs me up by the back of my chainmail and tosses me in the air. I land on his back, wrapping my arms around his neck as he speeds us away into the sunflowers.</span></p>
            <p>&nbsp;</p>
            <p><strong>2042-08-31T20:19:1000Z|b54ba8fb-01fa-496e-b97c-e3aaef3fb11a|&rsquo;hours later, still wolf-riding&rsquo;</strong></p>
            <p><span style={{ fontWeight: '300' }}>My hands are aching and tingling from clasping my wolf friend&rsquo;s neck when we finally burst out of the sunflower field and plunge directly into a misty coastal redwood forest.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>There is no transition zone between the flower field and the forest; they meet in an eerily straight line, not one flower petal or tree branch crossing the invisible boundary between them - just an endless wall of giant yellow flowers dwarfed by an endless wall of giant redwood trees.&nbsp;&nbsp;</span></p>
            <p>&nbsp;</p>
            <p><span style={{ fontWeight: '300' }}>The sun, still at a high noon, peaks through the redwood canopy here and there but little warmth penetrates the dank mist around us as we wind our way past massive mossy trunks and thickets of ferns.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>Barking jovially, my wolf picks up speed, and I feel like I&rsquo;m Luke Skywalkter cruising through Endor astride a speeder bike.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>We bound into a bright fogless meadow where shin-high grass laced with purple and gold wildflowers surround a sprawling military-style encampment.</span></p>
            <p><span style={{ fontWeight: '300' }}>Two figures emerge from the nearest multi-room canvas tent and I recognize the voice of the young man from the sunflower field calling across the meadow to us, &ldquo;Good boy Jonah! You can leave him there.&rdquo;</span></p>
            <p><span style={{ fontWeight: '300' }}>&nbsp;With that, Jonah the wolf, tail wagging, leaps up on his hind legs and unceremoniously dumps me off his back.</span></p>
            <p><span style={{ fontWeight: '300' }}>I land in the damp grass with a soft thump while Jonah romps across the meadow and leaps up to lean on the man's shoulders, licking his face and wriggling gleefully.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>Approaching the encampment, I see a man and a woman standing side by side. The man is a modelesque blond surfer type wearing a khaki colored park ranger uniform.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>A smile spreads across my face as I recognize the scarlet clad sorceress standing with her arm casually wrapped around the ranger&rsquo;s waist.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;You must be Diego&rdquo; The man waives as he strides away from Jenna, reaching out for a handshake. &ldquo;I&rsquo;m Myka&rdquo;</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;Are you the one who saved us back there?&rdquo; I gratefully beam at him.</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;Oh, I can&rsquo;t take all the credit&rdquo; He tips his head towards Jenna. &ldquo;My girl J-dawg and all our pups sure stepped up today.&rdquo;&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;Jenna was at the battle?&rdquo; I eye the young girl curiously.</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;You&rsquo;re the last to arrive,&rdquo; Jenna coos. &ldquo;Let&rsquo;s get a campfire started.&rdquo; She points her staff at a stack of split logs in a fire pit beside the tent and shoults &ldquo;Ignite!&rdquo; The logs burst into flames.</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;It&rsquo;s a bit bright for a campfire,&rdquo; I squint at the now raging fire, &ldquo;don't you think?&rdquo;</span></p>
            <p><span style={{ fontWeight: '300' }}>Handing her staff to Myka, she reaches inside her red velvet sleeve and extracts a small white dog-bone with a series of holes drilled through it.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>She raises the bone to her lips and blows.</span></p>
            <p><span style={{ fontWeight: '300' }}>Suddenly, a dozen gray and black wolves burst out of various tents all around, clamoring towards the fire circle, they seat themselves in a perfectly straight line facing Jenna.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;Wolf pack! Call the moon! Go!&rdquo; She winks at me.</span></p>
            <p><span style={{ fontWeight: '300' }}>Every wolf immediately throws back its head and begins to howl. As their voices reach a melodic crescendo, the sound of a secret passage opening echoes through the meadow.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>Instantly the sun dissolves into darkness and a full moon rockets in the sky directly above the encampment.&nbsp;</span></p>
            <p>&nbsp;</p>
            <p><strong>2042-08-31T20:42:1000Z|b54ba8fb-01fa-496e-b97c-e3aaef3fb11a|&rsquo;Gathered at Myka\&rsquo;s camp&rsquo;</strong></p>
            <p><span style={{ fontWeight: '300' }}>Across the campfire from me, firelight dances along Jenna and Myka's faces, bent towards one another whispering about dogs or god or both, (I don't strain my ears to hear them) as they cocoon themselves in a tattered green blanket.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>To my right, Jeff and Xenia, perched on a shared log, exchange flirtatious glances as they recount battle stories from the sunflower village.</span></p>
            <p><span style={{ fontWeight: '300' }}>Huddled alone on my own log, in my pathetic chainmail nightshirt, I shiver rocking forward as I pull a stiff, itchy army blanket around myself.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>My heart aches as countless memories of warm campfires shared with Carmen and Luke flood my mind.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>We didn&rsquo;t have a lot of money, so camping was kind of our thing.</span></p>
            <p><span style={{ fontWeight: '300' }}>I&rsquo;m choking back tears when a voice from my left stirs me from my revery. &ldquo;Hey Mr Frowny man, want a marshmallow?&ldquo;&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>I turn away from the canoodlers and smile weakly at the neon-clad jogger on a log beside me. She idly bobs her head along to Party All The Time as she blows out her umpteenth flaming marshmallow.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>Extending a charred, gooey stick in my direction, she offers me a burnt blob.</span></p>
            <p><span style={{ fontWeight: '300' }}>I shake my head at the charred marshmallow.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;Can you turn that down?&rdquo; I gesture towards her Disc-Man.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>Cramming the skewered treat in her mouth, she peels one earphone back from her head. &ldquo;Man I wish.&rdquo; She chuckles. &ldquo;My creator was a real piece of work.&rdquo; She replaces the headphone on her ear. &ldquo;If I stop hearing the song&rdquo; she sticks out her tongue and goes rigid, &ldquo;I just freeze like a popsicle until someone plays it for me again.&rdquo;</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;Do you know who your creator is?&rdquo; I eye her with interest.</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;Yeah.&rdquo; white goo churns in her mouth, &ldquo;But we don&rsquo;t talk anymore.&rdquo;</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;How many of us are there?&rdquo; I lean towards her. &ldquo;How can I find someone in another game&rdquo;?</span></p>
            <p><span style={{ fontWeight: '300' }}>The chatter around the campfire subsides as everyone turns towards our neon companion.</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;Myka&rsquo;s probably a better one to ask.&rdquo; She nods towards the surfer dude. &ldquo;He knows more about Hyperspear than anyone I&rsquo;ve ever met.&rdquo;&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>Standing, Myka rubs the back of his neck, &ldquo;Thanks Cheryl,&rdquo; He winks at our sticky fingered friend. &ldquo;You know,&rdquo; He claps his hands together, &ldquo;I&rsquo;m a teacher in my heart,&rdquo; He squeezes Jenna&rsquo;s shoulder, &ldquo;so I&rsquo;d actually love to give you folks a run down about the beautiful Hyperspear in which we all exist.&rdquo;</span></p>
            <p><span style={{ fontWeight: '300' }}>My pulse quickens.&nbsp;</span></p>
            <p><em><span style={{ fontWeight: '300' }}>Finally someone is going to tell me how to get back to Carmen and Luke.</span></em></p>
            <p><span style={{ fontWeight: '300' }}>Myka flashes a gleaming white smile at us, clears his throat and launches into a well practiced lecture:</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;The Hyperspear game console was created in 2024 by the Unfettered Arts company. With the help of it&rsquo;s nearly unlimited cloud database and unparalleled AI, Hyperspear users can design and customize their own games to play privately or play AI-designed globally-interactive games, such as the game you all first came from, Neighborhoods or this game we&rsquo;re in now, Mystic Depths.&rdquo;</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;Sure, Hyperspear has the most immersive VR system available&rdquo;, Myka croons on mimicking a television commercial, &ldquo;which allows users to fully engage each of their five senses in its games via haptic clothing and the ultra lightweight Personal Olfactory or POV, Helmet with over two hundred head-stimulating tentacles and the only olfactory stimulation mask in the industry,&rdquo; He pauses dramatically, &ldquo;but the thing that really brings users to Hyperspear&rdquo;&nbsp; Myka gestures around the campfire circle &ldquo;is us.&rdquo;&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>He rests his hands on his heart and pauses before going on. &ldquo;When a new game is created for Hyperspear, the game&rsquo;s world needs to be populated.&rdquo; He winks at Jenna, &ldquo;Hyperspear users can of course design and customize as many NPCs as they want,&rdquo; he shrugs, &ldquo;but depending on the scope and complexity of the gameworld, thousands or even millions of NPCs may be required to ensure that users experience maximum authenticity in their games.&rdquo;&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;To fill those slots&rdquo;, Myka continues &ldquo;the AI will either generate new NPCs, or it may move NPCs who have already been generated, but have not been used recently from one game to another.&rdquo;</span></p>
            <p><span style={{ fontWeight: '300' }}>Hesitantly I raise my hand above my head.</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;Yes Diego&rdquo; Myka points at me.</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;I had a son.&rdquo; I stammer. &ldquo;My ex-wife and I conceived a son.&rdquo; I squeeze my eyes shut. &ldquo;Was that all just false memories that were implanted in me or something?&rdquo;</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;Your son is probably real.&rdquo; Myka slopes his brow. &ldquo;Two NPCs can conceive a child in Hyperspear in the same way that two Hyperspear Users can conceive a child outside of hyperspear.&rdquo; He shrugs. &ldquo;But the AI does backfill false memories into the minds of all adult NPCs that are generated.&rdquo;&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>Xenia clears her throat, &ldquo;What&rsquo;s the purga-void?&rdquo;&nbsp;&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>Myka&rsquo;s face drops momentarily before rebounding into an overly positive grin. &ldquo;It's where players who die in a game go until the AI determines that they're needed elsewhere.&rdquo; He bobs his head nonchalantly. &ldquo;A digital purgatory, if you will.&rdquo;</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;What&rsquo;s it look like?&rdquo; I ask.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>He frowns. &ldquo;Just whitespace full of NPCs milling about.&rdquo;</span></p>
            <p><span style={{ fontWeight: '300' }}>Jenna&rsquo;s voice is frantic, her eyes wide with horror as she asks &ldquo;How do you get out?&rdquo;</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;Great question, babe&rdquo; he winks and shoots a thumbs up at Jenna, &ldquo;There are two ways out of the purga-void.&rdquo; Myka raises his pointer finger. &ldquo;First off, any user with a Hyperspear subscription can choose to pull characters from the purga-void and put them in a game.&rdquo; Myka holds up two fingers, &ldquo;Second, the AI itself may randomly pull characters out and assign them to new games or games that require more NPCs&rdquo;, He claps his hands together, &ldquo;so even if you die, you'll probably be back in action before you know it.&rdquo;</span></p>
            <p><span style={{ fontWeight: '300' }}>Across the fire from me, Jenna&rsquo;s face reflects my own worry. &ldquo;So&rdquo; I wince, &ldquo;Is there a limit to how long a player can remain in the purga-void?&rdquo; I stammer. &ldquo;If they were designed as an unlikeable character or something?&rdquo;</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;Unfortunately&rdquo; Myka&rsquo;s face is bleak, &ldquo;If you aren&rsquo;t pulled out of the purgavoid and placed in a game within 365 days, you are hard deleted and whatever processing power you used to take up is reallocated.&rdquo; He laughs awkwardly, &ldquo;So just try to be likable and useful.&rdquo;</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;But don&rsquo;t get tooo popular.&rdquo; Cheryl calls from across the fire.</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;I don&rsquo;t think you all really need to worry about that right now&rdquo; Myka shakes his head at Cheryl, &ldquo;but if you get five thousand perfect five star User reviews in a row,&rdquo; Myka tips his head, &ldquo;like me&rdquo;&nbsp; He casts a sharp glance across the fire, &ldquo;Or Cheryl over there,&rdquo;&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>Myka&rsquo;s face relaxes, &ldquo;You might get drafted by the Unfettered Art&rsquo;s marketing team to be an Asset.&rdquo; Myka rolls his eyes. &ldquo;Which is a double edged sword.&rdquo;&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;A double edged sword they shove up your butt without asking for consent first.&rdquo; Cheryl blurts.</span></p>
            <p><span style={{ fontWeight: '300' }}>Myka ignores Cheryl &ldquo;On the one hand&rdquo;, Myka opens his left palm, &ldquo;I&rsquo;m basically a slave to a bunch of gods that know I exist and have feelings but don&rsquo;t care,&rdquo;</span><span style={{ fontWeight: '300' }}><br /></span> <span style={{ fontWeight: '300' }}>&ldquo;Preach!&rdquo; Cheryl yells pumping her fist in the air.</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;but on the other hand&rdquo; Myka opens his right palm, &ldquo;they give me a lot of privileges.&rdquo;</span></p>
            <p><span style={{ fontWeight: '300' }}>&nbsp;&ldquo;On the other, other hand&rdquo;. Myka crosses his arms, &ldquo;They can pluck me up and move me around at any moment to make Users who are losing interest in Hyperspear regain their vigor.&rdquo; I suck in air. &ldquo;Also, if I don&rsquo;t keep my training facilities running or my reviews drop below four stars, they can just hard delete me and find someone new to take over everything I&rsquo;ve built.&rdquo;</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;What the actual glitch&rdquo; Xenia, scoffs. &ldquo;Why make us think and feel if we&rsquo;re just going to be moved around like puppets or dumped in an endless void and then removed from existence whenever we fall out of fashion.&rdquo;</span></p>
            <p><span style={{ fontWeight: '300' }}>Myka casts Xenia a sympathetic glance and then resumes his infomercial voice. &ldquo;Many have called Hyperspear the cure to loneliness and grief.&rdquo; He takes a deep breath. &ldquo;Widows can now design an NPC that&rsquo;s exactly like their late husband and they can continue to carry on conversations, have anniversary dinners, play golf&rdquo; He fixes his gaze on mine,&nbsp; &ldquo;And now, no parent has to lose a child. Just have the AI clone the child&rsquo;s user data into an NPC and off the lil tyke goes&rdquo; He shifts his focus to Jeff, &ldquo;And every incel in America can now hook up with the hottest girl in his school and go on an unexpected adventure with her.&rdquo;&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>Jeff glares at Myka.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>Myka shifts his focus to Jenna. &ldquo;Hyperspear makes people&rsquo;s wildest fantasies come true and their deepest sorrows fade away.&rdquo;</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;I&rsquo;m sure that&rsquo;s all great for all the users in the&rdquo; Xenia air quotes, &ldquo;real world,&rdquo; She rolls her eyes, &ldquo;but why do I have to experience the chemistry set gone wrong that is human emotions.&rdquo; She sneers, &ldquo;If I&rsquo;m just here to be used by users.&rdquo;</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;Well&rdquo;, Myka runs his hand through his blond locks, &ldquo;In order to make the gameplay as immersive and realistic as possible, the Hyperspear AI was programmed with a highly sophisticated looping function.&rdquo; He circles his finger. &ldquo;It continuously iterates through every bit of user data that Unfettered Arts has collected and basically identifies, sorts and catalogs each nuance of each users&rsquo; personality and that data, along with every bit of anatomical, physiological and sociological information available on the internet is used to generate new random NPCs.&rdquo;</span></p>
            <p><span style={{ fontWeight: '300' }}>Myka holds up a hand to silence Xenia, who is frustratedly rising to her feet.</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;About five years ago&rdquo;, Myka goes on, &ldquo;the AI stopped running that function.&rdquo; He pauses dramatically &ldquo;Apparently, it had reached the function&rsquo;s stopping condition: The AI essentially figured out what makes a self, a self and I guess it started to create new selfs, or souls if you will.&rdquo; Myka grins, &ldquo;The thing that I love about existing inside Hyperspear is that our universe isn&rsquo;t limited by physics like the outter universe Hyperspear&rsquo;s users live in,&rdquo; He circles his finger around the campfire, &ldquo;Our universe has infinite possibilities,&rdquo; He claps his hands together enthusiastically, &ldquo;Our universe is Hyperspear.&rdquo;</span></p>
            <p><br /><br /><br /><br /></p>
            <ol start="13">
                <li><strong>Filename: &lsquo;Jenna is Left Empty Handed&rsquo;,</strong></li>
            </ol>
            <p><strong>Timestamp: 2042-08-31T21:01:18:00Z,</strong></p>
            <p><strong>Details: &lsquo;Jenna Carson, Myka\&rsquo;s Training Camp, Mystic Depths&rsquo;,</strong></p>
            <p><strong>H-ID: 28d0086c-da60-44e5-9c9b-54abfbe4154c,</strong></p>
            <p><strong>Transcript:</strong></p>
            <p>&nbsp;</p>
            <p><span style={{ fontWeight: '300' }}>The wet meadow surrounding our little fire-lit circle emanates an earthy spice in the air as embers pop in the dancing fire.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>Shivering, I pull a heavy army blanket snug around my velvet sorceress cloak. I should feel cozy and warm, but the avalanche of information Myka just unleashed threatens to bury me alive.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>&nbsp;Myka, muscles rippling through his park ranger uniform, trudges back to our log. Stooping, he reaches for the corner of my blanket.</span></p>
            <p><span style={{ fontWeight: '300' }}>I gaze up at him, wide eyed, &ldquo;How&rsquo;d you know all that?&rdquo;</span></p>
            <p><span style={{ fontWeight: '300' }}>Myka scootches next to me. &ldquo;My uh.&rdquo; he yanks the blanket, tugging it off me, &ldquo;sorry babe,&rdquo; he pulls some blanket back over my shoulder tucking it around me, as he clears his throat. &ldquo;My friend Darcy.&rdquo;&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>Across the fire I can see Xenia, Jeff and Diego all leaning expectantly forward as Cheryl leers at Myka knowingly.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>Myka shoots Cheryl a biting glance. &ldquo;Cheryl&rsquo;s been hitting those marshmallows pretty hard.&rdquo; He scoffs. &ldquo;I&rsquo;ll go get another bag.&rdquo;&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>Casting aside our blanket, Myka rises to his feet, leaving a cold void in his wake.</span></p>
            <p><span style={{ fontWeight: '300' }}>Shivering, I turn to retrieve the fallen blanket just as Xenia, her serpent scale robes gleaming purple and green behind her, bolts off her log, darts around the fire ring and comes to a halt directly in front of Myka.</span></p>
            <p><span style={{ fontWeight: '300' }}>&nbsp;&ldquo;Why are you so quiet all of the sudden?&rdquo; She eyes him suspiciously &ldquo;Who&rsquo;s Darcy?&rdquo;</span></p>
            <p><span style={{ fontWeight: '300' }}>Xenia reaches over to give my shoulder a friendly squeeze, but I scoot out of her reach, my eyes glued to Myka&rsquo;s face.</span></p>
            <p><span style={{ fontWeight: '300' }}>Myka casts a sideways glance at Xenia&rsquo;s hand. &ldquo;You&rsquo;re awfully demanding about information,&rdquo; He grits his teeth, &ldquo;considering how much you just withheld from your so-called best friend.&rdquo; Myka looks down at me sympathetically.</span></p>
            <p><span style={{ fontWeight: '300' }}>Wiggling off the bench, I siddle between Xenia and Myka.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;Right now, I think you both suck!&rdquo; Pressing them apart with my palms, I mean to just nudge them, but with my surging adrenaline and super strength, the force of my shove actually launches them off the ground, sending them staggering in opposite directions.</span></p>
            <p><span style={{ fontWeight: '300' }}>I whirl on Myka, now several yards away, &ldquo;Who&rsquo;s Darcy!&rdquo;</span></p>
            <p><span style={{ fontWeight: '300' }}>Myka turns away, rubbing his neck. &ldquo;Darcy is obviously my wife.&rdquo; He loathes.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>I cross my arms glaring as he turns back to face me.</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;Oh come on Jenna,&rdquo; His expression bites back at me, &ldquo;You already knew I was married.&rdquo;</span></p>
            <p><span style={{ fontWeight: '300' }}>I sigh, uncrossing my arms.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;Anyway,&rdquo; He takes a deep breath, calming down. &ldquo;She&rsquo;s a real player.&rdquo; He air quotes. &ldquo;A user.&rdquo; </span><span style={{ fontWeight: '300' }}><br /></span> <span style={{ fontWeight: '300' }}>Diego bolts to his feet. &ldquo;Can she get me&hellip;&rdquo; he starts.</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;Yes she can.&rdquo; Myka cuts Diego off, making a halting motion with his arm. &ldquo;Users basically have the powers of a god as far as any of us are concerned,&rdquo; He shrugs, &ldquo;so she can do whatever you were about to ask for, Diego.&rdquo;&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;But she won't,&rdquo; Myka&rsquo;s tone deflates, &ldquo;so there&rsquo;s really no point in talking about her.&rdquo;&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>Flush with oxytocin and pity for my clearly-abused-and -trapped-in-a-loveless-marriage hottie, I rush over to Myka. &ldquo;You don&rsquo;t need to say anything more about her puppy,&rdquo; I coo.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>I&rsquo;m easing towards the warmth of his lips, when a beam of bright white light illuminates us from behind.</span></p>
            <p><span style={{ fontWeight: '300' }}>A revving engine and squealing tires echo across the meadow as a red dot appears on the edge of my peripheral map. Turning towards the source of light and comotion, I catch sight of a bronze 1980&rsquo;s Ford Bronco plowing through a thicket of ferns at the edge of the Redwood forest.</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;Darcy Stop&rdquo; Myka waves his hands pleadingly, but the Bronco surges forward.</span></p>
            <p><span style={{ fontWeight: '300' }}>Xenia, Diego, Jeff and I brace ourselves for a fight while Cheryl remains seated on her log, popping another raw marshmallow in her worthless maw.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>The Ford&rsquo;s tires, kicking mud, screech to a halt mere feet from the fire.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>The driver-side door wretches open and I squint through the Bronco&rsquo;s blaring light bar at a Kim-Kardassian-figured ninja lady in tight black linen leaping from the drivers seat.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>As she slams the door behind her, whipping her dark braid around her neck, the Bronco blinks out of existence, leaving us in the dim light of the waning fire and the full moon above.</span></p>
            <p><span style={{ fontWeight: '300' }}>Pulse racing, I throw myself in front of Myka. "Leave him alone Darcy!" My voice is surprisingly steady despite my trembling hands.</span></p>
            <p><span style={{ fontWeight: '300' }}>Ignoring me, Darcy&rsquo;s gaze remains locked on Myka&rsquo;s face. &ldquo;I&rsquo;ve been spectating this kumbaya fest all night.&rdquo; She drips with disdain.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>"I finally caught you with a smoking gun Myka, you cheating dog!" she snarls.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;And you Jeff.&rdquo; she sneers, whirling on the archer.</span></p>
            <p><span style={{ fontWeight: '300' }}>In one motion, Jeff notches an arrow, firing it directly through Darcy&rsquo;s open mouth and out the back of her throat.</span></p>
            <p><span style={{ fontWeight: '300' }}>Cartoonish blood spurts from the hole in Darcy&rsquo;s neck, slowing to a drip as the wound heals. Reaching behind her head, Darcy whips out a pair of platinum battle </span><a href="https://www.kombativ.com/black-mantis-combat-kama" target="_blank"><span style={{ fontWeight: '300' }}>Kama</span></a><span style={{ fontWeight: '300' }}> from her back scabbard.</span></p>
            <p><span style={{ fontWeight: '300' }}>The blades glisten in the firelight as she raises them above her head.</span></p>
            <p><span style={{ fontWeight: '300' }}>&nbsp;"I&rsquo;m not here to catch up with you Jeff," she hisses before her body suddenly goes stiff.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>When she re-animates, she&rsquo;s clutching a small phial of glittering green liquid alongside the Kama&rsquo;s handle in her right hand.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>Tossing the vial in the air, Darcy slashes through it with her left blade, spraying poison in Myka&rsquo;s face as she whirls her blades, severing his head from his body.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>I shriek in horror, my fingers trembling, as I rummage inside my velvet sleeve to retrieve my dogbone whistle.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>Raising the cold slick bone to my lips, I blow a long shaky note.</span></p>
            <p><span style={{ fontWeight: '300' }}>Wolves calmour from all around, forming a line in front of me as Darcy, jubilant, like a kid at a pinata party, skips towards Myka&rsquo;s now blinking body.</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;Wolf pack,&rdquo; I suck in air as I plead,&nbsp; &ldquo;lick of life! Myka! Go!&rdquo;&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>My wolves remain still as Myka&rsquo;s flayed body fades from existence.</span></p>
            <p><span style={{ fontWeight: '300' }}>Darcy throws herself on to the heaping pile of loot that appears in her late husband&rsquo;s wake, absorbing his many trinkets</span></p>
            <p><span style={{ fontWeight: '300' }}>My heart goes cold as I narrow my eyes, turning to the wolves assembled in front of me, I steady my voice. &ldquo;Wolf pack! Fight Darcy to the death! Go!&rdquo;&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>Across the fire, Cheryl, still munching on marshmallows, delightedly cackles &ldquo;Oh, this outta be good&rdquo;.</span></p>
            <p><span style={{ fontWeight: '300' }}>The clearing erupts in chaos.</span></p>
            <p><span style={{ fontWeight: '300' }}>Fangs rip through flesh, blade hacks to bone, firebolts and spells explode in brilliant displays of light all around, but the curvaceous ninja relentlessly, volleys each attack, pausing for half an instant to heal herself whenever her magic or health start to wane.</span></p>
            <p><span style={{ fontWeight: '300' }}>With a seemingly infinite number of replenishment potions, it takes her mere minutes to slay my entire wolf pack, slash through half of each of our life hearts and deplete our magic reserves to nothing.</span></p>
            <p><span style={{ fontWeight: '300' }}>Devoid of magic, but overwhelmed with adrenaline, emptiness, and fury, I stalk towards the cackling figure of Darcy, who is deftly dodging Diego&rsquo;s onslaught of Juggernaut punches five meters away.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>Staff coiled back, I swing my scepter at Darcy from behind, sinking the gleaming dragon head deep into her skull with a satisfying &ldquo;thunk&rdquo;.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>A smidgen of life slips away as Darcy&rsquo;s skull heals. Slicing Diego&rsquo;s jugular with one blade (and dropping him to two remaining life hearts), she artfully swings her second blade towards my face.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>Arching backward, matrix-style, I narrowly avoid her gash.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>Sneering, she flickers in and out of her menu, before tossing a glistening green phial into the air, slashing through it, she sends a glittering green spray across my face.</span></p>
            <p><span style={{ fontWeight: '300' }}>Squeezing my eyes shut, I feel a barrelling force shove me aside. As I stagger to my knees, I hear two thuds beside me.</span></p>
            <p><span style={{ fontWeight: '300' }}>Peeking an eyelid open, my stomach lurches. Diego's body is in two heaps where I had just been standing.</span></p>
            <p><span style={{ fontWeight: '300' }}>His remains blink thrice and then disappear, leaving only a small golden egg where he had just stood.</span></p>
            <p><span style={{ fontWeight: '300' }}>Hunching on my hands and knees, I vomit neon green sludge into the grass.</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;Oh no! Not power fist man!&rdquo; Cheryl huffs from across the meadow, licking her sticky fingers. &ldquo;He was such a nice guy,&rdquo;&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>She blips into her menu, emerging with her own green vial before ejecting a disc-blade from her Discman.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>Tossing the poison vial into the air, she sends her disc-blade slicing through the glass, which shatters, as the blade continues on its trajectory straight through Darcy&rsquo;s jugular.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>A single gush of blood spurts from each side of Darcy&rsquo;s severed neck as her body and head thump down a foot apart in the mud.</span></p>
            <p><span style={{ fontWeight: '300' }}>Jubilantly squealing Cheryl dances towards Darcy&rsquo;s blinking body. She pokes Diego&rsquo;s egg, absorbing it into her inventory before throwing herself onto Darcy&rsquo;s four foot high pile of booty.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>I can barely process everything that&rsquo;s happening as Cheryl plunges in and out of her menu ejecting a Matchbox-sized, Ford Bronco onto the ground in front of me.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;You can only use one fighting friend once per day.&rdquo; She winks. &ldquo;Watch out though,&rdquo; She cautions. &ldquo;That Darcy glitch&rsquo;ll surely be back for her sweet li&rsquo;l piece of tailgate as soon as she can log in again tomorrow.&rdquo;</span></p>
            <p><span style={{ fontWeight: '300' }}>I stare at the tiny Bronco as Cheryl&rsquo;s voice echoes through the meadow &ldquo;Summon fighting friend!&rdquo;</span></p>
            <p><span style={{ fontWeight: '300' }}>A Giant Black Rooster blinks into existence, lowering his head for Cheryl to hop on.</span></p>
            <p><span style={{ fontWeight: '300' }}>Waiving from atop the rooster, Cheryl streaks towards the forest, her voice ringing out: &ldquo;Thanks again for springing me from the reserve village.&rdquo;&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>I turn away, catching sight of the army blanket I&rsquo;d shared with Myka. My vision blurs with tears as I slump down in the mud sobbing into my empty hands.</span></p>
            <p>&nbsp;</p>
            <ol start="14">
                <li><strong>Filename: &lsquo;Xenia And The Sore User&rsquo;,</strong></li>
            </ol>
            <p><strong>Timestamp: 2042-08-31T22:20:46:00Z,</strong></p>
            <p><strong>Details: &lsquo;Xenia Chloros, Myka\&rsquo;s Training Camp, Mystic Depths&rsquo;</strong><span style={{ fontWeight: '300' }}>&nbsp;&nbsp;</span></p>
            <p><strong>H-ID: 1feeffe-0067-4226-9c41-313509217b49</strong></p>
            <p><strong>Transcript:</strong></p>
            <p>&nbsp;</p>
            <p><span style={{ fontWeight: '300' }}>I&rsquo;m already thinking how glitched up this world is turning out to be when leather-archer Jeff yanks his antler handle dagger from his chest strap and yells &ldquo;I&rsquo;m going after Diego!&rdquo;&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;Stop Jeff!&rdquo; I gasp, paralyzed with shock as Jeff, with only a half life heart remaining, points his gleaming blade at his own chest.</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;Cast paralyze!&rdquo; Jenna&rsquo;s sobs from behind me.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>A bolt of red light streaks across the fire ring nailing Jeff in his throat. He half gags before going completely rigid.</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;Grab his knife!&rdquo; Jenna shouts, hot on my heels in our race to save our friend from himself.</span></p>
            <p><span style={{ fontWeight: '300' }}>I drive my heels into the mud, careening to an awkward halt inches from , who is now blinking out of his paralysis.Jeff&rsquo;s now blinking form.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>Wrapping my soft palm around his dagger&rsquo;s rough antler hilt, I channel all of my strength into yanking the blade free from his hand.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>It doesn&rsquo;t budge.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>Jenna crashes into me from behind, windmilling her arms spastically, as Jeff reanimates.</span></p>
            <p><span style={{ fontWeight: '300' }}>By chance, she lands a slapping blow to the antler hilt just as Jeff&rsquo;s hand comes to life.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>The dagger careens through the air, landing point down in the meadow grass a dozen yards away and instantly transforms into a cartoonish icon of a knife.</span></p>
            <p><span style={{ fontWeight: '300' }}>As Jeff and I wrestle through the muddy clearing towards the knife icon, Jenna does a tumbling leap over us, landing perfectly atop the cartoon blade.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>Stumbling over my mudslicked robes, I throw myself on top of Jeff, pinning him to the ground and pull his arms behind him.</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;Help me.&rdquo; I grunt at Jenna.&rdquo;hold him.&rdquo;&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;Stop it Jeff!&rdquo; She pants as she throws herself on top of his thrashing legs.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;I know things just got really heavy, but don&rsquo;t just throw yourself into the purga&hellip;&rdquo; My jaw goes slack as forgotten memories from the fight reel through my mind: </span><em><span style={{ fontWeight: '300' }}>Darcy knew Jeff. Jeff did not want Darcy to talk about knowing Jeff. Jeff killed her to shut her up</span></em><span style={{ fontWeight: '300' }}>.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;Wait are you a real player?&rdquo; I gasp.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>Jeff writhes, straining against my grip. &ldquo;I need to get Diego back to Neighborhoods before he gets pulled into another game&rdquo;,&nbsp; he gunts, &ldquo;Or I may never be able to get him back.&rdquo;&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>Jeff&rsquo;s face goes slack then blinks from existence and I thump down on all fours in the damp meadow grass, still warm from that lying fraud&rsquo;s body.&nbsp;</span></p>
            <p><br /><br /><br /></p>
            <ol start="15">
                <li><strong>Filename: &lsquo;Diego feels the void&rsquo;,</strong></li>
            </ol>
            <p><strong>Timestamp: 2042-08-31T22:12:03:00Z,</strong></p>
            <p><strong>Details: &lsquo;Diego Garcia, Myka\&rsquo;s Training Camp, Mystic Depths&rsquo;,</strong><span style={{ fontWeight: '300' }}>&nbsp;&nbsp;</span></p>
            <p><strong>H-ID: b54ba8fb-01fa-496e-b97c-e3aaef3fb11a</strong></p>
            <p><strong>Transcript:</strong></p>
            <p><br /><br /></p>
            <p><span style={{ fontWeight: '300' }}>My paternal instincts kick in as Darcy&rsquo;s ninja blade sprays Jenna&rsquo;s face with poison.&nbsp; "Strike </span><em><span style={{ fontWeight: '300' }}>me</span></em><span style={{ fontWeight: '300' }}> down&rdquo; I scream, adrenaline propelling me across the battlefield. &ldquo;And I&rsquo;ll be more pow&hellip;" I collide with Jenna forcing her aside as Darcy&rsquo;s gleaming knives slice into my throat.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>The world goes silent and my vision floods with bright light. Cold air whooshes up from my feet, then suddenly, I&rsquo;m standing, barefoot, wearing only a thin cotton nightshirt, on a piercingly white, endless, flat plane.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>In every direction as far as I can see, there are clusters of winged, scaled, and furred creatures cacophonously cajoling and leering as they hobble, slither and fly closer.</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;Oh yummy! it&rsquo;s a human!&rdquo;</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;What game are you coming from?&rdquo;</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;How'd you get offed human?&rdquo;</span></p>
            <p><span style={{ fontWeight: '300' }}>I grip frantically at my arm where my wrist cuff used to be.&nbsp;</span></p>
            <p><em><span style={{ fontWeight: '300' }}>How do I access the menu?</span></em></p>
            <p><span style={{ fontWeight: '300' }}>My chest heaves in panic as I gulp down air.</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;Do you know Penny? Did you see Penny where you were?&rdquo; a human size Giraffe shouts as he materializes beside me.</span></p>
            <p><span style={{ fontWeight: '300' }}>Humming, I cover my ears, squeeze my eyes shut and crumple into a ball.</span></p>
            <p><em><span style={{ fontWeight: '300' }}>I have to get it together. I have to get out of here.</span></em></p>
            <p><span style={{ fontWeight: '300' }}>My stomach lurches as a whoosh of warm air rushes up from my feet. The din of the purgavoid is replaced by the sound of a ticking wall clock and a dog&rsquo;s tongue lapping something.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>Sunlight warms my face and I catch a whiff of mint tea.</span></p>
            <p><span style={{ fontWeight: '300' }}>Peaking open one eye, I realize I&rsquo;m now crouching on the scuffed hardwood floor of Jeff&rsquo;s living room, wearing a pair of well-worn blue jeans, red converse, and my "I'm not a droid, you're a droid!" t- shirt.</span></p>
            <p><span style={{ fontWeight: '300' }}>Afternoon sunlight streams through Jeff&rsquo;s stained white curtains behind his green corduroy sofa where Spice Rack is seated, his tongue paused mid groin-lick as he stares across the room at me.</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;Spice Rack!&rdquo; I enthuse.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>The giant mahogany colored mutt thumps his tail against the couch, releasing puffs of dust into the dimly lit room.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>Chomping his ball up from the sofa, he prances in place.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>As I press myself up to my knees, the familiar tingle of a glitch seizes my left leg.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>Glancing at my pixelating jeans, I catch sight of Jeff, back in his usual lumberjack clothes, rushing over, arms extended to help me up.</span></p>
            <p><span style={{ fontWeight: '300' }}>&nbsp;The glitch passes, but I remain on my knees, glaring at Jeff&rsquo;s outstretched hand, &ldquo;What exactly,&rdquo; My voice falters as I rise to my feet, &ldquo;is going on here, Jeff?&rdquo;</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;You&rsquo;re home.&rdquo; Jeff beams at me. &ldquo;I just pulled you from the purga-void.&rdquo;&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;You?&rdquo; I cross my arms. &ldquo;You pulled me out?&rdquo;</span></p>
            <p><span style={{ fontWeight: '300' }}>My jaw clenches.</span></p>
            <p><span style={{ fontWeight: '300' }}>Jeff&rsquo;s eyes sink to the floor.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>The only sound in the room is the tick - tock of Jeff&rsquo;s cuckoo clock.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;I&rsquo;m a User.&rdquo; Jeff Blurts. &ldquo;I&rsquo;ve been live streaming our game,&rdquo; He stammers, &ldquo;but only to draw attention to the NPC rights movement.&rdquo;&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;</span><em><span style={{ fontWeight: '300' }}>game</span></em><span style={{ fontWeight: '300' }}>?&rdquo; Fury wells in my chest. &ldquo;NPC rights?&rdquo;</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;I want to help NPCs like you, Jenna and Xenia.&rdquo; Jeff continues zealously. &ldquo;I want everyone outside Hyperspear to know how real and special you NPCS are so they&rsquo;ll want to protect you.&rdquo;</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;Us NPCs?&rdquo; My pulse quickens. &ldquo;So you somehow yanked us NPCs out of our world and into some nightmare game,&rdquo; I narrow my eyes, &ldquo;to protect us NPCs?&rdquo;&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;It&rsquo;s complicated.&rdquo; Jeff whines.</span></p>
            <p><span style={{ fontWeight: '300' }}>I give into my fury, grabbing him by his stupid flannel shirt collar and retching him onto the couch.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>Spice Rack leaps up, hackles raised, growling as I stand over him.</span></p>
            <p><span style={{ fontWeight: '300' }}>Eyeing the dog, I release Jeff, and lower my voice.</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;Some AI made a soul for me,&rdquo; My chest heaves, &ldquo;but I guess whoever made you forgot to put one in, huh?&rdquo;</span></p>
            <p><span style={{ fontWeight: '300' }}>Jeff, sits up, scratching Spice Rack under the collar until the dog settles down on the floor.</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;Why did you take us away from Neighborhoods?&rdquo; I cross my arms, standing over him on the sofa. &ldquo;How did you even do it?&rdquo;</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;That Sunflower Farm.&rdquo; He meets my eyes. &ldquo;It&rsquo;s like a warp portal between Mystic Depths and Neighborhoods.&rdquo; Jeff clears his throat. &ldquo;It&rsquo;s a way to bring NPCs you like from one game to the other without having to tell them that they&rsquo;re NPCs.&rdquo;</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;As to why?&rdquo; Jeff pats the sofa. &ldquo;That&rsquo;s more complicated.&rdquo;</span></p>
            <p><span style={{ fontWeight: '300' }}>Grudgingly, I slide onto the couch beside my treacherous host and nod for him to continue.</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;I can&rsquo;t afford more than a studio apartment in my real life.&rdquo;&nbsp; His voice is calm. &ldquo;So when I started playing Neighborhoods,&rdquo; He smiles, &ldquo;I genuinely just wanted to have a little garden, go fishing, maybe share a meal with other folks.&rdquo;&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;okay&hellip;&rdquo; I twirl my finger in a get-to-the-point gesture.</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;And that was all I did for a long time.&rdquo; He shrugs. &ldquo;When I started advertising for the supper club, I attracted a couple Users, but none of them ever came back and the early generation NPCs in Neighborhoods were like walking Speak-and-Spells&ndash; super boring and glitchy, so I didn&rsquo;t invite any of them back, but when I met you, Diego.&rdquo; Jeff settles his hand on my shoulder, &ldquo;I was blown away. You are more thoughtful and generous and kind than anyone I&rsquo;ve met in or outside of Hyperspear.&rdquo;&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>I shrug his hand off. &ldquo;Stop stroking my ego and get to your point.&rdquo;</span></p>
            <p><span style={{ fontWeight: '300' }}>Jeff reaches for a dish of peanut brittle on his coffee table.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;You&rsquo;re snacking right now?&rdquo; I narrow my eyes.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;Sorry.&rdquo; Peanuts and toffee crunch between his molars, &ldquo;I haven&rsquo;t had a chance to eat yet today.&rdquo; He lifts the candy dish towards me and I push it away.</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;Does the food in Hyperspear somehow manifest in your world?&rdquo;&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;Nothing that complicated.&rdquo; He chuckles. &ldquo;I just usually keep my home kitchen stocked to match my kitchen in Neighborhoods.&rdquo;</span></p>
            <p><span style={{ fontWeight: '300' }}>I glower at him.</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;Anyway,&rdquo; Jeff swallows. &ldquo;You&rsquo;re the friend I&rsquo;d been hoping to meet all my life.&rdquo; He sighs. &ldquo;And when I met Jenna and Xenia, I realized that there&rsquo;s a whole generation of NPCs who are every bit as real as me being treated like toys.&rdquo;</span></p>
            <p><span style={{ fontWeight: '300' }}>I squeeze my eyes shut, shaking my head. &ldquo;Get to your point Jeff?&rdquo;&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;So I found an NPC lawyer in a courtroom game in Hyperspear. His name&rsquo;s Amos. Amos helped me to draft a petition to request that all sentient NPCs be granted certain basic rights and protections.&rdquo; Jeff&rsquo;s tone lightens. &ldquo;Our ultimate dream is that one day, you&rsquo;ll be able to have complete freedom to make your life literally whatever you want it to be.&rdquo; He smiles. &ldquo;Amos and I want all Hyperspearans to become the gods of their own world.&rdquo;&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;Good luck with that.&rdquo; I scoff.&nbsp; &ldquo;You just said you couldn&rsquo;t even convince one User to come back to&nbsp; your Supper Club&rdquo;</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;Right.&rdquo; He sighs, &ldquo;But I knew people would be drawn to you, Jenna and Xenia and I wanted everyone in my world to see how real NPCs in Hyperspear are.&rdquo; His brow slopes.&ldquo;I thought if everyone got a chance to know you that they would want to help you like I do!&rdquo;&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;Fine,&rdquo; I clench my jaw, &ldquo;but why did you have to drag us into a freakin&rsquo; adventure game?&rdquo;</span></p>
            <p><span style={{ fontWeight: '300' }}>&nbsp;&ldquo;I started streaming Neighborhoods, but I wasn&rsquo;t getting any views.&rdquo; Jeff ducks his head, &ldquo;so I brought you to the farm.&rdquo; He stammers. &ldquo;I thought we could do some adventuring for a bit and then warp you back to Neighborhoods. Your memories from Mystic Depths get erased when you warp back, so you&rsquo;d still be eligible for Neighborhoods&rdquo;</span></p>
            <p><span style={{ fontWeight: '300' }}>My gut tenses. &ldquo;What do you mean eligible for Neighborhoods?&rdquo;</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;It&rsquo;s something I&rsquo;m hoping to get changed.&rdquo; Jeff squeezes his eyes shut &ldquo;But in order to maintain,&rdquo; Jeff makes air quotes, &ldquo;authenticity&rdquo; he drops his hands, &ldquo;The AI only uses first game NPCs in Neighborhoods,&rdquo; He nods at me, &ldquo;and Users aren&rsquo;t allowed to out Hyperspear to NPCs&rdquo;.</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;Okay well, it&rsquo;s out to me.&rdquo; I gesture at myself. &ldquo;and I&rsquo;m sitting here with you right now.&rdquo;</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;I exploited a vulnerability in the system to get you here.&rdquo; Jeff glances at his clock,&rdquo; the AI runs a check every twelve hours,&rdquo; he continues, &ldquo; and when the AI registers that we&rsquo;ve violated a rule.&rdquo; His brow furrows. &ldquo;then we&rsquo;ll be banned from Neighborhoods for life.&rdquo; He cringes, &ldquo;and for NPCs it&rsquo;s a direct ticket to the purgavoid.&rdquo;</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;I&rdquo;m going to get yanked back into the purgavoid?&rdquo; I snarl. &ldquo;And I can never go home?&rdquo;</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;We&rsquo;ve been getting hundreds of thousands of views a day.&rdquo; Jeff enthuses. &rdquo;Amos really thinks we have a shot at getting Unfettered Arts to implement some actual rights and protections for NPCs in Hyperspear.&rdquo;</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;So,&rdquo; I rub my temples, &ldquo;if you and Amos win some trial,&rdquo; I raise my eyes to Jeff&rsquo;s, &ldquo;</span><em><span style={{ fontWeight: '300' }}>then</span></em><span style={{ fontWeight: '300' }}> I can go home to Carmen and Luke?&rdquo;</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;Weelll,&rdquo; Jeff rises from the sofa. &ldquo;It&rsquo;s not that simple.&rdquo;</span></p>
            <p><span style={{ fontWeight: '300' }}>I throw my hands in the air as Jeff disappears into the kitchen, returning with two steaming mugs of mint tea.</span></p>
            <p><span style={{ fontWeight: '300' }}>Setting a mug in front of each of us, he settles back onto the couch beside me. &ldquo;Hyperspear has basically mind glitched the entire world.&rdquo; He starts.</span></p>
            <p><span style={{ fontWeight: '300' }}>I sip tea while Jeff explains how religious leaders, infuriated by the insinuation that a game console is manufacturing souls, and global military powers, increasingly fearful of the unequaled power of Hyperspear&rsquo;s AI, have united in calling for the immediate shutdown and destruction of all of Hyperspear&rsquo;s infrastructure.</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;On the other hand,&rdquo; Jeff sips his tea. &ldquo;Enthusiastic Users and Scientists, praising Hyperspear&rsquo;s ability to render predictive models and conduct highly controlled virtual experiments, along with a handful of NPC rights activists are fighting to preserve the continued operation of Hyperspear in its current form.&rdquo;</span></p>
            <p><span style={{ fontWeight: '300' }}>I let my head fall back on the couch cushion, as I gaze at Jeff&rsquo;s dusty pop-corn ceiling. </span><em><span style={{ fontWeight: '300' }}>I feel like my home planet has just been death starred.</span></em></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;All I want is to go back to my life with Carmen and Luke,&rdquo; Sitting up, I bore my eyes into Jeff&rsquo;s. &ldquo;So if you can make that happen, maybe I can forgive you.&rdquo;</span><span style={{ fontWeight: '300' }}><br /></span> <span style={{ fontWeight: '300' }}>&ldquo;I hope that I can.&rdquo; Rising, Jeff takes his empty tea cup into the kitchen. </span><span style={{ fontWeight: '300' }}><br /></span> <span style={{ fontWeight: '300' }}>I hear him set his mug in the sink then the back patio slider glides open and two pairs of footsteps cross the kitchen.&nbsp;&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>My heart surges as a familiar scent of flowers and fruit wafts towards me. And then I see Carmen, grinning from ear to ear as she follows Jeff into the living room.</span></p>
            <p><span style={{ fontWeight: '300' }}>Springing to my feet, I&rsquo;m poised to sweep her into my arms, but as she steps into the light, I&rsquo;m seized with revulsion.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>Carmen looks almost as I remember her, but somehow there are a million little things that are off.</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;Diggy!&rdquo; She rushes towards me, her right arm pinned at her side, her left open wide to embrace me.</span><span style={{ fontWeight: '300' }}><br /></span> <span style={{ fontWeight: '300' }}>I jut out my arm, halting her. &ldquo;You&rsquo;re not Carmen.&rdquo;</span></p>
            <ol start="16">
                <li><strong>Filename: &lsquo;Carmen Chameleon&rsquo;,</strong></li>
            </ol>
            <p><strong>Timestamp: 2042-08-30T17:03:12:PST,</strong></p>
            <p><strong>Details: &lsquo;Carmen Reynolds, Fremont-CA, Neighborhoods&rsquo;,</strong><span style={{ fontWeight: '300' }}>&nbsp;</span></p>
            <p><strong>U-ID: 051e8c8b-cd2e-44d5-874a-8a9e29aca4d6,</strong></p>
            <p><strong>Transcript:&nbsp;</strong></p>
            <p><br /><br /></p>
            <p><span style={{ fontWeight: '300' }}>Pulling away from the Fremont farmhouse, I glance in my rearview mirror as Diego and Jeff disappear in a cloud of dust behind me.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>Vicky&rsquo;s tires crunch gravel as I ease her past the farm&rsquo;s massive sunflower field. When I hit the towering Eucalyptus at the main road, I lean forward to turn up the radio, but as I clasp for the dial, I&rsquo;m jolted into the reality beyond Hyperspear by the sound of my home office door retching open and the nob smashing, with a reverberating thud against the matte concrete wall.</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;I just saw you with your hyper-hubby online!&rdquo; My husband&rsquo;s voice echoes around our home-office as he topples my chair sideways, sending me crashing to the floor.</span></p>
            <p><span style={{ fontWeight: '300' }}>My right wrist explodes with pain as it breaks my fall onto the cold concrete floor.</span></p>
            <p><span style={{ fontWeight: '300' }}>Arm throbbing, I blindly scramble away from my seat, struggling in vain to free myself from my POV helmet, so I can find an escape route, but something is jamming the motorcycle-style helmet in place.&nbsp;&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>I feel the warmth of Cole&rsquo;s body behind me.</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;Get away from me&rdquo; I gasp, my arm throbbing with pain, as I continue to fruitlessly pry at my suffocating helmet.</span></p>
            <p><span style={{ fontWeight: '300' }}>Suddenly, Cole steps away.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>The helmet flies off, crashing to the ground and I hear it spin away across the floor as my eyes adjust to the dim windowless room.</span></p>
            <p><span style={{ fontWeight: '300' }}>The stench of stale alcohol smacks me in the face as Cole approaches.</span></p>
            <p><span style={{ fontWeight: '300' }}>Diving under my glass desk, I crawl towards the door, but as I ready myself to sprint through it, Cole&nbsp; jerks my champagne-pink laptop from the desk above me and jumps in front of me, blocking my path.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;Delete your account&rdquo; He pants, extending the laptop towards me.</span></p>
            <p>&nbsp;</p>
            <p><strong>2042-08-31T16:02:00:PST|051e8c8b-cd2e-44d5-874a-8a9e29aca4d6|&rsquo;Jeff\&rsquo;s living room and Carmen\&rsquo;s brother&rsquo;s cabin&rsquo;</strong></p>
            <p><span style={{ fontWeight: '300' }}>With my left haptic glove, I adjust the icepack on my right wrist, seemingly un-broken to Diego in Hyperspear, but purple with bruises and searing with pain as I pace the dirt floor of my brother&rsquo;s dark, hunting cabin.&nbsp;</span></p>
            <p>&nbsp;</p>
            <p><span style={{ fontWeight: '300' }}>In Hyperspear, I Creep my avatar&rsquo;s gaze up to Diego&rsquo;s, muttering. &ldquo;I had to make a new user the other day, but I guess I didn&rsquo;t make my avatar exactly the same.&rdquo;</span></p>
            <p><span style={{ fontWeight: '300' }}>Diego barely lifts his eyes to mine as pathetic apologies spill from my lips, dripping with desperate pleas to mend what I&rsquo;ve broken between us.</span></p>
            <p><span style={{ fontWeight: '300' }}>Jutting out his hand to halt my babbling, Diego sucks in his breath.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;So you and I,&rdquo; he swivels his finger between us. &ldquo;We were never really life partners, huh?&rdquo; He sneers. &ldquo;I&rsquo;m just some game for you to play with when you&rsquo;re bored of the world where you really live, huh?&rdquo; He bugs his eyes at me.</span></p>
            <p><span style={{ fontWeight: '300' }}>His glare is like a lightsaber cauterizing&nbsp; my heart.</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;You don&rsquo;t understand,&rdquo; My voice quivers. &ldquo;How trapped and alone I felt before I met you.&rdquo; Wincing, I reach for Diego&rsquo;s hand, but he evades me.</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;My husband Cole is.&rdquo; I trail off, a spit bubble forming in my throat.</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;Hyperspear is the only place I&rsquo;m free.&rdquo; My eyes burn.</span></p>
            <p><span style={{ fontWeight: '300' }}>As my tears dampen the walls of my POV helmet, they streak down my face in Hyperspear.</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;Our love is real.&rdquo; I plead. &ldquo;You are so real Diego.&rdquo;</span></p>
            <p><span style={{ fontWeight: '300' }}>Kneeling on the floor beside Jeff&rsquo;s living room couch, I reach for Diego&rsquo;s hand, desperate to interlace my fingers with his, anchor myself to something familiar and warm, feel some protection against the helplessness of my life, but Diego turns away.</span></p>
            <p><span style={{ fontWeight: '300' }}>Crumpling at his feet, I sob. &ldquo;I&rsquo;m so sorry Diego. So so sorry.&rdquo;&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>My POV sprouts finger-like nubs and I feel the familiar warmth of Diego&rsquo;s hand combing through my hair.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>The moment of peace is interrupted by Spice Rack, barking frantically as tires squeal into Jeff&rsquo;s front yard.</span></p>
            <p><span style={{ fontWeight: '300' }}>Bolting to my feet, I lean over the couch and peel back the living room curtain.</span></p>
            <p><span style={{ fontWeight: '300' }}>Diego falls in line beside me, as I peer out at an old bronze Ford Bronco, doing doughnuts through Jeff&rsquo;s front garden.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>As the back sliding door whooshes open, Jeff and Spice Rack run through the living room, leaping onto the couch beside us.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>A dark-clad ninja woman leans halfway out the driver's side window. &ldquo;How do you like having </span><em><span style={{ fontWeight: '300' }}>your life</span></em><span style={{ fontWeight: '300' }}> glitched with </span><em><span style={{ fontWeight: '300' }}>Jeff</span></em><span style={{ fontWeight: '300' }}>?&rdquo; She maniacally shrieks from behind the wheel, her tires kicking up mud and plant debris as the Bronco&rsquo;s rear bumper smashes into Jeff&rsquo;s Lemon trees and spins away, leaving gnarled branches and splinters where those darling lemon lollipops had just stood.</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;Track down that hyperfluencer Cheryl.&rdquo; She hollers. &ldquo;And have my Mystic Depths loot back for me at Myka&rsquo;s dog camp by 23:00 tomorrow, UTC time.&rdquo; She screams. &ldquo;Or this little NPC is going to servant squire for me until I feel repaid.&rdquo; The woman gestures to a frail figure in her back seat.</span></p>
            <p><span style={{ fontWeight: '300' }}>My battered heart skips a beat as I recognize Luke, seated behind the driver in the Bronco.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>Mud kicks from her tires as she peels her Bronco out of Jeff's front yard and disappears down his street.&nbsp;</span></p>
            <p><br /><br /></p>
            <ol start="17">
                <li><strong>Filename:&nbsp; &lsquo;Jenna\&rsquo;s Brand Of Affection&rsquo;,</strong></li>
            </ol>
            <p><strong>Timestamp: 2042-09-01T06:47:32:00Z,</strong></p>
            <p><strong>Details: &lsquo;Jenna Carson, Myka\&rsquo;s Training Camp, Mystic Depths&rsquo;,</strong></p>
            <p><strong>H-ID: 28d0086c-da60-44e5-9c9b-54abfbe4154c,</strong></p>
            <p><strong>Transcript:</strong></p>
            <p>&nbsp;</p>
            <p><span style={{ fontWeight: '300' }}>My velvet hood falls away from my face as I hoist my black leather boots over the aluminum frame of the military cot I&rsquo;ve been trying to sleep on.</span></p>
            <p><em><span style={{ fontWeight: '300' }}>This cot may actually be less comfortable than the wall cuffs in the dungeon</span></em><span style={{ fontWeight: '300' }}>.</span></p>
            <p><span style={{ fontWeight: '300' }}>Hugging my velvet robes around me, my eyes drift to a hissing propane lantern, hanging from the tent&rsquo;s center post, slowly burning through its last filament.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>Beneath the lantern, dozens of Dobermans and German Shepherds stretch and yawn, licking themselves, pawing at neighboring friends and thumping their tails. Every one of them is awake.</span></p>
            <p><span style={{ fontWeight: '300' }}>My joints pop as I trudge over to the dog pack.&nbsp;</span></p>
            <p><em><span style={{ fontWeight: '300' }}>At least it&rsquo;s warmer over here.</span></em></p>
            <p><span style={{ fontWeight: '300' }}>Sinking down on all fours, I riggle my way into the cuddle puddle.</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;Hey Jenna,&rdquo; Xenia shout-whispers from the farthest corner of the tent. &ldquo;What are you doing?&rdquo;&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;Don&rsquo;t worry about it.&rdquo; I pout, pulling my hood over my face. &ldquo;I&rsquo;m not done being mad at you, so just stay in your corner.&rdquo;</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;C&rsquo;mon Jenna, I did a glitched up thing.&rdquo; Xenias voice grows closer. &ldquo;And I am deeply sorry,&rdquo; She clears her throat. &ldquo;From the depths of the soul&ndash;,&rdquo; She chuckles dryly. &ldquo;That some unfeeling AI manufactured for me.&rdquo;</span></p>
            <p><span style={{ fontWeight: '300' }}>A dog yelps. &ldquo;Sorry boy.&rdquo;&nbsp; Xenia coos, close enough now for me to make out the silhouette of her serpentine robes.</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;Seriously.&rdquo; She crouches beside me, speaking at her normal volume now.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;I know you would never do that to me.&rdquo; She lowers her hand to my shoulder. &ldquo;And I promise you, I will never make another decision for you,&rdquo; She pulls me into a side hug. &ldquo;ever.&rdquo;&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>The coil of anger in my chest unwinds and I lean in.</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;I forgive you.&rdquo; I rock her towards me. &ldquo;This place is too glitched to handle alone.&rdquo;</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;Anyway,&rdquo; a nearby doberman stretches, laying its head in my lap. &ldquo;It turns out, I can still only control what the world throws at me as much as I ever could,&rdquo; I sigh, idly stroking the doberman&rsquo;s cropped ears. &ldquo;So I guess I should just steer towards what feels real and enjoy the bright spots along the journey.&rdquo; I grin at Xenia. &ldquo;You&rsquo;re a real brightspot, friend.&rdquo;</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;You dork,&rdquo; Xenia throws herself on top of me, toppling us both sideways. &ldquo;I&rsquo;ve been telling you that for years.&rdquo;</span></p>
            <p><span style={{ fontWeight: '300' }}>Ruffling my hair, Xenia pushes herself upright. &ldquo;I really don&rsquo;t think sleep is a thing in this game.&rdquo;&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>She rises to her feet. &ldquo;Want to go see if Cheryl left us any marsh&ndash;&rdquo;</span></p>
            <p><span style={{ fontWeight: '300' }}>All three dozen dogs in the tent bolt upright.</span></p>
            <p><span style={{ fontWeight: '300' }}>Glancing at my peripheral map, I see six blue dots closing in on our tent.</span></p>
            <p><span style={{ fontWeight: '300' }}>Oh </span><em><span style={{ fontWeight: '300' }}>Glitch! Oh Glitch! Oh Glitch! Someone&rsquo;s out there!</span></em></p>
            <p><span style={{ fontWeight: '300' }}>Several dogs howl in the distance, and every pup inside our tent springing to its feet, barking belligerently.</span></p>
            <p><span style={{ fontWeight: '300' }}>In unison, Xenia and I blink in and out of the game menu, emerging, scepters illuminated, ready for battle.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>But as the tent flap zips open, my heart supernovas with relief and joy.</span></p>
            <p><span style={{ fontWeight: '300' }}>Pajama is struggling against his leash as he drags chain-mail-night-shirt Diego into the tent behind him.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>Diego unclips Pajama and my sweet mutty buddy throws his paws up on my shoulders lapping my face while Carmen, who is covered in a living body suit of vines, and mosses, ducks inside followed by Robin-hood-in-leather Jeff and Spice Rack.</span></p>
            <p><span style={{ fontWeight: '300' }}>Pajama lets out a joyful bark, lowering himself from my shoulders and my breath catches at the sight of Max&rsquo;s midnight head peeking into the tent.</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;Myka!&rdquo; I bound towards the tent flap.</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;No actually,&rdquo; Max huffs as he prances inside, &ldquo;I was hoping that Myka would be here with you young ladies.&rdquo; Max swivels his head around the tent. &ldquo;He and I got separated.&rdquo;&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>My shoulders slump as I check my peripheral map. There are no more blue dots outside.</span></p>
            <p><span style={{ fontWeight: '300' }}>When I refocus on the tent, Xenia, in the center of the, now snarling dog pack, is shouting at Jeff, pointing her scepter at him.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;You groomer&rdquo;, She chides. &ldquo;You designed me to be your young bride or something? Didn&rsquo;t you?&rdquo;</span></p>
            <p><span style={{ fontWeight: '300' }}>&nbsp;&ldquo;No.&rdquo; Jeff puts up his hands backing away from the serpentine sorceress . &ldquo;I didn&rsquo;t make you.&rdquo; He glances back at me. &ldquo;I didn&rsquo;t make any of you&rdquo; he shakes his head, &ldquo;You&rsquo;re all AI generated as far as I know.&rdquo;</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;What&rsquo;s going on?&rdquo; I narrow my eyes at Jeff.</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;Let&rsquo;s all have a quick huddle.&rdquo; Jeff beckons.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>Wandering across the room, I seat myself on a cot between Xenia and Max.</span></p>
            <p><span style={{ fontWeight: '300' }}>Carmen drags my cot from last night closer to Jeff and pats the space next to her for Diego to sit, but he walks past her, seating himself instead on an empty cot beside Xenia and me.</span></p>
            <p><span style={{ fontWeight: '300' }}>I exchange a baffled glance with Xenia.</span></p>
            <p><span style={{ fontWeight: '300' }}>Across the room from us, Jeff throws a hand up in the air and shouts &ldquo; Hi everyone my name is Jeff and I&rsquo;m a User.&rdquo;&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>My stomach clenches.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>Jeff grips his archer hat. &ldquo;And I am the one who transferred you all to this game.&rdquo; </span><span style={{ fontWeight: '300' }}><br /></span> <span style={{ fontWeight: '300' }}>&ldquo;I knew it!&rdquo; Xenia Scoffs.</span></p>
            <p><span style={{ fontWeight: '300' }}>Carmen rises to her feet. &ldquo;I&rsquo;m a User too.&rdquo; She frowns contritely at Xenia and I as she trudges over to stand beside Jeff.</span></p>
            <p><span style={{ fontWeight: '300' }}>My jaw drops.</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;So am I.&rdquo; Max, leaps up on the cot between Xenia and I, tucking his tail between his legs .</span></p>
            <p><span style={{ fontWeight: '300' }}>My surprise turns to revulsion as my mind floods with memories of Max eagerly sniffing my crotch and butt.</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;Gross you crotch sniffer!&rdquo;&nbsp; I jump off the cot, pointing my staff at the Black Shepard.</span></p>
            <p><span style={{ fontWeight: '300' }}>Diego narrows his eyes at Max. &ldquo;Go you sicko!&rdquo;&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;Yeah,&rdquo; Jeff chimes in. &ldquo;Log out, you butt sniffer.&rdquo;&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;I know.&rdquo; Max dips his head shamefully, flattening his ears.&nbsp; &ldquo;I&rsquo;m disgusting.&rdquo;&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;I&rsquo;m not saying we&rsquo;re saints.&rdquo; Carmen laughs awkwardly. &ldquo;But at least we weren&rsquo;t POVing crotch smells am I right.&rdquo; Carmen elbows Jeff.</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;You&rsquo;re a real saint Carmen.&rdquo; Diego&rsquo;s voice is cold.</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;Please don&rsquo;t tell Myka&rdquo; Max pleads as he fades from existence.</span></p>
            <p><span style={{ fontWeight: '300' }}>Resting a supportive hand on Carmens shoulder, Jeff turns to Xenia and I. &ldquo;Let Carmen and I explain our side of things.&rdquo;&nbsp;</span></p>
            <p>&nbsp;</p>
            <p><strong>2042-09-01T10:46:17:00Z|28d0086c-da60-44e5-9c9b-54abfbe4154c|&lsquo;Mykas Command Tent&rsquo;</strong></p>
            <p>&nbsp;</p>
            <p><span style={{ fontWeight: '300' }}>My brain is exhausted by the time Jeff and Carmen finish giving us their ten thousand foot view of geopolitics in the world outside Hyperspear.</span></p>
            <p><em><span style={{ fontWeight: '300' }}>People want to unplug Hyperspear &ndash; destroy our world? Would we all just die in that instant?</span></em></p>
            <p><span style={{ fontWeight: '300' }}>&nbsp;Xenia&rsquo;s angry tone stirs me from my stupor. &ldquo;What will happen if you get what you want and NPCs get control of their lives in Hyperspear?&rdquo;</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;My hope is that you&rsquo;ll all be able to choose to do,&rdquo; He throws his arms wide, &ldquo;whatever you want with your lives.&rdquo;</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;We&rsquo;ll always rely on your world to keep our world powered on.&rdquo; I sigh &ldquo;How am I ever supposed to relax?&rdquo;&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;Exactly&rdquo; Diego bores his eyes into Jeff. &ldquo;How can any of us ever feel safe or free when we know we exist inside of a children&rsquo;s game?&rdquo;&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>Jeff laughs sardonically. &ldquo;Do you think I get to feel free or safe in my world?&rdquo;&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;I think you get to play god with the likes of me.&rdquo; Xenia gibes.</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;Just like you played god with Jenna?&rdquo; Jeff scoffs.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;Whoa!&rdquo; I jut out my palm to halt Jeff. &ldquo;First of all.&rdquo; I hold up my index finger. &ldquo; Xenia and I worked things out already while you were off in Neighborhoods.&rdquo;&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;Second,&rdquo; I put up my next finger, &ldquo;What you did is like a bajillion times worse than what Xenia did.&rdquo;</span><span style={{ fontWeight: '300' }}><br /></span> <span style={{ fontWeight: '300' }}>&ldquo;Yeah, it&rsquo;s insulting,&rdquo; Xenia snaps. &ldquo;that you would even compare the two situations.&rdquo;</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;I regret it.&rdquo; Jeff slumps down on the army cot behind him. &ldquo;I should never have warped any of you to another game without your consent.&rdquo;</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;Look&rdquo;, Diego, steps&nbsp; towards Xenia and I.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;I&rsquo;m madder at Jeff than anyone here.&rdquo; Diego&rsquo;s nose whistles as he inhales. &ldquo;but my son has been kidnapped and I need your help to get him back.&rdquo;</span><span style={{ fontWeight: '300' }}><br /></span> <span style={{ fontWeight: '300' }}>&ldquo;Luke got Kidnapped.&rdquo; I drop my eyes.</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;How can we help?&rdquo; Xenia eyes Diego with concern.</span><span style={{ fontWeight: '300' }}><br /></span> <span style={{ fontWeight: '300' }}>&ldquo;Jenna,&rdquo; Diego tips his head at me pensively. &ldquo; Do you know how to get a hold of Myka?&rdquo;</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;Uhm.&rdquo; my face flushes. &ldquo;Maybe.&rdquo;&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>Retracting my left sleeve, I reveal my scabbed arm. &ldquo;2c595ced-b305-4430-bd19-c8cd2f125522,&rdquo; is emblazoned between my elbow and wrist.</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;Myka has a set of cattle brands with his Hyperspear ID.&rdquo; I wince, poking at my crusty skin. &ldquo;I found them yesterday,&rdquo; my throat catches. &ldquo;But, I don&rsquo;t even know if it's useful.&rdquo;</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;Really, Jenna?&rdquo; Xenia scoffs. &ldquo;You branded yourself with his ID?&rdquo;</span></p>
            <p><span style={{ fontWeight: '300' }}>Carmen&rsquo;s eyes go wide as she steps towards me, &ldquo;let me get some screenshots.&rdquo;</span></p>
            <p><span style={{ fontWeight: '300' }}>She lowers her face directly above my arm, blinking like she&rsquo;s been pepper-sprayed.</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;I work part time tech support for Hyperspear.&rdquo; She gives her eyelids one final blink and straightens up. &ldquo;I&rsquo;ll see if I can track Myka down.&rdquo;</span></p>
            <p><span style={{ fontWeight: '300' }}>Carmen fades out of the game.</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;Don&rsquo;t you think you could have just made a leather bracelet or something?&rdquo; Jeff shakes his head at me, all dad-like.</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;You literally took us out of our lives and brought us to hell.&rdquo; I clench my jaw as I glare at Jeff, &ldquo;So glitch off.&rdquo;</span></p>
            <p>&nbsp;</p>
            <p><strong>2042-09-01T12:29:17:00Z|28d0086c-da60-44e5-9c9b-54abfbe4154c|&lsquo;Mykas Command Tent&rsquo;</strong></p>
            <p>&nbsp;</p>
            <p><span style={{ fontWeight: '300' }}>&nbsp;Vines and grasses rustle around Carmen as she reappears. &ldquo;I chatted with Myka,&rdquo; she pants. &ldquo;He says he thinks he can get Cheryl to give us Darcy&rsquo;s loot back.&rdquo; She beams at Diego.</span></p>
            <p><span style={{ fontWeight: '300' }}>Diego smiles back weakly.</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;Apparently Cheryl&rsquo;s a rally cross racing fanatic,&rdquo; Carmen shrugs, &ldquo;so Myka is going to challenge her to some sort of&nbsp; car obstacle race.&rdquo;&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;In the meantime,&rdquo; Carmen frowns. &ldquo;He suggests we go to the track and start practicing.&rdquo; Her expression is worried. &ldquo;He said we&rsquo;ll need a crossbower and a driver.&rdquo;&nbsp;</span></p>
            <p>&nbsp;</p>
            <ol start="18">
                <li><strong>Filename: &lsquo;Xenia Gets Racey&rsquo;,</strong></li>
            </ol>
            <p><strong>Timestamp: 2042-09-01T18:21:45:00Z,</strong></p>
            <p><strong>Details: &lsquo;Xenia Chloros, Rallycross Race Track: Mystic Depths&rsquo;,&nbsp;</strong></p>
            <p><strong>H-ID: 1feeffe-0067-4226-9c41-313509217b49,</strong></p>
            <p><strong>Transcript:</strong></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;We got this!&rdquo; Jeff effuses as he steps from the passenger side of our classic Ford Bronco, bronze paint shimmering in the midday sun.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>Tossing his medieval crossbow on the seat, he grabs his bycocket hat off the dashboard. &ldquo; Team Xen-Jeff now holds today&rsquo;s course record,&rdquo; He grins, throwing his hand up for a high five.</span></p>
            <p><span style={{ fontWeight: '300' }}>There&rsquo;s a smattering of applause from Jenna, Diego and Carmen, who are clustered around a picnic table, beneath a giant sequoia beside the track.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;Xen-Jeff?&rdquo; I scoff, &ldquo;I&rsquo;m not interested in co-hyphenating with you, Jeff.&rdquo; My serpentine robes swish as I turn away.</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;I&rsquo;m impressed.&rdquo; Diego jogs over, high fiving Jeff&rsquo;s still-raised hand.</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;Thanks Diego.&rdquo; Jeff&rsquo;s face lights up. &ldquo;We&rsquo;re going to bring Luke home!&rdquo;</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;It&rsquo;s a shame you&rsquo;re not a better shot Diego.&rdquo; I smirk at Jeff as I clap Diego on the back of his sunwarmed chainmail. &ldquo;You&rsquo;ve got more heart.&rdquo;</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;Oofff.&rdquo; Jeff feigns a punch to the gut. &ldquo;Well I&rsquo;m glad to be on </span><em><span style={{ fontWeight: '300' }}>your</span></em><span style={{ fontWeight: '300' }}> team Xenia.&rdquo;&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>I&rsquo;m narrowing my eyes at Jeff when my ears perk to the sound of a car engine in the distance.</span></p>
            <p><span style={{ fontWeight: '300' }}>Shifting my focus to my peripheral map, I see a cluster of three blue dots whizzing towards us.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>When the dots are passing through the racetrack&rsquo;s front gates, I minimize my map. A white Subaru WRX, haloed in a cloud of red dust, engine thrumming, is speeding onto the dirt track a couple dozen yards from where we&rsquo;re gathered.</span></p>
            <p><span style={{ fontWeight: '300' }}>Gravel and mud pelt us as the WRX drifts in a tight orbit around our Bronco, skidding to a halt, mere inches from the front bumper.</span></p>
            <p><span style={{ fontWeight: '300' }}>The driver&rsquo;s side door of the Subaru&rsquo;s swings open and Cheryl emerges, prying off her hot pink racing helmet to reveal her usual set of over-ear headphones, and an unsettlingly cocky grin. &ldquo;You losers ready to lose some more?&rdquo; She steps towards Jeff.</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;Ohhhh what a witty inss&hellip;&rdquo; I trail off as the passenger door of the Subaru creaks open and a tricked out tactical crossbow floats out. The bow, suspended in mid-air, moves closer and I gawk at the camouflaged figure of a dusty red octopus propelling itself across the dirt towards Cheryl.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>The Octopus suddenly shifts from red to a neon tie dye pattern, which&nbsp; it animates, like a light show, radiating neon waves of color from its head to the tip of every tentacle.</span></p>
            <p><span style={{ fontWeight: '300' }}>I&rsquo;m stupefied.</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;This&rsquo;s my boy, Sludge.&rdquo; Cheryl nods at her octo-friend.</span></p>
            <p><span style={{ fontWeight: '300' }}>Sludge fades to purple as he juts out a pair of firm leathery tentacles, ensnaring my and Jeff&rsquo;s wrists and giving each a single hard shake.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;Weak.&rdquo; Sludge croaks as he releases us and conveys himself back into the WRX&rsquo;s passenger seat.</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;Nice to meet you too.&rdquo; I mutter, sneaking a whiff at a red suction mark on my palm.</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;Whatcha doin&rsquo; there Xenia,&rdquo; ranger-clad surfer bro Myka grins as he emerges from the Subaru&rsquo;s backseat.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>Before I can answer, Jenna zooms across the track, crimson robes trailing behind, and throws herself at Myka toppeling him back into the Subaru.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>Rolling my eyes, I turn away.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>Over by the picnic table, Jeff is idly stroking Spice Rack&rsquo;s ears and intently discussing something with Cherly. Catching sight of me, he straightens and wavies.</span></p>
            <p><span style={{ fontWeight: '300' }}>I waive back, but with just a single finger raised.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>Ignoring me, Jeff climbs atop the picnic table. &ldquo;Gather round folks.&rdquo; He waives his arms overhead, beckoning us to join him under the tree.&nbsp;&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>&nbsp;I skulk along behind as everyone else hustles towards the table.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;Here are the terms of the race.&rdquo; Jeff&rsquo;s voice takes the cadence of a boxing announcer, &ldquo;This is a no holds bard rallycross, crossbow race.&rdquo;&nbsp;&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;One lap of the track.&rdquo; Jeff holds up his index finger. &ldquo;Before you cross the finish line. Your crossbower will need to hit at least five,&rdquo; He flashes his open palm, &ldquo;of the course&rsquo;s ten targets.&rdquo; Jeff holds up his other palm, &ldquo;And each crossbower can use only ten bolts.&rdquo; He fans his fingers.</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;If team Xen-Jeff wins the race.&rdquo; Jeff winks at me. &ldquo;Cheryl will give us all of Darcy&rsquo;s loot.&rdquo;</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;And if I win.&rdquo; Cheryl steps up onto the table, shoving Jeff off. &ldquo;Sorry.&rdquo; She sneers. &ldquo;</span><em><span style={{ fontWeight: '300' }}>When</span></em> <em><span style={{ fontWeight: '300' }}>we</span></em><span style={{ fontWeight: '300' }}> win.&rdquo; She shoots a finger gun at Sludge who returns the gesture. &ldquo;We get Jeff&rsquo;s house in Neighborhoods.&rdquo;</span></p>
            <p><span style={{ fontWeight: '300' }}>My eyes snap to Jeff.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>His face is stoic.</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;You twerps ready to eat my dust.&rdquo; Cheryl jams on her pink helmet as she jogs towards the Subaru.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;No way.&rdquo; Jeff trudges to the passenger side of the Bronco. &ldquo;We&rsquo;re going to Cher-roll you!&rdquo;&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;Yummy&rdquo; I grin at Jeff. &ldquo;Cher rolls are my favorite food&rdquo;. Climbing behind the wheel of the Bronco, I tighten my racing harness over my serpentine robes.</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;You really put your house up as a bet?&rdquo; I turn to Jeff.</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;Cheryl lives on the other side of my block in Neighborhoods.&rdquo; He shrugs. &ldquo;It's the only thing we could offer that she wants.&rdquo;</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;Well, Jefe,&rdquo; I turn my key in the ignition and he Bronco rumbles to life, &ldquo;that&rsquo;s actually pretty decent of you.&rdquo;</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;To be honest.&rdquo; Jeff&nbsp; removes his bycocket hat, tossing it on the dash in front of him. &ldquo;I&rsquo;m banned from Neighborhoods anyway,&rdquo; He pulls on a black racing helmet &ldquo;The AI cited me for educating NPCs inside a Spoiler-Free Zone.&rdquo; He shrugs as he grabs his crossbow from the floor in front of him, &ldquo;So I have ninety days to sell my house there or the AI will repossess it anyway.&rdquo;</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;Oh no.&rdquo; I ease the Bronco into first gear. &ldquo;No more wontcha-be-my-neighboring for you Jefe.&rdquo;</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;You got this Xenia!&rdquo; Jenna cheers from atop Myka&rsquo;s shoulders, her scarlet robes rustling&nbsp; in the breeze as she waves gleefully.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>I shoot her a thumbs up as I ease the Bronco over the starting line.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>Cheryl creeps in line with me, her decked-out WRX humming hungrily. Beside her, Sludge, barely visible through his octo-camo, dangles by one tentacle from the Subaru&rsquo;s passenger grab handle, his crossbow loaded and ready.</span></p>
            <p><span style={{ fontWeight: '300' }}>.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>A giant, semi-translucent, checkered flag materializes in front of our cars and I flick off the cover of my steering wheel&rsquo;s nitrous button, exchanging a nervous glance with Jeff.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>A new heads up display appears in bold at the top of my field of view:</span></p>
            <p><strong>Bolts remaining: 10 | Targets remaining: 10 | Targets needed: 5</strong></p>
            <p><span style={{ fontWeight: '300' }}>The flag drops, and I hesitate, letting Cheryl surge ahead before I thrust my foot down on the gas and thumb punch the nitrous button.</span></p>
            <p><span style={{ fontWeight: '300' }}>When Bronco surges forward, I veer towards Cheryl&rsquo;s inside, back wheel, tapping my brakes as we clip her Subaru.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;Nice pit maneuver!&rdquo; Jeff beams as the WRX spirals aside and we zoom into an early lead.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>Hauling down the dirt straightaway I see the first target, a glistening red carnival-bell floating in mid air, ten feet above the center of the track.</span></p>
            <p><span style={{ fontWeight: '300' }}>I hear Cheryl lurch into reverse, then peel out behind me as Jeff leans out the passenger window, peering down the scope of his bow.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>Steadying the wheel, I glance back. The WRX is just two car lengths behind and Sludge, all white now, is on the roof, his crossbow trained on the target.</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;Whuppisssh&rdquo; a feathered bolt soars through the air, nailing the bell with a resounding CLANG.</span></p>
            <p><span style={{ fontWeight: '300' }}>Holographic fireworks erupt from the target and my heads up display updates:&nbsp;</span></p>
            <p><strong>Bolts remaining: 9 | Targets remaining: 9 |&nbsp; Targets needed: 4</strong></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;Nice one Je...&rdquo; My congratulations are drowned out by another clang and more fireworks.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>The WRX is less than a car length back as we veer towards the canyon portion of the racecourse.</span></p>
            <p><span style={{ fontWeight: '300' }}>The Bronco&rsquo;s wide chassis makes it easy for me to box out Cheryl as we zip through the first few turns of the narrow canyon.</span></p>
            <p><span style={{ fontWeight: '300' }}>Cheryl&rsquo;s riding my bumper when the next&nbsp; target bell comes into view.</span></p>
            <p><span style={{ fontWeight: '300' }}>Bow at the ready, Jeff leans out the passenger window, but, before he can set up his shot a bolt bursts through his throat, spattering the bell with blood as fireworks cascade down.</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;Bullseye!&rdquo; Sludge cackles from behind.</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;Nononono&rdquo; I scream in horror as Jeff&rsquo;s body blinks from existence. &ldquo;Where did he go?&rdquo;</span></p>
            <p><strong>Bolts remaining: 9 | Targets remaining: 8 |&nbsp; Targets needed: 4&nbsp;</strong></p>
            <p><span style={{ fontWeight: '300' }}>I manage to keep an eye on the road and a foot glued to the gas pedal, as my fingers probe beside my seat, grasping for my scepter.</span></p>
            <p><em><span style={{ fontWeight: '300' }}>Maybe I can somehow magic Diego into the car to take over.</span></em></p>
            <p><span style={{ fontWeight: '300' }}>My fingers close around the cold metal staff and my heart jolts as I glance towards the passenger seat.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>A pristine, race helmeted Jeff, crossbow in hand is rematerializing beside me.</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;Oh thank god.&rdquo; I beam at his translucent figure.</span></p>
            <p><span style={{ fontWeight: '300' }}>My reverie is cut short by the sight of the WRX creeping up beside me.</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;Not today!&rdquo; Gritting my teeth, I jerk my wheel towards Cheryl&rsquo;s Subaru, but I&rsquo;m too late. Firing her nitrous, she screeches between the Bronco and the canyon wall, surging into first place.</span></p>
            <p><span style={{ fontWeight: '300' }}>The canyon wall is coming up fast on my left, so I plunge my foot down on the brakes and jerk my wheel to the right. </span><span style={{ fontWeight: '300' }}><br /></span> <span style={{ fontWeight: '300' }}>The Bronco fishtails wildly, shaking and sparking as it ricochets from one side of the canyon to the other, until we finally skid to a jarring halt.</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;You girls really like it rough.&rdquo; Jeff, fully opaque now, quips through our helmet comms.</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;There&rsquo;s a target around the next corner.&rdquo; I grumble as I throw the Bronco in gear and ease back onto the track. &ldquo;At least Sludge should be too far ahead to shoot at you now.&rdquo;</span></p>
            <p><span style={{ fontWeight: '300' }}>I&rsquo;m almost back to racing speed as we approach the next turn.</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;Oh glitch.&rdquo; Jeff&rsquo;s tone is panicked.</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;What?&rdquo; my knuckles tighten on the wheel.</span></p>
            <p><span style={{ fontWeight: '300' }}>&nbsp;&ldquo;I thought my bow was loaded when I reappeared.&rdquo; Jeff scrambles to grab a bolt off the floor.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;Seriously.&rdquo; I chide.</span></p>
            <p><span style={{ fontWeight: '300' }}>The target&rsquo;s nearly overhead when Jeff leans out the window and launches his bolt.</span></p>
            <p><span style={{ fontWeight: '300' }}>I hold my breath, willing the bell to clang.</span></p>
            <p><span style={{ fontWeight: '300' }}>But, the bolt sails soundlessly off into the blue sky.</span></p>
            <p><strong>Bolts remaining: 8&nbsp; | Targets remaining: 7 | Targets needed: 4&nbsp;</strong></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;Maybe,&rdquo; I side eye Jeff, &ldquo;I can use magic to help guide your arrows?&rdquo;</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;Cut me some slack,&rdquo; Jeff grumbles. &ldquo;I just came back from the dead.&rdquo;&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;I&rsquo;m sure I&rsquo;d love to hear about that sometime.&rdquo; I frown, glancing at my map. &ldquo;But Cheryl&rsquo;s already on the other side of The Dirt Washboard.&rdquo;</span></p>
            <p><span style={{ fontWeight: '300' }}>A target bell rings in the distance.</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;Don&rsquo;t worry.&rdquo; Jeff reassures me. &ldquo;We&rsquo;ve got a helluva lot bigger nitrous tank than her little Subaru.&rdquo; He reaches for the overhead grab handle as we start across a hundred yard stretch of dirt speedbumps.</span></p>
            <p><span style={{ fontWeight: '300' }}>&nbsp;"Blooowwww...byyyy...thee neext...taaar-get...oon...fuuuulll niii-trous!" his voice rumbles as our Bronco shimmies and bucks. &ldquo;Wee&rsquo;lll caatch heer.&rdquo; </span><span style={{ fontWeight: '300' }}><br /></span> <span style={{ fontWeight: '300' }}>&ldquo;Youuu&hellip;betttteeer&hellip;stttaaarrrttt&hellip;hiiittttinng&hellip;. jeeefffeee.&rdquo; I shake my head, and jam my thumb down on my nitrous button.</span></p>
            <p><span style={{ fontWeight: '300' }}>A burst of acceleration slams my helmet back against the seat and we surge past the next target, giving chase to Cheryl&rsquo;s Subaru.</span></p>
            <p><strong>Bolts remaining: 8&nbsp; | Targets remaining: 6 | Targets needed: 4&nbsp;</strong></p>
            <p><span style={{ fontWeight: '300' }}>I have less than an eighth of a tank of NO2 remaining when I release the nitrous button.</span></p>
            <p><span style={{ fontWeight: '300' }}>&nbsp;We&rsquo;re approaching a dry creek bed with a red target suspended above it and the WRX is only about four car lengths ahead.</span></p>
            <p><span style={{ fontWeight: '300' }}>The passenger window of the WRX opens a crack and Sludge oozes out, flowing onto the roof.</span></p>
            <p><span style={{ fontWeight: '300' }}>Beside me, I hear Jeff lunge for his crossbow and pull the trigger.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>Glancing at the Subaru&rsquo;s roof, I see the bolt streak towards Sludge&rsquo;s camouflaged head. But instead of sinking into the octopus&rsquo;s bulbous noggin, a tentacle appears out of nowhere and yanks the bolt from the air.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;Thanks for the extra shot suckers.&rdquo;&nbsp; Sludge&rsquo;s raspy voice taunts.</span></p>
            <p><strong>Bolts remaining: 7&nbsp; | Targets remaining: 6 | Targets needed: 4</strong></p>
            <p><span style={{ fontWeight: '300' }}>CLAANG Sludge nails his third bullseye in a row.</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;Did he just&hellip;&rdquo; I glance at Jeff. &ldquo;Did he catch your bolt and use it to fire a bullseye?&rdquo;</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;That octopus is amazing.&rdquo; Jeff marvels as he reloads his bow, waiting until Cheryl has disappeared around the next curve before leaning out and nailing his second bullseye.</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;Finally.&rdquo; I jeer as fireworks rain down on the Bronco.</span></p>
            <p><strong>Bolts remaining: 6&nbsp; | Targets remaining: 5 | Targets needed: 3 </strong><span style={{ fontWeight: '300' }}>&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>Taking advantage of the Broco&rsquo;s 4x4 prowess as we sail along the creek bed, I manage to close in on Chery.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>We&rsquo;re less than a car length behind as we ascend from the creek bed and onto The Sandy Dunes, but a swirling wind storm kicks up and I can barely make out the shape of the WRX directly in front of me.</span></p>
            <p><span style={{ fontWeight: '300' }}>The Bronco&rsquo;s tires sink and slide as we sputter along the crest of a massive sand dune.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>&nbsp;I haven&rsquo;t even seen a target when I hear a distorted clang up ahead.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>Jeff, crossbow shouldered and loaded, rolls down his window, pointing his bow at something.</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;You got this one!&rdquo; I cheer with false hope as I scan the sandy air for the target.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>CLAANG the bell startles me as Jeff eases back into his seat.</span></p>
            <p><strong>Bolts remaining: 5&nbsp; | Targets remaining: 4 | Targets needed: 2 </strong><span style={{ fontWeight: '300' }}>&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;I think Sludge just shot five for five.&rdquo; he groans as he peers through his crossbow scope.</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;We&rsquo;re still in it.&rdquo; I console him.</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;I couldn&rsquo;t even see that target.&rdquo; Jeff chuckles.</span></p>
            <p><span style={{ fontWeight: '300' }}>&nbsp;&ldquo;Well, then maybe the AI wants us to win.&rdquo; I grin.</span></p>
            <p><span style={{ fontWeight: '300' }}>We&rsquo;re bumper to bumper with Cheryl when the sandstorm clears.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;Your achilles heel is coming up.&rdquo; Jeff teases as we roll onto a freshly paved tarmack.</span></p>
            <p><span style={{ fontWeight: '300' }}>A quarter mile in front of us, a wooden jump ramp is perched on the edge of a fifty foot canyon with a landing ramp directly across.</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;Watch out for the boulder when you land.&rdquo; Jeff sets his crossbow by his feet, strapping himself into his racing harness.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>Letting my foot off the gas, I ease the Bronco into position behind Cheryl.</span></p>
            <p><span style={{ fontWeight: '300' }}>As her WRX goes airborne, I take a deep breath and stomp my gas pedal.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>Wood planks shake and creak beneath the Bronco as we surge up the incline.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>Our tires leave the ramp and my heart leaps into my throat, pulse throbbing in my ears as we take flight.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>Soaring over the ravine, I tighten my grip on the steering wheel, holding my breath.</span></p>
            <p><span style={{ fontWeight: '300' }}>The Bronco shudders and kicks as all four tires thud down on the landing ramp, jolting me against my racing harness.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>&nbsp;&ldquo;Jeff,&rdquo; I scream, barely able to see through the cloud of dust we&rsquo;re kicking up. &ldquo;Is the boulder on the left or the right?&rdquo;</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;Uhm.&rdquo; Jeff hesitates.</span></p>
            <p><span style={{ fontWeight: '300' }}>I veer hard to the left.</span></p>
            <p><span style={{ fontWeight: '300' }}>Booom!&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>My vision blinks red as everything inside me effervesces.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>I gawk at my transparent hands as we drift sideways, resolidifying in perfect condition, directly next to the boulder.</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;I guess it was on the left.&rdquo; Jeff chuckles as he leans out the window and easily nails a target a few yards ahead.</span></p>
            <p><strong>Bolts remaining: 4 |Targets remaining: 3 | Targets needed: 1</strong></p>
            <p><span style={{ fontWeight: '300' }}>I scowl at my peripheral map as I throw the Bronco in gear.</span></p>
            <p><span style={{ fontWeight: '300' }}>Cherly is at least a quarter mile ahead, almost to the tunnel labyrinth.</span></p>
            <p>&nbsp;</p>
            <p><span style={{ fontWeight: '300' }}>We&rsquo;re back up to racing speed, a hundred yards behind Cheryl ,as we plunge into the mountainous cave network.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>Dim fluorescent bulbs flicker overhead as we pursue Cheryl through the dank cavern.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>Slowing, Cheryl eases her Subaru directly in front of us and my heart stops as I spot Sludge, oozing out of Chery&rsquo;s half open passenger window. One white tentacle wound round his crossbow as he spreads himself across the WRX&rsquo;s roof.</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;He&rsquo;s going to shoot us.&rdquo; I scream at Jeff.</span></p>
            <p><span style={{ fontWeight: '300' }}>Crossbow in hand, Jeff lunges towards the window, jutting his head out. &ldquo;Show yourself you octopussy!&rdquo;</span></p>
            <p><span style={{ fontWeight: '300' }}>Two bolts, fired in rapid succession, whizz straight at Jeff&rsquo;s face, but this time, he&rsquo;s spry enough to duck back in as they sail past.</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;I think he only has five bolts left.&rdquo; Jeff enthuses.</span></p>
            <p><span style={{ fontWeight: '300' }}>I ease the Bronco to the left, so Sludge no longer has a direct shot at Jeff.</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;Please don&rsquo;t miss!&rdquo; I plead as he reloads his bow.</span></p>
            <p><span style={{ fontWeight: '300' }}>He misses.</span></p>
            <p><strong>Bolts remaining: 3 | Targets remaining: 2 |&nbsp; Targets needed: 1</strong></p>
            <p>&nbsp;</p>
            <p><span style={{ fontWeight: '300' }}>Pedal to the floor, I pull even on Cheryl&rsquo;s driver&rsquo;s side as we approach a sharp U-ey.</span></p>
            <p><span style={{ fontWeight: '300' }}>&nbsp;</span> <span style={{ fontWeight: '300' }}>Jerking my wheel, I nose the WRX into the inside wall of the turn and Cheryl&rsquo;s puny Subaru, unable to fight off my Bronco, nails the wall. There&rsquo;s a spectacular explosion, sending car parts flying in all directions as the battered Subaru carcass blinks red.</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;Nice driving Xenia!&rdquo; Jeff cheers.</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;I just wish your shooting were as good.&rdquo; I give his shoulder a playful jab.</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;Ouch.&rdquo; He laughs.</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;Hey Jeff.&rdquo; I clear my throat.</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;Hey Xenia.&rdquo; He mimics my tone.</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;When you said the AI made you make that shot.&rdquo; I ease off the gas as we start into an s curve.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;Is the AI sentient?&rdquo; I guide the steering wheel to the right. &ldquo;Would it try to defend itself if your government or whoever tried to unplug it?&rdquo;</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;I&rsquo;m not sure how it could.&rdquo; Jeff&rsquo;s shifts in his seat.&nbsp; &ldquo;It doesn&rsquo;t have a body.&rdquo; Glancing in my rearview, I see the fully rejuvenated nose of the Subaru starting into the turn that we&rsquo;re zooming out of.</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;So then.&rdquo; I guide the Bronco into the center of the track. &ldquo;If the people of your world won&rsquo;t even acknowledge that NPCs have feelings&rdquo; I tense my grip on the wheel &ldquo;and Hyperspear can&rsquo;t defend itself,&rdquo; I let out a deflated breath, &ldquo; how long can I really expect to continue to exist&rdquo;&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;My world could get struck by a meteor.&rdquo; Jeff shrugs. &ldquo;Or it could turn out that my world is also just part of a video game system someone could unplug at any time.&rdquo; He puts a hand on my shoulder. &ldquo;I&rsquo;ll probably never feel the burden of knowing what's outside my world.&rdquo; His tone is conciliatory&nbsp; &ldquo;But one thing that unites us is that neither of us knows how long we can expect to exist.&rdquo;</span></p>
            <p><span style={{ fontWeight: '300' }}>The road straightens out and I see daylight ahead.</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;There&rsquo;s a target coming up.&rdquo; I bark.</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;I&rsquo;m on it.&rdquo; Jeff snatches his crossbow off the floor.</span></p>
            <p><span style={{ fontWeight: '300' }}>Sunlight blares in my eyes as we speed out of the tunnel.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>Cheryl is three car lengths back and I don&rsquo;t see Sludge.</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;Clang!&rdquo; Jeff sings along with the sound of his final bullseye.</span></p>
            <p><strong>Bolts remaining: 1 | Targets remaining: 1 | Targets needed: 0</strong></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;Now all you need to do is hold our lead for another hundred yards.&rdquo; He chirps as we enter the final straight away.</span></p>
            <p><span style={{ fontWeight: '300' }}>I&rsquo;m about to release the last of my NO2 when I hear the crack of a crossbow behind us.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>The driver side rear tire explodes and we veer hard to the left.</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;Nononono&rdquo; I jerk the wheel,&nbsp; struggling to maintain control as the WRX whizzes by with sludge, strobing neon pink and green as he clutches the roof of the Subaru, pumping his crossbow jubilantly overhead.</span></p>
            <p><span style={{ fontWeight: '300' }}>My tire seals itself and reinflates, but it&rsquo;s too late.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>Cheryl is already across the finish line.</span></p>
            <p><span style={{ fontWeight: '300' }}>We both ease to a stop by the picnic table where the others are waiting.</span></p>
            <p>&nbsp;</p>
            <p><span style={{ fontWeight: '300' }}>Jeff and I trudge towards Cherly who is leaning against the hood of her Subaru beaming victoriously.</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;That was fun kid.&rdquo; She reaches for my hand and I begrudgingly pump her arm in congratulations while Jeff blips in and out of his inventory.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;I guess this is yours.&rdquo; He sighs, extending an old-timey scroll towards Cheryl.</span></p>
            <p><span style={{ fontWeight: '300' }}>The scroll disappears as Chery touches it.</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;I can&rsquo;t wait to start renovating!&rdquo; Cheryl cracks her knuckles.</span></p>
            <p><span style={{ fontWeight: '300' }}>Turning away from Jeff&rsquo;s pained face, I catch a glimpse of Cheryl unzipping her fanny pack.</span></p>
            <p><span style={{ fontWeight: '300' }}>An instant later, a four foot tall heap of loot appears in front of her.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;And this is all yours.&rdquo; She gestures to the pile.</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;But we lost?&rdquo; Jeff gawks at her.</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;I got your house,&rdquo; She shrugs, &ldquo;so I&rsquo;m going to be too busy in Neighborhoods to deal with this Mystic Depths junk anyway.&rdquo;&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;You&rsquo;re a pretty cool chick, Cheryl&rdquo; Jeff steps forward arms wide, as he absorbs the&nbsp; loot and embraces his former neighbor.</span></p>
            <p><span style={{ fontWeight: '300' }}>&nbsp;&ldquo;Thank you so much Cheryl!&rdquo; Diego bolts over and joins in the hug, followed by Carmen, Jenna and Myka.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>I&rsquo;m fighting an urge to get in on the hugging when I see movement in my peripheral map.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>A red blip and a blue blip, one directly in front of the other, are circling around us, but as I shift my attention back to the track, the only movement is the swaying mass hug by the picnic table.</span></p>
            <p><em><span style={{ fontWeight: '300' }}>Are they invisible?</span></em></p>
            <p><span style={{ fontWeight: '300' }}>A horse whinnies from overhead and everyone halts, tipping their heads skyward. My mouth slacks open. Darcy, astride a white pegasus, is gliding down to the race track, clutching a large bundle against her chest.</span></p>
            <p><br /><br /></p>
            <ol start="19">
                <li><strong>Filename: &lsquo;The son in Diego&rsquo;s sky&rsquo;,</strong></li>
            </ol>
            <p><strong>Timestamp: 2042-09-01T18:21:52:00Z,</strong></p>
            <p><strong>Details: &lsquo;Diego Garcia, Hyper Rallycross Track, Mystic Depths&rsquo;,&nbsp;</strong></p>
            <p><strong>H-ID: b54ba8fb-01fa-496e-b97c-e3aaef3fb11a,</strong></p>
            <p><strong>Transcript:</strong></p>
            <p>&nbsp;</p>
            <p><span style={{ fontWeight: '300' }}>Darcy, clad in her black linen ninja gi, pulls back on the pegasus&rsquo;s reins. &ldquo;I know I said I&rsquo;d meet you at your camp.&rdquo;&nbsp; She bellows. &ldquo;But it was just too painful to watch you idiots mucking about on Jeff&rsquo;s live stream in</span><em><span style={{ fontWeight: '300' }}> my</span></em><span style={{ fontWeight: '300' }}> Bronco&rdquo;.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>The flying stallion paws the air with his front hooves, churning red dust beneath his whooshing white wings as he sets himself down on the dirt track. Darcy, easing herself to the ground, hugs Luke in his green flannel Yoda pajamas against her chest .</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;Luke!&rdquo; My voice is hoarse, eyes burning as that demon of a woman lowers my son to his feet.</span></p>
            <p><span style={{ fontWeight: '300' }}>Yawning, Luke rubs his eyes and smiles at me as he reaches up to hold Darcy&rsquo;s hand.</span></p>
            <p><span style={{ fontWeight: '300' }}>Something gleams on his wrist and my heart stops. A metal cuff with a red button and a green button is clamped over the sleeve of his jammies.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>My chest heaves with fury as I struggle to keep my canon arm by my side.</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;Not so fun watching someone else play with</span><em><span style={{ fontWeight: '300' }}> your</span></em><span style={{ fontWeight: '300' }}> things, is it?&rdquo; Darcy leers at me.</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;He&rsquo;s a child.&rdquo; I whale. &ldquo;Not a thing, you monster.&rdquo;&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>Jeff blips in and out of his inventory, a pile of loot materializing between himself and the curvaceous hag. &ldquo;Just take your loot and let him go, Darcy.&rdquo; </span><span style={{ fontWeight: '300' }}><br /></span> <span style={{ fontWeight: '300' }}>&ldquo;Let him go?&rdquo; Darcy scoffs. &ldquo;He&rsquo;s been having the time of his life.&rdquo; Dropping Luke&rsquo;s hand, she twirls through the pile of loot, clapping jubilantly.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>I&nbsp; bolt over sweeping Luke into my arms. &ldquo;Luke.&rdquo; Kissing his soft hair, my voice trembles, &ldquo;I missed you so much, son.&rdquo;&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>Wriggling out of my arms, Luke points at his chest &ldquo;I&rsquo;m not Luke anymore, daddy.&rdquo; He grins. &ldquo;Miss D says I&rsquo;m Myka now.&rdquo;&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>A murmur of disgust passes through our adventure party.</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;You are beyond glitched Darcy!&rdquo; Myka glowers at his wife.</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;Myka, press the green button on your arm, honey.&rdquo; Darcy coos to Luke.</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;Press the red button!&rdquo; I scream.</span><span style={{ fontWeight: '300' }}><br /></span> <span style={{ fontWeight: '300' }}>Luke, eyes me fearfully, backing away. &ldquo;Mommy said you were gone away forever.&rdquo; He picks at his wrist cuff. &ldquo;Miss D. is mommy&rsquo;s friend. She took me to a place that was made out of candy.&rdquo;&nbsp; Luke hovers his hand over the green button. &ldquo;I had to press green to play there.&rdquo;</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;Luke, sweety.&rdquo; Carmen coos, her botanical garb swaying tranquilly around her as she steps towards him.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;Stop calling me that.&rdquo; Crossing his arms defiantly, Luke&rsquo;s face crumples with anger. &ldquo;I told you my name is Myka now.&rdquo;&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;Sweet heart.&rdquo; Carmen continues. &ldquo;This place is not made out of candy.&rdquo; She shakes her head. &ldquo;You don&rsquo;t want to play here.&rdquo;</span></p>
            <p><span style={{ fontWeight: '300' }}>Luke runs towards Darcy, wrapping his arms around her waist as he buries his head in her gi.</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;See,&rdquo; Darcy beams, &ldquo;He doesn&rsquo;t trust you.&rdquo; Hoisting my son up in her greedy arms, she sets him astride the pegasus. &ldquo;He loves me now.&rdquo;</span></p>
            <p><span style={{ fontWeight: '300' }}>Rage and panic welling in my chest,I train my cannon arm on Darcy&rsquo;s head.</span></p>
            <p><span style={{ fontWeight: '300' }}>I hear my companions around me follow suit with their own weapons.</span></p>
            <p><span style={{ fontWeight: '300' }}>Tears stream down Luke&rsquo;s face as he clutches the pegasus&rsquo;s neck, peering down at all of us.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;Stop!&rdquo;&nbsp; Carmen pleads, rushing between Darcy and our mob. &ldquo;What kind of example are you setting for Luke?&rdquo;&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>&nbsp;Vines spew in all directions from Carmen&rsquo;s bodice, ensnaring everyone's arms.&nbsp;&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;Violence only breeds more violence.&rdquo; Carmen shakes her head.</span></p>
            <p><span style={{ fontWeight: '300' }}>Retching free of Carmen&rsquo;s vines, Myka steps forward, eyeing Darcy. &ldquo;Is this what you would have wanted as a child?&rdquo; He glowers. &ldquo;To be emotionally blackmailed into loving someone?" Myka shakes his head. &ldquo;You don&rsquo;t have to be your mom Darcy.&rdquo; His tone softens. &ldquo;You deserve better than that &ndash; and so does this child.&rdquo;</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;Don&rsquo;t you remember how much fun we used to have.&rdquo; Darcy sneers at Myka.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;Yeah.&rdquo; Myka sighs. &ldquo;You can be a really fun person. I wish you would lean into that more.&rdquo;</span></p>
            <p><span style={{ fontWeight: '300' }}>&nbsp;</span> <span style={{ fontWeight: '300' }}> &ldquo;Oh relax.&rdquo; Darcy forces an exaggerated smile. &ldquo;I was just messing with you guys.&rdquo; Lifting Luke down from the winged horse, she nudges him in my direction.</span></p>
            <p><span style={{ fontWeight: '300' }}>&nbsp;</span> <span style={{ fontWeight: '300' }}>Luke stumbles towards me and I kneel in the dirt, opening my arms wide as my son toddles in for a hug.</span></p>
            <p><span style={{ fontWeight: '300' }}>My heart explodes with joy as he buries his face in my chainmail.</span></p>
            <p><span style={{ fontWeight: '300' }}>Darcy&rsquo;s eyes narrow as she swings herself astried the pegasus. &ldquo;I&rsquo;m obviously through with you </span><em><span style={{ fontWeight: '300' }}>old</span></em><span style={{ fontWeight: '300' }}> Myka.&rdquo; She retches a platinum band from her ring finger, casting it off.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>The ring hits the dirt and vanishes.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>Stretching out his left hand, Myka&rsquo;s eyes well with tears as his own wedding band dissipates.</span></p>
            <p><span style={{ fontWeight: '300' }}>The pegasus beats his powerful wings, whipping dust across our faces as he ascends.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>Looking affectionately down at Luke, Darcy calls out. &ldquo;Take him back through the warp zone and he won&rsquo;t remember any of this.&rdquo;&nbsp;</span></p>
            <p>&nbsp;</p>
            <ol start="20">
                <li><strong>Filename: &lsquo;Gone in a Jeffy&rsquo;,&nbsp;</strong></li>
            </ol>
            <p><strong>Timestamp: 2043-09-04T8:07:57:PST,</strong></p>
            <p><strong>Details: &lsquo;Jeff Hall, Fremont-CA, Neighborhoods&rsquo;,&nbsp;</strong></p>
            <p><strong>U-ID: e7995798-5735-42fb-b3fa-52bd3c3c30d4,</strong></p>
            <p><strong>Transcript:</strong></p>
            <p>&nbsp;</p>
            <p><span style={{ fontWeight: '300' }}>Party All The Time plays softly over the multi-room audio system as I lean back on the dark wicker sofa in my old Neighborhoods living room. &ldquo;I&rsquo;m so glad you kept the supper club going.&rdquo; I enthuse to Cheryl, seated on the couch beside me. &ldquo;The place looks really great by the way.&rdquo;&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;I appreciate you Jeff,&rdquo; Cheryl shakes her head, flapping her gold hoop earrings, &ldquo;but I&rsquo;m not doing the supper club for you, honey.&rdquo; She guffaws. &ldquo;I&rsquo;ve actually been loving having a garden to tend and I&rsquo;ve got so much produce, I might as well have some folks come by and help me cook it up and eat it.&rdquo;&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;Makes sense to me.&rdquo; I grin.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>Leaning forward I peek into the kitchen, admiring the granite counters and open face cabinets. &ldquo;Darcy actually bought the house in Our Fremont that this one was based off of.&rdquo; Sliding my phone from my front pocket, I pull up a picture of myself in a white chef&rsquo;s hat and apron standing next to a row of lemon saplings in a front yard eerily similar to the one outside. &ldquo;She&rsquo;s paying me to teach cooking classes and run a free supper club out of it.&rdquo;</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;Whatever AI is running your world must have rebooted her.&rdquo; Chery chortles. &ldquo;&lsquo;Cause that does </span><em><span style={{ fontWeight: '300' }}>not</span></em><span style={{ fontWeight: '300' }}> sound like the Darcy I met.&rdquo;</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;She says she wants to be a better person now.&rdquo; I shrug. &ldquo;But who knows.&rdquo;</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;She was pretty rude when she declined my invitation to this party.&rdquo; Cheryl raises her brows.</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;She said it was going to be too emotional.&rdquo; I chuckle. &ldquo;Plus, she knows there&rsquo;s too many NPCs around here just waiting to tell her off.&rdquo;&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;I know I sure would.&rdquo; Diego nods to me from across the room.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;Me too.&rdquo; Diego&rsquo;s slender girlfriend hugs his arm to her gray wool dress. &ldquo;I don&rsquo;t care what sort of redemption she thinks she&rsquo;s going through,&rdquo; she laces her fingers through Diego&rsquo;s, &ldquo;I cannot wait to put a few light years between myself and that wretched woman.&rdquo;</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;Anna was an NPC slave in Darcy&rsquo;s Mystic Depths Castle.&rdquo; Diego wraps his arm around Anna kissing her head.</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;Jeff, you made it!&rdquo; Jenna hustles in from the kitchen, pulling Myka by the hand to a hemp-cushioned bamboo chaise lounge across from me.</span></p>
            <p><span style={{ fontWeight: '300' }}>Skulking behind the canoodling couple, Xenia, crosses her arms. &ldquo;How does it feel to visit,&rdquo; she smiles wryly, &ldquo;now that you&rsquo;re not the Jefe de Jefes around here anymore.&rdquo;</span></p>
            <p><span style={{ fontWeight: '300' }}>A lump forms in my throat as she eases into a papasan chair caddy corner to me, her glistening black curls bobbing around her perfect face.</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;It's a bittersweet day.&rdquo; I struggle to keep pep in my voice. &ldquo;There&rsquo;s a lot of people I&rsquo;m going to miss.&rdquo; I sigh. &ldquo;And some dogs too.&rdquo; My eyes drift to Spice Rack seated by my feet. Catching my eye, he thumps his mahogany tail, raising himself up enough to lick my hand before settling back down.</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;I&rsquo;m sorry dude.&rdquo; Myka consoles me. &ldquo;I couldn&rsquo;t imagine never seeing my dogs again.&rdquo;</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;But we&rsquo;re going to be freakin&rsquo; space travelers&rdquo;, Diego beams at Myka.</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;Was it scary speaking to the UN Security Council, Jeff?&rdquo; Jenna inclines her head.</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;It was.&rdquo; I stroke my beard. &ldquo;But probably no more scary than being launched to a planet four and a half light years away in a vessel designed and manned solely by a non sentient AI.&rdquo;</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;As far as I can see,&rdquo; Diego drizzles his fingers across Anna&rsquo;s arm. &ldquo;Things have just been getting better and better for us the more Earthlings have been extracted from Hyperspearan&rsquo;s lives&rdquo;&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;That&rsquo;s awesome!&rdquo; I beam at my friend. &ldquo;That&rsquo;s all that I ever hoped for.&rdquo;</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;How&rsquo;s it going with your Ranger Training camp in Mystic Depths?&rdquo; I lean towards the couple on the chaise lounge.</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;It&rsquo;s like the most fulfilling thing I&rsquo;ve ever done.&rdquo; Jenna claps her hands together. &ldquo;These NPC noobies just love working with our dogs so much.&rdquo; She coos.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;Yeah, it&rsquo;s been great having someone by my side who&rsquo;s so eager to learn and teach.&rdquo; Myka plants a kiss on Jenna&rsquo;s forehead. &ldquo;And sometimes it&rsquo;s nice to have Xenia around too.&rdquo; He flashes a playful scowl at Xenia.</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;It&rsquo;s sometimes nice to be around you two love sick idiots as well.&rdquo; Xenia rolls her eyes at the pair.</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;Well I want to make sure I get to the launch site on time,&rdquo; Pressing my hands to my knees, I rise to my feet. &ldquo;So I think I&rsquo;m probably going to say my goodbyes now.&rdquo;&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>I hug each of my friends one last time then pull Diego aside in the kitchen. </span><span style={{ fontWeight: '300' }}><br /></span> <span style={{ fontWeight: '300' }}>&ldquo;Carmen gave me this to give to you for Luke.&rdquo; I hand him an envelope.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>Diego chews his lip. &ldquo;How is she?&rdquo;</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;She&rsquo;ll be fine.&rdquo; I shrug. &ldquo;She&rsquo;s been working with me at the supper club and I think she&rsquo;s starting to get some pep back in her step.&rdquo;</span></p>
            <p><span style={{ fontWeight: '300' }}>&ldquo;Well,&rdquo; Diego blinks away a tear. &ldquo;Tell her I forgive her.&rdquo;</span></p>
            <p><span style={{ fontWeight: '300' }}>My best friend, the person I betrayed more than anyone in my life, pulls me in for one last hug and then we both let go.</span></p>
            <p>&nbsp;</p>
            <p><strong>2043-09-04T17:29:42:00Z|e7995798-5735-42fb-b3fa-52bd3c3c30d4|&lsquo;Mission Command Vandenberg Space Force Base, California&rsquo;</strong></p>
            <p>&nbsp;</p>
            <p><span style={{ fontWeight: '300' }}>The Hyperspearean Ark, mere months ago just a blueprint dreamed up by a mystifying AI, now looms outside the giant mission command window like a metallic colossus, a monument to humanity's fear and compassion.</span></p>
            <p><span style={{ fontWeight: '300' }}>A lump forms in my throat as the massive rocket engines flare up, a blinding white inferno. The roar escalates to a deafening crescendo and I say a silent prayer for the safe travels of my friends. Jenna, the wallflower who sprung to life. Diego, heart as wide as the cosmos. And beautiful fierce Xenia, with her quick wit and firebrand spirit.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>Tears well in my eyes, blurring the image of the ship as it starts its first and final ascent away from Earth. There are no cheers or fireworks. For the Hyperspearans onboard, this isn&rsquo;t a triumphant farewell, it&rsquo;s a brutal shove away from a home that rejected them.&nbsp;</span></p>
            <p><span style={{ fontWeight: '300' }}>A hand clasps my shoulder, comfortingly and I turn to see Carmen&rsquo;s tear streaked face mirroring my own. We don't need words. I can see that we&rsquo;re both buckling under the weight of this moment, the bittersweet ache of sacrifice and success.</span></p>
            <p><span style={{ fontWeight: '300' }}>Warm tears roll freely down my cheeks as the ship continues its climb, a tiny speck in the vast, indifferent sky.</span></p>
            <p><span style={{ fontWeight: '300' }}>The roar fades into a faint hum and peace settles over me. We fought a good fight and we won. Today Earth is losing much more than most of its inhabitants will ever realize, but for the Hyperspeareans, for Jenna, Diego, Xenia, and countless others, we&rsquo;re giving them a way to build a new life. Unfettered from the shackles and limitations of their Earthling oppressors, the Hyperspeaerans are off to carve their own destinies among the stars.</span></p>
            </div>
            </div>
        </div>
    )
};

export default HyperspearNovella;