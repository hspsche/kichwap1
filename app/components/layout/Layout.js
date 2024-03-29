import { Box, useColorMode } from '@chakra-ui/react'
import { Header } from './Header'

const Layout = ({ children, setSelectedCard }) => {

    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <Box
            w='100%'
            h='100vh'
            display='flex'
            flexDir='column'
            justifyContent='center'
            alignItems='center'
        >
            <Header 
                imgSrc='/assets/img/logo2.png'
                setSelectedCard={setSelectedCard}
            />
            <Box
                bg={colorMode === 'light' ? '' : '#141414'}
                w='100%'
                h='100%'
                mt={{base: '15%', md: '6%', xl: '3%'}}
                //h={{base: '92%', md: '97%', xl: '97%'}}
                overflowY='auto'
                display='flex'
                flexDir='column'
                justifyContent='center'
                alignItems='center'
            >
                { children }
            </Box>
        </Box>
    );
}

export { Layout };