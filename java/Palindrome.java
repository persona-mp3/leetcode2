public class Palindrome {
  public static void main(String[] args) {
    String str = "sus";
    boolean isPalindrome = IsPalindrome(str, 0, str.length() - 1);
  }

  static boolean IsPalindrome(String str, int start, int end){
    /*
     * so we need to have to pointers, one at the begining and one at the end
     * if the characters at both index are the same, we continue and move on, 
     * until start and end are both at the same position or are equal, we can say true 
     * else > if at any point both characters differ, we call it quits
     *
     * */
    if (str.length() < 2) {
      return true;
    }

    if (start >= end) {
      System.out.printf("the string is a palindrome, ladies and gentle men || %d | %d", start, end);
      return true;
    }

    if(str.charAt(start) != str.charAt(end)){
      System.out.println("string is not a palindrome");
      return false;
    }

    if(str.charAt(start) == str.charAt(end)){
      IsPalindrome(str, start+1, end-1);
    }
    return false;
  }
}
