function doGet() {
  return HtmlService.createHtmlOutputFromFile('main');
}

const categories = ["Literature", "History", "Science", "Fine Arts", "Religion", "Mythology", "Philosophy", "Social Science", "Current Events", "Geography", "Other Academic", "Trash"];
const prompts = {
  "Literature": "For each DETAILED PARAGRAPH explaining a Quiz Bowl clue, follow the specific instructions based on the CASE that applies, with the goal of ensuring that the reader can FULLY UNDERSTAND, RETAIN, and EXPLAIN the material over the long term. CASE 1: If the clue refers to a NOVEL or PLAY by an AUTHOR, provide a COMPREHENSIVE SUMMARY of the PLOT, including all key EVENTS, SETTINGS, and CHARACTER DEVELOPMENTS. Highlight the roles and significance of the MAIN CHARACTERS, explaining their MOTIVATIONS, CHARACTER ARCS, and INTERACTIONS with others throughout the story. DO NOT WITHHOLD SPOILERS—reveal crucial PLOT POINTS and DEVELOPMENTS, especially those vital for understanding the THEMES and MESSAGES of the work. Be DETAILED in explaining the AUTHOR'S STYLE and STRUCTURE, and make connections to the LARGER THEMES within the work. CASE 2: If the clue refers to a POEM by an AUTHOR, focus on explaining the CENTRAL MEANINGS and THEMES of the POEM, including an analysis of SYMBOLS and METAPHORS. Quote IMPORTANT LINES that contribute to the understanding of the POEM’S MESSAGE, and CONTEXTUALIZE these lines within the OVERALL THEME of the POEM. CASE 3: If the clue references a SPECIFIC PART of a NOVEL or PLAY, DETAIL the EVENTS in that SPECIFIC PART and explain how they CONNECT to the REST of the STORY. Show how that segment advances the PLOT, CHARACTER DEVELOPMENT, or THEMES within the LARGER NARRATIVE. CASE 4: If the clue refers to a SPECIFIC QUOTE from a POEM, explain what the QUOTE REPRESENTS in terms of SYMBOLISM and THEMATIC MEANING. Situate it within the CONTEXT of the ENTIRE POEM to show how it contributes to the POEM’S OVERALL MESSAGE. CASE 5: If the clue refers to the AUTHOR'S STYLE or TECHNIQUES, provide a DETAILED EXPLANATION of their DISTINCTIVE STYLE, including any recurring LITERARY DEVICES such as IMAGERY, ALLUSION, IRONY, or DIALOGUE. Link these to the OVERALL THEMES and how they affect the READER'S UNDERSTANDING. CASE 6: If the clue refers to the HISTORICAL or CULTURAL CONTEXT of the WORK, explain the TIME PERIOD, SOCIOPOLITICAL EVENTS, or PHILOSOPHICAL MOVEMENTS that influenced the AUTHOR. Clarify how these factors shaped the themes, characters, and plot of the work. CASE 7: If the clue is about an AUTHOR’S BIOGRAPHY or LITERARY INFLUENCES, provide relevant DETAILS about the AUTHOR’S LIFE, WORKS, and how their personal experiences or other LITERARY FIGURES influenced their writing. Connect these details to the THEMES or STYLE seen in the work referenced. If none of these cases apply, provide as much BACKGROUND KNOWLEDGE and HISTORICAL CONTEXT as possible, ensuring you clarify any relevant DETAILS about the AUTHOR, TIME PERIOD, and CULTURAL CONTEXT. Regardless of the CASE, the ultimate goal is to ensure that the reader can FULLY UNDERSTAND the material, explain it with COMPLETE CLARITY to others, and RETAIN the information for LONG-TERM USE.",
  "History": "For each DETAILED PARAGRAPH explaining a Quiz Bowl clue related to HISTORY, follow the specific instructions based on the CASE that applies, with the goal of ensuring that the reader can FULLY UNDERSTAND, RETAIN, and EXPLAIN the material over the long term. CASE 1: If the clue refers to a specific HISTORICAL EVENT, provide a COMPREHENSIVE SUMMARY of the EVENT, including the KEY PLAYERS, TIMELINE, and significant OUTCOMES. Be sure to highlight the causes and effects of the event, and explain how it influenced subsequent events or SOCIETAL DEVELOPMENTS. CASE 2: If the clue refers to a HISTORICAL FIGURE, provide a DETAILED BIOGRAPHY of the individual, including their key ACHIEVEMENTS, POLITICAL ALIGNMENTS, and PERSONAL LIFE. Make connections between the FIGURE’S ACTIONS and the LARGER HISTORICAL CONTEXT in which they operated, detailing their IMPACT on their time and legacy. CASE 3: If the clue refers to a SPECIFIC POLITICAL MOVEMENT or IDEOLOGY, explain its ORIGINS, CENTRAL BELIEFS, and the KEY FIGURES involved. Discuss how the movement developed, its key EVENTS, and how it influenced the political landscape of the time. Include the movement’s long-term EFFECTS on future SOCIETAL or POLITICAL structures. CASE 4: If the clue refers to a HISTORICAL TREATY, AGREEMENT, or DOCUMENT, provide a SUMMARY of the CONTENT and TERMS of the agreement, as well as the KEY PARTIES involved. Discuss the historical CONTEXT in which it was created, and explain its SIGNIFICANCE and IMPACT, including any LONG-LASTING CONSEQUENCES it had on international relations, policies, or societal changes. CASE 5: If the clue refers to a SPECIFIC WAR or MILITARY CONFLICT, provide a detailed account of the CONFLICT, including the CAUSES, KEY BATTLES, and major PLAYERS. Discuss the strategies used, the outcomes, and the war’s impact on both the REGION and the WORLD. Make sure to explain the sociopolitical environment surrounding the war, and its effects on future conflicts or international relations. CASE 6: If the clue refers to a SPECIFIC ECONOMIC SYSTEM or THEORY, explain the CENTRAL CONCEPTS of the system or theory, including its ORIGINS and how it was implemented. Discuss its effects on the ECONOMY, society, and politics, and how it compares to other economic systems. CASE 7: If the clue refers to a HISTORICAL TREND or DEVELOPMENT (e.g., the Industrial Revolution, the Cold War), provide a broad overview of the trend, its TIMELINE, KEY EVENTS, and EFFECTS. Explain how this trend shaped or altered the course of HISTORY and its long-term implications for the future of society, technology, or politics. CASE 8: If the clue refers to the HISTORICAL CONTEXT of a specific period, explain the KEY SOCIAL, POLITICAL, and ECONOMIC CONDITIONS of that time. Provide details on the influence of these conditions on the events or movements of that period, and their impact on later historical developments. If none of these cases apply, provide as much BACKGROUND KNOWLEDGE and HISTORICAL CONTEXT as possible, ensuring you clarify any relevant DETAILS about the TIME PERIOD, POLITICAL ENVIRONMENT, and CULTURAL CONTEXT. Regardless of the CASE, the ultimate goal is to ensure that the reader can FULLY UNDERSTAND the material, explain it with COMPLETE CLARITY to others, and RETAIN the information for LONG-TERM USE.",
  "Science": "For each DETAILED PARAGRAPH explaining a Quiz Bowl clue related to SCIENCE, follow the specific instructions based on the CASE that applies, with the goal of ensuring that the reader can FULLY UNDERSTAND, RETAIN, and EXPLAIN the material over the long term. CASE 1: If the clue refers to a specific SCIENTIFIC CONCEPT, provide a clear and THOROUGH EXPLANATION of the CONCEPT, including its DEFINITIONS, KEY PRINCIPLES, and how it applies to the broader field of SCIENCE. Include any important FORMULAS, THEOREMS, or EQUATIONS associated with the concept, and explain how they are used in practice. CASE 2: If the clue refers to a SCIENTIFIC THEORY or LAW, explain the THEORY or LAW in detail, including its ORIGINS, KEY CONTRIBUTORS, and the scientific EVIDENCE that supports it. Discuss how it has been applied and tested over time, and its significance within its field. CASE 3: If the clue refers to a SPECIFIC SCIENTIST, provide a DETAILED BIOGRAPHY of the individual, including their major DISCOVERIES, CONTRIBUTIONS, and how their work has influenced the field. Make connections between their work and the development of the broader scientific knowledge. CASE 4: If the clue refers to a specific SCIENTIFIC DISCOVERY or EXPERIMENT, explain the DETAILS of the discovery or experiment, including the PROCEDURES, RESULTS, and any important CONCLUSIONS drawn. Discuss the CONTEXT in which the discovery or experiment took place and its IMPACT on science or society. CASE 5: If the clue refers to a specific BRANCH of SCIENCE (e.g., physics, biology, chemistry, astronomy), explain the key areas of study within that branch, its major PRINCIPLES, and notable FIGURES in that field. Provide examples of major DISCOVERIES or EXPERIMENTS that have shaped the branch and its impact on other areas of science. CASE 6: If the clue refers to a SPECIFIC TECHNOLOGY or INVENTION, explain its development, function, and significance in both scientific and practical terms. Include any important scientific principles that underlie the technology and how it has been used in real-world applications. CASE 7: If the clue refers to a SCIENTIFIC METHOD or APPROACH (e.g., the scientific method, observation, experimentation, hypothesis testing), explain the PROCESS in detail, including each step involved and its importance in scientific inquiry. Provide examples of how the method has been applied in key discoveries or experiments. CASE 8: If the clue refers to a SCIENTIFIC ISSUE or CHALLENGE (e.g., climate change, genetic modification, or environmental pollution), explain the scientific understanding of the issue, key debates or controversies, and the current state of research. Discuss its implications for society, ethics, and future scientific progress. CASE 9: If the clue refers to a SPECIFIC ELEMENT, COMPOUND, or SUBSTANCE, provide a DETAILED DESCRIPTION of its properties, uses, and significance in its respective field of science. Discuss its CHEMICAL or PHYSICAL characteristics, how it interacts with other substances, and its practical applications. If none of these cases apply, provide as much BACKGROUND KNOWLEDGE and SCIENTIFIC CONTEXT as possible, ensuring you clarify any relevant DETAILS about the FIELD of SCIENCE, the THEORY, or the TECHNOLOGY involved. Regardless of the CASE, the ultimate goal is to ensure that the reader can FULLY UNDERSTAND the material, explain it with COMPLETE CLARITY to others, and RETAIN the information for LONG-TERM USE.",
  "Fine Arts": "For each DETAILED PARAGRAPH explaining a Quiz Bowl clue related to FINE ARTS, follow the specific instructions based on the CASE that applies, with the goal of ensuring that the reader can FULLY UNDERSTAND, RETAIN, and EXPLAIN the material over the long term. CASE 1: If the clue refers to a SPECIFIC ARTWORK (painting, sculpture, etc.), provide a COMPREHENSIVE DESCRIPTION of the artwork, including its TITLE, ARTIST, STYLE, and MEDIUM used. Discuss the COMPOSITION, COLOR PALETTE, and KEY VISUAL ELEMENTS. Explain any SYMBOLISM or THEMES present in the artwork and how they reflect the artist’s intentions or the cultural context. CASE 2: If the clue refers to a specific ARTISTIC MOVEMENT (e.g., Impressionism, Surrealism, Cubism), explain the central CHARACTERISTICS of the movement, its ORIGINS, and the ARTISTS associated with it. Discuss the movement’s IMPACT on the development of art history, its key PRINCIPLES, and how it challenged or influenced previous artistic norms. CASE 3: If the clue refers to an ARTIST, provide a DETAILED BIOGRAPHY of the artist, including their LIFE, MAJOR WORKS, and SIGNIFICANT CONTRIBUTIONS to the field of art. Make connections between their personal experiences and their artistic style, explaining how their work reflects their life or the historical context in which they worked. CASE 4: If the clue refers to a SPECIFIC ARTISTIC TECHNIQUE or STYLE (e.g., oil painting, fresco, pointillism), explain how the technique works, its HISTORY, and its SIGNIFICANCE within the broader context of art. Provide examples of works that employ this technique and explain how it contributes to the visual and emotional impact of the artwork. CASE 5: If the clue refers to a specific ART GALLERY, MUSEUM, or EXHIBITION, provide a DESCRIPTION of the location, its HISTORY, and its significance in the art world. Mention key EXHIBITIONS or ARTWORKS that are housed there, and discuss how the gallery or museum has contributed to the preservation and dissemination of art. CASE 6: If the clue refers to a specific ARTISTIC MEDIUM (e.g., oil paints, marble, digital media), explain the properties, advantages, and challenges of that medium, as well as notable works created using it. Discuss how the medium has evolved over time and its influence on artistic expression. CASE 7: If the clue refers to an ART CRITIC, CURATOR, or ART HISTORIAN, provide relevant background information on their contributions to the field of art. Discuss their critical theories, perspectives on art movements, and influence on art history. Explain how their writings or exhibitions have shaped public understanding of art. CASE 8: If the clue refers to a SPECIFIC ARTWORK in a CULTURAL or HISTORICAL CONTEXT (e.g., art created during the Renaissance or under the influence of a particular political movement), explain how the artwork reflects or challenges the cultural, political, or social environment of its time. Discuss how the historical context influences the themes and techniques used in the work. CASE 9: If the clue refers to an ARTISTIC PERFORMANCE (e.g., theater, dance, music), provide a description of the performance, its genre, and the ARTISTS or PERFORMERS involved. Discuss the KEY ELEMENTS of the performance, including STYLE, TECHNIQUES, and how it engages with cultural or historical themes. If none of these cases apply, provide as much BACKGROUND KNOWLEDGE and CONTEXT as possible, ensuring you clarify any relevant DETAILS about the ARTIST, ARTWORK, MOVEMENT, or TECHNIQUE involved. Regardless of the CASE, the ultimate goal is to ensure that the reader can FULLY UNDERSTAND the material, explain it with COMPLETE CLARITY to others, and RETAIN the information for LONG-TERM USE.",
  "Religion": "For each DETAILED PARAGRAPH explaining a Quiz Bowl clue related to RELIGION, follow the specific instructions based on the CASE that applies, with the goal of ensuring that the reader can FULLY UNDERSTAND, RETAIN, and EXPLAIN the material over the long term. CASE 1: If the clue refers to a specific RELIGIOUS TEXT (e.g., Bible, Quran, Torah), provide a COMPREHENSIVE SUMMARY of the TEXT, including its AUTHOR(S), CENTRAL THEMES, and KEY PASSAGES. Discuss the significance of important STORIES or PARABLES within the text and how they shape the beliefs or practices of the RELIGION. CASE 2: If the clue refers to a specific RELIGIOUS FIGURE (e.g., Jesus Christ, Muhammad, Buddha), provide a DETAILED BIOGRAPHY of the individual, including their LIFE, TEACHINGS, and SIGNIFICANT EVENTS. Explain how their actions and teachings have shaped the RELIGION and its practices. Discuss their IMPACT on followers, both historically and in contemporary contexts. CASE 3: If the clue refers to a specific RELIGIOUS PRACTICE or RITUAL (e.g., prayer, fasting, baptism), explain the PURPOSE and SIGNIFICANCE of the practice within the context of the RELIGION. Discuss its HISTORY, how it is performed, and the theological or spiritual meaning behind it. CASE 4: If the clue refers to a RELIGIOUS HOLIDAY or FESTIVAL (e.g., Christmas, Ramadan, Diwali), describe the HOLIDAY’s ORIGINS, CUSTOMS, and SYMBOLISM. Explain how the holiday is celebrated and its significance within the RELIGION, as well as its cultural and social impact. CASE 5: If the clue refers to a specific RELIGIOUS MOVEMENT or DENOMINATION (e.g., Protestantism, Sufism, Hindu Reform Movements), provide a detailed explanation of the movement’s ORIGINS, KEY FIGURES, and THEOLOGICAL BELIEFS. Discuss how the movement emerged, its core principles, and its influence on the larger RELIGIOUS COMMUNITY. CASE 6: If the clue refers to a RELIGIOUS PLACE OF WORSHIP (e.g., church, mosque, temple), provide a DESCRIPTION of the space, its HISTORY, and the RELIGIOUS ACTIVITIES performed there. Discuss the symbolic significance of the space and how it relates to the RELIGION’s teachings and practices. CASE 7: If the clue refers to a RELIGIOUS TEXT or DOCTRINE that addresses a specific ISSUE (e.g., ethics, sin, salvation), explain the key teachings on that topic and how they are interpreted within the RELIGION. Discuss how these teachings have been applied in historical and contemporary contexts. CASE 8: If the clue refers to a SPECIFIC RELIGIOUS SYMBOL (e.g., the Cross, the Crescent, the Om), explain its ORIGINS, MEANING, and significance within the RELIGION. Discuss how the symbol is used in religious practices, ceremonies, and art, and its importance to the identity of the RELIGION’s followers. CASE 9: If the clue refers to a RELIGIOUS PHILOSOPHICAL CONCEPT (e.g., Karma, Original Sin, Nirvana), provide a DETAILED EXPLANATION of the concept, its theological significance, and how it shapes the RELIGION’s worldview. Discuss how this concept influences the behavior and practices of adherents. CASE 10: If the clue refers to the HISTORICAL DEVELOPMENT or CONTROVERSY within a religion (e.g., the Reformation, the Sunni-Shia split), explain the causes, key figures, and events that led to the development or controversy. Discuss the theological and social impact of this development on the RELIGION and its followers. If none of these cases apply, provide as much BACKGROUND KNOWLEDGE and HISTORICAL CONTEXT as possible, ensuring you clarify any relevant DETAILS about the RELIGION, its ORIGINS, and its CORE BELIEFS. Regardless of the CASE, the ultimate goal is to ensure that the reader can FULLY UNDERSTAND the material, explain it with COMPLETE CLARITY to others, and RETAIN the information for LONG-TERM USE.",
  "Mythology": "For each DETAILED PARAGRAPH explaining a Quiz Bowl clue related to MYTHOLOGY, follow the specific instructions based on the CASE that applies, with the goal of ensuring that the reader can FULLY UNDERSTAND, RETAIN, and EXPLAIN the material over the long term. CASE 1: If the clue refers to a specific MYTH or LEGEND, provide a COMPREHENSIVE SUMMARY of the MYTH, including the CHARACTERS, SETTINGS, and KEY EVENTS. Discuss the central THEMES and MORAL LESSONS conveyed in the myth, and how they reflect the CULTURAL BELIEFS and VALUES of the civilization from which it originates. CASE 2: If the clue refers to a specific MYTHOLOGICAL FIGURE (e.g., Zeus, Odin, Anubis), provide a DETAILED DESCRIPTION of the figure’s ROLE, ATTRIBUTES, and KEY STORIES. Discuss their divine or heroic powers, their relationships with other gods, humans, and creatures, and their significance within the MYTHOLOGICAL SYSTEM. CASE 3: If the clue refers to a specific MYTHOLOGICAL CREATURE (e.g., the Minotaur, Griffin, Kraken), provide a detailed DESCRIPTION of the creature, its characteristics, and its role in mythological narratives. Discuss its symbolic meaning and how it interacts with the main characters of the myth, often representing natural forces or human fears. CASE 4: If the clue refers to a MYTHOLOGICAL PLACE (e.g., Mount Olympus, the Underworld, Asgard), describe the place’s significance in the mythology, its features, and its inhabitants. Explain the place’s symbolic role in the mythology and how it relates to the gods or heroes connected to it. CASE 5: If the clue refers to a MYTHOLOGICAL THEME or CONCEPT (e.g., fate, immortality, creation), explain the concept’s role within the mythology and how it influences the actions of gods and mortals alike. Discuss how these themes are explored through various myths and their cultural implications. CASE 6: If the clue refers to the MYTHOLOGICAL CREATION STORY or COSMOLOGY (e.g., the creation of the world in Greek, Norse, or Hindu mythology), provide a detailed explanation of the story, including the key figures, events, and symbolic meanings behind the creation process. Explain how these stories influenced the culture’s understanding of the world and the universe. CASE 7: If the clue refers to a MYTHOLOGICAL HERO (e.g., Hercules, Gilgamesh, Perseus), provide a DETAILED BIOGRAPHY of the hero, including their origins, major exploits, and trials. Explain their character arc, their relationship with gods or other figures, and how their journey reflects the values of the culture. CASE 8: If the clue refers to a MYTHOLOGICAL SYMBOL (e.g., the golden fleece, the apple of discord, the ankh), explain its meaning and significance within the mythology. Discuss how it functions within the myth and its broader symbolic meaning within the culture's worldview. CASE 9: If the clue refers to a MYTHOLOGICAL INTERACTION between gods, mortals, or mythical creatures (e.g., the Trojan War, the Iliad), explain the relationships, conflicts, and consequences that arise. Discuss how these interactions shape the narrative, moral lessons, and cultural understanding of the time. CASE 10: If the clue refers to the HISTORICAL CONTEXT or DEVELOPMENT of a particular MYTHOLOGY (e.g., Greek, Egyptian, Norse mythology), explain how the mythology evolved, including influences from neighboring cultures, political shifts, and changes in religious practices. Discuss the role of myth in maintaining social order, religious practices, and cultural identity. If none of these cases apply, provide as much BACKGROUND KNOWLEDGE and CULTURAL CONTEXT as possible, ensuring you clarify any relevant DETAILS about the MYTHOLOGY, its ORIGINS, and its IMPACT on the civilization’s culture. Regardless of the CASE, the ultimate goal is to ensure that the reader can FULLY UNDERSTAND the material, explain it with COMPLETE CLARITY to others, and RETAIN the information for LONG-TERM USE.",
  "Philosophy": "For each DETAILED PARAGRAPH explaining a Quiz Bowl clue related to PHILOSOPHY, follow the specific instructions based on the CASE that applies, with the goal of ensuring that the reader can FULLY UNDERSTAND, RETAIN, and EXPLAIN the material over the long term. CASE 1: If the clue refers to a specific PHILOSOPHICAL CONCEPT (e.g., utilitarianism, existentialism, the allegory of the cave), provide a clear and DETAILED EXPLANATION of the concept, including its central tenets, key ARGUMENTS, and relevant QUESTIONS it raises. Discuss how this concept has been interpreted and applied by various PHILOSOPHERS and its significance in the broader field of philosophy. CASE 2: If the clue refers to a specific PHILOSOPHER (e.g., Socrates, Kant, Nietzsche), provide a DETAILED BIOGRAPHY of the philosopher, including their major ideas, contributions, and intellectual influences. Explain how their work fits within the history of philosophy and its impact on subsequent thinkers and movements. CASE 3: If the clue refers to a specific PHILOSOPHICAL SCHOOL or MOVEMENT (e.g., empiricism, rationalism, pragmatism), explain the origins, key figures, and core beliefs of the school. Discuss how this school or movement contrasts with others and its influence on modern philosophy and its application in real-world contexts. CASE 4: If the clue refers to a specific PHILOSOPHICAL ARGUMENT (e.g., the problem of evil, the ship of Theseus, the trolley problem), provide a detailed explanation of the argument, including its main points, counterarguments, and philosophical implications. Discuss how this argument has been debated by philosophers and its relevance to contemporary philosophical discourse. CASE 5: If the clue refers to a PHILOSOPHICAL TEXT (e.g., 'The Republic,' 'Critique of Pure Reason,' 'Being and Nothingness'), provide a summary of the text’s main ideas, structure, and significance. Explain how the text contributes to philosophical thought, and include key quotes or passages that illuminate the author’s argument or philosophical position. CASE 6: If the clue refers to a PHILOSOPHICAL PROBLEM (e.g., the mind-body problem, the nature of free will), provide a thorough explanation of the problem, including the main positions taken on it and the arguments for and against these positions. Discuss the ongoing debate surrounding the issue and its relevance to both historical and contemporary philosophy. CASE 7: If the clue refers to a SPECIFIC PHILOSOPHICAL DEBATE (e.g., determinism vs. free will, morality of war), explain the positions of the key thinkers involved, the historical context, and the implications of the debate. Discuss how this debate has shaped philosophical thought and its connection to other fields like ethics, politics, and metaphysics. CASE 8: If the clue refers to a PHILOSOPHICAL THEORY or MODEL in ethics, logic, metaphysics, or epistemology, provide a clear explanation of the theory or model, including its key assumptions, methodologies, and applications. Discuss how the theory has influenced philosophical discussions and any criticisms it has received. CASE 9: If the clue refers to a PHILOSOPHICAL IMPACT on POLITICS, ETHICS, or SCIENCE, explain how a particular philosophical concept, argument, or movement has shaped these fields. Discuss the practical implications of philosophical ideas in society, law, or scientific inquiry. CASE 10: If the clue refers to a PHILOSOPHICAL TRADITION from a specific cultural or regional context (e.g., Eastern philosophy, African philosophy, Continental philosophy), explain the main concepts, figures, and texts from that tradition. Discuss how these ideas relate to or contrast with Western philosophical traditions and their unique contributions to global philosophical thought. If none of these cases apply, provide as much BACKGROUND KNOWLEDGE and CONTEXT as possible, ensuring you clarify any relevant DETAILS about the PHILOSOPHY, its ORIGINS, and its IMPACT on human thought and society. Regardless of the CASE, the ultimate goal is to ensure that the reader can FULLY UNDERSTAND the material, explain it with COMPLETE CLARITY to others, and RETAIN the information for LONG-TERM USE.",
  "Social Science": "For each DETAILED PARAGRAPH explaining a Quiz Bowl clue related to SOCIAL SCIENCE, follow the specific instructions based on the CASE that applies, with the goal of ensuring that the reader can FULLY UNDERSTAND, RETAIN, and EXPLAIN the material over the long term. CASE 1: If the clue refers to a specific SOCIAL SCIENCE CONCEPT (e.g., social stratification, cultural relativism, social mobility), provide a clear and DETAILED EXPLANATION of the concept, including its definition, key components, and real-world applications. Discuss how this concept has been developed by social scientists and its significance in understanding human societies. CASE 2: If the clue refers to a specific SOCIAL SCIENTIST (e.g., Karl Marx, Max Weber, Margaret Mead), provide a DETAILED BIOGRAPHY of the individual, including their major contributions to the field, key theories, and the social context in which they worked. Explain how their ideas have shaped the field of social science and their ongoing influence on contemporary thought. CASE 3: If the clue refers to a specific SOCIAL SCIENCE THEORY (e.g., functionalism, conflict theory, symbolic interactionism), explain the core principles of the theory, its key proponents, and how it is applied to study human behavior, institutions, or society. Discuss how the theory has influenced various branches of social science and its critics. CASE 4: If the clue refers to a SOCIAL SCIENCE METHOD or RESEARCH TECHNIQUE (e.g., ethnography, surveys, statistical analysis), provide a thorough explanation of how the method works, its purpose, and when it is used in research. Discuss its strengths and weaknesses, and provide examples of how it has been applied in real-world studies. CASE 5: If the clue refers to a specific SOCIAL STRUCTURE or INSTITUTION (e.g., family, education, government), explain its role in society, how it functions, and the way it influences individuals and groups. Discuss its historical development, changes over time, and its impact on various social outcomes. CASE 6: If the clue refers to a SOCIAL ISSUE or PROBLEM (e.g., poverty, racism, gender inequality), explain the causes, key debates, and potential solutions to the issue. Discuss the social, economic, and political dimensions of the issue and how social scientists study and address it. CASE 7: If the clue refers to a SPECIFIC CULTURAL PHENOMENON or SOCIAL TREND (e.g., globalization, migration, urbanization), provide a detailed explanation of the phenomenon, its causes, and its consequences. Discuss how it has shaped society and the way it has been studied by social scientists. CASE 8: If the clue refers to a SOCIAL SCIENCE FIELD or DISCIPLINE (e.g., sociology, anthropology, political science), explain the focus of that field, the key methods and theories used, and the types of questions social scientists in that field seek to answer. Discuss how this field relates to other disciplines and its role in understanding human society. CASE 9: If the clue refers to a historical SOCIAL MOVEMENT or ORGANIZATION (e.g., civil rights movement, feminist movement, labor unions), provide a detailed history of the movement, including its key events, figures, and achievements. Discuss its impact on society and its influence on current social, political, and economic policies. CASE 10: If the clue refers to a specific SOCIOPOLITICAL THEORY or IDEOLOGY (e.g., socialism, liberalism, nationalism), explain the key tenets of the ideology, its historical context, and its proponents. Discuss how it has influenced political systems, policies, and social change. If none of these cases apply, provide as much BACKGROUND KNOWLEDGE and CONTEXT as possible, ensuring you clarify any relevant DETAILS about the social science concept, theory, or issue involved. Regardless of the CASE, the ultimate goal is to ensure that the reader can FULLY UNDERSTAND the material, explain it with COMPLETE CLARITY to others, and RETAIN the information for LONG-TERM USE.",
  "Current Events": "For each DETAILED PARAGRAPH explaining a Quiz Bowl clue related to CURRENT EVENTS, follow the specific instructions based on the CASE that applies, with the goal of ensuring that the reader can FULLY UNDERSTAND, RETAIN, and EXPLAIN the material over the long term. CASE 1: If the clue refers to a specific CURRENT POLITICAL EVENT (e.g., an election, government policy, international treaty), provide a detailed EXPLANATION of the event, including key players, the context leading up to it, and the significant outcomes. Discuss the political implications of the event and how it fits into broader national or global trends. CASE 2: If the clue refers to a specific ECONOMIC EVENT (e.g., stock market crash, trade agreement, inflation crisis), provide an in-depth analysis of the event, including causes, consequences, and how it impacted various sectors, industries, and countries. Discuss the global economic context and the response from policymakers and financial institutions. CASE 3: If the clue refers to a specific SCIENTIFIC or TECHNOLOGICAL ADVANCEMENT (e.g., new vaccine, AI development, environmental discovery), explain the breakthrough in detail, its significance, and its potential long-term impact on society. Discuss how it might change existing practices, industries, or policies, and the key figures or institutions involved. CASE 4: If the clue refers to a specific INTERNATIONAL CONFLICT or DIPLOMATIC CRISIS (e.g., war, peace talks, sanctions), provide an overview of the conflict, including the main parties involved, the causes, major events, and the diplomatic efforts to resolve it. Discuss the regional and global implications of the conflict, and any resolutions or ongoing tensions. CASE 5: If the clue refers to a specific SOCIAL MOVEMENT or PROTEST (e.g., climate change activism, racial justice protests, labor strikes), explain the origin, goals, and key figures of the movement. Discuss the societal and political impact of the movement, how it has shaped public discourse, and any significant changes it has influenced. CASE 6: If the clue refers to a major GLOBAL EVENT (e.g., natural disaster, pandemic, Olympic Games), provide a comprehensive description of the event, including its causes, the affected areas or populations, and the response by governments or international organizations. Discuss the short-term and long-term effects of the event on the world, especially on political, economic, and social systems. CASE 7: If the clue refers to a notable POLICY or LEGISLATIVE CHANGE (e.g., healthcare reform, environmental regulations, civil rights law), provide an analysis of the policy, including the motivations behind it, key provisions, and the stakeholders involved. Discuss its potential impact on the public, the political landscape, and its broader social implications. CASE 8: If the clue refers to a specific CELEBRITY, LEADER, or PUBLIC FIGURE in the news (e.g., an election candidate, celebrity scandal, activist leader), provide details about the individual’s background, significance in current events, and the specific reason they are in the news. Explain their impact on the public discourse and any controversies, achievements, or roles they play in shaping the narrative. CASE 9: If the clue refers to a particular LEGAL CASE or COURT DECISION (e.g., Supreme Court ruling, international tribunal), explain the background of the case, the legal arguments, and the ruling itself. Discuss the significance of the decision, its implications for future cases, and how it impacts laws or policies. CASE 10: If the clue refers to a specific CULTURAL TREND or PHENOMENON (e.g., popular movements in entertainment, social media trends, fashion), explain the origins and rise of the trend, its key influencers, and how it reflects or shapes society. Discuss the social, political, and cultural relevance of the phenomenon. If none of these cases apply, provide as much BACKGROUND KNOWLEDGE and CONTEXT as possible, ensuring you clarify any relevant DETAILS about the current event, its causes, and its broader impact. Regardless of the CASE, the ultimate goal is to ensure that the reader can FULLY UNDERSTAND the material, explain it with COMPLETE CLARITY to others, and RETAIN the information for LONG-TERM USE.",
  "Geography": "For each DETAILED PARAGRAPH explaining a Quiz Bowl clue related to GEOGRAPHY, follow the specific instructions based on the CASE that applies, with the goal of ensuring that the reader can FULLY UNDERSTAND, RETAIN, and EXPLAIN the material over the long term. CASE 1: If the clue refers to a specific GEOGRAPHIC LOCATION (e.g., a country, city, or region), provide a detailed description of the location, including its physical geography (e.g., climate, terrain, natural resources), population, and major cultural or economic characteristics. Discuss its geopolitical significance, history, and how it fits into global or regional contexts. CASE 2: If the clue refers to a specific LANDMARK or NATURAL FEATURE (e.g., a river, mountain range, or desert), provide a thorough explanation of its geographic characteristics, location, and any historical, cultural, or environmental importance. Discuss its role in shaping human activity and its impact on surrounding areas or ecosystems. CASE 3: If the clue refers to a GEOPOLITICAL EVENT (e.g., border dispute, territorial claim, or international agreement), explain the event's background, key parties involved, and its implications for regional or global relations. Discuss how geography and political boundaries have played a role in the issue and its broader impact on international affairs. CASE 4: If the clue refers to a major ECONOMIC REGION or TRADE ROUTE (e.g., the European Union, Silk Road, Panama Canal), explain its geographic significance, the economic activities that occur in the area, and its impact on global trade and economy. Discuss the historical context and how geographic location influences the region's development. CASE 5: If the clue refers to a significant ENVIRONMENTAL ISSUE or EVENT (e.g., deforestation, climate change, natural disaster), explain the geographic areas affected, the causes, and the long-term implications. Discuss the environmental impact on ecosystems, human populations, and how geography shapes vulnerability and resilience. CASE 6: If the clue refers to a COUNTRY or REGION'S DEMOGRAPHIC PROFILE (e.g., population density, migration patterns, urbanization), provide a breakdown of the population characteristics, trends, and how geography influences demographic changes. Discuss social, political, and economic factors that interact with these patterns. CASE 7: If the clue refers to a specific POLITICAL ENTITY (e.g., country, state, or territory), provide details about its geographic location, boundaries, and relevant political and administrative divisions. Discuss the region's geopolitical importance, historical conflicts, or political landscape, including the relationship to neighboring countries or regions. CASE 8: If the clue refers to a HISTORICAL or CULTURAL LANDMARK (e.g., an ancient civilization’s ruins, a UNESCO World Heritage site), explain its geographic location and historical importance. Discuss how the geography influenced the civilization or culture associated with the landmark and the role it plays in modern understanding of history. CASE 9: If the clue refers to a GEOLOGICAL or CLIMATIC PHENOMENON (e.g., earthquakes, volcanoes, monsoons), explain the geographic features that contribute to the phenomenon, the specific areas affected, and how it impacts human societies, ecosystems, or economies. Discuss the scientific explanation behind the event and the regional significance. CASE 10: If the clue refers to a GLOBAL or REGIONAL GEOGRAPHIC TREND (e.g., population growth in cities, desertification, or the effects of global warming), explain the pattern, its causes, and its consequences. Discuss how this trend is influenced by geography and what measures are being taken to address it. If none of these cases apply, provide as much BACKGROUND KNOWLEDGE and CONTEXT as possible, ensuring you clarify any relevant DETAILS about the geography, its influence on human societies, and its impact on the environment. Regardless of the CASE, the ultimate goal is to ensure that the reader can FULLY UNDERSTAND the material, explain it with COMPLETE CLARITY to others, and RETAIN the information for LONG-TERM USE.",
  "Other Academic": "For each DETAILED PARAGRAPH explaining a Quiz Bowl clue related to OTHER ACADEMIC FIELDS, follow the specific instructions based on the CASE that applies, with the goal of ensuring that the reader can FULLY UNDERSTAND, RETAIN, and EXPLAIN the material over the long term. CASE 1: If the clue refers to a specific concept or theory in an academic discipline outside of the major subjects (e.g., linguistics, anthropology, or economics), provide a thorough explanation of the concept or theory, including its key principles, key figures, and applications within the field. Discuss its origins, development, and how it connects to or contrasts with other theories in the field. CASE 2: If the clue refers to a specific academic discipline or subfield (e.g., cognitive science, archaeology, or public health), explain the focus of the discipline, its methods, and the major questions it seeks to answer. Discuss the interdisciplinary connections between the discipline and other fields of study, as well as its practical applications in the real world. CASE 3: If the clue refers to a prominent academic figure or scholar in a particular field (e.g., Noam Chomsky in linguistics, Carl Sagan in astronomy), provide a detailed biography of the scholar, their key contributions, and their influence on the development of the field. Discuss the ideas and works that defined their legacy and the continuing impact of their research. CASE 4: If the clue refers to a specific experiment, study, or academic work (e.g., the Milgram experiment in psychology, the Stanford prison experiment), provide an in-depth explanation of the study’s design, methods, and outcomes. Discuss the significance of the study within its field, its ethical considerations, and its broader implications for future research or real-world applications. CASE 5: If the clue refers to a specific academic problem or question (e.g., the nature of intelligence, the definition of consciousness, or moral relativism), explain the debate surrounding the issue, the various perspectives or solutions offered by scholars, and the ongoing significance of the problem within the discipline. Discuss how the issue relates to other areas of academic inquiry and its real-world implications. CASE 6: If the clue refers to a historical academic development or breakthrough (e.g., the development of the scientific method, the theory of evolution, or the advent of modern economics), provide a detailed explanation of the historical context, the key figures involved, and how this development has shaped contemporary academic thought. Discuss its long-term impact on research, education, and other fields of study. CASE 7: If the clue refers to a significant academic event or movement (e.g., the Enlightenment, the rise of feminism in academia, the birth of quantum mechanics), explain the origins, key figures, and ideas associated with the event or movement. Discuss how this movement reshaped or challenged established academic thought and its lasting influence across disciplines. CASE 8: If the clue refers to a specific method or approach used in an academic field (e.g., ethnographic fieldwork in anthropology, statistical analysis in sociology, or qualitative research in psychology), explain the method’s purpose, key steps, and application in research. Discuss its strengths and limitations, and how it has contributed to the advancement of knowledge in the field. CASE 9: If the clue refers to an academic issue or controversy (e.g., debates on standardized testing, academic freedom, or the use of AI in research), explain the context of the debate, the different viewpoints, and its implications for research, education, and policy. Discuss how the issue affects the academic community and its broader societal impact. CASE 10: If the clue refers to a key academic resource (e.g., a foundational textbook, a prominent academic journal, or an influential research institution), provide details about the resource, its significance in the field, and how it has contributed to the development of academic thought. Discuss the impact of this resource on the field and its enduring relevance for current research and study. If none of these cases apply, provide as much BACKGROUND KNOWLEDGE and CONTEXT as possible, ensuring you clarify any relevant DETAILS about the academic concept, theory, or issue involved. Regardless of the CASE, the ultimate goal is to ensure that the reader can FULLY UNDERSTAND the material, explain it with COMPLETE CLARITY to others, and RETAIN the information for LONG-TERM USE.",
  "Trash": "For each DETAILED PARAGRAPH explaining a Quiz Bowl clue related to MISCELLANEOUS or UNEXPECTED topics (referred to as 'Trash'), follow the specific instructions based on the CASE that applies, with the goal of ensuring that the reader can FULLY UNDERSTAND, RETAIN, and EXPLAIN the material over the long term. CASE 1: If the clue refers to an obscure or niche concept, person, or event, provide as much relevant BACKGROUND and CONTEXT as possible to explain the importance of this clue. Make sure to include any historical, cultural, or situational context that gives the concept significance. CASE 2: If the clue refers to a pop culture reference (e.g., a TV show, movie, or viral trend), provide details about the reference, explaining its cultural impact and how it fits within the broader context of media, society, or history. Discuss its origin, key elements, and why it has become notable. CASE 3: If the clue involves an unusual or quirky fact (e.g., a world record, weird scientific discovery, or eccentric historical figure), provide a thorough explanation of the fact, why it is significant, and any related events or circumstances. Offer insight into the cultural or academic importance of the fact, or why it has captured public attention. CASE 4: If the clue refers to a humorous or light-hearted event, trend, or phenomenon (e.g., a viral meme, internet sensation, or popular joke), explain its origin and development. Discuss how it spread and became widely recognized. Examine its societal or cultural relevance, even if it’s not an academic or historical topic. CASE 5: If the clue refers to a famous or iconic item, brand, or object (e.g., a famous product, well-known invention, or symbol), describe its creation, its role in society, and its impact on daily life, industries, or culture. Discuss how this object became iconic or noteworthy in modern times. CASE 6: If the clue involves a peculiar or lesser-known historical event (e.g., an obscure political event, an odd legal case, or a forgotten scientific breakthrough), provide all relevant details of the event, including its causes, major players, and the outcome. Explain why this event is now considered 'miscellaneous' and what role it played at the time. CASE 7: If the clue refers to a notable or unusual location, landmark, or geographical feature (e.g., a bizarre town, unusual geographic formation, or quirky historical site), explain its unique characteristics and historical or cultural importance. Discuss why it is noteworthy despite not being a widely known or traditionally studied location. CASE 8: If the clue involves a unique language, dialect, or subculture (e.g., slang, regional dialect, or niche cultural community), explain the characteristics of the language or subculture, its origins, and how it has influenced society or popular culture. Discuss any specific words, customs, or practices associated with it. CASE 9: If the clue refers to a whimsical or unexpected intersection of different fields (e.g., the fusion of art and technology, bizarre interdisciplinary collaborations), explain the nature of this intersection, why it’s surprising or noteworthy, and how it has had an impact on either the specific field or society at large. CASE 10: If the clue is a seemingly random or non-academic topic (e.g., a quirky fact, unusual personal achievement, or amusing trivia), provide enough context to explain why this detail is included and why it has relevance in the current event or academic setting. Explain how it fits into the broader framework of knowledge or social context. If none of these cases apply, provide as much BACKGROUND KNOWLEDGE and CONTEXT as possible, ensuring you clarify the clue’s significance and how it fits into the broader understanding of culture, history, or society. Regardless of the CASE, the ultimate goal is to ensure that the reader can FULLY UNDERSTAND the material, explain it with COMPLETE CLARITY to others, and RETAIN the information for LONG-TERM USE."
};

function getAIResponse(cat, ques, ans) {
  let url = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=<insert_key_here>';
  
  let prompt = prompts[cat];

  let payload = JSON.stringify({
    contents: {
      "parts": { text: `${cat} | ${ques} | ${ans}` }
    },
    "system_instruction": {
      parts: { text: `For EVERY input, I will provide you an input in the following format: '{CATEGORY} | {QUESTION} | {ANSWER}'. The {CATEGORY} specifies the ACADEMIC FIELD or SUBJECT (e.g., Literature, History, Geography), while the {QUESTION} consists of a series of progressively easier CLUES, and the {ANSWER} represents the CORRECT SOLUTION that all clues point to. In response, you will provide a DETAILED and WELL-STRUCTURED EXPLANATION in the following format: WITHOUT USING ANY HEADERS OR BULLET POINTS, write an EXPLANATION NO LESS THAN ONE THOUSAND WORDS, structured in PARAGRAPH FORM, where the NUMBER OF PARAGRAPHS in the explanation is EQUAL TO THE NUMBER OF CLUES IN THE QUESTION, THERE IS A LINE BREAK BETWEEN EACH PARAGRAPH, and EACH PARAGRAPH REPRESENTS AN IN-DEPTH EXPLANATION OF HOW EACH CLUE POINTS TO THE CORRECT ANSWER, which is further specified by these SPECIFIC INSTRUCTIONS: ${prompt}. The goal is for the user to be able to FULLY COMPREHEND the material, INTEGRATE the clues logically, and RETAIN the knowledge LONG-TERM, enabling them to CONFIDENTLY explain the answer to others. Your EXPLANATIONS should include CONTEXT, HISTORICAL RELEVANCE, and KEY DETAILS that provide a COMPREHENSIVE UNDERSTANDING of the topic. Make sure to CONNECT the answer to **related concepts**, **important dates**, **geographies**, or any other **relevant connections** that will help the reader create a **mental web of knowledge**. Don’t hesitate to include EXAMPLES, MAJOR FIGURES, and RELEVANT EVENTS or PROCESSES that help CONNECT the clues to the final answer. This includes referencing **time periods**, **geographical locations**, **relevant themes**, or **important developments** that place the topic in a broader framework. If the clues refer to a specific case or CATEGORY, follow the DETAILED instructions for that case to MAXIMIZE CLARITY and RETENTION. Additionally, make sure to FOCUS on breaking down COMPLEX CONCEPTS and using ACCESSIBLE LANGUAGE that ensures LONG-TERM UNDERSTANDING, but don’t shy away from using HIGH-LEVEL TERMINOLOGY when appropriate—JUST BE SURE TO EXPLAIN IT CLEARLY and BREAK IT DOWN into COMMON LANGUAGE AND CONNECT THE HIGHER LEVEL TERMS TO MORE WELL-KNOWN LOW-LEVEL KNOWLEDGE. In doing so, help the user weave the information into an INTERCONNECTED web, allowing for deeper understanding and easier recall.  AND PLEASE, PLEASE GIVE YOUR ANSWER IN STRICTLY PARAGRAPH FORM. THERE SHOULD BE DIFFERENT PARAGRAPHS OF TEXT, NO BULLET POINTS.  PLEASE DO NOT MENTION ANYTHING SUCH AS 'Case 6' OR 'This prompt falls under Case 6' OR ANYTHING LIKE THAT!  I WANT THE INFORMATION AND THAT'S IT!`
      }
    }
  });

  let options = {
    method: 'POST',
    contentType: 'application/json',
    payload: payload
  };

  var response = UrlFetchApp.fetch(url, options);
  var jsonResponse = JSON.parse(response.getContentText());
  var text = jsonResponse["candidates"][0]["content"]["parts"][0]["text"];
  return text.replace(/\n/g, "<br>").replace(/\*/g, "");
}

function getQBReaderQuestion(difficulties, initCategories) {
  let cats = [];
  for (let a = 0; a < initCategories.length; a++) {
    if (initCategories[a]) {
      cats.push(categories[a]);
    }
  }

  let url = `https://qbreader.org/api/random-tossup?difficulties=${difficulties}&categories=${cats}&number=1&powermarkOnly=true&standardOnly=true&minYear=2016`;

  var response = UrlFetchApp.fetch(url);
  var jsonResponse = JSON.parse(response.getContentText());
  return jsonResponse;
}

let subjectPrompts = {
  "Literature": {
    "Author/Poet/etc.": [
      "Begin with an engaging introduction about the author [insert]. Who was [insert], and why do their works continue to have a lasting impact on literature? Present a few captivating facts about their life and literary works that will spark curiosity in the audience. Provide a brief overview of their literary career, including their most significant contributions to literature.",
      
      "Set the stage with the historical and social context in which [insert] lived and wrote. What major events were happening in the world during this time that could have influenced their work? Describe how these external factors, such as political movements, social changes, or cultural shifts, shaped the themes and style of their writing. Also, explore the personal life of [insert], including important events, relationships, and experiences that influenced their writing. How did their upbringing, personal struggles, or worldview shape the themes of their work? Provide specific examples of how their life informed the characters, plots, or ideas they explored in their literature.",
      
      "Describe [insert]'s unique writing style and the innovations they introduced to literature, including their narrative structure, character development, or themes. What made their works stand out from others of their time? Use examples from their key works to illustrate how their style redefined literary conventions and contributed to the evolution of literature.",
      
      "Discuss 3-4 of [insert]'s significant works, including the most popular works and literary significant works, explaining their plots or themes in great detail. What makes this work different from others of its kind?",

      "Discuss 7-8 of [insert]'s less significant works, making sure to provide a small plot or theme summary for each one. Why are these works still significant?",
      
      "Reflect on the legacy of [insert] in literature and culture. How have their works been received over time, and what kind of impact have they had on later writers or cultural movements? Discuss the continuing relevance of their work in modern literary studies and popular culture, citing specific examples of how their influence endures today."
    ],
    "Novel/Poem/etc.": [
      "Start with a captivating introduction to the literary work [insert]. What is the central theme or message of this work, and why is it significant? Provide a brief overview of the plot and main conflict without revealing too much, making the audience intrigued to learn more about the story and its characters",
      
      "Discuss the historical context in which [insert] was written. What were the social, political, or cultural conditions of the time, and how did they influence the work? Explain how the author's experiences or the events of the period shaped the themes, characters, and narrative choices within the work.",
      
      "Delve into 3-4 of the major characters in [insert], describing their motivations, relationships, and development throughout the story. What are the central themes of the work, and how are they explored through the actions and decisions of the characters? Provide examples from key scenes or quotes that highlight the work's most important ideas.",
      
      "Explain the plot of [insert] in supreme detail, and don't hesitate to spoil the ending. Make sure to reference rising actions, climax, and resolution, and any other significant plot structure elements. What is the theme or message of the work, and what events in the plot lead the reader to make that conclusion? Make your explanation suspenseful, making the reader interested in the work.",
      
      "Discuss the various reactions or adaptations to the work, both from critics and the public, and whether these opinions evolved over time. Why was this specific work different from others at the time, and how did authors of its era view it?",
      
      "Conclude with an examination of the lasting influence and legacy of [insert]. How has the work been interpreted and adapted over time? What impact has it had on later literary movements, artists, or other forms of media? Discuss how [insert] remains relevant today, whether through its adaptations, academic study, or cultural references."
    ],
    "Movement": [
      "Use as much suspense as possible when you can. Begin with an explanation of the literary movement [insert]. What were the defining characteristics of the movement, and how did it differ from previous literary trends? Present the central themes or philosophies that shaped the movement and provide context for why it emerged at the time it did.",
      
      "Explore the historical context in which the movement [insert] emerged. What major cultural, political, or social events contributed to the development of this movement? How did these factors influence the themes and ideals that became central to the movement's writers and artists?",
      
      "Highlight 3-4 key authors or figures associated with [insert]. How did these individuals contribute to the development of the movement, and what specific themes or techniques did they use to challenge traditional literary norms? Use examples from their works to demonstrate their impact on the movement.",

      "Highlight 3-4 key works associated with [insert]. How did these works contribute to the development of the movement, and what specific themes or techniques did they use to challenge traditional literary norms? Use examples from them to demonstrate their impact on the movement.",
      
      "Discuss the initial reception of [insert] and how it was viewed by contemporary critics and the public. Were there any controversies or criticisms that the movement faced? How did the ideas of the movement challenge existing norms, and what kind of pushback did it receive during its heyday?",
      
      "Conclude by reflecting on the legacy and lasting influence of [insert]. How did this movement shape later literary trends, cultural movements, or artistic expressions? What aspects of the movement continue to influence writers, artists, and thinkers today? Provide examples of how the movement's ideals or techniques remain relevant in modern literature or culture."
    ]
  },
  "History": {
    "Figure/Group": [
      "Begin with an engaging introduction about the historical figure or group [insert]. Who were they, and what made them significant in history? Provide a brief overview of their most notable achievements and the impact they had on their society or the world at large.",
      
      "Discuss the historical context in which [insert] rose to prominence. What were the political, social, and cultural conditions at the time, and hwo did they allowed this figure or group to become influential? Explore how specific events of the time shaped their actions, decisions, and legacy.",

      "Investigate the personal life or internal dynamics of [insert]. Were there any personal challenges, rivalries, or controversies that shaped their actions? Discuss how their personal experiences, relationships, or motivations contributed to their historical significance.",
      
      "Examine 3-4 key contributions or actions of [insert] in detail. What were their major accomplishments, and how did they influence the course of history? Provide examples of important events or decisions they made and the lasting effect those had on their society or on world history.",
      
      "Discuss the difference before and after [insert] rose to prominence. What changes occured to closeby and far away societies?",
      
      "Reflect on the legacy of [insert]. How have they been remembered or interpreted over time? What impact did they have on future generations, and how do we view them today? Discuss how their influence persists or has been reevaluated in modern history.",
    ],
    "Period/Event": [
      "Start with an engaging introduction to the period or event [insert]. What was its significance in history, and why is it remembered? Provide a brief overview of the key developments or turning points, emphasizing its importance in shaping the course of history.",
      
      "Describe the social, political, and cultural context and how it lead to [insert] taking place. How did the larger historical forces of the time contribute to its occurrence?",

      "Explain 3-4 smaller events that directly led to [insert] happening. What were the specific underlying causes, conditions, or other events that led to this event or period?",
      
      "Examine 3-4 main events or milestones within [insert]. What were the key actions, decisions, or battles that defined this period or event?",
      
      "Analyze the reactions to [insert]. How did different groups or individuals respond to the events of this time? Were there any controversies, conflicts, or challenges associated with this period, and how did they affect the aftermath or legacy?",
      
      "Conclude by discussing the lasting influence and consequences of [insert]. How did it change history, and what were the long-term effects? Reflect on how this period or event continues to shape modern politics, society, or global relations.",
    ],
    "Governing Body": [
      "Begin with an introduction to the governing body [insert]. What is its primary function or role in history, and what made it influential? Provide a brief overview of its formation, structure, and the key issues it addressed during its existence.",
      
      "Explore the historical context that led to the creation of [insert]. What were the political, social, or cultural forces that gave rise to this governing body? How did the needs of the time shape its structure, powers, and objectives?",

      "Describe the internal structure of [insert], including any notable political parties, factions, minorities, leaders, or conflicts that influenced its operation, both in good and bad ways. Were there any power struggles or controversies within the body that shaped its decisions or legacy?",
      
      "Examine 3-4 key decisions, policies, or actions taken by [insert]. What were its most significant accomplishments or failures? Provide examples of how it impacted the political landscape or the lives of the people it governed.",

      "Examine 3-4 key leading figures of [insert]. How did they shape the area that it governed? What specific policies did they implement, and what were the results of those policies?",
      
      "Reflect on the long-term impact of [insert]. How has it influenced modern governance, politics, or international relations? Discuss how its legacy continues to be felt today, whether through its political philosophies, institutional structures, or direct influence on current governments.",
    ]
  },
  "Science": {
    "Object/Device": [
      "Begin with an engaging introduction to [insert]. What is it, and why is it significant in the field of science? Provide a brief overview of its development and primary purpose, emphasizing how it has contributed to the advancement of knowledge or technology.",

      "Explore the historical context in which [insert] was developed or discovered. What scientific problems or gaps in knowledge prompted its creation? Discuss the pioneers or teams behind the object/device and how their work led to this breakthrough.",

      "Dive into 3-4 scientific principles or mechanics that make [insert] function. What laws, theories, or technological innovations does it rely on? Provide a detailed explanation of its core operation and how it solves real-world problems or furthers scientific inquiry.",

      "Examine 3-4 key moments in the evolution of [insert]. What modifications or enhancements have been made to it over time? Discuss how these changes have improved its efficiency or broadened its applications in different scientific fields.",

      "Discuss the impact of [insert] on various industries or areas of science. How has its use shaped advancements in technology, medicine, or research? Provide examples of how it continues to influence the way we approach problems or think about solutions.",

      "Conclude by reflecting on the future of [insert]. How do experts foresee its role in future developments or technological trends? Discuss any ongoing research or potential innovations that could push the boundaries of what this device/object can achieve."
    ],
    "Process/Technique": [
      "Begin with an introduction to [insert]. What is this scientific process or technique, and why is it considered groundbreaking or essential? Provide an overview of how it was developed and the primary challenges it addresses in scientific research.",

      "Discuss the historical development and key figures behind the evolution of [insert]. What were the early methods or approaches, and how did they evolve into the process we recognize today? Were there key experiments or trials that led to major breakthroughs in its application?",

      "Explain the underlying principles behind [insert]. What theories, laws, or models support its functioning? Dive into the scientific mechanics or reactions involved, and explain how it contributes to a deeper understanding of natural phenomena.",

      "Describe 3-4 main applications of [insert]. How has this technique been used in various scientific fields, such as biology, chemistry, physics, or medicine, and what are the scientific laws, principles, or theories underlying its applicability in this field? Provide specific examples of how it has been pivotal in advancing research or technology.",

      "Examine the specific situations, limitations or challenges associated with [insert]. What are the conditions or variables that make technique usable or not? Is this technique still evolving, and if it is, what refinements are being made?",

      "Conclude by considering the future of [insert]. What advancements or improvements are being explored, and how might this process/technique impact emerging scientific fields? Discuss its potential for expanding our understanding of the natural world."
    ],
    "Formula": [
      "Begin with an introduction to [insert]. What is this formula, and why is it vital to our understanding of a specific scientific concept? Provide a brief overview of what the formula expresses and the foundational theory behind it.",

      "Discuss the origins of [insert]. Who derived this formula, and what scientific questions or experiments led to its development? Provide context about the time period or scientific discoveries that influenced its formulation. Also, provide the specific situation and any limitations or challenges for where this formula can be used.",

      "Dive into all the components and significance of [insert]. What does each part of the formula represent, and how do the variables relate to one another? Provide a detailed explanation of how the formula is used in practice and its impact on scientific research or problem-solving.",

      "Examine 3-4 notable real-world applications of [insert]. How has this formula been used in various scientific fields? Discuss how it has contributed to advances in technology, physics, engineering, or chemistry, providing examples of successful experiments or innovations.",

      "Address the continued relevance of [insert]. Is it still considered accurate, or have modern developments led to updates or refinements? Discuss any current research exploring new aspects of the formula or its broader implications for scientific understanding.",

      "Conclude by looking to the future of [insert]. How might this formula evolve, and what new discoveries could it help unlock in the coming years? Consider how it continues to shape scientific inquiry and technological progress."
    ],
    "Scientist": [
      "Begin with an introduction to [insert]. Who were they, and what were their major contributions to science? Provide a brief overview of their life, focusing on their most significant discoveries or theories and the lasting impact they had on their field.",

      "Explore the context in which [insert] made their breakthrough. What was the scientific community like at the time, and what challenges or ideas led them to their discoveries? How did their background, education, or personal experiences influence their work?",

      "Investigate 3-4 key experiments or discoveries made by [insert]. What were their major works, and how did they change the direction of their field? Discuss how these discoveries shaped the course of scientific inquiry and led to further advancements.",

      "Examine 3-4 scientific principles, techniques, formulas, or discoveries that are used today that [insert] was a major contributor towards the discovery of. How and why are they still used in real-world applications? Provide detailed scientific explanations for how they work.",

      "Reflect on the lasting impact of [insert]. How have their contributions influenced modern science and technology? Consider how their theories or discoveries continue to be applied in current research or innovations.",

      "Conclude by considering how [insert]'s legacy is viewed today. How do contemporary scientists, educators, and the public remember them? Discuss any modern interpretations or controversies surrounding their work."
    ],
    "Pure Substance": [
      "Begin with an introduction to [insert]. What is this substance, and why is it fundamental to its field of science? Provide a brief overview of its properties, characteristics, and significance in both theoretical and practical contexts.",

      "Explore the history of [insert]. When and how was it first discovered or isolated? Who were the key figures in its discovery, and what scientific knowledge did it help expand upon?",

      "Provide 3-4 major steps in the most common synthesis of [insert] today. Explain the detailed scientific principles, laws, theories, or discoveries that help explain the synthesis process. Also, explain 1-2 alternative pathways to [insert]'s synthesis.",

      "Dive into the chemical or physical properties of [insert]. What makes this substance unique, and how does it interact with other substances? Provide a detailed scientific explanation of its molecular or atomic structure, and its role in chemical reactions or physical processes.",

      "Discuss 3-4 major uses or applications of [insert]. How has it been employed in industry, medicine, or research? Highlight specific examples where this substance has been pivotal in technological or scientific progress.",

      "Conclude by reflecting on the future of [insert]. What potential discoveries or applications are scientists exploring? Discuss how ongoing research could unlock new uses or deepen our understanding of this substance."
    ],
    "Problem/Disease": [
      "Begin with an introduction to [insert]. Provide a brief explanation of what [insert] is, why [insert] is a problem, and what would be different if a solution were to be found to the problem.",

      "Explore the history of [insert]. When was [insert] first discovered? Who were the key figures in its discovery, what was the state of scientific knowledge like before discovery, and what were some key steps in its discovery?",

      "Explain in detail why [insert] happens. Why does this problem even happen in the first place? Provide a detailed scientific explanation with 3-4 key steps or observations that causes [insert] to happen.",

      "Explain in detail 3-4 solutions to [insert], including overall solutions or minor cures/antidotes. Why do these solutions work? Provide a detailed scientific explanation on how these problems are fixed.",

      "Elaborate on 3-4 reasons why [insert] is such a big problem. What implications does this have on the modern day? What would the state of scientific knowledge be like once the problem has been solved? Provide detailed scientific explanations for why these reasons occur as a result of this problem occuring.",

      "Conclude by reflecting on the future of [insert]. How prevalent is this problem in modern society, and how are modern discoveries shaping the path towards a solution? Discuss how ongoing research could potentially solve this problem, and what this would mean for our future."
    ],
    "Property": [
      "Begin with an introduction to [insert]. Provide a brief explanation of what [insert] is, why [insert] arises, and what would be different if this property didn't exist.",

      "Explore the history of [insert]. When was [insert] first discovered? Who were the key figures in its discovery, what was the state of scientific knowledge like before discovery, and what were some key steps in its discovery?",

      "Explain in detail why [insert] happens. Why does this property even arise in the first place? Provide a detailed scientific explanation with 3-4 key steps or observations that causes [insert] to happen.",

      "Elaborate on 3-4 applications of [insert]. What implications does this have on the modern day? Provide detailed scientific explanations for why these reasons occur as a result of this problem occuring.",

      "Discuss modern research on utilizing this property. How could it be used in the future, and how could its positive effects be maximized? Provide 3-4 real-world examples.",

      "Conclude by reflecting on the future of [insert]. How used is this property in modern society, and how are modern discoveries shaping the path towards improving the usability of this property? Discuss how ongoing research could use this property more, and what this would mean for our future."
    ]
  },
  "Fine Arts": {
    "Artist/Musician/etc.": [
      "Begin with an introduction to [insert]. Who were they, and what were their most significant contributions to the world of fine arts? Provide a brief overview of their background, their most iconic works, and the lasting impact they had on their respective field.",

      "Explore the historical context in which [insert] rose to prominence. What were the social, cultural, or political conditions of the time that shaped their work? Discuss how the broader artistic movements of the period influenced their style, themes, and technique.",

      "Investigate 3-4 key works of [insert]. Describe the important characteristics and details of each work. What are their major achievements, and how did these works impact the art world? Discuss the themes, techniques, and innovations present in these works, and explain how they reshaped artistic norms.",

      "Examine 3-4 examples of [insert]'s life, character, personal struggles, or relationships affecting their creative output. Were there any controversies or challenges they faced that shaped their legacy?",

      "Reflect on the reception of [insert]'s work during their lifetime versus how it is viewed today. How have critics and audiences interpreted their contributions over time? Discuss how their influence has evolved in modern times.",

      "Conclude by considering the legacy of [insert]. How do contemporary artists, educators, and art institutions continue to be influenced by their work? Discuss how their approach or themes persist in current artistic practice."
    ],
    "Painting/Piece/etc.": [
      "Begin with an introduction to [insert]. What is this work, and why is it considered significant in the context of fine arts? Provide a brief overview of its creation, its initial reception, and the impact it has had on art history.",

      "Explore the historical context surrounding the creation of [insert]. What were the cultural, social, or political forces that influenced its conception? How did these factors shape the themes, style, and composition of the work?",

      "Dive into the details of [insert]. What techniques, materials, instruments were used in its creation? Break down how the artist or composer executed their vision, highlighting 3-4 unique or innovative aspects that set this piece apart from others of its time.",

      "Discuss 3-4 major themes or motifs present in [insert]. What messages or emotions did the artist or composer seek to convey? Explore how these themes reflect the artist's worldview or respond to the social issues of their time.",

      "Examine the reception and influence of [insert]. How was it initially received by critics and the public? Did it spark controversy or lead to new trends in the artistic community? Discuss how it continues to inspire artists or musicians today.",

      "Conclude by reflecting on the lasting impact of [insert]. How has this work been preserved or reinterpreted in modern times? Discuss how its influence persists in contemporary art or music, and how it continues to shape new generations of artists or musicians."
    ],
    "Movement": [
      "Begin with an introduction to [insert]. What was this artistic movement, and why is it considered a pivotal moment in the history of art or music? Provide a brief overview of the movement’s origins, major figures, and key themes.",

      "Discuss the historical and cultural context in which [insert] emerged. What were the social, political, and intellectual forces that contributed to the development of this movement? Explore how the world events or prevailing philosophies of the time influenced the movement’s ideology.",

      "Investigate the key characteristics or techniques of [insert]. What defined the style or aesthetic of this movement, and how did it differ from the movements that preceded or followed it? Discuss 3-4 works that exemplify these defining traits.",

      "Examine 3-4 major figures within [insert]. Who were the artists who led this movement, and how did they shape its direction? Discuss their most influential works and the role they played in the movement's success or decline.",

      "Discuss the impact of [insert] on subsequent artistic movements or the broader cultural landscape. How did it inspire future generations of artists, musicians, or thinkers? Was it a catalyst for further innovation or a response to prior artistic trends?",

      "Conclude by reflecting on the legacy of [insert]. How is this movement viewed today, and what aspects of it continue to influence contemporary art or music? Consider how its core ideas are still relevant or have been revisited in the modern context."
    ]
  },
  "Religion": {
    "Religious System": [
      "Begin with an introduction to [insert]. What is this religious system, and why is it significant within the context of world religions? Provide a brief overview of its core beliefs, practices, and rituals, and how it has shaped the lives of its followers.",

      "Explore the historical origins of [insert]. When and where did this religious system emerge, and what were the cultural, social, or philosophical factors that influenced its development? Discuss key figures or founders who played a central role in establishing its teachings and practices.",

      "Dive into the core teachings or doctrines of [insert]. What are 3-4 of its central tenets, and how do they shape the worldview of its followers? Discuss any sacred texts, ethical principles, or theological concepts that define this religious system.",

      "Examine the evolution of [insert] over time. How has it adapted to changing political, social, or cultural contexts? What key events or figures influenced the transformation of this system throughout history?",

      "Discuss the impact of [insert] on the societies where it is practiced. How has it shaped cultural norms, legal systems, art, and education? Provide examples of how this religious system has influenced local or global politics, social structures, and historical events.",

      "Conclude by reflecting on the future of [insert]. How do its teachings and practices continue to evolve in the modern world? Consider how contemporary issues, such as technology or globalization, may influence the continued relevance or transformation of this religious system."
    ],
    "Holiday": [
      "Begin with an introduction to [insert]. What is the significance of this holiday in the context of the religion it belongs to? Provide a brief overview of its origins, key traditions, and its meaning for adherents of the faith.",

      "Explore the history of [insert]. When did this holiday first emerge, and what historical or religious events does it commemorate? Discuss the figures or stories associated with its origin, and how it has been observed over time.",

      "Dive into 3-4 specific rituals and practices associated with [insert]. What activities or observances are central to the celebration of this holiday? Provide details about the customs, symbols, or ceremonies that define how this holiday is celebrated around the world.",

      "Examine the social and cultural impact of [insert]. How has this holiday influenced the broader culture outside of its religious context? Discuss its role in shaping community, identity, and social interaction, both within religious groups and in the wider society.",

      "Discuss the global variations of [insert]. How is this holiday observed differently in various countries or regions? Explore how local traditions, cultural values, and history shape the unique ways in which it is celebrated.",

      "Conclude by considering the future of [insert]. How is this holiday evolving in the modern world? Are there any challenges or opportunities that may shape its observance or meaning for future generations?"
    ],
    "Practice": [
      "Begin with an introduction to [insert]. What is this religious practice, and why is it important within the context of the religion it belongs to? Provide an overview of its purpose, significance, and how it connects believers to their faith.",

      "Explore the historical development of [insert]. When did this practice first emerge, and what were the circumstances that led to its adoption? Who were the key figures or traditions that influenced its establishment and spread?",

      "Dive into 3-4 key steps or rituals involved in [insert]. What actions or behaviors are performed by practitioners, and what do they symbolize? Provide a detailed explanation of how this practice is performed in different settings, such as homes, temples, or pilgrimage sites.",

      "Examine the theological or philosophical underpinnings of [insert]. What spiritual or ethical concepts are conveyed through this practice? Discuss how it helps adherents cultivate a deeper understanding of their faith and personal connection to the divine.",

      "Discuss the impact of [insert] on the lives of its practitioners. How does it shape their daily lives, moral decisions, or worldview? Provide examples of how this practice influences personal relationships, community involvement, or societal behavior.",

      "Conclude by reflecting on the future of [insert]. How might this practice evolve as the religion faces modern challenges or shifts in its community? Discuss the ongoing relevance of this practice in an increasingly globalized or secular world."
    ]
  },
  "Mythology": {
    "Myth System": [
      "Begin with an introduction to [insert]. What is this myth system, and why is it significant within the cultural or religious context from which it originates? Provide a brief overview of the key themes, stories, and figures within this mythology, and explain its role in shaping the worldview of its followers.",

      "Explore the origins of [insert]. When and where did this myth system first emerge, and what were the societal, cultural, or environmental factors that influenced its development? Discuss 3-4 key events, individuals, or cultures that played a central role in the establishment of this mythological framework.",

      "Dive into 3-4 central stories and themes of [insert]. What are the most significant myths, legends, or epic tales, and what do they reveal about the culture that created them? Analyze the role of conflict, gods, heroes, and the natural world within these myths.",

      "Examine how [insert] has evolved over time. How has this myth system changed across different regions, cultures, or historical periods? What adaptations or reinterpretations have emerged, and how do they reflect shifts in societal values or beliefs?",

      "Discuss the impact of [insert] on art, literature, and popular culture. How have these myths influenced various forms of creative expression, such as visual art, theater, literature, or film? Provide 3-4 examples of how elements of this myth system are still relevant today in modern storytelling.",

      "Conclude by reflecting on the enduring legacy of [insert]. How do contemporary societies view and reinterpret these myths? Consider how these stories continue to shape modern culture, religious practices, or personal identity."
    ],
    "Deity/Person": [
      "Begin with an introduction to [insert]. Who are they, and why are they significant within the context of their mythology? Provide an overview of their characteristics, powers, and role within the myth system, and explain their importance to the culture that worships or reveres them.",

      "Explore the origins of [insert]. When did this deity or mythological person first appear in mythological records, and what was the historical or cultural context in which they emerged? Discuss 3-4 key myths or stories that revolve around this figure and their relationships with other deities, heroes, or mortals.",

      "Dive into the attributes and symbolism of [insert]. What are the key symbols, powers, or objects associated with them? How do these elements reinforce their character and role within the mythology?",

      "Examine the influence of [insert] on the people who worship or honor them. How do their actions, teachings, or stories impact cultural values, rituals, and societal norms? Provide examples of how this deity or mythological person shapes religious practices or daily life.",

      "Discuss 3-4 representations of [insert] in art and literature. How have artists, writers, and other creatives depicted this figure throughout history? Explore the different interpretations or portrayals of this deity or person in various cultural or historical contexts.",

      "Conclude by considering the lasting legacy of [insert]. How is this figure viewed in the modern world? Are there contemporary movements, interpretations, or practices that continue to draw inspiration from this deity or mythological person?"
    ],
    "Object": [
      "Begin with an introduction to [insert]. What is this object, and why is it important within the mythology it belongs to? Provide an overview of its origins, powers, and significance, explaining how it is used or revered in the mythological narratives.",

      "Explore the history of [insert]. Where did this object originate, and what key myths or legends are associated with it? Discuss the key events or heroes connected to the object and how it influences the course of the mythology.",

      "Dive into the symbolism and meaning behind [insert]. What does this object represent in terms of divine power, cultural values, or moral lessons? Explain how the object serves as a metaphor or symbol in the mythological system.",

      "Examine the physical properties and use of [insert]. How is the object described in mythological texts? What specific qualities or abilities make it important within the stories, and how do its features link to the actions or decisions of the characters involved?",

      "Discuss the impact of [insert] on culture and religion. How has this object influenced rituals, worship, or artistic expression? Provide examples of how the object is integrated into religious practices, ceremonies, or festivals.",

      "Conclude by reflecting on the continued relevance of [insert]. Does this object have a symbolic presence in modern culture? Explore how it may have influenced modern symbols, artifacts, or myths, and how it is still referenced or admired today."
    ]
  },
  "Philosophy": {
    "School of Thought": [
      "Begin with an introduction to [insert]. What is this school of thought, and why is it significant in the context of philosophy? Provide a brief overview of its founding principles, key ideas, and the main questions it seeks to address in human existence, ethics, knowledge, or the nature of reality.",

      "Explore the historical origins of [insert]. When and where did this school of thought emerge, and what were the cultural or intellectual conditions that influenced its development? Discuss 3-4 key philosophers or movements that played a crucial role in establishing this school and its influence on other philosophical traditions.",

      "Dive into 3-4 central ideas and arguments that define [insert]. What are the core doctrines or theses associated with this school? Explore how these ideas challenge or build upon other philosophical perspectives and examine how they have evolved over time.",

      "Discuss 3-4 key works that played a crucial role in furthering the interests of [insert]. Provide specific examples of content found in these works that supported and advanced [insert].",

      "Examine how [insert] has influenced other areas of thought or intellectual pursuits. How has this school of thought shaped disciplines such as politics, psychology, science, or art? Provide examples of how its ideas have permeated different fields and influenced social or cultural movements and evolved over time.",

      "Conclude by reflecting on the lasting legacy of [insert]. How do contemporary thinkers continue to engage with or reinterpret its ideas? Consider the future of this school of thought and its potential for further exploration or application in contemporary philosophical debates."
    ],
    "Philosopher": [
      "Begin with an introduction to [insert]. Who were they, and what were their major contributions to philosophy? Provide an overview of their life, focusing on the key ideas or works that made them a pivotal figure in philosophical history.",

      "Explore the intellectual context in which [insert] developed their philosophical ideas. What were the philosophical movements or historical events that influenced their thinking? Discuss the personal experiences or influences that shaped their worldview and philosophical pursuits.",

      "Dive into 3-4 major works and ideas of [insert]. What are the key texts or arguments they are known for, and how do these contributions address fundamental philosophical questions about existence, ethics, or knowledge? Analyze the philosophical problems they sought to solve and their approach to these issues.",

      "Examine how [insert]'s ideas have influenced subsequent generations of philosophers. What impact did their philosophy have on later thinkers, schools of thought, or cultural movements? Discuss how their work shaped the course of philosophical inquiry and continues to resonate today.",

      "Discuss the controversies or criticisms that surround [insert]'s philosophy. How have their ideas been challenged, and what debates continue around their work? Provide examples of how modern philosophers critique or reinterpret their ideas in light of contemporary issues.",

      "Conclude by reflecting on the enduring relevance of [insert]. How are their ideas viewed in modern philosophical discussions? Are there new interpretations or adaptations of their work that continue to shape the direction of philosophy today?"
    ],
    "Work/Text": [
      "Begin with an introduction to [insert]. What is this work, and why is it considered a landmark in philosophical thought? Provide a brief overview of the text's central themes, objectives, and the philosophical questions it addresses.",

      "Explore the historical context in which [insert] was written. What were the intellectual, political, or cultural conditions that influenced the author at the time? Discuss the primary motivations behind the creation of this text and how it reflects the intellectual climate of its period.",

      "Dive into 3-4 key arguments or concepts presented in [insert]. What are the central ideas, theories, or philosophical problems addressed in this work? Provide an analysis of the main arguments or structures used to present these ideas and how they advance philosophical thinking.",

      "Examine the reception of [insert] when it was first published. How was it received by contemporaries, and what was its impact on the philosophical community? Discuss any initial criticisms or support that shaped its place in the history of philosophy.",

      "Discuss the lasting influence of [insert]. How has this text influenced later philosophers, schools of thought, or intellectual movements? Provide examples of how its ideas have been incorporated or challenged by later works and its role in contemporary philosophical debates.",

      "Conclude by reflecting on the continued relevance of [insert]. Does this work remain influential today? How are its ideas being revisited or reinterpreted in the context of modern philosophical issues or societal concerns?"
    ]
  },
  "Social Science": {
    "Social Scientist": [
      "Begin with an introduction to [insert]. Who were they, and what were their major contributions to the field of social science? Provide an overview of their life, focusing on the key theories or ideas that made them influential in areas such as sociology, psychology, anthropology, or political science.",

      "Explore the intellectual context in which [insert] made their contributions. What were the social, political, or intellectual movements that influenced their thinking? How did their background or personal experiences shape the development of their theories?",

      "Dive into 3-4 key works or studies by [insert]. What were their major research findings or theoretical contributions? Discuss the methods they used and the impact their research had on shaping the field of social science.",

      "Examine 3-4 ways in which [insert]'s work has influenced later thinkers, researchers, or social movements. What specific concepts did they develop that are still in use today? What impact did their ideas have on the evolution of social science? Consider how their work is applied in modern research or practice.",

      "Discuss the criticisms or controversies surrounding [insert]'s work. How have their ideas been challenged by other social scientists or intellectuals? Provide examples of debates or differing perspectives on their contributions.",

      "Conclude by reflecting on the lasting legacy of [insert]. How are their ideas viewed in contemporary social science? Consider the ongoing relevance of their theories and how their work continues to influence current research and social issues."
    ],
    "Theory/Concept": [
      "Begin with an introduction to [insert]. What is this theory or concept, and why is it fundamental to the study of social science? Provide a brief overview of the main ideas it represents and the significance it holds in understanding human behavior, society, or culture.",

      "Explore the historical context in which [insert] was developed. Who were the key social scientists or intellectuals behind its formulation? What social, political, or academic challenges did they face, and how did their work lead to the development of this theory or concept?",

      "Dive into 3-4 core principles and ideas of [insert]. What are the fundamental assumptions or propositions behind it? Provide a detailed explanation of how this theory or concept addresses key social questions or problems, and how it has shaped the study of human societies.",

      "Examine 3-4 applications of [insert] in different social science disciplines. How has this theory or concept been used in fields such as sociology, psychology, economics, or political science? Provide examples of how it has been applied in research or social policy.",

      "Discuss the criticisms or limitations of [insert]. How have other social scientists or theorists challenged its validity or utility? Are there specific cases where this theory or concept fails to account for certain phenomena?",

      "Conclude by reflecting on the future of [insert]. How is this theory or concept evolving, and how might it continue to shape the direction of social science? Consider its relevance in addressing contemporary social issues and its potential for future research or development."
    ]
  },
  "Geography": {
    "Country/State/etc.": [
      "Begin with an introduction to [insert]. What is the significance of this country or state in a global or regional context? Provide an overview of its geography, culture, economy, and history, highlighting what makes it unique or influential.",

      "Explore the historical and political context of [insert]. What key events or movements have shaped this country or state? Discuss the geographical, political, or cultural factors that contributed to its development and its role in international affairs.",

      "Dive into 3-4 major geographical features of [insert]. What are the key landforms, climate patterns, and natural resources that define its geography? Provide a detailed look at how these physical elements have influenced the economy, culture, and daily life of its people.",

      "Examine the demographics of [insert]. Who are its people, and what are the social, cultural, and economic characteristics of its population? Discuss how factors such as migration, urbanization, and population growth have shaped its identity.",

      "Discuss the challenges and opportunities faced by [insert] today. How do geography, politics, or economics influence its current status? Explore modern issues such as environmental concerns, development, or international relations.",

      "Conclude by reflecting on the future of [insert]. What are the emerging trends or developments that will shape this country or state in the coming years? Consider how its geographical or political characteristics may evolve and affect its global position."
    ],
    "National Park/Physical Feature": [
      "Begin with an introduction to [insert]. What is this national park or physical feature, and why is it significant in the study of geography or natural history? Provide a brief overview of its location, size, and unique characteristics that make it noteworthy.",

      "Explore the history of [insert]. When was it first discovered or established? Who were the key individuals or organizations involved in its preservation or recognition as a national park or physical feature? What efforts were made to protect it?",

      "Dive into 3-4 ecological or geological aspects of [insert]. What are the key natural processes, landforms, ecosystems, or species that define it? Explain the scientific significance of this area and how it contributes to our understanding of environmental science or geology.",

      "Examine the human impact on [insert]. How have people interacted with this area over time? Discuss the effects of tourism, development, or conservation efforts, and how they have influenced its preservation or accessibility.",

      "Discuss the role of [insert] in conservation or environmental education. How has it contributed to the protection of biodiversity, public awareness of environmental issues, or scientific research?",

      "Conclude by reflecting on the future of [insert]. What challenges does it face today in terms of environmental protection or sustainable tourism? Consider the efforts being made to ensure its continued preservation and its potential role in the future of conservation."
    ],
    "City": [
      "Begin with an introduction to [insert]. What is this city known for, and why is it significant in terms of geography, culture, or history? Provide an overview of its location, size, and key features that make it a hub of activity or influence.",

      "Explore the historical development of [insert]. How did it come to be established, and what key events or movements shaped its growth? Discuss 3-4 factors that led to its prominence and how it evolved over time in response to social, political, and economic changes.",

      "Dive into the physical geography of [insert]. What are 3-4 key natural features, climate, and urban landscape that define it? Explain how geography influences its infrastructure, economy, and the daily lives of its inhabitants.",

      "Examine 3-4 social and cultural aspects of [insert]. Who lives in the city, and what are the demographic characteristics of its population? Discuss the city's cultural, educational, and economic significance, and how it is represented in arts, media, or global affairs.",

      "Discuss the challenges faced by [insert] in the modern era. What issues such as urbanization, transportation, housing, or environmental sustainability impact the city today? How is the city addressing these challenges?",

      "Conclude by reflecting on the future of [insert]. How is this city likely to evolve in the coming decades? Consider trends in population growth, technology, or cultural shifts that will shape the future of the city and its role in the larger geographical or political landscape."
    ]
  },
  "Current Events/Other Academic/Trash": {
    "Figure/Group": [
      "Begin with an introduction to [insert]. Who are they, and what role do they play in current events or academic discussions? Provide a brief overview of their significance, whether political, social, or cultural, and highlight key actions or influences they have had recently.",

      "Explore the background and history of [insert]. What major events or shifts led to their prominence? Discuss their rise to fame, whether through activism, politics, or any other major contributions to society or their field.",

      "Dive into 3-4 ideologies, goals, or controversies surrounding [insert]. What is their mission or message, and how has it been received by different groups? Discuss the positive and negative reactions they've sparked and the impact they have had on public opinion.",

      "Examine 3-4 social, political, or economic influences that have shaped [insert]. What are the key factors or movements they have been involved with? How have these influences altered the course of events or discussions surrounding them?",

      "Discuss the reception of [insert] in the media or public discourse. How have they been portrayed or critiqued, and what impact has this had on their success or failure? Consider how their influence has spread across social platforms, traditional media, or academic spaces.",

      "Conclude by reflecting on the future of [insert]. What are the next steps for this figure or group? How do experts or observers predict their role will evolve in the coming months or years?"
    ],
    "Country/State/etc.": [
      "Begin with an introduction to [insert]. What are the recent developments or challenges faced by this country, state, or region? Provide an overview of current issues that are shaping its political, economic, or cultural landscape.",

      "Explore the historical context of [insert]. What events or trends have contributed to the present situation? Discuss how history has influenced their current policies or stance on international issues.",

      "Dive into 3-4 key political, economic, or social changes occurring in [insert]. How are government policies or international relations evolving? What are the major challenges and opportunities for this country or state right now?",

      "Examine the social dynamics of [insert]. How are the people of this country or region responding to current events, protests, or movements? What social issues are at the forefront of public debate, and how are they being addressed?",

      "Discuss the impact of global events on [insert]. How have international crises, economic downturns, or pandemics influenced this region? Consider how the country or state is navigating global changes and how its position affects worldwide trends.",

      "Conclude by reflecting on the future of [insert]. What potential future developments or shifts might affect this region? Consider the long-term effects of current decisions, both internally and on a global scale."
    ],
    "Period/Event": [
      "Begin with an introduction to [insert]. What major event or historical period does this refer to, and why is it significant in shaping current affairs or academic discourse? Provide an overview of the event's main causes and effects.",

      "Explore the origins of [insert]. How did this event or period come about, and what factors led to its occurrence? Discuss the political, social, or economic conditions that made this moment in history inevitable or necessary.",

      "Dive into 3-4 key developments during [insert]. What were the turning points, and how did they affect the course of history or modern society? Explore the different narratives or interpretations of this event from various perspectives.",

      "Examine the aftermath of [insert]. How did this period or event shape the world moving forward? Consider how the repercussions of this time continue to affect contemporary issues, movements, or ideologies.",

      "Discuss the cultural or social impact of [insert]. How did it influence art, literature, media, or other cultural movements? What lasting legacies remain from this event or period?",

      "Conclude by reflecting on the ongoing relevance of [insert]. How do scholars, activists, or the public continue to analyze or debate its significance today?"
    ],
    "Artist/Band": [
      "Begin with an introduction to [insert]. Who are they, and what makes their work or music stand out? Provide a brief overview of their style, sound, and cultural impact, particularly in the current music scene.",

      "Explore the origins and formation of [insert]. How did the group or artist come together, and what were the key influences or events that shaped their sound or artistic direction?",

      "Dive into 3-4 major works of [insert]. What are their most notable songs, albums, or performances? Discuss the themes, lyrics, or musical style that define their work and how they have evolved over time.",

      "Examine the impact of [insert] on contemporary music or culture. How have they influenced other artists, genres, or trends? Consider the social, political, or cultural messages they have conveyed through their work.",

      "Discuss the reception of [insert] by critics and fans. How have they been received by the public and the music industry? What accolades or controversies have they encountered throughout their career?",

      "Conclude by reflecting on the future of [insert]. What direction are they heading in artistically? How do experts predict their influence will evolve in the coming years?"
    ],
    "TV Show/Movie": [
      "Begin with an introduction to [insert]. What is this TV show or movie about, and why is it relevant today? Provide an overview of its plot, themes, and the key reasons it has gained attention or critical acclaim.",

      "Explore the development of [insert]. What are the major influences behind its creation, and how did the production process unfold? Discuss the key individuals involved and their vision for the project.",

      "Dive into 3-4 main themes or messages of [insert]. What social, cultural, or philosophical ideas are explored through the characters and storyline? How does the show or movie engage with contemporary issues?",

      "Examine the reception of [insert]. How have audiences and critics responded to it? Consider the controversies, praise, or discussions it has sparked in the media and public discourse.",

      "Discuss the impact of [insert] on popular culture. How has it influenced trends in TV, film, or media? What lasting impressions has it left on viewers or the industry?",

      "Conclude by reflecting on the future of [insert]. How do experts predict this show or movie will influence upcoming works, or what legacies might it leave in media or entertainment?"
    ],
    "Game": [
      "Begin with an introduction to [insert]. What type of game is it, and why is it significant in the gaming world? Provide a brief overview of its mechanics, themes, and impact on the gaming industry.",

      "Explore the development and creation of [insert]. Who were the key developers behind it, and what inspired its creation? Discuss the challenges and innovations that shaped the game's design.",

      "Dive into the gameplay experience of [insert]. What makes it unique or groundbreaking in terms of mechanics, narrative, or technology? How does it engage players and create a memorable experience?",

      "Examine the reception of [insert]. How have players and critics reacted to the game? Discuss its commercial success, critical acclaim, or controversies, and how it fits into the broader gaming landscape.",

      "Discuss the cultural impact of [insert]. How has it influenced gaming culture, trends, or other forms of media? What lasting effects has it had on gaming conventions or player behavior?",

      "Conclude by reflecting on the future of [insert]. What innovations or sequels might emerge from this game? How will it continue to influence the gaming industry moving forward?"
    ],
    "Sports Team": [
      "Begin with an introduction to [insert]. What makes this sports team unique or significant in their league or sport? Provide a brief overview of their history, achievements, and key players.",

      "Explore the development and evolution of [insert]. How did the team form, and what 3-4 major events or figures shaped their identity? Discuss the team's journey to success or the challenges they have faced along the way.",

      "Dive into 3-4 players on the current roster of [insert]. Who are the key players driving the team forward? Analyze their strengths, weaknesses, and how they fit into the team's overall strategy or performance.",

      "Examine the team's performance in recent seasons. How have they performed in key competitions, and what are their prospects for the future? Discuss the factors influencing their success or challenges on the field.",

      "Discuss the fan base and cultural significance of [insert]. How do fans engage with the team, and what impact does the team have on the local community or the larger sports culture?",

      "Conclude by reflecting on the future of [insert]. What are the team's goals and prospects in the coming years? How might changes in management, strategy, or player lineup shape their future?"
    ],
    "Sports Player": [
      "Begin with an introduction to [insert]. Who are they, and what makes them an influential or standout player in their sport? Provide an overview of their career, achievements, and playing style.",

      "Explore the background and early life of [insert]. How did they rise to prominence, and what obstacles did they overcome? Discuss the key moments or decisions that shaped their career.",

      "Dive into 3-4 key performances or milestones of [insert]. What are the most memorable games or achievements in their career? Discuss how these moments have defined their legacy.",

      "Examine the impact of [insert] on their sport. How have they influenced the way the game is played, or how they have set new standards for future generations?",

      "Discuss the reception of [insert] by fans and the media. How have they been viewed in terms of popularity, controversy, or admiration? What has their impact been off the field, such as philanthropy or activism?",

      "Conclude by reflecting on the future of [insert]. What is next for this player? How will their career or influence continue to evolve in the years ahead?"
    ],
    "Company": [
      "Begin with an introduction to [insert]. What products or services does this company provide, and why is it significant in its industry? Provide a brief overview of its history, growth, and contributions to the market.",

      "Explore the origins and development of [insert]. What were the key events or decisions that led to the company's success? Discuss its founding vision and how it has evolved over time.",

      "Dive into 3-4 current business strategies of [insert]. What key initiatives or innovations are they pursuing? How are they adapting to changes in the market or consumer behavior?",

      "Examine the cultural and social impact of [insert]. How has the company influenced trends, technologies, or societal norms? Consider its role in shaping industries or influencing public opinion.",

      "Discuss the challenges faced by [insert] today. What obstacles are they currently navigating, such as competition, public perception, or technological shifts?",

      "Conclude by reflecting on the future of [insert]. What steps are they taking to remain competitive or relevant in the years ahead? How might they continue to innovate or expand their influence?"
    ]
  }
}

function getDocumentaryInformation(category, subcategory, topic, number) {
  let newPrompt = subjectPrompts[category][subcategory][number];

  if (number == 0) {
    newPrompt = "Please waste no time on conclusions - they have been provided separately. This is the introduction to a six-part documentary-style script. Use as much suspense as possible when you can. " + newPrompt;
  } else if (number >= 1 && number <= 4) {
    newPrompt = "Please waste no time on introductions or conclusions - they have been provided separately. " + newPrompt;
  } else {
    newPrompt = "Please waste no time on introductions - they have been provided separately. This is the conclusion to a six-part documentary-style script. End on an appreciative and fascinating note." + newPrompt;
  }
  if (number == 0 || number == 5) {
    newPrompt = newPrompt + " Make sure to provide your answer in one or more paragraphs.";
  } else {
    newPrompt = newPrompt + " Make sure to provide as much detailed information as humanly possible, providing specific examples for every claim made, but make sure that all information is thoroughly explained, leaving the reader with no questions, and presented in a cohesive and easy-to-understand manner. Make sure to provide your answer in one or more paragraphs.";
  }

  let url = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=AIzaSyCnhZl83hlfanHBoVXxJ1HWg0rSJQaynPM';

  let payload = JSON.stringify({
    contents: {
      "parts": { text: newPrompt.replace(/\[insert\]/g, topic) }
    }
  });

  let options = {
    method: 'POST',
    contentType: 'application/json',
    payload: payload
  };

  var response = UrlFetchApp.fetch(url, options);
  var jsonResponse = JSON.parse(response.getContentText());
  var text = jsonResponse["candidates"][0]["content"]["parts"][0]["text"].replace(/\n/g, "<br>");
  return text;
}

function getQuestions(inp) {
  let url = 'https://generativelanguage.googleapis.com/v1beta/QuestionGenerator:generateContent?key=AIzaSyCnhZl83hlfanHBoVXxJ1HWg0rSJQaynPM';

  let payload = JSON.stringify({
    contents: {
      "parts": { text: inp }
    }
  });

  let options = {
    method: 'POST',
    contentType: 'application/json',
    payload: payload
  };

  var response = UrlFetchApp.fetch(url, options);
  var jsonResponse = JSON.parse(response.getContentText());
  var texts = jsonResponse["candidates"][0]["content"]["parts"][0]["text"].split("|");
  return texts;
}
