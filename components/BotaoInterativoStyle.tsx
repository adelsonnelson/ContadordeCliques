import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({

       button: {
        alignItems: 'center',
        justifyContent: 'center',
        minWidth: 200,
        paddingHorizontal: 32,
        borderRadius: 4,
        paddingVertical: 12,
        minHeight: 53,
        elevation: 3,
        backgroundColor: '#d9534f', 
        marginTop: 20,
      },

      buttonText: {
          fontSize: 16,
          color: 'white',
          fontWeight: 'bold',
      },

      titulo: {
        fontSize: 18,
        color: 'black', 
        lineHeight: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 4,
      },
      container: {
        alignItems: 'center',
        justifyContent: 'center',
      },
      imageButtonContainer: {
          marginBottom: 30,
          borderRadius: 20,
          elevation: 5,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
      },
      buttonImage: {
          width: 200,
          height: 200,
          borderRadius: 20,
      },
    });