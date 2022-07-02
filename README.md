# Understander
An app that assist in breaking down complex concepts to make it understandable.

**Purpose of this app**
To facilitate the process of understanding complex concepts. When a concept is not understood, it is usually because of specific words or smaller concepts within that concept that is not understood. Therefore, to understand the concept, one needs to understand those words or smaller concepts within that concept and link them together.

**How this app works**
1. Input the concept
2. Look at the Identify Keyword section and click on the keyword within the concept
3. Look at the Refine Search Term section and click on the keyword you want to modify and modify it
4. A table will be shown showing the refined search terms and possible definition. You can either write down the search term yourself or click on the provided definition to use it.
5. A display will be shown listing the original keywords and you can drag and drop into a section below so that you can have the relevant definitions in place to write down a more specific definition. 
6. Click next step to save the definition and display it below the place where you input the concept.

**Technologies used**
HTML, CSS, Javascript, https://dictionaryapi.dev/

**Approach taken**
Main strategy is divide and conquer. The project is split into two components with sub-components within them:
1. Base
    - Input concept
    - Display reconstructed definition
2. Process
    - Identify keywords
    - Refine search terms
    - Search and record
    - Construct definition

**Link to live site**
https://marcusongkiansiong.github.io/Understander/

**Problems**
1. Code organisation
    - Problem: Did not have a proper framework to structure the code
    - Solution: Brute force my way (Keep asking what is the next step and do it) until I see some structure, then apply that structure to other parts of the code.

2. Bad conceptual solutioning
    - Problem: Solution design was not well thought out, thereby causing a lot of slowdown and stops during execution because you do not know what to do.
    - Solution: 
        - Sit and think until something comes up
        - reference what already exist first when learning
