import { Categoria } from "./categoria";

export class Produto{
    id: number = 0;
    nome: string = '';
    preco: number = 0.0;
    quantidade: number = 0;
    descricao: string = '';
    foto: string = '';
    categoria: Categoria = new Categoria()

    public getId(): number {
        return this.id;
    }
    
    public setId(id: number): void {
        this.id = id;
    }
    
    public getNome(): string {
        return this.nome;
    }
    
    public setNome(nome: string): void {
        this.nome = nome;
    }
    
    public getPreco(): number {
        return this.preco;
    }
    
    public setPreco(preco: number): void {
        this.preco = preco;
    }
    
    public getQuantidade(): number {
        return this.quantidade;
    }
    
    public setQuantidade(quantidade: number): void {
        this.quantidade = quantidade;
    }
    
    public getDescricao(): string {
        return this.descricao;
    }
    
    public setDescricao(descricao: string): void {
        this.descricao = descricao;
    }
    
    public getFoto(): string {
        return this.foto;
    }
    
    public setFoto(foto: string): void {
        this.foto = foto;
    }
    
    public getCategoria(): Categoria {
        return this.categoria;
    }
    
    public setCategoria(categoria: Categoria): void {
        this.categoria = categoria;
    }
}
