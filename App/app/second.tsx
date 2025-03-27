import { useLocalSearchParams, useNavigation } from "expo-router";
import { useLayoutEffect, useState } from "react";
import { View, Text, Button, TextInput, TouchableOpacity, FlatList, StyleSheet } from "react-native";
import * as DocumentPicker from 'expo-document-picker';

export default function SecondScreen() {
  const { username } = useLocalSearchParams(); // Retrieve username from params
  const navigation = useNavigation();
  const [selectedDocuments, setSelectedDocuments] = useState<DocumentPicker.DocumentPickerAsset[]>([]);

  const pickDocuments = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        multiple: true, // Allows the user to select any file 
      });

      if (!result.canceled) {
        const successResult = result as DocumentPicker.DocumentPickerSuccessResult;

        // To limit the amount of documents that is added to the array "selectedDocuments"
        if (selectedDocuments.length + successResult.assets.length <= 1) {
          setSelectedDocuments((prevSelectedDocuments) => [
            ...prevSelectedDocuments,
            ...successResult.assets,
          ]);
        } else {
          console.log("Maximum of 1 document allowed.");
        }
      } else {
        console.log("Document selection cancelled.");
      }
    } catch (error) {
      console.log("Error picking documents:", error);
    }
  };

  // Additional code snippet to get the document type 
  const getFileType = (fileName: string): string => {
    const extension = fileName.split('.').pop()?.toLowerCase();
    switch (extension) {
      case 'pdf':
        return 'PDF';
      case 'doc':
      case 'docx':
        return 'Word';
      case 'xls':
      case 'xlsx':
        return 'Excel';
      // You can add more cases to fit your criteria
      default:
        return 'Unknown';
    }
  };

  // Remove a document from the array 
  const removeDocument = (index: number) => {
    setSelectedDocuments((prevSelectedDocuments) =>
      prevSelectedDocuments.filter((_, i) => i !== index)
    );
  };

  // Render the selected documents in a list
  const renderItem = ({ item, index }: { item: DocumentPicker.DocumentPickerAsset; index: number }) => (
    <View style={styles.itemContainer}>
      <Text>{item.name} - {getFileType(item.name)}</Text>
      <Button title="Remove" onPress={() => removeDocument(index)} />
    </View>
  );

  // Dynamically set the title
  useLayoutEffect(() => {
    if (username) {
      navigation.setOptions({ title: `Welcome, ${username}` });
    }
  }, [navigation, username]);

  const [inputValue, setInputValue] = useState<string>('');

  const handlePress = () => {
    // Convert the input to a number and log it to the console
    const numberValue = parseFloat(inputValue);

    if (!isNaN(numberValue)) {
      console.log('The number is:', numberValue);
    } else {
      console.log('Invalid input, please enter a valid number.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome, {username ? username : "Guest"}!</Text>
      
      {/* First Section (Input and Button) */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={inputValue}
          onChangeText={setInputValue}
          placeholder="Enter your desired heart rate"
          keyboardType="numeric"
        />
        <TouchableOpacity onPress={handlePress} style={styles.button}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>

      {/* Middle Section (Text for Document Selection) */}
      <Text style={styles.title}>Select Run Route</Text>

      {/* Second Section (Document Picker and List) */}
      <View style={styles.bottomContainer}>
        <Button title="Pick Documents" onPress={pickDocuments} />
        <FlatList
          data={selectedDocuments}
          renderItem={renderItem}
          keyExtractor={(item) => item.uri}
          style={styles.list}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between', // Distribute the elements evenly vertically
    alignItems: 'center',
    padding: 20,
  },
  inputContainer: {
    flexDirection: 'row', // Align TextInput and Button in a row
    justifyContent: 'space-between',
    width: '100%',
    marginVertical: 10, // Add space vertically between input and button
    flex: 1, // First section takes up roughly 1/3 of the screen
  },
  bottomContainer: {
    flex: 2, // Second section takes up roughly 2/3 of the screen
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    marginTop: 20,
  },
  input: {
    width: '75%', // Adjust width of TextInput to fit with button
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    backgroundColor: 'white',
  },
  button: {
    width: '22%', // Adjust width of button to fit within the row
    height: 50,
    backgroundColor: '#007BFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20, // Add space between title and input section
  },
  list: {
    marginTop: 20, // Add space above the list of documents
    width: '100%',
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15, // Add space between document items
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
  },
});
