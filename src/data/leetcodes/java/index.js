export default [
  {
    title: "Cracking The Coding Interview",
    category: null,
    id: "cracking-the-coding-interview",
    index: 0,
  },
  {
    title: "Chapter Five Bit Manipulation",
    category: "cracking-the-coding-interview",
    id: "chapter-five-bit-manipulation",
    index: 1,
  },
  {
    title: "Binary Representation",
    category: "chapter-five-bit-manipulation",
    id: "BinaryRepresentation_chapter-five-bit-manipulation",
    algorithm:
      '/* given a real number between 0 and 1 (e.g., 0.72) that is passed in as a double, print\n * the binary representation. If the number cannot be represented accurately in binary\n * with at most 32 characters, print "ERROR" */\n\npublic class BinaryRepresentation {\n\tpublic static String printBinary(double num) {\n\t\tif(num >= 1 || num <= 0) {\n\t\t\treturn "ERROR";\n\t\t}\n\n\t\tStrinBuilder binary = new StringBuilder();\n\t\tbinary.append(".");\n\t\twhile(num > 0) {\n\t\t\t/* setting a limit on length: 32 characters */\n\t\t\tif(binary.length() >= 32) {\n\t\t\t\treturn "ERROR";\n\t\t\t}\n\n\t\t\tdouble r = num * 2;\n\t\t\tif(r >= 1) {\n\t\t\t\tbinary.append(1);\n\t\t\t\tnum = r - 1;\n\t\t\t}\n\t\t\telse {\n\t\t\t\tbinary.append(0);\n\t\t\t\tnum = r;\n\t\t\t}\n\t\t}\n\t\treturn binary.toString();\n\t}\n}',
    index: 2,
  },
  {
    title: "Find Missing Integer",
    category: "chapter-five-bit-manipulation",
    id: "FindMissingInteger_chapter-five-bit-manipulation",
    algorithm:
      '/* An array A contains all the integers from 0 through n, except for one number which is\n * missing. In this problem, we cannot access an entire integer in A with a single operation.\n * The elements of A are represented in binary, and the only operation we can use to acces them\n * is "fetch the jth bit of A[i]," which takes constant time. Write code to find the missing\n * integer. Can you do it in O(n) time? */\n\npublic class FindMissingInteger {\n\tpublic int findMissing(ArrayList<BigInteger> array) {\n\t\t/* start from the least significant bit, and work our way up */\n\t\treturn findMissing(array, 0);\n\t}\n\n\tpublic int findMissing(ArrayList<BigInteger> input, int column) {\n\t\tif(column >= BigInteger.INTEGER_SIZE) { //we\'re done!\n\t\t\treturn 0;\n\t\t}\n\t\tArrayList<BigInteger> oneBits = new ArrayList<BigInteger>(input.size() / 2);\n\t\tArrayList<BigInteger> zeroBits = new ArrayList<BigInteger>(input.size() / 2);\n\n\t\tfor(BigInteger t : input) {\n\t\t\tif(t.fetch(column) == 0) {\n\t\t\t\tzeroBits.add(t);\n\t\t\t}\n\t\t\telse {\n\t\t\t\toneBits.add(t);\n\t\t\t}\n\t\t}\n\t\tif(zeroBits.size() <= oneBits.size()) {\n\t\t\tint v = findMissing(zeroBits, column + 1);\n\t\t\treturn (v << 1) | 0;\n\t\t}\n\t\telse {\n\t\t\tint v = findMissing(oneBits, column + 1);\n\t\t\treturn (v << 1) | 1;\n\t\t}\n\t}\n}',
    index: 3,
  },
  {
    title: "Insert M Into N",
    category: "chapter-five-bit-manipulation",
    id: "InsertMIntoN_chapter-five-bit-manipulation",
    algorithm:
      "/* you are given two 32-bit numbers, N and M, are two bit positions, i and j. Write\n * a method to insert M into N such that M starts at bit j and ends at bit i. You can\n * assume that the bits j through i have enough space to fit all of M. That is, if M = 10011,\n * you can assume that there are at least 5 bits between j and i. You would not, for example,\n * have j = 3 and i = 2, because M could not fully bit between bit 3 and bit 2.\n EXAMPLE:\n Input: N = 10000000000, m = 10011, i = 2, j = 6\n Output: N = 10001001100 */\n\n public class InsertMIntoN {\n \tint updateBits(int n, int m, int i, int j) {\n \t\t/* create a mask to clear bits i through j in n\n \t\t * EXAMPLE: i = 2, j = 4. Result should be 11100011.\n \t\t * For simplicity, we'll just use 8 bits for the example.\n \t\t */\n \t\tint allones = ~0; //wil equal sequence of all 1s\n\n \t\t//1s before position j, then 0s. Left = 11100000\n \t\tint left = allOnes << (j + 1);\n\n \t\t//1s after position i. Right = 00000011\n \t\tint right = ((1 << i) - 1);\n\n \t\t//all 1s, except for 0s between i and j. Mask = 11100011\n \t\tint mask = left | right;\n\n \t\t/* clear bits j through i then put m in there */\n \t\tint n_cleared = n & mask; //clear bits j through i\n \t\tint m_shifted = m << i; //move m into correct position\n\n \t\treturn n_cleared | m_shifted; //OR them, and we're done!\n \t}\n }",
    index: 4,
  },
  {
    title: "Swap Bits",
    category: "chapter-five-bit-manipulation",
    id: "SwapBits_chapter-five-bit-manipulation",
    algorithm:
      "/* write a program to swap odd and even bits in an integer with as few instructions as\n * possible (e.g., bit 0 and bit 1 are swapped, bit 2 and bit 3 are swapped, and so on) */\n\npublic class SwapBits {\n\tpublic int swapOddEvenBits(int x) {\n\t\treturn ( ((x & 0xaaaaaaaa) >> 1) | ((x & 0x55555555) << 1) );\n\t}\n}",
    index: 5,
  },
  {
    title: "Chapter Four Trees And Graphs",
    category: "cracking-the-coding-interview",
    id: "chapter-four-trees-and-graphs",
    index: 6,
  },
  {
    title: "Binary Tree Is Balanced",
    category: "chapter-four-trees-and-graphs",
    id: "BinaryTreeIsBalanced_chapter-four-trees-and-graphs",
    algorithm:
      "/* implement a function to check if a binary tree is balanced. For the purpose of this\n * question, a balanced tree is defined to be a tree such that the heights of the two\n * subtrees of any node never differ by more than one */\n\npublic class BinaryTreeIsBalanaced {\n\tpublic static int getHeight(TreeNode root) {\n\t\tif(root == null) {\n\t\t\treturn 0; //base case\n\t\t}\n\t\treturn Math.max(getHeight(root.left), getHeight(root.right)) + 1;\n\t}\n\n\tpublic static boolean isBalanced(TreeNode root) {\n\t\tif(root == null) { //base case\n\t\t\treturn true;\n\t\t}\n\n\t\tint heightDiff = getHeight(root.left) - getHeight(root.right);\n\t\tif(Math.abs(heightDiff) > 1) {\n\t\t\treturn false;\n\t\t}\n\t\telse { //recurse\n\t\t\treturn isBalanced(root.left) && isBalanced(root.right);\n\t\t}\n\t}\n}",
    index: 7,
  },
  {
    title: "Create Binary Search Tree",
    category: "chapter-four-trees-and-graphs",
    id: "CreateBinarySearchTree_chapter-four-trees-and-graphs",
    algorithm:
      "/* given a sorted (increasing order) array with unique integer elements, write an algorithm\n * to create a binary search tree with minimal height */\n\npublic class CreateBinarySearchTree {\n\tTreeNode createMinimalBST(int arr[], int start, int end) {\n\t\tif(end < start) {\n\t\t\treturn null;\n\t\t}\n\t\tint mid = (start + end) / 2;\n\t\tTreeNode n = new TreeNode(arr[mid]);\n\t\tn.left = createMinimalBST(arr, start, mid - 1);\n\t\tn.right = createMinimalBST(arr, mid + 1, end);\n\t\treturn n;\n\t}\n\n\tTreeNode createMinimalBST(int array[]) {\n\t\treturn createMinimalBST(array, 0, array.length - 1);\n\t}\n}",
    index: 8,
  },
  {
    title: "Create Linked List For Each Level",
    category: "chapter-four-trees-and-graphs",
    id: "CreateLinkedListForEachLevel_chapter-four-trees-and-graphs",
    algorithm:
      '/* given a binary tree, design an algorithm which creates a linked list of all the nodes\n * at each depth (e.g., if you have a tree with depth D, you\'ll have D linked lists) */\n\npublic class CreateLinkedListForEachLevel {\n\tArrayList<LinkedList<TreeNode>> createLinkedList(TreeNode root) {\n\t\tArrayList<LinkedList<TreeNode>> result = new ArrayList<LinkedList<TreeNode>>();\n\t\t/* "visit" the root */\n\t\tLinkedList<TreeNode> current = new LinkedList<TreeNode>();\n\t\tif(root != null) {\n\t\t\tcurrent.add(root);\n\t\t}\n\n\t\twhile(current.size() > 0) {\n\t\t\tresult.add(current); //add previous level\n\t\t\tLinkedList<TreeNode> parents = current; //go to next level\n\t\t\tcurrent = new LinkedList<TreeNode>();\n\t\t\tfor(TreeNode parent : parents) {\n\t\t\t\t/* visit the children */\n\t\t\t\tif(parent.left != null) {\n\t\t\t\t\tcurrent.add(parrent.left);\n\t\t\t\t}\n\t\t\t\tif(parent.right != null) {\n\t\t\t\t\tcurrent.add(parent.right);\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t\treturn result;\n\t}\n}',
    index: 9,
  },
  {
    title: "Find Path",
    category: "chapter-four-trees-and-graphs",
    id: "FindPath_chapter-four-trees-and-graphs",
    algorithm:
      "/* give a directed graph, design an algorithm to find out whether there is a route between two nodes */\n\npublic class FindPath {\n\tpublic enum State {\n\t\tUnvisited, Visited, Visiting;\n\t}\n\n\tpublic static boolean search(Graph g, Node start, Node end) {\n\t\tif(start == end) return true;\n\n\t\t//operates as Queue\n\t\tLinkedList<Node> q = new LinkedList<Node>();\n\n\t\tfor(Node u : g.getNodes()) {\n\t\t\tu.state = State.Unvisited;\n\t\t}\n\n\t\tstart.state = State.Visiting;\n\t\tq.add(start);\n\t\tNode u;\n\t\twhile(!q.isEmpty()) {\n\t\t\tu = q.removeFirst(); //i.e., dequeue()\n\t\t\tif(u != null) {\n\t\t\t\tfor(Node v : u.getAdjacent()) {\n\t\t\t\t\tif(v.state == State.Unvisited) {\n\t\t\t\t\t\tif(v == end) {\n\t\t\t\t\t\t\treturn true;\n\t\t\t\t\t\t}\n\t\t\t\t\t\telse {\n\t\t\t\t\t\t\tv.state = State.Visiting;\n\t\t\t\t\t\t\tq.add(v);\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t\tu.state = State.Visited;\n\t\t}\n\t\treturn false;\n\t}\n}",
    index: 10,
  },
  {
    title: "Is Subtree",
    category: "chapter-four-trees-and-graphs",
    id: "IsSubtree_chapter-four-trees-and-graphs",
    algorithm:
      "/* you have two very large binary trees: T1, with millions of nodes, and T2, with hundreds\n * of nodes. Create an algorithm to decide if T2 is a subtree of T1.\n * A tree T2 is a subtree of T1 if there exists a node n in T1 such that the subtree of n\n * is identical to T2. That is, if you cut off the tree at node n, the two trees would be identical */\n\npublic class IsSubtree {\n\tboolean containsTree(TreeNode t1, TreeNode t2) {\n\t\tif(t2 == null) { //the empty tree is always a subtree\n\t\t\treturn true;\n\t\t}\n\t\treturn subTree(t1, t2);\n\t}\n\n\tboolean subTree(TreeNode r1, TreeNode r2) {\n\t\tif(r1 == null) {\n\t\t\treturn false; //big tree empty & subtree still not found\n\t\t}\n\t\tif(r1.data == r2.data) {\n\t\t\tif(matchTree(r1, r2)) return true;\n\t\t}\n\t\treturn (subTree(r1.left, r2) || subTree(r1.right, r2));\n\t}\n\n\tboolean matchTree(TreeNode r1, TreeNode r2) {\n\t\tif(r2 == null && r1 == null) //if both are empty\n\t\t\treturn true; //nothing left in the subtree\n\n\t\t//if one, but not both, are empty\n\t\tif(r1 == null || r2 == null) {\n\t\t\treturn false;\n\t\t}\n\n\t\tif(r1.data != r2.data)\n\t\t\treturn false; //data doesn't match\n\t\treturn (matchTree(r1.left, r2.left) && matchTree(r1.right, r2.right));\n\t}\n}",
    index: 11,
  },
  {
    title: "Print Paths",
    category: "chapter-four-trees-and-graphs",
    id: "PrintPaths_chapter-four-trees-and-graphs",
    algorithm:
      '/* you are given a binary tree in which each ndoe contains an integer value (which might be positive\n * or negative). Design an algorithm to print all paths which sum to a given value. The path does not need\n * to start or end at the root or a leaf, but it must go in a straight line */\n\npublic class PrintPaths {\n\tvoid findSum(TreeNode node, int sum, int[] path, int level) {\n\t\tif(node == null) {\n\t\t\treturn;\n\t\t}\n\n\t\t/* insert current node into path */\n\t\tpath[level] = node.data;\n\n\t\t/* look for paths with a sum that ends at this node */\n\t\tint t = 0;\n\t\tfor(int i = level; i >= 0; i--) {\n\t\t\tt += path[i];\n\t\t\tif(t == sum) {\n\t\t\t\tprint(path, i, level);\n\t\t\t}\n\t\t}\n\n\t\t/* search nodes beneath this one */\n\t\tfindSum(node.left, sum, path, level + 1);\n\t\tfindSum(node.right, sum, path, level + 1);\n\n\t\t/* remove current node from path. Not strictly necessary, since\n\t\t * we would ignore this value, but it\'s good practice */\n\t\tpath[level] = Integer.MIN_VALUE;\n\t}\n\n\tvoid findSum(TreeNode node, int sum) {\n\t\tint depth = depth(node);\n\t\tint[] path = new int[depth];\n\t\tfindSum(node, sum, path, 0);\n\t}\n\n\tvoid print(int[] path, int start, int end) {\n\t\tfor(int i = start; i <= end; i++) {\n\t\t\tSystem.out.print(path[i] + " ");\n\t\t}\n\t\tSystem.out.println();\n\t}\n\n\tint depth(TreeNode node) {\n\t\tif(node == null) {\n\t\t\treturn 0;\n\t\t}\n\t\telse {\n\t\t\treturn 1 + Math.max(depth(node.left), depth(node.right));\n\t\t}\n\t}\n}',
    index: 12,
  },
  {
    title: "Valid Binary Search Tree",
    category: "chapter-four-trees-and-graphs",
    id: "ValidBinarySearchTree_chapter-four-trees-and-graphs",
    algorithm:
      "/* implement a function to check if a binary tree is a binary search tree */\n\npublic class ValidBinarySearchTree {\n\tboolean checkBST(TreeNode n) {\n\t\treturn checkBST(n, null, null);\n\t}\n\n\tboolean checkBST(TreeNode n, Integer min, Integer max) {\n\t\tif(n == null) {\n\t\t\treturn true;\n\t\t}\n\t\tif((min != null && n.data <= min) || (max != null && n.data > max)) {\n\t\t\treturn false;\n\t\t}\n\n\t\tif(!checkBST(n.left, min, n.data) || !checkBST(n.right, n.data, max)) {\n\t\t\treturn false;\n\t\t}\n\t\treturn true;\n\t}\n}",
    index: 13,
  },
  {
    title: "Chapter Nine Recursion And Dynamic Programming",
    category: "cracking-the-coding-interview",
    id: "chapter-nine-recursion-and-dynamic-programming",
    index: 14,
  },
  {
    title: "All Permutations",
    category: "chapter-nine-recursion-and-dynamic-programming",
    id: "AllPermutations_chapter-nine-recursion-and-dynamic-programming",
    algorithm:
      '/* write a method to compute all permutations of a string of unique characters */\n\npublic class AllPermutations {\n\tpublic static ArrayList<String> getPerms(String str) {\n\t\tif(str == null) {\n\t\t\treturn null;\n\t\t}\n\t\tArrayList<String> permutations = new ArrayList<String>();\n\t\tif(str.length() == 0) { //base case\n\t\t\tpermutations.add("");\n\t\t\treturn permutations;\n\t\t}\n\n\t\tchar first = str.charAt(0); //get the first character\n\t\tString remainder = str.substring(1); //remove the 1st character\n\t\tArrayList<String> words = getPerms(remainder);\n\t\tfor(String word : words) {\n\t\t\tfor(int j = 0; j <= word.length(); j++) {\n\t\t\t\tString s = insertCharAt(word, first, j);\n\t\t\t\tpermutations.add(s);\n\t\t\t}\n\t\t}\n\t\treturn permutations;\n\t}\n\n\tpublic static String insertCharAt(String word, char c, int i) {\n\t\tString start = word.substring(0, i);\n\t\tString end = word.substring(i);\n\t\treturn start + c + end;\n\t}\n}',
    index: 15,
  },
  {
    title: "All Subsets",
    category: "chapter-nine-recursion-and-dynamic-programming",
    id: "AllSubsets_chapter-nine-recursion-and-dynamic-programming",
    algorithm:
      "/* write a method to return all subsets of a set */\n\npublic class AllSubsets {\n\tArrayList<ArrayList<Integer>> getSubsets(ArrayList<Integer> set, int index) {\n\t\tArrayList<ArrayList<Integer>> allsubsets;\n\t\tif(set.size() == index) { //base case - add empty set\n\t\t\tallsubsets = new ArrayList<ArrayList<Integer>>();\n\t\t\tallsubsets.add(new ArrayList<Integer>()); //empty set\n\t\t}\n\t\telse {\n\t\t\tallsubsets = getSubsets(set, index + 1);\n\t\t\tint item = set.get(index);\n\t\t\tArrayList<ArrayList<Integer>> moresubsets = new ArrayList<ArrayList<Integer>>();\n\t\t\tfor(ArrayList<Integer> subset : allsubsets) {\n\t\t\t\tArrayList<Integer> newsubset = new ArrayList<Integer>();\n\t\t\t\tnewsubset.addAll(subset);\n\t\t\t\tnewsubset.add(item);\n\t\t\t\tmoresubsets.add(newsubset);\n\t\t\t}\n\t\t\tallsubsets.addAll(moresubsets);\n\t\t}\n\t\treturn allsubsets;\n\t}\n}",
    index: 16,
  },
  {
    title: "Eight Queens",
    category: "chapter-nine-recursion-and-dynamic-programming",
    id: "EightQueens_chapter-nine-recursion-and-dynamic-programming",
    algorithm:
      "/* write an algorithm to print all ways of arranging eight queens on an 8x8 chess board so that none of them\n * share the same row, column or diagonal. In this case, \"diagonal\" means all diagonals, not just the two\n * that bisect the board */\n\npublic class EightQueens {\n\tpublic static final int GRID_SIZE = 8;\n\n\tvoid placeQueens(int row, Integer[] columns, ArrayList<Integer[]> results) {\n\t\tif(row == GRID_SIZE) { //found valid placement\n\t\t\tresults.add(columns.clone());\n\t\t}\n\t\telse {\n\t\t\tfor(int col = 0; col < GRID_SIZE; col++) {\n\t\t\t\tif(checkValid(columns, row, col)) {\n\t\t\t\t\tcolumns[row] = col; //place queen\n\t\t\t\t\tplaceQueens(row + 1, columns, results);\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n\n\t/* check if (row1, column1) is a valid spot for a queen by checking if there\n\t * is a queen in the same column or diagonal. We don't need to check it for\n\t * queens in the same row because the calling placeQueen only attempts to\n\t * place one queen at a time. We know thi srow is empty */\n\tboolean checkValid(Integer[] columns, int row1, int column1) {\n\t\tfor(int row2 = 0; row2 < row1; row2++) {\n\t\t\tint column2 = columns[row2];\n\t\t\t/* check if (row2, column2) invalides (row1, column1) as a queen spot */\n\n\t\t\t/* check if rows have a queen in the same column */\n\t\t\tif(column1 == column2) {\n\t\t\t\treturn false;\n\t\t\t}\n\n\t\t\t/* check diagonals: if the distance between the columns equals the distance\n\t\t\t * between the rows, then they're in the same diagonal */\n\t\t\tint columnDistance = Math.abs(column2 - column1);\n\n\t\t\t/* row1 > row2, so no need for abs */\n\t\t\tint rowDistance = row1 - row2;\n\t\t\tif(columnDistance == rowDistance) {\n\t\t\t\treturn false;\n\t\t\t}\n\t\t}\n\t\treturn true;\n\t}\n}",
    index: 17,
  },
  {
    title: "Magic Index",
    category: "chapter-nine-recursion-and-dynamic-programming",
    id: "MagicIndex_chapter-nine-recursion-and-dynamic-programming",
    algorithm:
      "/* a magic index is an array A[1...n - 1] is defined to be an index such that A[i] = i. Given a sorted\n * array of distinct integers, write a method to find a magic index, if one exists, in array A */\n\n public class MagicIndex {\n \tpublic static int magicFast(int[] array, int start, int end) {\n \t\tif(end < start || start < 0 || end >= array.length) {\n \t\t\treturn -1;\n \t\t}\n \t\tint mid = (start + end) / 2;\n \t\tif(array[mid] == mid) {\n \t\t\treturn mid;\n \t\t}\n \t\telse if(array[mid] > mid) {\n \t\t\treturn magicFast(array, start, mid - 1);\n \t\t}\n \t\telse {\n \t\t\treturn magicFast(array, mid + 1, end);\n \t\t}\n \t}\n\n \tpublic static int magicFast(int[] array) {\n \t\treturn magicFast(array, 0, array.length - 1);\n \t}\n }",
    index: 18,
  },
  {
    title: "Representing N Cents",
    category: "chapter-nine-recursion-and-dynamic-programming",
    id: "RepresentingNCents_chapter-nine-recursion-and-dynamic-programming",
    algorithm:
      "/* given an infinite number of quars (25 cents), dimes (10 cents), nickels (5 cents), and pennies (1 cent),\n * write code to calculate the number of ways of representing n cents */\n\n public class RepresentingNCents {\n \tint makeChange(int n) {\n \t\tint[] denoms = {25, 10, 5, 1};\n \t\tint[][] map = new int[n + 1][denoms.length]; //precomputed vals\n \t\treturn makeChange(n, denoms, 0, map);\n \t}\n\n \tint makeChange(int amount, int[] denoms, int index, int[][] map) {\n \t\tif(map[amount][index] > 0) { //retrieve value\n \t\t\treturn map[amount][index];\n \t\t}\n \t\tif(index >= denoms.length - 1) return 1; //one denom remaining\n \t\tint denomAmount = denoms[index];\n \t\tint ways = 0;\n \t\tfor(int i = 0; i * denomAmount <= amount; i++) {\n \t\t\t//go to next denom, assuming i coints of denomAmount\n \t\t\tint amountRemaining = amount - i * denomAmount;\n \t\t\tways += makeChange(amountRemaining, denoms, index + 1, map);\n \t\t}\n \t\tmap[amount][index] = ways;\n \t\treturn ways;\n \t}\n }",
    index: 19,
  },
  {
    title: "Stack Boxes",
    category: "chapter-nine-recursion-and-dynamic-programming",
    id: "StackBoxes_chapter-nine-recursion-and-dynamic-programming",
    algorithm:
      "/* you have a stack of n boxes, with widths wi, heights hi, and depths di. The boxes cannot be rotated\n * and can only be stacked on top of one another if each box in the stack is strictly larger than the\n * the box above it in width, height, and depth. Implement a method to build the tallest stack possible,\n * where the height of a stack is the sum of the heights of each box */\n\npublic class StackBoxes {\n\tpublic ArrayList<Box> createStackDP(Box[] boxes, Box bottom, HashMap<Box, ArrayList<Box>> stack_map) {\n\t\tif(bottom != null && stack_map.containsKey(bottom)) {\n\t\t\treturn (ArrayList<Box>) stack_map.get(bottom).clone();\n\t\t}\n\n\t\tint max_height = 0;\n\t\tArrayList<Box> max_stack = null;\n\t\tfor(int i = 0; i < boxes.length; i++) {\n\t\t\tif(boxes[i].canBeAbove(bottom)) {\n\t\t\t\tArrayList<Box> new_stack = createStackDP(boxes, boxes[i], stack_map);\n\t\t\t\tint new_height = stackHeight(new_stack);\n\t\t\t\tif(new_height > max_height) {\n\t\t\t\t\tmax_stack = new_stack;\n\t\t\t\t\tmax_height = new_height;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t\tif(max_stack == null) {\n\t\t\tmax_stack = new ArrayList<Box>();\n\t\t}\n\t\tif(bottom != null) {\n\t\t\tmax_stack.add(0, bottom);\n\t\t}\n\t\tstack_map.put(bottom, max_stack);\n\n\t\treturn max_stack;\n\t}\n}",
    index: 20,
  },
  {
    title: "Staircase",
    category: "chapter-nine-recursion-and-dynamic-programming",
    id: "Staircase_chapter-nine-recursion-and-dynamic-programming",
    algorithm:
      "/* a child is running up a staircase with n steps, and can hop either 1 step, 2 steps, or 3 steps\n * at a time. Implement a method to count how many possible ways the child can run up the stairs */\n\n public class Staircase {\n \tpublic static int countWaysDP(int n, int[] map) {\n \t\tif(n < 0) {\n \t\t\treturn 0;\n \t\t}\n \t\telse if(n == 0) {\n \t\t\treturn 1;\n \t\t}\n \t\telse if(map[n] > -1) {\n \t\t\treturn map[n];\n \t\t}\n \t\telse {\n \t\t\tmap[n] = countWaysDP(n - 1, map) +\n \t\t\t\t\t countWaysDP(n - 2, map) +\n \t\t\t\t\t countWaysDP(n - 3, map);\n \t\t\treturn map[n];\n \t\t}\n \t}\n }",
    index: 21,
  },
  {
    title: "Chapter One Arrays And Strings",
    category: "cracking-the-coding-interview",
    id: "chapter-one-arrays-and-strings",
    index: 22,
  },
  {
    title: "Delete Dups",
    category: "chapter-one-arrays-and-strings",
    id: "DeleteDups_chapter-one-arrays-and-strings",
    algorithm:
      "//Write code to remove duplicates from an unsorted linked list\n\npublic class RemoveDups {\n\tvoid deleteDups(LinkedListNode n) {\n\t\tHashSet<Integer> set = new HashSet<Integer>();\n\t\tLinkedListNode previous = null;\n\t\twhile(n != null) {\n\t\t\tif(set.contains(n.data)) {\n\t\t\t\tprevious.next = n.next;\n\t\t\t}\n\t\t\telse {\n\t\t\t\tset.add(n.data);\n\t\t\t\tprevious = n;\n\t\t\t}\n\t\t\tn = n.next;\n\t\t}\n\t}\n}",
    index: 23,
  },
  {
    title: "Is Rotation",
    category: "chapter-one-arrays-and-strings",
    id: "IsRotation_chapter-one-arrays-and-strings",
    algorithm:
      '// Assume you have a method isSubstring which checks if one word is a isSubstring of another.\n// Given two strings, s1 and s2, write code to check if s2 is a rotation of s1 using only\n// one call to isSubstring(e.g., "waterbottle" is a rotation of "erbottlewat").\n\npublic class IsRotation {\n\tpublic boolean isRotation(String s1, String s2) {\n\t\tint len = s1.length();\n\t\t/*check that s1 and s2 are equal length and not empty */\n\t\tif(len == s2.length() && len > 0) {\n\t\t\t/* concatenate s1 and s1 within new buffer */\n\t\t\tString s1s1 = s1 + s1;\n\t\t\treturn isSubstring(s1s1, s2);\n\t\t}\n\n\t\treturn false;\n\t}\n}',
    index: 24,
  },
  {
    title: "Is Unique Chars",
    category: "chapter-one-arrays-and-strings",
    id: "IsUniqueChars_chapter-one-arrays-and-strings",
    algorithm:
      "//Implement an algorithm to determine if a string has all unique characters. What if you cannot use additional data structures?\n\npublic class IsUniqueChars {\n    public boolean isUniqueChars(String str) {\n        int checker = 0;\n        for(int i = 0; i < str.length(); i++) {\n            int val = str.charAt(i) - 'a';\n            if((checker & (1 << val)) > 0) {\n                return false;\n            }\n            checker |= (1 << val);\n        }\n        return true;\n    }\n}\n",
    index: 25,
  },
  {
    title: "Nth To Last",
    category: "chapter-one-arrays-and-strings",
    id: "NthToLast_chapter-one-arrays-and-strings",
    algorithm:
      "//Implement an algorithm to find the kth to last element of a single linked list\n\npublic class NthToLast {\n\tLinkedListNode nthToLast(LinkedListNode head, int k) {\n\t\tif(k <= 0) return null;\n\n\t\tLinkedListNode p1 = head;\n\t\tLinkedListNode p2 = head;\n\n\t\t//move p2 forward k nodes into the list\n\t\tfor(int i = 0; i < k - 1; i++) {\n\t\t\tif(p2 == null) return null; //error check\n\t\t\tp2 = p2.next;\n\t\t}\n\n\t\tif(p2 == null) return null;\n\n\t\t/* now, move p1 and p2 at the same speed. When p2 hits the end,\n\t\t * p1 will be at the right element */\n\t\twhile(p2.next != null) {\n\t\t\tp1 = p1.next;\n\t\t\tp2 = p2.next;\n\t\t}\n\n\t\treturn p1;\n\t}\n}",
    index: 26,
  },
  {
    title: "Permutation",
    category: "chapter-one-arrays-and-strings",
    id: "Permutation_chapter-one-arrays-and-strings",
    algorithm:
      "// Given two strings, write a method to decide if one is a permutation of the other\n\npublic class Permutation {\n\tpublic boolean permutation(String s, String t) {\n\t\tif(s.length() != t.length()) {\n\t\t\treturn false;\n\t\t}\n\n\t\tint[] letters = new int[256];\n\n\t\tchar[] s_array = s.toCharArray();\n\t\tfor(char c : s_array) {\n\t\t\tletters[c]++;\n\t\t}\n\n\t\tfor(int i = 0; i < t.length(); i++) {\n\t\t\tint c = (int)t.charAt(i);\n\t\t\tif(--letters[c] < 0) {\n\t\t\t\treturn false;\n\t\t\t}\n\t\t}\n\n\t\treturn true;\n\t}\n}\n",
    index: 27,
  },
  {
    title: "Replace Spaces",
    category: "chapter-one-arrays-and-strings",
    id: "ReplaceSpaces_chapter-one-arrays-and-strings",
    algorithm:
      "// Write a method to replace all spaces in a string with '%20.' You may assume that the string\n// has sufficient space at the end of the string to hold the additional characters, and that you\n// are given the \"true\" length of the string. (Note: if implementing in Java, please use a characters\n// array so that you can perform this operation in place)\n\npublic class ReplaceSpaces {\n\tpublic void replaceSpaces(char[] str, int length) {\n\t\tint spaceCount = 0, newLength;\n\t\tfor(int i = 0; i < length; i++) {\n\t\t\tif(str[i] == ' ') {\n\t\t\t\tspaceCount++;\n\t\t\t}\n\t\t}\n\n\t\tnewLength = length + spaceCount * 2;\n\t\tstr[newLength] = '\\0';\n\t\tfor(int i = length - 1; i >= 0; i--) {\n\t\t\tif(str[i] == ' ') {\n\t\t\t\tstr[newLength - 1] = '0';\n\t\t\t\tstr[newLength - 2] = '2';\n\t\t\t\tstr[newLength - 3] = '%';\n\t\t\t\tnewLength = newLength - 3;\n\t\t\t}\n\t\t\telse {\n\t\t\t\tstr[newLength - 1] = str[i];\n\t\t\t\tnewLength = newLength - 1;\n\t\t\t}\n\t\t}\n\t}\n}",
    index: 28,
  },
  {
    title: "Chapter Seven Mathematics And Probability",
    category: "cracking-the-coding-interview",
    id: "chapter-seven-mathematics-and-probability",
    index: 29,
  },
  {
    title: "Operations",
    category: "chapter-seven-mathematics-and-probability",
    id: "Operations_chapter-seven-mathematics-and-probability",
    algorithm:
      '/* write methods to implement the multiply, subtract, and divide operations for integers. Use only the add operator */\n\npublic class Operations {\n\t/* flip a positive sign to negative or negative sign to positive */\n\tpublic static int negate(int a) {\n\t\tint neg = 0;\n\t\tint d = a < 0 ? 1 : -1;\n\t\twhile(a != 0) {\n\t\t\tneg += d;\n\t\t\ta += d;\n\t\t}\n\t\treturn neg;\n\t}\n\n\t/* subtract two numbers by negating b and adding them */\n\tpublic static int minus(int a, int b) {\n\t\treturn a + negate(b);\n\t}\n\n\t/* multiply a by b by adding a to itself b times */\n\tpublic static int multiply(int a, int b) {\n\t\tif(a < b) {\n\t\t\treturn multiply(b, a); //algorithm is faster is b < a\n\t\t}\n\t\tint sum = 0;\n\t\tfor(int i = abs(b); i > 0; i--) {\n\t\t\tsum += a;\n\t\t}\n\t\tif(b < 0) {\n\t\t\tsum = negate(sum);\n\t\t}\n\t\treturn sum;\n\t}\n\n\t/* return absolute value */\n\tpublic static int abs(int a) {\n\t\tif(a < 0) {\n\t\t\treturn negate(a);\n\t\t}\n\t\telse {\n\t\t\treturn a;\n\t\t}\n\t}\n\n\tpublic int divide(int a, int b) throws ArithmeticException {\n\t\tif(b == 0) {\n\t\t\tthrow new java.lang.ArithmeticException("ERROR");\n\t\t}\n\t\tint absa = abs(a);\n\t\tint absb = abs(b);\n\n\t\tint product = 0;\n\t\tint x = 0;\n\t\twhile(product + absb <= absa) { //don\'t go past a\n\t\t\tproduct += absb;\n\t\t\tx++;\n\t\t}\n\n\t\tif((a < 0 && b < 0) || (a > 0 && b > 0)) {\n\t\t\treturn x;\n\t\t}\n\t\telse {\n\t\t\treturn negate(x);\n\t\t}\n\t}\n}',
    index: 30,
  },
  {
    title: "Would Intersect",
    category: "chapter-seven-mathematics-and-probability",
    id: "WouldIntersect_chapter-seven-mathematics-and-probability",
    algorithm:
      "/* give two lines on a Cartesian plane, determine whether the two lines would intersect */\n\npublic class WouldIntersect {\n\t//placeholder for class name\n}\n\nclass Line {\n\tstatic double epsilon = 0.000001;\n\tpublic double slope;\n\tpublic double yintercept;\n\n\tpublic Line(double s, double y) {\n\t\tthis.slope = s;\n\t\tthis.yintercept = y;\n\t}\n\n\tpublic boolean Intersect(Line line2) {\n\t\treturn Math.abs(this.slope - line2.slope) > epsilon || Math.abs(this.yintercept - line2.yintercept) < epsilon;\n\t}\n}",
    index: 31,
  },
  {
    title: "Chapter Three Stacks And Queues",
    category: "cracking-the-coding-interview",
    id: "chapter-three-stacks-and-queues",
    index: 32,
  },
  {
    title: "Binary Tree Is Balanced",
    category: "chapter-three-stacks-and-queues",
    id: "BinaryTreeIsBalanced_chapter-three-stacks-and-queues",
    algorithm:
      "/* implement a function to check if a binary tree is balanced. For the purpose of this\n * question, a balanced tree is defined to be a tree such that the heights of the two\n * subtrees of any node never differ by more than one */\n\npublic class BinaryTreeIsBalanaced {\n\tpublic static int getHeight(TreeNode root) {\n\t\tif(root == null) {\n\t\t\treturn 0; //base case\n\t\t}\n\t\treturn Math.max(getHeight(root.left), getHeight(root.right)) + 1;\n\t}\n\n\tpublic static boolean isBalanced(TreeNode root) {\n\t\tif(root == null) { //base case\n\t\t\treturn true;\n\t\t}\n\n\t\tint heightDiff = getHeight(root.left) - getHeight(root.right);\n\t\tif(Math.abs(heightDiff) > 1) {\n\t\t\treturn false;\n\t\t}\n\t\telse { //recurse\n\t\t\treturn isBalanced(root.left) && isBalanced(root.right);\n\t\t}\n\t}\n}",
    index: 33,
  },
  {
    title: "My Q Ueue",
    category: "chapter-three-stacks-and-queues",
    id: "MyQUeue_chapter-three-stacks-and-queues",
    algorithm:
      "/* implement a MyQueue class which implements a queue using two stacks */\n\npublic class MyQueue<T> {\n\tStack<T> stackNewest, stackOldest;\n\n\tpublic MyQueue() {\n\t\tstackNewest = new Stack<T>();\n\t\tstackOldest = new Stack<T>();\n\t}\n\n\tpublic int size() {\n\t\treturn stackNewest.size() + stackOldest.size();\n\t}\n\n\tpublic void add(T value) {\n\t\t/* push onto stackNewest, which always has the newest\n\t\t * elements on top */\n\t\tstackNewest.push(value);\n\t}\n\n\t/* Move elements from stackNewest into stackOldest. This\n\t * is usually done so that we can do operations on stackOldest */\n\tprivate void shiftStacks() {\n\t\tif(stackOldest.isEmpty()) {\n\t\t\twhile(!stackNewest.isEmpty()) {\n\t\t\t\tstackOldest.push(stackNewest.pop());\n\t\t\t}\n\t\t}\n\t}\n\n\tpublic T peek() {\n\t\tshiftStacks(); //ensure stackOldest has the current elements\n\t\treturn stackOldest.peek(); //retrieve the oldest item\n\t}\n\n\tpublic T remove() {\n\t\tshiftStacks(); //ensure stackOldest has the current elements\n\t\treturn stackOldest.pop();\n\t}\n}",
    index: 34,
  },
  {
    title: "Queue Using Two Stacks",
    category: "chapter-three-stacks-and-queues",
    id: "QueueUsingTwoStacks_chapter-three-stacks-and-queues",
    algorithm:
      "/* implement a MyQueue class which implements a queue using two stacks */\n\npublic class QueueUsingTwoStacks {\n\t\n}",
    index: 35,
  },
  {
    title: "Set Of Stacks",
    category: "chapter-three-stacks-and-queues",
    id: "SetOfStacks_chapter-three-stacks-and-queues",
    algorithm:
      "/* imagine a (literal) stack of plates. If the stack gets too high, it might topple.\n * Therefore, in real life, we would likely start a new stack when the previous stack\n * exceeds some threshold. Implement a data structure SetOfStacks that mimics this.\n * SetOfStacks should be composed of several stacks and should create a new stack once\n * the previous one exceeds capacity. SetOfStacks.push() and SetOfStacks.pop() should\n * behave identically to a single stack (that is, pop() should return the same values as\n * it would if there were just a single stack) */\n\n//in this problem, we've been told what our data structure should look like:\npublic class SetOfStacks {\n\tArrayList<Stack> stacks = new ArrayList<Stack>();\n\t//public void push(int v) {...}\n\t//public int pop() {...}\n\n\tpublic void push(int v) {\n\t\tStack last = getLastStack();\n\t\tif(last != null && !last.isFull()) { //add to the last stack\n\t\t\tlast.push(v);\n\t\t}\n\t\telse { //must create new stack\n\t\t\tStack stack = new Stack(capacity);\n\t\t\tstack.push(v);\n\t\t\tstacks.add(stack);\n\t\t}\n\t}\n\n\tpublic void pop() {\n\t\tStack last = getLastStack();\n\t\tint v = last.pop();\n\t\tif(last.size == 0) {\n\t\t\tstacks.remove(stacks.size() - 1);\n\t\t}\n\t\treturn v;\n\t}\n\n\tpublic Stack getLastStack() {\n\t\tif(stacks.size() == 0) {\n\t\t\treturn null;\n\t\t}\n\t\treturn stacks.get(stacks.size() - 1);\n\t}\n}\n\n\n",
    index: 36,
  },
  {
    title: "Sort Stack",
    category: "chapter-three-stacks-and-queues",
    id: "SortStack_chapter-three-stacks-and-queues",
    algorithm:
      "/* write a program to sort a stack in ascending order (with biggest items on top).\n * you may use at most one additional stack to hold items, but you may not copy the\n * elements into any other data strcuture (such as an array). The stack supports the\n * folowing operations: push, pop, peek, and isEmpty */\n\npublic class SortStack {\n\tpublic static Stack<Integer> sort(Stack<Integer> s) {\n\t\tStack<Integer> r = new Stack<Integer>();\n\t\twhile(!s.isEmpty()) {\n\t\t\tint tmp = s.pop(); //step 1\n\t\t\twhile(!r.isEmpty() && r.peek() > tmp) { //step 2\n\t\t\t\ts.push(r.pop());\n\t\t\t}\n\t\t\tr.push(tmp); //step 3\n\t\t}\n\t\treturn r;\n\t}\n}\n",
    index: 37,
  },
  {
    title: "Stack With Min",
    category: "chapter-three-stacks-and-queues",
    id: "StackWithMin_chapter-three-stacks-and-queues",
    algorithm:
      "//How would you design a stack which, in addition to push and pop, also has a function min which returns the minimum element? Push, pop, and min should all operate in O(1) time\n\npublic class StackWithMin extends Stack<NodeWithMin> {\n\tpublic void push(int value) {\n\t\tint newMin = Math.min(value, min());\n\t\tsuper.push(new NodeWithMin(value, newMin));\n\t}\n\n\tpublic int min() {\n\t\tif(this.isEmpty()) {\n\t\t\treturn Integer.MAX_VALUE; //error value\n\t\t}\n\t\telse {\n\t\t\treturn peek().min;\n\t\t}\n\t}\n}\n\nclass NodeWithMin {\n\tpublic int value;\n\tpublic int min;\n\tpublic NodeWithMin(int v, int min) {\n\t\tthis.value = v;\n\t\tthis.min = min;\n\t}\n}",
    index: 38,
  },
  {
    title: "Three Stacks",
    category: "chapter-three-stacks-and-queues",
    id: "ThreeStacks_chapter-three-stacks-and-queues",
    algorithm:
      '//Describe how you could use a single array to implement three stacks\n\npublic class ThreeStacks {\n\tint stackSize = 100;\n\tint[] buffer = new int[stackSize * 3];\n\tint[] stackPointer = {-1, -1, -1}; //pointers to track top element\n\n\tvoid push(int stackNum, int value) throws Exception {\n\t\t/* check if we have space */\n\t\tif(stackPointer[stackNum] + 1 >= stackSize) { //last element\n\t\t\tthrow new FullStackException();\n\t\t}\n\t\t/* increment stack pointer and then update top value */\n\t\tstackPointer[stackNum]++;\n\t\tbuffer[absTopOfStack(stackNum)] = value;\n\t}\n\n\tint pop(int stackNum) throws Exception {\n\t\tif(isEmpty(stackNum)) {\n\t\t\tthrow new EmptyStackException();\n\t\t}\n\t\tint value = buffer[absTopOfStack(stackNum)]; //get top\n\t\tbuffer[absTopOfStack(stackNum)] = 0; //clear index\n\t\tstackPointer[stackNum]--; //decrement pointer\n\t\treturn value;\n\t}\n\n\tint peek(int stackNum) {\n\t\tif(isEmpty(stackNum)) {\n\t\t\tthrow new EmptyStackException();\n\t\t}\n\t\tint index = absTopOfStack(stackNum);\n\t\treturn buffer[index];\n\t}\n\n\tboolean isEmpty(int stackNum) {\n\t\treturn stackPointer[stackNum] == -1;\n\t}\n\n\t/* returns index of top of stack "stackNum", in absolute terms */\n\tint absTopOfStack(int stasckNum) {\n\t\treturn stackNum * stackSize + stackPointer[stackNum];\n\t}\n}\n',
    index: 39,
  },
  {
    title: "Towers Of Hanoi",
    category: "chapter-three-stacks-and-queues",
    id: "TowersOfHanoi_chapter-three-stacks-and-queues",
    algorithm:
      '/* in the classic problem of the Towers of Hanoi, you have 3 towers and N disks of\n * different sizes which can slide onto any tower. The puzzle starts with disks sorted\n * in ascending order of size from top to bottom (i.e. each disk sits on top of an even \n * larger one). You have the following constraints:\n * (1) Only one disk can be moved at a time\n * (2) A disk is slid off the top of one tower onto the next rod\n * (3) A disk can only be placed on top of a larger disk\n * Write a program to move the disks from the first tower to the last tower using Stacks */\n\npublic class TowersOfHanoi {\n\tpublic static void main(String args[]) {\n\t\tint n = 3;\n\t\tTower[] towers = new Tower[n];\n\t\tfor(int i = 0; i < 3; i++) {\n\t\t\ttowers[i] = new Tower(i);\n\t\t}\n\n\t\tfor(int i = n - 1; i >= 0; i--) {\n\t\t\ttowers[0].add(i);\n\t\t}\n\t\ttowers[0].moveDisks(n, towers[2], towers[1]);\n\t}\n}\n\npublic class Tower {\n\tprivate Stack<Integer> disks;\n\tprivate int index;\n\tpublic Tower(int i) {\n\t\tdisks = new Stack<Integer>();\n\t\tindex = i;\n\t}\n\n\tpublic int index() {\n\t\treturn index;\n\t}\n\n\tpublic void add(int d) {\n\t\tif(!disks.isEmpty() && disks.peek() <= d) {\n\t\t\tSystem.out.println("Error placing disk " + d);\n\t\t}\n\t\telse {\n\t\t\tdisks.push(d);\n\t\t}\n\t}\n\n\tpublic void moveTopTo(Tower t) {\n\t\tint top = disks.pop();\n\t\tt.add(top);\n\t\tSystem.out.println("Move disk " + top + " from " + index() + " to " + t.index());\n\t}\n\n\tpublic void moveDisks(int n, Tower destination, Tower buffer) {\n\t\tif(n > 0) {\n\t\t\tmoveDisks(n - 1, buffer, destination);\n\t\t\tmoveTopTo(destination);\n\t\t\tbuffer.moveDisks(n - 1, destination, this);\n\t\t}\n\t}\n}\n',
    index: 40,
  },
  {
    title: "Chapter Two Linked Lists",
    category: "cracking-the-coding-interview",
    id: "chapter-two-linked-lists",
    index: 41,
  },
  {
    title: "Delete Dups",
    category: "chapter-two-linked-lists",
    id: "DeleteDups_chapter-two-linked-lists",
    algorithm:
      "//Write code to remove duplicates from an unsorted linked list\n\npublic class RemoveDups {\n\tvoid deleteDups(LinkedListNode n) {\n\t\tHashSet<Integer> set = new HashSet<Integer>();\n\t\tLinkedListNode previous = null;\n\t\twhile(n != null) {\n\t\t\tif(set.contains(n.data)) {\n\t\t\t\tprevious.next = n.next;\n\t\t\t}\n\t\t\telse {\n\t\t\t\tset.add(n.data);\n\t\t\t\tprevious = n;\n\t\t\t}\n\t\t\tn = n.next;\n\t\t}\n\t}\n}",
    index: 42,
  },
  {
    title: "Delete Node",
    category: "chapter-two-linked-lists",
    id: "DeleteNode_chapter-two-linked-lists",
    algorithm:
      "//Implement an algorithm to delete a node in the middle of a singly linked list, give only access to that node\n\npublic class DeleteNode {\n\tpublic static boolean deleteNode(LinkedListNode n) {\n\t\tif(n == null || n.next == null) {\n\t\t\treturn false;\n\t\t}\n\n\t\tLinkedListNode next = n.next;\n\t\tn.data = next.data;\n\t\tn.next = next.next;\n\t\treturn true;\n\t}\n}",
    index: 43,
  },
  {
    title: "Find Beginning",
    category: "chapter-two-linked-lists",
    id: "FindBeginning_chapter-two-linked-lists",
    algorithm:
      "//Given a circular linked list, implement an algorithm which returns\n//the node at the beginning of the loop\n\npublic class FindBeginning {\n\tLinkedListNode findBeginning(LinkedListNode head) {\n\t\tLinkedListNode slow = head;\n\t\tLinkedListNode fast = head;\n\n\t\t/* find meeting point. This will be LOOP_SIZE - k\n\t\t * steps int othe linked list */\n\t\twhile(fast != null && fast.next != null) {\n\t\t\tslow = slow.next;\n\t\t\tfast = fast.next.next;\n\t\t\tif(fast == slow) {\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\n\t\t/* error checking - no meeting point, and therefore no loop */\n\t\tif(fast == null || fast.next == null) {\n\t\t\treturn null;\n\t\t}\n\n\t\t/* move slow to head. Keep fast at meeting point. Each are k\n\t\t * steps from the loop start. If they move at the same pace,\n\t\t * they must meet at the loop start */\n\t\tslow = head;\n\t\twhile(slow != fast) {\n\t\t\tslow = slow.next;\n\t\t\tfast = fast.next;\n\t\t}\n\n\t\t/* both now point to the start of the loop */\n\t\treturn fast;\n\t}\n}",
    index: 44,
  },
  {
    title: "Is Palindrome",
    category: "chapter-two-linked-lists",
    id: "IsPalindrome_chapter-two-linked-lists",
    algorithm:
      "//Implement a function to check if a linked list is a palindrome\n//don't forget import statements!\n\npublic class IsPalindrome {\n\tboolean isPalindrome(LinkedListNode head) {\n\t\tLinkedListNode fast = head;\n\t\tLinkedListNode slow = head;\n\n\t\tStack<Integer> stack = new Stack<Integer>();\n\n\t\t/* push elements from first half of linked list onto stack.\n\t\t * When fast runner (which is moving at 2x speed) reaches the\n\t\t * end of the linked list, then we know we're at the middle */\n\t\twhile(fast != null && fast.next != null) {\n\t\t\tstack.push(slow.data);\n\t\t\tslow = slow.next;\n\t\t\tfast = fast.next.next;\n\t\t}\n\n\t\t/*has odd number of elements, so skip the middle element */\n\t\tif(fast != null) {\n\t\t\tslow = slow.next;\n\t\t}\n\n\t\twhile(slow != null) {\n\t\t\tint top = stack.pop().intValue();\n\n\t\t\t/* if values are different, then it's not a palindrome */\n\t\t\tif(top != slow.data) {\n\t\t\t\treturn false;\n\t\t\t}\n\n\t\t\tslow = slow.next;\n\t\t}\n\n\t\treturn true;\n\t}\n}",
    index: 45,
  },
  {
    title: "Nth To Last",
    category: "chapter-two-linked-lists",
    id: "NthToLast_chapter-two-linked-lists",
    algorithm: "",
    index: 46,
  },
  {
    title: "Partition",
    category: "chapter-two-linked-lists",
    id: "Partition_chapter-two-linked-lists",
    algorithm:
      "//Write code to partition a linked list around a value x, such that\n//all nodes less than x come before all nodes greater than or equal to x.\n\npublic class Partition {\n\tLinkedListNode partition(LinkedListNode node, int x) {\n\t\tLinkedListNode head = node;\n\t\tLinkedListNode tail = node;\n\n\t\twhile(node != null) {\n\t\t\tLinkedListNode next = node.next;\n\t\t\tif(node.data < x) {\n\t\t\t\t/* insert node at head */\n\t\t\t\tnode.next = head;\n\t\t\t\thead = node;\n\t\t\t}\n\t\t\telse {\n\t\t\t\t/* insert node at tail */\n\t\t\t\ttail.next = node;\n\t\t\t\ttail = node;\n\t\t\t}\n\t\t\tnode = next;\n\t\t}\n\t\ttail.next = null;\n\n\t\t//the head has changed, so we need to return it to the user\n\t\treturn head;\n\t}\n}",
    index: 47,
  },
  { title: "Leetcode", category: null, id: "leetcode", index: 48 },
  { title: "Array", category: "leetcode", id: "array", index: 49 },
  {
    title: "Best Time To Buy And Sell Stock",
    category: "array",
    id: "BestTimeToBuyAndSellStock_array",
    algorithm:
      "// Say you have an array for which the ith element is the price of a given stock on day i.\n\n// If you were only permitted to complete at most one transaction (ie, buy one and sell one share of the stock), design an algorithm to find the maximum profit.\n\n// Example 1:\n// Input: [7, 1, 5, 3, 6, 4]\n// Output: 5\n\n// max. difference = 6-1 = 5 (not 7-1 = 6, as selling price needs to be larger than buying price)\n// Example 2:\n// Input: [7, 6, 4, 3, 1]\n// Output: 0\n\n// In this case, no transaction is done, i.e. max profit = 0.\n\npublic class BestTimeToBuyAndSellStock {\n    public int maxProfit(int[] prices) {\n        //Kadane's algorithm\n        if(prices.length == 0) {\n            return 0;\n        }\n        \n        int min = prices[0];\n        int max = 0;\n        \n        for(int i = 1; i < prices.length; i++) {\n            if(prices[i] > min) {\n                max = Math.max(max, prices[i] - min);\n            } else {\n                min = prices[i];\n            }\n        }\n        \n        return max;\n    }\n}\n",
    index: 50,
  },
  {
    title: "Contains Duplicates I I",
    category: "array",
    id: "ContainsDuplicatesII_array",
    algorithm:
      "//Given an array of integers and an integer k, find out whether there are two distinct indices i and \n//j in the array such that nums[i] = nums[j] and the absolute difference between i and j is at most k.\n\nclass ContainsDuplicatesII {\n    public boolean containsNearbyDuplicate(int[] nums, int k) {\n        HashMap<Integer, Integer> map = new HashMap<Integer, Integer>();\n        for(int i = 0; i < nums.length; i++) {\n            int current = nums[i];\n            if(map.containsKey(current) && i - map.get(current) <= k) {\n                return true;\n            } else {\n                map.put(current, i);\n            }\n        }\n        \n        return false;\n    }\n}\n",
    index: 51,
  },
  {
    title: "Find All Numbers Disappeared In An Array",
    category: "array",
    id: "FindAllNumbersDisappearedInAnArray_array",
    algorithm:
      "//Given an array of integers where 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.\n//\n//Find all the elements of [1, n] inclusive that do not appear in this array.\n//\n//Could you do it without extra space and in O(n) runtime? You may assume the returned list does not count as extra space.\n//\n//Example:\n//\n//Input:\n//[4,3,2,7,8,2,3,1]\n//\n//Output:\n//[5,6]\n\nclass FindAllNumbersDisappearedInAnArray {\n    public List<Integer> findDisappearedNumbers(int[] nums) {\n        List<Integer> result = new ArrayList<Integer>();\n        HashMap<Integer, Integer> map = new HashMap<Integer, Integer>();\n        for(int i = 1; i <= nums.length; i++) {\n            map.put(i, 1);\n        }\n        \n        for(int i = 0; i < nums.length; i++) {\n            if(map.containsKey(nums[i])) {\n                map.put(nums[i], -1);\n            }\n        }\n        \n        for(int i: map.keySet()) {\n            if(map.get(i) != -1) {\n                result.add(i);\n            }\n        }\n        \n        return result;\n    }\n}\n",
    index: 52,
  },
  {
    title: "Find The Celebrity",
    category: "array",
    id: "FindTheCelebrity_array",
    algorithm:
      '// Suppose you are at a party with n people (labeled from 0 to n - 1) and among them, there may exist one celebrity. The definition of a celebrity is that all the other n - 1 people know him/her but he/she does not know any of them.\n\n// Now you want to find out who the celebrity is or verify that there is not one. The only thing you are allowed to do is to ask questions like: "Hi, A. Do you know B?" to get information of whether A knows B. You need to find out the celebrity (or verify there is not one) by asking as few questions as possible (in the asymptotic sense).\n\n// You are given a helper function bool knows(a, b) which tells you whether A knows B. Implement a function int findCelebrity(n), your function should minimize the number of calls to knows.\n\n// Note: There will be exactly one celebrity if he/she is in the party. Return the celebrity\'s label if there is a celebrity in the party. If there is no celebrity, return -1.\n\n/* The knows API is defined in the parent class Relation.\n      boolean knows(int a, int b); */\n\npublic class FindTheCelebrity extends Relation {\n    public int findCelebrity(int n) {\n        //initialize candidate to 0\n        int candidate = 0;\n        \n        //find viable candidate\n        for(int i = 1; i < n; i++) {\n            if(knows(candidate, i)) {\n                candidate = i;\n            }\n        }\n        \n        //check that everyone else knows the candidate\n        for(int i = 0; i < n; i++) {\n            //if the candidate knows the current person or the current person does not know the candidate, return -1 (candidate is not a celebrity)\n            if(i != candidate && knows(candidate, i) || !knows(i, candidate)) {\n                return -1;\n            }\n        }\n        \n        //return the celebrity\n        return candidate;\n    }\n}\n',
    index: 53,
  },
  {
    title: "Game Of Life",
    category: "array",
    id: "GameOfLife_array",
    algorithm:
      '// According to the Wikipedia\'s article: "The Game of Life, also known simply as Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970."\n\n// Given a board with m by n cells, each cell has an initial state live (1) or dead (0). Each cell interacts with its eight neighbors (horizontal, vertical, diagonal) using the following four rules (taken from the above Wikipedia article):\n\n    // Any live cell with fewer than two live neighbors dies, as if caused by under-population.\n    // Any live cell with two or three live neighbors lives on to the next generation.\n    // Any live cell with more than three live neighbors dies, as if by over-population..\n    // Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.\n    // Write a function to compute the next state (after one update) of the board given its current state.\n\n// Follow up: \n// Could you solve it in-place? Remember that the board needs to be updated at the same time: You cannot update some cells first and then use their updated values to update other cells.\n// In this question, we represent the board using a 2D array. In principle, the board is infinite, which would cause problems when the active area encroaches the border of the array. How would you address these problems?\n\npublic class GameOfLife {\n    public void gameOfLife(int[][] board) {\n        if(board == null || board.length == 0) {\n            return;\n        }\n        \n        int m = board.length;\n        int n = board[0].length;\n        \n        for(int i = 0; i < m; i++) {\n            for(int j = 0; j < n; j++) {\n                int lives = liveNeighbors(board, m, n, i, j);\n                \n                if(board[i][j] ==  1 && lives >= 2 && lives <= 3) {\n                    board[i][j] = 3;\n                }\n                \n                if(board[i][j] == 0 && lives == 3) {\n                    board[i][j] = 2;\n                }\n            }\n        }\n        \n        for(int i = 0; i < m; i++) {\n            for(int j = 0; j < n; j++) {\n                board[i][j] >>= 1;\n            }\n        }\n    }\n    \n    private int liveNeighbors(int[][] board, int m, int n, int i, int j) {\n        int lives = 0;\n        \n        for(int x = Math.max(i - 1, 0); x <= Math.min(i + 1, m - 1); x++) {\n            for(int y = Math.max(j - 1, 0); y <= Math.min(j + 1, n - 1); y++) {\n                lives += board[x][y] & 1;\n            }\n        }\n        \n        lives -= board[i][j] & 1;\n        \n        return lives;\n    }\n}\n',
    index: 54,
  },
  {
    title: "Increasing Triplet Subsequence",
    category: "array",
    id: "IncreasingTripletSubsequence_array",
    algorithm:
      "// Given an unsorted array return whether an increasing subsequence of length 3 exists or not in the array.\n\n// Formally the function should:\n// Return true if there exists i, j, k \n// such that arr[i] < arr[j] < arr[k] given 0 ≤ i < j < k ≤ n-1 else return false.\n// Your algorithm should run in O(n) time complexity and O(1) space complexity.\n\n// Examples:\n// Given [1, 2, 3, 4, 5],\n// return true.\n\n// Given [5, 4, 3, 2, 1],\n// return false.\n\npublic class IncreasingTripletSequence {\n    public boolean increasingTriplet(int[] nums) {\n        int firstMin = Integer.MAX_VALUE;\n        int secondMin = Integer.MAX_VALUE;\n        \n        for(int n : nums) {\n            if(n <= firstMin) {\n                firstMin = n;\n            } else if(n < secondMin) {\n                secondMin = n;\n            } else if(n > secondMin) {\n                return true;\n            }\n        }\n        \n        return false;\n    }\n}\n",
    index: 55,
  },
  {
    title: "Insert Delete Get Random O1",
    category: "array",
    id: "InsertDeleteGetRandomO1_array",
    algorithm:
      "//Design a data structure that supports all following operations in average O(1) time.\n\n//insert(val): Inserts an item val to the set if not already present.\n//remove(val): Removes an item val from the set if present.\n//getRandom: Returns a random element from current set of elements. Each element must have the same probability of being returned.\n\n//Example:\n// Init an empty set.\n//RandomizedSet randomSet = new RandomizedSet();\n\n// Inserts 1 to the set. Returns true as 1 was inserted successfully.\n//randomSet.insert(1);\n\n// Returns false as 2 does not exist in the set.\n//randomSet.remove(2);\n\n// Inserts 2 to the set, returns true. Set now contains [1,2].\n//randomSet.insert(2);\n\n// getRandom should return either 1 or 2 randomly.\n//randomSet.getRandom();\n\n// Removes 1 from the set, returns true. Set now contains [2].\n//randomSet.remove(1);\n\n// 2 was already in the set, so return false.\n//randomSet.insert(2);\n\n// Since 2 is the only number in the set, getRandom always return 2.\n//randomSet.getRandom();\n\nclass RandomizedSet {\n    HashMap<Integer, Integer> map;\n    ArrayList<Integer> values;\n\n    /** Initialize your data structure here. */\n    public RandomizedSet() {\n        map = new HashMap<Integer, Integer>();\n        values = new ArrayList<Integer>();\n    }\n    \n    /** Inserts a value to the set. Returns true if the set did not already contain the specified element. */\n    public boolean insert(int val) {\n        if(!map.containsKey(val)) {\n            map.put(val, val);\n            values.add(val);\n            return true;\n        }\n        else {\n            return false;\n        }\n    }\n    \n    /** Removes a value from the set. Returns true if the set contained the specified element. */\n    public boolean remove(int val) {\n        if(map.containsKey(val)) {\n            map.remove(val);\n            values.remove(values.indexOf(val));\n            return true;\n        }\n        return false;\n    }\n    \n    /** Get a random element from the set. */\n    public int getRandom() {\n        int random = (int)(Math.random() * values.size());\n        int valueToReturn = values.get(random);\n        return map.get(valueToReturn);\n    }\n}\n\n/**\n * Your RandomizedSet object will be instantiated and called as such:\n * RandomizedSet obj = new RandomizedSet();\n * boolean param_1 = obj.insert(val);\n * boolean param_2 = obj.remove(val);\n * int param_3 = obj.getRandom();\n */\n\n",
    index: 56,
  },
  {
    title: "Insert Interval",
    category: "array",
    id: "InsertInterval_array",
    algorithm:
      "// Given a set of non-overlapping intervals, insert a new interval into the intervals (merge if necessary).\n\n// You may assume that the intervals were initially sorted according to their start times.\n\n// Example 1:\n// Given intervals [1,3],[6,9], insert and merge [2,5] in as [1,5],[6,9].\n\n// Example 2:\n// Given [1,2],[3,5],[6,7],[8,10],[12,16], insert and merge [4,9] in as [1,2],[3,10],[12,16].\n\n// This is because the new interval [4,9] overlaps with [3,5],[6,7],[8,10].\n\n/**\n * Definition for an interval.\n * public class Interval {\n *     int start;\n *     int end;\n *     Interval() { start = 0; end = 0; }\n *     Interval(int s, int e) { start = s; end = e; }\n * }\n */\npublic class InsertInterval {\n    public List<Interval> insert(List<Interval> intervals, Interval newInterval) {\n        int i = 0;\n\n        while(i < intervals.size() && intervals.get(i).end < newInterval.start) {\n            i++;\n        }\n\n        while(i < intervals.size() && intervals.get(i).start <= newInterval.end) {\n            newInterval = new Interval(Math.min(intervals.get(i).start, newInterval.start), Math.max(intervals.get(i).end, newInterval.end));\n            intervals.remove(i);\n        }\n        \n        intervals.add(i, newInterval);\n\n        return intervals;\n    }\n}\n",
    index: 57,
  },
  {
    title: "Longest Consecutive Sequence",
    category: "array",
    id: "LongestConsecutiveSequence_array",
    algorithm:
      "// Given an unsorted array of integers, find the length of the longest consecutive elements sequence.\n\n// For example,\n// Given [100, 4, 200, 1, 3, 2],\n// The longest consecutive elements sequence is [1, 2, 3, 4]. Return its length: 4.\n\n// Your algorithm should run in O(n) complexity.\n\nclass LongestConsecutiveSequence {\n    public int longestConsecutive(int[] nums) {\n        if(nums == null || nums.length == 0) {\n            return 0;\n        }\n        \n        Set<Integer> set = new HashSet<Integer>();\n        for(int n: nums) {\n            set.add(n);\n        }\n        \n        int maxLength = 0;\n        for(int n: set) {\n            if(!set.contains(n - 1)) {\n                int current = n;\n                int currentMax = 1;\n                \n                while(set.contains(n + 1)) {\n                    currentMax++;\n                    n++;\n                }\n                \n                maxLength = Math.max(maxLength, currentMax);\n            }\n        }\n        \n        return maxLength;\n    }\n}\n",
    index: 58,
  },
  {
    title: "Majority Element",
    category: "array",
    id: "MajorityElement_array",
    algorithm:
      "//Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.\n//You may assume that the array is non-empty and the majority element always exist in the array.\n\nclass MajorityElement {\n    public int majorityElement(int[] nums) {\n        if(nums.length == 1) {\n            return nums[0];\n        }\n        \n        HashMap<Integer, Integer> map = new HashMap<Integer, Integer>();\n        for(int current: nums) {\n            if(map.containsKey(current) && map.get(current) + 1 > nums.length / 2) {\n                return current;\n            } else if(map.containsKey(current)) {\n                map.put(current, map.get(current) + 1);\n            } else {\n                map.put(current, 1);\n            }\n        }\n        \n        //no majority element exists\n        return -1;\n    }\n}\n",
    index: 59,
  },
  {
    title: "Maximum Product Subarray",
    category: "array",
    id: "MaximumProductSubarray_array",
    algorithm:
      "// Find the contiguous subarray within an array (containing at least one number) which has the largest product.\n\n// For example, given the array [2,3,-2,4],\n// the contiguous subarray [2,3] has the largest product = 6.\n\npublic class MaximumProductSubarray {\n    public int maxProduct(int[] nums) {\n        if(nums == null || nums.length == 0) {\n            return 0;\n        }\n        \n        int result = nums[0];\n        int max = nums[0];\n        int min = nums[0];\n        \n        for(int i = 1; i < nums.length; i++) {\n            int temp = max;\n            max = Math.max(Math.max(nums[i] * max, nums[i] * min), nums[i]);\n            min = Math.min(Math.min(nums[i] * temp, nums[i] * min), nums[i]);\n            \n            if(max > result) {\n                result = max;\n            }\n        }\n        \n        return result;\n    }\n}\n",
    index: 60,
  },
  {
    title: "Maximum Subarray",
    category: "array",
    id: "MaximumSubarray_array",
    algorithm:
      "// Find the contiguous subarray within an array (containing at least one number) which has the largest sum.\n\n// For example, given the array [-2,1,-3,4,-1,2,1,-5,4],\n// the contiguous subarray [4,-1,2,1] has the largest sum = 6.\n\npublic class Solution {\n\n    public int maxSubArray(int[] nums) {\n        \n        int[] dp = new int[nums.length];\n        \n        dp[0] = nums[0];\n        \n        int max = dp[0];\n        \n        for(int i = 1; i < nums.length; i++) {\n            \n            dp[i] = nums[i] + (dp[i - 1] > 0 ? dp[i - 1] : 0);\n            \n            max = Math.max(dp[i], max);\n            \n        }\n        \n        return max;\n        \n    }\n\n}",
    index: 61,
  },
  {
    title: "Merge Intervals",
    category: "array",
    id: "MergeIntervals_array",
    algorithm:
      "// Given a collection of intervals, merge all overlapping intervals.\n\n// For example,\n// Given [1,3],[2,6],[8,10],[15,18],\n// return [1,6],[8,10],[15,18].\n\n/**\n * Definition for an interval.\n * public class Interval {\n *     int start;\n *     int end;\n *     Interval() { start = 0; end = 0; }\n *     Interval(int s, int e) { start = s; end = e; }\n * }\n */\nclass MergeIntervals {\n    public List<Interval> merge(List<Interval> intervals) {\n        List<Interval> result = new ArrayList<Interval>();\n        if(intervals == null || intervals.size() == 0) {\n            return result;\n        }\n        \n        Interval[] allIntervals = intervals.toArray(new Interval[intervals.size()]);\n        Arrays.sort(allIntervals, new Comparator<Interval>() {\n           public int compare(Interval a, Interval b) {\n               if(a.start == b.start) {\n                   return a.end - b.end;\n               }\n               return a.start - b.start;\n           } \n        });\n        \n        for(Interval i: allIntervals) {\n            if (result.size() == 0 || result.get(result.size() - 1).end < i.start) {\n                    result.add(i);\n            } else {\n                result.get(result.size() - 1).end = Math.max(result.get(result.size() - 1).end, i.end);\n            }\n        }\n        \n        return result;\n    }\n}\n",
    index: 62,
  },
  {
    title: "Min Cost Climbing Stairs",
    category: "array",
    id: "MinCostClimbingStairs_array",
    algorithm:
      "//On a staircase, the i-th step has some non-negative cost cost[i] assigned (0 indexed).\n//\n//Once you pay the cost, you can either climb one or two steps. You need to find minimum cost to reach the top of the floor, and you can either start from the step with index 0, or the step with index 1.\n//\n//Example 1:\n//Input: cost = [10, 15, 20]\n//Output: 15\n//Explanation: Cheapest is start on cost[1], pay that cost and go to the top.\n//Example 2:\n//Input: cost = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1]\n//Output: 6\n//Explanation: Cheapest is start on cost[0], and only step on 1s, skipping cost[3].\n//Note:\n//cost will have a length in the range [2, 1000].\n//Every cost[i] will be an integer in the range [0, 999].\n\nclass MinCostClimbingStairs {\n    public int minCostClimbingStairs(int[] cost) {\n        if(cost == null || cost.length == 0) {\n            return 0;\n        }\n        if(cost.length == 1) {\n            return cost[0];\n        }\n        if(cost.length == 2) {\n            return Math.min(cost[0], cost[1]);\n        }\n        \n        int[] dp = new int[cost.length];\n        dp[0] = cost[0];\n        dp[1] = cost[1];\n        for(int i = 2; i < cost.length; i++) {\n            dp[i] = Math.min(dp[i - 1] + cost[i], dp[i - 2] + cost[i]);\n        }\n        \n        return Math.min(dp[cost.length - 1], dp[cost.length -2]);\n    }\n}\n\n",
    index: 63,
  },
  {
    title: "Minimum Path Sum",
    category: "array",
    id: "MinimumPathSum_array",
    algorithm:
      "//Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right \n//which minimizes the sum of all numbers along its path.\n//Note: You can only move either down or right at any point in time.\n//Example 1:\n//[[1,3,1],\n //[1,5,1],\n //[4,2,1]]\n//Given the above grid map, return 7. Because the path 1→3→1→1→1 minimizes the sum.\n\nclass MinimumPathSum {\n    public int minPathSum(int[][] grid) {\n        for(int i = 1; i < grid.length; i++) {\n            grid[i][0] += grid[i - 1][0];\n        }\n        for(int i = 1; i < grid[0].length; i++) {\n            grid[0][i] += grid[0][i - 1];\n        }\n        \n        for(int i = 1; i < grid.length; i++) {\n            for(int j = 1; j < grid[0].length; j++) {\n                grid[i][j] += Math.min(grid[i - 1][j], grid[i][j - 1]);\n            }\n        }\n        \n        return grid[grid.length - 1][grid[0].length - 1];\n    }\n}\n",
    index: 64,
  },
  {
    title: "Missing Ranges",
    category: "array",
    id: "MissingRanges_array",
    algorithm:
      '// Given a sorted integer array where the range of elements are in the inclusive range [lower, upper], return its missing ranges.\n\n// For example, given [0, 1, 3, 50, 75], lower = 0 and upper = 99, return ["2", "4->49", "51->74", "76->99"].\n\npublic class MissingRanges {\n    public List<String> findMissingRanges(int[] nums, int lower, int upper) {\n        ArrayList<String> result = new ArrayList<String>();\n        for(int i = 0; i <= nums.length; i++) {\n            long start = i == 0 ? lower : (long)nums[i - 1] + 1;\n            long end = i == nums.length ? upper : (long)nums[i] - 1;\n            addMissing(result, start, end);\n        }\n        \n        return result;\n    }\n    \n    void addMissing(ArrayList<String> result, long start, long end) {\n        if(start > end) {\n            return;\n        } else if(start == end) {\n            result.add(start + "");\n        } else {\n            result.add(start + "->" + end);\n        }\n    }\n}\n',
    index: 65,
  },
  {
    title: "Plus One",
    category: "array",
    id: "PlusOne_array",
    algorithm:
      "//Given a non-empty array of digits representing a non-negative integer, plus one to the integer.\n//\n//The digits are stored such that the most significant digit is at the head of the list, and each element in the array contain a single digit.\n//\n//You may assume the integer does not contain any leading zero, except the number 0 itself.\n//\n//Example 1:\n//\n//Input: [1,2,3]\n//Output: [1,2,4]\n//Explanation: The array represents the integer 123.\n//Example 2:\n//\n//Input: [4,3,2,1]\n//Output: [4,3,2,2]\n//Explanation: The array represents the integer 4321.\n\nclass Solution {\n    public int[] plusOne(int[] digits) {\n        for(int i = digits.length - 1; i >= 0; i--) {\n            if(digits[i] < 9) {\n                digits[i]++;\n                return digits;\n            }\n\n            digits[i] = 0;\n        }\n\n        int[] result = new int[digits.length + 1];\n        result[0] = 1;\n\n        return result;\n    }\n}\n",
    index: 66,
  },
  {
    title: "Productof Array Except Self",
    category: "array",
    id: "ProductofArrayExceptSelf_array",
    algorithm:
      "// Given an array of n integers where n > 1, nums, return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].\n\n// Solve it without division and in O(n).\n\n// For example, given [1,2,3,4], return [24,12,8,6].\n\n// Follow up:\n// Could you solve it with constant space complexity? (Note: The output array does not count as extra space for the purpose of space complexity analysis.)\n\npublic class ProductOfArrayExceptSelf {\n    public int[] productExceptSelf(int[] nums) {\n        int n = nums.length;\n        int[] result = new int[n];\n        int left = 1;\n        \n        for(int i = 0; i < nums.length; i++) {\n            if(i > 0) {\n                left *= nums[i - 1];\n            }\n            \n            result[i] = left;\n        }\n        \n        int right = 1;\n        \n        for(int i = n - 1; i >= 0; i--) {\n            if(i < n - 1) {\n                right *= nums[i + 1];\n            }\n            \n            result[i] *= right;\n        }\n        \n        return result;\n    }\n}\n",
    index: 67,
  },
  {
    title: "Remove Element",
    category: "array",
    id: "RemoveElement_array",
    algorithm:
      "//Given an array and a value, remove all instances of that value in-place and return the new length.\n//Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.\n//The order of elements can be changed. It doesn't matter what you leave beyond the new length.\n\n//Example:\n//Given nums = [3,2,2,3], val = 3,\n//Your function should return length = 2, with the first two elements of nums being 2.\n\nclass RemoveElement {\n    public int removeElement(int[] nums, int val) {\n        int index = 0;\n        for(int i = 0; i < nums.length; i++) {\n            if(nums[i] != val) {\n                nums[index++] = nums[i];\n            }\n        }\n        \n        return index;\n    }\n}\n",
    index: 68,
  },
  {
    title: "Rotate Image",
    category: "array",
    id: "RotateImage_array",
    algorithm:
      "// You are given an n x n 2D matrix representing an image.\n\n// Rotate the image by 90 degrees (clockwise).\n\n// Follow up:\n    // Could you do this in-place?\n\npublic class RotateImage {\n    public void rotate(int[][] matrix) {\n        for(int i = 0; i < matrix.length; i++) {\n            for(int j = 0; j < i; j++) {\n                int temp = matrix[i][j];\n                matrix[i][j] = matrix[j][i];\n                matrix[j][i] = temp;\n            }\n        }\n        \n        for(int i = 0; i < matrix.length; i++) {\n            for(int j = 0; j < matrix[0].length / 2; j++) {\n                int temp = matrix[i][j];\n                matrix[i][j] = matrix[i][matrix[0].length - 1 - j];\n                matrix[i][matrix[0].length - 1 - j] = temp;\n            }\n        }\n    }\n}\n",
    index: 69,
  },
  {
    title: "Search In Rotated Sorted Array",
    category: "array",
    id: "SearchInRotatedSortedArray_array",
    algorithm:
      "// Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.\n\n// (i.e., 0 1 2 4 5 6 7 might become 4 5 6 7 0 1 2).\n\n// You are given a target value to search. If found in the array return its index, otherwise return -1.\n\n// You may assume no duplicate exists in the array.\n\npublic class SearchInRotatedSortedArray {\n    public int search(int[] nums, int target) {\n        int left = 0;\n        int right = nums.length - 1;\n        \n        while(left <= right) {\n            int mid = left + (right - left) / 2;\n            \n            if(nums[mid] == target) {\n                return mid;\n            }\n            \n            if(nums[left] <= nums[mid]) {\n                if(target < nums[mid] && target >= nums[left]) {\n                    right = mid - 1;\n                } else {\n                    left = mid + 1;\n                }\n            }\n            \n            if(nums[mid] <= nums[right]) {\n                if(target > nums[mid] && target <= nums[right]) {\n                    left = mid + 1;\n                } else {\n                    right = mid - 1;\n                }\n            }\n        }\n        \n        return -1;\n    }\n}\n",
    index: 70,
  },
  {
    title: "Spiral Matrix",
    category: "array",
    id: "SpiralMatrix_array",
    algorithm:
      "//Given a matrix of m x n elements (m rows, n columns), return all elements of the matrix in spiral order.\n//\n//Example 1:\n//\n//Input:\n//[\n //[ 1, 2, 3 ],\n //[ 4, 5, 6 ],\n //[ 7, 8, 9 ]\n//]\n//Output: [1,2,3,6,9,8,7,4,5]\n//Example 2:\n//\n//Input:\n//[\n  //[1, 2, 3, 4],\n  //[5, 6, 7, 8],\n  //[9,10,11,12]\n//]\n//Output: [1,2,3,4,8,12,11,10,9,5,6,7]\n\nclass SpiralMatrix {\n    public List<Integer> spiralOrder(int[][] matrix) {\n        List<Integer> result = new ArrayList<Integer>();\n        if(matrix == null || matrix.length == 0) {\n            return result;\n        }\n        \n        int rowStart = 0;\n        int rowEnd = matrix.length - 1;\n        int colStart = 0;\n        int colEnd = matrix[0].length - 1;\n        while(rowStart <= rowEnd && colStart <= colEnd) {\n            for(int i = colStart; i <= colEnd; i++) {\n                result.add(matrix[rowStart][i]);\n            }\n            rowStart++;\n            \n            for(int i = rowStart; i <= rowEnd; i++) {\n                result.add(matrix[i][colEnd]);\n            }\n            colEnd--;\n            \n            if(rowStart <= rowEnd) {\n                for(int i = colEnd; i >= colStart; i--) {\n                    result.add(matrix[rowEnd][i]);\n                }\n            }\n            rowEnd--;\n            \n            if(colStart <= colEnd) {\n                for(int i = rowEnd; i >= rowStart; i--) {\n                    result.add(matrix[i][colStart]);\n                }\n            }   \n            colStart++;\n        }\n        \n        return result;\n    }\n}\n",
    index: 71,
  },
  {
    title: "Spiral Matrix I I",
    category: "array",
    id: "SpiralMatrixII_array",
    algorithm:
      "// Given an integer n, generate a square matrix filled with elements from 1 to n2 in spiral order.\n\n// For example,\n// Given n = 3,\n\n// You should return the following matrix:\n// [\n//  [ 1, 2, 3 ],\n//  [ 8, 9, 4 ],\n//  [ 7, 6, 5 ]\n// ]\n\npublic class SpiralMatrix {\n    public int[][] generateMatrix(int n) {\n        int[][] spiral = new int[n][n];\n        \n        if(n == 0) {\n            return spiral;\n        }\n        \n        int rowStart = 0;\n        int colStart = 0;\n        int rowEnd = n - 1;\n        int colEnd = n -1;\n        int number = 1;\n        \n        while(rowStart <= rowEnd && colStart <= colEnd) {\n            for(int i = colStart; i <= colEnd; i++) {\n                spiral[rowStart][i] = number++;\n            }\n            \n            rowStart++;\n            \n            for(int i = rowStart; i <= rowEnd; i++) {\n                spiral[i][colEnd] = number++;\n            }\n            \n            colEnd--;\n            \n            for(int i = colEnd; i >= colStart; i--) {\n                if(rowStart <= rowEnd) {\n                    spiral[rowEnd][i] = number++;\n                }\n            }\n            \n            rowEnd--;\n            \n            for(int i = rowEnd; i >= rowStart; i--) {\n                if(colStart <= colEnd) {\n                    spiral[i][colStart] = number++;\n                }\n            }\n            \n            colStart++;\n        }\n        \n        return spiral;\n    }\n}\n",
    index: 72,
  },
  {
    title: "Subsets",
    category: "array",
    id: "Subsets_array",
    algorithm:
      "// Given a set of distinct integers, nums, return all possible subsets.\n\n// Note: The solution set must not contain duplicate subsets.\n\n// For example,\n// If nums = [1,2,3], a solution is:\n\n// [\n//   [3],\n//   [1],\n//   [2],\n//   [1,2,3],\n//   [1,3],\n//   [2,3],\n//   [1,2],\n//   []\n// ]\n\npublic class Subsets {\n    public List<List<Integer>> subsets(int[] nums) {\n        List<List<Integer>> result = new ArrayList<>();\n        \n        recurse(result, nums, new Stack<>(), 0);\n        \n        return result;\n    }\n    \n    private void recurse(List<List<Integer>> result, int[] nums, Stack path, int position) {\n        if(position == nums.length) {\n            result.add(new ArrayList<>(path));\n            return;\n        }\n\n        path.push(nums[position]);\n\n        recurse(result, nums, path, position + 1);\n        \n        path.pop();\n        \n        recurse(result, nums, path, position + 1);\n    }\n}\n",
    index: 73,
  },
  {
    title: "Subsets I I",
    category: "array",
    id: "SubsetsII_array",
    algorithm:
      "    // Given a collection of integers that might contain duplicates, nums, return all possible subsets.\n\n// Note: The solution set must not contain duplicate subsets.\n\n// For example,\n// If nums = [1,2,2], a solution is:\n\n// [\n//   [2],\n//   [1],\n//   [1,2,2],\n//   [2,2],\n//   [1,2],\n//   []\n// ]\n\npublic class SubsetsII {\n    public List<List<Integer>> subsetsWithDup(int[] nums) {\n        Arrays.sort(nums);\n        \n        List<List<Integer>> result = new ArrayList<List<Integer>>();\n        \n        if(nums.length == 0 || nums == null) {\n            return result;\n        }\n        \n        helper(nums, new ArrayList<Integer>(), 0, result);\n        \n        return result;\n    }\n    \n    \n    public void helper(int[] nums, ArrayList<Integer> current, int index, List<List<Integer>> result) {\n        result.add(current);\n        \n        for(int i = index; i < nums.length; i++) {\n            if(i > index && nums[i] == nums[i - 1]) {\n                continue;\n            }\n            \n            ArrayList<Integer> newCurrent = new ArrayList<Integer>(current);\n            newCurrent.add(nums[i]);\n            helper(nums, newCurrent, i + 1, result);\n        }\n    }\n}\n",
    index: 74,
  },
  {
    title: "Summary Ranges",
    category: "array",
    id: "SummaryRanges_array",
    algorithm:
      '// Given a sorted integer array without duplicates, return the summary of its ranges.\n\n// For example, given [0,1,2,4,5,7], return ["0->2","4->5","7"].\n\npublic class SummaryRanges {\n    public List<String> summaryRanges(int[] nums) {\n        List<String> result = new ArrayList();\n        \n        if(nums.length == 1) {\n            result.add(nums[0] + "");\n            return result;\n        }\n        \n        for(int i = 0; i < nums.length; i++) {\n            int current = nums[i];\n            \n            while(i + 1 < nums.length && (nums[i + 1] - nums[i] == 1)) {\n                i++;\n            }\n            \n            if(current != nums[i]) {\n                result.add(current + "->" + nums[i]);\n            } else {\n                result.add(current + "");\n            }\n        }\n        \n        return result;\n    }\n}\n',
    index: 75,
  },
  {
    title: "Unique Paths",
    category: "array",
    id: "UniquePaths_array",
    algorithm:
      "//A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).\n//\n//The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).\n//\n//How many possible unique paths are there?\n\nclass UniquePaths {\n    public int uniquePaths(int m, int n) {\n        Integer[][] map = new Integer[m][n];\n        \n        //only 1 way to get to ith row, 0th column (move down)\n        for(int i = 0; i < m; i++){\n            map[i][0] = 1;\n        }\n        \n        //only 1 way to get to ith column, 0th row (move right)\n        for(int j= 0; j < n; j++){\n            map[0][j]=1;\n        }\n        \n        //x ways to get to ith row, jth column (# of ways to get to\n        //ith - 1 row, jth column + # of ways to get to jth - 1 column\n        //ith column\n        for(int i = 1;i < m; i++){\n            for(int j = 1; j < n; j++){\n                map[i][j] = map[i - 1][j] + map[i][j - 1];\n            }\n        }\n\n        return map[m - 1][n - 1];\n    }\n}\n",
    index: 76,
  },
  {
    title: "Wiggle Sort",
    category: "array",
    id: "WiggleSort_array",
    algorithm:
      "// Given an unsorted array nums, reorder it in-place such that nums[0] <= nums[1] >= nums[2] <= nums[3]....\n\n// For example, given nums = [3, 5, 2, 1, 6, 4], one possible answer is [1, 6, 2, 5, 3, 4].\n\npublic class WiggleSort {\n    public void wiggleSort(int[] nums) {\n        for(int i = 1; i < nums.length; i++) {\n            int current = nums[i - 1];\n            \n            if((i % 2 == 1) == (current > nums[i])) {\n                nums[i - 1] = nums[i];\n                nums[i] = current;\n            }\n        }\n    }\n}\n",
    index: 77,
  },
  {
    title: "Word Search",
    category: "array",
    id: "WordSearch_array",
    algorithm:
      "// Given a 2D board and a word, find if the word exists in the grid.\n\n// The word can be constructed from letters of sequentially adjacent cell, where \"adjacent\" cells are those horizontally or vertically neighboring. The same letter cell may not be used more than once.\n\n// For example,\n// Given board =\n\n// [\n//   ['A','B','C','E'],\n//   ['S','F','C','S'],\n//   ['A','D','E','E']\n// ]\n// word = \"ABCCED\", -> returns true,\n// word = \"SEE\", -> returns true,\n// word = \"ABCB\", -> returns false.\n\npublic class WordSearch {\n    public boolean exist(char[][] board, String word) {\n        char[] w = word.toCharArray();\n        \n        for(int i = 0; i < board.length; i++) {\n            for(int j = 0; j < board[0].length; j++) {\n                if(search(board, i, j, w, 0)) {\n                    return true;\n                }\n            }\n        }\n        \n        return false;\n    }\n    \n    public boolean search(char[][] board, int i, int j, char[] w, int index) {\n        if(index == w.length) {\n            return true;\n        }\n\n        if(i < 0 || i >= board.length || j < 0 || j >= board[0].length) {\n            return false;\n        }        \n\n        if(board[i][j] != w[index]) {\n            return false;\n        }\n        \n        board[i][j] ^= 256;\n\n        boolean exist = search(board, i + 1, j, w, index + 1) ||\n                        search(board, i - 1, j, w, index + 1) ||\n                        search(board, i, j + 1, w, index + 1) ||\n                        search(board, i, j - 1, w, index + 1);\n        board[i][j] ^= 256;\n\n        return exist;\n    }\n}\n",
    index: 78,
  },
  {
    title: "Backtracking",
    category: "leetcode",
    id: "backtracking",
    index: 79,
  },
  {
    title: "Android Unlock Patterns",
    category: "backtracking",
    id: "AndroidUnlockPatterns_backtracking",
    algorithm:
      "// Given an Android 3x3 key lock screen and two integers m and n, where 1 ≤ m ≤ n ≤ 9, count the total number of unlock patterns of the Android lock screen, which consist of minimum of m keys and maximum n keys.\n\n// Rules for a valid pattern:\n    // Each pattern must connect at least m keys and at most n keys.\n    // All the keys must be distinct.\n    // If the line connecting two consecutive keys in the pattern passes through any other keys, the other keys must have previously selected in the pattern. No jumps through non selected key is allowed.\n    // The order of keys used matters.\n\n// Explanation:\n// | 1 | 2 | 3 |\n// | 4 | 5 | 6 |\n// | 7 | 8 | 9 |\n// Invalid move: 4 - 1 - 3 - 6 \n// Line 1 - 3 passes through key 2 which had not been selected in the pattern.\n\n// Invalid move: 4 - 1 - 9 - 2\n// Line 1 - 9 passes through key 5 which had not been selected in the pattern.\n\n// Valid move: 2 - 4 - 1 - 3 - 6\n// Line 1 - 3 is valid because it passes through key 2, which had been selected in the pattern\n\n// Valid move: 6 - 5 - 4 - 1 - 9 - 2\n// Line 1 - 9 is valid because it passes through key 5, which had been selected in the pattern.\n\n// Example:\n// Given m = 1, n = 1, return 9.\n\npublic class AndroidUnlockPatterns {\n    public int numberOfPatterns(int m, int n) {\n        //initialize a 10x10 matrix\n        int skip[][] = new int[10][10];\n        \n        //initialize indices of skip matrix (all other indices in matrix are 0 by default)\n        skip[1][3] = skip[3][1] = 2;\n        skip[1][7] = skip[7][1] = 4;\n        skip[3][9] = skip[9][3] = 6;\n        skip[7][9] = skip[9][7] = 8;\n        skip[1][9] = skip[9][1] = skip[2][8] = skip[8][2] = skip[3][7] = skip [7][3] = skip[6][4] = skip[4][6] = 5;\n        \n        //initialize visited array\n        boolean visited[] = new boolean[10];\n        \n        //initialize total number to 0\n        int totalNumber = 0;\n        \n        //run DFS for each length from m to n\n        for(int i = m; i <= n; ++i) {\n            totalNumber += DFS(visited, skip, 1, i - 1) * 4; //1, 3, 7, and 9 are symmetric so multiply this result by 4\n            totalNumber += DFS(visited, skip, 2, i - 1) * 4; //2, 4, 6, and 8 are symmetric so multiply this result by 4\n            totalNumber += DFS(visited, skip, 5, i - 1); //do not multiply by 4 because 5 is unique         \n        }\n        \n        return totalNumber;\n    }\n    \n    int DFS(boolean visited[], int[][] skip, int current, int remaining) {\n        //base cases\n        if(remaining < 0) {\n            return 0;\n        }\n        \n        if(remaining == 0) {\n            return 1;\n        }\n        \n        //mark the current node as visited\n        visited[current] = true;\n        \n        //initialize total number to 0\n        int totalNumber = 0;\n        \n        for(int i = 1; i <= 9; ++i) {\n            //if the current node has not been visited and (two numbers are adjacent or skip number has already been visited)\n            if(!visited[i] && (skip[current][i] == 0 || visited[skip[current][i]])) {\n                totalNumber += DFS(visited, skip, i, remaining - 1);\n            }\n        }\n        \n        //mark the current node as not visited\n        visited[current] = false;\n        \n        //return total number\n        return totalNumber;\n    }\n}\n",
    index: 80,
  },
  {
    title: "Generalized Abbreviation",
    category: "backtracking",
    id: "GeneralizedAbbreviation_backtracking",
    algorithm:
      '// Write a function to generate the generalized abbreviations of a word.\n\n// Example:\n// Given word = "word", return the following list (order does not matter):\n// ["word", "1ord", "w1rd", "wo1d", "wor1", "2rd", "w2d", "wo2", "1o1d", "1or1", "w1r1", "1o2", "2r1", "3d", "w3", "4"]\n\npublic class GeneralizedAbbreviation {\n    public List<String> generateAbbreviations(String word) {\n        List<String> result = new ArrayList<String>();\n        \n        backtrack(result, word, 0, "", 0);\n        \n        return result;\n    }\n    \n    void backtrack(List result, String word, int position, String current, int count) {\n        if(position == word.length()) {\n            if(count > 0) {\n                current += count;   \n            }\n            \n            result.add(current);\n        } else {\n            backtrack(result, word, position + 1, current, count + 1);\n            backtrack(result, word, position + 1, current + (count > 0 ? count : "") + word.charAt(position), 0);\n        }\n    }\n}\n',
    index: 81,
  },
  {
    title: "Generate Parentheses",
    category: "backtracking",
    id: "GenerateParentheses_backtracking",
    algorithm:
      '//Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.\n//\n//For example, given n = 3, a solution set is:\n//\n//[\n  //"((()))",\n  //"(()())",\n  //"(())()",\n  //"()(())",\n  //"()()()"\n//]\n\nclass GenerateParentheses {\n    public List<String> generateParenthesis(int n) {\n        List<String> result = new ArrayList<String>();\n        generateParenthesisRecursive(result, "", 0, 0, n);\n        \n        return result;\n    }\n    \n    public void generateParenthesisRecursive(List<String> result, String current, int open, int close, int n) {\n        if(current.length() == n * 2) {\n            result.add(current);\n            return;\n        }\n        \n        if(open < n) {\n            generateParenthesisRecursive(result, current + "(", open + 1, close, n);\n        }\n        \n        if(close < open) {\n            generateParenthesisRecursive(result, current + ")", open, close + 1, n);\n        }\n    }\n}\n',
    index: 82,
  },
  {
    title: "Letter Combinations Of A Phone Number",
    category: "backtracking",
    id: "LetterCombinationsOfAPhoneNumber_backtracking",
    algorithm:
      '// Given a digit string, return all possible letter combinations that the number could represent.\n\n// A mapping of digit to letters (just like on the telephone buttons) is given below.\n\n// 2 - abc\n// 3 - def\n// 4 - ghi\n// 5 - jkl\n// 6 - mno\n// 7 - pqrs\n// 8 - tuv\n// 9 - wxyz\n\n// Input:Digit string "23"\n// Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].\n\nclass LetterCombinationsOfAPhoneNumber {\n    public List<String> letterCombinations(String digits) {\n        List<String> result = new ArrayList<String>();\n        \n        if(digits == null || digits.length() == 0) {\n            return result;\n        }\n        \n        String[] mapping = {\n            "0",\n            "1",\n            "abc",\n            "def",\n            "ghi",\n            "jkl",\n            "mno",\n            "pqrs",\n            "tuv",\n            "wxyz"\n        };\n        \n        letterCombinationsRecursive(result, digits, "", 0, mapping);\n        \n        return result;\n    }\n    \n    public void letterCombinationsRecursive(List<String> result, String digits, String current, int index, String[] mapping) {\n        if(index == digits.length()) {\n            result.add(current);\n            return;\n        }\n        \n        String letters = mapping[digits.charAt(index) - \'0\'];\n        for(int i = 0; i < letters.length(); i++) {\n            letterCombinationsRecursive(result, digits, current + letters.charAt(i), index + 1, mapping);\n        }\n    }\n}\n',
    index: 83,
  },
  {
    title: "Permutations",
    category: "backtracking",
    id: "Permutations_backtracking",
    algorithm:
      "//Given a collection of distinct numbers, return all possible permutations.\n//\n//For example,\n//[1,2,3] have the following permutations:\n//[\n  //[1,2,3],\n  //[1,3,2],\n  //[2,1,3],\n  //[2,3,1],\n  //[3,1,2],\n  //[3,2,1]\n//]\n\nclass Permutations {\n    public List<List<Integer>> permute(int[] nums) {\n        LinkedList<List<Integer>> result = new LinkedList<List<Integer>>();\n        result.add(new ArrayList<Integer>());\n        for (int n: nums) {\n            int size = result.size();\n            while(size > 0) {\n                List<Integer> current = result.pollFirst();\n                for (int i = 0; i <= current.size(); i++) {\n                    List<Integer> temp = new ArrayList<Integer>(current);\n                    temp.add(i, n);\n                    result.add(temp);\n                }\n                size--;\n            }\n        }\n\n        return result;\n    }\n}\n",
    index: 84,
  },
  {
    title: "Binary Search",
    category: "leetcode",
    id: "binary-search",
    index: 85,
  },
  {
    title: "Closest Binary Search Tree Value",
    category: "binary-search",
    id: "ClosestBinarySearchTreeValue_binary-search",
    algorithm:
      "// Given a non-empty binary search tree and a target value, find the value in the BST that is closest to the target.\n\n// Note:\n\t// Given target value is a floating point.\n\t// You are guaranteed to have only one unique value in the BST that is closest to the target.\n\n/**\n * Definition for a binary tree node.\n * public class TreeNode {\n *     int val;\n *     TreeNode left;\n *     TreeNode right;\n *     TreeNode(int x) { val = x; }\n * }\n */\npublic class ClosestBinarySearchTreeValue {\n    public int closestValue(TreeNode root, double target) {\n        int value = root.val;\n        TreeNode child = root.val < target ? root.right : root.left;\n\n        if(child == null) {\n            return value;\n        }\n\n        int childValue = closestValue(child, target);\n        \n        return Math.abs(value - target) < Math.abs(childValue - target) ? value : childValue;\n    }\n}\n",
    index: 86,
  },
  {
    title: "First Bad Version",
    category: "binary-search",
    id: "FirstBadVersion_binary-search",
    algorithm:
      "// You are a product manager and currently leading a team to develop a new product. Unfortunately, the latest version of your product fails the quality check. Since each version is developed based on the previous version, all the versions after a bad version are also bad.\n\n// Suppose you have n versions [1, 2, ..., n] and you want to find out the first bad one, which causes all the following ones to be bad.\n\n// You are given an API bool isBadVersion(version) which will return whether version is bad. Implement a function to find the first bad version. You should minimize the number of calls to the API.\n\n/* The isBadVersion API is defined in the parent class VersionControl.\n      boolean isBadVersion(int version); */\n\npublic class FirstBadVersion extends VersionControl {\n    public int firstBadVersion(int n) {\n        int start = 1;\n        int end = n;\n        \n        while(start < end) {\n            int mid = start + (end - start) / 2;\n\n            if(!isBadVersion(mid)) {\n                start = mid + 1;\n            } else {\n                end = mid;\n            }\n        }\n        \n        return start;\n    }\n}\n",
    index: 87,
  },
  {
    title: "Guess Number Higher Or Lower",
    category: "binary-search",
    id: "GuessNumberHigherOrLower_binary-search",
    algorithm:
      "// We are playing the Guess Game. The game is as follows:\n\n// I pick a number from 1 to n. You have to guess which number I picked.\n\n// Every time you guess wrong, I'll tell you whether the number is higher or lower.\n\n// You call a pre-defined API guess(int num) which returns 3 possible results (-1, 1, or 0):\n\n// -1 : My number is lower\n//  1 : My number is higher\n//  0 : Congrats! You got it!\n// Example:\n// n = 10, I pick 6.\n\n// Return 6.\n\npublic class GuessNumberHigherOrLower extends GuessGame {\n    public int guessNumber(int n) {\n        int left = 1;\n        int right = n;\n        while(left <= right) {\n            int mid = left + (right - left) / 2;\n            if(guess(mid) == 0) {\n                return mid;\n            } else if(guess(mid) > 0) {\n                left = mid + 1;\n            } else {\n                right = mid;\n            }\n        }\n        \n        return -1;\n    }\n}\n",
    index: 88,
  },
  {
    title: "Power Of X To The N",
    category: "binary-search",
    id: "PowerOfXToTheN_binary-search",
    algorithm:
      "// Implement pow(x, n).\n\npublic class PowerOfXToTheN {\n    public double myPow(double x, int n) {\n        if(n == 0) {\n            return 1;\n        }\n        \n        if(Double.isInfinite(x)) {\n            return 0;\n        }\n        \n        if(n < 0) {\n            n = -n;\n            x = 1 / x;\n        }\n        \n        return n % 2 == 0 ? myPow(x * x, n / 2) : x * myPow(x * x, n / 2);\n    }\n}\n",
    index: 89,
  },
  {
    title: "Square Root X",
    category: "binary-search",
    id: "SquareRootX_binary-search",
    algorithm:
      "// Implement int sqrt(int x).\n\n// Compute and return the square root of x.\n\npublic class Solution {\n    public int mySqrt(int x) {\n        if(x == 0) {\n            return 0;\n        }\n        \n        int left = 1;\n        int right = x;\n        \n        while(left <= right) {\n            int mid = left + (right - left) / 2;\n            \n            if(mid == x / mid) {\n                return mid;\n            } else if(mid > x / mid) {\n                right = mid - 1;\n            } else if(mid < x / mid) {\n                left = mid + 1;\n            }\n        }\n        \n        return right;\n    }\n}\n",
    index: 90,
  },
  {
    title: "Bit Manipulation",
    category: "leetcode",
    id: "bit-manipulation",
    index: 91,
  },
  {
    title: "Binary Watch",
    category: "bit-manipulation",
    id: "BinaryWatch_bit-manipulation",
    algorithm:
      '// A binary watch has 4 LEDs on the top which represent the hours (0-11), and the 6 LEDs on the bottom represent the minutes (0-59).\n\n// Each LED represents a zero or one, with the least significant bit on the right.\n\n// For example, the above binary watch reads "3:25".\n\n// Given a non-negative integer n which represents the number of LEDs that are currently on, return all possible times the watch could represent.\n\n// Example:\n\n// Input: n = 1\n// Return: ["1:00", "2:00", "4:00", "8:00", "0:01", "0:02", "0:04", "0:08", "0:16", "0:32"]\n// Note:\n// The order of output does not matter.\n// The hour must not contain a leading zero, for example "01:00" is not valid, it should be "1:00".\n// The minute must be consist of two digits and may contain a leading zero, for example "10:2" is not valid, it should be "10:02".\n\npublic class BinaryWatch {\n    public List<String> readBinaryWatch(int num) {\n        ArrayList<String> allTimes = new ArrayList<String>();\n        \n        //iterate through all possible time combinations\n        for(int i = 0; i < 12; i++) {\n            for(int j = 0; j < 60; j++) {\n                //if the current number and n have the same number of bits the time is possible\n                if(Integer.bitCount(i * 64 + j) == num) {\n                    //add the current time to all times arraylist\n                    allTimes.add(String.format("%d:%02d", i, j));\n                }\n            }\n        }\n        \n        return allTimes;\n    }\n}\n',
    index: 92,
  },
  {
    title: "Counting Bits",
    category: "bit-manipulation",
    id: "CountingBits_bit-manipulation",
    algorithm:
      "// Given a non negative integer number num. For every numbers i in the range 0 ≤ i ≤ num calculate the number of 1's in their binary representation and return them as an array.\n\n// Example:\n// For num = 5 you should return [0,1,1,2,1,2].\n\npublic class CountingBits {\n    public int[] countBits(int num) {\n        int[] bits = new int[num + 1];\n        \n        bits[0] = 0;\n        \n        for(int i = 1; i <= num; i++) {\n            bits[i] = bits[i >> 1] + (i & 1);\n        }\n        \n        return bits;\n    }\n}\n",
    index: 93,
  },
  {
    title: "Hamming Distance",
    category: "bit-manipulation",
    id: "HammingDistance_bit-manipulation",
    algorithm:
      "// The Hamming distance between two integers is the number of positions at which the corresponding bits are different.\n\n// Given two integers x and y, calculate the Hamming distance.\n\n// Note:\n// 0 ≤ x, y < 2^31.\n\n// Example:\n\n// Input: x = 1, y = 4\n\n// Output: 2\n\n// Explanation:\n// 1   (0 0 0 1)\n// 4   (0 1 0 0)\n//        ↑   ↑\n\n// The above arrows point to positions where the corresponding bits are different.\n\npublic class HammingDistance {\n    public int hammingDistance(int x, int y) {\n        return Integer.bitCount(x ^ y);\n    }\n}\n",
    index: 94,
  },
  {
    title: "Maximum Product Of Word Lengths",
    category: "bit-manipulation",
    id: "MaximumProductOfWordLengths_bit-manipulation",
    algorithm:
      '// Given a string array words, find the maximum value of length(word[i]) * length(word[j]) where the two words do not share common letters. You may assume that each word will contain only lower case letters. If no such two words exist, return 0.\n\n// Example 1:\n// Given ["abcw", "baz", "foo", "bar", "xtfn", "abcdef"]\n// Return 16\n// The two words can be "abcw", "xtfn".\n\n// Example 2:\n// Given ["a", "ab", "abc", "d", "cd", "bcd", "abcd"]\n// Return 4\n// The two words can be "ab", "cd".\n\n// Example 3:\n// Given ["a", "aa", "aaa", "aaaa"]\n// Return 0\n// No such pair of words.\n\npublic class MaximumProductOfWordLengths {\n    public int maxProduct(String[] words) {\n        if(words.length == 0 || words == null) {\n            return 0;\n        }\n        \n        int length = words.length;\n        int[] value = new int[length];\n        int max = 0;\n        \n        for(int i = 0; i < length; i++) {\n            String temp = words[i];\n            \n            value[i] = 0;\n            \n            for(int j = 0; j < temp.length(); j++) {\n                value[i] |= 1 << (temp.charAt(j) - \'a\');\n            }\n        }\n        \n        \n        for(int i = 0; i < length; i++) {\n            for(int j = 1; j < length; j++) {\n                if((value[i] & value[j]) == 0 && (words[i].length() * words[j].length()) > max) {\n                    max = words[i].length() * words[j].length();\n                }\n            }\n        }\n        \n        return max;\n    }\n}\n',
    index: 95,
  },
  {
    title: "Number Of One Bits",
    category: "bit-manipulation",
    id: "NumberOfOneBits_bit-manipulation",
    algorithm:
      "// Write a function that takes an unsigned integer and returns the number of ’1' bits it has (also known as the Hamming weight).\n\n// For example, the 32-bit integer ’11' has binary representation 00000000000000000000000000001011, so the function should return 3.\n\npublic class NumberOfOneBits {\n    // you need to treat n as an unsigned value\n    public int hammingWeight(int n) {\n        if(n == 0) {\n            return 0;\n        }\n        \n        int count = 0;\n        \n        while(n != 0) {\n            count += (n) & 1;\n            n >>>= 1;\n        }\n        \n        return count;\n    }\n}\n",
    index: 96,
  },
  {
    title: "Power Of Two",
    category: "bit-manipulation",
    id: "PowerOfTwo_bit-manipulation",
    algorithm:
      "//Given an integer, write a function to determine if it is a power of two.\n//\n//Example 1:\n//\n//Input: 1\n//Output: true\n//Example 2:\n//\n//Input: 16\n//Output: true\n//Example 3:\n//\n//Input: 218\n//Output: false\n\nclass PowerOfTwo {\n    public boolean isPowerOfTwo(int n) {\n        long i = 1;\n        while(i < n) {\n            i <<= 1;\n        }\n        \n        return i == n;\n    }\n}\n",
    index: 97,
  },
  {
    title: "Sum Of Two Integer",
    category: "bit-manipulation",
    id: "SumOfTwoInteger_bit-manipulation",
    algorithm:
      "// Calculate the sum of two integers a and b, but you are not allowed to use the operator + and -.\n\n// Example:\n// Given a = 1 and b = 2, return 3.\n\npublic class SumOfTwoIntegers {\n    public int getSum(int a, int b) {\n        if(a == 0) {\n            return b;\n        }\n\n        if(b == 0) {\n            return a;\n        }\n        \n        while(b != 0) {\n            int carry = a & b;\n            a = a ^ b;\n            b = carry << 1;\n        }\n        \n        return a;\n    }\n}\n",
    index: 98,
  },
  {
    title: "Utf8 Validation",
    category: "bit-manipulation",
    id: "Utf8Validation_bit-manipulation",
    algorithm:
      "// A character in UTF8 can be from 1 to 4 bytes long, subjected to the following rules:\n\n// For 1-byte character, the first bit is a 0, followed by its unicode code.\n// For n-bytes character, the first n-bits are all one's, the n+1 bit is 0, followed by n-1 bytes with most significant 2 bits being 10.\n// This is how the UTF-8 encoding would work:\n\n//    Char. number range  |        UTF-8 octet sequence\n//       (hexadecimal)    |              (binary)\n//    --------------------+---------------------------------------------\n//    0000 0000-0000 007F | 0xxxxxxx\n//    0000 0080-0000 07FF | 110xxxxx 10xxxxxx\n//    0000 0800-0000 FFFF | 1110xxxx 10xxxxxx 10xxxxxx\n//    0001 0000-0010 FFFF | 11110xxx 10xxxxxx 10xxxxxx 10xxxxxx\n// Given an array of integers representing the data, return whether it is a valid utf-8 encoding.\n\n// Note:\n// The input is an array of integers. Only the least significant 8 bits of each integer is used to store the data. This means each integer represents only 1 byte of data.\n\n// Example 1:\n\n// data = [197, 130, 1], which represents the octet sequence: 11000101 10000010 00000001.\n\n// Return true.\n// It is a valid utf-8 encoding for a 2-bytes character followed by a 1-byte character.\n// Example 2:\n\n// data = [235, 140, 4], which represented the octet sequence: 11101011 10001100 00000100.\n\n// Return false.\n// The first 3 bits are all one's and the 4th bit is 0 means it is a 3-bytes character.\n// The next byte is a continuation byte which starts with 10 and that's correct.\n// But the second continuation byte does not start with 10, so it is invalid.\n\npublic class Utf8Validation {\n    public boolean validUtf8(int[] data) {\n        int count = 0;\n\n        for(int i : data) {\n            if(count == 0) {\n                if((i >> 5) == 0b110) {\n                    count = 1;\n                } else if((i >> 4) == 0b1110) {\n                    count = 2;\n                } else if((i >> 3) == 0b11110) {\n                    count = 3;\n                } else if((i >> 7) == 0b1) {\n                    return false;\n                }\n            } else {\n                if((i >> 6) != 0b10) {\n                    return false;\n                }\n\n                count--;\n            }\n        }\n        \n        return count == 0;\n    }\n}\n",
    index: 99,
  },
  { title: "Brainteaser", category: "leetcode", id: "brainteaser", index: 100 },
  {
    title: "Bulb Switcher",
    category: "brainteaser",
    id: "BulbSwitcher_brainteaser",
    algorithm:
      "//There are n bulbs that are initially off. You first turn on all the bulbs. Then, you turn off every second bulb. On the third round, you toggle every third bulb (turning on if it's off or turning off if it's on). For the ith round, you toggle every i bulb. For the nth round, you only toggle the last bulb. Find how many bulbs are on after n rounds.\n//Example:\n//Given n = 3. \n\n//At first, the three bulbs are [off, off, off].\n//After first round, the three bulbs are [on, on, on].\n//After second round, the three bulbs are [on, off, on].\n//After third round, the three bulbs are [on, off, off]. \n\n//So you should return 1, because there is only one bulb is on.\n\nclass BulbSwitcher {\n    public int bulbSwitch(int n) {\n        return (int)Math.sqrt(n);\n    }\n}\n\n",
    index: 101,
  },
  {
    title: "Breadth First Search",
    category: "leetcode",
    id: "breadth-first-search",
    index: 102,
  },
  {
    title: "Binary Tree Level Order Traversal",
    category: "breadth-first-search",
    id: "BinaryTreeLevelOrderTraversal_breadth-first-search",
    algorithm:
      "// Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).\n\n// For example:\n// Given binary tree [3,9,20,null,null,15,7],\n//     3\n//    / \\\n//   9  20\n//     /  \\\n//    15   7\n// return its level order traversal as:\n// [\n//   [3],\n//   [9,20],\n//   [15,7]\n// ]\n\n/**\n * Definition for a binary tree node.\n * public class TreeNode {\n *     int val;\n *     TreeNode left;\n *     TreeNode right;\n *     TreeNode(int x) { val = x; }\n * }\n */\npublic class BinarySearchTreeLevelOrderTraversal {\n    public List<List<Integer>> levelOrder(TreeNode root) {\n        List<List<Integer>> result = new ArrayList<List<Integer>>();\n        \n        if(root == null) {\n            return result;\n        }\n\n        Queue<TreeNode> queue = new LinkedList<TreeNode>();\n        \n        queue.add(root);\n        \n        List<Integer> tempList = new ArrayList<Integer>();\n        tempList.add(root.val);\n        result.add(tempList);\n        \n        while(!queue.isEmpty()) {\n            Queue<TreeNode> currentLevel = new LinkedList<TreeNode>();\n            \n            List<Integer> list = new ArrayList<Integer>();\n            \n            while(!queue.isEmpty()) {\n                TreeNode current = queue.remove();\n                \n                if(current.left != null) {\n                    currentLevel.add(current.left);\n                    list.add(current.left.val);\n                }\n                \n                if(current.right != null) {\n                    currentLevel.add(current.right);\n                    list.add(current.right.val);\n                }\n            }\n            \n            if(list.size() > 0) {\n                result.add(list);\n            }\n\n            queue = currentLevel;\n        }\n        \n        return result;\n    }\n}\n",
    index: 103,
  },
  {
    title: "Clone Graph",
    category: "breadth-first-search",
    id: "CloneGraph_breadth-first-search",
    algorithm:
      "// Clone an undirected graph. Each node in the graph contains a label and a list of its neighbors.\n\n// OJ's undirected graph serialization:\n// Nodes are labeled uniquely.\n\n// We use # as a separator for each node, and , as a separator for node label and each neighbor of the node.\n// As an example, consider the serialized graph {0,1,2#1,2#2,2}.\n\n// The graph has a total of three nodes, and therefore contains three parts as separated by #.\n\n// First node is labeled as 0. Connect node 0 to both nodes 1 and 2.\n// Second node is labeled as 1. Connect node 1 to node 2.\n// Third node is labeled as 2. Connect node 2 to node 2 (itself), thus forming a self-cycle.\n// Visually, the graph looks like the following:\n\n//        1\n//       / \\\n//      /   \\\n//     0 --- 2\n//          / \\\n//          \\_/\n\n/**\n * Definition for undirected graph.\n * class UndirectedGraphNode {\n *     int label;\n *     List<UndirectedGraphNode> neighbors;\n *     UndirectedGraphNode(int x) { label = x; neighbors = new ArrayList<UndirectedGraphNode>(); }\n * };\n */\npublic class CloneGraph {\n    public HashMap<Integer, UndirectedGraphNode> map = new HashMap<Integer, UndirectedGraphNode>();\n    \n    public UndirectedGraphNode cloneGraph(UndirectedGraphNode node) {\n        if(node == null) {\n            return null;\n        }\n        \n        if(map.containsKey(node.label)) {\n            return map.get(node.label);\n        }\n        \n        UndirectedGraphNode newNode = new UndirectedGraphNode(node.label);\n        map.put(newNode.label, newNode);\n        \n        for(UndirectedGraphNode neighbor : node.neighbors) {\n            newNode.neighbors.add(cloneGraph(neighbor));\n        }\n        \n        return newNode;\n    }\n}\n",
    index: 104,
  },
  {
    title: "Pacific Atlantic Water Flow",
    category: "breadth-first-search",
    id: "PacificAtlanticWaterFlow_breadth-first-search",
    algorithm:
      '// Given an m x n matrix of non-negative integers representing the height of each unit cell in a continent, the "Pacific ocean" touches the left and top edges of the matrix and the "Atlantic ocean" touches the right and bottom edges.\n\n// Water can only flow in four directions (up, down, left, or right) from a cell to another one with height equal or lower.\n\n// Find the list of grid coordinates where water can flow to both the Pacific and Atlantic ocean.\n\n// Note:\n    // The order of returned grid coordinates does not matter.\n    // Both m and n are less than 150.\n\n// Example:\n\n// Given the following 5x5 matrix:\n\n//   Pacific ~   ~   ~   ~   ~ \n//        ~  1   2   2   3  (5) *\n//        ~  3   2   3  (4) (4) *\n//        ~  2   4  (5)  3   1  *\n//        ~ (6) (7)  1   4   5  *\n//        ~ (5)  1   1   2   4  *\n//           *   *   *   *   * Atlantic\n\n// Return:\n\n// [[0, 4], [1, 3], [1, 4], [2, 2], [3, 0], [3, 1], [4, 0]] (positions with parentheses in above matrix).\n\npublic class PacificAtlanticWaterFlow {\n    public List<int[]> pacificAtlantic(int[][] matrix) {\n        List<int[]> result = new LinkedList<>();\n        \n        //error checking\n        if(matrix == null || matrix.length == 0 || matrix[0].length == 0) {\n            return result;\n        }\n        \n        int n = matrix.length;\n        int m = matrix[0].length;\n        \n        boolean[][] pacific = new boolean[n][m];\n        boolean[][] atlantic = new boolean[n][m];\n        \n        for(int i = 0; i < n; i++) {\n            dfs(matrix, pacific, Integer.MIN_VALUE, i, 0);\n            dfs(matrix, atlantic, Integer.MIN_VALUE, i, m - 1);\n        }\n        \n        for(int i = 0; i < m; i++) {\n            dfs(matrix, pacific, Integer.MIN_VALUE, 0, i);\n            dfs(matrix, atlantic, Integer.MIN_VALUE, n - 1, i);\n        }\n        \n        for(int i = 0; i < n; i++) {\n            for(int j = 0; j < m; j++) {\n                if(pacific[i][j] && atlantic[i][j]) {\n                    result.add(new int[] {i, j});\n                }\n            }\n        }\n        \n        return result;\n    }\n    \n    public void dfs(int[][] matrix, boolean[][] visited, int height, int x, int y) {\n        int n = matrix.length;\n        int m = matrix[0].length;\n        \n        if(x < 0 || x >= n || y < 0 || y >= m || visited[x][y] || matrix[x][y] < height) {\n            return;\n        }\n        \n        visited[x][y] = true;\n        \n        dfs(matrix, visited, matrix[x][y], x + 1, y);\n        dfs(matrix, visited, matrix[x][y], x - 1, y);\n        dfs(matrix, visited, matrix[x][y], x, y + 1);\n        dfs(matrix, visited, matrix[x][y], x, y - 1);\n    }\n}\n',
    index: 105,
  },
  {
    title: "Remove Invalid Parentheses",
    category: "breadth-first-search",
    id: "RemoveInvalidParentheses_breadth-first-search",
    algorithm:
      '// Remove the minimum number of invalid parentheses in order to make the input string valid. Return all possible results.\n\n// Note: The input string may contain letters other than the parentheses ( and ).\n\n// Examples:\n// "()())()" -> ["()()()", "(())()"]\n// "(a)())()" -> ["(a)()()", "(a())()"]\n// ")(" -> [""]\n\npublic class RemoveInvalidParentheses {\n    public List<String> removeInvalidParentheses(String s) {\n        List<String> result = new ArrayList<>();\n        remove(s, result, 0, 0, new char[]{\'(\', \')\'});\n        return result;\n    }\n\n    public void remove(String s, List<String> result, int last_i, int last_j,  char[] par) {\n        for (int stack = 0, i = last_i; i < s.length(); i++) {\n            if (s.charAt(i) == par[0]) {\n                stack++;\n            }\n\n            if (s.charAt(i) == par[1]) {\n                stack--;\n            }\n\n            if (stack >= 0) {\n                continue;\n            }\n            \n            for (int j = last_j; j <= i; j++) {\n                if (s.charAt(j) == par[1] && (j == last_j || s.charAt(j - 1) != par[1])) {\n                    remove(s.substring(0, j) + s.substring(j + 1, s.length()), result, i, j, par);\n                }\n            }\n\n            return;\n        }\n        \n        String reversed = new StringBuilder(s).reverse().toString();\n        \n        if (par[0] == \'(\')  {\n            // finished left to right\n            remove(reversed, result, 0, 0, new char[]{\')\', \'(\'});\n        } else {\n            // finished right to left\n            result.add(reversed);\n        }\n    }\n}\n',
    index: 106,
  },
  {
    title: "Shortest Distance From All Buildings",
    category: "breadth-first-search",
    id: "ShortestDistanceFromAllBuildings_breadth-first-search",
    algorithm:
      "// You want to build a house on an empty land which reaches all buildings in the shortest amount of distance. You can only move up, down, left and right. You are given a 2D grid of values 0, 1 or 2, where:\n\n// Each 0 marks an empty land which you can pass by freely.\n// Each 1 marks a building which you cannot pass through.\n// Each 2 marks an obstacle which you cannot pass through.\n// For example, given three buildings at (0,0), (0,4), (2,2), and an obstacle at (0,2):\n\n// 1 - 0 - 2 - 0 - 1\n// |   |   |   |   |\n// 0 - 0 - 0 - 0 - 0\n// |   |   |   |   |\n// 0 - 0 - 1 - 0 - 0\n// The point (1,2) is an ideal empty land to build a house, as the total travel distance of 3+3+1=7 is minimal. So return 7.\n\n// Note:\n// There will be at least one building. If it is not possible to build such house according to the above rules, return -1.\n\npublic class Shortest {\n    public int shortestDistance(int[][] grid) {\n        if(grid == null || grid.length == 0 || grid[0].length == 0) {\n            return -1;\n        }\n        \n        final int[] shift = {0, 1, 0, -1, 0};\n        \n        int rows = grid.length;\n        int columns = grid[0].length;\n        \n        int[][] distance = new int[rows][columns];\n        int[][] reach = new int[rows][columns];\n        \n        int numberOfBuildings = 0;\n        \n        for(int i = 0; i < rows; i++) {\n            for(int j = 0; j < columns; j++) {\n                if(grid[i][j] == 1) {\n                    numberOfBuildings++;\n                    Queue<int[]> queue = new LinkedList<int[]>();\n                    queue.offer(new int[] {i, j});\n                    \n                    boolean[][] visited = new boolean[rows][columns];\n                    \n                    int relativeDistance = 1;\n                    \n                    while(!queue.isEmpty()) {\n                        int qSize = queue.size();\n                        \n                        for(int q = 0; q < qSize; q++) {\n                            int[] current = queue.poll();\n                            \n                            for(int k = 0; k < 4; k++) {\n                                int nextRow = current[0] + shift[k];\n                                int nextColumn = current[1] + shift[k + 1];\n                            \n                                if(nextRow >= 0 && nextRow < rows && nextColumn >= 0 && nextColumn < columns && grid[nextRow][nextColumn] == 0 && !visited[nextRow][nextColumn]) {\n                                    distance[nextRow][nextColumn] += relativeDistance;\n                                    reach[nextRow][nextColumn]++;\n                                \n                                    visited[nextRow][nextColumn] = true;\n                                    queue.offer(new int[] {nextRow, nextColumn});\n                                }   \n                            }\n                        }\n                        \n                        relativeDistance++;\n                    }\n                }\n            }\n        }\n    \n        int shortest = Integer.MAX_VALUE;\n    \n        for(int i = 0; i < rows; i++) {\n            for(int j = 0; j < columns; j++) {\n                if(grid[i][j] == 0 && reach[i][j] == numberOfBuildings) {\n                    shortest = Math.min(shortest, distance[i][j]);\n                }\n            }\n        }\n    \n        return shortest == Integer.MAX_VALUE ? -1 : shortest;\n    }\n}\n",
    index: 107,
  },
  {
    title: "Symmetric Tree",
    category: "breadth-first-search",
    id: "SymmetricTree_breadth-first-search",
    algorithm:
      "// Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).\n\n// For example, this binary tree [1,2,2,3,4,4,3] is symmetric:\n\n//     1\n//    / \\\n//   2   2\n//  / \\ / \\\n// 3  4 4  3\n// But the following [1,2,2,null,3,null,3] is not:\n//     1\n//    / \\\n//   2   2\n//    \\   \\\n//    3    3\n\n/**\n * Definition for a binary tree node.\n * public class TreeNode {\n *     int val;\n *     TreeNode left;\n *     TreeNode right;\n *     TreeNode(int x) { val = x; }\n * }\n */\npublic class SymmetricTree {\n    public boolean isSymmetric(TreeNode root) {\n        if(root == null) {\n            return true;\n        }\n        \n        return helper(root.left, root.right);\n    }\n    \n    public boolean helper(TreeNode left, TreeNode right) {\n        if(left == null && right == null) {\n            return true;\n        }\n        \n        if(left == null || right == null || left.val != right.val) {\n            return false;\n        }\n        \n        return helper(left.right, right.left) && helper(left.left, right.right);\n    }\n}\n",
    index: 108,
  },
  {
    title: "Walls And Gates",
    category: "breadth-first-search",
    id: "WallsAndGates_breadth-first-search",
    algorithm:
      "// You are given a m x n 2D grid initialized with these three possible values.\n\n// -1 - A wall or an obstacle.\n// 0 - A gate.\n// INF - Infinity means an empty room. We use the value 231 - 1 = 2147483647 to represent INF as you may assume that the distance to a gate is less than 2147483647.\n// Fill each empty room with the distance to its nearest gate. If it is impossible to reach a gate, it should be filled with INF.\n\n// For example, given the 2D grid:\n// INF  -1  0  INF\n// INF INF INF  -1\n// INF  -1 INF  -1\n//   0  -1 INF INF\n// After running your function, the 2D grid should be:\n//   3  -1   0   1\n//   2   2   1  -1\n//   1  -1   2  -1\n//   0  -1   3   4\n\npublic class Solution {\n    public void wallsAndGates(int[][] rooms) {\n        //iterate through the matrix calling dfs on all indices that contain a zero\n        for(int i = 0; i < rooms.length; i++) {\n            for(int j = 0; j < rooms[0].length; j++) {\n                if(rooms[i][j] == 0) {\n                    dfs(rooms, i, j, 0);\n                }\n            }\n        }\n    }\n    \n    void dfs(int[][] rooms, int i, int j, int distance) {\n        //if you have gone out of the bounds of the array or you have run into a wall/obstacle, return\n        // room[i][j] < distance also ensure that we do not overwrite any previously determined distance if it is shorter than our current distance\n        if(i < 0 || i >= rooms.length || j < 0 || j >= rooms[0].length || rooms[i][j] < distance) {\n            return;\n        }\n        \n        //set current index's distance to distance\n        rooms[i][j] = distance;\n        \n        //recurse on all adjacent neighbors of rooms[i][j]\n        dfs(rooms, i + 1, j, distance + 1);\n        dfs(rooms, i - 1, j, distance + 1);\n        dfs(rooms, i, j + 1, distance + 1);\n        dfs(rooms, i, j - 1, distance + 1);\n    }\n}\n",
    index: 109,
  },
  {
    title: "Depth First Search",
    category: "leetcode",
    id: "depth-first-search",
    index: 110,
  },
  {
    title: "Balanced Binary Tree",
    category: "depth-first-search",
    id: "BalancedBinaryTree_depth-first-search",
    algorithm:
      "// Given a binary tree, determine if it is height-balanced.\n\n// For this problem, a height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees of every node never differ by more than 1.\n\n/**\n * Definition for a binary tree node.\n * public class TreeNode {\n *     int val;\n *     TreeNode left;\n *     TreeNode right;\n *     TreeNode(int x) { val = x; }\n * }\n */\npublic class BalancedBinaryTree {\n    boolean balanced = true;\n    \n    public boolean isBalanced(TreeNode root) {\n        height(root);\n        return balanced;\n    }\n    \n    private int height(TreeNode root) {\n        if(root == null) {\n            return 0;\n        }\n        \n        int leftHeight = height(root.left);\n        int rightHeight = height(root.right);\n        \n        if(Math.abs(leftHeight - rightHeight) > 1) {\n            balanced = false;\n        }\n        \n        return 1 + Math.max(leftHeight, rightHeight);\n    }\n}\n",
    index: 111,
  },
  {
    title: "Battleships In A Board",
    category: "depth-first-search",
    id: "BattleshipsInABoard_depth-first-search",
    algorithm:
      "// Given an 2D board, count how many battleships are in it. The battleships are represented with 'X's, empty slots are represented with '.'s. You may assume the following rules:\n\n// You receive a valid board, made of only battleships or empty slots.\n// Battleships can only be placed horizontally or vertically. In other words, they can only be made of the shape 1xN (1 row, N columns) or Nx1 (N rows, 1 column), where N can be of any size.\n// At least one horizontal or vertical cell separates between two battleships - there are no adjacent battleships.\n\n// Example:\n// X..X\n// ...X\n// ...X\n// In the above board there are 2 battleships.\n\n// Invalid Example:\n// ...X\n// XXXX\n// ...X\n// This is an invalid board that you will not receive - as battleships will always have a cell separating between them.\n\n// Follow up:\n// Could you do it in one-pass, using only O(1) extra memory and without modifying the value of the board?\n\npublic class BattleshipsInABoard {\n    public int countBattleships(char[][] board) {\n        int ships = 0;\n        \n        for(int i = 0; i < board.length; i++) {\n            for(int j = 0; j < board[0].length; j++) {\n                if(board[i][j] == 'X') {\n                    ships++;\n                    sink(board, i, j, 1);\n                }\n            }\n        }\n        \n        return ships;\n    }\n    \n    public void sink(char[][] board, int i, int j, int numberOfShips) {\n        if(i < 0 || i >= board.length || j < 0 || j >= board[0].length || board[i][j] == '.') {\n            return;\n        }\n        \n        board[i][j] = '.';\n        sink(board, i + 1, j, numberOfShips + 1);\n        sink(board, i, j + 1, numberOfShips + 1);\n    }\n}\n",
    index: 112,
  },
  {
    title: "Convert Sorted Array To Binary Search Tree",
    category: "depth-first-search",
    id: "ConvertSortedArrayToBinarySearchTree_depth-first-search",
    algorithm:
      "// Given an array where elements are sorted in ascending order, convert it to a height balanced BST.\n\n/**\n * Definition for a binary tree node.\n * public class TreeNode {\n *     int val;\n *     TreeNode left;\n *     TreeNode right;\n *     TreeNode(int x) { val = x; }\n * }\n */\npublic class ConvertSortedArrayToBinarySearchTree {\n    public TreeNode sortedArrayToBST(int[] nums) {\n        if(nums.length == 0) {\n            return null;\n        }\n        \n        TreeNode root = helper(nums, 0, nums.length - 1);\n        \n        return root;\n    }\n    \n    private TreeNode helper(int[] nums, int start, int end) {\n        if(start <= end) {\n            int mid = (start + end) / 2;\n            \n            TreeNode current = new TreeNode(nums[mid]);\n            \n            current.left = helper(nums, start, mid - 1);\n            current.right = helper(nums, mid + 1, end);\n            \n            return current;\n        }\n        \n        return null;\n    }\n}\n",
    index: 113,
  },
  {
    title: "Maximum Depth Of A Binary Tree",
    category: "depth-first-search",
    id: "MaximumDepthOfABinaryTree_depth-first-search",
    algorithm:
      "// Given a binary tree, find its maximum depth.\n\n// The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.\n\n/**\n * Definition for a binary tree node.\n * public class TreeNode {\n *     int val;\n *     TreeNode left;\n *     TreeNode right;\n *     TreeNode(int x) { val = x; }\n * }\n */\npublic class MaximumDepthOfABinaryTree {\n    public int maxDepth(TreeNode root) {\n        if(root == null) {\n            return 0;\n        }\n        \n        return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));\n    }\n}\n",
    index: 114,
  },
  {
    title: "Number Of Islands",
    category: "depth-first-search",
    id: "NumberOfIslands_depth-first-search",
    algorithm:
      "// Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.\n\n// Example 1:\n\n// 11110\n// 11010\n// 11000\n// 00000\n// Answer: 1\n\n// Example 2:\n\n// 11000\n// 11000\n// 00100\n// 00011\n// Answer: 3\n\npublic class NumberOfIslands {\n    char[][] gridCopy;\n    \n    public int numIslands(char[][] grid) {\n        //set grid copy to the current grid\n        gridCopy = grid;\n        \n        //initialize number of islands to zero\n        int numberOfIslands = 0;\n        \n        //iterate through every index of the grid\n        for(int i = 0; i < grid.length; i++) {\n            for(int j = 0; j < grid[0].length; j++) {\n                //attempt to \"sink\" the current index of the grid\n                numberOfIslands += sink(gridCopy, i, j);\n            }\n        }\n        \n        //return the total number of islands\n        return numberOfIslands;\n    }\n    \n    int sink(char[][] grid, int i, int j) {\n        //check the bounds of i and j and if the current index is an island or not (1 or 0)\n        if(i < 0 || i >= grid.length || j < 0 || j >= grid[0].length || grid[i][j] == '0') {\n            return 0;\n        }\n        \n        //set current index to 0\n        grid[i][j] = '0';\n        \n        // sink all neighbors of current index\n        sink(grid, i + 1, j);\n        sink(grid, i - 1, j);\n        sink(grid, i, j + 1);\n        sink(grid, i, j - 1);\n        \n        //increment number of islands\n        return 1;\n    }\n}\n",
    index: 115,
  },
  {
    title: "Populating Next Right Pointers In Each Node",
    category: "depth-first-search",
    id: "PopulatingNextRightPointersInEachNode_depth-first-search",
    algorithm:
      "// Given a binary tree\n\n//     struct TreeLinkNode {\n//       TreeLinkNode *left;\n//       TreeLinkNode *right;\n//       TreeLinkNode *next;\n//     }\n// Populate each next pointer to point to its next right node. If there is no next right node, the next pointer should be set to NULL.\n\n// Initially, all next pointers are set to NULL.\n\n// Note:\n\n// You may only use constant extra space.\n// You may assume that it is a perfect binary tree (ie, all leaves are at the same level, and every parent has two children).\n// For example,\n// Given the following perfect binary tree,\n//          1\n//        /  \\\n//       2    3\n//      / \\  / \\\n//     4  5  6  7\n// After calling your function, the tree should look like:\n//          1 -> NULL\n//        /  \\\n//       2 -> 3 -> NULL\n//      / \\  / \\\n//     4->5->6->7 -> NULL\n\n/**\n * Definition for binary tree with next pointer.\n * public class TreeLinkNode {\n *     int val;\n *     TreeLinkNode left, right, next;\n *     TreeLinkNode(int x) { val = x; }\n * }\n */\npublic class PopulatingNextRightPointersInEachNode {\n    public void connect(TreeLinkNode root) {\n        if(root == null) {\n            return;\n        }\n        \n        Queue<TreeLinkNode> queue = new LinkedList<TreeLinkNode>();\n        \n        queue.add(root);\n        \n        while(!queue.isEmpty()) {\n            Queue<TreeLinkNode> currentLevel = new LinkedList<TreeLinkNode>();\n            \n            TreeLinkNode temp = null;\n            \n            while(!queue.isEmpty()) {\n                TreeLinkNode current = queue.remove();\n                current.next = temp;\n                temp = current;\n                \n                \n                if(current.right != null) {\n                    currentLevel.add(current.right);\n                }\n                \n                if(current.left!= null) {\n                    currentLevel.add(current.left);\n                }\n            }\n            \n            queue = currentLevel;\n        }\n    }\n}\n",
    index: 116,
  },
  {
    title: "Same Tree",
    category: "depth-first-search",
    id: "SameTree_depth-first-search",
    algorithm:
      "// Given two binary trees, write a function to check if they are equal or not.\n\n// Two binary trees are considered equal if they are structurally identical and the nodes have the same value.\n\n/**\n * Definition for a binary tree node.\n * public class TreeNode {\n *     int val;\n *     TreeNode left;\n *     TreeNode right;\n *     TreeNode(int x) { val = x; }\n * }\n */\npublic class SameTree {\n    public boolean isSameTree(TreeNode p, TreeNode q) {\n        if(p == null && q == null) {\n            return true;\n        }\n        \n        if(p == null && q != null || q == null && p != null) {\n            return false;\n        }\n        \n        if(p.val != q.val) {\n            return false;\n        }\n        \n        return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);\n    }\n}\n",
    index: 117,
  },
  { title: "Design", category: "leetcode", id: "design", index: 118 },
  {
    title: "Insert Delete Get Random O1",
    category: "design",
    id: "InsertDeleteGetRandomO1_design",
    algorithm:
      "//Design a data structure that supports all following operations in average O(1) time.\n\n//insert(val): Inserts an item val to the set if not already present.\n//remove(val): Removes an item val from the set if present.\n//getRandom: Returns a random element from current set of elements. Each element must have the same probability of being returned.\n\n//Example:\n// Init an empty set.\n//RandomizedSet randomSet = new RandomizedSet();\n\n// Inserts 1 to the set. Returns true as 1 was inserted successfully.\n//randomSet.insert(1);\n\n// Returns false as 2 does not exist in the set.\n//randomSet.remove(2);\n\n// Inserts 2 to the set, returns true. Set now contains [1,2].\n//randomSet.insert(2);\n\n// getRandom should return either 1 or 2 randomly.\n//randomSet.getRandom();\n\n// Removes 1 from the set, returns true. Set now contains [2].\n//randomSet.remove(1);\n\n// 2 was already in the set, so return false.\n//randomSet.insert(2);\n\n// Since 2 is the only number in the set, getRandom always return 2.\n//randomSet.getRandom();\n\nclass RandomizedSet {\n    HashMap<Integer, Integer> map;\n    ArrayList<Integer> values;\n\n    /** Initialize your data structure here. */\n    public RandomizedSet() {\n        map = new HashMap<Integer, Integer>();\n        values = new ArrayList<Integer>();\n    }\n    \n    /** Inserts a value to the set. Returns true if the set did not already contain the specified element. */\n    public boolean insert(int val) {\n        if(!map.containsKey(val)) {\n            map.put(val, val);\n            values.add(val);\n            return true;\n        }\n        else {\n            return false;\n        }\n    }\n    \n    /** Removes a value from the set. Returns true if the set contained the specified element. */\n    public boolean remove(int val) {\n        if(map.containsKey(val)) {\n            map.remove(val);\n            values.remove(values.indexOf(val));\n            return true;\n        }\n        return false;\n    }\n    \n    /** Get a random element from the set. */\n    public int getRandom() {\n        int random = (int)(Math.random() * values.size());\n        int valueToReturn = values.get(random);\n        return map.get(valueToReturn);\n    }\n}\n\n/**\n * Your RandomizedSet object will be instantiated and called as such:\n * RandomizedSet obj = new RandomizedSet();\n * boolean param_1 = obj.insert(val);\n * boolean param_2 = obj.remove(val);\n * int param_3 = obj.getRandom();\n */\n\n",
    index: 119,
  },
  {
    title: "Min Stack",
    category: "design",
    id: "MinStack_design",
    algorithm:
      "//Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.\n//push(x) -- Push element x onto stack.\n//pop() -- Removes the element on top of the stack.\n//top() -- Get the top element.\n//getMin() -- Retrieve the minimum element in the stack.\n\n/**\n * Your MinStack object will be instantiated and called as such:\n * MinStack obj = new MinStack();\n * obj.push(x);\n * obj.pop();\n * int param_3 = obj.top();\n * int param_4 = obj.getMin();\n */\nclass MinStack {\n    class Node {\n        int data;\n        int min;\n        Node next;\n        \n        public Node(int data, int min) {\n            this.data = data;\n            this.min = min;\n            this.next = null;\n        }\n    }\n    Node head;\n    \n    /** initialize your data structure here. */\n    public MinStack() {\n        \n    }\n    \n    public void push(int x) {\n        if(head == null) {\n            head = new Node(x, x);\n        } else {\n            Node newNode = new Node(x, Math.min(x, head.min));\n            newNode.next = head;\n            head = newNode;\n        }\n    }\n    \n    public void pop() {\n        head = head.next;\n    }\n    \n    public int top() {\n        return head.data;\n    }\n    \n    public int getMin() {\n        return head.min;\n    }\n}\n",
    index: 120,
  },
  {
    title: "Zig Zag Iterator",
    category: "design",
    id: "ZigZagIterator_design",
    algorithm:
      "// Given two 1d vectors, implement an iterator to return their elements alternately.\n\n// For example, given two 1d vectors:\n\n// v1 = [1, 2]\n// v2 = [3, 4, 5, 6]\n// By calling next repeatedly until hasNext returns false, the order of elements returned by next should be: [1, 3, 2, 4, 5, 6].\n\n// Follow up: What if you are given k 1d vectors? How well can your code be extended to such cases?\n\n/**\n * Your ZigzagIterator object will be instantiated and called as such: \n * ZigzagIterator i = new ZigzagIterator(v1, v2);\n * while (i.hasNext()) v[f()] = i.next();\n */\n\npublic class ZigZagIterator {\n    private Iterator<Integer> i;\n    private Iterator<Integer> j;\n    private Iterator<Integer> temp;\n\n    public ZigzagIterator(List<Integer> v1, List<Integer> v2) {\n        i = v1.iterator();\n        j = v2.iterator();\n    }\n\n    public int next() {\n        if(i.hasNext()) {\n            temp = i;\n            i = j;\n            j = temp;\n        }\n        \n        return j.next();\n    }\n\n    public boolean hasNext() {\n        return i.hasNext() || j.hasNext();\n    }\n}\n",
    index: 121,
  },
  {
    title: "Divide And Conquer",
    category: "leetcode",
    id: "divide-and-conquer",
    index: 122,
  },
  {
    title: "Expression Add Operators",
    category: "divide-and-conquer",
    id: "ExpressionAddOperators_divide-and-conquer",
    algorithm:
      '// Given a string that contains only digits 0-9 and a target value, return all possibilities to add binary operators (not unary) +, -, or * between the digits so they evaluate to the target value.\n\n// Examples: \n// "123", 6 -> ["1+2+3", "1*2*3"] \n// "232", 8 -> ["2*3+2", "2+3*2"]\n// "105", 5 -> ["1*0+5","10-5"]\n// "00", 0 -> ["0+0", "0-0", "0*0"]\n// "3456237490", 9191 -> []\n\npublic class ExpressionAddOperators {\n    public List<String> addOperators(String num, int target) {\n        List<String> result = new ArrayList<String>();\n\n        if(num == null || num.length() == 0) {\n            return result;\n        }\n\n        helper(result, "", num, target, 0, 0, 0);\n        return result;\n    }\n    \n    public void helper(List<String> result, String path, String num, int target, int pos, long eval, long multed) {\n        if(pos == num.length()) {\n            if(eval == target) {\n                result.add(path);\n            }\n            \n            return;\n        }\n        \n        for(int i = pos; i < num.length(); i++) {\n            if(i != pos && num.charAt(pos) == \'0\') {\n                break;\n            }\n\n            long cur = Long.parseLong(num.substring(pos, i + 1));\n\n            if(pos == 0) {\n                helper(result, path + cur, num, target, i + 1, cur, cur);\n            } else {\n                helper(result, path + "+" + cur, num, target, i + 1, eval + cur, cur);\n                helper(result, path + "-" + cur, num, target, i + 1, eval - cur, -cur);\n                helper(result, path + "*" + cur, num, target, i + 1, eval - multed + multed * cur, multed * cur);\n            }\n        }\n    }\n}\n',
    index: 123,
  },
  {
    title: "Kth Largest Element In An Array",
    category: "divide-and-conquer",
    id: "KthLargestElementInAnArray_divide-and-conquer",
    algorithm:
      "// Find the kth largest element in an unsorted array. Note that it is the kth largest element in the sorted order, not the kth distinct element.\n\n// For example,\n// Given [3,2,1,5,6,4] and k = 2, return 5.\n\n// Note: \n// You may assume k is always valid, 1 ≤ k ≤ array's length.\n\npublic class KthLargestElementInAnArray {\n    public int findKthLargest(int[] nums, int k) {\n        int length = nums.length;\n        Arrays.sort(nums);\n\n        return nums[length - k];\n    }\n}\n",
    index: 124,
  },
  {
    title: "Dynamic Programming",
    category: "leetcode",
    id: "dynamic-programming",
    index: 125,
  },
  {
    title: "Bomb Enemy",
    category: "dynamic-programming",
    id: "BombEnemy_dynamic-programming",
    algorithm:
      "//  Given a 2D grid, each cell is either a wall 'W', an enemy 'E' or empty '0' (the number zero), return the maximum enemies you can kill using one bomb.\n// The bomb kills all the enemies in the same row and column from the planted point until it hits the wall since the wall is too strong to be destroyed.\n// Note that you can only put the bomb at an empty cell.\n\n// Example:\n// For the given grid\n\n// 0 E 0 0\n// E 0 W E\n// 0 E 0 0\n\n// return 3. (Placing a bomb at (1,1) kills 3 enemies)\n\n public class BombEnemy {\n     public int maxKilledEnemies(char[][] grid) {\n        if(grid == null || grid.length == 0 ||  grid[0].length == 0) {\n            return 0;\n        }\n\n        int max = 0;\n        int row = 0;\n        int[] col = new int[grid[0].length];\n\n        for(int i = 0; i<grid.length; i++) {\n            for(int j = 0; j<grid[0].length;j++) {\n                if(grid[i][j] == 'W') {\n                    continue;\n                }\n\n                if(j == 0 || grid[i][j-1] == 'W') {\n                     row = killedEnemiesRow(grid, i, j);\n                }\n\n                if(i == 0 || grid[i-1][j] == 'W') {\n                     col[j] = killedEnemiesCol(grid,i,j);\n                }\n\n                if(grid[i][j] == '0') {\n                    max = (row + col[j] > max) ? row + col[j] : max;\n                }\n            }\n        }\n        \n        return max;\n    }\n\n    //calculate killed enemies for row i from column j\n    private int killedEnemiesRow(char[][] grid, int i, int j) {\n        int num = 0;\n\n        while(j <= grid[0].length-1 && grid[i][j] != 'W') {\n            if(grid[i][j] == 'E') {\n                num++;\n            }\n\n            j++;\n        }\n\n        return num;\n    }\n\n    //calculate killed enemies for  column j from row i\n    private int killedEnemiesCol(char[][] grid, int i, int j) {\n        int num = 0;\n\n        while(i <= grid.length -1 && grid[i][j] != 'W'){\n            if(grid[i][j] == 'E') {\n                num++;\n            }\n\n            i++;\n        }\n\n        return num;\n    }\n}\n",
    index: 126,
  },
  {
    title: "Climbing Stairs",
    category: "dynamic-programming",
    id: "ClimbingStairs_dynamic-programming",
    algorithm:
      "// You are climbing a stair case. It takes n steps to reach to the top.\n\n// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?\n\n// Note: Given n will be a positive integer.\n\npublic class ClimbingStairs {\n    public int climbStairs(int n) {\n        int[] dp = new int[n + 1];\n        \n        dp[0] = 1;\n        dp[1] = 1;\n        \n        for(int i = 2; i < dp.length; i++) {\n            dp[i] = dp[i - 1] + dp[i - 2];\n        }\n        \n        return dp[dp.length - 1];\n    } \n}\n",
    index: 127,
  },
  {
    title: "Coin Change",
    category: "dynamic-programming",
    id: "CoinChange_dynamic-programming",
    algorithm:
      "//You are given coins of different denominations and a total amount of money amount. Write a function to compute the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.\n\n//Example 1:\n//coins = [1, 2, 5], amount = 11\n//return 3 (11 = 5 + 5 + 1)\n\n//Example 2:\n//coins = [2], amount = 3\n//return -1.\n\n//Note:\n//You may assume that you have an infinite number of each kind of coin.\n\nclass CoinChange {\n    public int coinChange(int[] coins, int amount) {\n        if(amount < 1) {\n            return 0;\n        }\n        \n        return coinChangeRecursive(coins, amount, new int[amount]);\n    }\n    \n    public int coinChangeRecursive(int[] coins, int amount, int[] dp) {\n        if(amount < 0) {\n            return -1;\n        }\n        if(amount == 0) {\n            return 0;\n        }\n        if(dp[amount - 1] != 0) {\n            return dp[amount - 1];\n        }\n        \n        int min = Integer.MAX_VALUE;\n        for(int coin: coins) {\n            int result = coinChangeRecursive(coins, amount - coin, dp);\n            if(result >= 0 && result < min) {\n                min = 1 + result;\n            }\n        }\n        \n        dp[amount - 1] = min == Integer.MAX_VALUE ? -1 : min;\n        return dp[amount - 1];\n    }\n}\n",
    index: 128,
  },
  {
    title: "Combination Sum I V",
    category: "dynamic-programming",
    id: "CombinationSumIV_dynamic-programming",
    algorithm:
      "// Given an integer array with all positive numbers and no duplicates, find the number of possible combinations that add up to a positive integer target.\n\n// Example:\n\n// nums = [1, 2, 3]\n// target = 4\n\n// The possible combination ways are:\n// (1, 1, 1, 1)\n// (1, 1, 2)\n// (1, 2, 1)\n// (1, 3)\n// (2, 1, 1)\n// (2, 2)\n// (3, 1)\n\n// Note that different sequences are counted as different combinations.\n\n// Therefore the output is 7.\n\n// Follow up:\n    // What if negative numbers are allowed in the given array?\n    // How does it change the problem?\n    // What limitation we need to add to the question to allow negative numbers?\n\npublic class CombinationSumIV {\n    public int combinationSum4(int[] nums, int target) {\n        int[] dp = new int[target + 1];\n        dp[0] = 1;\n        \n        for(int i = 1; i < dp.length; i++) {\n            for(int j = 0; j < nums.length; j++) {\n                if(i - nums[j] >= 0) {\n                    dp[i] += dp[i - nums[j]];\n                }\n            }\n        }\n        \n        return dp[target];\n    }\n}\n",
    index: 129,
  },
  {
    title: "Counting Bits",
    category: "dynamic-programming",
    id: "CountingBits_dynamic-programming",
    algorithm:
      "// Given a non negative integer number num. For every numbers i in the range 0 ≤ i ≤ num calculate the number of 1's in their binary representation and return them as an array.\n\n// Example:\n// For num = 5 you should return [0,1,1,2,1,2].\n\n// Follow up:\n\t// It is very easy to come up with a solution with run time O(n*sizeof(integer)). But can you do it in linear time O(n) /possibly in a single pass?\n\t// Space complexity should be O(n).\n\t// Can you do it like a boss? Do it without using any builtin function like __builtin_popcount in c++ or in any other language.\n\npublic class CountingBits {\n    public int[] countBits(int num) {\n        int[] bits = new int[num + 1];\n        \n        bits[0] = 0;\n        \n        for(int i = 1; i <= num; i++) {\n            bits[i] = bits[i >> 1] + (i & 1);\n        }\n        \n        return bits;\n    }\n}\n",
    index: 130,
  },
  {
    title: "Edit Distance",
    category: "dynamic-programming",
    id: "EditDistance_dynamic-programming",
    algorithm:
      "// Given two words word1 and word2, find the minimum number of steps required to convert word1 to word2. (each operation is counted as 1 step.)\n\n// You have the following 3 operations permitted on a word:\n\n// a) Insert a character\n// b) Delete a character\n// c) Replace a character\n\npublic class EditDistance {\n    public int minDistance(String word1, String word2) {\n        int m = word1.length();\n        int n = word2.length();\n        \n        int[][] dp = new int[m + 1][n + 1];\n\n        for(int i = 0; i <= m; i++) {\n            dp[i][0] = i;\n        }\n        \n        for(int i = 0; i <= n; i++) {\n            dp[0][i] = i;\n        }\n        \n        for(int i = 0; i < m; i++) {\n            for(int j = 0; j < n; j++) {\n                if(word1.charAt(i) == word2.charAt(j)) {\n                    dp[i + 1][j + 1] = dp[i][j];\n                } else {\n                    int a = dp[i][j];\n                    int b = dp[i][j + 1];\n                    int c = dp[i + 1][j];\n                    \n                    dp[i + 1][j + 1] = Math.min(a, Math.min(b, c));\n                    dp[i + 1][j + 1]++;\n                }\n            }\n        }\n        \n        return dp[m][n];\n    }\n}\n",
    index: 131,
  },
  {
    title: "House Robber",
    category: "dynamic-programming",
    id: "HouseRobber_dynamic-programming",
    algorithm:
      "// You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security system connected and it will automatically contact the police if two adjacent houses were broken into on the same night.\n\n// Given a list of non-negative integers representing the amount of money of each house, determine the maximum amount of money you can rob tonight without alerting the police.\n\npublic class Solution {\n    public int rob(int[] nums) {\n        if(nums.length == 0) {\n            return 0;\n        }\n\n        if(nums.length == 1) {\n            return nums[0];\n        }\n        \n        int[] dp = new int[nums.length];\n        \n        dp[0] = nums[0];\n        dp[1] = nums[0] > nums[1] ? nums[0] : nums[1];\n\n        for(int i = 2; i < nums.length; i++) {\n            dp[i] = Math.max(dp[i - 2] + nums[i], dp[i - 1]);\n        }\n        \n        return dp[dp.length - 1];\n    }\n}\n",
    index: 132,
  },
  {
    title: "House Robber I I",
    category: "dynamic-programming",
    id: "HouseRobberII_dynamic-programming",
    algorithm:
      "//Note: This is an extension of House Robber. (security system is tripped if two ajacent houses are robbed)\n//After robbing those houses on that street, the thief has found himself a new place for his thievery so that \n//he will not get too much attention. This time, all houses at this place are arranged in a circle. That means \n//the first house is the neighbor of the last one. Meanwhile, the security system for these houses remain the \n//same as for those in the previous street.\n//Given a list of non-negative integers representing the amount of money of each house, determine the maximum \n//amount of money you can rob tonight without alerting the police.\n\nclass HouseRobberII {\n    public int rob(int[] nums) {\n        if (nums.length == 0) {\n            return 0;\n        }\n        if (nums.length < 2) {\n            return nums[0];\n        }\n        \n        int[] first = new int[nums.length + 1];\n        int[] second = new int[nums.length + 1];\n        \n        first[0]  = 0;\n        first[1]  = nums[0];\n        second[0] = 0;\n        second[1] = 0;\n        \n        for (int i = 2; i <= nums.length; i++) {\n            first[i] = Math.max(first[i - 1], first[i - 2] + nums[i - 1]);\n            second[i] = Math.max(second[i - 1], second[i - 2] + nums[i - 1]);\n        }\n        \n        return Math.max(first[nums.length - 1], second[nums.length]);\n    }\n}\n",
    index: 133,
  },
  {
    title: "Longest Increasing Subsequence",
    category: "dynamic-programming",
    id: "LongestIncreasingSubsequence_dynamic-programming",
    algorithm:
      "//Given an unsorted array of integers, find the length of longest increasing subsequence.\n\n//For example,\n//Given [10, 9, 2, 5, 3, 7, 101, 18],\n//The longest increasing subsequence is [2, 3, 7, 101], therefore the length is 4. Note that there may be more than one LIS combination, it is only necessary for you to return the length.\n\n//Your algorithm should run in O(n2) complexity.\n\n//Follow up: Could you improve it to O(n log n) time complexity?\n\nclass LongestIncreasingSubsequence {\n    public int lengthOfLIS(int[] nums) {\n        if(nums == null || nums.length < 1) {\n            return 0;\n        }\n\n        int[] dp = new int[nums.length];\n        dp[0] = 1;\n        \n        int max = 1;\n        for(int i = 1; i < dp.length; i++) {\n            int currentMax = 0;\n            for(int j = 0; j < i; j++) {\n                if(nums[i] > nums[j]) {\n                    currentMax = Math.max(currentMax, dp[j]);\n                }\n            }\n            dp[i] = 1 + currentMax;\n            max = Math.max(max, dp[i]);\n        }\n\n        return max;\n    }\n}\n",
    index: 134,
  },
  {
    title: "Min Cost Climbing Stairs",
    category: "dynamic-programming",
    id: "MinCostClimbingStairs_dynamic-programming",
    algorithm:
      "//On a staircase, the i-th step has some non-negative cost cost[i] assigned (0 indexed).\n//\n//Once you pay the cost, you can either climb one or two steps. You need to find minimum cost to reach the top of the floor, and you can either start from the step with index 0, or the step with index 1.\n//\n//Example 1:\n//Input: cost = [10, 15, 20]\n//Output: 15\n//Explanation: Cheapest is start on cost[1], pay that cost and go to the top.\n//Example 2:\n//Input: cost = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1]\n//Output: 6\n//Explanation: Cheapest is start on cost[0], and only step on 1s, skipping cost[3].\n//Note:\n//cost will have a length in the range [2, 1000].\n//Every cost[i] will be an integer in the range [0, 999].\n\nclass MinCostClimbingStairs {\n    public int minCostClimbingStairs(int[] cost) {\n        if(cost == null || cost.length == 0) {\n            return 0;\n        }\n        if(cost.length == 1) {\n            return cost[0];\n        }\n        if(cost.length == 2) {\n            return Math.min(cost[0], cost[1]);\n        }\n        \n        int[] dp = new int[cost.length];\n        dp[0] = cost[0];\n        dp[1] = cost[1];\n        for(int i = 2; i < cost.length; i++) {\n            dp[i] = Math.min(dp[i - 1] + cost[i], dp[i - 2] + cost[i]);\n        }\n        \n        return Math.min(dp[cost.length - 1], dp[cost.length -2]);\n    }\n}\n\n",
    index: 135,
  },
  {
    title: "Minimum Path Sum",
    category: "dynamic-programming",
    id: "MinimumPathSum_dynamic-programming",
    algorithm:
      "//Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right \n//which minimizes the sum of all numbers along its path.\n//Note: You can only move either down or right at any point in time.\n//Example 1:\n//[[1,3,1],\n //[1,5,1],\n //[4,2,1]]\n//Given the above grid map, return 7. Because the path 1→3→1→1→1 minimizes the sum.\n\nclass MinimumPathSum {\n    public int minPathSum(int[][] grid) {\n        for(int i = 1; i < grid.length; i++) {\n            grid[i][0] += grid[i - 1][0];\n        }\n        for(int i = 1; i < grid[0].length; i++) {\n            grid[0][i] += grid[0][i - 1];\n        }\n        \n        for(int i = 1; i < grid.length; i++) {\n            for(int j = 1; j < grid[0].length; j++) {\n                grid[i][j] += Math.min(grid[i - 1][j], grid[i][j - 1]);\n            }\n        }\n        \n        return grid[grid.length - 1][grid[0].length - 1];\n    }\n}\n\n",
    index: 136,
  },
  {
    title: "Paint Fence",
    category: "dynamic-programming",
    id: "PaintFence_dynamic-programming",
    algorithm:
      "// There is a fence with n posts, each post can be painted with one of the k colors.\n\n// You have to paint all the posts such that no more than two adjacent fence posts have the same color.\n\n// Return the total number of ways you can paint the fence.\n\n// Note:\n// n and k are non-negative integers.\n\npublic class PaintFence {\n    public int numWays(int n, int k) {\n        if(n <= 0) {\n            return 0;\n        }\n        \n        int sameColorCounts = 0;\n        int differentColorCounts = k;\n        \n        for(int i = 2; i <= n; i++) {\n            int temp = differentColorCounts;\n            differentColorCounts = (sameColorCounts + differentColorCounts) * (k - 1);\n            sameColorCounts = temp;\n        }\n        \n        return sameColorCounts + differentColorCounts;\n    }\n}\n",
    index: 137,
  },
  {
    title: "Paint House",
    category: "dynamic-programming",
    id: "PaintHouse_dynamic-programming",
    algorithm:
      "//There are a row of n houses, each house can be painted with one of the three colors: red, blue or green. \n//The cost of painting each house with a certain color is different. You have to paint all the houses such \n//that no two adjacent houses have the same color.\n\n//The cost of painting each house with a certain color is represented by a n x 3 cost matrix. For example, \n//costs[0][0] is the cost of painting house 0 with color red; costs[1][2] is the cost of painting house 1 \n//with color green, and so on... Find the minimum cost to paint all houses.\n\n//Note:\n//All costs are positive integers.\n\nclass PaintHouse {\n    public int minCost(int[][] costs) {\n        if(costs == null || costs.length == 0) {\n            return 0;\n        }\n        \n        for(int i = 1; i < costs.length; i++) {\n            costs[i][0] += Math.min(costs[i - 1][1], costs[i - 1][2]);\n            costs[i][1] += Math.min(costs[i - 1][0], costs[i - 1][2]);\n            costs[i][2] += Math.min(costs[i - 1][0], costs[i - 1][1]);\n        }\n        \n        return Math.min(Math.min(costs[costs.length - 1][0], costs[costs.length - 1][1]), costs[costs.length - 1][2]);\n    }\n}\n\n",
    index: 138,
  },
  {
    title: "Paint House I I",
    category: "dynamic-programming",
    id: "PaintHouseII_dynamic-programming",
    algorithm:
      "    // There are a row of n houses, each house can be painted with one of the k colors. The cost of painting each house with a certain color is different. You have to paint all the houses such that no two adjacent houses have the same color.\n\n// The cost of painting each house with a certain color is represented by a n x k cost matrix. For example, costs[0][0] is the cost of painting house 0 with color 0; costs[1][2] is the cost of painting house 1 with color 2, and so on... Find the minimum cost to paint all houses.\n\n// Note:\n// All costs are positive integers.\n\n// Follow up:\n// Could you solve it in O(nk) runtime?\n\npublic class PaintHouseII {\n    public int minCostII(int[][] costs) {\n        if(costs == null|| costs.length == 0) {\n            return 0;\n        }\n        \n        int m = costs.length;\n        int n = costs[0].length;\n        \n        int min1 = -1;\n        int min2 = -1;\n        \n        for(int i = 0; i < m; i++) {\n            int last1 = min1;\n            int last2 = min2;\n\n            min1 = -1;\n            min2 = -1;\n            \n            for(int j = 0; j < n; j++) {\n                if(j != last1) {\n                    costs[i][j] += last1 < 0 ? 0 : costs[i - 1][last1];\n                } else {\n                    costs[i][j] += last2 < 0 ? 0 : costs[i - 1][last2];\n                }\n\n                if(min1 < 0 || costs[i][j] < costs[i][min1]) {\n                    min2 = min1;\n                    min1 = j;\n                } else if(min2 < 0 || costs[i][j] < costs[i][min2]) {\n                    min2 = j;\n                }\n            }\n        }\n        \n        return costs[m - 1][min1];       \n    }\n}\n",
    index: 139,
  },
  {
    title: "Palindromic Substrings",
    category: "dynamic-programming",
    id: "PalindromicSubstrings_dynamic-programming",
    algorithm:
      '//Given a string, your task is to count how many palindromic substrings in this string.\n//The substrings with different start indexes or end indexes are counted as different substrings \n//even they consist of same characters.\n\n//Example 1:\n//Input: "abc"\n//Output: 3\n//Explanation: Three palindromic strings: "a", "b", "c".\n//Example 2:\n//Input: "aaa"\n//Output: 6\n//Explanation: Six palindromic strings: "a", "a", "a", "aa", "aa", "aaa".\n//Note:\n//The input string length won\'t exceed 1000.\n\nclass PalindromicSubstrings {\n    int result = 0;\n    public int countSubstrings(String s) {\n        if(s == null || s.length() == 0) {\n            return 0;\n        }\n        \n        for(int i = 0; i < s.length(); i++) {\n            extendPalindrome(s, i, i);\n            extendPalindrome(s, i, i + 1);\n        }\n        \n        return result;\n    }\n    \n    public void extendPalindrome(String s, int left, int right) {\n        while(left >= 0 && right < s.length() && s.charAt(left) == s.charAt(right)) {\n            result++;\n            left--;\n            right++;\n        }\n    }\n}\n\n',
    index: 140,
  },
  {
    title: "Regular Expression Matching",
    category: "dynamic-programming",
    id: "RegularExpressionMatching_dynamic-programming",
    algorithm:
      '// Implement regular expression matching with support for \'.\' and \'*\'.\n\n// \'.\' Matches any single character.\n// \'*\' Matches zero or more of the preceding element.\n\n// The matching should cover the entire input string (not partial).\n\n// The function prototype should be:\n// bool isMatch(const char *s, const char *p)\n\n// Some examples:\n// isMatch("aa","a") → false\n// isMatch("aa","aa") → true\n// isMatch("aaa","aa") → false\n// isMatch("aa", "a*") → true\n// isMatch("aa", ".*") → true\n// isMatch("ab", ".*") → true\n// isMatch("aab", "c*a*b") → true\n\npublic class RegularExpressionMatching {\n    public boolean isMatch(String s, String p) {\n        if(s == null || p == null) {\n            return false;\n        }\n        \n        boolean[][] dp = new boolean[s.length() + 1][p.length() + 1];\n        dp[0][0] = true;\n        \n        for(int i = 0; i < p.length(); i++) {\n            if(p.charAt(i) == \'*\' && dp[0][i - 1]) {\n                dp[0][i + 1] = true;\n            }\n        }\n        \n        for(int i = 0; i < s.length(); i++) {\n            for(int j = 0; j < p.length(); j++) {\n                if(p.charAt(j) == \'.\') {\n                    dp[i + 1][j + 1] = dp[i][j];\n                }\n                \n                if(p.charAt(j) == s.charAt(i)) {\n                    dp[i + 1][j + 1] = dp[i][j];\n                }\n                \n                if(p.charAt(j) == \'*\') {\n                    if(p.charAt(j - 1) != s.charAt(i) && p.charAt(j - 1) != \'.\') {\n                        dp[i + 1][j + 1] = dp[i + 1][j - 1];\n                    } else {\n                        dp[i + 1][j + 1] = (dp[i + 1][j] || dp[i][j + 1] || dp[i + 1][j - 1]);\n                    }\n                }\n            }\n        }\n        \n        return dp[s.length()][p.length()];\n    }\n}\n',
    index: 141,
  },
  {
    title: "Sentence Screen Fitting",
    category: "dynamic-programming",
    id: "SentenceScreenFitting_dynamic-programming",
    algorithm:
      '// Given a rows x cols screen and a sentence represented by a list of non-empty words, find how many times the given sentence can be fitted on the screen.\n\n// Note:\n    // A word cannot be split into two lines.\n    // The order of words in the sentence must remain unchanged.\n    // Two consecutive words in a line must be separated by a single space.\n    // Total words in the sentence won\'t exceed 100.\n    // Length of each word is greater than 0 and won\'t exceed 10.\n    // 1 ≤ rows, cols ≤ 20,000.\n\n// Example 1:\n\n// Input:\n// rows = 2, cols = 8, sentence = ["hello", "world"]\n\n// Output: \n// 1\n\n// Explanation:\n// hello---\n// world---\n\n// The character \'-\' signifies an empty space on the screen.\n// Example 2:\n\n// Input:\n// rows = 3, cols = 6, sentence = ["a", "bcd", "e"]\n\n// Output: \n// 2\n\n// Explanation:\n// a-bcd- \n// e-a---\n// bcd-e-\n\n// The character \'-\' signifies an empty space on the screen.\n// Example 3:\n\n// Input:\n// rows = 4, cols = 5, sentence = ["I", "had", "apple", "pie"]\n\n// Output: \n// 1\n\n// Explanation:\n// I-had\n// apple\n// pie-I\n// had--\n\n// The character \'-\' signifies an empty space on the screen.\n\npublic class SentenceScreenFitting {\n    public int wordsTyping(String[] sentence, int rows, int cols) {\n        String s = String.join(" ", sentence) + " ";\n        int start = 0;\n        int l = s.length();\n\n        for(int i = 0; i < rows; i++) {\n            start += cols;\n            \n            if(s.charAt(start % l) == \' \') {\n                start++;\n            } else {\n                while(start > 0 && s.charAt((start - 1) % l) != \' \') {\n                    start--;\n                }\n            }\n        }\n        \n        return start / s.length();\n    }\n}\n',
    index: 142,
  },
  {
    title: "Unique Binary Search Trees",
    category: "dynamic-programming",
    id: "UniqueBinarySearchTrees_dynamic-programming",
    algorithm:
      "// Given n, how many structurally unique BST's (binary search trees) that store values 1...n?\n\n// For example,\n// Given n = 3, there are a total of 5 unique BST's.\n\n//    1         3     3      2      1\n//     \\       /     /      / \\      \\\n//      3     2     1      1   3      2\n//     /     /       \\                 \\\n//    2     1         2                 3\n\npublic class UniqueBinarySearchTree {\n    public int numTrees(int n) {\n        int[] dp = new int[n + 1];\n        \n        dp[0] = 1;\n        dp[1] = 1;\n        \n        for(int i = 2; i <= n; i++) {\n            for(int j = 1; j <= i; j++) {\n                dp[i] += dp[i - j] * dp[j - 1];\n            }\n        }\n        \n        return dp[n];\n    }\n}\n",
    index: 143,
  },
  {
    title: "Unique Paths",
    category: "dynamic-programming",
    id: "UniquePaths_dynamic-programming",
    algorithm:
      "//A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).\n//\n//The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).\n//\n//How many possible unique paths are there?\n\nclass UniquePaths {\n    public int uniquePaths(int m, int n) {\n        Integer[][] map = new Integer[m][n];\n        \n        //only 1 way to get to ith row, 0th column (move down)\n        for(int i = 0; i < m; i++){\n            map[i][0] = 1;\n        }\n        \n        //only 1 way to get to ith column, 0th row (move right)\n        for(int j= 0; j < n; j++){\n            map[0][j]=1;\n        }\n        \n        //x ways to get to ith row, jth column (# of ways to get to\n        //ith - 1 row, jth column + # of ways to get to jth - 1 column\n        //ith column\n        for(int i = 1;i < m; i++){\n            for(int j = 1; j < n; j++){\n                map[i][j] = map[i - 1][j] + map[i][j - 1];\n            }\n        }\n\n        return map[m - 1][n - 1];\n    }\n}\n\n",
    index: 144,
  },
  {
    title: "Word Break",
    category: "dynamic-programming",
    id: "WordBreak_dynamic-programming",
    algorithm:
      '// Given a non-empty string s and a dictionary wordDict containing a list of non-empty words, determine if s can be segmented into a space-separated sequence of one or more dictionary words. You may assume the dictionary does not contain duplicate words.\n\n// For example, given\n// s = "leetcode",\n// dict = ["leet", "code"].\n\n// Return true because "leetcode" can be segmented as "leet code".\n\npublic class WordBreak {\n    public boolean wordBreak(String s, Set<String> wordDict) {\n        boolean[] dp = new boolean[s.length() + 1];\n        \n        dp[0] = true;\n        \n        for(int i = 1; i <= s.length(); i++) {\n            for(int j = 0; j < i; j++) {\n                if(dp[j] && wordDict.contains(s.substring(j, i))) {\n                    dp[i] = true;\n                    break;\n                }\n            }\n        }\n        \n        return dp[s.length()];\n    }\n}\n',
    index: 145,
  },
  { title: "Greedy", category: "leetcode", id: "greedy", index: 146 },
  {
    title: "Best Time To Buy And Sell Stock I I",
    category: "greedy",
    id: "BestTimeToBuyAndSellStockII_greedy",
    algorithm:
      "//Say you have an array for which the ith element is the price of a given stock on day i.\n//Design an algorithm to find the maximum profit. You may complete as many transactions as you \n//like (ie, buy one and sell one share of the stock multiple times). However, you may not engage \n//in multiple transactions at the same time (ie, you must sell the stock before you buy again).\n\nclass BestTimeToBuyAndSellStockII {\n    public int maxProfit(int[] prices) {\n        if(prices == null || prices.length == 0) {\n            return 0;\n        }\n        \n        int profit = 0;\n        for(int i = 0; i < prices.length - 1; i++) {\n            if(prices[i] < prices[i + 1]) {\n                profit += prices[i + 1] - prices[i];\n            }\n        }\n        \n        return profit;\n    }\n}\n",
    index: 147,
  },
  { title: "Hash Table", category: "leetcode", id: "hash-table", index: 148 },
  {
    title: "Binary Tree Vertical Order Traversal",
    category: "hash-table",
    id: "BinaryTreeVerticalOrderTraversal_hash-table",
    algorithm:
      "// Given a binary tree, return the vertical order traversal of its nodes' values. (ie, from top to bottom, column by column).\n\n// If two nodes are in the same row and column, the order should be from left to right.\n\n// Examples:\n\n// Given binary tree [3,9,20,null,null,15,7],\n//    3\n//   /\\\n//  /  \\\n//  9  20\n//     /\\\n//    /  \\\n//   15   7\n// return its vertical order traversal as:\n// [\n//   [9],\n//   [3,15],\n//   [20],\n//   [7]\n// ]\n// Given binary tree [3,9,8,4,0,1,7],\n//      3\n//     /\\\n//    /  \\\n//    9   8\n//   /\\  /\\\n//  /  \\/  \\\n//  4  01   7\n// return its vertical order traversal as:\n// [\n//   [4],\n//   [9],\n//   [3,0,1],\n//   [8],\n//   [7]\n// ]\n// Given binary tree [3,9,8,4,0,1,7,null,null,null,2,5] (0's right child is 2 and 1's left child is 5),\n//      3\n//     /\\\n//    /  \\\n//    9   8\n//   /\\  /\\\n//  /  \\/  \\\n//  4  01   7\n//     /\\\n//    /  \\\n//    5   2\n// return its vertical order traversal as:\n// [\n//   [4],\n//   [9,5],\n//   [3,0,1],\n//   [8,2],\n//   [7]\n// ]\n\n/**\n * Definition for a binary tree node.\n * public class TreeNode {\n *     int val;\n *     TreeNode left;\n *     TreeNode right;\n *     TreeNode(int x) { val = x; }\n * }\n */\npublic class BinaryTreeVerticalOrderTraversal {\n    public List<List<Integer>> verticalOrder(TreeNode root) {\n        List<List<Integer>> result = new ArrayList<>();\n\n        if(root == null) {\n            return result;\n        }\n        \n        Map<Integer, ArrayList<Integer>> map = new HashMap<>();\n        Queue<TreeNode> q = new LinkedList<>();\n        Queue<Integer> cols = new LinkedList<>();\n        \n        q.add(root);\n        cols.add(0);\n        \n        int min = 0;\n        int max = 0;\n        \n        while(!q.isEmpty()) {\n            TreeNode node = q.poll();\n            int col = cols.poll();\n            \n            if(!map.containsKey(col)) {\n                map.put(col, new ArrayList<Integer>());\n            }\n            \n            map.get(col).add(node.val);\n            \n            if(node.left != null) {\n                q.add(node.left);\n                cols.add(col - 1);\n                min = Math.min(min, col - 1);\n            }\n            \n            if(node.right != null) {\n                q.add(node.right);\n                cols.add(col + 1);\n                max = Math.max(max, col + 1);\n            }\n        }\n        \n        for(int i = min; i <= max; i++) {\n            result.add(map.get(i));\n        }\n        \n        return result;\n    }\n}\n",
    index: 149,
  },
  {
    title: "Bulls And Cows",
    category: "hash-table",
    id: "BullsAndCows_hash-table",
    algorithm:
      '//You are playing the following Bulls and Cows game with your friend: You write down a number and ask your friend to guess what the number is. Each time your friend makes a guess, you provide a hint that indicates how many digits in said guess match your secret number exactly in both digit and position (called "bulls") and how many digits match the secret number but locate in the wrong position (called "cows"). Your friend will use successive guesses and hints to eventually derive the secret number.\n//\n//Write a function to return a hint according to the secret number and friend\'s guess, use A to indicate the bulls and B to indicate the cows. \n//\n//Please note that both secret number and friend\'s guess may contain duplicate digits.\n//\n//Example 1:\n//\n//Input: secret = "1807", guess = "7810"\n//\n//Output: "1A3B"\n//\n//Explanation: 1 bull and 3 cows. The bull is 8, the cows are 0, 1 and 7.\n//Example 2:\n//\n//Input: secret = "1123", guess = "0111"\n//\n//Output: "1A1B"\n//\n//Explanation: The 1st 1 in friend\'s guess is a bull, the 2nd or 3rd 1 is a cow.\n//Note: You may assume that the secret number and your friend\'s guess only contain digits, and their lengths are always equal.\n\nclass BullsAndCows {\n    public String getHint(String secret, String guess) {\n        int bulls = 0;\n        int cows = 0;\n        int[] counts = new int[10];\n        for(int i = 0; i < secret.length(); i++) {\n            if(secret.charAt(i) == guess.charAt(i)) {\n                bulls++;\n            }  else {\n                if(counts[secret.charAt(i) - \'0\']++ < 0) {\n                    cows++;\n                }\n                if(counts[guess.charAt(i) - \'0\']-- > 0) {\n                    cows++;\n                }\n            }\n        }\n        \n        return bulls + "A" + cows + "B";\n    }\n}\n',
    index: 150,
  },
  {
    title: "Contains Duplicate",
    category: "hash-table",
    id: "ContainsDuplicate_hash-table",
    algorithm:
      "//Given an array of integers, find if the array contains any duplicates. Your function should return \n//true if any value appears at least twice in the array, and it should return false if every element is distinct.\n\nclass ContainsDuplicate {\n    public boolean containsDuplicate(int[] nums) {\n        HashMap<Integer, Integer> map = new HashMap<Integer, Integer>();\n        for(int i: nums) {\n            if(map.containsKey(i)) {\n                return true;\n            } else {\n                map.put(i, 1);\n            }\n        }\n        \n        return false;\n    }\n}\n",
    index: 151,
  },
  {
    title: "Contains Duplicates I I",
    category: "hash-table",
    id: "ContainsDuplicatesII_hash-table",
    algorithm:
      "//Given an array of integers and an integer k, find out whether there are two distinct indices i and \n//j in the array such that nums[i] = nums[j] and the absolute difference between i and j is at most k.\n\nclass ContainsDuplicatesII {\n    public boolean containsNearbyDuplicate(int[] nums, int k) {\n        HashMap<Integer, Integer> map = new HashMap<Integer, Integer>();\n        for(int i = 0; i < nums.length; i++) {\n            int current = nums[i];\n            if(map.containsKey(current) && i - map.get(current) <= k) {\n                return true;\n            } else {\n                map.put(current, i);\n            }\n        }\n        \n        return false;\n    }\n}\n\n",
    index: 152,
  },
  {
    title: "Daily Temperatures",
    category: "hash-table",
    id: "DailyTemperatures_hash-table",
    algorithm:
      "//Given a list of daily temperatures, produce a list that, for each day in the input, tells you how many days you would have to wait until a warmer temperature. If there is no future day for which this is possible, put 0 instead.\n//\n//For example, given the list temperatures = [73, 74, 75, 71, 69, 72, 76, 73], your output should be [1, 1, 4, 2, 1, 1, 0, 0].\n//\n//Note: The length of temperatures will be in the range [1, 30000]. Each temperature will be an integer in the range [30, 100].\n\nclass DailyTemperatures {\n    public int[] dailyTemperatures(int[] temperatures) {\n        int[] result = new int[temperatures.length];\n        Stack<Integer> stack = new Stack<Integer>();\n        for(int i = 0; i < temperatures.length; i++) {\n            while(!stack.isEmpty() && temperatures[i] > temperatures[stack.peek()]) {\n                int index = stack.pop();\n                result[index] = i - index;\n            }\n            stack.push(i);\n        }\n        \n        return result;\n    }\n}\n",
    index: 153,
  },
  {
    title: "Encode And Decode Tiny U R L",
    category: "hash-table",
    id: "EncodeAndDecodeTinyURL_hash-table",
    algorithm:
      '//TinyURL is a URL shortening service where you enter a URL such as https://leetcode.com/problems/design-tinyurl \n//and it returns a short URL such as http://tinyurl.com/4e9iAk.\n//\n//Design the encode and decode methods for the TinyURL service. There is no restriction on how your \n//encode/decode algorithm should work. You just need to ensure that a URL can be encoded to a tiny URL \n//and the tiny URL can be decoded to the original URL.\n\npublic class EncodeAndDecodeTinyURL {\n    HashMap<String, String> map = new HashMap<String, String>();\n    String characters = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";\n    int count = 1;\n\n    public String getKey() {\n        String key = "";\n        while(count > 0) {\n            count--;\n            key += characters.charAt(count);\n            count /= characters.length();\n        }\n        \n        return key;\n    }\n    \n    // Encodes a URL to a shortened URL.\n    public String encode(String longUrl) {\n        String key = getKey();\n        map.put(key, longUrl);\n        count++;\n            \n        return "http://tinyurl.com/" + key;\n    }\n\n    // Decodes a shortened URL to its original URL.\n    public String decode(String shortUrl) {\n        return map.get(shortUrl.replace("http://tinyurl.com/", ""));\n    }\n}\n\n// Your Codec object will be instantiated and called as such:\n// Codec codec = new Codec();\n// codec.decode(codec.encode(url));\n',
    index: 154,
  },
  {
    title: "Find Anagram Mappings",
    category: "hash-table",
    id: "FindAnagramMappings_hash-table",
    algorithm:
      "//Given two lists Aand B, and B is an anagram of A. B is an anagram of A means B is made by randomizing the order of the elements in A.\n//We want to find an index mapping P, from A to B. A mapping P[i] = j means the ith element in A appears in B at index j.\n//These lists A and B may contain duplicates. If there are multiple answers, output any of them.\n\n//For example, given\n//A = [12, 28, 46, 32, 50]\n//B = [50, 12, 32, 46, 28]\n\n//We should return\n//[1, 4, 3, 2, 0]\n//as P[0] = 1 because the 0th element of A appears at B[1], and P[1] = 4 because the 1st element of A appears at B[4], and so on.\n\nclass FindAnagramMappings {\n    public int[] anagramMappings(int[] A, int[] B) {\n        int[] mapping = new int[A.length];\n        HashMap<Integer, Integer> map = new HashMap<Integer, Integer>();\n        \n        for(int i = 0; i < B.length; i++) {\n            map.put(B[i], i);\n        }\n        \n        for(int i = 0; i < A.length; i++) {\n            mapping[i] = map.get(A[i]);\n        }\n        \n        return mapping;\n    }\n}\n",
    index: 155,
  },
  {
    title: "Find The Difference",
    category: "hash-table",
    id: "FindTheDifference_hash-table",
    algorithm:
      '// Given two strings s and t which consist of only lowercase letters.\n\n// String t is generated by random shuffling string s and then add one more letter at a random position.\n\n// Find the letter that was added in t.\n\n// Example:\n\n// Input:\n// s = "abcd"\n// t = "abcde"\n\n// Output:\n// e\n\n// Explanation:\n// \'e\' is the letter that was added.\n\npublic class FindTheDifference {\n    public char findTheDifference(String s, String t) {\n        int charCodeS = 0;\n        int charCodeT = 0;\n        \n        for(int i = 0; i < s.length(); i++) {\n            charCodeS += (int)(s.charAt(i));\n        }\n        \n        for(int i = 0; i < t.length(); i++) {\n            charCodeT += (int)(t.charAt(i));\n        }\n        \n        return (char)(charCodeT - charCodeS);\n    }\n}\n',
    index: 156,
  },
  {
    title: "First Unique Character In A String",
    category: "hash-table",
    id: "FirstUniqueCharacterInAString_hash-table",
    algorithm:
      '//Given a string, find the first non-repeating character in it and return it\'s index. If it doesn\'t exist, return -1.\n//\n//Examples:\n//\n//s = "leetcode"\n//return 0.\n//\n//s = "loveleetcode",\n//return 2.\n//Note: You may assume the string contain only lowercase letters.\n\nclass FirstUniqueCharacterInAString {\n    public int firstUniqChar(String s) {\n        HashMap<Character, Integer> characters = new HashMap<Character, Integer>();\n        for(int i = 0; i < s.length(); i++) {\n            char current = s.charAt(i);\n            if(characters.containsKey(current)) {\n                characters.put(current, -1);\n            } else {\n                characters.put(current, i);\n            }\n        }\n        \n        int min = Integer.MAX_VALUE;\n        for(char c: characters.keySet()) {\n            if(characters.get(c) > -1 && characters.get(c) < min) {\n                min = characters.get(c);\n            }\n        }\n        \n        return min == Integer.MAX_VALUE ? -1 : min;\n        \n    }\n}\n',
    index: 157,
  },
  {
    title: "Group Anagrams",
    category: "hash-table",
    id: "GroupAnagrams_hash-table",
    algorithm:
      '// Given an array of strings, group anagrams together.\n\n// For example, given: ["eat", "tea", "tan", "ate", "nat", "bat"], \n// Return:\n\n// [\n//   ["ate", "eat","tea"],\n//   ["nat","tan"],\n//   ["bat"]\n// ]\n// Note: All inputs will be in lower-case.\n\npublic class GroupAnagrams {\n    public List<List<String>> groupAnagrams(String[] strs) {\n        if(strs == null || strs.length == 0) {\n            return new ArrayList<List<String>>();\n        }\n        \n        HashMap<String, ArrayList<String>> map = new HashMap<String, ArrayList<String>>();\n        \n        Arrays.sort(strs);\n        \n        for(String s : strs) {\n            char[] characters = s.toCharArray();\n        \n            Arrays.sort(characters);\n            \n            String key = String.valueOf(characters);\n            \n            if(!map.containsKey(key)) {\n                map.put(key, new ArrayList<String>());\n            }\n            \n            map.get(key).add(s);\n        }\n        \n        return new ArrayList<List<String>>(map.values());\n    }\n}\n',
    index: 158,
  },
  {
    title: "Group Shifted Strings",
    category: "hash-table",
    id: "GroupShiftedStrings_hash-table",
    algorithm:
      '// Given a string, we can "shift" each of its letter to its successive letter, for example: "abc" -> "bcd". We can keep "shifting" which forms the sequence:\n\n// "abc" -> "bcd" -> ... -> "xyz"\n// Given a list of strings which contains only lowercase alphabets, group all strings that belong to the same shifting sequence.\n\n// For example, given: ["abc", "bcd", "acef", "xyz", "az", "ba", "a", "z"], \n// A solution is:\n\n// [\n//   ["abc","bcd","xyz"],\n//   ["az","ba"],\n//   ["acef"],\n//   ["a","z"]\n// ]\n\npublic class GroupShiftedStrings {\n    public List<List<String>> groupStrings(String[] strings) {\n        List<List<String>> result = new ArrayList<List<String>>();\n        \n        HashMap<String, List<String>> map = new HashMap<String, List<String>>();\n        \n        for(String s : strings) {\n            int offset = s.charAt(0) - \'a\';\n            String key = "";\n            \n            for(int i = 0; i < s.length(); i++) {\n                char current = (char)(s.charAt(i) - offset);\n                \n                if(current < \'a\') {\n                    current += 26;\n                }\n                \n                key += current;\n            }\n            \n            if(!map.containsKey(key)) {\n                List<String> list = new ArrayList<String>();\n                map.put(key, list);\n            }\n            \n            map.get(key).add(s);\n        }\n        \n        for(String key : map.keySet()) {\n            List<String> list = map.get(key);\n            \n            Collections.sort(list);\n            \n            result.add(list);   \n        }\n        \n        return result;\n    }\n}\n',
    index: 159,
  },
  {
    title: "Insert Delete Get Random O1",
    category: "hash-table",
    id: "InsertDeleteGetRandomO1_hash-table",
    algorithm:
      "//Design a data structure that supports all following operations in average O(1) time.\n\n//insert(val): Inserts an item val to the set if not already present.\n//remove(val): Removes an item val from the set if present.\n//getRandom: Returns a random element from current set of elements. Each element must have the same probability of being returned.\n\n//Example:\n// Init an empty set.\n//RandomizedSet randomSet = new RandomizedSet();\n\n// Inserts 1 to the set. Returns true as 1 was inserted successfully.\n//randomSet.insert(1);\n\n// Returns false as 2 does not exist in the set.\n//randomSet.remove(2);\n\n// Inserts 2 to the set, returns true. Set now contains [1,2].\n//randomSet.insert(2);\n\n// getRandom should return either 1 or 2 randomly.\n//randomSet.getRandom();\n\n// Removes 1 from the set, returns true. Set now contains [2].\n//randomSet.remove(1);\n\n// 2 was already in the set, so return false.\n//randomSet.insert(2);\n\n// Since 2 is the only number in the set, getRandom always return 2.\n//randomSet.getRandom();\n\nclass RandomizedSet {\n    HashMap<Integer, Integer> map;\n    ArrayList<Integer> values;\n\n    /** Initialize your data structure here. */\n    public RandomizedSet() {\n        map = new HashMap<Integer, Integer>();\n        values = new ArrayList<Integer>();\n    }\n    \n    /** Inserts a value to the set. Returns true if the set did not already contain the specified element. */\n    public boolean insert(int val) {\n        if(!map.containsKey(val)) {\n            map.put(val, val);\n            values.add(val);\n            return true;\n        }\n        else {\n            return false;\n        }\n    }\n    \n    /** Removes a value from the set. Returns true if the set contained the specified element. */\n    public boolean remove(int val) {\n        if(map.containsKey(val)) {\n            map.remove(val);\n            values.remove(values.indexOf(val));\n            return true;\n        }\n        return false;\n    }\n    \n    /** Get a random element from the set. */\n    public int getRandom() {\n        int random = (int)(Math.random() * values.size());\n        int valueToReturn = values.get(random);\n        return map.get(valueToReturn);\n    }\n}\n\n/**\n * Your RandomizedSet object will be instantiated and called as such:\n * RandomizedSet obj = new RandomizedSet();\n * boolean param_1 = obj.insert(val);\n * boolean param_2 = obj.remove(val);\n * int param_3 = obj.getRandom();\n */\n\n",
    index: 160,
  },
  {
    title: "Island Perimeter",
    category: "hash-table",
    id: "IslandPerimeter_hash-table",
    algorithm:
      "// You are given a map in form of a two-dimensional integer grid where 1 represents land and 0 represents water. Grid cells are connected horizontally/vertically (not diagonally). The grid is completely surrounded by water, and there is exactly one island (i.e., one or more connected land cells). The island doesn't have \"lakes\" (water inside that isn't connected to the water around the island). One cell is a square with side length 1. The grid is rectangular, width and height don't exceed 100. Determine the perimeter of the island.\n\n// Example:\n\n// [[0,1,0,0],\n//  [1,1,1,0],\n//  [0,1,0,0],\n//  [1,1,0,0]]\n\n// Answer: 16\n\nclass IslandPerimeter {\n    public int islandPerimeter(int[][] grid) {\n        int perimeter = 0;\n        if(grid == null || grid.length == 0) {\n            return perimeter;\n        }\n\n        for(int i = 0; i < grid.length; i++) {\n            for(int j = 0; j < grid[i].length; j++) {\n                if(grid[i][j] == 1) {\n                    perimeter += numNeighbors(grid, i, j);\n                    return perimeter;\n                }\n            }\n        }\n\n        return perimeter;\n    }\n\n    public int numNeighbors(int[][] grid, int x, int y) {\n        if(x < 0 || x >= grid.length || y < 0 || y >= grid[x].length || grid[x][y] == 0) {\n            return 1;\n        }\n\n        if(grid[x][y] == -1) {\n            return 0;\n        }\n\n        grid[x][y] = -1;\n        return numNeighbors(grid, x + 1, y) + \n            numNeighbors(grid, x - 1, y) + \n            numNeighbors(grid, x, y + 1) + \n            numNeighbors(grid, x, y - 1);\n    }\n}\n",
    index: 161,
  },
  {
    title: "Jewels And Stones",
    category: "hash-table",
    id: "JewelsAndStones_hash-table",
    algorithm:
      '//You\'re given strings J representing the types of stones that are jewels, and S representing the stones you have.  \n//Each character in S is a type of stone you have.  You want to know how many of the stones you have are also jewels.\n\n//The letters in J are guaranteed distinct, and all characters in J and S are letters. Letters are case sensitive, \n//so "a" is considered a different type of stone from "A".\n\nclass JewelsAndStones {\n    public int numJewelsInStones(String J, String S) {\n        HashMap<Character, Integer> map = new HashMap<Character, Integer>();\n        for(char c: J.toCharArray()) {\n            map.put(c, 1);\n        }\n        \n        int numberOfJewels = 0;\n        for(char c: S.toCharArray()) {\n            if(map.containsKey(c)) {\n                numberOfJewels++;\n            }\n        }\n        \n        return numberOfJewels;\n    }\n}\n',
    index: 162,
  },
  {
    title: "Logger Rate Limiter",
    category: "hash-table",
    id: "LoggerRateLimiter_hash-table",
    algorithm:
      '// Design a logger system that receive stream of messages along with its timestamps, each message should be printed if and only if it is not printed in the last 10 seconds.\n\n// Given a message and a timestamp (in seconds granularity), return true if the message should be printed in the given timestamp, otherwise returns false.\n\n// It is possible that several messages arrive roughly at the same time.\n\n// Example:\n\n// Logger logger = new Logger();\n\n// // logging string "foo" at timestamp 1\n// logger.shouldPrintMessage(1, "foo"); returns true; \n\n// // logging string "bar" at timestamp 2\n// logger.shouldPrintMessage(2,"bar"); returns true;\n\n// // logging string "foo" at timestamp 3\n// logger.shouldPrintMessage(3,"foo"); returns false;\n\n// // logging string "bar" at timestamp 8\n// logger.shouldPrintMessage(8,"bar"); returns false;\n\n// // logging string "foo" at timestamp 10\n// logger.shouldPrintMessage(10,"foo"); returns false;\n\n// // logging string "foo" at timestamp 11\n// logger.shouldPrintMessage(11,"foo"); returns true;\n\npublic class LoggerRateLimiter {\n    HashMap<String, Integer> messages;\n\n    /** Initialize your data structure here. */\n    public Logger() {\n       this.messages = new HashMap<String, Integer>(); \n    }\n    \n    /** Returns true if the message should be printed in the given timestamp, otherwise returns false.\n        If this method returns false, the message will not be printed.\n        The timestamp is in seconds granularity. */\n    public boolean shouldPrintMessage(int timestamp, String message) {\n        if(messages.containsKey(message)) {\n            if(timestamp - messages.get(message) >= 10) {\n                messages.put(message, timestamp);\n                return true;\n            } else {\n                return false;\n            }\n        } else {\n            messages.put(message, timestamp);\n            return true;\n        }\n    }\n}\n\n/**\n * Your Logger object will be instantiated and called as such:\n * Logger obj = new Logger();\n * boolean param_1 = obj.shouldPrintMessage(timestamp,message);\n */\n',
    index: 163,
  },
  {
    title: "Maximum Size Subarray Sum Equals K",
    category: "hash-table",
    id: "MaximumSizeSubarraySumEqualsK_hash-table",
    algorithm:
      "// Given an array nums and a target value k, find the maximum length of a subarray that sums to k. If there isn't one, return 0 instead.\n\n// Note:\n// The sum of the entire nums array is guaranteed to fit within the 32-bit signed integer range.\n\n// Example 1:\n// Given nums = [1, -1, 5, -2, 3], k = 3,\n// return 4. (because the subarray [1, -1, 5, -2] sums to 3 and is the longest)\n\n// Example 2:\n// Given nums = [-2, -1, 2, 1], k = 1,\n// return 2. (because the subarray [-1, 2] sums to 1 and is the longest)\n\n// Follow Up:\n// Can you do it in O(n) time?\n\npublic class MaximumSizeSubarraySumEqualsK {\n    public int maxSubArrayLen(int[] nums, int k) {\n        if(nums.length == 0) {\n            return 0;\n        }\n        \n        HashMap<Integer, Integer> map = new HashMap<Integer, Integer>();\n        \n        int maxLength = 0;\n        \n        int total = 0;\n        \n        map.put(0, -1);\n        \n        for(int i = 0; i < nums.length; i++) {\n            total += nums[i];\n            if(map.containsKey(total - k)) {\n                maxLength = Math.max(maxLength, i - map.get(total - k));\n            }\n\n            if(!map.containsKey(total)) {\n                map.put(total, i);\n            }\n        }\n        \n        return maxLength;\n    }\n}\n",
    index: 164,
  },
  {
    title: "Minimum Window Substring",
    category: "hash-table",
    id: "MinimumWindowSubstring_hash-table",
    algorithm:
      '// Given a string S and a string T, find the minimum window in S which will contain all the characters in T in complexity O(n).\n\n// For example,\n// S = "ADOBECODEBANC"\n// T = "ABC"\n// Minimum window is "BANC".\n\n// Note:\n// If there is no such window in S that covers all characters in T, return the empty string "".\n\n// If there are multiple such windows, you are guaranteed that there will always be only one unique minimum window in S.\n\npublic class MinimumWindowSubstring {\n    public String minWindow(String s, String t) {\n        HashMap<Character, Integer> map = new HashMap<>();\n        \n        for(char c : s.toCharArray()) {\n            map.put(c, 0);\n        }\n        \n        for(char c : t.toCharArray()) {\n            if(map.containsKey(c)) {\n                map.put(c, map.get(c)+ 1);\n            } else {\n                return "";\n            }\n        }\n        \n        int start = 0;\n        int end = 0;\n        int minStart = 0;\n        int minLength = Integer.MAX_VALUE;\n        int counter = t.length();\n        \n        while(end < s.length()) {\n            char c1 = s.charAt(end);\n            \n            if(map.get(c1) > 0) {\n                counter--;\n            }\n            \n            map.put(c1, map.get(c1) - 1);\n            end++;\n            \n            while(counter == 0) {\n                if(minLength > end - start) {\n                    minLength = end - start;\n                    minStart = start;\n                }\n                \n                char c2 = s.charAt(start);\n                map.put(c2, map.get(c2) + 1);\n                \n                if(map.get(c2) > 0) {\n                    counter++;\n                }\n                \n                start++;\n            }\n        }\n        \n        return minLength == Integer.MAX_VALUE ? "" : s.substring(minStart, minStart + minLength);\n    }\n}\n',
    index: 165,
  },
  {
    title: "Single Number I I",
    category: "hash-table",
    id: "SingleNumberII_hash-table",
    algorithm:
      "//Given an array of integers, every element appears three times except for one, \n//which appears exactly once. Find that single one.\n\n//Note:\n//Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?\n\nclass SingleNumberII {\n    public int singleNumber(int[] nums) {\n        HashMap<Integer, Integer> map = new HashMap<Integer, Integer>();\n        for(int i: nums) {\n            if(map.containsKey(i)) {\n                map.put(i, map.get(i) + 1);\n            } else {\n                map.put(i, 1);\n            }\n        }\n        \n        for(int key: map.keySet()) {\n            if(map.get(key) == 1) {\n                return key;\n            }\n        }\n        \n        //no unique integer in nums\n        return -1;\n    }\n}\n",
    index: 166,
  },
  {
    title: "Sparse Matrix Multiplication",
    category: "hash-table",
    id: "SparseMatrixMultiplication_hash-table",
    algorithm:
      "// Given two sparse matrices A and B, return the result of AB.\n\n// You may assume that A's column number is equal to B's row number.\n\n// Example:\n\n// A = [\n//   [ 1, 0, 0],\n//   [-1, 0, 3]\n// ]\n\n// B = [\n//   [ 7, 0, 0 ],\n//   [ 0, 0, 0 ],\n//   [ 0, 0, 1 ]\n// ]\n\n\n//      |  1 0 0 |   | 7 0 0 |   |  7 0 0 |\n// AB = | -1 0 3 | x | 0 0 0 | = | -7 0 3 |\n//                   | 0 0 1 |\n\npublic class SparseMatrixMultiplication {\n    public int[][] multiply(int[][] A, int[][] B) {\n        int m = A.length;\n        int n = A[0].length;\n        int nB = B[0].length;\n        int[][] C = new int[m][nB];\n        \n        for(int i = 0; i < m; i++) {\n            for(int j = 0; j < n; j++) {\n                if(A[i][j] != 0) {\n                    for(int k = 0; k < nB; k++) {\n                        if(B[j][k] != 0) {\n                            C[i][k] += A[i][j] * B[j][k];\n                        }\n                    }\n                }\n            }\n        }\n        \n        return C;\n    }\n}\n",
    index: 167,
  },
  {
    title: "Strobogrammatic Number",
    category: "hash-table",
    id: "StrobogrammaticNumber_hash-table",
    algorithm:
      '// A strobogrammatic number is a number that looks the same when rotated 180 degrees (looked at upside down).\n\n// Write a function to determine if a number is strobogrammatic. The number is represented as a string.\n\n// For example, the numbers "69", "88", and "818" are all strobogrammatic.\n\npublic class StrobogrammaticNumber {\n    public boolean isStrobogrammatic(String num) {\n        for(int i = 0, j = num.length() - 1; i <= j; i++, j--) {\n            if(!"00 11 88 696".contains(num.charAt(i) + "" + num.charAt(j))) {\n                return false;\n            }\n        }\n        \n        return true;\n    }\n}\n',
    index: 168,
  },
  {
    title: "Two Sum",
    category: "hash-table",
    id: "TwoSum_hash-table",
    algorithm:
      "// Given an array of integers, return indices of the two numbers such that they add up to a specific target.\n\n// You may assume that each input would have exactly one solution, and you may not use the same element twice.\n\n// Example:\n// Given nums = [2, 7, 11, 15], target = 9,\n\n// Because nums[0] + nums[1] = 2 + 7 = 9,\n// return [0, 1].\n\npublic class TwoSum {\n    public int[] twoSum(int[] nums, int target) {\n        int[] result = new int[2];\n        \n        HashMap<Integer, Integer> map = new HashMap<>();\n        \n        for(int i = 0; i < nums.length; i++) {\n            if(map.containsKey(target - nums[i])) {\n                result[1] = i;\n                result[0] = map.get(target - nums[i]);\n\n                return result;\n            }\n            \n            map.put(nums[i], i);\n        }\n        \n        return result;\n    }\n}\n",
    index: 169,
  },
  {
    title: "Unique Word Abbreviation",
    category: "hash-table",
    id: "UniqueWordAbbreviation_hash-table",
    algorithm:
      '// An abbreviation of a word follows the form <first letter><number><last letter>. Below are some examples of word abbreviations:\n\n// a) it                      --> it    (no abbreviation)\n\n//      1\n// b) d|o|g                   --> d1g\n\n//               1    1  1\n//      1---5----0----5--8\n// c) i|nternationalizatio|n  --> i18n\n\n//               1\n//      1---5----0\n// d) l|ocalizatio|n          --> l10n\n// Assume you have a dictionary and given a word, find whether its abbreviation is unique in the dictionary. A word\'s abbreviation is unique if no other word from the dictionary has the same abbreviation.\n\n// Example: \n// Given dictionary = [ "deer", "door", "cake", "card" ]\n\n// isUnique("dear") -> \n// false\n\n// isUnique("cart") -> \n// true\n\n// isUnique("cane") -> \n// false\n\n// isUnique("make") -> \n// true\n\nimport java.util.ArrayList;\n\npublic class UniqueWordAbbreviation {\n    HashMap<String, String> map;\n\n    public ValidWordAbbr(String[] dictionary) {\n        this.map = new HashMap<String, String>();\n        \n        for(String word : dictionary) {\n            String key = getKey(word);\n            \n            if(map.containsKey(key)) {\n                if(!map.get(key).equals(word)) {\n                    map.put(key, "");\n                }\n            } else {\n                map.put(key, word);\n            }\n        }\n    }\n\n    public boolean isUnique(String word) {\n        return !map.containsKey(getKey(word))||map.get(getKey(word)).equals(word);\n    }\n    \n    public String getKey(String word) {\n        if(word.length() <= 2) {\n            return word;\n        }\n        \n        return word.charAt(0) + Integer.toString(word.length() - 2) + word.charAt(word.length() - 1);\n    }\n}\n\n\n// Your ValidWordAbbr object will be instantiated and called as such:\n// ValidWordAbbr vwa = new ValidWordAbbr(dictionary);\n// vwa.isUnique("Word");\n// vwa.isUnique("anotherWord");\n',
    index: 170,
  },
  {
    title: "Valid Anagram",
    category: "hash-table",
    id: "ValidAnagram_hash-table",
    algorithm:
      "class ValidAnagram {\n    public boolean isAnagram(String s, String t) {\n        HashMap<Character, Integer> map = new HashMap<Character, Integer>();\n        for(char c: s.toCharArray()) {\n            if(map.containsKey(c)) {\n                map.put(c, map.get(c) + 1);\n            }\n            else {\n                map.put(c, 1);\n            }\n        }\n        \n        for(char c: t.toCharArray()) {\n            if(map.containsKey(c)) {\n                map.put(c, map.get(c) - 1);\n            }\n            else {\n                return false;\n            }\n        }\n        \n        for(char c: map.keySet()) {\n            if(map.get(c) != 0) {\n                return false;\n            }\n        }\n        \n        return true;\n    }\n}\n",
    index: 171,
  },
  {
    title: "Valid Sudoku",
    category: "hash-table",
    id: "ValidSudoku_hash-table",
    algorithm:
      "//Determine if a Sudoku is valid, according to: Sudoku Puzzles - The Rules. (http://sudoku.com.au/TheRules.aspx)\n//The Sudoku board could be partially filled, where empty cells are filled with the character '.'.\n//A partially filled sudoku which is valid.\n\n//Note:\n//A valid Sudoku board (partially filled) is not necessarily solvable. Only the filled cells need to be validated.\n\nclass ValidSudoku {\n    public boolean isValidSudoku(char[][] board) {\n        for(int i = 0; i < board.length; i++){\n            HashSet<Character> rows = new HashSet<Character>();\n            HashSet<Character> columns = new HashSet<Character>();\n            HashSet<Character> box = new HashSet<Character>();\n            for (int j = 0; j < board[0].length; j++){\n                if(board[i][j] != '.' && !rows.add(board[i][j])) {\n                    return false;\n                }\n                if(board[j][i]!='.' && !columns.add(board[j][i])) {\n                    return false;\n                }\n                int rowIndex = (i / 3) * 3;\n                int columnIndex = (i % 3) * 3;\n                if(board[rowIndex + j / 3][columnIndex + j % 3] != '.' && !box.add(board[rowIndex + j / 3][columnIndex + j % 3])) {\n                    return false;\n                }\n            }\n        }\n        return true;\n    }\n}\n\n",
    index: 172,
  },
  { title: "Linked List", category: "leetcode", id: "linked-list", index: 173 },
  {
    title: "Add Two Numbers",
    category: "linked-list",
    id: "AddTwoNumbers_linked-list",
    algorithm:
      "// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.\n\n// You may assume the two numbers do not contain any leading zero, except the number 0 itself.\n\n// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)\n// Output: 7 -> 0 -> 8\n\n/**\n * Definition for singly-linked list.\n * public class ListNode {\n *     int val;\n *     ListNode next;\n *     ListNode(int x) { val = x; }\n * }\n */\npublic class AddTwoNumbers {\n    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {\n        ListNode current1 = l1;\n        ListNode current2 = l2;\n        \n        ListNode head = new ListNode(0);\n        ListNode currentHead = head;\n        \n        int sum = 0;\n        \n        while(current1 != null || current2 != null) {\n            sum /= 10;\n            \n            if(current1 != null) {\n                sum += current1.val;\n                current1 = current1.next;\n            }\n            \n            if(current2 != null) {\n                sum += current2.val;\n                current2 = current2.next;\n            }\n            \n            currentHead.next = new ListNode(sum % 10);\n            currentHead = currentHead.next;\n        }\n        \n        \n        if(sum / 10 == 1) {\n            currentHead.next = new ListNode(1);\n        }\n        \n        return head.next;\n    }\n}\n",
    index: 174,
  },
  {
    title: "Delete Node In A Linked List",
    category: "linked-list",
    id: "DeleteNodeInALinkedList_linked-list",
    algorithm:
      "// Write a function to delete a node (except the tail) in a singly linked list, given only access to that node.\n\n// Supposed the linked list is 1 -> 2 -> 3 -> 4 and you are given the third node with value 3, the linked list should become 1 -> 2 -> 4 after calling your function.\n\n/**\n * Definition for singly-linked list.\n * public class ListNode {\n *     int val;\n *     ListNode next;\n *     ListNode(int x) { val = x; }\n * }\n */\npublic class DeleteNodeInALinkedList {\n    public void deleteNode(ListNode node) {\n        node.val = node.next.val;\n        node.next = node.next.next;\n    }\n}\n",
    index: 175,
  },
  {
    title: "Linked List Cycle",
    category: "linked-list",
    id: "LinkedListCycle_linked-list",
    algorithm:
      "//Given a linked list, determine if it has a cycle in it.\n//Follow up:\n//Can you solve it without using extra space?\n/**\n * Definition for singly-linked list.\n * class ListNode {\n *     int val;\n *     ListNode next;\n *     ListNode(int x) {\n *         val = x;\n *         next = null;\n *     }\n * }\n */\npublic class Solution {\n    public boolean hasCycle(ListNode head) {\n        if(head == null || head.next == null) {\n            return false;\n        }\n        \n        ListNode slow = head;\n        ListNode fast = head.next;\n        while(fast != null && fast.next != null && fast != slow) {\n            slow = slow.next;\n            fast = fast.next.next;\n        }\n        \n        return fast == slow;\n    }\n}\n\n",
    index: 176,
  },
  {
    title: "Merge K Sorted Lists",
    category: "linked-list",
    id: "MergeKSortedLists_linked-list",
    algorithm:
      "// Merge k sorted linked lists and return it as one sorted list. Analyze and describe its complexity.\n\n/**\n * Definition for singly-linked list.\n * public class ListNode {\n *     int val;\n *     ListNode next;\n *     ListNode(int x) { val = x; }\n * }\n */\npublic class MergeKSortedLists {\n    public ListNode mergeKLists(ListNode[] lists) {\n        if (lists==null||lists.length==0) {\n            return null;\n        }\n        \n        PriorityQueue<ListNode> queue= new PriorityQueue<ListNode>(lists.length,new Comparator<ListNode>(){\n            @Override\n            public int compare(ListNode o1,ListNode o2){\n                if (o1.val<o2.val) {\n                    return -1;\n                } else if (o1.val==o2.val) {\n                    return 0;\n                } else {\n                    return 1;\n                }\n            }\n        });\n        \n        ListNode dummy = new ListNode(0);\n        ListNode tail=dummy;\n        \n        for (ListNode node:lists) {\n            if (node!=null) {\n                queue.add(node);\n            }\n        }\n\n        while (!queue.isEmpty()){\n            tail.next=queue.poll();\n            tail=tail.next;\n\n            if (tail.next!=null) {\n                queue.add(tail.next);\n            }\n        }\n\n        return dummy.next;\n    }\n}\n",
    index: 177,
  },
  {
    title: "Palindrome Linked List",
    category: "linked-list",
    id: "PalindromeLinkedList_linked-list",
    algorithm:
      "/**\n * Definition for singly-linked list.\n * public class ListNode {\n *     int val;\n *     ListNode next;\n *     ListNode(int x) { val = x; }\n * }\n */\npublic class PalindromeLinkedList {\n    public boolean isPalindrome(ListNode head) {\n        if(head == null || head.next == null) {\n            return true;\n        }\n        \n        Stack<Integer> stack = new Stack<Integer>();\n        \n        ListNode fast = head;\n        ListNode slow = head;\n\n        while(fast != null && fast.next != null) {\n            stack.push(slow.val);\n            fast = fast.next.next;\n            slow = slow.next;\n        }\n        \n        if(fast != null) {\n            slow = slow.next;\n        }\n        \n        while(slow != null) {\n            if(stack.pop() != slow.val) {\n                return false;\n            }\n\n            slow = slow.next;\n        }\n        \n        return true;\n    }\n}\n",
    index: 178,
  },
  {
    title: "Plus One Linked List",
    category: "linked-list",
    id: "PlusOneLinkedList_linked-list",
    algorithm:
      "// Given a non-negative integer represented as non-empty a singly linked list of digits, plus one to the integer.\n\n// You may assume the integer do not contain any leading zero, except the number 0 itself.\n\n// The digits are stored such that the most significant digit is at the head of the list.\n\n// Example:\n// Input:\n// 1->2->3\n\n// Output:\n// 1->2->4\n\n/**\n * Definition for singly-linked list.\n * public class ListNode {\n *     int val;\n *     ListNode next;\n *     ListNode(int x) { val = x; }\n * }\n */\npublic class PlusOneLinkedList {\n    public ListNode plusOne(ListNode head) {\n        if(plusOneRecursive(head) == 0) {\n            return head;\n        } else {\n            ListNode newHead = new ListNode(1);\n            newHead.next = head;\n            \n            return newHead;\n        }\n    }\n    \n    private int plusOneRecursive(ListNode head) {\n        if(head == null) {\n            return 1;\n        }\n        \n        int carry = plusOneRecursive(head.next);\n        \n        if(carry == 0) {\n            return 0;\n        }\n        \n        int value = head.val + 1;\n        head.val = value % 10;\n\n        return value/10;\n    }\n}\n",
    index: 179,
  },
  {
    title: "Reverse Linked List",
    category: "linked-list",
    id: "ReverseLinkedList_linked-list",
    algorithm:
      "// Reverse a singly linked list.\n\n/**\n * Definition for singly-linked list.\n * public class ListNode {\n *     int val;\n *     ListNode next;\n *     ListNode(int x) { val = x; }\n * }\n */\npublic class ReverseLinkedList {\n    public ListNode reverseList(ListNode head) {\n        if(head == null) {\n            return head;\n        }\n    \n        ListNode newHead = null;\n        \n        while(head != null) {\n            ListNode next = head.next;\n            head.next = newHead;\n            newHead = head;\n            head = next;\n        }\n        \n        return newHead;\n    }\n}\n",
    index: 180,
  },
  { title: "Math", category: "leetcode", id: "math", index: 181 },
  {
    title: "Add Digits",
    category: "math",
    id: "AddDigits_math",
    algorithm:
      "//Given a non-negative integer num, repeatedly add all its digits until the result has only one digit.\n\n//For example:\n//Given num = 38, the process is like: 3 + 8 = 11, 1 + 1 = 2. Since 2 has only one digit, return it.\n\n//Follow up:\n//Could you do it without any loop/recursion in O(1) runtime?\n\nclass AddDigits {\n    public int addDigits(int num) {\n        while(num >= 10) {\n            int temp = 0;\n            while(num > 0) {\n                temp += num % 10;\n                num /= 10;\n            }\n            num = temp;\n        }\n        \n        return num;\n    }\n}\n",
    index: 182,
  },
  {
    title: "Bulb Switcher",
    category: "math",
    id: "BulbSwitcher_math",
    algorithm:
      "//There are n bulbs that are initially off. You first turn on all the bulbs. Then, you turn off every second bulb. On the third round, you toggle every third bulb (turning on if it's off or turning off if it's on). For the ith round, you toggle every i bulb. For the nth round, you only toggle the last bulb. Find how many bulbs are on after n rounds.\n//Example:\n//Given n = 3. \n\n//At first, the three bulbs are [off, off, off].\n//After first round, the three bulbs are [on, on, on].\n//After second round, the three bulbs are [on, off, on].\n//After third round, the three bulbs are [on, off, off]. \n\n//So you should return 1, because there is only one bulb is on.\n\nclass BulbSwitcher {\n    public int bulbSwitch(int n) {\n        return (int)Math.sqrt(n);\n    }\n}\n",
    index: 183,
  },
  {
    title: "Encode And Decode Tiny U R L",
    category: "math",
    id: "EncodeAndDecodeTinyURL_math",
    algorithm:
      '//TinyURL is a URL shortening service where you enter a URL such as https://leetcode.com/problems/design-tinyurl \n//and it returns a short URL such as http://tinyurl.com/4e9iAk.\n//\n//Design the encode and decode methods for the TinyURL service. There is no restriction on how your \n//encode/decode algorithm should work. You just need to ensure that a URL can be encoded to a tiny URL \n//and the tiny URL can be decoded to the original URL.\n\npublic class EncodeAndDecodeTinyURL {\n    HashMap<String, String> map = new HashMap<String, String>();\n    String characters = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";\n    int count = 1;\n\n    public String getKey() {\n        String key = "";\n        while(count > 0) {\n            count--;\n            key += characters.charAt(count);\n            count /= characters.length();\n        }\n        \n        return key;\n    }\n    \n    // Encodes a URL to a shortened URL.\n    public String encode(String longUrl) {\n        String key = getKey();\n        map.put(key, longUrl);\n        count++;\n            \n        return "http://tinyurl.com/" + key;\n    }\n\n    // Decodes a shortened URL to its original URL.\n    public String decode(String shortUrl) {\n        return map.get(shortUrl.replace("http://tinyurl.com/", ""));\n    }\n}\n\n// Your Codec object will be instantiated and called as such:\n// Codec codec = new Codec();\n// codec.decode(codec.encode(url));\n',
    index: 184,
  },
  {
    title: "Palindrome Number",
    category: "math",
    id: "PalindromeNumber_math",
    algorithm:
      "//Determine whether an integer is a palindrome. Do this without extra space.\n\nclass PalindromeNumber {\n    public boolean isPalindrome(int x) {\n        if(x < 0) {\n            return false;\n        }\n        \n        int num = x;\n        int reversed = 0;\n        \n        while(num != 0) {\n            reversed = reversed * 10 + num % 10;\n            num /= 10;\n        }\n        \n        return x == reversed;\n    }\n}\n",
    index: 185,
  },
  {
    title: "Plus One",
    category: "math",
    id: "PlusOne_math",
    algorithm:
      "//Given a non-empty array of digits representing a non-negative integer, plus one to the integer.\n//\n//The digits are stored such that the most significant digit is at the head of the list, and each element in the array contain a single digit.\n//\n//You may assume the integer does not contain any leading zero, except the number 0 itself.\n//\n//Example 1:\n//\n//Input: [1,2,3]\n//Output: [1,2,4]\n//Explanation: The array represents the integer 123.\n//Example 2:\n//\n//Input: [4,3,2,1]\n//Output: [4,3,2,2]\n//Explanation: The array represents the integer 4321.\n\nclass Solution {\n    public int[] plusOne(int[] digits) {\n        for(int i = digits.length - 1; i >= 0; i--) {\n            if(digits[i] < 9) {\n                digits[i]++;\n                return digits;\n            }\n\n            digits[i] = 0;\n        }\n\n        int[] result = new int[digits.length + 1];\n        result[0] = 1;\n\n        return result;\n    }\n}\n",
    index: 186,
  },
  {
    title: "Poor Pigs",
    category: "math",
    id: "PoorPigs_math",
    algorithm:
      '//There are 1000 buckets, one and only one of them contains poison, the rest are filled with water. \n//They all look the same. If a pig drinks that poison it will die within 15 minutes. What is the \n//minimum amount of pigs you need to figure out which bucket contains the poison within one hour.\n\n//Answer this question, and write an algorithm for the follow-up general case.\n\n//Follow-up:\n//If there are n buckets and a pig drinking poison will die within m minutes, how many pigs (x) \n//you need to figure out the "poison" bucket within p minutes? There is exact one bucket with poison.\n\nclass PoorPigs {\n    public int poorPigs(int buckets, int minutesToDie, int minutesToTest) {    \n        int numPigs = 0;\n        while (Math.pow(minutesToTest / minutesToDie + 1, numPigs) < buckets) {\n            numPigs++;\n        }\n        \n        return numPigs;\n    }\n}\n',
    index: 187,
  },
  {
    title: "Power Of Two",
    category: "math",
    id: "PowerOfTwo_math",
    algorithm:
      "//Given an integer, write a function to determine if it is a power of two.\n//\n//Example 1:\n//\n//Input: 1\n//Output: true\n//Example 2:\n//\n//Input: 16\n//Output: true\n//Example 3:\n//\n//Input: 218\n//Output: false\n\nclass PowerOfTwo {\n    public boolean isPowerOfTwo(int n) {\n        long i = 1;\n        while(i < n) {\n            i <<= 1;\n        }\n        \n        return i == n;\n    }\n}\n",
    index: 188,
  },
  { title: "Queue", category: "leetcode", id: "queue", index: 189 },
  {
    title: "Moving Average From Data Stream",
    category: "queue",
    id: "MovingAverageFromDataStream_queue",
    algorithm:
      "// Given a stream of integers and a window size, calculate the moving average of all integers in the sliding window.\n\n// For example,\n// MovingAverage m = new MovingAverage(3);\n// m.next(1) = 1\n// m.next(10) = (1 + 10) / 2\n// m.next(3) = (1 + 10 + 3) / 3\n// m.next(5) = (10 + 3 + 5) / 3\n\n/**\n * Your MovingAverage object will be instantiated and called as such:\n * MovingAverage obj = new MovingAverage(size);\n * double param_1 = obj.next(val);\n */\n\npublic class MovingAverageFromDataStream {\n    double previousSum = 0.0;\n    int maxSize;\n    Queue<Integer> window;\n\n    /** Initialize your data structure here. */\n    public MovingAverage(int size) {\n        this.maxSize = size;\n        window = new LinkedList<Integer>();\n    }\n    \n    public double next(int val) {\n        if(window.size() == maxSize) {\n            previousSum -= window.remove();\n        }\n        \n        window.add(val);\n        previousSum += val;\n\n        return previousSum / window.size();\n    }\n}\n",
    index: 190,
  },
  { title: "Sort", category: "leetcode", id: "sort", index: 191 },
  {
    title: "Meeting Rooms",
    category: "sort",
    id: "MeetingRooms_sort",
    algorithm:
      "// Given an array of meeting time intervals consisting of start and end times [[s1,e1],[s2,e2],...] (si < ei), determine if a person could attend all meetings.\n\n// For example,\n// Given [[0, 30],[5, 10],[15, 20]],\n// return false.\n\n/**\n * Definition for an interval.\n * public class Interval {\n *     int start;\n *     int end;\n *     Interval() { start = 0; end = 0; }\n *     Interval(int s, int e) { start = s; end = e; }\n * }\n */\npublic class MeetingRooms {\n    public boolean canAttendMeetings(Interval[] intervals) {\n        if(intervals == null) {\n            return false;\n        }\n\n        // Sort the intervals by start time\n        Arrays.sort(intervals, new Comparator<Interval>() {\n            public int compare(Interval a, Interval b) { return a.start - b.start; }\n        });\n\n        for(int i = 1; i < intervals.length; i++) {\n            if(intervals[i].start < intervals[i - 1].end) {\n                return false;\n            }\n        }\n\n        return true;\n    }\n}\n",
    index: 192,
  },
  {
    title: "Meeting Rooms I I",
    category: "sort",
    id: "MeetingRoomsII_sort",
    algorithm:
      "// Given an array of meeting time intervals consisting of start and end times [[s1,e1],[s2,e2],...] (si < ei), find the minimum number of conference rooms required.\n\n// For example,\n// Given [[0, 30],[5, 10],[15, 20]],\n// return 2.\n\n/**\n * Definition for an interval.\n * public class Interval {\n *     int start;\n *     int end;\n *     Interval() { start = 0; end = 0; }\n *     Interval(int s, int e) { start = s; end = e; }\n * }\n */\npublic class MeetingRoomsII {\n    public int minMeetingRooms(Interval[] intervals) {\n        int[] starts = new int[intervals.length];\n        int[] ends = new int[intervals.length];\n\n        for(int i=0; i<intervals.length; i++) {\n            starts[i] = intervals[i].start;\n            ends[i] = intervals[i].end;\n        }\n\n        Arrays.sort(starts);\n        Arrays.sort(ends);\n\n        int rooms = 0;\n        int endsItr = 0;\n\n        for(int i=0; i<starts.length; i++) {\n            if(starts[i]<ends[endsItr]) {\n                rooms++;\n            } else {\n                endsItr++;\n            }\n        }\n\n        return rooms;\n    }\n}\n",
    index: 193,
  },
  { title: "Stack", category: "leetcode", id: "stack", index: 194 },
  {
    title: "Binary Search Tree Iterator",
    category: "stack",
    id: "BinarySearchTreeIterator_stack",
    algorithm:
      "// Implement an iterator over a binary search tree (BST). Your iterator will be initialized with the root node of a BST.\n\n// Calling next() will return the next smallest number in the BST.\n\n// Note: next() and hasNext() should run in average O(1) time and uses O(h) memory, where h is the height of the tree.\n\n/**\n * Definition for binary tree\n * public class TreeNode {\n *     int val;\n *     TreeNode left;\n *     TreeNode right;\n *     TreeNode(int x) { val = x; }\n * }\n */\n\npublic class BinarySearchTreeIterator {\n    Stack<TreeNode> stack;\n\n    public BSTIterator(TreeNode root) {\n        stack = new Stack<TreeNode>();\n        \n        while(root != null) {\n            stack.push(root);\n            root = root.left;\n        }\n    }\n\n    /** @return whether we have a next smallest number */\n    public boolean hasNext() {\n        return stack.isEmpty() ? false : true;\n    }\n\n    /** @return the next smallest number */\n    public int next() {\n        TreeNode nextSmallest = stack.pop();\n        TreeNode addToStack = nextSmallest.right;\n        \n        while(addToStack != null) {\n            stack.add(addToStack);\n            addToStack = addToStack.left;\n        }\n        \n        return nextSmallest.val;\n    }\n}\n\n/**\n * Your BSTIterator will be called like this:\n * BSTIterator i = new BSTIterator(root);\n * while (i.hasNext()) v[f()] = i.next();\n */\n",
    index: 195,
  },
  {
    title: "Daily Temperatures",
    category: "stack",
    id: "DailyTemperatures_stack",
    algorithm:
      "//Given a list of daily temperatures, produce a list that, for each day in the input, tells you how many days you would have to wait until a warmer temperature. If there is no future day for which this is possible, put 0 instead.\n//\n//For example, given the list temperatures = [73, 74, 75, 71, 69, 72, 76, 73], your output should be [1, 1, 4, 2, 1, 1, 0, 0].\n//\n//Note: The length of temperatures will be in the range [1, 30000]. Each temperature will be an integer in the range [30, 100].\n\nclass DailyTemperatures {\n    public int[] dailyTemperatures(int[] temperatures) {\n        int[] result = new int[temperatures.length];\n        Stack<Integer> stack = new Stack<Integer>();\n        for(int i = 0; i < temperatures.length; i++) {\n            while(!stack.isEmpty() && temperatures[i] > temperatures[stack.peek()]) {\n                int index = stack.pop();\n                result[index] = i - index;\n            }\n            stack.push(i);\n        }\n        \n        return result;\n    }\n}\n",
    index: 196,
  },
  {
    title: "Decode String",
    category: "stack",
    id: "DecodeString_stack",
    algorithm:
      "// Given an encoded string, return it's decoded string.\n\n// The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times. Note that k is guaranteed to be a positive integer.\n\n// You may assume that the input string is always valid; No extra white spaces, square brackets are well-formed, etc.\n\n// Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, k. For example, there won't be input like 3a or 2[4].\n\npublic class DecodeString {\n    public String decodeString(String s) {\n        //declare empty string\n        String decoded = \"\";\n        \n        //initialize stack to hold counts\n        Stack<Integer> countStack = new Stack<Integer>();\n        \n        //initalize stack to hold decoded string\n        Stack<String> decodedStack = new Stack<String>();\n        \n        //initialize index to zero\n        int index = 0;\n        \n        //iterate through entire string\n        while(index < s.length()) {\n            //if the current character is numeric...\n            if(Character.isDigit(s.charAt(index))) {\n                int count = 0;\n                \n                //determine the number\n                while(Character.isDigit(s.charAt(index))) {\n                    count = 10 * count + (s.charAt(index) - '0');\n                    index++;\n                }\n                \n                //push the number onto the count stack\n                countStack.push(count);\n            } else if(s.charAt(index) == '[') {\n                //if the current character is an opening bracket\n                decodedStack.push(decoded);\n                decoded = \"\";\n                index++;\n            } else if(s.charAt(index) == ']') {\n                //if the current character is a closing bracket\n                StringBuilder temp = new StringBuilder(decodedStack.pop());\n                int repeatTimes = countStack.pop();\n                \n                for(int i = 0; i < repeatTimes; i++) {\n                    temp.append(decoded);\n                }\n                \n                decoded = temp.toString();\n                index++;\n            } else {\n                //otherwise, append the current character to the decoded string\n                decoded += s.charAt(index);\n                index++;\n            }\n        }\n        \n        //return the decoded string\n        return decoded;\n    }\n}\n",
    index: 197,
  },
  {
    title: "Exclusive Time Of Functions",
    category: "stack",
    id: "ExclusiveTimeOfFunctions_stack",
    algorithm:
      '//Given the running logs of n functions that are executed in a nonpreemptive single threaded CPU, find the exclusive time of these functions.\n\n//Each function has a unique id, start from 0 to n-1. A function may be called recursively or by another function.\n\n//A log is a string has this format : function_id:start_or_end:timestamp. For example, "0:start:0" means function 0 starts from the very beginning of time 0. "0:end:0" means function 0 ends to the very end of time 0.\n\n//Exclusive time of a function is defined as the time spent within this function, the time spent by calling other functions should not be considered as this function\'s exclusive time. You should return the exclusive time of each function sorted by their function id.\n\n//Example 1:\n//Input:\n//n = 2\n//logs = \n//["0:start:0",\n //"1:start:2",\n //"1:end:5",\n //"0:end:6"]\n//Output:[3, 4]\n//Explanation:\n//Function 0 starts at time 0, then it executes 2 units of time and reaches the end of time 1. \n//Now function 0 calls function 1, function 1 starts at time 2, executes 4 units of time and end at time 5.\n//Function 0 is running again at time 6, and also end at the time 6, thus executes 1 unit of time. \n//So function 0 totally execute 2 + 1 = 3 units of time, and function 1 totally execute 4 units of time.\n//Note:\n//Input logs will be sorted by timestamp, NOT log id.\n//Your output should be sorted by function id, which means the 0th element of your output corresponds to the exclusive time of function 0.\n//Two functions won\'t start or end at the same time.\n//Functions could be called recursively, and will always end.\n//1 <= n <= 100\n\nclass ExclusiveTimeOfFunctions {\n    public int[] exclusiveTime(int n, List<String> logs) {\n        Stack<Integer> stack = new Stack <Integer>();\n        int[] result = new int[n];\n        String[] current = logs.get(0).split(":");\n        stack.push(Integer.parseInt(current[0]));\n        int i = 1;\n        int previous = Integer.parseInt(current[2]);\n        while (i < logs.size()) {\n            current = logs.get(i).split(":");\n            if (current[1].equals("start")) {\n                if (!stack.isEmpty()) {\n                    result[stack.peek()] += Integer.parseInt(current[2]) - previous;\n                }\n                stack.push(Integer.parseInt(current[0]));\n                previous = Integer.parseInt(current[2]);\n            } else {\n                result[stack.peek()] += Integer.parseInt(current[2]) - previous + 1;\n                stack.pop();\n                previous = Integer.parseInt(current[2]) + 1;\n            }\n            i++;\n        }\n        return result;\n    }\n}\n\n',
    index: 198,
  },
  {
    title: "Flatten Nested List Iterator",
    category: "stack",
    id: "FlattenNestedListIterator_stack",
    algorithm:
      "// Given a nested list of integers, implement an iterator to flatten it.\n\n// Each element is either an integer, or a list -- whose elements may also be integers or other lists.\n\n// Example 1:\n// Given the list [[1,1],2,[1,1]],\n\n// By calling next repeatedly until hasNext returns false, the order of elements returned by next should be: [1,1,2,1,1].\n\n// Example 2:\n// Given the list [1,[4,[6]]],\n\n// By calling next repeatedly until hasNext returns false, the order of elements returned by next should be: [1,4,6].\n\n/**\n * // This is the interface that allows for creating nested lists.\n * // You should not implement it, or speculate about its implementation\n * public interface NestedInteger {\n *\n *     // @return true if this NestedInteger holds a single integer, rather than a nested list.\n *     public boolean isInteger();\n *\n *     // @return the single integer that this NestedInteger holds, if it holds a single integer\n *     // Return null if this NestedInteger holds a nested list\n *     public Integer getInteger();\n *\n *     // @return the nested list that this NestedInteger holds, if it holds a nested list\n *     // Return null if this NestedInteger holds a single integer\n *     public List<NestedInteger> getList();\n * }\n */\npublic class FlattenNestedListIterator implements Iterator<Integer> {\n    Stack<NestedInteger> stack = new Stack<NestedInteger>();\n\n    public NestedIterator(List<NestedInteger> nestedList) {\n        for(int i = nestedList.size() - 1; i >= 0; i--) {\n            stack.push(nestedList.get(i));\n        }\n    }\n\n    @Override\n    public Integer next() {\n        return stack.pop().getInteger();\n    }\n\n    @Override\n    public boolean hasNext() {\n        while(!stack.isEmpty()) {\n            NestedInteger current = stack.peek();\n\n            if(current.isInteger()) {\n                return true;\n            }\n\n            stack.pop();\n\n            for(int i = current.getList().size() - 1;  i >= 0; i--) {\n                stack.push(current.getList().get(i));\n            }\n        }\n        \n        return false;\n    }\n}\n\n/**\n * Your NestedIterator object will be instantiated and called as such:\n * NestedIterator i = new NestedIterator(nestedList);\n * while (i.hasNext()) v[f()] = i.next();\n */\n",
    index: 199,
  },
  {
    title: "Min Stack",
    category: "stack",
    id: "MinStack_stack",
    algorithm:
      "//Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.\n//push(x) -- Push element x onto stack.\n//pop() -- Removes the element on top of the stack.\n//top() -- Get the top element.\n//getMin() -- Retrieve the minimum element in the stack.\n\n/**\n * Your MinStack object will be instantiated and called as such:\n * MinStack obj = new MinStack();\n * obj.push(x);\n * obj.pop();\n * int param_3 = obj.top();\n * int param_4 = obj.getMin();\n */\nclass MinStack {\n    class Node {\n        int data;\n        int min;\n        Node next;\n        \n        public Node(int data, int min) {\n            this.data = data;\n            this.min = min;\n            this.next = null;\n        }\n    }\n    Node head;\n    \n    /** initialize your data structure here. */\n    public MinStack() {\n        \n    }\n    \n    public void push(int x) {\n        if(head == null) {\n            head = new Node(x, x);\n        } else {\n            Node newNode = new Node(x, Math.min(x, head.min));\n            newNode.next = head;\n            head = newNode;\n        }\n    }\n    \n    public void pop() {\n        head = head.next;\n    }\n    \n    public int top() {\n        return head.data;\n    }\n    \n    public int getMin() {\n        return head.min;\n    }\n}\n\n",
    index: 200,
  },
  {
    title: "Trapping Rain Water",
    category: "stack",
    id: "TrappingRainWater_stack",
    algorithm:
      "// Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it is able to trap after raining.\n\n// For example, \n// Given [0,1,0,2,1,0,1,3,2,1,2,1], return 6.\n\npublic class TrappingRainWater {\n    public int trap(int[] height) {\n        int water = 0;\n        \n        int leftIndex = 0;\n        int rightIndex = height.length - 1;\n        \n        int leftMax = 0;\n        int rightMax = 0;\n        \n        while(leftIndex <= rightIndex) {\n            leftMax = Math.max(leftMax, height[leftIndex]);\n            rightMax = Math.max(rightMax, height[rightIndex]);\n            \n            if(leftMax < rightMax) {\n                water += leftMax - height[leftIndex];\n                leftIndex++;\n            } else {\n                water += rightMax - height[rightIndex];\n                rightIndex--;\n            }\n        }\n        \n        return water;\n    }\n}\n\n",
    index: 201,
  },
  { title: "String", category: "leetcode", id: "string", index: 202 },
  {
    title: "Add Binary",
    category: "string",
    id: "AddBinary_string",
    algorithm:
      '// Given two binary strings, return their sum (also a binary string).\n\n// For example,\n// a = "11"\n// b = "1"\n// Return "100"\n\npublic class AddBinary {\n    public String addBinary(String a, String b) {\n        StringBuilder result = new StringBuilder();\n        \n        int carry = 0;\n        int i = a.length() - 1;\n        int j = b.length() - 1;\n        \n        while(i >= 0 || j >= 0) {\n            int sum = carry;\n\n            if(i >= 0) {\n                sum += a.charAt(i--) - \'0\';\n            }\n\n            if(j >= 0) {\n                sum += b.charAt(j--) - \'0\';\n            }\n\n            result.append(sum % 2);\n            carry = sum / 2;\n        }\n\n        if(carry != 0) {\n            result.append(carry);\n        }\n\n        return result.reverse().toString();\n    }\n}\n',
    index: 203,
  },
  {
    title: "Count And Say",
    category: "string",
    id: "CountAndSay_string",
    algorithm:
      '// The count-and-say sequence is the sequence of integers beginning as follows:\n// 1, 11, 21, 1211, 111221, ...\n\n// 1 is read off as "one 1" or 11.\n// 11 is read off as "two 1s" or 21.\n// 21 is read off as "one 2, then one 1" or 1211.\n// Given an integer n, generate the nth sequence.\n\n// Note: The sequence of integers will be represented as a string.\n\npublic class CountAndSay {\n    public String countAndSay(int n) {\n        String s = "1";\n\n        for(int i = 1; i < n; i++) {\n            s = helper(s);\n        }\n        \n        return s;\n    }\n    \n    public String helper(String s) {\n        StringBuilder sb = new StringBuilder();\n        char c = s.charAt(0);\n        int count = 1;\n        \n        for(int i = 1; i < s.length(); i++) {\n            if(s.charAt(i) == c) {\n                count++;\n            } else {\n                sb.append(count);\n                sb.append(c);\n                c = s.charAt(i);\n                count = 1;\n            }\n        }\n        \n        sb.append(count);\n        sb.append(c);\n\n        return sb.toString();\n    }\n}\n',
    index: 204,
  },
  {
    title: "Decode Ways",
    category: "string",
    id: "DecodeWays_string",
    algorithm:
      "// A message containing letters from A-Z is being encoded to numbers using the following mapping:\n\n// 'A' -> 1\n// 'B' -> 2\n// ...\n// 'Z' -> 26\n\n// Given an encoded message containing digits, determine the total number of ways to decode it.\n\n// For example,\n// Given encoded message \"12\", it could be decoded as \"AB\" (1 2) or \"L\" (12).\n\n// The number of ways decoding \"12\" is 2.\n\npublic class DecodeWays {\n    public int numDecodings(String s) {\n        int n = s.length();\n\n        if(n == 0) {\n            return 0;\n        }\n        \n        int[] dp = new int[n + 1];\n        dp[n] = 1;\n        dp[n - 1] = s.charAt(n - 1) != '0' ? 1 : 0;\n        \n        for(int i = n - 2; i >= 0; i--) {\n            if(s.charAt(i) == '0') {\n                continue;\n            } else {\n                dp[i] = (Integer.parseInt(s.substring(i, i + 2)) <= 26) ? dp[i + 1] + dp[i + 2] : dp[i + 1];\n            }\n        }\n        \n        return dp[0];\n    }\n}\n",
    index: 205,
  },
  {
    title: "Edit Distance",
    category: "string",
    id: "EditDistance_string",
    algorithm:
      "// Given two words word1 and word2, find the minimum number of steps required to convert word1 to word2. (each operation is counted as 1 step.)\n\n// You have the following 3 operations permitted on a word:\n\n// a) Insert a character\n// b) Delete a character\n// c) Replace a character\n\npublic class EditDistance {\n    public int minDistance(String word1, String word2) {\n        int m = word1.length();\n        int n = word2.length();\n        \n        int[][] dp = new int[m + 1][n + 1];\n\n        for(int i = 0; i <= m; i++) {\n            dp[i][0] = i;\n        }\n        \n        for(int i = 0; i <= n; i++) {\n            dp[0][i] = i;\n        }\n        \n        for(int i = 0; i < m; i++) {\n            for(int j = 0; j < n; j++) {\n                if(word1.charAt(i) == word2.charAt(j)) {\n                    dp[i + 1][j + 1] = dp[i][j];\n                } else {\n                    int a = dp[i][j];\n                    int b = dp[i][j + 1];\n                    int c = dp[i + 1][j];\n                    \n                    dp[i + 1][j + 1] = Math.min(a, Math.min(b, c));\n                    dp[i + 1][j + 1]++;\n                }\n            }\n        }\n        \n        return dp[m][n];\n    }\n}\n",
    index: 206,
  },
  {
    title: "First Unique Character In A String",
    category: "string",
    id: "FirstUniqueCharacterInAString_string",
    algorithm:
      '//Given a string, find the first non-repeating character in it and return it\'s index. If it doesn\'t exist, return -1.\n//\n//Examples:\n//\n//s = "leetcode"\n//return 0.\n//\n//s = "loveleetcode",\n//return 2.\n//Note: You may assume the string contain only lowercase letters.\n\nclass FirstUniqueCharacterInAString {\n    public int firstUniqChar(String s) {\n        HashMap<Character, Integer> characters = new HashMap<Character, Integer>();\n        for(int i = 0; i < s.length(); i++) {\n            char current = s.charAt(i);\n            if(characters.containsKey(current)) {\n                characters.put(current, -1);\n            } else {\n                characters.put(current, i);\n            }\n        }\n        \n        int min = Integer.MAX_VALUE;\n        for(char c: characters.keySet()) {\n            if(characters.get(c) > -1 && characters.get(c) < min) {\n                min = characters.get(c);\n            }\n        }\n        \n        return min == Integer.MAX_VALUE ? -1 : min;\n        \n    }\n}\n',
    index: 207,
  },
  {
    title: "Generate Parentheses",
    category: "string",
    id: "GenerateParentheses_string",
    algorithm:
      '//Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.\n//\n//For example, given n = 3, a solution set is:\n//\n//[\n  //"((()))",\n  //"(()())",\n  //"(())()",\n  //"()(())",\n  //"()()()"\n//]\n\nclass GenerateParentheses {\n    public List<String> generateParenthesis(int n) {\n        List<String> result = new ArrayList<String>();\n        generateParenthesisRecursive(result, "", 0, 0, n);\n        \n        return result;\n    }\n    \n    public void generateParenthesisRecursive(List<String> result, String current, int open, int close, int n) {\n        if(current.length() == n * 2) {\n            result.add(current);\n            return;\n        }\n        \n        if(open < n) {\n            generateParenthesisRecursive(result, current + "(", open + 1, close, n);\n        }\n        \n        if(close < open) {\n            generateParenthesisRecursive(result, current + ")", open, close + 1, n);\n        }\n    }\n}\n',
    index: 208,
  },
  {
    title: "Integer To English Words",
    category: "string",
    id: "IntegerToEnglishWords_string",
    algorithm:
      '// Convert a non-negative integer to its english words representation. Given input is guaranteed to be less than 231 - 1.\n\n// For example,\n\n// 123 -> "One Hundred Twenty Three"\n// 12345 -> "Twelve Thousand Three Hundred Forty Five"\n// 1234567 -> "One Million Two Hundred Thirty Four Thousand Five Hundred Sixty Seven"\n\npublic class IntegerToEnglishWords {\n    private final String[] LESS_THAN_20 = { "", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen" };\n    private final String[] TENS = { "", "Ten", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety" };\n    private final String[] THOUSANDS = { "", "Thousand", "Million", "Billion" };\n    \n    public String numberToWords(int num) {\n        if(num == 0) {\n            return "Zero";\n        }\n        \n        int i = 0;\n        String words = "";\n        \n        while(num > 0) {\n            if(num % 1000 != 0) {\n                words = helper(num % 1000) + THOUSANDS[i] + " " + words;\n            }\n            \n            num /= 1000;\n            i++;\n        }\n        \n        return words.trim();\n    }\n    \n    private String helper(int num) {\n        if(num == 0) {\n            return "";\n        } else if(num < 20) {\n            return LESS_THAN_20[num] + " ";\n        } else if(num < 100) {\n            return TENS[num / 10] + " " + helper(num % 10);\n        } else {\n            return LESS_THAN_20[num / 100] + " Hundred " + helper(num % 100);\n        }\n    }\n}\n',
    index: 209,
  },
  {
    title: "Judge Route Circle",
    category: "string",
    id: "JudgeRouteCircle_string",
    algorithm:
      "//Initially, there is a Robot at position (0, 0). Given a sequence of its moves, judge if this robot makes a circle, which means it moves back to the original place.\n//\n//The move sequence is represented by a string. And each move is represent by a character. The valid robot moves are R (Right), L (Left), U (Up) and D (down). The output should be true or false representing whether the robot makes a circle.\n//\n//Example 1:\n//Input: \"UD\"\n//Output: true\n//Example 2:\n//Input: \"LL\"\n//Output: false\n\nclass JudgeRouteCircle {\n    public boolean judgeCircle(String moves) {\n        int UD = 0;\n        int LR = 0;\n        for(int i = 0; i < moves.length(); i++) {\n            if(moves.charAt(i) == 'U') {\n                UD++;\n            } else if(moves.charAt(i) == 'D') {\n                UD--;\n            } else if(moves.charAt(i) == 'L') {\n                LR++;\n            } else if(moves.charAt(i) == 'R') {\n                LR--;\n            }\n        }\n        \n        return UD == 0 && LR == 0;\n    }\n}\n",
    index: 210,
  },
  {
    title: "Longest Common Prefix",
    category: "string",
    id: "LongestCommonPrefix_string",
    algorithm:
      'class LongestCommonPrefix {\n    public String longestCommonPrefix(String[] strs) {\n        if(strs == null || strs.length == 0) {\n            return "";\n        }\n        \n        String s = strs[0];\n        for(int i = 0; i < s.length(); i++) {\n            char current = s.charAt(i);\n            for(int j = 1; j < strs.length; j++) {\n                if(i >= strs[j].length() || strs[j].charAt(i) != current) {\n                    return s.substring(0, i);\n                }\n            }\n        }\n        \n        return s;\n    }\n}\n',
    index: 211,
  },
  {
    title: "Longest Palindrome",
    category: "string",
    id: "LongestPalindrome_string",
    algorithm:
      "public class LongestPalindrome {\n    public int longestPalindrome(String s) {\n        HashMap<Character, Integer> map = new HashMap<Character, Integer>();\n        \n        int count = 0;\n        \n        for(int i = 0; i < s.length(); i++) {\n            if(!map.containsKey(s.charAt(i))) {\n                map.put(s.charAt(i), (int)(s.charAt(i)));\n            } else {\n                map.remove(s.charAt(i));\n                count++;\n            }\n        }\n        \n        return map.isEmpty() ? count * 2 : count * 2 + 1;\n    }\n}\n",
    index: 212,
  },
  {
    title: "Longest Palindromic Substring",
    category: "string",
    id: "LongestPalindromicSubstring_string",
    algorithm:
      '//Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.\n\n//Example:\n//Input: "babad"\n//Output: "bab"\n\n//Note: "aba" is also a valid answer.\n\n//Example:\n//Input: "cbbd"\n//Output: "bb"\n\nclass LongestPalindromicSubstring {\n    public String longestPalindrome(String s) {\n        if(s == null || s.length() == 0) {\n            return "";\n        }\n        \n        String longestPalindromicSubstring = "";\n        for(int i = 0; i < s.length(); i++) {\n            for(int j = i + 1; j <= s.length(); j++) {\n                if(j - i > longestPalindromicSubstring.length() && isPalindrome(s.substring(i, j))) {\n                    longestPalindromicSubstring = s.substring(i, j);\n                }\n            }\n        }\n        \n        return longestPalindromicSubstring;\n    }\n    \n    public boolean isPalindrome(String s) {\n        int i = 0;\n        int j = s.length() - 1;\n        while(i <= j) {\n            if(s.charAt(i++) != s.charAt(j--)) {\n                return false;\n            }\n        }\n        \n        return true;\n    }\n}\n',
    index: 213,
  },
  {
    title: "Longest Substring With At Most K Distinct Characters",
    category: "string",
    id: "LongestSubstringWithAtMostKDistinctCharacters_string",
    algorithm:
      '// Given a string, find the length of the longest substring T that contains at most k distinct characters.\n\n// For example, Given s = “eceba” and k = 2,\n\n// T is "ece" which its length is 3.\n\npublic class LongestSubstringWithAtMostKDistinctCharacters {\n    public int lengthOfLongestSubstringKDistinct(String s, int k) {\n        \n    int[] count = new int[256];     // there are 256 ASCII characters in the world\n    \n    int i = 0;  // i will be behind j\n    int num = 0;\n    int res = 0;\n    \n    for (int j = 0; j < s.length(); j++) {\n        if (count[s.charAt(j)] == 0) {    // if count[s.charAt(j)] == 0, we know that it is a distinct character\n            num++;\n        }\n        \n        count[s.charAt(j)]++;\n\n        while (num > k && i < s.length()) {     // sliding window\n            count[s.charAt(i)]--;\n\n            if (count[s.charAt(i)] == 0){ \n                num--;\n            }\n\n            i++;\n        }\n\n        res = Math.max(res, j - i + 1);\n    }\n\n    return res;\n    }\n}\n',
    index: 214,
  },
  {
    title: "Minimum Window Substring",
    category: "string",
    id: "MinimumWindowSubstring_string",
    algorithm:
      '// Given a string S and a string T, find the minimum window in S which will contain all the characters in T in complexity O(n).\n\n// For example,\n// S = "ADOBECODEBANC"\n// T = "ABC"\n// Minimum window is "BANC".\n\n// Note:\n    // If there is no such window in S that covers all characters in T, return the empty string "".\n    // If there are multiple such windows, you are guaranteed that there will always be only one unique minimum window in S.\n\npublic class MinimumWindowSubstring {\n    public String minWindow(String s, String t) {\n        HashMap<Character, Integer> map = new HashMap<>();\n        \n        for(char c : s.toCharArray()) {\n            map.put(c, 0);\n        }\n        \n        for(char c : t.toCharArray()) {\n            if(map.containsKey(c)) {\n                map.put(c, map.get(c)+ 1);\n            } else {\n                return "";\n            }\n        }\n        \n        int start = 0;\n        int end = 0;\n        int minStart = 0;\n        int minLength = Integer.MAX_VALUE;\n        int counter = t.length();\n        \n        while(end < s.length()) {\n            char c1 = s.charAt(end);\n            \n            if(map.get(c1) > 0) {\n                counter--;\n            }\n            \n            map.put(c1, map.get(c1) - 1);\n            end++;\n            \n            while(counter == 0) {\n                if(minLength > end - start) {\n                    minLength = end - start;\n                    minStart = start;\n                }\n                \n                char c2 = s.charAt(start);\n                map.put(c2, map.get(c2) + 1);\n                \n                if(map.get(c2) > 0) {\n                    counter++;\n                }\n                \n                start++;\n            }\n        }\n        \n        return minLength == Integer.MAX_VALUE ? "" : s.substring(minStart, minStart + minLength);\n    }\n}\n',
    index: 215,
  },
  {
    title: "Multiply Strings",
    category: "string",
    id: "MultiplyStrings_string",
    algorithm:
      "// Given two non-negative integers num1 and num2 represented as strings, return the product of num1 and num2.\n\n// Note:\n\n    // The length of both num1 and num2 is < 110.\n    // Both num1 and num2 contains only digits 0-9.\n    // Both num1 and num2 does not contain any leading zero.\n    // You must not use any built-in BigInteger library or convert the inputs to integer directly.\n\npublic class MultiplyStrings {\n    public String multiply(String num1, String num2) {\n        int m = num1.length();\n        int n = num2.length();\n        int[] pos = new int[m + n];\n        \n        for(int i = m - 1; i >= 0; i--) {\n            for(int j = n - 1; j >= 0; j--) {\n                int mul = (num1.charAt(i) - '0') * (num2.charAt(j) - '0');\n                int p1 = i + j;\n                int p2 = i + j + 1;\n                int sum = mul + pos[p2];\n                \n                pos[p1] += sum / 10;\n                pos[p2] = (sum) % 10;\n            }\n        }\n        \n        StringBuilder sb = new StringBuilder();\n\n        for(int p : pos) if(!(sb.length() == 0 && p == 0)) {\n            sb.append(p);\n        }\n        \n        return sb.length() == 0 ? \"0\" : sb.toString();\n    }\n}\n",
    index: 216,
  },
  {
    title: "One Edit Distance",
    category: "string",
    id: "OneEditDistance_string",
    algorithm:
      "// Given two strings S and T, determine if they are both one edit distance apart.\n\npublic class OneEditDistance {\n    public boolean isOneEditDistance(String s, String t) {\n        //iterate through the length of the smaller string\n        for(int i = 0; i < Math.min(s.length(), t.length()); i++) {\n            //if the current characters of the two strings are not equal\n            if(s.charAt(i) != t.charAt(i)) {\n                //return true if the remainder of the two strings are equal, false otherwise\n                if(s.length() == t.length()) {\n                    return s.substring(i + 1).equals(t.substring(i + 1));\n                } else if(s.length() < t.length()) {\n                    //return true if the strings would be the same if you deleted a character from string t\n                    return s.substring(i).equals(t.substring(i + 1));\n                    \n                } else {\n                    //return true if the strings would be the same if you deleted a character from string s\n                    return t.substring(i).equals(s.substring(i + 1));\n                }\n            }\n        }\n        \n        //if all characters match for the length of the two strings check if the two strings' lengths do not differ by more than 1\n        return Math.abs(s.length() - t.length()) == 1;\n    }\n}\n",
    index: 217,
  },
  {
    title: "Palindrome Permutation",
    category: "string",
    id: "PalindromePermutation_string",
    algorithm:
      "public class PalindromePermutation {\n    public boolean canPermutePalindrome(String s) {\n        char[] characters = new char[256];\n        \n        for(int i = 0; i < s.length(); i++) {\n            characters[s.charAt(i)]++;\n        }\n        \n        int oddCount = 0;\n        \n        for(int i = 0; i < characters.length; i++) {\n            if(!(characters[i] % 2 == 0)) {\n                oddCount++;\n                \n                if(oddCount > 1) {\n                    return false;\n                }\n            }\n        }\n        \n        return true;\n    }\n}\n",
    index: 218,
  },
  {
    title: "Palindromic Substrings",
    category: "string",
    id: "PalindromicSubstrings_string",
    algorithm:
      '//Given a string, your task is to count how many palindromic substrings in this string.\n//The substrings with different start indexes or end indexes are counted as different substrings \n//even they consist of same characters.\n\n//Example 1:\n//Input: "abc"\n//Output: 3\n//Explanation: Three palindromic strings: "a", "b", "c".\n//Example 2:\n//Input: "aaa"\n//Output: 6\n//Explanation: Six palindromic strings: "a", "a", "a", "aa", "aa", "aaa".\n//Note:\n//The input string length won\'t exceed 1000.\n\nclass PalindromicSubstrings {\n    int result = 0;\n    public int countSubstrings(String s) {\n        if(s == null || s.length() == 0) {\n            return 0;\n        }\n        \n        for(int i = 0; i < s.length(); i++) {\n            extendPalindrome(s, i, i);\n            extendPalindrome(s, i, i + 1);\n        }\n        \n        return result;\n    }\n    \n    public void extendPalindrome(String s, int left, int right) {\n        while(left >= 0 && right < s.length() && s.charAt(left) == s.charAt(right)) {\n            result++;\n            left--;\n            right++;\n        }\n    }\n}\n',
    index: 219,
  },
  {
    title: "Reverse Vowels Of A String",
    category: "string",
    id: "ReverseVowelsOfAString_string",
    algorithm:
      '// Write a function that takes a string as input and reverse only the vowels of a string.\n\n// Example 1:\n// Given s = "hello", return "holle".\n\n// Example 2:\n// Given s = "leetcode", return "leotcede".\n\n// Note:\n// The vowels does not include the letter "y".\n\npublic class ReverseVowelsOfAString {\n    public String reverseVowels(String s) {\n        if(s == null || s.length() == 0) {\n            return s;\n        }\n        \n        String vowels = "aeiouAEIOU";\n        \n        char[] chars = s.toCharArray();\n        \n        int start = 0;\n        int end = s.length() - 1;\n        \n        while(start < end) {\n            while(start < end && !vowels.contains(chars[start] + "")) {\n                start++;\n            }\n            \n            while(start < end && !vowels.contains(chars[end] + "")) {\n                end--;\n            }\n            \n            char temp = chars[start];\n            chars[start] = chars[end];\n            chars[end] = temp;\n            \n            start++;\n            end--;\n        }\n        \n        return new String(chars);\n    }\n}\n',
    index: 220,
  },
  {
    title: "Reverse Words In A String",
    category: "string",
    id: "ReverseWordsInAString_string",
    algorithm:
      '//Given an input string, reverse the string word by word.\n//For example,\n//Given s = "the sky is blue",\n//return "blue is sky the".\n\npublic class ReverseWordsInAString {\n    public String reverseWords(String s) {\n        String[] words = s.trim().split("\\\\s+");\n        String result = "";\n        for(int i = words.length - 1; i > 0; i--) {\n            result += words[i] + " ";\n        }\n        \n        return result + words[0];\n    }\n}\n',
    index: 221,
  },
  {
    title: "Roman To Integer",
    category: "string",
    id: "RomanToInteger_string",
    algorithm:
      "// Given a roman numeral, convert it to an integer.\n\n// Input is guaranteed to be within the range from 1 to 3999\n\npublic class RomanToInteger {\n    public int romanToInt(String s) {\n        HashMap<Character, Integer> map = new HashMap<Character, Integer>();\n        \n        map.put('I', 1);\n        map.put('V', 5);\n        map.put('X', 10);\n        map.put('L', 50);\n        map.put('C', 100);\n        map.put('D', 500);\n        map.put('M', 1000);\n        \n        int total = 0;\n\n        for(int i = 0; i < s.length() - 1; i++) {\n            if(map.get(s.charAt(i)) < map.get(s.charAt(i + 1))) {\n                total -= map.get(s.charAt(i));\n            } else {\n                total += map.get(s.charAt(i));\n            }\n        }\n        \n        total += map.get(s.charAt(s.length() - 1));\n        \n        return total;\n    }\n}\n",
    index: 222,
  },
  {
    title: "Valid Palindrome",
    category: "string",
    id: "ValidPalindrome_string",
    algorithm:
      "public class ValidPalindrome {\n    public boolean isPalindrome(String s) {\n        int left = 0;\n        int right = s.length() - 1;\n        \n        while(left < right) {\n            while(!Character.isLetterOrDigit(s.charAt(left)) && left < right) {\n                left++;\n            }\n\n            while(!Character.isLetterOrDigit(s.charAt(right)) && right > left) {\n                right--;\n            }\n            \n            if(Character.toLowerCase(s.charAt(left)) != Character.toLowerCase(s.charAt(right))) {\n                return false;\n            }\n            \n            left++;\n            right--;\n        }\n        \n        return true;\n    }\n}\n",
    index: 223,
  },
  {
    title: "Valid Parentheses",
    category: "string",
    id: "ValidParentheses_string",
    algorithm:
      "// Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.\n\n// The brackets must close in the correct order, \"()\" and \"()[]{}\" are all valid but \"(]\" and \"([)]\" are not.\n\npublic class ValidParentheses {\n    public boolean isValid(String s) {\n        if(s.length() % 2 == 1) {\n            return false;\n        }\n        \n        Stack<Character> stack = new Stack<Character>();\n        \n        for(int i = 0; i < s.length(); i++) {\n            if(s.charAt(i) == '(' || s.charAt(i) == '[' || s.charAt(i) == '{') {\n                stack.push(s.charAt(i));\n            } else if(s.charAt(i) == ')' && !stack.isEmpty() && stack.peek() == ')') {\n                stack.pop();\n            } else if(s.charAt(i) == ']' && !stack.isEmpty() && stack.peek() == ']') {\n                stack.pop();\n            } else if(s.charAt(i) == '}' && !stack.isEmpty() && stack.peek() == '}') {\n                stack.pop();\n            } else {\n                return false;\n            }\n        }\n        \n        return stack.isEmpty();\n    }\n}\n",
    index: 224,
  },
  { title: "Tree", category: "leetcode", id: "tree", index: 225 },
  {
    title: "Binary Tree Maximum Path Sum",
    category: "tree",
    id: "BinaryTreeMaximumPathSum_tree",
    algorithm:
      "// Given a binary tree, find the maximum path sum.\n\n// For this problem, a path is defined as any sequence of nodes from some starting node to any node in the tree along the parent-child connections. The path must contain at least one node and does not need to go through the root.\n\n// For example:\n// Given the below binary tree,\n\n//        1\n//       / \\\n//      2   3\n// Return 6.\n\n/**\n * Definition for a binary tree node.\n * public class TreeNode {\n *     int val;\n *     TreeNode left;\n *     TreeNode right;\n *     TreeNode(int x) { val = x; }\n * }\n */\npublic class BinaryTreeMaximumPathSum {\n    int max = Integer.MIN_VALUE;\n    \n    public int maxPathSum(TreeNode root) {\n        maxPathSumRecursive(root);\n        return max;\n    }\n    \n    private int maxPathSumRecursive(TreeNode root) {\n        if(root == null) {\n            return 0;\n        }\n        \n        int left = Math.max(maxPathSumRecursive(root.left), 0);\n        int right = Math.max(maxPathSumRecursive(root.right), 0);\n        \n        max = Math.max(max, root.val + left + right);\n        \n        return root.val + Math.max(left, right);\n    }\n}\n",
    index: 226,
  },
  {
    title: "Binary Tree Paths",
    category: "tree",
    id: "BinaryTreePaths_tree",
    algorithm:
      '// Given a binary tree, return all root-to-leaf paths.\n\n// For example, given the following binary tree:\n\n//    1\n//  /   \\\n// 2     3\n//  \\\n//   5\n// All root-to-leaf paths are:\n\n// ["1->2->5", "1->3"]\n\n/**\n * Definition for a binary tree node.\n * public class TreeNode {\n *     int val;\n *     TreeNode left;\n *     TreeNode right;\n *     TreeNode(int x) { val = x; }\n * }\n */\npublic class BinaryTreePaths {\n    public List<String> binaryTreePaths(TreeNode root) {\n        List<String> result = new ArrayList<String>();\n\n        if(root == null) {\n            return result;\n        }\n        \n        helper(new String(), root, result);\n        \n        return result;\n    }\n    \n    public void helper(String current, TreeNode root, List<String> result) {\n        if(root.left == null && root.right == null) {\n            result.add(current + root.val);\n        }\n\n        if(root.left != null) {\n            helper(current + root.val + "->", root.left, result);\n        }\n\n        if(root.right != null) {\n            helper(current + root.val + "->", root.right, result);\n        }\n    }\n}\n',
    index: 227,
  },
  {
    title: "Inorder Successor In B S T",
    category: "tree",
    id: "InorderSuccessorInBST_tree",
    algorithm:
      "// Given a binary search tree and a node in it, find the in-order successor of that node in the BST.\n\n// Note: If the given node has no in-order successor in the tree, return null.\n\n/**\n * Definition for a binary tree node.\n * public class TreeNode {\n *     int val;\n *     TreeNode left;\n *     TreeNode right;\n *     TreeNode(int x) { val = x; }\n * }\n */\npublic class InorderSuccessorInBST {\n    public TreeNode inorderSuccessor(TreeNode root, TreeNode p) {\n        TreeNode successor = null;\n        \n        while(root != null) {\n            if(p.val < root.val) {\n                successor = root;\n                root = root.left;\n            } else {\n                root = root.right;\n            }\n        }\n        \n        return successor;\n    }\n}\n",
    index: 228,
  },
  {
    title: "Invert Binary Tree",
    category: "tree",
    id: "InvertBinaryTree_tree",
    algorithm:
      "// Invert a binary tree.\n\n//      4\n//    /   \\\n//   2     7\n//  / \\   / \\\n// 1   3 6   9\n\n// to\n\n//      4\n//    /   \\\n//   7     2\n//  / \\   / \\\n// 9   6 3   1\n\n/**\n * Definition for a binary tree node.\n * public class TreeNode {\n *     int val;\n *     TreeNode left;\n *     TreeNode right;\n *     TreeNode(int x) { val = x; }\n * }\n */\npublic class InvertBinaryTree {\n    public TreeNode invertTree(TreeNode root) {\n        if(root == null) {\n            return root;\n        }\n        \n        TreeNode temp = root.left;\n        root.left = invertTree(root.right);\n        root.right = invertTree(temp);\n        \n        return root;\n    }\n}\n",
    index: 229,
  },
  {
    title: "Lowest Common Ancestor Of A Binary Tree",
    category: "tree",
    id: "LowestCommonAncestorOfABinaryTree_tree",
    algorithm:
      "// Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.\n\n// According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes v and w as the lowest node in T that has both v and w as descendants (where we allow a node to be a descendant of itself).”\n\n//         _______3______\n//        /              \\\n//     ___5__          ___1__\n//    /      \\        /      \\\n//    6      _2       0       8\n//          /  \\\n//          7   4\n// For example, the lowest common ancestor (LCA) of nodes 5 and 1 is 3. Another example is LCA of nodes 5 and 4 is 5, since a node can be a descendant of itself according to the LCA definition.\n\n/**\n * Definition for a binary tree node.\n * public class TreeNode {\n *     int val;\n *     TreeNode left;\n *     TreeNode right;\n *     TreeNode(int x) { val = x; }\n * }\n */\npublic class LowestCommonAncestorOfABinaryTree {\n    public TreeNode lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {\n        if(root == null || root == p || root == q) {\n            return root;\n        }\n        \n        TreeNode left = lowestCommonAncestor(root.left, p, q);\n        TreeNode right = lowestCommonAncestor(root.right, p, q);\n        \n        if(left != null && right != null) {\n            return root;\n        }\n        \n        return left == null ? right : left;\n    }\n}\n",
    index: 230,
  },
  {
    title: "Sum Of Left Leaves",
    category: "tree",
    id: "SumOfLeftLeaves_tree",
    algorithm:
      "// Find the sum of all left leaves in a given binary tree.\n\n// Example:\n\n//     3\n//    / \\\n//   9  20\n//     /  \\\n//    15   7\n\n// There are two left leaves in the binary tree, with values 9 and 15 respectively. Return 24.\n\n/**\n * Definition for a binary tree node.\n * public class TreeNode {\n *     int val;\n *     TreeNode left;\n *     TreeNode right;\n *     TreeNode(int x) { val = x; }\n * }\n */\npublic class SumOfLeftLeaves {\n    public int sumOfLeftLeaves(TreeNode root) {\n        if(root == null) {\n            return 0;\n        }\n        \n        int total = 0;\n        \n        if(root.left != null) {\n            if(root.left.left == null && root.left.right == null) {\n                total += root.left.val;\n            } else {\n                total += sumOfLeftLeaves(root.left);\n            }\n        }\n        \n        total += sumOfLeftLeaves(root.right);\n        \n        return total;\n    }\n}\n",
    index: 231,
  },
  {
    title: "Trim A Binary Search Tree",
    category: "tree",
    id: "TrimABinarySearchTree_tree",
    algorithm:
      "//Given a binary search tree and the lowest and highest boundaries as L and R, trim the \n//tree so that all its elements lies in [L, R] (R >= L). You might need to change the root \n//of the tree, so the result should return the new root of the trimmed binary search tree.\n\n/**\n * Definition for a binary tree node.\n * public class TreeNode {\n *     int val;\n *     TreeNode left;\n *     TreeNode right;\n *     TreeNode(int x) { val = x; }\n * }\n */\nclass TrimABinarySearchTree {\n    public TreeNode trimBST(TreeNode root, int L, int R) {\n        if(root == null) {\n            return root;\n        }\n        if(root.val < L) {\n            return trimBST(root.right, L, R);\n        }\n        if(root.val > R) {\n            return trimBST(root.left, L, R);\n        }\n        \n        root.left = trimBST(root.left, L, R);\n        root.right = trimBST(root.right, L, R);\n\n        return root;\n    }\n}\n",
    index: 232,
  },
  {
    title: "Validate Binary Search Tree",
    category: "tree",
    id: "ValidateBinarySearchTree_tree",
    algorithm:
      "// Given a binary tree, determine if it is a valid binary search tree (BST).\n\n// Assume a BST is defined as follows:\n\n// The left subtree of a node contains only nodes with keys less than the node's key.\n// The right subtree of a node contains only nodes with keys greater than the node's key.\n// Both the left and right subtrees must also be binary search trees.\n// Example 1:\n//     2\n//    / \\\n//   1   3\n// Binary tree [2,1,3], return true.\n// Example 2:\n//     1\n//    / \\\n//   2   3\n// Binary tree [1,2,3], return false.\n\n/**\n * Definition for a binary tree node.\n * public class TreeNode {\n *     int val;\n *     TreeNode left;\n *     TreeNode right;\n *     TreeNode(int x) { val = x; }\n * }\n */\npublic class ValidateBinarySearchTree {\n    public boolean isValidBST(TreeNode root) {\n        if(root == null) {\n            return true;\n        }\n        \n        return validBSTRecursive(root, Long.MIN_VALUE, Long.MAX_VALUE);\n    }\n    \n    public boolean validBSTRecursive(TreeNode root, long minValue, long maxValue) {\n        if(root == null) {\n            return true;\n        } else if(root.val >= maxValue || root.val <= minValue) {\n            return false;\n        } else {\n            return validBSTRecursive(root.left, minValue, root.val) && validBSTRecursive(root.right, root.val, maxValue);\n        }\n    }\n}\n",
    index: 233,
  },
  { title: "Trie", category: "leetcode", id: "trie", index: 234 },
  {
    title: "Add And Search Word Data Structure Design",
    category: "trie",
    id: "AddAndSearchWordDataStructureDesign_trie",
    algorithm:
      '// Design a data structure that supports the following two operations:\n\n// void addWord(word)\n// bool search(word)\n// search(word) can search a literal word or a regular expression string containing only letters a-z or .. A . means it can represent any one letter.\n\n// For example:\n\n// addWord("bad")\n// addWord("dad")\n// addWord("mad")\n// search("pad") -> false\n// search("bad") -> true\n// search(".ad") -> true\n// search("b..") -> true\n\n// Note:\n    // You may assume that all words are consist of lowercase letters a-z.\n\npublic class AddAndSearchWordDataStructure {\n    public class TrieNode {\n        public TrieNode[] children = new TrieNode[26];\n        public String item = "";\n    }\n    \n    private TrieNode root = new TrieNode();\n\n    public void addWord(String word) {\n        TrieNode node = root;\n\n        for (char c : word.toCharArray()) {\n            if (node.children[c - \'a\'] == null) {\n                node.children[c - \'a\'] = new TrieNode();\n            }\n\n            node = node.children[c - \'a\'];\n        }\n\n        node.item = word;\n    }\n\n    public boolean search(String word) {\n        return match(word.toCharArray(), 0, root);\n    }\n    \n    private boolean match(char[] chs, int k, TrieNode node) {\n        if (k == chs.length) {\n            return !node.item.equals(""); \n        }\n\n        if (chs[k] != \'.\') {\n            return node.children[chs[k] - \'a\'] != null && match(chs, k + 1, node.children[chs[k] - \'a\']);\n        } else {\n            for (int i = 0; i < node.children.length; i++) {\n                if (node.children[i] != null) {\n                    if (match(chs, k + 1, node.children[i])) {\n                        return true;\n                    }\n                }\n            }\n        }\n\n        return false;\n    }\n}\n',
    index: 235,
  },
  {
    title: "Implement Trie",
    category: "trie",
    id: "ImplementTrie_trie",
    algorithm:
      '// Implement a trie with insert, search, and startsWith methods.\n\n// Note:\n// You may assume that all inputs are consist of lowercase letters a-z.\n\n// Your Trie object will be instantiated and called as such:\n// Trie trie = new Trie();\n// trie.insert("somestring");\n// trie.search("key");\n\nclass TrieNode {\n\n    HashMap<Character, TrieNode> map;\n    char character;\n    boolean last;\n    \n    // Initialize your data structure here.\n    public TrieNode(char character) {\n        \n        this.map = new HashMap<Character, TrieNode>();\n        this.character = character;\n        this.last = false;\n        \n    }\n\n}\n\npublic class ImplementTrie {\n    private TrieNode root;\n\n    public Trie() {\n        root = new TrieNode(\' \');\n    }\n\n    // Inserts a word into the trie.\n    public void insert(String word) {\n        TrieNode current = root;\n            \n        for(char c : word.toCharArray()) {\n            if(!current.map.containsKey(c)) {\n                current.map.put(c, new TrieNode(c));\n            }\n            \n            current = current.map.get(c);\n        }\n        \n        current.last = true;\n    }\n\n    // Returns if the word is in the trie.\n    public boolean search(String word) {\n        TrieNode current = root;\n        \n        for(char c : word.toCharArray()) {\n            if(!current.map.containsKey(c)) {\n                return false;\n            }\n            \n            current = current.map.get(c);\n        }\n        \n        if(current.last == true) {\n            return true;\n        } else {\n            return false;\n        }\n    }\n\n    // Returns if there is any word in the trie\n    // that starts with the given prefix.\n    public boolean startsWith(String prefix) {\n        TrieNode current = root;\n        \n        for(char c : prefix.toCharArray()) {\n            if(!current.map.containsKey(c)) {\n                return false;\n            }\n            \n            current = current.map.get(c);\n        }\n        \n        return true;\n    }\n}\n\n',
    index: 236,
  },
  {
    title: "Word Squares",
    category: "trie",
    id: "WordSquares_trie",
    algorithm:
      '// Given a set of words (without duplicates), find all word squares you can build from them.\n\n// A sequence of words forms a valid word square if the kth row and column read the exact same string, where 0 ≤ k < max(numRows, numColumns).\n\n// For example, the word sequence ["ball","area","lead","lady"] forms a word square because each word reads the same both horizontally and vertically.\n\n// b a l l\n// a r e a\n// l e a d\n// l a d y\n\n// Note:\n    // There are at least 1 and at most 1000 words.\n    // All words will have the exact same length.\n    // Word length is at least 1 and at most 5.\n    // Each word contains only lowercase English alphabet a-z.\n\npublic class WordSquares {\n    public List<List<String>> wordSquares(String[] words) {\n        List<List<String>> ret = new ArrayList<List<String>>();\n\n        if(words.length==0 || words[0].length()==0) {\n            return ret;\n        }\n\n        Map<String, Set<String>> map = new HashMap<>();\n\n        int squareLen = words[0].length();\n\n        // create all prefix\n        for(int i=0;i<words.length;i++){\n            for(int j=-1;j<words[0].length();j++){\n                if(!map.containsKey(words[i].substring(0, j+1))) {\n                    map.put(words[i].substring(0, j+1), new HashSet<String>());\n                }\n\n                map.get(words[i].substring(0, j+1)).add(words[i]);\n            }\n        }\n\n        helper(ret, new ArrayList<String>(), 0, squareLen, map);\n\n        return ret;\n    }\n\n    public void helper(List<List<String>> ret, List<String> cur, int matched, int total, Map<String, Set<String>> map){\n        if(matched == total) {\n            ret.add(new ArrayList<String>(cur));\n            return;\n        }\n\n        // build search string\n        StringBuilder sb = new StringBuilder();\n\n        for(int i=0;i<=matched-1;i++) {\n            sb.append(cur.get(i).charAt(matched));\n        }\n\n        // bachtracking\n        Set<String> cand = map.get(sb.toString());\n\n        if(cand==null) {\n            return;\n        }\n\n        for(String str:cand){\n            cur.add(str);\n            helper(ret, cur, matched+1, total, map);\n            cur.remove(cur.size()-1);\n        }\n    }\n}\n',
    index: 237,
  },
  {
    title: "Two Pointers",
    category: "leetcode",
    id: "two-pointers",
    index: 238,
  },
  {
    title: "3 Sum",
    category: "two-pointers",
    id: "3Sum_two-pointers",
    algorithm:
      "// Given an array S of n integers, are there elements a, b, c in S such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.\n\n// Note: The solution set must not contain duplicate triplets.\n\n// For example, given array S = [-1, 0, 1, 2, -1, -4],\n\n// A solution set is:\n// [\n//   [-1, 0, 1],\n//   [-1, -1, 2]\n// ]\n\npublic class 3Sum {\n    public List<List<Integer>> threeSum(int[] nums) {\n        List<List<Integer>>  result = new ArrayList<>();\n\n        Arrays.sort(nums);\n\n        for(int i = 0; i < nums.length - 2; i++) {\n            if(i > 0 && nums[i] == nums[i - 1]) {\n                continue;\n            }\n\n            int j = i + 1;\n            int k = nums.length - 1;\n            int target = -nums[i];\n\n            while(j < k) {\n                if(nums[j] + nums[k] == target) {\n                    ArrayList<Integer> temp = new ArrayList<Integer>();\n\n                    temp.add(nums[i]);\n                    temp.add(nums[j]);\n                    temp.add(nums[k]);\n\n                    result.add(temp);\n\n                    j++;\n                    k--;\n\n                    while(j < k && nums[j] == nums[j - 1]) {\n                        j++;\n                    }\n\n                    while(j < k && nums[k] == nums[k + 1]) {\n                        k--;\n                    }\n                } else if(nums[j] + nums[k] > target) {\n                    k--;\n                } else {\n                    j++;\n                }\n            }\n        }\n\n        return result;\n    }\n}\n",
    index: 239,
  },
  {
    title: "3 Sum Smaller",
    category: "two-pointers",
    id: "3SumSmaller_two-pointers",
    algorithm:
      "// Given an array of n integers nums and a target, find the number of index triplets i, j, k with 0 <= i < j < k < n that satisfy the condition nums[i] + nums[j] + nums[k] < target.\n\n// For example, given nums = [-2, 0, 1, 3], and target = 2.\n\n// Return 2. Because there are two triplets which sums are less than 2:\n\n// [-2, 0, 1]\n// [-2, 0, 3]\n\n// Follow up:\n    // Could you solve it in O(n2) runtime?\n\npublic class 3SumSmaller {\n    public int threeSumSmaller(int[] nums, int target) {\n        //initialize total count to zero\n        int count = 0;\n        \n        //sort the array\n        Arrays.sort(nums);\n        \n        //loop through entire array\n        for(int i = 0; i < nums.length - 2; i++) {\n            //set left to i + 1\n            int left = i + 1;\n            \n            //set right to end of array\n            int right = nums.length - 1;\n            \n            //while left index < right index\n            while(left < right) {\n                //if the 3 indices add to less than the target increment count\n                if(nums[i] + nums[left] + nums[right] < target) {\n                    //increment the count by the distance between left and right because the array is sorted\n                    count += right - left;\n                    \n                    //decrement right pointer\n                    left++;\n                } else {\n                    //if they sum to a value greater than target...\n                    //increment left pointer\n                    right--;\n                }\n            }\n        }\n        \n        return count;\n    }\n}\n",
    index: 240,
  },
  {
    title: "Linked List Cycle",
    category: "two-pointers",
    id: "LinkedListCycle_two-pointers",
    algorithm:
      "//Given a linked list, determine if it has a cycle in it.\n//Follow up:\n//Can you solve it without using extra space?\n/**\n * Definition for singly-linked list.\n * class ListNode {\n *     int val;\n *     ListNode next;\n *     ListNode(int x) {\n *         val = x;\n *         next = null;\n *     }\n * }\n */\npublic class Solution {\n    public boolean hasCycle(ListNode head) {\n        if(head == null || head.next == null) {\n            return false;\n        }\n        \n        ListNode slow = head;\n        ListNode fast = head.next;\n        while(fast != null && fast.next != null && fast != slow) {\n            slow = slow.next;\n            fast = fast.next.next;\n        }\n        \n        return fast == slow;\n    }\n}\n",
    index: 241,
  },
  {
    title: "Merge Sorted Array",
    category: "two-pointers",
    id: "MergeSortedArray_two-pointers",
    algorithm:
      "// Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.\n\n// Note:\n// You may assume that nums1 has enough space (size that is greater or equal to m + n) to hold additional elements from nums2. The number of elements initialized in nums1 and nums2 are m and n respectively.\n\npublic class MergeSortedArray {\n    public void merge(int[] A, int m, int[] B, int n) {\n        int i = m - 1;\n        int j = n - 1;\n        int k = m + n - 1;\n        \n        while(i >= 0 && j >= 0) {\n            A[k--] = A[i] > B[j] ? A[i--] : B[j--];\n        }\n        \n        while(j >= 0) {\n            A[k--] = B[j--];\n        }\n    }\n}\n",
    index: 242,
  },
  {
    title: "Minimum Size Subarray Sum",
    category: "two-pointers",
    id: "MinimumSizeSubarraySum_two-pointers",
    algorithm:
      "// Given an array of n positive integers and a positive integer s, find the minimal length of a contiguous subarray of which the sum ≥ s. If there isn't one, return 0 instead.\n\n// For example, given the array [2,3,1,2,4,3] and s = 7,\n// the subarray [4,3] has the minimal length under the problem constraint.\n\npublic class MinimumSizeSubarraySum {\n    public int minSubArrayLen(int s, int[] nums) {\n        if(nums == null || nums.length == 0) {\n            return 0;\n        }\n        \n        int i = 0;\n        int j = 0;\n        int result = Integer.MAX_VALUE;\n        int total = 0;\n        \n        while(i < nums.length) {\n            total += nums[i++];\n            \n            while(total >= s) {\n                result = Math.min(result, i - j);\n                total -= nums[j++];\n            }\n        }\n        \n        return result == Integer.MAX_VALUE ? 0 : result;\n    }\n}\n",
    index: 243,
  },
  {
    title: "Move Zeros",
    category: "two-pointers",
    id: "MoveZeros_two-pointers",
    algorithm:
      "// Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.\n\n// For example, given nums = [0, 1, 0, 3, 12], after calling your function, nums should be [1, 3, 12, 0, 0].\n\n// Note:\n    // You must do this in-place without making a copy of the array.\n    // Minimize the total number of operations.\n\npublic class MoveZeros {\n    public void moveZeroes(int[] nums) {\n        if(nums == null || nums.length == 0) {\n            return;\n        }\n        \n        int index = 0;\n        for(int num : nums) {\n            if(num != 0) {\n                nums[index] = num;\n                index++;\n            }\n        }\n        \n        while(index < nums.length) {\n            nums[index] = 0;\n            index++;\n        }\n    }\n}\n",
    index: 244,
  },
  {
    title: "Remove Duplicates From Sorted Array",
    category: "two-pointers",
    id: "RemoveDuplicatesFromSortedArray_two-pointers",
    algorithm:
      "// Given a sorted array, remove the duplicates in place such that each element appear only once and return the new length.\n\n// Do not allocate extra space for another array, you must do this in place with constant memory.\n\n// For example,\n// Given input array nums = [1,1,2],\n\n// Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively. It doesn't matter what you leave beyond the new length.\n\npublic class RemoveDuplicatesFromSortedArray {\n    public int removeDuplicates(int[] nums) {\n        if(nums.length == 0 || nums == null) {\n            return 0;\n        }\n\n        if(nums.length < 2) {\n            return nums.length;\n        }\n        \n        int index = 1;\n        \n        for(int i = 1; i < nums.length; i++) {\n            if(nums[i] != nums[i - 1]) {\n                nums[index++] = nums[i];\n            }\n        }\n        \n        return index;\n    }\n}\n",
    index: 245,
  },
  {
    title: "Remove Element",
    category: "two-pointers",
    id: "RemoveElement_two-pointers",
    algorithm:
      "//Given an array and a value, remove all instances of that value in-place and return the new length.\n//Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.\n//The order of elements can be changed. It doesn't matter what you leave beyond the new length.\n\n//Example:\n//Given nums = [3,2,2,3], val = 3,\n//Your function should return length = 2, with the first two elements of nums being 2.\n\nclass RemoveElement {\n    public int removeElement(int[] nums, int val) {\n        int index = 0;\n        for(int i = 0; i < nums.length; i++) {\n            if(nums[i] != val) {\n                nums[index++] = nums[i];\n            }\n        }\n        \n        return index;\n    }\n}\n\n",
    index: 246,
  },
  {
    title: "Reverse String",
    category: "two-pointers",
    id: "ReverseString_two-pointers",
    algorithm:
      '// Write a function that takes a string as input and returns the string reversed.\n\n// Example:\n// Given s = "hello", return "olleh".\n\npublic class ReverseString {\n    public String reverseString(String s) {\n        if(s == null || s.length() == 1 || s.length() == 0) {\n            return s;\n        }\n        \n        char[] word = s.toCharArray();\n        \n        for(int i = 0, j = s.length() - 1; i < j; i++, j--) {\n            char temp = word[i];\n            word[i] = word[j];\n            word[j] = temp;\n        }\n        \n        return new String(word);\n    }\n}\n',
    index: 247,
  },
  {
    title: "Sort Colors",
    category: "two-pointers",
    id: "SortColors_two-pointers",
    algorithm:
      "// Given an array with n objects colored red, white or blue, sort them so that objects of the same color are adjacent, with the colors in the order red, white and blue.\n\n// Here, we will use the integers 0, 1, and 2 to represent the color red, white, and blue respectively.\n\n// Note:\n    // You are not suppose to use the library's sort function for this problem.\n\npublic class SortColors {\n    public void sortColors(int[] nums) {\n        int wall = 0;\n        \n        for(int i = 0; i < nums.length; i++) {\n            if(nums[i] < 1) {\n                int temp = nums[i];\n                nums[i] = nums[wall];\n                nums[wall] = temp;\n                wall++;\n            }\n        }\n        \n        for(int i = 0; i < nums.length; i++) {\n            if(nums[i] == 1) {\n                int temp = nums[i];\n                nums[i] = nums[wall];\n                nums[wall] = temp;\n                wall++;\n            }\n        }\n    }\n}\n",
    index: 248,
  },
  { title: "Top Companies", category: null, id: "top-companies", index: 249 },
  { title: "Adobe", category: "top-companies", id: "adobe", index: 250 },
  {
    title: "Add Digits",
    category: "adobe",
    id: "AddDigits_adobe",
    algorithm:
      "//Given a non-negative integer num, repeatedly add all its digits until the result has only one digit.\n\n//For example:\n//Given num = 38, the process is like: 3 + 8 = 11, 1 + 1 = 2. Since 2 has only one digit, return it.\n\n//Follow up:\n//Could you do it without any loop/recursion in O(1) runtime?\n\nclass AddDigits {\n    public int addDigits(int num) {\n        while(num >= 10) {\n            int temp = 0;\n            while(num > 0) {\n                temp += num % 10;\n                num /= 10;\n            }\n            num = temp;\n        }\n        \n        return num;\n    }\n}\n\n",
    index: 251,
  },
  {
    title: "Majority Element",
    category: "adobe",
    id: "MajorityElement_adobe",
    algorithm:
      "//Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.\n//You may assume that the array is non-empty and the majority element always exist in the array.\n\nclass MajorityElement {\n    public int majorityElement(int[] nums) {\n        if(nums.length == 1) {\n            return nums[0];\n        }\n        \n        HashMap<Integer, Integer> map = new HashMap<Integer, Integer>();\n        for(int current: nums) {\n            if(map.containsKey(current) && map.get(current) + 1 > nums.length / 2) {\n                return current;\n            } else if(map.containsKey(current)) {\n                map.put(current, map.get(current) + 1);\n            } else {\n                map.put(current, 1);\n            }\n        }\n        \n        //no majority element exists\n        return -1;\n    }\n}\n",
    index: 252,
  },
  { title: "Airbnb", category: "top-companies", id: "airbnb", index: 253 },
  {
    title: "Add Two Numbers",
    category: "airbnb",
    id: "AddTwoNumbers_airbnb",
    algorithm:
      "// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.\n\n// You may assume the two numbers do not contain any leading zero, except the number 0 itself.\n\n// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)\n// Output: 7 -> 0 -> 8\n\n/**\n * Definition for singly-linked list.\n * public class ListNode {\n *     int val;\n *     ListNode next;\n *     ListNode(int x) { val = x; }\n * }\n */\npublic class AddTwoNumbers {\n    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {\n        ListNode current1 = l1;\n        ListNode current2 = l2;\n        \n        ListNode head = new ListNode(0);\n        ListNode currentHead = head;\n        \n        int sum = 0;\n        \n        while(current1 != null || current2 != null) {\n            \n            sum /= 10;\n            \n            if(current1 != null) {\n                \n                sum += current1.val;\n                current1 = current1.next;\n                \n            }\n            \n            if(current2 != null) {\n                \n                sum += current2.val;\n                current2 = current2.next;\n                \n            }\n            \n            currentHead.next = new ListNode(sum % 10);\n            currentHead = currentHead.next;\n            \n        }\n        \n        \n        if(sum / 10 == 1) {\n            \n            currentHead.next = new ListNode(1);\n            \n        }\n        \n        return head.next;\n        \n    }\n\n}",
    index: 254,
  },
  {
    title: "Contains Duplicate",
    category: "airbnb",
    id: "ContainsDuplicate_airbnb",
    algorithm:
      "//Given an array of integers, find if the array contains any duplicates. Your function should return \n//true if any value appears at least twice in the array, and it should return false if every element is distinct.\n\nclass ContainsDuplicate {\n    public boolean containsDuplicate(int[] nums) {\n        HashMap<Integer, Integer> map = new HashMap<Integer, Integer>();\n        for(int i: nums) {\n            if(map.containsKey(i)) {\n                return true;\n            } else {\n                map.put(i, 1);\n            }\n        }\n        \n        return false;\n    }\n}\n\n",
    index: 255,
  },
  {
    title: "Contains Duplicates I I",
    category: "airbnb",
    id: "ContainsDuplicatesII_airbnb",
    algorithm:
      "//Given an array of integers and an integer k, find out whether there are two distinct indices i and \n//j in the array such that nums[i] = nums[j] and the absolute difference between i and j is at most k.\n\nclass ContainsDuplicatesII {\n    public boolean containsNearbyDuplicate(int[] nums, int k) {\n        HashMap<Integer, Integer> map = new HashMap<Integer, Integer>();\n        for(int i = 0; i < nums.length; i++) {\n            int current = nums[i];\n            if(map.containsKey(current) && i - map.get(current) <= k) {\n                return true;\n            } else {\n                map.put(current, i);\n            }\n        }\n        \n        return false;\n    }\n}\n\n",
    index: 256,
  },
  {
    title: "Convert Sorted Array To Binary Search Tree",
    category: "airbnb",
    id: "ConvertSortedArrayToBinarySearchTree_airbnb",
    algorithm:
      "// Given an array where elements are sorted in ascending order, convert it to a height balanced BST.\n\n/**\n * Definition for a binary tree node.\n * public class TreeNode {\n *     int val;\n *     TreeNode left;\n *     TreeNode right;\n *     TreeNode(int x) { val = x; }\n * }\n */\npublic class Solution {\n    public TreeNode sortedArrayToBST(int[] nums) {\n        if(nums.length == 0) {\n            return null;\n        }\n        \n        TreeNode root = helper(nums, 0, nums.length - 1);\n        \n        return root;\n    }\n    \n    private TreeNode helper(int[] nums, int start, int end) {\n        if(start <= end) {\n            int mid = (start + end) / 2;\n            \n            TreeNode current = new TreeNode(nums[mid]);\n            \n            current.left = helper(nums, start, mid - 1);\n            current.right = helper(nums, mid + 1, end);\n            \n            return current;\n        }\n        \n        return null;\n    }\n}\n",
    index: 257,
  },
  {
    title: "House Robber",
    category: "airbnb",
    id: "HouseRobber_airbnb",
    algorithm:
      "// You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security system connected and it will automatically contact the police if two adjacent houses were broken into on the same night.\n\n// Given a list of non-negative integers representing the amount of money of each house, determine the maximum amount of money you can rob tonight without alerting the police.\n\npublic class HouseRobber {\n    public int rob(int[] nums) {\n        if(nums.length == 0) {\n            return 0;\n        }\n\n        if(nums.length == 1) {\n            return nums[0];\n        }\n        \n        int[] dp = new int[nums.length];\n        \n        dp[0] = nums[0];\n        dp[1] = nums[0] > nums[1] ? nums[0] : nums[1];\n\n        for(int i = 2; i < nums.length; i++) {\n            dp[i] = Math.max(dp[i - 2] + nums[i], dp[i - 1]);\n        }\n        \n        return dp[dp.length - 1];\n    }\n}\n",
    index: 258,
  },
  {
    title: "Merge K Sorted Lists",
    category: "airbnb",
    id: "MergeKSortedLists_airbnb",
    algorithm:
      "// Merge k sorted linked lists and return it as one sorted list. Analyze and describe its complexity.\n\n/**\n * Definition for singly-linked list.\n * public class ListNode {\n *     int val;\n *     ListNode next;\n *     ListNode(int x) { val = x; }\n * }\n */\npublic class MergeKSortedLists {\n    public ListNode mergeKLists(ListNode[] lists) {\n        if (lists==null||lists.length==0) {\n            return null;\n        }\n        \n        PriorityQueue<ListNode> queue= new PriorityQueue<ListNode>(lists.length,new Comparator<ListNode>(){\n            @Override\n            public int compare(ListNode o1,ListNode o2){\n                if (o1.val<o2.val) {\n                    return -1;\n                } else if (o1.val==o2.val) {\n                    return 0;\n                } else {\n                    return 1;\n                }\n            }\n        });\n        \n        ListNode dummy = new ListNode(0);\n        ListNode tail=dummy;\n        \n        for (ListNode node:lists) {\n            if (node!=null) {\n                queue.add(node);\n            }\n        }\n\n        while (!queue.isEmpty()) {\n            tail.next=queue.poll();\n            tail=tail.next;\n\n            if (tail.next!=null) {\n                queue.add(tail.next);\n            }\n\n        }\n        return dummy.next;\n\n    }\n}\n",
    index: 259,
  },
  {
    title: "Regular Expression Matching",
    category: "airbnb",
    id: "RegularExpressionMatching_airbnb",
    algorithm:
      '// Implement regular expression matching with support for \'.\' and \'*\'.\n\n// \'.\' Matches any single character.\n// \'*\' Matches zero or more of the preceding element.\n\n// The matching should cover the entire input string (not partial).\n\n// The function prototype should be:\n// bool isMatch(const char *s, const char *p)\n\n// Some examples:\n// isMatch("aa","a") → false\n// isMatch("aa","aa") → true\n// isMatch("aaa","aa") → false\n// isMatch("aa", "a*") → true\n// isMatch("aa", ".*") → true\n// isMatch("ab", ".*") → true\n// isMatch("aab", "c*a*b") → true\n\npublic class RegularExpressionMatching {\n    public boolean isMatch(String s, String p) {\n        if(s == null || p == null) {\n            return false;\n        }\n        \n        boolean[][] dp = new boolean[s.length() + 1][p.length() + 1];\n        dp[0][0] = true;\n        \n        for(int i = 0; i < p.length(); i++) {\n            if(p.charAt(i) == \'*\' && dp[0][i - 1]) {\n                dp[0][i + 1] = true;\n            }\n        }\n        \n        for(int i = 0; i < s.length(); i++) {\n            for(int j = 0; j < p.length(); j++) {\n                if(p.charAt(j) == \'.\') {\n                    dp[i + 1][j + 1] = dp[i][j];\n                }\n                \n                if(p.charAt(j) == s.charAt(i)) {\n                    dp[i + 1][j + 1] = dp[i][j];\n                }\n                \n                if(p.charAt(j) == \'*\') {\n                    if(p.charAt(j - 1) != s.charAt(i) && p.charAt(j - 1) != \'.\') {\n                        dp[i + 1][j + 1] = dp[i + 1][j - 1];\n                    } else {\n                        dp[i + 1][j + 1] = (dp[i + 1][j] || dp[i][j + 1] || dp[i + 1][j - 1]);\n                    }\n                }\n            }\n        }\n        \n        return dp[s.length()][p.length()];\n    }\n}\n',
    index: 260,
  },
  {
    title: "Two Sum",
    category: "airbnb",
    id: "TwoSum_airbnb",
    algorithm:
      "// Given an array of integers, return indices of the two numbers such that they add up to a specific target.\n\n// You may assume that each input would have exactly one solution, and you may not use the same element twice.\n\n// Example:\n// Given nums = [2, 7, 11, 15], target = 9,\n\n// Because nums[0] + nums[1] = 2 + 7 = 9,\n// return [0, 1].\n\npublic class TwoSum {\n    public int[] twoSum(int[] nums, int target) {\n        int[] result = new int[2];\n        \n        HashMap<Integer, Integer> map = new HashMap<>();\n        \n        for(int i = 0; i < nums.length; i++) {\n            if(map.containsKey(target - nums[i])) {\n                result[1] = i;\n                result[0] = map.get(target - nums[i]);\n\n                return result;\n            }\n            \n            map.put(nums[i], i);\n        }\n        \n        return result;\n    }\n}\n",
    index: 261,
  },
  {
    title: "Valid Parentheses",
    category: "airbnb",
    id: "ValidParentheses_airbnb",
    algorithm:
      "// Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.\n\n// The brackets must close in the correct order, \"()\" and \"()[]{}\" are all valid but \"(]\" and \"([)]\" are not.\n\npublic class ValidParentheses {\n    public boolean isValid(String s) {\n        if(s.length() % 2 == 1) {\n            return false;\n        }\n        \n        Stack<Character> stack = new Stack<Character>();\n        \n        for(int i = 0; i < s.length(); i++) {\n            if(s.charAt(i) == '(' || s.charAt(i) == '[' || s.charAt(i) == '{') {\n                stack.push(s.charAt(i));\n            } else if(s.charAt(i) == ')' && !stack.isEmpty() && stack.peek() == '(') {\n                stack.pop();\n            } else if(s.charAt(i) == ']' && !stack.isEmpty() && stack.peek() == '[') {\n                stack.pop();\n            } else if(s.charAt(i) == '}' && !stack.isEmpty() && stack.peek() == '{') {\n                stack.pop();\n            } else {\n                return false;\n            }\n        }\n        \n        return stack.isEmpty();\n    }\n}\n",
    index: 262,
  },
  { title: "Amazon", category: "top-companies", id: "amazon", index: 263 },
  {
    title: "3 Sum",
    category: "amazon",
    id: "3Sum_amazon",
    algorithm:
      "// Given an array S of n integers, are there elements a, b, c in S such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.\n\n// Note: The solution set must not contain duplicate triplets.\n\n// For example, given array S = [-1, 0, 1, 2, -1, -4],\n\n// A solution set is:\n// [\n//   [-1, 0, 1],\n//   [-1, -1, 2]\n// ]\n\npublic class 3Sum {\n    public List<List<Integer>> threeSum(int[] nums) {\n        List<List<Integer>>  result = new ArrayList<>();\n        \n        Arrays.sort(nums);\n        \n        for(int i = 0; i < nums.length - 2; i++) {\n            if(i > 0 && nums[i] == nums[i - 1]) {\n                continue;\n            }\n            \n            int j = i + 1;\n            int k = nums.length - 1;\n            int target = -nums[i];\n            \n            while(j < k) {\n                if(nums[j] + nums[k] == target) {\n                    ArrayList<Integer> temp = new ArrayList<Integer>();\n                    \n                    temp.add(nums[i]);\n                    temp.add(nums[j]);\n                    temp.add(nums[k]);\n                    \n                    result.add(temp);\n                    \n                    j++;\n                    k--;\n                    \n                    while(j < k && nums[j] == nums[j - 1]) {\n                        j++;\n                    }\n                    \n                    while(j < k && nums[k] == nums[k + 1]) {\n                        k--;\n                    }\n                } else if(nums[j] + nums[k] > target) {\n                    k--;\n                } else {\n                    j++;\n                }\n            }\n        }\n        \n        return result;\n    }\n}\n",
    index: 264,
  },
  {
    title: "Add Two Numbers",
    category: "amazon",
    id: "AddTwoNumbers_amazon",
    algorithm:
      "// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.\n\n// You may assume the two numbers do not contain any leading zero, except the number 0 itself.\n\n// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)\n// Output: 7 -> 0 -> 8\n\n/**\n * Definition for singly-linked list.\n * public class ListNode {\n *     int val;\n *     ListNode next;\n *     ListNode(int x) { val = x; }\n * }\n */\npublic class AddTwoNumbers {\n    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {\n        ListNode current1 = l1;\n        ListNode current2 = l2;\n        \n        ListNode head = new ListNode(0);\n        ListNode currentHead = head;\n        \n        int sum = 0;\n        \n        while(current1 != null || current2 != null) {\n            sum /= 10;\n            \n            if(current1 != null) {\n                sum += current1.val;\n                current1 = current1.next;\n            }\n            \n            if(current2 != null) {\n                sum += current2.val;\n                current2 = current2.next;\n            }\n\n            currentHead.next = new ListNode(sum % 10);\n            currentHead = currentHead.next;\n        }\n        \n        if(sum / 10 == 1) {\n            currentHead.next = new ListNode(1);\n        }\n        \n        return head.next;\n    }\n}\n",
    index: 265,
  },
  {
    title: "Best Time To Buy And Sell Stock",
    category: "amazon",
    id: "BestTimeToBuyAndSellStock_amazon",
    algorithm:
      "// Say you have an array for which the ith element is the price of a given stock on day i.\n\n// If you were only permitted to complete at most one transaction (ie, buy one and sell one share of the stock), design an algorithm to find the maximum profit.\n\n// Example 1:\n// Input: [7, 1, 5, 3, 6, 4]\n// Output: 5\n\n// max. difference = 6-1 = 5 (not 7-1 = 6, as selling price needs to be larger than buying price)\n// Example 2:\n// Input: [7, 6, 4, 3, 1]\n// Output: 0\n\n// In this case, no transaction is done, i.e. max profit = 0.\n\npublic class BestTimeToBuyAndSellStock {\n    public int maxProfit(int[] prices) {\n        //Kadane's algorithm\n        if(prices.length == 0) {\n            return 0;\n        }\n        \n        int max = 0;\n        int min = prices[0];\n        \n        for(int i = 1; i < prices.length; i++) {\n            if(prices[i] > min) {\n                max = Math.max(max, prices[i] - min);\n            } else {\n                min = prices[i];\n            }\n        }\n        \n        return max;\n    }\n}\n",
    index: 266,
  },
  {
    title: "Binary Tree Level Order Traversal",
    category: "amazon",
    id: "BinaryTreeLevelOrderTraversal_amazon",
    algorithm:
      "// Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).\n\n// For example:\n// Given binary tree [3,9,20,null,null,15,7],\n//     3\n//    / \\\n//   9  20\n//     /  \\\n//    15   7\n// return its level order traversal as:\n// [\n//   [3],\n//   [9,20],\n//   [15,7]\n// ]\n\n/**\n * Definition for a binary tree node.\n * public class TreeNode {\n *     int val;\n *     TreeNode left;\n *     TreeNode right;\n *     TreeNode(int x) { val = x; }\n * }\n */\npublic class BinaryTreeLevelOrderTraversal {\n    public List<List<Integer>> levelOrder(TreeNode root) {\n        List<List<Integer>> result = new ArrayList<List<Integer>>();\n\n        if(root == null) {\n            return result;\n        }\n        \n        Queue<TreeNode> queue = new LinkedList<TreeNode>();\n        \n        queue.add(root);\n        \n        List<Integer> tempList = new ArrayList<Integer>();\n        tempList.add(root.val);\n        result.add(tempList);\n        \n        while(!queue.isEmpty()) {\n            Queue<TreeNode> currentLevel = new LinkedList<TreeNode>();\n            \n            List<Integer> list = new ArrayList<Integer>();\n            \n            while(!queue.isEmpty()) {\n                TreeNode current = queue.remove();\n                \n                if(current.left != null) {\n                    currentLevel.add(current.left);\n                    list.add(current.left.val);\n                }\n                \n                if(current.right != null) {\n                    currentLevel.add(current.right);\n                    list.add(current.right.val);\n                }\n            }\n            \n            if(list.size() > 0) {\n                result.add(list);\n            }\n\n            queue = currentLevel;\n        }\n        \n        return result;\n    }\n}\n",
    index: 267,
  },
  {
    title: "Encode And Decode Tiny U R L",
    category: "amazon",
    id: "EncodeAndDecodeTinyURL_amazon",
    algorithm:
      '//TinyURL is a URL shortening service where you enter a URL such as https://leetcode.com/problems/design-tinyurl \n//and it returns a short URL such as http://tinyurl.com/4e9iAk.\n//\n//Design the encode and decode methods for the TinyURL service. There is no restriction on how your \n//encode/decode algorithm should work. You just need to ensure that a URL can be encoded to a tiny URL \n//and the tiny URL can be decoded to the original URL.\n\npublic class EncodeAndDecodeTinyURL {\n    HashMap<String, String> map = new HashMap<String, String>();\n    String characters = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";\n    int count = 1;\n\n    public String getKey() {\n        String key = "";\n        while(count > 0) {\n            count--;\n            key += characters.charAt(count);\n            count /= characters.length();\n        }\n        \n        return key;\n    }\n    \n    // Encodes a URL to a shortened URL.\n    public String encode(String longUrl) {\n        String key = getKey();\n        map.put(key, longUrl);\n        count++;\n            \n        return "http://tinyurl.com/" + key;\n    }\n\n    // Decodes a shortened URL to its original URL.\n    public String decode(String shortUrl) {\n        return map.get(shortUrl.replace("http://tinyurl.com/", ""));\n    }\n}\n\n// Your Codec object will be instantiated and called as such:\n// Codec codec = new Codec();\n// codec.decode(codec.encode(url));\n',
    index: 268,
  },
  {
    title: "First Unique Character In A String",
    category: "amazon",
    id: "FirstUniqueCharacterInAString_amazon",
    algorithm:
      '//Given a string, find the first non-repeating character in it and return it\'s index. If it doesn\'t exist, return -1.\n//\n//Examples:\n//\n//s = "leetcode"\n//return 0.\n//\n//s = "loveleetcode",\n//return 2.\n//Note: You may assume the string contain only lowercase letters.\n\nclass FirstUniqueCharacterInAString {\n    public int firstUniqChar(String s) {\n        HashMap<Character, Integer> characters = new HashMap<Character, Integer>();\n        for(int i = 0; i < s.length(); i++) {\n            char current = s.charAt(i);\n            if(characters.containsKey(current)) {\n                characters.put(current, -1);\n            } else {\n                characters.put(current, i);\n            }\n        }\n        \n        int min = Integer.MAX_VALUE;\n        for(char c: characters.keySet()) {\n            if(characters.get(c) > -1 && characters.get(c) < min) {\n                min = characters.get(c);\n            }\n        }\n        \n        return min == Integer.MAX_VALUE ? -1 : min;\n        \n    }\n}\n',
    index: 269,
  },
  {
    title: "Group Anagrams",
    category: "amazon",
    id: "GroupAnagrams_amazon",
    algorithm:
      '// Given an array of strings, group anagrams together.\n\n// For example, given: ["eat", "tea", "tan", "ate", "nat", "bat"], \n// Return:\n\n// [\n//   ["ate", "eat","tea"],\n//   ["nat","tan"],\n//   ["bat"]\n// ]\n// Note: All inputs will be in lower-case.\n\npublic class GroupAnagrams {\n    public List<List<String>> groupAnagrams(String[] strs) {\n        if(strs == null || strs.length == 0) {\n            return new ArrayList<List<String>>();\n        }\n        \n        HashMap<String, ArrayList<String>> map = new HashMap<String, ArrayList<String>>();\n        \n        Arrays.sort(strs);\n        \n        for(String s : strs) {\n            char[] characters = s.toCharArray();\n        \n            Arrays.sort(characters);\n            \n            String key = String.valueOf(characters);\n            \n            if(!map.containsKey(key)) {\n                map.put(key, new ArrayList<String>());\n            }\n            \n            map.get(key).add(s);\n        }\n        \n        return new ArrayList<List<String>>(map.values());\n    }\n}\n',
    index: 270,
  },
  {
    title: "Insert Delete Get Random O1",
    category: "amazon",
    id: "InsertDeleteGetRandomO1_amazon",
    algorithm:
      "//Design a data structure that supports all following operations in average O(1) time.\n\n//insert(val): Inserts an item val to the set if not already present.\n//remove(val): Removes an item val from the set if present.\n//getRandom: Returns a random element from current set of elements. Each element must have the same probability of being returned.\n\n//Example:\n// Init an empty set.\n//RandomizedSet randomSet = new RandomizedSet();\n\n// Inserts 1 to the set. Returns true as 1 was inserted successfully.\n//randomSet.insert(1);\n\n// Returns false as 2 does not exist in the set.\n//randomSet.remove(2);\n\n// Inserts 2 to the set, returns true. Set now contains [1,2].\n//randomSet.insert(2);\n\n// getRandom should return either 1 or 2 randomly.\n//randomSet.getRandom();\n\n// Removes 1 from the set, returns true. Set now contains [2].\n//randomSet.remove(1);\n\n// 2 was already in the set, so return false.\n//randomSet.insert(2);\n\n// Since 2 is the only number in the set, getRandom always return 2.\n//randomSet.getRandom();\n\nclass RandomizedSet {\n    HashMap<Integer, Integer> map;\n    ArrayList<Integer> values;\n\n    /** Initialize your data structure here. */\n    public RandomizedSet() {\n        map = new HashMap<Integer, Integer>();\n        values = new ArrayList<Integer>();\n    }\n    \n    /** Inserts a value to the set. Returns true if the set did not already contain the specified element. */\n    public boolean insert(int val) {\n        if(!map.containsKey(val)) {\n            map.put(val, val);\n            values.add(val);\n            return true;\n        }\n        else {\n            return false;\n        }\n    }\n    \n    /** Removes a value from the set. Returns true if the set contained the specified element. */\n    public boolean remove(int val) {\n        if(map.containsKey(val)) {\n            map.remove(val);\n            values.remove(values.indexOf(val));\n            return true;\n        }\n        return false;\n    }\n    \n    /** Get a random element from the set. */\n    public int getRandom() {\n        int random = (int)(Math.random() * values.size());\n        int valueToReturn = values.get(random);\n        return map.get(valueToReturn);\n    }\n}\n\n/**\n * Your RandomizedSet object will be instantiated and called as such:\n * RandomizedSet obj = new RandomizedSet();\n * boolean param_1 = obj.insert(val);\n * boolean param_2 = obj.remove(val);\n * int param_3 = obj.getRandom();\n */\n\n",
    index: 271,
  },
  {
    title: "Kth Largest Element In An Array",
    category: "amazon",
    id: "KthLargestElementInAnArray_amazon",
    algorithm:
      "// Find the kth largest element in an unsorted array. Note that it is the kth largest element in the sorted order, not the kth distinct element.\n\n// For example,\n// Given [3,2,1,5,6,4] and k = 2, return 5.\n\n// Note: \n// You may assume k is always valid, 1 ≤ k ≤ array's length.\n\npublic class KthLargestElementInAnArray {\n    public int findKthLargest(int[] nums, int k) {\n        int length = nums.length;\n\n        Arrays.sort(nums);\n\n        return nums[length - k];\n    }\n}\n",
    index: 272,
  },
  {
    title: "Letter Combinations Of A Phone Number",
    category: "amazon",
    id: "LetterCombinationsOfAPhoneNumber_amazon",
    algorithm:
      '// Given a digit string, return all possible letter combinations that the number could represent.\n\n// A mapping of digit to letters (just like on the telephone buttons) is given below.\n\n// 2 - abc\n// 3 - def\n// 4 - ghi\n// 5 - jkl\n// 6 - mno\n// 7 - pqrs\n// 8 - tuv\n// 9 - wxyz\n\n// Input:Digit string "23"\n// Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].\n\nclass LetterCombinationsOfAPhoneNumber {\n    public List<String> letterCombinations(String digits) {\n        List<String> result = new ArrayList<String>();\n        \n        if(digits == null || digits.length() == 0) {\n            return result;\n        }\n        \n        String[] mapping = {\n            "0",\n            "1",\n            "abc",\n            "def",\n            "ghi",\n            "jkl",\n            "mno",\n            "pqrs",\n            "tuv",\n            "wxyz"\n        };\n        \n        letterCombinationsRecursive(result, digits, "", 0, mapping);\n        \n        return result;\n    }\n    \n    public void letterCombinationsRecursive(List<String> result, String digits, String current, int index, String[] mapping) {\n        if(index == digits.length()) {\n            result.add(current);\n            return;\n        }\n        \n        String letters = mapping[digits.charAt(index) - \'0\'];\n        for(int i = 0; i < letters.length(); i++) {\n            letterCombinationsRecursive(result, digits, current + letters.charAt(i), index + 1, mapping);\n        }\n    }\n}\n',
    index: 273,
  },
  {
    title: "Linked List Cycle",
    category: "amazon",
    id: "LinkedListCycle_amazon",
    algorithm:
      "//Given a linked list, determine if it has a cycle in it.\n//Follow up:\n//Can you solve it without using extra space?\n/**\n * Definition for singly-linked list.\n * class ListNode {\n *     int val;\n *     ListNode next;\n *     ListNode(int x) {\n *         val = x;\n *         next = null;\n *     }\n * }\n */\npublic class Solution {\n    public boolean hasCycle(ListNode head) {\n        if(head == null || head.next == null) {\n            return false;\n        }\n        \n        ListNode slow = head;\n        ListNode fast = head.next;\n        while(fast != null && fast.next != null && fast != slow) {\n            slow = slow.next;\n            fast = fast.next.next;\n        }\n        \n        return fast == slow;\n    }\n}\n\n",
    index: 274,
  },
  {
    title: "Longest Palindromic Substring",
    category: "amazon",
    id: "LongestPalindromicSubstring_amazon",
    algorithm:
      '//Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.\n\n//Example:\n//Input: "babad"\n//Output: "bab"\n\n//Note: "aba" is also a valid answer.\n\n//Example:\n//Input: "cbbd"\n//Output: "bb"\n\nclass LongestPalindromicSubstring {\n    public String longestPalindrome(String s) {\n        if(s == null || s.length() == 0) {\n            return "";\n        }\n        \n        String longestPalindromicSubstring = "";\n        for(int i = 0; i < s.length(); i++) {\n            for(int j = i + 1; j <= s.length(); j++) {\n                if(j - i > longestPalindromicSubstring.length() && isPalindrome(s.substring(i, j))) {\n                    longestPalindromicSubstring = s.substring(i, j);\n                }\n            }\n        }\n        \n        return longestPalindromicSubstring;\n    }\n    \n    public boolean isPalindrome(String s) {\n        int i = 0;\n        int j = s.length() - 1;\n        while(i <= j) {\n            if(s.charAt(i++) != s.charAt(j--)) {\n                return false;\n            }\n        }\n        \n        return true;\n    }\n}\n',
    index: 275,
  },
  {
    title: "Lowest Common Ancestor Of A Binary Tree",
    category: "amazon",
    id: "LowestCommonAncestorOfABinaryTree_amazon",
    algorithm:
      "// Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.\n\n// According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes v and w as the lowest node in T that has both v and w as descendants (where we allow a node to be a descendant of itself).”\n\n//         _______3______\n//        /              \\\n//     ___5__          ___1__\n//    /      \\        /      \\\n//    6      _2       0       8\n//          /  \\\n//          7   4\n// For example, the lowest common ancestor (LCA) of nodes 5 and 1 is 3. Another example is LCA of nodes 5 and 4 is 5, since a node can be a descendant of itself according to the LCA definition.\n\n/**\n * Definition for a binary tree node.\n * public class TreeNode {\n *     int val;\n *     TreeNode left;\n *     TreeNode right;\n *     TreeNode(int x) { val = x; }\n * }\n */\npublic class LowestCommonAncestorOfABinaryTree {\n    public TreeNode lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {\n        if(root == null || root == p || root == q) {\n            return root;\n        }\n        \n        TreeNode left = lowestCommonAncestor(root.left, p, q);\n        TreeNode right = lowestCommonAncestor(root.right, p, q);\n        \n        if(left != null && right != null) {\n            return root;\n        }\n        \n        return left == null ? right : left;\n    }\n}\n",
    index: 276,
  },
  {
    title: "Merge K Sorted Lists",
    category: "amazon",
    id: "MergeKSortedLists_amazon",
    algorithm:
      "// Merge k sorted linked lists and return it as one sorted list. Analyze and describe its complexity.\n\n/**\n * Definition for singly-linked list.\n * public class ListNode {\n *     int val;\n *     ListNode next;\n *     ListNode(int x) { val = x; }\n * }\n */\npublic class MergeKSortedLists {\n    public ListNode mergeKLists(ListNode[] lists) {\n        if (lists==null||lists.length==0) {\n            return null;\n        }\n        \n        PriorityQueue<ListNode> queue= new PriorityQueue<ListNode>(lists.length,new Comparator<ListNode>(){\n            @Override\n            public int compare(ListNode o1,ListNode o2){\n                if (o1.val<o2.val) {\n                    return -1;\n                } else if (o1.val==o2.val) {\n                    return 0;\n                } else {\n                    return 1;\n                }\n            }\n        });\n        \n        ListNode dummy = new ListNode(0);\n        ListNode tail=dummy;\n        \n        for (ListNode node:lists) {\n            if (node!=null) {\n                queue.add(node);\n            }\n        }\n\n        while (!queue.isEmpty()){\n            tail.next=queue.poll();\n            tail=tail.next;\n\n            if (tail.next!=null) {\n                queue.add(tail.next);\n            }\n        }\n\n        return dummy.next;\n    }\n}\n",
    index: 277,
  },
  {
    title: "Min Cost Climbing Stairs",
    category: "amazon",
    id: "MinCostClimbingStairs_amazon",
    algorithm:
      "//On a staircase, the i-th step has some non-negative cost cost[i] assigned (0 indexed).\n//\n//Once you pay the cost, you can either climb one or two steps. You need to find minimum cost to reach the top of the floor, and you can either start from the step with index 0, or the step with index 1.\n//\n//Example 1:\n//Input: cost = [10, 15, 20]\n//Output: 15\n//Explanation: Cheapest is start on cost[1], pay that cost and go to the top.\n//Example 2:\n//Input: cost = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1]\n//Output: 6\n//Explanation: Cheapest is start on cost[0], and only step on 1s, skipping cost[3].\n//Note:\n//cost will have a length in the range [2, 1000].\n//Every cost[i] will be an integer in the range [0, 999].\n\nclass MinCostClimbingStairs {\n    public int minCostClimbingStairs(int[] cost) {\n        if(cost == null || cost.length == 0) {\n            return 0;\n        }\n        if(cost.length == 1) {\n            return cost[0];\n        }\n        if(cost.length == 2) {\n            return Math.min(cost[0], cost[1]);\n        }\n        \n        int[] dp = new int[cost.length];\n        dp[0] = cost[0];\n        dp[1] = cost[1];\n        for(int i = 2; i < cost.length; i++) {\n            dp[i] = Math.min(dp[i - 1] + cost[i], dp[i - 2] + cost[i]);\n        }\n        \n        return Math.min(dp[cost.length - 1], dp[cost.length -2]);\n    }\n}\n",
    index: 278,
  },
  {
    title: "Min Stack",
    category: "amazon",
    id: "MinStack_amazon",
    algorithm:
      "//Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.\n//push(x) -- Push element x onto stack.\n//pop() -- Removes the element on top of the stack.\n//top() -- Get the top element.\n//getMin() -- Retrieve the minimum element in the stack.\n\n/**\n * Your MinStack object will be instantiated and called as such:\n * MinStack obj = new MinStack();\n * obj.push(x);\n * obj.pop();\n * int param_3 = obj.top();\n * int param_4 = obj.getMin();\n */\nclass MinStack {\n    class Node {\n        int data;\n        int min;\n        Node next;\n        \n        public Node(int data, int min) {\n            this.data = data;\n            this.min = min;\n            this.next = null;\n        }\n    }\n    Node head;\n    \n    /** initialize your data structure here. */\n    public MinStack() {\n        \n    }\n    \n    public void push(int x) {\n        if(head == null) {\n            head = new Node(x, x);\n        } else {\n            Node newNode = new Node(x, Math.min(x, head.min));\n            newNode.next = head;\n            head = newNode;\n        }\n    }\n    \n    public void pop() {\n        head = head.next;\n    }\n    \n    public int top() {\n        return head.data;\n    }\n    \n    public int getMin() {\n        return head.min;\n    }\n}\n",
    index: 279,
  },
  {
    title: "Number Of Islands",
    category: "amazon",
    id: "NumberOfIslands_amazon",
    algorithm:
      "// Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.\n\n// Example 1:\n\n// 11110\n// 11010\n// 11000\n// 00000\n// Answer: 1\n\n// Example 2:\n\n// 11000\n// 11000\n// 00100\n// 00011\n// Answer: 3\n\npublic class NumberOfIslands {\n    char[][] gridCopy;\n    \n    public int numIslands(char[][] grid) {\n        //set grid copy to the current grid\n        gridCopy = grid;\n        \n        //initialize number of islands to zero\n        int numberOfIslands = 0;\n        \n        //iterate through every index of the grid\n        for(int i = 0; i < grid.length; i++) {\n            for(int j = 0; j < grid[0].length; j++) {\n                //attempt to \"sink\" the current index of the grid\n                numberOfIslands += sink(gridCopy, i, j);\n                \n            }\n        }\n        \n        //return the total number of islands\n        return numberOfIslands;\n    }\n    \n    int sink(char[][] grid, int i, int j) {\n        //check the bounds of i and j and if the current index is an island or not (1 or 0)\n        if(i < 0 || i >= grid.length || j < 0 || j >= grid[0].length || grid[i][j] == '0') {\n            return 0;\n        }\n        \n        //set current index to 0\n        grid[i][j] = '0';\n        \n        // sink all neighbors of current index\n        sink(grid, i + 1, j);\n        sink(grid, i - 1, j);\n        sink(grid, i, j + 1);\n        sink(grid, i, j - 1);\n        \n        //increment number of islands\n        return 1;\n    }\n}\n",
    index: 280,
  },
  {
    title: "Palindrome Linked List",
    category: "amazon",
    id: "PalindromeLinkedList_amazon",
    algorithm:
      "/**\n * Definition for singly-linked list.\n * public class ListNode {\n *     int val;\n *     ListNode next;\n *     ListNode(int x) { val = x; }\n * }\n */\npublic class PalindromeLinkedList {\n    public boolean isPalindrome(ListNode head) {\n        if(head == null || head.next == null) {\n            return true;\n        }\n        \n        Stack<Integer> stack = new Stack<Integer>();\n        \n        ListNode fast = head;\n        ListNode slow = head;\n\n        while(fast != null && fast.next != null) {\n            stack.push(slow.val);\n            fast = fast.next.next;\n            slow = slow.next;\n        }\n        \n        if(fast != null) {\n            slow = slow.next;\n        }\n        \n        while(slow != null) {\n            if(stack.pop() != slow.val) {\n                return false;\n            }\n\n            slow = slow.next;\n        }\n        \n        return true;\n    }\n}\n",
    index: 281,
  },
  {
    title: "Product Of Array Except Self",
    category: "amazon",
    id: "ProductOfArrayExceptSelf_amazon",
    algorithm:
      "// Given an array of n integers where n > 1, nums, return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].\n\n// Solve it without division and in O(n).\n\n// For example, given [1,2,3,4], return [24,12,8,6].\n\n// Follow up:\n// Could you solve it with constant space complexity? (Note: The output array does not count as extra space for the purpose of space complexity analysis.)\n\npublic class ProductOfArrayExceptSelf {\n    public int[] productExceptSelf(int[] nums) {\n        int n = nums.length;\n        int[] result = new int[n];\n        int left = 1;\n        \n        for(int i = 0; i < nums.length; i++) {\n            if(i > 0) {\n                left *= nums[i - 1];\n            }\n            \n            result[i] = left;\n        }\n        \n        int right = 1;\n        \n        for(int i = n - 1; i >= 0; i--) {\n            if(i < n - 1) {\n                right *= nums[i + 1];\n            }\n            \n            result[i] *= right;\n        }\n        \n        return result;\n    }\n}\n",
    index: 282,
  },
  {
    title: "Reverse Linked List",
    category: "amazon",
    id: "ReverseLinkedList_amazon",
    algorithm:
      "// Reverse a singly linked list.\n\n/**\n * Definition for singly-linked list.\n * public class ListNode {\n *     int val;\n *     ListNode next;\n *     ListNode(int x) { val = x; }\n * }\n */\npublic class ReverseLinkedList {\n    public ListNode reverseList(ListNode head) {\n        if(head == null) {\n            return head;\n        }\n    \n        ListNode newHead = null;\n        \n        while(head != null) {\n            ListNode next = head.next;\n            head.next = newHead;\n            newHead = head;\n            head = next;\n        }\n        \n        return newHead;\n    }\n}\n",
    index: 283,
  },
  {
    title: "Rotate Image",
    category: "amazon",
    id: "RotateImage_amazon",
    algorithm:
      "// You are given an n x n 2D matrix representing an image.\n\n// Rotate the image by 90 degrees (clockwise).\n\n// Follow up:\n    // Could you do this in-place?\n\npublic class RotateImage {\n    public void rotate(int[][] matrix) {\n        for(int i = 0; i < matrix.length; i++) {\n            for(int j = 0; j < i; j++) {\n                int temp = matrix[i][j];\n                matrix[i][j] = matrix[j][i];\n                matrix[j][i] = temp;\n            }\n        }\n        \n        for(int i = 0; i < matrix.length; i++) {\n            for(int j = 0; j < matrix[0].length / 2; j++) {\n                int temp = matrix[i][j];\n                matrix[i][j] = matrix[i][matrix[0].length - 1 - j];\n                matrix[i][matrix[0].length - 1 - j] = temp;\n            }\n        }\n    }\n}\n",
    index: 284,
  },
  {
    title: "Subsets",
    category: "amazon",
    id: "Subsets_amazon",
    algorithm:
      "// Given a set of distinct integers, nums, return all possible subsets.\n\n// Note: The solution set must not contain duplicate subsets.\n\n// For example,\n// If nums = [1,2,3], a solution is:\n\n// [\n//   [3],\n//   [1],\n//   [2],\n//   [1,2,3],\n//   [1,3],\n//   [2,3],\n//   [1,2],\n//   []\n// ]\n\npublic class Subsets {\n    public List<List<Integer>> subsets(int[] nums) {\n        List<List<Integer>> result = new ArrayList<>();\n        \n        recurse(result, nums, new Stack<>(), 0);\n        \n        return result;\n    }\n    \n    \n    private void recurse(List<List<Integer>> result, int[] nums, Stack path, int position) {\n        if(position == nums.length) {\n            result.add(new ArrayList<>(path));\n\n            return;\n        }\n        \n        path.push(nums[position]);\n\n        recurse(result, nums, path, position + 1);\n        \n        path.pop();\n        \n        recurse(result, nums, path, position + 1);\n    }\n}\n",
    index: 285,
  },
  {
    title: "Trapping Rain Water",
    category: "amazon",
    id: "TrappingRainWater_amazon",
    algorithm:
      "// Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it is able to trap after raining.\n\n// For example, \n// Given [0,1,0,2,1,0,1,3,2,1,2,1], return 6.\n\npublic class TrappingRainWater {\n    public int trap(int[] height) {\n        int water = 0;\n        \n        int leftIndex = 0;\n        int rightIndex = height.length - 1;\n        \n        int leftMax = 0;\n        int rightMax = 0;\n        \n        while(leftIndex <= rightIndex) {\n            leftMax = Math.max(leftMax, height[leftIndex]);\n            rightMax = Math.max(rightMax, height[rightIndex]);\n            \n            if(leftMax < rightMax) {\n                water += leftMax - height[leftIndex];\n                leftIndex++;\n            } else {\n                water += rightMax - height[rightIndex];\n                rightIndex--;\n            }\n        }\n        \n        return water;\n    }\n}\n\n",
    index: 286,
  },
  {
    title: "Two Sum",
    category: "amazon",
    id: "TwoSum_amazon",
    algorithm:
      "// Given an array of integers, return indices of the two numbers such that they add up to a specific target.\n\n// You may assume that each input would have exactly one solution, and you may not use the same element twice.\n\n// Example:\n// Given nums = [2, 7, 11, 15], target = 9,\n\n// Because nums[0] + nums[1] = 2 + 7 = 9,\n// return [0, 1].\n\npublic class TwoSum {\n    public int[] twoSum(int[] nums, int target) {\n        int[] result = new int[2];\n        \n        HashMap<Integer, Integer> map = new HashMap<>();\n        \n        for(int i = 0; i < nums.length; i++) {\n            if(map.containsKey(target - nums[i])) {\n                result[1] = i;\n                result[0] = map.get(target - nums[i]);\n\n                return result;\n            }\n            \n            map.put(nums[i], i);\n        }\n        \n        return result;\n    }\n}\n",
    index: 287,
  },
  {
    title: "Valid Parentheses",
    category: "amazon",
    id: "ValidParentheses_amazon",
    algorithm:
      "// Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.\n\n// The brackets must close in the correct order, \"()\" and \"()[]{}\" are all valid but \"(]\" and \"([)]\" are not.\n\npublic class ValidParentheses {\n    public boolean isValid(String s) {\n        if(s.length() % 2 == 1) {\n            return false;\n        }\n        \n        Stack<Character> stack = new Stack<Character>();\n        \n        for(int i = 0; i < s.length(); i++) {\n            if(s.charAt(i) == '(' || s.charAt(i) == '[' || s.charAt(i) == '{') {\n                stack.push(s.charAt(i));\n            } else if(s.charAt(i) == ')' && !stack.isEmpty() && stack.peek() == ')') {\n                stack.pop();\n            } else if(s.charAt(i) == ']' && !stack.isEmpty() && stack.peek() == ']') {\n                stack.pop();\n            } else if(s.charAt(i) == '}' && !stack.isEmpty() && stack.peek() == '}') {\n                stack.pop();\n            } else {\n                return false;\n            }\n        }\n        \n        return stack.isEmpty();\n    }\n}\n",
    index: 288,
  },
  {
    title: "Validate Binary Search Tree",
    category: "amazon",
    id: "ValidateBinarySearchTree_amazon",
    algorithm:
      "// Given a binary tree, determine if it is a valid binary search tree (BST).\n\n// Assume a BST is defined as follows:\n\n// The left subtree of a node contains only nodes with keys less than the node's key.\n// The right subtree of a node contains only nodes with keys greater than the node's key.\n// Both the left and right subtrees must also be binary search trees.\n// Example 1:\n//     2\n//    / \\\n//   1   3\n// Binary tree [2,1,3], return true.\n// Example 2:\n//     1\n//    / \\\n//   2   3\n// Binary tree [1,2,3], return false.\n\n/**\n * Definition for a binary tree node.\n * public class TreeNode {\n *     int val;\n *     TreeNode left;\n *     TreeNode right;\n *     TreeNode(int x) { val = x; }\n * }\n */\npublic class ValidateBinarySearchTree {\n    public boolean isValidBST(TreeNode root) {\n        if(root == null) {\n            return true;\n        }\n        \n        return validBSTRecursive(root, Long.MIN_VALUE, Long.MAX_VALUE);\n    }\n    \n    public boolean validBSTRecursive(TreeNode root, long minValue, long maxValue) {\n        if(root == null) {\n            return true;\n        } else if(root.val >= maxValue || root.val <= minValue) {\n            return false;\n        } else {\n            return validBSTRecursive(root.left, minValue, root.val) && validBSTRecursive(root.right, root.val, maxValue);\n        }\n    }\n}\n",
    index: 289,
  },
  {
    title: "Word Break",
    category: "amazon",
    id: "WordBreak_amazon",
    algorithm:
      '// Given a non-empty string s and a dictionary wordDict containing a list of non-empty words, determine if s can be segmented into a space-separated sequence of one or more dictionary words. You may assume the dictionary does not contain duplicate words.\n\n// For example, given\n// s = "leetcode",\n// dict = ["leet", "code"].\n\n// Return true because "leetcode" can be segmented as "leet code".\n\npublic class WordBreak {\n    public boolean wordBreak(String s, Set<String> wordDict) {\n        boolean[] dp = new boolean[s.length() + 1];\n        \n        dp[0] = true;\n        \n        for(int i = 1; i <= s.length(); i++) {\n            for(int j = 0; j < i; j++) {\n                if(dp[j] && wordDict.contains(s.substring(j, i))) {\n                    dp[i] = true;\n                    break;\n                }\n            }\n        }\n        \n        return dp[s.length()];\n    }\n}\n',
    index: 290,
  },
  { title: "Apple", category: "top-companies", id: "apple", index: 291 },
  {
    title: "Reverse Words In A String",
    category: "apple",
    id: "ReverseWordsInAString_apple",
    algorithm:
      '//Given an input string, reverse the string word by word.\n//For example,\n//Given s = "the sky is blue",\n//return "blue is sky the".\n\npublic class ReverseWordsInAString {\n    public String reverseWords(String s) {\n        String[] words = s.trim().split("\\\\s+");\n        String result = "";\n        for(int i = words.length - 1; i > 0; i--) {\n            result += words[i] + " ";\n        }\n        \n        return result + words[0];\n    }\n}\n\n',
    index: 292,
  },
  {
    title: "Valid Sudoku",
    category: "apple",
    id: "ValidSudoku_apple",
    algorithm:
      "//Determine if a Sudoku is valid, according to: Sudoku Puzzles - The Rules. (http://sudoku.com.au/TheRules.aspx)\n//The Sudoku board could be partially filled, where empty cells are filled with the character '.'.\n//A partially filled sudoku which is valid.\n\n//Note:\n//A valid Sudoku board (partially filled) is not necessarily solvable. Only the filled cells need to be validated.\n\nclass ValidSudoku {\n    public boolean isValidSudoku(char[][] board) {\n        for(int i = 0; i < board.length; i++){\n            HashSet<Character> rows = new HashSet<Character>();\n            HashSet<Character> columns = new HashSet<Character>();\n            HashSet<Character> box = new HashSet<Character>();\n            for (int j = 0; j < board[0].length; j++){\n                if(board[i][j] != '.' && !rows.add(board[i][j])) {\n                    return false;\n                }\n                if(board[j][i]!='.' && !columns.add(board[j][i])) {\n                    return false;\n                }\n                int rowIndex = (i / 3) * 3;\n                int columnIndex = (i % 3) * 3;\n                if(board[rowIndex + j / 3][columnIndex + j % 3] != '.' && !box.add(board[rowIndex + j / 3][columnIndex + j % 3])) {\n                    return false;\n                }\n            }\n        }\n        return true;\n    }\n}\n\n",
    index: 293,
  },
  {
    title: "Bloomberg",
    category: "top-companies",
    id: "bloomberg",
    index: 294,
  },
  {
    title: "First Unique Character In A String",
    category: "bloomberg",
    id: "FirstUniqueCharacterInAString_bloomberg",
    algorithm:
      '//Given a string, find the first non-repeating character in it and return it\'s index. If it doesn\'t exist, return -1.\n//\n//Examples:\n//\n//s = "leetcode"\n//return 0.\n//\n//s = "loveleetcode",\n//return 2.\n//Note: You may assume the string contain only lowercase letters.\n\nclass FirstUniqueCharacterInAString {\n    public int firstUniqChar(String s) {\n        HashMap<Character, Integer> characters = new HashMap<Character, Integer>();\n        for(int i = 0; i < s.length(); i++) {\n            char current = s.charAt(i);\n            if(characters.containsKey(current)) {\n                characters.put(current, -1);\n            } else {\n                characters.put(current, i);\n            }\n        }\n        \n        int min = Integer.MAX_VALUE;\n        for(char c: characters.keySet()) {\n            if(characters.get(c) > -1 && characters.get(c) < min) {\n                min = characters.get(c);\n            }\n        }\n        \n        return min == Integer.MAX_VALUE ? -1 : min;\n        \n    }\n}\n',
    index: 295,
  },
  {
    title: "Linked List Cycle",
    category: "bloomberg",
    id: "LinkedListCycle_bloomberg",
    algorithm:
      "//Given a linked list, determine if it has a cycle in it.\n//Follow up:\n//Can you solve it without using extra space?\n/**\n * Definition for singly-linked list.\n * class ListNode {\n *     int val;\n *     ListNode next;\n *     ListNode(int x) {\n *         val = x;\n *         next = null;\n *     }\n * }\n */\npublic class Solution {\n    public boolean hasCycle(ListNode head) {\n        if(head == null || head.next == null) {\n            return false;\n        }\n        \n        ListNode slow = head;\n        ListNode fast = head.next;\n        while(fast != null && fast.next != null && fast != slow) {\n            slow = slow.next;\n            fast = fast.next.next;\n        }\n        \n        return fast == slow;\n    }\n}\n\n",
    index: 296,
  },
  {
    title: "Longest Palindromic Substring",
    category: "bloomberg",
    id: "LongestPalindromicSubstring_bloomberg",
    algorithm:
      '//Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.\n\n//Example:\n//Input: "babad"\n//Output: "bab"\n\n//Note: "aba" is also a valid answer.\n\n//Example:\n//Input: "cbbd"\n//Output: "bb"\n\nclass LongestPalindromicSubstring {\n    public String longestPalindrome(String s) {\n        if(s == null || s.length() == 0) {\n            return "";\n        }\n        \n        String longestPalindromicSubstring = "";\n        for(int i = 0; i < s.length(); i++) {\n            for(int j = i + 1; j <= s.length(); j++) {\n                if(j - i > longestPalindromicSubstring.length() && isPalindrome(s.substring(i, j))) {\n                    longestPalindromicSubstring = s.substring(i, j);\n                }\n            }\n        }\n        \n        return longestPalindromicSubstring;\n    }\n    \n    public boolean isPalindrome(String s) {\n        int i = 0;\n        int j = s.length() - 1;\n        while(i <= j) {\n            if(s.charAt(i++) != s.charAt(j--)) {\n                return false;\n            }\n        }\n        \n        return true;\n    }\n}\n\n',
    index: 297,
  },
  {
    title: "Min Stack",
    category: "bloomberg",
    id: "MinStack_bloomberg",
    algorithm:
      "//Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.\n//push(x) -- Push element x onto stack.\n//pop() -- Removes the element on top of the stack.\n//top() -- Get the top element.\n//getMin() -- Retrieve the minimum element in the stack.\n\n/**\n * Your MinStack object will be instantiated and called as such:\n * MinStack obj = new MinStack();\n * obj.push(x);\n * obj.pop();\n * int param_3 = obj.top();\n * int param_4 = obj.getMin();\n */\nclass MinStack {\n    class Node {\n        int data;\n        int min;\n        Node next;\n        \n        public Node(int data, int min) {\n            this.data = data;\n            this.min = min;\n            this.next = null;\n        }\n    }\n    Node head;\n    \n    /** initialize your data structure here. */\n    public MinStack() {\n        \n    }\n    \n    public void push(int x) {\n        if(head == null) {\n            head = new Node(x, x);\n        } else {\n            Node newNode = new Node(x, Math.min(x, head.min));\n            newNode.next = head;\n            head = newNode;\n        }\n    }\n    \n    public void pop() {\n        head = head.next;\n    }\n    \n    public int top() {\n        return head.data;\n    }\n    \n    public int getMin() {\n        return head.min;\n    }\n}\n",
    index: 298,
  },
  {
    title: "Reverse Words In A String",
    category: "bloomberg",
    id: "ReverseWordsInAString_bloomberg",
    algorithm:
      '//Given an input string, reverse the string word by word.\n//For example,\n//Given s = "the sky is blue",\n//return "blue is sky the".\n\npublic class ReverseWordsInAString {\n    public String reverseWords(String s) {\n        String[] words = s.trim().split("\\\\s+");\n        String result = "";\n        for(int i = words.length - 1; i > 0; i--) {\n            result += words[i] + " ";\n        }\n        \n        return result + words[0];\n    }\n}\n\n',
    index: 299,
  },
  {
    title: "Unique Paths",
    category: "bloomberg",
    id: "UniquePaths_bloomberg",
    algorithm:
      "//A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).\n//\n//The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).\n//\n//How many possible unique paths are there?\n\nclass UniquePaths {\n    public int uniquePaths(int m, int n) {\n        Integer[][] map = new Integer[m][n];\n        \n        //only 1 way to get to ith row, 0th column (move down)\n        for(int i = 0; i < m; i++){\n            map[i][0] = 1;\n        }\n        \n        //only 1 way to get to ith column, 0th row (move right)\n        for(int j= 0; j < n; j++){\n            map[0][j]=1;\n        }\n        \n        //x ways to get to ith row, jth column (# of ways to get to\n        //ith - 1 row, jth column + # of ways to get to jth - 1 column\n        //ith column\n        for(int i = 1;i < m; i++){\n            for(int j = 1; j < n; j++){\n                map[i][j] = map[i - 1][j] + map[i][j - 1];\n            }\n        }\n\n        return map[m - 1][n - 1];\n    }\n}\n\n",
    index: 300,
  },
  { title: "Facebook", category: "top-companies", id: "facebook", index: 301 },
  {
    title: "3 Sum",
    category: "facebook",
    id: "3Sum_facebook",
    algorithm:
      "// Given an array S of n integers, are there elements a, b, c in S such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.\n\n// Note: The solution set must not contain duplicate triplets.\n\n// For example, given array S = [-1, 0, 1, 2, -1, -4],\n\n// A solution set is:\n// [\n//   [-1, 0, 1],\n//   [-1, -1, 2]\n// ]\n\npublic class 3Sum {\n    public List<List<Integer>> threeSum(int[] nums) {\n        List<List<Integer>>  result = new ArrayList<>();\n        \n        Arrays.sort(nums);\n        \n        for(int i = 0; i < nums.length - 2; i++) {\n            if(i > 0 && nums[i] == nums[i - 1]) {\n                continue;\n            }\n            \n            int j = i + 1;\n            int k = nums.length - 1;\n            int target = -nums[i];\n            \n            while(j < k) {\n                if(nums[j] + nums[k] == target) {\n                    ArrayList<Integer> temp = new ArrayList<Integer>();\n                    \n                    temp.add(nums[i]);\n                    temp.add(nums[j]);\n                    temp.add(nums[k]);\n                    \n                    result.add(temp);\n                    \n                    j++;\n                    k--;\n                    \n                    while(j < k && nums[j] == nums[j - 1]) {\n                        j++;\n                    }\n\n                    while(j < k && nums[k] == nums[k + 1]) {\n                        k--;\n                    }\n                } else if(nums[j] + nums[k] > target) {\n                    k--;\n                } else {\n                    j++;\n                }\n            }\n        }\n        \n        return result;\n    }\n}\n",
    index: 302,
  },
  {
    title: "Add And Search Word Data Structure Design",
    category: "facebook",
    id: "AddAndSearchWordDataStructureDesign_facebook",
    algorithm:
      '// Design a data structure that supports the following two operations:\n\n// void addWord(word)\n// bool search(word)\n// search(word) can search a literal word or a regular expression string containing only letters a-z or .. A . means it can represent any one letter.\n\n// For example:\n\n// addWord("bad")\n// addWord("dad")\n// addWord("mad")\n// search("pad") -> false\n// search("bad") -> true\n// search(".ad") -> true\n// search("b..") -> true\n\n// Note:\n    // You may assume that all words are consist of lowercase letters a-z.\n\npublic class AddAndSearchWordDataStructure {\n    public class TrieNode {\n        public TrieNode[] children = new TrieNode[26];\n        public String item = "";\n    }\n    \n    private TrieNode root = new TrieNode();\n\n    public void addWord(String word) {\n        TrieNode node = root;\n\n        for (char c : word.toCharArray()) {\n            if (node.children[c - \'a\'] == null) {\n                node.children[c - \'a\'] = new TrieNode();\n            }\n\n            node = node.children[c - \'a\'];\n        }\n\n        node.item = word;\n    }\n\n    public boolean search(String word) {\n        return match(word.toCharArray(), 0, root);\n    }\n    \n    private boolean match(char[] chs, int k, TrieNode node) {\n        if (k == chs.length) {\n            return !node.item.equals(""); \n        }\n\n        if (chs[k] != \'.\') {\n            return node.children[chs[k] - \'a\'] != null && match(chs, k + 1, node.children[chs[k] - \'a\']);\n        } else {\n            for (int i = 0; i < node.children.length; i++) {\n                if (node.children[i] != null) {\n                    if (match(chs, k + 1, node.children[i])) {\n                        return true;\n                    }\n                }\n            }\n        }\n\n        return false;\n    }\n}\n',
    index: 303,
  },
  {
    title: "Add Binary",
    category: "facebook",
    id: "AddBinary_facebook",
    algorithm:
      '// Given two binary strings, return their sum (also a binary string).\n\n// For example,\n// a = "11"\n// b = "1"\n// Return "100"\n\npublic class AddBinary {\n    public String addBinary(String a, String b) {\n        StringBuilder result = new StringBuilder();\n        \n        int carry = 0;\n        \n        int i = a.length() - 1;\n        int j = b.length() - 1;\n        \n        while(i >= 0 || j >= 0) {\n            int sum = carry;\n\n            if(i >= 0) {\n                sum += a.charAt(i--) - \'0\';\n            }\n\n            if(j >= 0) {\n                sum += b.charAt(j--) - \'0\';\n            }\n\n            result.append(sum % 2);\n            carry = sum / 2;\n        }\n        \n        if(carry != 0) {\n            result.append(carry);\n        }\n\n        return result.reverse().toString();\n    }\n}\n',
    index: 304,
  },
  {
    title: "Best Time To Buy And Sell Stock",
    category: "facebook",
    id: "BestTimeToBuyAndSellStock_facebook",
    algorithm:
      "// Say you have an array for which the ith element is the price of a given stock on day i.\n\n// If you were only permitted to complete at most one transaction (ie, buy one and sell one share of the stock), design an algorithm to find the maximum profit.\n\n// Example 1:\n// Input: [7, 1, 5, 3, 6, 4]\n// Output: 5\n\n// max. difference = 6-1 = 5 (not 7-1 = 6, as selling price needs to be larger than buying price)\n// Example 2:\n// Input: [7, 6, 4, 3, 1]\n// Output: 0\n\n// In this case, no transaction is done, i.e. max profit = 0.\n\npublic class BestTimeToBuyAndSellStock {\n    public int maxProfit(int[] prices) {\n        //Kadane's algorithm\n        if(prices.length == 0) {\n            return 0;\n        }\n        \n        int max = 0;\n        int min = prices[0];\n        \n        for(int i = 1; i < prices.length; i++) {\n            if(prices[i] > min) {\n                max = Math.max(max, prices[i] - min);\n            } else {\n                min = prices[i];\n            }\n        }\n        \n        return max;\n    }\n}\n",
    index: 305,
  },
  {
    title: "Binary Search Tree Iterator",
    category: "facebook",
    id: "BinarySearchTreeIterator_facebook",
    algorithm:
      "// Implement an iterator over a binary search tree (BST). Your iterator will be initialized with the root node of a BST.\n\n// Calling next() will return the next smallest number in the BST.\n\n// Note: next() and hasNext() should run in average O(1) time and uses O(h) memory, where h is the height of the tree.\n\n/**\n * Definition for binary tree\n * public class TreeNode {\n *     int val;\n *     TreeNode left;\n *     TreeNode right;\n *     TreeNode(int x) { val = x; }\n * }\n */\n\npublic class BinarySearchTreeIterator {\n    Stack<TreeNode> stack;\n\n    public BSTIterator(TreeNode root) {\n        stack = new Stack<TreeNode>();\n        \n        while(root != null) {\n            stack.push(root);\n            root = root.left;\n        }\n    }\n\n    /** @return whether we have a next smallest number */\n    public boolean hasNext() {\n        return stack.isEmpty() ? false : true;\n    }\n\n    /** @return the next smallest number */\n    public int next() {\n        TreeNode nextSmallest = stack.pop();\n        TreeNode addToStack = nextSmallest.right;\n        \n        while(addToStack != null) {\n            stack.add(addToStack);\n            addToStack = addToStack.left;\n        }\n        \n        return nextSmallest.val;\n    }\n}\n\n/**\n * Your BSTIterator will be called like this:\n * BSTIterator i = new BSTIterator(root);\n * while (i.hasNext()) v[f()] = i.next();\n */\n",
    index: 306,
  },
  {
    title: "Binary Tree Level Order Traversal",
    category: "facebook",
    id: "BinaryTreeLevelOrderTraversal_facebook",
    algorithm:
      "// Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).\n\n// For example:\n// Given binary tree [3,9,20,null,null,15,7],\n//     3\n//    / \\\n//   9  20\n//     /  \\\n//    15   7\n// return its level order traversal as:\n// [\n//   [3],\n//   [9,20],\n//   [15,7]\n// ]\n\n/**\n * Definition for a binary tree node.\n * public class TreeNode {\n *     int val;\n *     TreeNode left;\n *     TreeNode right;\n *     TreeNode(int x) { val = x; }\n * }\n */\npublic class BinaryTreeLevelOrderTraversal {\n    public List<List<Integer>> levelOrder(TreeNode root) {\n        List<List<Integer>> result = new ArrayList<List<Integer>>();\n        \n        if(root == null) {\n            return result;\n        }\n        \n        Queue<TreeNode> queue = new LinkedList<TreeNode>();\n        \n        queue.add(root);\n        \n        List<Integer> tempList = new ArrayList<Integer>();\n        tempList.add(root.val);\n        result.add(tempList);\n        \n        while(!queue.isEmpty()) {\n            Queue<TreeNode> currentLevel = new LinkedList<TreeNode>();\n            \n            List<Integer> list = new ArrayList<Integer>();\n            \n            while(!queue.isEmpty()) {\n                TreeNode current = queue.remove();\n                \n                if(current.left != null) {\n                    currentLevel.add(current.left);\n                    list.add(current.left.val);\n                }\n                \n                if(current.right != null) {\n                    currentLevel.add(current.right);\n                    list.add(current.right.val);\n                }\n            }\n            \n            if(list.size() > 0) {\n                result.add(list);\n            }\n\n            queue = currentLevel;\n        }\n        \n        return result;\n    }\n}\n",
    index: 307,
  },
  {
    title: "Binary Tree Paths",
    category: "facebook",
    id: "BinaryTreePaths_facebook",
    algorithm:
      '// Given a binary tree, return all root-to-leaf paths.\n\n// For example, given the following binary tree:\n\n//    1\n//  /   \\\n// 2     3\n//  \\\n//   5\n// All root-to-leaf paths are:\n\n// ["1->2->5", "1->3"]\n\n/**\n * Definition for a binary tree node.\n * public class TreeNode {\n *     int val;\n *     TreeNode left;\n *     TreeNode right;\n *     TreeNode(int x) { val = x; }\n * }\n */\npublic class BinaryTreePaths {\n    public List<String> binaryTreePaths(TreeNode root) {\n        List<String> result = new ArrayList<String>();\n        \n        if(root == null) {\n            return result;\n        }\n        \n        helper(new String(), root, result);\n        \n        return result;\n    }\n    \n    public void helper(String current, TreeNode root, List<String> result) {\n        if(root.left == null && root.right == null) {\n            result.add(current + root.val);\n        }\n\n        if(root.left != null) {\n            helper(current + root.val + "->", root.left, result);\n        }\n\n        if(root.right != null) {\n            helper(current + root.val + "->", root.right, result);\n        }\n    }\n}\n',
    index: 308,
  },
  {
    title: "Binary Tree Vertical Order Traversal",
    category: "facebook",
    id: "BinaryTreeVerticalOrderTraversal_facebook",
    algorithm:
      "// Given a binary tree, return the vertical order traversal of its nodes' values. (ie, from top to bottom, column by column).\n\n// If two nodes are in the same row and column, the order should be from left to right.\n\n// Examples:\n\n// Given binary tree [3,9,20,null,null,15,7],\n//    3\n//   /\\\n//  /  \\\n//  9  20\n//     /\\\n//    /  \\\n//   15   7\n// return its vertical order traversal as:\n// [\n//   [9],\n//   [3,15],\n//   [20],\n//   [7]\n// ]\n// Given binary tree [3,9,8,4,0,1,7],\n//      3\n//     /\\\n//    /  \\\n//    9   8\n//   /\\  /\\\n//  /  \\/  \\\n//  4  01   7\n// return its vertical order traversal as:\n// [\n//   [4],\n//   [9],\n//   [3,0,1],\n//   [8],\n//   [7]\n// ]\n// Given binary tree [3,9,8,4,0,1,7,null,null,null,2,5] (0's right child is 2 and 1's left child is 5),\n//      3\n//     /\\\n//    /  \\\n//    9   8\n//   /\\  /\\\n//  /  \\/  \\\n//  4  01   7\n//     /\\\n//    /  \\\n//    5   2\n// return its vertical order traversal as:\n// [\n//   [4],\n//   [9,5],\n//   [3,0,1],\n//   [8,2],\n//   [7]\n// ]\n\n/**\n * Definition for a binary tree node.\n * public class TreeNode {\n *     int val;\n *     TreeNode left;\n *     TreeNode right;\n *     TreeNode(int x) { val = x; }\n * }\n */\npublic class BinaryTreeVerticalOrderTraversal {\n    public List<List<Integer>> verticalOrder(TreeNode root) {\n        List<List<Integer>> result = new ArrayList<>();\n\n        if(root == null) {\n            return result;\n        }\n        \n        Map<Integer, ArrayList<Integer>> map = new HashMap<>();\n        Queue<TreeNode> q = new LinkedList<>();\n        Queue<Integer> cols = new LinkedList<>();\n        \n        q.add(root);\n        cols.add(0);\n        \n        int min = 0;\n        int max = 0;\n        \n        while(!q.isEmpty()) {\n            TreeNode node = q.poll();\n            int col = cols.poll();\n            \n            if(!map.containsKey(col)) {\n                map.put(col, new ArrayList<Integer>());\n            }\n            \n            map.get(col).add(node.val);\n            \n            if(node.left != null) {\n                q.add(node.left);\n                cols.add(col - 1);\n                min = Math.min(min, col - 1);\n            }\n            \n            if(node.right != null) {\n                q.add(node.right);\n                cols.add(col + 1);\n                max = Math.max(max, col + 1);\n            }\n        }\n        \n        for(int i = min; i <= max; i++) {\n            result.add(map.get(i));\n        }\n        \n        return result;\n    }\n}\n",
    index: 309,
  },
  {
    title: "Clone Graph",
    category: "facebook",
    id: "CloneGraph_facebook",
    algorithm:
      "// Clone an undirected graph. Each node in the graph contains a label and a list of its neighbors.\n\n// OJ's undirected graph serialization:\n// Nodes are labeled uniquely.\n\n// We use # as a separator for each node, and , as a separator for node label and each neighbor of the node.\n// As an example, consider the serialized graph {0,1,2#1,2#2,2}.\n\n// The graph has a total of three nodes, and therefore contains three parts as separated by #.\n\n// First node is labeled as 0. Connect node 0 to both nodes 1 and 2.\n// Second node is labeled as 1. Connect node 1 to node 2.\n// Third node is labeled as 2. Connect node 2 to node 2 (itself), thus forming a self-cycle.\n// Visually, the graph looks like the following:\n\n//        1\n//       / \\\n//      /   \\\n//     0 --- 2\n//          / \\\n//          \\_/\n\n/**\n * Definition for undirected graph.\n * class UndirectedGraphNode {\n *     int label;\n *     List<UndirectedGraphNode> neighbors;\n *     UndirectedGraphNode(int x) { label = x; neighbors = new ArrayList<UndirectedGraphNode>(); }\n * };\n */\npublic class CloneGraph {\n    public HashMap<Integer, UndirectedGraphNode> map = new HashMap<Integer, UndirectedGraphNode>();\n    \n    public UndirectedGraphNode cloneGraph(UndirectedGraphNode node) {\n        if(node == null) {\n            return null;\n        }\n        \n        if(map.containsKey(node.label)) {\n            return map.get(node.label);\n        }\n        \n        UndirectedGraphNode newNode = new UndirectedGraphNode(node.label);\n        map.put(newNode.label, newNode);\n        \n        for(UndirectedGraphNode neighbor : node.neighbors) {\n            newNode.neighbors.add(cloneGraph(neighbor));\n        }\n        \n        return newNode;\n    }\n}\n",
    index: 310,
  },
  {
    title: "Combination Sum I V",
    category: "facebook",
    id: "CombinationSumIV_facebook",
    algorithm:
      "// Given an integer array with all positive numbers and no duplicates, find the number of possible combinations that add up to a positive integer target.\n\n// Example:\n\n// nums = [1, 2, 3]\n// target = 4\n\n// The possible combination ways are:\n// (1, 1, 1, 1)\n// (1, 1, 2)\n// (1, 2, 1)\n// (1, 3)\n// (2, 1, 1)\n// (2, 2)\n// (3, 1)\n\n// Note that different sequences are counted as different combinations.\n\n// Therefore the output is 7.\n\n// Follow up:\n    // What if negative numbers are allowed in the given array?\n    // How does it change the problem?\n    // What limitation we need to add to the question to allow negative numbers?\n\npublic class Solution {\n\n    public int combinationSum4(int[] nums, int target) {\n        \n        int[] dp = new int[target + 1];\n        dp[0] = 1;\n        \n        for(int i = 1; i < dp.length; i++) {\n            for(int j = 0; j < nums.length; j++) {\n                \n                if(i - nums[j] >= 0) {\n                    \n                    dp[i] += dp[i - nums[j]];\n                    \n                }\n                \n            }\n            \n        }\n        \n        return dp[target];\n        \n    }\n\n}",
    index: 311,
  },
  {
    title: "Count And Say",
    category: "facebook",
    id: "CountAndSay_facebook",
    algorithm:
      '// The count-and-say sequence is the sequence of integers beginning as follows:\n// 1, 11, 21, 1211, 111221, ...\n\n// 1 is read off as "one 1" or 11.\n// 11 is read off as "two 1s" or 21.\n// 21 is read off as "one 2, then one 1" or 1211.\n// Given an integer n, generate the nth sequence.\n\n// Note: The sequence of integers will be represented as a string.\n\npublic class Solution {\n\n    public String countAndSay(int n) {\n        \n        String s = "1";\n        for(int i = 1; i < n; i++) {\n            \n            s = helper(s);\n            \n        }\n        \n        return s;\n        \n    }\n    \n    \n    public String helper(String s) {\n        \n        StringBuilder sb = new StringBuilder();\n        char c = s.charAt(0);\n        int count = 1;\n        \n        for(int i = 1; i < s.length(); i++) {\n            \n            if(s.charAt(i) == c) count++;\n            \n            else {\n                \n                sb.append(count);\n                sb.append(c);\n                c = s.charAt(i);\n                count = 1;\n                \n            }\n            \n        }\n        \n        sb.append(count);\n        sb.append(c);\n        return sb.toString();\n        \n    }\n    \n}',
    index: 312,
  },
  {
    title: "Decode Ways",
    category: "facebook",
    id: "DecodeWays_facebook",
    algorithm:
      "// A message containing letters from A-Z is being encoded to numbers using the following mapping:\n\n// 'A' -> 1\n// 'B' -> 2\n// ...\n// 'Z' -> 26\n\n// Given an encoded message containing digits, determine the total number of ways to decode it.\n\n// For example,\n// Given encoded message \"12\", it could be decoded as \"AB\" (1 2) or \"L\" (12).\n\n// The number of ways decoding \"12\" is 2.\n\npublic class DecodeWays {\n    public int numDecodings(String s) {\n        int n = s.length();\n\n        if(n == 0) {\n            return 0;\n        }\n        \n        int[] dp = new int[n + 1];\n        dp[n] = 1;\n        dp[n - 1] = s.charAt(n - 1) != '0' ? 1 : 0;\n        \n        for(int i = n - 2; i >= 0; i--) {\n            if(s.charAt(i) == '0') {\n                continue;\n            } else {\n                dp[i] = (Integer.parseInt(s.substring(i, i + 2)) <= 26) ? dp[i + 1] + dp[i + 2] : dp[i + 1];\n            }\n        }\n        \n        return dp[0];\n    }\n}\n",
    index: 313,
  },
  {
    title: "Encode And Decode Tiny U R L",
    category: "facebook",
    id: "EncodeAndDecodeTinyURL_facebook",
    algorithm:
      '//TinyURL is a URL shortening service where you enter a URL such as https://leetcode.com/problems/design-tinyurl \n//and it returns a short URL such as http://tinyurl.com/4e9iAk.\n//\n//Design the encode and decode methods for the TinyURL service. There is no restriction on how your \n//encode/decode algorithm should work. You just need to ensure that a URL can be encoded to a tiny URL \n//and the tiny URL can be decoded to the original URL.\n\npublic class EncodeAndDecodeTinyURL {\n    HashMap<String, String> map = new HashMap<String, String>();\n    String characters = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";\n    int count = 1;\n\n    public String getKey() {\n        String key = "";\n        while(count > 0) {\n            count--;\n            key += characters.charAt(count);\n            count /= characters.length();\n        }\n        \n        return key;\n    }\n    \n    // Encodes a URL to a shortened URL.\n    public String encode(String longUrl) {\n        String key = getKey();\n        map.put(key, longUrl);\n        count++;\n            \n        return "http://tinyurl.com/" + key;\n    }\n\n    // Decodes a shortened URL to its original URL.\n    public String decode(String shortUrl) {\n        return map.get(shortUrl.replace("http://tinyurl.com/", ""));\n    }\n}\n\n// Your Codec object will be instantiated and called as such:\n// Codec codec = new Codec();\n// codec.decode(codec.encode(url));\n',
    index: 314,
  },
  {
    title: "Exclusive Time Of Functions",
    category: "facebook",
    id: "ExclusiveTimeOfFunctions_facebook",
    algorithm:
      '//Given the running logs of n functions that are executed in a nonpreemptive single threaded CPU, find the exclusive time of these functions.\n\n//Each function has a unique id, start from 0 to n-1. A function may be called recursively or by another function.\n\n//A log is a string has this format : function_id:start_or_end:timestamp. For example, "0:start:0" means function 0 starts from the very beginning of time 0. "0:end:0" means function 0 ends to the very end of time 0.\n\n//Exclusive time of a function is defined as the time spent within this function, the time spent by calling other functions should not be considered as this function\'s exclusive time. You should return the exclusive time of each function sorted by their function id.\n\n//Example 1:\n//Input:\n//n = 2\n//logs = \n//["0:start:0",\n //"1:start:2",\n //"1:end:5",\n //"0:end:6"]\n//Output:[3, 4]\n//Explanation:\n//Function 0 starts at time 0, then it executes 2 units of time and reaches the end of time 1. \n//Now function 0 calls function 1, function 1 starts at time 2, executes 4 units of time and end at time 5.\n//Function 0 is running again at time 6, and also end at the time 6, thus executes 1 unit of time. \n//So function 0 totally execute 2 + 1 = 3 units of time, and function 1 totally execute 4 units of time.\n//Note:\n//Input logs will be sorted by timestamp, NOT log id.\n//Your output should be sorted by function id, which means the 0th element of your output corresponds to the exclusive time of function 0.\n//Two functions won\'t start or end at the same time.\n//Functions could be called recursively, and will always end.\n//1 <= n <= 100\n\nclass ExclusiveTimeOfFunctions {\n    public int[] exclusiveTime(int n, List<String> logs) {\n        Stack<Integer> stack = new Stack <Integer>();\n        int[] result = new int[n];\n        String[] current = logs.get(0).split(":");\n        stack.push(Integer.parseInt(current[0]));\n        int i = 1;\n        int previous = Integer.parseInt(current[2]);\n        while (i < logs.size()) {\n            current = logs.get(i).split(":");\n            if (current[1].equals("start")) {\n                if (!stack.isEmpty()) {\n                    result[stack.peek()] += Integer.parseInt(current[2]) - previous;\n                }\n                stack.push(Integer.parseInt(current[0]));\n                previous = Integer.parseInt(current[2]);\n            } else {\n                result[stack.peek()] += Integer.parseInt(current[2]) - previous + 1;\n                stack.pop();\n                previous = Integer.parseInt(current[2]) + 1;\n            }\n            i++;\n        }\n        return result;\n    }\n}\n',
    index: 315,
  },
  {
    title: "Expression Add Operators",
    category: "facebook",
    id: "ExpressionAddOperators_facebook",
    algorithm:
      '// Given a string that contains only digits 0-9 and a target value, return all possibilities to add binary operators (not unary) +, -, or * between the digits so they evaluate to the target value.\n\n// Examples: \n// "123", 6 -> ["1+2+3", "1*2*3"] \n// "232", 8 -> ["2*3+2", "2+3*2"]\n// "105", 5 -> ["1*0+5","10-5"]\n// "00", 0 -> ["0+0", "0-0", "0*0"]\n// "3456237490", 9191 -> []\n\npublic class ExpressionAddOperators {\n    public List<String> addOperators(String num, int target) {\n        List<String> result = new ArrayList<String>();\n\n        if(num == null || num.length() == 0) {\n            return result;\n        }\n\n        helper(result, "", num, target, 0, 0, 0);\n\n        return result;\n    }\n    \n    public void helper(List<String> result, String path, String num, int target, int pos, long eval, long multed) {\n        if(pos == num.length()) {\n            if(eval == target) {\n                result.add(path);\n            }\n            \n            return;\n        }\n        \n        for(int i = pos; i < num.length(); i++) {\n            if(i != pos && num.charAt(pos) == \'0\') {\n                break;\n            }\n\n            long cur = Long.parseLong(num.substring(pos, i + 1));\n\n            if(pos == 0) {\n                helper(result, path + cur, num, target, i + 1, cur, cur);\n            } else {\n                helper(result, path + "+" + cur, num, target, i + 1, eval + cur, cur);\n                helper(result, path + "-" + cur, num, target, i + 1, eval - cur, -cur);\n                helper(result, path + "*" + cur, num, target, i + 1, eval - multed + multed * cur, multed * cur);\n            }\n        }\n    }\n}\n',
    index: 316,
  },
  {
    title: "Find The Celebrity",
    category: "facebook",
    id: "FindTheCelebrity_facebook",
    algorithm:
      '// Suppose you are at a party with n people (labeled from 0 to n - 1) and among them, there may exist one celebrity. The definition of a celebrity is that all the other n - 1 people know him/her but he/she does not know any of them.\n\n// Now you want to find out who the celebrity is or verify that there is not one. The only thing you are allowed to do is to ask questions like: "Hi, A. Do you know B?" to get information of whether A knows B. You need to find out the celebrity (or verify there is not one) by asking as few questions as possible (in the asymptotic sense).\n\n// You are given a helper function bool knows(a, b) which tells you whether A knows B. Implement a function int findCelebrity(n), your function should minimize the number of calls to knows.\n\n// Note: There will be exactly one celebrity if he/she is in the party. Return the celebrity\'s label if there is a celebrity in the party. If there is no celebrity, return -1.\n\n/* The knows API is defined in the parent class Relation.\n      boolean knows(int a, int b); */\n\npublic class FindTheCelebrity extends Relation {\n    public int findCelebrity(int n) {\n        //initialize candidate to 0\n        int candidate = 0;\n        \n        //find viable candidate\n        for(int i = 1; i < n; i++) {\n            if(knows(candidate, i)) {\n                candidate = i;\n            }\n        }\n        \n        \n        //check that everyone else knows the candidate\n        for(int i = 0; i < n; i++) {\n            //if the candidate knows the current person or the current person does not know the candidate, return -1 (candidate is not a celebrity)\n            if(i != candidate && knows(candidate, i) || !knows(i, candidate)) {\n                return -1;\n            }\n        }\n        \n        //return the celebrity\n        return candidate;\n    }\n}\n',
    index: 317,
  },
  {
    title: "First Bad Version",
    category: "facebook",
    id: "FirstBadVersion_facebook",
    algorithm:
      "// You are a product manager and currently leading a team to develop a new product. Unfortunately, the latest version of your product fails the quality check. Since each version is developed based on the previous version, all the versions after a bad version are also bad.\n\n// Suppose you have n versions [1, 2, ..., n] and you want to find out the first bad one, which causes all the following ones to be bad.\n\n// You are given an API bool isBadVersion(version) which will return whether version is bad. Implement a function to find the first bad version. You should minimize the number of calls to the API.\n\n/* The isBadVersion API is defined in the parent class VersionControl.\n      boolean isBadVersion(int version); */\n\npublic class FirstBadVersion extends VersionControl {\n    public int firstBadVersion(int n) {\n        int start = 1;\n        int end = n;\n        \n        while(start < end) {\n            int mid = start + (end - start) / 2;\n\n            if(!isBadVersion(mid)) {\n                start = mid + 1;\n            } else {\n                end = mid;\n            }\n        }\n        \n        return start;\n    }\n}\n",
    index: 318,
  },
  {
    title: "Flatten Nested List Iterator",
    category: "facebook",
    id: "FlattenNestedListIterator_facebook",
    algorithm:
      "// Given a nested list of integers, implement an iterator to flatten it.\n\n// Each element is either an integer, or a list -- whose elements may also be integers or other lists.\n\n// Example 1:\n// Given the list [[1,1],2,[1,1]],\n\n// By calling next repeatedly until hasNext returns false, the order of elements returned by next should be: [1,1,2,1,1].\n\n// Example 2:\n// Given the list [1,[4,[6]]],\n\n// By calling next repeatedly until hasNext returns false, the order of elements returned by next should be: [1,4,6].\n\n/**\n * // This is the interface that allows for creating nested lists.\n * // You should not implement it, or speculate about its implementation\n * public interface NestedInteger {\n *\n *     // @return true if this NestedInteger holds a single integer, rather than a nested list.\n *     public boolean isInteger();\n *\n *     // @return the single integer that this NestedInteger holds, if it holds a single integer\n *     // Return null if this NestedInteger holds a nested list\n *     public Integer getInteger();\n *\n *     // @return the nested list that this NestedInteger holds, if it holds a nested list\n *     // Return null if this NestedInteger holds a single integer\n *     public List<NestedInteger> getList();\n * }\n */\npublic class FlattenNestedListIterator implements Iterator<Integer> {\n    Stack<NestedInteger> stack = new Stack<NestedInteger>();\n\n    public NestedIterator(List<NestedInteger> nestedList) {\n        for(int i = nestedList.size() - 1; i >= 0; i--) {\n            stack.push(nestedList.get(i));\n        }\n    }\n\n    @Override\n    public Integer next() {\n        return stack.pop().getInteger();\n    }\n\n    @Override\n    public boolean hasNext() {\n        while(!stack.isEmpty()) {\n            NestedInteger current = stack.peek();\n\n            if(current.isInteger()) {\n                return true;\n            }\n\n            stack.pop();\n\n            for(int i = current.getList().size() - 1;  i >= 0; i--) {\n                stack.push(current.getList().get(i));\n            }\n        }\n        \n        return false;\n    }\n}\n\n/**\n * Your NestedIterator object will be instantiated and called as such:\n * NestedIterator i = new NestedIterator(nestedList);\n * while (i.hasNext()) v[f()] = i.next();\n */\n",
    index: 319,
  },
  {
    title: "Group Anagrams",
    category: "facebook",
    id: "GroupAnagrams_facebook",
    algorithm:
      '// Given an array of strings, group anagrams together.\n\n// For example, given: ["eat", "tea", "tan", "ate", "nat", "bat"], \n// Return:\n\n// [\n//   ["ate", "eat","tea"],\n//   ["nat","tan"],\n//   ["bat"]\n// ]\n// Note: All inputs will be in lower-case.\n\npublic class GroupAnagrams {\n    public List<List<String>> groupAnagrams(String[] strs) {\n        if(strs == null || strs.length == 0) {\n            return new ArrayList<List<String>>();\n        }\n        \n        HashMap<String, ArrayList<String>> map = new HashMap<String, ArrayList<String>>();\n        \n        Arrays.sort(strs);\n        \n        for(String s : strs) {\n            char[] characters = s.toCharArray();\n        \n            Arrays.sort(characters);\n            \n            String key = String.valueOf(characters);\n            \n            if(!map.containsKey(key)) {\n                map.put(key, new ArrayList<String>());\n            }\n            \n            map.get(key).add(s);\n        }\n        \n        return new ArrayList<List<String>>(map.values());\n    }\n}\n',
    index: 320,
  },
  {
    title: "Hamming Distance",
    category: "facebook",
    id: "HammingDistance_facebook",
    algorithm:
      "// The Hamming distance between two integers is the number of positions at which the corresponding bits are different.\n\n// Given two integers x and y, calculate the Hamming distance.\n\n// Note:\n// 0 ≤ x, y < 2^31.\n\n// Example:\n\n// Input: x = 1, y = 4\n\n// Output: 2\n\n// Explanation:\n// 1   (0 0 0 1)\n// 4   (0 1 0 0)\n//        ↑   ↑\n\n// The above arrows point to positions where the corresponding bits are different.\n\npublic class HammingDistance {\n    public int hammingDistance(int x, int y) {\n        return Integer.bitCount(x ^ y);\n    }\n}\n",
    index: 321,
  },
  {
    title: "Implement Trie",
    category: "facebook",
    id: "ImplementTrie_facebook",
    algorithm:
      '// Implement a trie with insert, search, and startsWith methods.\n\n// Note:\n// You may assume that all inputs are consist of lowercase letters a-z.\n\n// Your Trie object will be instantiated and called as such:\n// Trie trie = new Trie();\n// trie.insert("somestring");\n// trie.search("key");\n\nclass TrieNode {\n    HashMap<Character, TrieNode> map;\n    char character;\n    boolean last;\n    \n    // Initialize your data structure here.\n    public TrieNode(char character) {\n        this.map = new HashMap<Character, TrieNode>();\n        this.character = character;\n        this.last = false;\n    }\n}\n\npublic class ImplementTrie {\n    private TrieNode root;\n\n    public Trie() {\n        root = new TrieNode(\' \');\n    }\n\n    // Inserts a word into the trie.\n    public void insert(String word) {\n        TrieNode current = root;\n            \n        for(char c : word.toCharArray()) {\n            if(!current.map.containsKey(c)) {\n                current.map.put(c, new TrieNode(c));\n            }\n            \n            current = current.map.get(c);\n        }\n        \n        current.last = true;\n    }\n\n    // Returns if the word is in the trie.\n    public boolean search(String word) {\n        TrieNode current = root;\n        \n        for(char c : word.toCharArray()) {\n            if(!current.map.containsKey(c)) {\n                return false;\n            }\n\n            current = current.map.get(c);\n        }\n        \n        if(current.last == true) {\n            return true;\n        } else {\n            return false;\n        }\n    }\n\n    // Returns if there is any word in the trie\n    // that starts with the given prefix.\n    public boolean startsWith(String prefix) {\n        TrieNode current = root;\n        \n        for(char c : prefix.toCharArray()) {\n            if(!current.map.containsKey(c)) {\n                return false;\n            }\n            \n            current = current.map.get(c);\n        }\n        \n        return true;\n    }\n}\n\n',
    index: 322,
  },
  {
    title: "Inorder Successor In B S T",
    category: "facebook",
    id: "InorderSuccessorInBST_facebook",
    algorithm:
      "// Given a binary search tree and a node in it, find the in-order successor of that node in the BST.\n\n// Note: If the given node has no in-order successor in the tree, return null.\n\n/**\n * Definition for a binary tree node.\n * public class TreeNode {\n *     int val;\n *     TreeNode left;\n *     TreeNode right;\n *     TreeNode(int x) { val = x; }\n * }\n */\npublic class InorderSuccessorInBST {\n    public TreeNode inorderSuccessor(TreeNode root, TreeNode p) {\n        TreeNode successor = null;\n        \n        while(root != null) {\n            if(p.val < root.val) {\n                successor = root;\n                root = root.left;\n            } else {\n                root = root.right;\n            }\n        }\n        \n        return successor;\n    }\n}\n",
    index: 323,
  },
  {
    title: "Insert Delete Get Random O1",
    category: "facebook",
    id: "InsertDeleteGetRandomO1_facebook",
    algorithm:
      "//Design a data structure that supports all following operations in average O(1) time.\n\n//insert(val): Inserts an item val to the set if not already present.\n//remove(val): Removes an item val from the set if present.\n//getRandom: Returns a random element from current set of elements. Each element must have the same probability of being returned.\n\n//Example:\n// Init an empty set.\n//RandomizedSet randomSet = new RandomizedSet();\n\n// Inserts 1 to the set. Returns true as 1 was inserted successfully.\n//randomSet.insert(1);\n\n// Returns false as 2 does not exist in the set.\n//randomSet.remove(2);\n\n// Inserts 2 to the set, returns true. Set now contains [1,2].\n//randomSet.insert(2);\n\n// getRandom should return either 1 or 2 randomly.\n//randomSet.getRandom();\n\n// Removes 1 from the set, returns true. Set now contains [2].\n//randomSet.remove(1);\n\n// 2 was already in the set, so return false.\n//randomSet.insert(2);\n\n// Since 2 is the only number in the set, getRandom always return 2.\n//randomSet.getRandom();\n\nclass RandomizedSet {\n    HashMap<Integer, Integer> map;\n    ArrayList<Integer> values;\n\n    /** Initialize your data structure here. */\n    public RandomizedSet() {\n        map = new HashMap<Integer, Integer>();\n        values = new ArrayList<Integer>();\n    }\n    \n    /** Inserts a value to the set. Returns true if the set did not already contain the specified element. */\n    public boolean insert(int val) {\n        if(!map.containsKey(val)) {\n            map.put(val, val);\n            values.add(val);\n            return true;\n        }\n        else {\n            return false;\n        }\n    }\n    \n    /** Removes a value from the set. Returns true if the set contained the specified element. */\n    public boolean remove(int val) {\n        if(map.containsKey(val)) {\n            map.remove(val);\n            values.remove(values.indexOf(val));\n            return true;\n        }\n        return false;\n    }\n    \n    /** Get a random element from the set. */\n    public int getRandom() {\n        int random = (int)(Math.random() * values.size());\n        int valueToReturn = values.get(random);\n        return map.get(valueToReturn);\n    }\n}\n\n/**\n * Your RandomizedSet object will be instantiated and called as such:\n * RandomizedSet obj = new RandomizedSet();\n * boolean param_1 = obj.insert(val);\n * boolean param_2 = obj.remove(val);\n * int param_3 = obj.getRandom();\n */\n\n",
    index: 324,
  },
  {
    title: "Insert Interval",
    category: "facebook",
    id: "InsertInterval_facebook",
    algorithm:
      "// Given a set of non-overlapping intervals, insert a new interval into the intervals (merge if necessary).\n\n// You may assume that the intervals were initially sorted according to their start times.\n\n// Example 1:\n// Given intervals [1,3],[6,9], insert and merge [2,5] in as [1,5],[6,9].\n\n// Example 2:\n// Given [1,2],[3,5],[6,7],[8,10],[12,16], insert and merge [4,9] in as [1,2],[3,10],[12,16].\n\n// This is because the new interval [4,9] overlaps with [3,5],[6,7],[8,10].\n\n/**\n * Definition for an interval.\n * public class Interval {\n *     int start;\n *     int end;\n *     Interval() { start = 0; end = 0; }\n *     Interval(int s, int e) { start = s; end = e; }\n * }\n */\npublic class InsertInterval {\n    public List<Interval> insert(List<Interval> intervals, Interval newInterval) {\n        int i = 0;\n\n        while(i < intervals.size() && intervals.get(i).end < newInterval.start) {\n            i++;\n        }\n\n        while(i < intervals.size() && intervals.get(i).start <= newInterval.end) {\n            newInterval = new Interval(Math.min(intervals.get(i).start, newInterval.start), Math.max(intervals.get(i).end, newInterval.end));\n            intervals.remove(i);\n        }\n        \n        intervals.add(i, newInterval);\n\n        return intervals;\n    }\n}\n",
    index: 325,
  },
  {
    title: "Integer To English Words",
    category: "facebook",
    id: "IntegerToEnglishWords_facebook",
    algorithm:
      '// Convert a non-negative integer to its english words representation. Given input is guaranteed to be less than 231 - 1.\n\n// For example,\n\n// 123 -> "One Hundred Twenty Three"\n// 12345 -> "Twelve Thousand Three Hundred Forty Five"\n// 1234567 -> "One Million Two Hundred Thirty Four Thousand Five Hundred Sixty Seven"\n\npublic class IntegerToEnglishWords {\n    private final String[] LESS_THAN_20 = { "", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen" };\n    private final String[] TENS = { "", "Ten", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety" };\n    private final String[] THOUSANDS = { "", "Thousand", "Million", "Billion" };\n    \n    public String numberToWords(int num) {\n        if(num == 0) {\n            return "Zero";\n        }\n        \n        int i = 0;\n        String words = "";\n        \n        while(num > 0) {\n            if(num % 1000 != 0) {\n                words = helper(num % 1000) + THOUSANDS[i] + " " + words;\n            }\n            \n            num /= 1000;\n            i++;\n        }\n        \n        return words.trim();\n    }\n    \n    \n    private String helper(int num) {\n        if(num == 0) {\n            return "";\n        } else if(num < 20) {\n            return LESS_THAN_20[num] + " ";\n        } else if(num < 100) {\n            return TENS[num / 10] + " " + helper(num % 10);\n        } else {\n            return LESS_THAN_20[num / 100] + " Hundred " + helper(num % 100);\n        }\n    }\n}\n',
    index: 326,
  },
  {
    title: "Kth Largest Element In An Array",
    category: "facebook",
    id: "KthLargestElementInAnArray_facebook",
    algorithm:
      "// Find the kth largest element in an unsorted array. Note that it is the kth largest element in the sorted order, not the kth distinct element.\n\n// For example,\n// Given [3,2,1,5,6,4] and k = 2, return 5.\n\n// Note: \n// You may assume k is always valid, 1 ≤ k ≤ array's length.\n\npublic class KthLargestElementInAnArray {\n    public int findKthLargest(int[] nums, int k) {\n        int length = nums.length;\n\n        Arrays.sort(nums);\n\n        return nums[length - k];\n    }\n}\n",
    index: 327,
  },
  {
    title: "Letter Combinations Of A Phone Number",
    category: "facebook",
    id: "LetterCombinationsOfAPhoneNumber_facebook",
    algorithm:
      '// Given a digit string, return all possible letter combinations that the number could represent.\n\n// A mapping of digit to letters (just like on the telephone buttons) is given below.\n\n// 2 - abc\n// 3 - def\n// 4 - ghi\n// 5 - jkl\n// 6 - mno\n// 7 - pqrs\n// 8 - tuv\n// 9 - wxyz\n\n// Input:Digit string "23"\n// Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].\n\nclass LetterCombinationsOfAPhoneNumber {\n    public List<String> letterCombinations(String digits) {\n        List<String> result = new ArrayList<String>();\n        \n        if(digits == null || digits.length() == 0) {\n            return result;\n        }\n        \n        String[] mapping = {\n            "0",\n            "1",\n            "abc",\n            "def",\n            "ghi",\n            "jkl",\n            "mno",\n            "pqrs",\n            "tuv",\n            "wxyz"\n        };\n        \n        letterCombinationsRecursive(result, digits, "", 0, mapping);\n        \n        return result;\n    }\n    \n    public void letterCombinationsRecursive(List<String> result, String digits, String current, int index, String[] mapping) {\n        if(index == digits.length()) {\n            result.add(current);\n            return;\n        }\n        \n        String letters = mapping[digits.charAt(index) - \'0\'];\n        for(int i = 0; i < letters.length(); i++) {\n            letterCombinationsRecursive(result, digits, current + letters.charAt(i), index + 1, mapping);\n        }\n    }\n}\n',
    index: 328,
  },
  {
    title: "Longest Consecutive Sequence",
    category: "facebook",
    id: "LongestConsecutiveSequence_facebook",
    algorithm:
      "// Given an unsorted array of integers, find the length of the longest consecutive elements sequence.\n\n// For example,\n// Given [100, 4, 200, 1, 3, 2],\n// The longest consecutive elements sequence is [1, 2, 3, 4]. Return its length: 4.\n\n// Your algorithm should run in O(n) complexity.\n\nclass LongestConsecutiveSequence {\n    public int longestConsecutive(int[] nums) {\n        if(nums == null || nums.length == 0) {\n            return 0;\n        }\n        \n        Set<Integer> set = new HashSet<Integer>();\n        for(int n: nums) {\n            set.add(n);\n        }\n        \n        int maxLength = 0;\n        for(int n: set) {\n            if(!set.contains(n - 1)) {\n                int current = n;\n                int currentMax = 1;\n                \n                while(set.contains(n + 1)) {\n                    currentMax++;\n                    n++;\n                }\n                \n                maxLength = Math.max(maxLength, currentMax);\n            }\n        }\n        \n        return maxLength;\n    }\n}\n",
    index: 329,
  },
  {
    title: "Lowest Common Ancestor Of A Binary Tree",
    category: "facebook",
    id: "LowestCommonAncestorOfABinaryTree_facebook",
    algorithm:
      "// Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.\n\n// According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes v and w as the lowest node in T that has both v and w as descendants (where we allow a node to be a descendant of itself).”\n\n//         _______3______\n//        /              \\\n//     ___5__          ___1__\n//    /      \\        /      \\\n//    6      _2       0       8\n//          /  \\\n//          7   4\n// For example, the lowest common ancestor (LCA) of nodes 5 and 1 is 3. Another example is LCA of nodes 5 and 4 is 5, since a node can be a descendant of itself according to the LCA definition.\n\n/**\n * Definition for a binary tree node.\n * public class TreeNode {\n *     int val;\n *     TreeNode left;\n *     TreeNode right;\n *     TreeNode(int x) { val = x; }\n * }\n */\npublic class LowestCommonAncestorsOfABinaryTree {\n    public TreeNode lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {\n        if(root == null || root == p || root == q) {\n            return root;\n        }\n        \n        TreeNode left = lowestCommonAncestor(root.left, p, q);\n        TreeNode right = lowestCommonAncestor(root.right, p, q);\n        \n        if(left != null && right != null) {\n            return root;\n        }\n        \n        return left == null ? right : left;\n    }\n}\n",
    index: 330,
  },
  {
    title: "Maximum Size Subarray Sum Equals K",
    category: "facebook",
    id: "MaximumSizeSubarraySumEqualsK_facebook",
    algorithm:
      "// Given an array nums and a target value k, find the maximum length of a subarray that sums to k. If there isn't one, return 0 instead.\n\n// Note:\n// The sum of the entire nums array is guaranteed to fit within the 32-bit signed integer range.\n\n// Example 1:\n// Given nums = [1, -1, 5, -2, 3], k = 3,\n// return 4. (because the subarray [1, -1, 5, -2] sums to 3 and is the longest)\n\n// Example 2:\n// Given nums = [-2, -1, 2, 1], k = 1,\n// return 2. (because the subarray [-1, 2] sums to 1 and is the longest)\n\n// Follow Up:\n// Can you do it in O(n) time?\n\npublic class MaximumSizeSubarraySumEqualsK {\n    public int maxSubArrayLen(int[] nums, int k) {\n        if(nums.length == 0) {\n            return 0;\n        }\n        \n        HashMap<Integer, Integer> map = new HashMap<Integer, Integer>();\n        \n        int maxLength = 0;\n        \n        int total = 0;\n        \n        map.put(0, -1);\n        \n        for(int i = 0; i < nums.length; i++) {\n            total += nums[i];\n\n            if(map.containsKey(total - k)) {\n                maxLength = Math.max(maxLength, i - map.get(total - k));\n            }\n\n            if(!map.containsKey(total)) {\n                map.put(total, i);\n            }\n        }\n        \n        return maxLength;\n    }\n}\n",
    index: 331,
  },
  {
    title: "Meeting Rooms",
    category: "facebook",
    id: "MeetingRooms_facebook",
    algorithm:
      "// Given an array of meeting time intervals consisting of start and end times [[s1,e1],[s2,e2],...] (si < ei), determine if a person could attend all meetings.\n\n// For example,\n// Given [[0, 30],[5, 10],[15, 20]],\n// return false.\n\n/**\n * Definition for an interval.\n * public class Interval {\n *     int start;\n *     int end;\n *     Interval() { start = 0; end = 0; }\n *     Interval(int s, int e) { start = s; end = e; }\n * }\n */\npublic class MeetingRooms {\n    public boolean canAttendMeetings(Interval[] intervals) {\n        if(intervals == null) {\n            return false;\n        }\n\n        // Sort the intervals by start time\n        Arrays.sort(intervals, new Comparator<Interval>() {\n            public int compare(Interval a, Interval b) { return a.start - b.start; }\n        });\n\n        for(int i = 1; i < intervals.length; i++) {\n            if(intervals[i].start < intervals[i - 1].end) {\n                return false;\n            }\n        }\n\n        return true;\n    }\n}\n",
    index: 332,
  },
  {
    title: "Merge Intervals",
    category: "facebook",
    id: "MergeIntervals_facebook",
    algorithm:
      "// Given a collection of intervals, merge all overlapping intervals.\n\n// For example,\n// Given [1,3],[2,6],[8,10],[15,18],\n// return [1,6],[8,10],[15,18].\n\n/**\n * Definition for an interval.\n * public class Interval {\n *     int start;\n *     int end;\n *     Interval() { start = 0; end = 0; }\n *     Interval(int s, int e) { start = s; end = e; }\n * }\n */\nclass MergeIntervals {\n    public List<Interval> merge(List<Interval> intervals) {\n        List<Interval> result = new ArrayList<Interval>();\n        if(intervals == null || intervals.size() == 0) {\n            return result;\n        }\n        \n        Interval[] allIntervals = intervals.toArray(new Interval[intervals.size()]);\n        Arrays.sort(allIntervals, new Comparator<Interval>() {\n           public int compare(Interval a, Interval b) {\n               if(a.start == b.start) {\n                   return a.end - b.end;\n               }\n               return a.start - b.start;\n           } \n        });\n        \n        for(Interval i: allIntervals) {\n            if (result.size() == 0 || result.get(result.size() - 1).end < i.start) {\n                    result.add(i);\n            } else {\n                result.get(result.size() - 1).end = Math.max(result.get(result.size() - 1).end, i.end);\n            }\n        }\n        \n        return result;\n    }\n}\n",
    index: 333,
  },
  {
    title: "Merge K Sorted Lists",
    category: "facebook",
    id: "MergeKSortedLists_facebook",
    algorithm:
      "// Merge k sorted linked lists and return it as one sorted list. Analyze and describe its complexity.\n\n/**\n * Definition for singly-linked list.\n * public class ListNode {\n *     int val;\n *     ListNode next;\n *     ListNode(int x) { val = x; }\n * }\n */\npublic class MergeKSortedLists {\n    public ListNode mergeKLists(ListNode[] lists) {\n        if (lists==null||lists.length==0) {\n            return null;\n        }\n        \n        PriorityQueue<ListNode> queue= new PriorityQueue<ListNode>(lists.length,new Comparator<ListNode>(){\n            @Override\n            public int compare(ListNode o1,ListNode o2){\n                if (o1.val<o2.val) {\n                    return -1;\n                } else if (o1.val==o2.val) {\n                    return 0;\n                } else {\n                    return 1;\n                }\n            }\n        });\n        \n        ListNode dummy = new ListNode(0);\n        ListNode tail=dummy;\n        \n        for (ListNode node:lists) {\n            if (node!=null) {\n                queue.add(node);\n            }\n        }\n\n        while (!queue.isEmpty()){\n            tail.next=queue.poll();\n            tail=tail.next;\n\n            if (tail.next!=null) {\n                queue.add(tail.next);\n            }\n        }\n\n        return dummy.next;\n    }\n}\n",
    index: 334,
  },
  {
    title: "Merge Sorted Array",
    category: "facebook",
    id: "MergeSortedArray_facebook",
    algorithm:
      "// Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.\n\n// Note:\n// You may assume that nums1 has enough space (size that is greater or equal to m + n) to hold additional elements from nums2. The number of elements initialized in nums1 and nums2 are m and n respectively.\n\npublic class MergeSortedArray {\n    public void merge(int[] A, int m, int[] B, int n) {\n        int i = m - 1;\n        int j = n - 1;\n        int k = m + n - 1;\n        \n        while(i >= 0 && j >= 0) {\n            A[k--] = A[i] > B[j] ? A[i--] : B[j--];\n        }\n        \n        while(j >= 0) {\n            A[k--] = B[j--];\n        }\n    }\n}\n",
    index: 335,
  },
  {
    title: "Min Stack",
    category: "facebook",
    id: "MinStack_facebook",
    algorithm:
      "/**\n * Your MinStack object will be instantiated and called as such:\n * MinStack obj = new MinStack();\n * obj.push(x);\n * obj.pop();\n * int param_3 = obj.top();\n * int param_4 = obj.getMin();\n */\nclass MinStack {\n    class Node {\n        int data;\n        int min;\n        Node next;\n        \n        public Node(int data, int min) {\n            this.data = data;\n            this.min = min;\n            this.next = null;\n        }\n    }\n    Node head;\n    \n    /** initialize your data structure here. */\n    public MinStack() {\n        \n    }\n    \n    public void push(int x) {\n        if(head == null) {\n            head = new Node(x, x);\n        } else {\n            Node newNode = new Node(x, Math.min(x, head.min));\n            newNode.next = head;\n            head = newNode;\n        }\n    }\n    \n    public void pop() {\n        head = head.next;\n    }\n    \n    public int top() {\n        return head.data;\n    }\n    \n    public int getMin() {\n        return head.min;\n    }\n}\n",
    index: 336,
  },
  {
    title: "Minimum Size Subarray Sum",
    category: "facebook",
    id: "MinimumSizeSubarraySum_facebook",
    algorithm:
      "// Given an array of n positive integers and a positive integer s, find the minimal length of a contiguous subarray of which the sum ≥ s. If there isn't one, return 0 instead.\n\n// For example, given the array [2,3,1,2,4,3] and s = 7,\n// the subarray [4,3] has the minimal length under the problem constraint.\n\npublic class MinimumSizeSubarraySum {\n    public int minSubArrayLen(int s, int[] nums) {\n        if(nums == null || nums.length == 0) {\n            return 0;\n        }\n        \n        int i = 0;\n        int j = 0;\n        int result = Integer.MAX_VALUE;\n        int total = 0;\n        \n        while(i < nums.length) {\n            total += nums[i++];\n            \n            while(total >= s) {\n                result = Math.min(result, i - j);\n                total -= nums[j++];\n            }\n        }\n        \n        return result == Integer.MAX_VALUE ? 0 : result;\n    }\n}\n",
    index: 337,
  },
  {
    title: "Minimum Window Substring",
    category: "facebook",
    id: "MinimumWindowSubstring_facebook",
    algorithm:
      '// Given a string S and a string T, find the minimum window in S which will contain all the characters in T in complexity O(n).\n\n// For example,\n// S = "ADOBECODEBANC"\n// T = "ABC"\n// Minimum window is "BANC".\n\n// Note:\n// If there is no such window in S that covers all characters in T, return the empty string "".\n\n// If there are multiple such windows, you are guaranteed that there will always be only one unique minimum window in S.\n\npublic class MinimumWindowSubstring {\n    public String minWindow(String s, String t) {\n        HashMap<Character, Integer> map = new HashMap<>();\n        \n        for(char c : s.toCharArray()) {\n            map.put(c, 0);\n        }\n        \n        for(char c : t.toCharArray()) {\n            if(map.containsKey(c)) {\n                map.put(c, map.get(c)+ 1);\n            } else {\n                return "";\n            }\n        }\n        \n        int start = 0;\n        int end = 0;\n        int minStart = 0;\n        int minLength = Integer.MAX_VALUE;\n        int counter = t.length();\n        \n        while(end < s.length()) {\n            char c1 = s.charAt(end);\n            \n            if(map.get(c1) > 0) {\n                counter--;\n            }\n            \n            map.put(c1, map.get(c1) - 1);\n            end++;\n            \n            while(counter == 0) {\n                if(minLength > end - start) {\n                    minLength = end - start;\n                    minStart = start;\n                }\n                \n                char c2 = s.charAt(start);\n                map.put(c2, map.get(c2) + 1);\n                \n                if(map.get(c2) > 0) {\n                    counter++;\n                }\n                \n                start++;\n            }\n        }\n        \n        return minLength == Integer.MAX_VALUE ? "" : s.substring(minStart, minStart + minLength);\n    }\n}\n',
    index: 338,
  },
  {
    title: "Move Zeros",
    category: "facebook",
    id: "MoveZeros_facebook",
    algorithm:
      "// Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.\n\n// For example, given nums = [0, 1, 0, 3, 12], after calling your function, nums should be [1, 3, 12, 0, 0].\n\n// Note:\n    // You must do this in-place without making a copy of the array.\n    // Minimize the total number of operations.\n\npublic class MoveZeros {\n    public void moveZeroes(int[] nums) {\n        if(nums == null || nums.length == 0) {\n            return;\n        }\n        \n        int index = 0;\n        for(int num : nums) {\n            if(num != 0) {\n                nums[index] = num;\n                index++;\n            }\n        }\n        \n        while(index < nums.length) {\n            nums[index] = 0;\n            index++;\n        }\n    }\n}\n",
    index: 339,
  },
  {
    title: "Multiply Strings",
    category: "facebook",
    id: "MultiplyStrings_facebook",
    algorithm:
      "// Given two non-negative integers num1 and num2 represented as strings, return the product of num1 and num2.\n\n// Note:\n\n    // The length of both num1 and num2 is < 110.\n    // Both num1 and num2 contains only digits 0-9.\n    // Both num1 and num2 does not contain any leading zero.\n    // You must not use any built-in BigInteger library or convert the inputs to integer directly.\n\npublic class MultiplyStrings {\n    public String multiply(String num1, String num2) {\n        int m = num1.length();\n        int n = num2.length();\n        int[] pos = new int[m + n];\n        \n        for(int i = m - 1; i >= 0; i--) {\n            for(int j = n - 1; j >= 0; j--) {\n                int mul = (num1.charAt(i) - '0') * (num2.charAt(j) - '0');\n                int p1 = i + j;\n                int p2 = i + j + 1;\n                int sum = mul + pos[p2];\n                \n                pos[p1] += sum / 10;\n                pos[p2] = (sum) % 10;\n            }\n        }\n        \n        StringBuilder sb = new StringBuilder();\n\n        for(int p : pos) {\n            if(!(sb.length() == 0 && p == 0)) {\n                sb.append(p);\n            }\n        }\n        \n        return sb.length() == 0 ? \"0\" : sb.toString();\n    }\n}\n",
    index: 340,
  },
  {
    title: "Number Of Islands",
    category: "facebook",
    id: "NumberOfIslands_facebook",
    algorithm:
      "// Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.\n\n// Example 1:\n\n// 11110\n// 11010\n// 11000\n// 00000\n// Answer: 1\n\n// Example 2:\n\n// 11000\n// 11000\n// 00100\n// 00011\n// Answer: 3\n\npublic class NumberOfIslands {\n    char[][] gridCopy;\n    \n    public int numIslands(char[][] grid) {\n        //set grid copy to the current grid\n        gridCopy = grid;\n        \n        //initialize number of islands to zero\n        int numberOfIslands = 0;\n        \n        //iterate through every index of the grid\n        for(int i = 0; i < grid.length; i++) {\n            for(int j = 0; j < grid[0].length; j++) {\n                //attempt to \"sink\" the current index of the grid\n                numberOfIslands += sink(gridCopy, i, j);\n            }\n        }\n        \n        //return the total number of islands\n        return numberOfIslands;\n    }\n    \n    int sink(char[][] grid, int i, int j) {\n        //check the bounds of i and j and if the current index is an island or not (1 or 0)\n        if(i < 0 || i >= grid.length || j < 0 || j >= grid[0].length || grid[i][j] == '0') {\n            return 0;\n        }\n        \n        //set current index to 0\n        grid[i][j] = '0';\n        \n        // sink all neighbors of current index\n        sink(grid, i + 1, j);\n        sink(grid, i - 1, j);\n        sink(grid, i, j + 1);\n        sink(grid, i, j - 1);\n        \n        //increment number of islands\n        return 1;\n    }\n}\n",
    index: 341,
  },
  {
    title: "One Edit Distance",
    category: "facebook",
    id: "OneEditDistance_facebook",
    algorithm:
      "// Given two strings S and T, determine if they are both one edit distance apart.\n\npublic class OneEditDistance {\n    public boolean isOneEditDistance(String s, String t) {\n        //iterate through the length of the smaller string\n        for(int i = 0; i < Math.min(s.length(), t.length()); i++) {\n            //if the current characters of the two strings are not equal\n            if(s.charAt(i) != t.charAt(i)) {\n                //return true if the remainder of the two strings are equal, false otherwise\n                if(s.length() == t.length()) {\n                    return s.substring(i + 1).equals(t.substring(i + 1));\n                } else if(s.length() < t.length()) {\n                    //return true if the strings would be the same if you deleted a character from string t\n                    return s.substring(i).equals(t.substring(i + 1));\n                } else {\n                    //return true if the strings would be the same if you deleted a character from string s\n                    return t.substring(i).equals(s.substring(i + 1));\n                }\n            }\n        }\n        \n        //if all characters match for the length of the two strings check if the two strings' lengths do not differ by more than 1\n        return Math.abs(s.length() - t.length()) == 1;\n    }\n}\n",
    index: 342,
  },
  {
    title: "Paint House I I",
    category: "facebook",
    id: "PaintHouseII_facebook",
    algorithm:
      "    // There are a row of n houses, each house can be painted with one of the k colors. The cost of painting each house with a certain color is different. You have to paint all the houses such that no two adjacent houses have the same color.\n\n// The cost of painting each house with a certain color is represented by a n x k cost matrix. For example, costs[0][0] is the cost of painting house 0 with color 0; costs[1][2] is the cost of painting house 1 with color 2, and so on... Find the minimum cost to paint all houses.\n\n// Note:\n// All costs are positive integers.\n\n// Follow up:\n// Could you solve it in O(nk) runtime?\n\npublic class PaintHouseII { \n    public int minCostII(int[][] costs) {\n        if(costs == null|| costs.length == 0) {\n            return 0;\n        }\n        \n        int m = costs.length;\n        int n = costs[0].length;\n        \n        int min1 = -1;\n        int min2 = -1;\n        \n        for(int i = 0; i < m; i++) {\n            int last1 = min1;\n            int last2 = min2;\n\n            min1 = -1;\n            min2 = -1;\n            \n            for(int j = 0; j < n; j++) {\n                if(j != last1) {\n                    costs[i][j] += last1 < 0 ? 0 : costs[i - 1][last1];\n                } else {\n                    costs[i][j] += last2 < 0 ? 0 : costs[i - 1][last2];\n                }\n\n                if(min1 < 0 || costs[i][j] < costs[i][min1]) {\n                    min2 = min1;\n                    min1 = j;\n                } else if(min2 < 0 || costs[i][j] < costs[i][min2]) {\n                    min2 = j;\n                }\n            }\n        }\n        \n        return costs[m - 1][min1];       \n    }\n}\n",
    index: 343,
  },
  {
    title: "Palindrome Linked List",
    category: "facebook",
    id: "PalindromeLinkedList_facebook",
    algorithm:
      "/**\n * Definition for singly-linked list.\n * public class ListNode {\n *     int val;\n *     ListNode next;\n *     ListNode(int x) { val = x; }\n * }\n */\npublic class PalindromeLinkedList {\n    public boolean isPalindrome(ListNode head) {\n        if(head == null || head.next == null) {\n            return true;\n        }\n        \n        Stack<Integer> stack = new Stack<Integer>();\n        \n        ListNode fast = head;\n        ListNode slow = head;\n\n        while(fast != null && fast.next != null) {\n            stack.push(slow.val);\n            fast = fast.next.next;\n            slow = slow.next;\n        }\n        \n        if(fast != null) {\n            slow = slow.next;\n        }\n        \n        while(slow != null) {\n            if(stack.pop() != slow.val) {\n                return false;\n            }\n\n            slow = slow.next;\n        }\n        \n        return true;\n    }\n}\n",
    index: 344,
  },
  {
    title: "Palindromic Substrings",
    category: "facebook",
    id: "PalindromicSubstrings_facebook",
    algorithm:
      '//Given a string, your task is to count how many palindromic substrings in this string.\n//The substrings with different start indexes or end indexes are counted as different substrings \n//even they consist of same characters.\n\n//Example 1:\n//Input: "abc"\n//Output: 3\n//Explanation: Three palindromic strings: "a", "b", "c".\n//Example 2:\n//Input: "aaa"\n//Output: 6\n//Explanation: Six palindromic strings: "a", "a", "a", "aa", "aa", "aaa".\n//Note:\n//The input string length won\'t exceed 1000.\n\nclass PalindromicSubstrings {\n    int result = 0;\n    public int countSubstrings(String s) {\n        if(s == null || s.length() == 0) {\n            return 0;\n        }\n        \n        for(int i = 0; i < s.length(); i++) {\n            extendPalindrome(s, i, i);\n            extendPalindrome(s, i, i + 1);\n        }\n        \n        return result;\n    }\n    \n    public void extendPalindrome(String s, int left, int right) {\n        while(left >= 0 && right < s.length() && s.charAt(left) == s.charAt(right)) {\n            result++;\n            left--;\n            right++;\n        }\n    }\n}\n\n',
    index: 345,
  },
  {
    title: "Power Of X To The N",
    category: "facebook",
    id: "PowerOfXToTheN_facebook",
    algorithm:
      "// Implement pow(x, n).\n\npublic class PowerOfXToTheN {\n    public double myPow(double x, int n) {\n        if(n == 0) {\n            return 1;\n        }\n        \n        if(Double.isInfinite(x)) {\n            return 0;\n        }\n        \n        if(n < 0) {\n            n = -n;\n            x = 1 / x;\n        }\n        \n        return n % 2 == 0 ? myPow(x * x, n / 2) : x * myPow(x * x, n / 2);\n    }\n}\n",
    index: 346,
  },
  {
    title: "Product Of Array Except Self",
    category: "facebook",
    id: "ProductOfArrayExceptSelf_facebook",
    algorithm:
      "// Given an array of n integers where n > 1, nums, return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].\n\n// Solve it without division and in O(n).\n\n// For example, given [1,2,3,4], return [24,12,8,6].\n\n// Follow up:\n// Could you solve it with constant space complexity? (Note: The output array does not count as extra space for the purpose of space complexity analysis.)\n\npublic class ProductOfArrayExceptSelf {\n    public int[] productExceptSelf(int[] nums) {\n        int n = nums.length;\n        int[] result = new int[n];\n        int left = 1;\n        \n        for(int i = 0; i < nums.length; i++) {\n            if(i > 0) {\n                left *= nums[i - 1];\n            }\n            \n            result[i] = left;\n        }\n        \n        int right = 1;\n        \n        for(int i = n - 1; i >= 0; i--) {\n            if(i < n - 1) {\n                right *= nums[i + 1];\n            }\n            \n            result[i] *= right;\n        }\n        \n        return result;\n    }\n}\n",
    index: 347,
  },
  {
    title: "Regular Expression Matching",
    category: "facebook",
    id: "RegularExpressionMatching_facebook",
    algorithm:
      '// Implement regular expression matching with support for \'.\' and \'*\'.\n\n// \'.\' Matches any single character.\n// \'*\' Matches zero or more of the preceding element.\n\n// The matching should cover the entire input string (not partial).\n\n// The function prototype should be:\n// bool isMatch(const char *s, const char *p)\n\n// Some examples:\n// isMatch("aa","a") → false\n// isMatch("aa","aa") → true\n// isMatch("aaa","aa") → false\n// isMatch("aa", "a*") → true\n// isMatch("aa", ".*") → true\n// isMatch("ab", ".*") → true\n// isMatch("aab", "c*a*b") → true\n\npublic class RegularExpressionMatching {\n    public boolean isMatch(String s, String p) {\n        if(s == null || p == null) {\n            return false;\n        }\n        \n        boolean[][] dp = new boolean[s.length() + 1][p.length() + 1];\n        dp[0][0] = true;\n        \n        for(int i = 0; i < p.length(); i++) {\n            if(p.charAt(i) == \'*\' && dp[0][i - 1]) {\n                dp[0][i + 1] = true;\n            }\n        }\n        \n        for(int i = 0; i < s.length(); i++) {\n            for(int j = 0; j < p.length(); j++) {\n                if(p.charAt(j) == \'.\') {\n                    dp[i + 1][j + 1] = dp[i][j];\n                }\n                \n                if(p.charAt(j) == s.charAt(i)) {\n                    dp[i + 1][j + 1] = dp[i][j];\n                }\n                \n                if(p.charAt(j) == \'*\') {\n                    if(p.charAt(j - 1) != s.charAt(i) && p.charAt(j - 1) != \'.\') {\n                        dp[i + 1][j + 1] = dp[i + 1][j - 1];\n                    } else {\n                        dp[i + 1][j + 1] = (dp[i + 1][j] || dp[i][j + 1] || dp[i + 1][j - 1]);\n                    }\n                }\n            }\n        }\n        \n        return dp[s.length()][p.length()];\n    }\n}\n',
    index: 348,
  },
  {
    title: "Remove Duplicates From Sorted Array",
    category: "facebook",
    id: "RemoveDuplicatesFromSortedArray_facebook",
    algorithm:
      "// Given a sorted array, remove the duplicates in place such that each element appear only once and return the new length.\n\n// Do not allocate extra space for another array, you must do this in place with constant memory.\n\n// For example,\n// Given input array nums = [1,1,2],\n\n// Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively. It doesn't matter what you leave beyond the new length.\n\npublic class RemoveDuplicatesFromSortedArray {\n    public int removeDuplicates(int[] nums) {\n        if(nums.length == 0 || nums == null) {\n            return 0;\n        }\n\n        if(nums.length < 2) {\n            return nums.length;\n        }\n        \n        int index = 1;\n        \n        for(int i = 1; i < nums.length; i++) {\n            if(nums[i] != nums[i - 1]) {\n                nums[index++] = nums[i];\n            }\n        }\n        \n        return index;\n    }\n}\n",
    index: 349,
  },
  {
    title: "Remove Invalid Parentheses",
    category: "facebook",
    id: "RemoveInvalidParentheses_facebook",
    algorithm:
      '// Remove the minimum number of invalid parentheses in order to make the input string valid. Return all possible results.\n\n// Note: The input string may contain letters other than the parentheses ( and ).\n\n// Examples:\n// "()())()" -> ["()()()", "(())()"]\n// "(a)())()" -> ["(a)()()", "(a())()"]\n// ")(" -> [""]\n\npublic class RemoveInvalidParentheses {\n    public List<String> removeInvalidParentheses(String s) {\n        List<String> result = new ArrayList<>();\n\n        remove(s, result, 0, 0, new char[]{\'(\', \')\'});\n\n        return result;\n    }\n\n    public void remove(String s, List<String> result, int last_i, int last_j,  char[] par) {\n        for (int stack = 0, i = last_i; i < s.length(); i++) {\n            if (s.charAt(i) == par[0]) {\n                stack++;\n            }\n\n            if (s.charAt(i) == par[1]) {\n                stack--;\n            }\n\n            if (stack >= 0) {\n                continue;\n            }\n            \n            for (int j = last_j; j <= i; j++) {\n                if (s.charAt(j) == par[1] && (j == last_j || s.charAt(j - 1) != par[1])) {\n                    remove(s.substring(0, j) + s.substring(j + 1, s.length()), result, i, j, par);\n                }\n            }\n\n            return;\n        }\n        \n        String reversed = new StringBuilder(s).reverse().toString();\n        \n        if (par[0] == \'(\')  {\n            // finished left to right\n            remove(reversed, result, 0, 0, new char[]{\')\', \'(\'});\n        } else {\n            // finished right to left\n            result.add(reversed);\n        }\n    }\n}\n',
    index: 350,
  },
  {
    title: "Reverse Linked List",
    category: "facebook",
    id: "ReverseLinkedList_facebook",
    algorithm:
      "// Reverse a singly linked list.\n\n/**\n * Definition for singly-linked list.\n * public class ListNode {\n *     int val;\n *     ListNode next;\n *     ListNode(int x) { val = x; }\n * }\n */\npublic class ReverseLinkedList {\n    public ListNode reverseList(ListNode head) {\n        if(head == null) {\n            return head;\n        }\n    \n        ListNode newHead = null;\n        \n        while(head != null) {\n            ListNode next = head.next;\n            head.next = newHead;\n            newHead = head;\n            head = next;\n        }\n        \n        return newHead;\n    }\n}\n",
    index: 351,
  },
  {
    title: "Roman To Integer",
    category: "facebook",
    id: "RomanToInteger_facebook",
    algorithm:
      "// Given a roman numeral, convert it to an integer.\n\n// Input is guaranteed to be within the range from 1 to 3999\n\npublic class RomanToInteger {\n    public int romanToInt(String s) {\n        HashMap<Character, Integer> map = new HashMap<Character, Integer>();\n        \n        map.put('I', 1);\n        map.put('V', 5);\n        map.put('X', 10);\n        map.put('L', 50);\n        map.put('C', 100);\n        map.put('D', 500);\n        map.put('M', 1000);\n        \n        int total = 0;\n\n        for(int i = 0; i < s.length() - 1; i++) {\n            if(map.get(s.charAt(i)) < map.get(s.charAt(i + 1))) {\n                total -= map.get(s.charAt(i));\n            } else {\n                total += map.get(s.charAt(i));\n            }\n        }\n        \n        total += map.get(s.charAt(s.length() - 1));\n        \n        return total;\n    }\n}\n",
    index: 352,
  },
  {
    title: "Search In Rotated Sorted Array",
    category: "facebook",
    id: "SearchInRotatedSortedArray_facebook",
    algorithm:
      "// Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.\n\n// (i.e., 0 1 2 4 5 6 7 might become 4 5 6 7 0 1 2).\n\n// You are given a target value to search. If found in the array return its index, otherwise return -1.\n\n// You may assume no duplicate exists in the array.\n\npublic class SearchInRotatedSortedArray {\n    public int search(int[] nums, int target) {\n        int left = 0;\n        int right = nums.length - 1;\n        \n        while(left <= right) {\n            int mid = left + (right - left) / 2;\n            \n            if(nums[mid] == target) {\n                return mid;\n            }\n            \n            if(nums[left] <= nums[mid]) {\n                if(target < nums[mid] && target >= nums[left]) {\n                    right = mid - 1;\n                } else {\n                    left = mid + 1;\n                }\n            }\n            \n            if(nums[mid] <= nums[right]) {\n                if(target > nums[mid] && target <= nums[right]) {\n                    left = mid + 1;\n                } else {\n                    right = mid - 1;\n                }\n            }\n        }\n        \n        return -1;\n    }\n}\n",
    index: 353,
  },
  {
    title: "Sort Colors",
    category: "facebook",
    id: "SortColors_facebook",
    algorithm:
      "// Given an array with n objects colored red, white or blue, sort them so that objects of the same color are adjacent, with the colors in the order red, white and blue.\n\n// Here, we will use the integers 0, 1, and 2 to represent the color red, white, and blue respectively.\n\n// Note:\n    // You are not suppose to use the library's sort function for this problem.\n\npublic class SortColors {\n    public void sortColors(int[] nums) {\n        int wall = 0;\n        \n        for(int i = 0; i < nums.length; i++) {\n            if(nums[i] < 1) {\n                int temp = nums[i];\n                nums[i] = nums[wall];\n                nums[wall] = temp;\n                wall++;\n            }\n        }\n        \n        for(int i = 0; i < nums.length; i++) {\n            if(nums[i] == 1) {\n                int temp = nums[i];\n                nums[i] = nums[wall];\n                nums[wall] = temp;\n                wall++;\n            }\n        }\n    }\n}\n",
    index: 354,
  },
  {
    title: "Sparse Matrix Multiplication",
    category: "facebook",
    id: "SparseMatrixMultiplication_facebook",
    algorithm:
      "// Given two sparse matrices A and B, return the result of AB.\n\n// You may assume that A's column number is equal to B's row number.\n\n// Example:\n\n// A = [\n//   [ 1, 0, 0],\n//   [-1, 0, 3]\n// ]\n\n// B = [\n//   [ 7, 0, 0 ],\n//   [ 0, 0, 0 ],\n//   [ 0, 0, 1 ]\n// ]\n\n\n//      |  1 0 0 |   | 7 0 0 |   |  7 0 0 |\n// AB = | -1 0 3 | x | 0 0 0 | = | -7 0 3 |\n//                   | 0 0 1 |\n\npublic class SparseMatrixMultiplication {\n    public int[][] multiply(int[][] A, int[][] B) {\n        int m = A.length;\n        int n = A[0].length;\n        int nB = B[0].length;\n        int[][] C = new int[m][nB];\n        \n        for(int i = 0; i < m; i++) {\n            for(int j = 0; j < n; j++) {\n                if(A[i][j] != 0) {\n                    for(int k = 0; k < nB; k++) {\n                        if(B[j][k] != 0) {\n                            C[i][k] += A[i][j] * B[j][k];\n                        }\n                    }\n                }\n            }\n        }\n        \n        return C;\n    }\n}\n",
    index: 355,
  },
  {
    title: "Square Root X",
    category: "facebook",
    id: "SquareRootX_facebook",
    algorithm:
      "// Implement int sqrt(int x).\n\n// Compute and return the square root of x.\n\npublic class SquareRootX {\n    public int mySqrt(int x) {\n        if(x == 0) {\n            return 0;\n        }\n        \n        int left = 1;\n        int right = x;\n        \n        while(left <= right) {\n            int mid = left + (right - left) / 2;\n\n            if(mid == x / mid) {\n                return mid;\n            } else if(mid > x / mid) {\n                right = mid - 1;\n            } else if(mid < x / mid) {\n                left = mid + 1;\n            }\n        }\n        \n        return right;\n    }\n}\n",
    index: 356,
  },
  {
    title: "Subsets",
    category: "facebook",
    id: "Subsets_facebook",
    algorithm:
      "// Given a set of distinct integers, nums, return all possible subsets.\n\n// Note: The solution set must not contain duplicate subsets.\n\n// For example,\n// If nums = [1,2,3], a solution is:\n\n// [\n//   [3],\n//   [1],\n//   [2],\n//   [1,2,3],\n//   [1,3],\n//   [2,3],\n//   [1,2],\n//   []\n// ]\n\npublic class Subsets {\n    public List<List<Integer>> subsets(int[] nums) {\n        List<List<Integer>> result = new ArrayList<>();\n        \n        recurse(result, nums, new Stack<>(), 0);\n        \n        return result;\n    }\n    \n    \n    private void recurse(List<List<Integer>> result, int[] nums, Stack path, int position) {\n        if(position == nums.length) {\n            result.add(new ArrayList<>(path));\n\n            return;\n        }\n        \n        path.push(nums[position]);\n\n        recurse(result, nums, path, position + 1);\n        \n        path.pop();\n        \n        recurse(result, nums, path, position + 1);\n    }\n}\n",
    index: 357,
  },
  {
    title: "Subsets I I",
    category: "facebook",
    id: "SubsetsII_facebook",
    algorithm:
      "    // Given a collection of integers that might contain duplicates, nums, return all possible subsets.\n\n// Note: The solution set must not contain duplicate subsets.\n\n// For example,\n// If nums = [1,2,2], a solution is:\n\n// [\n//   [2],\n//   [1],\n//   [1,2,2],\n//   [2,2],\n//   [1,2],\n//   []\n// ]\n\npublic class SubsetsII {\n    public List<List<Integer>> subsetsWithDup(int[] nums) {\n        Arrays.sort(nums);\n        \n        List<List<Integer>> result = new ArrayList<List<Integer>>();\n        \n        if(nums.length == 0 || nums == null) {\n            return result;\n        }\n        \n        helper(nums, new ArrayList<Integer>(), 0, result);\n        \n        return result;\n    }\n    \n    \n    public void helper(int[] nums, ArrayList<Integer> current, int index, List<List<Integer>> result) {\n        result.add(current);\n        \n        for(int i = index; i < nums.length; i++) {\n            if(i > index && nums[i] == nums[i - 1]) {\n                continue;\n            }\n            \n            ArrayList<Integer> newCurrent = new ArrayList<Integer>(current);\n\n            newCurrent.add(nums[i]);\n\n            helper(nums, newCurrent, i + 1, result);\n        }\n    }\n}\n",
    index: 358,
  },
  {
    title: "Sum Of Left Leaves",
    category: "facebook",
    id: "SumOfLeftLeaves_facebook",
    algorithm:
      "// Find the sum of all left leaves in a given binary tree.\n\n// Example:\n\n//     3\n//    / \\\n//   9  20\n//     /  \\\n//    15   7\n\n// There are two left leaves in the binary tree, with values 9 and 15 respectively. Return 24.\n\n/**\n * Definition for a binary tree node.\n * public class TreeNode {\n *     int val;\n *     TreeNode left;\n *     TreeNode right;\n *     TreeNode(int x) { val = x; }\n * }\n */\npublic class SumOfLeftLeaves {\n    public int sumOfLeftLeaves(TreeNode root) {\n        if(root == null) {\n            return 0;\n        }\n        \n        int total = 0;\n        \n        if(root.left != null) {\n            if(root.left.left == null && root.left.right == null) {\n                total += root.left.val;\n            } else {\n                total += sumOfLeftLeaves(root.left);\n            }\n        }\n        \n        total += sumOfLeftLeaves(root.right);\n        \n        return total;\n    }\n}\n",
    index: 359,
  },
  {
    title: "Two Sum",
    category: "facebook",
    id: "TwoSum_facebook",
    algorithm:
      "// Given an array of integers, return indices of the two numbers such that they add up to a specific target.\n\n// You may assume that each input would have exactly one solution, and you may not use the same element twice.\n\n// Example:\n// Given nums = [2, 7, 11, 15], target = 9,\n\n// Because nums[0] + nums[1] = 2 + 7 = 9,\n// return [0, 1].\n\npublic class TwoSum {\n    public int[] twoSum(int[] nums, int target) {\n        int[] result = new int[2];\n        \n        HashMap<Integer, Integer> map = new HashMap<>();\n        \n        for(int i = 0; i < nums.length; i++) {\n            if(map.containsKey(target - nums[i])) {\n                result[1] = i;\n                result[0] = map.get(target - nums[i]);\n\n                return result;\n            }\n            \n            map.put(nums[i], i);\n        }\n        \n        return result;\n    }\n}\n",
    index: 360,
  },
  {
    title: "Valid Palindrome",
    category: "facebook",
    id: "ValidPalindrome_facebook",
    algorithm:
      "public class ValidPalindrome {\n    public boolean isPalindrome(String s) {\n        int left = 0;\n        int right = s.length() - 1;\n        \n        while(left < right) {\n            while(!Character.isLetterOrDigit(s.charAt(left)) && left < right) {\n                left++;\n            }\n\n            while(!Character.isLetterOrDigit(s.charAt(right)) && right > left) {\n                right--;\n            }\n            \n            if(Character.toLowerCase(s.charAt(left)) != Character.toLowerCase(s.charAt(right))) {\n                return false;\n            }\n            \n            left++;\n            right--;\n        }\n        \n        return true;\n    }\n}\n",
    index: 361,
  },
  {
    title: "Valid Parentheses",
    category: "facebook",
    id: "ValidParentheses_facebook",
    algorithm:
      "// Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.\n\n// The brackets must close in the correct order, \"()\" and \"()[]{}\" are all valid but \"(]\" and \"([)]\" are not.\n\npublic class ValidParentheses {\n    public boolean isValid(String s) {\n        if(s.length() % 2 == 1) {\n            return false;\n        }\n        \n        Stack<Character> stack = new Stack<Character>();\n        \n        for(int i = 0; i < s.length(); i++) {\n            if(s.charAt(i) == '(' || s.charAt(i) == '[' || s.charAt(i) == '{') {\n                stack.push(s.charAt(i));\n            } else if(s.charAt(i) == ')' && !stack.isEmpty() && stack.peek() == ')') {\n                stack.pop();\n            } else if(s.charAt(i) == ']' && !stack.isEmpty() && stack.peek() == ']') {\n                stack.pop();\n            } else if(s.charAt(i) == '}' && !stack.isEmpty() && stack.peek() == '}') {\n                stack.pop();\n            } else {\n                return false;\n            }\n        }\n        \n        return stack.isEmpty();\n    }\n}\n",
    index: 362,
  },
  {
    title: "Validate Binary Search Tree",
    category: "facebook",
    id: "ValidateBinarySearchTree_facebook",
    algorithm:
      "// Given a binary tree, determine if it is a valid binary search tree (BST).\n\n// Assume a BST is defined as follows:\n\n// The left subtree of a node contains only nodes with keys less than the node's key.\n// The right subtree of a node contains only nodes with keys greater than the node's key.\n// Both the left and right subtrees must also be binary search trees.\n// Example 1:\n//     2\n//    / \\\n//   1   3\n// Binary tree [2,1,3], return true.\n// Example 2:\n//     1\n//    / \\\n//   2   3\n// Binary tree [1,2,3], return false.\n\n/**\n * Definition for a binary tree node.\n * public class TreeNode {\n *     int val;\n *     TreeNode left;\n *     TreeNode right;\n *     TreeNode(int x) { val = x; }\n * }\n */\npublic class ValidateBinarySearchTree {\n    public boolean isValidBST(TreeNode root) {\n        if(root == null) {\n            return true;\n        }\n        \n        return validBSTRecursive(root, Long.MIN_VALUE, Long.MAX_VALUE);\n    }\n    \n    public boolean validBSTRecursive(TreeNode root, long minValue, long maxValue) {\n        if(root == null) {\n            return true;\n        } else if(root.val >= maxValue || root.val <= minValue) {\n            return false;\n        } else {\n            return validBSTRecursive(root.left, minValue, root.val) && validBSTRecursive(root.right, root.val, maxValue);\n        }\n    }\n}\n",
    index: 363,
  },
  {
    title: "Walls And Gates",
    category: "facebook",
    id: "WallsAndGates_facebook",
    algorithm:
      "// You are given a m x n 2D grid initialized with these three possible values.\n\n// -1 - A wall or an obstacle.\n// 0 - A gate.\n// INF - Infinity means an empty room. We use the value 231 - 1 = 2147483647 to represent INF as you may assume that the distance to a gate is less than 2147483647.\n// Fill each empty room with the distance to its nearest gate. If it is impossible to reach a gate, it should be filled with INF.\n\n// For example, given the 2D grid:\n// INF  -1  0  INF\n// INF INF INF  -1\n// INF  -1 INF  -1\n//   0  -1 INF INF\n// After running your function, the 2D grid should be:\n//   3  -1   0   1\n//   2   2   1  -1\n//   1  -1   2  -1\n//   0  -1   3   4\n\npublic class WallsAndGates {\n    public void wallsAndGates(int[][] rooms) {\n        //iterate through the matrix calling dfs on all indices that contain a zero\n        for(int i = 0; i < rooms.length; i++) {\n            for(int j = 0; j < rooms[0].length; j++) {\n                if(rooms[i][j] == 0) {\n                    dfs(rooms, i, j, 0);\n                }\n            }\n        }\n    } \n\n    void dfs(int[][] rooms, int i, int j, int distance) {\n        //if you have gone out of the bounds of the array or you have run into a wall/obstacle, return\n        // room[i][j] < distance also ensure that we do not overwrite any previously determined distance if it is shorter than our current distance\n        if(i < 0 || i >= rooms.length || j < 0 || j >= rooms[0].length || rooms[i][j] < distance) {\n            return;\n        }\n        \n        //set current index's distance to distance\n        rooms[i][j] = distance;\n        \n        //recurse on all adjacent neighbors of rooms[i][j]\n        dfs(rooms, i + 1, j, distance + 1);\n        dfs(rooms, i - 1, j, distance + 1);\n        dfs(rooms, i, j + 1, distance + 1);\n        dfs(rooms, i, j - 1, distance + 1);\n    }\n}\n",
    index: 364,
  },
  {
    title: "Word Break",
    category: "facebook",
    id: "WordBreak_facebook",
    algorithm:
      '// Given a non-empty string s and a dictionary wordDict containing a list of non-empty words, determine if s can be segmented into a space-separated sequence of one or more dictionary words. You may assume the dictionary does not contain duplicate words.\n\n// For example, given\n// s = "leetcode",\n// dict = ["leet", "code"].\n\n// Return true because "leetcode" can be segmented as "leet code".\n\npublic class WordBreak {\n    public boolean wordBreak(String s, Set<String> wordDict) {\n        boolean[] dp = new boolean[s.length() + 1];\n        \n        dp[0] = true;\n        \n        for(int i = 1; i <= s.length(); i++) {\n            for(int j = 0; j < i; j++) {\n                if(dp[j] && wordDict.contains(s.substring(j, i))) {\n                    dp[i] = true;\n                    break;\n                }\n            }\n        }\n        \n        return dp[s.length()];\n    }\n}\n',
    index: 365,
  },
  {
    title: "Word Search",
    category: "facebook",
    id: "WordSearch_facebook",
    algorithm:
      "// Given a 2D board and a word, find if the word exists in the grid.\n\n// The word can be constructed from letters of sequentially adjacent cell, where \"adjacent\" cells are those horizontally or vertically neighboring. The same letter cell may not be used more than once.\n\n// For example,\n// Given board =\n\n// [\n//   ['A','B','C','E'],\n//   ['S','F','C','S'],\n//   ['A','D','E','E']\n// ]\n// word = \"ABCCED\", -> returns true,\n// word = \"SEE\", -> returns true,\n// word = \"ABCB\", -> returns false.\n\npublic class WordSearch {\n    public boolean exist(char[][] board, String word) {\n        char[] w = word.toCharArray();\n        \n        for(int i = 0; i < board.length; i++) {\n            for(int j = 0; j < board[0].length; j++) {\n                if(search(board, i, j, w, 0)) {\n                    return true;\n                }\n            }\n        }\n        \n        return false;\n    }\n    \n    \n    public boolean search(char[][] board, int i, int j, char[] w, int index) {\n        if(index == w.length) {\n            return true;\n        }\n        \n        if(i < 0 || i >= board.length || j < 0 || j >= board[0].length) {\n            return false;\n        }\n\n        if(board[i][j] != w[index]) {\n            return false;\n        }\n        \n        board[i][j] ^= 256;\n\n        boolean exist = search(board, i + 1, j, w, index + 1) ||\n                        search(board, i - 1, j, w, index + 1) ||\n                        search(board, i, j + 1, w, index + 1) ||\n                        search(board, i, j - 1, w, index + 1);\n        board[i][j] ^= 256;\n\n        return exist;\n    }\n}\n",
    index: 366,
  },
  { title: "Google", category: "top-companies", id: "google", index: 367 },
  {
    title: "3 Sum Smaller",
    category: "google",
    id: "3SumSmaller_google",
    algorithm:
      "// Given an array of n integers nums and a target, find the number of index triplets i, j, k with 0 <= i < j < k < n that satisfy the condition nums[i] + nums[j] + nums[k] < target.\n\n// For example, given nums = [-2, 0, 1, 3], and target = 2.\n\n// Return 2. Because there are two triplets which sums are less than 2:\n\n// [-2, 0, 1]\n// [-2, 0, 3]\n\n// Follow up:\n    // Could you solve it in O(n2) runtime?\n\npublic class 3SumSmaller {\n    public int threeSumSmaller(int[] nums, int target) {\n        //initialize total count to zero\n        int count = 0;\n        \n        //sort the array\n        Arrays.sort(nums);\n        \n        //loop through entire array\n        for(int i = 0; i < nums.length - 2; i++) {\n            //set left to i + 1\n            int left = i + 1;\n            //set right to end of array\n            int right = nums.length - 1;\n            \n            //while left index < right index\n            while(left < right) {\n                //if the 3 indices add to less than the target increment count\n                if(nums[i] + nums[left] + nums[right] < target) {\n                    //increment the count by the distance between left and right because the array is sorted\n                    count += right - left;\n                    \n                    //increment left pointer\n                    left++;\n                } else {\n                    //if they sum to a value greater than target...\n                    //decrement right pointer\n                    right--;\n                }\n            }\n        }\n        \n        return count;\n    }\n}\n",
    index: 368,
  },
  {
    title: "Android Unlock Patterns",
    category: "google",
    id: "AndroidUnlockPatterns_google",
    algorithm:
      "// Given an Android 3x3 key lock screen and two integers m and n, where 1 ≤ m ≤ n ≤ 9, count the total number of unlock patterns of the Android lock screen, which consist of minimum of m keys and maximum n keys.\n\n// Rules for a valid pattern:\n    // Each pattern must connect at least m keys and at most n keys.\n    // All the keys must be distinct.\n    // If the line connecting two consecutive keys in the pattern passes through any other keys, the other keys must have previously selected in the pattern. No jumps through non selected key is allowed.\n    // The order of keys used matters.\n\n// Explanation:\n// | 1 | 2 | 3 |\n// | 4 | 5 | 6 |\n// | 7 | 8 | 9 |\n// Invalid move: 4 - 1 - 3 - 6 \n// Line 1 - 3 passes through key 2 which had not been selected in the pattern.\n\n// Invalid move: 4 - 1 - 9 - 2\n// Line 1 - 9 passes through key 5 which had not been selected in the pattern.\n\n// Valid move: 2 - 4 - 1 - 3 - 6\n// Line 1 - 3 is valid because it passes through key 2, which had been selected in the pattern\n\n// Valid move: 6 - 5 - 4 - 1 - 9 - 2\n// Line 1 - 9 is valid because it passes through key 5, which had been selected in the pattern.\n\n// Example:\n// Given m = 1, n = 1, return 9.\n\npublic class AndroidUnlockPatterns {\n    public int numberOfPatterns(int m, int n) {\n        //initialize a 10x10 matrix\n        int skip[][] = new int[10][10];\n        \n        //initialize indices of skip matrix (all other indices in matrix are 0 by default)\n        skip[1][3] = skip[3][1] = 2;\n        skip[1][7] = skip[7][1] = 4;\n        skip[3][9] = skip[9][3] = 6;\n        skip[7][9] = skip[9][7] = 8;\n        skip[1][9] = skip[9][1] = skip[2][8] = skip[8][2] = skip[3][7] = skip [7][3] = skip[6][4] = skip[4][6] = 5;\n        \n        //initialize visited array\n        boolean visited[] = new boolean[10];\n        \n        //initialize total number to 0\n        int totalNumber = 0;\n        \n        //run DFS for each length from m to n\n        for(int i = m; i <= n; ++i) {\n            totalNumber += DFS(visited, skip, 1, i - 1) * 4; //1, 3, 7, and 9 are symmetric so multiply this result by 4\n            totalNumber += DFS(visited, skip, 2, i - 1) * 4; //2, 4, 6, and 8 are symmetric so multiply this result by 4\n            totalNumber += DFS(visited, skip, 5, i - 1); //do not multiply by 4 because 5 is unique         \n        }\n        \n        return totalNumber;\n    }\n    \n    int DFS(boolean visited[], int[][] skip, int current, int remaining) {\n        //base cases\n        if(remaining < 0) {\n            return 0;\n        }\n\n        if(remaining == 0) {\n            return 1;\n        }\n        \n        //mark the current node as visited\n        visited[current] = true;\n        \n        //initialize total number to 0\n        int totalNumber = 0;\n        \n        for(int i = 1; i <= 9; ++i) {\n            //if the current node has not been visited and (two numbers are adjacent or skip number has already been visited)\n            if(!visited[i] && (skip[current][i] == 0 || visited[skip[current][i]])) {\n                totalNumber += DFS(visited, skip, i, remaining - 1);\n            }\n        }\n        \n        //mark the current node as not visited\n        visited[current] = false;\n        \n        //return total number\n        return totalNumber;\n    }\n}\n",
    index: 369,
  },
  {
    title: "Binary Search Tree Iterator",
    category: "google",
    id: "BinarySearchTreeIterator_google",
    algorithm:
      "// Implement an iterator over a binary search tree (BST). Your iterator will be initialized with the root node of a BST.\n\n// Calling next() will return the next smallest number in the BST.\n\n// Note: next() and hasNext() should run in average O(1) time and uses O(h) memory, where h is the height of the tree.\n\n/**\n * Definition for binary tree\n * public class TreeNode {\n *     int val;\n *     TreeNode left;\n *     TreeNode right;\n *     TreeNode(int x) { val = x; }\n * }\n */\n\npublic class BinarySearchTreeIterator {\n    Stack<TreeNode> stack;\n\n    public BSTIterator(TreeNode root) {\n        stack = new Stack<TreeNode>();\n        \n        while(root != null) {\n            stack.push(root);\n            root = root.left;\n        }\n    }\n\n    /** @return whether we have a next smallest number */\n    public boolean hasNext() {\n        return stack.isEmpty() ? false : true;\n    }\n\n    /** @return the next smallest number */\n    public int next() {\n        TreeNode nextSmallest = stack.pop();\n        \n        TreeNode addToStack = nextSmallest.right;\n        \n        while(addToStack != null) {\n            stack.add(addToStack);\n            addToStack = addToStack.left;\n        }\n        \n        return nextSmallest.val;\n    }\n}\n\n/**\n * Your BSTIterator will be called like this:\n * BSTIterator i = new BSTIterator(root);\n * while (i.hasNext()) v[f()] = i.next();\n */\n",
    index: 370,
  },
  {
    title: "Binary Tree Paths",
    category: "google",
    id: "BinaryTreePaths_google",
    algorithm:
      '// Given a binary tree, return all root-to-leaf paths.\n\n// For example, given the following binary tree:\n\n//    1\n//  /   \\\n// 2     3\n//  \\\n//   5\n// All root-to-leaf paths are:\n\n// ["1->2->5", "1->3"]\n\n/**\n * Definition for a binary tree node.\n * public class TreeNode {\n *     int val;\n *     TreeNode left;\n *     TreeNode right;\n *     TreeNode(int x) { val = x; }\n * }\n */\npublic class BinaryTreePaths {\n    public List<String> binaryTreePaths(TreeNode root) {\n        List<String> result = new ArrayList<String>();\n        \n        if(root == null) {\n            return result;\n        }\n        \n        helper(new String(), root, result);\n        \n        return result;\n    }\n    \n    public void helper(String current, TreeNode root, List<String> result) {\n        if(root.left == null && root.right == null) {\n            result.add(current + root.val);\n        }\n\n        if(root.left != null) {\n            helper(current + root.val + "->", root.left, result);\n        }\n\n        if(root.right != null) {\n            helper(current + root.val + "->", root.right, result);\n        }\n    }\n}\n',
    index: 371,
  },
  {
    title: "Binary Tree Vertical Order Traversal",
    category: "google",
    id: "BinaryTreeVerticalOrderTraversal_google",
    algorithm:
      "// Given a binary tree, return the vertical order traversal of its nodes' values. (ie, from top to bottom, column by column).\n\n// If two nodes are in the same row and column, the order should be from left to right.\n\n// Examples:\n\n// Given binary tree [3,9,20,null,null,15,7],\n//    3\n//   /\\\n//  /  \\\n//  9  20\n//     /\\\n//    /  \\\n//   15   7\n// return its vertical order traversal as:\n// [\n//   [9],\n//   [3,15],\n//   [20],\n//   [7]\n// ]\n// Given binary tree [3,9,8,4,0,1,7],\n//      3\n//     /\\\n//    /  \\\n//    9   8\n//   /\\  /\\\n//  /  \\/  \\\n//  4  01   7\n// return its vertical order traversal as:\n// [\n//   [4],\n//   [9],\n//   [3,0,1],\n//   [8],\n//   [7]\n// ]\n// Given binary tree [3,9,8,4,0,1,7,null,null,null,2,5] (0's right child is 2 and 1's left child is 5),\n//      3\n//     /\\\n//    /  \\\n//    9   8\n//   /\\  /\\\n//  /  \\/  \\\n//  4  01   7\n//     /\\\n//    /  \\\n//    5   2\n// return its vertical order traversal as:\n// [\n//   [4],\n//   [9,5],\n//   [3,0,1],\n//   [8,2],\n//   [7]\n// ]\n\n/**\n * Definition for a binary tree node.\n * public class TreeNode {\n *     int val;\n *     TreeNode left;\n *     TreeNode right;\n *     TreeNode(int x) { val = x; }\n * }\n */\npublic class BinaryTreeVerticalOrderTraversal {\n    public List<List<Integer>> verticalOrder(TreeNode root) {\n        List<List<Integer>> result = new ArrayList<>();\n        \n        if(root == null) {\n            return result;\n        }\n        \n        Map<Integer, ArrayList<Integer>> map = new HashMap<>();\n        Queue<TreeNode> q = new LinkedList<>();\n        Queue<Integer> cols = new LinkedList<>();\n        \n        q.add(root);\n        cols.add(0);\n        \n        int min = 0;\n        int max = 0;\n        \n        while(!q.isEmpty()) {\n            TreeNode node = q.poll();\n            int col = cols.poll();\n            \n            if(!map.containsKey(col)) {\n                map.put(col, new ArrayList<Integer>());\n            }\n            \n            map.get(col).add(node.val);\n            \n            if(node.left != null) {\n                q.add(node.left);\n                cols.add(col - 1);\n                min = Math.min(min, col - 1);\n            }\n            \n            if(node.right != null) {\n                q.add(node.right);\n                cols.add(col + 1);\n                max = Math.max(max, col + 1);\n            }\n        }\n        \n        for(int i = min; i <= max; i++) {\n            result.add(map.get(i));\n        }\n        \n        return result;\n    }\n}\n",
    index: 372,
  },
  {
    title: "Binary Watch",
    category: "google",
    id: "BinaryWatch_google",
    algorithm:
      '// A binary watch has 4 LEDs on the top which represent the hours (0-11), and the 6 LEDs on the bottom represent the minutes (0-59).\n\n// Each LED represents a zero or one, with the least significant bit on the right.\n\n// For example, the above binary watch reads "3:25".\n\n// Given a non-negative integer n which represents the number of LEDs that are currently on, return all possible times the watch could represent.\n\n// Example:\n\n// Input: n = 1\n// Return: ["1:00", "2:00", "4:00", "8:00", "0:01", "0:02", "0:04", "0:08", "0:16", "0:32"]\n// Note:\n// The order of output does not matter.\n// The hour must not contain a leading zero, for example "01:00" is not valid, it should be "1:00".\n// The minute must be consist of two digits and may contain a leading zero, for example "10:2" is not valid, it should be "10:02".\n\npublic class BinaryWatch {\n    public List<String> readBinaryWatch(int num) {\n        ArrayList<String> allTimes = new ArrayList<String>();\n        \n        //iterate through all possible time combinations\n        for(int i = 0; i < 12; i++) {\n            for(int j = 0; j < 60; j++) {\n                //if the current number and n have the same number of bits the time is possible\n                if(Integer.bitCount(i * 64 + j) == num) {\n                    //add the current time to all times arraylist\n                    allTimes.add(String.format("%d:%02d", i, j));\n                }\n            }\n        }\n        \n        return allTimes;\n    }\n}\n',
    index: 373,
  },
  {
    title: "Bomb Enemy",
    category: "google",
    id: "BombEnemy_google",
    algorithm:
      "//  Given a 2D grid, each cell is either a wall 'W', an enemy 'E' or empty '0' (the number zero), return the maximum enemies you can kill using one bomb.\n// The bomb kills all the enemies in the same row and column from the planted point until it hits the wall since the wall is too strong to be destroyed.\n// Note that you can only put the bomb at an empty cell.\n\n// Example:\n// For the given grid\n\n// 0 E 0 0\n// E 0 W E\n// 0 E 0 0\n\n// return 3. (Placing a bomb at (1,1) kills 3 enemies)\n\n public class BombEnemy {\n     public int maxKilledEnemies(char[][] grid) {\n        if(grid == null || grid.length == 0 ||  grid[0].length == 0) {\n            return 0;\n        }\n\n        int max = 0;\n        int row = 0;\n        int[] col = new int[grid[0].length];\n\n        for(int i = 0; i<grid.length; i++) {\n            for(int j = 0; j<grid[0].length;j++) {\n                if(grid[i][j] == 'W') {\n                    continue;\n                }\n\n                if(j == 0 || grid[i][j-1] == 'W') {\n                     row = killedEnemiesRow(grid, i, j);\n                }\n\n                if(i == 0 || grid[i-1][j] == 'W') {\n                     col[j] = killedEnemiesCol(grid,i,j);\n                }\n\n                if(grid[i][j] == '0') {\n                    max = (row + col[j] > max) ? row + col[j] : max;\n                }\n            }\n        }\n        \n        return max;\n    }\n\n    //calculate killed enemies for row i from column j\n    private int killedEnemiesRow(char[][] grid, int i, int j) {\n        int num = 0;\n\n        while(j <= grid[0].length-1 && grid[i][j] != 'W') {\n            if(grid[i][j] == 'E') {\n                num++;\n            }\n\n            j++;\n        }\n\n        return num;\n    }\n\n    //calculate killed enemies for  column j from row i\n    private int killedEnemiesCol(char[][] grid, int i, int j) {\n        int num = 0;\n\n        while(i <= grid.length -1 && grid[i][j] != 'W'){\n            if(grid[i][j] == 'E') {\n                num++;\n            }\n\n            i++;\n        }\n\n        return num;\n    }\n}\n",
    index: 374,
  },
  {
    title: "Bulls And Cows",
    category: "google",
    id: "BullsAndCows_google",
    algorithm:
      '//You are playing the following Bulls and Cows game with your friend: You write down a number and ask your friend to guess what the number is. Each time your friend makes a guess, you provide a hint that indicates how many digits in said guess match your secret number exactly in both digit and position (called "bulls") and how many digits match the secret number but locate in the wrong position (called "cows"). Your friend will use successive guesses and hints to eventually derive the secret number.\n//\n//Write a function to return a hint according to the secret number and friend\'s guess, use A to indicate the bulls and B to indicate the cows. \n//\n//Please note that both secret number and friend\'s guess may contain duplicate digits.\n//\n//Example 1:\n//\n//Input: secret = "1807", guess = "7810"\n//\n//Output: "1A3B"\n//\n//Explanation: 1 bull and 3 cows. The bull is 8, the cows are 0, 1 and 7.\n//Example 2:\n//\n//Input: secret = "1123", guess = "0111"\n//\n//Output: "1A1B"\n//\n//Explanation: The 1st 1 in friend\'s guess is a bull, the 2nd or 3rd 1 is a cow.\n//Note: You may assume that the secret number and your friend\'s guess only contain digits, and their lengths are always equal.\n\nclass BullsAndCows {\n    public String getHint(String secret, String guess) {\n        int bulls = 0;\n        int cows = 0;\n        int[] counts = new int[10];\n        for(int i = 0; i < secret.length(); i++) {\n            if(secret.charAt(i) == guess.charAt(i)) {\n                bulls++;\n            }  else {\n                if(counts[secret.charAt(i) - \'0\']++ < 0) {\n                    cows++;\n                }\n                if(counts[guess.charAt(i) - \'0\']-- > 0) {\n                    cows++;\n                }\n            }\n        }\n        \n        return bulls + "A" + cows + "B";\n    }\n}\n',
    index: 375,
  },
  {
    title: "Clone Graph",
    category: "google",
    id: "CloneGraph_google",
    algorithm:
      "// Clone an undirected graph. Each node in the graph contains a label and a list of its neighbors.\n\n// OJ's undirected graph serialization:\n// Nodes are labeled uniquely.\n\n// We use # as a separator for each node, and , as a separator for node label and each neighbor of the node.\n// As an example, consider the serialized graph {0,1,2#1,2#2,2}.\n\n// The graph has a total of three nodes, and therefore contains three parts as separated by #.\n\n// First node is labeled as 0. Connect node 0 to both nodes 1 and 2.\n// Second node is labeled as 1. Connect node 1 to node 2.\n// Third node is labeled as 2. Connect node 2 to node 2 (itself), thus forming a self-cycle.\n// Visually, the graph looks like the following:\n\n//        1\n//       / \\\n//      /   \\\n//     0 --- 2\n//          / \\\n//          \\_/\n\n/**\n * Definition for undirected graph.\n * class UndirectedGraphNode {\n *     int label;\n *     List<UndirectedGraphNode> neighbors;\n *     UndirectedGraphNode(int x) { label = x; neighbors = new ArrayList<UndirectedGraphNode>(); }\n * };\n */\npublic class CloneGraph {\n    public HashMap<Integer, UndirectedGraphNode> map = new HashMap<Integer, UndirectedGraphNode>();\n    \n    public UndirectedGraphNode cloneGraph(UndirectedGraphNode node) {\n        if(node == null) {\n            return null;\n        }\n        \n        if(map.containsKey(node.label)) {\n            return map.get(node.label);\n        }\n        \n        UndirectedGraphNode newNode = new UndirectedGraphNode(node.label);\n        map.put(newNode.label, newNode);\n        \n        for(UndirectedGraphNode neighbor : node.neighbors) {\n            newNode.neighbors.add(cloneGraph(neighbor));\n        }\n        \n        return newNode;\n    }\n}\n",
    index: 376,
  },
  {
    title: "Closest Binary Search Tree Value",
    category: "google",
    id: "ClosestBinarySearchTreeValue_google",
    algorithm:
      "// Given a non-empty binary search tree and a target value, find the value in the BST that is closest to the target.\n\n// Note:\n\t// Given target value is a floating point.\n\t// You are guaranteed to have only one unique value in the BST that is closest to the target.\n\n/**\n * Definition for a binary tree node.\n * public class TreeNode {\n *     int val;\n *     TreeNode left;\n *     TreeNode right;\n *     TreeNode(int x) { val = x; }\n * }\n */\npublic class ClosestBinarySearchTreeValue {\n    public int closestValue(TreeNode root, double target) {\n        int value = root.val;\n        TreeNode child = root.val < target ? root.right : root.left;\n\n        if(child == null) {\n            return value;\n        }\n\n        int childValue = closestValue(child, target);\n        \n        return Math.abs(value - target) < Math.abs(childValue - target) ? value : childValue;\n    }\n}\n",
    index: 377,
  },
  {
    title: "Combination Sum I V",
    category: "google",
    id: "CombinationSumIV_google",
    algorithm:
      "// Given an integer array with all positive numbers and no duplicates, find the number of possible combinations that add up to a positive integer target.\n\n// Example:\n\n// nums = [1, 2, 3]\n// target = 4\n\n// The possible combination ways are:\n// (1, 1, 1, 1)\n// (1, 1, 2)\n// (1, 2, 1)\n// (1, 3)\n// (2, 1, 1)\n// (2, 2)\n// (3, 1)\n\n// Note that different sequences are counted as different combinations.\n\n// Therefore the output is 7.\n\n// Follow up:\n    // What if negative numbers are allowed in the given array?\n    // How does it change the problem?\n    // What limitation we need to add to the question to allow negative numbers?\n\npublic class CombinationSumIV {\n    public int combinationSum4(int[] nums, int target) {\n        int[] dp = new int[target + 1];\n        dp[0] = 1;\n        \n        for(int i = 1; i < dp.length; i++) {\n            for(int j = 0; j < nums.length; j++) {\n                if(i - nums[j] >= 0) {\n                    dp[i] += dp[i - nums[j]];\n                }\n            }\n        }\n        \n        return dp[target];\n    }\n}\n",
    index: 378,
  },
  {
    title: "Daily Temperatures",
    category: "google",
    id: "DailyTemperatures_google",
    algorithm:
      "//Given a list of daily temperatures, produce a list that, for each day in the input, tells you how many days you would have to wait until a warmer temperature. If there is no future day for which this is possible, put 0 instead.\n//\n//For example, given the list temperatures = [73, 74, 75, 71, 69, 72, 76, 73], your output should be [1, 1, 4, 2, 1, 1, 0, 0].\n//\n//Note: The length of temperatures will be in the range [1, 30000]. Each temperature will be an integer in the range [30, 100].\n\nclass DailyTemperatures {\n    public int[] dailyTemperatures(int[] temperatures) {\n        int[] result = new int[temperatures.length];\n        Stack<Integer> stack = new Stack<Integer>();\n        for(int i = 0; i < temperatures.length; i++) {\n            while(!stack.isEmpty() && temperatures[i] > temperatures[stack.peek()]) {\n                int index = stack.pop();\n                result[index] = i - index;\n            }\n            stack.push(i);\n        }\n        \n        return result;\n    }\n}\n",
    index: 379,
  },
  {
    title: "Decode String",
    category: "google",
    id: "DecodeString_google",
    algorithm:
      "// Given an encoded string, return it's decoded string.\n\n// The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times. Note that k is guaranteed to be a positive integer.\n\n// You may assume that the input string is always valid; No extra white spaces, square brackets are well-formed, etc.\n\n// Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, k. For example, there won't be input like 3a or 2[4].\n\npublic class DecodeString {\n    public String decodeString(String s) {\n        //declare empty string\n        String decoded = \"\";\n        \n        //initialize stack to hold counts\n        Stack<Integer> countStack = new Stack<Integer>();\n        \n        //initalize stack to hold decoded string\n        Stack<String> decodedStack = new Stack<String>();\n        \n        //initialize index to zero\n        int index = 0;\n        \n        //iterate through entire string\n        while(index < s.length()) {\n            //if the current character is numeric...\n            if(Character.isDigit(s.charAt(index))) {\n                int count = 0;\n                \n                //determine the number\n                while(Character.isDigit(s.charAt(index))) {\n                    count = 10 * count + (s.charAt(index) - '0');\n                    index++;\n                }\n\n                //push the number onto the count stack\n                countStack.push(count);\n            } else if(s.charAt(index) == '[') {\n                //if the current character is an opening bracket\n                decodedStack.push(decoded);\n                decoded = \"\";\n                index++;\n            } else if(s.charAt(index) == ']') {\n                //if the current character is a closing bracket\n                StringBuilder temp = new StringBuilder(decodedStack.pop());\n                \n                int repeatTimes = countStack.pop();\n                \n                for(int i = 0; i < repeatTimes; i++) {\n                    temp.append(decoded);\n                }\n                \n                decoded = temp.toString();\n                index++;\n            } else {\n                //otherwise, append the current character to the decoded string\n                decoded += s.charAt(index);\n                index++;\n            }\n        }\n        \n        //return the decoded string\n        return decoded;\n    }\n}\n",
    index: 380,
  },
  {
    title: "Encode And Decode Tiny U R L",
    category: "google",
    id: "EncodeAndDecodeTinyURL_google",
    algorithm:
      '//TinyURL is a URL shortening service where you enter a URL such as https://leetcode.com/problems/design-tinyurl \n//and it returns a short URL such as http://tinyurl.com/4e9iAk.\n//\n//Design the encode and decode methods for the TinyURL service. There is no restriction on how your \n//encode/decode algorithm should work. You just need to ensure that a URL can be encoded to a tiny URL \n//and the tiny URL can be decoded to the original URL.\n\npublic class EncodeAndDecodeTinyURL {\n    HashMap<String, String> map = new HashMap<String, String>();\n    String characters = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";\n    int count = 1;\n\n    public String getKey() {\n        String key = "";\n        while(count > 0) {\n            count--;\n            key += characters.charAt(count);\n            count /= characters.length();\n        }\n        \n        return key;\n    }\n    \n    // Encodes a URL to a shortened URL.\n    public String encode(String longUrl) {\n        String key = getKey();\n        map.put(key, longUrl);\n        count++;\n            \n        return "http://tinyurl.com/" + key;\n    }\n\n    // Decodes a shortened URL to its original URL.\n    public String decode(String shortUrl) {\n        return map.get(shortUrl.replace("http://tinyurl.com/", ""));\n    }\n}\n\n// Your Codec object will be instantiated and called as such:\n// Codec codec = new Codec();\n// codec.decode(codec.encode(url));\n',
    index: 381,
  },
  {
    title: "Expression Add Operators",
    category: "google",
    id: "ExpressionAddOperators_google",
    algorithm:
      '// Given a string that contains only digits 0-9 and a target value, return all possibilities to add binary operators (not unary) +, -, or * between the digits so they evaluate to the target value.\n\n// Examples: \n// "123", 6 -> ["1+2+3", "1*2*3"] \n// "232", 8 -> ["2*3+2", "2+3*2"]\n// "105", 5 -> ["1*0+5","10-5"]\n// "00", 0 -> ["0+0", "0-0", "0*0"]\n// "3456237490", 9191 -> []\n\npublic class ExpressionAddOperator {\n    public List<String> addOperators(String num, int target) {\n        List<String> result = new ArrayList<String>();\n\n        if(num == null || num.length() == 0) {\n            return result;\n        }\n\n        helper(result, "", num, target, 0, 0, 0);\n\n        return result;\n    }\n    \n    public void helper(List<String> result, String path, String num, int target, int pos, long eval, long multed) {\n        if(pos == num.length()) {\n            if(eval == target) {\n                result.add(path);\n            }\n            \n            return;\n        }\n        \n        for(int i = pos; i < num.length(); i++) {\n            if(i != pos && num.charAt(pos) == \'0\') {\n                break;\n            }\n\n            long cur = Long.parseLong(num.substring(pos, i + 1));\n\n            if(pos == 0) {\n                helper(result, path + cur, num, target, i + 1, cur, cur);\n            } else {\n                helper(result, path + "+" + cur, num, target, i + 1, eval + cur, cur);\n                helper(result, path + "-" + cur, num, target, i + 1, eval - cur, -cur);\n                helper(result, path + "*" + cur, num, target, i + 1, eval - multed + multed * cur, multed * cur);\n            }\n        }\n    }\n}\n',
    index: 382,
  },
  {
    title: "Find All Numbers Disappeared In An Array",
    category: "google",
    id: "FindAllNumbersDisappearedInAnArray_google",
    algorithm:
      "//Given an array of integers where 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.\n//\n//Find all the elements of [1, n] inclusive that do not appear in this array.\n//\n//Could you do it without extra space and in O(n) runtime? You may assume the returned list does not count as extra space.\n//\n//Example:\n//\n//Input:\n//[4,3,2,7,8,2,3,1]\n//\n//Output:\n//[5,6]\n\nclass FindAllNumbersDisappearedInAnArray {\n    public List<Integer> findDisappearedNumbers(int[] nums) {\n        List<Integer> result = new ArrayList<Integer>();\n        HashMap<Integer, Integer> map = new HashMap<Integer, Integer>();\n        for(int i = 1; i <= nums.length; i++) {\n            map.put(i, 1);\n        }\n        \n        for(int i = 0; i < nums.length; i++) {\n            if(map.containsKey(nums[i])) {\n                map.put(nums[i], -1);\n            }\n        }\n        \n        for(int i: map.keySet()) {\n            if(map.get(i) != -1) {\n                result.add(i);\n            }\n        }\n        \n        return result;\n    }\n}\n",
    index: 383,
  },
  {
    title: "Find The Difference",
    category: "google",
    id: "FindTheDifference_google",
    algorithm:
      '// Given two strings s and t which consist of only lowercase letters.\n\n// String t is generated by random shuffling string s and then add one more letter at a random position.\n\n// Find the letter that was added in t.\n\n// Example:\n\n// Input:\n// s = "abcd"\n// t = "abcde"\n\n// Output:\n// e\n\n// Explanation:\n// \'e\' is the letter that was added.\n\npublic class FindTheDifference {\n    public char findTheDifference(String s, String t) {\n        int charCodeS = 0;\n        int charCodeT = 0;\n        \n        for(int i = 0; i < s.length(); i++) {\n            charCodeS += (int)(s.charAt(i));\n        }\n        \n        for(int i = 0; i < t.length(); i++) {\n            charCodeT += (int)(t.charAt(i));\n        }\n        \n        return (char)(charCodeT - charCodeS);\n    }\n}\n',
    index: 384,
  },
  {
    title: "First Unique Character In A String",
    category: "google",
    id: "FirstUniqueCharacterInAString_google",
    algorithm:
      '//Given a string, find the first non-repeating character in it and return it\'s index. If it doesn\'t exist, return -1.\n//\n//Examples:\n//\n//s = "leetcode"\n//return 0.\n//\n//s = "loveleetcode",\n//return 2.\n//Note: You may assume the string contain only lowercase letters.\n\nclass FirstUniqueCharacterInAString {\n    public int firstUniqChar(String s) {\n        HashMap<Character, Integer> characters = new HashMap<Character, Integer>();\n        for(int i = 0; i < s.length(); i++) {\n            char current = s.charAt(i);\n            if(characters.containsKey(current)) {\n                characters.put(current, -1);\n            } else {\n                characters.put(current, i);\n            }\n        }\n        \n        int min = Integer.MAX_VALUE;\n        for(char c: characters.keySet()) {\n            if(characters.get(c) > -1 && characters.get(c) < min) {\n                min = characters.get(c);\n            }\n        }\n        \n        return min == Integer.MAX_VALUE ? -1 : min;\n        \n    }\n}\n',
    index: 385,
  },
  {
    title: "Flatten Nested List Iterator",
    category: "google",
    id: "FlattenNestedListIterator_google",
    algorithm:
      "// Given a nested list of integers, implement an iterator to flatten it.\n\n// Each element is either an integer, or a list -- whose elements may also be integers or other lists.\n\n// Example 1:\n// Given the list [[1,1],2,[1,1]],\n\n// By calling next repeatedly until hasNext returns false, the order of elements returned by next should be: [1,1,2,1,1].\n\n// Example 2:\n// Given the list [1,[4,[6]]],\n\n// By calling next repeatedly until hasNext returns false, the order of elements returned by next should be: [1,4,6].\n\n/**\n * // This is the interface that allows for creating nested lists.\n * // You should not implement it, or speculate about its implementation\n * public interface NestedInteger {\n *\n *     // @return true if this NestedInteger holds a single integer, rather than a nested list.\n *     public boolean isInteger();\n *\n *     // @return the single integer that this NestedInteger holds, if it holds a single integer\n *     // Return null if this NestedInteger holds a nested list\n *     public Integer getInteger();\n *\n *     // @return the nested list that this NestedInteger holds, if it holds a nested list\n *     // Return null if this NestedInteger holds a single integer\n *     public List<NestedInteger> getList();\n * }\n */\npublic class FlattenNestedListIterator implements Iterator<Integer> {\n    Stack<NestedInteger> stack = new Stack<NestedInteger>();\n\n    public NestedIterator(List<NestedInteger> nestedList) {\n        for(int i = nestedList.size() - 1; i >= 0; i--) {\n            stack.push(nestedList.get(i));\n        }\n    }\n\n    @Override\n    public Integer next() {\n        return stack.pop().getInteger();\n    }\n\n    @Override\n    public boolean hasNext() {\n        while(!stack.isEmpty()) {\n            NestedInteger current = stack.peek();\n\n            if(current.isInteger()) {\n                return true;\n            }\n\n            stack.pop();\n\n            for(int i = current.getList().size() - 1;  i >= 0; i--) {\n                stack.push(current.getList().get(i));\n            }\n        }\n        \n        return false;\n    }\n}\n\n/**\n * Your NestedIterator object will be instantiated and called as such:\n * NestedIterator i = new NestedIterator(nestedList);\n * while (i.hasNext()) v[f()] = i.next();\n */\n",
    index: 386,
  },
  {
    title: "Game Of Life",
    category: "google",
    id: "GameOfLife_google",
    algorithm:
      '// According to the Wikipedia\'s article: "The Game of Life, also known simply as Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970."\n\n// Given a board with m by n cells, each cell has an initial state live (1) or dead (0). Each cell interacts with its eight neighbors (horizontal, vertical, diagonal) using the following four rules (taken from the above Wikipedia article):\n\n    // Any live cell with fewer than two live neighbors dies, as if caused by under-population.\n    // Any live cell with two or three live neighbors lives on to the next generation.\n    // Any live cell with more than three live neighbors dies, as if by over-population..\n    // Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.\n    // Write a function to compute the next state (after one update) of the board given its current state.\n\n// Follow up: \n// Could you solve it in-place? Remember that the board needs to be updated at the same time: You cannot update some cells first and then use their updated values to update other cells.\n// In this question, we represent the board using a 2D array. In principle, the board is infinite, which would cause problems when the active area encroaches the border of the array. How would you address these problems?\n\npublic class GameOfLife {\n    public void gameOfLife(int[][] board) {\n        if(board == null || board.length == 0) {\n            return;\n        }\n        \n        int m = board.length;\n        int n = board[0].length;\n        \n        for(int i = 0; i < m; i++) {\n            for(int j = 0; j < n; j++) {\n                int lives = liveNeighbors(board, m, n, i, j);\n\n                if(board[i][j] ==  1 && lives >= 2 && lives <= 3) {\n                    board[i][j] = 3;\n                }\n                \n                if(board[i][j] == 0 && lives == 3) {\n                    board[i][j] = 2;\n                }\n            }\n        }\n        \n        for(int i = 0; i < m; i++) {\n            for(int j = 0; j < n; j++) {\n                board[i][j] >>= 1;\n            }\n        }\n    }\n    \n    private int liveNeighbors(int[][] board, int m, int n, int i, int j) {\n        int lives = 0;\n        \n        for(int x = Math.max(i - 1, 0); x <= Math.min(i + 1, m - 1); x++) {\n            for(int y = Math.max(j - 1, 0); y <= Math.min(j + 1, n - 1); y++) {\n                lives += board[x][y] & 1;\n            }\n        }\n        \n        lives -= board[i][j] & 1;\n        \n        return lives;\n    }\n}\n',
    index: 387,
  },
  {
    title: "Generalized Abbreviation",
    category: "google",
    id: "GeneralizedAbbreviation_google",
    algorithm:
      '// Write a function to generate the generalized abbreviations of a word.\n\n// Example:\n// Given word = "word", return the following list (order does not matter):\n// ["word", "1ord", "w1rd", "wo1d", "wor1", "2rd", "w2d", "wo2", "1o1d", "1or1", "w1r1", "1o2", "2r1", "3d", "w3", "4"]\n\npublic class GeneralizedAbbreviation {\n    public List<String> generateAbbreviations(String word) {\n        List<String> result = new ArrayList<String>();\n        \n        backtrack(result, word, 0, "", 0);\n        \n        return result;\n    }\n    \n    void backtrack(List result, String word, int position, String current, int count) {\n        if(position == word.length()) {\n            if(count > 0) {\n                current += count;   \n            }\n\n            result.add(current);\n        } else {\n            backtrack(result, word, position + 1, current, count + 1);\n            backtrack(result, word, position + 1, current + (count > 0 ? count : "") + word.charAt(position), 0);\n        }\n    } \n}\n',
    index: 388,
  },
  {
    title: "Generate Parentheses",
    category: "google",
    id: "GenerateParentheses_google",
    algorithm:
      '//Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.\n//\n//For example, given n = 3, a solution set is:\n//\n//[\n  //"((()))",\n  //"(()())",\n  //"(())()",\n  //"()(())",\n  //"()()()"\n//]\n\nclass GenerateParentheses {\n    public List<String> generateParenthesis(int n) {\n        List<String> result = new ArrayList<String>();\n        generateParenthesisRecursive(result, "", 0, 0, n);\n        \n        return result;\n    }\n    \n    public void generateParenthesisRecursive(List<String> result, String current, int open, int close, int n) {\n        if(current.length() == n * 2) {\n            result.add(current);\n            return;\n        }\n        \n        if(open < n) {\n            generateParenthesisRecursive(result, current + "(", open + 1, close, n);\n        }\n        \n        if(close < open) {\n            generateParenthesisRecursive(result, current + ")", open, close + 1, n);\n        }\n    }\n}\n',
    index: 389,
  },
  {
    title: "Group Shifted Strings",
    category: "google",
    id: "GroupShiftedStrings_google",
    algorithm:
      '// Given a string, we can "shift" each of its letter to its successive letter, for example: "abc" -> "bcd". We can keep "shifting" which forms the sequence:\n\n// "abc" -> "bcd" -> ... -> "xyz"\n// Given a list of strings which contains only lowercase alphabets, group all strings that belong to the same shifting sequence.\n\n// For example, given: ["abc", "bcd", "acef", "xyz", "az", "ba", "a", "z"], \n// A solution is:\n\n// [\n//   ["abc","bcd","xyz"],\n//   ["az","ba"],\n//   ["acef"],\n//   ["a","z"]\n// ]\n\npublic class GroupShiftedStrings {\n    public List<List<String>> groupStrings(String[] strings) {\n        List<List<String>> result = new ArrayList<List<String>>();\n        \n        HashMap<String, List<String>> map = new HashMap<String, List<String>>();\n        \n        for(String s : strings) {\n            int offset = s.charAt(0) - \'a\';\n            String key = "";\n\n            for(int i = 0; i < s.length(); i++) {\n                char current = (char)(s.charAt(i) - offset);\n                \n                if(current < \'a\') {\n                    current += 26;\n                }\n                \n                key += current;\n            }\n            \n            if(!map.containsKey(key)) {\n                List<String> list = new ArrayList<String>();\n                map.put(key, list);\n            }\n            \n            map.get(key).add(s);\n        }\n        \n        for(String key : map.keySet()) {\n            List<String> list = map.get(key);\n            \n            Collections.sort(list);\n            \n            result.add(list);   \n        }\n        \n        return result;\n    }\n}\n',
    index: 390,
  },
  {
    title: "Guess Number Higher Or Lower",
    category: "google",
    id: "GuessNumberHigherOrLower_google",
    algorithm:
      "// We are playing the Guess Game. The game is as follows:\n\n// I pick a number from 1 to n. You have to guess which number I picked.\n\n// Every time you guess wrong, I'll tell you whether the number is higher or lower.\n\n// You call a pre-defined API guess(int num) which returns 3 possible results (-1, 1, or 0):\n\n// -1 : My number is lower\n//  1 : My number is higher\n//  0 : Congrats! You got it!\n// Example:\n// n = 10, I pick 6.\n\n// Return 6.\n\n/* The guess API is defined in the parent class GuessGame.\n   @param num, your guess\n   @return -1 if my number is lower, 1 if my number is higher, otherwise return 0\n      int guess(int num); */\n\npublic class GuessNumberHigherOrLower extends GuessGame {\n    public int guessNumber(int n) {\n        int left = 1;\n        int right = n;\n        while(left <= right) {\n            int mid = left + (right - left) / 2;\n            if(guess(mid) == 0) {\n                return mid;\n            } else if(guess(mid) > 0) {\n                left = mid + 1;\n            } else {\n                right = mid;\n            }\n        }\n        \n        return -1;\n    }\n}\n",
    index: 391,
  },
  {
    title: "Implement Trie",
    category: "google",
    id: "ImplementTrie_google",
    algorithm:
      '// Implement a trie with insert, search, and startsWith methods.\n\n// Note:\n// You may assume that all inputs are consist of lowercase letters a-z.\n\n// Your Trie object will be instantiated and called as such:\n// Trie trie = new Trie();\n// trie.insert("somestring");\n// trie.search("key");\n\nclass TrieNode {\n    HashMap<Character, TrieNode> map;\n    char character;\n    boolean last;\n    \n    // Initialize your data structure here.\n    public TrieNode(char character) {\n        this.map = new HashMap<Character, TrieNode>();\n        this.character = character;\n        this.last = false;\n    }\n}\n\npublic class Trie {\n    private TrieNode root;\n\n    public Trie() {\n        root = new TrieNode(\' \');\n    }\n\n    // Inserts a word into the trie.\n    public void insert(String word) {\n        TrieNode current = root;\n            \n        for(char c : word.toCharArray()) {\n            if(!current.map.containsKey(c)) {\n                current.map.put(c, new TrieNode(c));\n            }\n            \n            current = current.map.get(c);\n        }\n        \n        current.last = true;\n    }\n\n    // Returns if the word is in the trie.\n    public boolean search(String word) {\n        TrieNode current = root;\n        \n        for(char c : word.toCharArray()) {\n            if(!current.map.containsKey(c)) {\n                return false;\n            }\n\n            current = current.map.get(c);\n        }\n        \n        if(current.last == true) {\n            return true;\n        } else {\n            return false;\n        }\n    }\n\n    // Returns if there is any word in the trie\n    // that starts with the given prefix.\n    public boolean startsWith(String prefix) {\n        TrieNode current = root;\n        \n        for(char c : prefix.toCharArray()) {\n            if(!current.map.containsKey(c)) {\n                return false;\n            }\n            \n            current = current.map.get(c);\n        }\n        \n        return true;\n    }\n}\n\n',
    index: 392,
  },
  {
    title: "Insert Delete Get Random O1",
    category: "google",
    id: "InsertDeleteGetRandomO1_google",
    algorithm:
      "//Design a data structure that supports all following operations in average O(1) time.\n\n//insert(val): Inserts an item val to the set if not already present.\n//remove(val): Removes an item val from the set if present.\n//getRandom: Returns a random element from current set of elements. Each element must have the same probability of being returned.\n\n//Example:\n// Init an empty set.\n//RandomizedSet randomSet = new RandomizedSet();\n\n// Inserts 1 to the set. Returns true as 1 was inserted successfully.\n//randomSet.insert(1);\n\n// Returns false as 2 does not exist in the set.\n//randomSet.remove(2);\n\n// Inserts 2 to the set, returns true. Set now contains [1,2].\n//randomSet.insert(2);\n\n// getRandom should return either 1 or 2 randomly.\n//randomSet.getRandom();\n\n// Removes 1 from the set, returns true. Set now contains [2].\n//randomSet.remove(1);\n\n// 2 was already in the set, so return false.\n//randomSet.insert(2);\n\n// Since 2 is the only number in the set, getRandom always return 2.\n//randomSet.getRandom();\n\nclass RandomizedSet {\n    HashMap<Integer, Integer> map;\n    ArrayList<Integer> values;\n\n    /** Initialize your data structure here. */\n    public RandomizedSet() {\n        map = new HashMap<Integer, Integer>();\n        values = new ArrayList<Integer>();\n    }\n    \n    /** Inserts a value to the set. Returns true if the set did not already contain the specified element. */\n    public boolean insert(int val) {\n        if(!map.containsKey(val)) {\n            map.put(val, val);\n            values.add(val);\n            return true;\n        }\n        else {\n            return false;\n        }\n    }\n    \n    /** Removes a value from the set. Returns true if the set contained the specified element. */\n    public boolean remove(int val) {\n        if(map.containsKey(val)) {\n            map.remove(val);\n            values.remove(values.indexOf(val));\n            return true;\n        }\n        return false;\n    }\n    \n    /** Get a random element from the set. */\n    public int getRandom() {\n        int random = (int)(Math.random() * values.size());\n        int valueToReturn = values.get(random);\n        return map.get(valueToReturn);\n    }\n}\n\n/**\n * Your RandomizedSet object will be instantiated and called as such:\n * RandomizedSet obj = new RandomizedSet();\n * boolean param_1 = obj.insert(val);\n * boolean param_2 = obj.remove(val);\n * int param_3 = obj.getRandom();\n */\n",
    index: 393,
  },
  {
    title: "Insert Interval",
    category: "google",
    id: "InsertInterval_google",
    algorithm:
      "// Given a set of non-overlapping intervals, insert a new interval into the intervals (merge if necessary).\n\n// You may assume that the intervals were initially sorted according to their start times.\n\n// Example 1:\n// Given intervals [1,3],[6,9], insert and merge [2,5] in as [1,5],[6,9].\n\n// Example 2:\n// Given [1,2],[3,5],[6,7],[8,10],[12,16], insert and merge [4,9] in as [1,2],[3,10],[12,16].\n\n// This is because the new interval [4,9] overlaps with [3,5],[6,7],[8,10].\n\n/**\n * Definition for an interval.\n * public class Interval {\n *     int start;\n *     int end;\n *     Interval() { start = 0; end = 0; }\n *     Interval(int s, int e) { start = s; end = e; }\n * }\n */\npublic class InsertInterval {\n    public List<Interval> insert(List<Interval> intervals, Interval newInterval) {\n        int i = 0;\n\n        while(i < intervals.size() && intervals.get(i).end < newInterval.start) {\n            i++;\n        }\n\n        while(i < intervals.size() && intervals.get(i).start <= newInterval.end) {\n            newInterval = new Interval(Math.min(intervals.get(i).start, newInterval.start), Math.max(intervals.get(i).end, newInterval.end));\n            intervals.remove(i);\n        }\n        \n        intervals.add(i, newInterval);\n\n        return intervals;\n    }\n}\n",
    index: 394,
  },
  {
    title: "Island Perimeter",
    category: "google",
    id: "IslandPerimeter_google",
    algorithm:
      "// You are given a map in form of a two-dimensional integer grid where 1 represents land and 0 represents water. Grid cells are connected horizontally/vertically (not diagonally). The grid is completely surrounded by water, and there is exactly one island (i.e., one or more connected land cells). The island doesn't have \"lakes\" (water inside that isn't connected to the water around the island). One cell is a square with side length 1. The grid is rectangular, width and height don't exceed 100. Determine the perimeter of the island.\n\n// Example:\n\n// [[0,1,0,0],\n//  [1,1,1,0],\n//  [0,1,0,0],\n//  [1,1,0,0]]\n\n// Answer: 16\n\nclass IslandPerimeter {\n    public int islandPerimeter(int[][] grid) {\n        int perimeter = 0;\n        if(grid == null || grid.length == 0) {\n            return perimeter;\n        }\n\n        for(int i = 0; i < grid.length; i++) {\n            for(int j = 0; j < grid[i].length; j++) {\n                if(grid[i][j] == 1) {\n                    perimeter += numNeighbors(grid, i, j);\n                    return perimeter;\n                }\n            }\n        }\n\n        return perimeter;\n    }\n\n    public int numNeighbors(int[][] grid, int x, int y) {\n        if(x < 0 || x >= grid.length || y < 0 || y >= grid[x].length || grid[x][y] == 0) {\n            return 1;\n        }\n\n        if(grid[x][y] == -1) {\n            return 0;\n        }\n\n        grid[x][y] = -1;\n        return numNeighbors(grid, x + 1, y) + \n            numNeighbors(grid, x - 1, y) + \n            numNeighbors(grid, x, y + 1) + \n            numNeighbors(grid, x, y - 1);\n    }\n}\n",
    index: 395,
  },
  {
    title: "Judge Route Circle",
    category: "google",
    id: "JudgeRouteCircle_google",
    algorithm:
      "//Initially, there is a Robot at position (0, 0). Given a sequence of its moves, judge if this robot makes a circle, which means it moves back to the original place.\n//\n//The move sequence is represented by a string. And each move is represent by a character. The valid robot moves are R (Right), L (Left), U (Up) and D (down). The output should be true or false representing whether the robot makes a circle.\n//\n//Example 1:\n//Input: \"UD\"\n//Output: true\n//Example 2:\n//Input: \"LL\"\n//Output: false\n\nclass JudgeRouteCircle {\n    public boolean judgeCircle(String moves) {\n        int UD = 0;\n        int LR = 0;\n        for(int i = 0; i < moves.length(); i++) {\n            if(moves.charAt(i) == 'U') {\n                UD++;\n            } else if(moves.charAt(i) == 'D') {\n                UD--;\n            } else if(moves.charAt(i) == 'L') {\n                LR++;\n            } else if(moves.charAt(i) == 'R') {\n                LR--;\n            }\n        }\n        \n        return UD == 0 && LR == 0;\n    }\n}\n",
    index: 396,
  },
  {
    title: "Letter Combinations Of A Phone Number",
    category: "google",
    id: "LetterCombinationsOfAPhoneNumber_google",
    algorithm:
      '// Given a digit string, return all possible letter combinations that the number could represent.\n\n// A mapping of digit to letters (just like on the telephone buttons) is given below.\n\n// 2 - abc\n// 3 - def\n// 4 - ghi\n// 5 - jkl\n// 6 - mno\n// 7 - pqrs\n// 8 - tuv\n// 9 - wxyz\n\n// Input:Digit string "23"\n// Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].\n\nclass LetterCombinationsOfAPhoneNumber {\n    public List<String> letterCombinations(String digits) {\n        List<String> result = new ArrayList<String>();\n        \n        if(digits == null || digits.length() == 0) {\n            return result;\n        }\n        \n        String[] mapping = {\n            "0",\n            "1",\n            "abc",\n            "def",\n            "ghi",\n            "jkl",\n            "mno",\n            "pqrs",\n            "tuv",\n            "wxyz"\n        };\n        \n        letterCombinationsRecursive(result, digits, "", 0, mapping);\n        \n        return result;\n    }\n    \n    public void letterCombinationsRecursive(List<String> result, String digits, String current, int index, String[] mapping) {\n        if(index == digits.length()) {\n            result.add(current);\n            return;\n        }\n        \n        String letters = mapping[digits.charAt(index) - \'0\'];\n        for(int i = 0; i < letters.length(); i++) {\n            letterCombinationsRecursive(result, digits, current + letters.charAt(i), index + 1, mapping);\n        }\n    }\n}\n',
    index: 397,
  },
  {
    title: "Logger Rate Limiter",
    category: "google",
    id: "LoggerRateLimiter_google",
    algorithm:
      '// Design a logger system that receive stream of messages along with its timestamps, each message should be printed if and only if it is not printed in the last 10 seconds.\n\n// Given a message and a timestamp (in seconds granularity), return true if the message should be printed in the given timestamp, otherwise returns false.\n\n// It is possible that several messages arrive roughly at the same time.\n\n// Example:\n\n// Logger logger = new Logger();\n\n// // logging string "foo" at timestamp 1\n// logger.shouldPrintMessage(1, "foo"); returns true; \n\n// // logging string "bar" at timestamp 2\n// logger.shouldPrintMessage(2,"bar"); returns true;\n\n// // logging string "foo" at timestamp 3\n// logger.shouldPrintMessage(3,"foo"); returns false;\n\n// // logging string "bar" at timestamp 8\n// logger.shouldPrintMessage(8,"bar"); returns false;\n\n// // logging string "foo" at timestamp 10\n// logger.shouldPrintMessage(10,"foo"); returns false;\n\n// // logging string "foo" at timestamp 11\n// logger.shouldPrintMessage(11,"foo"); returns true;\n\npublic class LoggerRateLimiter {\n    HashMap<String, Integer> messages;\n\n    /** Initialize your data structure here. */\n    public Logger() {\n       this.messages = new HashMap<String, Integer>(); \n    }\n    \n    /** Returns true if the message should be printed in the given timestamp, otherwise returns false.\n        If this method returns false, the message will not be printed.\n        The timestamp is in seconds granularity. */\n    public boolean shouldPrintMessage(int timestamp, String message) {\n        if(messages.containsKey(message)) {\n            if(timestamp - messages.get(message) >= 10) {\n                messages.put(message, timestamp);\n\n                return true;\n            } else {\n                return false;\n            }\n        } else {\n            messages.put(message, timestamp);\n\n            return true;\n        }\n    }\n}\n\n/**\n * Your Logger object will be instantiated and called as such:\n * Logger obj = new Logger();\n * boolean param_1 = obj.shouldPrintMessage(timestamp,message);\n */\n',
    index: 398,
  },
  {
    title: "Longest Consecutive Sequence",
    category: "google",
    id: "LongestConsecutiveSequence_google",
    algorithm:
      "// Given an unsorted array of integers, find the length of the longest consecutive elements sequence.\n\n// For example,\n// Given [100, 4, 200, 1, 3, 2],\n// The longest consecutive elements sequence is [1, 2, 3, 4]. Return its length: 4.\n\n// Your algorithm should run in O(n) complexity.\n\nclass LongestConsecutiveSequence {\n    public int longestConsecutive(int[] nums) {\n        if(nums == null || nums.length == 0) {\n            return 0;\n        }\n        \n        Set<Integer> set = new HashSet<Integer>();\n        for(int n: nums) {\n            set.add(n);\n        }\n        \n        int maxLength = 0;\n        for(int n: set) {\n            if(!set.contains(n - 1)) {\n                int current = n;\n                int currentMax = 1;\n                \n                while(set.contains(n + 1)) {\n                    currentMax++;\n                    n++;\n                }\n                \n                maxLength = Math.max(maxLength, currentMax);\n            }\n        }\n        \n        return maxLength;\n    }\n}\n",
    index: 399,
  },
  {
    title: "Longest Substring With At Most K Distinct Characters",
    category: "google",
    id: "LongestSubstringWithAtMostKDistinctCharacters_google",
    algorithm:
      '// Given a string, find the length of the longest substring T that contains at most k distinct characters.\n\n// For example, Given s = “eceba” and k = 2,\n\n// T is "ece" which its length is 3.\n\npublic class LongestSubstringWithAtMostKDistinctCharacters {\n    public int lengthOfLongestSubstringKDistinct(String s, int k) {\n        int[] count = new int[256];     // there are 256 ASCII characters in the world\n\n        int i = 0;  // i will be behind j\n        int num = 0;\n        int res = 0;\n\n        for (int j = 0; j < s.length(); j++) {\n            if (count[s.charAt(j)] == 0) {    // if count[s.charAt(j)] == 0, we know that it is a distinct character\n                num++;\n            }\n\n            count[s.charAt(j)]++;\n\n            while (num > k && i < s.length()) {     // sliding window\n                count[s.charAt(i)]--;\n\n                if (count[s.charAt(i)] == 0){ \n                    num--;\n                }\n\n                i++;\n            }\n\n            res = Math.max(res, j - i + 1);\n        }\n\n        return res;\n    }\n}\n',
    index: 400,
  },
  {
    title: "Maximum Product Of Word Lengths",
    category: "google",
    id: "MaximumProductOfWordLengths_google",
    algorithm:
      '// Given a string array words, find the maximum value of length(word[i]) * length(word[j]) where the two words do not share common letters. You may assume that each word will contain only lower case letters. If no such two words exist, return 0.\n\n// Example 1:\n// Given ["abcw", "baz", "foo", "bar", "xtfn", "abcdef"]\n// Return 16\n// The two words can be "abcw", "xtfn".\n\n// Example 2:\n// Given ["a", "ab", "abc", "d", "cd", "bcd", "abcd"]\n// Return 4\n// The two words can be "ab", "cd".\n\n// Example 3:\n// Given ["a", "aa", "aaa", "aaaa"]\n// Return 0\n// No such pair of words.\n\npublic class MaximumProductOfWordLengths {\n    public int maxProduct(String[] words) {\n        if(words.length == 0 || words == null) {\n            return 0;\n        }\n        \n        int length = words.length;\n        int[] value = new int[length];\n        int max = 0;\n        \n        for(int i = 0; i < length; i++) {\n            String temp = words[i];\n            value[i] = 0;\n            \n            for(int j = 0; j < temp.length(); j++) {\n                value[i] |= 1 << (temp.charAt(j) - \'a\');\n            }\n        }\n        \n        for(int i = 0; i < length; i++) {\n            for(int j = 1; j < length; j++) {\n                if((value[i] & value[j]) == 0 && (words[i].length() * words[j].length()) > max) {\n                    max = words[i].length() * words[j].length();\n                }\n            }\n        }\n        \n        return max;\n    }\n}\n',
    index: 401,
  },
  {
    title: "Merge Intervals",
    category: "google",
    id: "MergeIntervals_google",
    algorithm:
      "// Given a collection of intervals, merge all overlapping intervals.\n\n// For example,\n// Given [1,3],[2,6],[8,10],[15,18],\n// return [1,6],[8,10],[15,18].\n\n/**\n * Definition for an interval.\n * public class Interval {\n *     int start;\n *     int end;\n *     Interval() { start = 0; end = 0; }\n *     Interval(int s, int e) { start = s; end = e; }\n * }\n */\nclass MergeIntervals {\n    public List<Interval> merge(List<Interval> intervals) {\n        List<Interval> result = new ArrayList<Interval>();\n        if(intervals == null || intervals.size() == 0) {\n            return result;\n        }\n        \n        Interval[] allIntervals = intervals.toArray(new Interval[intervals.size()]);\n        Arrays.sort(allIntervals, new Comparator<Interval>() {\n           public int compare(Interval a, Interval b) {\n               if(a.start == b.start) {\n                   return a.end - b.end;\n               }\n               return a.start - b.start;\n           } \n        });\n        \n        for(Interval i: allIntervals) {\n            if (result.size() == 0 || result.get(result.size() - 1).end < i.start) {\n                    result.add(i);\n            } else {\n                result.get(result.size() - 1).end = Math.max(result.get(result.size() - 1).end, i.end);\n            }\n        }\n        \n        return result;\n    }\n}\n",
    index: 402,
  },
  {
    title: "Min Stack",
    category: "google",
    id: "MinStack_google",
    algorithm:
      "//Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.\n//push(x) -- Push element x onto stack.\n//pop() -- Removes the element on top of the stack.\n//top() -- Get the top element.\n//getMin() -- Retrieve the minimum element in the stack.\n\n/**\n * Your MinStack object will be instantiated and called as such:\n * MinStack obj = new MinStack();\n * obj.push(x);\n * obj.pop();\n * int param_3 = obj.top();\n * int param_4 = obj.getMin();\n */\nclass MinStack {\n    class Node {\n        int data;\n        int min;\n        Node next;\n        \n        public Node(int data, int min) {\n            this.data = data;\n            this.min = min;\n            this.next = null;\n        }\n    }\n    Node head;\n    \n    /** initialize your data structure here. */\n    public MinStack() {\n        \n    }\n    \n    public void push(int x) {\n        if(head == null) {\n            head = new Node(x, x);\n        } else {\n            Node newNode = new Node(x, Math.min(x, head.min));\n            newNode.next = head;\n            head = newNode;\n        }\n    }\n    \n    public void pop() {\n        head = head.next;\n    }\n    \n    public int top() {\n        return head.data;\n    }\n    \n    public int getMin() {\n        return head.min;\n    }\n}\n",
    index: 403,
  },
  {
    title: "Missing Ranges",
    category: "google",
    id: "MissingRanges_google",
    algorithm:
      '// Given a sorted integer array where the range of elements are in the inclusive range [lower, upper], return its missing ranges.\n\n// For example, given [0, 1, 3, 50, 75], lower = 0 and upper = 99, return ["2", "4->49", "51->74", "76->99"].\n\npublic class MissingRanges {\n    public List<String> findMissingRanges(int[] nums, int lower, int upper) {\n        ArrayList<String> result = new ArrayList<String>();\n        \n        for(int i = 0; i <= nums.length; i++) {\n            long start = i == 0 ? lower : (long)nums[i - 1] + 1;\n            long end = i == nums.length ? upper : (long)nums[i] - 1;\n\n            addMissing(result, start, end);\n        }\n        \n        return result;\n    }\n    \n    void addMissing(ArrayList<String> result, long start, long end) {\n        if(start > end) {\n            return;\n        } else if(start == end) {\n            result.add(start + "");\n        } else {\n            result.add(start + "->" + end);\n        }\n    }\n}\n',
    index: 404,
  },
  {
    title: "Moving Average From Data Stream",
    category: "google",
    id: "MovingAverageFromDataStream_google",
    algorithm:
      "// Given a stream of integers and a window size, calculate the moving average of all integers in the sliding window.\n\n// For example,\n// MovingAverage m = new MovingAverage(3);\n// m.next(1) = 1\n// m.next(10) = (1 + 10) / 2\n// m.next(3) = (1 + 10 + 3) / 3\n// m.next(5) = (10 + 3 + 5) / 3\n\n/**\n * Your MovingAverage object will be instantiated and called as such:\n * MovingAverage obj = new MovingAverage(size);\n * double param_1 = obj.next(val);\n */\n\npublic class MovingAverageFromDataStream {\n    double previousSum = 0.0;\n    int maxSize;\n    Queue<Integer> window;\n\n    /** Initialize your data structure here. */\n    public MovingAverage(int size) {\n        this.maxSize = size;\n        window = new LinkedList<Integer>();\n    }\n    \n    public double next(int val) {\n        if(window.size() == maxSize) {\n            previousSum -= window.remove();\n        }\n        \n        window.add(val);\n        previousSum += val;\n\n        return previousSum / window.size();\n    }\n}\n",
    index: 405,
  },
  {
    title: "Number Of Islands",
    category: "google",
    id: "NumberOfIslands_google",
    algorithm:
      "// Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.\n\n// Example 1:\n\n// 11110\n// 11010\n// 11000\n// 00000\n// Answer: 1\n\n// Example 2:\n\n// 11000\n// 11000\n// 00100\n// 00011\n// Answer: 3\n\npublic class NumberOfIslands {\n    char[][] gridCopy;\n    \n    public int numIslands(char[][] grid) {\n        //set grid copy to the current grid\n        gridCopy = grid;\n        \n        //initialize number of islands to zero\n        int numberOfIslands = 0;\n        \n        //iterate through every index of the grid\n        for(int i = 0; i < grid.length; i++) {\n            for(int j = 0; j < grid[0].length; j++) {\n                //attempt to \"sink\" the current index of the grid\n                numberOfIslands += sink(gridCopy, i, j);\n            }\n        }\n        \n        //return the total number of islands\n        return numberOfIslands;\n    }\n    \n    int sink(char[][] grid, int i, int j) {\n        //check the bounds of i and j and if the current index is an island or not (1 or 0)\n        if(i < 0 || i >= grid.length || j < 0 || j >= grid[0].length || grid[i][j] == '0') {\n            return 0;\n        }\n        \n        //set current index to 0\n        grid[i][j] = '0';\n        \n        // sink all neighbors of current index\n        sink(grid, i + 1, j);\n        sink(grid, i - 1, j);\n        sink(grid, i, j + 1);\n        sink(grid, i, j - 1);\n        \n        //increment number of islands\n        return 1;\n    }\n}\n",
    index: 406,
  },
  {
    title: "Pacific Atlantic Water Flow",
    category: "google",
    id: "PacificAtlanticWaterFlow_google",
    algorithm:
      '// Given an m x n matrix of non-negative integers representing the height of each unit cell in a continent, the "Pacific ocean" touches the left and top edges of the matrix and the "Atlantic ocean" touches the right and bottom edges.\n\n// Water can only flow in four directions (up, down, left, or right) from a cell to another one with height equal or lower.\n\n// Find the list of grid coordinates where water can flow to both the Pacific and Atlantic ocean.\n\n// Note:\n    // The order of returned grid coordinates does not matter.\n    // Both m and n are less than 150.\n\n// Example:\n\n// Given the following 5x5 matrix:\n\n//   Pacific ~   ~   ~   ~   ~ \n//        ~  1   2   2   3  (5) *\n//        ~  3   2   3  (4) (4) *\n//        ~  2   4  (5)  3   1  *\n//        ~ (6) (7)  1   4   5  *\n//        ~ (5)  1   1   2   4  *\n//           *   *   *   *   * Atlantic\n\n// Return:\n\n// [[0, 4], [1, 3], [1, 4], [2, 2], [3, 0], [3, 1], [4, 0]] (positions with parentheses in above matrix).\n\npublic class PacificAtlanticWaterFlow {\n    public List<int[]> pacificAtlantic(int[][] matrix) {\n        List<int[]> result = new LinkedList<>();\n        \n        //error checking\n        if(matrix == null || matrix.length == 0 || matrix[0].length == 0) {\n            return result;\n        }\n        \n        int n = matrix.length;\n        int m = matrix[0].length;\n        \n        boolean[][] pacific = new boolean[n][m];\n        boolean[][] atlantic = new boolean[n][m];\n        \n        for(int i = 0; i < n; i++) {\n            dfs(matrix, pacific, Integer.MIN_VALUE, i, 0);\n            dfs(matrix, atlantic, Integer.MIN_VALUE, i, m - 1);\n        }\n        \n        for(int i = 0; i < m; i++) {\n            dfs(matrix, pacific, Integer.MIN_VALUE, 0, i);\n            dfs(matrix, atlantic, Integer.MIN_VALUE, n - 1, i);\n        }\n        \n        for(int i = 0; i < n; i++) {\n            for(int j = 0; j < m; j++) {\n                if(pacific[i][j] && atlantic[i][j]) {\n                    result.add(new int[] {i, j});\n                }\n            }\n        }\n        \n        return result;\n    }\n    \n    \n    public void dfs(int[][] matrix, boolean[][] visited, int height, int x, int y) {\n        int n = matrix.length;\n        int m = matrix[0].length;\n        \n        if(x < 0 || x >= n || y < 0 || y >= m || visited[x][y] || matrix[x][y] < height) {\n            return;\n        }\n        \n        visited[x][y] = true;\n        \n        dfs(matrix, visited, matrix[x][y], x + 1, y);\n        dfs(matrix, visited, matrix[x][y], x - 1, y);\n        dfs(matrix, visited, matrix[x][y], x, y + 1);\n        dfs(matrix, visited, matrix[x][y], x, y - 1);\n    }\n}\n',
    index: 407,
  },
  {
    title: "Paint Fence",
    category: "google",
    id: "PaintFence_google",
    algorithm:
      "// There is a fence with n posts, each post can be painted with one of the k colors.\n\n// You have to paint all the posts such that no more than two adjacent fence posts have the same color.\n\n// Return the total number of ways you can paint the fence.\n\n// Note:\n// n and k are non-negative integers.\n\npublic class PaintFence {\n    public int numWays(int n, int k) {\n        if(n <= 0) {\n            return 0;\n        }\n        \n        int sameColorCounts = 0;\n        int differentColorCounts = k;\n        \n        for(int i = 2; i <= n; i++) {\n            int temp = differentColorCounts;\n\n            differentColorCounts = (sameColorCounts + differentColorCounts) * (k - 1);\n\n            sameColorCounts = temp;\n        }\n        \n        return sameColorCounts + differentColorCounts;\n    }\n}\n",
    index: 408,
  },
  {
    title: "Plus One",
    category: "google",
    id: "PlusOne_google",
    algorithm:
      "//Given a non-empty array of digits representing a non-negative integer, plus one to the integer.\n//\n//The digits are stored such that the most significant digit is at the head of the list, and each element in the array contain a single digit.\n//\n//You may assume the integer does not contain any leading zero, except the number 0 itself.\n//\n//Example 1:\n//\n//Input: [1,2,3]\n//Output: [1,2,4]\n//Explanation: The array represents the integer 123.\n//Example 2:\n//\n//Input: [4,3,2,1]\n//Output: [4,3,2,2]\n//Explanation: The array represents the integer 4321.\n\nclass Solution {\n    public int[] plusOne(int[] digits) {\n        for(int i = digits.length - 1; i >= 0; i--) {\n            if(digits[i] < 9) {\n                digits[i]++;\n                return digits;\n            }\n\n            digits[i] = 0;\n        }\n\n        int[] result = new int[digits.length + 1];\n        result[0] = 1;\n\n        return result;\n    }\n}\n",
    index: 409,
  },
  {
    title: "Plus One Linked List",
    category: "google",
    id: "PlusOneLinkedList_google",
    algorithm:
      "// Given a non-negative integer represented as non-empty a singly linked list of digits, plus one to the integer.\n\n// You may assume the integer do not contain any leading zero, except the number 0 itself.\n\n// The digits are stored such that the most significant digit is at the head of the list.\n\n// Example:\n// Input:\n// 1->2->3\n\n// Output:\n// 1->2->4\n\n/**\n * Definition for singly-linked list.\n * public class ListNode {\n *     int val;\n *     ListNode next;\n *     ListNode(int x) { val = x; }\n * }\n */\npublic class PlusOneLinkedList {\n    public ListNode plusOne(ListNode head) {\n        if(plusOneRecursive(head) == 0) {\n            return head;\n        } else {\n            ListNode newHead = new ListNode(1);\n            newHead.next = head;\n            \n            return newHead;\n        }\n    }\n    \n    private int plusOneRecursive(ListNode head) {\n        if(head == null) {\n            return 1;\n        }\n        \n        int carry = plusOneRecursive(head.next);\n        \n        if(carry == 0) {\n            return 0;\n        }\n        \n        int value = head.val + 1;\n        head.val = value % 10;\n\n        return value/10;\n    }\n}\n",
    index: 410,
  },
  {
    title: "Power Of Two",
    category: "google",
    id: "PowerOfTwo_google",
    algorithm:
      "//Given an integer, write a function to determine if it is a power of two.\n//\n//Example 1:\n//\n//Input: 1\n//Output: true\n//Example 2:\n//\n//Input: 16\n//Output: true\n//Example 3:\n//\n//Input: 218\n//Output: false\n\nclass PowerOfTwo {\n    public boolean isPowerOfTwo(int n) {\n        long i = 1;\n        while(i < n) {\n            i <<= 1;\n        }\n        \n        return i == n;\n    }\n}\n",
    index: 411,
  },
  {
    title: "Power Of X To The N",
    category: "google",
    id: "PowerOfXToTheN_google",
    algorithm:
      "// Implement pow(x, n).\n\npublic class PowerOfXToTheN {\n    public double myPow(double x, int n) {\n        if(n == 0) {\n            return 1;\n        }\n        \n        if(Double.isInfinite(x)) {\n            return 0;\n        }\n        \n        if(n < 0) {\n            n = -n;\n            x = 1 / x;\n        }\n        \n        return n % 2 == 0 ? myPow(x * x, n / 2) : x * myPow(x * x, n / 2);\n    }\n}\n",
    index: 412,
  },
  {
    title: "Regular Expression Matching.javaa",
    category: "google",
    id: "RegularExpressionMatching.javaa_google",
    algorithm:
      '// Implement regular expression matching with support for \'.\' and \'*\'.\n\n// \'.\' Matches any single character.\n// \'*\' Matches zero or more of the preceding element.\n\n// The matching should cover the entire input string (not partial).\n\n// The function prototype should be:\n// bool isMatch(const char *s, const char *p)\n\n// Some examples:\n// isMatch("aa","a") → false\n// isMatch("aa","aa") → true\n// isMatch("aaa","aa") → false\n// isMatch("aa", "a*") → true\n// isMatch("aa", ".*") → true\n// isMatch("ab", ".*") → true\n// isMatch("aab", "c*a*b") → true\n\npublic class RegularExpressionMatching {\n    public boolean isMatch(String s, String p) {\n        if(s == null || p == null) {\n            return false;\n        }\n        \n        boolean[][] dp = new boolean[s.length() + 1][p.length() + 1];\n        dp[0][0] = true;\n        \n        for(int i = 0; i < p.length(); i++) {\n            if(p.charAt(i) == \'*\' && dp[0][i - 1]) {\n                dp[0][i + 1] = true;\n            }\n        }\n        \n        for(int i = 0; i < s.length(); i++) {\n            for(int j = 0; j < p.length(); j++) {\n                if(p.charAt(j) == \'.\') {\n                    dp[i + 1][j + 1] = dp[i][j];\n                }\n                \n                if(p.charAt(j) == s.charAt(i)) {\n                    dp[i + 1][j + 1] = dp[i][j];\n                }\n                \n                if(p.charAt(j) == \'*\') {\n                    if(p.charAt(j - 1) != s.charAt(i) && p.charAt(j - 1) != \'.\') {\n                        dp[i + 1][j + 1] = dp[i + 1][j - 1];\n                    } else {\n                        dp[i + 1][j + 1] = (dp[i + 1][j] || dp[i][j + 1] || dp[i + 1][j - 1]);\n                    }\n                }\n            }\n        }\n        \n        return dp[s.length()][p.length()];\n    }\n}\n',
    index: 413,
  },
  {
    title: "Reverse Vowels Of A String",
    category: "google",
    id: "ReverseVowelsOfAString_google",
    algorithm:
      '// Write a function that takes a string as input and reverse only the vowels of a string.\n\n// Example 1:\n// Given s = "hello", return "holle".\n\n// Example 2:\n// Given s = "leetcode", return "leotcede".\n\n// Note:\n// The vowels does not include the letter "y".\n\npublic class ReverseVowelsOfAString {\n    public String reverseVowels(String s) {\n        if(s == null || s.length() == 0) {\n            return s;\n        }\n        \n        String vowels = "aeiouAEIOU";\n        \n        char[] chars = s.toCharArray();\n        \n        int start = 0;\n        int end = s.length() - 1;\n        \n        while(start < end) {\n            while(start < end && !vowels.contains(chars[start] + "")) {\n                start++;\n            }\n            \n            while(start < end && !vowels.contains(chars[end] + "")) {\n                end--;\n            }\n            \n            char temp = chars[start];\n            chars[start] = chars[end];\n            chars[end] = temp;\n            \n            start++;\n            end--;\n        }\n        \n        return new String(chars);\n    }\n}\n',
    index: 414,
  },
  {
    title: "Sentence Screen Fitting",
    category: "google",
    id: "SentenceScreenFitting_google",
    algorithm:
      '// Given a rows x cols screen and a sentence represented by a list of non-empty words, find how many times the given sentence can be fitted on the screen.\n\n// Note:\n    // A word cannot be split into two lines.\n    // The order of words in the sentence must remain unchanged.\n    // Two consecutive words in a line must be separated by a single space.\n    // Total words in the sentence won\'t exceed 100.\n    // Length of each word is greater than 0 and won\'t exceed 10.\n    // 1 ≤ rows, cols ≤ 20,000.\n\n// Example 1:\n\n// Input:\n// rows = 2, cols = 8, sentence = ["hello", "world"]\n\n// Output: \n// 1\n\n// Explanation:\n// hello---\n// world---\n\n// The character \'-\' signifies an empty space on the screen.\n// Example 2:\n\n// Input:\n// rows = 3, cols = 6, sentence = ["a", "bcd", "e"]\n\n// Output: \n// 2\n\n// Explanation:\n// a-bcd- \n// e-a---\n// bcd-e-\n\n// The character \'-\' signifies an empty space on the screen.\n// Example 3:\n\n// Input:\n// rows = 4, cols = 5, sentence = ["I", "had", "apple", "pie"]\n\n// Output: \n// 1\n\n// Explanation:\n// I-had\n// apple\n// pie-I\n// had--\n\n// The character \'-\' signifies an empty space on the screen.\n\npublic class SentenceScreenFitting {\n    public int wordsTyping(String[] sentence, int rows, int cols) {\n        String s = String.join(" ", sentence) + " ";\n\n        int start = 0;\n        int l = s.length();\n\n        for(int i = 0; i < rows; i++) {\n            start += cols;\n            \n            if(s.charAt(start % l) == \' \') {\n                start++;\n            } else {\n                while(start > 0 && s.charAt((start - 1) % l) != \' \') {\n                    start--;\n                }\n            }\n        }\n        \n        return start / s.length();\n    }\n}\n',
    index: 415,
  },
  {
    title: "Shortest Distance From All Buildings",
    category: "google",
    id: "ShortestDistanceFromAllBuildings_google",
    algorithm:
      "// You want to build a house on an empty land which reaches all buildings in the shortest amount of distance. You can only move up, down, left and right. You are given a 2D grid of values 0, 1 or 2, where:\n\n// Each 0 marks an empty land which you can pass by freely.\n// Each 1 marks a building which you cannot pass through.\n// Each 2 marks an obstacle which you cannot pass through.\n// For example, given three buildings at (0,0), (0,4), (2,2), and an obstacle at (0,2):\n\n// 1 - 0 - 2 - 0 - 1\n// |   |   |   |   |\n// 0 - 0 - 0 - 0 - 0\n// |   |   |   |   |\n// 0 - 0 - 1 - 0 - 0\n// The point (1,2) is an ideal empty land to build a house, as the total travel distance of 3+3+1=7 is minimal. So return 7.\n\n// Note:\n// There will be at least one building. If it is not possible to build such house according to the above rules, return -1.\n\npublic class ShortestDistanceFromAllBuildings {\n    public int shortestDistance(int[][] grid) {\n        if(grid == null || grid.length == 0 || grid[0].length == 0) {\n            return -1;\n        }\n        \n        final int[] shift = {0, 1, 0, -1, 0};\n        \n        int rows = grid.length;\n        int columns = grid[0].length;\n        \n        int[][] distance = new int[rows][columns];\n        int[][] reach = new int[rows][columns];\n        \n        int numberOfBuildings = 0;\n        \n        for(int i = 0; i < rows; i++) {\n            for(int j = 0; j < columns; j++) {\n                if(grid[i][j] == 1) {\n                    numberOfBuildings++;\n\n                    Queue<int[]> queue = new LinkedList<int[]>();\n                    queue.offer(new int[] {i, j});\n                    \n                    boolean[][] visited = new boolean[rows][columns];\n                    \n                    int relativeDistance = 1;\n                    \n                    while(!queue.isEmpty()) {\n                        int qSize = queue.size();\n                        \n                        for(int q = 0; q < qSize; q++) {\n                            int[] current = queue.poll();\n                            \n                            for(int k = 0; k < 4; k++) {\n                                int nextRow = current[0] + shift[k];\n                                int nextColumn = current[1] + shift[k + 1];\n                            \n                                if(nextRow >= 0 && nextRow < rows && nextColumn >= 0 && nextColumn < columns && grid[nextRow][nextColumn] == 0 && !visited[nextRow][nextColumn]) {\n                                    distance[nextRow][nextColumn] += relativeDistance;\n                                    reach[nextRow][nextColumn]++;\n                                \n                                    visited[nextRow][nextColumn] = true;\n                                    queue.offer(new int[] {nextRow, nextColumn});\n                                }   \n                            }\n                        }\n                        \n                        relativeDistance++;\n                    }\n                }\n            }\n        }\n    \n        int shortest = Integer.MAX_VALUE;\n    \n        for(int i = 0; i < rows; i++) {\n            for(int j = 0; j < columns; j++) {\n                if(grid[i][j] == 0 && reach[i][j] == numberOfBuildings) {\n                    shortest = Math.min(shortest, distance[i][j]);\n                }\n            }\n        }\n    \n        return shortest == Integer.MAX_VALUE ? -1 : shortest;\n    }\n}\n",
    index: 416,
  },
  {
    title: "Spiral Matrix",
    category: "google",
    id: "SpiralMatrix_google",
    algorithm:
      "//Given a matrix of m x n elements (m rows, n columns), return all elements of the matrix in spiral order.\n//\n//Example 1:\n//\n//Input:\n//[\n //[ 1, 2, 3 ],\n //[ 4, 5, 6 ],\n //[ 7, 8, 9 ]\n//]\n//Output: [1,2,3,6,9,8,7,4,5]\n//Example 2:\n//\n//Input:\n//[\n  //[1, 2, 3, 4],\n  //[5, 6, 7, 8],\n  //[9,10,11,12]\n//]\n//Output: [1,2,3,4,8,12,11,10,9,5,6,7]\n\nclass SpiralMatrix {\n    public List<Integer> spiralOrder(int[][] matrix) {\n        List<Integer> result = new ArrayList<Integer>();\n        if(matrix == null || matrix.length == 0) {\n            return result;\n        }\n        \n        int rowStart = 0;\n        int rowEnd = matrix.length - 1;\n        int colStart = 0;\n        int colEnd = matrix[0].length - 1;\n        while(rowStart <= rowEnd && colStart <= colEnd) {\n            for(int i = colStart; i <= colEnd; i++) {\n                result.add(matrix[rowStart][i]);\n            }\n            rowStart++;\n            \n            for(int i = rowStart; i <= rowEnd; i++) {\n                result.add(matrix[i][colEnd]);\n            }\n            colEnd--;\n            \n            if(rowStart <= rowEnd) {\n                for(int i = colEnd; i >= colStart; i--) {\n                    result.add(matrix[rowEnd][i]);\n                }\n            }\n            rowEnd--;\n            \n            if(colStart <= colEnd) {\n                for(int i = rowEnd; i >= rowStart; i--) {\n                    result.add(matrix[i][colStart]);\n                }\n            }   \n            colStart++;\n        }\n        \n        return result;\n    }\n}\n",
    index: 417,
  },
  {
    title: "Strobogrammatic Number",
    category: "google",
    id: "StrobogrammaticNumber_google",
    algorithm:
      '// A strobogrammatic number is a number that looks the same when rotated 180 degrees (looked at upside down).\n\n// Write a function to determine if a number is strobogrammatic. The number is represented as a string.\n\n// For example, the numbers "69", "88", and "818" are all strobogrammatic.\n\npublic class StrobogrammaticNumber {\n    public boolean isStrobogrammatic(String num) {\n        for(int i = 0, j = num.length() - 1; i <= j; i++, j--) {\n            if(!"00 11 88 696".contains(num.charAt(i) + "" + num.charAt(j))) {\n                return false;\n            }\n        }\n        \n        return true;\n    }\n}\n',
    index: 418,
  },
  {
    title: "Summary Ranges",
    category: "google",
    id: "SummaryRanges_google",
    algorithm:
      '// Given a sorted integer array without duplicates, return the summary of its ranges.\n\n// For example, given [0,1,2,4,5,7], return ["0->2","4->5","7"].\n\npublic class SummaryRanges {\n    public List<String> summaryRanges(int[] nums) {\n        List<String> result = new ArrayList();\n\n        if(nums.length == 1) {\n            result.add(nums[0] + "");\n\n            return result;\n        }\n        \n        for(int i = 0; i < nums.length; i++) {\n            int current = nums[i];\n            \n            while(i + 1 < nums.length && (nums[i + 1] - nums[i] == 1)) {\n                i++;\n            }\n            \n            if(current != nums[i]) {\n                result.add(current + "->" + nums[i]);\n            } else {\n                result.add(current + "");\n            }\n        }\n        \n        return result;\n    }\n}\n',
    index: 419,
  },
  {
    title: "Trapping Rain Water",
    category: "google",
    id: "TrappingRainWater_google",
    algorithm:
      "// Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it is able to trap after raining.\n\n// For example, \n// Given [0,1,0,2,1,0,1,3,2,1,2,1], return 6.\n\npublic class TrappingRainWater {\n    public int trap(int[] height) {\n        int water = 0;\n        \n        int leftIndex = 0;\n        int rightIndex = height.length - 1;\n        \n        int leftMax = 0;\n        int rightMax = 0;\n        \n        while(leftIndex <= rightIndex) {\n            leftMax = Math.max(leftMax, height[leftIndex]);\n            rightMax = Math.max(rightMax, height[rightIndex]);\n            \n            if(leftMax < rightMax) {\n                water += leftMax - height[leftIndex];\n                leftIndex++;\n            } else {\n                water += rightMax - height[rightIndex];\n                rightIndex--;\n            }\n        }\n        \n        return water;\n    }\n}\n\n",
    index: 420,
  },
  {
    title: "Unique Word Abbreviation",
    category: "google",
    id: "UniqueWordAbbreviation_google",
    algorithm:
      '// An abbreviation of a word follows the form <first letter><number><last letter>. Below are some examples of word abbreviations:\n\n// a) it                      --> it    (no abbreviation)\n\n//      1\n// b) d|o|g                   --> d1g\n\n//               1    1  1\n//      1---5----0----5--8\n// c) i|nternationalizatio|n  --> i18n\n\n//               1\n//      1---5----0\n// d) l|ocalizatio|n          --> l10n\n// Assume you have a dictionary and given a word, find whether its abbreviation is unique in the dictionary. A word\'s abbreviation is unique if no other word from the dictionary has the same abbreviation.\n\n// Example: \n// Given dictionary = [ "deer", "door", "cake", "card" ]\n\n// isUnique("dear") -> \n// false\n\n// isUnique("cart") -> \n// true\n\n// isUnique("cane") -> \n// false\n\n// isUnique("make") -> \n// true\n\nimport java.util.ArrayList;\n\npublic class UniqueWordAbbreviation {\n    HashMap<String, String> map;\n\n    public ValidWordAbbr(String[] dictionary) {\n        this.map = new HashMap<String, String>();\n        \n        for(String word : dictionary) {\n            String key = getKey(word);\n            \n            if(map.containsKey(key)) {\n                if(!map.get(key).equals(word)) {\n                    map.put(key, "");\n                }\n            } else {\n                map.put(key, word);\n            }\n        }\n    }\n\n    public boolean isUnique(String word) {\n        return !map.containsKey(getKey(word))||map.get(getKey(word)).equals(word);\n    }\n    \n    public String getKey(String word) {\n        if(word.length() <= 2) {\n            return word;\n        }\n        \n        return word.charAt(0) + Integer.toString(word.length() - 2) + word.charAt(word.length() - 1);\n    }\n}\n\n\n// Your ValidWordAbbr object will be instantiated and called as such:\n// ValidWordAbbr vwa = new ValidWordAbbr(dictionary);\n// vwa.isUnique("Word");\n// vwa.isUnique("anotherWord");\n',
    index: 421,
  },
  {
    title: "Utf8 Validation",
    category: "google",
    id: "Utf8Validation_google",
    algorithm:
      "// A character in UTF8 can be from 1 to 4 bytes long, subjected to the following rules:\n\n// For 1-byte character, the first bit is a 0, followed by its unicode code.\n// For n-bytes character, the first n-bits are all one's, the n+1 bit is 0, followed by n-1 bytes with most significant 2 bits being 10.\n// This is how the UTF-8 encoding would work:\n\n//    Char. number range  |        UTF-8 octet sequence\n//       (hexadecimal)    |              (binary)\n//    --------------------+---------------------------------------------\n//    0000 0000-0000 007F | 0xxxxxxx\n//    0000 0080-0000 07FF | 110xxxxx 10xxxxxx\n//    0000 0800-0000 FFFF | 1110xxxx 10xxxxxx 10xxxxxx\n//    0001 0000-0010 FFFF | 11110xxx 10xxxxxx 10xxxxxx 10xxxxxx\n// Given an array of integers representing the data, return whether it is a valid utf-8 encoding.\n\n// Note:\n// The input is an array of integers. Only the least significant 8 bits of each integer is used to store the data. This means each integer represents only 1 byte of data.\n\n// Example 1:\n\n// data = [197, 130, 1], which represents the octet sequence: 11000101 10000010 00000001.\n\n// Return true.\n// It is a valid utf-8 encoding for a 2-bytes character followed by a 1-byte character.\n// Example 2:\n\n// data = [235, 140, 4], which represented the octet sequence: 11101011 10001100 00000100.\n\n// Return false.\n// The first 3 bits are all one's and the 4th bit is 0 means it is a 3-bytes character.\n// The next byte is a continuation byte which starts with 10 and that's correct.\n// But the second continuation byte does not start with 10, so it is invalid.\n\npublic class Utf8Validation {\n    public boolean validUtf8(int[] data) {\n        int count = 0;\n\n        for(int i : data) {\n            if(count == 0) {\n                if((i >> 5) == 0b110) {\n                    count = 1;\n                } else if((i >> 4) == 0b1110) {\n                    count = 2;\n                } else if((i >> 3) == 0b11110) {\n                    count = 3;\n                } else if((i >> 7) == 0b1) {\n                    return false;\n                }\n            } else {\n                if((i >> 6) != 0b10) {\n                    return false;\n                }\n\n                count--;\n            }\n        }\n        \n        return count == 0;\n    }\n}\n",
    index: 422,
  },
  {
    title: "Valid Parentheses",
    category: "google",
    id: "ValidParentheses_google",
    algorithm:
      "// Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.\n\n// The brackets must close in the correct order, \"()\" and \"()[]{}\" are all valid but \"(]\" and \"([)]\" are not.\n\npublic class ValidParentheses {\n    public boolean isValid(String s) {\n        if(s.length() % 2 == 1) {\n            return false;\n        }\n        \n        Stack<Character> stack = new Stack<Character>();\n        \n        for(int i = 0; i < s.length(); i++) {\n            if(s.charAt(i) == '(' || s.charAt(i) == '[' || s.charAt(i) == '{') {\n                stack.push(s.charAt(i));\n            } else if(s.charAt(i) == ')' && !stack.isEmpty() && stack.peek() == ')') {\n                stack.pop();\n            } else if(s.charAt(i) == ']' && !stack.isEmpty() && stack.peek() == ']') {\n                stack.pop();\n            } else if(s.charAt(i) == '}' && !stack.isEmpty() && stack.peek() == '}') {\n                stack.pop();\n            } else {\n                return false;\n            }\n        }\n        \n        return stack.isEmpty();\n    }\n}\n",
    index: 423,
  },
  {
    title: "Walls And Gates",
    category: "google",
    id: "WallsAndGates_google",
    algorithm:
      "// You are given a m x n 2D grid initialized with these three possible values.\n\n// -1 - A wall or an obstacle.\n// 0 - A gate.\n// INF - Infinity means an empty room. We use the value 231 - 1 = 2147483647 to represent INF as you may assume that the distance to a gate is less than 2147483647.\n// Fill each empty room with the distance to its nearest gate. If it is impossible to reach a gate, it should be filled with INF.\n\n// For example, given the 2D grid:\n// INF  -1  0  INF\n// INF INF INF  -1\n// INF  -1 INF  -1\n//   0  -1 INF INF\n// After running your function, the 2D grid should be:\n//   3  -1   0   1\n//   2   2   1  -1\n//   1  -1   2  -1\n//   0  -1   3   4\n\npublic class WallsAndGates {\n    public void wallsAndGates(int[][] rooms) {\n        //iterate through the matrix calling dfs on all indices that contain a zero\n        for(int i = 0; i < rooms.length; i++) {\n            for(int j = 0; j < rooms[0].length; j++) {\n                if(rooms[i][j] == 0) {\n                    dfs(rooms, i, j, 0);\n                }\n            }\n        }\n    }\n    \n    void dfs(int[][] rooms, int i, int j, int distance) {\n        //if you have gone out of the bounds of the array or you have run into a wall/obstacle, return\n        // room[i][j] < distance also ensure that we do not overwrite any previously determined distance if it is shorter than our current distance\n        if(i < 0 || i >= rooms.length || j < 0 || j >= rooms[0].length || rooms[i][j] < distance) {\n            return;\n        }\n        \n        //set current index's distance to distance\n        rooms[i][j] = distance;\n        \n        //recurse on all adjacent neighbors of rooms[i][j]\n        dfs(rooms, i + 1, j, distance + 1);\n        dfs(rooms, i - 1, j, distance + 1);\n        dfs(rooms, i, j + 1, distance + 1);\n        dfs(rooms, i, j - 1, distance + 1);\n    }\n}\n",
    index: 424,
  },
  {
    title: "Wiggle Sort",
    category: "google",
    id: "WiggleSort_google",
    algorithm:
      "// Given an unsorted array nums, reorder it in-place such that nums[0] <= nums[1] >= nums[2] <= nums[3]....\n\n// For example, given nums = [3, 5, 2, 1, 6, 4], one possible answer is [1, 6, 2, 5, 3, 4].\n\npublic class WiggleSort {\n    public void wiggleSort(int[] nums) {\n        for(int i = 1; i < nums.length; i++) {\n            int current = nums[i - 1];\n\n            if((i % 2 == 1) == (current > nums[i])) {\n                nums[i - 1] = nums[i];\n                nums[i] = current;\n            }\n        }\n    }\n}\n",
    index: 425,
  },
  {
    title: "Word Break",
    category: "google",
    id: "WordBreak_google",
    algorithm:
      '// Given a non-empty string s and a dictionary wordDict containing a list of non-empty words, determine if s can be segmented into a space-separated sequence of one or more dictionary words. You may assume the dictionary does not contain duplicate words.\n\n// For example, given\n// s = "leetcode",\n// dict = ["leet", "code"].\n\n// Return true because "leetcode" can be segmented as "leet code".\n\npublic class WordBreak {\n    public boolean wordBreak(String s, Set<String> wordDict) {\n        boolean[] dp = new boolean[s.length() + 1];\n        dp[0] = true;\n        \n        for(int i = 1; i <= s.length(); i++) {\n            for(int j = 0; j < i; j++) {\n                if(dp[j] && wordDict.contains(s.substring(j, i))) {\n                    dp[i] = true;\n                    break;\n                }\n            }\n        }\n        \n        return dp[s.length()];\n    }\n}\n',
    index: 426,
  },
  {
    title: "Word Squares",
    category: "google",
    id: "WordSquares_google",
    algorithm:
      '// Given a set of words (without duplicates), find all word squares you can build from them.\n\n// A sequence of words forms a valid word square if the kth row and column read the exact same string, where 0 ≤ k < max(numRows, numColumns).\n\n// For example, the word sequence ["ball","area","lead","lady"] forms a word square because each word reads the same both horizontally and vertically.\n\n// b a l l\n// a r e a\n// l e a d\n// l a d y\n\n// Note:\n    // There are at least 1 and at most 1000 words.\n    // All words will have the exact same length.\n    // Word length is at least 1 and at most 5.\n    // Each word contains only lowercase English alphabet a-z.\n\npublic class WordSquares {\n    public List<List<String>> wordSquares(String[] words) {\n        List<List<String>> ret = new ArrayList<List<String>>();\n\n        if(words.length==0 || words[0].length()==0) {\n            return ret;\n        }\n\n        Map<String, Set<String>> map = new HashMap<>();\n\n        int squareLen = words[0].length();\n\n        // create all prefix\n        for(int i=0;i<words.length;i++){\n            for(int j=-1;j<words[0].length();j++){\n                if(!map.containsKey(words[i].substring(0, j+1))) {\n                    map.put(words[i].substring(0, j+1), new HashSet<String>());\n                }\n\n                map.get(words[i].substring(0, j+1)).add(words[i]);\n            }\n        }\n\n        helper(ret, new ArrayList<String>(), 0, squareLen, map);\n\n        return ret;\n    }\n\n    public void helper(List<List<String>> ret, List<String> cur, int matched, int total, Map<String, Set<String>> map){\n        if(matched == total) {\n            ret.add(new ArrayList<String>(cur));\n            return;\n        }\n\n        // build search string\n        StringBuilder sb = new StringBuilder();\n\n        for(int i=0;i<=matched-1;i++) {\n            sb.append(cur.get(i).charAt(matched));\n        }\n\n        // bachtracking\n        Set<String> cand = map.get(sb.toString());\n\n        if(cand==null) {\n            return;\n        }\n\n        for(String str:cand){\n            cur.add(str);\n            helper(ret, cur, matched+1, total, map);\n            cur.remove(cur.size()-1);\n        }\n    }\n}\n',
    index: 427,
  },
  {
    title: "Zig Zag Iterator",
    category: "google",
    id: "ZigZagIterator_google",
    algorithm:
      "// Given two 1d vectors, implement an iterator to return their elements alternately.\n\n// For example, given two 1d vectors:\n\n// v1 = [1, 2]\n// v2 = [3, 4, 5, 6]\n// By calling next repeatedly until hasNext returns false, the order of elements returned by next should be: [1, 3, 2, 4, 5, 6].\n\n// Follow up: What if you are given k 1d vectors? How well can your code be extended to such cases?\n\n/**\n * Your ZigzagIterator object will be instantiated and called as such: \n * ZigzagIterator i = new ZigzagIterator(v1, v2);\n * while (i.hasNext()) v[f()] = i.next();\n */\n\npublic class ZigZagIterator {\n    private Iterator<Integer> i;\n    private Iterator<Integer> j;\n    private Iterator<Integer> temp;\n\n    public ZigzagIterator(List<Integer> v1, List<Integer> v2) {\n        i = v1.iterator();\n        j = v2.iterator();\n    }\n\n    public int next() {\n        if(i.hasNext()) {\n            temp = i;\n            i = j;\n            j = temp;\n            \n        }\n        \n        return j.next();\n    }\n\n    public boolean hasNext() {\n        return i.hasNext() || j.hasNext();\n    }\n}\n",
    index: 428,
  },
  { title: "Linkedin", category: "top-companies", id: "linkedin", index: 429 },
  {
    title: "Binary Search Tree Iterator",
    category: "linkedin",
    id: "BinarySearchTreeIterator_linkedin",
    algorithm:
      "// Implement an iterator over a binary search tree (BST). Your iterator will be initialized with the root node of a BST.\n\n// Calling next() will return the next smallest number in the BST.\n\n// Note: next() and hasNext() should run in average O(1) time and uses O(h) memory, where h is the height of the tree.\n\n/**\n * Definition for binary tree\n * public class TreeNode {\n *     int val;\n *     TreeNode left;\n *     TreeNode right;\n *     TreeNode(int x) { val = x; }\n * }\n */\n\npublic class BinarySearchTreeIterator {\n    Stack<TreeNode> stack;\n\n    public BSTIterator(TreeNode root) {\n        stack = new Stack<TreeNode>();\n        \n        while(root != null) {\n            stack.push(root);\n            root = root.left;\n        }\n    }\n\n    /** @return whether we have a next smallest number */\n    public boolean hasNext() {\n        return stack.isEmpty() ? false : true;\n    }\n\n    /** @return the next smallest number */\n    public int next() {\n        TreeNode nextSmallest = stack.pop();\n        \n        TreeNode addToStack = nextSmallest.right;\n        \n        while(addToStack != null) {\n            stack.add(addToStack);\n            addToStack = addToStack.left;\n        }\n        \n        return nextSmallest.val;\n    }\n}\n\n/**\n * Your BSTIterator will be called like this:\n * BSTIterator i = new BSTIterator(root);\n * while (i.hasNext()) v[f()] = i.next();\n */\n",
    index: 430,
  },
  {
    title: "Binary Tree Level Order Traversal",
    category: "linkedin",
    id: "BinaryTreeLevelOrderTraversal_linkedin",
    algorithm:
      "// Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).\n\n// For example:\n// Given binary tree [3,9,20,null,null,15,7],\n//     3\n//    / \\\n//   9  20\n//     /  \\\n//    15   7\n// return its level order traversal as:\n// [\n//   [3],\n//   [9,20],\n//   [15,7]\n// ]\n\n/**\n * Definition for a binary tree node.\n * public class TreeNode {\n *     int val;\n *     TreeNode left;\n *     TreeNode right;\n *     TreeNode(int x) { val = x; }\n * }\n */\npublic class BinaryTreeLevelOrderTraversal {\n    public List<List<Integer>> levelOrder(TreeNode root) {\n        List<List<Integer>> result = new ArrayList<List<Integer>>();\n        \n        if(root == null) {\n            return result;\n        }\n        \n        Queue<TreeNode> queue = new LinkedList<TreeNode>();\n        \n        queue.add(root);\n        \n        List<Integer> tempList = new ArrayList<Integer>();\n        tempList.add(root.val);\n        result.add(tempList);\n        \n        while(!queue.isEmpty()) {\n            Queue<TreeNode> currentLevel = new LinkedList<TreeNode>();\n            \n            List<Integer> list = new ArrayList<Integer>();\n            \n            while(!queue.isEmpty()) {\n                TreeNode current = queue.remove();\n                \n                if(current.left != null) {\n                    currentLevel.add(current.left);\n                    list.add(current.left.val);\n                }\n                \n                if(current.right != null) {\n                    currentLevel.add(current.right);\n                    list.add(current.right.val);\n                }\n            }\n            \n            if(list.size() > 0) {\n                result.add(list);\n            }\n\n            queue = currentLevel;\n        }\n        \n        return result;\n    }\n}\n",
    index: 431,
  },
  {
    title: "Find The Celebrity",
    category: "linkedin",
    id: "FindTheCelebrity_linkedin",
    algorithm:
      '// Suppose you are at a party with n people (labeled from 0 to n - 1) and among them, there may exist one celebrity. The definition of a celebrity is that all the other n - 1 people know him/her but he/she does not know any of them.\n\n// Now you want to find out who the celebrity is or verify that there is not one. The only thing you are allowed to do is to ask questions like: "Hi, A. Do you know B?" to get information of whether A knows B. You need to find out the celebrity (or verify there is not one) by asking as few questions as possible (in the asymptotic sense).\n\n// You are given a helper function bool knows(a, b) which tells you whether A knows B. Implement a function int findCelebrity(n), your function should minimize the number of calls to knows.\n\n// Note: There will be exactly one celebrity if he/she is in the party. Return the celebrity\'s label if there is a celebrity in the party. If there is no celebrity, return -1.\n\n/* The knows API is defined in the parent class Relation.\n      boolean knows(int a, int b); */\n\npublic class FindTheCelebrity extends Relation {\n    public int findCelebrity(int n) {\n        //initialize candidate to 0\n        int candidate = 0;\n        \n        //find viable candidate\n        for(int i = 1; i < n; i++) {\n            if(knows(candidate, i)) {\n                candidate = i;\n            }\n        }\n        \n        //check that everyone else knows the candidate\n        for(int i = 0; i < n; i++) {\n            //if the candidate knows the current person or the current person does not know the candidate, return -1 (candidate is not a celebrity)\n            if(i != candidate && knows(candidate, i) || !knows(i, candidate)) {\n                return -1;\n            }\n        }\n        \n        //return the celebrity\n        return candidate;\n    }\n}\n',
    index: 432,
  },
  {
    title: "House Robber",
    category: "linkedin",
    id: "HouseRobber_linkedin",
    algorithm:
      "// You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security system connected and it will automatically contact the police if two adjacent houses were broken into on the same night.\n\n// Given a list of non-negative integers representing the amount of money of each house, determine the maximum amount of money you can rob tonight without alerting the police.\n\npublic class HouseRobber {\n    public int rob(int[] nums) {\n        if(nums.length == 0) {\n            return 0;\n        }\n\n        if(nums.length == 1) {\n            return nums[0];\n        }\n\n        int[] dp = new int[nums.length];\n\n        dp[0] = nums[0];\n        dp[1] = nums[0] > nums[1] ? nums[0] : nums[1];\n\n        for(int i = 2; i < nums.length; i++) {\n            dp[i] = Math.max(dp[i - 2] + nums[i], dp[i - 1]);\n        }\n\n        return dp[dp.length - 1];\n    }\n}\n",
    index: 433,
  },
  {
    title: "Insert Interval",
    category: "linkedin",
    id: "InsertInterval_linkedin",
    algorithm:
      "// Given a set of non-overlapping intervals, insert a new interval into the intervals (merge if necessary).\n\n// You may assume that the intervals were initially sorted according to their start times.\n\n// Example 1:\n// Given intervals [1,3],[6,9], insert and merge [2,5] in as [1,5],[6,9].\n\n// Example 2:\n// Given [1,2],[3,5],[6,7],[8,10],[12,16], insert and merge [4,9] in as [1,2],[3,10],[12,16].\n\n// This is because the new interval [4,9] overlaps with [3,5],[6,7],[8,10].\n\n/**\n * Definition for an interval.\n * public class Interval {\n *     int start;\n *     int end;\n *     Interval() { start = 0; end = 0; }\n *     Interval(int s, int e) { start = s; end = e; }\n * }\n */\npublic class InsertInterval {\n    public List<Interval> insert(List<Interval> intervals, Interval newInterval) {\n        int i = 0;\n\n        while(i < intervals.size() && intervals.get(i).end < newInterval.start) {\n            i++;\n        }\n\n        while(i < intervals.size() && intervals.get(i).start <= newInterval.end) {\n            newInterval = new Interval(Math.min(intervals.get(i).start, newInterval.start), Math.max(intervals.get(i).end, newInterval.end));\n            intervals.remove(i);\n        }\n        \n        intervals.add(i, newInterval);\n\n        return intervals;\n    }\n}\n",
    index: 434,
  },
  {
    title: "Lowest Common Ancestor Of A Binary Tree",
    category: "linkedin",
    id: "LowestCommonAncestorOfABinaryTree_linkedin",
    algorithm:
      "// Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.\n\n// According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes v and w as the lowest node in T that has both v and w as descendants (where we allow a node to be a descendant of itself).”\n\n//         _______3______\n//        /              \\\n//     ___5__          ___1__\n//    /      \\        /      \\\n//    6      _2       0       8\n//          /  \\\n//          7   4\n// For example, the lowest common ancestor (LCA) of nodes 5 and 1 is 3. Another example is LCA of nodes 5 and 4 is 5, since a node can be a descendant of itself according to the LCA definition.\n\n/**\n * Definition for a binary tree node.\n * public class TreeNode {\n *     int val;\n *     TreeNode left;\n *     TreeNode right;\n *     TreeNode(int x) { val = x; }\n * }\n */\npublic class LowestCommonAncestorOfABinaryTree {\n    public TreeNode lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {\n        if(root == null || root == p || root == q) {\n            return root;\n        }\n        \n        TreeNode left = lowestCommonAncestor(root.left, p, q);\n        TreeNode right = lowestCommonAncestor(root.right, p, q);\n        \n        if(left != null && right != null) {\n            return root;\n        }\n        \n        return left == null ? right : left;\n    }\n}\n",
    index: 435,
  },
  {
    title: "Maximum Depth Of A Binary Tree",
    category: "linkedin",
    id: "MaximumDepthOfABinaryTree_linkedin",
    algorithm:
      "// Given a binary tree, find its maximum depth.\n\n// The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.\n\n/**\n * Definition for a binary tree node.\n * public class TreeNode {\n *     int val;\n *     TreeNode left;\n *     TreeNode right;\n *     TreeNode(int x) { val = x; }\n * }\n */\npublic class MaximumDepthOfABinaryTree {\n    public int maxDepth(TreeNode root) {\n        if(root == null) {\n            return 0;\n        }\n        \n        return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));\n    }\n}\n",
    index: 436,
  },
  {
    title: "Maximum Product Subarray",
    category: "linkedin",
    id: "MaximumProductSubarray_linkedin",
    algorithm:
      "// Find the contiguous subarray within an array (containing at least one number) which has the largest product.\n\n// For example, given the array [2,3,-2,4],\n// the contiguous subarray [2,3] has the largest product = 6.\n\npublic class MaximumProductSubarray {\n    public int maxProduct(int[] nums) {\n        if(nums == null || nums.length == 0) {\n            return 0;\n        }\n        \n        int result = nums[0];\n        int max = nums[0];\n        int min = nums[0];\n        \n        for(int i = 1; i < nums.length; i++) {\n            int temp = max;\n\n            max = Math.max(Math.max(nums[i] * max, nums[i] * min), nums[i]);\n            min = Math.min(Math.min(nums[i] * temp, nums[i] * min), nums[i]);\n            \n            if(max > result) {\n                result = max;\n            }\n        }\n        \n        return result;\n    }\n}\n",
    index: 437,
  },
  {
    title: "Maximum Subarray",
    category: "linkedin",
    id: "MaximumSubarray_linkedin",
    algorithm:
      "// Find the contiguous subarray within an array (containing at least one number) which has the largest sum.\n\n// For example, given the array [-2,1,-3,4,-1,2,1,-5,4],\n// the contiguous subarray [4,-1,2,1] has the largest sum = 6.\n\npublic class MaximumSubarray {\n    public int maxSubArray(int[] nums) {\n        int[] dp = new int[nums.length];\n        \n        dp[0] = nums[0];\n        \n        int max = dp[0];\n        \n        for(int i = 1; i < nums.length; i++) {\n            dp[i] = nums[i] + (dp[i - 1] > 0 ? dp[i - 1] : 0);\n            max = Math.max(dp[i], max);\n        }\n        \n        return max;\n    }\n}\n",
    index: 438,
  },
  {
    title: "Merge Intervals",
    category: "linkedin",
    id: "MergeIntervals_linkedin",
    algorithm:
      "// Given a collection of intervals, merge all overlapping intervals.\n\n// For example,\n// Given [1,3],[2,6],[8,10],[15,18],\n// return [1,6],[8,10],[15,18].\n\n/**\n * Definition for an interval.\n * public class Interval {\n *     int start;\n *     int end;\n *     Interval() { start = 0; end = 0; }\n *     Interval(int s, int e) { start = s; end = e; }\n * }\n */\nclass MergeIntervals {\n    public List<Interval> merge(List<Interval> intervals) {\n        List<Interval> result = new ArrayList<Interval>();\n        if(intervals == null || intervals.size() == 0) {\n            return result;\n        }\n        \n        Interval[] allIntervals = intervals.toArray(new Interval[intervals.size()]);\n        Arrays.sort(allIntervals, new Comparator<Interval>() {\n           public int compare(Interval a, Interval b) {\n               if(a.start == b.start) {\n                   return a.end - b.end;\n               }\n               return a.start - b.start;\n           } \n        });\n        \n        for(Interval i: allIntervals) {\n            if (result.size() == 0 || result.get(result.size() - 1).end < i.start) {\n                    result.add(i);\n            } else {\n                result.get(result.size() - 1).end = Math.max(result.get(result.size() - 1).end, i.end);\n            }\n        }\n        \n        return result;\n    }\n}\n",
    index: 439,
  },
  {
    title: "Merge K Sorted Lists",
    category: "linkedin",
    id: "MergeKSortedLists_linkedin",
    algorithm:
      "// Merge k sorted linked lists and return it as one sorted list. Analyze and describe its complexity.\n\n/**\n * Definition for singly-linked list.\n * public class ListNode {\n *     int val;\n *     ListNode next;\n *     ListNode(int x) { val = x; }\n * }\n */\npublic class MergeKSortedLists {\n    public ListNode mergeKLists(ListNode[] lists) {\n        if (lists==null||lists.length==0) {\n            return null;\n        }\n        \n        PriorityQueue<ListNode> queue= new PriorityQueue<ListNode>(lists.length,new Comparator<ListNode>(){\n            @Override\n            public int compare(ListNode o1,ListNode o2){\n                if (o1.val<o2.val) {\n                    return -1;\n                } else if (o1.val==o2.val) {\n                    return 0;\n                } else { \n                    return 1;\n                }\n            }\n        });\n        \n        ListNode dummy = new ListNode(0);\n        ListNode tail=dummy;\n        \n        for (ListNode node:lists) {\n            if (node!=null) {\n                queue.add(node);\n            }\n        }\n            \n        while (!queue.isEmpty()){\n            tail.next=queue.poll();\n            tail=tail.next;\n            \n            if (tail.next!=null) {\n                queue.add(tail.next);\n            }\n        }\n\n        return dummy.next;\n    }\n}\n",
    index: 440,
  },
  {
    title: "Minimum Window Substring",
    category: "linkedin",
    id: "MinimumWindowSubstring_linkedin",
    algorithm:
      '// Given a string S and a string T, find the minimum window in S which will contain all the characters in T in complexity O(n).\n\n// For example,\n// S = "ADOBECODEBANC"\n// T = "ABC"\n// Minimum window is "BANC".\n\n// Note:\n// If there is no such window in S that covers all characters in T, return the empty string "".\n\n// If there are multiple such windows, you are guaranteed that there will always be only one unique minimum window in S.\n\npublic class MinimumWindowSubstring {\n    public String minWindow(String s, String t) {\n        HashMap<Character, Integer> map = new HashMap<>();\n        \n        for(char c : s.toCharArray()) {\n            map.put(c, 0);\n        }\n        \n        for(char c : t.toCharArray()) {\n            if(map.containsKey(c)) {\n                map.put(c, map.get(c)+ 1);\n            } else {\n                return "";\n            }\n        }\n        \n        int start = 0;\n        int end = 0;\n        int minStart = 0;\n        int minLength = Integer.MAX_VALUE;\n        int counter = t.length();\n        \n        while(end < s.length()) {\n            char c1 = s.charAt(end);\n            \n            if(map.get(c1) > 0) {\n                counter--;\n            }\n            \n            map.put(c1, map.get(c1) - 1);\n            end++;\n            \n            while(counter == 0) {\n                if(minLength > end - start) {\n                    minLength = end - start;\n                    minStart = start;\n                }\n                \n                char c2 = s.charAt(start);\n                map.put(c2, map.get(c2) + 1);\n                \n                if(map.get(c2) > 0) {\n                    counter++;\n                }\n                \n                start++;\n            }\n        }\n        \n        return minLength == Integer.MAX_VALUE ? "" : s.substring(minStart, minStart + minLength);\n    }\n}\n',
    index: 441,
  },
  {
    title: "Paint House",
    category: "linkedin",
    id: "PaintHouse_linkedin",
    algorithm:
      "//There are a row of n houses, each house can be painted with one of the three colors: red, blue or green. \n//The cost of painting each house with a certain color is different. You have to paint all the houses such \n//that no two adjacent houses have the same color.\n\n//The cost of painting each house with a certain color is represented by a n x 3 cost matrix. For example, \n//costs[0][0] is the cost of painting house 0 with color red; costs[1][2] is the cost of painting house 1 \n//with color green, and so on... Find the minimum cost to paint all houses.\n\n//Note:\n//All costs are positive integers.\n\nclass PaintHouse {\n    public int minCost(int[][] costs) {\n        if(costs == null || costs.length == 0) {\n            return 0;\n        }\n        \n        for(int i = 1; i < costs.length; i++) {\n            costs[i][0] += Math.min(costs[i - 1][1], costs[i - 1][2]);\n            costs[i][1] += Math.min(costs[i - 1][0], costs[i - 1][2]);\n            costs[i][2] += Math.min(costs[i - 1][0], costs[i - 1][1]);\n        }\n        \n        return Math.min(Math.min(costs[costs.length - 1][0], costs[costs.length - 1][1]), costs[costs.length - 1][2]);\n    }\n}\n",
    index: 442,
  },
  {
    title: "Palindromic Substrings",
    category: "linkedin",
    id: "PalindromicSubstrings_linkedin",
    algorithm:
      '//Given a string, your task is to count how many palindromic substrings in this string.\n//The substrings with different start indexes or end indexes are counted as different substrings \n//even they consist of same characters.\n\n//Example 1:\n//Input: "abc"\n//Output: 3\n//Explanation: Three palindromic strings: "a", "b", "c".\n//Example 2:\n//Input: "aaa"\n//Output: 6\n//Explanation: Six palindromic strings: "a", "a", "a", "aa", "aa", "aaa".\n//Note:\n//The input string length won\'t exceed 1000.\n\nclass PalindromicSubstrings {\n    int result = 0;\n    public int countSubstrings(String s) {\n        if(s == null || s.length() == 0) {\n            return 0;\n        }\n        \n        for(int i = 0; i < s.length(); i++) {\n            extendPalindrome(s, i, i);\n            extendPalindrome(s, i, i + 1);\n        }\n        \n        return result;\n    }\n    \n    public void extendPalindrome(String s, int left, int right) {\n        while(left >= 0 && right < s.length() && s.charAt(left) == s.charAt(right)) {\n            result++;\n            left--;\n            right++;\n        }\n    }\n}\n\n',
    index: 443,
  },
  {
    title: "Permutations",
    category: "linkedin",
    id: "Permutations_linkedin",
    algorithm:
      "//Given a collection of distinct numbers, return all possible permutations.\n//\n//For example,\n//[1,2,3] have the following permutations:\n//[\n  //[1,2,3],\n  //[1,3,2],\n  //[2,1,3],\n  //[2,3,1],\n  //[3,1,2],\n  //[3,2,1]\n//]\n\nclass Permutations {\n    public List<List<Integer>> permute(int[] nums) {\n        LinkedList<List<Integer>> result = new LinkedList<List<Integer>>();\n        result.add(new ArrayList<Integer>());\n        for (int n: nums) {\n            int size = result.size();\n            while(size > 0) {\n                List<Integer> current = result.pollFirst();\n                for (int i = 0; i <= current.size(); i++) {\n                    List<Integer> temp = new ArrayList<Integer>(current);\n                    temp.add(i, n);\n                    result.add(temp);\n                }\n                size--;\n            }\n        }\n\n        return result;\n    }\n}\n\n",
    index: 444,
  },
  {
    title: "Power Of X To The N",
    category: "linkedin",
    id: "PowerOfXToTheN_linkedin",
    algorithm:
      "// Implement pow(x, n).\n\npublic class PowerOfXToTheN {\n    public double myPow(double x, int n) {\n        if(n == 0) {\n            return 1;\n        }\n        \n        if(Double.isInfinite(x)) {\n            return 0;\n        }\n        \n        if(n < 0) {\n            n = -n;\n            x = 1 / x;\n        }\n        \n        return n % 2 == 0 ? myPow(x * x, n / 2) : x * myPow(x * x, n / 2);\n    }\n}\n",
    index: 445,
  },
  {
    title: "Product Of Array Except Self",
    category: "linkedin",
    id: "ProductOfArrayExceptSelf_linkedin",
    algorithm:
      "// Given an array of n integers where n > 1, nums, return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].\n\n// Solve it without division and in O(n).\n\n// For example, given [1,2,3,4], return [24,12,8,6].\n\n// Follow up:\n// Could you solve it with constant space complexity? (Note: The output array does not count as extra space for the purpose of space complexity analysis.)\n\npublic class ProductOfArrayExceptSelf {\n    public int[] productExceptSelf(int[] nums) {\n        int n = nums.length;\n        int[] result = new int[n];\n        int left = 1;\n        \n        for(int i = 0; i < nums.length; i++) {\n            if(i > 0) {\n                left *= nums[i - 1];\n            }\n            \n            result[i] = left;\n        }\n        \n        int right = 1;\n        \n        for(int i = n - 1; i >= 0; i--) {\n            if(i < n - 1) {\n                right *= nums[i + 1];\n            }\n            \n            result[i] *= right;\n        }\n        \n        return result;\n    }\n}\n",
    index: 446,
  },
  {
    title: "Search In Rotated Sorted Array",
    category: "linkedin",
    id: "SearchInRotatedSortedArray_linkedin",
    algorithm:
      "// Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.\n\n// (i.e., 0 1 2 4 5 6 7 might become 4 5 6 7 0 1 2).\n\n// You are given a target value to search. If found in the array return its index, otherwise return -1.\n\n// You may assume no duplicate exists in the array.\n\npublic class SearchInRotatedSortedArray {\n    public int search(int[] nums, int target) {\n        int left = 0;\n        int right = nums.length - 1;\n        \n        while(left <= right) {\n            int mid = left + (right - left) / 2;\n            \n            if(nums[mid] == target) {\n                return mid;\n            }\n            \n            if(nums[left] <= nums[mid]) {\n                if(target < nums[mid] && target >= nums[left]) {\n                    right = mid - 1;\n                } else {\n                    left = mid + 1;\n                }\n            }\n            \n            if(nums[mid] <= nums[right]) {\n                if(target > nums[mid] && target <= nums[right]) {\n                    left = mid + 1;\n                } else {\n                    right = mid - 1;\n                }\n            }\n        }\n        \n        return -1;\n    }\n}\n",
    index: 447,
  },
  {
    title: "Sparse Matrix Multiplication",
    category: "linkedin",
    id: "SparseMatrixMultiplication_linkedin",
    algorithm:
      "// Given two sparse matrices A and B, return the result of AB.\n\n// You may assume that A's column number is equal to B's row number.\n\n// Example:\n\n// A = [\n//   [ 1, 0, 0],\n//   [-1, 0, 3]\n// ]\n\n// B = [\n//   [ 7, 0, 0 ],\n//   [ 0, 0, 0 ],\n//   [ 0, 0, 1 ]\n// ]\n\n\n//      |  1 0 0 |   | 7 0 0 |   |  7 0 0 |\n// AB = | -1 0 3 | x | 0 0 0 | = | -7 0 3 |\n//                   | 0 0 1 |\n\npublic class SparseMatrixMultiplication {\n    public int[][] multiply(int[][] A, int[][] B) {\n        int m = A.length;\n        int n = A[0].length;\n        int nB = B[0].length;\n        int[][] C = new int[m][nB];\n        \n        for(int i = 0; i < m; i++) {\n            for(int j = 0; j < n; j++) {\n                if(A[i][j] != 0) {\n                    for(int k = 0; k < nB; k++) {\n                        if(B[j][k] != 0) {\n                            C[i][k] += A[i][j] * B[j][k];\n                        }\n                    }\n                }\n            }\n        }\n        \n        return C;\n    }\n}\n",
    index: 448,
  },
  {
    title: "Symmetric Tree",
    category: "linkedin",
    id: "SymmetricTree_linkedin",
    algorithm:
      "// Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).\n\n// For example, this binary tree [1,2,2,3,4,4,3] is symmetric:\n\n//     1\n//    / \\\n//   2   2\n//  / \\ / \\\n// 3  4 4  3\n// But the following [1,2,2,null,3,null,3] is not:\n//     1\n//    / \\\n//   2   2\n//    \\   \\\n//    3    3\n\n/**\n * Definition for a binary tree node.\n * public class TreeNode {\n *     int val;\n *     TreeNode left;\n *     TreeNode right;\n *     TreeNode(int x) { val = x; }\n * }\n */\npublic class SymmetricTree {\n    public boolean isSymmetric(TreeNode root) {\n        if(root == null) {\n            return true;\n        }\n        \n        return helper(root.left, root.right);\n    }\n    \n    public boolean helper(TreeNode left, TreeNode right) {\n        if(left == null && right == null) {\n            return true;\n        }\n        \n        if(left == null || right == null || left.val != right.val) {\n            return false;\n        }\n        \n        return helper(left.right, right.left) && helper(left.left, right.right);\n    }\n}\n",
    index: 449,
  },
  {
    title: "Two Sum",
    category: "linkedin",
    id: "TwoSum_linkedin",
    algorithm:
      "// Given an array of integers, return indices of the two numbers such that they add up to a specific target.\n\n// You may assume that each input would have exactly one solution, and you may not use the same element twice.\n\n// Example:\n// Given nums = [2, 7, 11, 15], target = 9,\n\n// Because nums[0] + nums[1] = 2 + 7 = 9,\n// return [0, 1].\n\npublic class TwoSum {\n    public int[] twoSum(int[] nums, int target) {\n        int[] result = new int[2];\n        \n        HashMap<Integer, Integer> map = new HashMap<>();\n        \n        for(int i = 0; i < nums.length; i++) {\n            if(map.containsKey(target - nums[i])) {\n                result[1] = i;\n                result[0] = map.get(target - nums[i]);\n\n                return result;\n            }\n            \n            map.put(nums[i], i);\n        }\n        \n        return result;\n    }\n}\n",
    index: 450,
  },
  {
    title: "Microsoft",
    category: "top-companies",
    id: "microsoft",
    index: 451,
  },
  {
    title: "Add Digits",
    category: "microsoft",
    id: "AddDigits_microsoft",
    algorithm:
      "//Given a non-negative integer num, repeatedly add all its digits until the result has only one digit.\n\n//For example:\n//Given num = 38, the process is like: 3 + 8 = 11, 1 + 1 = 2. Since 2 has only one digit, return it.\n\n//Follow up:\n//Could you do it without any loop/recursion in O(1) runtime?\n\nclass AddDigits {\n    public int addDigits(int num) {\n        while(num >= 10) {\n            int temp = 0;\n            while(num > 0) {\n                temp += num % 10;\n                num /= 10;\n            }\n            num = temp;\n        }\n        \n        return num;\n    }\n}\n\n",
    index: 452,
  },
  {
    title: "First Unique Character In A String",
    category: "microsoft",
    id: "FirstUniqueCharacterInAString_microsoft",
    algorithm:
      '//Given a string, find the first non-repeating character in it and return it\'s index. If it doesn\'t exist, return -1.\n//\n//Examples:\n//\n//s = "leetcode"\n//return 0.\n//\n//s = "loveleetcode",\n//return 2.\n//Note: You may assume the string contain only lowercase letters.\n\nclass FirstUniqueCharacterInAString {\n    public int firstUniqChar(String s) {\n        HashMap<Character, Integer> characters = new HashMap<Character, Integer>();\n        for(int i = 0; i < s.length(); i++) {\n            char current = s.charAt(i);\n            if(characters.containsKey(current)) {\n                characters.put(current, -1);\n            } else {\n                characters.put(current, i);\n            }\n        }\n        \n        int min = Integer.MAX_VALUE;\n        for(char c: characters.keySet()) {\n            if(characters.get(c) > -1 && characters.get(c) < min) {\n                min = characters.get(c);\n            }\n        }\n        \n        return min == Integer.MAX_VALUE ? -1 : min;\n        \n    }\n}\n',
    index: 453,
  },
  {
    title: "House Robber I I",
    category: "microsoft",
    id: "HouseRobberII_microsoft",
    algorithm:
      "//Note: This is an extension of House Robber. (security system is tripped if two ajacent houses are robbed)\n//After robbing those houses on that street, the thief has found himself a new place for his thievery so that \n//he will not get too much attention. This time, all houses at this place are arranged in a circle. That means \n//the first house is the neighbor of the last one. Meanwhile, the security system for these houses remain the \n//same as for those in the previous street.\n//Given a list of non-negative integers representing the amount of money of each house, determine the maximum \n//amount of money you can rob tonight without alerting the police.\n\nclass HouseRobberII {\n    public int rob(int[] nums) {\n        if (nums.length == 0) {\n            return 0;\n        }\n        if (nums.length < 2) {\n            return nums[0];\n        }\n        \n        int[] first = new int[nums.length + 1];\n        int[] second = new int[nums.length + 1];\n        \n        first[0]  = 0;\n        first[1]  = nums[0];\n        second[0] = 0;\n        second[1] = 0;\n        \n        for (int i = 2; i <= nums.length; i++) {\n            first[i] = Math.max(first[i - 1], first[i - 2] + nums[i - 1]);\n            second[i] = Math.max(second[i - 1], second[i - 2] + nums[i - 1]);\n        }\n        \n        return Math.max(first[nums.length - 1], second[nums.length]);\n    }\n}\n\n",
    index: 454,
  },
  {
    title: "Linked List Cycle",
    category: "microsoft",
    id: "LinkedListCycle_microsoft",
    algorithm:
      "//Given a linked list, determine if it has a cycle in it.\n//Follow up:\n//Can you solve it without using extra space?\n/**\n * Definition for singly-linked list.\n * class ListNode {\n *     int val;\n *     ListNode next;\n *     ListNode(int x) {\n *         val = x;\n *         next = null;\n *     }\n * }\n */\npublic class Solution {\n    public boolean hasCycle(ListNode head) {\n        if(head == null || head.next == null) {\n            return false;\n        }\n        \n        ListNode slow = head;\n        ListNode fast = head.next;\n        while(fast != null && fast.next != null && fast != slow) {\n            slow = slow.next;\n            fast = fast.next.next;\n        }\n        \n        return fast == slow;\n    }\n}\n\n",
    index: 455,
  },
  {
    title: "Longest Increasing Subsequence",
    category: "microsoft",
    id: "LongestIncreasingSubsequence_microsoft",
    algorithm:
      "//Given an unsorted array of integers, find the length of longest increasing subsequence.\n\n//For example,\n//Given [10, 9, 2, 5, 3, 7, 101, 18],\n//The longest increasing subsequence is [2, 3, 7, 101], therefore the length is 4. Note that there may be more than one LIS combination, it is only necessary for you to return the length.\n\n//Your algorithm should run in O(n2) complexity.\n\n//Follow up: Could you improve it to O(n log n) time complexity?\n\nclass LongestIncreasingSubsequence {\n    public int lengthOfLIS(int[] nums) {\n        if(nums == null || nums.length < 1) {\n            return 0;\n        }\n\n        int[] dp = new int[nums.length];\n        dp[0] = 1;\n        \n        int max = 1;\n        for(int i = 1; i < dp.length; i++) {\n            int currentMax = 0;\n            for(int j = 0; j < i; j++) {\n                if(nums[i] > nums[j]) {\n                    currentMax = Math.max(currentMax, dp[j]);\n                }\n            }\n            dp[i] = 1 + currentMax;\n            max = Math.max(max, dp[i]);\n        }\n\n        return max;\n    }\n}\n",
    index: 456,
  },
  {
    title: "Longest Palindromic Substring",
    category: "microsoft",
    id: "LongestPalindromicSubstring_microsoft",
    algorithm:
      '//Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.\n\n//Example:\n//Input: "babad"\n//Output: "bab"\n\n//Note: "aba" is also a valid answer.\n\n//Example:\n//Input: "cbbd"\n//Output: "bb"\n\nclass LongestPalindromicSubstring {\n    public String longestPalindrome(String s) {\n        if(s == null || s.length() == 0) {\n            return "";\n        }\n        \n        String longestPalindromicSubstring = "";\n        for(int i = 0; i < s.length(); i++) {\n            for(int j = i + 1; j <= s.length(); j++) {\n                if(j - i > longestPalindromicSubstring.length() && isPalindrome(s.substring(i, j))) {\n                    longestPalindromicSubstring = s.substring(i, j);\n                }\n            }\n        }\n        \n        return longestPalindromicSubstring;\n    }\n    \n    public boolean isPalindrome(String s) {\n        int i = 0;\n        int j = s.length() - 1;\n        while(i <= j) {\n            if(s.charAt(i++) != s.charAt(j--)) {\n                return false;\n            }\n        }\n        \n        return true;\n    }\n}\n',
    index: 457,
  },
  {
    title: "Permutations",
    category: "microsoft",
    id: "Permutations_microsoft",
    algorithm:
      "//Given a collection of distinct numbers, return all possible permutations.\n//\n//For example,\n//[1,2,3] have the following permutations:\n//[\n  //[1,2,3],\n  //[1,3,2],\n  //[2,1,3],\n  //[2,3,1],\n  //[3,1,2],\n  //[3,2,1]\n//]\n\nclass Permutations {\n    public List<List<Integer>> permute(int[] nums) {\n        LinkedList<List<Integer>> result = new LinkedList<List<Integer>>();\n        result.add(new ArrayList<Integer>());\n        for (int n: nums) {\n            int size = result.size();\n            while(size > 0) {\n                List<Integer> current = result.pollFirst();\n                for (int i = 0; i <= current.size(); i++) {\n                    List<Integer> temp = new ArrayList<Integer>(current);\n                    temp.add(i, n);\n                    result.add(temp);\n                }\n                size--;\n            }\n        }\n\n        return result;\n    }\n}\n\n",
    index: 458,
  },
  {
    title: "Reverse Words In A String",
    category: "microsoft",
    id: "ReverseWordsInAString_microsoft",
    algorithm:
      '//Given an input string, reverse the string word by word.\n//For example,\n//Given s = "the sky is blue",\n//return "blue is sky the".\n\npublic class ReverseWordsInAString {\n    public String reverseWords(String s) {\n        String[] words = s.trim().split("\\\\s+");\n        String result = "";\n        for(int i = words.length - 1; i > 0; i--) {\n            result += words[i] + " ";\n        }\n        \n        return result + words[0];\n    }\n}\n\n',
    index: 459,
  },
  {
    title: "Spiral Matrix",
    category: "microsoft",
    id: "SpiralMatrix_microsoft",
    algorithm:
      "//Given a matrix of m x n elements (m rows, n columns), return all elements of the matrix in spiral order.\n//\n//Example 1:\n//\n//Input:\n//[\n //[ 1, 2, 3 ],\n //[ 4, 5, 6 ],\n //[ 7, 8, 9 ]\n//]\n//Output: [1,2,3,6,9,8,7,4,5]\n//Example 2:\n//\n//Input:\n//[\n  //[1, 2, 3, 4],\n  //[5, 6, 7, 8],\n  //[9,10,11,12]\n//]\n//Output: [1,2,3,4,8,12,11,10,9,5,6,7]\n\nclass SpiralMatrix {\n    public List<Integer> spiralOrder(int[][] matrix) {\n        List<Integer> result = new ArrayList<Integer>();\n        if(matrix == null || matrix.length == 0) {\n            return result;\n        }\n        \n        int rowStart = 0;\n        int rowEnd = matrix.length - 1;\n        int colStart = 0;\n        int colEnd = matrix[0].length - 1;\n        while(rowStart <= rowEnd && colStart <= colEnd) {\n            for(int i = colStart; i <= colEnd; i++) {\n                result.add(matrix[rowStart][i]);\n            }\n            rowStart++;\n            \n            for(int i = rowStart; i <= rowEnd; i++) {\n                result.add(matrix[i][colEnd]);\n            }\n            colEnd--;\n            \n            if(rowStart <= rowEnd) {\n                for(int i = colEnd; i >= colStart; i--) {\n                    result.add(matrix[rowEnd][i]);\n                }\n            }\n            rowEnd--;\n            \n            if(colStart <= colEnd) {\n                for(int i = rowEnd; i >= rowStart; i--) {\n                    result.add(matrix[i][colStart]);\n                }\n            }   \n            colStart++;\n        }\n        \n        return result;\n    }\n}\n",
    index: 460,
  },
  { title: "Palantir", category: "top-companies", id: "palantir", index: 461 },
  {
    title: "Contains Duplicate",
    category: "palantir",
    id: "ContainsDuplicate_palantir",
    algorithm:
      "//Given an array of integers, find if the array contains any duplicates. Your function should return \n//true if any value appears at least twice in the array, and it should return false if every element is distinct.\n\nclass ContainsDuplicate {\n    public boolean containsDuplicate(int[] nums) {\n        HashMap<Integer, Integer> map = new HashMap<Integer, Integer>();\n        for(int i: nums) {\n            if(map.containsKey(i)) {\n                return true;\n            } else {\n                map.put(i, 1);\n            }\n        }\n        \n        return false;\n    }\n}\n\n",
    index: 462,
  },
  {
    title: "Contains Duplicates I I",
    category: "palantir",
    id: "ContainsDuplicatesII_palantir",
    algorithm:
      "//Given an array of integers and an integer k, find out whether there are two distinct indices i and \n//j in the array such that nums[i] = nums[j] and the absolute difference between i and j is at most k.\n\nclass ContainsDuplicatesII {\n    public boolean containsNearbyDuplicate(int[] nums, int k) {\n        HashMap<Integer, Integer> map = new HashMap<Integer, Integer>();\n        for(int i = 0; i < nums.length; i++) {\n            int current = nums[i];\n            if(map.containsKey(current) && i - map.get(current) <= k) {\n                return true;\n            } else {\n                map.put(current, i);\n            }\n        }\n        \n        return false;\n    }\n}\n\n",
    index: 463,
  },
  { title: "Snapchat", category: "top-companies", id: "snapchat", index: 464 },
  {
    title: "Min Stack",
    category: "snapchat",
    id: "MinStack_snapchat",
    algorithm:
      "//Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.\n//push(x) -- Push element x onto stack.\n//pop() -- Removes the element on top of the stack.\n//top() -- Get the top element.\n//getMin() -- Retrieve the minimum element in the stack.\n\n/**\n * Your MinStack object will be instantiated and called as such:\n * MinStack obj = new MinStack();\n * obj.push(x);\n * obj.pop();\n * int param_3 = obj.top();\n * int param_4 = obj.getMin();\n */\nclass MinStack {\n    class Node {\n        int data;\n        int min;\n        Node next;\n        \n        public Node(int data, int min) {\n            this.data = data;\n            this.min = min;\n            this.next = null;\n        }\n    }\n    Node head;\n    \n    /** initialize your data structure here. */\n    public MinStack() {\n        \n    }\n    \n    public void push(int x) {\n        if(head == null) {\n            head = new Node(x, x);\n        } else {\n            Node newNode = new Node(x, Math.min(x, head.min));\n            newNode.next = head;\n            head = newNode;\n        }\n    }\n    \n    public void pop() {\n        head = head.next;\n    }\n    \n    public int top() {\n        return head.data;\n    }\n    \n    public int getMin() {\n        return head.min;\n    }\n}\n",
    index: 465,
  },
  {
    title: "Reverse Words In A String",
    category: "snapchat",
    id: "ReverseWordsInAString_snapchat",
    algorithm:
      '//Given an input string, reverse the string word by word.\n//For example,\n//Given s = "the sky is blue",\n//return "blue is sky the".\n\npublic class ReverseWordsInAString {\n    public String reverseWords(String s) {\n        String[] words = s.trim().split("\\\\s+");\n        String result = "";\n        for(int i = words.length - 1; i > 0; i--) {\n            result += words[i] + " ";\n        }\n        \n        return result + words[0];\n    }\n}\n\n',
    index: 466,
  },
  {
    title: "Valid Sudoku",
    category: "snapchat",
    id: "ValidSudoku_snapchat",
    algorithm:
      "//Determine if a Sudoku is valid, according to: Sudoku Puzzles - The Rules. (http://sudoku.com.au/TheRules.aspx)\n//The Sudoku board could be partially filled, where empty cells are filled with the character '.'.\n//A partially filled sudoku which is valid.\n\n//Note:\n//A valid Sudoku board (partially filled) is not necessarily solvable. Only the filled cells need to be validated.\n\nclass ValidSudoku {\n    public boolean isValidSudoku(char[][] board) {\n        for(int i = 0; i < board.length; i++){\n            HashSet<Character> rows = new HashSet<Character>();\n            HashSet<Character> columns = new HashSet<Character>();\n            HashSet<Character> box = new HashSet<Character>();\n            for (int j = 0; j < board[0].length; j++){\n                if(board[i][j] != '.' && !rows.add(board[i][j])) {\n                    return false;\n                }\n                if(board[j][i]!='.' && !columns.add(board[j][i])) {\n                    return false;\n                }\n                int rowIndex = (i / 3) * 3;\n                int columnIndex = (i % 3) * 3;\n                if(board[rowIndex + j / 3][columnIndex + j % 3] != '.' && !box.add(board[rowIndex + j / 3][columnIndex + j % 3])) {\n                    return false;\n                }\n            }\n        }\n        return true;\n    }\n}\n\n",
    index: 467,
  },
  { title: "Twitter", category: "top-companies", id: "twitter", index: 468 },
  {
    title: "Flatten Nested List Iterator",
    category: "twitter",
    id: "FlattenNestedListIterator_twitter",
    algorithm:
      "// Given a nested list of integers, implement an iterator to flatten it.\n\n// Each element is either an integer, or a list -- whose elements may also be integers or other lists.\n\n// Example 1:\n// Given the list [[1,1],2,[1,1]],\n\n// By calling next repeatedly until hasNext returns false, the order of elements returned by next should be: [1,1,2,1,1].\n\n// Example 2:\n// Given the list [1,[4,[6]]],\n\n// By calling next repeatedly until hasNext returns false, the order of elements returned by next should be: [1,4,6].\n\n/**\n * // This is the interface that allows for creating nested lists.\n * // You should not implement it, or speculate about its implementation\n * public interface NestedInteger {\n *\n *     // @return true if this NestedInteger holds a single integer, rather than a nested list.\n *     public boolean isInteger();\n *\n *     // @return the single integer that this NestedInteger holds, if it holds a single integer\n *     // Return null if this NestedInteger holds a nested list\n *     public Integer getInteger();\n *\n *     // @return the nested list that this NestedInteger holds, if it holds a nested list\n *     // Return null if this NestedInteger holds a single integer\n *     public List<NestedInteger> getList();\n * }\n */\npublic class FlattenNestedListIterator implements Iterator<Integer> {\n    Stack<NestedInteger> stack = new Stack<NestedInteger>();\n\n    public NestedIterator(List<NestedInteger> nestedList) {\n        for(int i = nestedList.size() - 1; i >= 0; i--) {\n            stack.push(nestedList.get(i));\n        }\n    }\n\n    @Override\n    public Integer next() {\n        return stack.pop().getInteger();\n    }\n\n    @Override\n    public boolean hasNext() {\n        while(!stack.isEmpty()) {\n            NestedInteger current = stack.peek();\n\n            if(current.isInteger()) {\n                return true;\n            }\n\n            stack.pop();\n\n            for(int i = current.getList().size() - 1;  i >= 0; i--) {\n                stack.push(current.getList().get(i));\n            }\n        }\n        \n        return false;\n    }\n}\n\n/**\n * Your NestedIterator object will be instantiated and called as such:\n * NestedIterator i = new NestedIterator(nestedList);\n * while (i.hasNext()) v[f()] = i.next();\n */\n",
    index: 469,
  },
  {
    title: "Implement Trie",
    category: "twitter",
    id: "ImplementTrie_twitter",
    algorithm:
      '// Implement a trie with insert, search, and startsWith methods.\n\n// Note:\n// You may assume that all inputs are consist of lowercase letters a-z.\n\n// Your Trie object will be instantiated and called as such:\n// Trie trie = new Trie();\n// trie.insert("somestring");\n// trie.search("key");\n\nclass TrieNode {\n    HashMap<Character, TrieNode> map;\n    char character;\n    boolean last;\n    \n    // Initialize your data structure here.\n    public TrieNode(char character) {\n        this.map = new HashMap<Character, TrieNode>();\n        this.character = character;\n        this.last = false;\n    }\n}\n\npublic class Trie {\n    private TrieNode root;\n\n    public Trie() {\n        root = new TrieNode(\' \');\n    }\n\n    // Inserts a word into the trie.\n    public void insert(String word) {\n\n        TrieNode current = root;\n            \n        for(char c : word.toCharArray()) {\n            if(!current.map.containsKey(c)) {\n                current.map.put(c, new TrieNode(c));\n            }\n            \n            current = current.map.get(c);\n        }\n        \n        current.last = true;\n    }\n\n    // Returns if the word is in the trie.\n    public boolean search(String word) {\n        TrieNode current = root;\n        \n        for(char c : word.toCharArray()) {\n            if(!current.map.containsKey(c)) {\n                return false;\n            }\n            \n            current = current.map.get(c);\n        }\n        \n        if(current.last == true) {\n            return true;\n        } else {\n            return false;\n        }\n    }\n\n    // Returns if there is any word in the trie\n    // that starts with the given prefix.\n    public boolean startsWith(String prefix) {\n        TrieNode current = root;\n        \n        for(char c : prefix.toCharArray()) {\n            if(!current.map.containsKey(c)) {\n                return false;\n            }\n\n            current = current.map.get(c);\n        }\n        \n        return true;\n    }\n}\n\n',
    index: 470,
  },
  {
    title: "Insert Delete Get Random O1",
    category: "twitter",
    id: "InsertDeleteGetRandomO1_twitter",
    algorithm:
      "//Design a data structure that supports all following operations in average O(1) time.\n\n//insert(val): Inserts an item val to the set if not already present.\n//remove(val): Removes an item val from the set if present.\n//getRandom: Returns a random element from current set of elements. Each element must have the same probability of being returned.\n\n//Example:\n// Init an empty set.\n//RandomizedSet randomSet = new RandomizedSet();\n\n// Inserts 1 to the set. Returns true as 1 was inserted successfully.\n//randomSet.insert(1);\n\n// Returns false as 2 does not exist in the set.\n//randomSet.remove(2);\n\n// Inserts 2 to the set, returns true. Set now contains [1,2].\n//randomSet.insert(2);\n\n// getRandom should return either 1 or 2 randomly.\n//randomSet.getRandom();\n\n// Removes 1 from the set, returns true. Set now contains [2].\n//randomSet.remove(1);\n\n// 2 was already in the set, so return false.\n//randomSet.insert(2);\n\n// Since 2 is the only number in the set, getRandom always return 2.\n//randomSet.getRandom();\n\nclass RandomizedSet {\n    HashMap<Integer, Integer> map;\n    ArrayList<Integer> values;\n\n    /** Initialize your data structure here. */\n    public RandomizedSet() {\n        map = new HashMap<Integer, Integer>();\n        values = new ArrayList<Integer>();\n    }\n    \n    /** Inserts a value to the set. Returns true if the set did not already contain the specified element. */\n    public boolean insert(int val) {\n        if(!map.containsKey(val)) {\n            map.put(val, val);\n            values.add(val);\n            return true;\n        }\n        else {\n            return false;\n        }\n    }\n    \n    /** Removes a value from the set. Returns true if the set contained the specified element. */\n    public boolean remove(int val) {\n        if(map.containsKey(val)) {\n            map.remove(val);\n            values.remove(values.indexOf(val));\n            return true;\n        }\n        return false;\n    }\n    \n    /** Get a random element from the set. */\n    public int getRandom() {\n        int random = (int)(Math.random() * values.size());\n        int valueToReturn = values.get(random);\n        return map.get(valueToReturn);\n    }\n}\n\n/**\n * Your RandomizedSet object will be instantiated and called as such:\n * RandomizedSet obj = new RandomizedSet();\n * boolean param_1 = obj.insert(val);\n * boolean param_2 = obj.remove(val);\n * int param_3 = obj.getRandom();\n */\n\n",
    index: 471,
  },
  {
    title: "Lowest Common Ancestor Of A Binary Tree",
    category: "twitter",
    id: "LowestCommonAncestorOfABinaryTree_twitter",
    algorithm:
      "// Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.\n\n// According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes v and w as the lowest node in T that has both v and w as descendants (where we allow a node to be a descendant of itself).”\n\n//         _______3______\n//        /              \\\n//     ___5__          ___1__\n//    /      \\        /      \\\n//    6      _2       0       8\n//          /  \\\n//          7   4\n// For example, the lowest common ancestor (LCA) of nodes 5 and 1 is 3. Another example is LCA of nodes 5 and 4 is 5, since a node can be a descendant of itself according to the LCA definition.\n\n/**\n * Definition for a binary tree node.\n * public class TreeNode {\n *     int val;\n *     TreeNode left;\n *     TreeNode right;\n *     TreeNode(int x) { val = x; }\n * }\n */\npublic class LowestCommonAncestorOfABinaryTree {\n    public TreeNode lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {\n        if(root == null || root == p || root == q) {\n            return root;\n        }\n        \n        TreeNode left = lowestCommonAncestor(root.left, p, q);\n        TreeNode right = lowestCommonAncestor(root.right, p, q);\n        \n        if(left != null && right != null) {\n            return root;\n        }\n        \n        return left == null ? right : left;\n    }\n}\n",
    index: 472,
  },
  {
    title: "Merge Intervals",
    category: "twitter",
    id: "MergeIntervals_twitter",
    algorithm:
      "// Given a collection of intervals, merge all overlapping intervals.\n\n// For example,\n// Given [1,3],[2,6],[8,10],[15,18],\n// return [1,6],[8,10],[15,18].\n\n/**\n * Definition for an interval.\n * public class Interval {\n *     int start;\n *     int end;\n *     Interval() { start = 0; end = 0; }\n *     Interval(int s, int e) { start = s; end = e; }\n * }\n */\nclass MergeIntervals {\n    public List<Interval> merge(List<Interval> intervals) {\n        List<Interval> result = new ArrayList<Interval>();\n        if(intervals == null || intervals.size() == 0) {\n            return result;\n        }\n        \n        Interval[] allIntervals = intervals.toArray(new Interval[intervals.size()]);\n        Arrays.sort(allIntervals, new Comparator<Interval>() {\n           public int compare(Interval a, Interval b) {\n               if(a.start == b.start) {\n                   return a.end - b.end;\n               }\n               return a.start - b.start;\n           } \n        });\n        \n        for(Interval i: allIntervals) {\n            if (result.size() == 0 || result.get(result.size() - 1).end < i.start) {\n                    result.add(i);\n            } else {\n                result.get(result.size() - 1).end = Math.max(result.get(result.size() - 1).end, i.end);\n            }\n        }\n        \n        return result;\n    }\n}\n",
    index: 473,
  },
  {
    title: "Merge K Sorted Lists",
    category: "twitter",
    id: "MergeKSortedLists_twitter",
    algorithm:
      "// Merge k sorted linked lists and return it as one sorted list. Analyze and describe its complexity.\n\n/**\n * Definition for singly-linked list.\n * public class ListNode {\n *     int val;\n *     ListNode next;\n *     ListNode(int x) { val = x; }\n * }\n */\npublic class MergeKSortedLists {\n    public ListNode mergeKLists(ListNode[] lists) {\n        if (lists==null||lists.length==0) {\n            return null;\n        }\n        \n        PriorityQueue<ListNode> queue= new PriorityQueue<ListNode>(lists.length,new Comparator<ListNode>(){\n            @Override\n            public int compare(ListNode o1,ListNode o2){\n                if (o1.val<o2.val) {\n                    return -1;\n                } else if (o1.val==o2.val) {\n                    return 0;\n                } else  {\n                    return 1;\n                }\n            }\n        });\n\n        ListNode dummy = new ListNode(0);\n        ListNode tail=dummy;\n\n        for (ListNode node:lists) {\n            if (node!=null) {\n                queue.add(node);\n            }\n        }\n\n        while (!queue.isEmpty()){\n            tail.next=queue.poll();\n            tail=tail.next;\n\n            if (tail.next!=null) {\n                queue.add(tail.next);\n            }\n        }\n\n        return dummy.next;\n    }\n}\n",
    index: 474,
  },
  {
    title: "Multiply Strings",
    category: "twitter",
    id: "MultiplyStrings_twitter",
    algorithm:
      "// Given two non-negative integers num1 and num2 represented as strings, return the product of num1 and num2.\n\n// Note:\n\n    // The length of both num1 and num2 is < 110.\n    // Both num1 and num2 contains only digits 0-9.\n    // Both num1 and num2 does not contain any leading zero.\n    // You must not use any built-in BigInteger library or convert the inputs to integer directly.\n\npublic class MultiplyStrings {\n    public String multiply(String num1, String num2) {\n        int m = num1.length();\n        int n = num2.length();\n        int[] pos = new int[m + n];\n        \n        for(int i = m - 1; i >= 0; i--) {\n            for(int j = n - 1; j >= 0; j--) {\n                int mul = (num1.charAt(i) - '0') * (num2.charAt(j) - '0');\n                int p1 = i + j;\n                int p2 = i + j + 1;\n                int sum = mul + pos[p2];\n                \n                pos[p1] += sum / 10;\n                pos[p2] = (sum) % 10;\n                \n            }\n        }\n        \n        StringBuilder sb = new StringBuilder();\n\n        for(int p : pos) {\n            if(!(sb.length() == 0 && p == 0)) {\n                sb.append(p);\n            }\n        }\n        \n        return sb.length() == 0 ? \"0\" : sb.toString();\n    }\n}\n",
    index: 475,
  },
  {
    title: "One Edit Distance",
    category: "twitter",
    id: "OneEditDistance_twitter",
    algorithm:
      "// Given two strings S and T, determine if they are both one edit distance apart.\n\npublic class OneEditDistance {\n    public boolean isOneEditDistance(String s, String t) {\n        //iterate through the length of the smaller string\n        for(int i = 0; i < Math.min(s.length(), t.length()); i++) {\n            //if the current characters of the two strings are not equal\n            if(s.charAt(i) != t.charAt(i)) {\n                //return true if the remainder of the two strings are equal, false otherwise\n                if(s.length() == t.length()) {\n                    return s.substring(i + 1).equals(t.substring(i + 1));\n                } else if(s.length() < t.length()) {\n                    //return true if the strings would be the same if you deleted a character from string t\n                    return s.substring(i).equals(t.substring(i + 1));\n                } else {\n                    //return true if the strings would be the same if you deleted a character from string s\n                    return t.substring(i).equals(s.substring(i + 1));\n                }\n            }\n        }\n        \n        //if all characters match for the length of the two strings check if the two strings' lengths do not differ by more than 1\n        return Math.abs(s.length() - t.length()) == 1;\n    }\n}\n",
    index: 476,
  },
  {
    title: "Regular Expression Matching",
    category: "twitter",
    id: "RegularExpressionMatching_twitter",
    algorithm:
      '// Implement regular expression matching with support for \'.\' and \'*\'.\n\n// \'.\' Matches any single character.\n// \'*\' Matches zero or more of the preceding element.\n\n// The matching should cover the entire input string (not partial).\n\n// The function prototype should be:\n// bool isMatch(const char *s, const char *p)\n\n// Some examples:\n// isMatch("aa","a") → false\n// isMatch("aa","aa") → true\n// isMatch("aaa","aa") → false\n// isMatch("aa", "a*") → true\n// isMatch("aa", ".*") → true\n// isMatch("ab", ".*") → true\n// isMatch("aab", "c*a*b") → true\n\npublic class RegularExpressionMatching {\n    public boolean isMatch(String s, String p) {\n        if(s == null || p == null) {\n            return false;\n        }\n        \n        boolean[][] dp = new boolean[s.length() + 1][p.length() + 1];\n        dp[0][0] = true;\n        \n        for(int i = 0; i < p.length(); i++) {\n            if(p.charAt(i) == \'*\' && dp[0][i - 1]) {\n                dp[0][i + 1] = true;\n            }\n        }\n        \n        for(int i = 0; i < s.length(); i++) {\n            for(int j = 0; j < p.length(); j++) {\n                if(p.charAt(j) == \'.\') {\n                    dp[i + 1][j + 1] = dp[i][j];\n                }\n                \n                if(p.charAt(j) == s.charAt(i)) {\n                    dp[i + 1][j + 1] = dp[i][j];\n                }\n                \n                if(p.charAt(j) == \'*\') {\n                    if(p.charAt(j - 1) != s.charAt(i) && p.charAt(j - 1) != \'.\') {\n                        dp[i + 1][j + 1] = dp[i + 1][j - 1];\n                    } else {\n                        dp[i + 1][j + 1] = (dp[i + 1][j] || dp[i][j + 1] || dp[i + 1][j - 1]);\n                    }\n                }\n            }\n        }\n        \n        return dp[s.length()][p.length()];\n    }\n}\n',
    index: 477,
  },
  {
    title: "Reverse Linked List",
    category: "twitter",
    id: "ReverseLinkedList_twitter",
    algorithm:
      "// Reverse a singly linked list.\n\n/**\n * Definition for singly-linked list.\n * public class ListNode {\n *     int val;\n *     ListNode next;\n *     ListNode(int x) { val = x; }\n * }\n */\npublic class ReverseLinkedList {\n    public ListNode reverseList(ListNode head) {\n        if(head == null) {\n            return head;\n        }\n    \n        ListNode newHead = null;\n        \n        while(head != null) {\n            ListNode next = head.next;\n            head.next = newHead;\n            newHead = head;\n            head = next;\n        }\n        \n        return newHead;\n    }\n}\n",
    index: 478,
  },
  {
    title: "Trapping Rain Water",
    category: "twitter",
    id: "TrappingRainWater_twitter",
    algorithm:
      "// Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it is able to trap after raining.\n\n// For example, \n// Given [0,1,0,2,1,0,1,3,2,1,2,1], return 6.\n\npublic class TrappingRainWater {\n    public int trap(int[] height) {\n        int water = 0;\n        \n        int leftIndex = 0;\n        int rightIndex = height.length - 1;\n        \n        int leftMax = 0;\n        int rightMax = 0;\n        \n        while(leftIndex <= rightIndex) {\n            leftMax = Math.max(leftMax, height[leftIndex]);\n            rightMax = Math.max(rightMax, height[rightIndex]);\n            \n            if(leftMax < rightMax) {\n                water += leftMax - height[leftIndex];\n                leftIndex++;\n            } else {\n                water += rightMax - height[rightIndex];\n                rightIndex--;\n            }\n        }\n        \n        return water;\n    }\n}\n\n",
    index: 479,
  },
  {
    title: "Valid Parentheses",
    category: "twitter",
    id: "ValidParentheses_twitter",
    algorithm:
      "// Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.\n\n// The brackets must close in the correct order, \"()\" and \"()[]{}\" are all valid but \"(]\" and \"([)]\" are not.\n\npublic class ValidParentheses {\n    public boolean isValid(String s) {\n        if(s.length() % 2 == 1) {\n            return false;\n        }\n        \n        Stack<Character> stack = new Stack<Character>();\n        \n        for(int i = 0; i < s.length(); i++) {\n            if(s.charAt(i) == '(' || s.charAt(i) == '[' || s.charAt(i) == '{') {\n                stack.push(s.charAt(i));\n            } else if(s.charAt(i) == ')' && !stack.isEmpty() && stack.peek() == ')') {\n                stack.pop();\n            } else if(s.charAt(i) == ']' && !stack.isEmpty() && stack.peek() == ']') {\n                stack.pop();\n            } else if(s.charAt(i) == '}' && !stack.isEmpty() && stack.peek() == '}') {\n                stack.pop();\n            } else {\n                return false;\n            }\n        }\n        \n        return stack.isEmpty();\n    }\n}\n",
    index: 480,
  },
  { title: "Uber", category: "top-companies", id: "uber", index: 481 },
  {
    title: "Best Time To Buy Or Sell Stock",
    category: "uber",
    id: "BestTimeToBuyOrSellStock_uber",
    algorithm:
      "// Say you have an array for which the ith element is the price of a given stock on day i.\n\n// If you were only permitted to complete at most one transaction (ie, buy one and sell one share of the stock), design an algorithm to find the maximum profit.\n\n// Example 1:\n// Input: [7, 1, 5, 3, 6, 4]\n// Output: 5\n\n// max. difference = 6-1 = 5 (not 7-1 = 6, as selling price needs to be larger than buying price)\n// Example 2:\n// Input: [7, 6, 4, 3, 1]\n// Output: 0\n\n// In this case, no transaction is done, i.e. max profit = 0.\n\npublic class BestTimeToBuyAndSellStock {\n    public int maxProfit(int[] prices) {\n        //Kadane's algorithm\n        if(prices.length == 0) {\n            return 0;\n        }\n        \n        int max = 0;\n        int min = prices[0];\n        \n        for(int i = 1; i < prices.length; i++) {\n            if(prices[i] > min) {\n                max = Math.max(max, prices[i] - min);\n            } else {\n                min = prices[i];\n            }\n        }\n        \n        return max;\n    }\n}\n",
    index: 482,
  },
  {
    title: "Clone Graph",
    category: "uber",
    id: "CloneGraph_uber",
    algorithm:
      "// Clone an undirected graph. Each node in the graph contains a label and a list of its neighbors.\n\n// OJ's undirected graph serialization:\n// Nodes are labeled uniquely.\n\n// We use # as a separator for each node, and , as a separator for node label and each neighbor of the node.\n// As an example, consider the serialized graph {0,1,2#1,2#2,2}.\n\n// The graph has a total of three nodes, and therefore contains three parts as separated by #.\n\n// First node is labeled as 0. Connect node 0 to both nodes 1 and 2.\n// Second node is labeled as 1. Connect node 1 to node 2.\n// Third node is labeled as 2. Connect node 2 to node 2 (itself), thus forming a self-cycle.\n// Visually, the graph looks like the following:\n\n//        1\n//       / \\\n//      /   \\\n//     0 --- 2\n//          / \\\n//          \\_/\n\n/**\n * Definition for undirected graph.\n * class UndirectedGraphNode {\n *     int label;\n *     List<UndirectedGraphNode> neighbors;\n *     UndirectedGraphNode(int x) { label = x; neighbors = new ArrayList<UndirectedGraphNode>(); }\n * };\n */\npublic class CloneGraph {\n    public HashMap<Integer, UndirectedGraphNode> map = new HashMap<Integer, UndirectedGraphNode>();\n    \n    public UndirectedGraphNode cloneGraph(UndirectedGraphNode node) {\n        if(node == null) {\n            return null;\n        }\n        \n        if(map.containsKey(node.label)) {\n            return map.get(node.label);\n        }\n        \n        UndirectedGraphNode newNode = new UndirectedGraphNode(node.label);\n        map.put(newNode.label, newNode);\n        \n        for(UndirectedGraphNode neighbor : node.neighbors) {\n            newNode.neighbors.add(cloneGraph(neighbor));\n        }\n        \n        return newNode;\n    }\n}\n",
    index: 483,
  },
  {
    title: "Decode Ways",
    category: "uber",
    id: "DecodeWays_uber",
    algorithm:
      "// A message containing letters from A-Z is being encoded to numbers using the following mapping:\n\n// 'A' -> 1\n// 'B' -> 2\n// ...\n// 'Z' -> 26\n\n// Given an encoded message containing digits, determine the total number of ways to decode it.\n\n// For example,\n// Given encoded message \"12\", it could be decoded as \"AB\" (1 2) or \"L\" (12).\n\n// The number of ways decoding \"12\" is 2.\n\npublic class DecodeWays {\n    public int numDecodings(String s) {\n        int n = s.length();\n\n        if(n == 0) {\n            return 0;\n        }\n        \n        int[] dp = new int[n + 1];\n        dp[n] = 1;\n        dp[n - 1] = s.charAt(n - 1) != '0' ? 1 : 0;\n        \n        for(int i = n - 2; i >= 0; i--) {\n            if(s.charAt(i) == '0') {\n                continue;\n            } else {\n                dp[i] = (Integer.parseInt(s.substring(i, i + 2)) <= 26) ? dp[i + 1] + dp[i + 2] : dp[i + 1];\n            }\n        }\n        \n        return dp[0];\n    }\n}\n",
    index: 484,
  },
  {
    title: "Encode And Decode Tiny U R L",
    category: "uber",
    id: "EncodeAndDecodeTinyURL_uber",
    algorithm:
      '//TinyURL is a URL shortening service where you enter a URL such as https://leetcode.com/problems/design-tinyurl \n//and it returns a short URL such as http://tinyurl.com/4e9iAk.\n//\n//Design the encode and decode methods for the TinyURL service. There is no restriction on how your \n//encode/decode algorithm should work. You just need to ensure that a URL can be encoded to a tiny URL \n//and the tiny URL can be decoded to the original URL.\n\npublic class EncodeAndDecodeTinyURL {\n    HashMap<String, String> map = new HashMap<String, String>();\n    String characters = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";\n    int count = 1;\n\n    public String getKey() {\n        String key = "";\n        while(count > 0) {\n            count--;\n            key += characters.charAt(count);\n            count /= characters.length();\n        }\n        \n        return key;\n    }\n    \n    // Encodes a URL to a shortened URL.\n    public String encode(String longUrl) {\n        String key = getKey();\n        map.put(key, longUrl);\n        count++;\n            \n        return "http://tinyurl.com/" + key;\n    }\n\n    // Decodes a shortened URL to its original URL.\n    public String decode(String shortUrl) {\n        return map.get(shortUrl.replace("http://tinyurl.com/", ""));\n    }\n}\n\n// Your Codec object will be instantiated and called as such:\n// Codec codec = new Codec();\n// codec.decode(codec.encode(url));\n',
    index: 485,
  },
  {
    title: "Exclusive Time Of Functions",
    category: "uber",
    id: "ExclusiveTimeOfFunctions_uber",
    algorithm:
      '//Given the running logs of n functions that are executed in a nonpreemptive single threaded CPU, find the exclusive time of these functions.\n\n//Each function has a unique id, start from 0 to n-1. A function may be called recursively or by another function.\n\n//A log is a string has this format : function_id:start_or_end:timestamp. For example, "0:start:0" means function 0 starts from the very beginning of time 0. "0:end:0" means function 0 ends to the very end of time 0.\n\n//Exclusive time of a function is defined as the time spent within this function, the time spent by calling other functions should not be considered as this function\'s exclusive time. You should return the exclusive time of each function sorted by their function id.\n\n//Example 1:\n//Input:\n//n = 2\n//logs = \n//["0:start:0",\n //"1:start:2",\n //"1:end:5",\n //"0:end:6"]\n//Output:[3, 4]\n//Explanation:\n//Function 0 starts at time 0, then it executes 2 units of time and reaches the end of time 1. \n//Now function 0 calls function 1, function 1 starts at time 2, executes 4 units of time and end at time 5.\n//Function 0 is running again at time 6, and also end at the time 6, thus executes 1 unit of time. \n//So function 0 totally execute 2 + 1 = 3 units of time, and function 1 totally execute 4 units of time.\n//Note:\n//Input logs will be sorted by timestamp, NOT log id.\n//Your output should be sorted by function id, which means the 0th element of your output corresponds to the exclusive time of function 0.\n//Two functions won\'t start or end at the same time.\n//Functions could be called recursively, and will always end.\n//1 <= n <= 100\n\nclass ExclusiveTimeOfFunctions {\n    public int[] exclusiveTime(int n, List<String> logs) {\n        Stack<Integer> stack = new Stack <Integer>();\n        int[] result = new int[n];\n        String[] current = logs.get(0).split(":");\n        stack.push(Integer.parseInt(current[0]));\n        int i = 1;\n        int previous = Integer.parseInt(current[2]);\n        while (i < logs.size()) {\n            current = logs.get(i).split(":");\n            if (current[1].equals("start")) {\n                if (!stack.isEmpty()) {\n                    result[stack.peek()] += Integer.parseInt(current[2]) - previous;\n                }\n                stack.push(Integer.parseInt(current[0]));\n                previous = Integer.parseInt(current[2]);\n            } else {\n                result[stack.peek()] += Integer.parseInt(current[2]) - previous + 1;\n                stack.pop();\n                previous = Integer.parseInt(current[2]) + 1;\n            }\n            i++;\n        }\n        return result;\n    }\n}\n\n',
    index: 486,
  },
  {
    title: "Generate Parentheses",
    category: "uber",
    id: "GenerateParentheses_uber",
    algorithm:
      'class GenerateParentheses {\n    public List<String> generateParenthesis(int n) {\n        List<String> result = new ArrayList<String>();\n        generateParenthesisRecursive(result, "", 0, 0, n);\n        \n        return result;\n    }\n    \n    public void generateParenthesisRecursive(List<String> result, String current, int open, int close, int n) {\n        if(current.length() == n * 2) {\n            result.add(current);\n            return;\n        }\n        \n        if(open < n) {\n            generateParenthesisRecursive(result, current + "(", open + 1, close, n);\n        }\n        \n        if(close < open) {\n            generateParenthesisRecursive(result, current + ")", open, close + 1, n);\n        }\n    }\n}\n',
    index: 487,
  },
  {
    title: "Group Anagrams",
    category: "uber",
    id: "GroupAnagrams_uber",
    algorithm:
      '// Given an array of strings, group anagrams together.\n\n// For example, given: ["eat", "tea", "tan", "ate", "nat", "bat"], \n// Return:\n\n// [\n//   ["ate", "eat","tea"],\n//   ["nat","tan"],\n//   ["bat"]\n// ]\n// Note: All inputs will be in lower-case.\n\npublic class GroupAnagrams {\n    public List<List<String>> groupAnagrams(String[] strs) {\n        if(strs == null || strs.length == 0) {\n            return new ArrayList<List<String>>();\n        }\n        \n        HashMap<String, ArrayList<String>> map = new HashMap<String, ArrayList<String>>();\n        \n        Arrays.sort(strs);\n        \n        for(String s : strs) {\n            char[] characters = s.toCharArray();\n        \n            Arrays.sort(characters);\n            \n            String key = String.valueOf(characters);\n            \n            if(!map.containsKey(key)) {\n                map.put(key, new ArrayList<String>());\n            }\n            \n            map.get(key).add(s);\n        }\n        \n        return new ArrayList<List<String>>(map.values());\n    }\n}\n',
    index: 488,
  },
  {
    title: "Group Shifted Strings",
    category: "uber",
    id: "GroupShiftedStrings_uber",
    algorithm:
      '// Given a string, we can "shift" each of its letter to its successive letter, for example: "abc" -> "bcd". We can keep "shifting" which forms the sequence:\n\n// "abc" -> "bcd" -> ... -> "xyz"\n// Given a list of strings which contains only lowercase alphabets, group all strings that belong to the same shifting sequence.\n\n// For example, given: ["abc", "bcd", "acef", "xyz", "az", "ba", "a", "z"], \n// A solution is:\n\n// [\n//   ["abc","bcd","xyz"],\n//   ["az","ba"],\n//   ["acef"],\n//   ["a","z"]\n// ]\n\npublic class GroupShiftedStrings {\n    public List<List<String>> groupStrings(String[] strings) {\n        List<List<String>> result = new ArrayList<List<String>>();\n        \n        HashMap<String, List<String>> map = new HashMap<String, List<String>>();\n        \n        for(String s : strings) {\n            int offset = s.charAt(0) - \'a\';\n            String key = "";\n            \n            for(int i = 0; i < s.length(); i++) {\n                char current = (char)(s.charAt(i) - offset);\n                \n                if(current < \'a\') {\n                    current += 26;\n                }\n                \n                key += current;\n            }\n            \n            if(!map.containsKey(key)) {\n                List<String> list = new ArrayList<String>();\n                map.put(key, list);\n            }\n            \n            map.get(key).add(s);\n        }\n        \n        for(String key : map.keySet()) {\n            List<String> list = map.get(key);\n            \n            Collections.sort(list);\n            \n            result.add(list);   \n        }\n        \n        return result;\n    }\n}\n',
    index: 489,
  },
  {
    title: "Implement Trie",
    category: "uber",
    id: "ImplementTrie_uber",
    algorithm:
      '// Implement a trie with insert, search, and startsWith methods.\n\n// Note:\n// You may assume that all inputs are consist of lowercase letters a-z.\n\n// Your Trie object will be instantiated and called as such:\n// Trie trie = new Trie();\n// trie.insert("somestring");\n// trie.search("key");\n\nclass TrieNode {\n    HashMap<Character, TrieNode> map;\n    char character;\n    boolean last;\n    \n    // Initialize your data structure here.\n    public TrieNode(char character) {\n        this.map = new HashMap<Character, TrieNode>();\n        this.character = character;\n        this.last = false;\n    }\n}\n\npublic class ImplementTrie {\n    private TrieNode root;\n\n    public Trie() {\n        root = new TrieNode(\' \');\n    }\n\n    // Inserts a word into the trie.\n    public void insert(String word) {\n        TrieNode current = root;\n            \n        for(char c : word.toCharArray()) {\n            if(!current.map.containsKey(c)) {\n                current.map.put(c, new TrieNode(c));\n            }\n            \n            current = current.map.get(c);\n        }\n        \n        current.last = true;\n    }\n\n    // Returns if the word is in the trie.\n    public boolean search(String word) {\n        TrieNode current = root;\n        \n        for(char c : word.toCharArray()) {\n            if(!current.map.containsKey(c)) {\n                return false;\n            }\n            \n            current = current.map.get(c);\n        }\n        \n        if(current.last == true) {\n            return true;\n        } else {\n            return false;\n        }\n    }\n\n    // Returns if there is any word in the trie\n    // that starts with the given prefix.\n    public boolean startsWith(String prefix) {\n        TrieNode current = root;\n        \n        for(char c : prefix.toCharArray()) {\n            if(!current.map.containsKey(c)) {\n                return false;\n            }\n\n            current = current.map.get(c);\n        }\n        \n        return true;\n    }\n}\n\n',
    index: 490,
  },
  {
    title: "Insert Delete Get Random O1",
    category: "uber",
    id: "InsertDeleteGetRandomO1_uber",
    algorithm:
      "//Design a data structure that supports all following operations in average O(1) time.\n\n//insert(val): Inserts an item val to the set if not already present.\n//remove(val): Removes an item val from the set if present.\n//getRandom: Returns a random element from current set of elements. Each element must have the same probability of being returned.\n\n//Example:\n// Init an empty set.\n//RandomizedSet randomSet = new RandomizedSet();\n\n// Inserts 1 to the set. Returns true as 1 was inserted successfully.\n//randomSet.insert(1);\n\n// Returns false as 2 does not exist in the set.\n//randomSet.remove(2);\n\n// Inserts 2 to the set, returns true. Set now contains [1,2].\n//randomSet.insert(2);\n\n// getRandom should return either 1 or 2 randomly.\n//randomSet.getRandom();\n\n// Removes 1 from the set, returns true. Set now contains [2].\n//randomSet.remove(1);\n\n// 2 was already in the set, so return false.\n//randomSet.insert(2);\n\n// Since 2 is the only number in the set, getRandom always return 2.\n//randomSet.getRandom();\n\nclass RandomizedSet {\n    HashMap<Integer, Integer> map;\n    ArrayList<Integer> values;\n\n    /** Initialize your data structure here. */\n    public RandomizedSet() {\n        map = new HashMap<Integer, Integer>();\n        values = new ArrayList<Integer>();\n    }\n    \n    /** Inserts a value to the set. Returns true if the set did not already contain the specified element. */\n    public boolean insert(int val) {\n        if(!map.containsKey(val)) {\n            map.put(val, val);\n            values.add(val);\n            return true;\n        }\n        else {\n            return false;\n        }\n    }\n    \n    /** Removes a value from the set. Returns true if the set contained the specified element. */\n    public boolean remove(int val) {\n        if(map.containsKey(val)) {\n            map.remove(val);\n            values.remove(values.indexOf(val));\n            return true;\n        }\n        return false;\n    }\n    \n    /** Get a random element from the set. */\n    public int getRandom() {\n        int random = (int)(Math.random() * values.size());\n        int valueToReturn = values.get(random);\n        return map.get(valueToReturn);\n    }\n}\n\n/**\n * Your RandomizedSet object will be instantiated and called as such:\n * RandomizedSet obj = new RandomizedSet();\n * boolean param_1 = obj.insert(val);\n * boolean param_2 = obj.remove(val);\n * int param_3 = obj.getRandom();\n */\n\n",
    index: 491,
  },
  {
    title: "Letter Combinations Of A Phone Number",
    category: "uber",
    id: "LetterCombinationsOfAPhoneNumber_uber",
    algorithm:
      '// Given a digit string, return all possible letter combinations that the number could represent.\n\n// A mapping of digit to letters (just like on the telephone buttons) is given below.\n\n// 2 - abc\n// 3 - def\n// 4 - ghi\n// 5 - jkl\n// 6 - mno\n// 7 - pqrs\n// 8 - tuv\n// 9 - wxyz\n\n// Input:Digit string "23"\n// Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].\n\nclass LetterCombinationsOfAPhoneNumber {\n    public List<String> letterCombinations(String digits) {\n        List<String> result = new ArrayList<String>();\n        \n        if(digits == null || digits.length() == 0) {\n            return result;\n        }\n        \n        String[] mapping = {\n            "0",\n            "1",\n            "abc",\n            "def",\n            "ghi",\n            "jkl",\n            "mno",\n            "pqrs",\n            "tuv",\n            "wxyz"\n        };\n        \n        letterCombinationsRecursive(result, digits, "", 0, mapping);\n        \n        return result;\n    }\n    \n    public void letterCombinationsRecursive(List<String> result, String digits, String current, int index, String[] mapping) {\n        if(index == digits.length()) {\n            result.add(current);\n            return;\n        }\n        \n        String letters = mapping[digits.charAt(index) - \'0\'];\n        for(int i = 0; i < letters.length(); i++) {\n            letterCombinationsRecursive(result, digits, current + letters.charAt(i), index + 1, mapping);\n        }\n    }\n}\n',
    index: 492,
  },
  {
    title: "Maximum Depth Of A Binary Tree",
    category: "uber",
    id: "MaximumDepthOfABinaryTree_uber",
    algorithm:
      "// Given a binary tree, find its maximum depth.\n\n// The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.\n\n/**\n * Definition for a binary tree node.\n * public class TreeNode {\n *     int val;\n *     TreeNode left;\n *     TreeNode right;\n *     TreeNode(int x) { val = x; }\n * }\n */\npublic class MaximumDepthOfABinaryTree {\n    public int maxDepth(TreeNode root) {\n        if(root == null) {\n            return 0;\n        }\n        \n        return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));\n    }\n}\n",
    index: 493,
  },
  {
    title: "Merge K Sorted Lists",
    category: "uber",
    id: "MergeKSortedLists_uber",
    algorithm:
      "// Merge k sorted linked lists and return it as one sorted list. Analyze and describe its complexity.\n\n/**\n * Definition for singly-linked list.\n * public class ListNode {\n *     int val;\n *     ListNode next;\n *     ListNode(int x) { val = x; }\n * }\n */\npublic class MergeKSortedLists {\n    public ListNode mergeKLists(ListNode[] lists) {\n        if (lists==null||lists.length==0) {\n            return null;\n        }\n        \n        PriorityQueue<ListNode> queue= new PriorityQueue<ListNode>(lists.length,new Comparator<ListNode>(){\n            @Override\n            public int compare(ListNode o1,ListNode o2){ \n                if (o1.val<o2.val) {\n                    return -1;\n                } else if (o1.val==o2.val) {\n                    return 0;\n                } else { \n                    return 1;\n                }\n            }\n        });\n        \n        ListNode dummy = new ListNode(0);\n        ListNode tail=dummy;\n        \n        for (ListNode node:lists) {\n            if (node!=null) {\n                queue.add(node);\n            }\n        }\n\n        while (!queue.isEmpty()){\n            tail.next=queue.poll();\n            tail=tail.next;\n            \n            if (tail.next!=null) {\n                queue.add(tail.next);\n            }\n        }\n\n        return dummy.next;\n    }\n}\n",
    index: 494,
  },
  {
    title: "Min Stack",
    category: "uber",
    id: "MinStack_uber",
    algorithm:
      "//Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.\n//push(x) -- Push element x onto stack.\n//pop() -- Removes the element on top of the stack.\n//top() -- Get the top element.\n//getMin() -- Retrieve the minimum element in the stack.\n\n/**\n * Your MinStack object will be instantiated and called as such:\n * MinStack obj = new MinStack();\n * obj.push(x);\n * obj.pop();\n * int param_3 = obj.top();\n * int param_4 = obj.getMin();\n */\nclass MinStack {\n    class Node {\n        int data;\n        int min;\n        Node next;\n        \n        public Node(int data, int min) {\n            this.data = data;\n            this.min = min;\n            this.next = null;\n        }\n    }\n    Node head;\n    \n    /** initialize your data structure here. */\n    public MinStack() {\n        \n    }\n    \n    public void push(int x) {\n        if(head == null) {\n            head = new Node(x, x);\n        } else {\n            Node newNode = new Node(x, Math.min(x, head.min));\n            newNode.next = head;\n            head = newNode;\n        }\n    }\n    \n    public void pop() {\n        head = head.next;\n    }\n    \n    public int top() {\n        return head.data;\n    }\n    \n    public int getMin() {\n        return head.min;\n    }\n}\n",
    index: 495,
  },
  {
    title: "Minimum Window Substring",
    category: "uber",
    id: "MinimumWindowSubstring_uber",
    algorithm:
      '// Given a string S and a string T, find the minimum window in S which will contain all the characters in T in complexity O(n).\n\n// For example,\n// S = "ADOBECODEBANC"\n// T = "ABC"\n// Minimum window is "BANC".\n\n// Note:\n// If there is no such window in S that covers all characters in T, return the empty string "".\n\n// If there are multiple such windows, you are guaranteed that there will always be only one unique minimum window in S.\n\npublic class MinimumWindowSubstring {\n    public String minWindow(String s, String t) {\n        HashMap<Character, Integer> map = new HashMap<>();\n        \n        for(char c : s.toCharArray()) {\n            map.put(c, 0);\n        }\n        \n        for(char c : t.toCharArray()) {\n            if(map.containsKey(c)) {\n                map.put(c, map.get(c)+ 1);\n            } else {\n                return "";\n            }\n        }\n        \n        int start = 0;\n        int end = 0;\n        int minStart = 0;\n        int minLength = Integer.MAX_VALUE;\n        int counter = t.length();\n        \n        while(end < s.length()) {\n            char c1 = s.charAt(end);\n            \n            if(map.get(c1) > 0) {\n                counter--;\n            }\n            \n            map.put(c1, map.get(c1) - 1);\n            end++;\n            \n            while(counter == 0) {\n                if(minLength > end - start) {\n                    minLength = end - start;\n                    minStart = start;\n                }\n                \n                char c2 = s.charAt(start);\n                map.put(c2, map.get(c2) + 1);\n                \n                if(map.get(c2) > 0) {\n                    counter++;\n                }\n                \n                start++;\n            }\n        }\n        \n        return minLength == Integer.MAX_VALUE ? "" : s.substring(minStart, minStart + minLength);\n    }\n}\n',
    index: 496,
  },
  {
    title: "One Edit Distance",
    category: "uber",
    id: "OneEditDistance_uber",
    algorithm:
      "// Given two strings S and T, determine if they are both one edit distance apart.\n\npublic class OneEditDistance {\n    public boolean isOneEditDistance(String s, String t) {\n        //iterate through the length of the smaller string\n        for(int i = 0; i < Math.min(s.length(), t.length()); i++) {\n            //if the current characters of the two strings are not equal\n            if(s.charAt(i) != t.charAt(i)) {\n                //return true if the remainder of the two strings are equal, false otherwise\n                if(s.length() == t.length()) {\n                    return s.substring(i + 1).equals(t.substring(i + 1));\n                } else if(s.length() < t.length()) {\n                    //return true if the strings would be the same if you deleted a character from string t\n                    return s.substring(i).equals(t.substring(i + 1));\n                } else {\n                    //return true if the strings would be the same if you deleted a character from string s\n                    return t.substring(i).equals(s.substring(i + 1));\n                }\n            }\n        }\n        \n        //if all characters match for the length of the two strings check if the two strings' lengths do not differ by more than 1\n        return Math.abs(s.length() - t.length()) == 1;\n    }\n}\n",
    index: 497,
  },
  {
    title: "Palindrome Permutation",
    category: "uber",
    id: "PalindromePermutation_uber",
    algorithm:
      "public class PalindromePermutation {\n    public boolean canPermutePalindrome(String s) {\n        char[] characters = new char[256];\n        \n        for(int i = 0; i < s.length(); i++) {\n            characters[s.charAt(i)]++;\n        }\n        \n        int oddCount = 0;\n        \n        for(int i = 0; i < characters.length; i++) {\n            if(!(characters[i] % 2 == 0)) {\n                oddCount++;\n                if(oddCount > 1) {\n                    return false;\n                }\n            }\n        }\n        \n        return true;\n    }\n}\n",
    index: 498,
  },
  {
    title: "Regular Expression Matching",
    category: "uber",
    id: "RegularExpressionMatching_uber",
    algorithm:
      '// Implement regular expression matching with support for \'.\' and \'*\'.\n\n// \'.\' Matches any single character.\n// \'*\' Matches zero or more of the preceding element.\n\n// The matching should cover the entire input string (not partial).\n\n// The function prototype should be:\n// bool isMatch(const char *s, const char *p)\n\n// Some examples:\n// isMatch("aa","a") → false\n// isMatch("aa","aa") → true\n// isMatch("aaa","aa") → false\n// isMatch("aa", "a*") → true\n// isMatch("aa", ".*") → true\n// isMatch("ab", ".*") → true\n// isMatch("aab", "c*a*b") → true\n\npublic class RegularExpressionMatching {\n    public boolean isMatch(String s, String p) {\n        if(s == null || p == null) {\n            return false;\n        }\n        \n        boolean[][] dp = new boolean[s.length() + 1][p.length() + 1];\n        dp[0][0] = true;\n        \n        for(int i = 0; i < p.length(); i++) {\n            if(p.charAt(i) == \'*\' && dp[0][i - 1]) {\n                dp[0][i + 1] = true;\n            }\n        }\n        \n        for(int i = 0; i < s.length(); i++) {\n            for(int j = 0; j < p.length(); j++) {\n                if(p.charAt(j) == \'.\') {\n                    dp[i + 1][j + 1] = dp[i][j];\n                }\n                \n                if(p.charAt(j) == s.charAt(i)) {\n                    dp[i + 1][j + 1] = dp[i][j];\n                }\n                \n                if(p.charAt(j) == \'*\') {\n                    if(p.charAt(j - 1) != s.charAt(i) && p.charAt(j - 1) != \'.\') {\n                        dp[i + 1][j + 1] = dp[i + 1][j - 1];\n                    } else {\n                        dp[i + 1][j + 1] = (dp[i + 1][j] || dp[i][j + 1] || dp[i + 1][j - 1]);\n                    }\n                }\n            }\n        }\n        \n        return dp[s.length()][p.length()];\n    }\n}\n',
    index: 499,
  },
  {
    title: "Reverse Linked List",
    category: "uber",
    id: "ReverseLinkedList_uber",
    algorithm:
      "// Reverse a singly linked list.\n\n/**\n * Definition for singly-linked list.\n * public class ListNode {\n *     int val;\n *     ListNode next;\n *     ListNode(int x) { val = x; }\n * }\n */\npublic class ReverseLinkedList {\n    public ListNode reverseList(ListNode head) {\n        if(head == null) {\n            return head;\n        }\n    \n        ListNode newHead = null;\n        \n        while(head != null) {\n            ListNode next = head.next;\n            head.next = newHead;\n            newHead = head;\n            head = next;\n        }\n        \n        return newHead;\n    }\n}\n",
    index: 500,
  },
  {
    title: "Roman To Integer",
    category: "uber",
    id: "RomanToInteger_uber",
    algorithm:
      "// Given a roman numeral, convert it to an integer.\n\n// Input is guaranteed to be within the range from 1 to 3999\n\npublic class RomanToInteger {\n    public int romanToInt(String s) {\n        HashMap<Character, Integer> map = new HashMap<Character, Integer>();\n        \n        map.put('I', 1);\n        map.put('V', 5);\n        map.put('X', 10);\n        map.put('L', 50);\n        map.put('C', 100);\n        map.put('D', 500);\n        map.put('M', 1000);\n        \n        int total = 0;\n\n        for(int i = 0; i < s.length() - 1; i++) {\n            if(map.get(s.charAt(i)) < map.get(s.charAt(i + 1))) {\n                total -= map.get(s.charAt(i));\n            } else {\n                total += map.get(s.charAt(i));\n            }\n        }\n        \n        total += map.get(s.charAt(s.length() - 1));\n        \n        return total;\n    }\n}\n",
    index: 501,
  },
  {
    title: "Search In Rotated Sorted Array",
    category: "uber",
    id: "SearchInRotatedSortedArray_uber",
    algorithm:
      "// Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.\n\n// (i.e., 0 1 2 4 5 6 7 might become 4 5 6 7 0 1 2).\n\n// You are given a target value to search. If found in the array return its index, otherwise return -1.\n\n// You may assume no duplicate exists in the array.\n\npublic class SearchInRotatedSortedArray {\n    public int search(int[] nums, int target) {\n        int left = 0;\n        int right = nums.length - 1;\n        \n        while(left <= right) {\n            int mid = left + (right - left) / 2;\n            \n            if(nums[mid] == target) {\n                return mid;\n            }\n            \n            if(nums[left] <= nums[mid]) {\n                if(target < nums[mid] && target >= nums[left]) {\n                    right = mid - 1;\n                } else {\n                    left = mid + 1;\n                }\n            }\n            \n            if(nums[mid] <= nums[right]) {\n                if(target > nums[mid] && target <= nums[right]) {\n                    left = mid + 1;\n                } else {\n                    right = mid - 1;\n                }\n            }\n        }\n        \n        return -1;\n    }\n}\n",
    index: 502,
  },
  {
    title: "Spiral Matrix",
    category: "uber",
    id: "SpiralMatrix_uber",
    algorithm:
      "//Given a matrix of m x n elements (m rows, n columns), return all elements of the matrix in spiral order.\n//\n//Example 1:\n//\n//Input:\n//[\n //[ 1, 2, 3 ],\n //[ 4, 5, 6 ],\n //[ 7, 8, 9 ]\n//]\n//Output: [1,2,3,6,9,8,7,4,5]\n//Example 2:\n//\n//Input:\n//[\n  //[1, 2, 3, 4],\n  //[5, 6, 7, 8],\n  //[9,10,11,12]\n//]\n//Output: [1,2,3,4,8,12,11,10,9,5,6,7]\n\nclass SpiralMatrix {\n    public List<Integer> spiralOrder(int[][] matrix) {\n        List<Integer> result = new ArrayList<Integer>();\n        if(matrix == null || matrix.length == 0) {\n            return result;\n        }\n        \n        int rowStart = 0;\n        int rowEnd = matrix.length - 1;\n        int colStart = 0;\n        int colEnd = matrix[0].length - 1;\n        while(rowStart <= rowEnd && colStart <= colEnd) {\n            for(int i = colStart; i <= colEnd; i++) {\n                result.add(matrix[rowStart][i]);\n            }\n            rowStart++;\n            \n            for(int i = rowStart; i <= rowEnd; i++) {\n                result.add(matrix[i][colEnd]);\n            }\n            colEnd--;\n            \n            if(rowStart <= rowEnd) {\n                for(int i = colEnd; i >= colStart; i--) {\n                    result.add(matrix[rowEnd][i]);\n                }\n            }\n            rowEnd--;\n            \n            if(colStart <= colEnd) {\n                for(int i = rowEnd; i >= rowStart; i--) {\n                    result.add(matrix[i][colStart]);\n                }\n            }   \n            colStart++;\n        }\n        \n        return result;\n    }\n}\n",
    index: 503,
  },
  {
    title: "Subsets",
    category: "uber",
    id: "Subsets_uber",
    algorithm:
      "// Given a set of distinct integers, nums, return all possible subsets.\n\n// Note: The solution set must not contain duplicate subsets.\n\n// For example,\n// If nums = [1,2,3], a solution is:\n\n// [\n//   [3],\n//   [1],\n//   [2],\n//   [1,2,3],\n//   [1,3],\n//   [2,3],\n//   [1,2],\n//   []\n// ]\n\npublic class Subsets {\n    public List<List<Integer>> subsets(int[] nums) {\n        List<List<Integer>> result = new ArrayList<>();\n        \n        recurse(result, nums, new Stack<>(), 0);\n        \n        return result;\n    }\n    \n    \n    private void recurse(List<List<Integer>> result, int[] nums, Stack path, int position) {\n        if(position == nums.length) {\n            result.add(new ArrayList<>(path));\n            return;\n        }\n        \n        path.push(nums[position]);\n\n        recurse(result, nums, path, position + 1);\n        \n        path.pop();\n        \n        recurse(result, nums, path, position + 1);\n    }\n}\n",
    index: 504,
  },
  {
    title: "Two Sum",
    category: "uber",
    id: "TwoSum_uber",
    algorithm:
      "// Given an array of integers, return indices of the two numbers such that they add up to a specific target.\n\n// You may assume that each input would have exactly one solution, and you may not use the same element twice.\n\n// Example:\n// Given nums = [2, 7, 11, 15], target = 9,\n\n// Because nums[0] + nums[1] = 2 + 7 = 9,\n// return [0, 1].\n\npublic class TwoSum {\n    public int[] twoSum(int[] nums, int target) {\n        int[] result = new int[2];\n        \n        HashMap<Integer, Integer> map = new HashMap<>();\n        \n        for(int i = 0; i < nums.length; i++) {\n            if(map.containsKey(target - nums[i])) {\n                result[1] = i;\n                result[0] = map.get(target - nums[i]);\n                return result;\n            }\n            \n            map.put(nums[i], i);\n        }\n        \n        return result;\n    }\n}\n",
    index: 505,
  },
  {
    title: "Valid Palindrome",
    category: "uber",
    id: "ValidPalindrome_uber",
    algorithm:
      "public class ValidPalindrome {\n    public boolean isPalindrome(String s) {\n        int left = 0;\n        int right = s.length() - 1;\n        \n        while(left < right) {\n            while(!Character.isLetterOrDigit(s.charAt(left)) && left < right) {\n                left++;\n            }\n\n            while(!Character.isLetterOrDigit(s.charAt(right)) && right > left) {\n                right--;\n            }\n            \n            if(Character.toLowerCase(s.charAt(left)) != Character.toLowerCase(s.charAt(right))) {\n                return false;\n            }\n            \n            left++;\n            right--;\n        }\n        \n        return true;\n    }\n}\n",
    index: 506,
  },
  {
    title: "Valid Sudoku",
    category: "uber",
    id: "ValidSudoku_uber",
    algorithm:
      "//Determine if a Sudoku is valid, according to: Sudoku Puzzles - The Rules. (http://sudoku.com.au/TheRules.aspx)\n//The Sudoku board could be partially filled, where empty cells are filled with the character '.'.\n//A partially filled sudoku which is valid.\n\n//Note:\n//A valid Sudoku board (partially filled) is not necessarily solvable. Only the filled cells need to be validated.\n\nclass ValidSudoku {\n    public boolean isValidSudoku(char[][] board) {\n        for(int i = 0; i < board.length; i++){\n            HashSet<Character> rows = new HashSet<Character>();\n            HashSet<Character> columns = new HashSet<Character>();\n            HashSet<Character> box = new HashSet<Character>();\n            for (int j = 0; j < board[0].length; j++){\n                if(board[i][j] != '.' && !rows.add(board[i][j])) {\n                    return false;\n                }\n                if(board[j][i]!='.' && !columns.add(board[j][i])) {\n                    return false;\n                }\n                int rowIndex = (i / 3) * 3;\n                int columnIndex = (i % 3) * 3;\n                if(board[rowIndex + j / 3][columnIndex + j % 3] != '.' && !box.add(board[rowIndex + j / 3][columnIndex + j % 3])) {\n                    return false;\n                }\n            }\n        }\n        return true;\n    }\n}\n",
    index: 507,
  },
  {
    title: "Word Break",
    category: "uber",
    id: "WordBreak_uber",
    algorithm:
      '// Given a non-empty string s and a dictionary wordDict containing a list of non-empty words, determine if s can be segmented into a space-separated sequence of one or more dictionary words. You may assume the dictionary does not contain duplicate words.\n\n// For example, given\n// s = "leetcode",\n// dict = ["leet", "code"].\n\n// Return true because "leetcode" can be segmented as "leet code".\n\npublic class WordBreak {\n    public boolean wordBreak(String s, Set<String> wordDict) {\n        boolean[] dp = new boolean[s.length() + 1];\n        dp[0] = true;\n        \n        for(int i = 1; i <= s.length(); i++) {\n            for(int j = 0; j < i; j++) {\n                if(dp[j] && wordDict.contains(s.substring(j, i))) {\n                    dp[i] = true;\n                    break;\n                }\n            }\n        }\n        \n        return dp[s.length()];\n    }\n}\n',
    index: 508,
  },
  { title: "Yahoo", category: "top-companies", id: "yahoo", index: 509 },
  {
    title: "Contains Duplicate",
    category: "yahoo",
    id: "ContainsDuplicate_yahoo",
    algorithm:
      "//Given an array of integers, find if the array contains any duplicates. Your function should return \n//true if any value appears at least twice in the array, and it should return false if every element is distinct.\n\nclass ContainsDuplicate {\n    public boolean containsDuplicate(int[] nums) {\n        HashMap<Integer, Integer> map = new HashMap<Integer, Integer>();\n        for(int i: nums) {\n            if(map.containsKey(i)) {\n                return true;\n            } else {\n                map.put(i, 1);\n            }\n        }\n        \n        return false;\n    }\n}\n\n",
    index: 510,
  },
  {
    title: "Linked List Cycle",
    category: "yahoo",
    id: "LinkedListCycle_yahoo",
    algorithm:
      "//Given a linked list, determine if it has a cycle in it.\n//Follow up:\n//Can you solve it without using extra space?\n/**\n * Definition for singly-linked list.\n * class ListNode {\n *     int val;\n *     ListNode next;\n *     ListNode(int x) {\n *         val = x;\n *         next = null;\n *     }\n * }\n */\npublic class Solution {\n    public boolean hasCycle(ListNode head) {\n        if(head == null || head.next == null) {\n            return false;\n        }\n        \n        ListNode slow = head;\n        ListNode fast = head.next;\n        while(fast != null && fast.next != null && fast != slow) {\n            slow = slow.next;\n            fast = fast.next.next;\n        }\n        \n        return fast == slow;\n    }\n}\n\n",
    index: 511,
  },
  { title: "Yelp", category: "top-companies", id: "yelp", index: 512 },
  {
    title: "Insert Delete Get Random O1",
    category: "yelp",
    id: "InsertDeleteGetRandomO1_yelp",
    algorithm:
      "//Design a data structure that supports all following operations in average O(1) time.\n\n//insert(val): Inserts an item val to the set if not already present.\n//remove(val): Removes an item val from the set if present.\n//getRandom: Returns a random element from current set of elements. Each element must have the same probability of being returned.\n\n//Example:\n// Init an empty set.\n//RandomizedSet randomSet = new RandomizedSet();\n\n// Inserts 1 to the set. Returns true as 1 was inserted successfully.\n//randomSet.insert(1);\n\n// Returns false as 2 does not exist in the set.\n//randomSet.remove(2);\n\n// Inserts 2 to the set, returns true. Set now contains [1,2].\n//randomSet.insert(2);\n\n// getRandom should return either 1 or 2 randomly.\n//randomSet.getRandom();\n\n// Removes 1 from the set, returns true. Set now contains [2].\n//randomSet.remove(1);\n\n// 2 was already in the set, so return false.\n//randomSet.insert(2);\n\n// Since 2 is the only number in the set, getRandom always return 2.\n//randomSet.getRandom();\n\nclass RandomizedSet {\n    HashMap<Integer, Integer> map;\n    ArrayList<Integer> values;\n\n    /** Initialize your data structure here. */\n    public RandomizedSet() {\n        map = new HashMap<Integer, Integer>();\n        values = new ArrayList<Integer>();\n    }\n    \n    /** Inserts a value to the set. Returns true if the set did not already contain the specified element. */\n    public boolean insert(int val) {\n        if(!map.containsKey(val)) {\n            map.put(val, val);\n            values.add(val);\n            return true;\n        }\n        else {\n            return false;\n        }\n    }\n    \n    /** Removes a value from the set. Returns true if the set contained the specified element. */\n    public boolean remove(int val) {\n        if(map.containsKey(val)) {\n            map.remove(val);\n            values.remove(values.indexOf(val));\n            return true;\n        }\n        return false;\n    }\n    \n    /** Get a random element from the set. */\n    public int getRandom() {\n        int random = (int)(Math.random() * values.size());\n        int valueToReturn = values.get(random);\n        return map.get(valueToReturn);\n    }\n}\n\n/**\n * Your RandomizedSet object will be instantiated and called as such:\n * RandomizedSet obj = new RandomizedSet();\n * boolean param_1 = obj.insert(val);\n * boolean param_2 = obj.remove(val);\n * int param_3 = obj.getRandom();\n */\n\n",
    index: 513,
  },
  {
    title: "Reverse Words In A String",
    category: "yelp",
    id: "ReverseWordsInAString_yelp",
    algorithm:
      '//Given an input string, reverse the string word by word.\n//For example,\n//Given s = "the sky is blue",\n//return "blue is sky the".\n\npublic class ReverseWordsInAString {\n    public String reverseWords(String s) {\n        String[] words = s.trim().split("\\\\s+");\n        String result = "";\n        for(int i = words.length - 1; i > 0; i--) {\n            result += words[i] + " ";\n        }\n        \n        return result + words[0];\n    }\n}\n\n',
    index: 514,
  },
  { title: "Uva", category: null, id: "uva", index: 515 },
  {
    title: "Adding Reversed Numbers",
    category: "uva",
    id: "AddingReversedNumbers_uva",
    algorithm:
      '/**\r\n * The Antique Comedians of Malidinesia prefer comedies to tragedies. Unfortunately, most of the ancient\r\n * plays are tragedies. Therefore the dramatic advisor of ACM has decided to transfigure some tragedies\r\n * into comedies. Obviously, this work is very hard because the basic sense of the play must be kept intact,\r\n * although all the things change to their opposites. For example the numbers: if any number appears in\r\n * the tragedy, it must be converted to its reversed form before being accepted into the comedy play.\r\n * Reversed number is a number written in arabic numerals but the order of digits is reversed. The\r\n * first digit becomes last and vice versa. For example, if the main hero had 1245 strawberries in the\r\n * tragedy, he has 5421 of them now. Note that all the leading zeros are omitted. That means if the\r\n * number ends with a zero, the zero is lost by reversing (e.g. 1200 gives 21). Also note that the reversed\r\n * number never has any trailing zeros.\r\n * ACM needs to calculate with reversed numbers. Your task is to add two reversed numbers and\r\n * output their reversed sum. Of course, the result is not unique because any particular number is a\r\n * reversed form of several numbers (e.g. 21 could be 12, 120 or 1200 before reversing). Thus we must\r\n * assume that no zeros were lost by reversing (e.g. assume that the original number was 12).\r\n * Input\r\n * The input consists of N cases. The first line of the input contains only positive integer N. Then follow\r\n * the cases. Each case consists of exactly one line with two positive integers separated by space. These\r\n * are the reversed numbers you are to add. Numbers will be at most 200 characters long.\r\n * Output\r\n * For each case, print exactly one line containing only one integer — the reversed sum of two reversed\r\n * numbers. Omit any leading zeros in the output.\r\n * Sample Input\r\n * 3\r\n * 24 1\r\n * 4358 754\r\n * 305 794\r\n * Sample Output\r\n * 34\r\n * 1998\r\n * 1\r\n */\r\n\r\n//https://uva.onlinejudge.org/index.php?option=com_onlinejudge&Itemid=8&page=show_problem&problem=654\r\n\r\nimport java.math.BigInteger;\r\nimport java.util.Scanner;\r\n\r\npublic class AddingReversedNumbers {\r\n\r\n\tpublic static void main(String[] args) {\r\n\t\tScanner input = new Scanner(System.in);\r\n\t\tint numberOfTestCases = input.nextInt();\r\n\t\twhile (numberOfTestCases != 0) {\r\n\t\t\tBigInteger first = input.nextBigInteger();\r\n\t\t\tBigInteger second = input.nextBigInteger();\r\n\t\t\tStringBuilder firstString = new StringBuilder(first + "");\r\n\t\t\tStringBuilder secondString = new StringBuilder(second + "");\r\n\t\t\tBigInteger firstReversed = new BigInteger(firstString.reverse()\r\n\t\t\t\t\t.toString());\r\n\t\t\tBigInteger secondReversed = new BigInteger(secondString.reverse()\r\n\t\t\t\t\t.toString());\r\n\t\t\tBigInteger result = firstReversed.add(secondReversed);\r\n\t\t\tString resultReversed = new StringBuilder(result + "").reverse()\r\n\t\t\t\t\t.toString();\r\n\t\t\tSystem.out.println(resultReversed.replaceFirst("^0*", ""));\r\n\t\t\tnumberOfTestCases--;\r\n\t\t}\r\n\t}\r\n}\r\n',
    index: 516,
  },
  {
    title: "Ants",
    category: "uva",
    id: "Ants_uva",
    algorithm:
      '// An army of ants walk on a horizontal pole of length l cm, each with a constant speed of 1 cm/s. When\n// a walking ant reaches an end of the pole, it immediatelly falls off it. When two ants meet they turn\n// back and start walking in opposite directions. We know the original positions of ants on the pole,\n// unfortunately, we do not know the directions in which the ants are walking. Your task is to compute\n// the earliest and the latest possible times needed for all ants to fall off the pole.\n\n// Input\n//     The first line of input contains one integer giving the number of cases that follow. The data for each\n//     case start with two integer numbers: the length of the pole (in cm) and n, the number of ants residing\n//     on the pole. These two numbers are followed by n integers giving the position of each ant on the pole\n//     as the distance measured from the left end of the pole, in no particular order. All input integers are\n//     not bigger than 1000000 and they are separated by whitespace.\n\n// Output\n//     For each case of input, output two numbers separated by a single space. The first number is the earliest\n//     possible time when all ants fall off the pole (if the directions of their walks are chosen appropriately)\n//     and the second number is the latest possible such time.\n\n// Sample Input\n// 2\n// 10 3\n// 2 6 7\n// 214 7\n// 11 12 7 13 176 23 191\n// Sample Output\n// 4 8\n// 38 207\n\nimport java.util.Scanner;\n\n/**\n * Created by kdn251 on 2/22/17.\n */\npublic class Ants {\n\n    public static void main(String args[]) throws Exception {\n\n        //initialize buffered reader\n        Scanner sc = new Scanner(System.in);\n\n        //initialize test cases\n        int testCases = sc.nextInt();\n\n        //declare current ant\n        int currentAnt;\n\n        while(testCases > 0) {\n\n            //initialize length of rod and number of ants\n            int length = sc.nextInt();\n            int numberOfAnts = sc.nextInt();\n\n            //initialize min and max to zero\n            int min = 0;\n            int max = 0;\n\n            //iterate while there are still remaining ants to process\n            while(numberOfAnts > 0) {\n\n                //read in current ant\n                currentAnt = sc.nextInt();\n\n                //calculate whether ant is closer to left side of rod or right side of rod\n                currentAnt = currentAnt < length - currentAnt ? currentAnt : length - currentAnt;\n\n                //update minimum time to most restrictive ant minimum time\n                if(currentAnt > min) {\n\n                    min = currentAnt;\n\n                }\n\n                //update maximum time to most restrictive ant maximum time\n                if(length - currentAnt > max) {\n\n                    max = length - currentAnt;\n\n                }\n\n                //decrement number of ants remaining\n                numberOfAnts--;\n\n            }\n\n            //print min and max of current test case\n            System.out.println(min + " " + max);\n\n            //decrement number of test cases remaining\n            testCases--;\n\n        }\n\n    }\n\n}\n\n//source: https://github.com/morris821028/UVa/blob/master/volume107/10714%20-%20Ants.cpp',
    index: 517,
  },
  {
    title: "Archaeologists Dilemma",
    category: "uva",
    id: "ArchaeologistsDilemma_uva",
    algorithm:
      '/**\r\n * An archeologist seeking proof of the presence of extraterrestrials in the Earth’s past, stumbles upon a\r\n * partially destroyed wall containing strange chains of numbers. The left-hand part of these lines of digits\r\n * is always intact, but unfortunately the right-hand one is often lost by erosion of the stone. However,\r\n * she notices that all the numbers with all its digits intact are powers of 2, so that the hypothesis that\r\n * all of them are powers of 2 is obvious. To reinforce her belief, she selects a list of numbers on which it\r\n * is apparent that the number of legible digits is strictly smaller than the number of lost ones, and asks\r\n * you to find the smallest power of 2 (if any) whose first digits coincide with those of the list.\r\n * Thus you must write a program such that given an integer, it determines (if it exists) the smallest\r\n * exponent E such that the first digits of 2\r\n * E coincide with the integer (remember that more than half of\r\n * the digits are missing).\r\n * Input\r\n * It is a set of lines with a positive integer N not bigger than 2147483648 in each of them.\r\n * Output\r\n * For every one of these integers a line containing the smallest positive integer E such that the first digits\r\n * of 2\r\n * E are precisely the digits of N, or, if there is no one, the sentence ‘no power of 2’.\r\n * Sample Input\r\n * 1\r\n * 2\r\n * 10\r\n * Sample Output\r\n * 7\r\n * 8\r\n * 20\r\n */\r\n\r\n//https://uva.onlinejudge.org/index.php?option=com_onlinejudge&Itemid=8&page=show_problem&problem=642\r\n\r\nimport java.io.IOException;\r\nimport java.util.Scanner;\r\n\r\npublic class ArchaeologistsDilemma {\r\n\r\n\tpublic static final boolean DEBUG = true;\r\n\tpublic static final boolean DEBUG_INPUT = true;\r\n\r\n\tfinal static double LOG2 = Math.log(2.0);\r\n\tfinal static double LOG2_10 = Math.log(10) / LOG2;\r\n\r\n\tpublic static void main(String[] args) {\r\n\t\tScanner input = new Scanner(System.in);\r\n\t\twhile (true) {\r\n\t\t\tlong N = input.nextLong();\r\n\t\t\tint k = (N + "").length() + 1;\r\n\r\n\t\t\tlong lowerBound = (long) ((Math.log(N) / LOG2) + k * LOG2_10);\r\n\t\t\tlong upperBound = (long) ((Math.log(N + 1) / LOG2) + k * LOG2_10);\r\n\r\n\t\t\twhile (lowerBound == upperBound) {\r\n\t\t\t\tk++;\r\n\t\t\t\tlowerBound = (long) ((Math.log(N) / LOG2) + k * LOG2_10);\r\n\t\t\t\tupperBound = (long) ((Math.log(N + 1) / LOG2) + k * LOG2_10);\r\n\t\t\t}\r\n\r\n\t\t\tSystem.out.println(upperBound);\r\n\t\t}\r\n\t}\r\n}\r\n',
    index: 518,
  },
  {
    title: "Average Speed",
    category: "uva",
    id: "AverageSpeed_uva",
    algorithm:
      '/**\r\n * You have bought a car in order to drive from Waterloo to a big city. The odometer on their car is\r\n * broken, so you cannot measure distance. But the speedometer and cruise control both work, so the car\r\n * can maintain a constant speed which can be adjusted from time to time in response to speed limits,\r\n * traffic jams, and border queues. You have a stopwatch and note the elapsed time every time the speed\r\n * changes. From time to time you wonder, “how far have I come?”. To solve this problem you must write\r\n * a program to run on your laptop computer in the passenger seat.\r\n * Input\r\n * Standard input contains several lines of input: Each speed change is indicated by a line specifying the\r\n * elapsed time since the beginning of the trip (hh:mm:ss), followed by the new speed in km/h. Each\r\n * query is indicated by a line containing the elapsed time. At the outset of the trip the car is stationary.\r\n * Elapsed times are given in non-decreasing order and there is at most one speed change at any given\r\n * time.\r\n * Output\r\n * For each query in standard input, you should print a line giving the time and the distance travelled, in\r\n * the format below.\r\n * Sample Input\r\n * 00:00:01 100\r\n * 00:15:01\r\n * 00:30:01\r\n * 01:00:01 50\r\n * 03:00:01\r\n * 03:00:05 140\r\n * Sample Output\r\n * 00:15:01 25.00 km\r\n * 00:30:01 50.00 km\r\n * 03:00:01 200.00 km\r\n */\r\n//https://uva.onlinejudge.org/index.php?option=com_onlinejudge&Itemid=8&page=show_problem&problem=1222\r\n\r\nimport java.text.DecimalFormat;\r\nimport java.util.Scanner;\r\n\r\npublic class AverageSpeed {\r\n\r\n\tpublic static void main(String[] args) {\r\n\t\tint speed = 0;\r\n\t\tboolean reachedTheEnd = false;\r\n\t\tScanner input = new Scanner(System.in);\r\n\t\tString nextLine = input.nextLine();\r\n\t\tdouble hour = 0;\r\n\t\tdouble baseHour = 0;\r\n\t\tdouble kilometersPassed = 0;\r\n\t\twhile (!reachedTheEnd) {\r\n\t\t\tString[] time1 = nextLine.split(" ");\r\n\t\t\tString[] time = nextLine.split(":");\r\n\t\t\tString[] extendedTime = new String[2];\r\n\t\t\tDecimalFormat formatter = new DecimalFormat("#0.00");\r\n\t\t\thour = calcHours(time1[0]);\r\n\t\t\tkilometersPassed += (hour - baseHour) * speed;\r\n\t\t\tif (time[2].contains(" ")) {\r\n\t\t\t\textendedTime = time[2].split(" ");\r\n\t\t\t\tspeed = Integer.valueOf(extendedTime[1]);\r\n\t\t\t} else {\r\n\t\t\t\tSystem.out.print(nextLine + " "\r\n\t\t\t\t\t\t+ formatter.format(kilometersPassed) + " km\\n");\r\n\t\t\t}\r\n\t\t\tbaseHour = hour;\r\n\t\t\tnextLine = input.nextLine();\r\n\t\t}\r\n\r\n\t}\r\n\r\n\tprivate static double calcHours(String s) {\r\n\t\tString[] arr = s.split(":");\r\n\t\treturn (Integer.parseInt(arr[0]) * 3600 + Integer.parseInt(arr[1]) * 60 + Integer\r\n\t\t\t\t.parseInt(arr[2])) * 1.0 / 3600;\r\n\t}\r\n}\r\n',
    index: 519,
  },
  {
    title: "Back To Intermediate Math",
    category: "uva",
    id: "BackToIntermediateMath_uva",
    algorithm:
      '/**\r\n * Umm! So, you claim yourself as an intelligent one? Let me check. As, computer science students always\r\n * insist on optimization whenever possible, I give you an elementary problem of math to optimize.\r\n * You are trying to cross a river of width d meters. You are given that, the river flows at v ms−1 and\r\n * you know that you can speed up the boat in u ms−1\r\n * . There may be two goals how to cross the river:\r\n * One goal (called fastest path) is to cross it in fastest time, and it does not matter how far the flow of\r\n * the river takes the boat. The other goal (called shortest path) is to steer the boat in a direction so that\r\n * the flow of the river doesn’t take the boat away, and the boat passes the river in a line perpendicular to\r\n * the boarder of the river. Is it always possible to have two different paths, one to pass at shortest time\r\n * and the other at shortest path? If possible then, what is the difference (Let P s) between the times\r\n * needed to cross the river in the different ways?\r\n * Input\r\n * The first line in the input file is an integer representing the number of test cases. Each of the test cases\r\n * follows below. Each case consists three real numbers (all are nonnegative, d is positive) denoting the\r\n * value of d, v and u respectively.\r\n * Output\r\n * For each test case, first print the serial number of the case, a colon, an space and then print ‘can’t\r\n * determine’ (without the quotes) if it is not possible to find different paths as stated above, else print\r\n * the value of P corrected to three digits after decimal point. Check the sample input & output.\r\n * Sample Input\r\n * 3\r\n * 8 5 6\r\n * 1 2 3\r\n * 1 5 6\r\n * Sample Output\r\n * Case 1: 1.079\r\n * Case 2: 0.114\r\n * Case 3: 0.135\r\n */\r\n\r\n//https://uva.onlinejudge.org/index.php?option=onlinejudge&Itemid=99999999&page=show_problem&category=&problem=1714\r\n\r\nimport java.text.DecimalFormat;\r\nimport java.util.Scanner;\r\n\r\npublic class BackToIntermediateMath {\r\n\r\n\tpublic static void main(String[] args) {\r\n\t\tScanner input = new Scanner(System.in);\r\n\t\tint numberOfTestCases = input.nextInt();\r\n\t\tDecimalFormat formatter = new DecimalFormat("#0.000");\r\n\t\tfor (int i = 0; i < numberOfTestCases; i++) {\r\n\t\t\tdouble distance = input.nextDouble();\r\n\t\t\tdouble riverSpeed = input.nextDouble();\r\n\t\t\tdouble boatSpeed = input.nextDouble();\r\n\t\t\tif (riverSpeed == 0 || boatSpeed == 0 || boatSpeed <= riverSpeed) {\r\n\t\t\t\tSystem.out.println("Case " + (i + 1) + ": can\'t determine");\r\n\t\t\t} else {\r\n\t\t\t\tdouble P1 = distance / boatSpeed;\r\n\t\t\t\tdouble P2 = distance\r\n\t\t\t\t\t\t/ Math.sqrt(boatSpeed * boatSpeed - riverSpeed\r\n\t\t\t\t\t\t\t\t* riverSpeed);\r\n\t\t\t\tSystem.out.print("Case " + (i + 1) + ": "\r\n\t\t\t\t\t\t+ formatter.format(Math.abs(P1 - P2)) + "\\n");\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n}\r\n',
    index: 520,
  },
  {
    title: "Basic Remains",
    category: "uva",
    id: "BasicRemains_uva",
    algorithm:
      "\n/**\n * Given a base b and two non-negative base b integers\n * p and m, compute p mod m and print the\n * result as a base-b integer. p mod m is defined\n * as the smallest non-negative integer k such that\n * p = a ∗ m + k for some integer a.\n * Input\n * Input consists of a number of cases. Each case is\n * represented by a line containing three unsigned\n * integers. The first, b, is a decimal number between\n * 2 and 10. The second, p, contains up to 1000 digits between 0 and b − 1. The third, m, contains\n * up to 9 digits between 0 and b − 1. The last case is followed by a line containing ‘0’.\n * Output\n * For each test case, print a line giving p mod m as a base-b integer.\n * Sample Input\n * 2 1100 101\n * 10 123456789123456789123456789 1000\n * 0\n * Sample Output\n * 10\n * 789\n *\n */\n\n//https://uva.onlinejudge.org/index.php?option=com_onlinejudge&Itemid=8&page=show_problem&problem=1492\n\nimport java.math.BigInteger;\nimport java.util.Scanner;\n\npublic class BasicRemains {\n\n\tpublic static void main(String[] args) {\n\t\tScanner input = new Scanner(System.in);\n\t\twhile (input.hasNext()) {\n\t\t\tint baseNumber = input.nextInt();\n\t\t\tif (baseNumber == 0) {\n\t\t\t\tbreak;\n\t\t\t}\n\t\t\tBigInteger p = new BigInteger(input.next(), baseNumber);\n\t\t\tBigInteger m = new BigInteger(input.next(), baseNumber);\n\t\t\tSystem.out.println((p.mod(m)).toString(baseNumber));\n\t\t}\n\t}\n}",
    index: 521,
  },
  {
    title: "Basically Speaking",
    category: "uva",
    id: "BasicallySpeaking_uva",
    algorithm:
      '/**\r\n * The Really Neato Calculator Company, Inc. has recently hired your team to help design their Super\r\n * Neato Model I calculator. As a computer scientist you suggested to the company that it would be neato\r\n * if this new calculator could convert among number bases. The company thought this was a stupendous\r\n * idea and has asked your team to come up with the prototype program for doing base conversion. The\r\n * project manager of the Super Neato Model I calculator has informed you that the calculator will have\r\n * the following neato features:\r\n * • It will have a 7-digit display.\r\n * • Its buttons will include the capital letters A through F in addition to the digits 0 through 9.\r\n * • It will support bases 2 through 16.\r\n * Input\r\n * The input for your prototype program will consist of one base conversion per line. There will be three\r\n * numbers per line. The first number will be the number in the base you are converting from. It may have\r\n * leading ‘0’s. The second number is the base you are converting from. The third number is the base you\r\n * are converting to. There will be one or more blanks surrounding (on either side of) the numbers. There\r\n * are several lines of input and your program should continue to read until the end of file is reached.\r\n * Output\r\n * The output will only be the converted number as it would appear on the display of the calculator.\r\n * The number should be right justified in the 7-digit display. If the number is to large to appear on the\r\n * display, then print ‘ERROR’ (without the quotes) right justified in the display.\r\n * Sample Input\r\n * 1111000 2 10\r\n * 1111000 2 16\r\n * 2102101 3 10\r\n * 2102101 3 15\r\n * 12312 4 2\r\n * 1A 15 2\r\n * ABCD 16 15\r\n * 03 13 10\r\n * Sample Output\r\n * 120\r\n * 78\r\n * 1765\r\n * 7CA\r\n * ERROR\r\n * 11001\r\n * D071\r\n * 3\r\n */\r\n\r\n//https://uva.onlinejudge.org/index.php?option=com_onlinejudge&Itemid=8&page=show_problem&category=&problem=325\r\n\r\nimport java.math.BigInteger;\r\nimport java.util.Scanner;\r\n\r\npublic class BasicallySpeaking {\r\n\r\n\tpublic static void main(String[] args) {\r\n\t\tScanner input = new Scanner(System.in);\r\n\t\twhile (input.hasNext()) {\r\n\t\t\tString numberAsString = input.next();\r\n\t\t\tint fromBase = input.nextInt();\r\n\t\t\tint toBase = input.nextInt();\r\n\t\t\tBigInteger number = new BigInteger(numberAsString, fromBase);\r\n\t\t\tString numberThatIsPrinted = number.toString(toBase);\r\n\t\t\tString answer = numberThatIsPrinted.toUpperCase();\r\n\t\t\tif (numberThatIsPrinted.length() > 7) {\r\n\t\t\t\tanswer = "ERROR";\r\n\t\t\t}\r\n\t\t\tSystem.out.printf("%7s\\n", answer);\r\n\t\t}\r\n\t}\r\n}\r\n',
    index: 522,
  },
  {
    title: "Big Mod",
    category: "uva",
    id: "BigMod_uva",
    algorithm:
      "/**\r\n * Calculate\r\n * R := B\r\n * P mod M\r\n * for large values of B, P, and M using an efficient algorithm. (That’s right, this problem has a time\r\n * dependency !!!.)\r\n * Input\r\n * The input will contain several test cases, each of them as described below. Consecutive test cases are\r\n * separated by a single blank line.\r\n * Three integer values (in the order B, P, M) will be read one number per line. B and P are integers\r\n * in the range 0 to 2147483647 inclusive. M is an integer in the range 1 to 46340 inclusive.\r\n * Output\r\n * For each test, the result of the computation. A single integer on a line by itself.\r\n * Sample Input\r\n * 3\r\n * 18132\r\n * 17\r\n * 17\r\n * 1765\r\n * 3\r\n * 2374859\r\n * 3029382\r\n * 36123\r\n * Sample Output\r\n * 13\r\n * 2\r\n * 13195\r\n */\r\n\r\n//https://uva.onlinejudge.org/index.php?option=com_onlinejudge&Itemid=8&category=727&page=show_problem&problem=310\r\n\r\nimport java.math.BigInteger;\r\nimport java.util.Scanner;\r\n\r\npublic class BigMod {\r\n\r\n\tpublic static void main(String[] args) {\r\n\t\tScanner input = new Scanner(System.in);\r\n\t\twhile (input.hasNext()) {\r\n\t\t\tBigInteger b = input.nextBigInteger();\r\n\t\t\tBigInteger p = input.nextBigInteger();\r\n\t\t\tBigInteger m = input.nextBigInteger();\r\n\t\t\tSystem.out.println(b.modPow(p, m));\r\n\t\t}\r\n\t}\r\n}\r\n",
    index: 523,
  },
  {
    title: "Brick Game",
    category: "uva",
    id: "BrickGame_uva",
    algorithm:
      '/**\r\n * There is a village in Bangladesh, where brick game is very popular. Brick game is a team game. Each\r\n * team consists of odd number of players. Number of players must be greater than 1 but cannot be\r\n * greater than 10. Age of each player must be within 11 and 20. No two players can have the same age.\r\n * There is a captain for each team. The communication gap between two players depends on their age\r\n * difference, i.e. the communication gap is larger if the age difference is larger. Hence they select the\r\n * captain of a team in such a way so that the number of players in the team who are younger than that\r\n * captain is equal to the number of players who are older than that captain.\r\n * Ages of all members of the team are provided. You have to determine the age of the captain.\r\n * Input\r\n * Input starts with an integer T (T ≤ 100), the number of test cases.\r\n * Each of the next T lines will start with an integer N (1 < N < 11), number of team members\r\n * followed by N space separated integers representing ages of all of the members of a team. Each of these\r\n * N integers will be between 11 and 20 (inclusive). Note that, ages will be given in strictly increasing\r\n * order or strictly decreasing order. We will not mention which one is increasing and which one is\r\n * decreasing, you have to be careful enough to handle both situations.\r\n * Output\r\n * For each test case, output one line in the format ‘Case x: a’ (quotes for clarity), where x is the case\r\n * number and a is the age of the captain.\r\n * Sample Input\r\n * 2\r\n * 5 19 17 16 14 12\r\n * 5 12 14 16 17 18\r\n * Sample Output\r\n * Case 1: 16\r\n * Case 2: 16\r\n */\r\n//https://uva.onlinejudge.org/index.php?option=com_onlinejudge&Itemid=8&page=show_problem&problem=2986\r\n\r\nimport static java.lang.Integer.parseInt;\r\n\r\nimport java.util.ArrayList;\r\nimport java.util.Collections;\r\nimport java.util.List;\r\nimport java.util.Scanner;\r\n\r\npublic class BrickGame {\r\n\r\n\tpublic static void main(String[] args) {\r\n\t\tScanner input = new Scanner(System.in);\r\n\t\tint numberOfTestCases = input.nextInt();\r\n\t\tint caseNum = 1;\r\n\t\twhile (numberOfTestCases != 0) {\r\n\t\t\tString[] numbersString = input.nextLine().split(" ");\r\n\t\t\tint numberOfMembers = parseInt(numbersString[0]);\r\n\t\t\tList<Integer> numbers = new ArrayList<Integer>();\r\n\t\t\tfor (int i = 0; i < numberOfMembers + 1; i++) {\r\n\t\t\t\tnumbers.add(parseInt(numbersString[i]));\r\n\t\t\t}\r\n\t\t\tCollections.sort(numbers);\r\n\t\t\tSystem.out.print("Case "\r\n\t\t\t\t\t+ caseNum\r\n\t\t\t\t\t+ ": "\r\n\t\t\t\t\t+ numbers.subList(1, numbers.size()).get(\r\n\t\t\t\t\t\t\tnumberOfMembers / 2) + "\\n");\r\n\t\t\tnumberOfTestCases--;\r\n\t\t\tcaseNum++;\r\n\t\t}\r\n\t}\r\n}\r\n',
    index: 524,
  },
  {
    title: "Coconuts Revisited",
    category: "uva",
    id: "CoconutsRevisited_uva",
    algorithm:
      '/**\r\n * The short story titled Coconuts, by Ben Ames Williams, appeared in the Saturday Evening Post on\r\n * October 9, 1926. The story tells about five men and a monkey who were shipwrecked on an island.\r\n * They spent the first night gathering coconuts. During the night, one man woke up and decided to take\r\n * his share of the coconuts. He divided them into five piles. One coconut was left over so he gave it to\r\n * the monkey, then hid his share and went back to sleep.\r\n * Soon a second man woke up and did the same thing. After dividing the coconuts into five piles,\r\n * one coconut was left over which he gave to the monkey. He then hid his share and went back to bed.\r\n * The third, fourth, and fifth man followed exactly the same procedure. The next morning, after they\r\n * all woke up, they divided the remaining coconuts into five equal shares. This time no coconuts were\r\n * left over.\r\n * An obvious question is “how many coconuts did they originally gather?” There are an infinite\r\n * number of answers, but the lowest of these is 3,121. But that’s not our problem here.\r\n * Suppose we turn the problem around. If we know the number of coconuts that were gathered, what\r\n * is the maximum number of persons (and one monkey) that could have been shipwrecked if the same\r\n * procedure could occur?\r\n * Input\r\n * The input will consist of a sequence of integers, each representing the number of coconuts gathered by\r\n * a group of persons (and a monkey) that were shipwrecked. The sequence will be followed by a negative\r\n * number.\r\n * Output\r\n * For each number of coconuts, determine the largest number of persons who could have participated in\r\n * the procedure described above. Display the results similar to the manner shown below, in the Sample\r\n * Output. There may be no solution for some of the input cases; if so, state that observation.\r\n * Sample Input\r\n * 25\r\n * 30\r\n * 3121\r\n * -1\r\n * Sample Output\r\n * 25 coconuts, 3 people and 1 monkey\r\n * 30 coconuts, no solution\r\n * 3121 coconuts, 5 people and 1 monkey\r\n */\r\n\r\n//https://uva.onlinejudge.org/index.php?option=com_onlinejudge&Itemid=8&page=show_problem&problem=557\r\n\r\nimport java.util.Scanner;\r\n\r\npublic class CoconutsRevisited {\r\n\r\n\tpublic static void main(String[] args) {\r\n\t\tScanner input = new Scanner(System.in);\r\n\t\tint i, rez, j;\r\n\t\tboolean isValid;\r\n\t\twhile (true) {\r\n\t\t\tisValid = false;\r\n\t\t\tint num = input.nextInt();\r\n\t\t\tif (num == -1) {\r\n\t\t\t\tbreak;\r\n\t\t\t}\r\n\t\t\tfor (i = (int) (Math.sqrt(num) + 1); i > 1; i--) {\r\n\t\t\t\trez = num;\r\n\t\t\t\tfor (j = 0; j < i && rez % i == 1; j++) {\r\n\t\t\t\t\trez = rez - rez / i - 1;\r\n\t\t\t\t}\r\n\t\t\t\tif (rez % i == 0 && i == j) {\r\n\t\t\t\t\tisValid = true;\r\n\t\t\t\t\tbreak;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t\tif (isValid) {\r\n\t\t\t\tSystem.out.println(num + " coconuts, " + i\r\n\t\t\t\t\t\t+ " people and 1 monkey");\r\n\t\t\t} else {\r\n\t\t\t\tSystem.out.println(num + " coconuts, no solution");\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t}\r\n}\r\n',
    index: 525,
  },
  {
    title: "Digit Counting",
    category: "uva",
    id: "DigitCounting_uva",
    algorithm:
      '/**\r\n * Trung is bored with his mathematics homeworks. He takes a piece of chalk and starts writing a sequence\r\n * of consecutive integers starting with 1 to N (1 < N < 10000). After that, he counts the number of\r\n * times each digit (0 to 9) appears in the sequence. For example, with N = 13, the sequence is:\r\n * 12345678910111213\r\n * In this sequence, 0 appears once, 1 appears 6 times, 2 appears 2 times, 3 appears 3 times, and each\r\n * digit from 4 to 9 appears once. After playing for a while, Trung gets bored again. He now wants to\r\n * write a program to do this for him. Your task is to help him with writing this program.\r\n * Input\r\n * The input file consists of several data sets. The first line of the input file contains the number of data\r\n * sets which is a positive integer and is not bigger than 20. The following lines describe the data sets.\r\n * For each test case, there is one single line containing the number N.\r\n * Output\r\n * For each test case, write sequentially in one line the number of digit 0, 1, . . . 9 separated by a space.\r\n * Sample Input\r\n * 2\r\n * 3\r\n * 13\r\n * Sample Output\r\n * 0 1 1 1 0 0 0 0 0 0\r\n * 1 6 2 2 1 1 1 1 1 1\r\n */\r\n\r\n//https://uva.onlinejudge.org/index.php?option=com_onlinejudge&Itemid=8&page=show_problem&problem=3666\r\n\r\nimport static java.lang.Integer.parseInt;\r\nimport static java.lang.System.exit;\r\nimport java.io.BufferedReader;\r\nimport java.io.IOException;\r\nimport java.io.InputStreamReader;\r\nimport java.io.OutputStreamWriter;\r\nimport java.io.PrintWriter;\r\nimport java.util.Scanner;\r\nimport java.util.StringTokenizer;\r\n\r\npublic class DigitCounting {\r\n\r\n\tpublic static void main(String[] args) {\r\n\t\tScanner input = new Scanner(System.in);\r\n\t\tint numberOfTestCases = input.nextInt();\r\n\t\twhile (numberOfTestCases != 0) {\r\n\t\t\tint[] numbers = new int[10];\r\n\t\t\tint number = input.nextInt();\r\n\t\t\tfor (int i = number; i > 0; i--) {\r\n\t\t\t\tint j = i;\r\n\t\t\t\twhile (j != 0) {\r\n\t\t\t\t\tnumbers[j % 10]++;\r\n\t\t\t\t\tj = j / 10;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t\tfor (int i = 0; i < 10; i++) {\r\n\t\t\t\tif (i != 0) {\r\n\t\t\t\t\tSystem.out.print(" ");\r\n\t\t\t\t}\r\n\t\t\t\tSystem.out.print(numbers[i]);\r\n\t\t\t}\r\n\t\t\tSystem.out.println();\r\n\t\t\tnumberOfTestCases--;\r\n\t\t}\r\n\t}\r\n}\r\n',
    index: 526,
  },
  {
    title: "Factorial Frequenices",
    category: "uva",
    id: "FactorialFrequenices_uva",
    algorithm:
      '/**\r\n * In an attempt to bolster her sagging palm-reading business, Madam Phoenix has decided to offer\r\n * several numerological treats to her customers. She has been able to convince them that the frequency\r\n * of occurrence of the digits in the decimal representation of factorials bear witness to their futures.\r\n * Unlike palm-reading, however, she can’t just conjure up these frequencies, so she has employed you to\r\n * determine these values.\r\n * (Recall that the definition of n! (that is, n factorial) is just 1 × 2 × 3 × · · · × n. As she expects to use\r\n * either the day of the week, the day of the month, or the day of the year as the value of n, you must be\r\n * able to determine the number of occurrences of each decimal digit in numbers as large as 366 factorial\r\n * (366!), which has 781 digits.\r\n * Madam Phoenix will be forever (or longer) in your debt; she might even give you a trip if you do\r\n * your job well!\r\n * Input\r\n * The input data for the program is simply a list of integers for which the digit counts are desired. All\r\n * of these input values will be less than or equal to 366 and greater than 0, except for the last integer,\r\n * which will be zero. Don’t bother to process this zero value; just stop your program at that point.\r\n * Output\r\n * The output format isn’t too critical, but you should make your program produce results that look\r\n * similar to those shown below.\r\n * Sample Input\r\n * 3\r\n * 8\r\n * 100\r\n * 0\r\n * Sample Output\r\n * 3! --\r\n * (0) 0 (1) 0 (2) 0 (3) 0 (4) 0\r\n * (5) 0 (6) 1 (7) 0 (8) 0 (9) 0\r\n * 8! --\r\n * (0) 2 (1) 0 (2) 1 (3) 1 (4) 1\r\n * (5) 0 (6) 0 (7) 0 (8) 0 (9) 0\r\n * 100! --\r\n * (0) 30 (1) 15 (2) 19 (3) 10 (4) 10\r\n * (5) 14 (6) 19 (7) 7 (8) 14 (9) 20\r\n */\r\n\r\n//https://uva.onlinejudge.org/index.php?option=onlinejudge&Itemid=99999999&page=show_problem&category=&problem=260\r\n\r\nimport java.math.BigInteger;\r\nimport java.util.Scanner;\r\n\r\npublic class FactorialFrequenices {\r\n\r\n\tpublic static void main(String[] args) {\r\n\t\tScanner input = new Scanner(System.in);\r\n\t\tint number = input.nextInt();\r\n\t\twhile (number != 0) {\r\n\t\t\tBigInteger product = BigInteger.ONE;\r\n\t\t\tfor (int i = 2; i < number + 1; i++) {\r\n\t\t\t\tproduct = product.multiply(BigInteger.valueOf(i));\r\n\t\t\t}\r\n\t\t\tint[] digitCounter = new int[10];\r\n\t\t\tBigInteger productValue = product;\r\n\t\t\twhile (!productValue.equals(BigInteger.ZERO)) {\r\n\r\n\t\t\t\tdigitCounter[Integer.valueOf(productValue.mod(BigInteger.TEN)\r\n\t\t\t\t\t\t.toString())]++;\r\n\t\t\t\tproductValue = productValue.divide(BigInteger.TEN);\r\n\t\t\t}\r\n\t\t\tformatOutput(number, digitCounter);\r\n\t\t\tnumber = input.nextInt();\r\n\t\t}\r\n\t}\r\n\r\n\tprivate static void formatOutput(int number, int[] digits) {\r\n\t\tSystem.out.println(number + "! --");\r\n\t\tfor (int i = 0; i < 10; i++) {\r\n\t\t\tif (i != 0 || i != 9 || i != 4)\r\n\t\t\t\tSystem.out.printf("   ");\r\n\t\t\tSystem.out.printf("(%d)%5d", i, digits[i]);\r\n\t\t\tif (i == 4 || i == 9)\r\n\t\t\t\tSystem.out.printf("\\n");\r\n\t\t}\r\n\t}\r\n\r\n}\r\n',
    index: 527,
  },
  {
    title: "Five Hundred Factorial",
    category: "uva",
    id: "FiveHundredFactorial_uva",
    algorithm:
      '/**\r\n * In these days you can more and more often happen to see programs which perform some useful calculations\r\n * being executed rather then trivial screen savers. Some of them check the system message queue\r\n * and in case of finding it empty (for examples somebody is editing a file and stays idle for some time)\r\n * execute its own algorithm.\r\n * As an examples we can give programs which calculate primary numbers.\r\n * One can also imagine a program which calculates a factorial of given numbers. In this case it is not\r\n * the time complexity of order O(n) which makes troubles, but the memory requirements. Considering\r\n * the fact that 500! gives 1135-digit number. No standard, neither integer nor floating, data type is\r\n * applicable here.\r\n * Your task is to write a programs which calculates a factorial of a given number.\r\n * Input\r\n * Any number of lines, each containing value n for which you should provide value of n!\r\n * Output\r\n * 2 lines for each input case. First should contain value n followed by character ‘!’. The second should\r\n * contain calculated value n!.\r\n * Assumptions:\r\n * • Value of a number n which factorial should be calculated of does not exceed 1000 (although 500!\r\n * is the name of the problem, 500 is a small limit).\r\n * • Mind that visually big number of case 4 is broken after 80 characters, but this is not the case in\r\n * the real output file.\r\n * Sample Input\r\n * 10\r\n * 30\r\n * 50\r\n * 100\r\n * Sample Output\r\n * 10!\r\n * 3628800\r\n * 30!\r\n * 265252859812191058636308480000000\r\n * 50!\r\n * 30414093201713378043612608166064768844377641568960512000000000000\r\n * 100!\r\n * 93326215443944152681699238856266700490715968264381621468592963895217599993229915\r\n * 608941463976156518286253697920827223758251185210916864000000000000000000000000\r\n */\r\n\r\n//https://uva.onlinejudge.org/index.php?option=onlinejudge&Itemid=99999999&page=show_problem&category=&problem=564\r\n\r\nimport java.math.BigInteger;\r\nimport java.util.Scanner;\r\n\r\npublic class FiveHundredFactorial {\r\n\r\n\tpublic static void main(String[] args) {\r\n\t\tScanner input = new Scanner(System.in);\r\n\t\twhile (input.hasNext()) {\r\n\t\t\tint number = input.nextInt();\r\n\t\t\tBigInteger product = BigInteger.ONE;\r\n\t\t\tfor (int i = 2; i < number + 1; i++) {\r\n\t\t\t\tproduct = product.multiply(BigInteger.valueOf(i));\r\n\t\t\t}\r\n\t\t\tSystem.out.println(number + "!\\n" + product);\r\n\t\t}\r\n\t}\r\n}\r\n',
    index: 528,
  },
  {
    title: "Friends",
    category: "uva",
    id: "Friends_uva",
    algorithm:
      '// There is a town with N citizens. It is known that some pairs of people are friends. According to the\n// famous saying that “The friends of my friends are my friends, too” it follows that if A and B are friends\n// and B and C are friends then A and C are friends, too.\n// Your task is to count how many people there are in the largest group of friends.\n\n// Input\n//     Input consists of several datasets. The first line of the input consists of a line with the number of test\n//     cases to follow.\n//     The first line of each dataset contains tho numbers N and M, where N is the number of town’s\n//     citizens (1 ≤ N ≤ 30000) and M is the number of pairs of people (0 ≤ M ≤ 500000), which are known\n//     to be friends. Each of the following M lines consists of two integers A and B (1 ≤ A ≤ N, 1 ≤ B ≤ N,\n//     A ̸= B) which describe that A and B are friends. There could be repetitions among the given pairs\n\n// Output\n//     The output for each test case should contain (on a line by itself) one number denoting how many people\n//     there are in the largest group of friends on a line by itself.\n\n// Sample Input\n// 2\n// 3 2\n// 1 2\n// 2 3\n// 10 12\n// 1 2\n// 3 1\n// 3 4\n// 5 4\n// 3 5\n// 4 6\n// 5 2\n// 2 1\n// 7 1\n// 1 2\n// 9 10\n// 8 9\n// Sample Output\n// 3\n// 7\n\nimport java.io.*;\nimport java.util.*;\n\n/**\n * Created by kdn251 on 2/15/17.\n */\n\npublic class Friends {\n\n    //initialize globals to track each individual person and their relationships\n    public static int[] people = new int[30001];\n    public static int[] relationships = new int[50001];\n\n    public static void main(String args[]) throws Exception {\n\n        //initialize buffered reader\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        String line = br.readLine();\n\n        //store number of test cases\n        int testCases = Integer.parseInt(line);\n\n        for(int i = 0; i < testCases; i++) {\n\n            //determine number of people and pairs of people (N and M)\n            String[] info = br.readLine().split(" ");\n            int numberOfPeople = Integer.parseInt(info[0]);\n            int numberOfRelationship = Integer.parseInt(info[1]);\n\n            startUnion(numberOfPeople, people, relationships);\n\n            //iterate through all relationships\n            for(int j = 0; j < numberOfRelationship ; j++) {\n\n                //split current line to determine person and friend\n                String[] currentLine = br.readLine().split(" ");\n                int person = Integer.parseInt(currentLine[0]);\n                int friend = Integer.parseInt(currentLine[1]);\n                union(person, friend);\n\n            }\n\n            //initialize maxGroup to one because each group has one person initially\n            int maxGroup = 1;\n\n            //iterate through relationships to find the largest group\n            for(int j = 0; j <= numberOfPeople; j++) {\n\n                //update max as needed\n                maxGroup = relationships[j] > maxGroup ? relationships[j] : maxGroup;\n\n            }\n\n            //print result\n            System.out.println(maxGroup);\n\n        }\n\n    }\n\n    public static void startUnion(int numberOfPeople, int[] people, int[] relationships) {\n\n        for(int i = 0; i <= numberOfPeople; i++) {\n\n            //initialize each individual person\n            people[i] = i;\n\n            //each person initially has a group of one (themselves)\n            relationships[i] = 1;\n\n        }\n\n    }\n\n    public static void union(int person, int friend) {\n\n        //find parents in tree\n        person = find(person);\n        friend = find(friend);\n\n        if(person != friend) {\n\n            //add connection between person and friend\n            join(person, friend);\n\n        }\n\n    }\n\n    public static int find(int person) {\n\n        //traverse parents of tree if possible\n        if(people[person] != person) {\n\n            people[person] = find(people[person]);\n\n        }\n\n        return people[person];\n\n    }\n\n    public static void join(int person, int friend) {\n\n        //find larger group of the two and make sure both person and friend point to it\n        if(relationships[person] > relationships[friend]) {\n\n            relationships[person] += relationships[friend];\n            people[friend] = person;\n\n        }\n\n        else {\n\n            relationships[friend] += relationships[person];\n            people[person] = friend;\n\n        }\n\n    }\n\n}\n\n//source: https://github.com/morris821028/UVa/blob/master/volume106/10608%20-%20Friends.cpp#L27\n\n\n\n',
    index: 529,
  },
  {
    title: "Goldbach Conjecture",
    category: "uva",
    id: "GoldbachConjecture_uva",
    algorithm:
      '/**\r\n * In 1742, Christian Goldbach, a German amateur mathematician, sent a letter to Leonhard Euler in\r\n * which he made the following conjecture:\r\n * Every number greater than 2 can be written as the sum of three prime numbers.\r\n * Goldbach was considering 1 as a primer number, a convention that is no longer followed. Later on,\r\n * Euler re-expressed the conjecture as:\r\n * Every even number greater than or equal to 4 can be expressed as the sum of two prime\r\n * numbers.\r\n * For example:\r\n * • 8 = 3 + 5. Both 3 and 5 are odd prime numbers.\r\n * • 20 = 3 + 17 = 7 + 13.\r\n * • 42 = 5 + 37 = 11 + 31 = 13 + 29 = 19 + 23.\r\n * Today it is still unproven whether the conjecture is right. (Oh wait, I have the proof of course, but\r\n * it is too long to write it on the margin of this page.)\r\n * Anyway, your task is now to verify Goldbach’s conjecture as expressed by Euler for all even numbers\r\n * less than a million.\r\n * Input\r\n * The input file will contain one or more test cases.\r\n * Each test case consists of one even integer n with 6 ≤ n < 1000000.\r\n * Input will be terminated by a value of 0 for n.\r\n * Output\r\n * For each test case, print one line of the form n = a + b, where a and b are odd primes. Numbers and\r\n * operators should be separated by exactly one blank like in the sample output below. If there is more\r\n * than one pair of odd primes adding up to n, choose the pair where the difference b − a is maximized.\r\n * If there is no such pair, print a line saying ‘Goldbach\'s conjecture is wrong.’\r\n * Sample Input\r\n * 8\r\n * 20\r\n * 42\r\n * 0\r\n * Sample Output\r\n * 8 = 3 + 5\r\n * 20 = 3 + 17\r\n * 42 = 5 + 37\r\n */\r\n//https://uva.onlinejudge.org/index.php?option=com_onlinejudge&Itemid=8&page=show_problem&problem=484\r\n\r\nimport java.util.Scanner;\r\n\r\npublic class GoldbachConjecture {\r\n\r\n\tpublic static void main(String[] args) {\r\n\t\tScanner input = new Scanner(System.in);\r\n\t\tboolean[] isPrime = sieveOfEratosthenes(1000000);\r\n\t\tint number = input.nextInt();\r\n\t\twhile (number != 0) {\r\n\t\t\tboolean found = false;\r\n\t\t\tfor (int i = 3; i < number && !found; i++) {\r\n\t\t\t\tif (isPrime[i]) {\r\n\t\t\t\t\tint currentPrime = i;\r\n\t\t\t\t\tint j = number - currentPrime;\r\n\t\t\t\t\tif (isPrime[j]) {\r\n\t\t\t\t\t\tSystem.out.println(number + " = " + currentPrime\r\n\t\t\t\t\t\t\t\t+ " + " + j);\r\n\t\t\t\t\t\tfound = true;\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t\tif (!found) {\r\n\t\t\t\tSystem.out.println("Goldbach\'s conjecture is wrong.");\r\n\t\t\t}\r\n\t\t\tnumber = input.nextInt();\r\n\t\t}\r\n\t}\r\n\r\n\tprivate static boolean[] sieveOfEratosthenes(int number) {\r\n\t\tboolean[] isPrime = new boolean[number + 1];\r\n\t\tfor (int i = 2; i < number + 1; i++) {\r\n\t\t\tisPrime[i] = true;\r\n\t\t}\r\n\r\n\t\tfor (int factor = 2; factor * factor <= number; factor++) {\r\n\t\t\tif (isPrime[factor]) {\r\n\t\t\t\tfor (int j = factor; factor * j <= number; j++) {\r\n\t\t\t\t\tisPrime[factor * j] = false;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t}\r\n\t\treturn isPrime;\r\n\t}\r\n}\r\n',
    index: 530,
  },
  {
    title: "Google Is Feeling Lucky",
    category: "uva",
    id: "GoogleIsFeelingLucky_uva",
    algorithm:
      '// Google is one of the most famous Internet search engines which hosts and develops a number of Internetbased\n// services and products. On its search engine website, an interesting button ‘I’m feeling lucky’\n// attracts our eyes. This feature could allow the user skip the search result page and goes directly to the\n// first ranked page. Amazing! It saves a lot of time.\n// The question is, when one types some keywords and presses ‘I’m feeling lucky’ button, which web\n// page will appear? Google does a lot and comes up with excellent approaches to deal with it. In this\n// simplified problem, let us just consider that Google assigns every web page an integer-valued relevance.\n// The most related page will be chosen. If there is a tie, all the pages with the highest relevance are\n// possible to be chosen.\n// Your task is simple, given 10 web pages and their relevance. Just pick out all the possible candidates\n// which will be served to the user when ‘I’m feeling lucky’.\n\n// Input\n// \tThe input contains multiple test cases. The number of test cases T is in the first line of the input file.\n// \tFor each test case, there are 10 lines, describing the web page and the relevance. Each line contains\n// \ta character string without any blank characters denoting the URL of this web page and an integer\n// \tVi denoting the relevance of this web page. The length of the URL is between 1 and 100 inclusively.\n// \t(1 ≤ Vi ≤ 100)\n\n// Output\n\t// For each test case, output several lines which are the URLs of the web pages which are possible to be\n\t// chosen. The order of the URLs is the same as the input. Please look at the sample output for further\n\t// information of output format.\n\n// Sample Input\n// 2\n// www.youtube.com 1\n// www.google.com 2\n// www.google.com.hk 3\n// www.alibaba.com 10\n// www.taobao.com 5\n// www.bad.com 10\n// www.good.com 7\n// www.fudan.edu.cn 8\n// www.university.edu.cn 9\n// acm.university.edu.cn 10\n// www.youtube.com 1\n// www.google.com 2\n// www.google.com.hk 3\n// www.alibaba.com 11\n// www.taobao.com 5\n// www.bad.com 10\n// www.good.com 7\n// www.fudan.edu.cn 8\n// acm.university.edu.cn 9\n// acm.university.edu.cn 10\n// Sample Output\n// Case #1:\n// www.alibaba.com\n// www.bad.com\n// acm.university.edu.cn\n// Case #2:\n// www.alibaba.com\n\n/**\n * Created by kdn251 on 1/30/17.\n */\n\nimport java.util.*;\n\npublic class GoogleIsFeelingLucky {\n\n    public static void main(String args[]) {\n\n        HashMap<Integer, List<String>> map = new HashMap<Integer, List<String>>();\n\n        Scanner sc = new Scanner(System.in);\n\n        int testCases = sc.nextInt();\n        int max = Integer.MIN_VALUE;\n        int caseCount = 1;\n\n        for(int i = 0; i < testCases * 10; i++) {\n\n            String website = sc.next();\n            int relevance = sc.nextInt();\n\n            if(i % 10 == 0 && i != 0) {\n\n                List<String> allCandidates = map.get(max);\n                System.out.println("Case #" + caseCount + ":");\n                caseCount++;\n\n                for(String s : allCandidates) {\n\n                    System.out.println(s);\n\n                }\n\n                map = new HashMap<Integer, List<String>>();\n                max = Integer.MIN_VALUE;\n\n            }\n\n            if(map.containsKey(relevance)) {\n\n                map.get(relevance).add(website);\n\n            }\n\n            if(!map.containsKey(relevance)) {\n\n                List<String> list = new ArrayList<String>();\n                map.put(relevance, list);\n                map.get(relevance).add(website);\n\n            }\n\n            if(relevance > max) {\n\n                max = relevance;\n\n            }\n\n        }\n\n        System.out.println("Case #" + caseCount + ":");\n\n        for(String s : map.get(max)) {\n\n            System.out.println(s);\n\n        }\n\n    }\n\n}\n',
    index: 531,
  },
  {
    title: "Hashmat Warriors",
    category: "uva",
    id: "HashmatWarriors_uva",
    algorithm:
      '/**\r\n * Hashmat is a brave warrior who with his group of young soldiers moves from one place to another to\r\n * fight against his opponents. Before Fighting he just calculates one thing, the difference between his\r\n * soldier number and the opponent’s soldier number. From this difference he decides whether to fight or\r\n * not. Hashmat’s soldier number is never greater than his opponent.\r\n * Input\r\n * The input contains two numbers in every line. These two numbers in each line denotes the number\r\n * soldiers in Hashmat’s army and his opponent’s army or vice versa. The input numbers are not greater\r\n * than 232. Input is terminated by ‘End of File’.\r\n * Output\r\n * For each line of input, print the difference of number of soldiers between Hashmat’s army and his\r\n * opponent’s army. Each output should be in seperate line.\r\n * Sample Input\r\n * 10 12\r\n * 10 14\r\n * 100 200\r\n * Sample Output\r\n * 2\r\n * 4\r\n * 100\r\n */\r\n\r\n//https://uva.onlinejudge.org/index.php?option=com_onlinejudge&Itemid=8&page=show_problem&problem=996\r\n\r\nimport java.util.Scanner;\r\n\r\npublic class HashmatWarriors {\r\n\r\n\tpublic static void main(String[] args) {\r\n\t\tScanner input = new Scanner(System.in);\r\n\t\tString nextLine = input.nextLine();\r\n\t\twhile (!"".equals(nextLine)) {\r\n\t\t\tString[] nums = nextLine.split(" ");\r\n\t\t\tlong firstNum = Long.valueOf(nums[0]);\r\n\t\t\tlong secondNum = Long.valueOf(nums[1]);\r\n\t\t\tSystem.out.println(Math.abs(secondNum - firstNum));\r\n\t\t\tnextLine = input.nextLine();\r\n\t\t}\r\n\t}\r\n}\r\n',
    index: 532,
  },
  {
    title: "High Precision Number",
    category: "uva",
    id: "HighPrecisionNumber_uva",
    algorithm:
      '\r\n/**\r\n * A number with 30 decimal digits of precision can be represented by a structure type as shown in the\r\n * examples below. It includes a 30-element integer array (digits), a single integer (decpt) to represent\r\n * the position of the decimal point and an integer (or character) to represent the sign (+/-).\r\n * Your task is to write a program to calculate the sum of high-precision numbers.\r\n * Input\r\n * The first line contains a positive integer n (1 ≤ n ≤ 100) indicating the number of groups of highprecision\r\n * numbers (maximum 30 significant digits). Each group includes high-precision numbers (one\r\n * number in a line) and a line with only 0 indicating the end of each group. A group can contain 100\r\n * numbers at most.\r\n * Output\r\n * For each group, print out the sum of high-precision numbers (one value in a line). All zeros after the\r\n * decimal point located behind the last non-zero digit must be discarded\r\n * \r\n * Sample Input\r\n * 4\r\n * 4.12345678900000000005\r\n * -0.00000000012\r\n * 0\r\n * -1300.1\r\n * 1300.123456789\r\n * 0.0000000012345678912345\r\n * 0\r\n * 1500.61345975\r\n * -202.004285\r\n * -8.60917475\r\n * 0\r\n * -218.302869584\r\n * 200.0000123456789\r\n * 0\r\n * \r\n * Sample Output\r\n * 4.12345678888000000005\r\n * 0.0234567902345678912345\r\n * 1290\r\n * -18.3028572383211\r\n */\r\n\r\n//https://uva.onlinejudge.org/index.php?option=com_onlinejudge&Itemid=8&page=show_problem&problem=2921\r\n\r\n\r\nimport java.math.BigDecimal;\r\nimport java.util.Scanner;\r\n\r\npublic class HighPrecisionNumber {\r\n\r\n\tpublic static void main(String[] args) {\r\n\t\tScanner input = new Scanner(System.in);\r\n\t\tint numberOfGroups = input.nextInt();\r\n\t\twhile (numberOfGroups != 0) {\r\n\t\t\tBigDecimal sum = BigDecimal.ZERO;\r\n\t\t\tBigDecimal number = input.nextBigDecimal();\r\n\t\t\twhile (!number.equals(BigDecimal.ZERO)) {\r\n\t\t\t\tsum = sum.add(number);\r\n\t\t\t\tnumber = input.nextBigDecimal();\r\n\t\t\t}\r\n\t\t\tSystem.out.println(sum.toPlainString().replaceFirst(\r\n\t\t\t\t\t"\\\\.0*$|(\\\\.\\\\d*?)0+$", "$1"));\r\n\t\t\tnumberOfGroups--;\r\n\t\t}\r\n\t}\r\n}\r\n',
    index: 533,
  },
  {
    title: "High School Physics",
    category: "uva",
    id: "HighSchoolPhysics_uva",
    algorithm:
      '/**\n * A particle has initial velocity and acceleration. If its velocity after certain time is v then what will its\n * displacement be in twice of that time?\n * Input\n * The input will contain two integers in each line. Each line makes one set of input. These two integers\n * denote the value of v (−100 ≤ v ≤ 100) and t (0 ≤ t ≤ 200) (t means at the time the particle gains\n * that velocity)\n * Output\n * For each line of input print a single integer in one line denoting the displacement in double of that time.\n * Sample Input\n * 0 0\n * 5 12\n * Sample Output\n * 0\n * 120\n */\n\n//https://uva.onlinejudge.org/index.php?option=com_onlinejudge&Itemid=8&page=show_problem&problem=1012\n\nimport java.util.Scanner;\n\npublic class HighSchoolPhysics {\n\n\tpublic static void main(String[] args) {\n\t\tScanner input = new Scanner(System.in);\n\t\tString line = input.nextLine();\n\t\twhile (!"".equals(line)) {\n\t\t\tString[] numbers = line.split(" ");\n\t\t\tint v = Integer.valueOf(numbers[0]);\n\t\t\tint t = Integer.valueOf(numbers[1]) * 2;\n\t\t\tSystem.out.println(v * t);\n\t\t\tline = input.nextLine();\n\t\t}\n\t}\n}\n',
    index: 534,
  },
  {
    title: "I Can Guess The Data Structure",
    category: "uva",
    id: "ICanGuessTheDataStructure_uva",
    algorithm:
      '// There is a bag-like data structure, supporting two operations:\n// \t1 x Throw an element x into the bag.\n// \t2 Take out an element from the bag.\n// Given a sequence of operations with return values, you’re going to guess the data structure. It is\n// a stack (Last-In, First-Out), a queue (First-In, First-Out), a priority-queue (Always take out larger\n// elements first) or something else that you can hardly imagine!\n\n// Input:\n// \tThere are several test cases. Each test case begins with a line containing a single integer n (1 ≤ n ≤\n// \t1000). Each of the next n lines is either a type-1 command, or an integer 2 followed by an integer x.\n// \tThat means after executing a type-2 command, we get an element x without error. The value of x\n// \tis always a positive integer not larger than 100. The input is terminated by end-of-file (EOF).\n\n// Output:\n// \tFor each test case, output one of the following:\n\t// \tstack It’s definitely a stack.\n\t// \tqueue It’s definitely a queue.\n\t// \tpriority queue It’s definitely a priority queue.\n\t// \timpossible It can’t be a stack, a queue or a priority queue.\n\t// \tnot sure It can be more than one of the three data structures mentioned\n\t// \tabove.\n\n// Sample Input\n// 6\n// 1 1\n// 1 2\n// 1 3\n// 2 1\n// 2 2\n// 2 3\n// 6\n// 1 1\n// 1 2\n// 1 3\n// 2 3\n// 2 2\n// 2 1\n// 2\n// 1 1\n// 2 2\n// 4\n// 1 2\n// 1 1\n// 2 1\n// 2 2\n// 7\n// 1 2\n// 1 5\n// 1 1\n// 1 3\n// 2 5\n// 1 4\n// 2 4\n\n// Sample Output\n// queue\n// not sure\n// impossible\n// stack\n// priority queue\n\n/**\n * Created by kdn251 on 2/10/17.\n */\n\nimport java.util.*;\nimport java.io.*;\n\npublic class ICanGuessTheDataStructure {\n\n    public static void main(String args[]) throws Exception {\n\n        //initialize data structures\n        Stack<Integer> stack = new Stack<Integer>();\n        Queue<Integer> queue = new LinkedList<Integer>();\n        //initialize max priority queue\n        PriorityQueue<Integer> priorityQueue = new PriorityQueue<Integer>(Collections.reverseOrder());\n\n        //initialize buffered reader\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        String line;\n\n        //iterate through all test cases\n        while ((line = br.readLine()) != null) {\n\n            //initialize removals for each data structure\n            int stackRemovals = 0;\n            int queueRemovals = 0;\n            int priorityQueueRemovals = 0;\n            int totalRemovals = 0;\n\n            //get number of test cases\n            int numberOfCases = Integer.parseInt(line);\n\n            //clear contents of data structures\n            queue.clear();\n            priorityQueue.clear();\n            stack.clear();\n\n            //iterate over all test cases\n            for (int i = 0; i < numberOfCases; i++) {\n\n                String[] currentLineSplit = br.readLine().split(" ");\n                int command = Integer.parseInt(currentLineSplit[0]);\n                int number = Integer.parseInt(currentLineSplit[1]);\n\n                //if command is 1, push number into all data structures\n                if (command == 1) {\n\n                    stack.push(number);\n                    queue.add(number);\n                    priorityQueue.add(number);\n\n                } else {\n\n                    //check which data structure to remove from and increment its removal count\n                    if (!stack.isEmpty() && stack.peek() == number && stackRemovals == totalRemovals) {\n\n                        stackRemovals++;\n                        stack.pop();\n\n                    }\n\n                    if (!queue.isEmpty() && queue.peek() == number && queueRemovals == totalRemovals) {\n\n                        queueRemovals++;\n                        queue.remove();\n\n                    }\n\n                    if (!priorityQueue.isEmpty() && priorityQueue.peek() == number && priorityQueueRemovals == totalRemovals) {\n\n                        priorityQueueRemovals++;\n                        priorityQueue.remove();\n\n                    }\n\n                    totalRemovals++;\n\n\n                }\n\n            }\n\n            //check all removal counts for each data structure vs. total removal count and print the appropriate data structure\n            if ((stackRemovals == totalRemovals && queueRemovals == totalRemovals) || (stackRemovals == totalRemovals && stackRemovals == priorityQueueRemovals) || (queueRemovals == totalRemovals && priorityQueueRemovals == totalRemovals)) {\n\n                System.out.println("not sure");\n\n            } else if (stackRemovals == totalRemovals) {\n\n                System.out.println("stack");\n\n            } else if (queueRemovals == totalRemovals) {\n\n                System.out.println("queue");\n\n            } else if (priorityQueueRemovals == totalRemovals) {\n\n                System.out.println("priority queue");\n\n            } else {\n\n                System.out.println("impossible");\n\n            }\n\n        }\n\n\n    }\n\n}\n',
    index: 535,
  },
  {
    title: "Integer Inquiry",
    category: "uva",
    id: "IntegerInquiry_uva",
    algorithm:
      "/**\r\n * One of the first users of BIT’s new supercomputer was Chip Diller. He extended his exploration of\r\n * powers of 3 to go from 0 to 333 and he explored taking various sums of those numbers.\r\n * “This supercomputer is great,” remarked Chip. “I only wish Timothy were here to see these results.”\r\n * (Chip moved to a new apartment, once one became available on the third floor of the Lemon Sky\r\n * apartments on Third Street.)\r\n * Input\r\n * The input will consist of at most 100 lines of text, each of which contains a single VeryLongInteger.\r\n * Each VeryLongInteger will be 100 or fewer characters in length, and will only contain digits (no\r\n * VeryLongInteger will be negative).\r\n * The final input line will contain a single zero on a line by itself.\r\n * Output\r\n * Your program should output the sum of the VeryLongIntegers given in the input.\r\n * Sample Input\r\n * 123456789012345678901234567890\r\n * 123456789012345678901234567890\r\n * 123456789012345678901234567890\r\n * 0\r\n * Sample Output\r\n * 370370367037037036703703703670\r\n */\r\n\r\n\r\n//https://uva.onlinejudge.org/index.php?option=com_onlinejudge&Itemid=8&page=show_problem&category=&problem=365\r\n\r\nimport java.math.BigInteger;\r\nimport java.util.Scanner;\r\n\r\npublic class IntegerInquiry {\r\n\r\n\tpublic static void main(String[] args) {\r\n\t\tScanner input = new Scanner(System.in);\r\n\t\tBigInteger sum = BigInteger.ZERO;\r\n\t\twhile (true) {\r\n\t\t\tBigInteger number = input.nextBigInteger();\r\n\t\t\tif (number.equals(BigInteger.ZERO)) {\r\n\t\t\t\tbreak;\r\n\t\t\t}\r\n\t\t\tsum = sum.add(number);\r\n\t\t}\r\n\t\tSystem.out.println(sum);\r\n\t}\r\n}\r\n",
    index: 536,
  },
  {
    title: "Jolly Jumpers",
    category: "uva",
    id: "JollyJumpers_uva",
    algorithm:
      '\n/** \n * A sequence of n > 0 integers is called a jolly jumper if the absolute values of the difference between\n * successive elements take on all the values 1 through n − 1. For instance,\n * 1 4 2 3\n * is a jolly jumper, because the absolutes differences are 3, 2, and 1 respectively. The definition implies\n * that any sequence of a single integer is a jolly jumper. You are to write a program to determine whether\n * or not each of a number of sequences is a jolly jumper.\n * Input\n * Each line of input contains an integer n ≤ 3000 followed by n integers representing the sequence.\n * Output\n * For each line of input, generate a line of output saying ‘Jolly’ or ‘Not jolly’.\n * Sample Input\n * 4 1 4 2 3\n * 5 1 4 2 -1 6\n * Sample Output\n * Jolly\n * Not jolly\n */\n\n//https://uva.onlinejudge.org/index.php?option=com_onlinejudge&Itemid=8&page=show_problem&problem=979\n\nimport java.util.HashSet;\nimport java.util.Scanner;\nimport java.util.Set;\n\n\npublic class JollyJumpers {\n\n\tpublic static void main(String[] args) {\n\t\tScanner input = new Scanner(System.in);\n\t\twhile (input.hasNext()) {\n\t\t\tSet<Integer> numbersAlreadyAdded = new HashSet<Integer>();\n\t\t\tint numberOfElements = input.nextInt();\n\t\t\tint[] numbers = new int[numberOfElements];\n\t\t\tfor (int i = 0; i < numberOfElements; i++) {\n\t\t\t\tnumbers[i] = input.nextInt();\n\t\t\t}\n\t\t\tfor (int i = 0; i < numberOfElements - 1; i++) {\n\t\t\t\tint difference = Math.abs(numbers[i] - numbers[i + 1]);\n\t\t\t\tif (difference > 0 && difference < numberOfElements) {\n\t\t\t\t\tnumbersAlreadyAdded.add(difference);\n\t\t\t\t}\n\t\t\t}\n\t\t\tif (numbersAlreadyAdded.size() == (numberOfElements - 1)) {\n\t\t\t\tSystem.out.println("Jolly");\n\t\t\t} else {\n\t\t\t\tSystem.out.println("Not jolly");\n\t\t\t}\n\t\t}\n\t}\n\n}',
    index: 537,
  },
  {
    title: "Largest Prime Divisor",
    category: "uva",
    id: "LargestPrimeDivisor_uva",
    algorithm:
      "/**\r\n * All integer numbers are divisible by primes. If a number is divisible by more than one prime number,\r\n * then it obviously has a largest prime divisor. The numbers which do not fall in this category do not\r\n * have a largest prime divisor. Given a number N your job is to write a program that finds its largest\r\n * prime divisor. An integer number n is divisible by another integer number m if there is an integer t\r\n * such that mt = n.\r\n * Input\r\n * The input file contains at most 450 sets of inputs. Each line contains a decimal integer N. N does\r\n * not have more than 14 digits. Input is terminated by a line containing a single zero. So no other line\r\n * except the last line contains a zero in the input. This line need not be processed.\r\n * Output\r\n * For each line of the input produce one line of output. This line contains an integer LPD, which is the\r\n * largest prime divisor of the input number N. If the input number is not divisible by more than one\r\n * prime number output a ‘-1’.\r\n * Sample Input \r\n * 2\r\n * 6\r\n * 100\r\n * 0\r\n * Sample Output\r\n * -1\r\n * 3\r\n * 5\r\n */\r\n//https://uva.onlinejudge.org/index.php?option=com_onlinejudge&Itemid=8&page=show_problem&problem=2461\r\n\r\nimport java.util.Scanner;\r\n\r\npublic class LargestPrimeDivisor {\r\n\r\n\tpublic static void main(String[] args) {\r\n\t\tScanner input = new Scanner(System.in);\r\n\t\tlong number = input.nextLong();\r\n\t\twhile (number != 0) {\r\n\t\t\tnumber = (long) (Math.abs(number));\r\n\t\t\tlong largestPrimeDivisor = -1;\r\n\t\t\tint numberOfPrimeDivisors = 0;\r\n\t\t\tint sqrtOfNumber = (int) (Math.sqrt(number));\r\n\t\t\tfor (int i = 2; i <= sqrtOfNumber; i++) {\r\n\t\t\t\tif (number % i == 0) {\r\n\t\t\t\t\tnumberOfPrimeDivisors++;\r\n\t\t\t\t\tlargestPrimeDivisor = i;\r\n\t\t\t\t\twhile (number % i == 0) {\r\n\t\t\t\t\t\tnumber = number / i;\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t\tif (largestPrimeDivisor != -1 && number != 1) {\r\n\t\t\t\tSystem.out.println(number);\r\n\t\t\t} else if (numberOfPrimeDivisors <= 1) {\r\n\t\t\t\tSystem.out.println(-1);\r\n\t\t\t} else {\r\n\t\t\t\tSystem.out.println(largestPrimeDivisor);\r\n\t\t\t}\r\n\t\t\tnumber = input.nextLong();\r\n\t\t}\r\n\t}\r\n}\r\n",
    index: 538,
  },
  {
    title: "Light More Light",
    category: "uva",
    id: "LightMoreLight_uva",
    algorithm:
      '/**\n * There is man named ”mabu” for switching on-off light in our University. He switches on-off the lights\n *  in a corridor. Every bulb has its own toggle switch. That is, if it is pressed then the bulb turns on.\n * Another press will turn it off. To save power consumption (or may be he is mad or something else)\n * he does a peculiar thing. If in a corridor there is n bulbs, he walks along the corridor back and forth\n * n times and in i-th walk he toggles only the switches whose serial is divisable by i. He does not press\n * any switch when coming back to his initial position. A i-th walk is defined as going down the corridor\n * (while doing the peculiar thing) and coming back again. Now you have to determine what is the final\n * condition of the last bulb. Is it on or off?\n * Input\n * The input will be an integer indicating the n’th bulb in a corridor. Which is less then or equals 232 −1.\n * A zero indicates the end of input. You should not process this input.\n * Output\n * Output ‘yes’ if the light is on otherwise ‘no’, in a single line.\n * Sample Input\n * 3\n * 6241\n * 8191\n * 0\n * Sample Output\n * no\n * yes\n * no\n */\n\n//https://uva.onlinejudge.org/index.php?option=com_onlinejudge&Itemid=8&page=show_problem&category=&problem=1051\n\nimport java.util.Scanner;\n\npublic class LightMoreLight {\n\n\tpublic static void main(String[] args) {\n\t\tScanner input = new Scanner(System.in);\n\t\tlong number = input.nextLong();\n\t\twhile (number != 0) {\n\t\t\tif (isAPerfectSquare(number)) {\n\t\t\t\tSystem.out.println("yes");\n\t\t\t} else {\n\t\t\t\tSystem.out.println("no");\n\t\t\t}\n\t\t\tnumber = input.nextLong();\n\t\t}\n\t}\n\n\tprivate static boolean isAPerfectSquare(long number) {\n\t\tlong squareRoot = (long) Math.sqrt(number);\n\t\treturn squareRoot * squareRoot == number;\n\t}\n\n}\n',
    index: 539,
  },
  {
    title: "Mischievous Children",
    category: "uva",
    id: "MischievousChildren_uva",
    algorithm:
      '/**\r\n * Adam’s parents put up a sign that says “CONGRATULATIONS”. The sign is so big that exactly one\r\n * letter fits on each panel. Some of Adam’s younger cousins got bored during the reception and decided\r\n * to rearrange the panels. How many unique ways can the panels be arranged (counting the original\r\n * arrangement)?\r\n * Input\r\n * The first line of input is a single non-negative integer. It indicates the number of data sets to follow.\r\n * Its value will be less than 30001.\r\n * Each data set consists of a single word, in all capital letters.\r\n * Each word will have at most 20 letters. There will be no spaces or other punctuation.\r\n * The number of arrangements will always be able to fit into an unsigned long int. Note that 12!\r\n * is the largest factorial that can fit into an unsigned long int.\r\n * Output\r\n * For each word, output the number of unique ways that the letters can be rearranged (counting the\r\n * original arrangement). Use the format shown in Sample Output, below.\r\n * Sample Input\r\n * 3\r\n * HAPPY\r\n * WEDDING\r\n * ADAM\r\n * Sample Output\r\n * Data set 1: 60\r\n * Data set 2: 2520\r\n * Data set 3: 12\r\n */\r\n\r\n\r\n//https://uva.onlinejudge.org/index.php?option=onlinejudge&Itemid=99999999&page=show_problem&category=&problem=1279\r\n\r\nimport java.util.HashMap;\r\nimport java.util.Map;\r\nimport java.util.Scanner;\r\n\r\npublic class MischievousChildren {\r\n\r\n\tpublic static void main(String[] args) {\r\n\t\tScanner input = new Scanner(System.in);\r\n\t\tint numberOfCases = input.nextInt();\r\n\t\tint currentCase = 1;\r\n\t\twhile (numberOfCases != 0) {\r\n\t\t\tString line = input.next();\r\n\t\t\tint numberOfLetters = line.length();\r\n\t\t\tMap<Character, Integer> letterCounter = new HashMap<Character, Integer>();\r\n\r\n\t\t\tfor (int i = 0; i < numberOfLetters; i++) {\r\n\t\t\t\tchar c = line.charAt(i);\r\n\t\t\t\tif (letterCounter.containsKey(c)) {\r\n\t\t\t\t\tint previousOccurrences = letterCounter.get(c);\r\n\t\t\t\t\tletterCounter.replace(c, previousOccurrences + 1);\r\n\t\t\t\t} else {\r\n\t\t\t\t\tletterCounter.put(c, 1);\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t\tString lineWithoutDuplicates = "";\r\n\t\t\tfor (int i = 0; i < numberOfLetters; i++) {\r\n\t\t\t\tchar c = line.charAt(i);\r\n\t\t\t\tif (!lineWithoutDuplicates.contains(c + "")) {\r\n\t\t\t\t\tlineWithoutDuplicates = lineWithoutDuplicates + c;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t\tlong nFactorial = computeFactorial(numberOfLetters);\r\n\t\t\tfor (int i = 0; i < letterCounter.size(); i++) {\r\n\t\t\t\tchar c = lineWithoutDuplicates.charAt(i);\r\n\t\t\t\tint numberOfOccurrences = letterCounter.get(c);\r\n\t\t\t\tif (numberOfOccurrences != 1) {\r\n\t\t\t\t\tlong currentProduct = computeFactorial(numberOfOccurrences);\r\n\t\t\t\t\tnFactorial = nFactorial / currentProduct;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t\tSystem.out.println("Data set " + currentCase + ": " + nFactorial);\r\n\t\t\tcurrentCase++;\r\n\t\t\tnumberOfCases--;\r\n\t\t}\r\n\t}\r\n\r\n\tprivate static long computeFactorial(int number) {\r\n\t\tlong product = 1;\r\n\t\tfor (int i = 2; i < number + 1; i++) {\r\n\t\t\tproduct = product * i;\r\n\t\t}\r\n\t\treturn product;\r\n\t}\r\n\r\n}\r\n',
    index: 540,
  },
  {
    title: "Modex",
    category: "uva",
    id: "Modex_uva",
    algorithm:
      "/**\r\n * Many well-known cryptographic operations require modular exponentiation. That is, given integers x,\r\n * y and n, compute x\r\n * y mod n. In this question, you are tasked to program an efficient way to execute\r\n * this calculation.\r\n * Input\r\n * The input consists of a line containing the number c of datasets, followed by c datasets, followed by a\r\n * line containing the number ‘0’.\r\n * Each dataset consists of a single line containing three positive integers, x, y, and n, separated by\r\n * blanks. You can assume that 1 < x, n < 2\r\n * 15 = 32768, and 0 < y < 2\r\n * 31 = 2147483648.\r\n * Output\r\n * The output consists of one line for each dataset. The i-th line contains a single positive integer z such\r\n * that\r\n * z = x\r\n * y mod n\r\n * for the numbers x, y, z given in the i-th input dataset.\r\n * Sample Input\r\n * 2\r\n * 2 3 5\r\n * 2 2147483647 13\r\n * 0\r\n * Sample Output\r\n * 3\r\n * 11\r\n */\r\n\r\n//https://uva.onlinejudge.org/index.php?option=com_onlinejudge&Itemid=8&page=show_problem&problem=3671\r\n\r\nimport java.math.BigInteger;\r\nimport java.util.Scanner;\r\n\r\npublic class Modex {\r\n\r\n\tpublic static void main(String[] args) {\r\n\t\tScanner input = new Scanner(System.in);\r\n\t\tint numberOfTestCases = input.nextInt();\r\n\t\twhile (numberOfTestCases != 0) {\r\n\t\t\tBigInteger x = input.nextBigInteger();\r\n\t\t\tBigInteger y = input.nextBigInteger();\r\n\t\t\tBigInteger n = input.nextBigInteger();\r\n\t\t\tBigInteger result = x.modPow(y, n);\r\n\t\t\tSystem.out.println(result);\r\n\t\t\tnumberOfTestCases--;\r\n\t\t}\r\n\t}\r\n}\r\n\r\n",
    index: 541,
  },
  {
    title: "Multiple Of Seventeen",
    category: "uva",
    id: "MultipleOfSeventeen_uva",
    algorithm:
      '/**\r\n * Theorem: If you drop the last digit d of an integer n (n ≥ 10), subtract 5d from the\r\n * remaining integer, then the difference is a multiple of 17 if and only if n is a multiple of 17.\r\n * For example, 34 is a multiple of 17, because 3-20=-17 is a multiple of 17; 201 is not a multiple of\r\n * 17, because 20-5=15 is not a multiple of 17.\r\n * Given a positive integer n, your task is to determine whether it is a multiple of 17.\r\n * Input\r\n * There will be at most 10 test cases, each containing a single line with an integer n (1 ≤ n ≤ 10100).\r\n * The input terminates with n = 0, which should not be processed.\r\n * Output\r\n * For each case, print 1 if the corresponding integer is a multiple of 17, print 0 otherwise.\r\n * Sample Input\r\n * 34\r\n * 201\r\n * 2098765413\r\n * 1717171717171717171717171717171717171717171717171718\r\n * 0\r\n * Sample Output\r\n * 1\r\n * 0\r\n * 1\r\n * 0\r\n */\r\n\r\n//https://uva.onlinejudge.org/index.php?option=onlinejudge&Itemid=99999999&page=show_problem&category=&problem=3001\r\n\r\nimport java.math.BigInteger;\r\nimport java.util.Scanner;\r\n\r\npublic class MultipleOfSeventeen {\r\n\tprivate static final BigInteger BIGINTEGER_FIVE = new BigInteger("5");\r\n\tprivate static final BigInteger BIGINTEGER_SEVENTEEN = new BigInteger("17");\r\n\tprivate static final BigInteger BIGINTEGER_ZERO = new BigInteger("0");\r\n\r\n\tpublic static void main(String[] args) {\r\n\t\tScanner input = new Scanner(System.in);\r\n\t\twhile (input.hasNext()) {\r\n\t\t\tBigInteger number = input.nextBigInteger();\r\n\t\t\tif (number.equals(BIGINTEGER_ZERO)) {\r\n\t\t\t\tbreak;\r\n\t\t\t}\r\n\t\t\tBigInteger lastDigit = number.mod(BigInteger.TEN);\r\n\t\t\tnumber = number.divide(BigInteger.TEN);\r\n\t\t\tBigInteger product5D = lastDigit.multiply(BIGINTEGER_FIVE);\r\n\t\t\tBigInteger difference = number.subtract(product5D);\r\n\t\t\tif (difference.mod(BIGINTEGER_SEVENTEEN).equals(BIGINTEGER_ZERO)) {\r\n\t\t\t\tSystem.out.println("1");\r\n\t\t\t} else {\r\n\t\t\t\tSystem.out.println("0");\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n}\r\n',
    index: 542,
  },
  {
    title: "Newspaper",
    category: "uva",
    id: "Newspaper_uva",
    algorithm:
      '/**\n* News agency pays money for articles according to some rules. Each character has its own value (some\n* characters may have value equals to zero). Author gets his payment as a sum of all character’s values\n* in the article. You have to determine the amount of money that news agency must pay to an author.\n* Input\n* The first line contains integer N (0 < N ≤ 5), it is a number of tests. Each test describes an integer\n* K (0 < K ≤ 100), the number of paid characters. On next K lines there are table of paid characters\n* and its values (character values are written in cents). If character can not be found in the table, then\n* its value is equal to zero. Next, there is integer M (0 < M ≤ 150000). Next M lines contain an article\n* itself. Each line can be up to 10000 characters length. Be aware of a large input size, the whole input\n* file is about 7MB.\n* Output\n* For each test print how much money publisher must pay for an article in format ‘x.yy$’. Where x is\n* a number of dollars without leading zeros, and yy number of cents with one leading zero if necessary.\n* Examples: ‘3.32$’, ‘13.07$’, ‘71.30$’, ‘0.09$’.\n* Sample Input\n* 1\n* 7\n* a 3\n* W 10\n* A 100\n* , 10\n* k 7\n* . 3\n* I 13\n* 7\n* ACM International Collegiate Programming Contest (abbreviated\n* as ACM-ICPC or just ICPC) is an annual multi-tiered competition\n* among the universities of the world. The ICPC challenges students\n* to set ever higher standards of excellence for themselves\n* through competition that rewards team work, problem analysis,\n* and rapid software development.\n* From Wikipedia.\n* Sample Output\n* 3.74$\n*/\n\n//https://uva.onlinejudge.org/index.php?option=onlinejudge&page=show_problem&problem=2315\n\nimport java.text.DecimalFormat;\nimport java.util.HashMap;\nimport java.util.Map;\nimport java.util.Scanner;\n\npublic class Newspaper {\n\n\tpublic static void main(String[] args) {\n\t\tScanner input = new Scanner(System.in);\n\t\tint numberOfTestCases = input.nextInt();\n\t\twhile (numberOfTestCases != 0) {\n\t\t\tMap<String, Integer> values = new HashMap<String, Integer>();\n\t\t\tint numberOfValuableCharacters = input.nextInt();\n\t\t\twhile (numberOfValuableCharacters != 0) {\n\t\t\t\tvalues.put(input.next(), input.nextInt());\n\t\t\t\tnumberOfValuableCharacters--;\n\t\t\t}\n\t\t\tint numberOfLines = input.nextInt();\n\t\t\tinput.nextLine();\n\t\t\tdouble sum = 0;\n\t\t\twhile (numberOfLines != 0) {\n\t\t\t\tString textAsString = input.nextLine();\n\t\t\t\tfor (int i = 0; i < textAsString.length(); i++) {\n\t\t\t\t\tString c = textAsString.charAt(i) + "";\n\t\t\t\t\tif (values.containsKey(c)) {\n\t\t\t\t\t\tsum = sum + values.get(c);\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\tnumberOfLines--;\n\t\t\t}\n\t\t\tsum = sum / 100;\n\t\t\tDecimalFormat formatter = new DecimalFormat("0.00");\n\t\t\tString sumFormatted = formatter.format(sum);\n\t\t\tSystem.out.println(sumFormatted + "$");\n\t\t\tnumberOfTestCases--;\n\t\t}\n\t}\n\n}',
    index: 543,
  },
  {
    title: "Number Theory For Newbies",
    category: "uva",
    id: "NumberTheoryForNewbies_uva",
    algorithm:
      '/**\r\n * Given any positive integer, if we permute its digits, the difference between the number we get and the\r\n * given number will always be divisible by 9.\r\n * For example, if the given number is 123, we may rearrange the digits to get 321. The difference =\r\n * 321 - 123 = 198, which is a multiple of 9 (198 = 9 × 22).\r\n * We can prove this fact fairly easily, but since we are not having a maths contest, we instead try to\r\n * illustrate this fact with the help of a computer program.\r\n * Input\r\n * Each line of input gives a positive integer n (≤ 2000000000). You are to find two integers a and b\r\n * formed by rearranging the digits of n, such that a − b is maximum. a and b should NOT have leading\r\n * zeros.\r\n * Output\r\n * You should then show that a − b is a multiple of 9, by expressing it as ‘9 * k’, where k is an integer.\r\n * See the sample output for the correct output format.\r\n * Sample Input\r\n * 123\r\n * 2468\r\n * Sample Output\r\n * 321 - 123 = 198 = 9 * 22\r\n * 8642 - 2468 = 6174 = 9 * 686\r\n */\r\n\r\n//https://uva.onlinejudge.org/index.php?option=onlinejudge&Itemid=99999999&page=show_problem&category=&problem=2366\r\n\r\nimport java.util.Arrays;\r\nimport java.util.Scanner;\r\n\r\npublic class NumberTheoryForNewbies {\r\n\r\n\tpublic static void main(String[] args) {\r\n\t\tScanner input = new Scanner(System.in);\r\n\t\twhile (input.hasNextLong()) {\r\n\t\t\tString inputValue = input.nextLine();\r\n\t\t\tStringBuilder minimal = new StringBuilder();\r\n\t\t\tStringBuilder maximal = new StringBuilder();\r\n\t\t\tchar[] characters = inputValue.toCharArray();\r\n\t\t\tint length = characters.length;\r\n\t\t\tArrays.sort(characters);\r\n\t\t\tint index;\r\n\t\t\tfor (index = 0; index < length; index++) {\r\n\t\t\t\tif (characters[index] != \'0\') {\r\n\t\t\t\t\tbreak;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t\tif (index != 0) {\r\n\t\t\t\tcharacters[0] = characters[index];\r\n\t\t\t\tcharacters[index] = \'0\';\r\n\t\t\t}\r\n\t\t\tfor (int i = 0; i < length; i++) {\r\n\t\t\t\tminimal.append(characters[i]);\r\n\t\t\t}\r\n\t\t\tArrays.sort(characters);\r\n\t\t\tfor (int i = length - 1; i > -1; i--) {\r\n\t\t\t\tmaximal.append(characters[i]);\r\n\t\t\t}\r\n\t\t\tlong maximalNumber = Long.valueOf(maximal.toString());\r\n\t\t\tlong minimalNumber = Long.valueOf(minimal.toString());\r\n\t\t\tlong difference = maximalNumber - minimalNumber;\r\n\t\t\tSystem.out.println(maximal + " - " + minimal + " = " + difference\r\n\t\t\t\t\t+ " = 9 * " + (difference / 9));\r\n\t\t}\r\n\t}\r\n}\r\n',
    index: 544,
  },
  {
    title: "Numbering Roads",
    category: "uva",
    id: "NumberingRoads_uva",
    algorithm:
      '/**In my country, streets dont have names, each of them are\r\n * just given a number as name. These numbers are supposed\r\n * to be unique but that is not always the case. The local\r\n * government allocates some integers to name the roads and\r\n * in many case the number of integers allocated is less that\r\n * the total number of roads. In that case to make road\r\n * names unique some single character suffixes are used. So\r\n * roads are named as 1, 2, 3, 1A, 2B, 3C, etc. Of course the\r\n * number of suffixes is also always limited to 26 (A, B, . . . ,\r\n * Z). For example if there are 4 roads and 2 different integers\r\n * are allocated for naming then some possible assignments\r\n * of names can be:\r\n * 1, 2, 1A, 2B\r\n * 1, 2, 1A, 2C\r\n * 3, 4, 3A, 4A\r\n * 1, 2, 1B, 1C\r\n * Given the number of roads (R) and the numbers of\r\n * integers allocated for naming (N), your job is to determine\r\n * minimum how many different suffixes will be required (of\r\n * all possible namings) to name the streets assuming that\r\n * no two streets can have same names.\r\n * Input\r\n * The input file can contain up to 10002 lines of inputs. Each line contains two integers R and N\r\n * (0 < N, R < 10001). Here R is the total number of streets to be named and N denotes number integers\r\n * allocated for naming.\r\n * Output\r\n * For each line of input produce one line of output. This line contains the serial of output followed by\r\n * an integer D which denotes the minimum number of suffixes required to name the streets. If it is not\r\n * possible to name all the streets print ‘impossible’ instead (without the quotes).\r\n * Sample Input\r\n * 8 5\r\n * 100 2\r\n * 0 0\r\n * Sample Output\r\n * Case 1: 1\r\n * Case 2: impossible\r\n */\r\n\r\n//https://uva.onlinejudge.org/index.php?option=com_onlinejudge&Itemid=8&page=show_problem&problem=2823\r\n\r\nimport java.util.Scanner;\r\n\r\npublic class NumberingRoads {\r\n\r\n\tpublic static void main(String[] args) {\r\n\t\tScanner input = new Scanner(System.in);\r\n\t\tint caseNumber = 1;\r\n\t\twhile (true) {\r\n\t\t\tint first = input.nextInt();\r\n\t\t\tint second = input.nextInt();\r\n\t\t\tif (first == 0 && second == 0) {\r\n\t\t\t\tbreak;\r\n\t\t\t}\r\n\t\t\tboolean found = false;\r\n\t\t\tfor (int i = 0; i < 27 && !found; i++) {\r\n\t\t\t\tint sum = second + second * i;\r\n\t\t\t\tif (sum >= first) {\r\n\t\t\t\t\tSystem.out.print("Case " + caseNumber + ": " + i + "\\n");\r\n\t\t\t\t\tfound = true;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t\tif (!found) {\r\n\t\t\t\tSystem.out.print("Case " + caseNumber + ": impossible\\n");\r\n\t\t\t}\r\n\t\t\tcaseNumber = caseNumber + 1;\r\n\t\t}\r\n\t}\r\n}\r\n',
    index: 545,
  },
  {
    title: "Open Source",
    category: "uva",
    id: "OpenSource_uva",
    algorithm:
      '// At an open-source fair held at a major university,\n// leaders of open-source projects put sign-up\n// sheets on the wall, with the project name at the\n// top in capital letters for identification.\n// Students then signed up for projects using\n// their userids. A userid is a string of lower-case\n// letters and numbers starting with a letter.\n// The organizer then took all the sheets off the\n// wall and typed in the information.\n// Your job is to summarize the number of\n// students who have signed up for each project.\n// Some students were overly enthusiastic and put\n// their name down several times for the same\n// project. That’s okay, but they should only count\n// once. Students were asked to commit to a single\n// project, so any student who has signed up for more \n// than one project should not count for any project.\n// There are at most 10,000 students at the university, \n// and at most 100 projects were advertised.\n\n// Input\n//     The input contains several test cases, each one ending with a line that starts with the digit 1. The last\n//     test case is followed by a line starting with the digit 0.\n//     Each test case consists of one or more project sheets. A project sheet consists of a line containing\n//     the project name in capital letters, followed by the userids of students, one per line.\n\n// Output\n//     For each test case, output a summary of each project sheet. The summary is one line with the name\n//     of the project followed by the number of students who signed up. These lines should be printed in\n//     decreasing order of number of signups. If two or more projects have the same number of signups, they\n//     should be listed in alphabetical order.\n\n// Sample Input\n// UBQTS TXT\n// tthumb\n// LIVESPACE BLOGJAM\n// philton\n// aeinstein\n// YOUBOOK\n// j97lee\n// sswxyzy\n// j97lee\n// aeinstein\n// SKINUX\n// 1\n// 0\n// Sample Output\n// YOUBOOK 2\n// LIVESPACE BLOGJAM 1\n// UBQTS TXT 1\n// SKINUX 0\n\nimport java.io.BufferedReader;\nimport java.io.InputStreamReader;\nimport java.util.Comparator;\nimport java.util.HashMap;\nimport java.util.List;\nimport java.util.*;\nimport static java.lang.Character.isUpperCase;\n\n/**\n * Created by kdn251 on 3/7/17.\n */\n\npublic class OpenSource {\n\n    public static void main(String args[]) throws Exception {\n\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        String line;\n\n        while(!(line = br.readLine()).equals("0")) {\n            HashMap<String, Integer> projects = new HashMap<String, Integer>();\n            HashMap<String, String> students = new HashMap<String, String>();\n            String project = line;\n            projects.put(project, 0);\n\n            while(!(line = br.readLine()).equals("1")) {\n                if(isUpperCase(line.charAt(0))) {\n                    project = line;\n                    projects.put(project, 0);\n                }\n\n                else {\n                    if(students.containsKey(line)) {\n                        if(students.get(line).equals("")) {\n                            continue;\n                        }\n\n                        else {\n                            if(!students.get(line).equals(project)) {\n                                projects.put(students.get(line), projects.get(students.get(line)) - 1);\n                                students.put(line, "");\n                            }\n                        }\n                    }\n\n                    else {\n                        projects.put(project, projects.get(project) + 1);\n                        students.put(line, project);\n                    }\n                }\n            }\n\n            List<Pair> pairs = new ArrayList<Pair>();\n            int count = 0;\n\n            for(String s : projects.keySet()) {\n\n                pairs.add(new Pair(s, projects.get(s)));\n\n            }\n\n            Collections.sort(pairs,new Comparator<Pair>() {\n\n                public int compare(Pair o1, Pair o2) {\n                    if(-Integer.compare(o1.total, o2.total) == 0) {\n                        return o1.name.compareTo(o2.name);\n                    }\n                    return -Integer.compare(o1.total, o2.total);\n                }\n            });\n\n            for(Pair p : pairs) {\n\n                System.out.println(p.name + " " + p.total);\n\n            }\n\n        }\n\n    }\n\n}\n\nclass Pair {\n    String name;\n    int total;\n\n    Pair(String name, int total) {\n        this.name = name;\n        this.total = total;\n    }\n}',
    index: 546,
  },
  {
    title: "Parity",
    category: "uva",
    id: "Parity_uva",
    algorithm:
      '/**\r\n * We define the parity of an integer n as the sum of the bits in binary representation computed modulo\r\n * two. As an example, the number 21 = 101012 has three 1s in its binary representation so it has parity\r\n * 3(mod2), or 1.\r\n * In this problem you have to calculate the parity of an integer 1 ≤ I ≤ 2147483647.\r\n * Input\r\n * Each line of the input has an integer I and the end of the input is indicated by a line where I = 0 that\r\n * should not be processed.\r\n * Output\r\n * For each integer I in the inputt you should print a line ‘The parity of B is P (mod 2).’, where B\r\n * is the binary representation of I.\r\n * Sample Input\r\n * 1\r\n * 2\r\n * 10\r\n * 21\r\n * 0\r\n * Sample Output\r\n * The parity of 1 is 1 (mod 2).\r\n * The parity of 10 is 1 (mod 2).\r\n * The parity of 1010 is 2 (mod 2).\r\n * The parity of 10101 is 3 (mod 2).\r\n */\r\n\r\n//https://uva.onlinejudge.org/index.php?option=com_onlinejudge&Itemid=8&page=show_problem&problem=1872\r\n\r\nimport java.util.Scanner;\r\n\r\npublic class Parity {\r\n\r\n\tpublic static void main(String[] args) {\r\n\t\twhile (true) {\r\n\t\t\tScanner input = new Scanner(System.in);\r\n\t\t\tint number = input.nextInt();\r\n\t\t\tif (number == 0) {\r\n\t\t\t\tbreak;\r\n\t\t\t}\r\n\t\t\tString binaryInString = convertToBinary(number);\r\n\t\t\tint count = 0;\r\n\t\t\tfor (int i = 0; i < binaryInString.length(); i++) {\r\n\t\t\t\tif ("1".equals(binaryInString.charAt(i) + "")) {\r\n\t\t\t\t\tcount++;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t\tSystem.out.println("The parity of " + binaryInString + " is "\r\n\t\t\t\t\t+ count + " (mod 2).");\r\n\r\n\t\t}\r\n\t}\r\n\r\n\tprivate static String convertToBinary(int number) {\r\n\t\tStringBuilder s = new StringBuilder("");\r\n\t\twhile (number != 0) {\r\n\t\t\ts = s.append(number % 2);\r\n\t\t\tnumber = number / 2;\r\n\t\t}\r\n\t\treturn s.reverse().toString();\r\n\t}\r\n}\r\n',
    index: 547,
  },
  {
    title: "Pesky Palindromes",
    category: "uva",
    id: "PeskyPalindromes_uva",
    algorithm:
      "// A palindrome is a sequence of one or more characters that reads the same from the left as it does from\n// the right. For example, Z, TOT and MADAM are palindromes, but ADAM is not.\n// Your job, should you choose to accept it, is to write a program that reads a sequence of strings and\n// for each string determines the number of UNIQUE palindromes that are substrings.\n\n// Input\n//     The input file consists of a number of strings (one per line), of at most 80 characters each, starting in\n//     column 1.\n\n// Output\n//     For each non-empty input line, the output consists of one line containing the message:\n//     The string 'input string' contains nnnn palindromes.\n//     where input string is replaced by the actual input string and nnnn is replaced by the number of\n//     UNIQUE palindromes that are substrings.\n\n// Note:\n//     See below the explanation of the sample below\n//     • The 3 unique palindromes in ‘boy’ are ‘b’, ‘o’ and ‘y’.\n//     • The 4 unique palindromes in ‘adam’ are ‘a’, ‘d’, ‘m’, and ‘ada’.\n//     • The 5 unique palindromes in ‘madam’ are ‘m’, ‘a’, ‘d’, ‘ada’, and ‘madam’.\n//     • The 3 unique palindromes in ‘tot’ are ‘t’, ‘o’ and ‘tot’.\n\n// Sample input\n// boy\n// adam\n// madam\n// tot\n// Sample output\n// The string 'boy' contains 3 palindromes.\n// The string 'adam' contains 4 palindromes.\n// The string 'madam' contains 5 palindromes.\n// The string 'tot' contains 3 palindromes.\n\nimport java.util.*;\n\npublic class PeskyPalindromes {\n\n    public static void main(String args[]) {\n\n        int x;\n\n        Scanner sc = new Scanner(System.in);\n\n        while(sc.hasNext()) {\n\n            String currentString = sc.next();\n\n            List<String> allSubstrings = generateSubstrings(currentString);\n\n            int uniquePalindromes = findUniquePalindromes(allSubstrings);\n\n            System.out.println(\"The string \" + \"'\" + currentString + \"'\" + \" contains \" + uniquePalindromes + \" palindromes.\");\n\n        }\n\n    }\n\n    public static List<String> generateSubstrings(String s) {\n\n        List<String> allSubstrings = new ArrayList<String>();\n\n        for(int i = 0; i < s.length(); i++) {\n\n            for(int j = i + 1; j <= s.length(); j++) {\n\n                String currentSubstring = s.substring(i, j);\n\n                if(!allSubstrings.contains(currentSubstring)) {\n\n                    allSubstrings.add(currentSubstring);\n\n                }\n\n            }\n\n        }\n\n        return allSubstrings;\n\n    }\n\n    public static int findUniquePalindromes(List<String> allSubstrings) {\n\n        int totalUniquePalindromes = 0;\n\n        for(String s : allSubstrings) {\n\n            int left = 0;\n            int right = s.length() - 1;\n\n            boolean isPalindrome = true;\n\n            while(left < right) {\n\n                if(s.charAt(left) != s.charAt(right)) {\n\n                    isPalindrome = false;\n                    break;\n\n                }\n\n                left++;\n                right--;\n\n            }\n\n            if(isPalindrome) {\n\n                totalUniquePalindromes++;\n\n            }\n\n        }\n\n        return totalUniquePalindromes;\n\n    }\n\n\n\n\n\n}\n\n",
    index: 548,
  },
  {
    title: "Prime Factors",
    category: "uva",
    id: "PrimeFactors_uva",
    algorithm:
      '/**\n * The most relevant definition for this problem is 2a: An integer g > 1 is said to be prime if and only\n * if its only positive divisors are itself and one (otherwise it is said to be composite). For example, the\n * number 21 is composite; the number 23 is prime. Note that the decompositon of a positive number g\n * into its prime factors, i.e.,\n * g = f1 × f2 × · · · × fn\n * is unique if we assert that fi > 1 for all i and fi ≤ fj for i < j.\n * One interesting class of prime numbers are the so-called Mersenne primes which are of the form\n * 2\n * p − 1. Euler proved that 2\n * 31 − 1 is prime in 1772 — all without the aid of a computer.\n * Input\n * The input will consist of a sequence of numbers. Each line of input will contain one number g in the\n * range −2\n * 31 < g < 2\n * 31, but different of -1 and 1. The end of input will be indicated by an input line\n * having a value of zero.\n * Output\n * For each line of input, your program should print a line of output consisting of the input number and\n * its prime factors. For an input number g > 0, g = f1 × f2 × · · · × fn, where each fi\n * is a prime number\n * greater than unity (with fi ≤ fj for i < j), the format of the output line should be\n * g = f1 x f2 x . . . x fn\n * When g < 0, if | g |= f1 × f2 × · · · × fn, the format of the output line should be\n * g = -1 x f1 x f2 x . . . x fn\n * Sample Input\n * -190\n * -191\n * -192\n * -193\n * -194\n * 195\n * 196\n * 197\n * 198\n * 199\n * 200\n * 0\n * Sample Output\n * -190 = -1 x 2 x 5 x 19\n * -191 = -1 x 191\n * -192 = -1 x 2 x 2 x 2 x 2 x 2 x 2 x 3\n * -193 = -1 x 193\n * -194 = -1 x 2 x 97\n * 195 = 3 x 5 x 13\n * 196 = 2 x 2 x 7 x 7\n * 197 = 197\n * 198 = 2 x 3 x 3 x 11\n * 199 = 199\n * 200 = 2 x 2 x 2 x 5 x 5\n */  \n\n//https://uva.onlinejudge.org/index.php?option=com_onlinejudge&Itemid=8&page=show_problem&problem=524\n\nimport java.util.ArrayList;\nimport java.util.Collections;\nimport java.util.List;\nimport java.util.Scanner;\n\npublic class PrimeFactors {\n\n\tpublic static void main(String[] args) {\n\t\tScanner input = new Scanner(System.in);\n\t\tint number = input.nextInt();\n\t\tboolean[] isPrime = generatePrimeNumbers();\n\t\twhile (number != 0) {\n\t\t\tboolean isNegative = false;\n\t\t\tif (number < 0) {\n\t\t\t\tisNegative = true;\n\t\t\t\tnumber = Math.abs(number);\n\t\t\t}\n\t\t\tint originalNumber = number;\n\t\t\tformatOutput(originalNumber, sieveOfEratosthenes(isPrime, originalNumber), isNegative);\n\t\t\tnumber = input.nextInt();\n\t\t}\n\t}\n\n\tpublic static List<Integer> sieveOfEratosthenes(boolean[] isPrime, int number) {\n\t\tList<Integer> primeFactors = new ArrayList<Integer>();\n\t\tint squareRootOfOriginalNumber = (int) Math.sqrt(number);\n\t\tfor (int i = 2; i <= squareRootOfOriginalNumber; i++) {\n\t\t\tif (isPrime[i]) {\n\t\t\t\twhile (number % i == 0) {\n\t\t\t\t\tprimeFactors.add(i);\n\t\t\t\t\tnumber = number / i;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t\tif (number != 1) {\n\t\t\tprimeFactors.add(number);\n\t\t}\n\t\treturn primeFactors;\n\t}\n\n\tstatic void formatOutput(int number, List<Integer> primeFactors, boolean isNegative) {\n\t\tif (isNegative) {\n\t\t\tnumber *= -1;\n\t\t}\n\t\tStringBuilder output = new StringBuilder(number + " = ");\n\t\tint numberOfPrimeFactors = primeFactors.size();\n\t\tif (numberOfPrimeFactors == 1) {\n\t\t\tif (isNegative) {\n\t\t\t\toutput.append("-1 x " + (number * (-1)));\n\t\t\t} else {\n\t\t\t\toutput.append(number);\n\t\t\t}\n\t\t} else {\n\t\t\tCollections.sort(primeFactors);\n\t\t\tif (isNegative) {\n\t\t\t\toutput.append("-1 x ");\n\t\t\t}\n\t\t\tfor (int i = 0; i < numberOfPrimeFactors - 1; i++) {\n\t\t\t\toutput.append(primeFactors.get(i) + " x ");\n\t\t\t}\n\t\t\toutput.append(primeFactors.get(numberOfPrimeFactors - 1));\n\t\t}\n\t\tSystem.out.println(output);\n\t}\n\n\tstatic boolean[] generatePrimeNumbers() {\n\t\tint number = (int) Math.sqrt(Integer.MAX_VALUE);\n\t\tboolean[] isPrime = new boolean[number + 1];\n\t\tfor (int i = 2; i < number + 1; i++) {\n\t\t\tisPrime[i] = true;\n\t\t}\n\t\tfor (int factor = 2; factor * factor < number + 1; factor++) {\n\t\t\tif (isPrime[factor]) {\n\t\t\t\tfor (int j = factor; j * factor < number + 1; j++) {\n\t\t\t\t\tisPrime[j * factor] = false;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t\treturn isPrime;\n\t}\n\n}',
    index: 549,
  },
  {
    title: "Pseudo Prime Numbers",
    category: "uva",
    id: "PseudoPrimeNumbers_uva",
    algorithm:
      '/**\r\n * Fermat’s theorem states that for any\r\n * prime number p and for any integer a > 1,\r\n * a\r\n * p == a (mod p). That is, if we raise a to\r\n * the pth power and divide by p, the remainder\r\n * is a. Some (but not very many) nonprime\r\n * values of p, known as base-a pseudoprimes,\r\n * have this property for some a.\r\n * (And some, known as Carmichael Numbers,\r\n * are base-a pseudoprimes for all a.)\r\n * Given 2 < p ≤ 1, 000, 000, 000 and 1 <\r\n * a < p, determine whether or not p is a\r\n * base-a pseudoprime.\r\n * Input\r\n * Input contains several test cases followed by a line containing ‘0 0’. Each test case consists of a line\r\n * containing p and a.\r\n * Output\r\n * For each test case, output ‘yes’ if p is a base-a pseudoprime; otherwise output ‘no’.\r\n * Sample Input\r\n * 3 2\r\n * 10 3\r\n * 341 2\r\n * 341 3\r\n * 1105 2\r\n * 1105 3\r\n * 0 0\r\n * Sample Output\r\n * no\r\n * no\r\n * yes\r\n * no\r\n * yes\r\n * yes\r\n */\r\n\r\n//https://uva.onlinejudge.org/index.php?option=onlinejudge&page=show_problem&problem=2262\r\n \r\nimport java.math.BigInteger;\r\nimport java.util.Scanner;\r\n\r\npublic class PseudoPrimeNumbers {\r\n\r\n\tpublic static void main(String[] args) {\r\n\t\tScanner input = new Scanner(System.in);\r\n\t\twhile (true) {\r\n\t\t\tint p = input.nextInt();\r\n\t\t\tint a = input.nextInt();\r\n\t\t\tif (a == 0 && p == 0) {\r\n\t\t\t\tbreak;\r\n\t\t\t}\r\n\t\t\tBigInteger pAsBigInteger = new BigInteger(p + "");\r\n\t\t\tBigInteger aAsBigInteger = new BigInteger(a + "");\r\n\t\t\tString answer = "";\r\n\t\t\tif (!pAsBigInteger.isProbablePrime(10)) {\r\n\t\t\t\tBigInteger result = aAsBigInteger.modPow(pAsBigInteger,\r\n\t\t\t\t\t\tpAsBigInteger);\r\n\t\t\t\tif (result.equals(aAsBigInteger)) {\r\n\t\t\t\t\tanswer = "yes";\r\n\t\t\t\t} else {\r\n\t\t\t\t\tanswer = "no";\r\n\t\t\t\t}\r\n\t\t\t} else {\r\n\t\t\t\tanswer = "no";\r\n\t\t\t}\r\n\t\t\tSystem.out.println(answer);\r\n\t\t}\r\n\t}\r\n}\r\n',
    index: 550,
  },
  {
    title: "Simplifying Fractions",
    category: "uva",
    id: "SimplifyingFractions_uva",
    algorithm:
      '/**\r\n * You are to write a program that reduces a fraction into its lowest terms.\r\n * Input\r\n * The first line of the input file gives the number of test cases N (≤ 20). Each of the following N lines\r\n * contains a fraction in the form of p/q (1 ≤ p, q ≤ 1030).\r\n * Output\r\n * For each test case, output the fraction after simplification.\r\n * Sample Input\r\n * 4\r\n * 1 / 2\r\n * 2 / 4\r\n * 3 / 3\r\n * 4 / 2\r\n * Sample Output\r\n * 1 / 2\r\n * 1 / 2\r\n * 1 / 1\r\n * 2 / 1\r\n */\r\n\r\n//https://uva.onlinejudge.org/index.php?option=com_onlinejudge&Itemid=8&page=show_problem&problem=1755\r\n\r\nimport java.math.BigInteger;\r\nimport java.util.Scanner;\r\n\r\npublic class SimplifyingFractions {\r\n\r\n\tpublic static void main(String[] args) {\r\n\t\tScanner input = new Scanner(System.in);\r\n\t\tint numberOfTestCases = input.nextInt();\r\n\t\twhile (numberOfTestCases != 0) {\r\n\t\t\tString pAsString = input.next();\r\n\t\t\tinput.next();\r\n\t\t\tString qAsString = input.next();\r\n\t\t\tBigInteger p = new BigInteger(pAsString);\r\n\t\t\tBigInteger q = new BigInteger(qAsString);\r\n\t\t\tBigInteger greatestCommonDivisor = p.gcd(q);\r\n\t\t\tif (!greatestCommonDivisor.equals(BigInteger.ONE)) {\r\n\t\t\t\tp = p.divide(greatestCommonDivisor);\r\n\t\t\t\tq = q.divide(greatestCommonDivisor);\r\n\t\t\t}\r\n\t\t\tSystem.out.println(p + " / " + q);\r\n\t\t\tnumberOfTestCases--;\r\n\t\t}\r\n\t}\r\n}\r\n',
    index: 551,
  },
  {
    title: "Simply Emirp",
    category: "uva",
    id: "SimplyEmirp_uva",
    algorithm:
      '/**\r\n * An integer greater than 1 is called a prime number if its only positive divisors (factors) are 1 and itself.\r\n * Prime numbers have been studied over the years by a lot of mathematicians. Applications of prime\r\n * numbers arise in Cryptography and Coding Theory among others.\r\n * Have you tried reversing a prime? For most primes, you get a composite (43 becomes 34). An\r\n * Emirp (Prime spelt backwards) is a Prime that gives you a different Prime when its digits are reversed.\r\n * For example, 17 is Emirp because 17 as well as 71 are Prime.\r\n * In this problem, you have to decide whether a number N is Non-prime or Prime or Emirp. Assume\r\n * that 1 < N < 1000000.\r\n * Interestingly, Emirps are not new to NTU students. We have been boarding 199 and 179 buses for\r\n * quite a long time!\r\n * Input\r\n * Input consists of several lines specifying values for N.\r\n * Output\r\n * For each N given in the input, output should contain one of the following:\r\n * 1. ‘N is not prime.’, if N is not a Prime number.\r\n * 2. ‘N is prime.’, if N is Prime and N is not Emirp.\r\n * 3. ‘N is emirp.’, if N is Emirp.\r\n * Sample Input\r\n * 17\r\n * 18\r\n * 19\r\n * 179\r\n * 199\r\n * Sample Output\r\n * 17 is emirp.\r\n * 18 is not prime.\r\n * 19 is prime.\r\n * 179 is emirp.\r\n * 199 is emirp.\r\n */\r\n\r\n//https://uva.onlinejudge.org/index.php?option=com_onlinejudge&Itemid=8&page=show_problem&problem=1176\r\n\r\n\r\nimport java.math.BigInteger;\r\nimport java.util.Scanner;\r\n\r\npublic class SimplyEmirp {\r\n\r\n\tpublic static void main(String[] args) {\r\n\t\tScanner input = new Scanner(System.in);\r\n\t\twhile (input.hasNext()) {\r\n\t\t\tString inputGiven = input.next();\r\n\t\t\tBigInteger number = new BigInteger(inputGiven);\r\n\t\t\tif (!number.isProbablePrime(10)) {\r\n\t\t\t\tSystem.out.println(number + " is not prime.");\r\n\t\t\t} else {\r\n\t\t\t\tString numberReversedAsString = new StringBuilder(\r\n\t\t\t\t\t\tnumber.toString()).reverse().toString();\r\n\t\t\t\tBigInteger numberReversed = new BigInteger(\r\n\t\t\t\t\t\tnumberReversedAsString);\r\n\t\t\t\tif (numberReversed.isProbablePrime(10)\r\n\t\t\t\t\t\t&& numberReversed.compareTo(number) != 0) {\r\n\t\t\t\t\tSystem.out.println(number + " is emirp.");\r\n\t\t\t\t} else {\r\n\t\t\t\t\tSystem.out.println(number + " is prime.");\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n}\r\n',
    index: 552,
  },
  {
    title: "Skew Binary",
    category: "uva",
    id: "SkewBinary_uva",
    algorithm:
      '/**\r\n * When a number is expressed in decimal, the k-th digit represents a multiple of 10k. (Digits are numbered\r\n * from right to left, where the least significant digit is number 0.) For example,\r\n * 8130710 = 8 × 104 + 1 × 103 + 3 × 102 + 0 × 101 + 7 × 100 = 80000 + 1000 + 300 + 0 + 7 = 81307.\r\n * When a number is expressed in binary, the k-th digit represents a multiple of 2\r\n * k. For example,\r\n * 100112 = 1 × 2\r\n * 4 + 0 × 2\r\n * 3 + 0 × 2\r\n * 2 + 1 × 2\r\n * 1 + 1 × 2\r\n * 0 = 16 + 0 + 0 + 2 + 1 = 19.\r\n * In skew binary, the k-th digit represents a multiple of 2\r\n * k+1 − 1. The only possible digits are 0\r\n * and 1, except that the least-significant nonzero digit can be a 2. For example,\r\n * 10120skew = 1×(25 −1)+ 0×(24 −1)+ 1×(23 −1)+ 2×(22 −1)+ 0×(21 −1) = 31+ 0+ 7+ 6+ 0 = 44.\r\n * The first 10 numbers in skew binary are 0, 1, 2, 10, 11, 12, 20, 100, 101, and 102. (Skew binary is\r\n * useful in some applications because it is possible to add 1 with at most one carry. However, this has\r\n * nothing to do with the current problem.)\r\n * Input\r\n * The input file contains one or more lines, each of which contains an integer n. If n = 0 it signals the\r\n * end of the input, and otherwise n is a nonnegative integer in skew binary.\r\n * Output\r\n * For each number, output the decimal equivalent. The decimal value of n will be at most 2\r\n * 31 − 1 =\r\n * 2147483647.\r\n * Sample Input\r\n * 10120\r\n * 200000000000000000000000000000\r\n * 10\r\n * 1000000000000000000000000000000\r\n * 11\r\n * 100\r\n * 11111000001110000101101102000\r\n * 0\r\n * Sample Output\r\n * 44\r\n * 2147483646\r\n * 3\r\n * 2147483647\r\n * 4\r\n * 7\r\n * 1041110737\r\n */\r\n//https://uva.onlinejudge.org/index.php?option=com_onlinejudge&Itemid=8&page=show_problem&problem=516\r\n\r\nimport java.math.BigInteger;\r\nimport java.util.Scanner;\r\n\r\npublic class SkewBinary {\r\n\r\n\tpublic static void main(String[] args) {\r\n\t\tScanner input = new Scanner(System.in);\r\n\t\twhile (true) {\r\n\t\t\tBigInteger number = input.nextBigInteger();\r\n\t\t\tif (number.equals(BigInteger.ZERO)) {\r\n\t\t\t\tbreak;\r\n\t\t\t}\r\n\t\t\tint length = (number + "").length();\r\n\t\t\tBigInteger sum = BigInteger.ZERO;\r\n\t\t\tfor (int i = 0; i < length; i++) {\r\n\t\t\t\tBigInteger mod10 = number.mod(BigInteger.TEN);\r\n\t\t\t\tBigInteger insideBrackets = BigInteger.valueOf((long) (Math\r\n\t\t\t\t\t\t.pow(2, i + 1) - 1));\r\n\t\t\t\tsum = sum.add((mod10).multiply(insideBrackets));\r\n\t\t\t\tnumber = number.divide(BigInteger.TEN);\r\n\t\t\t}\r\n\t\t\tSystem.out.println(sum);\r\n\t\t}\r\n\t}\r\n}\r\n',
    index: 553,
  },
  {
    title: "Solve Equation",
    category: "uva",
    id: "SolveEquation_uva",
    algorithm:
      '/**\r\n * Let us look at a boring mathematics problem. :-) We have three different\r\n * integers, x, y and z, which satisfy the following three relations: • x + y +\r\n * z = A • xyz = B • x 2 + y 2 + z 2 = C You are asked to write a program that\r\n * solves for x, y and z for given values of A, B and C. Input The first line of\r\n * the input file gives the number of test cases N (N < 20). Each of the\r\n * following N lines gives the values of A, B and C (1 ≤ A, B, C ≤ 10000).\r\n * Output For each test case, output the corresponding values of x, y and z. If\r\n * there are many possible answers, choose the one with the least value of x. If\r\n * there is a tie, output the one with the least value of y. If there is no\r\n * solution, output the line ‘No solution.’ instead. Sample Input 2 1 2 3 6 6 14\r\n * Sample Output No solution. 1 2 3\r\n */\r\n\r\n// https://uva.onlinejudge.org/index.php?option=com_onlinejudge&Itemid=8&page=show_problem&problem=2612\r\n\r\nimport java.util.Scanner;\r\n\r\npublic class SolveEquation {\r\n\r\n\tpublic static void main(String[] args) {\r\n\t\tScanner input = new Scanner(System.in);\r\n\r\n\t\tint numberOfTestCases = input.nextInt();\r\n\t\twhile (numberOfTestCases != 0) {\r\n\r\n\t\t\tint A = input.nextInt();\r\n\t\t\tint B = input.nextInt();\r\n\t\t\tint C = input.nextInt();\r\n\t\t\tboolean hasSolution = false;\r\n\r\n\t\t\tfor (int x = -22; x <= 22 && !hasSolution; x++) {\r\n\t\t\t\tif (x * x <= C) {\r\n\t\t\t\t\tfor (int y = -100; y <= 100 && !hasSolution; y++) {\r\n\t\t\t\t\t\tif (x != y && y * y <= C && (x * x + y * y <= C)) {\r\n\t\t\t\t\t\t\tint z = A - x - y;\r\n\t\t\t\t\t\t\tif ((z != y && z != x && x * x + y * y + z * z == C)\r\n\t\t\t\t\t\t\t\t\t&& x * y * z == B) {\r\n\t\t\t\t\t\t\t\thasSolution = true;\r\n\t\t\t\t\t\t\t\tSystem.out.println(x + " " + y + " " + z);\r\n\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t\tif (!hasSolution) {\r\n\t\t\t\tSystem.out.println("No solution.");\r\n\t\t\t}\r\n\r\n\t\t\tnumberOfTestCases--;\r\n\t\t}\r\n\r\n\t}\r\n}\r\n',
    index: 554,
  },
  {
    title: "Splitting Numbers",
    category: "uva",
    id: "SplittingNumbers_uva",
    algorithm:
      '// We define the operation of splitting\n// a binary number n into two numbers\n// a(n), b(n) as follows. Let 0 ≤ i1 < i2 <\n// . . . < ik be the indices of the bits (with\n// the least significant bit having index 0) in\n// n that are 1. Then the indices of the bits\n// of a(n) that are 1 are i1, i3, i5, . . . and the\n// indices of the bits of b(n) that are 1 are\n// i2, i4, i6, . . .\n// For example, if n is 110110101 in binary\n// then, again in binary, we have a =\n// 010010001 and b = 100100100.\n\n// Input\n    // Each test case consists of a single integer\n    // n between 1 and 231 − 1 written in standard decimal (base 10) format on a single line. Input is\n    // terminated by a line containing ‘0’ which should not be processed.\n\n// Output\n    // The output for each test case consists of a single line, containing the integers a(n) and b(n) separated\n    // by a single space. Both a(n) and b(n) should be written in decimal format.\n\n// Sample Input\n// 6\n// 7\n// 13\n// 0\n// Sample Output\n// 2 4\n// 5 2\n// 9 4\n\n/**\n * Created by kdn251 on 2/10/17.\n */\n\nimport java.util.*;\nimport java.io.*;\n\npublic class SplittingNumbers {\n\n    public static void main(String args[]) throws Exception {\n\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        String line;\n\n        while((line = br.readLine()) != null) {\n\n            //read number\n            int number = Integer.parseInt(line);\n\n            //terminate if number is zero\n            if(number == 0) break;\n\n            //intialize variables\n            int count = 0;\n            int a = 0;\n            int b = 0;\n\n            while(number > 0) {\n\n\n                //get lowest set bit\n                int currentBit = number ^ (number & (number - 1));\n\n\n                //if count is even or a with current bit\n                if(count % 2 == 0) {\n\n                    a |= currentBit;\n\n                }\n\n                //if count is odd or b with current bit\n                else {\n\n                    b |= currentBit;\n\n                }\n\n                //increment count\n                count++;\n\n                //clear lowest set bit for next iteration\n                number &= (number - 1);\n\n            }\n\n            //print a and b\n            System.out.println(a + " " + b);\n\n        }\n\n\n    }\n\n}\n',
    index: 555,
  },
  {
    title: "The Huge One",
    category: "uva",
    id: "TheHugeOne_uva",
    algorithm:
      '/**\r\n * Your girlfriend Marry has some problems with programming task teacher gave her. Since you have\r\n * the great programming skills it won’t be a problem for you to help her. And certainly you don’t want\r\n * Marry to have her time spent on this task because you were planning to go to the cinema with her this\r\n * weekend. If you accomplish this task Marry will be very grateful and will definitely go with you to the\r\n * cinema and maybe even more. So it’s up to you now\r\n * That’s the task she was given:\r\n * Number 0 ≤ M ≤ 101000 is given, and a set S of different numbers from the interval [1;12]. All\r\n * numbers in this set are integers. Number M is said to be wonderful if it is divisible by all numbers in\r\n * set S. Find out whether or not number M is wonderful.\r\n * Input\r\n * First line of input data contains number N (0 < N ≤ 2000). Then N tests follow each described on\r\n * two lines. First line of each test case contains number M. Second line contains the number of elements\r\n * in a set S followed by a space and the numbers in the set. Numbers of this set are separated by a space\r\n * character.\r\n * Output\r\n * Output one line for each test case: ‘M - Wonderful.’, if the number is wonderful or ‘M - Simple.’\r\n * if it is not. Replace M character with the corresponding number. Refer output data for details.\r\n * Sample Input\r\n * 4\r\n * 0\r\n * 12 1 2 3 4 5 6 7 8 9 10 11 12\r\n * 379749833583241\r\n * 1 11\r\n * 3909821048582988049\r\n * 1 7\r\n * 10\r\n * 3 1 2 9\r\n * Sample Output\r\n * 0 - Wonderful.\r\n * 379749833583241 - Wonderful.\r\n * 3909821048582988049 - Wonderful.\r\n * 10 - Simple.\r\n */\r\n//https://uva.onlinejudge.org/index.php?option=com_onlinejudge&Itemid=8&page=show_problem&problem=2319\r\n\r\nimport java.math.BigInteger;\r\nimport java.util.Scanner;\r\n\r\npublic class TheHugeOne {\r\n\r\n\tpublic static void main(String[] args) {\r\n\t\tScanner input = new Scanner(System.in);\r\n\t\tint numberOfTestCases = input.nextInt();\r\n\t\twhile (numberOfTestCases != 0) {\r\n\t\t\tBigInteger M = input.nextBigInteger();\r\n\t\t\tinput.nextLine();\r\n\t\t\tString[] elementsLine = input.nextLine().split(" ");\r\n\t\t\tboolean found = false;\r\n\t\t\tfor (int i = 1; i < elementsLine.length; i++) {\r\n\t\t\t\tBigInteger number = new BigInteger(elementsLine[i]);\r\n\t\t\t\tif (!M.mod(number).equals(BigInteger.ZERO)) {\r\n\t\t\t\t\tSystem.out.println(M + " - Simple.");\r\n\t\t\t\t\tfound = true;\r\n\t\t\t\t\tbreak;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t\tif (!found) {\r\n\t\t\t\tSystem.out.println(M + " - Wonderful.");\r\n\t\t\t}\r\n\t\t\tnumberOfTestCases--;\r\n\t\t}\r\n\t}\r\n}\r\n',
    index: 556,
  },
  {
    title: "The Last Non Zero Digit",
    category: "uva",
    id: "TheLastNonZeroDigit_uva",
    algorithm:
      "\n/**\n * In this problem you will be given two decimal integer number N, M. You will have to find the last\n * non-zero digit of the P\n * N\n * M . This means no of permutations of N things taking M at a time.\n * Input\n * The input file contains several lines of input. Each line of the input file contains two integers N\n * (0 ≤ N ≤ 20000000), M (0 ≤ M ≤ N). Input is terminated by end-of-file.\n * Output\n * For each line of the input file you should output a single digit, which is the last non-zero digit of P\n * N\n * M .\n * For example, if P\n * N\n * M is 720 then the last non-zero digit is 2. So in this case your output should be 2.\n * Sample Input\n * 10 10\n * 10 5\n * 25 6\n * Sample Output\n * 8\n * 4\n * 2\n */\n\n//https://uva.onlinejudge.org/index.php?option=onlinejudge&page=show_problem&problem=1153\n\nimport java.util.Scanner;\n\npublic class TheLastNonZeroDigit {\n\n\tpublic static void main(String[] args) {\n\t\tScanner input = new Scanner(System.in);\n\t\twhile (input.hasNext()) {\n\t\t\tlong n = input.nextInt();\n\t\t\tlong m = input.nextInt();\n\t\t\tlong product = 1;\n\t\t\tfor (long i = (n - m + 1); i < n + 1; i++) {\n\t\t\t\tproduct = product * i;\n\t\t\t\twhile (product % 10 == 0) {\n\t\t\t\t\tproduct = product / 10;\n\t\t\t\t}\n\t\t\t\tproduct = product % (long) (Math.pow(10, 11));\n\t\t\t}\n\t\t\tString number = product + \"\";\n\t\t\tfor (int i = number.length() - 1; i > -1; i--) {\n\t\t\t\tchar c = number.charAt(i);\n\t\t\t\tif (c != '0') {\n\t\t\t\t\tSystem.out.println(c);\n\t\t\t\t\tbreak;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n\n}",
    index: 557,
  },
  {
    title: "The Settlers Of Catan",
    category: "uva",
    id: "TheSettlersOfCatan_uva",
    algorithm:
      '// Within Settlers of Catan, the 1995 German game of the year, players attempt to dominate an island\n// by building roads, settlements and cities across its uncharted wilderness.\n// You are employed by a software company that just has decided to develop a computer version of\n// this game, and you are chosen to implement one of the game’s special rules:\n// When the game ends, the player who built the longest road gains two extra victory points.\n// The problem here is that the players usually build complex road networks and not just one linear\n// path. Therefore, determining the longest road is not trivial (although human players usually see it\n// immediately).\n// Compared to the original game, we will solve a simplified problem here: You are given a set of nodes\n// (cities) and a set of edges (road segments) of length 1 connecting the nodes.\n// The longest road is defined as the longest path within the network that doesn’t use an edge twice.\n// Nodes may be visited more than once, though.\n\n// Input\n//     The input file will contain one or more test cases.\n//     The first line of each test case contains two integers: the number of nodes n (2 ≤ n ≤ 25) and the\n//     number of edges m (1 ≤ m ≤ 25). The next m lines describe the m edges. Each edge is given by the\n//     numbers of the two nodes connected by it. Nodes are numbered from 0 to n − 1. Edges are undirected.\n//     Nodes have degrees of three or less. The network is not neccessarily connected.\n//     Input will be terminated by two values of 0 for n and m.\n\n// Output\n//     For each test case, print the length of the longest road on a single line.\n\n// Sample Input\n// 3 2\n// 0 1\n// 1 2\n// 15 16\n// 0 2\n// 1 2\n// 2 3\n// 3 4\n// 3 5\n// 4 6\n// 5 7\n// 6 8\n// 7 8\n// 7 9\n// 8 10\n// 9 11\n// 10 12\n// 11 12\n// 10 13\n// 12 14\n// 0 0\n// Sample Output\n// 2\n// 12\n\nimport java.io.*;\n\n/**\n * Created by kdn251 on 2/20/17.\n */\npublic class TheSettlersOfCatan {\n\n    public static int[][] matrix = new int[30][30];\n    public static int answer;\n\n    public static void main(String args[]) throws Exception {\n\n        //initialize buffered reader\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        String line;\n\n        //iterate while current line is not equal to 0 0\n        while(!(line = br.readLine()).equals("0 0")) {\n\n            //initialize number of nodes and edges\n            int nodes = Integer.parseInt(line.split(" ")[0]);\n            int edges = Integer.parseInt(line.split(" ")[1]);\n\n            //iterate through all edges\n            for(int i = 0; i < edges; i++) {\n\n                //get edge between node x and node y\n                String[] current = br.readLine().split(" ");\n                int x = Integer.parseInt(current[0]);\n                int y = Integer.parseInt(current[1]);\n\n                //mark edge\n                matrix[x][y] = 1;\n                matrix[y][x] = 1;\n\n            }\n\n            //initialize answer to zero\n            answer = 0;\n\n            //dfs on every node\n            for(int i = 0; i < nodes; i++) {\n\n                dfs(i, 0, nodes);\n\n            }\n\n            //print answer\n            System.out.println(answer);\n\n            //reset graph\n            matrix = new int[30][30];\n\n        }\n\n    }\n\n    public static void dfs(int nd, int l, int nodes) {\n\n        //update answer if l is larger than current answer\n        if(l > answer) {\n\n            answer = l;\n\n        }\n\n        for(int i = 0; i < nodes; i++) {\n\n            if(matrix[nd][i] > 0) {\n                //ensure that edge is not counted twice (like marking as "visited")\n                matrix[nd][i] = 0;\n                matrix[i][nd] = 0;\n                //continue traversing graph and add 1 to count\n                dfs(i, l + 1, nodes);\n                //set current edge again in case node further into graph can reach it\n                matrix[nd][i] = 1;\n                matrix[i][nd] = 1;\n\n            }\n\n        }\n\n    }\n\n}\n\n//source: https://github.com/morris821028/UVa/blob/master/volume005/539%20-%20The%20Settlers%20of%20Catan.cpp\n',
    index: 558,
  },
  {
    title: "Very Easy",
    category: "uva",
    id: "VeryEasy_uva",
    algorithm:
      "/**\r\n * Most of the times, the students of Computer Science & Engineering of BUET deal with bogus, tough and\r\n * very complex formulae. That is why, sometimes, even for a easy problem they think very hard and make\r\n * the problem much complex to solve. But, the team members of the team “BUET PESSIMISTIC”\r\n * are the only exceptions. Just like the opposite manner, they treat every hard problem as easy and so\r\n * cannot do well in any contest. Today, they try to solve a series but fail for treating it as hard. Let\r\n * them help.\r\n * Input\r\n * Just try to determine the answer for the following series\r\n * ∑ \r\n * N\r\n * i=1\r\n * iAi\r\n * You are given the value of integers N and A (1 ≤ N ≤ 150, 0 ≤ A ≤ 15).\r\n * Output\r\n * For each line of the input, your correct program should output the integer value of the sum in separate\r\n * lines for each pair of values of N and A.\r\n * Sample Input\r\n * 3 3\r\n * 4 4\r\n * Sample Output\r\n * 102\r\n * 1252\r\n */\r\n\r\n//https://uva.onlinejudge.org/index.php?option=onlinejudge&Itemid=99999999&page=show_problem&category=&problem=1464\r\n\r\n\r\nimport java.math.BigInteger;\r\nimport java.util.Scanner;\r\n\r\npublic class VeryEasy {\r\n\r\n\tpublic static void main(String[] args) {\r\n\t\tScanner input = new Scanner(System.in);\r\n\t\twhile (input.hasNext()) {\r\n\t\t\tBigInteger sum = BigInteger.ZERO;\r\n\t\t\tint N = input.nextInt();\r\n\t\t\tint A = input.nextInt();\r\n\t\t\tBigInteger aAsBigInteger = BigInteger.valueOf(A);\r\n\t\t\tBigInteger product = BigInteger.ONE;\r\n\t\t\tfor (int i = 1; i < N + 1; i++) {\r\n\t\t\t\tproduct = BigInteger.valueOf(i).multiply(aAsBigInteger.pow(i));\r\n\t\t\t\tsum = sum.add(product);\r\n\t\t\t}\r\n\t\t\tSystem.out.println(sum);\r\n\t\t}\r\n\t}\r\n}\r\n",
    index: 559,
  },
  {
    title: "Virtual Friends",
    category: "uva",
    id: "VirtualFriends_uva",
    algorithm:
      '// These days, you can do all sorts of things online. For example, you can use various websites to make\n// virtual friends. For some people, growing their social network (their friends, their friends’ friends, their\n// friends’ friends’ friends, and so on), has become an addictive hobby. Just as some people collect stamps,\n// other people collect virtual friends.\n// Your task is to observe the interactions on such a website and keep track of the size of each person’s\n// network.\n// Assume that every friendship is mutual. If Fred is Barney’s friend, then Barney is also Fred’s friend.\n\n// Input\n    // The first line of input contains one integer specifying the number of test cases to follow. Each test case\n    // begins with a line containing an integer F, the number of friendships formed, which is no more than\n    // 100 000. Each of the following F lines contains the names of two people who have just become friends,\n    // separated by a space. A name is a string of 1 to 20 letters (uppercase or lowercase).\n\n// Output\n    // Whenever a friendship is formed, print a line containing one integer, the number of people in the social\n    // network of the two people who have just become friends\n\n// Sample Input\n// 1\n// 3\n// Fred Barney\n// Barney Betty\n// Betty Wilma\n// Sample Output\n// 2\n// 3\n// 4\n\nimport java.io.*;\nimport java.util.Arrays;\nimport java.util.HashMap;\n\n/**\n * Created by kdn251 on 3/7/17.\n */\npublic class VirtualFriends {\n\n    public static int[] people = new int[1000001];\n    public static int[] relationships = new int[1000001];\n\n    public static void main(String args[]) throws Exception {\n        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n        int cases = Integer.parseInt(br.readLine());\n        while(cases-- > 0) {\n            startUnion(people.length);\n            HashMap<String, Integer> map = new HashMap<String, Integer>();\n            int friendships = Integer.parseInt(br.readLine());\n            int numberOfPeople = 0;\n            for(int i = 0; i < friendships; i++) {\n                String[] line = br.readLine().split("\\\\s+");\n                String x = line[0];\n                String y = line[1];\n                if (x.equals(y)) {\n                    System.out.println(1);\n                    continue;\n                }\n                if (!map.containsKey(x)) {\n                    map.put(x, ++numberOfPeople);\n                }\n                if (!map.containsKey(y)) {\n                    map.put(y, ++numberOfPeople);\n                }\n\n                //print answer for current test case\n                System.out.println(union(map.get(x), map.get(y)));\n            }\n        }\n    }\n\n    public static void startUnion(int numberOfPeople) {\n        for(int i = 0; i < numberOfPeople; i++) {\n            //initialize each individual person\n            people[i] = i;\n\n            //each person initially has a group of one (themselves)\n            relationships[i] = 1;\n        }\n    }\n\n    public static int union(int person, int friend) {\n        //find parents in tree\n        person = find(person);\n        friend = find(friend);\n\n        if(person != friend) {\n            //add connection between person and friend\n            //find larger group of the two and make sure both person and friend point to it\n            if(relationships[person] > relationships[friend]) {\n                relationships[person] += relationships[friend];\n                people[friend] = person;\n                return relationships[person];\n            }\n\n            else {\n                relationships[friend] += relationships[person];\n                people[person] = friend;\n                return relationships[friend];\n            }\n        }\n        return relationships[person];\n    }\n\n    public static int find(int person) {\n        //traverse parents of tree if possible\n        if(people[person] != person) {\n            people[person] = find(people[person]);\n        }\n        return people[person];\n    }\n}\n\n',
    index: 560,
  },
  {
    title: "What Base Is This",
    category: "uva",
    id: "WhatBaseIsThis_uva",
    algorithm:
      '/**\r\n * In positional notation we know the position of a digit indicates the weight of that digit toward the\r\n * value of a number. For example, in the base 10 number 362 we know that 2 has the weight 100\r\n * , 6\r\n * has the weight 101\r\n * , and 3 has the weight 102\r\n * , yielding the value 3 × 102 + 6 × 101 + 2 × 100\r\n * , or just\r\n * 300 + 60 + 2. The same mechanism is used for numbers expressed in other bases. While most people\r\n * assume the numbers they encounter everyday are expressed using base 10, we know that other bases\r\n * are possible. In particular, the number 362 in base 9 or base 14 represents a totally different value than\r\n * 362 in base 10.\r\n * For this problem your program will presented with a sequence of pairs of integers. Let’s call the\r\n * members of a pair X and Y . What your program is to do is determine the smallest base for X and the\r\n * smallest base for Y (likely different from that for X) so that X and Y represent the same value.\r\n * Consider, for example, the integers 12 and 5. Certainly these are not equal if base 10 is used for\r\n * each. But suppose 12 was a base 3 number and 5 was a base 6 number? 12 base 3 = 1 × 3\r\n * 1 + 2 × 3\r\n * 0\r\n * ,\r\n * or 5 base 10, and certainly 5 in any base is equal to 5 base 10. So 12 and 5 can be equal, if you select\r\n * the right bases for each of them!\r\n * Input\r\n * On each line of the input data there will be a pair of integers, X and Y , separated by one or more blanks;\r\n * leading and trailing blanks may also appear on each line, are are to be ignored. The bases associated\r\n * with X and Y will be between 1 and 36 (inclusive), and as noted above, need not be the same for X and\r\n * Y . In representing these numbers the digits 0 through 9 have their usual decimal interpretations. The\r\n * uppercase alphabetic characters A through Z represent digits with values 10 through 35, respectively.\r\n * Output\r\n * For each pair of integers in the input display a message similar to those shown in the examples shown\r\n * below. Of course if the two integers cannot be equal regardless of the assumed base for each, then print\r\n * an appropriate message; a suitable illustration is given in the examples.\r\n * Sample Input\r\n * 12 5\r\n * 10 A\r\n * 12 34\r\n * 123 456\r\n * 1 2\r\n * 10 2\r\n * Sample Output\r\n * 12 (base 3) = 5 (base 6)\r\n * 10 (base 10) = A (base 11)\r\n * 12 (base 17) = 34 (base 5)\r\n * 123 is not equal to 456 in any base 2..36\r\n * 1 is not equal to 2 in any base 2..36\r\n * 10 (base 2) = 2 (base 3)\r\n */\r\n\r\n//https://uva.onlinejudge.org/index.php?option=com_onlinejudge&Itemid=8&page=show_problem&category=&problem=279\r\n\r\nimport java.math.BigInteger;\r\nimport java.util.Scanner;\r\n\r\npublic class WhatBaseIsThis {\r\n\r\n\tpublic static void main(String[] args) {\r\n\t\tScanner input = new Scanner(System.in);\r\n\t\twhile (input.hasNext()) {\r\n\t\t\tString x = input.next();\r\n\t\t\tString y = input.next();\r\n\t\t\tboolean found = false;\r\n\t\t\tfor (int i = 2; i < 37 && !found; i++) {\r\n\t\t\t\tBigInteger xConvertedToBase;\r\n\t\t\t\ttry {\r\n\t\t\t\t\txConvertedToBase = new BigInteger(x, i);\r\n\t\t\t\t} catch (Exception e) {\r\n\t\t\t\t\tcontinue;\r\n\t\t\t\t}\r\n\t\t\t\tfor (int j = 2; j < 37; j++) {\r\n\t\t\t\t\tBigInteger yConvertedToBase;\r\n\t\t\t\t\ttry {\r\n\t\t\t\t\t\tyConvertedToBase = new BigInteger(y, j);\r\n\t\t\t\t\t} catch (Exception e) {\r\n\t\t\t\t\t\tcontinue;\r\n\t\t\t\t\t}\r\n\t\t\t\t\tif (xConvertedToBase.equals(yConvertedToBase)) {\r\n\t\t\t\t\t\tSystem.out.println(x + " (base " + i + ") = " + y\r\n\t\t\t\t\t\t\t\t+ " (base " + j + ")");\r\n\t\t\t\t\t\tfound = true;\r\n\t\t\t\t\t\tbreak;\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t\tif (!found) {\r\n\t\t\t\tSystem.out.println(x + " is not equal to " + y\r\n\t\t\t\t\t\t+ " in any base 2..36");\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n}\r\n',
    index: 561,
  },
  {
    title: "Who Said Crisis",
    category: "uva",
    id: "WhoSaidCrisis_uva",
    algorithm:
      "/**\r\n * The company Assistance for Critical Moments (ACM) is helping other companies to overcome the\r\n * current economical crisis. As experts in computing machinery, their job is to calculate the cost/benefit\r\n * balance of the other companies. They receive two numbers, indicating the total amount of benefits and\r\n * costs, and they have to compute the final balance.\r\n * You have to solve the complex business problem of computing balances. You are given two positive\r\n * integer numbers, corresponding to the benefits and the costs. You have to obtain the total balance,\r\n * i.e., the difference between benefits and costs.\r\n * Input\r\n * The first line of the input contains an integer indicating the number of test cases.\r\n * For each test case, there is a line with two positive integer numbers, A and B, corresponding to the\r\n * benefits and the costs, respectively. Both numbers are between 0 and a googol (10100) to the power of\r\n * a hundred.\r\n * Output\r\n * For each test case, the output should consist of a line indicating the balance: A − B.\r\n * Sample Input\r\n * 4\r\n * 10 3\r\n * 4 9\r\n * 0 8\r\n * 5 2\r\n * Sample Output\r\n * 7\r\n * -5\r\n * -8\r\n * 3\r\n */\r\n\r\n//https://uva.onlinejudge.org/index.php?option=onlinejudge&Itemid=99999999&page=show_problem&category=&problem=2443\r\n\r\nimport java.math.BigInteger;\r\nimport java.util.Scanner;\r\n\r\npublic class WhoSaidCrisis {\r\n\r\n\tpublic static void main(String[] args) {\r\n\t\tScanner input = new Scanner(System.in);\r\n\t\tint numberOfTestCases = input.nextInt();\r\n\t\twhile (numberOfTestCases != 0) {\r\n\t\t\tBigInteger first = input.nextBigInteger();\r\n\t\t\tBigInteger second = input.nextBigInteger();\r\n\t\t\tSystem.out.println(first.subtract(second));\r\n\t\t\tnumberOfTestCases--;\r\n\t\t}\r\n\t}\r\n}\r\n",
    index: 562,
  },
];
