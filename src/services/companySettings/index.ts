import axios from 'axios';
import { BASE_URL } from '@/lib/constants/enviroment';
import { NetworkSuccess } from '@/types/NetworkResponse.types';
import { CompanySettings } from '@/types/CompanySettings.type';

const COMPANY_END_POINT = BASE_URL + 'companySettings';

const createSettings = async ({}): Promise<NetworkSuccess> => {
	try {
		const token = localStorage.getItem('token');
		const response = await axios.post<NetworkSuccess>(`${COMPANY_END_POINT}`, {
			
		}, {
			headers: {
				'Authorization': `Bearer ${token}`
			}
		});
		return response.data;
	} catch (error) {
		throw error;
	}
}

const getAllSettings = async (): Promise<CompanySettings> => {
    try {
        const token = localStorage.getItem('token');
        if (!token) {
            throw new Error('No se encontró el token en el almacenamiento local.');
        }

        const response = await axios.get<{ data: CompanySettings }>(COMPANY_END_POINT, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });

        return response.data.data;
    } catch (error) {
        throw error;
    }
}


const updateSettings = async (isWsspActive: boolean): Promise<NetworkSuccess> => {
    try {
        const token = localStorage.getItem('token');
        const response = await axios.patch<NetworkSuccess>(
            `${COMPANY_END_POINT}`,
            { isWsspActive },
            {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }
        );
        return response.data;
    } catch (error) {
        throw error;
    }
};

export {
	createSettings,
	getAllSettings,
	updateSettings,
}