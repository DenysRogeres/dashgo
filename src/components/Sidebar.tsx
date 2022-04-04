import { Box, Link, Stack, Text, Icon } from "@chakra-ui/react";
import { RiContactsLine, RiDashboardLine } from "react-icons/ri";

export function Sidebar() {
    return (
        <Box as="aside" w="64" mr="8">
            <Stack spacing="12" align="flex-start">
                <Box>
                    <Text fontWeight="bold" color="gray.400" fontSize="small">GERAL</Text>
                    <Stack spacing="4" mt="6" align="stretch">
                        <Link display="flex">
                            <Icon as={RiDashboardLine} my="auto"/>
                            <Text ml="4" fontWeight="medium" my="auto">Dashboard</Text>
                        </Link>

                        <Link display="flex">
                            <Icon as={RiContactsLine} my="auto"/>
                            <Text ml="4" fontWeight="medium" my="auto">Usuários</Text>
                        </Link>
                    </Stack>
                </Box>
                <Box>
                    <Text fontWeight="bold" color="gray.400" fontSize="small">AUTOMAÇÃO</Text>
                    <Stack spacing="4" mt="6" align="stretch">
                        <Link display="flex">
                            <Icon as={RiDashboardLine} my="auto"/>
                            <Text ml="4" fontWeight="medium" my="auto">Formulários</Text>
                        </Link>

                        <Link display="flex">
                            <Icon as={RiContactsLine} my="auto"/>
                            <Text ml="4" fontWeight="medium" my="auto">Automação</Text>
                        </Link>
                    </Stack>
                </Box>
            </Stack>
        </Box>
    )
}