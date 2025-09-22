public class JadenCase {
  public static void main(String[] args) {
    String s1 = "how is the mirror real, if you have eyes that don't exist";
    String s2 = "corruption, is only bad, when i am not involved - a rather profoud man, once said";
    ToJadenCase(s1);
  }
  
  static String ToJadenCase(String s) {
    String[] words = s.split(" ");
    String result = "";

    for (String word : words) {
      result += Character.toUpperCase(word.charAt(0)) + word.substring(1) + " ";
    }

    System.out.println(result);

    return "mayonaka";
  }
}
