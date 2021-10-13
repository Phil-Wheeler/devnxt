using System;

public class Presenter
{
    public String Name { get; set; }

    public String Title { get; set; }

    public Social Social { get; set; }

    public String CompanyLink { get; set;}

    public String Bio { get; set; }
    public Talk Talk { get; set; }

    public String Image { get; set; }
}

public class Social
{
    public string Type { get; set; }
    public string Handle { get; set; }
}

public class Talk
{
    public string Title { get; set; }
    public string Abstract { get; set; }
    public int Order { get; set; }
}
