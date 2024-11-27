export interface NetworkResponse {
	message: string;
	status?: number;
}

export interface NetworkError extends NetworkResponse {
	error: any;
}

export interface NetworkSuccess<T = any> extends NetworkResponse {
	data: T;
	success: boolean;
}

export interface LoginResponse {
	data:{
		token: string;
	},
	message: string;
	success: boolean;
  }

