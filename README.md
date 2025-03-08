## Table of Contents

1. [Description](#description)
1. [Features](#features)
1. [Technologies Used](#technologies-used)
1. [Project Challenges](#project-challenges)
1. [Thoughts and Observations](#thoughts-and-observations)
1. [Future Enhancements](#future-enhancements)
1. [Installation](#installation)

## Description

This project is a custom implementation of a HashMap in JavaScript. The goal is to create a fully functional hash map that supports key-value storage, handles collisions efficiently, and dynamically resizes when reaching a certain load factor. This project deepens the understanding of hash functions, handling collisions, and memory-efficient data structures. A linked list is used to resolve hash collisions efficiently.


## Features

- Implements a hash function using a prime-number-based approach.

- Handles collisions using a linked list in each bucket.

- Supports dynamic resizing, doubling capacity when the load factor (0.75) is exceeded.

- Provides various methods:

- set(key, value): Stores or updates key-value pairs.

- get(key): Retrieves a value by its key.

- has(key): Checks if a key exists.

- remove(key): Deletes a key-value pair.

- length(): Returns the number of stored keys.

- clear(): Removes all entries.

- keys(), values(), entries(): Retrieve stored data in different formats.

- Ensures index bounds safety to prevent accessing invalid memory locations.

## Technologies Used

- JavaScript for core logic

- Node.js (for testing and running scripts)

- ES6+ syntax (classes, modules, modern array methods)

## Project Challenges

# Ensuring proper hashing:

Initially, the hash function didn't handle large keys well, leading to integer overflow issues.

Applying the modulo operator inside the loop fixed this issue.

# Handling collisions:

Used linked lists inside buckets to allow multiple key-value pairs in the same index.

Required iteration through the linked list to find the correct key.

# Resizing the hash map:

When the load factor exceeded 0.75, rehashing all elements into a larger bucket structure was required.

Extracting key-value pairs while preserving their original association was challenging.

# Accessing dynamic keys in objects:

Initially, { key: value } stored "key" as a string instead of using the dynamic key value.

Using computed property names ({ [key]: value }) solved this issue.

## Thoughts and Observations

- Hash maps are an efficient way to store and retrieve data with near O(1) average time complexity.

- Handling collisions properly is crucial for maintaining performance.

- Dynamic resizing adds complexity but ensures the hash map remains performant over time.

- Implementing the set method properly required understanding how to rehash and redistribute values when resizing.

## Future Enhancements

- Implement a HashSet: A version of the HashMap that only stores keys without values.

- Optimize collision handling: Consider using open addressing instead of linked lists.

- Enhance the hash function: Explore more advanced techniques to further reduce collisions.

- Improve memory efficiency: Implement a shrinking mechanism when load factor drops significantly.

## Installation

Provide instructions on how to install and run your project locally.

Example below:

1. Clone the GitHub repository to your local machine:

   ```bash
   git clone https://github.com/JasneetSingh1/hashmap.git
   ```

2. Navigate to the project's directory:

   ```bash
   cd your-project-name
   ```

3. To run the project, simply use the following command in the CLI:

   ```bash
   node Hashmap.js
   ```
