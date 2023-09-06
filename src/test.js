/* import { StackActions, NavigationActions } from 'react-navigation';
export default function ProductScreen({ navigation }) {
    const logOutPress = () => {
        try {
            auth()
                .signOut()
                .then(() => {
                    const resetAction = StackActions.reset({
                        index: 0,
                        actions: [
                            NavigationActions.navigate({ routeName: 'Login' }),
                        ],
                    });
                    navigation.dispatch(resetAction);
                    alert('You have signed out');
                });
        } catch (error) {
            console.log('err', error);
        }
    };

    return (
        <TouchableOpacity onPress={() => logOutPress()}>
            <Text style={styles.buttonText}>Log Out</Text>
        </TouchableOpacity>
    );
}
 */
