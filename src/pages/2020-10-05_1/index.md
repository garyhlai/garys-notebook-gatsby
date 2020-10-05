---
path: "/20201005_1"
date: "2020-10-05"
title: "Byte-pair Encoding Algorithm"
author: "Gary Lai"
tags: ["Machinelearning", "Python", "NLP"]
---

BPE (byte-pair encoding) is a good way (alternative to schemes such as one-hot encoding and Word2Vec pre-trained embeddings) to encode words for NLP model training. It is particularly good at discovering the relationships between words of the same stem (common subword). For example, "low", "lower", "lowest" are three orthogonal/unrelated words in one-hot encoding but related in BPE if "low" is recognized as the common subword. I will now present the algorithm with a quick intro and then heavily commented code, taken from the original <u>[paper](https://arxiv.org/abs/1508.07909)</u>. I would recommend going through the code line-by-line, printing out examples for yourself to really understand what's going on.

The algorithm will:

(1) split all the words into characters, separated by whitespace.

(2) It will then iterate over all the possible pairs, get the most frequent pair (`get_stats`) and merge it (`merge_vocab`).

e.g. (l o w e s t </w>) --> (l o w es t </w>)

It will keep repeating step (2). Notice now when you make pairs, the pairs are not strictly bigrams (i.e. unit in the pair gets longer than only 1 character). You could merge "es" with "t"

e.g. (l o w es t </w>) --> (l o w est </w>)

Notice how the algorithm will effectively discover the subunits (superlatives, prefixes etc.) in words.

```python
# return the count of bigrams in vocabs <-- note the subword units that make up common words will get repeated many times (e.g. "es & st" in "est" for superlatives, "er" for comparatives)

def get_stats(vocab):
	# if key is not in pairs, it will be created pairs[key] = 0
	pairs = collections.defaultdict(int)
	for word, freq in vocab.items():
		symbols = word.split()
		print("symbol is: ", symbols)
		# iterate over get each pair of symbols from the word
		for i in range(len(symbols)-1):
			# (symbols[i], symbols[i+1]) is the key (cast to a tuple)
			pairs[symbols[i], symbols[i+1]] += freq
	return pairs


# find the most frequent pair ("es t") in each word in the vocab and get rid of the space between the characters in the bigram ("est")
def merge_vocab(pair, v_in):
	print("v_in: ", v_in)
	v_out = {}
	# get rid of the special character by adding backslash in front \ so there are no surprises (we don't want anything like * or + in our pattern)
	# inside the parenthesis, the pair (best) is joined into a string of chars, separated by space
	bigram = re.escape(" ".join(pair))
	print("bigram: ", bigram)
	# We match bigram only if it's NOT preceded by non-space AND NOT followed by non-space. In other words, bigram can only be preceded by space and followed by space.
	pattern = re.compile(r'(?<!\S)' + bigram + r'(?!\S)')
	#print("pattern: ", pattern)
	for word in v_in:
		replacement = ''.join(pair)
		#print("word in: ", word)
		#print("replacement: ", replacement)
		# find the bigram in each word in the vocab and get rid of the space between the characters in the bigram
		w_out = pattern.sub(replacement, word)
		#print("word out: ", w_out)
		v_out[w_out] = v_in[word]
	print("v_out: ", v_out)
	return v_out


vocab = {"l o w </w>": 5, "l o w e s t </w>": 2, "n e w e r </w>": 6, "w i d e r </w>": 3}

num_merges = 10
for i in range(num_merges):
	pairs = get_stats(vocab)

	# most frequent pairs
	best = max(pairs, key=pairs.get)
	print("best: ", best)
	vocab = merge_vocab(best, vocab)
```
