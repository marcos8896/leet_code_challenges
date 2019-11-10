/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 * Details: https://leetcode.com/problems/maximum-depth-of-binary-tree/
 *
 *
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function( root ) {
  if( root === null ) return 0;
  return Math.max( maxDepth( root.left ), maxDepth( root.right ) ) + 1;
};

maxDepth();