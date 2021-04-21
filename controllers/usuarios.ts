import { Request, Response } from 'express';

export const getUsuarios = (req: Request, res: Response) => {
    res.json({
        msg: 'getUsuarios'
    })
}
export const getUsuario = (req: Request, res: Response) => {
    const { id } = req.params;
    res.json({
        msg: 'getUsuarios',
        id
    })
}
export const postUsuario = (req: Request, res: Response) => {
    const { body } = req;
    res.json({
        msg: 'postUsuario',
        body
    })
}
export const putUsuario = (req: Request, res: Response) => {
    const { body } = req;
    const { id } = req.params;
    res.json({
        msg: 'putUsuario',
        body
    })
}
export const deleteUsuario = (req: Request, res: Response) => {
    const { id } = req.params;
    res.json({
        msg: 'delete Usuario',
        id
    })
}



