# Prisjakt code challenge

Please provide us with your solution as a compressed archive file (e.g. .zip or .tar.gz) containing the code, everything needed to build/run the code, and answers to the technical questions.

## The challenge
We have an ElasticSearch engine collecting products that has dropped in price recently, this engine gives customers real-time feedback on price changes during large shopping events like Black Friday and is used on all our campaigns. You will query the ElasticSearch directly.

All searches are made to `POST https://search-pj-campaigns-index-oyaq7ruf3du2owxiiiuhyqcgcm.eu-west-1.es.amazonaws.com/campaign-se-4-deals/_search`

For search on product name use the following body in your POST request

```json
{
    "query": {
        "match" : {
            "product.name" : "apple"
        }
    }
}
```

For search as you type functionality, use the `match_phrase_prefix` matcher

```json
{
    "query": {
        "match_phrase_prefix" : {
            "product.name" : "ap"
        }
    }
}
```

You can test the search with these curl commands:

`curl -H "Content-Type: application/json" -d '{"query": {"match" : {"product.name" : "apple"}}}' https://search-pj-campaigns-index-oyaq7ruf3du2owxiiiuhyqcgcm.eu-west-1.es.amazonaws.com/campaign-se-4-deals/_search`

`curl -H "Content-Type: application/json" -d '{"query": {"match_phrase_prefix" : {"product.name" : "ap"}}}' https://search-pj-campaigns-index-oyaq7ruf3du2owxiiiuhyqcgcm.eu-west-1.es.amazonaws.com/campaign-se-4-deals/_search`

Your mission is to create an application that accepts a search term as a parameter. The application should then display the following information by querying our API:

- Product name
- Price drop in percentage
- Formatted price

## Techniques 
You can create the application as either a web application or mobile application in any of the following platforms:

- React, Vue, Angular or Web Components for web applications
- Native iOS or Android for mobile applications

## Requirements
Feel free to spend as much or as little time on the challenge as you like as long as the following requirements have been met:

- Please complete the user stories below
- Your code you should compile and run in one step
- Feel free to use whatever frameworks / libraries / packages you like
- Please avoid including artifacts from your local build

## User story #1 
As a user running the application
I can view a list of products from a user submitted search term (e.g. Apple)
So that I know which products are currently available

### Acceptance criteria
For the user submitted search term, results are returned

## User story #2
As a user running the application
I can view the product image alongside product information
So that I know exactly which products are currently available

### Acceptance criteria
The name, price drop and formatted price of the product are displayed

## User story #3
As a user running the application
I can view a list of products while I type the search term
So that I can get instant feedback of which products are currenlty available

### Acceptance criteria
Results are returned while the user enters the search term

# Technical questions
1. How long did you spend on the coding challenge? What would you add to your solution if you had more time? If you didn't spend much time on the challenge then use this as an opportunity to explain what you would add.
2. How would you improve the search API you just used?
