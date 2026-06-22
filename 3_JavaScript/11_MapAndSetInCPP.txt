MAP and SET in C++

Map -> {key : value} pairs
Set -> Unique Elements

map<int, int> mapName;
set<char> setName;

insert -> map.insert({key : value})    ||  set.insert(element);
find ->   map.find(key)                ||  set.find(element);  
count ->  map.count(key)               ||  set.count(element);
erase ->  map.erase(key)               ||  set.erase(element);

find will return end() if key/element not present
count will return either 1 or 0 if element is present or not

Ordered (map/set)                 ||              Unordered (map/set)
map / set                         ||     unordered_map<int, int> mapName;
Balancing BST                     ||      Hash Table
TC => O(log N)                    ||     Average -> O(1) && Worst -> O(N)