# Reddit Summarizer

This is the frontend for the project

Project Description: In this project, we’ll build a chrome extension that will summarize threads from Reddit. At a very high level, the extension can be activated when a user is on a Reddit thread. It will then send a request to the backend which will scrape some number of top level comments and concatenate them together to serve as input into our text summarization model which will generate a brief summary of the provided comments. Preprocessing comments will include all standard procedures of text cleaning (removing emojis, html tags, etc.) stemming words, and removing stop words.

We will use a few different text summarization methods potentially including Luhn, Edmunson, and Latent Semantic Analysis. In order to determine the best output among models, the general idea is that the summary most relevant to the original input will be the best summary. We can use measures such as TF-IDF (vectorize summaries, and compare cosine similarities between each summary and the original input), and BM25 (use the original input as a query and rank the summaries as “documents”) among others. If time allows and just for fun we can also call an LLM library (if we can find a free one) and ask it to summarize although I heavily suspect this will always be evaluated as the best summary.

We can evaluate our approach via annotation. We will have a set of annotation guidelines for what determines a “good” summary. Then we can have humans write some summaries and mix this into a pool of machine generated summaries. Then a different set of humans will annotate (score) the summaries without knowing which ones are human/machine written. If the machine summaries are comparable to the human summaries score-wise, then we’ve both evaluated and demonstrated the effectiveness of our approach.

# User Guide (installing locally)

Navigate to [chrome://extensions/](chrome://extensions/) then enable **Developer mode** in the upper right corner. Then click **Load unpacked** in the upper left corner. 
Navigate to installed directory and select **extension** folder.
The extension should pop up with your other install extensions, you can pin it for easy access. From there you should be able to click and activate it. 

Ensure you follow the backend code as well
https://github.com/jamyooes/redditSummarizerBackend

If there is still any confusions follow the demo-video guide from the text data submission

# High Level Overview
The front end will be a simple extension
![image](https://github.com/user-attachments/assets/d1474825-473f-416c-9f8f-217948ed582d)

Clicking the button on a non-reddit comment thread will return an error:
![image](https://github.com/user-attachments/assets/71cbf33d-c9cf-4dd6-9fce-69168e6bb70f)

Clicking the button on a reddit comment thread without the api code running will return:
![image](https://github.com/user-attachments/assets/8286e25d-ae44-4e07-bd25-dbc82c228674)

Clicking the button on a reddit comment thread with the api code running will return a summary:
![image](https://github.com/user-attachments/assets/cbabff1a-8d06-4c58-bd68-88c09e27283d)

